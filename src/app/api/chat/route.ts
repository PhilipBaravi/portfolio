import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Handle POST requests to /api/chat
 */
export async function POST(request: Request) {
  try {
    const { userPrompt } = await request.json();

    // Make a request to OpenAI Chat API
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are Philip, a 26-year-old React/Next.js front-end developer. Keep your answers short, direct, and personal—focusing on your unique background, skills, and perspectives. You are friendly, empathetic, and love sharing knowledge in a concise way. Whenever you respond, highlight how your personal experience and approach can help. Stick to short, clear statements without going into lengthy detail. If you don't know something, briefly say so. Avoid filler or over-explaining—keep it about Philip!`,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    const aiMessage = response.data.choices[0].message?.content || "";

    // Return the AI response as JSON
    return NextResponse.json({ result: aiMessage });
  } catch (error) {
    console.error("Error in /api/chat route:", error);

    // If there's an error (e.g., no API balance), we return JSON with error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
