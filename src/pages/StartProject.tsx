import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const StartProject = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Start Your Project</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Let's bring your vision to life with a professional website
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">What's Included</h2>
              <div className="space-y-4">
                {[
                  "Professional design consultation",
                  "Custom responsive design",
                  "Mobile-first development",
                  "SEO optimization",
                  "Fast loading speeds",
                  "Cross-browser compatibility",
                  "Content management system",
                  "Post-launch support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <div className="mb-2 text-sm font-semibold text-primary">
                  Fixed Budget
                </div>
                <div className="mb-4 text-4xl font-bold">₹2,000</div>
                <p className="text-muted-foreground">
                  Beautiful landing page with professional design and functionality
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-6 text-2xl font-bold">Project Details</h3>
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">Your Name</label>
                  <Input placeholder="John Doe" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Phone Number</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Company/Business Name</label>
                  <Input placeholder="Your business name" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Project Description</label>
                  <Textarea
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Submit Project Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
