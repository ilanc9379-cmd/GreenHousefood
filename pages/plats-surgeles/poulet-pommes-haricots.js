// pages/plats-surgeles/poulet-pommes-haricots.js
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PouletPommesHaricots() {
  const portion = 500; // g
  const price = 9.9;

  const nPortion = { kcal: 560, fat: 20, carbs: 35, protein: 45, salt: 2 };
  const n100 = {
    kcal: Math.round(nPortion.kcal / (portion / 100)),
    fat: +(nPortion.fat / (portion / 100)).toFixed(1),
    carbs: +(nPortion.carbs / (portion / 100)).toFixed(1),
    protein: +(nPortion.protein / (portion / 100)).toFixed(1),
    salt: +(nPortion.salt / (portion / 100)).toFixed(1),
  };

  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  return (
    <main className="page">
      {/* Sidebar */}
      <aside className="side">
        <Link href="/plats-surgeles">
          <a className="back">← Retour aux plats surgelés</a>
        </Link>
        <h1 className="brand">Greenhouse</h1>
        <p className="tag">Traiteur — Diététique &amp; Gourmand</p>
      </aside>

      {/* Contenu */}
      <section className="content">
        <header className="header">
          <h2 className="title">
            Cuisse de poulet rôtie, pommes de terre &amp; haricots verts
          </h2>
          <p className="meta">
            <span className="pill pill-freeze">Surgelé</span>
            <span className="pill">Diète</span>
          </p>
          <p className="desc">
            Portion : <strong>{portion} g</strong> · prêt en <strong>20 min</strong> au <em>four</em> ·{" "}
            <strong>8 min</strong> au <em>micro-ondes</em> · <strong>10 min</strong> à la <em>poêle</em>.{" "}
            À conserver au congélateur (max 4 mois). Après décongélation : 48h au réfrigérateur.
          </p>

          <div className="heroImgWrap">
            <img
              src="/poulet-pommes-haricots.png"
              alt="Cuisse de poulet rôtie avec pommes de terre et haricots verts"
              className="heroImg"
            />
          </div>

          <p className="blurb">
            Une cuisse de <strong>poulet rôtie</strong> savoureuse, accompagnée
            de <strong>pommes de terre fondantes</strong> et de{" "}
            <strong>haricots verts</strong> croquants. Un repas simple,
            équilibré et réconfortant, idéal pour un déjeuner ou un dîner sain.
          </p>
        </header>

        <div className="grid">
          {/* Ingrédients */}
          <section className="card">
            <h3>Ingrédients</h3>
            <ul className="ing">
              <li><b>250 g</b> — Cuisse de poulet rôtie</li>
              <li><b>150 g</b> — Pommes de terre</li>
              <li><b>150 g</b> — Haricots verts</li>
              <li><b>5 g</b> — Huile d’olive</li>
              <li>Oignon, ail, herbes de Provence, sel, poivre</li>
            </ul>
            <p className="muted">Allergènes : aucun.</p>
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
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
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
            La surgélation préserve fraîcheur et qualités nutritionnelles : le
            refroidissement rapide évite la dégradation des nutriments et garde
            la texture.
          </p>
        </section>
      </section>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `/* mêmes styles que tes autres plats */`;
`;
