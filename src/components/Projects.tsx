
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Predicting Waste Generation',
      description: 'Merged multi-source time-series data and trained ML models to predict waste generation patterns. Achieved blended RMSE of 9,322 using advanced ensemble methods.',
      techStack: ['LSTM', 'XGBoost', 'Time Series Analysis', 'Python'],
      githubUrl: 'https://github.com/Buroush/Predicting-Waste-Generation',
      liveUrl: null,
      category: 'Machine Learning'
    },
    {
      title: 'The Image Processing Software (TIPS)',
      description: 'Built a comprehensive CLI-based image processing software using C and shell scripting. Implemented efficient data structures for RGB, Grayscale, and Binary image operations.',
      techStack: ['C', 'Shell Script', 'Data Structures', 'Image Processing'],
      githubUrl: 'https://github.com/Buroush/TIPS-The-Image-Processing-Software',
      liveUrl: null,
      category: 'Systems Programming'
    },
    {
      title: 'ReContent - Content Recommendation System',
      description: 'Developed a web-based machine learning recommendation system for media content using collaborative filtering and content-based approaches.',
      techStack: ['Flask', 'Scikit-learn', 'Python', 'HTML/CSS'],
      githubUrl: null,
      liveUrl: 'https://project-aiors.github.io/recontent',
      category: 'Web Development'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning Machine Learning, Systems Programming, and Web Development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
