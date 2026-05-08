import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  FlaskConical,
  Download,
  Mail,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import { products } from '@/data/products'
import Button from '@/components/ui/Button'
import CtaBanner from '@/components/sections/CtaBanner'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

const highlights = [
  'Full certificate of analysis with every shipment',
  'Consistent batch-to-batch quality',
  'Available in 25kg bags and bulk containers',
  'Technical support from application engineers',
  'REACH and RoHS compliant',
]

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <>
      <section className="bg-brand-grey-bg border-b border-brand-grey-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-brand-grey-light">
            <Link
              href="/"
              className="hover:text-brand-orange transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} />
            <Link
              href="/products"
              className="hover:text-brand-orange transition-colors"
            >
              Products
            </Link>
            <ChevronRight size={12} />
            <span className="text-brand-grey font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-brand-grey-light text-sm hover:text-brand-orange transition-colors mb-6"
              >
                <ArrowLeft size={14} /> Back to products
              </Link>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-brand-grey-bg flex items-center justify-center shrink-0">
                  <FlaskConical size={26} className="text-brand-orange" />
                </div>
                <div>
                  <span className="inline-block text-xs font-bold text-brand-orange tracking-widest uppercase mb-1">
                    {product.category}
                  </span>
                  <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-grey">
                    {product.name}
                  </h1>
                </div>
              </div>

              <p className="text-brand-grey-light leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              <div className="mb-10">
                <h2 className="font-heading text-xl font-bold text-brand-grey mb-4">
                  Technical Specifications
                </h2>
                <div className="border border-brand-grey-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand-grey text-white">
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-widest uppercase">
                          Property
                        </th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-widest uppercase">
                          Value
                        </th>
                        <th className="text-left px-5 py-3 font-semibold text-xs tracking-widest uppercase">
                          Test Method
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.specs).map(([key, val], i) => (
                        <tr
                          key={key}
                          className={
                            i % 2 === 0 ? 'bg-white' : 'bg-brand-grey-bg'
                          }
                        >
                          <td className="px-5 py-3 text-brand-grey-light">
                            {key}
                          </td>
                          <td className="px-5 py-3 font-semibold text-brand-grey">
                            {val}
                          </td>
                          <td className="px-5 py-3 text-brand-grey-light">
                            ISO / ASTM
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-brand-grey mb-4">
                  Supply & Quality
                </h2>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="text-brand-orange shrink-0 mt-0.5"
                      />
                      <span className="text-brand-grey-light text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="border-2 border-brand-orange rounded-lg p-6 bg-white">
                <h3 className="font-heading font-bold text-brand-grey text-lg mb-2">
                  Request a Quote
                </h3>
                <p className="text-brand-grey-light text-sm mb-5 leading-relaxed">
                  Get pricing and availability for {product.name}. Our team
                  responds within one business day.
                </p>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center mb-3"
                >
                  <Mail size={15} className="mr-2" /> Contact Sales
                </Button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-brand-grey-border rounded text-sm font-semibold text-brand-grey hover:border-brand-orange hover:text-brand-orange transition-all duration-200">
                  <Download size={15} /> Download Datasheet
                </button>
              </div>

              <div className="border border-brand-grey-border rounded-lg p-5 bg-brand-grey-bg">
                <h4 className="font-heading font-bold text-brand-grey text-sm mb-3 uppercase tracking-wide">
                  Product Info
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-grey-light">
                      Material family
                    </span>
                    <span className="font-semibold text-brand-grey">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-grey-light">Grade</span>
                    <span className="font-semibold text-brand-grey">
                      {product.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-grey-light">Compliance</span>
                    <span className="font-semibold text-brand-grey">
                      REACH / RoHS
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-grey-light">Packaging</span>
                    <span className="font-semibold text-brand-grey">
                      25kg / Bulk
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-brand-grey-border rounded-lg p-5">
                <h4 className="font-heading font-bold text-brand-grey text-sm mb-2">
                  Need Technical Help?
                </h4>
                <p className="text-brand-grey-light text-xs leading-relaxed mb-3">
                  Our application engineers can advise on grade selection,
                  processing conditions, and material compatibility.
                </p>
                <a
                  href="tel:+18007654321"
                  className="text-brand-orange text-sm font-semibold hover:underline"
                >
                  +1 (800) 765-4321
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 bg-brand-grey-bg border-t border-brand-grey-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-brand-grey mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-white border border-brand-grey-border rounded-lg p-5 hover:border-brand-orange hover:shadow-md transition-all duration-200"
                >
                  <span className="text-xs font-bold text-brand-orange tracking-widest uppercase">
                    {p.category}
                  </span>
                  <h3 className="font-heading font-bold text-brand-grey mt-1 mb-2 group-hover:text-brand-orange transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-brand-grey-light text-xs leading-relaxed">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
