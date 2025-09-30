"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fragrance By Bamsi",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, assumenda?",
    image: "/Images/project1.png",
    link: "https://perfume-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Bamsi Bazaar",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, assumenda?",
    image: "/Images/project2.png",
    link: "https://milestone3-bazaar.vercel.app/",
  },
  {
    id: 3,
    title: "Ecommerce Website",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, assumenda?",
    image: "/Images/project3.png",
    link: "https://hackathon3-two.vercel.app/",
  },
  {
    id: 4,
    title: "Bamsi Blog",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, assumenda?",
    image: "/Images/project4.png",
    link: "https://blog-milestone-olive.vercel.app/",
  },
  {
    id: 5,
    title: "Apna Ghar",
    description: "Apna Ghar",
    image: "/Images/project5.png",
    link: "https://estate-agency-green.vercel.app/",
  },
  {
    id: 6,
    title: "Manzzari",
    description: "Jewelry Landing Page",
    image: "/Images/project6.png",
    link: "https://manzzari-figma.vercel.app/",
  },
  {
    id: 7,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index to know your weight status instantly.",
    image: "/Images/project7.png",
    link: "https://bmi-calculator-iota-beryl.vercel.app/",
  },
  {
    id: 8,
    title: "Loan Calculator",
    description: "Calculate your monthly loan payments instantly with our easy-to-use loan calculator.",
    image: "/Images/project8.png",
    link: "https://loan-calculator-sigma-gules.vercel.app/",
  },
  {
    id: 9,
    title: "Scientific Calculator",
    description: "Modern scientific calculator with advanced functions",
    image: "/Images/project9.png",
    link: "https://scientific-calculator-one-eta.vercel.app/",
  },
  {
    id: 10,
    title: "Babar Bamsi Interior Designer",
    description: "Creating timeless spaces where elegance meets functionality.",
    image: "/Images/project10.png",
    link: "https://interior-designer-five.vercel.app/",
  },
   {
    id: 11,
    title: "Stylish Shoes",
    description: "SHOES.",
    image: "/Images/project11.png",
    link: "https://stylish-shoe.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-900 text-white px-6 py-16 ">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Latest <span className="text-cyan-400">Project</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl overflow-hidden group shadow-[0_0_1rem_#0ef]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-700/80 flex flex-col items-center justify-center text-center px-6 translate-y-full group-hover:translate-y-0 transition-all duration-500">
              <h4 className="text-2xl font-semibold">{project.title}</h4>
              <p className="text-base my-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 hover:bg-cyan-400 transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
