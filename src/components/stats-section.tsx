"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  label: string;
  value: string;
  description: string;
  color: string;
}

const StatsSection = () => {
  const [counters, setCounters] = useState({
    users: 0,
    images: 0,
    rating: 0,
  });

  const stats: StatItem[] = [
    {
      label: "Active Users",
      value: "3M+",
      description: "Monthly Active Users",
      color: "text-green-400",
    },
    {
      label: "Images Created",
      value: "1,530",
      description: "Images Generated per Minute",
      color: "text-blue-400",
    },
    {
      label: "User Rating",
      value: "4.9",
      description: "Average Image Quality Score",
      color: "text-purple-400",
    },
  ];

  // 动画计数器效果
  useEffect(() => {
    const duration = 2000; // 2秒
    const steps = 60;
    const increment = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = { ...prev };

        // 用户数计数到3000000
        if (newCounters.users < 3000000) {
          newCounters.users += 50000;
        }

        // 图片数计数到1530
        if (newCounters.images < 1530) {
          newCounters.images += 25;
        }

        // 评分计数到4.9
        if (newCounters.rating < 4.9) {
          newCounters.rating += 0.08;
        }

        return newCounters;
      });
    }, increment);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number, type: string): string => {
    if (type === "users") {
      return num >= 1000000 ? `${(num / 1000000).toFixed(1)}M+` : `${Math.floor(num / 1000)}K+`;
    }
    if (type === "rating") {
      return num.toFixed(1);
    }
    return Math.floor(num).toString();
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium mb-2">Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Millions
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the world's largest free AI Image Generator community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgb(29 28 21)",
                  boxShadow: "0 20px 40px rgba(208, 192, 162, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="mb-4 relative z-10"
                >
                  <motion.h3
                    className="text-sm font-medium text-muted-foreground mb-2"
                    whileHover={{ color: "rgb(208 192 162)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.label}
                  </motion.h3>
                  <motion.div
                    className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                    whileHover={{
                      scale: 1.15,
                      textShadow: "0 0 20px currentColor"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === 0 && formatNumber(counters.users, "users")}
                    {index === 1 && `${formatNumber(counters.images, "images")}`}
                    {index === 2 && formatNumber(counters.rating, "rating")}
                  </motion.div>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    whileHover={{ color: "rgb(208 192 162)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.description}
                  </motion.p>
                </motion.div>

                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-transparent`} />
                </motion.div>

                {/* Pulse effect */}
                <motion.div
                  className={`absolute inset-0 border-2 border-current ${stat.color} opacity-0 rounded-2xl`}
                  whileHover={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1.2]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 装饰性数字背景 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-10 left-10 text-8xl font-bold text-primary">3M</div>
          <div className="absolute top-32 right-20 text-6xl font-bold text-blue-400">1530</div>
          <div className="absolute bottom-20 left-1/3 text-7xl font-bold text-purple-400">4.9</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
