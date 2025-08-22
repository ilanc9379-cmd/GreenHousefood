import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur artisanal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.page}>
        <div style={styles.wrap}>
          <header style={styles.hero}>
            <h1 style={styles.brand}>GreenHouse</h1>
            <p style={styles.subtitle}>Traiteur artisanal — Diététique &amp; Gourmand</p>

            <div style={styles.chips}>
              <span style={styles.chip}>Livraison</span>
              <span style={styles.chip}>Pâtes fraîches</span>
              <span style={styles.chip}>Falafels maison</span>
              <span style={styles.chip}>Surgelés qualité</span>
            </div>

            <div style={styles.cta}>
              <a href="#plats" style={{ ...styles.btn, ...styles.btnPrimary }}>Voir nos plats</a>
              <a href="#infos" style={{ ...styles.btn, ...styles.btnGhost }}>Infos produits</a>
            </div>
          </header>

          <section id="infos" style={styles.card}>
            <h2 style={styles.h2}>Le bon plat au bon prix</h2>
            <p style={styles.p}>
              Diète ou gourmand — à vous de choisir. Pâtes fraîches maison, gammes fraîches et surgelées,
              falafels artisanaux.
            </p>
          </section>

          <section style={styles.card}>
            <h2 style={styles.h2}>Livraison</h2>
            <p style={styles.p}>
              <strong>Zones :</strong> Mulhouse, Kingersheim, Wittenheim, Pulversheim, Wittelsheim,
              Richwiller, Lutterbach, Pfastatt, Illzach, Rixheim, Riedisheim, Habsheim, Eschentzwiller, Brunstatt.
            </p>
          </section>

          <footer style={styles.footer}>
            © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
          </footer>
        </div>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    display: "grid",
    placeItems: "center",
    background:
      "radial-gradient(1300px 700px at 10% -200px, rgba(56,189,248,.06), transparent 60%)," +
      "radial-gradient(1000px 600px at 90% -150px, rgba(34,197,94,.07), transparent 55%)," +
      "radial-gradient(900px 560px at 30% 110%, rgba(99,102,241,.07), transparent 60%)," +
      "linear-gradient(180deg, #0b1020 0%, #111a2d 70%)",
    color: "rgba(255,255,255,.92)",
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"
  },
  wrap: { width: "min(1100px, 92vw)", margin: "0 auto", padding: "24px" },
  hero: {
    padding: "32px",
    borderRadius: "24px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
    boxShadow: "0 10px 30px rgba(0,0,0,.25)",
    border: "1px solid rgba(255,255,255,.08)",
    marginBottom: "24px"
  },
  brand: {
    fontSize: "clamp(42px, 7vw, 86px)",
    lineHeight: 1.05,
    margin: 0,
    letterSpacing: "-.02em",
    background:
      "linear-gradient(90deg, #34d399, #22d3ee, #a78bfa, #34d399)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  },
  subtitle: {
    margin: "10px 0 18px",
    fontSize: "clamp(16px, 2.6vw, 22px)",
    opacity: .92
  },
  chips: { display: "flex", flexWrap: "wrap", gap: "10px", margin: "18px 0 6px" },
  chip: {
    padding: "8px 14px",
    borderRadius: "999px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04))",
    border: "1px solid rgba(255,255,255,.10)",
    fontSize: 14,
    opacity: .95
  },
  cta: { display: "flex", gap: "12px", marginTop: 18, flexWrap: "wrap" },
  btn: {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: ".2px",
    transition: "transform .15s ease, opacity .15s ease",
    border: "1px solid rgba(255,255,255,.12)"
  },
  btnPrimary: {
    background:
      "linear-gradient(90deg, #10b981, #06b6d4, #8b5cf6)",
    boxShadow: "0 10px 20px rgba(0,0,0,.25)",
    color: "white"
  },
  btnGhost: { background: "transparent", color: "rgba(255,255,255,.9)", opacity: .9 },
  card: {
    background:
      "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 22,
    padding: "24px",
    marginBottom: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,.25)"
  },
  h2: {
    margin: "0 0 10px",
    fontSize: "clamp(22px, 3.3vw, 34px)",
    letterSpacing: "-.01em"
  },
  p: { margin: 0, opacity: .93, lineHeight: 1.6, fontSize: "clamp(15px, 2.5vw, 18px)" },
  footer: { textAlign: "center", opacity: .7, padding: "24px 6px" }
};
