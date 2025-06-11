
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              Always open to discussing new opportunities, collaborations, and interesting projects.
            </p>
          </div>

          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/Buroush"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200 hover-scale"
            >
              <Github className="h-5 w-5 text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/buroush/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200 hover-scale"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground" />
            </a>
            <a
              href="https://x.com/Buroush"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted hover:bg-muted/80 rounded-full transition-colors duration-200 hover-scale"
            >
              <Twitter className="h-5 w-5 text-muted-foreground" />
            </a>
          </div>

          <div className="border-t border-border pt-8 w-full text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Pankaj Mondal. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
