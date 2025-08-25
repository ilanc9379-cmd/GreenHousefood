// pages/surgeles/pates.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PatesSurgeles() {
  const PRICE_PER_KG = 7.0;
  const STEP = 0.5;

  const [kgSeigle, setKgSeigle] = useState(1);
  const [kgComplete, setKgComplete] = useState(1);
  const [kgAromette, setKgAromette] = useState(1);

  const totalSeigle = useMemo(() => (kgSeigle * PRICE_PER_KG).toFixed(2), [kgSeigle]);
  const totalComplete = useMemo(() => (kgComplete * PRICE_PER_KG).toFixed(2), [kgComplete]);
  const totalAromette = useMemo(() => (kgAromette * PRICE_PER_KG).toFixed(2), [kgAromette]);

  const fix = (v) => Math.max(STEP, +(Math.round((v / STEP)) * STEP).toFixed(1));

  return (
    <>
      <Head>
        <title>Pâtes artisanales surgelées — GreenHouse</title>
        <meta
          name="description"
          content="Pâtes artisanales surgelées GreenHouse : seigle, complète, aromette. Œufs frais plein air. 7 €/kg. Cuisson 1 min 30."
        />
      </Head>

      <main className="page">
        <div className="wrap">
          <Link href="/surgeles" className="back">← Retour aux produits surgelés</Link>

          {/* Brand */}
          <h1 className="brand">GreenHouse</h1>
          <p className="slogan">Traiteur — Diététique &amp; Gourmand</p>

          <section className="grid">
            {/* Colonne gauche : description */}
            <article className="card left">
              <h2 className="title">
                Pâtes artisanales <span className="chip">Surgelées</span>
              </h2>

              <p className="lead">
                Pâtes maison façonnées puis surgelées rapidement pour préserver la
                texture et la qualité. <b>Œufs frais plein air</b>, farines sélectionnées.
              </p>

              {/* Ingrédients communs */}
              <div className="block">
                <h3>Ingrédients (base)</h3>
                <ul className="list">
                  <li>Farine (selon variété : seigle, blé complète, blé “aromette”)</li>
                  <li>Semoule de blé dur</li>
                  <li>Œufs plein air</li>
                  <li>Eau</li>
                </ul>
              </div>

              {/* Conservation & cuisson */}
              <div className="block">
                <h3>Conservation &amp; cuisson</h3>
                <ul className="list">
                  <li>À conserver au congélateur : <b>maximum 4 mois</b>.</li>
                  <li>Cuisson : <b>1&nbsp;min&nbsp;30</b> dans une eau bouillante salée.</li>
                  <li>Après décongélation : <b>48 h au réfrigérateur</b>. Ne pas recongeler.</li>
                </ul>
              </div>

              {/* Allergènes */}
              <div className="block">
                <h3>Allergènes</h3>
                <p>
                  <b>Gluten</b> (seigle, blé), <b>œufs</b>.
                </p>
              </div>
            </article>

            {/* Colonne droite : nutrition + commandes */}
            <aside className="right">
              {/* Valeurs nutritionnelles */}
              <div className="card nutri">
                <h3>Valeurs nutritionnelles</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Valeurs</th>
                      <th>Pour 100 g (cuit)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Énergie</td>
                      <td>~175 kcal</td>
                    </tr>
                    <tr>
                      <td>Matières grasses</td>
                      <td>~1,9 g</td>
                    </tr>
                    <tr>
                      <td>Glucides</td>
                      <td>~34 g</td>
                    </tr>
                    <tr>
                      <td>dont sucres</td>
                      <td>~1,8 g</td>
                    </tr>
                    <tr>
                      <td>Protéines</td>
                      <td>~6,4 g</td>
                    </tr>
                    <tr>
                      <td>Sel</td>
                      <td>~0,01 g</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Commande – 3 variétés */}
              <div className="grid-orders">
                {/* Seigle */}
                <div className="card order">
                  <div className="head">
                    <h4>Pâtes au seigle</h4>
                    <div className="price">
                      {PRICE_PER_KG.toFixed(2).replace(".", ",")} € <span className="unit">/ kg</span>
                    </div>
                  </div>
                  <div className="mini">Quantité</div>
                  <div className="ctrl">
                    <button onClick={() => setKgSeigle(fix(kgSeigle - STEP))}>−</button>
                    <input
                      type="number"
                      step={STEP}
                      min={STEP}
                      value={kgSeigle}
                      onChange={(e) => setKgSeigle(fix(parseFloat((e.target.value || STEP).replace(",", "."))))}
                    />
                    <button onClick={() => setKgSeigle(fix(kgSeigle + STEP))}>+</button>
                    <span className="suffix">kg</span>
                  </div>
                  <div className="total">
                    <span>Total</span>
                    <b>{totalSeigle.replace(".", ",")} €</b>
                  </div>
                  <button className="cta">Commander</button>
                </div>

                {/* Complète */}
                <div className="card order">
                  <div className="head">
                    <h4>Pâtes complètes</h4>
                    <div className="price">
                      {PRICE_PER_KG.toFixed(2).replace(".", ",")} € <span className="unit">/ kg</span>
                    </div>
                  </div>
                  <div className="mini">Quantité</div>
                  <div className="ctrl">
                    <button onClick={() => setKgComplete(fix(kgComplete - STEP))}>−</button>
                    <input
                      type="number"
                      step={STEP}
                      min={STEP}
                      value={kgComplete}
                      onChange={(e) => setKgComplete(fix(parseFloat((e.target.value || STEP).replace(",", "."))))}
                    />
                    <button onClick={() => setKgComplete(fix(kgComplete + STEP))}>+</button>
                    <span className="suffix">kg</span>
                  </div>
                  <div className="total">
                    <span>Total</span>
                    <b>{totalComplete.replace(".", ",")} €</b>
                  </div>
                  <button className="cta">Commander</button>
                </div>

                {/* Aromette */}
                <div className="card order">
                  <div className="head">
                    <h4>Pâtes “aromette”</h4>
                    <div className="price">
                      {PRICE_PER_KG.toFixed(2).replace(".", ",")} € <span className="unit">/ kg</span>
                    </div>
                  </div>
                  <div className="mini">Quantité</div>
                  <div className="ctrl">
                    <button onClick={() => setKgAromette(fix(kgAromette - STEP))}>−</button>
                    <input
                      type="number"
                      step={STEP}
                      min={STEP}
                      value={kgAromette}
                      onChange={(e) => setKgAromette(fix(parseFloat((e.target.value || STEP).replace(",", "."))))}
                    />
                    <button onClick={() => setKgAromette(fix(kgAromette + STEP))}>+</button>
                    <span className="suffix">kg</span>
                  </div>
                  <div className="total">
                    <span>Total</span>
                    <b>{totalAromette.replace(".", ",")} €</b>
                  </div>
                  <button className="cta">Commander</button>
                </div>
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

        .nutri h3 { margin: 0 0 8px; }
        table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 14px; overflow: hidden; }
        thead th { text-align: left; background: #f0f4ff; color:#26407b; padding: 10px; font-weight: 700; }
        tbody td { padding: 10px; border-top: 1px solid #eef1f7; }

        .grid-orders {
          margin-top: 18px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 640px) {
          .grid-orders { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 980px) {
          .grid-orders { grid-template-columns: 1fr; }
        }

        .order .head {
          display: flex; align-items: baseline; justify-content: space-between; gap: 8px;
          margin-bottom: 6px;
        }
        .order h4 { margin: 0; }
        .price { font-size: 22px; font-weight: 900; }
        .unit { font-size: 13px; color: var(--muted); font-weight: 700; }

        .mini { font-size: 12px; text-transform: uppercase; color: var(--muted); letter-spacing: .4px; }
        .ctrl { display: inline-flex; align-items: center; gap: 8px; background: var(--soft); border:1px solid #d7deec; border-radius: 12px; padding: 6px; }
        .ctrl button { width: 36px; height: 36px; border-radius: 10px; border:1px solid #d7deec; background:#fff; font-size: 20px; font-weight: 800; }
        .ctrl input { width: 74px; height: 36px; text-align: center; border:1px solid #d7deec; border-radius: 10px; font-weight: 800; }
        .suffix { font-weight: 800; color:#1f3b7a; }
        .total { display:flex; justify-content: space-between; align-items: center; margin: 12px 0; font-size: 18px; }
        .cta {
          width: 100%; padding: 12px 16px; border:none; border-radius: 12px; color:white; font-weight: 900;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 12px 28px rgba(45,122,230,.25);
        }
      `}</style>
    </>
  );
}
