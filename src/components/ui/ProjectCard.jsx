// // ==================== V.2 Component: ProjectCard โชว์ภาพ ====================
// // Card แสดงผลงานแต่ละชิ้น พร้อมรูปภาพและ hover effect
// // ใช้งาน: <ProjectCard {...project} isDark={isDark} />

// import React, { useState } from 'react';
// import { ExternalLink } from 'lucide-react';

// export default function ProjectCard({ 
//   title, 
//   date, 
//   role, 
//   link, 
//   image, 
//   description, 
//   tags = [],
//   isDark 
// }) {
//   // state เก็บสถานะว่า hover อยู่หรือไม่
//   const [isHovered, setIsHovered] = useState(false);
//   // state เก็บสถานะว่ารูปโหลดเสร็จหรือยัง
//   const [imageLoaded, setImageLoaded] = useState(false);
  
//   return (
//     <a
//       href={link || '#'}  // ลิงก์ไปยังโปรเจค ถ้าไม่มีใช้ #
//       target="_blank"      // เปิดในแท็บใหม่
//       rel="noopener noreferrer" // security best practice
//       className={`group relative border overflow-hidden transition-all duration-500 ${
//         isDark 
//           ? 'border-white/10 hover:border-white/30 bg-black'
//           : 'border-black/10 hover:border-black/30 bg-white'
//       }`}
//       onMouseEnter={() => setIsHovered(true)}  // เมื่อเมาส์เข้า
//       onMouseLeave={() => setIsHovered(false)} // เมื่อเมาส์ออก
//     >
//       {/* ส่วนรูปภาพ */}
//       <div className="relative aspect-video overflow-hidden">
//         {/* Placeholder ขณะโหลดรูป */}
//         {!imageLoaded && (
//           <div className={`absolute inset-0 animate-pulse ${
//             isDark ? 'bg-white/5' : 'bg-black/5'
//           }`} />
//         )}
        
//         {/* รูปภาพโปรเจค */}
//         <img
//           src={image || 'https://placehold.co/800x600/png'}
//           alt={title}
//           className={`w-full h-full object-cover transition-all duration-700 ${
//             isHovered ? 'scale-110' : 'scale-100'
//           } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
//           onLoad={() => setImageLoaded(true)}
//           loading="lazy"
//         />
        
//         {/* Overlay gradient เมื่อ hover */}
//         <div className={`absolute inset-0 transition-opacity duration-500 ${
//           isHovered 
//             ? 'opacity-100' 
//             : 'opacity-0'
//         } ${
//           isDark
//             ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
//             : 'bg-gradient-to-t from-white/80 via-white/40 to-transparent'
//         }`} />
        
//         {/* ไอคอน External Link ที่มุมขวาบน */}
//         <div className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
//           isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
//         } ${
//           isDark ? 'bg-white/10' : 'bg-black/10'
//         }`}>
//           <ExternalLink className="w-4 h-4" />
//         </div>
//       </div>
      
//       {/* ส่วนข้อมูล */}
//       <div className="p-6">
//         {/* ชื่อโปรเจค */}
//         <h3 className="text-xl font-light mb-2 transition-colors duration-300">
//           {title}
//         </h3>
        
//         {/* คำอธิบาย (ถ้ามี) */}
//         {description && (
//           <p className={`text-sm mb-4 line-clamp-2 ${
//             isDark ? 'text-white/60' : 'text-black/60'
//           }`}>
//             {description}
//           </p>
//         )}
        
//         {/* Tags (ถ้ามี) */}
//         {tags && tags.length > 0 && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className={`text-xs px-2 py-1 rounded-full ${
//                   isDark 
//                     ? 'bg-white/10 text-white/70' 
//                     : 'bg-black/10 text-black/70'
//                 }`}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         )}
        
//         {/* ข้อมูลวันที่และบทบาท */}
//         <div className={`flex items-center justify-between text-sm ${
//           isDark ? 'text-white/50' : 'text-black/50'
//         }`}>
//           <span>{date}</span>
//           <span>{role}</span>
//         </div>
        
//         {/* เส้นใต้ที่ขยายออกเมื่อ hover */}
//         <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
//           isDark ? 'bg-white' : 'bg-black'
//         } ${isHovered ? 'w-full' : 'w-0'}`} />
//       </div>
//     </a>
//   );
// }


// // ==================== V.1 ProjectCard แบบเก่า ที่ไม่โชว์ภาพ ====================
// // ==================== Component: ProjectCard ====================
// // Card แสดงผลงานแต่ละชิ้น พร้อม hover effect
// // ใช้งาน: <ProjectCard title="..." date="..." role="..." link="..." isDark={isDark} />

// import React, { useState } from 'react';

// export default function ProjectCard({ title, date, role, link, isDark }) {
//   // state เก็บสถานะว่า hover อยู่หรือไม่
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <a
//       href={link || '#'}  // ลิงก์ไปยังโปรเจค ถ้าไม่มีใช้ #
//       target="_blank"      // เปิดในแท็บใหม่
//       rel="noopener noreferrer" // security best practice
//       className={`group relative border p-8 transition-all duration-500 ${
//         isDark 
//           ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
//           : 'border-black/10 hover:border-black/30 hover:bg-black/5'
//       }`}
//       onMouseEnter={() => setIsHovered(true)}  // เมื่อเมาส์เข้า
//       onMouseLeave={() => setIsHovered(false)} // เมื่อเมาส์ออก
//     >
//       <div className="relative overflow-hidden">
//         {/* ชื่อโปรเจค */}
//         <h3 className="text-2xl font-light mb-4 transition-transform duration-500 group-hover:translate-x-2">
//           {title}
//         </h3>
        
//         {/* ข้อมูลวันที่และบทบาท */}
//         <div className={`space-y-1 text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
//           <p>{date}</p>
//           <p>{role}</p>
//         </div>
        
//         {/* เส้นใต้ที่ขยายออกเมื่อ hover */}
//         <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
//           isDark ? 'bg-white' : 'bg-black'
//         } ${isHovered ? 'w-full' : 'w-0'}`} />
//       </div>
//     </a>
//   );
// }

// ====================  V.3 เมาส์โอเวอร์ค่อยโชว์ภาพ Component: ProjectCard ====================
// Card แสดงผลงาน - ปกติแสดงข้อความ พอ hover รูปภาพจะทับซ้อนขึ้นมา
// ใช้งาน: <ProjectCard {...project} isDark={isDark} />

import React, { useState } from 'react';

export default function ProjectCard({ 
  title, 
  date, 
  role, 
  link, 
  image,
  description,
  tags = [],
  isDark 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative border p-8 transition-all duration-500 overflow-hidden ${
        isDark 
          ? 'border-white/10 hover:border-white/30 hover:bg-white/5'
          : 'border-black/10 hover:border-black/30 hover:bg-black/5'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* รูปภาพพื้นหลัง - จะค่อยๆ ปรากฏตอน hover */}
      {image && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${
          isHovered ? 'opacity-80' : 'opacity-0'
        }`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {/* Overlay เพื่อให้อ่านข้อความได้ชัด */}
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-black/60' 
              : 'bg-white/60'
          }`} />
        </div>
      )}
      
      {/* ส่วนข้อความ - อยู่ด้านหน้าเสมอ */}
      <div className="relative overflow-hidden z-10">
        {/* ชื่อโปรเจค */}
        <h3 className="text-2xl font-light mb-4 transition-transform duration-500 group-hover:translate-x-2">
          {title}
        </h3>
        
        {/* ข้อมูลวันที่และบทบาท */}
        <div className={`space-y-1 text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
          <p>{date}</p>
          <p>{role}</p>
        </div>
        
        {/* Description (ถ้ามี) */}
        {description && (
          <p className={`mt-3 text-sm line-clamp-2 ${
            isDark ? 'text-white/50' : 'text-black/50'
          }`}>
            {description}
          </p>
        )}
        
        {/* Tags (ถ้ามี) */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded ${
                  isDark 
                    ? 'bg-white/10 text-white/70' 
                    : 'bg-black/10 text-black/70'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* เส้นใต้ที่ขยายออกเมื่อ hover */}
        <div className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
          isDark ? 'bg-white' : 'bg-black'
        } ${isHovered ? 'w-full' : 'w-0'}`} />
      </div>
    </a>
  );
}