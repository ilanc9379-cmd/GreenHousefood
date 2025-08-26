// pages/plats-surgeles/pates-poulet-brocolis.js
import React, { useMemo, useState } from "react";
import Link from "next/link";

export default function PatesPouletBrocolis() {
  const [qty, setQty] = useState(1);
  const price = 9.9;

  const nutrition = useMemo(
    () => ({
      per100g: {
        energie: "≈ 150 kcal",
        lipides: "5 g",
        glucides: "15 g",
        proteines: "12 g",
        sel: "0,7 g",
      },
      portion: {
        energie: "≈ 650 kcal",
        lipides: "22 g",
        glucides: "65 g",
        proteines: "50 g",
        sel: "3 g",
      },
    }),
    []
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Link href="/plats-surgeles">
        <a style={{ textDecoration: "none", color: "#0070f3" }}>← Retour</a>
      </Link>
      <h1 style={{ color: "#0070f3" }}>GreenHouse</h1>
      <h2>Pâtes aromettes poulet crémeux & brocolis</h2>
      <p>
        Portion : 600 g — <b>Surgelé</b>, prêt en 20 min. 
        À conserver au congélateur (max 4 mois). 
        Après décongélation : 48h au réfrigérateur.
      </p>

      <h3>Ingrédients</h3>
      <ul>
        <li>130 g de pâtes aromette artisanales</li>
        <li>130 g de brocolis vapeur</li>
        <li>150 g de filet de poulet</li>
        <li>10 cl de crème allégée</li>
        <li>20 g de parmesan râpé</li>
        <li>1 gousse d’ail</li>
        <li>1 petit oignon jaune</li>
        <li>Sel, aromates</li>
      </ul>

      <h3>Valeurs nutritionnelles</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Valeurs</th>
            <th>Pour 100 g</th>
            <th>Par portion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Énergie</td>
            <td>{nutrition.per100g.energie}</td>
            <td>{nutrition.portion.energie}</td>
          </tr>
          <tr>
            <td>Lipides</td>
            <td>{nutrition.per100g.lipides}</td>
            <td>{nutrition.portion.lipides}</td>
          </tr>
          <tr>
            <td>Glucides</td>
            <td>{nutrition.per100g.glucides}</td>
            <td>{nutrition.portion.glucides}</td>
          </tr>
          <tr>
            <td>Protéines</td>
            <td>{nutrition.per100g.proteines}</td>
            <td>{nutrition.portion.proteines}</td>
          </tr>
          <tr>
            <td>Sel</td>
            <td>{nutrition.per100g.sel}</td>
            <td>{nutrition.portion.sel}</td>
          </tr>
        </tbody>
      </table>

      <h3>Allergènes</h3>
      <p>Gluten, œufs, produits laitiers</p>

      <h3>Prix</h3>
      <p>
        Prix unitaire : <b>{price.toFixed(2)} €</b>
      </p>
      <div>
        <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
        <span style={{ margin: "0 10px" }}>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>
      <p>Total : {(price * qty).toFixed(2)} €</p>
      <button
        style={{
          background: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Commander
      </button>
    </div>
  );
}
