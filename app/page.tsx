"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DianaSantosQuote from "@/components/DianaSantosQuote";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SaulBassQuote from "@/components/SaulBassQuote";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-[1] min-h-screen">
      <Header />
      <Hero />
      <DianaSantosQuote />
      <Projects />
      <About />
      <SaulBassQuote />
      <Experience />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
