// pages/surgeles/falafel.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function FalafelsSurgeles() {
  const pricePerKg = 10.0;
  const [kg, setKg] = useState(1);
  const total = useMemo(() => (kg * pricePerKg).toFixed(2), [kg]);
  const step = 0.5;

  const setQty = (v) => {
    const n = Math.max(step, Math.round((v / step)) * step);
    setKg(+n.toFixed(1));
  };

  return (
    <>
      <Head>
        <title>Falafels artisanaux surgelés — GreenHouse</title>
        <meta name="description" content="Falafels artisanaux surgelés — ingrédients simples, sésame, herbes fraîches. 10 €/kg. Friteuse 3 min, Airfryer 15 min." />
      </Head>

      <main className="page">
        <div className="wrap">
          <Link href="/surgeles" className="back">← Retour aux produits surgelés</Link>

          {/* Brand */}
          <h1 className="brand">GreenHouse</h1>
          <p className="slogan">Traiteur — Diététique &amp; Gourmand</p>

          <section className="grid">
            {/* Colonne gauche */}
            <article className="card left">
              <h2 className="title">
                Falafels artisanaux <span className="chip">Surgelé</span>
              </h2>

              <p className="lead">
                Des falafels faits maison, surgelés rapidement pour préserver
                nutriments et saveurs.
              </p>

              {/* Ingrédients */}
              <div className="block">
                <h3>Ingrédients</h3>
                <ul className="list">
                  <li>Pois chiches</li>
                  <li>Oignon frais</li>
                  <li>Ail frais</li>
                  <li>Persil frais, coriandre fraîche</li>
                  <li>Graines de sésame</li>
                  <li>Bicarbonate de sodium</li>
                  <li>Épices : cumin, ras el hanout</li>
                  <li>Sel, poivre</li>
                </ul>
              </div>

              {/* Conservation & cuisson */}
              <div className="block">
                <h3>Conservation &amp; cuisson</h3>
                <ul className="list">
                  <li>À conserver au congélateur : <b>maximum 4 mois</b>.</li>
                  <li>Après décongélation : <b>48 h au réfrigérateur</b>.</li>
                  <li><b>Ne pas recongeler</b> un produit décongelé.</li>
                  <li>Friteuse : <b>3 min</b>.</li>
                  <li>Airfryer : <b>15 min</b>.</li>
                </ul>
              </div>

              {/* Allergènes */}
              <div className="block">
                <h3>Allergènes</h3>
                <p>
                  <b>Sésame</b>. Traces possibles : <b>fruits à coque</b> et <b>gluten</b>.
                </p>
              </div>
            </article>

            {/* Colonne droite : nutrition + commande */}
            <aside className="card right">
              {/* Tableau nutrition */}
              <div className="nutri">
                <h3>Valeurs nutritionnelles</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Valeurs</th>
                      <th>Pour 100 g</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Énergie</td>
                      <td>184 kcal (769 kJ)</td>
                    </tr>
                    <tr>
                      <td>Matières grasses</td>
                      <td>7,4 g</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;dont acides gras saturés</td>
                      <td>0,8 g</td>
                    </tr>
                    <tr>
                      <td>Glucides</td>
                      <td>20,1 g</td>
                    </tr>
                    <tr>
                      <td>&nbsp;&nbsp;dont sucres</td>
                      <td>1,1 g</td>
                    </tr>
                    <tr>
                      <td>Fibres alimentaires</td>
                      <td>5,3 g</td>
                    </tr>
                    <tr>
                      <td>Protéines</td>
                      <td>7,6 g</td>
                    </tr>
                    <tr>
                      <td>Sel</td>
                      <td>1,1 g</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Carte commande */}
              <div className="order">
                <div className="row">
                  <div>
                    <div className="mini">Prix</div>
                    <div className="price">
                      {pricePerKg.toFixed(2).replace(".", ",")} € <span className="unit">/ kg</span>
                    </div>
                  </div>
                </div>

                <div className="qty">
                  <div className="mini">Quantité</div>
                  <div className="ctrl">
                    <button onClick={() => setQty(kg - step)} aria-label="-0,5 kg">−</button>
                    <input
                      type="number"
                      min={step}
                      step={step}
                      value={kg}
                      onChange={(e) => setQty(parseFloat((e.target.value || step).replace(",", ".")))}
                    />
                    <button onClick={() => setQty(kg + step)} aria-label="+0,5 kg">+</button>
                    <span className="suffix">kg</span>
                  </div>
                </div>

                <div className="total">
                  <span>Total</span>
                  <b>{total.replace(".", ",")} €</b>
                </div>

                <button className="cta">Commander</button>
              </div>
            </aside>
          </section>
        </div>
      </main>

      <style jsx>{`
        :root {
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --ink: #0b1020;
          --muted: #6a768a;
          --card: #fff;
          --soft: #f5f9ff;
        }
        .page {
          min-height: 100vh;
          background:
            radial-gradient(900px 600px at -10% -10%, #eafff3, transparent 60%),
            radial-gradient(900px 600px at 110% -20%, #e7f0ff, transparent 65%),
            linear-gradient(180deg, #f8fffb 0%, #f7fbff 55%, #ffffff 100%);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 16px; }
        .back { color: #1a5fd1; font-weight: 600; display:inline-block; margin-bottom:8px; }
        .brand {
          margin: 0;
          font-size: clamp(44px, 9vw, 98px);
          line-height: .9;
          letter-spacing: .5px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .slogan { margin: 6px 0 18px; color: var(--muted); font-weight: 600; }
        .grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 18px; }
        @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
        }
        .left .title { margin: 0 0 8px; }
        .chip {
          margin-left: 10px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          background: linear-gradient(90deg, rgba(26,168,123,.14), rgba(45,122,230,.14));
          border: 1px solid rgba(0,0,0,.06);
        }
        .lead { color: var(--muted); margin: 0 0 12px; }
        .block { margin-top: 12px; }
        .list { margin: 6px 0 0; padding-left: 18px; }
        .right .nutri h3 { margin: 0 0 8px; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 14px; overflow: hidden; }
        thead th { text-align: left; background: #f0f4ff; color:#26407b; padding: 10px; font-weight: 700; }
        tbody td { padding: 10px; border-top: 1px solid #eef1f7; }
        .order { margin-top: 14px; background: linear-gradient(180deg, #f7fbff, #eef6ff); border:1px solid #e2e9f7; border-radius: 14px; padding: 14px; }
        .mini { font-size: 12px; text-transform: uppercase; color: var(--muted); letter-spacing: .4px; }
        .price { font-size: 28px; font-weight: 900; }
        .unit { font-size: 14px; color: var(--muted); font-weight: 700; }
        .qty { margin-top: 8px; }
        .ctrl { display: inline-flex; align-items: center; gap: 8px; background: var(--soft); border:1px solid #d7deec; border-radius: 12px; padding: 6px; }
        .ctrl button { width: 36px; height: 36px; border-radius: 10px; border:1px solid #d7deec; background:#fff; font-size: 20px; font-weight: 800; }
        .ctrl input { width: 74px; height: 36px; text-align: center; border:1px solid #d7deec; border-radius: 10px; font-weight: 800; }
        .suffix { font-weight: 800; color:#1f3b7a; }
        .total { display:flex; justify-content: space-between; align-items: center; margin: 12px 0; font-size: 18px; }
        .cta { width: 100%; padding: 12px 16px; border:none; border-radius: 12px; color:white; font-weight: 900; background: linear-gradient(90deg, var(--brand1), var(--brand2)); box-shadow: 0 12px 28px rgba(45,122,230,.25); }
      `}</style>
    </>
  );
}
