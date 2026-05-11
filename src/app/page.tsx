import Hero from '@/components/sections/Hero'
import ClientMarquee from '@/components/sections/ClientMarquee'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import IndustriesStrip from '@/components/sections/IndustriesStrip'
import WhyUs from '@/components/sections/WhyUs'
import CtaBanner from '@/components/sections/CtaBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <FeaturedProducts />
      <IndustriesStrip />
      <WhyUs />
      <CtaBanner />
    </>
  )
}
