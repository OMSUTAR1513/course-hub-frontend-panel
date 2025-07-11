
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">CourseHub</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering learners worldwide with high-quality online courses. 
              Your journey to expertise starts here.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Student Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">support@coursehub.com</p>
                  <p className="text-gray-300">hello@coursehub.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-blue-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-blue-400" />
                <p className="text-gray-300">
                  123 Learning Street<br />
                  Education City, EC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2024 CourseHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
