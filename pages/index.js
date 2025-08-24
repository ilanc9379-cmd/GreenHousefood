// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur | Diète & Gourmand</title>
        <meta
          name="description"
          content="Des plats diététiques et gourmands, cuisinés avec amour. Frais & surgelés — pour le goût, la praticité, et la qualité."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="site">
        {/* HERO */}
        <header className="hero">
          <div className="brand">
            <h1 className="gh">GreenHouse</h1>
            <p className="tag">Traiteur — diététique & gourmand</p>
            <p className="slogan">
              Des plats équilibrés et savoureux, frais ou surgelés, pensés pour le
              quotidien.
            </p>
          </div>
        </header>

        {/* SECTIONS */}
        <section className="sections">
          <Link href="/plats-surgeles" className="card card--a">
            <div className="card__pill">Liste</div>
            <h2>Plats surgelés</h2>
            <p>
              Recettes prêtes à l’emploi, conçues pour préserver au mieux la
              qualité et les nutriments.
            </p>
            <span className="btn">Voir la liste</span>
          </Link>

          <Link href="/plats-frais" className="card card--b">
            <div className="card__pill">Bientôt</div>
            <h2>Plats frais</h2>
            <p>
              Une gamme fraîche pour la semaine, pratique et équilibrée. (Liste à venir)
            </p>
            <span className="btn">Voir la future liste</span>
          </Link>

          <Link href="/surgeles" className="card card--c">
            <div className="card__pill">Produits</div>
            <h2>Surgelés (vrac & produits)</h2>
            <p>
              Pâtes surgelées (seigle, complète, aromette), falafels artisanaux au kilo,
              et plus encore.
            </p>
            <span className="btn">Voir les produits</span>
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} GreenHouse — Traiteur diététique & gourmand</p>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --ink: #0e1320;
          --muted: #5b6475;
          --pill: rgba(255, 255, 255, 0.7);
          --a1: #00c389;
          --a2: #2d7ae6;
          --b1: #f59e0b;
          --b2: #ef4444;
          --c1: #7c3aed;
          --c2: #06b6d4;
        }

        html, body, #__next { height: 100%; }
        body {
          margin: 0;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
          background: radial-gradient(60% 60% at 10% -10%, #ecfff7 0%, transparent 60%),
                      radial-gradient(50% 50% at 110% 0%, #eaf2ff 0%, transparent 55%),
                      linear-gradient(180deg, #f9fcff 0%, #fbfffd 50%, #ffffff 100%);
          overflow-x: hidden;
        }

        .site { min-height: 100%; display: grid; grid-template-rows: auto 1fr auto; }

        /* HERO */
        .hero {
          position: relative;
          padding: 56px 20px 24px;
          overflow: hidden;
        }
        /* arrière-plan animé doux */
        .hero::before {
          content: "";
          position: absolute; inset: -20%;
          background:
            radial-gradient(25% 25% at 20% 20%, rgba(0, 195, 137, 0.18), transparent 60%),
            radial-gradient(22% 22% at 80% 10%, rgba(45, 122, 230, 0.18), transparent 60%),
            radial-gradient(18% 18% at 50% 90%, rgba(124, 58, 237, 0.14), transparent 60%);
          filter: blur(30px);
          animation: float 14s ease-in-out infinite alternate;
          z-index: 0;
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          100% { transform: translateY(-10px) scale(1.03); opacity: 1; }
        }

        .brand { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; text-align: center; }
        .gh {
          margin: 0;
          font-size: clamp(48px, 8vw, 110px);
          line-height: 0.95;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #0aa64c 0%, #2d7ae6 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 0 transparent; /* bien net */
        }
        .tag {
          margin: 10px 0 6px;
          font-size: clamp(16px, 2.2vw, 22px);
          color: var(--muted);
          font-weight: 600;
        }
        .slogan {
          margin: 0 auto;
          font-size: clamp(14px, 2vw, 18px);
          color: #2a3a52;
          max-width: 900px;
        }

        /* SECTIONS */
        .sections {
          max-width: 1100px;
          margin: 18px auto 40px;
          padding: 0 20px;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 980px) { .sections { grid-template-columns: 1fr; } }

        .card {
          position: relative;
          display: grid;
          align-content: start;
          gap: 10px;
          padding: 22px;
          border-radius: 20px;
          text-decoration: none;
          color: inherit;
          background: white;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .card:hover { transform: translateY(-2px); box-shadow: 0 18px 40px rgba(0, 0, 0, 0.09); }

        .card--a { background: linear-gradient(180deg, rgba(0,195,137,0.12), rgba(45,122,230,0.08)) , #fff; }
        .card--b { background: linear-gradient(180deg, rgba(245,158,11,0.12), rgba(239,68,68,0.08)) , #fff; }
        .card--c { background: linear-gradient(180deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08)) , #fff; }

        .card__pill {
          display: inline-block;
          background: var(--pill);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(0,0,0,0.08);
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: #1b263b;
        }

        .card h2 { margin: 2px 0 0; font-size: clamp(20px, 2.6vw, 28px); }
        .card p { margin: 0; color: var(--muted); min-height: 48px; }

        .btn {
          margin-top: 6px;
          display: inline-block;
          font-weight: 800;
          font-size: 14px;
          padding: 10px 14px;
          border-radius: 12px;
          color: white;
          background: linear-gradient(90deg, #0aa64c, #2d7ae6);
          box-shadow: 0 12px 28px rgba(45, 122, 230, 0.25);
        }

        .foot {
          text-align: center;
          color: var(--muted);
          padding: 28px 16px 40px;
        }
      `}</style>
    </>
  );
}
