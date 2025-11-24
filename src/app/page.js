import CallToAction from "@/components/unique/CallToAction";
import Features from "@/components/unique/Features";
import Hero from "@/components/unique/Hero";
import ProductPreview from "@/components/unique/ProductPreview";
import Testimonials from "@/components/unique/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductPreview />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
