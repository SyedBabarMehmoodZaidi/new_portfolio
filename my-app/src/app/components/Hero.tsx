"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-[9%] py-24 min-h-screen bg-gray-900 text-white"
    >
      {/* Left Content */}
      <div className="home-content max-w-xl">
        <h3 className="text-3xl font-bold">Hello, It's me</h3>
        <h1 className="text-6xl font-extrabold leading-tight">BABAR MEHMOOD</h1>
        
        <h3 className="text-3xl font-bold mb-6">
          And I'm a{" "}
          <span className="text-main text-4xl">
            <Typewriter
              words={[
                "Full Stack Developer",
                "UI/UX Designer",
                "Frontend Developer",
                "Backend Developer",
                "API Developer & Integrator",
                "Web Developer",
                "Responsive Design Expert",
              ]}
              loop={0} // 0 means infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={80}   // typing speed
              deleteSpeed={50} // deleting speed
              delaySpeed={1500} // delay before next word
            />
          </span>
        </h3>

        <p className="text-lg leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut in eos,
          voluptatibus adipisci dolor architecto?
        </p>

        {/* Social Media */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://www.facebook.com/Babarmehmoodofficial"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-main rounded-full text-main text-2xl hover:bg-main hover:text-bg-second shadow-md transition"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://www.instagram.com/babar_zaidy/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-main rounded-full text-main text-2xl hover:bg-main hover:text-bg-second shadow-md transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-babar-255b0221b"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-main rounded-full text-main text-2xl hover:bg-main hover:text-bg-second shadow-md transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://www.youtube.com/@BabarBamsi90"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-main rounded-full text-main text-2xl hover:bg-main hover:text-bg-second shadow-md transition"
          >
            <Youtube size={22} />
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-block mt-6 px-8 py-3 bg-main text-bg-second font-semibold text-lg rounded-full shadow-lg hover:shadow-none transition"
        >
          Download CV
        </a>
      </div>

      {/* Right Image */}
      <div className="home-img px-20">
        <Image
          src="/images/babarbamsi.png"
          alt="Babar Mehmood"
          width={500}
          height={400}
          className="rounded-[10%] border-2 border-main shadow-[0_0_4rem_#0ef] animate-float"
        />
      </div>
    </section>
  );
}
