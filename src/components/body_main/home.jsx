import dynamic from 'next/dynamic'

const HeroBanner = dynamic(() => import('../containers/home/hero'), {
  loading: () => <p>Loading...</p>,
})
const CtaWidgets = dynamic(() => import('../containers/home/cta'), {
  loading: () => <p>Loading...</p>,
})
const BlogNews = dynamic(() => import('../containers/home/blogNews'), {
  loading: () => <p>Loading...</p>,
})
const FeaturesProduct = dynamic(() => import('../containers/home/featuredProducts'), {
  loading: () => <p>Loading...</p>,
})
const FeaturesServices = dynamic(() => import('../containers/home/featuredServices'), {
  loading: () => <p>Loading...</p>,
})
const HowItWorks = dynamic(() => import('../containers/home/howItWorks'), {
  loading: () => <p>Loading...</p>,
})
const WhyChooseUs = dynamic(() => import('../containers/home/whyChooseUs'), {
  loading: () => <p>Loading...</p>,
})
const WhyUs = dynamic(() => import('../containers/home/whyus'), {
  loading: () => <p>Loading...</p>,
})

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <HowItWorks />
      <WhyChooseUs />
      <FeaturesServices />
      <WhyUs />
      <FeaturesProduct />
      <BlogNews />
      <CtaWidgets />
    </>
  )
}

export default HomePage