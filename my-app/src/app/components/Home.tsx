import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
    return (
    <div>

        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
    );
}