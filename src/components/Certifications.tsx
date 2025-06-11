
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Oracle AI Vector Search Certified Professional',
      issuer: 'Oracle',
      description: 'Advanced certification in AI and vector search technologies',
      url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=40FB5B9B3B8F586E906A14F60D0F177FB204A395986C509D6CF4F1D925EA2D9A',
      color: 'bg-red-500'
    },
    {
      title: 'Object Oriented Programming Specialization',
      issuer: 'University of London',
      description: 'Comprehensive specialization in OOP principles and design patterns',
      url: 'https://www.coursera.org/account/accomplishments/verify/M2NNPL9JQJXA',
      color: 'bg-blue-500'
    },
    {
      title: 'Google IT Automation with Python',
      issuer: 'Google',
      description: 'Professional certificate in IT automation using Python',
      url: 'https://www.coursera.org/account/accomplishments/verify/83G9Y48TUGKA',
      color: 'bg-green-500'
    },
    {
      title: 'Java ML for Computer Vision',
      issuer: 'Infosys',
      description: 'Specialized course in machine learning applications for computer vision',
      url: 'https://www.coursera.org/account/accomplishments/verify/M2NNPL9JQJXA',
      color: 'bg-purple-500'
    },
    {
      title: 'Joy of Computing Using Python',
      issuer: 'IIT Madras',
      description: 'Comprehensive Python programming course from premier institute',
      url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS31S2370231802145639',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and specialized training from leading institutions and tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover-scale hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${cert.color} rounded-lg`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
