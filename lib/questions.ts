export type QuestionType =
  | 'text'
  | 'textarea'
  | 'radio'
  | 'checkbox'
  | 'scale'
  | 'color-palette'
  | 'url-list'
  | 'file-upload'
  | 'this-or-that';

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
    title: 'Who Are You, Really?',
    subtitle: 'Not the license. Not the elevator pitch. We want the real you — the one your best clients already know.',
    questions: [
      {
        id: 'three_words',
        label: 'Three words that are unmistakably you',
        help: 'Not "hardworking" or "dedicated" — those apply to everyone. The three that are specifically, only you.',
        type: 'text',
        placeholder: 'e.g. Magnetic, Rooted, Unexpected',
        required: true,
      },
      {
        id: 'party_energy',
        label: 'You show up to a gathering. Which is more you?',
        type: 'this-or-that',
        options: [
          'Working the room — you know everyone\'s name by the end of the night',
          'Finding one fascinating person and talking until it\'s suddenly midnight',
        ],
      },
      {
        id: 'vibe_space',
        label: 'Pick the vibe that feels more like yours:',
        type: 'this-or-that',
        options: [
          'A beautiful old hotel — worn leather bar, warm light, everything has history',
          'A garden party — mismatched chairs, candles everywhere, laughter until late',
        ],
      },
      {
        id: 'loves_outside_re',
        label: 'What do you love, collect, or lowkey obsess over that has nothing to do with real estate?',
        help: 'Antiques? A specific era? Fashion? Interiors? Art? A style of cooking? Travel? Plants? The stranger the better — this is where brand lives.',
        type: 'textarea',
      },
      {
        id: 'surprise_quality',
        label: 'What\'s something about you that surprises clients once they actually start working with you?',
        help: 'The thing they didn\'t expect.',
        type: 'textarea',
      },
      {
        id: 'seen_compliment',
        label: 'What\'s the compliment that makes you feel most seen?',
        help: 'The one where you think "yes, exactly." Not a professional one — the personal one.',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'world',
    title: 'Your World',
    subtitle: 'What you surround yourself with, reach for on a free day, save without thinking — that\'s where your brand already lives.',
    questions: [
      {
        id: 'home_feels',
        label: 'Your home feels like:',
        type: 'this-or-that',
        options: [
          'Collected over time — every piece has a story and came from somewhere specific',
          'Intentional — fewer things, but each one exactly right',
        ],
      },
      {
        id: 'free_saturday',
        label: 'Walk us through a perfect free Saturday',
        help: 'From morning to night. Where do you go, what do you do, who are you with? This one is more revealing than you think.',
        type: 'textarea',
        placeholder: 'I wake up and...',
      },
      {
        id: 'whats_saved',
        label: 'What\'s in your cart, your saves, your browser tabs right now?',
        help: 'Shopping carts, saved posts, wish lists, recipes you keep meaning to try. No judgment — wherever your mind goes when it wanders.',
        type: 'textarea',
        placeholder: 'Honestly, right now I have...',
      },
      {
        id: 'brands_love',
        label: 'Three brands — not in real estate — whose look and feel you admire',
        help: 'Hotels, restaurants, wine labels, fashion, magazines, candles, stationery — anything. Tell us what specifically you love about each one.',
        type: 'textarea',
        placeholder: '1. [Brand] — I love the way they...\n2. [Brand] — what draws me is...\n3. [Brand] — the feeling they create is...',
      },
      {
        id: 'moodboard',
        label: 'Pinterest boards, Instagram saves, or links that show your world',
        help: 'Your saved posts are one of the most honest windows into your aesthetic. Paste as many links as you like.',
        type: 'url-list',
      },
      {
        id: 'space_feels_right',
        label: 'Describe a space — any space — that makes you exhale',
        help: 'A room in your home, a hotel you stayed in once, a restaurant, a coffee shop, a friend\'s living room. The place where you walk in and feel completely right. What is it about it — the colors, the light, the materials, the feeling?',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'color',
    title: 'Your Color Story',
    subtitle: 'Color is where brand becomes emotion. Take your time with these — they matter more than any hex code.',
    questions: [
      {
        id: 'color_is_you',
        label: 'What color is your energy?',
        help: 'Not your favorite color — the one that feels like you at your best. Describe the feeling of it: warm or cool? Deep or faded? Rich or muted? Earthy or jewel-toned? Don\'t just name it — describe what it does to a room, how it makes you feel.',
        type: 'textarea',
        placeholder: 'It\'s that deep, warm kind of... like late afternoon light on old brick... it feels like...',
      },
      {
        id: 'color_palette',
        label: 'Build your palette',
        help: 'Tap the swatches that speak to you, or paste hex codes, or just describe in words. These are starting points — nothing is permanent.',
        type: 'color-palette',
      },
      {
        id: 'wardrobe_story',
        label: 'Your wardrobe is telling a story. What does it say?',
        help: 'When you get dressed and feel completely yourself — the colors, the materials, the mood of the outfit. This is one of the most honest windows into your aesthetic.',
        type: 'textarea',
        placeholder: 'When I feel most like me, I\'m wearing...',
      },
      {
        id: 'color_direction',
        label: 'When it comes to color, you\'re drawn to:',
        type: 'this-or-that',
        options: [
          'Dark and atmospheric — rich, layered, moody, the kind of room that makes you lean in',
          'Light and warm — sun through linen, cream and gold, everything softly glowing',
        ],
      },
      {
        id: 'colors_hate',
        label: 'Colors that feel completely wrong for you',
        help: 'The ones you want nowhere near your brand. Be ruthless — this is helpful.',
        type: 'textarea',
        placeholder: 'e.g. "Nothing neon, no bright blue, nothing that looks like a bank or a tech startup"',
      },
      {
        id: 'color_photos',
        label: 'Upload anything that captures your color world',
        help: 'Photos of your home, outfits you love, art, places you\'ve been — anything visual that shows us your palette. Images tell us things that words sometimes can\'t.',
        type: 'file-upload',
        placeholder: 'Upload a photo that captures your color world',
      },
    ],
  },

  {
    id: 'look',
    title: 'The Look',
    subtitle: 'What should your brand look like — on paper, on screen, on a business card someone keeps?',
    questions: [
      {
        id: 'ornate_refined',
        label: 'Which feels more like you?',
        type: 'this-or-that',
        options: [
          'Ornate — layered, detailed, lush, every inch considered and intentional',
          'Refined — one beautiful thing, nothing extra, the right choice in the right place',
        ],
      },
      {
        id: 'visual_adjectives',
        label: 'Three words that should describe your brand visually',
        help: 'Not personality words — how it should LOOK. Moody. Warm. Editorial. Soft. Bold. Lush. Weathered. Crisp. Earthy...',
        type: 'text',
        placeholder: 'e.g. Warm, Grounded, Lush',
        required: true,
      },
      {
        id: 'era',
        label: 'The era or aesthetic that feels most like yours',
        help: 'Pick everything that resonates — you can mix.',
        type: 'checkbox',
        options: [
          '1880s–1900s Victorian — deep jewel tones, ornate, wallpaper, layered and rich',
          '1920s Art Deco — gold and black, geometric glamour, Gatsby',
          '1930s–40s — kraft paper, sepia, typewriter, wartime romance',
          '1950s Mid-Century — turquoise and cream, retro travel posters, atomic age',
          '1960s–70s Bohemian — terracotta, macramé, mustard, woven and earthen',
          'Old World / European — leather, brass, apothecary, museum-y, no specific era',
          'Southern and Slow — magnolia, linen, porch light, Spanish moss',
          'Coastal Vintage — faded navy, weathered wood, brass compass, sea glass',
          'None of these fit — I\'ll describe mine below',
        ],
      },
      {
        id: 'era_describe',
        label: 'If none of those fit, describe the era or aesthetic that does',
        type: 'textarea',
        placeholder: 'Describe the aesthetic in your own words...',
      },
      {
        id: 'textures',
        label: 'Textures and materials that speak to you',
        help: 'Pick everything that resonates.',
        type: 'checkbox',
        options: [
          'Aged paper / parchment',
          'Leather-bound book',
          'Brass / aged gold',
          'Linen / canvas',
          'Velvet / damask',
          'Weathered wood',
          'Raw stone or plaster',
          'Silk / satin',
          'Woven rattan',
          'Matte terracotta / clay',
          'Faded photograph / daguerreotype',
          'Postcard / old letter',
          'Old map or blueprint',
        ],
      },
      {
        id: 'typography',
        label: 'Typography mood — how should your words look on the page?',
        help: 'Pick 1–2.',
        type: 'checkbox',
        options: [
          'Letterpress serif — old book title page, tactile, weighty',
          'Typewriter — Courier, smudged, a little rough, telegram feel',
          'Hand-lettered script — flowing signature, personal and warm',
          'Art Deco geometric — Gatsby title cards, bold and graphic',
          'Victorian display serif — ornate, dramatic, like a Wild West poster',
          'Newspaper masthead — NYT, authoritative, old-world',
          'Clean editorial serif — modern magazine, refined and spare',
          'Something else — I\'ll describe it below',
        ],
      },
      {
        id: 'image_captures',
        label: 'Describe an image that captures exactly what you want your brand to feel like',
        help: 'A painting, a film still, a room you saw once, a magazine spread, a store you walked into and never forgot. Describe it in as much detail as you can.',
        type: 'textarea',
      },
      {
        id: 'refs_love',
        label: 'Websites, accounts, or images — outside real estate — whose visual feel you love',
        help: 'Hotels, boutiques, restaurants, magazines, Instagram accounts, anything. Say what specifically you love about each.',
        type: 'url-list',
      },
      {
        id: 'refs_hate',
        label: 'Visual styles or brands that feel completely wrong for you',
        help: '"Looks like every other agent website" is a valid answer. Say why.',
        type: 'url-list',
      },
      {
        id: 'animation',
        label: 'Motion — how alive should the site feel?',
        type: 'radio',
        options: [
          'Still — minimal, barely there, like turning a page',
          'Quiet — gentle fades, things that breathe a little',
          'Alive — scroll reveals, parallax, movement that draws you in',
        ],
      },
    ],
  },

  {
    id: 'voice',
    title: 'How You Sound',
    subtitle: 'Your brand has a voice. We want to write in yours — not a generic agent\'s.',
    questions: [
      {
        id: 'dinner_party',
        label: 'You\'re at dinner and someone asks what you do. Write exactly what you\'d actually say.',
        help: 'Not the polished version. The real one — how you\'d say it to a new friend, not at a networking event.',
        type: 'textarea',
        placeholder: 'So basically what I do is...',
      },
      {
        id: 'voice_formal',
        label: 'By default, you lean...',
        type: 'scale',
        scaleMin: 'Formal & precise',
        scaleMax: 'Casual & easy',
      },
      {
        id: 'voice_expert',
        label: 'Your role in the room is usually...',
        type: 'scale',
        scaleMin: 'Expert authority',
        scaleMax: 'Trusted friend',
      },
      {
        id: 'voice_witty',
        label: 'Your sense of humor is...',
        type: 'scale',
        scaleMin: 'Subtle and dry',
        scaleMax: 'Warm and open',
      },
      {
        id: 'client_words',
        label: 'What do your clients say about you — in their actual words?',
        help: '"She made me feel..." "What I didn\'t expect was..." "The reason I referred my sister to her was..." Their language, not yours. Pull from any review, text, or conversation you remember.',
        type: 'textarea',
      },
      {
        id: 'your_phrase',
        label: 'Is there a phrase or sentence you catch yourself saying all the time?',
        help: 'The thing you say to every client, or to friends, or in texts. The very-you sentence.',
        type: 'text',
        placeholder: 'Something you say all the time without thinking...',
      },
      {
        id: 'website_feeling',
        label: 'When someone leaves your website, what feeling do you want them carrying?',
        help: 'Not "informed" or "impressed" — a specific feeling. Like they found their person? Like they walked into somewhere beautiful? Like they\'re already a client even though they just arrived?',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'standout',
    title: 'What Makes You You',
    subtitle: 'The hardest questions. Also the most important. Vague answers produce forgettable brands — your real answers produce something no one else could have.',
    questions: [
      {
        id: 'superpower',
        label: 'Your actual superpower as an agent',
        help: 'Not "I care about my clients" — that\'s the baseline. What do you do that no one else does, or that no one does the way you do? Think about your last five closings. What specifically made each one work?',
        type: 'textarea',
      },
      {
        id: 'career_story',
        label: 'Tell us a story from your career that captures exactly who you are',
        help: 'A deal, a moment with a client, a decision under pressure, something that went sideways and how you handled it. The story that, if someone read it, they\'d immediately know what kind of agent Britteney Powers is.',
        type: 'textarea',
      },
      {
        id: 'ideal_client',
        label: 'Describe the client who gets the absolute best out of you',
        help: 'Not "someone who\'s serious." Specific — life stage, values, what they worry about, what kind of home they\'re looking for, why they\'d choose you over everyone else.',
        type: 'textarea',
      },
      {
        id: 'bad_client',
        label: 'Describe the wrong-fit client',
        help: 'Filtering them out before they call is a kindness to everyone. Be honest.',
        type: 'textarea',
      },
      {
        id: 'wish_knew',
        label: 'What do you wish more clients knew before they started working with you?',
        type: 'textarea',
      },
      {
        id: 'origin',
        label: 'Why real estate? Why these markets? How did you actually get here?',
        help: 'The real version. 1–3 paragraphs, rough is completely fine.',
        type: 'textarea',
      },
    ],
  },

  {
    id: 'signature',
    title: 'Your Signature',
    subtitle: 'The last section — and the most fun. This is where everything you\'ve said becomes a brand.',
    questions: [
      {
        id: 'name_format',
        label: 'How do you want to be known?',
        type: 'radio',
        options: [
          'Britteney Powers — full name, always present',
          'Britteney — first name only, warm and personal',
          'BP — initials, clean and memorable',
          'Something I haven\'t thought of yet — let\'s figure it out together',
        ],
      },
      {
        id: 'tagline',
        label: 'If your brand had a signature phrase — the thing that goes on everything — what would it be?',
        help: 'If you don\'t have one yet, write three things you\'d love to hear a client say about you.',
        type: 'textarea',
      },
      {
        id: 'name_feeling',
        label: 'When someone hears "Britteney Powers" for the first time — what should they already feel?',
        help: 'Before they\'ve met you. What should your name alone make them think of, feel, expect?',
        type: 'textarea',
      },
      {
        id: 'logo_idea',
        label: 'If you had to describe your ideal logo in one sentence, what would it be?',
        help: 'Even a rough instinct is perfect. A monogram in a seal? Your initials in script on a stamp? Something with a magnolia or a compass? Something architectural? Don\'t worry about being right — just say what you imagine.',
        type: 'textarea',
        placeholder: 'I picture something like...',
      },
      {
        id: 'logo_inspiration',
        label: 'Logo inspiration — crests, labels, or brands you love',
        help: 'Think way outside real estate: wine labels, hotel crests, stationery brands, perfume packaging, old book publishers. Paste links or describe what you love.',
        type: 'textarea',
      },
      {
        id: 'logo_status',
        label: 'Current logo situation',
        type: 'radio',
        options: [
          'I have a Swell logo I need to use',
          'I have one but I\'m open to a refresh',
          'I need one designed from scratch',
          'No strong opinion — recommend what works',
        ],
      },
      {
        id: 'logo_file',
        label: 'Upload your logo if you have one',
        help: 'SVG, PNG, JPG — any format. Max 10MB.',
        type: 'file-upload',
        placeholder: 'Upload your current logo',
      },
      {
        id: 'anything_else',
        label: 'Everything else — dreams, fears, references, stories, vibes, things you\'ve loved, things that felt wrong',
        help: 'No structure, no prompt. Say whatever you want. The stuff that doesn\'t fit the questions above is often the most useful thing you tell us.',
        type: 'textarea',
        placeholder: 'Say whatever you want here. More is always more.',
      },
    ],
  },
];
