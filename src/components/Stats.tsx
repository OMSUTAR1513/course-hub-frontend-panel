
import { Users, BookOpen, Award, Globe } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: "12,000+",
      label: "Active Students",
      description: "Learning worldwide"
    },
    {
      icon: BookOpen,
      value: "50+",
      label: "Expert Courses",
      description: "Across multiple fields"
    },
    {
      icon: Award,
      value: "8,500+",
      label: "Certificates Earned",
      description: "Career advancement"
    },
    {
      icon: Globe,
      value: "45+",
      label: "Countries",
      description: "Global community"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 group-hover:bg-opacity-30 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-100">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
