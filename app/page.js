import Image from "next/image";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/AboutUs";
import ProductSection from "@/components/ProductSection";
import ProductsGridSection from "@/components/ProductsGridSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ProductsGridSection />
      <ContactSection />
    </div>
  );
}
