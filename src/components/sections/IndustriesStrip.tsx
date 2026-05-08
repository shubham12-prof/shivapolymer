import Link from 'next/link'
import { Car, Building2, Package, Cpu, Sprout, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { industries } from '@/data/products'

const iconMap: Record<string, React.ElementType> = {
  car: Car,
  building: Building2,
  package: Package,
  cpu: Cpu,
  sprout: Sprout,
}

export default function IndustriesStrip() {
  return (
    <section className="py-20 md:py-28 bg-brand-grey-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            label="Industries"
            title="Sectors We Serve"
            subtitle="Polymer solutions tailored to the performance demands of each industry."
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-brand-orange text-sm font-semibold hover:gap-3 transition-all duration-200 shrink-0"
          >
            All industries <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon] ?? Package
            return (
              <Link
                key={industry.title}
                href="/industries"
                className="group bg-white border border-brand-grey-border rounded-lg p-6 hover:border-brand-orange hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 rounded bg-brand-grey-bg flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                  <Icon
                    size={18}
                    className="text-brand-grey-light group-hover:text-white transition-colors duration-200"
                  />
                </div>
                <h3 className="font-heading font-bold text-brand-grey text-base mb-2 group-hover:text-brand-orange transition-colors duration-200">
                  {industry.title}
                </h3>
                <p className="text-brand-grey-light text-xs leading-relaxed flex-1">
                  {industry.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
