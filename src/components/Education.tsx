
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Trophy, Calendar } from 'lucide-react';

const Education = () => {
  const achievements = [
    { title: '400+ LeetCode Problems Solved', icon: '💻' },
    { title: '1st Place - Coding Contest 2024', icon: '🥇' },
    { title: '2nd Place - Chess Tournament 2024', icon: '♟️' }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements in Computer Science Engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-scale hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-foreground mb-2">
                    B.Tech in Computer Science and Engineering
                  </CardTitle>
                  <div className="text-lg text-muted-foreground mb-2">
                    Swami Vivekananda Institute of Science and Technology
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    Affiliated to MAKAUT (Maulana Abul Kalam Azad University of Technology)
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>2021 - 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      <span className="font-semibold text-primary">CGPA: 8.28</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-background rounded-lg border hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <span className="text-sm font-medium text-foreground">
                        {achievement.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 text-muted-foreground">
                <p>
                  • Maintaining excellent academic performance with consistent high grades across all semesters
                </p>
                <p>
                  • Active participation in competitive programming with 400+ solved problems on LeetCode
                </p>
                <p>
                  • Winner of institutional coding contests demonstrating strong problem-solving abilities
                </p>
                <p>
                  • Well-rounded development through participation in both technical and strategic competitions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
