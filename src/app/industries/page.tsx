import type { Metadata } from 'next'
import { Building2, Package, Sprout, CheckCircle2 } from 'lucide-react'
import { industries } from '@/data/products'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'HDPE, LDPE, and PP material solutions for packaging, construction, and industrial applications.',
}

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  package: Package,
  sprout: Sprout,
}

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-brand-grey py-16 md:py-20 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Industries
            </span>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed">
              High-quality HDPE, LDPE, and PP materials for packaging,
              construction, and industrial manufacturing applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Package

            return (
              <div
                key={industry.title}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 border border-brand-grey-border rounded-lg overflow-hidden hover:border-brand-orange hover:shadow-md transition-all duration-200"
              >
                <div className="bg-brand-grey p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded bg-brand-orange/20 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-brand-orange" />
                    </div>

                    <h2 className="font-heading text-2xl font-bold text-white mb-3">
                      {industry.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2 p-8">
                  <h3 className="font-heading font-bold text-brand-grey text-sm uppercase tracking-widest mb-5">
                    Applications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.applications.map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-3 p-3 rounded bg-brand-grey-bg border border-brand-grey-border"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-brand-orange shrink-0"
                        />

                        <span className="text-brand-grey text-sm font-medium">
                          {app}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-brand-grey-border">
                    <p className="text-xs text-brand-grey-light font-semibold uppercase tracking-widest mb-3">
                      Materials
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {['HDPE', 'LDPE', 'PP'].map((mat) => (
                        <span
                          key={mat}
                          className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded border border-brand-orange/20"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
