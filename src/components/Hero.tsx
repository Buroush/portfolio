
import React from 'react';
import { Github, Linkedin, MapPin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <Avatar className="h-32 w-32 md:h-40 md:w-40">
                <AvatarImage src="/placeholder.svg" alt="Pankaj Mondal" />
                <AvatarFallback className="text-2xl md:text-3xl">PM</AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Pankaj Mondal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Computer Science Engineering Student | Machine Learning Enthusiast | Software Developer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Passionate about building intelligent systems and solving complex problems through code.
              Specialized in Machine Learning, Deep Learning, and Software Development.
            </p>
          </div>

          {/* Location Info */}
          <div className="flex justify-center items-center gap-2 mb-12 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Kolkata, West Bengal, India</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/Buroush"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/buroush/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a
              href="https://leetcode.com/u/Pankaj-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <span className="h-5 w-5 flex items-center justify-center font-bold text-orange-500">LC</span>
                LeetCode
              </Button>
            </a>
            <a
              href="https://x.com/Buroush"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Twitter className="h-5 w-5" />
                Twitter
              </Button>
            </a>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in">
            <a href="#projects">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                View My Work
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
