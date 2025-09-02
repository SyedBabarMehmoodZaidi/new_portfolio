"use client";

import { useState } from "react";
import { Code, Paintbrush, BarChart3 } from "lucide-react"; // lucide-react icons

interface Service {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
}



const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    icon: <Code className="w-16 h-16 text-cyan-400 mx-auto mb-4" />,
    description: `As a modern and detail-oriented Web Developer, I specialize in crafting 
    high-performance, fully responsive websites that combine clean code with exceptional 
    user experience. My expertise spans across core web technologies like HTML, CSS, and 
    JavaScript, and extends into powerful tools such as TypeScript, Tailwind CSS, and Next.js. 
    I approach every project with a focus on clarity, maintainability, and modern design 
    principles — ensuring the final product not only looks impressive but performs flawlessly. 
    Whether I'm building a static landing page, portfolio, or complex web app, I prioritize 
    accessibility, smooth interactions, and efficiency — delivering websites that are 
    future-ready, visually stunning, and engineered for success.`,
  },
  {
    id: 2,
    title: "Graphic Design",
    icon: <Paintbrush className="w-16 h-16 text-cyan-400 mx-auto mb-4" />,
    description: `I specialize in transforming ideas into visually compelling designs that 
    effectively communicate messages and build strong brand identities. From logos and social 
    media posts to complete branding packages, I focus on clean, balanced, and engaging 
    compositions that leave a lasting impact. My design process is rooted in storytelling, 
    ensuring every color, font, and layout decision supports the message and connects with 
    the audience. With attention to detail and strong aesthetics, I deliver visuals that are 
    beautiful, functional, and adaptable across both digital and print platforms.`,
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: <BarChart3 className="w-16 h-16 text-cyan-400 mx-auto mb-4" />,
    description: `As a strategic and growth-focused Digital Marketer, I help brands build 
    meaningful relationships with their audience through results-driven campaigns. My 
    expertise spans SEO, social media marketing, content strategy, and analytics — enabling 
    me to craft targeted solutions that attract, convert, and retain customers. From boosting 
    organic reach with optimized content to driving engagement on social platforms, my 
    approach balances creativity and technical precision. I focus on measurable results, 
    building systems that are scalable, impactful, and aligned with long-term growth.`,
  },
];

const tickerTexts = [
  "We design and develop Modern, Dynamic Websites.",
  "We build Scalable Frontend Experiences (React, Next.js, TailwindCSS, TypeScript).",
  "We develop Secure & High-Performance Backends (Node.js, FastAPI).",
  "We implement Efficient API Development & Integrations.",
  "We deliver Customized E-Commerce Solutions.",
  "We create Professional Portfolio & Corporate Websites.",
  "We craft Responsive, User-Friendly UI/UX Experiences.",
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="services" className="px-6 py-16 bg-gray-900 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 rounded-2xl border  border-gray-700 shadow-[0_0_1rem_#0ef] p-8 text-center hover:border-cyan-400 hover:scale-105 transition"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p
              className={`text-base leading-relaxed transition-all duration-500 ${
                expanded === service.id
                  ? "max-h-[2000px]"
                  : "max-h-24 overflow-hidden relative"
              }`}
            >
              {service.description}
              {expanded !== service.id && (
                <span className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-b from-transparent to-gray-800"></span>
              )}
            </p>
            <button
              onClick={() => toggleReadMore(service.id)}
              className="mt-4 inline-block px-6 py-2 text-lg font-medium bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition"
            >
              {expanded === service.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {/* News Ticker Line */}
      <div className="w-full overflow-hidden bg-transparent py-32">
        <div className="whitespace-nowrap flex gap-16 animate-marquee">
          {tickerTexts.map((text, index) => (
            <span
              key={index}
              className="text-cyan-400 text-6xl font-medium tracking-wide"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>

    
    
  );
};

export default Services;
