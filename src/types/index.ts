export interface NavLink {
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  icon: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface GalleryItem {
  id: string
  title: string
  category: 'Roof Replacement' | 'Roof Repair' | 'Shingles' | 'Exterior'
  image: string
  aspect: 'portrait' | 'landscape' | 'square'
}

export interface FaqItem {
  question: string
  answer: string
}

export interface ServiceAreaChip {
  name: string
  verified: boolean
}
