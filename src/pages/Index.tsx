import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Globe, Smartphone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="gradient-hero absolute inset-0 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Transform Your Business with
              <span className="gradient-primary bg-clip-text text-transparent"> Professional </span>
              Web Design
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Create stunning, responsive websites that captivate your audience and drive real results. 
              Expert design and development tailored to your unique vision.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/start-project">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/view-work">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Why Choose Our Services?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We deliver excellence in every aspect of web design and development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-border bg-card p-8 transition-smooth hover:shadow-elegant">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Responsive Design</h3>
              <p className="text-muted-foreground">
                Pixel-perfect designs that look stunning on all devices, from mobile to desktop, 
                ensuring your audience has a seamless experience everywhere.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-border bg-card p-8 transition-smooth hover:shadow-elegant">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized for speed and performance with cutting-edge technologies that 
                deliver blazing-fast load times and smooth interactions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-border bg-card p-8 transition-smooth hover:shadow-elegant">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-bold">SEO Optimized</h3>
              <p className="text-muted-foreground">
                Built with best SEO practices from the ground up to help your website 
                rank higher and reach more potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl">
              What You Get
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "User-friendly website layout",
                "Fully responsive mobile design",
                "Cross-browser compatibility",
                "Fast loading speeds",
                "SEO-friendly structure",
                "Clean, modern aesthetics",
                "Easy content management",
                "Post-launch support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="gradient-hero absolute inset-0 z-0" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Let's create something amazing together. Get started today with professional 
              web design that makes an impact.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/start-project">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold">Professional Web Solutions</h3>
              <p className="text-muted-foreground">Creating beautiful websites that drive results</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link to="/services" className="transition-smooth hover:text-primary">Services</Link>
              <Link to="/about" className="transition-smooth hover:text-primary">About</Link>
              <Link to="/portfolio" className="transition-smooth hover:text-primary">Portfolio</Link>
              <Link to="/contact" className="transition-smooth hover:text-primary">Contact</Link>
            </div>
            <div className="flex justify-center gap-4 md:justify-end">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-primary/10 p-3 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-primary/10 p-3 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-primary/10 p-3 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-primary/10 p-3 transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Professional Web Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
