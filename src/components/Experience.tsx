
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Building } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in gaining hands-on experience in the tech industry
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover-scale hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-foreground mb-2">
                    Machine Learning Apprentice
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span className="font-medium">IBM Edunet Foundation</span>
                    <span>•</span>
                    <span>AICTE Recognized</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>June 2023 - July 2023</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  • Completed comprehensive AICTE-recognized training program in Machine Learning fundamentals and applications
                </p>
                <p>
                  • Delivered project work on time, demonstrating proficiency in ML algorithms and data analysis techniques
                </p>
                <p>
                  • Gained hands-on experience with industry-standard tools and methodologies used in machine learning projects
                </p>
                <p>
                  • Collaborated with industry professionals and fellow apprentices to solve real-world ML challenges
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
