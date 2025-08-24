// pages/plat/boeuf.js
import Head from "next/head";
import { useMemo, useState } from "react";

export default function BoeufCarottesPuree() {
  /* ===== Données plat ===== */
  const portionGrams = 500; // 200g bœuf + 150g carottes + 150g purée
  const price = 9.9;

  // Valeurs pour 1 portion (≈500 g)
  const kcalPortion = 470;
  const protPortion = 41;  // g
  const carbPortion = 39;  // g
  const fatPortion  = 15;  // g
  const saltPortion = 1.5; // g

  // Dérivés pour 100 g
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const prot100 = +(protPortion / (portionGrams / 100)).toFixed(1);
  const carb100 = +(carbPortion / (portionGrams / 100)).toFixed(1);
  const fat100  = +(fatPortion  / (portionGrams / 100)).toFixed(1);
  const salt100 = +(saltPortion / (portionGrams / 100)).toFixed(1);

  const ingredients = [
    { name: "Bœuf bourguignon (morceaux maigres), cuit", qty: "200 g" },
    { name: "Carottes cuites", qty: "150 g" },
    { name: "Purée de pommes de terre", qty: "150 g" },
    { name: "Oignons & ail", qty: "—" },
    { name: "Aromates (sel, poivre, herbes)", qty: "—" },
    { name: "Un filet d’huile d’olive pour cuisson", qty: "≈ 5 g" },
  ];

  /* ===== UI : quantité & total ===== */
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () =>
      new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const totalPrice = useMemo(() => +(price * qty).toFixed(2), [price, qty]);

  return (
    <>
      <Head>
        <title>GreenHouse — Bœuf mijoté carottes & purée</title>
        <meta
          name="description"
          content="Plat surgelé : bœuf mijoté aux carottes & purée de pommes de terre. Valeurs nutritionnelles et informations de conservation."
        />
      </Head>

      <main className="page">
        {/* Fond animé */}
        <div aria-hidden className="bg" />

        {/* En-tête marque */}
        <header className="hero">
          <h1 className="brand">GreenHouse</h1>
          <p className="tagline">Traiteur — <b>Diététique & Gourmand</b></p>
          <a href="/" className="back">← Retour au menu</a>
        </header>

        {/* Titre + badges + intro */}
        <section className="intro container">
          <h2 className="title">Bœuf mijoté aux carottes & purée maison</h2>
          <div className="badges">
            <span className="badge badge-freeze">Surgelé</span>
            <span className="badge badge-prot">Riche en protéines</span>
          </div>

          <p className="meta">
            <b>Portion :</b> {portionGrams} g · prêt en 20-25 min <i>au four</i> ·
            {" "}8-10 min <i>au micro-ondes</i> · 10-12 min <i>à la poêle</i>
          </p>

          <p className="lead">
            Un bœuf mijoté fondant et parfumé, accompagné de carottes douces et
            d’une purée de pommes de terre onctueuse. Un plat complet, réconfortant
            et équilibré.
          </p>
        </section>

        {/* Grille contenu */}
        <section className="container grid">
          {/* Colonne gauche */}
          <div className="col">
            <div className="card">
              <h3>Ingrédients</h3>
              <ul className="list">
                {ingredients.map((it) => (
                  <li key={it.name} className="row">
                    <span>{it.name}</span>
                    <span className="qty">{it.qty}</span>
                  </li>
                ))}
              </ul>
              <p className="small muted">
                Allergènes potentiels : lait (purée selon recette), traces de
                gluten possibles en atelier.
              </p>
            </div>

            <div className="card price">
              <h3>Prix unitaire</h3>
              <div className="price-line">
                <div className="unit">{nf.format(price)}</div>
                <div className="qtyctrl">
                  <button
                    aria-label="Diminuer"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                  >
                    –
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) =>
                      setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                    }
                  />
                  <button
                    aria-label="Augmenter"
                    onClick={() => setQty((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="total">
                Total ({qty} plat{qty > 1 ? "s" : ""}) :{" "}
                <b>{nf.format(totalPrice)}</b>
              </div>
              <button className="cta">Commander</button>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="col">
            <div className="card keep">
              <h3>Conservation</h3>
              <ul>
                <li>
                  Conserver <b>au congélateur</b> : maximum <b>4 mois</b>.
                </li>
                <li>
                  Après décongélation : <b>48h au réfrigérateur</b>.
                </li>
                <li>
                  <b>Ne pas recongeler</b> un produit décongelé.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Valeurs nutritionnelles</h3>
              <div className="table-wrap">
                <table className="nutri">
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
                      <td>Protéines</td>
                      <td>{prot100} g</td>
                      <td>{protPortion} g</td>
                    </tr>
                    <tr>
                      <td>Glucides</td>
                      <td>{carb100} g</td>
                      <td>{carbPortion} g</td>
                    </tr>
                    <tr>
                      <td>Lipides</td>
                      <td>{fat100} g</td>
                      <td>{fatPortion} g</td>
                    </tr>
                    <tr>
                      <td>Sel</td>
                      <td>{salt100} g</td>
                      <td>{saltPortion} g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="small muted">
                Valeurs arrondies — peuvent varier selon les matières premières et les
                méthodes de cuisson.
              </p>
            </div>
          </div>
        </section>

        <footer className="foot">
          © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
        </footer>
      </main>

      <style jsx>{`
        :root {
          --ink: #0b1020;
          --muted: #556070;
          --card: #ffffff;
          --ring: rgba(10,140,120,0.25);
          --g1: #c6f7d4;
          --g2: #b0e3ff;
          --g3: #fdecc8;
          --g4: #eaf2ff;
          --brand1: #10b981; /* vert */
          --brand2: #3b82f6; /* bleu */
          --freeze: #e0f2ff;
          --prot: #e8fff2;
        }

        .page {
          position: relative;
          min-height: 100vh;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
            Roboto, "Helvetica Neue", Arial;
        }
        .bg {
          position: fixed;
          inset: 0;
          background: linear-gradient(-45deg, var(--g1), var(--g2), var(--g3), var(--g4));
          background-size: 400% 400%;
          animation: gradient 18s ease infinite;
          z-index: -1;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .container { max-width: 1100px; margin: 0 auto; padding: 0 18px; }

        .hero { padding: 28px 18px 8px; }
        .brand {
          margin: 0;
          font-size: clamp(42px, 8vw, 86px);
          line-height: .95;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: .3px;
        }
        .tagline { margin: 6px 0 10px; color: var(--muted); font-size: clamp(16px, 2.2vw, 20px); }
        .back { color: #1f2937; text-decoration: none; border-bottom: 1px solid currentColor; }
        .back:hover { opacity: .8; }

        .intro { padding: 14px 18px 4px; }
        .title { margin: 8px 0 6px; font-size: clamp(26px, 4.5vw, 42px); line-height: 1.05; }
        .badges { display: flex; gap: 10px; flex-wrap: wrap; margin: 10px 0 8px; }
        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 999px; font-weight: 700; font-size: 12px;
          border: 1px solid rgba(0,0,0,.06); background: #fff;
        }
        .badge-freeze { background: var(--freeze); border-color: rgba(59,130,246,.25); }
        .badge-prot { background: var(--prot); border-color: rgba(16,185,129,.25); }

        .meta { margin: 4px 0 8px; color: var(--muted); }
        .lead { margin: 0 0 8px; color: #1f2937; }

        .grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding: 10px 18px 30px;
        }
        @media (max-width: 860px) {
          .grid { grid-template-columns: 1fr; }
        }
        .col { display: grid; gap: 16px; }

        .card {
          background: var(--card);
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 12px 30px rgba(0,0,0,.08), 0 1px 0 rgba(255,255,255,.7) inset;
        }
        .card h3 { margin: 0 0 10px; }
        .list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .row { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .qty { font-weight: 700; }

        .price .price-line {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .unit { font-size: 28px; font-weight: 800; }
        .qtyctrl { display: flex; align-items: center; gap: 8px; }
        .qtyctrl button {
          width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(0,0,0,.12);
          background: #fff; cursor: pointer;
        }
        .qtyctrl input {
          width: 64px; height: 36px; text-align: center;
          border: 1px solid rgba(0,0,0,.12); border-radius: 10px;
        }
        .total { margin-top: 8px; color: var(--muted); }
        .cta {
          margin-top: 10px; width: 100%;
          padding: 12px 16px; border: 0; border-radius: 12px; color: #fff; font-weight: 700; cursor: pointer;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 10px 25px rgba(59,130,246,.22);
        }

        .keep li { margin: 6px 0; }

        .table-wrap { overflow-x: auto; }
        table.nutri { width: 100%; border-collapse: collapse; }
        table.nutri th, table.nutri td { padding: 10px; text-align: left; }
        table.nutri thead th { background: #f3f7ff; color: #334155; }
        table.nutri tbody tr + tr td { border-top: 1px solid rgba(0,0,0,.06); }

        .muted { color: var(--muted); }
        .small { font-size: 12px; }

        .foot { text-align: center; padding: 20px; color: var(--muted); }
      `}</style>
    </>
  );
}
