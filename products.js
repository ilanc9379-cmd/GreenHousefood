// Produits GreenHousefood
window.PRODUCTS = [
  { id: "diet",    name: "Plat diététique (sur mesure)", price: 12.9, img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop", desc: "Macros au choix, version fit & légère." },
  { id: "gourmet", name: "Plat gourmand",                 price: 14.9, img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop", desc: "Généreux, sauce maison au choix." },
  { id: "pasta",   name: "Pâtes artisanales",             price: 9.9,  img: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?q=80&w=1200&auto=format&fit=crop", desc: "Portion généreuse, sauces maison." },
  { id: "falafel", name: "Falafels maison",               price: 10.0, img: "https://images.unsplash.com/photo-1625944528196-4604d851d7bb?q=80&w=1200&auto=format&fit=crop", desc: "Bol protéiné, sauce tahini maison." },
  { id: "wrap",    name: "Wrap artisanal",                price: 8.9,  img: "https://images.unsplash.com/photo-1617093727343-374698b1b08f?q=80&w=1200&auto=format&fit=crop", desc: "Poulet/veggie, crudités fraîches." },
  { id: "sauce",   name: "Sauce maison",                  price: 3.5,  img: "https://images.unsplash.com/photo-1569058242252-94c5f0b6e1f4?q=80&w=1200&auto=format&fit=crop", desc: "Au choix, préparée maison." }
];

// Villes servies (pour affichage éventuel)
window.CITIES = [
  "Mulhouse","Kingersheim","Wittenheim","Pulversheim","Wittelsheim","Richwiller",
  "Lutterbach","Pfastatt","Illzach","Rixheim","Riedisheim","Habsheim","Eschentzwiller","Brunstatt"
];

// Barème livraison
window.SHIPPING = {
  feeUnder20: 5,
  fee20to40: 3,
  freeFrom: 40
};
