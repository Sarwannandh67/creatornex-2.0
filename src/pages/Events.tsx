import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-foreground">Events</h1>
        
        {/* Ongoing Events Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Ongoing Events</h2>
          <div className="grid gap-4 sm:gap-6">
            <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl sm:text-2xl text-foreground">Hiring Event 2024</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                  <span>May 20 - June 10, 2025</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground">
                  Join our growing team! We're looking for talented individuals to help us revolutionize influencer marketing.
                  Multiple positions available across various departments.
                </p>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2 text-sm sm:text-base text-foreground">Available Positions:</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                    <li className="text-muted-foreground">Software Engineers</li>
                    <li className="text-muted-foreground">Product Managers</li>
                    <li className="text-muted-foreground">Marketing Specialists</li>
                    <li className="text-muted-foreground">Data Analysts</li>
                    <li className="text-muted-foreground">UI/UX Designers</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button 
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => navigate('/careers')}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Upcoming Events</h2>
          <div className="grid gap-4 sm:gap-6">
            <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Past Events Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Past Events</h2>
          <div className="grid gap-4 sm:gap-6">
            <Card className="w-full hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">No past events to display.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 