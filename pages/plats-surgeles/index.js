import Link from "next/link";

export default function PlatsSurgeles() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Flèche retour */}
      <Link href="/" style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}>
        ← Retour à l’accueil
      </Link>

      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "10px",
          background: "linear-gradient(90deg, #00c853, #0091ea)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        GreenHouse
      </h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Plats surgelés — Cuisinés artisanalement pour préserver saveurs et nutriments.
      </p>

      {/* Liste des plats */}
      <div style={{ display: "grid", gap: "20px" }}>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Pâtes bolognaise maison</h2>
          <p>Portion : 600 g — Prix : 9,90 €</p>
          <Link href="/plats-surgeles/bolo" style={{ color: "#0070f3" }}>
            Voir le détail
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Pâtes complètes émincé de poulet & sauce poivron</h2>
          <p>Portion : 600 g — Prix : 9,90 €</p>
          <Link href="/plats-surgeles/poulet-poivron" style={{ color: "#0070f3" }}>
            Voir le détail
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Bœuf bourguignon carottes & purée</h2>
          <p>Portion : 500 g — Prix : 9,90 €</p>
          <Link href="/plats-surgeles/boeuf" style={{ color: "#0070f3" }}>
            Voir le détail
          </Link>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Cuisse de poulet, pommes de terre rôties & haricots verts</h2>
          <p>Portion : 550 g — Prix : 9,90 €</p>
          <Link href="/plats-surgeles/poulet-pommes-haricots" style={{ color: "#0070f3" }}>
            Voir le détail
          </Link>
        </div>
      </div>
    </div>
  );
}
