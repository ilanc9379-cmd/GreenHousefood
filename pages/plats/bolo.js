// pages/plat/bolo.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

/* =========
   Données
   ========= */
const portionGrams = 600; // 200 + 150 + 150 + 100
const basePrice = 9.9; // € par plat

// Valeurs nutritionnelles (par portion entière)
const kcalPortion = 700;
const lipidesPortion = 15.8; // g
const glucidesPortion = 89; // g
const proteinesPortion = 54.3; // g
const selPortion = 3; // g
const agsPortion = +(lipidesPortion * 0.34).toFixed(1); // dont saturés (~1/3)
const sucrePortion = 11; // g (carottes + sauce)

// Dérivés /100 g
const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1); // ≈116.7
const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1); // ≈2.6
const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1); // ≈14.8
const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1); // ≈9.1
const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1); // 0.5 g
const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1); // ≈0.9
const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1); // ≈1.8

const ingredients = [
  { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
  { name: "Bœuf haché 5% MG", qty: "150 g" },
  { name: "Carottes", qty: "150 g" },
  { name: "Sauce tomate", qty: "100 g" },
  // ➜ Tu m’as demandé de retirer la ligne « Sel 3 g »
  { name: "Herbes/aromates (ail, poivre, basilic, sel)", qty: "" },
];

export default function PlatBoloFiche() {
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () =>
      new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }),
    []
  );

  const totalPrice = +(basePrice * qty).toFixed(2);

  // Répartition énergétique (par portion)
  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      <Head>
        <title>Pâtes bolognaise maison — Greenhouse</title>
        <meta
          name="description"
          content="Plat surgelé Greenhouse : Pâtes bolognaise maison — riche en protéines, prêt en 20 min au four, 8 min au micro-ondes, 10 min à la poêle."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="page">
        {/* HERO / MARQUE */}
        <header className="hero">
          <div className="brand">
            <h1>GreenHouse</h1>
            <p className="tagline">Traiteur — Diététique & Gourmand</p>
          </div>

          <div className="breadcrumb">
            <Link href="/" className="crumb">
              ← Retour au menu
            </Link>
          </div>
        </header>

        <section className="wrap">
          {/* Titre + badges */}
          <div className="head">
            <h2 className="title">Pâtes bolognaise maison</h2>
            <div className="badges">
              <span className="badge badge-frozen">Surgelé</span>
              <span className="badge badge-prot">Riche en protéines</span>
            </div>
            <p className="meta">
              Portion&nbsp;: {portionGrams} g · prêt en 20&nbsp;min au four ·
              8&nbsp;min au micro-ondes · 10&nbsp;min à la poêle
            </p>
            <p className="lead">
              Une bolognaise authentique sublimée par des pâtes au seigle
              artisanales (œufs plein air). La tendreté du bœuf, la douceur des
              carottes et la fraîcheur de la tomate s’unissent pour un plat
              complet, réconfortant et équilibré.
            </p>
          </div>

          {/* Carte prix / quantité */}
          <aside className="priceCard">
            <div className="label">Prix unitaire</div>
            <div className="price">{nf.format(basePrice)}</div>

            <div className="qtyRow">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                }
              />
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Augmenter la quantité"
              >
                +
              </button>
            </div>

            <div className="totalLabel">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="totalValue">{nf.format(totalPrice)}</div>

            <button className="btn">Commander</button>
          </aside>

          {/* Ingrédients */}
          <section className="card">
            <h3>Ingrédients</h3>
            <ul className="ingList">
              {ingredients.map((it) => (
                <li key={it.name}>
                  <span>{it.name}</span>
                  {it.qty && <span className="qty">{it.qty}</span>}
                </li>
              ))}
            </ul>
            <p className="small">
              Allergènes&nbsp;: gluten (seigle, blé), œufs.
            </p>
          </section>

          {/* Conservation (spécifique surgelé) */}
          <section className="card card-soft">
            <h3>Conservation</h3>
            <ul className="bullets">
              <li>
                Conserver <strong>au congélateur</strong> : maximum{" "}
                <strong>4 mois</strong>.
              </li>
              <li>
                Après décongélation : <strong>48h au réfrigérateur</strong>.
              </li>
              <li>
                <strong>Ne pas recongeler</strong> un produit décongelé.
              </li>
            </ul>
          </section>

          {/* Valeurs nutritionnelles — 2 colonnes UNIQUEMENT */}
          <section className="card">
            <h3>Valeurs nutritionnelles</h3>
            <div className="tableWrap">
              <table className="nutri">
                <thead>
                  <tr>
                    <th>Valeurs</th>
                    <th>Pour 100 g</th>
                    <th>Par portion ({portionGrams} g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Énergie</td>
                    <td>{kcal100} kcal</td>
                    <td>{kcalPortion} kcal</td>
                  </tr>
                  <tr>
                    <td>Matières grasses</td>
                    <td>{lipides100} g</td>
                    <td>{lipidesPortion} g</td>
                  </tr>
                  <tr className="sub">
                    <td>— dont acides gras saturés</td>
                    <td>{ags100} g</td>
                    <td>{agsPortion} g</td>
                  </tr>
                  <tr>
                    <td>Glucides</td>
                    <td>{glucides100} g</td>
                    <td>{glucidesPortion} g</td>
                  </tr>
                  <tr className="sub">
                    <td>— dont sucres</td>
                    <td>{sucre100} g</td>
                    <td>{sucrePortion} g</td>
                  </tr>
                  <tr>
                    <td>Protéines</td>
                    <td>{proteines100} g</td>
                    <td>{proteinesPortion} g</td>
                  </tr>
                  <tr>
                    <td>Sel</td>
                    <td>{sel100} g</td>
                    <td>{selPortion} g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Petites cartes % macros (par portion) */}
            <div className="macroGrid">
              <div className="macroBox">
                <div className="macroLabel">Protéines</div>
                <div className="macroValue">{macroPct.p}%</div>
                <div className="macroHint">des kcal</div>
              </div>
              <div className="macroBox">
                <div className="macroLabel">Glucides</div>
                <div className="macroValue">{macroPct.g}%</div>
                <div className="macroHint">des kcal</div>
              </div>
              <div className="macroBox">
                <div className="macroLabel">Lipides</div>
                <div className="macroValue">{macroPct.l}%</div>
                <div className="macroHint">des kcal</div>
              </div>
            </div>
          </section>

          <div className="back">
            <Link href="/" className="backLink">
              ← Retour au menu
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        :root{
          --ink:#0b1020;
          --muted:#556270;
          --soft:#f3fbff;
          --card:#ffffff;
          --ring:rgba(60,134,255,.18);
          --grad1:#0AA64C; /* vert */
          --grad2:#2D7AE6; /* bleu */
          --accent:#18b17a;
          --warn:#ff7a59;
          --frozen:#1aa87b;
        }
        html,body,#__next{height:100%}
        body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial}

        /* Fond vivant */
        .page{
          min-height:100%;
          background:
            radial-gradient(1200px 700px at -10% -15%, #e9fff5 0%, transparent 60%),
            radial-gradient(1000px 600px at 110% -20%, #e9f2ff 0%, transparent 65%),
            linear-gradient(180deg,#f7fffb 0%, #f9fbff 50%, #ffffff 100%);
        }

        /* HERO marque */
        .hero{padding:28px 16px 8px}
        .brand{max-width:1100px;margin:0 auto;padding:0 8px}
        .brand h1{
          margin:0;
          font-size: clamp(44px, 7vw, 86px);
          line-height:.95;
          letter-spacing:.4px;
          background: linear-gradient(90deg,var(--grad1),var(--grad2));
          -webkit-background-clip:text;background-clip:text;color:transparent;
          text-shadow: 0 8px 30px rgba(45,122,230,.15);
        }
        .tagline{margin:6px 0 0;color:var(--muted);font-size:clamp(16px,2.6vw,22px)}
        .breadcrumb{max-width:1100px;margin:10px auto 0;padding:0 8px}
        .crumb{color:#2d7ae6;text-decoration:none}
        .crumb:hover{text-decoration:underline}

        .wrap{max-width:1100px;margin:14px auto 40px;padding:0 12px;display:grid;grid-template-columns:1.1fr .9fr;gap:18px}
        @media (max-width:960px){.wrap{grid-template-columns:1fr}}

        .head{grid-column:1 / -1;background:var(--card);border-radius:20px;padding:18px;box-shadow:0 12px 30px rgba(0,0,0,.06)}
        .title{margin:4px 0 6px;font-size:clamp(22px,3.4vw,34px)}
        .badges{display:flex;gap:8px;flex-wrap:wrap}
        .badge{display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border-radius:999px;font-weight:700;font-size:12px;border:1px solid rgba(0,0,0,.06);background:#eef5ff}
        .badge-frozen{background:rgba(26,168,123,.14);border-color:rgba(26,168,123,.28)}
        .badge-prot{background:rgba(45,122,230,.14);border-color:rgba(45,122,230,.28)}
        .meta{margin:8px 0;color:var(--muted)}
        .lead{margin:0;color:#2c3440}

        .priceCard{
          background:var(--card);border-radius:20px;padding:18px;box-shadow:0 12px 30px rgba(0,0,0,.06);
          position:sticky;top:14px;height:max-content
        }
        .label{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.12em}
        .price{font-size:34px;font-weight:800;margin:4px 0 10px}
        .qtyRow{display:flex;gap:8px;align-items:center}
        .qtyRow button{width:42px;height:42px;border-radius:12px;border:1px solid rgba(0,0,0,.12);background:#fff;cursor:pointer}
        .qtyRow input{width:70px;height:42px;border-radius:12px;border:1px solid rgba(0,0,0,.12);text-align:center;font-weight:600}
        .totalLabel{margin-top:10px;color:var(--muted);font-size:14px}
        .totalValue{font-size:22px;font-weight:700}
        .btn{
          margin-top:12px;width:100%;height:46px;border:0;border-radius:14px;color:#fff;font-weight:700;cursor:pointer;
          background: linear-gradient(90deg,var(--grad1),var(--grad2));
          box-shadow:0 14px 32px rgba(45,122,230,.22)
        }
        .btn:active{transform:translateY(1px)}

        .card{
          background:var(--card);border-radius:20px;padding:18px;box-shadow:0 12px 30px rgba(0,0,0,.06)
        }
        .card-soft{
          background:linear-gradient(180deg,#f0fff7,#f5fbff);
          border:1px solid rgba(13,171,110,.18)
        }

        .ingList{list-style:none;margin:12px 0 6px;padding:0;display:grid;gap:8px}
        .ingList li{display:flex;justify-content:space-between;gap:10px;background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:14px;padding:10px 12px}
        .ingList .qty{font-weight:600}
        .small{color:var(--muted);margin-top:6px}

        .bullets{margin:8px 0 0;padding-left:18px}
        .bullets li{margin:8px 0}

        .tableWrap{overflow-x:auto;border-radius:16px;border:1px solid rgba(0,0,0,.06)}
        table{width:100%;border-collapse:separate;border-spacing:0;background:#fff;border-radius:16px;overflow:hidden}
        thead tr{background:#f5f7fb;color:#425066}
        th,td{padding:12px 14px;text-align:left}
        tbody tr:nth-child(odd){background:#fbfdff}
        tbody tr.sub td{color:#6b7483}
        tbody tr + tr td{border-top:1px solid #eef2f7}

        .macroGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
        @media (max-width:680px){.macroGrid{grid-template-columns:1fr}}
        .macroBox{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:14px;padding:12px;text-align:center}
        .macroLabel{color:var(--muted);text-transform:uppercase;font-size:12px;letter-spacing:.08em}
        .macroValue{font-size:26px;font-weight:800}
        .macroHint{color:var(--muted);font-size:12px}

        .back{grid-column:1 / -1;text-align:center;margin-top:8px}
        .backLink{color:#2d7ae6;text-decoration:none}
        .backLink:hover{text-decoration:underline}
      `}</style>
    </>
  );
}
