import Link from "next/link";

export default function PlatsSurgelesIndex() {
  const plats = [
    {
      titre: "Pâtes bolognaise maison",
      lien: "/plats-surgeles/bolo",
      portion: "600 g",
      prix: "9,90 €",
    },
    {
      titre: "Pâtes complètes émincé de poulet & sauce poivron",
      lien: "/plats-surgeles/poulet-poivron",
      portion: "600 g",
      prix: "9,90 €",
    },
    {
      titre: "Bœuf bourguignon carottes & purée",
      lien: "/plats-surgeles/boeuf",
      portion: "600 g",
      prix: "9,90 €",
    },
    {
      titre: "Poulet pommes de terre rôties & haricots verts",
      lien: "/plats-surgeles/poulet-pommes-haricots",
      portion: "600 g",
      prix: "9,90 €",
    },
    {
      titre: "Moussaka revisitée au riz complet",
      lien: "/plats-surgeles/moussaka",
      portion: "600 g",
      prix: "9,90 €",
    },
    {
      titre: "Cabillaud aux petits légumes & riz complet",
      lien: "/plats-surgeles/cabillaud-riz-legumes",
      portion: "600 g",
      prix: "9,90 €",
    },
    {
      titre: "Pâtes aromettes poulet crémeux & brocolis",
      lien: "/plats-surgeles/pates-aromettes-poulet-brocolis",
      portion: "600 g",
      prix: "9,90 €",
    },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#0f766e" }}>GreenHouse</h1>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Plats surgelés — Cuisinés artisanalement pour préserver saveurs, équilibre et nutriments
      </h2>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {plats.map((plat, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#0f766e" }}>
              {plat.titre}
            </h3>
            <p style={{ margin: "0.2rem 0" }}>Portion : {plat.portion}</p>
            <p style={{ margin: "0.2rem 0" }}>Prix : {plat.prix}</p>
            <Link href={plat.lien}>
              <a style={{ color: "#2563eb", textDecoration: "underline" }}>
                Voir le détail
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link href="/">
          <a style={{ color: "#2563eb", textDecoration: "underline" }}>
            ← Retour à l'accueil
          </a>
        </Link>
      </div>
    </div>
  );
}
