// pages/surgeles/index.js
import Head from "next/head";
import Link from "next/link";

export default function SurgelesVrac() {
  return (
    <>
      <Head>
        <title>Surgelés (vrac & produits) — GreenHouse</title>
        <meta name="description" content="Pâtes surgelées maison (seigle, complète, aromette) et falafels artisanaux au kilo." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        <header className="hdr">
          <h1>Surgelés — vrac & produits</h1>
          <p>Produits surgelés à cuisiner : pâtes maison (seigle, complète, aromette), falafels artisanaux…</p>
        </header>

        <section className="grid">
          <article className="item">
            <h3>Pâtes au seigle (surgelées)</h3>
            <p>Œufs frais plein air & farines locales. Cuisson 1 min 30 dans l’eau bouillante.</p>
            <div className="meta">
              <span>Conservation : congélateur</span>
            </div>
            <button className="btn">Commander</button>
          </article>

          <article className="item">
            <h3>Pâtes complètes (surgelées)</h3>
            <p>Œufs frais plein air & farines locales. Cuisson 1 min 30 dans l’eau bouillante.</p>
            <div className="meta">
              <span>Conservation : congélateur</span>
            </div>
            <button className="btn">Commander</button>
          </article>

          <article className="item">
            <h3>Pâtes aromette (surgelées)</h3>
            <p>Œufs frais plein air & farines locales. Cuisson 1 min 30 dans l’eau bouillante.</p>
            <div className="meta">
              <span>Conservation : congélateur</span>
            </div>
            <button className="btn">Commander</button>
          </article>

          <article className="item">
            <h3>Falafels artisanaux (surgelés)</h3>
            <p>Au kilo — cuisson friteuse 3 min ou airfryer 15 min. À conserver au congélateur.</p>
            <div className="meta">
              <span>10 € / kg</span>
            </div>
            <button className="btn">Commander</button>
          </article>
        </section>

        <p className="back">
          <Link href="/">← Retour à l’accueil</Link>
        </p>
      </main>

      <style jsx>{`
        .wrap { max-width: 1100px; margin: 0 auto; padding: 28px 20px 60px; }
        .hdr h1 { margin: 0; font-size: clamp(28px, 4.5vw, 48px);
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hdr p { margin: 6px 0 16px; color: #5b6475; }

        .grid { display: grid; gap: 16px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        @media (max-width: 860px) { .grid { grid-template-columns: 1fr; } }

        .item {
          background: white; border-radius: 16px; padding: 18px;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          display: grid; gap: 8px;
        }
        .item h3 { margin: 0; }
        .item p { margin: 0; color: #5b6475; }
        .meta { font-size: 14px; color: #3b455a; }
        .btn {
          margin-top: 8px;
          display: inline-block;
          font-weight: 800;
          font-size: 14px;
          padding: 10px 14px;
          border-radius: 12px;
          color: white;
          background: linear-gradient(90deg, #0aa64c, #2d7ae6);
          box-shadow: 0 12px 28px rgba(45, 122, 230, 0.25);
          border: none;
          cursor: pointer;
        }
        .back { margin-top: 20px; }
      `}</style>
    </>
  );
}
