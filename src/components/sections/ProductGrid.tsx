'use client'

import { useState } from 'react'
import { FlaskConical, SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

const categories = [
  'All',
  ...Array.from(new Set(products.map((p) => p.category))),
]

export default function ProductGrid() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          <div className="flex items-center gap-2 text-brand-grey-light mr-2">
            <SlidersHorizontal size={15} />
            <span className="text-sm font-medium">Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'px-4 py-1.5 rounded text-sm font-semibold border transition-all duration-200',
                active === cat
                  ? 'bg-brand-orange text-white border-brand-orange'
                  : 'bg-white text-brand-grey-light border-brand-grey-border hover:border-brand-orange hover:text-brand-orange'
              )}
            >
              {cat}
            </button>
          ))}

          <span className="ml-auto text-sm text-brand-grey-light">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.slug}
              className="group border border-brand-grey-border rounded-lg overflow-hidden hover:border-brand-orange hover:shadow-md transition-all duration-200 bg-white flex flex-col"
            >
              <div className="h-1.5 w-full bg-brand-grey-bg group-hover:bg-brand-orange transition-colors duration-200" />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-brand-grey-bg flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors duration-200">
                    <FlaskConical
                      size={20}
                      className="text-brand-grey-light group-hover:text-brand-orange transition-colors duration-200"
                    />
                  </div>

                  <span className="text-xs font-bold text-brand-orange tracking-widest uppercase bg-brand-orange/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-brand-grey mb-2 group-hover:text-brand-orange transition-colors duration-200">
                  {product.name}
                </h3>

                <p className="text-brand-grey-light text-sm leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                <div className="border-t border-brand-grey-border pt-4 space-y-2">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-brand-grey-light">{key}</span>

                      <span className="font-semibold text-brand-grey">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
