import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to CreatorNex</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The AI-powered platform revolutionizing influencer marketing
        </p>
        
        <div className="flex gap-4 justify-center mb-12">
          <Button 
            size="lg"
            onClick={() => navigate('/partner-program')}
          >
            Join as Partner
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => navigate('/events')}
          >
            View Events
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with the perfect creators for your brand using our advanced AI technology
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track campaign performance and get detailed insights to optimize your strategy
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get personalized support from our team of experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 