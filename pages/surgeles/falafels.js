// pages/surgeles/falafel.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Falafel() {
  // ---- Prix & quantité ----
  const pricePerKg = 10.0; // €/kg
  const [kg, setKg] = useState(1); // quantité en kg (pas de 0.5)
  const total = useMemo(() => +(kg * pricePerKg).toFixed(2), [kg]);

  const change = (delta) => {
    setKg((q) => Math.max(0.5, +(q + delta).toFixed(1)));
  };

  return (
    <>
      <Head>
        <title>Falafels artisanaux surgelés — GreenHouse</title>
        <meta
          name="description"
          content="Falafels artisanaux surgelés GreenHouse — ingrédients simples, herbes fraîches, riche en fibres. 10 €/kg."
        />
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <div className="hero-inner">
            <Link href="/plats-surgeles" className="back">
              ← Retour aux plats surgelés
            </Link>

            <h1 className="brand">GreenHouse</h1>

            <div className="title-row">
              <h2>Falafels artisanaux</h2>
              <span className="badge">SURGELÉ</span>
            </div>

            <p className="sub">
              Pois chiches, herbes fraîches & épices – surgelé rapidement pour
              préserver goût et nutriments.
            </p>
          </div>

          {/* fond décoratif */}
          <div className="bubbles">
            <span />
            <span />
            <span />
          </div>
        </header>

        {/* CONTENU EN DEUX COLONNES */}
        <section className="wrap grid">
          {/* Colonne gauche : infos */}
          <article className="card info">
            <h3>Ingrédients</h3>
            <ul className="list">
              <li>Pois chiches</li>
              <li>Oignon frais</li>
              <li>Ail frais</li>
              <li>Persil, coriandre</li>
              <li>Sel, poivre</li>
              <li>Épices (cumin, paprika)</li>
              <li>Huile de tournesol (cuisson)</li>
            </ul>

            <div className="split">
              <div>
                <h4>Allergènes</h4>
                <p>Traces possibles : fruits à coque, gluten.</p>
              </div>
              <div className="nutri">
                <h4>Valeurs nutritionnelles (≈/100 g)</h4>
                <ul className="nutri-list">
                  <li>
                    <span>Énergie</span>
                    <strong>~270 kcal</strong>
                  </li>
                  <li>
                    <span>Glucides</span>
                    <strong>~27 g</strong>
                  </li>
                  <li>
                    <span>Protéines</span>
                    <strong>~9 g</strong>
                  </li>
                  <li>
                    <span>Lipides</span>
                    <strong>~12 g</strong>
                  </li>
                  <li>
                    <span>Fibres</span>
                    <strong>~6 g</strong>
                  </li>
                  <li>
                    <span>Sel</span>
                    <strong>~1,1 g</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="conservation">
              <h4>Conservation & cuisson</h4>
              <ul>
                <li>À conserver au congélateur jusqu’à 4 mois.</li>
                <li>Après décongélation : réfrigérateur, à consommer sous 48 h.</li>
                <li>Ne pas recongeler un produit décongelé.</li>
                <li>Friteuse : 3 min.</li>
                <li>Airfryer : 15 min.</li>
              </ul>
            </div>
          </article>

          {/* Colonne droite : carte commande */}
          <aside className="card order">
            <div className="price-row">
              <div>
                <div className="label">Prix</div>
                <div className="price">
                  {pricePerKg.toFixed(2).replace(".", ",")} €{" "}
                  <span className="unit">/ kg</span>
                </div>
              </div>
            </div>

            <div className="qty">
              <div className="label">Quantité</div>
              <div className="qty-ctrl">
                <button onClick={() => change(-0.5)} aria-label="- 0,5 kg">
                  −
                </button>
                <input
                  type="number"
                  step="0.5"
                  min="0.5"
                  value={kg}
                  onChange={(e) =>
                    setKg(
                      Math.max(
                        0.5,
                        parseFloat((e.target.value || "0.5").replace(",", ".")) ||
                          0.5
                      )
                    )
                  }
                />
                <button onClick={() => change(0.5)} aria-label="+ 0,5 kg">
                  +
                </button>
                <span className="kg">kg</span>
              </div>
            </div>

            <div className="total">
              <span>Total</span>
              <strong>{total.toFixed(2).replace(".", ",")} €</strong>
            </div>

            <button className="btn">Commander</button>

            <p className="note">
              Besoin d’une quantité spécifique ?{" "}
              <a href="mailto:contact@greenhouse.example">Contacte-nous</a>.
            </p>
          </aside>
        </section>

        <footer className="foot">
          © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
        </footer>
      </main>

      <style jsx>{`
        :root {
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --bg1: #e8fff3;
          --bg2: #e7f1ff;
          --ink: #0b1020;
          --muted: #657084;
          --ring: rgba(45, 122, 230, 0.2);
          --card: #ffffff;
          --chip: #eef5ff;
          --accent: #00c389;
        }

        /* Page */
        .page {
          min-height: 100vh;
          background:
            radial-gradient(900px 600px at -10% -10%, var(--bg1), transparent 60%),
            radial-gradient(900px 600px at 110% -20%, var(--bg2), transparent 65%),
            linear-gradient(180deg, #f7fff9 0%, #f8fbff 60%, #ffffff 100%);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
        }

        /* Hero */
        .hero {
          position: relative;
          padding: 28px 16px 40px;
          overflow: hidden;
        }
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .back {
          display: inline-block;
          margin-bottom: 12px;
          font-weight: 600;
          color: #1a5fd1;
        }
        .brand {
          font-size: clamp(40px, 8vw, 92px);
          line-height: 0.92;
          margin: 0 0 8px 0;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 0.4px;
        }
        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .title-row h2 {
          margin: 0;
          font-size: clamp(22px, 4.2vw, 36px);
        }
        .badge {
          padding: 6px 12px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.3px;
          color: #0b1020;
          background: linear-gradient(90deg, rgba(26, 168, 123, 0.15), rgba(45, 122, 230, 0.15));
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .sub {
          margin: 6px 0 0;
          color: var(--muted);
          font-size: clamp(14px, 2.4vw, 18px);
        }

        /* bulles décoratives */
        .bubbles span {
          position: absolute;
          inset: -80px auto auto -80px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle at 30% 30%, #b9ffe1, transparent 60%);
          filter: blur(20px);
          border-radius: 50%;
          animation: float1 7s ease-in-out infinite;
          opacity: 0.5;
        }
        .bubbles span:nth-child(2) {
          inset: -120px -80px auto auto;
          background: radial-gradient(circle at 70% 30%, #c6d9ff, transparent 60%);
          width: 340px;
          height: 340px;
          animation: float2 8s ease-in-out infinite;
        }
        .bubbles span:nth-child(3) {
          inset: auto -100px -120px auto;
          background: radial-gradient(circle at 50% 50%, #d1fff1, transparent 60%);
          width: 280px;
          height: 280px;
          animation: float3 9s ease-in-out infinite;
        }
        @keyframes float1 {
          50% {
            transform: translateY(12px) translateX(6px);
          }
        }
        @keyframes float2 {
          50% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        @keyframes float3 {
          50% {
            transform: translateY(-8px) translateX(8px);
          }
        }

        /* Grille */
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 16px 40px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 18px;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        /* Cartes */
        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06), 0 1px 0 rgba(255, 255, 255, 0.7) inset;
        }
        .info h3 {
          margin: 0 0 8px;
          font-size: 20px;
        }
        .list {
          margin: 0 0 10px 0;
          padding-left: 18px;
        }
        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 10px;
        }
        @media (max-width: 700px) {
          .split {
            grid-template-columns: 1fr;
          }
        }
        .nutri-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 6px;
        }
        .nutri-list li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(180deg, #fafcff, #f3f7ff);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 10px;
          padding: 8px 10px;
        }
        .conservation ul {
          margin: 6px 0 0;
          padding-left: 18px;
        }

        /* Carte commande */
        .order .label {
          font-size: 12px;
          text-transform: uppercase;
          color: var(--muted);
          letter-spacing: 0.4px;
          margin-bottom: 4px;
        }
        .price-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .price {
          font-size: 28px;
          font-weight: 800;
        }
        .unit {
          font-size: 14px;
          color: var(--muted);
          font-weight: 600;
        }
        .qty-ctrl {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8fbff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 6px 18px rgba(45, 122, 230, 0.12);
        }
        .qty-ctrl button {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid #d7deec;
          background: white;
          font-size: 20px;
          font-weight: 700;
          cursor: pointer;
        }
        .qty-ctrl input {
          width: 72px;
          text-align: center;
          border: 1px solid #d7deec;
          border-radius: 10px;
          height: 36px;
          font-weight: 700;
        }
        .kg {
          font-weight: 700;
          color: #1f3b7a;
        }
        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 14px 0;
          font-size: 18px;
          font-weight: 700;
        }
        .btn {
          width: 100%;
          padding: 12px 16px;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 12px 30px rgba(45, 122, 230, 0.25);
        }
        .note {
          margin-top: 10px;
          color: var(--muted);
          font-size: 13px;
          text-align: center;
        }

        .foot {
          text-align: center;
          color: var(--muted);
          padding: 26px 16px 40px;
        }
      `}</style>
    </>
  );
}
