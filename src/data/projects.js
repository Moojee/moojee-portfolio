// // ==================== ข้อมูลโปรเจคทั้งหมด ====================

// import { image } from "framer-motion/client";
// import gallery from "../assets/photos/project/Gallery.png"
// import thaitrip from "../assets/photos/project/thaitrip.png"
// import moojeebook from "../assets/photos/project/moojeebook.png"
// import bookadminlogin from "../assets/photos/project/bookadminlogin.png"
// import moojee from "../assets/photos/project/moojee.png"
// import minitaskapp from "../assets/photos/project/minitaskapp.png"
// import minitaskapp1 from "../assets/photos/project/minitaskapp1.png"


// const getScreenshot = (url) => {
//   return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=800`;
// };

// export const projects = [

//    {
//     id: 6,
//     category: '',
//     title: 'Mini Task App',
//     date: 'Jan 2026',
//     role: 'Fullstack Developer',
//     link: 'https://next-sau-task-app-ten.vercel.app/',
//     image: minitaskapp1,
//     description: 'Task Management System with LINE Notification, A modern, user-friendly task management web application that helps users organize their daily tasks with real-time LINE notifications. Features include task creation with image attachments, status tracking, and instant push notifications through LINE Messaging API.',
//     tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL', 'LINE API']
//   },

//   {
//     id: 3,
//     category: '',
//     title: 'Personal Book Gallery Review',
//     date: 'Sep 2025',
//     role: 'Fullstack Developer',
//     link: 'https://moojee-books.vercel.app/',
//     image: moojeebook,
//     description: 'A fullstack web application for tracking book reviews. Features include a public gallery, search functionality, and a secure Admin Dashboard for CRUD operations with Supabase Authentication.',
//     tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL']
//   },

//    {
//     id: 5,
//     category: '',
//     title: 'Admin Dashboard - Moojee Books',
//     date: 'Sep 2025',
//     role: 'Fullstack Developer',
//     link: 'https://moojee-books.vercel.app/admin',
//     image: bookadminlogin,
//     description: 'A fullstack web application for tracking book reviews. Features include a public gallery, search functionality, and a secure Admin Dashboard for CRUD operations with Supabase Authentication.' ,
//      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'] 
//   },

//   {
//     id: 2,
//     category: '',
//     title: 'React Frontend Personal Art Gallery',
//     date: 'Dec 2024',
//     role: 'Design & Frontend Dev',
//     link: 'https://moojee-gallery.vercel.app/',
//     // image: getScreenshot('https://moojee-gallery.vercel.app/'),
//     image: gallery,
//     description: 'My Art Gallery',
//     tags: ['Javascript', 'React', 'Tailwind', 'lucide']
//   },

//   {
//     id: 4,
//     category: '',
//     title: 'React Frontend Portfolio',
//     date: 'Aug 2025',
//     role: 'Design & Frontend Dev',
//     link: 'https://moojee-portfolio.vercel.app/',
//      image: moojee,
//     description: 'Personal Portfolio',
//     tags: ['Javascript', 'React', 'Tailwind', 'framer']
//   },

//   {
//     id: 1,
//     category: '',
//     title: 'React Frontend for AI-Powered Trip Planner',
//     category: 'frontend',
//     date: 'Nov 2024',
//     role: 'Design & Frontend Dev',
//     link: 'https://thai-trip-seven.vercel.app/',
//     // image: getScreenshot('https://thai-trip-seven.vercel.app/'),
//     image: thaitrip,
//     description: 'Responsive React frontend for an AI-powered travel planner.',
//     tags: ['Javascript', 'React', 'Tailwind', 'DesiUI']
//   },

//   // {
//   //   id: 5,
//   //   title: 'Dashboard Analytics',
//   //   date: 'Jul 2024',
//   //   role: 'Design & Dev',
//   //   link: 'https://example.com/project5',
//   //   description: 'Real-time analytics dashboard with beautiful data visualization'
//   // },
//   // {
//   //   id: 6,
//   //   title: 'Creative Agency Site',
//   //   date: 'Jun 2024',
//   //   role: 'Frontend Dev',
//   //   link: 'https://example.com/project6',
//   //   description: 'Award-winning website for creative agency'
//   // }
// ];


import gallery from "../assets/photos/project/Gallery.png"
import thaitrip from "../assets/photos/project/thaitrip.png"
import moojeebook from "../assets/photos/project/moojeebook.png"
import bookadminlogin from "../assets/photos/project/bookadminlogin.png"
import moojee from "../assets/photos/project/moojee.png"
import minitaskapp from "../assets/photos/project/minitaskapp.png"
import minitaskapp1 from "../assets/photos/project/minitaskapp1.png"
import tampermonkey from "../assets/photos/project/tampermonkey-Automation.png"
import tampermonkey2 from "../assets/photos/project/tampermonkey-Automation2.png"
import tampermonkey3 from "../assets/photos/project/tampermonkey-Automation3.png"
import qc1 from "../assets/photos/project/QC1.png"
import qc2 from "../assets/photos/project/QC2.png"

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'webapp', label: 'Web Application' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'automation', label: 'Automation Tool' }
]

export const projects = [


  
  {
    id: 7,
    slug: 'tampermonkey-Automation',
    title: 'Tampermonkey Automation For Airtable Workflow',
    category: 'automation',
    date: 'Mar 2026',
    role: 'Automation',
    link: 'https://gist.github.com/Moojee/e053958e01afa1b89b3e7c463587b60e',
    image: tampermonkey,
    images: [tampermonkey, tampermonkey3, tampermonkey2],   // gallery thumbnails
    video: '',
    description: 'Airtable Workflow Automation Tool | Tampermonkey · JavaScript · DOM Manipulation',
    longDescription: 
    `
    • พัฒนา browser userscript ที่ดึงข้อมูลจาก dynamic DOM ของ Airtable และ auto-generate ข้อความสำหรับส่ง LINE และ Email ตาม partner template
    • ออกแบบระบบ email automation ที่ใส่ To, CC, Subject อัตโนมัติตาม partner แต่ละราย 
    • Deploy ให้ทีมใช้งานผ่าน GitHub Gist พร้อมระบบ auto-update โดยไม่ต้องติดตั้งใหม่

    
    ⟶ Problem
     ทีม Operations ต้องเปิด Airtable แล้ว copy ข้อมูลไปวางใน LINE และ Email เองทุกครั้ง ซึ่งเสียเวลาและเกิด human error ได้

    ⟶ Solution
  สร้าง browser script ที่เพิ่มปุ่ม 3 ปุ่มบนหน้า Airtable ทุกหน้า กดปุ่มเดียวได้ข้อความพร้อมส่งเลย

    ⟶ Result 
  ทีมใช้งานได้จริง ลดขั้นตอนการทำงานซ้ำซ้อนจากหลาย step เหลือกดปุ่มเดียว ลดระยะเวลาการทำงานลงต่อเคสมากกว่า 5 นาที และใน 1 วันมีปริมาณเคสเฉลี่ย 50 เคส ทำให้ลดระยะเวลาและลดข้อผิดพลาดได้เป็นอย่างดีค่ะ`,
    tags: ['JavaScript', 'DOM Manipulation', 'Workflow Automation', 'Tampermonkey', 'Team Deployment'],
  },

  {
    id: 8,
    slug: 'qc-automation-suite',
    title: 'QC Automation Suite',
    category: 'automation',
    date: 'Jan 2026',
    role: 'Automation',
    link: '',
    image: qc1,
    images: [qc1, qc2],   
    video: 'https://www.youtube.com/embed/d-hxJ5-Vs5I?si=7AlIEAfLmsKiac8d',
    description: 'Google Apps Script QC Automation Suite',
    longDescription: 
    `
    • พัฒนาระบบอัตโนมัติด้วย Google Apps Script เพื่อแทนที่การคัดเลือกแชทแบบแมนนวลสำหรับทีม QC 
      โดยระบบครอบคลุมสองโมดูลหลักคือ CX และ BK ซึ่งทำงานบน Google Sheets และเปิดใช้งานได้ด้วยคลิกเดียวผ่านเมนูที่สร้างขึ้นใน UI

    ⟶ Result 
  • ลดเวลาคัดเลือกแชทด้วยมือจาก 1 ชั่วโมง เหลือคลิกเดียว
  • ใช้งานจริงโดยทีม 5 คน`,

    tags: ['Google Apps Scrip', 'Google Sheets', 'JavaScript'],
  },

  {
    id: 6,
    slug: 'mini-task-app',
    title: 'Mini Task App',
    category: 'webapp',
    date: 'Jan 2026',
    role: 'Fullstack Developer',
    link: 'https://next-sau-task-app-ten.vercel.app/',
    image: minitaskapp1,
    images: [minitaskapp1, minitaskapp],   // gallery thumbnails
    description: 'Task Management System with LINE Notification',
    longDescription: `A modern, user-friendly task management web application that helps users organize 
their daily tasks with real-time LINE notifications. Features include task creation with image 
attachments, status tracking, and instant push notifications through LINE Messaging API.`,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL', 'LINE API'],
  },
  {
    id: 3,
    slug: 'moojee-books',
    title: 'Personal Book Gallery Review',
    category: 'webapp',
    date: 'Sep 2025',
    role: 'Fullstack Developer',
    link: 'https://moojee-books.vercel.app/',
    image: moojeebook,
    images: [moojeebook, bookadminlogin],
    description: 'Fullstack web app for tracking book reviews with Admin Dashboard',
    longDescription: `A fullstack web application for tracking book reviews. Features include a public 
gallery, search functionality, and a secure Admin Dashboard for CRUD operations with Supabase Authentication.`,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'],
  },
  {
    id: 5,
    slug: 'moojee-books-admin',
    title: 'Admin Dashboard — Moojee Books',
    category: 'webapp',
    date: 'Sep 2025',
    role: 'Fullstack Developer',
    link: 'https://moojee-books.vercel.app/admin',
    image: bookadminlogin,
    images: [bookadminlogin, moojeebook],
    description: 'Secure Admin Dashboard with Supabase Auth for book CRUD management',
    longDescription: `Admin interface for Moojee Books. Protected by Supabase Authentication, 
supports full CRUD operations for the book gallery — add, edit, delete entries with image upload.`,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'],
  },
  {
    id: 2,
    slug: 'moojee-gallery',
    title: 'React Frontend Personal Art Gallery',
    category: 'frontend',
    date: 'Dec 2024',
    role: 'Design & Frontend Dev',
    link: 'https://moojee-gallery.vercel.app/',
    image: gallery,
    images: [gallery],
    description: 'Personal art gallery built with React',
    longDescription: `A personal art gallery showcasing original artwork. Built with React and Tailwind, 
featuring a clean grid layout, lightbox view, and smooth transitions.`,
    tags: ['Javascript', 'React', 'Tailwind', 'lucide'],
  },
  {
    id: 4,
    slug: 'moojee-portfolio',
    title: 'React Frontend Portfolio',
    category: 'frontend',
    date: 'Aug 2025',
    role: 'Design & Frontend Dev',
    link: 'https://moojee-portfolio.vercel.app/',
    image: moojee,
    images: [moojee],
    description: 'Personal portfolio with animations',
    longDescription: `Personal portfolio website built with React and Framer Motion. 
Features smooth page transitions, dark mode, and a clean minimal design.`,
    tags: ['Javascript', 'React', 'Tailwind', 'framer'],
  },
  {
    id: 1,
    slug: 'thai-trip-planner',
    title: 'React Frontend for AI-Powered Trip Planner',
    category: 'frontend',
    date: 'Nov 2024',
    role: 'Design & Frontend Dev',
    link: 'https://thai-trip-seven.vercel.app/',
    image: thaitrip,
    images: [thaitrip],
    description: 'Responsive React frontend for an AI-powered travel planner',
    longDescription: `Responsive React frontend for an AI-powered travel planner. Users input their 
destination and preferences, and the app generates a day-by-day itinerary using an AI backend.`,
    tags: ['Javascript', 'React', 'Tailwind', 'DesiUI'],
  },
]