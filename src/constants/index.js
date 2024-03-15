import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nftMarketplace,
  movieMoods,
  intelligentChatbot
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Marketplace",
    description: "NFT marketplace that allows users to create, buy and sell digital art on the blockchain.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" },
    ],
    image: nftMarketplace,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Moods",
    description: "Web application that enables users to search and browse movies based on their mood and preferences.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "pink-text-gradient" },
    ],
    image: movieMoods,
    source_code_link: "https://github.com/",
  },
  {
    name: "Intelligent AI Chatbot",
    description: "An intelligent AI chatbot that can diagnose diseases based on symptoms and suggest medicines and diet plans.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Dialogflow", color: "green-text-gradient" },
    ],
    image: intelligentChatbot,
    source_code_link: "https://github.com/",
  },
];

export const personalDetails = {
  name: "Aman Kumbhalwar",
  location: "Nagpur, Maharashtra",
  phone: "+91 7821081179",
  email: "amanrk2801@gmail.com",
  linkedin: "www.linkedin.com/in/amanrk2801",
};

export { services, technologies, testimonials, projects };
