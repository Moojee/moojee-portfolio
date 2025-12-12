// ==================== ข้อมูลโปรเจคทั้งหมด ====================

import { image } from "framer-motion/client";
import gallery from "../assets/photos/project/Gallery.png"
import thaitrip from "../assets/photos/project/thaitrip.png"
import moojeebook from "../assets/photos/project/moojeebook.png"
import moojee from "../assets/photos/project/moojee.png"

const getScreenshot = (url) => {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=800`;
};

export const projects = [

  {
    id: 3,
    title: 'Public Gallery Moojee Books - Personal Book Review App',
    date: 'Sep 2025',
    role: 'Fullstack Developer',
    link: 'https://moojee-books.vercel.app/',
    image: moojeebook,
    description: 'A fullstack web application for tracking book reviews. Features include a public gallery, search functionality, and a secure Admin Dashboard for CRUD operations with Supabase Authentication.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL']
  },

   {
    id: 5,
    title: 'Admin Dashboard - Moojee Books',
    date: 'Sep 2025',
    role: 'Fullstack Developer',
    link: 'https://moojee-books.vercel.app/admin',
    description: 'A fullstack web application for tracking book reviews. Features include a public gallery, search functionality, and a secure Admin Dashboard for CRUD operations with Supabase Authentication.' ,
     tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'] 
  },

  {
    id: 2,
    title: 'React Frontend Personal Art Gallery',
    date: 'Dec 2024',
    role: 'Design & Frontend Dev',
    link: 'https://moojee-gallery.vercel.app/',
    // image: getScreenshot('https://moojee-gallery.vercel.app/'),
    image: gallery,
    description: 'My Art Gallery',
    tags: ['Javascript', 'React', 'Tailwind', 'lucide']
  },

  {
    id: 4,
    title: 'React Frontend Portfolio',
    date: 'Aug 2025',
    role: 'Design & Frontend Dev',
    link: 'https://moojee-portfolio.vercel.app/',
     image: moojee,
    description: 'Personal Portfolio',
    tags: ['Javascript', 'React', 'Tailwind', 'framer']
  },

  {
    id: 1,
    title: 'React Frontend for AI-Powered Trip Planner',
    date: 'Nov 2024',
    role: 'Design & Frontend Dev',
    link: 'https://thai-trip-seven.vercel.app/',
    // image: getScreenshot('https://thai-trip-seven.vercel.app/'),
    image: thaitrip,
    description: 'Responsive React frontend for an AI-powered travel planner.',
    tags: ['Javascript', 'React', 'Tailwind', 'DesiUI']
  },

  // {
  //   id: 5,
  //   title: 'Dashboard Analytics',
  //   date: 'Jul 2024',
  //   role: 'Design & Dev',
  //   link: 'https://example.com/project5',
  //   description: 'Real-time analytics dashboard with beautiful data visualization'
  // },
  // {
  //   id: 6,
  //   title: 'Creative Agency Site',
  //   date: 'Jun 2024',
  //   role: 'Frontend Dev',
  //   link: 'https://example.com/project6',
  //   description: 'Award-winning website for creative agency'
  // }
];