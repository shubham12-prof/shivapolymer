import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'HDPE', href: '/products' },
    { label: 'LDPE', href: '/products' },
    { label: 'PP', href: '/products' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-brand-grey text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center">
                <span className="text-white font-bold font-heading text-sm">
                  P
                </span>
              </div>

              <div>
                <span className="block text-white font-heading font-bold text-lg tracking-wide">
                  POLYTECH
                </span>

                <span className="block text-brand-orange text-[10px] font-semibold tracking-widest uppercase -mt-0.5">
                  Materials
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Trusted supplier of HDPE, LDPE, and PP polymer materials for
              industrial and commercial applications.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-orange shrink-0" />
                <span>+91 9999017099 ,</span>
                <span>+91 9990017099</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-orange shrink-0" />
                <span>ronakdhyani16@gmail.com</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-4">
                {section}
              </h4>

              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-brand-orange transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-center">
          <p className="text-xs text-center">
            © {new Date().getFullYear()} Polytech Materials. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
