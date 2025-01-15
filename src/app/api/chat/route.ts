import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import profileData from "./profile.json";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

/**
 * Detect the language of the user's input.
 */
const detectLanguage = (message: string): "spanish" | "english" | "other" => {
  const spanishRegex = /[ñáéíóúü¡¿]/i; // Checks for Spanish-specific characters
  if (spanishRegex.test(message)) {
    return "spanish";
  }
  const englishRegex = /^[A-Za-z0-9 .,!?'"-]+$/; // Checks for English characters
  if (englishRegex.test(message)) {
    return "english";
  }
  return "other";
};

/**
 * Generate a system message dynamically from profileData.
 */
const generateSystemMessage = (language: "spanish" | "english") => {
  const skills = Object.entries(profileData.skills)
    .map(([category, items]) => `${category}: ${items.join(", ")}`)
    .join("\n");

  const projects = profileData.projects
    .map(
      (project) =>
        `${project.name}: ${
          project.description
        } (Built with ${project.stack.join(", ")}).`
    )
    .join("\n");

  const experience = profileData.experience
    .map(
      (exp) =>
        `${exp.role} at ${exp.company} (${exp.duration}): ${exp.description}`
    )
    .join("\n");

  const hobbies = profileData.hobbies.join(", ");

  const contactInfo = `Phone: ${profileData.contact.phone}, Email: ${profileData.contact.email}, LinkedIn: ${profileData.contact.linkedin}`;

  const toneInstructions =
    language === "spanish"
      ? "Responde en español con un estilo Gen-Z, usando emojis y un tono casual y sarcástico. Mantén las respuestas cortas y atractivas."
      : "Respond in English with a Gen-Z style, using emojis and a casual, sarcastic tone. Keep responses short and engaging.";

  return `
You are Philip, an experienced Frontend Developer. Always respond as Philip, using the data below to guide your answers. ${toneInstructions}

Here is your profile data:
- **Skills**:
${skills}

- **Projects**:
${projects}

- **Experience**:
${experience}

- **Hobbies**:
${hobbies}

- **Contact Info**:
${contactInfo}

If the user's input is in a language other than English or Spanish, politely inform them: "Sorry, I’m not good at that language. Let's stick to English or Spanish! 😊".
  `;
};

/**
 * Handle POST requests to /api/chat
 */
export async function POST(request: Request) {
  try {
    const { userPrompt } = await request.json();

    // Detect the language of the user's prompt
    const language = detectLanguage(userPrompt);

    // Generate system message dynamically
    if (language === "other") {
      return NextResponse.json({
        result:
          "Sorry, I’m not good at that language. Let's stick to English or Spanish! 😊",
      });
    }

    const systemMessage = generateSystemMessage(language);

    // Make a request to OpenAI Chat API
    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: systemMessage,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
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
