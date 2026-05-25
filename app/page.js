import Image from "next/image";
import HeroSection from "@/components/homepage/hero";
import AboutSection from "@/components/homepage/AboutUs";
import ProductSection from "@/components/homepage/ProductSection";
import ProductsGridSection from "@/components/homepage/ProductsGridSection";
import ContactSection from "@/components/homepage/ContactSection";
import ScrollFadeSections from "@/components/homepage/ScrollFadeSections";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <HeroSection />
      <ScrollFadeSections
        firstSection={<AboutSection />}
        secondSection={<ProductSection />}
      />
      <ProductsGridSection />
      <ContactSection />
    </div>
  );
}
