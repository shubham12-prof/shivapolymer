import type { Metadata } from 'next'
import SectionHeader from '@/components/ui/SectionHeader'
import ProductGrid from '@/components/sections/ProductGrid'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our full range of industrial polymer resins and compounds — polyethylene, polypropylene, ABS, nylon, PVC and more.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-grey py-16 md:py-20 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Product Catalogue
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Polymer Grades & Compounds
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Precision-engineered resins for demanding industrial applications.
              Filter by material family or browse the full catalogue below.
            </p>
          </div>
        </div>
      </section>

      <ProductGrid />
      <CtaBanner />
    </>
  )
}
