import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Highlights } from "@/components/Highlights";
import { Packages } from "@/components/Packages";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Offices } from "@/components/Offices";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <Destinations />
      <Packages />
      <Gallery />
      <Testimonials />
      <Offices />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
