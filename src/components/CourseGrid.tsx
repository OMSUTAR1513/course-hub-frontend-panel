
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, BookOpen } from "lucide-react";

interface CourseGridProps {
  showAll?: boolean;
}

export const CourseGrid = ({ showAll = false }: CourseGridProps) => {
  const courses = [
    {
      id: 1,
      title: "React & TypeScript Masterclass",
      instructor: "Sarah Johnson",
      price: "$129",
      originalPrice: "$199",
      rating: 4.9,
      students: 3420,
      duration: "42 hours",
      lessons: 156,
      category: "Web Development",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      price: "$99",
      originalPrice: "$149",
      rating: 4.8,
      students: 2850,
      duration: "35 hours",
      lessons: 128,
      category: "Data Science",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Rodriguez",
      price: "$89",
      originalPrice: "$129",
      rating: 4.9,
      students: 1920,
      duration: "28 hours",
      lessons: 94,
      category: "Design",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "James Wilson",
      price: "$79",
      originalPrice: "$119",
      rating: 4.7,
      students: 4150,
      duration: "24 hours",
      lessons: 68,
      category: "Marketing",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Machine Learning with Python",
      instructor: "Dr. Lisa Park",
      price: "$149",
      originalPrice: "$229",
      rating: 4.8,
      students: 1680,
      duration: "56 hours",
      lessons: 189,
      category: "AI & ML",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "Full-Stack JavaScript",
      instructor: "Alex Thompson",
      price: "$139",
      originalPrice: "$199",
      rating: 4.9,
      students: 2940,
      duration: "48 hours",
      lessons: 172,
      category: "Web Development",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    },
  ];

  const displayedCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses designed by industry experts to help you achieve your goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                
                <CardTitle className="text-xl mb-3 line-clamp-2">{course.title}</CardTitle>
                
                <p className="text-muted-foreground mb-4">by {course.instructor}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{course.lessons} lessons</span>
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      {course.originalPrice}
                    </span>
                  </div>
                  <Button className="ml-4">
                    Enroll Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
