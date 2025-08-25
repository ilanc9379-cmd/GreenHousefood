import Link from "next/link";

const Card = ({ title, desc, href, price, portion, macros }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 16,
      padding: 20,
      boxShadow:
        "0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06), inset 0 0 0 1px rgba(0,0,0,.04)",
    }}
  >
    <h2 style={{ margin: 0, fontSize: 22 }}>{title}</h2>
    <p style={{ margin: "8px 0 6px", color: "#475569" }}>{desc}</p>

    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "10px 0 6px" }}>
      <Badge label="Calories" value={`${macros.kcal} kcal`} />
      <Badge label="Protéines" value={`${macros.p} g`} />
      <Badge label="Glucides" value={`${macros.g} g`} />
      <Badge label="Lipides" value={`${macros.l} g`} />
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginTop: 10,
        color: "#475569",
        fontSize: 14,
      }}
    >
      <span>Portion : {portion}</span>
      <span>•</span>
      <span>Prix : {price}</span>
    </div>

    <div style={{ marginTop: 12 }}>
      <Link
        href={href}
        style={{
          display: "inline-block",
          padding: "10px 14px",
          borderRadius: 12,
          background:
            "linear-gradient(90deg, rgba(0,200,83,.95), rgba(0,145,234,.95))",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Voir le détail
      </Link>
    </div>
  </div>
);

const Badge = ({ label, value }) => (
  <div
    style={{
      borderRadius: 12,
      padding: "8px 10px",
      background: "linear-gradient(180deg, #f8fafc, #eef2ff)",
      boxShadow: "inset 0 0 0 1px rgba(99,102,241,.18)",
      minWidth: 110,
    }}
  >
    <div style={{ fontSize: 11, letterSpacing: .3, textTransform: "uppercase", color: "#64748b" }}>
      {label}
    </div>
    <div style={{ fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{value}</div>
  </div>
);

export default function PlatsSurgeles() {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Roboto,Helvetica,Arial,sans-serif",
        padding: 20,
        background:
          "linear-gradient(180deg, rgba(232, 246, 243, .6), rgba(236, 247, 255, .6))",
        minHeight: "100vh",
      }}
    >
      {/* Flèche retour */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#0f172a",
          fontSize: 16,
          display: "inline-block",
          marginBottom: 12,
        }}
      >
        ← Retour à l’accueil
      </Link>

      {/* Hero */}
      <div
        style={{
          borderRadius: 20,
          padding: "26px 18px",
          background:
            "linear-gradient(115deg, rgba(0,200,83,.14), rgba(0,145,234,.14))",
          border: "1px solid rgba(2,132,199,.15)",
          marginBottom: 22,
        }}
      >
        <h1
          style={{
            margin: 0,
            textAlign: "center",
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

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: 820,
            textAlign: "center",
            color: "#334155",
            fontSize: 16,
          }}
        >
          Plats cuisinés maison puis **surgelés rapidement** pour figer la fraîcheur :
          <br />
          <strong>saveurs et nutriments préservés, zéro conservateur, texture au top.</strong>
        </p>
      </div>

      {/* Grille des plats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        <Card
          title="Pâtes bolognaise maison"
          desc="Pâtes artisanales au seigle, bœuf 5% MG, carottes, sauce tomate maison."
          href="/plats-surgeles/bolo"
          price="9,90 €"
          portion="600 g"
          macros={{ kcal: 700, p: 54.3, g: 89, l: 15.8 }}
        />

        <Card
          title="Pâtes complètes — émincé de poulet & sauce poivron"
          desc="Pâtes complètes artisanales, poulet tendre, julienne de légumes, sauce poivron maison."
          href="/plats-surgeles/poulet-poivron"
          price="9,90 €"
          portion="600 g"
          macros={{ kcal: 689, p: 62, g: 86, l: 10 }}
        />

        <Card
          title="Bœuf bourguignon carottes & purée"
          desc="Morçeaux maigres mijotés, carottes fondantes, purée de pommes de terre."
          href="/plats-surgeles/boeuf"
          price="9,90 €"
          portion="500 g"
          macros={{ kcal: 610, p: 48, g: 55, l: 18 }}
        />

        <Card
          title="Cuisse de poulet, pommes de terre rôties & haricots verts"
          desc="Cuisse rôtie aux épices, pommes de terre dorées, haricots verts frais."
          href="/plats-surgeles/poulet-pommes-haricots"
          price="9,90 €"
          portion="550 g"
          macros={{ kcal: 640, p: 45, g: 60, l: 18 }}
        />
      </div>
    </div>
  );
}
