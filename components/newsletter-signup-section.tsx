"use client" // Ensure this is a client component

import { useState, useEffect, useRef } from "react"; // Added useRef
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the card element

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    if (email.includes("test@error.com")) { // Simulate error
      setError("Failed to subscribe. Please try again later.");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) { // Check if cardRef.current is not null
            observer.unobserve(cardRef.current); // Unobserve after animation
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) { // Check if cardRef.current is not null on cleanup
        observer.unobserve(cardRef.current);
      }
      observer.disconnect(); // Disconnect observer
    };
  }, []);

  return (
    // Reduce top padding/margin here to lessen space from News section. py-12 from py-20
    <section id="newsletter" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Card 
          ref={cardRef} // Assign ref to the card
          className={`max-w-2xl mx-auto bg-[#f4f4f4] border-accent-green/20 p-8 md:p-10 shadow-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} // Removed transition-opacity, animation class will handle opacity
        >
          <CardHeader className="text-center mb-4">
            {/* Reverted title to text-charcoal */}
            <CardTitle className="text-2xl md:text-3xl font-bold text-charcoal">Stay Updated</CardTitle>
            {/* Reverted description to text-gray-600 */}
            <CardDescription className="text-gray-600">
              Subscribe to our newsletter for the latest AI insights and company news.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-base p-3 border-gray-300 focus:border-accent-green focus:ring-accent-green"
                  />
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-accent-green text-charcoal hover:bg-accent-green/90 transition-all duration-300 hover:scale-105 group py-3 text-base"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    // Group icon and text for consistent animation
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /> 
                      Subscribe to Newsletter
                    </span>
                  )}
                </Button>
              </form>
            ) : (
              // Reverted success message card bg to bg-accent-green/5, text-charcoal for title, text-gray-600 for message
              <div className="text-center p-6 bg-accent-green/5 border border-accent-green/20 rounded-lg">
                <CheckCircle2 className="h-12 w-12 text-accent-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-charcoal">Subscription Confirmed!</h3>
                <p className="text-gray-600">Thank you for subscribing. You'll receive our next newsletter soon.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
