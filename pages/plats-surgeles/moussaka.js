import Link from "next/link";

export default function Moussaka() {
  const PLAT = {
    title: "Moussaka revisitée (surgelée)",
    price: "9,90 €",
    portion: "600 g",
    desc: "Une moussaka légère revisitée, avec viande maigre, riz complet et aubergines fondantes.",

    macros: { kcal: 640, p: 42, g: 65, l: 18 },

    per100: { kcal: 106, fat: 3.0, carbs: 10.8, protein: 7.0, salt: 0.7 },

    ingredients: [
      { label: "Aubergines", qty: "150 g" },
      { label: "Tomates concassées", qty: "100 g" },
      { label: "Viande hachée 5% MG", qty: "150 g" },
      { label: "Riz complet", qty: "150 g" },
      { label: "Fromage râpé", qty: "50 g" },
      { label: "Huile d’olive", qty: "5 g" },
      { label: "Oignon, ail, herbes de Provence, paprika, sel", qty: "—" },
    ],

    allergens:
      "Allergènes : lait (fromage). Peut contenir des traces de gluten et de fruits à coque.",

    cuisson: [
      "Four : 150 °C · 20 min",
      "Micro-ondes : 8 min",
      "Poêle : 10 min",
    ],
    conservation: [
      "Conserver au congélateur : maximum 4 mois.",
      "Après décongélation : 48h au réfrigérateur.",
      "Ne pas recongeler un produit décongelé.",
    ],
  };

  return (
    <div
      style={{
        fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Roboto,Helvetica,Arial,sans-serif",
        padding: 20,
        background: "linear-gradient(180deg, rgba(232,246,243,.6), rgba(236,247,255,.6))",
        minHeight: "100vh",
      }}
    >
      <Link href="/plats-surgeles" style={{ textDecoration: "none", color: "#0f172a" }}>
        ← Retour aux plats surgelés
      </Link>

      <div
        style={{
          borderRadius: 20,
          padding: "26px 18px",
          background: "linear-gradient(115deg, rgba(0,200,83,.14), rgba(0,145,234,.14))",
          border: "1px solid rgba(2,132,199,.15)",
          margin: "14px 0 22px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 36,
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #00c853, #0091ea)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 800,
          }}
        >
          GreenHouse
        </h1>
        <p style={{ margin: "8px 0 0", color: "#334155" }}>{PLAT.title}</p>
        <p style={{ margin: "6px 0 0", color: "#475569" }}>{PLAT.desc}</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        <Panel>
          <h3 style={{ marginTop: 0 }}>Valeurs nutritionnelles</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <Th>Valeurs</Th>
                <Th>Pour 100 g</Th>
                <Th>Par portion</Th>
              </tr>
            </thead>
            <tbody>
              <Tr><Td>Énergie</Td><Td>{PLAT.per100.kcal} kcal</Td><Td>{PLAT.macros.kcal} kcal</Td></Tr>
              <Tr><Td>Matières grasses</Td><Td>{PLAT.per100.fat} g</Td><Td>{PLAT.macros.l} g</Td></Tr>
              <Tr><Td>Glucides</Td><Td>{PLAT.per100.carbs} g</Td><Td>{PLAT.macros.g} g</Td></Tr>
              <Tr><Td>Protéines</Td><Td>{PLAT.per100.protein} g</Td><Td>{PLAT.macros.p} g</Td></Tr>
              <Tr><Td>Sel</Td><Td>{PLAT.per100.salt} g</Td><Td>—</Td></Tr>
            </tbody>
          </table>
        </Panel>

        <Panel>
          <h3 style={{ marginTop: 0 }}>Ingrédients</h3>
          <ul style={{ marginTop: 8, marginBottom: 14 }}>
            {PLAT.ingredients.map((it, i) => (
              <li key={i}>
                {it.label} <strong>{it.qty}</strong>
              </li>
            ))}
          </ul>

          <Tag title="Cuisson" items={PLAT.cuisson} />
          <Tag title="Conservation" items={PLAT.conservation} />

          <div style={{ marginTop: 12 }}>
            <strong>Allergènes</strong> : {PLAT.allergens}
          </div>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 12, color: "#64748b" }}>PRIX UNITAIRE</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{PLAT.price}</div>
              <div style={{ color: "#475569" }}>Portion : {PLAT.portion}</div>
            </div>
            <OrderButton />
          </div>
        </Panel>
      </div>
    </div>
  );
}

const Panel = ({ children }) => (
  <div style={{
    background: "#fff",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06), inset 0 0 0 1px rgba(0,0,0,.04)",
  }}>
    {children}
  </div>
);

const Th = ({ children }) => (
  <th style={{
    textAlign: "left",
    padding: "10px 8px",
    background: "linear-gradient(180deg,#f8fafc,#eef2ff)",
    fontWeight: 700,
    fontSize: 14,
    borderBottom: "1px solid rgba(15,23,42,.08)",
  }}>
    {children}
  </th>
);

const Td = ({ children }) => (
  <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(15,23,42,.06)" }}>
    {children}
  </td>
);

const Tr = ({ children }) => <tr>{children}</tr>;

const Tag = ({ title, items }) => (
  <div style={{
    background: "linear-gradient(180deg,#f8fafc,#eef2ff)",
    borderRadius: 12,
    padding: 12,
    boxShadow: "inset 0 0 0 1px rgba(99,102,241,.18)",
    marginBottom: 10,
  }}>
    <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>
    <ul style={{ margin: 0 }}>
      {items.map((t, i) => (
        <li key={i} style={{ color: "#475569" }}>{t}</li>
      ))}
    </ul>
  </div>
);

function OrderButton() {
  return (
    <button
      type="button"
      style={{
        border: "none",
        cursor: "pointer",
        padding: "12px 16px",
        borderRadius: 12,
        fontWeight: 700,
        color: "#fff",
        background: "linear-gradient(90deg, #00c853, #0091ea)",
        boxShadow: "0 8px 18px rgba(0,145,234,.25)",
      }}
      onClick={() => alert("Ajouté au panier (démo)")}
    >
      Commander
    </button>
  );
}
