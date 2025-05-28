"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ImageGallery = () => {
  // 创建示例图片数据，不同高度模拟瀑布流效果
  const images = [
    { id: 1, height: "h-64" },
    { id: 2, height: "h-80" },
    { id: 3, height: "h-72" },
    { id: 4, height: "h-96" },
    { id: 5, height: "h-60" },
    { id: 6, height: "h-84" },
    { id: 7, height: "h-72" },
    { id: 8, height: "h-80" },
    { id: 9, height: "h-64" },
    { id: 10, height: "h-88" },
    { id: 11, height: "h-76" },
    { id: 12, height: "h-68" },
    { id: 13, height: "h-80" },
    { id: 14, height: "h-72" },
    { id: 15, height: "h-64" },
    { id: 16, height: "h-96" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Inspired
          </h2>
          <p className="text-lg text-muted-foreground">
            Get inspired by what others are creating with Raphael
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="masonry"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="masonry-item"
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-primary/10">
                <motion.div
                  className={`${image.height} bg-gradient-to-br from-secondary/30 to-accent/30 relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder for image */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center text-muted-foreground">
                      <motion.div
                        className="w-16 h-16 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-2xl">🎨</span>
                      </motion.div>
                      <p className="text-sm group-hover:text-foreground transition-colors duration-300">AI Generated Image {image.id}</p>
                    </div>
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-white text-center"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-8 h-8 border-2 border-white rounded-full mx-auto mb-2 flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-sm">↗</span>
                      </motion.div>
                      <motion.p
                        className="text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        View
                      </motion.p>
                    </motion.div>
                  </motion.div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.05, backgroundColor: "rgb(67 102 110)" }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Images
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
