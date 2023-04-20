import Layout from "@/components/layout/layout";
import CustomHead from "@/head/Head";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"), {
  loading: () => <p>Loading...</p>,
});
const HowItWorks = dynamic(() => import("./HowItWorks"), {
  loading: () => <p>Loading...</p>,
});
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"), {
  loading: () => <p>Loading...</p>,
});
const FeaturesServices = dynamic(() => import("./FeaturesServices"), {
  loading: () => <p>Loading...</p>,
});
const WhyUs = dynamic(() => import("./WhyUs"), {
  loading: () => <p>Loading...</p>,
});
const FeaturesProduct = dynamic(() => import("./FeaturesProduct"), {
  loading: () => <p>Loading...</p>,
});
const BlogNews = dynamic(() => import("./BlogNews"), {
  loading: () => <p>Loading...</p>,
});
const CtaWidgets = dynamic(() => import("./CtaWidgets"), {
  loading: () => <p>Loading...</p>,
});

function Home() {
  return (
    <>
      <CustomHead
        title="Listivo | Home"
        content="Search for a service is free and easy – it only takes a few simple steps!  Find the best service for your needs."
      />
      <Layout baseTheme="primary-theme">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <FeaturesServices />
        <WhyUs />
        <FeaturesProduct />
        <BlogNews />
        <CtaWidgets />
      </Layout>
    </>
  );
}

export default Home;
