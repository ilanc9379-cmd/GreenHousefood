// pages/plats-surgeles/boeuf.js
import Head from "next/head";
import { useMemo, useState } from "react";

export default function BoeufCarottesPuree() {
  const NOM = "Bœuf carottes & purée de pomme de terre";
  const PRIX = 9.9;
  const POIDS = 500; // 200 bœuf, 150 carottes, 150 purée
  // Estimations cohérentes (à ajuster si besoin)
  const KCAL = 610, P = 48, G = 55, L = 18, SEL = 2.2, SUCRES = 9, AGS = +(L * 0.35).toFixed(1);

  const kcal100 = +(KCAL / (POIDS / 100)).toFixed(1);
  const p100 = +(P / (POIDS / 100)).toFixed(1);
  const g100 = +(G / (POIDS / 100)).toFixed(1);
  const l100 = +(L / (POIDS / 100)).toFixed(1);
  const sel100 = +(SEL / (POIDS / 100)).toFixed(1);

  const [qty, setQty] = useState(1);
  const nf = useMemo(() => new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}),[]);
  const totalPrice = nf.format(PRIX * qty);

  return (
    <>
      <Head><title>{NOM} — GreenHouse</title></Head>
      <main className="wrap">
        <header className="hero">
          <h1 className="brand">GreenHouse</h1>
          <p className="slogan">Traiteur — Diététique & Gourmand</p>
          <a href="/plats-surgeles" className="back">← Retour aux plats surgelés</a>
        </header>

        <article className="card">
          <div className="title-line">
            <h2 className="title">{NOM}</h2>
            <div className="badges">
              <span className="bd bd-blue">Surgelé</span>
              <span className="bd bd-green">Diète</span>
            </div>
          </div>

          <p className="lead">
            Bœuf bourguignon maigre mijoté, carottes fondantes, <strong>purée maison</strong> de pommes de terre.
            Assaisonné aux aromates (ail, oignon, herbes, sel, poivre).
          </p>

          <section className="grid2">
            <div className="panel">
              <h3>Prix</h3>
              <div className="price">{nf.format(PRIX)}</div>
              <div className="qty">
                <button onClick={()=>setQty(Math.max(1, qty-1))}>−</button>
                <input type="number" min={1} value={qty} onChange={e=>setQty(Math.max(1,parseInt(e.target.value||"1",10)))} />
                <button onClick={()=>setQty(qty+1)}>+</button>
              </div>
              <div className="total">Total ({qty} plat{qty>1?"s":""}) : <b>{totalPrice}</b></div>

              <h4>Ingrédients</h4>
              <ul className="ing">
                <li>Bœuf bourguignon (morceaux maigres) — 200 g</li>
                <li>Carottes — 150 g</li>
                <li>Purée de pommes de terre — 150 g</li>
                <li>Aromates : ail, oignon, sel, poivre, herbes</li>
              </ul>
              <p className="muted">Allergènes : —</p>
            </div>

            <div className="panel">
              <h3>Valeurs nutritionnelles</h3>
              <table className="nutri">
                <thead><tr><th>Valeurs</th><th>Pour 100 g</th><th>Par portion ({POIDS} g)</th></tr></thead>
                <tbody>
                  <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{KCAL} kcal</td></tr>
                  <tr><td>Matières grasses</td><td>{l100} g</td><td>{L} g</td></tr>
                  <tr><td>Glucides</td><td>{g100} g</td><td>{G} g</td></tr>
                  <tr><td>Protéines</td><td>{p100} g</td><td>{P} g</td></tr>
                  <tr><td>Sel</td><td>{sel100} g</td><td>{SEL} g</td></tr>
                </tbody>
              </table>

              <h4>Cuisson</h4>
              <ul className="list">
                <li>Four <b>150 °C</b> : <b>20 min</b></li>
                <li>Micro-ondes : <b>8 min</b></li>
                <li>Poêle : <b>10 min</b></li>
              </ul>

              <h4>Conservation</h4>
              <ul className="list">
                <li>Conserver au <b>congélateur</b> : maximum <b>4 mois</b></li>
                <li>Après décongélation : <b>48 h</b> au réfrigérateur</li>
                <li>Ne pas recongeler</li>
              </ul>

              <p className="note">
                La surgélation préserve fraîcheur et qualités nutritionnelles pour un plat prêt à réchauffer, sans compromis.
              </p>
            </div>
          </section>
        </article>
      </main>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = `
/* mêmes styles que les autres pages */
.wrap{padding:24px;background:radial-gradient(1200px 600px at -10% -10%,#e9fff7,transparent 60%),radial-gradient(1000px 700px at 110% -20%,#e8f3ff,transparent 65%),#f9fdfb}
.hero{max-width:1100px;margin:0 auto 10px}
.brand{font-size:clamp(42px,7vw,88px);margin:0;background:linear-gradient(90deg,#10b981,#2563eb);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:.95}
.slogan{margin:6px 0 12px;color:#52606d}
.back{color:#2563eb;text-decoration:none}
.card{max-width:1100px;margin:10px auto 40px;background:white;border-radius:18px;padding:18px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
.title-line{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.title{margin:0;font-size:clamp(24px,3.2vw,36px)}
.badges{display:flex;gap:8px}
.bd{padding:6px 10px;border-radius:999px;font-weight:700;font-size:12px}
.bd-blue{background:#e0f2ff;border:1px solid #bee3ff}
.bd-green{background:#e8fff6;border:1px solid #bdf5de}
.lead{color:#2a3340}
.grid2{display:grid;grid-template-columns:1fr 1.2fr;gap:16px;margin-top:12px}
@media(max-width:900px){.grid2{grid-template-columns:1fr}}
.panel{background:linear-gradient(180deg,#fbfdff,#f6faff);border:1px solid #eef2f7;border-radius:14px;padding:14px}
.price{font-size:26px;font-weight:800;margin-bottom:8px}
.qty{display:flex;align-items:center;gap:8px}
.qty button{width:38px;height:38px;border-radius:10px;border:1px solid #d7dce2;background:#fff}
.qty input{width:70px;height:38px;text-align:center;border-radius:10px;border:1px solid #d7dce2}
.total{margin-top:8px}
h3{margin:8px 0 10px}
h4{margin:14px 0 6px}
.ing{margin:6px 0 0 18px}
.muted{color:#6b7280}
.nutri{width:100%;border-collapse:collapse;font-size:14px}
.nutri th,.nutri td{border-top:1px solid #e8ecf2;padding:8px 10px}
.nutri thead th{background:#f1f5fb}
.sub{color:#64748b}
.list{margin:6px 0 0 18px}
.note{margin-top:8px;color:#475569}
`;
