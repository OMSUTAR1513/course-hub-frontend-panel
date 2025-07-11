
import { Button } from "@/components/ui/button";
import { Play, Star, Users, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.9/5 from 2,500+ reviews)</span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Master New Skills with
              <span className="text-primary"> Expert-Led Courses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of learners advancing their careers with our comprehensive online courses. 
              From beginner to expert, we have the perfect learning path for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Start Learning Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Courses
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>12,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>50+ Courses</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <Play className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced React Development</h3>
              <p className="text-muted-foreground mb-4">Master modern React patterns and best practices</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">$99</span>
                <Button size="sm">Enroll Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
