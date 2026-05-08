import { Product, Industry, NavLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const products: Product[] = [
  {
    slug: 'hdpe-pipe-grade',
    name: 'HDPE Pipe Grade',
    category: 'Polyethylene',
    description:
      'High-density polyethylene resin engineered for pressure pipe systems.',
    specs: {
      'Melt Index': '0.3 g/10min',
      Density: '0.955 g/cm³',
      'Tensile Strength': '28 MPa',
    },
    image: '/images/hdpe.jpg',
    featured: true,
  },
  {
    slug: 'pp-homopolymer',
    name: 'PP Homopolymer',
    category: 'Polypropylene',
    description:
      'General purpose polypropylene for injection moulding applications.',
    specs: {
      'Melt Flow Rate': '12 g/10min',
      Density: '0.905 g/cm³',
      'Flexural Modulus': '1600 MPa',
    },
    image: '/images/pp.jpg',
    featured: true,
  },
  {
    slug: 'ldpe-film-grade',
    name: 'LDPE Film Grade',
    category: 'Polyethylene',
    description:
      'Low-density polyethylene resin with excellent flexibility and clarity for film applications.',
    specs: {
      'Melt Index': '2.0 g/10min',
      Density: '0.923 g/cm³',
      'Tensile Strength': '12 MPa',
    },
    image: '/images/ldpe.jpg',
    featured: true,
  },
]

export const industries: Industry[] = [
  {
    title: 'Construction',
    icon: 'building',
    description:
      'Weather-resistant and structural polymers for modern construction demands.',
    applications: [
      'Pipe & fittings',
      'Window profiles',
      'Insulation boards',
      'Roofing sheets',
    ],
  },
  {
    title: 'Packaging',
    icon: 'package',
    description:
      'Food-safe and industrial packaging resins with superior barrier properties.',
    applications: [
      'Flexible films',
      'Rigid containers',
      'Caps & closures',
      'Industrial drums',
    ],
  },
  {
    title: 'Agriculture',
    icon: 'sprout',
    description:
      'UV-stabilised polymers built to endure outdoor and field environments.',
    applications: [
      'Irrigation pipes',
      'Greenhouse films',
      'Storage tanks',
      'Mulch films',
    ],
  },
]
