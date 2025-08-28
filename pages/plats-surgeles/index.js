// pages/plats-surgeles/index.js
import Link from "next/link";
import Image from "next/image";

export default function PlatsSurgelesIndex() {
  const plats = [
    {
      title: "Pâtes bolognaise maison",
      slug: "bolo",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 700, P: 54.3, G: 89, L: 15.8 },
      image: "/images/plats/bolo.png",
    },
    {
      title: "Pâtes complètes — émincé de poulet & sauce poivron (maison)",
      slug: "poulet-poivron",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 689, P: 62, G: 86, L: 10 },
      image: "/images/plats/poulet-poivron.png",
    },
    {
      title: "Bœuf carottes & purée de pomme de terre",
      slug: "boeuf-carottes",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 610, P: 48, G: 48, L: 18 },
      image: "/images/plats/boeuf-carrettes-puree.png", // mets ton vrai nom de fichier
    },
    {
      title: "Cuisse de poulet rôtie, pommes de terre & haricots verts",
      slug: "poulet-pommes-haricots",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 560, P: 45, G: 35, L: 20 },
      image: "/images/plats/poulet-pommes-haricots.png",
    },
    {
      title: "Moussaka revisitée",
      slug: "moussaka",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 900, P: 55, G: 95, L: 30 }, // estim. (tu peux ajuster)
      image: "/images/plats/moussaka.png",
    },
    {
      title: "Riz complet aux petits légumes & cabillaud",
      slug: "riz-cabillaud",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 585, P: 39, G: 78, L: 13 },
      image: "/images/plats/riz-cabillaud.png",
    },
    {
      title: "Pâtes aromettes — poulet crémeux & brocolis",
      slug: "pates-aromettes-poulet-cremeux-brocolis",
      price: 9.9,
      badges: ["Surgelé", "Diète"],
      macros: { kcal: 705, P: 49, G: 77, L: 22 },
      image: "/images/plats/pates-aromettes-poulet-cremeux-brocolis.png",
    },
    {
      title: "Curry de pois chiches (végé)",
      slug: "curry-pois-chiches",
      price: 9.9,
      badges: ["Surgelé", "Diète", "Végétarien"],
      macros: { kcal: 520, P: 20, G: 60, L: 21 },
      image: "/images/plats/curry-pois-chiches.png",
    },
    {
      title: "Falafels & purée de patate douce",
      slug: "falafel-patate-douce",
      price: 9.9,
      badges: ["Surgelé", "Diète", "Végétarien"],
      macros: { kcal: 640, P: 24, G: 84, L: 20 }, // estim. (ajuste si besoin)
      image: "/images/plats/falafel-patate-douce.png",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <Link href="/">
            <a aria-label="Retour à l'accueil" style={styles.back}>
              ← Accueil
            </a>
          </Link>
          <h1 style={styles.brand}>Green<span style={styles.brandAccent}>House</span></h1>
          <p style={styles.tagline}>
            Plats surgelés — cuisinés artisanalement pour allier goût, équilibre et praticité.
          </p>
        </div>
      </header>

      <main style={styles.container}>
        <div style={styles.cards}>
          {plats.map((p) => (
            <article key={p.slug} style={styles.card}>
              <div style={styles.imageWrap}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={560}
                  height={360}
                  style={{ borderRadius: 14, objectFit: "cover" }}
                />
              </div>

              <h2 style={styles.title}>{p.title}</h2>

              <div style={styles.badges}>
                {p.badges.map((b) => (
                  <span key={b} style={badge(b)}>
                    {b}
                  </span>
                ))}
              </div>

              <div style={styles.macros}>
                <span style={chip}>⚡ {p.macros.kcal} kcal</span>
                <span style={chip}>🥩 P&nbsp;{p.macros.P} g</span>
                <span style={chip}>🍝 G&nbsp;{p.macros.G} g</span>
                <span style={chip}>🫒 L&nbsp;{p.macros.L} g</span>
              </div>

              <div style={styles.footerRow}>
                <div style={styles.priceBox}>
                  <div style={styles.priceLabel}>Prix</div>
                  <div style={styles.priceValue}>9,90 €</div>
                </div>
                <Link href={`/plats-surgeles/${p.slug}`}>
                  <a style={styles.cta}>Voir le détail →</a>
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
  page: {
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    color: "#0f172a",
    background:
      "radial-gradient(1000px 700px at -10% -10%, #dff8ee 0%, transparent 60%), radial-gradient(900px 600px at 110% -20%, #e8f7ff 0%, transparent 65%), linear-gradient(180deg, #f5fbff 0%, #f7fff9 60%, #fdfefe 100%)",
    minHeight: "100vh",
  },
  header: {
    background:
      "linear-gradient(135deg, rgba(16,185,129,1) 0%, rgba(59,130,246,1) 100%)",
    color: "white",
    padding: "28px 16px",
    boxShadow: "0 10px 30px rgba(37,99,235,.20)",
  },
  headerInner: { maxWidth: 1100, margin: "0 auto" },
  brand: {
    margin: 0,
    fontSize: 48,
    lineHeight: 0.95,
    fontWeight: 900,
    background: "linear-gradient(90deg,#0aa64c,#2d7ae6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    letterSpacing: 0.5,
  },
  brandAccent: { WebkitTextStroke: "0px transparent" }, // évite la coupure du "E"
  tagline: { margin: "8px 0 0", opacity: 0.96, fontWeight: 600 },
  back: {
    display: "inline-block",
    marginBottom: 10,
    background: "rgba(255,255,255,0.18)",
    padding: "6px 10px",
    borderRadius: 8,
    color: "white",
    textDecoration: "none",
    fontWeight: 600,
  },
  container: { maxWidth: 1100, margin: "24px auto 64px", padding: "0 16px" },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 18,
  },
  card: {
    background: "white",
    borderRadius: 18,
    padding: 14,
    boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    transition: "transform .12s ease, box-shadow .12s ease",
  },
  imageWrap: { borderRadius: 14, overflow: "hidden" },
  title: { margin: "4px 0 2px", fontSize: 18, fontWeight: 900, lineHeight: 1.25 },
  badges: { display: "flex", gap: 8, flexWrap: "wrap" },
  macros: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 2,
  },
  footerRow: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  priceBox: {
    background: "#f1f5f9",
    borderRadius: 12,
    padding: "8px 12px",
    minWidth: 120,
  },
  priceLabel: { color: "#64748b", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: ".5px" },
  priceValue: { fontSize: 22, fontWeight: 900 },
  cta: {
    background:
      "linear-gradient(135deg, rgba(16,185,129,1) 0%, rgba(59,130,246,1) 100%)",
    color: "white",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: 12,
    fontWeight: 800,
    boxShadow: "0 8px 18px rgba(59,130,246,.25)",
  },
};

const chip = {
  background: "#eef2ff",
  border: "1px solid #e2e8f0",
  borderRadius: 999,
  padding: "6px 10px",
  fontWeight: 700,
  fontSize: 12,
};

const badge = (label) => {
  const map = {
    Surgelé: { bg: "#e6f7f1", fg: "#0c7a5f" },
    Diète: { bg: "#fff4e6", fg: "#b35a00" },
    Végétarien: { bg: "#eaf0ff", fg: "#3650ff" },
  };
  const { bg, fg } = map[label] || { bg: "#f1f5f9", fg: "#0f172a" };
  return {
    background: bg,
    color: fg,
    borderRadius: 999,
    padding: "6px 10px",
    fontWeight: 800,
    fontSize: 12,
  };
};
