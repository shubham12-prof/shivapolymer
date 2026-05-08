import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-brand-grey overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #E8610A 0px,
            #E8610A 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />

            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
              HDPE • LDPE • PP Materials
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Premium Polymer <br />
            <span className="text-brand-orange">Material Supplier</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Polytech Materials supplies high-quality HDPE, LDPE, and PP
            materials for industrial, packaging, and manufacturing applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/products" size="lg" variant="primary">
              Browse Products
              <ArrowRight size={16} className="ml-2" />
            </Button>

            <Button href="/contact" size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
