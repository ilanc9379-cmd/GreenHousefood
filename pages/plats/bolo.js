// pages/plat/bolo.js
import Head from "next/head";
import { useMemo, useState } from "react";

export default function Bolo() {
  // -------- Données plat
  const portionGrams = 600;
  const basePrice = 9.9;
  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Herbes / aromates (ail, poivre, basilic, sel)", qty: "" },
  ];
  // Nutri (portion)
  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3;
  const agsPortion = +(lipidesPortion * 0.34).toFixed(1);
  const sucrePortion = 11;
  // Nutri (100 g)
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const totalPrice = +(basePrice * qty).toFixed(2);

  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      <Head>
        <title>GreenHouse · Pâtes bolognaise (Surgelé)</title>
        <meta
          name="description"
          content="Pâtes bolognaise maison (surgelé) — portion 600 g · prêt en 20 min au four · 8 min micro-ondes · 10 min à la poêle."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <a className="back" href="/">← Retour au menu</a>
          <h1 className="brand">GreenHouse</h1>
          <p className="tagline"><strong>Traiteur</strong> — Diététique & Gourmand</p>
          <p className="lead">
            Des plats maison bons et équilibrés, cuisinés en Alsace. Diète ou
            gourmand : à vous de choisir.
          </p>
        </header>

        {/* CONTENU */}
        <div className="wrap">
          {/* Titre + badges */}
          <section className="card heroCard">
            <h2 className="title">Pâtes bolognaise maison</h2>
            <div className="badges">
              <span className="badge badge-freeze">Surgelé</span>
              <span className="badge badge-prot">Riche en protéines</span>
            </div>
            <p className="meta">
              <b>Portion</b> : {portionGrams} g · prêt en <i>20 min au four</i> ·{" "}
              <i>8 min au micro-ondes</i> · <i>10 min à la poêle</i>
            </p>
            <p className="desc">
              Une bolognaise authentique sublimée par des pâtes au seigle
              artisanales (œufs plein air). La tendreté du bœuf, la douceur des
              carottes et la fraîcheur de la tomate s’unissent pour un plat
              complet, réconfortant et équilibré.
            </p>
          </section>

          {/* Prix / quantité */}
          <section className="card priceCard">
            <div className="priceHeader">Prix unitaire</div>
            <div className="price">{nf.format(basePrice)}</div>

            <div className="qty">
              <button aria-label="Moins" onClick={() => setQty((v) => Math.max(1, v - 1))}>−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
              />
              <button aria-label="Plus" onClick={() => setQty((v) => v + 1)}>+</button>
            </div>

            <div className="totalLegend">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="total">{nf.format(totalPrice)}</div>

            <button className="cta">Commander</button>
          </section>

          {/* === NOUVEAU : grille 2 colonnes ingrédients + nutri === */}
          <section className="infoGrid">
            {/* Ingrédients */}
            <div className="card">
              <h3 className="sectionTitle">Ingrédients</h3>
              <ul className="ingList">
                {ingredients.map((it) => (
                  <li key={it.name}>
                    <span>{it.name}</span>
                    {it.qty && <strong>{it.qty}</strong>}
                  </li>
                ))}
              </ul>
              <p className="allergenes">Allergènes : gluten (seigle, blé), œufs.</p>
            </div>

            {/* Valeurs nutritionnelles */}
            <div className="card">
              <h3 className="sectionTitle">Valeurs nutritionnelles</h3>
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
                    <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td></tr>
                    <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td></tr>
                    <tr><td className="sub">dont acides gras saturés</td><td>{ags100} g</td><td>{agsPortion} g</td></tr>
                    <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td></tr>
                    <tr><td className="sub">dont sucres</td><td>{sucre100} g</td><td>{sucrePortion} g</td></tr>
                    <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td></tr>
                    <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="macros">
                <div><small>Protéines</small><strong>{macroPct.p}%</strong><span>des kcal</span></div>
                <div><small>Glucides</small><strong>{macroPct.g}%</strong><span>des kcal</span></div>
                <div><small>Lipides</small><strong>{macroPct.l}%</strong><span>des kcal</span></div>
              </div>
            </div>
          </section>

          {/* Conservation */}
          <section className="card conserve">
            <h3 className="sectionTitle">Conservation</h3>
            <ul>
              <li>Conserver <b>au congélateur</b> : maximum <b>4 mois</b>.</li>
              <li>Après décongélation : <b>48 h au réfrigérateur</b>.</li>
              <li><b>Ne pas recongeler</b> un produit décongelé.</li>
            </ul>
          </section>
        </div>

        <footer className="foot">© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</footer>
      </main>

      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#536074; --card:#fff;
          --brand1:#0aa64c; --brand2:#2d7ae6;
        }
        .page{
          min-height:100svh;
          background:
            radial-gradient(1200px 700px at -10% -20%, #eaf9f2 0%, transparent 60%),
            radial-gradient(900px 600px at 110% -10%, #e9f1ff 0%, transparent 60%),
            linear-gradient(180deg,#f6fbff 0%,#f9fffb 70%,#fff 100%);
          color:var(--ink);
        }
        .hero{max-width:1100px;margin:0 auto;padding:28px 20px 10px}
        .back{display:inline-block;margin:12px 0 8px;color:#2d7ae6;text-decoration:none}
        .back:hover{text-decoration:underline}
        .brand{
          margin:0;font-size:clamp(52px,8vw,100px);line-height:.95;letter-spacing:.5px;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          -webkit-background-clip:text;background-clip:text;color:transparent;
          filter:drop-shadow(0 10px 26px rgba(45,122,230,.18));
        }
        .tagline{margin:6px 0 2px;font-size:clamp(18px,2.8vw,22px)}
        .lead{margin:8px 0 0;color:var(--muted);max-width:900px}

        .wrap{
          max-width:1100px;margin:14px auto 40px;padding:0 20px;
          display:grid;gap:18px;
          grid-template-columns: 2fr 1fr;
        }
        @media (max-width:960px){ .wrap{grid-template-columns:1fr} }

        .card{background:var(--card);border-radius:18px;padding:18px;
          box-shadow:0 12px 32px rgba(0,0,0,.06),0 1px 0 rgba(255,255,255,.7) inset}
        .heroCard{grid-column:1 / -1}
        .priceCard{align-self:start}

        .title{margin:4px 0 10px;font-size:clamp(26px,4vw,40px);line-height:1.12}
        .badges{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:6px}
        .badge{display:inline-flex;align-items:center;padding:6px 12px;border-radius:999px;font-weight:700;font-size:12px;border:1px solid rgba(0,0,0,.06);background:#eef5ff}
        .badge-freeze{background:rgba(58,161,255,.14);border-color:rgba(58,161,255,.35)}
        .badge-prot{background:rgba(26,168,123,.14);border-color:rgba(26,168,123,.35)}

        .meta{margin:10px 0 8px}
        .desc{margin:8px 0 0;color:var(--muted);font-size:18px}

        .priceHeader{color:var(--muted);text-transform:uppercase;font-size:12px;letter-spacing:.25px}
        .price{font-size:34px;font-weight:900;margin:2px 0 10px}
        .qty{display:flex;align-items:center;gap:10px}
        .qty button{width:40px;height:40px;border-radius:12px;border:1px solid rgba(0,0,0,.12);background:#fff;font-size:22px;cursor:pointer}
        .qty input{width:120px;height:40px;border-radius:12px;border:1px solid rgba(0,0,0,.12);text-align:center;font-weight:600}
        .totalLegend{color:var(--muted);margin-top:8px}
        .total{font-size:24px;font-weight:800}
        .cta{margin-top:12px;width:100%;height:44px;border:none;border-radius:12px;color:#fff;font-weight:800;cursor:pointer;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));box-shadow:0 14px 32px rgba(45,122,230,.22)}

        /* ---------- Grille info : ingrédients + nutri côte à côte ---------- */
        .infoGrid{
          grid-column:1 / -1;
          display:grid;gap:18px;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width:900px){ .infoGrid{grid-template-columns:1fr} }

        .sectionTitle{margin:0 0 10px;font-size:20px}
        .ingList{display:grid;gap:8px}
        .ingList li{display:flex;justify-content:space-between;gap:12px;background:linear-gradient(180deg,#fafcff,#f3f7ff);border:1px solid rgba(0,0,0,.06);padding:10px;border-radius:12px}
        .ingList strong{font-variant-numeric:tabular-nums}
        .allergenes{color:var(--muted);margin-top:8px}

        .tableWrap{overflow-x:auto;border-radius:12px}
        table.nutri{width:100%;border-collapse:separate;border-spacing:0;border-radius:12px}
        .nutri thead th{background:#f0f4ff;border-bottom:1px solid rgba(0,0,0,.06);padding:10px;text-align:left;color:#334}
        .nutri td{padding:10px;border-bottom:1px solid rgba(0,0,0,.05)}
        .nutri .sub{padding-left:26px;color:#6b7789}

        .macros{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}
        .macros > div{text-align:center;padding:10px;border-radius:12px;background:#fff;border:1px solid rgba(0,0,0,.06)}
        .macros small{color:var(--muted)}
        .macros strong{display:block;font-size:22px}

        .conserve{background:linear-gradient(180deg,#f0fbff,#f7fffb)}
        .conserve ul{margin:6px 0 0;padding-left:20px}
        .conserve li{margin:6px 0}

        .foot{text-align:center;color:var(--muted);padding:30px 16px}
      `}</style>
    </>
  );
}
