export type Resource = {
  id: string;
  name: string;
  description: string;
  categories: string[];
  resourceType: string;
  address: string;
  distance: number;
  phone: string;
  website: string;
  hours: string;
  cost: string;
  eligibility: string;
  accessibility: string;
  source: string;
  lastVerified: string;
  verificationStatus: string;
};

export const categories = [
  "Food & Basic Needs",
  "Housing & Shelter",
  "Health & Wellness",
  "Government & Public Services",
  "Education & Employment",
  "Community & Recreation",
  "Events & Social Connection",
];

export const resources: Resource[] = [
  {
    id: "r1",
    name: "Neighbourhood Pantry",
    description:
      "A welcoming community pantry with shelf-stable groceries and fresh produce when available.",
    categories: ["Food & Basic Needs"],
    resourceType: "Food support",
    address: "18 Cedar Avenue",
    distance: 1.2,
    phone: "(555) 014-2201",
    website: "example.org/pantry",
    hours: "Tue & Thu, 10am–3pm",
    cost: "Free",
    eligibility: "Open to everyone; no referral needed",
    accessibility: "Step-free entrance",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
  {
    id: "r2",
    name: "The Common Table",
    description: "Drop-in community meals served in a relaxed, social setting.",
    categories: ["Food & Basic Needs", "Events & Social Connection"],
    resourceType: "Community meal",
    address: "42 Willow Street",
    distance: 2.8,
    phone: "(555) 014-2214",
    website: "example.org/table",
    hours: "Mon, Wed & Fri, 5–7pm",
    cost: "Free",
    eligibility: "Everyone welcome",
    accessibility: "Accessible washroom",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
  {
    id: "r3",
    name: "Harbour House",
    description: "A sample housing navigation and overnight shelter listing.",
    categories: ["Housing & Shelter"],
    resourceType: "Shelter",
    address: "7 Harbour Road",
    distance: 4.1,
    phone: "(555) 014-2230",
    website: "example.org/harbour",
    hours: "Intake daily, 8am–8pm",
    cost: "Free",
    eligibility: "Eligibility may apply",
    accessibility: "Ask about accessible rooms",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
  {
    id: "r4",
    name: "Open Door Wellness",
    description:
      "A low-barrier community wellness space with peer support and referrals.",
    categories: ["Health & Wellness"],
    resourceType: "Wellness",
    address: "105 Maple Crescent",
    distance: 6.5,
    phone: "(555) 014-2248",
    website: "example.org/wellness",
    hours: "Mon–Fri, 9am–4pm",
    cost: "Free / low-cost",
    eligibility: "No appointment for drop-in hours",
    accessibility: "Elevator access",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
  {
    id: "r5",
    name: "Civic Welcome Desk",
    description:
      "Help understanding public services, forms, identification, and benefits.",
    categories: ["Government & Public Services"],
    resourceType: "Public service",
    address: "220 Main Street",
    distance: 8.3,
    phone: "(555) 014-2260",
    website: "example.org/civic",
    hours: "Mon–Thu, 9am–4pm",
    cost: "Free",
    eligibility: "Open to residents and newcomers",
    accessibility: "ASL interpretation by request",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
  {
    id: "r6",
    name: "Northside Library",
    description:
      "Free computer access, study space, workshops, and help getting started online.",
    categories: ["Education & Employment", "Community & Recreation"],
    resourceType: "Library",
    address: "61 Northside Boulevard",
    distance: 10.7,
    phone: "(555) 014-2272",
    website: "example.org/library",
    hours: "Daily, 9am–7pm",
    cost: "Free",
    eligibility: "Everyone welcome",
    accessibility: "Fully accessible",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
  {
    id: "r7",
    name: "Saturday Makers Club",
    description:
      "A free weekly gathering for making, learning, and meeting neighbours.",
    categories: ["Events & Social Connection", "Community & Recreation"],
    resourceType: "Free activity",
    address: "14 Juniper Lane",
    distance: 12.4,
    phone: "(555) 014-2281",
    website: "example.org/makers",
    hours: "Saturdays, 1–3pm",
    cost: "Free",
    eligibility: "All skill levels",
    accessibility: "Ground-floor room",
    source: "Demonstration listing",
    lastVerified: "Not verified",
    verificationStatus: "Demo",
  },
];

export const categoryDetails = [
  {
    name: "Food & Basic Needs",
    tone: "peach",
    items: ["Food banks", "Community meals", "Clothing", "Showers"],
  },
  {
    name: "Housing & Shelter",
    tone: "lavender",
    items: ["Emergency shelters", "Housing assistance", "Warming centres"],
  },
  {
    name: "Health & Wellness",
    tone: "blue",
    items: ["Mental health", "Addiction support", "Healthcare"],
  },
  {
    name: "Education & Employment",
    tone: "sage",
    items: ["Libraries", "Free courses", "Resume assistance"],
  },
  {
    name: "Community & Recreation",
    tone: "yellow",
    items: ["Free classes", "Sports", "Youth programs"],
  },
  {
    name: "Events & Social Connection",
    tone: "pink",
    items: ["Free events", "Arts and culture", "Drop-ins"],
  },
];

export const locations = ["Downtown", "Northside", "Riverside", "Eastwood"];
export const radii = [5, 10, 25, 50, 100];

export function filterResources(
  query: string,
  selectedCategories: string[],
  freeOnly: boolean,
  radius: number,
) {
  const normalized = query.toLowerCase().trim();
  return resources.filter((resource) => {
    const matchesQuery =
      !normalized ||
      [
        resource.name,
        resource.description,
        resource.resourceType,
        ...resource.categories,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized);
    const matchesCategory =
      !selectedCategories.length ||
      selectedCategories.some((category) =>
        resource.categories.includes(category),
      );
    const matchesCost =
      !freeOnly || resource.cost.toLowerCase().includes("free");
    return (
      matchesQuery &&
      matchesCategory &&
      matchesCost &&
      resource.distance <= radius
    );
  });
}

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Find resources", href: "/find-resources" },
  { label: "AI assistance", href: "/ai-assistance" },
  { label: "About", href: "/about" },
  { label: "Contact / contribute", href: "/contact" },
];
export const projectName = "Common Ground";

export function getResource(id: string) {
  return resources.find((resource) => resource.id === id);
}

export function getCategoryTone(index: number) {
  return categoryDetails[index % categoryDetails.length].tone;
}
