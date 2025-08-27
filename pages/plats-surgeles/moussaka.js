// pages/plats-surgeles/moussaka.js
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Moussaka() {
  const portion = 600; // g
  const price = 9.9;

  // ≈ valeurs pour une portion (600 g)
  const nPortion = {
    kcal: 900,
    fat: 30,
    carbs: 95,
    protein: 55,
    salt: 2.0,
  };
  const n100 = {
    kcal: (nPortion.kcal / (portion / 100)).toFixed(1),
    fat: (nPortion.fat / (portion / 100)).toFixed(1),
    carbs: (nPortion.carbs / (portion / 100)).toFixed(1),
    protein: (nPortion.protein / (portion / 100)).toFixed(1),
    salt: (nPortion.salt / (portion / 100)).toFixed(1),
  };

  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  return (
    <main className="page">
      <aside className="side">
        <Link href="/plats-surgeles" className="back">
          ← Retour aux plats surgelés
        </Link>
        <h1 className="brand">Greenhouse</h1>
        <p className="tag">Traiteur — Diététique &amp; Gourmand</p>
      </aside>

      <section className="content">
        <header className="header">
          <h2 className="title">Moussaka revisitée (aubergine, riz complet, bœuf 5%, tomate)</h2>
          <p className="meta">
            <span className="pill pill-freeze">Surgelé</span>
            <span className="pill">Diète</span>
          </p>
          <p className="desc">
            Portion : <strong>{portion} g</strong> · prêt en <strong>20 min</strong> au <em>four</em> ·{" "}
            <strong>8 min</strong> au <em>micro-ondes</em> · <strong>10 min</strong> à la <em>poêle</em>.{" "}
            À conserver au congélateur (max 4 mois). Après décongélation : 48h au réfrigérateur.
          </p>
          <p className="blurb">
            L’esprit de la moussaka, en version <em>équilibrée</em> : couches d’<strong>aubergine</strong>,
            bœuf 5% fondant, <strong>riz complet</strong> pour la tenue, tomate parfumée, une touche de
            fromage râpé — relevés de paprika et d’herbes de Provence. Confort et saveurs, sans compromis.
          </p>
        </header>

        <div className="grid">
          {/* Ingrédients */}
          <section className="card">
            <h3>Ingrédients</h3>
            <ul className="ing">
              <li><b>150 g</b> — Aubergine</li>
              <li><b>100 g</b> — Tomates concassées</li>
              <li><b>150 g</b> — Viande hachée 5% MG</li>
              <li><b>150 g</b> — Riz complet cuit</li>
              <li><b>50 g</b> — Fromage râpé</li>
              <li><b>5 g</b> — Huile d’olive</li>
              <li>Oignon, ail, <em>paprika</em>, herbes de Provence, sel</li>
            </ul>
            <p className="muted">Allergènes : <b>lait</b>.</p>
          </section>

          {/* Valeurs nutritionnelles */}
          <section className="card">
            <h3>Valeurs nutritionnelles</h3>
            <div className="table">
              <div className="thead">
                <div>Valeurs</div>
                <div>Pour 100 g</div>
                <div>Par portion</div>
              </div>
              <div className="row"><div>Énergie</div><div>{n100.kcal} kcal</div><div>{nPortion.kcal} kcal</div></div>
              <div className="row"><div>Matières grasses</div><div>{n100.fat} g</div><div>{nPortion.fat} g</div></div>
              <div className="row"><div>Glucides</div><div>{n100.carbs} g</div><div>{nPortion.carbs} g</div></div>
              <div className="row"><div>Protéines</div><div>{n100.protein} g</div><div>{nPortion.protein} g</div></div>
              <div className="row"><div>Sel</div><div>{n100.salt} g</div><div>{nPortion.salt} g</div></div>
            </div>
          </section>

          {/* Prix */}
          <section className="card price">
            <div className="label">Prix unitaire</div>
            <div className="big">{nf.format(price)}</div>
            <div className="qty">
              <button aria-label="moins" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                }
              />
              <button aria-label="plus" onClick={() => setQty(q => q + 1)}>+</button>
            </div>
            <div className="label">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="total">{nf.format(price * qty)}</div>
            <button className="btn">Commander</button>
          </section>
        </div>

        {/* Cuisson & Conservation */}
        <section className="card foot">
          <h3>Cuisson</h3>
          <ul>
            <li>Four <b>150 °C</b> : <b>20 min</b></li>
            <li>Micro-ondes : <b>8 min</b></li>
            <li>Poêle : <b>10 min</b></li>
          </ul>
          <h3 style={{ marginTop: 12 }}>Conservation</h3>
          <ul>
            <li>Conserver au congélateur : <b>max 4 mois</b></li>
            <li>Après décongélation : <b>48h</b> au réfrigérateur</li>
            <li>Ne pas recongeler un produit décongelé</li>
          </ul>
          <p className="note">
            La surgélation préserve fraîcheur et qualités nutritionnelles : refroidi rapidement, le plat
            garde ses textures et ses saveurs, prêt quand vous l’êtes.
          </p>
        </section>
      </section>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
.page{display:grid;grid-template-columns:260px 1fr;min-height:100vh;background:linear-gradient(180deg,#eaf7ff,#f7fffb);}
.side{padding:24px 18px;background:linear-gradient(180deg,#dff1ff,#e6fff7);overflow:visible}
.back{display:inline-block;margin-bottom:12px;color:#0b6;text-decoration:none}
.brand{margin:0;font-size:46px;line-height:1;white-space:nowrap;padding-right:6px;
  background:linear-gradient(90deg,#0aa64c,#2d7ae6);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:900}
.tag{color:#246}
.content{padding:24px;max-width:1100px}
.header{margin-bottom:10px}
.title{margin:0 0 6px;font-size:30px}
.meta{display:flex;gap:8px;margin:6px 0 8px}
.pill{padding:4px 10px;border-radius:999px;background:#eef5ff;border:1px solid rgba(0,0,0,.06);font-weight:700;font-size:12px}
.pill-freeze{background:rgba(26,168,123,.12);border-color:rgba(26,168,123,.25)}
.desc{margin:0 0 8px;color:#345}
.blurb{margin:0 0 8px;color:#123;font-weight:500}
.grid{display:grid;grid-template-columns:2fr 2fr 1.2fr;gap:16px}
.card{background:#fff;border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.06);padding:16px}
.ing{margin:8px 0 10px;padding-left:16px}
.ing li{margin:6px 0}
.muted{color:#667}
.table{display:grid;gap:6px}
.thead,.row{display:grid;grid-template-columns:1.2fr 1fr 1fr;align-items:center}
.thead{font-weight:700;background:#f3f7ff;border-radius:10px;padding:8px}
.row{padding:6px 8px;border-bottom:1px solid #f0f2f7}
.price .label{color:#678;margin-top:2px}
.big{font-size:32px;font-weight:800}
.qty{display:flex;align-items:center;gap:8px;margin:10px 0}
.qty button{width:36px;height:36px;border-radius:10px;border:1px solid #ccd}
.qty input{width:64px;height:36px;text-align:center;border-radius:10px;border:1px solid #ccd}
.total{font-size:22px;font-weight:800;margin-bottom:8px}
.btn{width:100%;border:none;border-radius:12px;padding:12px 14px;color:#fff;font-weight:800;background:linear-gradient(90deg,#0aa64c,#2d7ae6)}
.foot .note{margin-top:10px;color:#456}
@media(max-width:950px){.page{grid-template-columns:1fr}.side{position:sticky;top:0}.grid{grid-template-columns:1fr}}
`;
