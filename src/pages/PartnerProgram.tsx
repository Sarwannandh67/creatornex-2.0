import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function PartnerProgram() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Partner Program</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join our network of trusted partners and grow your business with CreatorNex
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card h-full">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-foreground">For Influencers</CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">Grow your influence and monetize your content</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Access to premium brand collaborations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Advanced analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Dedicated support team</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Competitive commission rates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg py-6"
                onClick={() => navigate('/contact?subject=Partnership+Inquiry')}
              >
                Join as Influencer
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 bg-card h-full">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl text-foreground">For Brands</CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">Connect with the right creators for your brand</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">AI-powered creator matching</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Campaign performance tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-primary font-bold text-lg">✓</span>
                  <span className="text-sm sm:text-base md:text-lg text-muted-foreground">Custom reporting and analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg py-6"
                onClick={() => navigate('/contact?subject=Partnership+Inquiry')}
              >
                Join as Brand
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-card p-6 sm:p-10 rounded-lg border border-border">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Why Partner With Us?</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <h3 className="font-semibold mb-4 text-xl sm:text-2xl text-foreground">Innovation</h3>
              <p className="text-base sm:text-lg text-muted-foreground">
                Access to cutting-edge AI technology for influencer marketing
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold mb-4 text-xl sm:text-2xl text-foreground">Growth</h3>
              <p className="text-base sm:text-lg text-muted-foreground">
                Scale your business with our extensive network of creators and brands
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="font-semibold mb-4 text-xl sm:text-2xl text-foreground">Support</h3>
              <p className="text-base sm:text-lg text-muted-foreground">
                Dedicated support team to help you succeed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 