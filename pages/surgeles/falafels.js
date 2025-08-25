// pages/surgeles/falafel.js
import { useState, useMemo } from "react";

export default function Falafel() {
  const prixKg = 10.0;

  const [qty, setQty] = useState(1); // en kg
  const total = useMemo(() => +(qty * prixKg).toFixed(2), [qty]);

  const changeQty = (delta) => {
    setQty((prev) => Math.max(0.5, +(prev + delta).toFixed(1)));
  };

  return (
    <main className="container">
      {/* HERO */}
      <header className="gh-hero">
        <div className="hero-inner">
          <h1 className="brand">GreenHouse</h1>
          <p className="tag">Falafels artisanaux surgelés</p>
        </div>
      </header>

      {/* CONTENU */}
      <section className="card">
        <h2>Présentation</h2>
        <p>
          Falafels préparés de manière artisanale à base de pois chiches, herbes
          fraîches et épices. Surgelés rapidement pour préserver les qualités
          nutritionnelles et le goût. Idéal pour des repas rapides, équilibrés
          et savoureux.
        </p>

        <h3>Ingrédients</h3>
        <ul>
          <li>Pois chiches</li>
          <li>Oignon frais</li>
          <li>Ail frais</li>
          <li>Persil, coriandre</li>
          <li>Sel, poivre</li>
          <li>Épices (cumin, paprika)</li>
          <li>Huile de tournesol (cuisson)</li>
        </ul>

        <h3>Allergènes</h3>
        <p>Traces possibles : fruits à coque, gluten.</p>

        <h3>Conservation & cuisson</h3>
        <ul>
          <li>À conserver au congélateur jusqu’à 4 mois.</li>
          <li>
            Après décongélation, conserver au réfrigérateur et consommer sous 48 h.
          </li>
          <li>Ne pas recongeler un produit décongelé.</li>
          <li>Cuisson friteuse : 3 min.</li>
          <li>Cuisson airfryer : 15 min.</li>
        </ul>

        <h3>Valeurs nutritionnelles (≈ pour 100 g)</h3>
        <ul>
          <li>Énergie : ~ 270 kcal</li>
          <li>Glucides : ~ 27 g</li>
          <li>Protéines : ~ 9 g</li>
          <li>Lipides : ~ 12 g</li>
          <li>Fibres : ~ 6 g</li>
          <li>Sel : ~ 1,1 g</li>
        </ul>

        <h3>Commander</h3>
        <div className="price-card">
          <div className="price-row">
            <span className="price">{prixKg.toFixed(2)} €</span>
            <span className="sub">/ kg</span>
          </div>

          <div className="qty">
            <button onClick={() => changeQty(-0.5)} aria-label="− 0,5 kg">−</button>
            <input
              type="number"
              step="0.5"
              min="0.5"
              value={qty}
              onChange={(e) =>
                setQty(
                  Math.max(
                    0.5,
                    parseFloat((e.target.value || "0.5").replace(",", ".")) || 0.5
                  )
                )
              }
            />
            <button onClick={() => changeQty(0.5)} aria-label="+ 0,5 kg">+</button>
            <span>kg</span>
          </div>

          <div className="total">
            Total : {total.toFixed(2).replace(".", ",")} €
          </div>

          <button className="btn-cta">Commander</button>
        </div>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        :root {
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --muted: #5a6170;
        }
        .container {
          font-family: system-ui, sans-serif;
          padding: 0 20px 48px;
          background: linear-gradient(180deg, #f6fffb, #f9fbff 60%, #ffffff);
          min-height: 100vh;
          color: #0b1020;
        }
        .gh-hero {
          text-align: center;
          background: linear-gradient(90deg, #00e08d, #5aa6ff);
          padding: 40px 20px;
          border-radius: 0 0 28px 28px;
          color: #fff;
        }
        .brand {
          font-size: clamp(44px, 8vw, 92px);
          margin: 0;
          background: linear-gradient(90deg, #00e08d, #5aa6ff);
          -webkit-background-clip: text;
          color: transparent;
        }
        .tag {
          font-size: 20px;
          font-weight: 600;
          margin-top: 8px;
        }
        .card {
          max-width: 1100px;
          margin: 20px auto;
          background: white;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        }
        h2 {
          font-size: 28px;
          margin-bottom: 10px;
        }
        h3 {
          margin-top: 18px;
        }
        ul {
          margin: 10px 0 0;
        }
        .price-card {
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 14px;
          padding: 16px;
          background: #fdfefe;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
          max-width: 360px;
        }
        .price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin: 10px 0;
        }
        .price {
          font-size: 22px;
          font-weight: 700;
        }
        .sub {
          font-size: 14px;
          color: var(--muted);
        }
        .qty {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 12px 0;
        }
        .qty button {
          width: 36px;
          height: 36px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 18px;
          cursor: pointer;
        }
        .qty input {
          width: 70px;
          text-align: center;
          border-radius: 8px;
          border: 1px solid #ccc;
          padding: 4px;
        }
        .total {
          font-weight: 700;
          margin: 10px 0;
        }
        .btn-cta {
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 10px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
        }
        .foot {
          text-align: center;
          margin-top: 40px;
          color: var(--muted);
        }
      `}</style>
    </main>
  );
}
