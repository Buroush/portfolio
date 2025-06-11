
import React, { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    // Intersection Observer to track which sections are visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(sectionId));
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base animated background elements */}
      <div 
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{
          top: `${20 + scrollY * 0.1}%`,
          left: `${10 + scrollY * 0.05}%`,
          transform: `rotate(${scrollY * 0.1}deg)`,
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-accent/10 rounded-full blur-2xl animate-pulse"
        style={{
          top: `${60 + scrollY * 0.08}%`,
          right: `${15 + scrollY * 0.03}%`,
          transform: `rotate(${-scrollY * 0.08}deg)`,
        }}
      />

      {/* Hero Section - Floating Tech Logos */}
      {visibleSections.has('home') && (
        <div className="absolute inset-0">
          <div 
            className="absolute text-4xl opacity-20 animate-pulse"
            style={{
              top: '25%',
              left: `${15 + scrollY * 0.02}%`,
              transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`,
            }}
          >
            💻
          </div>
          <div 
            className="absolute text-3xl opacity-15 animate-pulse"
            style={{
              top: '35%',
              right: `${20 + scrollY * 0.03}%`,
              transform: `translateY(${Math.cos(scrollY * 0.015) * 15}px)`,
              animationDelay: '1s',
            }}
          >
            🐍
          </div>
          <div 
            className="absolute text-3xl opacity-15 animate-pulse"
            style={{
              bottom: '40%',
              left: `${25 + scrollY * 0.01}%`,
              transform: `translateY(${Math.sin(scrollY * 0.008) * 25}px)`,
              animationDelay: '2s',
            }}
          >
            ☕
          </div>
        </div>
      )}

      {/* Skills Section - Data Structure Shapes */}
      {visibleSections.has('skills') && (
        <div className="absolute inset-0">
          {/* Binary Tree */}
          <div 
            className="absolute opacity-10 animate-pulse"
            style={{
              top: '20%',
              left: `${10 + scrollY * 0.01}%`,
              transform: `rotate(${scrollY * 0.05}deg)`,
            }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full mb-4 mx-auto"></div>
            <div className="flex gap-8">
              <div className="w-12 h-12 bg-primary/15 rounded-full"></div>
              <div className="w-12 h-12 bg-primary/15 rounded-full"></div>
            </div>
          </div>
          
          {/* Graph Network */}
          <div 
            className="absolute opacity-10"
            style={{
              top: '60%',
              right: `${15 + scrollY * 0.02}%`,
              transform: `scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
            }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-accent/30 rounded-full absolute top-0 left-0"></div>
              <div className="w-8 h-8 bg-accent/30 rounded-full absolute top-12 left-12"></div>
              <div className="w-8 h-8 bg-accent/30 rounded-full absolute top-0 left-24"></div>
              <div className="w-0.5 h-12 bg-accent/20 absolute top-2 left-4 rotate-45"></div>
              <div className="w-0.5 h-12 bg-accent/20 absolute top-2 left-16 -rotate-45"></div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section - GitHub and Code Elements */}
      {visibleSections.has('projects') && (
        <div className="absolute inset-0">
          <div 
            className="absolute text-5xl opacity-10 animate-pulse"
            style={{
              top: `${30 + scrollY * 0.015}%`,
              left: `${5 + scrollY * 0.02}%`,
              transform: `translateX(${Math.sin(scrollY * 0.01) * 30}px)`,
            }}
          >
            📁
          </div>
          <div 
            className="absolute text-4xl opacity-15"
            style={{
              bottom: '30%',
              right: `${10 + scrollY * 0.01}%`,
              transform: `translateY(${Math.cos(scrollY * 0.012) * 20}px) rotate(${scrollY * 0.03}deg)`,
            }}
          >
            🔧
          </div>
          
          {/* Code brackets animation */}
          <div 
            className="absolute text-6xl opacity-5 font-mono text-primary"
            style={{
              top: '45%',
              left: `${20 + scrollY * 0.005}%`,
              transform: `scale(${1 + Math.sin(scrollY * 0.008) * 0.2})`,
            }}
          >
            {'{}'}
          </div>
        </div>
      )}

      {/* Experience Section - Professional Icons */}
      {visibleSections.has('experience') && (
        <div className="absolute inset-0">
          <div 
            className="absolute text-5xl opacity-15 animate-pulse"
            style={{
              top: '25%',
              right: `${20 + scrollY * 0.01}%`,
              transform: `translateY(${Math.sin(scrollY * 0.01) * 15}px)`,
            }}
          >
            🏢
          </div>
          
          {/* Progress bar simulation */}
          <div 
            className="absolute opacity-10"
            style={{
              bottom: '35%',
              left: `${15 + scrollY * 0.005}%`,
            }}
          >
            <div className="w-32 h-2 bg-primary/20 rounded-full">
              <div 
                className="h-full bg-primary/40 rounded-full transition-all duration-1000"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Certifications Section - Badge Icons */}
      {visibleSections.has('certifications') && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-10 animate-pulse"
              style={{
                top: `${25 + i * 15}%`,
                left: `${10 + i * 20 + scrollY * 0.01}%`,
                transform: `rotate(${scrollY * 0.02 + i * 45}deg) scale(${1 + Math.sin(scrollY * 0.01 + i) * 0.1})`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              🏆
            </div>
          ))}
        </div>
      )}

      {/* Education Section - Academic Elements */}
      {visibleSections.has('education') && (
        <div className="absolute inset-0">
          <div 
            className="absolute text-5xl opacity-15 animate-pulse"
            style={{
              top: '30%',
              left: `${15 + scrollY * 0.008}%`,
              transform: `translateY(${Math.cos(scrollY * 0.01) * 20}px)`,
            }}
          >
            🎓
          </div>
          
          <div 
            className="absolute text-3xl opacity-10"
            style={{
              bottom: '40%',
              right: `${25 + scrollY * 0.01}%`,
              transform: `rotate(${scrollY * 0.05}deg)`,
            }}
          >
            📚
          </div>
          
          {/* CGPA counter visual */}
          <div 
            className="absolute opacity-5 font-bold text-2xl text-primary"
            style={{
              top: '50%',
              right: `${15 + scrollY * 0.005}%`,
            }}
          >
            8.28
          </div>
        </div>
      )}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateY(${scrollY * (0.02 + i * 0.01)}px)`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ScrollAnimations;
