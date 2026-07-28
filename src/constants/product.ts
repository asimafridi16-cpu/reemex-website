export const PRODUCT = {
  name: "REEMZAR® Silent Basketball",
  shortName: "REEMZAR®",
  size: "Official Size 7",
  diameter: "24 cm",
  diameterImperial: "9.45 in",
  material: "High Density PU Foam",
  color: "Blue",
  weight: "600 g",
  weightNote: "Including retail packaging",
  weightImperial: "21.2 oz",
} as const;

export const SPECS = [
  { label: "Product", value: PRODUCT.name },
  { label: "Size", value: PRODUCT.size },
  { label: "Diameter", value: PRODUCT.diameter },
  { label: "Material", value: PRODUCT.material },
  { label: "Color", value: PRODUCT.color },
  { label: "Weight", value: `${PRODUCT.weight} (${PRODUCT.weightNote.toLowerCase()})` },
] as const;
