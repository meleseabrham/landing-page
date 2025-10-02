import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with seamless checkout experience",
      category: "Web Development",
    },
    {
      title: "Corporate Website",
      description: "Professional business site with content management",
      category: "Web Design",
    },
    {
      title: "Portfolio Site",
      description: "Creative showcase for artists and designers",
      category: "Web Design",
    },
    {
      title: "Restaurant Website",
      description: "Beautiful site with online ordering system",
      category: "Web Development",
    },
    {
      title: "Healthcare Portal",
      description: "Patient management and appointment booking",
      category: "Web Development",
    },
    {
      title: "Real Estate Site",
      description: "Property listings with advanced search",
      category: "Web Design",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Our Portfolio</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our recent projects and see the quality of work we deliver
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-8 transition-smooth hover:shadow-elegant"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-primary/5">
                <ExternalLink className="h-12 w-12 text-primary opacity-50" />
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">
                {project.category}
              </div>
              <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/start-project">
            <Button variant="hero" size="xl">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
