export type Resource = {
  id: string
  name: string
  description: string
  categories: string[]
  type: string
  address: string
  distance: number
  phone: string
  website: string
  hours: string
  cost: string
  eligibility: string
  accessibility: string
  source: string
  lastVerified: string
  verified: boolean
}

export const categories = [
  { name: 'Food & basic needs', icon: '♡', color: 'lavender' },
  { name: 'Housing & shelter', icon: '⌂', color: 'blue' },
  { name: 'Health & wellness', icon: '+', color: 'sage' },
  { name: 'Public services', icon: '▤', color: 'pink' },
  { name: 'Education & employment', icon: '□', color: 'yellow' },
  { name: 'Community & recreation', icon: '○', color: 'lavender' },
  { name: 'Events & social connection', icon: '✦', color: 'blue' },
]

export const resources: Resource[] = [
  { id: 'harbour', name: 'Harbour Community Pantry', description: 'A welcoming neighbourhood pantry with fresh groceries, pantry staples, and personal care items.', categories: ['Food & basic needs'], type: 'Food pantry', address: '1840 Main Street', distance: 1.2, phone: '(555) 014-2280', website: 'Website available', hours: 'Mon–Fri, 10:00 am–4:00 pm', cost: 'Free', eligibility: 'Open to everyone; bring a reusable bag if you have one.', accessibility: 'Step-free entrance', source: 'Demonstration listing', lastVerified: 'October 2026', verified: false },
  { id: 'library', name: 'Eastside Public Library', description: 'Free computers, Wi-Fi, quiet study space, printing, and a regular programme of community workshops.', categories: ['Education & employment', 'Community & recreation'], type: 'Library', address: '42 Cedar Avenue', distance: 2.4, phone: '(555) 014-1042', website: 'Website available', hours: 'Mon–Sat, 9:00 am–7:00 pm', cost: 'Free', eligibility: 'Open to everyone.', accessibility: 'Accessible entrance and washroom', source: 'Demonstration listing', lastVerified: 'October 2026', verified: false },
  { id: 'commons', name: 'The Commons Drop-in', description: 'A low-pressure place to have a meal, connect with others, and learn about local opportunities.', categories: ['Community & recreation', 'Food & basic needs'], type: 'Drop-in programme', address: '7 Willow Lane', distance: 3.1, phone: '(555) 014-3110', website: 'Website available', hours: 'Tue & Thu, 1:00–6:00 pm', cost: 'Free', eligibility: 'No registration required.', accessibility: 'Ground floor, accessible washroom', source: 'Demonstration listing', lastVerified: 'October 2026', verified: false },
  { id: 'wellness', name: 'Open Door Wellness Centre', description: 'Peer support, harm reduction supplies, and connections to health and wellness services.', categories: ['Health & wellness'], type: 'Wellness centre', address: '96 Kingfisher Road', distance: 4.8, phone: '(555) 014-8873', website: 'Website available', hours: 'Mon–Fri, 8:30 am–5:00 pm', cost: 'Free / low-cost', eligibility: 'Call ahead for some appointments.', accessibility: 'Interpreters available by request', source: 'Demonstration listing', lastVerified: 'October 2026', verified: false },
]

export const categoryDescriptions: Record<string, string[]> = {
  'Food & basic needs': ['Food banks', 'Community meals', 'Clothing', 'Hygiene supplies', 'Laundry & showers'],
  'Housing & shelter': ['Emergency shelters', 'Transitional housing', 'Housing assistance', 'Warming centres'],
  'Health & wellness': ['Mental health services', 'Addiction support', 'Harm reduction', 'Healthcare'],
  'Public services': ['Benefits assistance', 'Employment services', 'Legal assistance', 'Identification support'],
  'Education & employment': ['Libraries', 'Free courses', 'Computer access', 'Training & workshops'],
  'Community & recreation': ['Recreation centres', 'Free classes', 'Sports', 'Youth programmes'],
  'Events & social connection': ['Free events', 'Arts & culture', 'Drop-in programmes', 'Gatherings'],
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Find resources', href: '/find-resources' },
  { label: 'AI assistance', href: '/ai-assistance' },
  { label: 'About', href: '/about' },
  { label: 'Contact / contribute', href: '/contact' },
]

export const getCategoryColor = (category: string) => categories.find((item) => item.name === category)?.color ?? 'lavender'
export const getCategoryIcon = (category: string) => categories.find((item) => item.name === category)?.icon ?? '○'

export const initials = 'CC'
export const siteName = 'Community Commons'

export const css = undefined

export const categoryData = categories
export const resourceData = resources
export const categoryCopy = categoryDescriptions
export const nav = navItems
export const brandInitials = initials
export const brandName = siteName
export const categoryColor = getCategoryColor
export const categoryIcon = getCategoryIcon
export const resourceTypes = ['All types', 'Food pantry', 'Library', 'Drop-in programme', 'Wellness centre']
export const radiusOptions = [5, 10, 25, 50, 100]
export const demoLocations = ['Downtown / Central Library', 'Eastside neighbourhood', 'Riverside community centre']
export const freeOptions = ['All costs', 'Free', 'Free / low-cost']
export const searchPlaceholder = 'Search by name, service, or keyword'
export const disclaimer = 'Demonstration data only. Resources and availability have not been verified.'
export const categoryNames = categories.map(({ name }) => name)
export const promptSuggestions = ['I need help finding food nearby.', 'Where can I find somewhere to stay?', 'I\'d like to find free activities in my community.', 'I don\'t know where to start.']
export const footerNote = 'A prototype for making community resources easier to discover.'
export const currentLocation = 'Downtown / Central Library'
export const mapLabel = 'Illustrative map — not to scale'
