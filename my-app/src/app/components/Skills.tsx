"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const skillsRow1 = [
  { name: "JavaScript", icon: "/Images/javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "/Images/typescript.png", link: "https://www.typescriptlang.org/docs/" },
  { name: "Python", icon: "/Images/python.png", link: "https://docs.python.org/3/" },
  { name: "CSS3", icon: "/Images/css3.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Figma", icon: "/Images/Figma.png", link: "https://www.figma.com/" },
  { name: "HTML 5", icon: "/Images/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
];

const skillsRow2 = [
  { name: "React", icon: "/Images/React.png", link: "https://react.dev/" },
  { name: "Next.js", icon: "/Images/Next.js.png", link: "https://nextjs.org/docs" },
  { name: "Tailwind CSS", icon: "/Images/TailwindCSS.png", link: "https://tailwindcss.com/docs" },
  { name: "Node.js", icon: "/Images/Node.js.png", link: "https://nodejs.org/en/docs" },
  { name: "MongoDB", icon: "/Images/mongodb.png", link: "https://www.mongodb.com/docs/" },
];

export default function Skills() {
  return (
    <div className="w-full bg-gray-900 py-10 flex justify-center">
      <div className="w-[95%] sm:w-[90%] max-w-5xl border border-gray-700 shadow-[0_0_1rem_#0ef] rounded-2xl p-6 overflow-hidden bg-gray-950">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8">
          My Coding <span className="text-[#0ef]">Playground </span>
        </h2>

        {/* Row 1 (Right → Left) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...skillsRow1, ...skillsRow1].map((skill, index) => (
              <Link
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center min-w-[120px] sm:min-w-[150px] bg-gray-800 p-4 rounded-xl shadow-md relative group"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="mb-2 transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-white text-sm font-medium">{skill.name}</p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  {skill.name}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Left → Right) */}
        <div className="relative w-full overflow-hidden mt-8">
          <motion.div
            className="flex gap-6 sm:gap-10"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...skillsRow2, ...skillsRow2].map((skill, index) => (
              <Link
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center min-w-[120px] sm:min-w-[150px] bg-gray-800 p-4 rounded-xl shadow-md relative group"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={60}
                  height={60}
                  className="mb-2 transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-white text-sm font-medium">{skill.name}</p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  {skill.name}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
