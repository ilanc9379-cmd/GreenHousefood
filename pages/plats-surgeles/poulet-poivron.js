// pages/plats-surgeles/poulet-poivron.js
import { useMemo, useState } from "react";

export default function PouletPoivron() {
  // Portion & prix
  const portionGrams = 600;   // ex : 200 pâtes + 200 poulet + 150 julienne + 50 sauce (à ajuster si besoin)
  const price = 9.9;

  // Nutrition (estimation cohérente ; tu peux ajuster si tu as tes valeurs exactes)
  const kcalPortion = 620;
  const lipidesPortion = 14;
  const glucidesPortion = 82;
  const proteinesPortion = 40;
  const selPortion = 2.5;

  // 100 g
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);

  // Qté commande
  const [qty, setQty] = useState(1);
  const nf = useMemo(() => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }), []);

  return (
    <main className="wrap">
      <header className="hero">
        <h1 className="brand">Greenhouse</h1>
        <p className="tagline">Traiteur — Diététique & Gourmand</p>
      </header>

      <section className="sheet">
        <div className="sheet__head">
          <h2>Pâtes complètes · émincé de poulet · julienne · sauce poivron maison</h2>
          <p className="meta">
            Portion : {portionGrams} g · <strong>Surgelé</strong> · prêt en <strong>20 min au four</strong>
          </p>
          <p className="conserv">
            À conserver au congélateur (max 4 mois). Après décongélation : 48 h au réfrigérateur.
          </p>
        </div>

        <div className="cols">
          {/* Prix */}
          <div className="pricecard">
            <div className="label">Prix unitaire</div>
            <div className="big">{nf.format(price)}</div>

            <div className="qty">
              <button onClick={()=>setQty(q=>Math.max(1,q-1))}>−</button>
              <input type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1, parseInt(e.target.value||"1",10)))} />
              <button onClick={()=>setQty(q=>q+1)}>+</button>
            </div>

            <div className="total">
              <span>Total ({qty} plat{qty>1?"s":""})</span>
              <strong>{nf.format(price*qty)}</strong>
            </div>

            <button className="btn">Commander</button>
          </div>

          {/* Ingrédients + Nutri */}
          <div className="panels">
            <div className="panel">
              <h3>Ingrédients</h3>
              <ul className="ing">
                <li><span>Pâtes complètes artisanales</span><b>200 g</b></li>
                <li><span>Émincé de poulet</span><b>200 g</b></li>
                <li><span>Julienne de légumes</span><b>150 g</b></li>
                <li><span>Sauce poivron maison (poivron, aromates, ail, oignon, sel, poivre)</span><b>50 g</b></li>
              </ul>
              <p className="allergenes">Allergènes : gluten (blé). Peut contenir œufs selon la pâte.</p>
            </div>

            <div className="panel">
              <h3>Valeurs nutritionnelles</h3>
              <table className="nutri">
                <thead>
                  <tr><th>Valeurs</th><th>Pour 100 g</th><th>Par portion</th></tr>
                </thead>
                <tbody>
                  <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td></tr>
                  <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td></tr>
                  <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td></tr>
                  <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td></tr>
                  <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
:root{
  --ink:#0b1020; --muted:#5a6475; --card:#fff;
  --grad1:#0aa64c; --grad2:#2d7ae6; --ring:rgba(10,140,120,.25);
  --bg1:#e8f7ff; --bg2:#dff8ee;
}
*{box-sizing:border-box}
html,body,#__next{height:100%}
.wrap{
  min-height:100vh;
  background:
    radial-gradient(1000px 700px at -10% -10%, var(--bg2), transparent 60%),
    radial-gradient(900px 600px at 110% -20%, var(--bg1), transparent 65%),
    linear-gradient(180deg,#f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
  color:var(--ink);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
}
.hero{padding:36px 20px 0; text-align:center}
.brand{
  margin:0;
  font-size:clamp(44px,6.8vw,86px);
  line-height:.95; letter-spacing:.5px;
  background:linear-gradient(90deg,var(--grad1),var(--grad2));
  -webkit-background-clip:text; background-clip:text; color:transparent;
  text-shadow:0 10px 40px rgba(45,122,230,.15);
}
.tagline{margin:.25rem 0 1rem; font-size:clamp(16px,2.2vw,20px); color:var(--muted)}

.sheet{max-width:1100px; margin:14px auto 60px; padding:0 20px;}
.sheet__head h2{margin:.4rem 0 .2rem; font-size:clamp(22px,3vw,32px)}
.meta{margin:0; color:#0f6b58; font-weight:600}
.conserv{margin:.2rem 0 1rem; color:#245b50}

.cols{display:grid; grid-template-columns:320px 1fr; gap:18px}
@media (max-width:900px){ .cols{grid-template-columns:1fr} }

.pricecard{
  background:var(--card); border-radius:18px; padding:18px;
  box-shadow:0 10px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.7) inset;
  border:1px solid rgba(0,0,0,.04);
}
.pricecard .label{font-size:12px; text-transform:uppercase; color:var(--muted)}
.pricecard .big{font-size:34px; font-weight:900; margin-top:2px}
.qty{display:flex; align-items:center; gap:8px; margin:12px 0}
.qty button{width:36px; height:36px; border-radius:12px; border:1px solid rgba(0,0,0,.12); background:#fff}
.qty input{width:70px; height:36px; text-align:center; border-radius:12px; border:1px solid rgba(0,0,0,.12)}
.total{display:flex; align-items:center; justify-content:space-between; margin:8px 0 12px}
.btn{
  width:100%; height:44px; border:none; border-radius:12px; color:#fff; font-weight:800; cursor:pointer;
  background:linear-gradient(90deg,var(--grad1),var(--grad2));
  box-shadow:0 10px 25px rgba(45,122,230,.22);
}

.panels{display:grid; grid-template-columns:1fr 1fr; gap:18px}
@media (max-width:900px){ .panels{grid-template-columns:1fr} }

.panel{
  background:var(--card); border-radius:18px; padding:18px;
  box-shadow:0 10px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.7) inset;
  border:1px solid rgba(0,0,0,.04);
}
.panel h3{margin:.2rem 0 .6rem}
.ing{list-style:none; padding:0; margin:0; display:grid; gap:8px}
.ing li{display:flex; align-items:center; justify-content:space-between; padding:10px 12px; border:1px solid rgba(0,0,0,.06); border-radius:12px; background:linear-gradient(180deg,#fafcff,#f3f7ff)}
.ing b{font-variant-numeric: tabular-nums}

.nutri{width:100%; border-collapse:collapse}
.nutri th,.nutri td{padding:10px 12px; text-align:left}
.nutri thead tr{background:#eef3ff}
.nutri tbody tr{border-top:1px solid rgba(0,0,0,.06)}
`;
