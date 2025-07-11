
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CourseGrid } from "@/components/CourseGrid";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "home" && (
        <>
          <Hero />
          <Stats />
          <CourseGrid />
        </>
      )}
      
      {activeTab === "courses" && (
        <div className="pt-20">
          <CourseGrid showAll={true} />
        </div>
      )}
      
      {activeTab === "dashboard" && (
        <div className="pt-20 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">My Courses</h3>
              <p className="text-muted-foreground">3 Active Courses</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Progress</h3>
              <p className="text-muted-foreground">67% Average</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Certificates</h3>
              <p className="text-muted-foreground">2 Earned</p>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === "admin" && (
        <div className="pt-20 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Total Courses</h3>
              <p className="text-3xl font-bold text-primary">24</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Total Students</h3>
              <p className="text-3xl font-bold text-primary">1,247</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Revenue</h3>
              <p className="text-3xl font-bold text-primary">$48,392</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Active Sales</h3>
              <p className="text-3xl font-bold text-primary">156</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
