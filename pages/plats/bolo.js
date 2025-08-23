// pages/plat/bolo.js
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Bolo() {
  // -------- Données plat (surgelé) --------
  const portionGrams = 600;
  const basePrice = 9.9;

  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3;

  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);

  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Herbes/aromates (ail, poivre, basilic)", qty: "—" }, // pas “au goût”
  ];

  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const totalPrice = useMemo(() => +(basePrice * qty).toFixed(2), [qty]);

  return (
    <>
      {/* FOND ANIMÉ */}
      <div aria-hidden className="bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="grain" />
      </div>

      {/* HERO */}
      <section className="hero">
        <h1 className="brand" aria-label="GreenHouse">GreenHouse</h1>
        <p className="sub">Traiteur — Diététique & Gourmand</p>
        <p className="pitch">
          Des plats maison bons et équilibrés, cuisinés en Alsace, prêts à être dégustés.
          Diète ou gourmand : à vous de choisir.
        </p>
        <Link href="/" className="homeLink">← Retour au menu</Link>
      </section>

      {/* FICHE PLAT */}
      <main className="wrap">
        <article className="card fancy">
          <div className="cardInner">
            <header className="head">
              <h2 className="title">Pâtes bolognaise maison</h2>
              <div className="badges">
                <span className="badge badge-freeze" title="Produit surgelé">Surgelé</span>
                <span className="badge badge-prot">Riche en protéines</span>
              </div>
              <p className="meta">
                <strong>Portion :</strong> {portionGrams} g · prêt en 20 min <em>au four</em> · 8 min <em>au micro-ondes</em> · 10 min <em>à la poêle</em>
              </p>
              <p className="desc">
                Une bolognaise authentique sublimée par des pâtes au seigle artisanales (œufs plein
                air). La tendreté du bœuf, la douceur des carottes et la fraîcheur de la tomate
                s’unissent pour un plat complet, réconfortant et équilibré.
              </p>
            </header>

            {/* Prix & quantité */}
            <section className="panel">
              <div className="panelCol">
                <div className="label">Prix unitaire</div>
                <div className="price">{nf.format(basePrice)}</div>
              </div>
              <div className="panelCol qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer">−</button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1")))}
                  aria-label="Quantité"
                />
                <button onClick={() => setQty((q) => q + 1)} aria-label="Augmenter">+</button>
              </div>
              <div className="panelCol total">
                <div className="label">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
                <div className="totalPrice">{nf.format(totalPrice)}</div>
              </div>
            </section>

            {/* Ingrédients */}
            <section className="section">
              <h3>Ingrédients</h3>
              <ul className="ingList">
                {ingredients.map((it) => (
                  <li key={it.name}>
                    <span>{it.name}</span>
                    <strong>{it.qty}</strong>
                  </li>
                ))}
              </ul>
              <p className="note">Allergènes : gluten (seigle, blé), œufs.</p>
            </section>

            {/* Conservation (surgelé) */}
            <section className="section stored">
              <h3>Conservation</h3>
              <ul className="cons">
                <li>Conserver <strong>au congélateur</strong> : maximum <strong>4 mois</strong>.</li>
                <li>Après décongélation : <strong>48h au réfrigérateur</strong>.</li>
                <li><strong>Ne pas recongeler</strong> un produit décongelé.</li>
              </ul>
            </section>

            {/* Valeurs nutritionnelles */}
            <section className="section">
              <h3>Valeurs nutritionnelles</h3>
              <div className="tableWrap">
                <table className="nutri">
                  <thead>
                    <tr>
                      <th>Valeur</th>
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
                    <tr>
                      <td>Glucides</td>
                      <td>{glucides100} g</td>
                      <td>{glucidesPortion} g</td>
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
            </section>
          </div>
        </article>
      </main>

      <style jsx>{`
        :root {
          --green: #0aa64c;
          --blue: #2d7ae6;
          --mint: #12c2b5;
          --ink: #0d1220;
          --muted: #5b667a;
          --card: #ffffff;
        }

        /* --- Fond animé : blobs + grain + halo --- */
        .bg {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: -2;
          background:
            radial-gradient(1200px 700px at -10% -20%, rgba(18,194,181,.35), transparent 65%),
            radial-gradient(900px 600px at 110% -10%, rgba(45,122,230,.35), transparent 60%),
            radial-gradient(1200px 800px at 50% 120%, rgba(10,166,76,.35), transparent 65%),
            linear-gradient(180deg, #f7fffc 0%, #f7fbff 35%, #ffffff 100%);
        }
        .blob {
          position: absolute;
          width: 55vmax; height: 55vmax;
          border-radius: 50%;
          filter: blur(60px);
          opacity: .28;
          animation: float 18s ease-in-out infinite;
          mix-blend-mode: multiply;
        }
        .b1 { background: radial-gradient(circle at 30% 30%, #6be89a, #1ea860); left: -15vmax; top: -10vmax; animation-delay: 0s;}
        .b2 { background: radial-gradient(circle at 70% 30%, #80a6ff, #2d7ae6); right: -18vmax; top: -12vmax; animation-delay: 3s;}
        .b3 { background: radial-gradient(circle at 50% 60%, #7ef2ec, #12c2b5); left: 10vmax; bottom: -18vmax; animation-delay: 6s;}
        @keyframes float {
          0%,100% { transform: translate(0,0) scale(1);}
          50%     { transform: translate(2vmax,-2vmax) scale(1.06);}
        }
        .grain {
          position: absolute; inset: -200px;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 .05 .06 .07 .08 .09 .1 .08 .06 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
          opacity: .25; pointer-events: none; mix-blend-mode: multiply;
          animation: grain 2.5s steps(6) infinite;
        }
        @keyframes grain { 0% {transform: translate(0,0);} 100% {transform: translate(-160px,160px);} }

        /* --- Hero --- */
        .hero {
          padding: clamp(24px, 5vw, 48px) 20px 16px;
          text-align: center;
        }
        .brand {
          margin: 0;
          font-size: clamp(54px, 12vw, 128px);
          font-weight: 1000;
          letter-spacing: .5px;
          line-height: .9;
          background: conic-gradient(from 0deg, var(--green), var(--blue), var(--mint), var(--green));
          background-size: 200% 200%;
          animation: shine 8s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent; -webkit-text-fill-color: transparent;
          text-shadow: 0 10px 30px rgba(0,0,0,.06);
        }
        @keyframes shine { to { background-position: 200% 0; } }
        .sub {
          color: #0e6b57; font-weight: 800; margin: 8px 0 6px;
          font-size: clamp(16px, 2.5vw, 22px);
        }
        .pitch {
          max-width: 780px; margin: 0 auto; color: var(--muted);
        }
        .homeLink { display: inline-block; margin-top: 10px; color: var(--blue); font-weight: 600; }

        /* --- Carte --- */
        .wrap { padding: 24px 16px 64px; display: grid; place-items: center; }
        .card {
          position: relative;
          max-width: 980px; width: 100%;
          border-radius: 28px;
        }
        /* cadre dégradé animé */
        .fancy::before {
          content: "";
          position: absolute; inset: -2px;
          border-radius: 30px;
          background: linear-gradient(95deg, rgba(10,166,76,.6), rgba(45,122,230,.6), rgba(18,194,181,.6));
          filter: blur(8px); z-index: -1; opacity: .7;
          animation: borderflow 8s linear infinite;
          background-size: 300% 300%;
        }
        @keyframes borderflow { to { background-position: 300% 0; } }
        .cardInner {
          background: var(--card);
          border-radius: 28px;
          padding: clamp(18px, 3vw, 28px);
          box-shadow:
            0 20px 60px rgba(0,0,0,.15),
            0 1px 0 rgba(255,255,255,.6) inset;
        }

        .head { display: grid; gap: 8px; }
        .title { margin: 0; font-size: clamp(26px, 4.6vw, 44px); line-height: 1.1; color: var(--ink); }
        .badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px; }
        .badge {
          padding: 6px 12px; border-radius: 999px; font-weight: 800; font-size: 13px;
          border: 1px solid rgba(0,0,0,.06);
        }
        .badge-freeze { background: rgba(18,194,181,.18); color: #045c55; }
        .badge-prot  { background: rgba(45,122,230,.14); color: #174cbd; }
        .meta { color: #2b3445; margin: 6px 0 2px; }
        .desc { color: var(--muted); margin: 0; }

        .panel {
          display: grid; gap: 14px; grid-template-columns: 1fr auto 1fr;
          align-items: center; margin: 18px 0 10px;
          background: linear-gradient(180deg,#f8fbff,#f3fff9);
          border: 1px solid rgba(0,0,0,.06); border-radius: 18px; padding: 14px;
        }
        .label { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: .08em; }
        .price { font-weight: 900; font-size: clamp(22px, 4vw, 32px); }
        .qty { display: flex; align-items: center; gap: 10px; }
        .qty button {
          width: 40px; height: 40px; border-radius: 12px; border: 1px solid #e2e6ef; background: #fff;
          font-size: 22px; font-weight: 700; cursor: pointer;
        }
        .qty input {
          width: 70px; height: 40px; text-align: center; border-radius: 12px; border: 1px solid #e2e6ef;
          font-weight: 700;
        }
        .total { text-align: right; }
        .totalPrice { font-weight: 800; font-size: clamp(18px, 3.4vw, 26px); }

        .section { margin-top: 18px; }
        .section h3 { margin: 0 0 10px; font-size: 18px; color: var(--ink); }
        .ingList { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
        .ingList li {
          background: #fbfcff; border: 1px solid #edf1fa; border-radius: 12px; padding: 10px 12px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .note { color: var(--muted); margin-top: 8px; }

        .stored {
          background: linear-gradient(180deg, rgba(18,194,181,.08), rgba(18,194,181,.02));
          border-radius: 16px; padding: 12px; border: 1px solid rgba(18,194,181,.2);
        }
        .cons { margin: 0; padding-left: 18px; color: #103b37; }

        .tableWrap { overflow-x: auto; border-radius: 14px; border: 1px solid #edf1fa; }
        table.nutri { width: 100%; border-collapse: collapse; background: #fff; }
        .nutri th, .nutri td { padding: 10px 12px; border-top: 1px solid #f0f3fa; }
        .nutri thead th { background: #f6f9ff; text-align: left; color: #2c3d64; }

        @media (max-width: 760px) {
          .panel { grid-template-columns: 1fr; text-align: center; }
          .total { text-align: center; }
        }
      `}</style>
    </>
  );
}
