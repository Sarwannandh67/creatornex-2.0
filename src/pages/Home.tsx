import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          CreatorNex - India's Leading AI-Powered Influencer Marketing Platform
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Transform your brand's digital presence with cutting-edge AI technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
          <Button 
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => navigate('/partner-program')}
          >
            Join as Partner
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => navigate('/events')}
          >
            View Events
          </Button>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Why Choose CreatorNex?</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">AI-Powered Matching</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Connect with the perfect creators for your brand using our advanced AI technology
            </p>
            <Link to="/services/ai-matching" className="text-primary hover:underline text-sm sm:text-base">Learn more about AI matching →</Link>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Analytics & Insights</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Track campaign performance and get detailed insights to optimize your strategy
            </p>
            <Link to="/services/analytics" className="text-primary hover:underline text-sm sm:text-base">Explore analytics features →</Link>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Dedicated Support</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
              Get personalized support from our team of experts
            </p>
            <Link to="/contact" className="text-primary hover:underline text-sm sm:text-base">Contact our team →</Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2">
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              Book a free consultation with our experts and discover how CreatorNex can transform your influencer marketing strategy.
            </p>
            <Link to="/contact" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Book Free Consultation</Button>
            </Link>
          </div>
          <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Explore Our Services</h2>
            <ul className="text-left space-y-2 mb-4">
              <li><Link to="/services/influencer-marketing" className="text-primary hover:underline text-sm sm:text-base">→ Influencer Marketing</Link></li>
              <li><Link to="/services/content-creation" className="text-primary hover:underline text-sm sm:text-base">→ Content Creation</Link></li>
              <li><Link to="/services/social-media" className="text-primary hover:underline text-sm sm:text-base">→ Social Media Management</Link></li>
              <li><Link to="/services/ai-tools" className="text-primary hover:underline text-sm sm:text-base">→ AI-Powered Tools</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 