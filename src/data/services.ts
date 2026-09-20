/**
 * DUST REMOVER CLEANING SERVICES — CENTRAL DATA & CONFIGURATION
 * 
 * You can edit all business information, phone numbers, services,
 * prices, units, and image paths directly in this file.
 */

// ==========================================
// 1. BUSINESS & WHATSAPP CONFIGURATION
// ==========================================
export const COMPANY_CONFIG = {
  name: "Dust Remover Cleaning Services",
  tagline: "Professional Cleaning Services You Can Trust",
  subheadline:
    "Professional cleaning solutions for homes, offices and more. Quality service, transparent pricing and easy WhatsApp booking.",
  // Local display number
  phoneDisplay: "03003486603",
  // International format for WhatsApp links (no + or spaces)
  whatsappNumber: "923003486603",
  // Default WhatsApp link with standard greeting
  defaultWhatsAppUrl:
    "https://wa.me/923003486603?text=Assalamualaikum%2C%20I%20found%20your%20website%20and%20would%20like%20to%20get%20a%20quote%20for%20cleaning%20service.",
  quoteWhatsAppUrl:
    "https://wa.me/923003486603?text=Assalamualaikum%2C%20I%20would%20like%20to%20get%20a%20cleaning%20service%20quote.",
  logoUrl: "/images/logo/dust-remover-logo.jpg",
  heroImageUrl: "/images/hero/hero-cleaning.jpg",
};

// ==========================================
// 2. AREAS WE SERVE
// ==========================================
export const SERVED_AREAS = [
  {
    city: "Karachi",
    tagline: "Rapid mobile cleaning teams available across all major districts & residential zones",
  },
  {
    city: "Hyderabad",
    tagline: "Comprehensive residential, commercial & upholstery cleaning services",
  },
  {
    city: "Islamabad",
    tagline: "Premium home deep cleaning, sofa washing & corporate office cleaning",
  },
  {
    city: "Rawalpindi",
    tagline: "Specialized steam extraction, mattress disinfection & fumigation solutions",
  },
  {
    city: "Lahore",
    tagline: "Full-scale house deep cleaning, carpet shampooing & solar panel maintenance",
  },
];

export interface SubTier {
  name: string;
  price: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: "Upholstery & Fabrics" | "Deep Cleaning" | "Commercial & Specialized";
  description: string;
  // Display price formatted for UI cards
  priceDisplay: string;
  // Price unit, e.g. "per Seat", "per Sq Ft", "Starting price", "per Panel"
  unit: string;
  // Multi-tier pricing (e.g. Mattress King/Queen/Single)
  tiers?: SubTier[];
  // Tracking ID for advertising/analytics buttons
  trackingId: string;
  // Service icon name for Lucide icons
  iconName: string;
  // Default customized message pre-filled when user taps this service
  whatsappMessage: string;
}

// ==========================================
// 3. EDIT SERVICE PRICES HERE
// ==========================================
// You can update any price or service details here without editing other files.
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "sofa-cleaning",
    name: "Sofa Cleaning",
    category: "Upholstery & Fabrics",
    description: "Deep fabric and leather extraction removing deep-seated dust, tough spots, allergens, and odors.",
    priceDisplay: "Rs. 250",
    unit: "per Seat",
    trackingId: "whatsapp-service-sofa",
    iconName: "Armchair",
    whatsappMessage: "Assalamualaikum, I am interested in Sofa Cleaning. Please provide me with a quotation.",
  },
  {
    id: "carpet-cleaning",
    name: "Carpet Cleaning",
    category: "Upholstery & Fabrics",
    description: "Industrial rotary shampooing and deep suction extraction revitalizing fiber texture and hygiene.",
    priceDisplay: "Rs. 18",
    unit: "per Sq Ft",
    trackingId: "whatsapp-service-carpet",
    iconName: "Layers",
    whatsappMessage: "Assalamualaikum, I am interested in Carpet Cleaning. Please provide me with a quotation. Carpet size is ______ and area is ______.",
  },
  {
    id: "rug-cleaning",
    name: "Rug Cleaning",
    category: "Upholstery & Fabrics",
    description: "Careful fiber treatment for Persian, oriental, wool, and modern rugs with safe anti-bacterial solutions.",
    priceDisplay: "Rs. 18",
    unit: "per Sq Ft",
    trackingId: "whatsapp-service-rug",
    iconName: "Sparkles",
    whatsappMessage: "Assalamualaikum, I am interested in Rug Cleaning. Please provide me with a quotation. Rug size is ______ and area is ______.",
  },
  {
    id: "upholstery-cleaning",
    name: "Upholstery Cleaning",
    category: "Upholstery & Fabrics",
    description: "Dining chairs, armchairs, headboards, and cushioned furniture cleansed and sanitized on-site.",
    priceDisplay: "Rs. 250",
    unit: "per Seat",
    trackingId: "whatsapp-service-upholstery",
    iconName: "Sofa",
    whatsappMessage: "Assalamualaikum, I am interested in Upholstery Cleaning. Please provide me with a quotation.",
  },
  {
    id: "mattress-cleaning",
    name: "Mattress Cleaning",
    category: "Upholstery & Fabrics",
    description: "Intensive sanitization removing sweat marks, dust mites, bacteria, and allergens for fresh sleep hygiene.",
    priceDisplay: "From Rs. 1,300",
    unit: "Starting price",
    tiers: [
      { name: "King Size", price: "Rs. 2,200" },
      { name: "Queen Size", price: "Rs. 1,700" },
      { name: "Single Size", price: "Rs. 1,300" },
    ],
    trackingId: "whatsapp-service-mattress",
    iconName: "BedDouble",
    whatsappMessage: "Assalamualaikum, I am interested in Mattress Cleaning. Please provide me with a quotation. My mattress size is ______ and my area is ______.",
  },
  {
    id: "curtain-cleaning",
    name: "Curtain Cleaning",
    category: "Upholstery & Fabrics",
    description: "On-rail steam extraction and fine fabric dusting without the hassle of unhanging heavy drapery.",
    priceDisplay: "Rs. 18",
    unit: "per Sq Ft",
    trackingId: "whatsapp-service-curtain",
    iconName: "Columns2",
    whatsappMessage: "Assalamualaikum, I am interested in Curtain Cleaning. Please provide me with a quotation. Curtain dimensions are ______ and area is ______.",
  },
  {
    id: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    category: "Commercial & Specialized",
    description: "De-ionized gentle washing removing baked dust films and debris to maximize power efficiency.",
    priceDisplay: "Rs. 200",
    unit: "per Panel",
    trackingId: "whatsapp-service-solar",
    iconName: "Sun",
    whatsappMessage: "Assalamualaikum, I am interested in Solar Panel Cleaning. Please provide me with a quotation. Number of panels is ______ and area is ______.",
  },
  {
    id: "kitchen-cleaning",
    name: "Kitchen Cleaning",
    category: "Deep Cleaning",
    description: "Heavy degreasing of exhausts, stove tops, cabinets, counters, tiles, and sinks for pristine food safety.",
    priceDisplay: "Rs. 3,500",
    unit: "Starting price",
    trackingId: "whatsapp-service-kitchen",
    iconName: "CookingPot",
    whatsappMessage: "Assalamualaikum, I am interested in Kitchen Cleaning. Please provide me with a quotation.",
  },
  {
    id: "washroom-cleaning",
    name: "Washroom Cleaning",
    category: "Deep Cleaning",
    description: "Deep chemical descaling of water stains, floor and wall tile grouting, sanitizing commode, vanity, and glass.",
    priceDisplay: "Rs. 3,000",
    unit: "Starting price",
    trackingId: "whatsapp-service-washroom",
    iconName: "Bath",
    whatsappMessage: "Assalamualaikum, I am interested in Washroom Cleaning. Please provide me with a quotation. Number of washrooms is ______.",
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    category: "Commercial & Specialized",
    description: "Commercial workstation dusting, floor buffing, chair steaming, and meeting room sanitation for productive workspaces.",
    priceDisplay: "Rs. 20",
    unit: "per Sq Ft",
    trackingId: "whatsapp-service-office",
    iconName: "Building2",
    whatsappMessage: "Assalamualaikum, I am interested in Office Cleaning. Please provide me with a quotation. Office size is approximately ______ sq ft.",
  },
  {
    id: "floor-cleaning",
    name: "Floor Cleaning",
    category: "Deep Cleaning",
    description: "Machine scrubbing, tile stain removal, and polishing for marble, porcelain, granite, and vinyl surfaces.",
    priceDisplay: "Rs. 20",
    unit: "per Sq Ft",
    trackingId: "whatsapp-service-floor",
    iconName: "Grid",
    whatsappMessage: "Assalamualaikum, I am interested in Floor Cleaning. Please provide me with a quotation. Floor area is approximately ______ sq ft.",
  },
  {
    id: "whole-house-cleaning",
    name: "Whole House Deep Cleaning",
    category: "Deep Cleaning",
    description: "Top-to-bottom thorough cleansing covering all rooms, doors, windows, ceiling fans, kitchens, and bathrooms.",
    priceDisplay: "Rs. 25,000",
    unit: "Starting price",
    trackingId: "whatsapp-service-whole-house",
    iconName: "Home",
    whatsappMessage: "Assalamualaikum, I am interested in Whole House Deep Cleaning. Please provide me with a quotation. House size (e.g. 120 / 240 / 500 Sq Yds) is ______.",
  },
  {
    id: "fumigation",
    name: "Fumigation",
    category: "Commercial & Specialized",
    description: "Professional pest control and spray fumigation treating cockroaches, bedbugs, termites, and crawling insects.",
    priceDisplay: "Rs. 5,000",
    unit: "Starting price",
    trackingId: "whatsapp-service-fumigation",
    iconName: "ShieldAlert",
    whatsappMessage: "Assalamualaikum, I am interested in Fumigation / Pest Control. Please provide me with a quotation.",
  },
];

// ==========================================
// 4. BEFORE & AFTER CONFIGURATION
// ==========================================
// To replace placeholder images with your actual completed jobs,
// save your before and after photos with these exact filenames inside:
// public/images/before-after/
export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  details: string[];
}

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "sofa",
    title: "Sofa Deep Steam Cleaning",
    category: "Upholstery",
    description: "Restored luxury fabric sofa from stubborn tea stains and accumulated dust to factory-fresh brightness.",
    beforeImage: "/images/before-after/sofa-before.jpg",
    afterImage: "/images/before-after/sofa-after.jpg",
    details: ["Deep fiber steam injection", "Spot stain removal", "Anti-allergen sanitized"],
  },
  {
    id: "carpet",
    title: "Carpet Shampoo & Extraction",
    category: "Floor Covering",
    description: "Heavy foot-traffic dust and dullness lifted through industrial rotary shampooing and powerful extraction.",
    beforeImage: "/images/before-after/carpet-before.jpg",
    afterImage: "/images/before-after/carpet-after.jpg",
    details: ["Color restoration", "Odor neutralization", "Fiber fluffing"],
  },
  {
    id: "mattress",
    title: "Mattress Sanitization",
    category: "Bedding Hygiene",
    description: "Deep chemical-free steam sanitization eliminating dust mites, sweat discoloration, and bacteria.",
    beforeImage: "/images/before-after/mattress-before.jpg",
    afterImage: "/images/before-after/mattress-after.jpg",
    details: ["Intensive dust-mite extraction", "Sweat ring extraction", "Hygiene refreshed"],
  },
  {
    id: "curtain",
    title: "Curtain Steam Dusting",
    category: "Drapery",
    description: "Heavy window curtains cleansed on-site without removal, lifting pollution grime and fine street dust.",
    beforeImage: "/images/before-after/curtain-before.jpg",
    afterImage: "/images/before-after/curtain-after.jpg",
    details: ["On-rail steam cleansing", "Pleat rejuvenation", "Zero shrinkage risk"],
  },
];

// ==========================================
// 5. WHY CHOOSE US
// ==========================================
export const WHY_CHOOSE_US = [
  {
    title: "Professional Cleaning Approach",
    description: "Systematic cleaning methods, industrial-grade equipment, and specialized fabric-safe cleaning agents.",
    icon: "BadgeCheck",
  },
  {
    title: "Transparent Pricing",
    description: "Clear fixed rates per seat, per square foot, or transparent starting estimates with zero hidden charges.",
    icon: "Receipt",
  },
  {
    title: "Convenient WhatsApp Booking",
    description: "Direct communication with our operations team via WhatsApp for instant quotes and prompt scheduling.",
    icon: "MessageCircle",
  },
  {
    title: "Residential & Commercial Cleaning",
    description: "Equipped to handle everything from individual studio apartments and bungalows to corporate office spaces.",
    icon: "Building",
  },
  {
    title: "Attention to Detail",
    description: "Thorough corners, fabric seams, grout lines, and difficult spots receive focused, meticulous care.",
    icon: "CheckCircle2",
  },
  {
    title: "Convenient Service Scheduling",
    description: "Flexible arrival windows tailored to your daily schedule across weekdays and weekends.",
    icon: "CalendarCheck",
  },
];

// ==========================================
// 6. HOW IT WORKS
// ==========================================
export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Choose Your Service",
    description: "Browse our transparent service menu and pick the cleaning solutions tailored for your space.",
  },
  {
    stepNumber: "02",
    title: "Get Your Quote",
    description: "Share your room size, seat count, or photos via our simple form or direct WhatsApp message.",
  },
  {
    stepNumber: "03",
    title: "Book on WhatsApp",
    description: "Confirm your preferred date, time, and address. Our team arrives fully equipped to complete the job.",
  },
];

// ==========================================
// 7. FREQUENTLY ASKED QUESTIONS (FAQ)
// ==========================================
export const FAQ_DATA = [
  {
    question: "What cleaning services do you provide?",
    answer:
      "We provide sofa cleaning, carpet cleaning, rug cleaning, upholstery cleaning, mattress cleaning, curtain cleaning, solar panel cleaning, kitchen deep cleaning, washroom descaling, office cleaning, floor scrubbing, whole house deep cleaning, and fumigation/pest control.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "You can click any service button on this website or fill out our quick quote form to open a direct WhatsApp chat. Simply provide your approximate dimensions, seat count, or photos, and we will reply immediately with a transparent quote.",
  },
  {
    question: "How can I book a service?",
    answer:
      "Booking is completed directly through WhatsApp on 03003486603. After agreeing on the service details and quote, simply share your preferred date, arrival time, and location.",
  },
  {
    question: "Do you provide sofa cleaning?",
    answer:
      "Yes, we provide professional sofa cleaning at Rs. 250 per seat using specialized injection-extraction machines that wash, sanitize, and extract deep dirt and stains from fabric and leather.",
  },
  {
    question: "Do you provide carpet and mattress cleaning?",
    answer:
      "Yes. Carpet and rug cleaning is Rs. 18 per sq ft. Mattress deep cleaning is Rs. 1,300 for Single, Rs. 1,700 for Queen, and Rs. 2,200 for King size.",
  },
  {
    question: "Do you provide office cleaning?",
    answer:
      "Yes, we offer comprehensive office and commercial facility cleaning at Rs. 20 per sq ft, covering workstation dusting, chair steaming, floor scrub polishing, and common areas.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve customers across Pakistan, with dedicated mobile teams in Karachi, Hyderabad, Islamabad, Rawalpindi, and Lahore.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us anytime on WhatsApp at 03003486603. Our team responds promptly to all inquiries and quotation requests.",
  },
];

/**
 * Helper to build custom WhatsApp link with pre-filled text
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
