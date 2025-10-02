import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import Navbar from "@/components/Navbar";

const ViewWork = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Excellence",
      description: "Complete online store with payment integration, inventory management, and customer portal",
      features: ["Payment Gateway", "Admin Dashboard", "Customer Reviews"],
      testimonial: "Increased our online sales by 200% in the first month!",
      client: "Retail Store Owner",
    },
    {
      title: "Corporate Showcase",
      description: "Professional corporate website with blog, team profiles, and career portal",
      features: ["Content Management", "Blog System", "Career Portal"],
      testimonial: "Our new website perfectly represents our brand values.",
      client: "Tech Company CEO",
    },
    {
      title: "Restaurant Online",
      description: "Beautiful restaurant website with online ordering and table reservation",
      features: ["Online Ordering", "Reservations", "Menu Management"],
      testimonial: "Bookings increased by 150% since launch!",
      client: "Restaurant Owner",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">View Our Work</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real projects, real results. See how we've helped businesses succeed online
          </p>
        </div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:shadow-elegant"
            >
              <div className="grid md:grid-cols-2">
                <div className="flex items-center justify-center bg-primary/5 p-12">
                  <ExternalLink className="h-24 w-24 text-primary opacity-50" />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="mb-4 text-3xl font-bold">{project.title}</h3>
                  <p className="mb-6 text-muted-foreground">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-secondary/50 p-6">
                    <div className="mb-2 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-2 italic text-muted-foreground">"{project.testimonial}"</p>
                    <p className="text-sm font-semibold">- {project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-8">
            <Link to="/portfolio">
              <Button variant="hero-outline" size="xl">
                View Full Portfolio
              </Button>
            </Link>
          </div>
          <Link to="/start-project">
            <Button variant="hero" size="xl">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewWork;
