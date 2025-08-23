// pages/plats/bolo.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
        <header className="header">
          <Link href="/" className="home">
            <Image src="/favicon.png" alt="Logo GreenHouse" width={36} height={36} className="logo" />
            <span className="brand-name">GreenHouse</span>
          </Link>
          <span className="tag-freeze">Surgelé</span>
        </header>

        <section className="hero">
          <h1 className="title">Pâtes bolognaise maison</h1>
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

        <section className="section">
          <h2>Ingrédients</h2>
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

        <section className="section freezeBox">
          <div className="freezeHead">
            <h2 className="freezeTitle">Produit surgelé ❄️</h2>
            <span className="tag-freeze">Surgelé</span>
          </div>
          <ul className="freezeList">
            <li>Conserver <strong>au congélateur</strong> : maximum <strong>4 mois</strong>.</li>
            <li>Après décongélation, garder <strong>au réfrigérateur</strong> et consommer sous <strong>48 h</strong>.</li>
            <li>Ne pas recongeler un produit décongelé.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Valeurs nutritionnelles</h2>
          <div className="tableWrap">
            <table className="nutri">
              <thead>
                <tr>
                  <th>Valeurs</th><th>Pour 100 g</th><th>Par portion ({portionGrams} g)</th><th>Commande ({qty}×)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td><td>{totals.kcal} kcal</td></tr>
                <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td><td>{totals.lipides} g</td></tr>
                <tr className="sub"><td className="subLabel">dont acides gras saturés</td><td>{ags100} g</td><td>{agsPortion} g</td><td>{totals.ags} g</td></tr>
                <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td><td>{totals.glucides} g</td></tr>
                <tr className="sub"><td className="subLabel">dont sucres</td><td>{sucre100} g</td><td>{sucrePortion} g</td><td>{totals.sucres} g</td></tr>
                <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td><td>{totals.proteines} g</td></tr>
                <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td><td>{totals.sel} g</td></tr>
                <tr><td>Poids total</td><td>—</td><td>{portionGrams} g</td><td>{totals.poids} g</td></tr>
              </tbody>
            </table>
          </div>

          <div className="macros">
            <div className="mCard"><div className="mTiny">Protéines</div><div className="mNum">{macroPct.p}%</div></div>
            <div className="mCard"><div className="mTiny">Glucides</div><div className="mNum">{macroPct.g}%</div></div>
            <div className="mCard"><div className="mTiny">Lipides</div><div className="mNum">{macroPct.l}%</div></div>
          </div>
        </section>

        <footer className="foot">
          <Link href="/" className="back">← Retour au menu</Link>
          <p className="legal">Valeurs arrondies — peuvent varier selon ingrédients & méthodes de cuisson.</p>
        </footer>
      </main>

      <style jsx>{`
        /* mêmes styles que la version précédente */
      `}</style>
    </>
  );
}
