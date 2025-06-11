
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'Python', 'Java'],
      icon: '💻'
    },
    {
      title: 'Machine Learning',
      skills: ['Regression', 'Random Forest', 'XGBoost', 'SVM', 'k-means', 'Naive Bayes', 'Anomaly Detection'],
      icon: '🤖'
    },
    {
      title: 'Deep Learning',
      skills: ['CNNs', 'MLPs', 'GANs', 'VAEs', 'FNNs'],
      icon: '🧠'
    },
    {
      title: 'Tools & OS',
      skills: ['Linux (Ubuntu)', 'Git', 'Jupyter Notebook'],
      icon: '🛠️'
    },
    {
      title: 'Core Areas',
      skills: ['DSA', 'Image Processing', 'OOP'],
      icon: '⚡'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans across multiple domains of computer science and engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
