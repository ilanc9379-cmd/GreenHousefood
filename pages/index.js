// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrap">
      <header className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="tagline">Traiteur — Diététique &amp; Gourmand</p>
        <p className="intro">
          Des plats maison équilibrés, cuisinés en Alsace et surgelés pour préserver toutes leurs qualités.
        </p>
      </header>

      <main className="container">
        <h2>Nos plats surgelés</h2>
        <ul className="list">
          <li className="card">
            <h3>Pâtes bolognaise maison</h3>
            <p>Une bolognaise authentique sublimée par des pâtes au seigle artisanales.</p>
            <span className="badge bd-frozen">Surgelé</span>
            <Link href="/plats/bolo">Voir le plat</Link>
          </li>

          <li className="card">
            <h3>Pâtes émincé poulet &amp; sauce poivron</h3>
            <p>Poulet tendre, sauce poivron maison et julienne de légumes.</p>
            <span className="badge bd-frozen">Surgelé</span>
            <Link href="/plats/pates-poulet-poivron">Voir le plat</Link>
          </li>

          <li className="card">
            <h3>Bœuf carottes &amp; purée maison</h3>
            <p>Bœuf bourguignon maigre, carottes fondantes et purée légère.</p>
            <span className="badge bd-frozen">Surgelé</span>
            <Link href="/plats/boeuf">Voir le plat</Link>
          </li>

          <li className="card">
            <h3>Cuisse de poulet rôtie · pommes de terre &amp; haricots verts</h3>
            <p>Cuisse rôtie aux aromates, pommes de terre rôties et haricots verts.</p>
            <span className="badge bd-frozen">Surgelé</span>
            <Link href="/plats/poulet-pommes-haricots">Voir le plat</Link>
          </li>
        </ul>
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
      </footer>

      <style jsx>{`
        :root {
          --bg1: #e6fff7;
          --bg2: #e8f2ff;
          --ink: #0e1420;
          --muted: #5b667a;
          --brand1: #10b981;
          --brand2: #3b82f6;
          --card: #ffffff;
          --frozen: #0ea5e9;
        }
        body, html, #__next { margin: 0; padding: 0; height: 100%; }
        .wrap {
          min-height: 100%;
          background: linear-gradient(180deg, #f8fffb 0%, #f6fbff 60%, #ffffff 100%);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color: var(--ink);
        }
        .hero {
          max-width: 1000px;
          margin: 0 auto;
          padding: 36px 16px 16px;
          text-align: center;
        }
        .brand {
          font-size: clamp(42px, 7vw, 76px);
          font-weight: 800;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }
        .tagline { font-weight: 600; margin: 6px 0; }
        .intro { color: var(--muted); margin: 0 auto; max-width: 600px; }

        .container { max-width: 1000px; margin: 0 auto; padding: 20px 16px 40px; }
        h2 { margin-bottom: 16px; }

        .list { list-style: none; padding: 0; display: grid; gap: 16px; }
        .card {
          background: var(--card);
          padding: 18px;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        }
        .card h3 { margin: 0 0 6px; }
        .card p { margin: 0 0 10px; color: var(--muted); }
        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          margin-right: 8px;
        }
        .bd-frozen {
          background: rgba(14,165,233,.14);
          color: var(--frozen);
        }
        a {
          display: inline-block;
          margin-top: 4px;
          color: var(--brand2);
          font-weight: 600;
          text-decoration: none;
        }
        a:hover { text-decoration: underline; }

        .foot {
          text-align: center;
          color: var(--muted);
          padding: 26px 16px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
