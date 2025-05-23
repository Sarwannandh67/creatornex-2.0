import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function PartnerProgram() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center text-foreground">Partner Program</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-center">
          Join our network of trusted partners and grow your business with CreatorNex
        </p>

        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">For Influencers</CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">Grow your influence and monetize your content</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Access to premium brand collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Advanced analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Dedicated support team</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Competitive commission rates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate('/contact?subject=Partnership+Inquiry')}
              >
                Join as Influencer
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">For Brands</CardTitle>
              <CardDescription className="text-sm sm:text-base text-muted-foreground">Connect with the right creators for your brand</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">AI-powered creator matching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Campaign performance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary font-bold">✓</span>
                  <span className="text-sm sm:text-base text-muted-foreground">Custom reporting and analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate('/contact?subject=Partnership+Inquiry')}
              >
                Join as Brand
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-card p-4 sm:p-8 rounded-lg border border-border">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-foreground">Why Partner With Us?</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <div className="text-center p-4">
              <h3 className="font-semibold mb-2 text-lg sm:text-xl text-foreground">Innovation</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Access to cutting-edge AI technology for influencer marketing
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold mb-2 text-lg sm:text-xl text-foreground">Growth</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Scale your business with our extensive network of creators and brands
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-semibold mb-2 text-lg sm:text-xl text-foreground">Support</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Dedicated support team to help you succeed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 