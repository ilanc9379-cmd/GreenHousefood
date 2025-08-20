
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Leaf,
  ShoppingBasket,
  Sun,
  Moon,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Trash,
  Minus,
  Plus,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const currency = (n) => `${n.toFixed(2)} €`;

// Zones desservies
const ZONES = [
  "Mulhouse","Kingersheim","Wittenheim","Pulversheim","Wittelsheim",
  "Richwiller","Lutterbach","Pfastatt","Illzach","Rixheim","Riedisheim",
  "Habsheim","Eschentzwiller","Brunstatt"
];

// Catalogue produits
const CATALOG = [
  { id: "diet", title: "Plat diététique (sur mesure possible)", price: 12.9, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop" },
  { id: "gourmet", title: "Plat gourmand", price: 14.9, img: "https://images.unsplash.com/photo-1625941366454-9b83c7c3d0f6?q=80&w=1200&auto=format&fit=crop" },
  { id: "pasta", title: "Pâtes artisanales", price: 9.9, img: "https://images.unsplash.com/photo-1603133872878-684f98b1eb09?q=80&w=1200&auto=format&fit=crop" },
  { id: "falafel", title: "Falafels artisanaux", price: 7.9, img: "https://images.unsplash.com/photo-1589308078055-9729a1e04d7f?q=80&w=1200&auto=format&fit=crop" },
  { id: "wrap", title: "Wrap artisanal", price: 8.9, img: "https://images.unsplash.com/photo-1601050690597-5aa270a2a99e?q=80&w=1200&auto=format&fit=crop" },
  { id: "sauce", title: "Sauce maison", price: 3.5, img: "https://images.unsplash.com/photo-1569058242252-94c5f0b6e1f4?q=80&w=1200&auto=format&fit=crop" },
];

const ProductCard = ({ product, onAdd }) => (
  <div className="group rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-zinc-900 flex flex-col">
    <div className="relative h-48 overflow-hidden">
      <img src={product.img} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <h4 className="font-semibold text-lg">{product.title}</h4>
      <p className="text-emerald-700 dark:text-emerald-400 font-semibold mt-1">{currency(product.price)}</p>
      <div className="mt-4 flex gap-3">
        <button onClick={() => onAdd(product)} className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
          <ShoppingBasket className="h-4 w-4" /> Ajouter
        </button>
      </div>
    </div>
  </div>
);

const QtyInput = ({ qty, onDec, onInc }) => (
  <div className="inline-flex items-center rounded-xl border border-black/10 dark:border-white/10 overflow-hidden">
    <button aria-label="-" className="px-2 py-2" onClick={onDec}><Minus className="h-4 w-4" /></button>
    <span className="px-3 min-w-[2ch] text-center">{qty}</span>
    <button aria-label="+" className="px-2 py-2" onClick={onInc}><Plus className="h-4 w-4" /></button>
  </div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cart, setCart] = useState([]);
  const [deliveryType, setDeliveryType] = useState("pickup"); // pickup | delivery
  const [city, setCity] = useState("Mulhouse");

  useEffect(() => { document.documentElement.classList.toggle("dark", darkMode); }, [darkMode]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((l) => l.id === product.id);
      if (found) return prev.map((l) => l.id === product.id ? { ...l, qty: l.qty + 1 } : l);
      return [...prev, { ...product, qty: 1 }];
    });
    window.location.hash = "#checkout";
  };

  const updateQty = (id, delta) => setCart((prev) => prev.map((l) => l.id === id ? { ...l, qty: Math.max(1, l.qty + delta) } : l));
  const removeItem = (id) => setCart((prev) => prev.filter((l) => l.id !== id));

  const subtotal = cart.reduce((s, l) => s + l.price * l.qty, 0);
  const shipping = deliveryType === "pickup" ? 0 : (subtotal >= 40 ? 0 : subtotal >= 20 ? 3 : 5);
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/80 dark:bg-zinc-900/80 border-b border-black/10 dark:border-white/10">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-600" />
            <span className="font-bold">GreenHousefood</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#checkout" className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-3 py-2 text-sm">
              <ShoppingBasket className="h-4 w-4" /> Panier ({cart.reduce((n, l) => n + l.qty, 0)})
            </a>
            <button onClick={() => setDarkMode((d) => !d)} aria-label="Basculer le thème" className="p-2 rounded-lg border border-black/10 dark:border-white/10">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <Section id="accueil" className="pt-28">
        <Container>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">GreenHousefood — Frais, Local & Durable</h1>
          <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 max-w-prose">
            Plats diététiques ou gourmands, pâtes artisanales, wraps, falafels et sauces maison. Produits locaux au maximum.
            Livraison à Mulhouse et communes voisines, ou retrait gratuit au dépôt.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#produits" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-medium transition">
              Découvrir la carte <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#checkout" className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 px-5 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
              Commander maintenant
            </a>
          </div>
        </Container>
      </Section>

      {/* Produits */}
      <Section id="produits" className="py-16">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Notre carte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATALOG.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Checkout */}
      <Section id="checkout" className="py-16">
        <Container>
          <h2 className="text-2xl font-bold mb-4">Votre commande</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.length === 0 ? <p>Votre panier est vide.</p> : cart.map((l) => (
                <div key={l.id} className="flex items-center gap-3 border border-black/10 dark:border-white/10 p-3 rounded-xl bg-white dark:bg-zinc-900">
                  <img src={l.img} alt="" className="h-12 w-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-medium">{l.title}</div>
                    <div className="text-sm text-zinc-500">{currency(l.price)} x {l.qty} = {currency(l.price * l.qty)}</div>
                  </div>
                  <QtyInput qty={l.qty} onDec={() => updateQty(l.id, -1)} onInc={() => updateQty(l.id, 1)} />
                  <button onClick={() => removeItem(l.id)} className="p-2 border border-black/10 dark:border-white/10 rounded-lg"><Trash className="h-4 w-4" /></button>
                </div>
              ))}

              {/* Livraison */}
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-5">
                <h3 className="font-semibold mb-3">Livraison</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 p-3 cursor-pointer">
                    <input type="radio" name="delivery" checked={deliveryType === "pickup"} onChange={() => setDeliveryType("pickup")} />
                    <span>Retrait au dépôt — 0 €</span>
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 p-3 cursor-pointer">
                    <input type="radio" name="delivery" checked={deliveryType === "delivery"} onChange={() => setDeliveryType("delivery")} />
                    <span>Livraison à domicile</span>
                  </label>
                  {deliveryType === "delivery" && (
                    <select value={city} onChange={(e) => setCity(e.target.value)} className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 sm:col-span-2">
                      {ZONES.map(z => <option key={z} value={z}>{z}</option>)}
                    </select>
                  )}
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 sm:col-span-2">
                    Frais: &lt; 20 € → 5 € • 20–39,99 € → 3 € • ≥ 40 € → gratuit
                  </p>
                </div>
              </div>

              {/* Paiement */}
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-5">
                <h3 className="font-semibold mb-2">Paiement</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
                  Démo : ce bouton affiche un message. Pour activer les paiements, connectez Stripe (cartes, Apple Pay, Google Pay).
                </p>
                <button onClick={() => alert(`Paiement démo: ${currency(total)}`)} className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-medium">
                  Payer {currency(total)}
                </button>
              </div>
            </div>

            {/* Résumé */}
            <aside className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 h-fit">
              <h3 className="font-semibold mb-4">Résumé</h3>
              <dl className="space-y-1 text-sm">
                <div className="flex justify-between"><dt>Sous-total</dt><dd>{currency(subtotal)}</dd></div>
                <div className="flex justify-between"><dt>Livraison</dt><dd>{shipping === 0 ? "Gratuite" : currency(shipping)}</dd></div>
                <div className="flex justify-between font-bold text-base pt-2 border-t border-black/10 dark:border-white/10"><dt>Total</dt><dd>{currency(total)}</dd></div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16">
        <Container>
          <h2 className="text-2xl font-bold mb-4">Contact & Retrait</h2>
          <p className="mb-2"><MapPin className="inline h-4 w-4 mr-1" /> 151 rue de Kingersheim, 68100 Mulhouse</p>
          <p className="mb-2"><Mail className="inline h-4 w-4 mr-1" /> <a href="mailto:greenhouse.68@outlook.fr" className="text-emerald-700 dark:text-emerald-400">greenhouse.68@outlook.fr</a></p>
          <p className="mb-2"><Phone className="inline h-4 w-4 mr-1" /> (ajouter numéro si souhaité)</p>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="mt-16 border-t border-black/10 dark:border-white/10">
        <Container className="py-6 text-sm text-zinc-600 dark:text-zinc-300">
          © {new Date().getFullYear()} GreenHousefood.fr — Tous droits réservés.
        </Container>
      </footer>
    </div>
  );
}
