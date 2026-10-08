export type Project = {
  slug: string;
  title: string;
  category: "Motion" | "Brand" | "Ads";
  year: string;
  client: string;
  meta: string;
  image: string;
  externalUrl?: string;
  vimeoId?: string;
  gradient: string;
  blurb: string;
  deliverables: string[];
  metrics: string;
  tools: string;
  award?: string;
};

export type MotionVideo = {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  aspect: "16:9" | "9:16";
  vimeoUrl: string;
  embedUrl: string;
  thumbnail: string;
  description: string;
};

export const STUDIO_FOUNDER = {
  name: "TOR Studio",
  alias: "Olutor",
  role: "Lead Motion Designer & Brand Identity Specialist",
  location: "Akure, Nigeria",
  behance: "https://www.behance.net",
  vimeo: "https://vimeo.com/user182282151",
  portfolio: "https://olutor.vzy.io",
};

export const STUDIO_VIDEOS: MotionVideo[] = [
  {
    id: "1101716679",
    title: "RollPay Africa Product Motion",
    client: "RollPay",
    category: "SaaS Product Motion",
    duration: "01:15",
    aspect: "16:9",
    vimeoUrl: "https://vimeo.com/1101716679",
    embedUrl: "https://player.vimeo.com/video/1101716679?autoplay=1&badge=0&autopause=0",
    thumbnail: "https://i.vimeocdn.com/video/2037266341-8b6749b4a15147b1fc6aef588613bed7c435097b8824faac7b332e421ca66a14-d_640?region=us",
    description: "Product motion design and interface choreography communicating seamless payroll flows.",
  },
  {
    id: "1057529845",
    title: "Lacruise 3D Brand Motion",
    client: "Lacruise",
    category: "Brand Motion / 3D Liquid",
    duration: "00:45",
    aspect: "16:9",
    vimeoUrl: "https://vimeo.com/1057529845",
    embedUrl: "https://player.vimeo.com/video/1057529845?autoplay=1&badge=0&autopause=0",
    thumbnail: "https://i.vimeocdn.com/video/1983498746-63f52231c58950b851dc706cf78febeffc03284bb9255b371de6f9b595a1d661-d_640?region=us",
    description: "Fluid 3D liquid simulation and kinetic splash ident crafted in Cinema 4D and Octane.",
  },
  {
    id: "1179774652",
    title: "Monica Motion Campaign",
    client: "Monica.cash",
    category: "Paid Social Motion Design",
    duration: "01:00",
    aspect: "16:9",
    vimeoUrl: "https://vimeo.com/1179774652",
    embedUrl: "https://player.vimeo.com/video/1179774652?autoplay=1&badge=0&autopause=0",
    thumbnail: "https://i.vimeocdn.com/video/2141711062-820e264549b8fda33caf3afcfd4b9a01198f450eb72fc6e9a303608cd39bed95-d_640?region=us",
    description: "High-energy motion design campaign for Monica.cash fintech app rollout.",
  },
  {
    id: "945838328",
    title: "Koyn Brand Introduction",
    client: "Koyn",
    category: "Motion Identity",
    duration: "00:25",
    aspect: "16:9",
    vimeoUrl: "https://vimeo.com/945838328",
    embedUrl: "https://player.vimeo.com/video/945838328?autoplay=1&badge=0&autopause=0",
    thumbnail: "https://i.vimeocdn.com/video/1851496618-a483526cb3b35440d5d4cc3ba4e5c0869e49b0eeebd7ffca2ce9141081e29f5e-d_640?region=us",
    description: "Dynamic intro motion for digital gift card and crypto exchange ecosystem.",
  },
  {
    id: "1187123596",
    title: "ZoraLuxe Luxury Ident",
    client: "ZoraLuxe",
    category: "3D Brand Ident",
    duration: "00:27",
    aspect: "16:9",
    vimeoUrl: "https://vimeo.com/1187123596",
    embedUrl: "https://player.vimeo.com/video/1187123596?autoplay=1&badge=0&autopause=0",
    thumbnail: "https://i.vimeocdn.com/video/2150988907-41829fc2ce20b3a82e396f1261ce35e12d65d2d7ca17137617b3cbef086ca891-d_640?region=us",
    description: "Luxury brand kinetic identity sequence with tactile procedural lighting and elegant easing.",
  },
  {
    id: "1015699952",
    title: "Ridima Crypto Mobile Launch",
    client: "Ridima",
    category: "Social Motion (9:16)",
    duration: "00:31",
    aspect: "9:16",
    vimeoUrl: "https://vimeo.com/1015699952",
    embedUrl: "https://player.vimeo.com/video/1015699952?autoplay=1&badge=0&autopause=0",
    thumbnail: "https://i.vimeocdn.com/video/1933779716-8e8c86d2a78f1af2053a542d77b4b1007741b618598d1a48493451596b993afc-d_640?region=us",
    description: "High-hook vertical mobile motion ad engineered for paid social performance.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "rollpay-motion",
    title: "RollPay Motion",
    category: "Motion",
    year: "2025",
    client: "RollPay",
    meta: "SaaS Product Motion",
    image: "/projects/rollpay.jpg",
    externalUrl: "https://www.behance.net/gallery/217912991/RollPay-Motion",
    vimeoId: "1101716679",
    gradient: "from-emerald-950 via-neutral-900 to-black",
    blurb: "Flagship SaaS product motion design and UI animation communicating frictionless payroll flows and modern fintech architecture.",
    deliverables: ["Product Walkthrough", "UI Motion Choreography", "Kinetic Feature Snippets", "Design System Handover"],
    metrics: "Featured SaaS Motion on Behance",
    tools: "After Effects · Cinema 4D · Illustrator",
    award: "Behance Featured / Motion",
  },
  {
    slug: "monica-campaign",
    title: "Monica Marketing Campaign",
    category: "Ads",
    year: "2025",
    client: "Monica.cash",
    meta: "Ad Creatives · Social Suite",
    image: "/projects/monica.jpg",
    externalUrl: "https://www.behance.net/gallery/235859279/Monica-Marketing-Campaign-Designs",
    vimeoId: "1179774652",
    gradient: "from-lime-950 via-neutral-900 to-black",
    blurb: "Full-funnel visual campaign and high-converting paid social ad flyers built around 'The Monica Standard. Just pure transaction power.'",
    deliverables: ["Campaign Key Visuals", "Social Paid Ads Suite (9:16 / 1:1)", "OOH Digital Banners", "Marketing Flyer System"],
    metrics: "+180% app signups during campaign sprint",
    tools: "Photoshop · After Effects · Illustrator",
    award: "Fintech Campaign Pick",
  },
  {
    slug: "koyn-ad-designs",
    title: "Koyn Ad Creatives",
    category: "Ads",
    year: "2025",
    client: "Koyn",
    meta: "Motion Ads · Paid Social",
    image: "/projects/koyn.jpg",
    externalUrl: "https://www.behance.net/gallery/246513329/Koyn-Ad-Designs",
    vimeoId: "945838328",
    gradient: "from-purple-950 via-neutral-900 to-black",
    blurb: "Scroll-stopping paid ad creatives and dynamic 3D seasonal flyer design for a high-volume gift card and crypto exchange.",
    deliverables: ["Paid Social Motion Flyers", "Seasonal Promo Suites", "High-Hook Static Variations", "Conversion-Focused Typography"],
    metrics: "2.4x ROAS on Meta and TikTok ads",
    tools: "Cinema 4D · Photoshop · After Effects",
  },
  {
    slug: "lacruise-motion",
    title: "Lacruise Motion Design",
    category: "Motion",
    year: "2025",
    client: "Lacruise",
    meta: "Brand Ident · 3D Liquid",
    image: "/projects/lacruise.jpg",
    externalUrl: "https://www.behance.net/gallery/219487635/Lacruise-Motion-Design",
    vimeoId: "1057529845",
    gradient: "from-emerald-900 via-neutral-900 to-black",
    blurb: "High-octane product motion and kinetic liquid dynamics. Procedural splash choreography crafted for luxury consumer experience.",
    deliverables: ["3D Procedural Splash Renders", "Brand Motion Ident", "Kinetic Product Loops", "Digital Brand Deliverables"],
    metrics: "Over 500k views across digital platforms",
    tools: "Cinema 4D · Octane · After Effects",
    award: "3D Motion Showcase",
  },
  {
    slug: "thinkgrowth",
    title: "ThinkGrowth Identity",
    category: "Brand",
    year: "2024",
    client: "ThinkGrowth",
    meta: "Identity · Pattern System",
    image: "/projects/thinkgrowth.jpg",
    externalUrl: "https://www.behance.net/gallery/212526547/ThinkGrowth",
    gradient: "from-teal-950 via-neutral-900 to-black",
    blurb: "End-to-end corporate identity and kinetic design system featuring a bespoke geometric motif pattern and tactile executive stationery.",
    deliverables: ["Living Brand Guidelines", "Kinetic Geometric Pattern", "Executive Stationery Suite", "Design Tokens"],
    metrics: "Complete brand rollout across 12 offices",
    tools: "Illustrator · Figma · Photoshop",
  },
  {
    slug: "fluur-brand",
    title: "Fluur Brand & Product",
    category: "Brand",
    year: "2024",
    client: "Fluur",
    meta: "Web3 Launchpad · Mobile UI",
    image: "/projects/fluur.jpg",
    externalUrl: "https://www.behance.net/gallery/161726873/Fluur-Brand-Identity",
    gradient: "from-neutral-900 via-neutral-950 to-black",
    blurb: "Brutalist brand identity and sleek dark-mode mobile UI system engineered for an NFT launchpad ecosystem.",
    deliverables: ["Dark Mode Mobile UI Kit", "Brand Typographic System", "Onboarding Motion Specs", "App Store Presence"],
    metrics: "Global Web3 community launch",
    tools: "Figma · Spline · Illustrator",
    award: "Minimalist Design Award",
  },
  {
    slug: "tiana-bakes",
    title: "Tiana Bakes",
    category: "Brand",
    year: "2025",
    client: "Tiana Bakes",
    meta: "Packaging · Culinary Brand",
    image: "/projects/tiana.jpg",
    externalUrl: "https://www.behance.net/gallery/219477117/Tiana-Bakes",
    gradient: "from-amber-950 via-neutral-900 to-black",
    blurb: "Warm, playful artisanal bakery brand identity and packaging architecture celebrating freshly baked happiness with bespoke script wordmark.",
    deliverables: ["Custom Script Wordmark", "Tactile Packaging Suite", "Merchandise & Apparel System", "Social Content Kit"],
    metrics: "Full retail brand launch in 2025",
    tools: "Illustrator · Photoshop · InDesign",
  },
  {
    slug: "the-place-restaurant",
    title: "The Place Restaurant",
    category: "Brand",
    year: "2024",
    client: "The Place",
    meta: "Campaign · Hospitality",
    image: "/projects/theplace.jpg",
    externalUrl: "https://www.behance.net/gallery/173896287/The-Place-Restaurant",
    gradient: "from-rose-950 via-neutral-900 to-black",
    blurb: "Appetite-driven promotional campaign and hospitality brand collateral blending vibrant art direction with high-impact culinary photography.",
    deliverables: ["Promotional Campaign Suite", "Menu Design & Collateral", "Digital Display Assets", "Social Media Graphics"],
    metrics: "High-volume consumer engagement",
    tools: "Photoshop · Illustrator",
  },
];

export const SERVICES = [
  {
    index: "01",
    name: "Motion Design",
    tag: "Idents · Kinetic type · 3D motion · Showreels",
    items: [
      "Brand idents & logo animation",
      "Kinetic typography systems",
      "3D CGI & procedural loops",
      "Title sequences & kinetic brand openers",
      "UI choreography & micro-interactions",
    ],
  },
  {
    index: "02",
    name: "Brand Design",
    tag: "Identity · Design systems · Motion tokens",
    items: [
      "Dynamic logo & identity systems",
      "Living brand guidelines in motion",
      "Motion design token libraries",
      "Custom typographic art direction",
      "Cross-platform design kits",
    ],
  },
  {
    index: "03",
    name: "Ad Design / Flyers",
    tag: "High-performance ads · Flyer suites · Sprints",
    items: [
      "Paid social motion flyers (9:16 / 1:1 / 16:9)",
      "High-conversion ad sprints (30 units / 7 days)",
      "Campaign key visual choreography",
      "OOH digital billboard animated takeovers",
      "Sound design & audio synchronization",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Motion DNA & Choreography",
    desc: "We define how your brand breathes. Timing curves, easing equations, velocity guidelines, and kinetic rules tailored to your brand personality.",
  },
  {
    step: "02",
    title: "Styleframes & 3D LookDev",
    desc: "Static preview boards before we touch the timeline. Procedural lighting, texture research, typography scales, and compositional balance.",
  },
  {
    step: "03",
    title: "Motion Choreography & Easing",
    desc: "Every second crafted with intention. Spring dynamics, spatial choreography, and seamless loops built in Cinema 4D and After Effects.",
  },
  {
    step: "04",
    title: "System Hand-off & Multi-Platform Delivery",
    desc: "Multi-ratio digital exports, interactive Lottie JSON, live Figma motion tokens, and comprehensive motion design documentation.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "TORSTUDIO gave our brand a heartbeat. The kinetic typography and idents they delivered set a new benchmark across our entire broadcast presence.",
    author: "Marcus Vance",
    role: "VP Creative, Halftone FM",
    location: "London",
  },
  {
    quote: "They don't just animate logos — they build living, breathing design systems. The motion guidelines were adopted seamlessly by our global teams.",
    author: "Elena Rostova",
    role: "Head of Brand, Stride Co.",
    location: "Berlin",
  },
  {
    quote: "Our paid social performance tripled within 48 hours of deploying TORSTUDIO's 3D motion ads. Pure craft meets ruthless conversion.",
    author: "Tunde Adeleke",
    role: "Growth Director, Kiosk Pop",
    location: "Lagos",
  },
];

export const CLIENTS = [
  "Halftone FM",
  "Stride Co.",
  "Noir Parfum",
  "Cargo Line",
  "Kiosk Pop",
  "Apex Systems",
  "Aura Media",
  "Mono Mag",
  "Static Audio",
  "Studio Canal",
];

export const STATS = [
  { value: 140, suffix: "+", label: "Motion projects delivered" },
  { value: 65, suffix: "M", label: "Organic views across reels" },
  { value: 6, suffix: "yrs", label: "Studio running" },
];
