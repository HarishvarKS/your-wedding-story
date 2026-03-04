import HeroSection from '@/components/HeroSection';
import ValuesSection from '@/components/ValuesSection';
import OfferingsSection from '@/components/OfferingsSection';
import ApproachSection from '@/components/ApproachSection';
import ServicesSection from '@/components/ServicesSection';
import FounderSection from '@/components/FounderSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ValuesSection />
      <OfferingsSection />
      <ApproachSection />
      <ServicesSection />
      <FounderSection />
      <FooterSection />
    </main>
  );
};

export default Index;
