import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import bicarnetSite from "@/public/bicarnet_site.png";
import biservSite from "@/public/biserv.png";
import landingPage from "@/public/landingpage.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Science Project",
    location: "Yaounde, UY1",
    description: `Development of an automatic distress call detection application in
    an academic setting using Natural Language Processing (NLP) techniques.`,
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - May 2022",
  },
  {
    title: "Full-Stack at Eden It",
    location: "Yaounde, Bata  Nlogkak",
    description: `I worked as ful stack developer for 8 months. Designing and developing enterprise software. 
      This includes tasks such as gathering requirements,designing the software architecture, 
      implementing the software, and testing the software.using Clean architectur pattern, CQRS, SOLID and SRUM principe.`,
    icon: React.createElement(CgWorkAlt),
    date: "January 2022 - March 2023",
  },
  {
    title: "Full-Stack at BiServCam ",
    location: "Yaounde, Mobile Olezoa",
    description: `Design and development of enterprise software in accordance with the specifications
     and by applying the concepts and methods of software engineering facilitating the modularity of 
     the code, the maintainability of the code and testing.`,
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - now",
  },
] as const;

export const projectsData = [
  {
    title: "Bicarnet",
    description:
      "I worked as a frontend developer on this bicanet website; the site for the  CAREER ORIENTATION AND PROFESSIONAL TRAINING FAIR.",
    tags: ["React", "MongoDB", "Tailwind", "REST API", "Next.js"],
    imageUrl: bicarnetSite,
    urlLink: "https://bicarnet.com/",
  },
  {
    title: "Biserv Intern Project",
    description:
      "As a fullStack developer, building  enterprise software in accordance with the specification. ",
    tags: [
      "React",
      "Next.js",
      "Postgres",
      "MongoDB",
      "Tailwind",
      "Express",
      "REST API",
      "Django",
    ],
    imageUrl: biservSite,
    urlLink: "https://biserv.com/",
  },
  {
    title: "landing page site",
    description:
      "Building landing page for the customer to expose their product and branding.",
    tags: ["React", "Tailwind", "REST API", "Flask"],
    imageUrl: landingPage,
    urlLink: "",
  },
] as const;

export const skillsData = [
  "Js/Ts",
  "React/Next.js",
  "Node.js/Express",
  "Git/Github",
  "Celery",
  "Docker",
  "Redis",
  "MongoDB",
  "Redux",
  "Postgresql",
  "Python",
  "Django",
  "DRF",
  "AWS",
  "Sentry",
  "Flask",
  "Pytorch",
  "Numpy",
  "Pandas",
  "Matplotlib",
] as const;
