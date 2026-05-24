import Image from "next/image";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/AboutUs";
import ProductSection from "@/components/ProductSection";
import ProductsGridSection from "@/components/ProductsGridSection";
import ContactSection from "@/components/ContactSection";
import ScrollFadeSections from "@/components/ScrollFadeSections";

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
