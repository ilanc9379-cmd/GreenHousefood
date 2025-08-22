"use client";

import { useMemo, useState } from "react";
import "./globals.css";

const MENU = [
  {
    id: "bowl-saumon",
    title: "Bowl Saumon & Quinoa",
    tag: "Diète",
    kcal: 520,
    proteins: 34,
    carbs: 47,
    fats: 18,
    desc: "Saumon grillé, quinoa, avocat, edamame, sauce citronnée.",
    price: 14.9
  },
  {
    id: "wrap-poulet",
    title: "Wrap Poulet César",
    tag: "Gourmand",
    kcal: 780,
    proteins: 42,
    carbs: 68,
    fats: 34,
    desc: "Poulet pané, romaine, parmesan, sauce césar.",
    price: 12.5
  },
  {
    id: "veggie-bowl",
    title: "Veggie Power Bowl",
    tag: "Diète",
    kcal: 460,
    proteins: 22,
    carbs: 55,
    fats: 14,
    desc: "Tofu croustillant, patate douce, légumes rôtis, tahini.",
    price: 12.9
  },
  {
    id: "burger-signature",
    title: "Burger Signature",
    tag: "Gourmand",
    kcal: 950,
    proteins: 38,
    carbs: 72,
    fats: 55,
    desc: "Bœuf maturé, cheddar, oignons confits, sauce maison.",
    price: 15.9
  },
  {
    id: "pates-pesto",
    title: "Pâtes Pesto & Poulet",
    tag: "Gourmand",
    kcal: 820,
    proteins: 36,
    carbs: 92,
    fats: 28,
    desc: "Rigatoni au pesto basilic, poulet snacké, tomates cerises.",
    price: 13.5
  },
  {
    id: "poke-thon",
    title: "Poké Thon Sésame",
    tag: "Diète",
    kcal: 540,
    proteins: 31,
    carbs: 62,
    fats: 17,
    desc: "Thon mariné, riz, mangue, concombre, sésame.",
    price: 14.5
  }
];

export default function Page() {
  const [filter, setFilter] = useState("Tous");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    return MENU.filter((x) => (filter === "Tous" ? true : x.tag === filter))
      .filter((x) => x.title.toLowerCase().includes(query.toLowerCase()));
  }, [filter, query]);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="brand">
            <span>Green</span>house
          </h1>
          <p className="slogan">
            Traiteur — <strong>Diète</strong> ou <strong>Gourmand</strong> • frais, bon, équilibré.
          </p>

          <div className="filters">
            <div className="filter-row">
              <button
                className={`chip ${filter === "Tous" ? "active" : ""}`}
                onClick={() => setFilter("Tous")}
                aria-pressed={filter === "Tous"}
              >
                Tous
              </button>
              <button
                className={`chip diet ${filter === "Diète" ? "active" : ""}`}
                onClick={() => setFilter("Diète")}
                aria-pressed={filter === "Diète"}
              >
                Diète
              </button>
              <button
                className={`chip gourmet ${filter === "Gourmand" ? "active" : ""}`}
                onClick={() => setFilter("Gourmand")}
                aria-pressed={filter === "Gourmand"}
              >
                Gourmand
              </button>
            </div>

            <input
              className="search"
              placeholder="Rechercher un plat…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="menu">
        <div className="grid">
          {items.map((item) => (
            <article key={item.id} className="card" data-tag={item.tag}>
              <header className="card-header">
                <span className={`pill ${item.tag === "Diète" ? "pill-diet" : "pill-gourmet"}`}>
                  {item.tag}
                </span>
                <h3 className="card-title">{item.title}</h3>
              </header>

              <p className="card-desc">{item.desc}</p>

              <dl className="macros">
                <div><dt>kcal</dt><dd>{item.kcal}</dd></div>
                <div><dt>Protéines</dt><dd>{item.proteins}g</dd></div>
                <div><dt>Glucides</dt><dd>{item.carbs}g</dd></div>
                <div><dt>Lipides</dt><dd>{item.fats}g</dd></div>
              </dl>

              <footer className="card-footer">
                <span className="price">{item.price.toFixed(2)} €</span>
                <button className="cta">Commander</button>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Greenhouse — Traiteur. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
