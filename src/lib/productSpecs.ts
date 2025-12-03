export type ProductSpecs = {
  handle: string;
  title: string;
  cpnpReference?: string;
  content?: string;
  allergens?: string[];
  inci?: string[];
  tagline?: string;
  benefits?: string[];
  usage?: string[];
};

export const PRODUCT_SPECS: Record<string, ProductSpecs> = {
  // Beauty line (examples)
  "crema-skin-total-repair": {
    handle: "crema-skin-total-repair",
    title: "Crema Rigenerante Viso/Corpo",
    cpnpReference: "4237731",
    content: "50 ml",
    allergens: ["Limonene"],
    inci: [
      "Helianthus annus seed oil",
      "Olea europea fruit oil",
      "Acque distillate",
      "Laurus nobilis leaf extract",
      "Cannabis sativa seed oil",
      "Rosmarinus officinalis leaf extract",
      "Timus vulgaris leaf extract",
      "Rosa canina fruit extract",
      "Triticum vulgare germ oil",
      "Caprylic/capric triglycerides",
      "Shea butter",
      "Glycerin",
      "Cetearyl olivate",
      "Glyceryl stearate SE",
      "Cannabidiol",
      "Eucalyptus globulus leaf oil",
      "Eugenia caryophyllus bud oil",
      "Cannabis sativa leaf extract",
      "Ascorbic acid",
      "Xanthan gum",
      "Tocopheryl acetate",
    ],
    tagline: "Full‑spectrum CBD comfort with nourishing botanicals",
    benefits: [
      "Supports everyday skin balance",
      "Helps the skin feel calmer",
      "Hydrating and nourishing texture",
      "Antioxidant support from botanical oils",
    ],
    usage: [
      "Apply a small amount to clean, dry skin",
      "Massage until absorbed, morning and evening",
      "Suitable for face and body",
    ],
  },
  // Additional catalogue entries (to be completed with official specs)
  "contorno-occhi-stick": {
    handle: "contorno-occhi-stick",
    title: "Contorno Occhi Stick",
    tagline: "Cooling CBD eye care for everyday comfort",
    benefits: [
      "Helps the eye area feel soothed",
      "Lightweight comfort with botanical oils",
      "Supports daily hydration",
    ],
    usage: [
      "Apply gently around the eye area",
      "Use morning and evening",
      "Avoid direct contact with eyes",
    ],
  },
  "contorno-occhi-cream": {
    handle: "contorno-occhi-cream",
    title: "Contorno Occhi Cream",
    tagline: "Nourishing CBD cream for the delicate eye area",
    benefits: [
      "Supports the skin’s natural comfort",
      "Helps the delicate area feel calmer",
      "Smooth, nourishing texture",
    ],
    usage: [
      "Apply a small amount to the eye contour",
      "Massage lightly until absorbed",
      "Use daily, morning and evening",
    ],
  },
  "burrocacao-protettivo": {
    handle: "burrocacao-protettivo",
    title: "Burrocacao Protettivo",
    tagline: "Protective CBD lip balm with natural oils",
    benefits: [
      "Helps lips feel protected and soft",
      "Botanical oils for everyday comfort",
      "Non‑sticky, natural finish",
    ],
    usage: [
      "Apply to clean lips as needed",
      "Reapply throughout the day",
    ],
  },
  "crema-lenitiva-corpo": {
    handle: "crema-lenitiva-corpo",
    title: "Crema Lenitiva Corpo",
    tagline: "Soothing body care with full‑spectrum CBD",
    benefits: [
      "Supports skin comfort and balance",
      "Helps the skin feel calmer",
      "Silky texture for daily use",
    ],
    usage: [
      "Apply generously to clean, dry skin",
      "Massage until absorbed",
      "Use daily or as needed",
    ],
  },
  "candela-massaggio": {
    handle: "candela-massaggio",
    title: "Candela da Massaggio",
    tagline: "Warm, sensorial massage candle with botanical oils",
    benefits: [
      "Transforms into a warm, silky oil",
      "Sensorial ritual with botanical notes",
      "Designed for mindful massage",
    ],
    usage: [
      "Light the candle and allow a pool of oil to form",
      "Extinguish and pour a small amount onto skin",
      "Massage gently",
    ],
  },
  "olio-massaggio-full-body": {
    handle: "olio-massaggio-full-body",
    title: "Olio da Massaggio Full Body",
    tagline: "Silky massage oil with full‑spectrum extracts",
    benefits: [
      "Glides easily for comfortable massage",
      "Botanical blend with a natural finish",
      "Supports a relaxing ritual",
    ],
    usage: [
      "Warm a small amount in hands",
      "Apply and massage onto the body",
      "Use as needed",
    ],
  },
  // Functional oils and supplements
  "ecs-activator": {
    handle: "ecs-activator",
    title: "ECS Activator",
    tagline: "Daily support for endocannabinoid balance",
  },
  "sanadol-plus": {
    handle: "sanadol-plus",
    title: "Sanadol+",
    tagline: "Full‑spectrum CBD oil with native terpenes",
  },
  "relax": {
    handle: "relax",
    title: "Relax",
    tagline: "Everyday calm with full‑spectrum CBD",
  },
  "positivity": {
    handle: "positivity",
    title: "Positivity",
    tagline: "Uplifting terpene‑rich botanical profile",
  },
};

export function getSpecsForProduct(handle?: string, title?: string): ProductSpecs | undefined {
  if (handle && PRODUCT_SPECS[handle]) return PRODUCT_SPECS[handle];
  if (!title) return undefined;
  const norm = title.trim().toLowerCase();
  return Object.values(PRODUCT_SPECS).find((s) => s.title.trim().toLowerCase() === norm);
}
