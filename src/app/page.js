import HeroSection from "@/components/hero section/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 px-12 py-3 2xl:px-20 max-md:px-5">
      <HeroSection />
      <ServicesSection />
    </main>
  );
}
