"use client";

import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-900 text-white px-8 py-16"
    >
      {/* Left Side Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <Image
          src="/Images/babarabout.png"
          alt="About Me"
          width={500}
          height={500}
          className="rounded-xl border-2 border-cyan-400 shadow-[0_0_4rem_#0ef] animate-float"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <h3 className="text-2xl md:text-3xl mb-4">Frontend Developer!</h3>

        {/* Collapsible Text */}
        <p
          className={`max-w-[700px] text-base md:text-lg leading-relaxed transition-all duration-500 ${
            isCollapsed ? "max-h-40 overflow-hidden relative" : "max-h-[2000px]"
          }`}
        >
          I am a passionate and detail-focused Front-End Developer with a deep
          love for bringing design visions to life through clean, scalable, and
          efficient code. My journey in web development has been fueled by
          curiosity and a desire to merge creativity with functionality. With a
          strong foundation in HTML, CSS, JavaScript, and a range of modern
          frameworks and tools, I specialize in developing elegant,
          high-performing websites that are responsive across devices and
          tailored to user needs.
          <br />
          As a Web Designer, I believe that every pixel matters. My approach
          combines visual aesthetics with thoughtful layout planning to ensure
          each interface feels intuitive, balanced, and engaging. I enjoy
          transforming static concepts into dynamic digital experiences that are
          both visually appealing and purpose-driven. My focus on UI/UX design
          is grounded in empathy — understanding user behavior and creating
          interactions that feel effortless and enjoyable.
          <br />
          I continuously challenge myself to evolve, staying up-to-date with the
          latest industry trends, design methodologies, and development best
          practices. Whether I’m collaborating on a creative concept, coding a
          responsive layout, or refining micro-interactions, my goal is always
          the same: to create meaningful, polished, and user-centered digital
          products that leave a lasting impression.
          {isCollapsed && (
            <span className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-b from-transparent to-gray-900"></span>
          )}
        </p>

        {/* Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mt-4 inline-block px-6 py-2 text-lg font-medium bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition"
        >
          {isCollapsed ? "Read More" : "Read Less"}
        </button>
      </div>
    </section>
  );
};

export default About;
