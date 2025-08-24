// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur | Diététique & Gourmand</title>
        <meta
          name="description"
          content="Des plats maison équilibrés, cuisinés avec soin et surgelés pour préserver toutes leurs qualités."
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="wrap">
        {/* HERO */}
        <header className="hero">
          <h1 className="brand">GreenHouse</h1>
          <p className="tag">Traiteur — Diététique & Gourmand</p>
          <p className="intro">
            Des plats maison équilibrés, cuisinés avec soin et{" "}
            <strong>surgelés</strong> pour préserver toutes leurs qualités.
            Diète ou gourmand : à vous de choisir.
          </p>
        </header>

        {/* LISTE DES PLATS */}
        <section className="list">
          <article className="card">
            <h2 className="title">Pâtes Bolognaise maison</h2>
            <p className="resume">
              Une bolognaise authentique avec pâtes au seigle artisanales.
            </p>
            <Link href="/plats/bolo" className="btn">
              Voir le plat
            </Link>
          </article>

          <article className="card">
            <h2 className="title">Pâtes émincé poulet & sauce poivron</h2>
            <p className="resume">
              Poulet tendre, sauce poivron maison et julienne de légumes.
            </p>
            <Link href="/plats/pates-poulet-poivron" className="btn">
              Voir le plat
            </Link>
          </article>

          <article className="card">
            <h2 className="title">Bœuf carottes & purée maison</h2>
            <p className="resume">
              Bœuf bourguignon maigre, carottes fondantes et purée légère.
            </p>
            <Link href="/plats/boeuf" className="btn">
              Voir le plat
            </Link>
          </article>
        </section>

        <footer className="foot">
          © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
        </footer>
      </main>

      <style jsx>{`
        :root {
          --ink: #0b1020;
          --muted: #556070;
          --card: #ffffff;
          --ring: rgba(27, 165, 120, 0.2);
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --bg1: #e8f7ff;
          --bg2: #e6fff4;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            "Helvetica Neue", Arial;
        }

        .wrap {
          min-height: 100%;
          background: radial-gradient(
              1200px 800px at -10% -10%,
              var(--bg2),
              transparent 60%
            ),
            radial-gradient(
              1100px 700px at 110% -20%,
              var(--bg1),
              transparent 65%
            ),
            linear-gradient(180deg, #f7fffb 0%, #f5fbff 60%, #ffffff 100%);
        }

        .hero {
          max-width: 1000px;
          margin: 0 auto;
          padding: 46px 20px 10px;
        }
        .brand {
          margin: 0;
          font-weight: 900;
          letter-spacing: 0.5px;
          font-size: clamp(42px, 9vw, 92px);
          line-height: 0.95;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 8px 40px rgba(45, 122, 230, 0.25);
        }
        .tag {
          margin: 10px 0 6px;
          font-weight: 700;
        }
        .intro {
          margin: 0;
          max-width: 800px;
          color: var(--muted);
          font-size: clamp(16px, 2.5vw, 20px);
        }

        .list {
          max-width: 1000px;
          margin: 18px auto 40px;
          padding: 0 20px;
          display: grid;
          gap: 16px;
        }

        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06),
            0 1px 0 rgba(255, 255, 255, 0.7) inset;
        }
        .title {
          margin: 0 0 6px;
          font-size: 22px;
        }
        .resume {
          margin: 0 0 12px;
          color: var(--muted);
        }
        .btn {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 12px;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 10px 25px rgba(45, 122, 230, 0.22);
        }
        .btn:active {
          transform: translateY(1px);
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
