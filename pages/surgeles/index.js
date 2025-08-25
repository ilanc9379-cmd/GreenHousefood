// pages/plats-surgeles/index.js
import Head from "next/head";
import Link from "next/link";

export default function PlatsSurgelesIndex() {
  return (
    <>
      <Head>
        <title>Plats surgelés — GreenHouse</title>
        <meta
          name="description"
          content="GreenHouse — Plats surgelés artisanaux, équilibrés et savoureux."
        />
      </Head>

      <main className="page">
        <div className="wrap">
          {/* Retour */}
          <Link href="/" className="back">
            ← Retour à l’accueil
          </Link>

          {/* En-tête */}
          <header className="hero">
            <h1 className="brand">GreenHouse</h1>
            <p className="sub">Plats surgelés — Artisanaux, équilibrés & gourmands</p>
          </header>

          {/* Plat : Bolognaise */}
          <section className="card">
            <h2 className="title">Pâtes bolognaise maison</h2>
            <p className="text">
              Pâtes complètes artisanales, bœuf 5% MG, sauce tomate maison & aromates.
              Surgelé, prêt en 20 min au four, 8 min au micro-ondes ou 10 min à la poêle.
            </p>
            <div className="pills">
              <span className="pill">116,7 kcal / 100 g</span>
              <span className="pill">P&nbsp;9 g</span>
              <span className="pill">G&nbsp;14,8 g</span>
              <span className="pill">L&nbsp;2,6 g</span>
            </div>
            <Link href="/plats-surgeles/bolo" className="cta-link">
              Voir la fiche
            </Link>
          </section>

          {/* Plat : Poulet poivron */}
          <section className="card">
            <h2 className="title">Pâtes complètes & émincé de poulet, sauce poivron</h2>
            <p className="text">
              Pâtes complètes artisanales, poulet, julienne de légumes, sauce poivron maison.
              Surgelé, prêt en 20 min au four, 8 min au micro-ondes ou 10 min à la poêle.
            </p>
            <div className="pills">
              <span className="pill">122 kcal / 100 g</span>
              <span className="pill">P&nbsp;9,6 g</span>
              <span className="pill">G&nbsp;18 g</span>
              <span className="pill">L&nbsp;1,8 g</span>
            </div>
            <Link href="/plats-surgeles/poulet-poivron" className="cta-link">
              Voir la fiche
            </Link>
          </section>

          {/* Plat : Boeuf bourguignon */}
          <section className="card">
            <h2 className="title">Bœuf bourguignon</h2>
            <p className="text">
              Bœuf maigre mijoté, pommes de terre, carottes, sauce maison aux oignons & vin
              rouge. Surgelé, prêt en 20 min au four, 8 min au micro-ondes ou 10 min à la poêle.
            </p>
            <div className="pills">
              <span className="pill">122 kcal / 100 g</span>
              <span className="pill">P&nbsp;9,6 g</span>
              <span className="pill">G&nbsp;18 g</span>
              <span className="pill">L&nbsp;1,8 g</span>
            </div>
            <Link href="/plats-surgeles/boeuf" className="cta-link">
              Voir la fiche
            </Link>
          </section>

          {/* Plat : Poulet pommes haricots */}
          <section className="card">
            <h2 className="title">Poulet, pommes de terre rôties & haricots verts</h2>
            <p className="text">
              Cuisse de poulet marinée, pommes de terre rôties, haricots verts frais.
              Surgelé, prêt en 20 min au four, 8 min au micro-ondes ou 10 min à la poêle.
            </p>
            <div className="pills">
              <span className="pill">128 kcal / 100 g</span>
              <span className="pill">P&nbsp;10 g</span>
              <span className="pill">G&nbsp;12 g</span>
              <span className="pill">L&nbsp;3 g</span>
            </div>
            <Link href="/plats-surgeles/poulet-pommes-haricots" className="cta-link">
              Voir la fiche
            </Link>
          </section>
        </div>
      </main>

      <style jsx>{`
        :root {
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --ink: #0b1020;
          --muted: #5f6b80;
          --card: #ffffff;
          --soft: #f6f9ff;
        }
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fffb 0%, #f7fbff 55%, #ffffff 100%);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        }
        .wrap { max-width: 900px; margin: 0 auto; padding: 18px 16px 38px; }
        .back {
          display: inline-block;
          margin-bottom: 10px;
          color: #1a5fd1;
          font-weight: 700;
        }
        .hero {
          background: linear-gradient(135deg, rgba(10,166,76,.08), rgba(45,122,230,.08));
          border-radius: 22px;
          padding: 28px 22px;
          margin-bottom: 18px;
        }
        .brand {
          margin: 0;
          font-size: clamp(44px, 9vw, 78px);
          line-height: .92;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: .5px;
        }
        .sub { margin: 6px 0 0; color: var(--ink); opacity: .7; font-weight: 600; }

        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
          margin-top: 16px;
        }
        .title { margin: 0 0 6px; }
        .text { margin: 0 0 10px; color: var(--muted); }
        .pills { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 12px; }
        .pill {
          background: var(--soft);
          border: 1px solid #dce5f7;
          border-radius: 999px;
          padding: 6px 10px;
          font-weight: 700;
          font-size: 13px;
          color: #1f3b7a;
        }
        .cta-link {
          display: inline-block;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          color: #fff;
          padding: 10px 14px;
          border-radius: 12px;
          font-weight: 800;
          box-shadow: 0 10px 24px rgba(45,122,230,.25);
        }
      `}</style>
    </>
  );
}
