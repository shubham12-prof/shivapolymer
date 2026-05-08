import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="bg-brand-grey py-16 md:py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand-orange/10 skew-x-12 translate-x-16 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-brand-orange pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Specify the Right Material?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Share your application requirements and our technical team will
            recommend the most suitable polymer grade — with full datasheet and
            pricing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Request a Quote <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button href="/products" size="lg" variant="outline">
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
