// pages/plats/bolo.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PlatBoloFiche() {
  // Données recette (selon ton message)
  const portionGrams = 600; // 200 + 150 + 150 + 100
  const basePrice = 9.9;

  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Sel", qty: "3 g" },
    { name: "Herbes/aromates (ail, poivre, basilic)", qty: "au goût" },
  ];

  // Totaux nutritionnels par portion
  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3;
  const agsPortion = +(lipidesPortion * 0.34).toFixed(1);
  const sucrePortion = 11;

  // Pour 100 g
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  // Sélecteur quantité
  const [qty, setQty] = useState(1);
  const nf = useMemo(() => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }), []);

  // Totaux commande
  const totals = useMemo(
    () => ({
      price: +(basePrice * qty).toFixed(2),
      kcal: kcalPortion * qty,
      lipides: +(lipidesPortion * qty).toFixed(1),
      ags: +(agsPortion * qty).toFixed(1),
      glucides: +(glucidesPortion * qty).toFixed(1),
      sucres: +(sucrePortion * qty).toFixed(1),
      proteines: +(proteinesPortion * qty).toFixed(1),
      sel: +(selPortion * qty).toFixed(1),
      poids: portionGrams * qty,
    }),
    [qty]
  );

  // Répartition énergétique
  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      <Head>
        <title>Pâtes bolognaise maison — GreenHouse</title>
        <meta name="description" content="Fiche détaillée : Pâtes bolognaise maison — GreenHouse" />
      </Head>

      <main className="page">
        <header className="header">
          <div>
            <h1>Pâtes bolognaise maison</h1>
            <p className="muted">
              Portion : {portionGrams} g · prêt en 20 min · riche en protéines
            </p>
            <p>
              Une bolognaise authentique sublimée par des pâtes au seigle artisanales,
              élaborées avec des œufs plein air. La tendreté du bœuf haché, la douceur
              des carottes et la fraîcheur de la tomate s’unissent pour un plat complet,
              réconfortant et équilibré.
            </p>
          </div>

          {/* Carte prix / quantité */}
          <div className="pricecard">
            <div className="sub">Prix unitaire</div>
            <div className="big">{nf.format(basePrice)}</div>
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="moins">−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="plus">+</button>
            </div>
            <div className="sub">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="mid">{nf.format(totals.price)}</div>
            <button className="btn">Commander</button>
          </div>
        </header>

        {/* Ingrédients */}
        <section className="block">
          <h2>Ingrédients</h2>
          <ul className="ing">
            {ingredients.map((it) => (
              <li key={it.name}>
                <span>{it.name}</span>
                <span className="qtytxt">{it.qty}</span>
              </li>
            ))}
          </ul>
          <p className="muted">Allergènes : gluten (seigle, blé), œufs.</p>
        </section>

        {/* Valeurs nutritionnelles */}
        <section className="block">
          <h2>Valeurs nutritionnelles</h2>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Valeurs</th>
                  <th>Pour 100 g</th>
                  <th>Par portion ({portionGrams} g)</th>
                  <th>Commande ({qty}×)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td><td>{totals.kcal} kcal</td></tr>
                <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td><td>{totals.lipides} g</td></tr>
                <tr><td className="subrow">dont acides gras saturés</td><td>{ags100} g</td><td>{agsPortion} g</td><td>{totals.ags} g</td></tr>
                <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td><td>{totals.glucides} g</td></tr>
                <tr><td className="subrow">dont sucres</td><td>{sucre100} g</td><td>{sucrePortion} g</td><td>{totals.sucres} g</td></tr>
                <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td><td>{totals.proteines} g</td></tr>
                <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td><td>{totals.sel} g</td></tr>
                <tr><td>Poids total</td><td>—</td><td>{portionGrams} g</td><td>{totals.poids} g</td></tr>
              </tbody>
            </table>
          </div>

          {/* Répartition macros */}
          <div className="cards">
            <div className="card"><div className="lab">Protéines</div><div className="val">{macroPct.p}%</div><div className="lab2">des kcal</div></div>
            <div className="card"><div className="lab">Glucides</div><div className="val">{macroPct.g}%</div><div className="lab2">des kcal</div></div>
            <div className="card"><div className="lab">Lipides</div><div className="val">{macroPct.l}%</div><div className="lab2">des kcal</div></div>
          </div>
        </section>

        {/* Préparation */}
        <section className="block">
          <h2>Préparation (suggestion)</h2>
          <ol className="steps">
            <li>Cuire les pâtes au seigle al dente. Réserver un peu d’eau de cuisson.</li>
            <li>Faire revenir le bœuf haché, ajouter carottes en dés, sauce tomate et aromates.</li>
            <li>Assaisonner avec {selPortion} g de sel (à adapter), poivre et herbes.</li>
            <li>Mélanger avec les pâtes, ajuster la texture avec l’eau de cuisson.</li>
          </ol>
        </section>

        <p className="muted small">Valeurs arrondies — peuvent varier selon les ingrédients et la cuisson.</p>

        <p className="back">
          <Link href="/">← Retour à l’accueil</Link>
        </p>
      </main>

      <style jsx>{`
        .page{max-width:1100px;margin:0 auto;padding:24px 16px}
        .header{display:grid;gap:16px;grid-template-columns:1fr 300px;align-items:start}
        @media(max-width:900px){.header{grid-template-columns:1fr}}
        h1{margin:0;font-size:clamp(28px,4.5vw,44px)}
        .muted{color:#5a6376}
        .small{font-size:12px}
        .pricecard{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:16px;box-shadow:0 10px 26px rgba(0,0,0,.06);padding:16px}
        .sub{font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em}
        .big{font-size:34px;font-weight:800}
        .mid{font-size:22px;font-weight:700}
        .qty{display:flex;align-items:center;gap:8px;margin:10px 0}
        .qty button{height:36px;width:36px;border-radius:10px;border:1px solid #d1d5db;background:#fff}
        .qty input{height:36px;width:64px;text-align:center;border-radius:10px;border:1px solid #d1d5db}
        .btn{margin-top:8px;width:100%;padding:10px 14px;border:none;border-radius:12px;color:#fff;font-weight:700;background:linear-gradient(90deg,#0aa64c,#2d7ae6)}
        .block{margin:26px 0}
        .ing{list-style:none;padding:0;display:grid;gap:8px;grid-template-columns:repeat(2,minmax(0,1fr))}
        @media(max-width:700px){.ing{grid-template-columns:1fr}}
        .ing li{display:flex;justify-content:space-between;gap:12px;background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:10px}
        .qtytxt{font-weight:600}
        .table{overflow-x:auto;background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:16px;box-shadow:0 10px 26px rgba(0,0,0,.06)}
        table{min-width:720px;width:100%;border-collapse:collapse}
        th,td{padding:10px 12px;text-align:left}
        thead tr{background:#f3f4f6;color:#374151}
        tr+tr{border-top:1px solid #e5e7eb}
        .subrow{padding-left:24px;color:#6b7280}
        .cards{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:12px}
        @media(max-width:700px){.cards{grid-template-columns:1fr}}
        .card{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:14px;padding:12px;text-align:center}
        .lab{font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em}
        .val{font-size:24px;font-weight:800}
        .lab2{font-size:12px;color:#6b7280}
        .steps{padding-left:18px}
        .back{margin:20px 0}
      `}</style>
    </>
  );
}
