// pages/plats/bolo.js
import Head from "next/head";
import { useMemo, useState } from "react";

export default function PlatBoloFiche() {
  // Données recette
  const portionGrams = 600;
  const basePrice = 9.9;

  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    // { name: "Sel", qty: "3 g" }, // supprimé
    { name: "Herbes/aromates (ail, poivre, basilic, sel)" }, // sans « au goût »
  ];

  // Totaux nutritionnels (par portion)
  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3;
  const agsPortion = +(lipidesPortion * 0.34).toFixed(1);
  const sucrePortion = 11;

  // Pour 100 g
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  // Sélecteur quantité
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  // Totaux commande
  const totals = useMemo(
    () => ({
      price: +(basePrice * qty).toFixed(2),
      kcal: kcalPortion * qty,
      lipides: +(lipidesPortion * qty).toFixed(1),
      ags: +(agsPortion * qty).toFixed(1),
      glucides: +(glucidesPortion * qty).toFixed(1),
      sucres: +(sucrePortion * qty).toFixed(1),
      proteines: +(proteinesPortion * qty).toFixed(1),
      sel: +(selPortion * qty).toFixed(1),
      poids: portionGrams * qty,
    }),
    [qty]
  );

  return (
    <>
      <Head>
        <title>Pâtes bolognaise maison — GreenHouse</title>
        <meta
          name="description"
          content="Fiche détaillée : Pâtes bolognaise maison — GreenHouse"
        />
      </Head>

      <main className="page">
        {/* HEADER */}
        <header className="header">
          <div className="titlebox">
            <h1>Pâtes bolognaise maison</h1>
            <p className="muted">
              Portion : <b>600 g</b> · prêt en <b>20 min</b> ·{" "}
              <b>four</b> 8 min · <b>micro-ondes</b> 10 min · <b>poêle</b> 10 min ·{" "}
              <b>riche en protéines</b>
            </p>
            <p>
              Une bolognaise authentique sublimée par des pâtes au seigle
              artisanales, élaborées avec des œufs plein air. La tendreté du bœuf
              haché, la douceur des carottes et la fraîcheur de la tomate s’unissent
              pour un plat complet, réconfortant et équilibré.
            </p>
          </div>

          {/* Carte prix / quantité */}
          <div className="pricecard">
            <div className="sub">Prix unitaire</div>
            <div className="big">{nf.format(basePrice)}</div>
            <div className="qty">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="moins"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                }
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="plus">
                +
              </button>
            </div>
            <div className="sub">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="mid">{nf.format(totals.price)}</div>
            <button className="btn">Commander</button>
          </div>
        </header>

        {/* Ingrédients */}
        <section className="block">
          <h2>Ingrédients</h2>
          <ul className="ing">
            {ingredients.map((it) => (
              <li key={it.name}>
                <span>{it.name}</span>
                {it.qty && <span className="qtytxt">{it.qty}</span>}
              </li>
            ))}
          </ul>
          <p className="muted">Allergènes : gluten (seigle, blé), œufs.</p>
        </section>

        {/* Valeurs nutritionnelles */}
        <section className="block">
          <h2>Valeurs nutritionnelles</h2>
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
                  <td className="subrow">dont acides gras saturés</td>
                  <td>{ags100} g</td>
                  <td>{agsPortion} g</td>
                </tr>
                <tr>
                  <td>Glucides</td>
                  <td>{glucides100} g</td>
                  <td>{glucidesPortion} g</td>
                </tr>
                <tr>
                  <td className="subrow">dont sucres</td>
                  <td>{sucre100} g</td>
                  <td>{sucrePortion} g</td>
                </tr>
                <tr>
                  <td>Protéines</td>
                  <td>{proteines100} g</td>
                  <td>{proteinesPortion} g</td>
                </tr>
                <tr>
                  <td>Sel</td>
                  <td>{sel100} g</td>
                  <td>{selPortion} g</td>
                </tr>
                <tr>
                  <td>Poids total</td>
                  <td>—</td>
                  <td>{portionGrams} g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Préparation — supprimée à ta demande */}

        {/* Note + lien retour — supprimés à ta demande */}
      </main>

      <style jsx>{`
        .page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 40px;
        }
        /* Bandeau titre avec dégradé */
        .titlebox {
          background: linear-gradient(90deg, #e7fff4, #e8f1ff);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 18px;
          padding: 16px 18px;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
        }
        .header {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr 320px;
          align-items: start;
          margin-bottom: 14px;
        }
        @media (max-width: 900px) {
          .header {
            grid-template-columns: 1fr;
          }
        }
        h1 {
          margin: 0;
          font-size: clamp(28px, 4.5vw, 44px);
          background: linear-gradient(90deg, #0aa64c, #24a0ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .muted {
          color: #5a6376;
        }

        .pricecard {
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
          padding: 16px;
        }
        .sub {
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .big {
          font-size: 34px;
          font-weight: 800;
        }
        .mid {
          font-size: 22px;
          font-weight: 700;
        }
        .qty {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 10px 0;
        }
        .qty button {
          height: 36px;
          width: 36px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          background: #fff;
        }
        .qty input {
          height: 36px;
          width: 64px;
          text-align: center;
          border-radius: 10px;
          border: 1px solid #d1d5db;
        }
        .btn {
          margin-top: 8px;
          width: 100%;
          padding: 10px 14px;
          border: none;
          border-radius: 12px;
          color: #fff;
          font-weight: 700;
          background: linear-gradient(90deg, #0aa64c, #2d7ae6);
        }

        .block {
          margin: 26px 0;
        }
        .ing {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 700px) {
          .ing {
            grid-template-columns: 1fr;
          }
        }
        .ing li {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 12px;
          padding: 10px;
        }
        .qtytxt {
          font-weight: 600;
        }

        .table {
          overflow-x: auto;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
        }
        table {
          min-width: 720px;
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          padding: 10px 12px;
          text-align: left;
        }
        thead tr {
          background: linear-gradient(90deg, #e8f7ff, #f0fff6);
          color: #1f2a44;
        }
        tr + tr {
          border-top: 1px solid #e5e7eb;
        }
        .subrow {
          padding-left: 24px;
          color: #6b7280;
        }
      `}</style>
    </>
  );
}
