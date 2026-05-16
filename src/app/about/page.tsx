import type { Metadata } from 'next'
import {
  ShieldCheck,
  TrendingUp,
  User,
  Wrench,
  ClipboardCheck,
  HeadphonesIcon,
  Truck,
} from 'lucide-react'
import CtaBanner from '@/components/sections/CtaBanner'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Trusted supplier of HDPE, LDPE, and PP polymer materials.',
}

const clients = [
  { name: 'BASF', logo: '/images/clients/aditya.png' },
  { name: 'Dow Chemical', logo: '/images/clients/chmaya.png' },
  { name: 'LyondellBasell', logo: '/images/clients/adyani.png' },
  { name: 'Sabic', logo: '/images/clients/mahavir.png' },
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Reliable Quality',
    description:
      'We provide consistent polymer materials suitable for industrial and manufacturing applications.',
  },
  {
    icon: TrendingUp,
    title: 'Trusted Service',
    description:
      'Focused on long-term customer relationships through dependable support and supply.',
  },
]

const stats = [
  { stat: '5+', label: 'Years of Experience' },
  { stat: '4', label: 'Industry Served' },
  { stat: '99%', label: 'Quality Pass Rate' },
]

const expertise = [
  {
    icon: Wrench,
    title: 'Technical Expertise',
    description:
      'Over five-plus years, we have developed deep expertise in processing and characterizing HDPE, LDPE, and PP materials. We evaluate melt flow index, tensile strength, impact resistance, and thermal properties to ensure every material meets the precise requirements of industrial and packaging clients.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality & Compliance',
    description:
      'We maintain rigorous quality assurance protocols aligned with ISO and ASTM standards. Every batch undergoes incoming material inspection, in-process testing, and final product evaluation — minimizing defects and ensuring our polymer solutions consistently exceed client expectations.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Client & Application Support',
    description:
      'We support a diverse portfolio of industrial, packaging, and manufacturing clients — advising on the most suitable polymer grade based on application needs such as chemical resistance, flexibility, load-bearing capacity, and processing compatibility.',
  },
  {
    icon: Truck,
    title: 'Supply Chain & Operations',
    description:
      'From raw material procurement and inventory management to timely dispatch, we coordinate end-to-end supply chain operations. Our logistics network ensures large-volume orders of HDPE, LDPE, and PP are fulfilled within committed timelines, reducing lead times and improving client satisfaction.',
  },
]

const team = [
  {
    name: 'Nitish Dhyani',
    role: 'Founder',
  },
  {
    name: 'Deepak Dhyani',
    role: 'Plant Head',
  },
  {
    name: 'Neha',
    role: 'Operations Manager',
  },
]

export default function AboutPage() {
  return (
    <>
      <section
        className="relative py-16 md:py-20 border-b-4 border-brand-orange bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/company.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              About Us
            </span>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted Polymer Material Supplier
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Polytech Materials supplies premium HDPE, LDPE, and PP materials
              for industrial and commercial applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Our Mission
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-grey mb-5">
              Quality Materials for Manufacturing
            </h2>

            <p className="text-brand-grey-light leading-relaxed mb-4">
              With over 5 years of industry experience, we provide reliable
              HDPE, LDPE, and PP polymer materials for packaging, industrial,
              and manufacturing industries. Our deep technical knowledge allows
              us to match the right material grade to every application —
              whether it demands chemical resistance, flexibility, or high
              load-bearing capacity.
            </p>

            <p className="text-brand-grey-light leading-relaxed">
              Our goal is to deliver dependable products, consistent quality,
              and trusted customer service for every client. Backed by hands-on
              expertise in extrusion, injection molding, and blow molding
              processes, we ensure every batch meets stringent ISO and ASTM
              standards before it reaches your facility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-grey-bg border-y border-brand-grey-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Our Experience
            </span>
            <h2 className="font-heading text-3xl font-bold text-brand-grey">
              5+ Years of Polymer Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
            {stats.map(({ stat, label }) => (
              <div
                key={label}
                className="bg-white border border-brand-grey-border rounded-lg p-8 hover:border-brand-orange hover:shadow-md transition-all duration-200"
              >
                <p className="font-heading text-4xl font-bold text-brand-orange mb-2">
                  {stat}
                </p>
                <p className="text-brand-grey-light text-sm font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {expertise.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-brand-grey-border rounded-lg p-6 hover:border-brand-orange hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-orange" />
                </div>
                <h3 className="font-heading font-bold text-brand-grey text-lg mb-3">
                  {title}
                </h3>
                <p className="text-brand-grey-light text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-brand-grey-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Our Team
            </span>

            <h2 className="font-heading text-3xl font-bold text-brand-grey">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-brand-grey-border rounded-lg p-6 text-center hover:border-brand-orange hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <User size={24} className="text-brand-orange" />
                </div>

                <h3 className="font-heading font-bold text-brand-grey text-lg mb-1">
                  {member.name}
                </h3>

                <p className="text-brand-orange text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-6 bg-white border-t border-brand-grey-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Our Clients
            </span>
            <h2 className="font-heading text-3xl font-bold text-brand-grey mb-4">
              Trusted by Industry
            </h2>
            <p className="text-brand-grey-light text-base max-w-xl mx-auto leading-relaxed">
              We are proud to supply some of the world's most respected
              manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-20 border border-brand-grey-border rounded-lg bg-white hover:border-brand-orange hover:shadow-sm transition-all duration-200 px-6"
              >
                <div className="relative w-28 h-10">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Our Values
            </span>

            <h2 className="font-heading text-3xl font-bold text-brand-grey">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white border border-brand-grey-border rounded-lg p-6 hover:border-brand-orange hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-orange" />
                </div>

                <h3 className="font-heading font-bold text-brand-grey text-base mb-2">
                  {title}
                </h3>

                <p className="text-brand-grey-light text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
