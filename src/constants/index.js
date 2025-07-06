import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "AI/ML Developer",
    icon: backend,
  },
  {
    title: "Deep Learning Engineer",
    icon: creator,
  },
  {
    title: "React + Streamlit Dev",
    icon: web,
  },
  {
    title: "Prompt Engineer",
    icon: mobile,
  },
];

const technologies = [
  { name: "Python", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Redux Toolkit", icon: redux },
  { name: "Material UI", icon: mui },
  { name: "Git", icon: git },
  { name: "GSAP", icon: gsap },
  { name: "Framer Motion", icon: framer },
  { name: "Three JS", icon: threejs },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "AI Research Project Developer",
    company_name: "Independent / Final Year",
    icon: github,
    iconBg: "#383E56",
    date: "May 2025 – Present",
    points: [
      "Built an AI Research Co-Pilot using SciBERT, FAISS, Streamlit, and LangChain.",
      "Implemented paragraph-level semantic search across 3000+ academic papers.",
      "Integrated domain adaptation for fields like medicine, finance, and computer vision.",
      "Designed a responsive UI with Streamlit and deployed on Vercel with custom domain.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lakshay's AI Research Co-Pilot is a groundbreaking project — every researcher should have access to it.",
    name: "Ravi Sharma",
    designation: "AI Professor",
    company: "DIT University",
    image: firstTestimonial,
  },
  {
    testimonial:
      "His command over BERT, embeddings, and FAISS made our NLP project stand out in the entire batch.",
    name: "Kritika Jain",
    designation: "Team Lead",
    company: "Final Year Capstone",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Lakshay combines research-level AI depth with strong UI/UX instincts — very rare.",
    name: "Dr. Mehta",
    designation: "Academic Reviewer",
    company: "TechVantage Journal",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "AI Research Co-Pilot",
    description:
      "A semantic search platform for academic research using SciBERT, FAISS, LangChain, and Streamlit — built to help researchers find exact paragraphs from 3000+ papers.",
    tags: [
      { name: "scibert", color: "blue-text-gradient" },
      { name: "faiss", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
      { name: "langchain", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/lakshayrathee/ai-research-copilot",
  },
  {
    name: "Fake News Detection (BERT)",
    description:
      "Built a deep learning system using HuggingFace BERT to detect fake news in real-time across web sources and news APIs.",
    tags: [
      { name: "bert", color: "blue-text-gradient" },
      { name: "huggingface", color: "green-text-gradient" },
      { name: "transformers", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/lakshayrathee/fake-news-bert",
  },
  {
    name: "Face Mask Detection (OpenCV + CNN)",
    description:
      "Developed a computer vision model using OpenCV and Keras CNNs to detect face masks in real-time with over 95% accuracy.",
    tags: [
      { name: "opencv", color: "blue-text-gradient" },
      { name: "cnn", color: "white-text-gradient" },
      { name: "keras", color: "green-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/lakshayrathee/face-mask-detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
