"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
  life: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const MouseEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const particleIdRef = useRef(0);
  const rippleIdRef = useRef(0);

  // 鼠标跟踪
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // 在拖动时创建粒子轨迹
      if (isDragging) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // 点击时创建涟漪效果
    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
      // 点击时也创建一些粒子
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createParticle(e.clientX, e.clientY), i * 50);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("click", handleClick);
    };
  }, [isDragging]);

  // 创建粒子
  const createParticle = (x: number, y: number) => {
    const colors = ["#d0c0a2", "#436e6e", "#ffffff", "#f0f0f0"];
    const newParticle: Particle = {
      id: particleIdRef.current++,
      x,
      y,
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      },
      life: 1,
    };

    setParticles((prev) => [...prev, newParticle]);
  };

  // 创建涟漪效果
  const createRipple = (x: number, y: number) => {
    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x,
      y,
      timestamp: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  // 更新粒子动画
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life - 0.02,
            velocity: {
              x: particle.velocity.x * 0.98,
              y: particle.velocity.y * 0.98,
            },
          }))
          .filter((particle) => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // 清理过期的涟漪
  useEffect(() => {
    const interval = setInterval(() => {
      setRipples((prev) =>
        prev.filter((ripple) => Date.now() - ripple.timestamp < 1000)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* 鼠标跟随光标 */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-primary/30 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* 延迟跟随的光环 */}
      <motion.div
        className="absolute w-10 h-10 rounded-full border border-primary/20"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
      />

      {/* 粒子系统 */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 1,
              opacity: particle.life,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </AnimatePresence>

      {/* 涟漪效果 */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute border-2 border-primary/40 rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              opacity: 0.8,
            }}
            animate={{
              width: 100,
              height: 100,
              x: -50,
              y: -50,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* 拖动时的炫酷背景效果 */}
      {isDragging && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default MouseEffects;
