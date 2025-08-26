// pages/plats-surgeles/curry-pois-chiches.js
import Link from "next/link";
import { useState, useMemo } from "react";

export default function CurryPoisChiches() {
  // Prix unitaire
  const unitPrice = 9.9;

  // Quantité
  const [qty, setQty] = useState(1);
  const total = useMemo(() => (qty * unitPrice).toFixed(2), [qty]);

  // Nutrition pour 1 portion (≈500 g)
  const perPortion = {
    energie: 520, // kcal
    lipides: 21,
    satures: 8,
    glucides: 60,
    sucres: 8,
    proteines: 20,
    fibres: 14,
    sel: 1.0,
  };

  // Nutrition pour 100 g (dérivé)
  const per100 = {
    energie: Math.round(perPortion.energie / 5),
    lipides: +(perPortion.lipides / 5).toFixed(1),
    satures: +(perPortion.satures / 5).toFixed(1),
    glucides: +(perPortion.glucides / 5).toFixed(1),
    sucres: +(perPortion.sucres / 5).toFixed(1),
    proteines: +(perPortion.proteines / 5).toFixed(1),
    fibres: +(perPortion.fibres / 5).toFixed(1),
    sel: +(perPortion.sel / 5).toFixed(1),
  };

  return (
    <div style={styles.page}>
      {/* Bandeau gradient + slogan */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <Link href="/plats-surgeles">
            <a aria-label="Retour à la liste" style={styles.back}>
              ← Retour
            </a>
          </Link>
          <h1 style={styles.brand}>GreenHouse</h1>
          <p style={styles.tagline}>Traiteur — Diététique & Gourmand</p>
        </div>
      </header>

      <main style={styles.container}>
        {/* Titre + badges + accroche */}
        <section style={styles.hero}>
          <h2 style={styles.title}>Curry de pois chiches</h2>
          <div style={styles.badges}>
            <span style={{ ...badge, background: "#e6f7f1", color: "#0c7a5f" }}>
              Surgelé
            </span>
            <span style={{ ...badge, background: "#eaf0ff", color: "#3650ff" }}>
              Végétarien
            </span>
            <span style={{ ...badge, background: "#fff4e6", color: "#b35a00" }}>
              Diète
            </span>
          </div>
          <p style={styles.lead}>
            Portion : <strong>500 g</strong> • Riche en fibres et protéines
            végétales. Saveurs douces et parfumées.
          </p>
          <p style={styles.subLead}>
            La surgélation préserve fraîcheur et qualités nutritionnelles pour
            un plat prêt à réchauffer en quelques minutes.
          </p>
        </section>

        {/* Grille : Nutriments / Ingrédients / Prix */}
        <section style={styles.grid}>
          {/* NUTRITION */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Valeurs nutritionnelles</h3>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Valeurs</th>
                    <th style={styles.th}>Pour 100 g</th>
                    <th style={styles.th}>Par portion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.td}>Énergie</td>
                    <td style={styles.td}>{per100.energie} kcal</td>
                    <td style={styles.td}>{perPortion.energie} kcal</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Matières grasses</td>
                    <td style={styles.td}>{per100.lipides} g</td>
                    <td style={styles.td}>{perPortion.lipides} g</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>dont acides saturés</td>
                    <td style={styles.td}>{per100.satures} g</td>
                    <td style={styles.td}>{perPortion.satures} g</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Glucides</td>
                    <td style={styles.td}>{per100.glucides} g</td>
                    <td style={styles.td}>{perPortion.glucides} g</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>dont sucres</td>
                    <td style={styles.td}>{per100.sucres} g</td>
                    <td style={styles.td}>{perPortion.sucres} g</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Protéines</td>
                    <td style={styles.td}>{per100.proteines} g</td>
                    <td style={styles.td}>{perPortion.proteines} g</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Fibres</td>
                    <td style={styles.td}>{per100.fibres} g</td>
                    <td style={styles.td}>{perPortion.fibres} g</td>
                  </tr>
                  <tr>
                    <td style={styles.td}>Sel</td>
                    <td style={styles.td}>{per100.sel} g</td>
                    <td style={styles.td}>{perPortion.sel} g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* INGRÉDIENTS */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Ingrédients</h3>
            <ul style={styles.pills}>
              <li style={pill}>Pois chiches cuits — 200 g</li>
              <li style={pill}>Lait de coco — 120 ml</li>
              <li style={pill}>Sauce tomate — 120 ml</li>
              <li style={pill}>Tomates cerises — 50 g</li>
              <li style={pill}>Épinards frais — 50 g</li>
              <li style={pill}>Oignon — 1 petit</li>
              <li style={pill}>Ail — 1 gousse</li>
              <li style={pill}>Persil frais — 10 g</li>
              <li style={pill}>Huile d’olive — 7 g</li>
              <li style={pill}>Curry — 2 cc</li>
              <li style={pill}>Garam masala — 1 cc</li>
              <li style={pill}>Sel, poivre</li>
              <li style={pill}>Jus de ½ citron</li>
            </ul>

            <div style={styles.infoBlock}>
              <h4 style={styles.smallTitle}>Cuisson après surgélation</h4>
              <ul style={styles.list}>
                <li>Four : 20 min à 150&nbsp;°C</li>
                <li>Micro-ondes : 8 min</li>
                <li>Poêle : 10 min</li>
              </ul>
            </div>

            <div style={styles.infoBlock}>
              <h4 style={styles.smallTitle}>Conservation</h4>
              <ul style={styles.list}>
                <li>Au congélateur : maximum 4 mois</li>
                <li>Après décongélation : 48 h au réfrigérateur</li>
                <li>Ne pas recongeler un produit décongelé</li>
              </ul>
            </div>

            <div style={styles.infoBlock}>
              <h4 style={styles.smallTitle}>Allergènes</h4>
              <p style={{ margin: 0 }}>
                Peut contenir des traces de <strong>gluten</strong> et de{" "}
                <strong>fruits à coque</strong>.
              </p>
            </div>
          </div>

          {/* PRIX / COMMANDE */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Prix unitaire</h3>
            <div style={styles.priceRow}>
              <div style={styles.price}>
                <span style={styles.priceValue}>9,90&nbsp;€</span>
              </div>
              <div style={styles.qtyBox}>
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  style={styles.qtyBtn}
                  aria-label="Diminuer"
                >
                  –
                </button>
                <input
                  aria-label="Quantité"
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                  }
                  style={styles.qtyInput}
                />
                <button
                  onClick={() => setQty((q) => q + 1)}
                  style={styles.qtyBtn}
                  aria-label="Augmenter"
                >
                  +
                </button>
              </div>
            </div>

            <div style={styles.totalRow}>
              <span>Total ({qty} {qty > 1 ? "plats" : "plat"})</span>
              <strong>{total} €</strong>
            </div>

            <button style={styles.cta}>Commander</button>
          </div>
        </section>

        {/* Lien retour bas de page */}
        <div style={{ marginTop: 24 }}>
          <Link href="/plats-surgeles">
            <a style={styles.backLink}>← Retour à la liste des plats surgelés</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

/* ---------------- STYLES ---------------- */
const styles = {
  page: { fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#0f172a" },
  header: {
    background: "linear-gradient(135deg,#2dd4bf,#60a5fa)",
    color: "white",
    padding: "28px 16px",
  },
  headerInner: { maxWidth: 980, margin: "0 auto" },
  brand: { margin: 0, fontSize: 40, letterSpacing: 0.2, fontWeight: 800 },
  tagline: { margin: "6px 0 0", opacity: 0.95, fontWeight: 600 },
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
  container: { maxWidth: 980, margin: "20px auto 60px", padding: "0 16px" },
  hero: { marginBottom: 18 },
  title: { margin: "0 0 8px", fontSize: 34, fontWeight: 800 },
  badges: { display: "flex", gap: 10, flexWrap: "wrap", margin: "8px 0 10px" },
  lead: { margin: "0 0 4px", fontWeight: 600 },
  subLead: { margin: 0, color: "#334155" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.1fr 0.8fr",
    gap: 16,
  },
  card: {
    background: "white",
    borderRadius: 14,
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
    padding: 16,
  },
  cardTitle: { margin: "4px 0 12px", fontSize: 18, fontWeight: 800, color: "#0b1220" },
  tableWrapper: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 14 },
  th: {
    textAlign: "left",
    background: "#f1f5f9",
    padding: "10px 12px",
    position: "sticky",
    top: 0,
    fontWeight: 800,
  },
  td: { padding: "10px 12px", borderTop: "1px solid #e2e8f0" },
  pills: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 8,
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  infoBlock: {
    marginTop: 14,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: 12,
  },
  smallTitle: { margin: "0 0 6px", fontSize: 14, fontWeight: 800, color: "#0b1220" },
  list: { margin: 0, paddingLeft: 18 },
  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },
  price: { background: "#f1f5f9", padding: "10px 12px", borderRadius: 12 },
  priceValue: { fontSize: 26, fontWeight: 900 },
  qtyBox: { display: "flex", alignItems: "center", gap: 8 },
  qtyBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    background: "white",
    fontSize: 18,
    cursor: "pointer",
  },
  qtyInput: {
    width: 48,
    height: 36,
    borderRadius: 10,
    border: "1px solid #e2e8f0",
    textAlign: "center",
    fontWeight: 700,
  },
  totalRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 12,
    padding: "10px 12px",
    marginBottom: 12,
  },
  cta: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "none",
    fontWeight: 800,
    color: "white",
    background:
      "linear-gradient(135deg, rgba(16,185,129,1) 0%, rgba(59,130,246,1) 100%)",
    cursor: "pointer",
  },
  backLink: {
    textDecoration: "none",
    fontWeight: 700,
    color: "#0ea5e9",
  },
};

// Badges & Pills shared
const badge = {
  fontWeight: 800,
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
};

const pill = {
  padding: "10px 12px",
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(15,23,42,0.03)",
};
