"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Palette,
  Type,
  Zap,
  Shield,
  Layers
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Zero-Cost Creation",
      description: "The world's first completely free AI image generator with no usage limits or registration requirements.",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      icon: Palette,
      title: "State-of-the-Art Quality",
      description: "Powered by FLUX.1-Dev model, delivering photorealistic images with exceptional detail and artistic style control.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      icon: Type,
      title: "Advanced Text Understanding",
      description: "Superior text-to-image capabilities with accurate interpretation of complex prompts and text overlay features.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Generation",
      description: "Optimized inference pipeline ensuring rapid image generation without compromising quality.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      icon: Shield,
      title: "Enhanced Privacy Protection",
      description: "Zero data retention policy - your prompts and generated images are never stored on our servers.",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
    {
      icon: Layers,
      title: "Multi-Style Support",
      description: "Create images across various artistic styles, from photorealistic to anime, oil paintings to digital art.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
    },
  ];

  return (
    <section id="feature" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Features of Raphael
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of AI image generation - powerful, free, and privacy-focused.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02]">
                  <CardContent className="p-6 relative overflow-hidden">
                    <motion.div
                      className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                      whileHover={{
                        scale: 1.15,
                        rotate: 5,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className={`w-6 h-6 ${feature.color}`} />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold text-foreground mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      whileHover={{ color: "rgb(208 192 162)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>

                    {/* Floating particles effect */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <motion.div
                      className="absolute bottom-6 right-8 w-1 h-1 bg-primary/20 rounded-full"
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
