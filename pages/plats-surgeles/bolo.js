import Link from "next/link";
import { useMemo, useState } from "react";

export default function Bolo() {
  // Données
  const portionGrams = 600; // 200 pâtes + 150 boeuf + 150 carottes + 100 sauce
  const price = 9.9;

  // Valeurs par portion (validées précédemment)
  const kcalPortion = 700;
  const fatPortion = 15.8;
  const carbsPortion = 89;
  const protPortion = 54.3;
  const saltPortion = 3.0;

  // ≈ /100 g
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1); // 116.7
  const fat100 = +(fatPortion / (portionGrams / 100)).toFixed(1);   // 2.6
  const carbs100 = +(carbsPortion / (portionGrams / 100)).toFixed(1); // 14.8
  const prot100 = +(protPortion / (portionGrams / 100)).toFixed(1); // 9.0
  const salt100 = +(saltPortion / (portionGrams / 100)).toFixed(1); // 0.5

  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  return (
    <main className="wrap">
      <div className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="subtitle">Traiteur — <strong>Diététique & Gourmand</strong></p>
        <Link className="back" href="/plats-surgeles">← Retour aux plats surgelés</Link>
      </div>

      <section className="sheet">
        <header className="head">
          <div className="badges">
            <span className="badge bd-freeze">Surgelé</span>
            <span className="badge bd-diet">Riche en protéines</span>
          </div>
          <h1 className="title">Pâtes bolognaise maison</h1>
          <p className="meta">
            <strong>Portion</strong> : 600 g · prêt en 20 min <em>au four</em> · 8 min <em>au micro-ondes</em> · 10 min <em>à la poêle</em>
          </p>
          <p className="desc">
            Une bolognaise authentique sublimée par des <strong>pâtes complètes artisanales</strong> (œufs plein air) et une sauce tomate maison.
          </p>

          <div className="priceRow">
            <div className="priceBox">
              <div>
                <div className="muted up">PRIX UNITAIRE</div>
                <div className="price">{nf.format(price)}</div>
              </div>
              <div className="qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
                />
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
              <a className="btn" href="#">Commander</a>
            </div>
          </div>
        </header>

        <div className="cols">
          <article className="panel">
            <h3>Ingrédients</h3>
            <ul className="clean">
              <li className="row"><span>Pâtes complètes artisanales</span><span>200 g</span></li>
              <li className="row"><span>Bœuf haché 5% MG</span><span>150 g</span></li>
              <li className="row"><span>Carottes</span><span>150 g</span></li>
              <li className="row"><span>Sauce tomate maison</span><span>100 g</span></li>
              <li className="row"><span>Herbes/aromates (ail, poivre, basilic)</span><span>—</span></li>
            </ul>
            <p className="note">Allergènes : <strong>gluten</strong> (blé), <strong>œufs</strong>.</p>
          </article>

          <article className="panel">
            <h3>Valeurs nutritionnelles</h3>
            <table className="vnut">
              <thead>
                <tr>
                  <th>Valeurs</th>
                  <th>Pour 100 g</th>
                  <th>Par portion</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td></tr>
                <tr><td>Matières grasses</td><td>{fat100} g</td><td>{fatPortion} g</td></tr>
                <tr><td>Glucides</td><td>{carbs100} g</td><td>{carbsPortion} g</td></tr>
                <tr><td>Protéines</td><td>{prot100} g</td><td>{protPortion} g</td></tr>
                <tr><td>Sel</td><td>{salt100} g</td><td>{saltPortion} g</td></tr>
              </tbody>
            </table>
          </article>
        </div>

        <article className="panel conso">
          <h3>Conservation & réchauffage</h3>
          <ul className="clean">
            <li className="row"><span>Conserver au congélateur</span><span>maximum 4 mois</span></li>
            <li className="row"><span>Après décongélation</span><span>48h au réfrigérateur</span></li>
            <li className="row"><span>Ne pas recongeler</span><span>un produit décongelé</span></li>
            <li className="row"><span>Réchauffage</span><span>four 20 min 150°C · MO 8 min · poêle 10 min</span></li>
          </ul>
        </article>
      </section>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
:root{
  --ink:#0b1020; --muted:#485060; --card:#fff; --ring:rgba(10,140,120,.22);
  --diet:#1aa87b; --freeze:#1b9fe6; --brand1:#0aa64c; --brand2:#2d7ae6;
}
.wrap{
  min-height:100vh;
  background:
    radial-gradient(900px 600px at 110% -20%, #e8f7ff, transparent 65%),
    radial-gradient(1000px 700px at -10% -10%, #dff8ee, transparent 60%),
    linear-gradient(180deg, #f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
  color:var(--ink);
}
.hero{max-width:1100px;margin:0 auto;padding:28px 20px 8px;}
.brand{margin:0 0 6px;font-size:clamp(42px,7vw,86px);line-height:.95;
  background:linear-gradient(90deg,var(--brand1),var(--brand2));
  -webkit-background-clip:text;background-clip:text;color:transparent;}
.subtitle{margin:0;color:var(--muted)}
.back{display:inline-block;margin:10px 0 0;color:#2d7ae6;text-decoration:none}

.sheet{max-width:1100px;margin:12px auto 40px;padding:0 20px;}
.head{background:var(--card);border-radius:18px;padding:18px;
  box-shadow:0 10px 30px rgba(0,0,0,.06),0 1px 0 rgba(255,255,255,.7) inset;}
.badges{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.badge{display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;
  font-weight:700;font-size:12px;letter-spacing:.3px;color:#0b1020;background:#eef5ff;
  border:1px solid rgba(0,0,0,.06)}
.bd-diet{background:rgba(26,168,123,.12);border-color:rgba(26,168,123,.25)}
.bd-freeze{background:rgba(27,159,230,.12);border-color:rgba(27,159,230,.25)}
h1.title{margin:4px 0 10px;font-size:clamp(26px,3.2vw,36px);line-height:1.2}
.meta{color:var(--muted);margin:0 0 6px}
.desc{margin:0;color:var(--ink)}
.muted{color:var(--muted)} .up{font-size:11px;letter-spacing:.8px}

.priceRow{display:flex;align-items:center;gap:16px;margin:14px 0 0}
.priceBox{
  background:linear-gradient(180deg,#fafcff,#f3f7ff);
  border:1px solid rgba(0,0,0,.06);
  border-radius:14px;padding:14px 16px;
  display:flex;align-items:center;gap:10px
}
.price{font-size:28px;font-weight:800}
.qty{display:flex;align-items:center;gap:8px}
.qty button{height:36px;width:36px;border-radius:10px;border:1px solid rgba(0,0,0,.15);background:#fff}
.qty input{height:36px;width:64px;text-align:center;border-radius:10px;border:1px solid rgba(0,0,0,.15)}
.btn{padding:10px 16px;border-radius:12px;border:none;color:#fff;font-weight:700;
  background:linear-gradient(90deg,var(--brand1),var(--brand2));
  box-shadow:0 10px 25px rgba(45,122,230,.22);text-decoration:none}

.cols{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:18px}
@media (max-width:900px){.cols{grid-template-columns:1fr}}

.panel{background:var(--card);border-radius:18px;padding:18px;
  box-shadow:0 10px 30px rgba(0,0,0,.06),0 1px 0 rgba(255,255,255,.7) inset;}
.panel h3{margin:0 0 10px}
ul.clean{margin:0;padding:0;list-style:none;display:grid;gap:8px}
.row{display:flex;justify-content:space-between;gap:10px;border-top:1px solid rgba(0,0,0,.06);padding:8px 0}
.row:first-child{border-top:none}

table.vnut{width:100%;border-collapse:collapse}
table.vnut th, table.vnut td{padding:10px;border-top:1px solid rgba(0,0,0,.08);text-align:left}
table.vnut thead th{background:#f0f5ff;color:#28324b}
.note{font-size:12px;color:var(--muted);margin-top:6px}

.conso{background:linear-gradient(180deg,#f7fffb,#f0fff7);border:1px solid rgba(0,0,0,.06)}
`;
