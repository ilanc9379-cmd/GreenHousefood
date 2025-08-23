// pages/plats/pates-poulet-poivron.jsx
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PlatPouletPoivron() {
  // --- Données plat ---
  const portionGrams = 600;
  const price = 9.9;
  const kcalPortion = 689;
  const protPortion = 62;
  const glucPortion = 86;
  const lipPortion  = 10;

  // Dérivés /100 g
  const kcal100 = +(kcalPortion / (portionGrams/100)).toFixed(1);
  const prot100 = +(protPortion / (portionGrams/100)).toFixed(1);
  const gluc100 = +(glucPortion / (portionGrams/100)).toFixed(1);
  const lip100  = +(lipPortion  / (portionGrams/100)).toFixed(1);

  const ingredients = [
    { name: "Pâtes de seigle artisanales (œufs plein air)", qty: "200 g" },
    { name: "Poulet émincé (cuit)", qty: "150 g" },
    { name: "Poivron", qty: "100 g" },
    { name: "Julienne de légumes (carotte/courgette/poireau…)", qty: "150 g" },
    { name: "Sauce poivron (poivron, ail, oignon, herbes)", qty: "—" },
    { name: "Sel, poivre", qty: "—" },
  ];

  // Prix × quantité
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  return (
    <>
      <Head>
        <title>GreenHouse — Pâtes poulet & poivron</title>
        <meta
          name="description"
          content="Pâtes de seigle, poulet émincé, julienne de légumes et sauce poivron maison. Portion 600 g. Surgelé. 9,90 €."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        {/* Bandeau / marque */}
        <header className="hero">
          <div className="brand">GreenHouse</div>
          <p className="slogan">Traiteur — Diététique & Gourmand</p>
          <p className="lead">
            Des plats maison bons et équilibrés, cuisinés en Alsace, prêts à être dégustés.
          </p>
          <Link href="/" className="back">← Retour au menu</Link>
        </header>

        {/* Titre */}
        <section className="container">
          <h1 className="title">Pâtes émincé de poulet, julienne de légumes, sauce poivron</h1>

          <div className="badges">
            <span className="badge frozen">Surgelé</span>
            <span className="badge prot">Riche en protéines</span>
          </div>

          <p className="meta">
            <strong>Portion :</strong> {portionGrams} g · <strong>prêt en</strong> 20 min <em>au four</em> ·
            8 min <em>au micro-ondes</em> · 10 min <em>à la poêle</em>
          </p>

          <p className="desc">
            Pâtes de seigle artisanales, poulet émincé, julienne de légumes et
            sauce poivron maison (poivron, ail, oignon, herbes). Un plat
            généreux, équilibré et parfumé pour le quotidien.
          </p>

          {/* Bloc prix */}
          <div className="priceCard">
            <div className="priceHead">Prix unitaire</div>
            <div className="price">{nf.format(price)}</div>
            <div className="qtyRow">
              <button aria-label="Diminuer" onClick={() => setQty(q => Math.max(1, q-1))}>−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e)=>setQty(Math.max(1, parseInt(e.target.value||"1",10)))}
              />
              <button aria-label="Augmenter" onClick={() => setQty(q => q+1)}>+</button>
            </div>
            <div className="totalLabel">Total ({qty} plat{qty>1?"s":""})</div>
            <div className="total">{nf.format((price*qty).toFixed(2))}</div>
            <button className="cta">Commander</button>
          </div>

          {/* 2 colonnes : Ingrédients / Valeurs */}
          <div className="twoCols">
            <section className="card">
              <h2>Ingrédients</h2>
              <ul className="ingList">
                {ingredients.map((it) => (
                  <li key={it.name}>
                    <span>{it.name}</span>
                    <strong>{it.qty}</strong>
                  </li>
                ))}
              </ul>
              <p className="allergenes">Allergènes : gluten (seigle, blé), œufs.</p>
            </section>

            <section className="card">
              <h2>Valeurs nutritionnelles</h2>
              <div className="nutri">
                <table>
                  <thead>
                    <tr>
                      <th>Valeurs</th>
                      <th>Pour 100 g</th>
                      <th>Par portion ({portionGrams} g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td></tr>
                    <tr><td>Protéines</td><td>{prot100} g</td><td>{protPortion} g</td></tr>
                    <tr><td>Glucides</td><td>{gluc100} g</td><td>{glucPortion} g</td></tr>
                    <tr><td>Lipides</td><td>{lip100} g</td><td>{lipPortion} g</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Conservation */}
          <section className="card">
            <h2>Conservation</h2>
            <ul className="cons">
              <li>Conserver <strong>au congélateur</strong> : maximum 4 mois.</li>
              <li>Après décongélation : <strong>48h au réfrigérateur</strong>.</li>
              <li><strong>Ne pas recongeler</strong> un produit décongelé.</li>
            </ul>
            <p className="note">
              La surgélation est une méthode naturelle qui permet de préserver la fraîcheur,
              la texture et les qualités nutritionnelles des aliments, sans ajout de conservateurs.
            </p>
          </section>

          <footer className="foot">
            © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
          </footer>
        </section>
      </main>

      <style jsx>{`
        :root{
          --ink:#0b1020;--muted:#586071;--card:#ffffff;
          --diet:#1aa87b;--prot:#2d7ae6;--frozen:#3bb6c4;
          --brand1:#00c26e;--brand2:#2d7ae6;
          --bg1:#dff8ee;--bg2:#e9f2ff;
        }
        html,body,#__next{height:100%}
        body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}

        .page{
          min-height:100%;
          background:
            radial-gradient(1000px 700px at -10% -10%, var(--bg2), transparent 60%),
            radial-gradient(900px 600px at 110% -20%, var(--bg1), transparent 65%),
            linear-gradient(180deg,#f6fffb 0%,#f6fbff 60%,#fbfeff 100%);
        }

        .hero{padding:40px 18px 10px; text-align:left}
        .brand{
          font-weight:900; letter-spacing:.5px;
          font-size:clamp(44px, 8vw, 84px);
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          -webkit-background-clip:text; background-clip:text; color:transparent;
        }
        .slogan{margin:6px 0 6px; color:var(--muted); font-size:18px;}
        .lead{margin:0 0 12px; color:var(--muted);}
        .back{display:inline-block; margin-top:6px; color:#2056d6;}

        .container{max-width:1100px; margin:0 auto; padding:6px 18px 40px;}
        .title{font-size:clamp(26px, 4.5vw, 44px); margin:8px 0 6px;}
        .badges{display:flex; gap:8px; margin:6px 0 10px;}
        .badge{padding:6px 12px; border-radius:999px; font-weight:700;}
        .badge.frozen{background:rgba(59,182,196,.15); color:#046b74;}
        .badge.prot{background:rgba(45,122,230,.12); color:#124a9c;}
        .meta{color:var(--muted); margin:0 0 10px;}
        .desc{margin:0 0 18px; color:#243048;}

        .priceCard{
          margin:14px 0 20px; width:100%; max-width:320px;
          background:var(--card); border-radius:18px; padding:16px;
          box-shadow:0 10px 30px rgba(0,0,0,.06);
        }
        .priceHead{font-size:12px; color:var(--muted); text-transform:uppercase;}
        .price{font-size:34px; font-weight:800; margin-top:2px;}
        .qtyRow{display:flex; align-items:center; gap:10px; margin-top:12px;}
        .qtyRow button{height:40px; width:40px; border-radius:12px; border:1px solid rgba(0,0,0,.15);}
        .qtyRow input{height:40px; width:70px; text-align:center; border-radius:12px; border:1px solid rgba(0,0,0,.15);}
        .totalLabel{margin-top:8px; color:var(--muted);}
        .total{font-size:22px; font-weight:700;}
        .cta{
          margin-top:12px; width:100%; border:none; color:#fff; font-weight:700; padding:12px 16px; border-radius:14px; cursor:pointer;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
        }

        .twoCols{display:grid; grid-template-columns:1fr; gap:16px; margin-top:8px;}
        @media(min-width:900px){ .twoCols{grid-template-columns:1fr 1fr;} }

        .card{background:var(--card); border-radius:18px; padding:16px; box-shadow:0 10px 30px rgba(0,0,0,.06);}
        .ingList{list-style:none; padding:0; margin:0; display:grid; gap:8px;}
        .ingList li{display:flex; justify-content:space-between; border-bottom:1px solid rgba(0,0,0,.06); padding:6px 0;}
        .allergenes{margin-top:10px; color:var(--muted);}
        .nutri table{width:100%; border-collapse:collapse; font-size:15px;}
        .nutri thead th{background:#f2f6ff; text-align:left; padding:10px;}
        .nutri tbody td{padding:10px; border-top:1px solid rgba(0,0,0,.06);}
        .cons{margin:0; padding-left:18px;}
        .note{margin-top:10px; font-size:14px; color:var(--muted);}
        .foot{margin-top:24px; text-align:center; color:var(--muted);}
      `}</style>
    </>
  );
}
