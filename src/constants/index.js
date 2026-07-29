const base = import.meta.env.BASE_URL;

const flavorlists = [
  {
    name: "Liquid Satin Dress",
    price: "₹4,290",
    detail: "Charcoal satin",
    image: `${base}fashion/01-liquid-satin-dress.jpg`,
    rotation: "product-tilt-left",
  },
  {
    name: "Silver Line Trench",
    price: "₹6,490",
    detail: "Smoke technical shell",
    image: `${base}fashion/02-silver-trench.jpg`,
    rotation: "product-tilt-right",
  },
  {
    name: "Rose Arc Knit",
    price: "₹3,890",
    detail: "Sculpted rib knit",
    image: `${base}fashion/03-rose-knit-dress.jpg`,
    rotation: "product-tilt-left",
  },
  {
    name: "Folded Shell",
    price: "₹2,990",
    detail: "Off-white structured weave",
    image: `${base}fashion/04-folded-shell-top.jpg`,
    rotation: "product-tilt-right",
  },
  {
    name: "Shift Cropped Jacket",
    price: "₹5,290",
    detail: "Deep-rose wool blend",
    image: `${base}fashion/05-cropped-rose-jacket.jpg`,
    rotation: "product-tilt-left",
  },
  {
    name: "Asymmetric Column",
    price: "₹4,690",
    detail: "Smoke fluid jersey",
    image: `${base}fashion/06-asymmetric-column-dress.jpg`,
    rotation: "product-tilt-right",
  },
];

const nutrientLists = [
  { label: "Collection", amount: "Six pieces" },
  { label: "Palette", amount: "Rose + smoke" },
  { label: "Silhouette", amount: "Cut to move" },
  { label: "Sizing", amount: "XS to XL" },
];

const cards = flavorlists.map((product, index) => ({
  ...product,
  rotation: index % 2 === 0 ? "lookbook-tilt-left" : "lookbook-tilt-right",
  translation: index % 3 === 0 ? "lookbook-lift" : "",
}));

export { flavorlists, nutrientLists, cards };
