// // ==================== Component: AnimatedBackground ====================
// // สร้างพื้นหลังที่มี particle animation แบบ canvas
// // Particles จะเคลื่อนที่และเชื่อมต่อกันเมื่ออยู่ใกล้กัน

// import React, { useRef, useEffect } from 'react';

// export default function AnimatedBackground({ isDark }) {
//   // สร้าง reference เพื่ออ้างอิงถึง canvas element
//   const canvasRef = useRef(null);
  
//   useEffect(() => {
//     // ดึง canvas element มาใช้งาน
//     const canvas = canvasRef.current;
//     if (!canvas) return; // ถ้าไม่มี canvas ให้หยุดทำงาน
    
//     // ดึง context 2D เพื่อวาดกราฟิก
//     const ctx = canvas.getContext('2d');
//     let animationId; // เก็บ ID ของ animation loop
//     let particles = []; // array เก็บข้อมูล particles ทั้งหมด
    
//     // ฟังก์ชันปรับขนาด canvas ให้เต็มหน้าจอ
//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
    
//     // เรียกใช้ทันทีและติด event listener สำหรับ resize
//     resize();
//     window.addEventListener('resize', resize);
    
//     // สร้าง particles จำนวน 50 ตัว
//     for (let i = 0; i < 50; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,     // ตำแหน่ง x แบบสุ่ม
//         y: Math.random() * canvas.height,    // ตำแหน่ง y แบบสุ่ม
//         vx: (Math.random() - 0.5) * 0.5,     // ความเร็วแกน x (-0.25 ถึง 0.25)
//         vy: (Math.random() - 0.5) * 0.5,     // ความเร็วแกน y (-0.25 ถึง 0.25)
//         size: Math.random() * 2 + 1          // ขนาดสุ่ม 1-3
//       });
//     }
    
//     // กำหนดสีตามธีม
//     const bgColor = isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
//     const particleColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';
//     const lineColor = isDark ? '255, 255, 255' : '0, 0, 0';
    
//     // ฟังก์ชัน animation loop หลัก
//     const animate = () => {
//       // วาดสี่เหลี่ยมทับเดิมแบบโปร่งแสง เพื่อสร้าง trail effect
//       ctx.fillStyle = bgColor;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // วนลูปทุก particle
//       particles.forEach((p, i) => {
//         // อัพเดทตำแหน่งตามความเร็ว
//         p.x += p.vx;
//         p.y += p.vy;
        
//         // ตรวจสอบชนขอบและสะท้อนกลับ
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
//         // วาดวงกลมแทน particle
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = particleColor;
//         ctx.fill();
        
//         // วาดเส้นเชื่อมระหว่าง particles ที่อยู่ใกล้กัน
//         particles.slice(i + 1).forEach(p2 => {
//           // คำนวณระยะห่างระหว่าง 2 particles
//           const dx = p.x - p2.x;
//           const dy = p.y - p2.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           // ถ้าระยะห่างน้อยกว่า 150 pixels ให้วาดเส้นเชื่อม
//           if (dist < 150) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             // opacity ของเส้นลดลงตามระยะห่าง
//             ctx.strokeStyle = `rgba(${lineColor}, ${0.1 * (1 - dist / 150)})`;
//             ctx.stroke();
//           }
//         });
//       });
      
//       // เรียก animate ซ้ำในเฟรมถัดไป (สร้าง animation loop)
//       animationId = requestAnimationFrame(animate);
//     };
    
//     // เริ่ม animation
//     animate();
    
//     // Cleanup function เมื่อ component ถูก unmount
//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(animationId);
//     };
//   }, [isDark]); // เมื่อธีมเปลี่ยน ให้ re-render
  
//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 -z-10 transition-colors duration-500"
//       style={{ background: isDark ? '#000' : '#fff' }}
//     />
//   );
// }