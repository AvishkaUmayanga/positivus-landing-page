import CaseStudies from "@/components/case studies/CaseStudies";
import ContactUs from "@/components/contact us/ContactUs";
import FreeProposal from "@/components/free proposal/FreeProposal";
import HeroSection from "@/components/hero section/HeroSection";
import ServicesSection from "@/components/services/ServicesSection";
import OurTeam from "@/components/team/OurTeam";
import Testimonials from "@/components/testimonials/Testimonials";
import WorkingProcess from "@/components/working process/WorkingProcess";

export default function Home() {
  return (
    <main className="flex flex-col gap-36 px-12 py-3 2xl:px-20 max-md:px-5">
      <HeroSection />
      <ServicesSection />
      <FreeProposal />
      <CaseStudies />
      <WorkingProcess />
      <OurTeam />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
