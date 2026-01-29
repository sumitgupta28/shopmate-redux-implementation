import { Hero } from './components/Hero'
import { Testimonials } from './components/Testimonials'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Faq } from './components/Faq'

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}
