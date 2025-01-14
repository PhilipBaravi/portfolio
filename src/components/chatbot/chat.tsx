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

interface Message {
  role: "user" | "ai";
  content: string;
  isTyping?: boolean;
}

const PROMPT_BUTTONS = [
  { text: "Tell me about Philip", prompt: "Tell me about Philip" },
  { text: "Philip's projects", prompt: "What projects has Philip worked on?" },
  { text: "Philip's skills", prompt: "What are Philip's main skills?" },
];

const WELCOME_MESSAGE =
  "Hello! I'm Philip's AI assistant, powered by the google/flan-t5-base model. How can I assist you today?";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPromptButtons, setShowPromptButtons] = useState(true);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
  }, [messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageComplete = (index: number) => {
    setMessages((prev) =>
      prev.map((msg, i) => (i === index ? { ...msg, isTyping: false } : msg))
    );
  };

  const handleSubmit = async (e: React.FormEvent | string) => {
    if (typeof e !== "string") {
      e.preventDefault();
    }
    const userInput = typeof e === "string" ? e : input;
    if (!userInput.trim()) return;

    setShowPromptButtons(false);
    const userMessage: Message = { role: "user", content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // CHANGED: We are sending { userPrompt: userInput }
      // to match the server route's expectation
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: userInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      // CHANGED: The server returns { result: ... }
      // We read data.result instead of data.answer
      const aiMessage: Message = {
        role: "ai",
        content: data.result,
        isTyping: true,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Sorry, I encountered an error. Please try again.",
          isTyping: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

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
        className="w-full sm:max-w-md flex flex-col p-0 dark:bg-stone-900"
        side="right"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow px-6 py-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
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
                    <AvatarImage src="/philip-ai-avatar.png" alt="AI" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-stone-600 text-white dark:bg-stone-500 dark:text-stone-50"
                      : "bg-white text-stone-900 shadow-sm dark:bg-stone-800 dark:text-stone-200"
                  }`}
                >
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
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage src="/philip-ai-avatar.png" alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white text-stone-900 shadow-sm dark:bg-stone-800 dark:text-stone-200">
                  <TypingEffect text="Typing..." />
                </div>
              </motion.div>
            )}
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
          <form
            onSubmit={(e: React.FormEvent) => handleSubmit(e)}
            className="flex space-x-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow bg-white dark:bg-stone-800 dark:text-stone-200 dark:placeholder:text-stone-400"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading}
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
