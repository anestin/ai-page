
import React from 'react';
import { 
  Wrench, 
  Lightbulb, 
  Target, 
  FileText, 
  PieChart, 
  Briefcase,
  Users,
  Video,
  Award,
  Layers
} from 'lucide-react';
import { CurriculumPart, Bonus, FaqItem, Testimonial } from './types';

export const CURRICULUM: CurriculumPart[] = [
  {
    id: "part-1",
    title: "PART 1: Introduction to Generative AI",
    modules: [
      {
        id: 1,
        title: "Understanding Generative AI",
        items: [
          "What Generative AI is and how it works.",
          "How to use Generative AI in business and the workplace.",
          "Real world examples of Generative AI in action."
        ],
        description: "This module provides a comprehensive foundation for understanding the mechanics and implications of contemporary AI technologies. We strip away the jargon to help you see the strategic landscape.",
        subItems: [
          "The Evolution of Neural Networks",
          "Large Language Models (LLMs) Explained",
          "Diffusion Models for Image Generation",
          "Ethics and Bias in AI Systems",
          "The Future of Human-AI Collaboration"
        ],
        activity: "Use the 'AI Workflow framework' to identify opportunities for using AI in your work and business.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 2,
        title: "Getting Started with AI Tools",
        items: [
          "How to choose the Generative AI tool to use - ChatGPT, Meta AI, Claude, etc.",
          "How to set up an account on Generative AI platforms.",
          "How to create your first output - Text, Image, Video."
        ],
        description: "A practical, hands-on guide to the most powerful tools available today. We help you navigate the noisy marketplace to find what actually delivers ROI.",
        subItems: [
          "ChatGPT vs. Claude vs. Gemini: Which one wins?",
          "Setting up custom instructions for better personas",
          "Introduction to Midjourney and DALL-E 3",
          "Voice Synthesis with ElevenLabs",
          "Video generation with Runway and Sora"
        ],
        activity: "Create an AI output in text, picture, and video",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4638ef80d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 3,
        title: "Prompt Engineering",
        items: [
          "Introduction to prompt engineering for beginners",
          "Advanced prompt engineering frameworks to get the best results.",
          "How to build a Prompt Library for your work or business."
        ],
        description: "Master the art of communicating with AI. Learn the frameworks used by pro engineers to get perfect results on the first try.",
        subItems: [
          "Zero-shot vs. Few-shot Prompting",
          "Chain of Thought (CoT) Reasoning",
          "Structured Output Formatting",
          "Iterative Refinement Techniques",
          "Dynamic Prompt Templating"
        ],
        activity: "Use your 'prompt stack' to create high quality AI outputs.",
        image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 4,
        title: "Monetizing AI - How to Make Money with Generative AI",
        items: [
          "How business owners can make money with Generative AI.",
          "How freelancers can make money with Generative AI.",
          "How to create an AI Monetization Roadmap."
        ],
        description: "Turn your knowledge into revenue. We explore diversified income streams enabled by the new AI economy.",
        subItems: [
          "AI Content Agency Business Model",
          "Selling Prompt Packs and Templates",
          "Improving Service Delivery Speed by 5x",
          "Passive Income through AI-Generated Assets",
          "Consulting as an AI Implementation Expert"
        ],
        activity: "Create your 'AI Monetization Roadmap' to make money with Generative AI.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "part-2",
    title: "PART 2: Generative AI for Business Owners",
    modules: [
      {
        id: 5,
        title: "AI for Business Development and Growth",
        items: [
          "How to generate and brainstorm business ideas with AI.",
          "How to create a detailed profitable Business Plan and Business Model Canvas with AI.",
          "How to create a profitable Business Growth Strategy."
        ],
        description: "Scale your operations and strategy. We teach you how to use AI as a high-level partner for business logic and growth planning.",
        subItems: [
          "SWOT Analysis with AI Agents",
          "Market Gap Identification",
          "Automated Competitor Tracking",
          "Revenue Modeling and Projections",
          "Strategic Pivot Frameworks"
        ],
        activity: "Create a Profitable Growth Strategy for your business using Generative AI.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: 6,
        title: "AI for Marketing and Branding",
        items: [
          "How to create or improve your Branding using AI.",
          "How to create Marketing Strategies, target audience research, and funnel building.",
          "How to create a Website landing page using AI."
        ],
        description: "Dominate your niche with AI-powered creative assets and high-conversion copy. Build a brand that stands out in the algorithm-driven world.",
        subItems: [
          "AI-Assisted Logo and Brand Identity",
          "Psychological Copywriting Frameworks",
          "Automating Social Media Content calendars",
          "Building AI-Driven Marketing Funnels",
          "SEO Optimization with Generative Search"
        ],
        activity: "Create an entire Marketing Campaign for your product or service using AI.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

export const BONUSES: Bonus[] = [
  {
    title: "AI Tools Cheat Sheet and Resource Library",
    description: "A curated list of free and affordable generative AI tools.",
    icon: <Wrench className="w-6 h-6" />,
    bgColor: "bg-emerald-50"
  },
  {
    title: "Exclusive AI Prompts Vault",
    description: "A downloadable library of 100+ ready-to-use prompts for Content Creation.",
    icon: <Lightbulb className="w-6 h-6" />,
    bgColor: "bg-yellow-50"
  },
  {
    title: "Your First N300,000 Freelancing Roadmap",
    description: "A complete guide to monetizing AI skills through freelancing or side hustles.",
    icon: <Target className="w-6 h-6" />,
    bgColor: "bg-blue-50"
  },
  {
    title: "AI-Driven Marketing Templates",
    description: "Landing page templates, email sequence templates, and social media templates.",
    icon: <FileText className="w-6 h-6" />,
    bgColor: "bg-indigo-50"
  },
  {
    title: "AI Revenue Tracking and ROI Workbook",
    description: "A workbook to measure time saved, income earned, and costs reduced.",
    icon: <PieChart className="w-6 h-6" />,
    bgColor: "bg-green-50"
  },
  {
    title: "Exclusive AI Business Case Studies",
    description: "Learn how other small businesses grew revenue with AI.",
    icon: <Briefcase className="w-6 h-6" />,
    bgColor: "bg-orange-50"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How long does the program take to complete?",
    answer: "The program is structured over 30 days (4 weeks) with self-paced video lessons and live weekly sessions."
  },
  {
    question: "When does the next Academy cohort start?",
    answer: "The next cohort classes start on 4th May 2026."
  },
  {
    question: "What technical skills or prior knowledge do I need to join this program?",
    answer: "No coding or prior technical knowledge is required! We start from the very basics."
  },
  {
    question: "What if I miss a session?",
    answer: "All live sessions are recorded and made available in the student dashboard within 24 hours."
  },
  {
    question: "What kind of certification will I receive?",
    answer: "You will receive a professional Certificate of Completion from the AI Literacy Academy."
  }
];

export const BENEFITS = [
  { icon: <Video />, title: "Video Lessons", desc: "Step-by-step video tutorials that break down AI concepts and tools easily." },
  { icon: <FileText />, title: "Templates & Frameworks", desc: "Save time with ready-to-use templates and proven frameworks." },
  { icon: <Layers />, title: "Activities & Portfolio", desc: "Practice what you've learned with hands-on exercises and real-world challenges." },
  { icon: <Wrench />, title: "No-Code AI Tools", desc: "Get access to user-friendly AI tools to build automations." },
  { icon: <Users />, title: "Community & Support", desc: "Join a network of like-minded learners to share ideas and grow." },
  { icon: <Award />, title: "Certification", desc: "Earn a certificate of completion that showcases your AI expertise." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Adebayo Omotola",
    content: "The AI Literacy Academy completely transformed how I handle client data and reporting. Tasks that used to take me 6 hours are now done in under 30 minutes with the custom prompts I learned here."
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    content: "I doubled my client base within 2 months of starting the program. Learning how to leverage Generative AI for brainstorming and structural drafting has made me 10x more efficient."
  },
  {
    id: "t3",
    name: "Emmanuel Chidiebere",
    content: "The monetization roadmap was the highlight for me. It's not just about using AI; it's about building a sustainable business around it. Highly recommended for any serious entrepreneur."
  },
  {
    id: "t4",
    name: "Anita Bello",
    content: "I was skeptical about AI in the creative space, but this course showed me how to use it as a powerful assistant rather than a replacement. My design workflow has never been smoother."
  }
];
