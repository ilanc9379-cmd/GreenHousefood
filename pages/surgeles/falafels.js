import { useMemo, useState } from "react";

export default function Falafel() {
  const PRIX_KG = 10.0; // € / kg
  const [kg, setKg] = useState(1);

  const total = useMemo(() => +(kg * PRIX_KG).toFixed(2), [kg]);

  const dec = () => setKg((v) => Math.max(0.5, +(v - 0.5).toFixed(1)));
  const inc = () => setKg((v) => +(v + 0.5).toFixed(1));
  const onManual = (e) => {
    const val = parseFloat(e.target.value.replace(",", "."));
    if (!isNaN(val)) setKg(Math.max(0.5, Math.min(50, Math.round(val * 2) / 2)));
  };

  return (
    <main className="container">
      {/* HERO */}
      <header className="gh-hero">
        <div className="hero-inner">
          <h1 className="brand">GreenHouse</h1>
          <p className="tag">Falafel artisanaux surgelés</p>
        </div>
      </header>

      {/* CONTENU */}
      <section className="card">
        <h2>Produit & informations</h2>
        <p className="lead">
          Falafel **artisanal**, façonné maison puis **surgelé** pour préserver la
          fraîcheur des herbes et la texture moelleuse à cœur.
        </p>

        <div className="grid-2">
          {/* Colonne gauche : ingrédients + préparation + conservation */}
          <div>
            <h3>Ingrédients</h3>
            <ul className="list">
              <li>Pois chiches (trempés & cuits)</li>
              <li><strong>Oignon frais</strong></li>
              <li><strong>Ail frais</strong></li>
              <li>Persil, coriandre</li>
              <li>Épices : cumin, paprika</li>
              <li>Sel, poivre</li>
              <li>Bicarbonate (sans levure)</li>
            </ul>

            <h3>Mode de cuisson</h3>
            <ul className="list">
              <li>Friteuse : <strong>≈ 3 min</strong> (huile chaude).</li>
              <li>Airfryer : <strong>≈ 15 min</strong> (préchauffé).</li>
            </ul>

            <h3>Conservation</h3>
            <p>
              À conserver au congélateur (<strong>-18&nbsp;°C</strong>) jusqu’à <strong>4 mois</strong>.<br />
              Après décongélation, conserver au réfrigérateur et consommer sous <strong>48 h</strong>.<br />
              Ne pas recongeler un produit décongelé.
            </p>

            <h3>Allergènes</h3>
            <p>
              Sans gluten dans la recette. <em>Traces possibles</em> selon l’environnement de production
              (présence de farines pour d’autres produits).
            </p>
          </div>

          {/* Colonne droite : nutrition + prix/commande */}
          <div>
            <h3>Valeurs nutritionnelles (≈ pour 100 g)</h3>
            <ul className="list">
              <li>Énergie : ~ 333 kcal</li>
              <li>Matières grasses : ~ 17 g (dont saturées ~ 2 g)</li>
              <li>Glucides : ~ 31 g (dont sucres ~ 2 g)</li>
              <li>Protéines : ~ 13 g</li>
              <li>Sel : ~ 0,8 g</li>
              <li>Fibres : ~ 7 g</li>
            </ul>

            <div className="price-card">
              <div className="price-head">Prix</div>
              <div className="price-row">
                <span className="price-unit">{PRIX_KG.toFixed(2).replace(".", ",")} €</span>
                <span className="price-unit-sub">/ kg</span>
              </div>

              <div className="qty">
                <button className="btn-qty" onClick={dec} aria-label="Diminuer">−</button>
                <input
                  className="qty-input"
                  type="number"
                  step="0.5"
                  min="0.5"
                  max="50"
                  value={kg}
                  onChange={onManual}
                  aria-label="Quantité en kilogrammes"
                />
                <button className="btn-qty" onClick={inc} aria-label="Augmenter">+</button>
                <span className="qty-suffix">kg</span>
              </div>

              <div className="total">
                <div>Total</div>
                <div className="total-val">{total.toFixed(2).replace(".", ",")} €</div>
              </div>

              <button className="btn-cta">Commander</button>
              <p className="help">Quantité minimale : 0,5&nbsp;kg · Pas : 0,5&nbsp;kg</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        :root{
          --ink:#0b1020;
          --muted:#5a6170;
          --card:#ffffff;
          --ring:rgba(13,171,110,.25);
          --brand1:#0aa64c;
          --brand2:#2d7ae6;
          --accent:#00b792;
          --bg1:#e9fff7;
          --bg2:#e8f1ff;
        }
        .container{
          color:var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
          margin:0; padding:0 20px 48px;
          background:
            radial-gradient(900px 600px at -10% -10%, var(--bg2), transparent 60%),
            radial-gradient(900px 600px at 110% -20%, var(--bg1), transparent 65%),
            linear-gradient(180deg, #f6fffb 0%, #f9fbff 60%, #ffffff 100%);
          min-height:100vh;
        }

        /* HERO */
        .gh-hero{
          position:relative;
          border-radius:0 0 28px 28px;
          overflow:hidden;
          margin:0 -20px 28px;
          background: radial-gradient(1200px 400px at 10% -10%, rgba(13,171,110,.25), transparent 60%),
                      radial-gradient(1200px 400px at 90% -20%, rgba(45,122,230,.25), transparent 60%),
                      linear-gradient(120deg, #0bb57a 0%, #2a7eea 100%);
        }
        .hero-inner{ max-width:1100px; margin:0 auto; padding:42px 20px; text-align:center; }
        .brand{
          margin:0;
          font-size: clamp(44px, 8vw, 92px);
          line-height: .95;
          letter-spacing:.5px;
          background: linear-gradient(90deg, #00e08d, #5aa6ff);
          -webkit-background-clip:text; background-clip:text; color:transparent;
          filter: drop-shadow(0 10px 30px rgba(0,0,0,.18));
        }
        .tag{
          color:#fff; margin:6px 0 0;
          font-size: clamp(16px, 2.2vw, 22px);
          opacity:.95; font-weight:600;
        }

        /* CARD */
        .card{
          max-width:1100px; margin:0 auto; background:var(--card);
          border-radius:18px; padding:22px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.7) inset;
        }
        .lead{ color:var(--muted); margin-top:6px; }

        .grid-2{
          display:grid; gap:20px; margin-top:16px;
          grid-template-columns: repeat(2, minmax(0,1fr));
        }
        @media (max-width: 860px){
          .grid-2{ grid-template-columns: 1fr; }
        }
        h2{ margin:0 0 6px; font-size:24px; }
        h3{ margin:18px 0 8px; font-size:18px; }
        .list{ padding-left:18px; margin:0; }
        .list li{ margin:6px 0; }

        /* PRICE CARD */
        .price-card{
          background: linear-gradient(180deg, #ffffff, #f6fbff);
          border:1px solid rgba(0,0,0,.06);
          border-radius:16px; padding:16px;
          box-shadow: 0 8px 24px rgba(45,122,230,.12);
        }
        .price-head{ font-size:12px; text-transform:uppercase; letter-spacing:.3px; color:var(--muted); margin-bottom:4px; }
        .price-row{ display:flex; align-items:flex-end; gap:8px; }
        .price-unit{ font-size:28px; font-weight:800; }
        .price-unit-sub{ color:var(--muted); margin-bottom:4px; }

        .qty{
          display:flex; align-items:center; gap:8px;
          margin-top:14px;
        }
        .btn-qty{
          width:40px; height:40px; border-radius:12px; border:1px solid rgba(0,0,0,.12);
          background:#fff; cursor:pointer; font-size:20px; font-weight:700;
          transition: transform .1s ease, box-shadow .1s ease;
        }
        .btn-qty:active{ transform: translateY(1px) scale(.98); }
        .qty-input{
          width:90px; height:40px; border-radius:12px; border:1px solid rgba(0,0,0,.12);
          text-align:center; font-size:16px;
          box-shadow: 0 6px 16px rgba(0,0,0,.04) inset;
        }
        .qty-suffix{ color:var(--muted); font-weight:600; }

        .total{
          margin-top:10px; display:flex; align-items:center; justify-content:space-between;
          padding:10px 12px; border:1px dashed rgba(0,0,0,.12); border-radius:12px; background:#fff;
        }
        .total-val{ font-size:22px; font-weight:800; }

        .btn-cta{
          width:100%; margin-top:14px; height:46px; border:none; border-radius:14px; color:#fff; font-weight:800; cursor:pointer;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 10px 25px rgba(45,122,230,.22);
        }
        .btn-cta:active{ transform: translateY(1px); }
        .help{ margin-top:8px; color:var(--muted); font-size:12px; text-align:center; }

        /* FOOT */
        .foot{ text-align:center; color:var(--muted); padding:28px 8px 10px; }
      `}</style>
    </main>
  );
}
