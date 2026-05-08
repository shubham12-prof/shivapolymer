export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  specs: Record<string, string>;
  image: string;
  featured: boolean;
}

export interface Industry {
  title: string;
  description: string;
  icon: string;
  applications: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
