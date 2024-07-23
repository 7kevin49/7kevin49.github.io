"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* This is  where we want two columns */}
      <p className="mb-3">
        After embarking on an internship that kickstarted my exposure to the field, I graduated from Georgia Tech with a degree in {" "}
        <span className="font-medium">Computer Science</span>. This early experience at a startup in Atlanta introduced me to {" "}
        <span className="font-medium">cloud technologies</span> and a diverse range of ML model applications, including both supervised {" "}
        and unsupervised learning for classification and clustering tasks on audio. I work as a consultant with the start up today.{" "}
        Subsequently, I joined Lockheed Martin as a {" "}
        <span className="font-medium">Cybersecurity Engineer</span>, focusing on {" "}
        vulnerability management and the implementation of security controls under the Risk Management Framework.{" "}
        Advancing in my career, I transitioned to the role of <span className="font-medium">Machine Learning Engineer</span> {" "}
        at Lockheed Martin, where I now specialize in developing production-ready machine {" "}
        learning models in cloud environments, optimized with {" "}
        <span className="italic">microservice architectures</span>.{" "}
        My core technologies include <span className="font-medium">Python, Docker, and AWS</span>, and I am dedicated to continuously enhancing my expertise with the latest technologies.
      </p>

      <p>
        <span className="italic">Outside of ML and Cyber</span>, I enjoy playing
        video games, hanging out with my cat and lots of traveling with my Partner (4 new countries in 2 years). I also enjoy{" "}
        <span className="font-medium"> reading and learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">reinforcement learning</span>. I'm also
        learning how to play the guitar. Please, don't ask me to play free bird.
      </p>
    </motion.section>
  );
}
