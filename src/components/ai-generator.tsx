"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, Wand2, Settings } from "lucide-react";
import { motion } from "framer-motion";

const AIGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Image Generator
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Input */}
                <div className="space-y-6">
                  {/* Image Upload Area */}
                  <motion.div
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgb(208 192 162 / 0.5)",
                      backgroundColor: "rgb(208 192 162 / 0.05)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                    <p className="text-muted-foreground mb-2 group-hover:text-foreground transition-colors duration-300">Add Image</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                      Click to upload or drag and drop
                    </p>
                  </motion.div>

                  {/* Description Prompt */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Description prompt
                    </label>
                    <Textarea
                      placeholder="What do you want to see?"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[120px] bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Control Options */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "🎨 Same Artist",
                      "🖼️ Style",
                      "🎭 Character",
                      "🏆 Lighting",
                      "📷 Composition"
                    ].map((label, index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-200 hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {label}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Settings */}
                <div className="space-y-6">
                  {/* Negative Prompt */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Negative Prompt
                    </label>
                    <Textarea
                      placeholder="What you don't want to see..."
                      value={negativePrompt}
                      onChange={(e) => setNegativePrompt(e.target.value)}
                      className="min-h-[100px] bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  {/* Quality Setting */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      High Quality
                    </label>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary hover:bg-primary/30"
                    >
                      ✨ High Quality
                    </Badge>
                  </div>

                  {/* Generate Button */}
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border hover:bg-secondary/50"
                      >
                        Clear
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Random
                      </Button>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !prompt.trim()}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 py-3 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        {isGenerating ? (
                          <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <motion.span
                              animate={{ opacity: [1, 0.7, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              Generating...
                            </motion.span>
                          </motion.div>
                        ) : (
                          <motion.div
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 20 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Wand2 className="w-4 h-4" />
                            </motion.div>
                            Generate
                          </motion.div>
                        )}

                        {/* Shimmer effect for generate button */}
                        {!isGenerating && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AIGenerator;
