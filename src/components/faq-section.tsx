"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Raphael AI and how does it work?",
      answer: "Raphael AI is the world's first completely free, unlimited AI image generator powered by the FLUX.1-Dev model. It allows you to create high-quality images from text descriptions without any registration or usage limits."
    },
    {
      question: "Is Raphael AI really free to use?",
      answer: "Yes, Raphael AI is completely free to use! We are committed to being the world's largest and most powerful free AI Image Generator. There are no hidden fees, no credit card required, and no usage limits."
    },
    {
      question: "What makes Raphael AI different from other AI image generators?",
      answer: "Raphael AI is the only platform offering unlimited free access to the powerful FLUX.1-Dev model. We provide superior image quality, fast generation speed, and complete privacy protection, all without any cost or registration requirements."
    },
    {
      question: "Do I need to create an account to use Raphael AI?",
      answer: "No, you don't need to create an account or register. Simply visit raphael.app and start generating images immediately. We believe in making AI accessible to everyone without barriers."
    },
    {
      question: "What types of images can I create with Raphael AI?",
      answer: "You can create a wide variety of images including photorealistic scenes, artistic illustrations, digital art, anime-style images, and more. The FLUX.1-Dev model excels at understanding complex prompts and generating diverse visual styles."
    },
    {
      question: "How does Raphael AI protect my privacy?",
      answer: "We take privacy seriously. We don't store your prompts or generated images on our servers, and we don't require any personal information. Your creations remain completely private and are deleted after generation."
    },
    {
      question: "What is the FLUX.1-Dev model?",
      answer: "FLUX.1-Dev is a state-of-the-art AI model known for its exceptional image quality, prompt accuracy, and style versatility. It's typically expensive to use, but Raphael makes it freely available to everyone."
    },
    {
      question: "Are there any limitations to using Raphael AI?",
      answer: "While Raphael AI is free and unlimited, we maintain standard content guidelines to ensure appropriate use. The platform is designed for web use currently, with mobile apps planned for the future."
    },
    {
      question: "Can I use the generated images commercially?",
      answer: "Yes, you own the rights to the images you generate with Raphael AI. You can use them for both personal and commercial purposes, making it perfect for creators and businesses alike."
    },
    {
      question: "Is Raphael AI available on mobile devices?",
      answer: "Currently, Raphael AI is available through our website at raphael.app, which works great on mobile browsers. We're actively developing dedicated mobile apps to provide an even better experience soon."
    },
    {
      question: "How can I provide feedback or report issues?",
      answer: "We welcome your feedback! You can reach our support team at support@raphael.app. Your input helps us improve and maintain the best free AI image generation service."
    },
    {
      question: "What's next for Raphael AI?",
      answer: "We're constantly improving our service with regular updates to the AI model and user interface. Future plans include mobile apps and additional creative features, while maintaining our commitment to being completely free."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have another question? Contact us at{" "}
            <a
              href="mailto:support@raphael.app"
              className="text-primary hover:underline"
            >
              support@raphael.app
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-6 [&[data-state=open]]:text-primary">
                    <span className="mr-2 text-primary font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
