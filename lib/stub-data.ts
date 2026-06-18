export const AGENT = {
  name: 'Britteney Powers',
  title: 'Real Estate Advisor',
  tagline: 'NC Broker and Virginia real estate advisor helping clients move with clarity, strategy, and calm.',
  bio: 'Britteney Powers pairs local market knowledge with a calm, client-first process. She helps buyers and sellers make confident decisions, whether they are navigating a first purchase, relocating across state lines, or preparing a home for market. Her approach is personal, responsive, and grounded in the belief that every move deserves thoughtful guidance.',
  licenseNumber: '347563',
  licenseState: 'Virginia',
  phone: '(252) 621-0092',
  email: 'Use the contact form for the fastest response.',
  photo: '/britteney-portrait.jpg',
};

export const LISTINGS: Array<{
  id: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  alt: string;
  status: string;
}> = [];

export const TESTIMONIALS: Array<{
  id: string;
  quote: string;
  name: string;
  city: string;
  avatar: string;
  alt: string;
}> = [];
