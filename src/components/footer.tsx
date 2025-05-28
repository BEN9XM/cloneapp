"use client";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const aboutLinks = [
    { label: "Features", href: "#feature" },
    { label: "Pricing", href: "/pricing" },
    { label: "Partners", href: "/partners" },
  ];

  const toolsLinks = [
    { label: "Expand Image", href: "/uncrop" },
    { label: "Face Swap", href: "https://faceswap.so" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/tos" },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">Raphael AI</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Raphael AI: Free, unlimited AI image generator powered by FLUX.1-Dev.
              No registration, no limits.
            </p>
          </div>

          {/* About section */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools section */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Tools</h3>
            <ul className="space-y-3">
              {toolsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Raphael AI All rights reserved.
          </p>

          <div className="flex space-x-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              This is a clone of Raphael AI website built with Next.js, shadcn/ui, and Tailwind CSS for demonstration purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
