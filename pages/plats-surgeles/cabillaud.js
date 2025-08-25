// pages/plats-surgeles/cabillaud.js
import React, { useMemo, useState } from "react";

export default function CabillaudLegumesRiz() {
  // ---------- Données plat ----------
  const title = "Cabillaud aux petits légumes & riz complet";
  const portionGrams = 665; // 200 + 120 + 100 + 80 + 80 + 80 + 5
  const price = 9.9;

  const ingredients = [
    ["Riz complet", "200 g"],
    ["Filet de cabillaud", "120 g"],
    ["Carottes", "100 g"],
    ["Oignon", "80 g"],
    ["Poivron", "80 g"],
    ["Petits pois", "80 g"],
    ["Huile d’olive", "5 g"],
    ["Ail, herbes, paprika, sel", "—"],
  ];

  // ---------- Nutrition (approximations cohérentes) ----------
  // Totaux par portion (~665 g)
  const kcalPortion = 610;
  const lipidesPortion = 12;   // g
  const glucidesPortion = 88;  // g
  const proteinesPortion = 42; // g

  // Par 100 g
  const factor = portionGrams / 100;
  const kcal100 = +(kcalPortion / factor).toFixed(1);          // ≈ 91.7
  const lipides100 = +(lipidesPortion / factor).toFixed(1);    // ≈ 1.8
  const glucides100 = +(glucidesPortion / factor).toFixed(1);  // ≈ 13.2
  const proteines100 = +(proteinesPortion / factor).toFixed(1);// ≈ 6.3

  // ---------- Commande ----------
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const totalPrice = +(price * qty).toFixed(2);

  return (
    <div className="page">
      <header className="hero">
        <a href="/plats-surgeles" className="back">← Retour aux plats surgelés</a>
        <h1 className="brand">GreenHouse</h1>
        <p className="tagline">Traiteur — Diététique & Gourmand</p>
      </header>

      <main className="wrap">
        <h2 className="title">{title}</h2>

        <div className="badges">
          <span className="badge badge-freeze">Surgelé</span>
          <span className="badge badge-prot">Équilibré</span>
        </div>

        <p className="intro">
          Portion : <strong>{portionGrams} g</strong> · prêt en <strong>20 min au four</strong> ·{" "}
          <strong>8 min au micro-ondes</strong> · <strong>10 min à la poêle</strong>
        </p>

        <p className="desc">
          Filet de cabillaud fondant, riz complet et mélange de légumes
          (carottes, oignon, poivron, petits pois). Un plat sain, riche en fibres
          et protéines, assaisonné d’ail, d’herbes de Provence et de paprika.
        </p>

        <section className="grid">
          {/* Ingrédients */}
          <div className="card">
            <h3>Ingrédients</h3>
            <ul className="ing">
              {ingredients.map(([name, qty]) => (
                <li key={name}>
                  <span>{name}</span>
                  <b>{qty}</b>
                </li>
              ))}
            </ul>
            <p className="note">Allergènes : <b>poisson</b>.</p>
          </div>

          {/* Nutrition */}
          <div className="card">
            <h3>Valeurs nutritionnelles</h3>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Valeurs</th>
                    <th>Pour 100 g</th>
                    <th>Par portion ({portionGrams} g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Énergie</td>
                    <td>{kcal100} kcal</td>
                    <td>{kcalPortion} kcal</td>
                  </tr>
                  <tr>
                    <td>Matières grasses</td>
                    <td>{lipides100} g</td>
                    <td>{lipidesPortion} g</td>
                  </tr>
                  <tr>
                    <td>Glucides</td>
                    <td>{glucides100} g</td>
                    <td>{glucidesPortion} g</td>
                  </tr>
                  <tr>
                    <td>Protéines</td>
                    <td>{proteines100} g</td>
                    <td>{proteinesPortion} g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Commande */}
          <div className="card order">
            <h3>Prix unitaire</h3>
            <div className="price">{nf.format(price)}</div>

            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Moins">−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="Plus">+</button>
            </div>

            <div className="total">
              <div>Total ({qty} plat{qty > 1 ? "s" : ""})</div>
              <b>{nf.format(totalPrice)}</b>
            </div>

            <button className="cta">Commander</button>
          </div>

          {/* Cuisson & conservation */}
          <div className="card">
            <h3>Cuisson</h3>
            <ul className="bullets">
              <li>Four : <b>150 °C</b>, <b>20 min</b>.</li>
              <li>Micro-ondes : <b>8 min</b>.</li>
              <li>Poêle : <b>10 min</b>.</li>
            </ul>
            <h3>Conservation</h3>
            <ul className="bullets">
              <li>Conserver <b>au congélateur</b> : maximum <b>4 mois</b>.</li>
              <li>Après décongélation : <b>48 h au réfrigérateur</b>.</li>
              <li>Ne pas recongeler un produit décongelé.</li>
            </ul>
            <p className="freeze-note">
              La surgélation préservera fraîcheur, saveurs et qualités nutritionnelles
              — idéal pour un plat prêt à réchauffer sans compromis.
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .page { min-height: 100vh; background: #f4f7fb; }
        .hero {
          padding: 28px 16px 8px;
          background: linear-gradient(120deg, #e8f5ff, #e9fff5);
        }
        .back {
          display: inline-block;
          margin-bottom: 12px;
          color: #0b6;
          text-decoration: none;
        }
        .back:hover { text-decoration: underline; }
        .brand {
          margin: 0;
          font-size: 40px;
          line-height: 1.1;
          font-weight: 800;
          background: linear-gradient(90deg, #00c16a, #00a2ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tagline { margin: 6px 0 0; color: #496; font-weight: 600; }
        .wrap { max-width: 1050px; margin: 0 auto; padding: 20px 16px 40px; }
        .title { font-size: 28px; margin: 14px 0 6px; }
        .badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
        .badge {
          display: inline-block; padding: 6px 10px; border-radius: 999px;
          font-size: 13px; font-weight: 600; background: #eef3ff; color: #2643a2;
        }
        .badge-freeze { background: #e6fff3; color: #0a6c4a; }
        .badge-prot { background: #fff3e8; color: #a25a1a; }
        .intro { color: #475569; margin: 6px 0 10px; }
        .desc { color: #334155; margin-bottom: 14px; }

        .grid {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 960px) {
          .grid { grid-template-columns: 1.2fr 1.2fr 0.8fr; align-items: start; }
          .order { grid-column: 3 / 4; grid-row: 1 / 3; }
        }

        .card {
          background: #fff; border-radius: 18px; box-shadow: 0 8px 20px rgba(16,24,40,.06);
          padding: 16px;
        }
        .card h3 { margin: 0 0 10px; font-size: 18px; }

        .ing { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
        .ing li {
          display: flex; justify-content: space-between; align-items: center;
          background: #f8fafc; border-radius: 12px; padding: 10px 12px;
        }
        .ing b { font-variant-numeric: tabular-nums; }

        .table {
          overflow-x: auto; border-radius: 12px; border: 1px solid #e6eef6;
        }
        table { width: 100%; border-collapse: collapse; font-size: 14px; }
        thead th {
          background: #f1f5f9; text-align: left; padding: 10px; color: #334155;
        }
        tbody td { padding: 10px; border-top: 1px solid #eef2f7; }

        .order .price { font-size: 32px; font-weight: 800; margin-bottom: 8px; }
        .qty {
          display: flex; gap: 8px; align-items: center; margin: 8px 0 10px;
        }
        .qty button {
          width: 40px; height: 40px; border-radius: 10px; border: 1px solid #dbe4ee; background: #fff;
          font-size: 22px; line-height: 1; cursor: pointer;
        }
        .qty input {
          width: 70px; height: 40px; text-align: center; border-radius: 10px;
          border: 1px solid #dbe4ee; font-size: 16px;
        }
        .total {
          display: flex; justify-content: space-between; align-items: baseline;
          margin-bottom: 10px; color: #334155;
        }
        .cta {
          width: 100%; height: 46px; border: 0; border-radius: 12px; cursor: pointer;
          font-weight: 700; color: #fff;
          background: linear-gradient(90deg, #00b37a, #0084ff);
        }
        .bullets { margin: 6px 0 12px; padding-left: 18px; }
        .freeze-note { margin: 2px 0 0; color: #475569; }

        .note { color: #475569; margin-top: 8px; }
      `}</style>
    </div>
  );
}
