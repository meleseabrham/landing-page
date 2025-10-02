import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Palette, Rocket, Search, Smartphone, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Web Design</h3>
            <p className="text-muted-foreground">
              Beautiful, modern designs that capture your brand essence and engage your audience.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Web Development</h3>
            <p className="text-muted-foreground">
              Custom development solutions using the latest technologies for optimal performance.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Responsive Design</h3>
            <p className="text-muted-foreground">
              Mobile-first approach ensuring your site looks perfect on all devices.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">SEO Optimization</h3>
            <p className="text-muted-foreground">
              Improve your search rankings and drive organic traffic to your website.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Performance</h3>
            <p className="text-muted-foreground">
              Lightning-fast websites optimized for speed and user experience.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">Launch Support</h3>
            <p className="text-muted-foreground">
              Complete deployment and ongoing support to keep your site running smoothly.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/start-project">
            <Button variant="hero" size="xl">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
