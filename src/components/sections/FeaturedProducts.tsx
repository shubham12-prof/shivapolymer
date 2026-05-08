import Link from 'next/link'
import { ArrowRight, FlaskConical } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { products } from '@/data/products'

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            label="Our Products"
            title="Featured Polymer Grades"
            subtitle="A selection of our most-specified resins across key material families."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-orange text-sm font-semibold hover:gap-3 transition-all duration-200 shrink-0"
          >
            View all products <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group border border-brand-grey-border rounded-lg p-6 hover:border-brand-orange hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 rounded bg-brand-grey-bg flex items-center justify-center mb-5 group-hover:bg-brand-orange/10 transition-colors duration-200">
                <FlaskConical
                  size={22}
                  className="text-brand-grey-light group-hover:text-brand-orange transition-colors duration-200"
                />
              </div>

              <span className="inline-block text-xs font-bold text-brand-orange tracking-widest uppercase mb-2">
                {product.category}
              </span>

              <h3 className="font-heading text-lg font-bold text-brand-grey mb-2 group-hover:text-brand-orange transition-colors duration-200">
                {product.name}
              </h3>

              <p className="text-brand-grey-light text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              <div className="border-t border-brand-grey-border pt-4 space-y-1.5">
                {Object.entries(product.specs)
                  .slice(0, 2)
                  .map(([key, val]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-brand-grey-light">{key}</span>
                      <span className="font-semibold text-brand-grey">
                        {val}
                      </span>
                    </div>
                  ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
