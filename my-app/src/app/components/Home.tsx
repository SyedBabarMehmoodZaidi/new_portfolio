import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Skills from "./Skills";
import ResumeBuilder from "./Resume";

export default function Home() {
    return (
    <div>

        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <ResumeBuilder />
        <Contact />
        <Footer />
    </div>
    );
}