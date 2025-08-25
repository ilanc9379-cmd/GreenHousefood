// pages/surgeles/index.js
import Head from "next/head";
import Link from "next/link";

export default function SurgelesIndex() {
  return (
    <>
      <Head>
        <title>Produits surgelés — GreenHouse</title>
        <meta
          name="description"
          content="GreenHouse — Pâtes artisanales & falafels surgelés. Qualité, goût et praticité."
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
            <p className="sub">Produits surgelés — Pâtes artisanales &amp; falafels</p>
          </header>

          {/* Pâtes */}
          <section className="card">
            <h2 className="title">Pâtes artisanales (surgelées)</h2>
            <p className="text">
              Farines locales (seigle, complète, aromette) &amp; <b>œufs frais plein air</b>.
              Surgelées pour une cuisson express et une qualité constante. <b>Cuisson&nbsp;:</b>{" "}
              eau bouillante <b>1&nbsp;min&nbsp;30</b>.
            </p>

            {/* Macros en boîtes */}
            <div className="pills">
              <span className="pill">175 kcal / 100 g (cuit)</span>
              <span className="pill">P&nbsp;6,4&nbsp;g</span>
              <span className="pill">G&nbsp;34&nbsp;g</span>
              <span className="pill">L&nbsp;1,9&nbsp;g</span>
            </div>

            <Link href="/surgeles/pates" className="cta-link">
              Voir les pâtes
            </Link>
          </section>

          {/* Falafels */}
          <section className="card">
            <h2 className="title">Falafels artisanaux (surgelés)</h2>
            <p className="text">
              Pois chiches réhydratés, herbes fraîches et épices. <b>Prix&nbsp;:</b>{" "}
              10,00&nbsp;€ / kg. Surgelés pour garder le moelleux à cœur et le croustillant
              après cuisson.
            </p>

            {/* Macros en boîtes */}
            <div className="pills">
              <span className="pill">184 kcal / 100 g</span>
              <span className="pill">P&nbsp;7,6&nbsp;g</span>
              <span className="pill">G&nbsp;20,1&nbsp;g</span>
              <span className="pill">L&nbsp;7,4&nbsp;g</span>
            </div>

            <Link href="/surgeles/falafels" className="cta-link">
              Voir les falafels
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
          background:
            radial-gradient(900px 600px at -10% -10%, #eafff3, transparent 60%),
            radial-gradient(900px 600px at 110% -20%, #e7f0ff, transparent 65%),
            linear-gradient(180deg, #f8fffb 0%, #f7fbff 55%, #ffffff 100%);
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
