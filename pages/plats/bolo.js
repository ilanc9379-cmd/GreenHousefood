// pages/plats/bolo.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function PlatBoloFiche() {
  // ===== Données recette =====
  const portionGrams = 600; // 600 g par barquette
  const basePrice = 9.9; // € par plat
  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Herbes/aromates (ail, poivre, basilic, sel)", qty: "" }, // ← pas “au goût”
  ];

  // ===== Valeurs nutritionnelles (par portion) =====
  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3; // affiché en totaux, mais PAS en “ingrédients 3 g” séparé
  const agsPortion = +(lipidesPortion * 0.34).toFixed(1);
  const sucrePortion = 11;

  // ===== Dérivés pour 100 g =====
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  // Sélecteur de quantité
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  // Totaux multi-plateaux
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

  // Répartition énergétique (par portion)
  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      <Head>
        <title>Bolognaise — GreenHouse</title>
        <meta
          name="description"
          content="Pâtes bolognaise maison GreenHouse — barquette 600 g, surgelée. Riche en protéines."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        {/* HEADER */}
        <header className="header">
          <Link href="/" className="home">
            <Image src="/favicon.png" alt="Logo GreenHouse" width={36} height={36} className="logo" />
            <span className="brand-name">GreenHouse</span>
          </Link>
          <span className="tag-freeze">Surgelé</span>
        </header>

        {/* HERO */}
        <section className="hero">
          <h1 className="title">Pâtes bolognaise maison</h1>
          <p className="subtitle">
            Barquette {portionGrams} g — prêt en <strong>20 mn au four</strong>, <strong>8 mn au micro-ondes</strong>,{" "}
            <strong>10 mn à la poêle</strong> — riche en protéines.
          </p>

          {/* Carte prix / quantité */}
          <div className="priceCard">
            <div className="label">Prix unitaire</div>
            <div className="big">{nf.format(basePrice)}</div>
            <div className="qtyRow">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer la quantité">
                −
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="Augmenter la quantité">
                +
              </button>
            </div>
            <div className="muted">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="total">{nf.format(totals.price)}</div>
            <button className="cta">Commander</button>
          </div>
        </section>

        {/* Ingrédients */}
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

        {/* Info SURGELÉ + Conservation */}
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

        {/* Valeurs nutritionnelles */}
        <section className="section">
          <h2>Valeurs nutritionnelles</h2>
          <div className="tableWrap">
            <table className="nutri">
              <thead>
                <tr>
                  <th>Valeurs</th>
                  <th>Pour 100 g</th>
                  <th>Par portion ({portionGrams} g)</th>
                  <th>Commande ({qty}×)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Énergie</td>
                  <td>{kcal100} kcal</td>
                  <td>{kcalPortion} kcal</td>
                  <td>{totals.kcal} kcal</td>
                </tr>
                <tr>
                  <td>Matières grasses</td>
                  <td>{lipides100} g</td>
                  <td>{lipidesPortion} g</td>
                  <td>{totals.lipides} g</td>
                </tr>
                <tr className="sub">
                  <td className="subLabel">dont acides gras saturés</td>
                  <td>{ags100} g</td>
                  <td>{agsPortion} g</td>
                  <td>{totals.ags} g</td>
                </tr>
                <tr>
                  <td>Glucides</td>
                  <td>{glucides100} g</td>
                  <td>{glucidesPortion} g</td>
                  <td>{totals.glucides} g</td>
                </tr>
                <tr className="sub">
                  <td className="subLabel">dont sucres</td>
                  <td>{sucre100} g</td>
                  <td>{sucrePortion} g</td>
                  <td>{totals.sucres} g</td>
                </tr>
                <tr>
                  <td>Protéines</td>
                  <td>{proteines100} g</td>
                  <td>{proteinesPortion} g</td>
                  <td>{totals.proteines} g</td>
                </tr>
                <tr>
                  <td>Sel</td>
                  <td>{sel100} g</td>
                  <td>{selPortion} g</td>
                  <td>{totals.sel} g</td>
                </tr>
                <tr>
                  <td>Poids total</td>
                  <td>—</td>
                  <td>{portionGrams} g</td>
                  <td>{totals.poids} g</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Répartition macros (portion) */}
          <div className="macros">
            <div className="mCard">
              <div className="mTiny">Protéines</div>
              <div className="mNum">{macroPct.p}%</div>
              <div className="mTiny">des kcal</div>
            </div>
            <div className="mCard">
              <div className="mTiny">Glucides</div>
              <div className="mNum">{macroPct.g}%</div>
              <div className="mTiny">des kcal</div>
            </div>
            <div className="mCard">
              <div className="mTiny">Lipides</div>
              <div className="mNum">{macroPct.l}%</div>
              <div className="mTiny">des kcal</div>
            </div>
          </div>
        </section>

        {/* Préparation */}
        <section className="section">
          <h2>Préparation (suggestion)</h2>
          <ol className="steps">
            <li>Cuire/réchauffer selon votre équipement : four 20 mn · micro-ondes 8 mn · poêle 10 mn.</li>
            <li>Pour les pâtes : garder un peu d’eau de cuisson pour ajuster la sauce si besoin.</li>
            <li>Assaisonner à votre goût (poivre, basilic, huile d’olive en filet).</li>
          </ol>
        </section>

        <footer className="foot">
          <Link href="/" className="back">← Retour au menu</Link>
          <p className="legal">Valeurs arrondies — peuvent varier selon ingrédients & méthodes de cuisson.</p>
        </footer>
      </main>

      <style jsx>{`
        :root{
          --brand1:#0aa64c; --brand2:#2d7ae6; --ink:#0b1020; --muted:#5b6473;
          --card:#fff; --ring:rgba(10,140,120,.22); --freeze:#3aa3ff;
          --bg-a:#f5fbff; --bg-b:#f7fff9;
        }
        html,body,#__next{height:100%} body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto}

        .wrap{
          min-height:100%;
          background:
            radial-gradient(1200px 700px at -10% -10%, #e8f7ff, transparent 60%),
            radial-gradient(900px 600px at 110% -20%, #dff8ee, transparent 65%),
            linear-gradient(180deg, var(--bg-a) 0%, var(--bg-b) 60%, #fff 100%);
        }

        /* Header */
        .header{
          position:sticky; top:0; z-index:10;
          display:flex; align-items:center; justify-content:space-between; gap:12px;
          padding:12px 18px; background:#fff; box-shadow:0 6px 20px rgba(0,0,0,.08);
        }
        .home{display:flex; align-items:center; gap:10px; text-decoration:none}
        .brand-name{
          font-size:24px; font-weight:900; letter-spacing:.3px;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          -webkit-background-clip:text; background-clip:text; color:transparent;
        }
        .logo{border-radius:8px}

        .tag-freeze{
          background:linear-gradient(90deg,#3aa3ff,#0066cc);
          color:#fff; padding:6px 12px; border-radius:999px; font-weight:800; font-size:12px;
          box-shadow:0 8px 22px rgba(0,102,204,.25);
        }

        /* Hero */
        .hero{max-width:1100px;margin:22px auto; padding:0 18px; display:grid; gap:14px}
        .title{margin:0; font-size:clamp(28px,4.8vw,46px); line-height:1.05}
        .subtitle{margin:0; color:var(--muted); font-size:16px}

        .priceCard{
          justify-self:start;
          background:#fff; border-radius:18px; padding:16px; width:100%; max-width:300px;
          box-shadow:0 10px 30px rgba(0,0,0,.08), 0 0 0 2px rgba(58,163,255,.12) inset;
        }
        .label{font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:#6b7280}
        .big{font-size:30px; font-weight:900; margin:.2rem 0 .4rem}
        .qtyRow{display:flex; align-items:center; gap:8px; margin:8px 0}
        .qtyRow button{width:40px; height:40px; border-radius:12px; border:1px solid #e5e7eb; background:#fff; font-size:22px; cursor:pointer}
        .qtyRow input{width:70px; height:40px; text-align:center; border:1px solid #e5e7eb; border-radius:12px; font-size:16px}
        .muted{color:#6b7280; font-size:13px}
        .total{font-size:22px; font-weight:800; margin-bottom:8px}
        .cta{
          width:100%; padding:10px 14px; border:none; border-radius:12px; color:#fff; font-weight:800; cursor:pointer;
          background:linear-gradient(90deg,var(--brand1),var(--brand2)); box-shadow:0 10px 25px rgba(45,122,230,.22);
        }

        /* Sections */
        .section{max-width:1100px; margin:22px auto; padding:0 18px}
        .section h2{margin:0 0 10px; font-size:22px}

        .ingrids{display:grid; gap:8px}
        .ingItem{display:flex; align-items:center; justify-content:space-between; background:#fff; border-radius:12px; padding:10px 12px; box-shadow:0 8px 18px rgba(0,0,0,.06)}
        .qty{font-weight:600; font-variant-numeric:tabular-nums}

        .note{margin-top:8px; color:var(--muted); font-size:14px}

        .freezeBox{
          background:linear-gradient(180deg,#e6f4ff,#ffffff); border-radius:18px; padding:16px;
          box-shadow:0 10px 28px rgba(0,102,204,.15) inset, 0 8px 18px rgba(0,0,0,.06);
          border:1px solid rgba(0,102,204,.2);
        }
        .freezeHead{display:flex; align-items:center; gap:10px; margin-bottom:6px}
        .freezeTitle{margin:0}
        .freezeList{margin:0; padding-left:18px}
        .freezeList li{margin:6px 0}

        .tableWrap{overflow-x:auto; background:#fff; border-radius:16px; box-shadow:0 8px 18px rgba(0,0,0,.06)}
        table.nutri{width:100%; border-collapse:collapse}
        table.nutri th, table.nutri td{padding:10px 12px; text-align:left}
        thead tr{background:#f0f6ff; color:#0b3e75}
        tbody tr{border-top:1px solid #eef2f7}
        .sub .subLabel{padding-left:18px; color:#6b7280}

        .macros{display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-top:12px}
        .mCard{background:#fff; border-radius:12px; padding:12px; text-align:center; box-shadow:0 8px 18px rgba(0,0,0,.06)}
        .mTiny{font-size:11px; color:#6b7280; text-transform:uppercase; letter-spacing:.06em}
        .mNum{font-size:22px; font-weight:900}

        .foot{max-width:1100px; margin:26px auto 40px; padding:0 18px; text-align:center; color:#6b7280}
        .back{display:inline-block; margin-bottom:6px; text-decoration:none; font-weight:600; color:#0b3e75}
        .legal{margin:0; font-size:12px}
      `}</style>
    </>
  );
}
