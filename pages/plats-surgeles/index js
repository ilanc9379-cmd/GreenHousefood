// pages/plats-surgeles/index.js
import Link from "next/link";

export default function ListeSurgeles() {
  return (
    <main className="wrap">
      <header className="hero">
        <h1 className="brand">Greenhouse</h1>
        <p className="tagline">Traiteur — Diététique & Gourmand</p>
        <p className="note">Plats <strong>surgelés</strong> — à conserver 4 mois au congélateur (48h au réfrigérateur après décongélation).</p>
      </header>

      <section className="grid">
        <Link href="/plats-surgeles/bolo" className="card">
          <div className="badge">Surgelé</div>
          <h3 className="title">Pâtes bolognaise maison</h3>
          <p className="desc">200 g pâtes complètes, bœuf 5% MG, carottes, sauce tomate maison.</p>
          <div className="foot">
            <span className="price">9,90 €</span>
            <span className="cta">Voir la fiche →</span>
          </div>
        </Link>

        <Link href="/plats-surgeles/poulet-poivron" className="card">
          <div className="badge">Surgelé</div>
          <h3 className="title">Pâtes complètes · émincé de poulet · julienne · sauce poivron maison</h3>
          <p className="desc">Sauce poivron (poivron, aromates, ail, oignon, sel, poivre). </p>
          <div className="foot">
            <span className="price">9,90 €</span>
            <span className="cta">Voir la fiche →</span>
          </div>
        </Link>
      </section>

      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#5a6475; --card:#fff;
          --grad1:#0aa64c; --grad2:#2d7ae6; --ring:rgba(10,140,120,.25);
          --bg1:#e8f7ff; --bg2:#dff8ee;
        }
        *{box-sizing:border-box}
        body,html,#__next{height:100%}
        .wrap{
          min-height:100vh;
          background:
            radial-gradient(1000px 700px at -10% -10%, var(--bg2), transparent 60%),
            radial-gradient(900px 600px at 110% -20%, var(--bg1), transparent 65%),
            linear-gradient(180deg,#f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
          color:var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
        }
        .hero{max-width:1100px;margin:0 auto;padding:42px 20px 14px;text-align:center}
        .brand{
          margin:0;
          font-size:clamp(48px,7vw,90px);
          line-height:.95; letter-spacing:.5px;
          background:linear-gradient(90deg,var(--grad1),var(--grad2));
          -webkit-background-clip:text; background-clip:text; color:transparent;
          text-shadow:0 10px 40px rgba(45,122,230,.15);
        }
        .tagline{margin:.3rem 0 0; font-size:clamp(16px,2.2vw,22px); color:var(--muted)}
        .note{margin:.4rem 0 0; color:#0f6b58; font-weight:600}

        .grid{
          max-width:1100px;margin:16px auto 60px;padding:0 20px;
          display:grid; gap:18px; grid-template-columns:repeat(2,minmax(0,1fr));
        }
        @media (max-width:820px){ .grid{grid-template-columns:1fr} }

        .card{
          display:grid; gap:10px; text-decoration:none; color:inherit;
          background:var(--card); padding:18px; border-radius:18px;
          box-shadow:0 10px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.7) inset;
          border:1px solid rgba(0,0,0,.04);
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .card:hover{ transform:translateY(-2px); box-shadow:0 14px 36px rgba(0,0,0,.08) }
        .badge{
          display:inline-flex; align-items:center; padding:4px 10px; border-radius:999px;
          font-weight:800; font-size:12px; letter-spacing:.3px; color:#0b1020;
          background:rgba(45,122,230,.12); border:1px solid rgba(45,122,230,.25);
          width:max-content;
        }
        .title{margin:0; font-size:18px; line-height:1.2}
        .desc{margin:0; color:var(--muted)}
        .foot{display:flex; align-items:center; justify-content:space-between; margin-top:6px}
        .price{font-weight:900; font-size:20px}
        .cta{font-weight:700; color:#1a6be0}
      `}</style>
    </main>
  );
}
