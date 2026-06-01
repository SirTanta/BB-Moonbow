export type QuestionType =
  | 'text'
  | 'textarea'
  | 'radio'
  | 'checkbox'
  | 'scale'
  | 'color-palette'
  | 'url-list';

export interface Question {
  id: string;
  label: string;
  help?: string;
  type: QuestionType;
  required?: boolean;
  options?: string[];
  scaleMin?: string;
  scaleMax?: string;
  placeholder?: string;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  questions: Question[];
}

export const SECTIONS: Section[] = [
  {
    id: 'about',
    title: 'About You & Your Practice',
    questions: [
      { id: 'legal_name', label: 'Full legal name (as it appears on your license)', type: 'text', required: true },
      { id: 'preferred_name', label: 'Preferred name / how clients address you', type: 'text' },
      {
        id: 'nc_license',
        label: 'NC License Info',
        help: 'NC broker license number, year licensed, Swell Real Estate Co office address, phone, broker-in-charge name.',
        type: 'textarea',
      },
      {
        id: 'va_license',
        label: 'VA License Info',
        help: 'VA salesperson license number, year licensed, Swell Realty Co office address, phone, principal broker name.',
        type: 'textarea',
      },
      {
        id: 'entity_relationship',
        label: 'Are Swell Real Estate Co (NC) and Swell Realty Co (VA) related entities, sister brokerages, or independent?',
        help: 'This affects how we display them — one unified brand or two separate cards.',
        type: 'radio',
        options: ['Same company / sister brokerages', 'Independent — two separate brokerages', 'Not sure — let\'s discuss'],
      },
      {
        id: 'mls_memberships',
        label: 'MLS memberships',
        help: 'NC MLS(s) — Triangle MLS, NCRMLS, Canopy, etc. VA MLS(s) — Bright MLS, CVRMLS, REIN, etc.',
        type: 'textarea',
      },
      { id: 'nar_member', label: 'NAR / Realtor® member?', type: 'radio', options: ['Yes', 'No'] },
      {
        id: 'designations',
        label: 'Specialty designations (check all that apply)',
        type: 'checkbox',
        options: ['ABR', 'CRS', 'GRI', 'SRES', 'CRB', 'SRS', 'RENE', 'PSA', 'MRP', 'AHWD', 'None', 'Other'],
      },
      { id: 'years_in_re', label: 'Years total in real estate', type: 'text' },
      { id: 'contact_email', label: 'Best contact email (for the website to display)', type: 'text' },
      { id: 'contact_phone', label: 'Best contact phone (for the website to display)', type: 'text' },
      {
        id: 'contact_per_state',
        label: 'One phone/email for everything, or separate per state?',
        type: 'radio',
        options: ['One phone, one email for everything', 'Separate per state (NC vs VA)', 'Not sure'],
      },
    ],
  },
  {
    id: 'brand',
    title: 'Brand Voice & Story',
    questions: [
      { id: 'three_words', label: 'Three words that describe your brand', type: 'text', placeholder: 'e.g. Graceful, Trusted, Southern' },
      {
        id: 'tagline',
        label: 'Existing tagline?',
        help: 'If yes, what? If no, write three phrases you\'d love to hear a client say about you.',
        type: 'textarea',
      },
      { id: 'voice_formal', label: 'Voice — Formal to Casual', type: 'scale', scaleMin: 'Formal', scaleMax: 'Casual' },
      { id: 'voice_polished', label: 'Voice — Polished to Warm', type: 'scale', scaleMin: 'Polished', scaleMax: 'Warm' },
      { id: 'voice_expert', label: 'Voice — Expert Authority to Friend & Guide', type: 'scale', scaleMin: 'Expert Authority', scaleMax: 'Friend & Guide' },
      { id: 'voice_witty', label: 'Voice — Witty to Earnest', type: 'scale', scaleMin: 'Witty', scaleMax: 'Earnest' },
      { id: 'voice_local', label: 'Voice — Local Insider to Worldly Sophisticate', type: 'scale', scaleMin: 'Local Insider', scaleMax: 'Worldly Sophisticate' },
      {
        id: 'origin_story',
        label: 'Your origin story',
        help: 'Why real estate, why these markets, what drew you in. 1–3 paragraphs, rough is fine.',
        type: 'textarea',
      },
      {
        id: 'differentiator',
        label: 'What makes you different from every other agent in your market?',
        help: 'Be specific. "I care" doesn\'t count.',
        type: 'textarea',
      },
      {
        id: 'ideal_client',
        label: 'Describe your ideal client',
        help: 'Age range, life stage, values, what they\'re looking for.',
        type: 'textarea',
      },
      {
        id: 'bad_client',
        label: 'Describe the client you do NOT want',
        help: 'This filters out wrong-fit leads before they call.',
        type: 'textarea',
      },
      {
        id: 'proudest_moment',
        label: 'A career moment you\'re proudest of',
        help: 'Could become a story on the site.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'aesthetic',
    title: 'The Vintage / Antique Aesthetic',
    subtitle: 'This is the most important section. "Vintage" means very different things to different people — we need to nail this down.',
    questions: [
      {
        id: 'era',
        label: 'Era preference (pick your top 2)',
        type: 'checkbox',
        options: [
          '1880s–1900s Victorian (deep jewel tones, ornate, wallpaper patterns)',
          '1920s Art Deco (gold, black, geometric, Gatsby)',
          '1930s–1940s wartime / film noir (sepia, typewriter, kraft paper)',
          '1950s mid-century (turquoise, cream, atomic, retro travel posters)',
          '1960s–1970s bohemian (mustard, avocado, terracotta)',
          'Old-world / European apothecary (leather, brass, museum-y, no specific era)',
          'Southern antebellum (white linen, magnolia, porch, slow)',
          'Coastal / nautical vintage (faded navy, weathered wood, brass compass)',
          'Other — describe below',
        ],
      },
      {
        id: 'color_palette',
        label: 'Color palette',
        help: 'Paste hex codes or describe in words. Example: "Cream #F4EDE0, ink black #1B1B1B, oxblood #6E1A1A, brass #B08D57" — or just say "dusty rose, sage, ivory."',
        type: 'color-palette',
      },
      {
        id: 'favorite_colors_detail',
        label: 'Tell us more about colors you love',
        help: 'Any specific colors that speak to you — walls of a room you love, a piece of clothing, a painting. The more specific the better.',
        type: 'textarea',
      },
      {
        id: 'colors_hate',
        label: 'Colors you hate or want to avoid entirely',
        type: 'textarea',
        placeholder: 'e.g. "No neon, no bright blue, nothing that looks like a tech startup"',
      },
      {
        id: 'typography',
        label: 'Typography mood (pick 1–2)',
        type: 'checkbox',
        options: [
          'Letterpress serif (old book title page)',
          'Typewriter (Courier, smudged, telegram feel)',
          'Hand-lettered script (signature, flowing)',
          'Art Deco geometric (Gatsby title cards)',
          'Victorian display serif (ornate, Wild West poster)',
          'Newspaper masthead (NYT, old-Times feel)',
          'Other',
        ],
      },
      {
        id: 'textures',
        label: 'Textures and materials you want to evoke',
        type: 'checkbox',
        options: [
          'Aged paper / parchment',
          'Leather-bound book',
          'Brass fixtures / metal type',
          'Linen / canvas',
          'Velvet / damask',
          'Faded photograph / daguerreotype',
          'Postcard / stamp',
          'Old map / blueprint',
        ],
      },
      {
        id: 'logo_direction',
        label: 'Logo ideas & direction',
        help: 'Even rough ideas help — a monogram, a house icon, a compass rose, a magnolia, initials in a crest. What have you imagined or seen that you loved?',
        type: 'textarea',
      },
      {
        id: 'logo_status',
        label: 'Current logo situation',
        type: 'radio',
        options: [
          'I have a Swell logo I must use',
          'I have a logo but open to a refresh',
          'I need one designed from scratch',
          'Not sure',
        ],
      },
      {
        id: 'logo_inspiration',
        label: 'Logo inspiration — brands, crests, or images you love',
        help: 'Paste links or describe. Think outside real estate too — wine labels, hotel crests, stationery brands, perfume packaging.',
        type: 'textarea',
      },
      {
        id: 'refs_love',
        label: 'Reference sites you LOVE',
        help: 'Paste 3–5 URLs and say what specifically you love about each.',
        type: 'url-list',
      },
      {
        id: 'refs_hate',
        label: 'Reference sites you HATE',
        help: 'Paste 1–3 URLs and say what to avoid.',
        type: 'url-list',
      },
      {
        id: 'moodboard',
        label: 'Pinterest boards, Instagram saves, or mood-board links',
        help: 'Paste any links. You can also email images separately.',
        type: 'textarea',
      },
      {
        id: 'vintage_examples',
        label: 'Vintage brochures, business cards, or signage you\'ve loved',
        help: 'Describe or paste links to images.',
        type: 'textarea',
      },
      {
        id: 'animation',
        label: 'Animations and motion',
        type: 'radio',
        options: [
          'Minimal — feels like flipping pages, fades only',
          'Subtle — page-turn transitions, hover details',
          'Lively — parallax, scroll-triggered reveals',
        ],
      },
    ],
  },
  {
    id: 'markets',
    title: 'Markets & Service Areas',
    questions: [
      { id: 'nc_areas', label: 'NC service areas', help: 'List every town, county, or neighborhood you actively serve. Be granular.', type: 'textarea' },
      { id: 'va_areas', label: 'VA service areas', help: 'Same — granular list.', type: 'textarea' },
      { id: 'home_base', label: 'Home base vs secondary markets', help: 'Which is your home base, which are secondary?', type: 'textarea' },
      {
        id: 'property_types',
        label: 'Property types you handle',
        type: 'checkbox',
        options: [
          'Single-family residential',
          'Luxury / high-end',
          'Historic homes',
          'Farms / land / acreage',
          'Coastal / waterfront',
          'Equestrian',
          'Condos / townhomes',
          'New construction',
          'Investment / multifamily',
          'Commercial',
          'Vacation / second homes',
          'Relocation',
        ],
      },
      { id: 'price_range', label: 'Average transaction price range you work in', type: 'text' },
      {
        id: 'niche',
        label: 'Is there a niche the vintage theme naturally aligns with?',
        help: 'Historic home specialist, restored Victorians, antebellum estates, character homes — this could be your headline.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    questions: [
      {
        id: 'services_offered',
        label: 'Services you offer',
        type: 'checkbox',
        options: [
          'Buyer representation',
          'Seller representation / listings',
          'Luxury services',
          'Relocation',
          'Investor / 1031 exchange',
          'Leasing / rentals',
          'Land / lot sales',
          'Consultation / hourly',
          'Staging guidance',
          'Historic home expertise / preservation knowledge',
        ],
      },
      {
        id: 'services_unique',
        label: 'For each service, what\'s unique about how you do it?',
        help: '2–3 sentences each. We\'ll use these as service-page copy.',
        type: 'textarea',
      },
      {
        id: 'client_process',
        label: 'What a client should expect when working with you',
        help: 'Bullet your typical steps from first contact to close.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'structure',
    title: 'Site Structure & Pages',
    questions: [
      {
        id: 'site_scope',
        label: 'Scope',
        type: 'radio',
        options: [
          'One-page (everything on a single scroll)',
          'Small multi-page (4–6 pages)',
          'Full multi-page (7+ pages with blog, resources, listings search)',
        ],
      },
      {
        id: 'pages_wanted',
        label: 'Pages I want',
        type: 'checkbox',
        options: [
          'Home',
          'About / Story',
          'Services (buyer / seller)',
          'Featured listings',
          'Full listings search (IDX/MLS)',
          'Areas served (NC + VA, possibly per-town pages)',
          'Testimonials',
          'Blog / journal',
          'Resources / guides (downloadable PDFs)',
          'Press / awards',
          'Contact',
          'Privacy / fair housing',
        ],
      },
      { id: 'must_hit_page', label: 'If multi-page — the ONE page a visitor must hit before contacting you?', type: 'text' },
      {
        id: 'first_action',
        label: 'What action do you want a first-time visitor to take?',
        help: 'Call, text, fill a form, download a guide, book a Calendly, browse listings, sign up for newsletter, etc.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'listings',
    title: 'Listings & MLS',
    questions: [
      { id: 'idx_wanted', label: 'Live listings search on the site (IDX)?', type: 'radio', options: ['Yes', 'No', 'Maybe later'] },
      { id: 'idx_provider', label: 'If yes — existing IDX provider?', help: 'Showcase IDX, iHomeFinder, Real Geeks, Sierra, etc.', type: 'text' },
      { id: 'featured_listings', label: 'If no IDX — featured listings section instead?', help: '3–6 hand-picked listings updated manually.', type: 'radio', options: ['Yes', 'No', 'Not sure'] },
      { id: 'saved_searches', label: 'Saved searches by area', help: 'E.g. "Historic Homes in Wake County," "Waterfront under $1M in Virginia Beach."', type: 'textarea' },
      { id: 'sold_gallery', label: 'Recently-sold gallery?', type: 'radio', options: ['Yes', 'No', 'Maybe'] },
    ],
  },
  {
    id: 'leads',
    title: 'Lead Capture & CRM',
    questions: [
      { id: 'leads_current', label: 'Where do leads currently go?', help: 'Personal email, Follow Up Boss, kvCORE, BoomTown, Sierra, HubSpot, other.', type: 'textarea' },
      { id: 'leads_destination', label: 'Where should website leads land?', type: 'textarea' },
      { id: 'form_fields', label: 'Contact form fields you want', help: 'Default is name + email + phone + message. Add or remove anything.', type: 'textarea' },
      { id: 'chat_widget', label: 'Chat widget?', type: 'radio', options: ['Yes', 'No', 'Maybe later'] },
      { id: 'scheduler', label: 'Scheduler embedded (Calendly, Cal.com, HubSpot Meetings)?', type: 'text' },
      {
        id: 'lead_magnets',
        label: 'Lead magnets — PDFs to offer in exchange for email',
        type: 'checkbox',
        options: [
          'First-time buyer\'s guide',
          'Home seller\'s guide',
          'Relocation guide (NC↔VA)',
          'Historic home buyer\'s guide',
          'Neighborhood report',
          'Market report (quarterly)',
        ],
      },
      { id: 'newsletter', label: 'Newsletter / email list', help: 'Do you have one? What platform (Mailchimp, Flodesk, ConvertKit, MailerLite)?', type: 'textarea' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Required Display',
    questions: [
      { id: 'nc_disclosures', label: 'NC required disclosures', help: 'Working with Real Estate Agents brochure link, license display, brokerage info. If unsure, note who at Swell to ask.', type: 'textarea' },
      { id: 'va_disclosures', label: 'VA required disclosures', help: 'Same for Swell Realty Co VA.', type: 'textarea' },
      { id: 'footer_logos', label: 'Equal Housing logo + Realtor® logo in footer?', type: 'radio', options: ['Yes — both', 'Only Equal Housing', 'Not sure — will check with broker'] },
      { id: 'brokerage_requirements', label: 'Brokerage-required language or templates', help: 'Swell may dictate footer text, logo colors, agent-page templates. Paste anything you have.', type: 'textarea' },
      { id: 'privacy_policy', label: 'Privacy policy / terms', type: 'radio', options: ['I have one — will send', 'Need to draft', 'Not sure'] },
      { id: 'ada', label: 'ADA/WCAG accessibility compliance required by brokerage?', type: 'radio', options: ['Yes', 'No', 'Unsure — will check'] },
    ],
  },
  {
    id: 'social',
    title: 'Social & External Presence',
    questions: [
      { id: 'social_instagram', label: 'Instagram URL', type: 'text' },
      { id: 'social_facebook', label: 'Facebook URL', type: 'text' },
      { id: 'social_tiktok', label: 'TikTok URL', type: 'text' },
      { id: 'social_linkedin', label: 'LinkedIn URL', type: 'text' },
      { id: 'social_youtube', label: 'YouTube URL', type: 'text' },
      { id: 'social_pinterest', label: 'Pinterest URL', type: 'text' },
      { id: 'social_other', label: 'Threads / X / other URL', type: 'text' },
      { id: 'zillow', label: 'Zillow agent profile URL', type: 'text' },
      { id: 'realtordotcom', label: 'Realtor.com profile URL', type: 'text' },
      { id: 'homesdotcom', label: 'Homes.com profile URL', type: 'text' },
      { id: 'google_business', label: 'Google Business Profile URL', type: 'text' },
      { id: 'yelp', label: 'Yelp URL', type: 'text' },
      { id: 'reviews_best_platform', label: 'Where do you have the most reviews? Which platform should we pull from?', type: 'textarea' },
      {
        id: 'reviews_display',
        label: 'Reviews display style',
        type: 'radio',
        options: ['Live feed from a platform', 'Hand-picked testimonials I provide', 'Both'],
      },
    ],
  },
  {
    id: 'trust',
    title: 'Testimonials & Trust',
    questions: [
      { id: 'testimonials', label: 'Existing written testimonials', help: 'Paste them here, or write "I will send a doc."', type: 'textarea' },
      { id: 'video_testimonials', label: 'Past clients who would give a video testimonial?', help: 'Optional but powerful.', type: 'textarea' },
      { id: 'press_awards', label: 'Press, features, awards, top-producer rankings', type: 'textarea' },
      { id: 'stats', label: 'Stats to put on the site', help: 'Years in business, total volume sold, number of families served, etc.', type: 'textarea' },
    ],
  },
  {
    id: 'assets',
    title: 'Content & Assets',
    questions: [
      {
        id: 'headshot',
        label: 'Professional headshot',
        type: 'radio',
        options: ['Yes — I have one I love, will send', 'I have one but want to replace it', 'Need to schedule a new shoot', 'Need help finding a photographer'],
      },
      { id: 'headshot_direction', label: 'Headshot direction', help: 'Any notes — vintage portrait studio feel, outdoor, formal, etc.', type: 'textarea' },
      {
        id: 'lifestyle_photos',
        label: 'Lifestyle photos of you',
        type: 'radio',
        options: ['Yes — have several', 'A few', 'None — would need to shoot', 'Not sure'],
      },
      {
        id: 'market_photos',
        label: 'Local market photography',
        type: 'radio',
        options: ['Yes — have photos of towns / districts', 'Some', 'No — we can source / shoot', 'Use stock for now'],
      },
      { id: 'listing_photo_rights', label: 'Listing photography rights', type: 'radio', options: ['Yes — can use all listing photos', 'No', 'Per-listing — varies'] },
      { id: 'logo_files', label: 'Logo files I have', type: 'radio', options: ['Vector (SVG / AI / EPS)', 'PNG only', 'Just a JPEG', 'None / need designed'] },
      { id: 'bio', label: 'Bio', type: 'radio', options: ['I have a written bio I will send', 'Draft from my origin story above', 'Collaborative — I draft, you polish'] },
    ],
  },
  {
    id: 'domain',
    title: 'Domain, Email & Hosting',
    questions: [
      { id: 'domain_existing', label: 'Do you own a domain?', help: 'What is it? Where is it registered (GoDaddy, Namecheap, Cloudflare)?', type: 'textarea' },
      { id: 'domain_dream', label: 'If not, dream URL?', help: 'List 3 candidates — we\'ll check availability.', type: 'textarea' },
      { id: 'domain_email', label: 'Email at your domain (e.g. hello@yourname.com)?', type: 'radio', options: ['Yes — set up a domain email', 'No — use existing Gmail / brokerage email', 'Not sure'] },
      { id: 'existing_website', label: 'Existing website URL', help: 'If you have one. Is it staying live until launch?', type: 'text' },
      { id: 'hosting', label: 'Hosting preference', type: 'radio', options: ['No preference — recommend the right thing', 'WordPress', 'Squarespace', 'Webflow', 'Wix', 'Custom build'] },
    ],
  },
  {
    id: 'tools',
    title: 'Tools, Budget & Tech',
    questions: [
      {
        id: 'monthly_budget',
        label: 'Monthly budget comfort zone for tools (IDX, CRM, hosting, email)',
        type: 'radio',
        options: ['$0–25/mo', '$25–75/mo', '$75–200/mo', '$200+/mo', 'No cap — just want it right'],
      },
      { id: 'analytics', label: 'Analytics', help: 'Google Analytics, Meta pixel, anything else you want tracked?', type: 'textarea' },
      { id: 'crm', label: 'Current CRM (if any)', type: 'text' },
      { id: 'seo', label: 'SEO priorities', help: 'Specific search phrases you want to rank for. E.g. "historic homes Raleigh," "Norfolk waterfront agent."', type: 'textarea' },
    ],
  },
  {
    id: 'timeline',
    title: 'Timeline',
    questions: [
      { id: 'launch_date', label: 'Target launch date', type: 'text' },
      { id: 'hard_deadline', label: 'Hard deadline (event, season, brokerage requirement)?', type: 'text' },
      { id: 'mvp', label: 'What MUST be live at launch?', help: 'Minimum viable site.', type: 'textarea' },
      { id: 'phase_2', label: 'What can be phase 2?', help: 'Blog, IDX, lead magnets, etc.', type: 'textarea' },
      { id: 'copy_writer', label: 'Who writes the copy?', type: 'radio', options: ['You (the builder)', 'Me (the agent)', 'Collaborative — I draft, you polish'] },
    ],
  },
  {
    id: 'open',
    title: 'Open Field',
    subtitle: 'Last section. Say everything.',
    questions: [
      { id: 'anything_else', label: 'Anything else you want me to know', help: 'Dreams, fears, things you\'ve seen and loved, things you\'ve seen and hated, family stories tied to the brand — anything.', type: 'textarea' },
      { id: 'tried_before', label: 'Things you\'ve tried before that didn\'t work', help: 'Saves us from repeating.', type: 'textarea' },
      { id: 'success_definition', label: 'What does "the site is a success" look like 6 months after launch?', help: 'Be specific. Number of leads, type of leads, vibe people get, recognition in market.', type: 'textarea' },
    ],
  },
];
