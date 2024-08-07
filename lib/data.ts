import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ML Ops Engineer @ Clovis Capital",
    location: "Remote (Contract Role)",
    description:
      "Currently working as a ML Ops Engineer at Clovis Capital. My role involves developing a Machine learning model training pipeline for Quantitative Trading. This involved using GCP, Vertex AI and Kubeflow, along with other ML packages such as Tensorflow and Sklearn.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - present",
  },
  {
    title: "AI / Machine Learning Engineer @ Lockheed Martin",
    location: "Marietta, GA",
    description:
      "Recently an AI / Machine Learning Engineer at Lockheed Martin. I specialized in developing production-ready machine learning models in cloud environments, optimized with microservice architectures. My core technologies include Python, Docker, and AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - June 2024",
  },
  {
    title: "Cybersecurity Engineer @ Lockheed Martin",
    location: "Marietta, GA",
    description:
      "Worked as a Cyber Systems Security Engineer at Lockheed Martin. I worked on a UAV Ground Station program and was responsible for vulnerability management and the implementation of security controls under the Risk Management Framework.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Sep 2023",
  },
  {
    title: "Cloud & ML Consultant @ AudioT",
    location: "Atlanta, GA",
    description:
      "Currently working as a consultant for AudioT. I'm helping them maintain their AWS environement and develop new features for their Audio Classification models. I also dabble with Computer Vision models.",
    icon:  React.createElement(CgWorkAlt),//React.createElement(LuGraduationCap),
    date: "Summer 2022 - Present",
  },
  {
    title: "Georgia Institue of Technology",
    location: "Atlanta, GA",
    description:
      "\u2022 Graduated with a Bachelor's in Computer Science.\n\u2022 Concentration of People and Info/Internetworks.\n \u2022  Also did some coursework in Aerospace Engineering.",
    icon:  React.createElement(LuGraduationCap),
    date: "May 2022",
  },
  {
    title: "Internship @ AudioT",
    location: "Atlanta, GA",
    description:
      "After a Junior Design project, worked with AudioT to standup and develop their AWS environment. I also worked on Audio Classification models using Python and Sklearn. I built a React Web App for labelling audio data.",
    icon:  React.createElement(CgWorkAlt),//React.createElement(LuGraduationCap),
    date: "Summer 2020 - Summer 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "React",
  "Scikit-learn",
  "PyTorch",
  "TensorFlow",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Docker",
  "Kubernetes",
  "Helm",
  "Gitlab CI/CD",
  "AWS",
] as const;
