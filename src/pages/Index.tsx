import { Layout } from "@/components/layout/Layout";
import { Hero3DShowcase } from "@/components/home/Hero3DShowcase";
import { FeaturedDishes } from "@/components/home/FeaturedDishes";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero3DShowcase />
      <FeaturedDishes />
      <AboutPreview />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
