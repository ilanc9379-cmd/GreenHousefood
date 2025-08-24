// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur</title>
        <meta
          name="description"
          content="GreenHouse — Traiteur artisanal en Alsace. Diététique & Gourmand."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        <header className="hero">
          <h1 className="brand">GreenHouse</h1>
          <p className="tag">Traiteur — Diététique & Gourmand</p>
          <p className="lead">
            Des plats maison équilibrés, cuisinés avec soin et surgelés pour
            préserver leurs qualités. Diète ou gourmand : à vous de choisir.
          </p>
        </header>

        <section className="grid">
          <article className="card">
            <h3 className="title">Pâtes Bolognaise maison</h3>
            <p className="desc">
              Bolognaise authentique avec pâtes au seigle artisanales.
            </p>
            <Link className="btn" href="/plats/bolo">
              Voir le plat
            </Link>
          </article>

          <article className="card">
            <h3 className="title">Pâtes émincé poulet & sauce poivron</h3>
            <p className="desc">
              Poulet tendre, sauce poivron maison, julienne de légumes.
            </p>
            <Link className="btn" href="/plats/pates-poulet-poivron">
              Voir le plat
            </Link>
          </article>

          <article className="card">
            <h3 className="title">Bœuf carottes & purée maison</h3>
            <p className="desc">
              Bœuf bourguignon maigre, carottes fondantes, purée légère.
            </p>
            <Link className="btn" href="/plats/boeuf">
              Voir le plat
            </Link>
          </article>
        </section>

        <footer className="foot">
          <small>© {new Date().getFullYear()} GreenHouse</small>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --ink: #0b1020;
          --muted: #556072;
          --card: #fff;
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --ring: rgba(45, 122, 230, 0.18);
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
          background: radial-gradient(
              1200px 800px at -10% -20%,
              #e7fff4,
              transparent 60%
            ),
            radial-gradient(1000px 700px at 110% -10%, #e9f2ff, transparent 65%),
            linear-gradient(180deg, #f7fbff 0%, #f9fffb 60%, #ffffff 100%);
        }

        .wrap {
          min-height: 100%;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px 12px;
        }
        .brand {
          font-size: clamp(42px, 8vw, 84px);
          line-height: 0.95;
          margin: 0 0 8px 0;
          font-weight: 900;
          letter-spacing: 0.5px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tag {
          margin: 0;
          font-weight: 700;
        }
        .lead {
          margin: 8px 0 20px;
          color: var(--muted);
          max-width: 70ch;
        }

        .grid {
          max-width: 1100px;
          margin: 12px auto 36px;
          padding: 0 20px;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 980px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06),
            0 1px 0 rgba(255, 255, 255, 0.7) inset;
          display: grid;
          gap: 10px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .title {
          margin: 0;
          font-size: 20px;
        }
        .desc {
          margin: 0;
          color: var(--muted);
        }
        .btn {
          margin-top: 6px;
          width: fit-content;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          color: white;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 10px 25px rgba(45, 122, 230, 0.22);
        }
        .btn:focus {
          outline: none;
          box-shadow: 0 0 0 4px var(--ring), 0 10px 25px rgba(45, 122, 230, 0.22);
        }

        .foot {
          text-align: center;
          color: var(--muted);
          padding: 30px 16px 40px;
        }
      `}</style>
    </>
  );
}
