import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">About Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Passionate web professionals dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-16 rounded-2xl border border-border bg-card p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              We are a team of experienced designers and developers committed to delivering 
              high-quality web solutions that help businesses thrive in the digital world.
            </p>
            <p className="text-lg text-muted-foreground">
              With years of experience and hundreds of successful projects, we understand 
              what it takes to create websites that not only look beautiful but also drive 
              real business results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Expert Team</h3>
              <p className="text-muted-foreground">
                Skilled professionals with diverse expertise
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Proven Quality</h3>
              <p className="text-muted-foreground">
                Delivering excellence in every project
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-6">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Client First</h3>
              <p className="text-muted-foreground">
                Your success is our priority
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Work With Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
