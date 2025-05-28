"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const InteractiveBackground = () => {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // 初始化粒子
  useEffect(() => {
    const initParticles = () => {
      const newParticles: FloatingParticle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: Math.random() > 0.5 ? "#d0c0a2" : "#436e6e",
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    initParticles();
    window.addEventListener("resize", initParticles);
    return () => window.removeEventListener("resize", initParticles);
  }, []);

  // 鼠标跟踪
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 粒子动画循环
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // 边界检查
          if (newX < 0 || newX > window.innerWidth) {
            particle.speedX *= -1;
            newX = particle.x + particle.speedX;
          }
          if (newY < 0 || newY > window.innerHeight) {
            particle.speedY *= -1;
            newY = particle.y + particle.speedY;
          }

          // 鼠标吸引效果
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;
            newX += (dx / distance) * force * 0.5;
            newY += (dy / distance) * force * 0.5;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 浮动粒子 */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.1,
          }}
        />
      ))}

      {/* 连接线 */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle, index) =>
          particles.slice(index + 1).map((otherParticle, otherIndex) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );

            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.2;
              return (
                <motion.line
                  key={`${particle.id}-${otherParticle.id}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="#d0c0a2"
                  strokeWidth="1"
                  opacity={opacity}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* 鼠标周围的光环效果 */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-radial from-primary/10 to-transparent"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
        }}
      />

      {/* 渐变叠加层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/[0.02] to-accent/[0.03]" />
    </div>
  );
};

export default InteractiveBackground;
