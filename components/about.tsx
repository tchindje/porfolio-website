"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm pasionate about{" "}
        <span className="font-bold"> software development </span>
        and <span className="font-bold">machine learning</span>. <br />I
        interested about
        <span className="font-medium"> Data structure</span> and{" "}
        <span className="font-medium"> Algorithms</span>. <br />I love to work
        with
        <span className="font-medium"> javaScript</span> and
        <span className="font-medium"> python</span> ecosystems. <br />
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        <span className="font-medium">learning new things</span>. I am currently
        learning about
      </p>
    </motion.section>
  );
}
