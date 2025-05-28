"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  timestamp: number;
}

const ClickRipples = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let rippleId = 0;

    const createRipple = (e: MouseEvent) => {
      // 只在实际点击时创建波纹，避免在按钮等元素上重复
      if (e.target instanceof Element && !e.target.closest('button, a, input, textarea')) {
        const newRipple: Ripple = {
          id: rippleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 100 + 50,
          timestamp: Date.now(),
        };

        setRipples(prev => [...prev, newRipple]);

        // 创建一些额外的小波纹
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            const extraRipple: Ripple = {
              id: rippleId++,
              x: e.clientX + (Math.random() - 0.5) * 40,
              y: e.clientY + (Math.random() - 0.5) * 40,
              size: Math.random() * 30 + 20,
              timestamp: Date.now(),
            };
            setRipples(prev => [...prev, extraRipple]);
          }, i * 100);
        }
      }
    };

    const handleDoubleClick = (e: MouseEvent) => {
      // 双击时创建更大的波纹效果
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const bigRipple: Ripple = {
            id: rippleId++,
            x: e.clientX + (Math.random() - 0.5) * 60,
            y: e.clientY + (Math.random() - 0.5) * 60,
            size: Math.random() * 150 + 100,
            timestamp: Date.now(),
          };
          setRipples(prev => [...prev, bigRipple]);
        }, i * 80);
      }
    };

    document.addEventListener('click', createRipple);
    document.addEventListener('dblclick', handleDoubleClick);

    return () => {
      document.removeEventListener('click', createRipple);
      document.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  // 清理过期的波纹
  useEffect(() => {
    const cleanup = setInterval(() => {
      setRipples(prev =>
        prev.filter(ripple => Date.now() - ripple.timestamp < 2000)
      );
    }, 100);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{
              scale: 0,
              opacity: 0.6,
            }}
            animate={{
              scale: [0, 1.2, 2],
              opacity: [0.6, 0.3, 0],
            }}
            exit={{
              scale: 2.5,
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            {/* 主波纹 */}
            <div className="w-full h-full border-2 border-primary/40 rounded-full" />

            {/* 内层波纹 */}
            <motion.div
              className="absolute inset-2 border border-primary/20 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 1.2 }}
            />

            {/* 中心点 */}
            <motion.div
              className="absolute inset-1/2 w-2 h-2 -ml-1 -mt-1 bg-primary/60 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 0] }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* 鼠标拖拽时的粒子轨迹 */}
      <DragTrail />
    </div>
  );
};

// 拖拽轨迹组件
const DragTrail = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let trailId = 0;

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newPoint = {
          x: e.clientX,
          y: e.clientY,
          id: trailId++,
        };

        setTrail(prev => [...prev.slice(-10), newPoint]); // 保持最近10个点
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  // 清理轨迹
  useEffect(() => {
    if (!isDragging) {
      const timer = setTimeout(() => setTrail([]), 1000);
      return () => clearTimeout(timer);
    }
  }, [isDragging]);

  return (
    <AnimatePresence>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-3 h-3 rounded-full bg-primary/40"
          style={{
            left: point.x - 6,
            top: point.y - 6,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{
            scale: 1 - index * 0.1,
            opacity: 0.8 - index * 0.08
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </AnimatePresence>
  );
};

export default ClickRipples;
