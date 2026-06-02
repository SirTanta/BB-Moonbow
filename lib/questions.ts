export type QuestionType =
  | 'text'
  | 'textarea'
  | 'radio'
  | 'checkbox'
  | 'scale'
  | 'color-palette'
  | 'url-list'
  | 'file-upload';

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
    id: 'you',
    title: 'You, Unfiltered',
    subtitle: 'Before we talk about your brand, tell us who you are. Not your elevator pitch — who you actually are.',
    questions: [
      {
        id: 'room_entrance',
        label: 'If your brand were a person walking into a room, how would people describe her?',
        help: 'Not her job. Her. What\'s the energy? What does she wear? How does she talk? What do people feel the moment she arrives?',
        type: 'textarea',
        placeholder: 'She walks in and the room...',
      },
      {
        id: 'three_words',
        label: 'Three words that are unmistakably you',
        help: 'Not "professional" or "trustworthy" — those apply to everyone. The three that are specifically, only you.',
        type: 'text',
        placeholder: 'e.g. Bold, Rooted, Magnetic',
        required: true,
      },
      {
        id: 'outside_re',
        label: 'What do you love, collect, or obsess over outside of real estate?',
        help: 'Antiques? A specific decade? A fashion era? Interiors? Art? Music? Food? Travel? A style of home? Go anywhere — this is where brand lives.',
        type: 'textarea',
      },
      {
        id: 'compliment',
        label: 'What\'s the compliment you receive that makes you feel most seen?',
        help: 'The one that makes you think "yes, exactly." Not a professional compliment — the personal one.',
        type: 'textarea',
      },
      {
        id: 'surprise',
        label: 'What\'s a part of your personality that clients don\'t expect — but end up loving?',
        help: 'The thing that surprises people once they actually work with you.',
        type: 'textarea',
      },
      {
        id: 'known_for',
        label: 'What are you known for in your market — personally, not just professionally?',
        help: 'Your reputation beyond "good agent." How do other agents describe you? What do clients tell their friends?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'color',
    title: 'Your Color World',
    subtitle: 'Color is where brand becomes emotion. We\'re going deep here — take your time with every question.',
    questions: [
      {
        id: 'color_is_you',
        label: 'What color is "you"?',
        help: 'Not your favorite color — the one that feels like your energy, your room, your vibe. Describe it in words: warm or cool? Deep or faded? Rich or muted? Earthy or jewel-toned? Tell us the feeling of it, not just the name.',
        type: 'textarea',
        placeholder: 'It\'s a deep, warm... like the light in a room at 4pm... it feels like...',
      },
      {
        id: 'color_palette',
        label: 'Build your palette',
        help: 'Paste hex codes, color names, or describe in words. These are starting points — don\'t overthink it. Example: "Cream #F4EDE0, ink black #1B1B1B, oxblood #6E1A1A, brass #B08D57" — or just "dusty rose, sage, ivory, aged gold."',
        type: 'color-palette',
      },
      {
        id: 'wardrobe',
        label: 'Your wardrobe — when you get dressed and feel completely yourself, what are you wearing?',
        help: 'Colors, materials, silhouette, mood of the outfit. This tells us more than a color swatch ever could.',
        type: 'textarea',
        placeholder: 'When I feel most like myself, I\'m wearing...',
      },
      {
        id: 'favorite_space',
        label: 'Describe a space that makes you feel completely right',
        help: 'A room in your home, a hotel lobby, a restaurant, a coffee shop, a store — somewhere you walk into and exhale. What are the colors? The lighting? The materials? Why does it feel like yours?',
        type: 'textarea',
      },
      {
        id: 'colors_love',
        label: 'Colors you are drawn to — anywhere in your life',
        help: 'Walls, furniture, clothes, ceramics, flowers, art. Even a color from nature that speaks to you. The more specific the better.',
        type: 'textarea',
        placeholder: 'e.g. The terracotta of old Tuscan walls, the gold-green of Spanish moss, a dark oxblood red...',
      },
      {
        id: 'colors_hate',
        label: 'Colors you hate or that feel completely wrong for you',
        type: 'textarea',
        placeholder: 'e.g. "No bright blue, nothing neon, nothing that looks like a tech company or a bank"',
      },
      {
        id: 'color_photos',
        label: 'Upload photos that capture your color world',
        help: 'Your home, things you own, outfits you love, places you\'ve been, art that speaks to you — anything visual that shows us your palette. No format requirements, any size.',
        type: 'file-upload',
      },
    ],
  },
  {
    id: 'aesthetic',
    title: 'Your Aesthetic World',
    subtitle: 'What moves you visually — outside of real estate. The brands, spaces, and images that feel like yours.',
    questions: [
      {
        id: 'brands_love',
        label: 'Three brands — not in real estate — whose visual identity you love',
        help: 'Fashion, hotels, restaurants, wine labels, magazines, perfume, stores, candles, book publishers, anything. Say what specifically you love about each one.',
        type: 'textarea',
        placeholder: '1. Brand name — I love the way they...\n2. Brand name — what draws me is...\n3. Brand name — the feeling they create is...',
      },
      {
        id: 'era_style',
        label: 'Describe the era, style, or aesthetic that feels most like yours',
        help: 'Could be a decade, a culture, a movement, an art period, a place. Not necessarily vintage — whatever is authentically you. It\'s okay if it\'s a mix.',
        type: 'textarea',
      },
      {
        id: 'textures',
        label: 'Textures and materials that speak to you',
        help: 'Pick everything that resonates.',
        type: 'checkbox',
        options: [
          'Aged paper / parchment',
          'Leather-bound book',
          'Brass / aged gold metal',
          'Linen / canvas',
          'Velvet / damask',
          'Weathered wood',
          'Raw stone / plaster',
          'Silk / satin',
          'Woven rattan / wicker',
          'Matte terracotta / ceramic',
          'Faded photograph / daguerreotype',
          'Postcard / stamp / envelope',
          'Old map / blueprint',
          'Something else — describe below',
        ],
      },
      {
        id: 'textures_other',
        label: 'Describe any textures or materials not listed above',
        type: 'textarea',
        placeholder: 'Any other materials, surfaces, or textures that feel like your brand...',
      },
      {
        id: 'moodboard',
        label: 'Pinterest boards, Instagram saves, or mood-board links',
        help: 'Paste any links. Your saved posts are one of the most honest windows into your aesthetic — share as many as you like.',
        type: 'url-list',
      },
      {
        id: 'image_that_captures',
        label: 'Describe an image, room, or scene that captures exactly what you want your brand to look like',
        help: 'Could be something you saw once and never forgot. A painting, a movie still, a magazine spread, a store you walked into. Describe it in as much detail as you can.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'voice',
    title: 'Your Voice',
    subtitle: 'How you sound is as important as how you look. We want to write in your voice — not a generic agent voice.',
    questions: [
      {
        id: 'voice_formal',
        label: 'How you talk — Formal to Casual',
        type: 'scale',
        scaleMin: 'Formal',
        scaleMax: 'Casual',
      },
      {
        id: 'voice_polished',
        label: 'How you talk — Polished to Warm',
        type: 'scale',
        scaleMin: 'Polished',
        scaleMax: 'Warm',
      },
      {
        id: 'voice_expert',
        label: 'How you talk — Expert Authority to Trusted Friend',
        type: 'scale',
        scaleMin: 'Expert Authority',
        scaleMax: 'Trusted Friend',
      },
      {
        id: 'voice_witty',
        label: 'How you talk — Witty to Earnest',
        type: 'scale',
        scaleMin: 'Witty',
        scaleMax: 'Earnest',
      },
      {
        id: 'dinner_party',
        label: 'Write 2–3 sentences about what you do — the way you\'d say it at a dinner party',
        help: 'Not the polished bio version. The version you\'d say to someone you just met who asked "so what do you do?" Talk like yourself.',
        type: 'textarea',
        placeholder: 'So basically what I do is...',
      },
      {
        id: 'client_words',
        label: 'What do clients say about working with you — in their own words?',
        help: 'Their language, not yours. "She made me feel..." "What I didn\'t expect was..." "The reason I referred her was..." If you have testimonials, pull the phrases that feel most true.',
        type: 'textarea',
      },
      {
        id: 'your_phrase',
        label: 'Is there a phrase, saying, or line you find yourself saying all the time?',
        help: 'Something you catch yourself repeating — to clients, to friends, in text messages. The sentence that\'s very "you."',
        type: 'text',
        placeholder: 'A phrase that\'s very you...',
      },
      {
        id: 'website_feeling',
        label: 'How do you want someone to feel when they read your website?',
        help: 'Not "informed" or "impressed" — a specific feeling. Like they walked into a beautiful store? Like they found the one person who gets it? Like they\'re talking to a friend who happens to be the best in the business?',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'standout',
    title: 'What Makes You Stand Out',
    subtitle: 'This is the hardest section — and the most important. Be ruthlessly specific. Vague answers produce generic brands.',
    questions: [
      {
        id: 'superpower',
        label: 'What is your actual superpower as an agent?',
        help: 'Not "I care about my clients." Every agent says that. What do you do that no one else does, or does the way you do it? Think about your last five closings — what specifically made each one work?',
        type: 'textarea',
      },
      {
        id: 'career_story',
        label: 'Tell us a story from your career that captures exactly who you are',
        help: 'A deal, a client moment, a decision you made under pressure, something that went wrong and how you handled it. The story that, if someone read it, they\'d know immediately what kind of agent Britteney Powers is.',
        type: 'textarea',
      },
      {
        id: 'ideal_client',
        label: 'Describe the client who gets the absolute best out of working with you',
        help: 'Be specific — what do they value, what life stage are they in, what kind of home are they looking for, what worries them? The clearer you are, the more the right people will find you.',
        type: 'textarea',
      },
      {
        id: 'bad_client',
        label: 'Describe the client you are not the right fit for',
        help: 'The wrong-fit client burns time and energy for everyone. Filtering them out before they call is a gift to both of you.',
        type: 'textarea',
      },
      {
        id: 'wish_they_knew',
        label: 'What do you wish every client knew about working with you before they started?',
        type: 'textarea',
      },
      {
        id: 'origin',
        label: 'Your origin story — why real estate, why these markets',
        help: '1–3 paragraphs, rough is fine. The real answer, not the polished one.',
        type: 'textarea',
      },
    ],
  },
  {
    id: 'visual',
    title: 'Your Visual Identity',
    subtitle: 'Now we bring it together. What should your brand actually look like?',
    questions: [
      {
        id: 'visual_adjectives',
        label: 'Three adjectives that should describe your brand visually',
        help: 'Not personality words — how it should look. Warm, dark, editorial, soft, bold, ornate, minimal, earthy, moody, crisp...',
        type: 'text',
        placeholder: 'e.g. Warm, Grounded, Refined',
        required: true,
      },
      {
        id: 'typography',
        label: 'Typography mood — how should your words look on the page?',
        help: 'Pick 1–2.',
        type: 'checkbox',
        options: [
          'Letterpress serif (old book title page, tactile, weighty)',
          'Typewriter (Courier, smudged, telegram feel)',
          'Hand-lettered script (flowing signature, personal)',
          'Art Deco geometric (Gatsby title cards, bold and graphic)',
          'Victorian display serif (ornate, dramatic, Wild West poster)',
          'Newspaper masthead (NYT, authoritative old-world feel)',
          'Clean editorial serif (modern magazine, refined)',
          'Something else — describe below',
        ],
      },
      {
        id: 'typography_other',
        label: 'Describe the typography direction if it\'s not listed above',
        type: 'textarea',
        placeholder: 'Any other direction for how text should feel...',
      },
      {
        id: 'logo_idea',
        label: 'Logo — describe your ideal logo in one sentence',
        help: 'Even a rough instinct. A monogram in a crest? Your initials in a stamp? A house with a magnolia? An ornate B? A compass? Don\'t worry about being right — say what you imagine.',
        type: 'textarea',
        placeholder: 'I picture something like...',
      },
      {
        id: 'logo_inspiration',
        label: 'Logo inspiration — brands, crests, labels, or images you love',
        help: 'Think outside real estate: wine labels, hotel crests, stationery brands, perfume packaging, book publishers. Paste links or describe.',
        type: 'textarea',
      },
      {
        id: 'logo_status',
        label: 'Current logo situation',
        type: 'radio',
        options: [
          'I have a Swell logo I must use',
          'I have a logo but I\'m open to a refresh',
          'I need one designed from scratch',
          'No strong opinion — recommend what works',
        ],
      },
      {
        id: 'logo_file',
        label: 'Upload your logo (if you have one)',
        help: 'SVG, PNG, JPG, or EPS — any format. Max 10MB.',
        type: 'file-upload',
      },
      {
        id: 'refs_love',
        label: 'Websites, accounts, or images — outside real estate — whose visual feel you love',
        help: 'Hotels, boutiques, restaurants, magazines, Instagram accounts, anything. Say what specifically you love about each.',
        type: 'url-list',
      },
      {
        id: 'refs_hate',
        label: 'Visual styles or websites you hate — or that feel completely wrong for you',
        help: 'Say why. "Looks like every other agent website" is a valid answer.',
        type: 'url-list',
      },
      {
        id: 'animation',
        label: 'Motion and animation — how alive should the site feel?',
        type: 'radio',
        options: [
          'Minimal — still and elegant, like turning a page',
          'Subtle — gentle fades, hover details, quiet motion',
          'Lively — scroll-triggered reveals, parallax, things that move and breathe',
        ],
      },
    ],
  },
  {
    id: 'signature',
    title: 'Your Signature',
    subtitle: 'The final piece — how you want to be known, and everything we didn\'t think to ask.',
    questions: [
      {
        id: 'name_format',
        label: 'How do you want to be known publicly?',
        type: 'radio',
        options: [
          'Britteney Powers (full name, always)',
          'Britteney (first name — warm, personal)',
          'BP (initials — clean, branded)',
          'Something else — describe below',
        ],
      },
      {
        id: 'tagline',
        label: 'Tagline or signature phrase',
        help: 'If you have one, what is it? If not, write three phrases you\'d love to hear a client say about you.',
        type: 'textarea',
      },
      {
        id: 'name_feeling',
        label: 'What should the name "Britteney Powers" immediately make people think of?',
        help: 'When someone hears your name and hasn\'t met you yet — what feeling, image, or association should already be there?',
        type: 'textarea',
      },
      {
        id: 'niche',
        label: 'Is there a niche or specialty you want your brand to own?',
        help: 'Historic homes? A specific neighborhood? A client type? A style of property? Something you\'re building toward? Or intentionally broad — that\'s a valid answer too.',
        type: 'textarea',
      },
      {
        id: 'proudest',
        label: 'A career moment you\'re proudest of',
        help: 'Could become a story on the site. Big or small — the one that sticks with you.',
        type: 'textarea',
      },
      {
        id: 'anything_else',
        label: 'Anything else you want us to know',
        help: 'Dreams, fears, things you\'ve seen and loved, things you\'ve seen and hated, a memory that captures the vibe, a feeling you want people to have, something about who you are that doesn\'t fit any question above. There is no limit here.',
        type: 'textarea',
        placeholder: 'Say whatever you want here. More is more.',
      },
      {
        id: 'tried_before',
        label: 'Things you\'ve tried before that didn\'t work',
        help: 'Past branding attempts, headshots that felt wrong, a vibe you tried that wasn\'t you. Saves us from repeating mistakes.',
        type: 'textarea',
      },
    ],
  },
];
