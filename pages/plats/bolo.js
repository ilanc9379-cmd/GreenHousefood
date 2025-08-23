// pages/plat/bolo.js
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Bolo() {
  const portionGrams = 600;
  const basePrice = 9.9;

  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3;

  const kcal100 = (kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = (lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = (glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = (proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = (selPortion / (portionGrams / 100)).toFixed(1);

  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Herbes/aromates (ail, poivre, basilic)", qty: "—" },
  ];

  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const totalPrice = (basePrice * qty).toFixed(2);

  return (
    <>
      {/* FOND animé */}
      <div aria-hidden className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grain" />
      </div>

      {/* HERO */}
      <section className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="sub">Traiteur — Diététique & Gourmand</p>
        <p className="pitch">
          Des plats maison équilibrés, cuisinés en Alsace, prêts à être dégustés.
          Diète ou gourmand : à vous de choisir.
        </p>
        <Link href="/" className="homeLink">← Retour au menu</Link>
      </section>

      {/* FICHE PLAT */}
      <main className="wrap">
        <article className="card">
          <header>
            <h2 className="title">Pâtes bolognaise maison</h2>
            <div className="badges">
              <span className="badge freeze">Surgelé</span>
              <span className="badge prot">Riche en protéines</span>
            </div>
            <p className="meta">
              Portion : {portionGrams} g · prêt en 20 min <em>au four</em> ·
              8 min <em>au micro-ondes</em> · 10 min <em>à la poêle</em>
            </p>
            <p className="desc">
              Une bolognaise authentique sublimée par des pâtes au seigle
              artisanales (œufs plein air). La tendreté du bœuf, la douceur des
              carottes et la fraîcheur de la tomate s’unissent pour un plat
              complet, réconfortant et équilibré.
            </p>
          </header>

          {/* Prix */}
          <section className="panel">
            <div className="priceBlock">
              <div className="label">Prix unitaire</div>
              <div className="price">{nf.format(basePrice)}</div>
            </div>
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <div className="total">
              <div className="label">Total</div>
              <div className="price">{nf.format(totalPrice)}</div>
            </div>
          </section>

          {/* Ingrédients */}
          <section>
            <h3>Ingrédients</h3>
            <ul className="ingList">
              {ingredients.map((it) => (
                <li key={it.name}>
                  {it.name} <strong>{it.qty}</strong>
                </li>
              ))}
            </ul>
            <p className="note">Allergènes : gluten (seigle, blé), œufs.</p>
          </section>

          {/* Conservation */}
          <section className="consBlock">
            <h3>Conservation</h3>
            <ul>
              <li>Conserver au congélateur : maximum 4 mois.</li>
              <li>Après décongélation : 48h au réfrigérateur.</li>
              <li>Ne pas recongeler un produit décongelé.</li>
            </ul>
          </section>

          {/* Nutrition */}
          <section>
            <h3>Valeurs nutritionnelles</h3>
            <table className="nutri">
              <thead>
                <tr>
                  <th>Valeur</th>
                  <th>Pour 100 g</th>
                  <th>Par portion ({portionGrams} g)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td></tr>
                <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td></tr>
                <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td></tr>
                <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td></tr>
                <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td></tr>
              </tbody>
            </table>
          </section>
        </article>
      </main>

      <style jsx>{`
        :root {
          --green: #0aa64c;
          --blue: #2d7ae6;
          --mint: #12c2b5;
          --ink: #0d1220;
          --muted: #5b667a;
        }
        body { font-family: system-ui, sans-serif; margin:0; }

        /* Fond animé */
        .bg{position:fixed;inset:0;z-index:-2;
          background:linear-gradient(180deg,#f7fffc 0%,#f7fbff 40%,#fff 100%);
        }
        .blob{position:absolute;width:60vmax;height:60vmax;border-radius:50%;filter:blur(80px);opacity:.25;animation:float 18s infinite;}
        .b1{background:#0aa64c;left:-20vmax;top:-20vmax;}
        .b2{background:#2d7ae6;right:-20vmax;top:-20vmax;}
        .b3{background:#12c2b5;left:10vmax;bottom:-20vmax;}
        @keyframes float{50%{transform:translate(5vmax,-3vmax) scale(1.05)}}
        .grain{position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0 .05 .1 0'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.15;mix-blend-mode:multiply;}

        /* Hero */
        .hero{text-align:center;padding:40px 20px;}
        .brand{
          font-size:clamp(50px,12vw,120px);
          font-weight:1000;
          background:conic-gradient(from 0deg,var(--green),var(--blue),var(--mint),var(--green));
          background-size:200% 200%;
          animation:shine 8s linear infinite;
          -webkit-background-clip:text;background-clip:text;
          color:transparent;
        }
        @keyframes shine{to{background-position:200% 0}}
        .sub{font-size:20px;font-weight:700;color:#0e6b57;margin:10px 0;}
        .pitch{max-width:700px;margin:0 auto;color:var(--muted);}
        .homeLink{color:var(--blue);font-weight:600;}

        /* Carte */
        .wrap{display:grid;place-items:center;padding:20px;}
        .card{background:#fff;border-radius:24px;box-shadow:0 12px 40px rgba(0,0,0,.15);padding:24px;max-width:900px;width:100%;display:grid;gap:22px;}
        .title{font-size:32px;margin:0;}
        .badges{display:flex;gap:10px;margin:8px 0;}
        .badge{padding:6px 14px;border-radius:999px;font-size:14px;font-weight:700;}
        .freeze{background:rgba(18,194,181,.2);color:#045c55;}
        .prot{background:rgba(45,122,230,.2);color:#174cbd;}
        .meta{color:#2b3445;}
        .desc{color:var(--muted);}

        .panel{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;background:#f8fbff;padding:14px;border-radius:16px;}
        .label{font-size:12px;color:var(--muted);text-transform:uppercase;}
        .price{font-size:24px;font-weight:800;}
        .qty{display:flex;align-items:center;gap:8px;}
        .qty button{width:36px;height:36px;font-size:20px;font-weight:800;border:1px solid #ccc;border-radius:8px;background:#fff;}
        .qty input{width:60px;text-align:center;border:1px solid #ccc;border-radius:8px;}

        .ingList{list-style:none;padding:0;display:grid;gap:6px;}
        .ingList li{background:#f9fafe;padding:8px 12px;border-radius:10px;display:flex;justify-content:space-between;}
        .note{color:var(--muted);font-size:14px;}

        .consBlock{background:rgba(18,194,181,.08);padding:12px;border-radius:12px;}
        .nutri{width:100%;border-collapse:collapse;}
        .nutri th,.nutri td{padding:10px;border-top:1px solid #eee;text-align:left;}
        .nutri th{background:#f3f7ff;}
      `}</style>
    </>
  );
}
