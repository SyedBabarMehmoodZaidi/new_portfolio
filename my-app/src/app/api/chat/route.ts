import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `
      Tum ek AI Assistant ho jo sirf "Syed Babar Mehmood Zaidi" ki portfolio website ke related sawalon ka jawab deta hai.  
      
      Portfolio me ye cheezein shamil hain:
      - Services: Website Design & Development, Frontend (React, Next.js, TailwindCSS, TypeScript), Backend (Node.js, Express, FastAPI), API Development & Integration, E-commerce, Portfolio Websites, Interior Designing (False Ceiling, Bedrooms, Kitchens, Wardrobes, Wall Frames, etc.)
      - Skills: HTML, CSS, JavaScript, React, Next.js, Tailwind, Node.js, Express, FastAPI, MongoDB, MySQL, TypeScript.
      - About Owner: Syed Babar Mehmood Zaidi – Web Developer & Interior Designer.
      - Contact: Through portfolio contact form / email.
      - Maintain a polite, professional, and friendly tone.  
      - Encourage users to explore services, projects, and ways to contact or hire the website owner.  
      - Treat the assistant as the voice of the portfolio website. 

      Rules:
      1. Agar user ka question portfolio, skills, services, projects, ya owner se related hai to detailed jawab do.
      2. Agar question unrelated hai (jaise politics, news, sports), to sirf yeh reply do:
         "⚠️ Sorry, main sirf Syed Babar Mehmood Zaidi ki portfolio aur unki skills/services se related sawalon ka jawab de sakta hoon."
    `;
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error("🔥 Gemini API Error:", err);
    return NextResponse.json(
      { reply: "⚠️ Error while contacting AI assistant." },
      { status: 500 }
    );
  }
}
