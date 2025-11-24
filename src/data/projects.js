// ==================== ข้อมูลโปรเจคทั้งหมด ====================
// ไฟล์นี้เก็บข้อมูลโปรเจคทั้งหมด เพื่อให้แก้ไขได้ที่เดียว

import { image } from "framer-motion/client";
import gallery from "../assets/photos/project/Gallery.png"
import thaitrip from "../assets/photos/project/thaitrip.png"

const getScreenshot = (url) => {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=800`;
};

export const projects = [

  {
    id: 2,
    title: 'React Frontend Personal Art Gallery',
    date: 'Dec 2024',
    role: 'Design & Frontend Dev',
    link: 'https://moojee-gallery.vercel.app/',
    // image: getScreenshot('https://moojee-gallery.vercel.app/'),
    image:gallery,
    description: 'My Art Gallery',
    tags: ['Javascript', 'React', 'Tailwind', 'lucide']
  },

  {
    id: 1,
    title: 'React Frontend for AI-Powered Trip Planner',
    date: 'Nov 2024',
    role: 'Design & Frontend Dev',
    link: 'https://thai-trip-seven.vercel.app/',
    // image: getScreenshot('https://thai-trip-seven.vercel.app/'),
    image:thaitrip,
    description: 'Responsive React frontend for an AI-powered travel planner.',
    tags: ['Javascript', 'React', 'Tailwind', 'DesiUI']
  },

  {
    id: 3,
    title: 'Portfolio Generator',
    date: 'Sep 2024',
    role: 'Full Stack',
    link: 'https://example.com/project3',
    description: 'AI-powered portfolio generator for developers'
  },
  {
    id: 4,
    title: 'Mobile App Design',
    date: 'Aug 2024',
    role: 'UI/UX Design',
    link: 'https://example.com/project4',
    description: 'Intuitive mobile app design for productivity'
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    date: 'Jul 2024',
    role: 'Design & Dev',
    link: 'https://example.com/project5',
    description: 'Real-time analytics dashboard with beautiful data visualization'
  },
  {
    id: 6,
    title: 'Creative Agency Site',
    date: 'Jun 2024',
    role: 'Frontend Dev',
    link: 'https://example.com/project6',
    description: 'Award-winning website for creative agency'
  }
];