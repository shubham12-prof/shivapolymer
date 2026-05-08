import { CheckCircle2, Clock, Microscope, HeadphonesIcon } from 'lucide-react'

const reasons = [
  {
    icon: Microscope,
    title: 'Technical Expertise',
    description:
      'Our polymer chemists and application engineers provide material selection support and grade recommendations for your specific process.',
  },
  {
    icon: CheckCircle2,
    title: 'Consistent Quality',
    description:
      'Every batch is tested against strict ISO standards. Full CoA documentation and traceability provided with every shipment.',
  },
  {
    icon: Clock,
    title: 'Reliable Supply',
    description:
      'Regional warehousing and strategic partnerships ensure short lead times and continuity of supply for critical production lines.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description:
      'Named account managers and a direct technical helpline mean you always speak to someone who knows your business.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Why Polytech
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-grey leading-tight mb-6">
              The Partner Manufacturers <br /> Rely On
            </h2>
            <p className="text-brand-grey-light text-base leading-relaxed mb-8">
              We combine deep materials science knowledge with a commitment to
              supply reliability — so your production never stops for a material
              reason.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-brand-orange text-sm font-semibold border-b-2 border-brand-orange/30 hover:border-brand-orange pb-0.5 transition-colors duration-200"
            >
              Learn about our company
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-5 rounded-lg border border-brand-grey-border bg-brand-grey-bg hover:border-brand-orange transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand-orange" />
                </div>
                <h4 className="font-heading font-bold text-brand-grey text-sm mb-2">
                  {title}
                </h4>
                <p className="text-brand-grey-light text-xs leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
