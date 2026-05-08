import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Polytech Materials for product enquiries, technical support, or to request a quote.',
}

const offices = [
  {
    city: 'HALDWANI',
    address: 'ABC',
    phone: '+1 (800) 765-4321',
    email: '@com',
  },
  {
    city: 'BADARPUR',
    address: 'DEF',
    phone: '+1 (800) 765-4321',
    email: '@com',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-grey py-16 md:py-20 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you need a quote, technical guidance, or just want to
              discuss your material requirements — our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div className="border border-brand-grey-border rounded-lg p-5 bg-brand-grey-bg">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={16} className="text-brand-orange" />
                  <span className="font-heading font-bold text-brand-grey text-sm">
                    Response Time
                  </span>
                </div>
                <p className="text-brand-grey-light text-sm leading-relaxed">
                  We respond to all enquiries within{' '}
                  <strong className="text-brand-grey">1 business day</strong>.
                  Urgent technical requests are prioritised.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-brand-grey text-sm uppercase tracking-widest mb-4">
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.city}
                      className="border border-brand-grey-border rounded-lg p-4 hover:border-brand-orange transition-colors duration-200"
                    >
                      <h4 className="font-heading font-bold text-brand-grey text-sm mb-2">
                        {office.city}
                      </h4>
                      <div className="space-y-1.5 text-xs text-brand-grey-light">
                        <div className="flex items-start gap-2">
                          <MapPin
                            size={12}
                            className="text-brand-orange shrink-0 mt-0.5"
                          />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone
                            size={12}
                            className="text-brand-orange shrink-0"
                          />
                          <a
                            href={`tel:${office.phone}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail
                            size={12}
                            className="text-brand-orange shrink-0"
                          />
                          <a
                            href={`mailto:${office.email}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 border border-brand-grey-border rounded-lg p-6 md:p-8 bg-white">
              <h2 className="font-heading text-2xl font-bold text-brand-grey mb-1">
                Send Us a Message
              </h2>
              <p className="text-brand-grey-light text-sm mb-7">
                Fill in the form below and a member of our team will be in touch
                shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
