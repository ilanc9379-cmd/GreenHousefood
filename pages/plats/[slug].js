// pages/plats/[slug].js
"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

/** =========
 *  DATA
 *  ========= */
const DISHES = {
  // 1) PÂTES BOLOGNAISE MAISON (SURGELÉ)
  bolo: {
    title: "Pâtes bolognaise maison",
    frozen: true,
    portionGrams: 600,
    ready: "prêt en 20 min au four · 8 min au micro-ondes · 10 min à la poêle",
    price: 9.9,
    intro:
      "Une bolognaise authentique sublimée par des pâtes au seigle artisanales (œufs plein air). La tendreté du bœuf, la douceur des carottes et la fraîcheur de la tomate s’unissent pour un plat complet, réconfortant et équilibré.",
    ingredients: [
      { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
      { name: "Bœuf haché 5% MG", qty: "150 g" },
      { name: "Carottes", qty: "150 g" },
      { name: "Sauce tomate", qty: "100 g" },
      { name: "Herbes/aromates (ail, poivre, basilic, sel)", qty: "—" },
    ],
    allergens: "gluten (seigle, blé), œufs.",
    nutritions: {
      perPortion: { kcal: 700, lip: 15.8, glu: 89, pro: 54.3, sel: 3.0 },
    },
  },

  // 2) PÂTES ÉMINCÉ POULET + SAUCE POIVRON (SURGELÉ)
  "poulet-poivron": {
    title: "Pâtes émincé poulet · sauce poivron",
    frozen: true,
    portionGrams: 600, // 200 pâtes + 150 poulet + 150 julienne + 100 sauce poivron
    ready: "prêt en 20 min au four · 8 min au micro-ondes · 10 min à la poêle",
    price: 9.9,
    intro:
      "Pâtes de seigle, émincé de poulet tendre, julienne de légumes et sauce poivron maison (poivron, aromates, ail, oignon, sel, poivre). Un plat complet et riche en protéines.",
    ingredients: [
      { name: "Pâtes de seigle", qty: "200 g" },
      { name: "Poulet émincé", qty: "150 g" },
      { name: "Julienne de légumes", qty: "150 g" },
      { name: "Sauce poivron (poivron, aromates, ail, oignon)", qty: "100 g" },
      { name: "Sel, poivre", qty: "—" },
    ],
    allergens: "gluten (seigle).",
    nutritions: {
      // valeurs validées ensemble
      perPortion: { kcal: 689, lip: 10, glu: 86, pro: 62, sel: 2.0 },
    },
  },

  // 3) BŒUF CAROTTES & PURÉE (SURGELÉ)
  "boeuf-carottes-puree": {
    title: "Bœuf carottes & purée maison",
    frozen: true,
    portionGrams: 500, // 200 boeuf + 150 carottes + 150 purée
    ready: "prêt en 25–30 min au four · 8–10 min au micro-ondes · 10–12 min à la poêle",
    price: 9.9,
    intro:
      "Bœuf bourguignon maigre mijoté aux carottes et aromates, servi avec une purée de pommes de terre onctueuse. Un classique équilibré, généreux et rassasiant.",
    ingredients: [
      { name: "Bœuf bourguignon (morceaux maigres)", qty: "200 g" },
      { name: "Carottes", qty: "150 g" },
      { name: "Purée de pommes de terre", qty: "150 g" },
      { name: "Aromates (oignon, ail, herbes), sel, poivre", qty: "—" },
    ],
    allergens: "—",
    nutritions: {
      // estimation propre (base réglementaire courante)
      perPortion: { kcal: 579, lip: 22.3, glu: 41.7, pro: 56.4, sel: 2.2 },
    },
  },
};

/** Utilitaires */
const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;
const to100 = (val, grams) => +(val / (grams / 100)).toFixed(1);

export default function PlatPage({ query }) {
  // NOTE: dans Pages Router, on accède au slug via props.router. Ici on le lit depuis l'URL côté client.
  const slug =
    typeof window !== "undefined"
      ? decodeURIComponent(window.location.pathname.split("/").pop())
      : "";

  const data = DISHES[slug];

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-extrabold mb-3">Plat introuvable</h1>
          <p className="text-gray-600 mb-6">
            Le plat demandé n’existe pas (ou a été renommé).
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
          >
            ← Retour au menu
          </Link>
        </div>
      </main>
    );
  }

  const { title, frozen, portionGrams, ready, price, intro, ingredients, allergens, nutritions } =
    data;

  // dérivés nutritionnels
  const n = nutritions.perPortion;
  const per100 = {
    kcal: to100(n.kcal, portionGrams),
    lip: to100(n.lip, portionGrams),
    glu: to100(n.glu, portionGrams),
    pro: to100(n.pro, portionGrams),
    sel: to100(n.sel, portionGrams),
  };

  const [qty, setQty] = useState(1);
  const totalPrice = useMemo(() => euro(price * qty), [price, qty]);

  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_600px_at_-10%_-10%,#dff8ee_20%,transparent_60%),radial-gradient(900px_500px_at_110%_-10%,#e8f7ff_15%,transparent_65%),linear-gradient(180deg,#f6fffb, #f7fbff)] text-zinc-900">
      {/* Bandeau / Hero */}
      <header className="max-w-6xl mx-auto px-5 pt-10 pb-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
          GreenHouse
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 mt-2">
          Traiteur — <strong>Diététique & Gourmand</strong>
        </p>
        <p className="text-zinc-600 mt-1">
          Des plats maison bons et équilibrés, cuisinés en Alsace, prêts à être dégustés. Diète ou gourmand : à vous de choisir.
        </p>

        <Link
          href="/"
          className="inline-block mt-4 text-emerald-700 hover:text-emerald-900 underline underline-offset-4"
        >
          ← Retour au menu
        </Link>
      </header>

      {/* Fiche plat */}
      <section className="max-w-6xl mx-auto px-5 pb-16">
        {/* Carte titre / badges */}
        <div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl p-6 md:p-8 mb-8 ring-1 ring-black/5">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            {title}
          </h2>

          <div className="flex flex-wrap gap-3 mb-4">
            {frozen && (
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-cyan-100 text-cyan-700 ring-1 ring-cyan-300">
                Surgelé
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 ring-1 ring-emerald-300">
              Riche en protéines
            </span>
          </div>

          <p className="md:text-lg">
            <strong>Portion</strong> : {portionGrams} g · {ready}
          </p>

          <p className="text-zinc-700 mt-4 md:text-lg">{intro}</p>
        </div>

        {/* Prix + quantité */}
        <div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl p-6 md:p-8 mb-8 ring-1 ring-black/5">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 md:items-center">
            <div>
              <div className="text-xs uppercase tracking-wider text-zinc-500">
                Prix unitaire
              </div>
              <div className="text-4xl font-extrabold">{euro(price)}</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-11 w-11 rounded-2xl border border-zinc-300 hover:bg-zinc-100 active:scale-95"
                aria-label="Diminuer la quantité"
              >
                –
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                }
                className="h-11 w-20 text-center rounded-2xl border border-zinc-300"
              />
              <button
                onClick={() => setQty((q) => q + 1)}
                className="h-11 w-11 rounded-2xl border border-zinc-300 hover:bg-zinc-100 active:scale-95"
                aria-label="Augmenter la quantité"
              >
                +
              </button>
              <div className="ml-2 text-zinc-600">
                Total ({qty} plat{qty > 1 ? "s" : ""}){" "}
                <span className="font-semibold text-zinc-900">{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grille 2 colonnes : ingrédients / nutrition */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingrédients */}
          <div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl p-6 md:p-8 ring-1 ring-black/5">
            <h3 className="text-2xl font-bold mb-4">Ingrédients</h3>
            <ul className="space-y-2">
              {ingredients.map((it) => (
                <li
                  key={it.name}
                  className="flex items-center justify-between rounded-xl bg-white shadow p-3 ring-1 ring-black/5"
                >
                  <span>{it.name}</span>
                  <span className="font-medium tabular-nums">{it.qty}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-600 mt-3">
              Allergènes : {allergens}
            </p>
          </div>

          {/* Valeurs nutritionnelles */}
          <div className="rounded-3xl bg-white/90 backdrop-blur shadow-xl p-6 md:p-8 ring-1 ring-black/5">
            <h3 className="text-2xl font-bold mb-4">Valeurs nutritionnelles</h3>
            <div className="overflow-x-auto rounded-2xl bg-white shadow ring-1 ring-black/5">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr className="bg-zinc-100 text-zinc-700">
                    <th className="p-3">Valeurs</th>
                    <th className="p-3">Pour 100 g</th>
                    <th className="p-3">Par portion ({portionGrams} g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Énergie</td>
                    <td className="p-3">{per100.kcal} kcal</td>
                    <td className="p-3">{n.kcal} kcal</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Matières grasses</td>
                    <td className="p-3">{per100.lip} g</td>
                    <td className="p-3">{n.lip} g</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Glucides</td>
                    <td className="p-3">{per100.glu} g</td>
                    <td className="p-3">{n.glu} g</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Protéines</td>
                    <td className="p-3">{per100.pro} g</td>
                    <td className="p-3">{n.pro} g</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Sel</td>
                    <td className="p-3">{per100.sel} g</td>
                    <td className="p-3">{n.sel} g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bloc conservation si surgelé */}
            {frozen && (
              <div className="mt-6 rounded-2xl p-5 bg-gradient-to-br from-cyan-50 to-emerald-50 ring-1 ring-cyan-200">
                <h4 className="font-semibold mb-2">Conservation</h4>
                <ul className="list-disc pl-5 space-y-1 text-zinc-700">
                  <li>
                    Conserver <strong>au congélateur</strong> : maximum{" "}
                    <strong>4 mois</strong>.
                  </li>
                  <li>
                    Après décongélation : <strong>48 h au réfrigérateur</strong>.
                  </li>
                  <li>
                    <strong>Ne pas recongeler</strong> un produit décongelé.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="text-center text-zinc-500 pb-10">
        © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
      </footer>
    </main>
  );
}
