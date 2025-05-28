"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const HeroSection = () => {
  const features = ["100% Free", "Powered by Flux.1 Dev", "No Login Required", "Unlimited Generations"];

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 mb-8"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="text-3xl font-bold text-foreground">Raphael AI</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
        >
          Raphael AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          Create stunning AI-generated images in seconds
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          World's First Unlimited Free AI Image Generator
        </motion.p>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {features.map((feature, index) => (
            <Badge
              key={feature}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground border border-border hover:bg-secondary/70 transition-colors"
            >
              {feature}
            </Badge>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
