"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Anderson",
      role: "Digital Artist",
      company: "ArtStation",
      content: "Raphael's AI Image Generator is a game-changer. The FLUX.1-Dev model produces incredibly detailed images that I use as concept art. The fact that it's completely free is mind-blowing!",
      rating: 5,
      avatar: "https://ext.same-assets.com/455539340/3927233419.png",
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "Marketing Director",
      company: "CreativeHub",
      content: "We've tried many AI image generators, but Raphael AI stands out. The image quality is exceptional, and the unlimited free generations save us thousands in marketing visuals each month.",
      rating: 5,
      avatar: "https://ext.same-assets.com/455539340/1428026643.png",
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Independent Game Developer",
      company: "",
      content: "As a solo game dev, Raphael AI Image Generator is invaluable. The speed and quality of asset generation are unmatched, and being free means I can focus my budget elsewhere.",
      rating: 5,
      avatar: "https://ext.same-assets.com/455539340/498075217.png",
    },
    {
      id: 4,
      name: "Emily Parker",
      role: "Content Creator",
      company: "YouTube",
      content: "I create thumbnails daily using Raphael AI Image Generator. The text understanding is incredible - it captures exactly what I need, and the no-registration policy makes it super convenient.",
      rating: 5,
      avatar: "https://ext.same-assets.com/455539340/1452971973.png",
    },
    {
      id: 5,
      name: "Robert Wilson",
      role: "UI/UX Designer",
      company: "TechFlow",
      content: "The FLUX.1-Dev model in Raphael AI Image Generator produces the most consistent and high-quality results I've seen. It's become our go-to tool for generating mockup images.",
      rating: 5,
      avatar: "https://ext.same-assets.com/455539340/2604028829.png",
    },
    {
      id: 6,
      name: "Jennifer Adams",
      role: "E-commerce Business Owner",
      company: "",
      content: "Running an online store requires constant image creation. Raphael's free AI Image Generator helps me create professional product photos instantly. It's literally saving my business thousands.",
      rating: 5,
      avatar: "https://ext.same-assets.com/455539340/3535323733.png",
    },
  ];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium mb-2">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Users Say About Raphael AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from creators and professionals who use our AI Image Generator daily.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="bg-card border-border max-w-4xl mx-auto">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={`star-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-secondary mr-4 flex items-center justify-center overflow-hidden">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">
                              {testimonials[currentIndex].name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-foreground">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonials[currentIndex].role}
                            {testimonials[currentIndex].company && ` at ${testimonials[currentIndex].company}`}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
