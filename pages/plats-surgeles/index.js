// pages/plats-surgeles/index.js
import Link from "next/link";

export default function PlatsSurgelesIndex() {
  const plats = [
    {
      title: "Pâtes bolognaise maison",
      slug: "bolo",
      price: 9.9,
      img: "/images/plats-surgeles/pates-bolo.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 700, P: 54.3, G: 89, L: 15.8 },
    },
    {
      title: "Pâtes complètes — émincé de poulet & sauce poivron (maison)",
      slug: "poulet-poivron",
      price: 9.9,
      img: "/images/plats-surgeles/poulet-poivron.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 689, P: 62, G: 86, L: 10 },
    },
    {
      title: "Bœuf carottes & purée de pomme de terre",
      slug: "boeuf-carottes",
      price: 9.9,
      img: "/images/plats-surgeles/boeuf-carottes.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 610, P: 48, G: 48, L: 18 },
    },
    {
      title: "Cuisse de poulet rôtie, pommes de terre & haricots verts",
      slug: "poulet-pommes-haricots",
      price: 9.9,
      img: "/images/plats-surgeles/poulet-pommes-haricots.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 560, P: 45, G: 35, L: 20 },
    },
    {
      title: "Moussaka revisitée (aubergine, riz complet, bœuf 5%, tomate)",
      slug: "moussaka",
      price: 9.9,
      img: "/images/plats-surgeles/moussaka.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 900, P: 55, G: 95, L: 30 },
    },
    {
      title: "Riz complet aux petits légumes & cabillaud",
      slug: "riz-cabillaud",
      price: 9.9,
      img: "/images/plats-surgeles/riz-cabillaud.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 585, P: 39, G: 78, L: 13 },
    },
    {
      title: "Pâtes aromettes — poulet crémeux & brocolis",
      slug: "pates-aromettes-poulet-cremeux-brocolis",
      price: 9.9,
      img: "/images/plats-surgeles/pates-aromettes-poulet-cremeux-brocolis.png",
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 705, P: 49, G: 77, L: 22 },
    },
    {
      title: "Curry de pois chiches",
      slug: "curry-pois-chiches",
      price: 9.9,
      img: "/images/plats-surgeles/curry-pois-chiches.png",
      badges: ["Surgelé", "Diète", "Végétarien"],
      macros: { kcal: 520, P: 20, G: 60, L: 21 },
    },
    {
      title: "Falafels artisanaux & purée de patate douce",
      slug: "falafel-patate-douce",
      price: 9.9,
      img: "/images/plats-surgeles/falafel-patate-douce.png",
      badges: ["Surgelé", "Diète", "Végétarien"],
      macros: { kcal: 560, P: 22, G: 70, L: 18 },
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.brand}>GreenHouse</h1>
        <p style={styles.tagline}>
          Plats surgelés — cuisinés artisanalement pour allier goût, équilibre et praticité
        </p>
      </header>

      <main style={styles.container}>
        <div style={styles.cards}>
          {plats.map((p) => (
            <article key={p.slug} style={styles.card}>
              <img src={p.img} alt={p.title} style={styles.img} />
              <h2 style={styles.title}>{p.title}</h2>

              <div style={styles.badges}>
                {p.badges.map((b) => (
                  <span key={b} style={badge(b)}>{b}</span>
                ))}
              </div>

              <div style={styles.macros}>
                <span style={chip}>⚡ {p.macros.kcal} kcal</span>
                <span style={chip}>🥩 P {p.macros.P} g</span>
                <span style={chip}>🍝 G {p.macros.G} g</span>
                <span style={chip}>🫒 L {p.macros.L} g</span>
              </div>

              <div style={styles.footerRow}>
                <div style={styles.priceValue}>{p.price.toFixed(2)} €</div>
                <Link href={`/plats-surgeles/${p.slug}`}>
                  <a style={styles.link}>Voir le détail →</a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

/* ---------------- STYLES ---------------- */
const styles = {
  page: { fontFamily: "Inter, sans-serif", background: "#f7fafc", minHeight: "100vh" },
  header: { background: "linear-gradient(135deg,#2dd4bf,#60a5fa)", color: "white", padding: "28px 16px" },
  brand: { fontSize: 42, fontWeight: 800, margin: 0 },
  tagline: { margin: "8px 0 0", fontWeight: 500 },
  container: { maxWidth: 1100, margin: "24px auto", padding: "0 16px" },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 },
  card: { background: "white", borderRadius: 16, padding: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" },
  img: { width: "100%", borderRadius: 12, marginBottom: 8, objectFit: "cover" },
  title: { fontSize: 18, fontWeight: 800 },
  badges: { display: "flex", gap: 6, flexWrap: "wrap" },
  macros: { display: "flex", gap: 6, flexWrap: "wrap", margin: "8px 0" },
  footerRow: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  priceValue: { fontSize: 20, fontWeight: 700 },
  link: {
    color: "white",
    background: "linear-gradient(135deg,#16a34a,#2563eb)",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 700,
    textDecoration: "none",
  },
};

const chip = {
  background: "#eef2ff",
  borderRadius: 999,
  padding: "4px 8px",
  fontSize: 12,
  fontWeight: 600,
};

const badge = (label) => {
  const colors = {
    "Surgelé": ["#e6f7f1", "#0c7a5f"],
    "Diète": ["#fff4e6", "#b35a00"],
    "Végétarien": ["#eaf0ff", "#3650ff"],
  };
  const [bg, fg] = colors[label] || ["#f1f5f9", "#0f172a"];
  return {
    background: bg,
    color: fg,
    borderRadius: 999,
    padding: "4px 8px",
    fontSize: 12,
    fontWeight: 700,
  };
};
