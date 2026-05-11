import Image from 'next/image'

const clients = [
  { name: 'BASF', logo: '/images/clients/aditya.png' },
  { name: 'Dow Chemical', logo: '/images/clients/chmaya.png' },
  { name: 'LyondellBasell', logo: '/images/clients/adyani.png' },
  { name: 'Sabic', logo: '/images/clients/mahavir.png' },
]

function ClientCard({ client }: { client: (typeof clients)[0] }) {
  return (
    <div className="inline-flex items-center justify-center mx-6 shrink-0">
      <div className="flex items-center justify-center w-40 h-16 border border-brand-grey-border rounded-lg bg-white hover:border-brand-orange hover:shadow-sm transition-all duration-200 px-4">
        <div className="relative w-24 h-10">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}

export default function ClientMarquee() {
  const doubled = [...clients, ...clients]

  return (
    <section className="border-y border-brand-grey-border bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-bold text-brand-grey-light tracking-widest uppercase">
          Trusted by manufacturers
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {doubled.map((client, i) => (
            <ClientCard key={i} client={client} />
          ))}
        </div>

        <div
          className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap absolute left-0"
          aria-hidden="true"
          style={{ transform: 'translateX(100%)' }}
        >
          {doubled.map((client, i) => (
            <ClientCard key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
