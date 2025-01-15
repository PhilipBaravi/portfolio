"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingEffect from "./typingeffect";
import FinalMessage from "./final-message";
import AiImage from "../../../public/images/philip-ai-avatar.png";
import { useTranslations } from "next-intl";

interface Message {
  role: "user" | "ai";
  content: string;
  isTyping?: boolean;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPromptButtons, setShowPromptButtons] = useState(true);
  const t = useTranslations("Chat");

  // Prompt quick-buttons
  const PROMPT_BUTTONS = [
    { text: t("about.text"), prompt: t("about.prompt") },
    {
      text: t("projects.text"),
      prompt: t("projects.prompt"),
    },
    { text: t("skills.text"), prompt: t("skills.prompt") },
  ];

  // The special marker & final message
  const FINAL_MESSAGE_KEY = "__FINAL_MESSAGE__";

  // The maximum number of prompts that call the API
  const MAX_API_PROMPTS = 3;

  // Welcome message
  const WELCOME_MESSAGE = t("title");

  // ---------------------------------
  //  Prompt count from localStorage
  // ---------------------------------
  const [promptCount, setPromptCount] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const storedCount = localStorage.getItem("prompt_count");
      return storedCount ? parseInt(storedCount, 10) : 0;
    }
    return 0;
  });

  // Update localStorage whenever promptCount changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("prompt_count", promptCount.toString());
    }
  }, [promptCount]);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // If no messages, add a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "ai",
          content: WELCOME_MESSAGE,
          isTyping: true,
        },
      ]);
    }
  }, [messages.length, WELCOME_MESSAGE]);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Mark message as done typing
  const handleMessageComplete = (index: number) => {
    setMessages((prev) =>
      prev.map((msg, i) => (i === index ? { ...msg, isTyping: false } : msg))
    );
  };

  // Handle user input
  const handleSubmit = async (e: React.FormEvent | string) => {
    if (typeof e !== "string") {
      e.preventDefault();
    }
    const userInput = typeof e === "string" ? e : input;
    if (!userInput.trim()) return;

    setShowPromptButtons(false);

    // 1) Always show user's message in chat first
    const userMessage: Message = { role: "user", content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 2) Check how many prompts have been used
    if (promptCount >= MAX_API_PROMPTS) {
      // 3) If user already used 3 prompts, the next (4th) is final
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: FINAL_MESSAGE_KEY, // <-- store the special marker
          isTyping: false,
        },
      ]);
      setPromptCount(MAX_API_PROMPTS + 1); // e.g. 4
      return;
    }

    // Otherwise, call the API (promptCount < 3)
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: userInput }),
      });

      if (!response.ok) {
        throw new Error("Chatbot is temporarily disabled.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error("Chatbot is temporarily disabled.");
      }

      // Add AI message to chat
      const aiMessage: Message = {
        role: "ai",
        content: data.result,
        isTyping: true,
      };
      setMessages((prev) => [...prev, aiMessage]);

      // Increase count of used prompts
      setPromptCount((prev) => prev + 1);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Chatbot is temporarily disabled.",
          isTyping: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Render the chat
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="fixed bottom-8 right-8 rounded-full p-6 shadow-lg bg-stone-800 text-white hover:bg-stone-700 hover:text-white dark:bg-stone-700 dark:hover:bg-stone-600 transition-all duration-300 ease-in-out"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="
        w-full sm:max-w-md flex flex-col p-0 dark:bg-stone-900 border-0 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0
      "
        side="right"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <ScrollArea className="flex-grow px-6 py-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => {
              // If it's the final message marker, render <FinalMessage />
              if (message.content === FINAL_MESSAGE_KEY) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-start"
                  >
                    <Avatar className="mr-2 h-8 w-8">
                      <AvatarImage src={AiImage.src} alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white text-stone-900 shadow-sm dark:bg-stone-800 dark:text-stone-200">
                      <FinalMessage />
                    </div>
                  </motion.div>
                );
              }

              // Normal messages (user or AI typed)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "ai" && (
                    <Avatar className="mr-2 h-8 w-8">
                      <AvatarImage src={AiImage.src} alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user"
                        ? "bg-stone-900 text-white dark:bg-stone-700 dark:text-stone-50"
                        : "bg-white text-stone-900 shadow-sm dark:bg-stone-800 dark:text-stone-200"
                    }`}
                  >
                    {/* If still typing, show the typing effect */}
                    {message.isTyping ? (
                      <TypingEffect
                        text={message.content}
                        onComplete={() => handleMessageComplete(index)}
                      />
                    ) : (
                      message.content
                    )}
                  </div>
                  {message.role === "user" && (
                    <Avatar className="ml-2 h-8 w-8">
                      <AvatarFallback>
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              );
            })}

            {/* If the AI is "typing" a response */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage src={AiImage.src} alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white text-stone-900 shadow-sm dark:bg-stone-800 dark:text-stone-200">
                  <TypingEffect text="Typing..." />
                </div>
              </motion.div>
            )}

            {/* Quick prompt buttons appear only if we have just the welcome message */}
            {showPromptButtons &&
              messages.length === 1 &&
              !messages[0].isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 mt-4 justify-center"
                >
                  {PROMPT_BUTTONS.map((button, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSubmit(button.prompt)}
                      className="bg-white hover:bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700 dark:border-stone-700"
                    >
                      {button.text}
                    </Button>
                  ))}
                </motion.div>
              )}
          </div>
        </ScrollArea>

        <div className="flex-shrink-0 p-4 bg-stone-50 border-t dark:bg-stone-900 dark:border-stone-800">
          <form onSubmit={(e) => handleSubmit(e)} className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow bg-white dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-400"
              disabled={isLoading || promptCount >= 4}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || promptCount >= 4}
              className="bg-stone-800 hover:bg-stone-700 text-white dark:bg-stone-700 dark:hover:bg-stone-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
