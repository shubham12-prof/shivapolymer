import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/gallery/green.png',
    alt: 'Green Polymer Pellets',
    label: 'Green Masterbatch',
  },
  {
    src: '/images/gallery/milky.png',
    alt: 'Milky White Resin',
    label: 'Natural / Virgin',
  },
  {
    src: '/images/gallery/red.png',
    alt: 'Red Polymer Grade',
    label: 'Red Masterbatch',
  },
  {
    src: '/images/gallery/virgin.png',
    alt: 'Virgin Resin',
    label: 'Blue Compound',
  },
  {
    src: '/images/gallery/rainbow.png',
    alt: 'Colour Masterbatch',
    label: 'Colour Range',
  },
]

export default function ProductGallery() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-brand-grey-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">
              Gallery
            </span>
            <h2 className="font-heading text-3xl font-bold text-brand-grey">
              Our Product Range
            </h2>
            <p className="text-brand-grey-light text-sm mt-2 max-w-xl leading-relaxed">
              High-quality polymer granules and masterbatches available across a
              wide spectrum of grades and colours.
            </p>
          </div>
          <span className="text-xs text-brand-grey-light font-medium shrink-0">
            {galleryImages.length} product types shown
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {galleryImages.slice(0, 2).map((img) => (
            <div
              key={img.src}
              className="group relative h-64 rounded-xl overflow-hidden bg-brand-grey-bg border border-brand-grey-border hover:border-brand-orange hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                sizes="(max-width: 640px) 100vw, 50vw"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-brand-grey/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-heading font-bold text-sm">
                  {img.label}
                </span>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {galleryImages.slice(2).map((img) => (
            <div
              key={img.src}
              className="group relative h-52 rounded-xl overflow-hidden bg-brand-grey-bg border border-brand-grey-border hover:border-brand-orange hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-brand-grey/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-heading font-bold text-sm">
                  {img.label}
                </span>
              </div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
