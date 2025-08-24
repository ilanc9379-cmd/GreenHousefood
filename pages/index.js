// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap">
      <header className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="subtitle">Traiteur — <strong>Diététique & Gourmand</strong></p>
        <p className="intro">
          Des plats maison bons & équilibrés, cuisinés en Alsace. 
          Une gamme <strong>surgelée</strong> (nutriments préservés & longue conservation)
          et une gamme <strong>fraîche</strong> (sous atmosphère modifiée pour une meilleure tenue).
        </p>
      </header>

      <section className="grid">
        {/* Carte — Plats surgelés */}
        <article className="card big">
          <div className="badges">
            <span className="badge bd-freeze">Surgelé</span>
            <span className="badge bd-diet">Diète</span>
          </div>
          <h2 className="title">Plats surgelés</h2>
          <p className="resume">
            Réchauffage rapide : four 20&nbsp;min à 150&nbsp;°C · micro-ondes 8&nbsp;min · poêle 10&nbsp;min.
          </p>
          <div className="cta">
            <Link href="/plats-surgeles" className="btn">Voir les plats</Link>
          </div>
        </article>

        {/* Carte — Plats frais */}
        <article className="card">
          <div className="badges">
            <span className="badge bd-fresh">Frais</span>
            <span className="badge bd-diet">Diète</span>
          </div>
          <h2 className="title">Plats frais</h2>
          <p className="resume">
            Prochainement : recettes prêtes à déguster, sous atmosphère modifiée.
          </p>
          <div className="cta">
            <Link href="/plats-frais" className="btn ghost">Bientôt</Link>
          </div>
        </article>

        {/* Carte — Surgelés “vrac” (pâtes, falafels, etc.) */}
        <article className="card">
          <div className="badges">
            <span className="badge bd-freeze">Surgelé</span>
            <span className="badge bd-vrac">Vrac</span>
          </div>
          <h2 className="title">Surgelés “vrac”</h2>
          <p className="resume">
            Pâtes artisanales & falafels au kilo, œufs plein air & farines locales.
          </p>
          <div className="cta">
            <Link href="/surgeles" className="btn">Voir les produits</Link>
          </div>
        </article>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#485060; --card:#fff; --ring:rgba(10,140,120,.22);
          --diet:#1aa87b; --freeze:#1b9fe6; --fresh:#22c55e; --vrac:#7c3aed;
          --brand1:#0aa64c; --brand2:#2d7ae6;
        }
        .wrap{
          min-height:100vh;
          background:
            radial-gradient(900px 600px at 110% -20%, #e8f7ff, transparent 65%),
            radial-gradient(1000px 700px at -10% -10%, #dff8ee, transparent 60%),
            linear-gradient(180deg, #f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
          color:var(--ink);
        }
        .hero{max-width:1100px;margin:0 auto;padding:40px 20px 12px;}
        .brand{
          margin:0;font-size:clamp(46px,8vw,92px);line-height:.95;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          -webkit-background-clip:text;background-clip:text;color:transparent;
          letter-spacing:.5px;
        }
        .subtitle{margin:8px 0 10px;color:var(--muted);font-size:clamp(16px,2.5vw,22px)}
        .subtitle strong{color:#0d6b57}
        .intro{max-width:900px;margin:0;color:var(--muted)}

        .grid{
          max-width:1100px;margin:16px auto 40px;padding:0 20px;
          display:grid;gap:18px;grid-template-columns:repeat(3,minmax(0,1fr));
        }
        @media (max-width:1024px){.grid{grid-template-columns:1fr 1fr}}
        @media (max-width:720px){.grid{grid-template-columns:1fr}}

        .card{
          background:var(--card);border-radius:18px;padding:18px;
          box-shadow:0 10px 30px rgba(0,0,0,.06),0 1px 0 rgba(255,255,255,.7) inset;
          display:grid;gap:14px
        }
        .card.big{grid-column:span 2}
        @media (max-width:1024px){.card.big{grid-column:auto}}

        .badges{display:flex;gap:8px;flex-wrap:wrap}
        .badge{
          display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;
          font-weight:700;font-size:12px;letter-spacing:.3px;color:#0b1020;
          background:#eef5ff;border:1px solid rgba(0,0,0,.06)
        }
        .bd-diet{background:rgba(26,168,123,.12);border-color:rgba(26,168,123,.25)}
        .bd-freeze{background:rgba(27,159,230,.12);border-color:rgba(27,159,230,.25)}
        .bd-fresh{background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.25)}
        .bd-vrac{background:rgba(124,58,237,.12);border-color:rgba(124,58,237,.25)}
        .title{margin:0;font-size:clamp(20px,2.8vw,28px);line-height:1.2}
        .resume{margin:0;color:var(--muted)}
        .cta{display:flex;justify-content:flex-end}
        .btn{
          padding:10px 16px;border-radius:12px;border:none;color:#fff;font-weight:700;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          box-shadow:0 10px 25px rgba(45,122,230,.22);text-decoration:none
        }
        .btn.ghost{
          background:transparent;color:#0b1020;border:1px solid rgba(0,0,0,.12);
        }
        .foot{text-align:center;color:var(--muted);padding:28px 16px 40px}
      `}</style>
    </main>
  );
}
