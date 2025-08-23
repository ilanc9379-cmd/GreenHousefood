// pages/plats/bolo.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PlatBoloFiche() {
  const portionGrams = 600;
  const basePrice = 9.9;
  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Herbes/aromates (ail, poivre, basilic, sel)", qty: "" },
  ];

  const kcalPortion = 700, lipidesPortion = 15.8, glucidesPortion = 89, proteinesPortion = 54.3, selPortion = 3;
  const agsPortion = +(lipidesPortion * 0.34).toFixed(1), sucrePortion = 11;

  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  const [qty, setQty] = useState(1);
  const nf = useMemo(() => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }), []);

  const totals = useMemo(() => ({
    price: +(basePrice * qty).toFixed(2),
    kcal: kcalPortion * qty,
    lipides: +(lipidesPortion * qty).toFixed(1),
    ags: +(agsPortion * qty).toFixed(1),
    glucides: +(glucidesPortion * qty).toFixed(1),
    sucres: +(sucrePortion * qty).toFixed(1),
    proteines: +(proteinesPortion * qty).toFixed(1),
    sel: +(selPortion * qty).toFixed(1),
    poids: portionGrams * qty,
  }), [qty]);

  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      <Head>
        <title>Bolognaise — GreenHouse</title>
        <meta name="description" content="Pâtes bolognaise maison GreenHouse — barquette 600 g, surgelée. Riche en protéines." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        {/* === HEADER AVEC LOGO EN GRAND === */}
        <header className="header">
          <h1 className="brand">GreenHouse</h1>
          <p className="slogan">Traiteur artisanal — <strong>Diététique & Gourmand</strong></p>
        </header>

        {/* === HERO PLAT === */}
        <section className="hero">
          <h2 className="title">🍝 Pâtes bolognaise maison</h2>
          <span className="tag-freeze">❄️ Surgelé</span>
          <p className="subtitle">
            Barquette {portionGrams} g — prêt en <strong>20 mn au four</strong>,{" "}
            <strong>8 mn au micro-ondes</strong>, <strong>10 mn à la poêle</strong> — riche en protéines.
          </p>

          <div className="priceCard">
            <div className="label">Prix unitaire</div>
            <div className="big">{nf.format(basePrice)}</div>
            <div className="qtyRow">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <input type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))} />
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <div className="muted">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="total">{nf.format(totals.price)}</div>
            <button className="cta">Commander</button>
          </div>
        </section>

        {/* === INGRÉDIENTS === */}
        <section className="section">
          <h3>Ingrédients</h3>
          <ul className="ingrids">
            {ingredients.map((it) => (
              <li key={it.name} className="ingItem">
                <span>{it.name}</span>
                <span className="qty">{it.qty}</span>
              </li>
            ))}
          </ul>
          <p className="note">Allergènes : gluten (seigle, blé), œufs.</p>
        </section>

        {/* === CONSERVATION === */}
        <section className="section freezeBox">
          <h3>Conservation</h3>
          <ul>
            <li>Conserver <strong>au congélateur</strong> : maximum <strong>4 mois</strong>.</li>
            <li>Après décongélation : <strong>48h au réfrigérateur</strong>.</li>
            <li><strong>Ne pas recongeler</strong> un produit décongelé.</li>
          </ul>
        </section>

        {/* === NUTRITION === */}
        <section className="section">
          <h3>Valeurs nutritionnelles</h3>
          <div className="tableWrap">
            <table>
              <thead>
                <tr><th>Valeurs</th><th>Pour 100 g</th><th>Par portion</th><th>{qty}×</th></tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td><td>{totals.kcal} kcal</td></tr>
                <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td><td>{totals.lipides} g</td></tr>
                <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td><td>{totals.glucides} g</td></tr>
                <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td><td>{totals.proteines} g</td></tr>
                <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td><td>{totals.sel} g</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* === FOOTER === */}
        <footer className="foot">
          <Link href="/" className="back">← Retour au menu</Link>
        </footer>
      </main>

      <style jsx>{`
        body, html, .wrap { margin:0; padding:0; font-family: system-ui, sans-serif; background: linear-gradient(135deg,#f5f9ff,#f0fff5); }
        .header { text-align:center; padding:2rem 1rem; }
        .brand {
          font-size: clamp(2.5rem,6vw,4rem);
          font-weight:900;
          background: linear-gradient(90deg,#0aa64c,#2d7ae6);
          -webkit-background-clip: text;
          color: transparent;
        }
        .slogan { color:#555; margin-top:.5rem; font-size:1.1rem; }
        .hero { text-align:center; padding:2rem 1rem; }
        .title { font-size:1.8rem; margin:.5rem 0; }
        .tag-freeze { display:inline-block; background:#2d7ae6; color:white; font-weight:700; padding:.3rem .8rem; border-radius:999px; margin:0.5rem auto; }
        .subtitle { color:#444; max-width:600px; margin:1rem auto; }
        .priceCard {
          margin:1.5rem auto; padding:1.5rem;
          background:white; border-radius:1rem;
          box-shadow:0 6px 20px rgba(0,0,0,.1);
          display:inline-block; text-align:center;
        }
        .priceCard .big { font-size:2rem; font-weight:800; color:#0aa64c; }
        .qtyRow { display:flex; justify-content:center; align-items:center; gap:.5rem; margin:1rem 0; }
        .qtyRow button, .qtyRow input { font-size:1.2rem; padding:.3rem .8rem; }
        .cta { background:linear-gradient(90deg,#0aa64c,#2d7ae6); color:white; border:none; padding:.7rem 1.2rem; border-radius:12px; font-weight:700; cursor:pointer; }
        .section { max-width:800px; margin:2rem auto; padding:1rem; background:white; border-radius:1rem; box-shadow:0 4px 15px rgba(0,0,0,.05); }
        .ingrids { list-style:none; padding:0; }
        .ingItem { display:flex; justify-content:space-between; padding:.5rem 0; border-bottom:1px solid #eee; }
        .ingItem:last-child { border:none; }
        .freezeBox { background:#eaf4ff; }
        .tableWrap { overflow-x:auto; }
        table { width:100%; border-collapse:collapse; margin-top:1rem; }
        th, td { padding:.5rem; text-align:center; border-bottom:1px solid #eee; }
        th { background:#f8fafc; }
        .foot { text-align:center; padding:2rem 1rem; color:#666; }
        .back { color:#2d7ae6; font-weight:600; text-decoration:none; }
      `}</style>
    </>
  );
}
