// pages/plats-surgeles/index.js
import Link from "next/link";

export default function PlatsSurgeles() {
  const plats = [
    {
      slug: "bolo",
      nom: "Pâtes bolognaise maison",
      resume: "Pâtes au seigle artisanales, bœuf 5% MG, carottes, sauce tomate maison.",
      kcal: 700, prot: 54.3, gluc: 89, lip: 15.8, prix: 9.9,
    },
    {
      slug: "poulet-poivron",
      nom: "Pâtes complètes • émincé de poulet • sauce poivron",
      resume: "Pâtes complètes artisanales, poulet tendre, julienne de légumes et sauce poivron maison.",
      kcal: 689, prot: 62, gluc: 86, lip: 10, prix: 9.9,
    },
    {
      slug: "boeuf",
      nom: "Bœuf carottes & purée",
      resume: "Bourguignon maigre, carottes fondantes, purée de pomme de terre.",
      kcal: 710, prot: 42, gluc: 86, lip: 22, prix: 9.9,
    },
    {
      slug: "poulet-pommes-haricots",
      nom: "Poulet, pommes de terre rôties & haricots verts",
      resume: "Cuisse de poulet marinée, pommes de terre au four, haricots verts.",
      kcal: 720, prot: 48, gluc: 68, lip: 22, prix: 9.9,
    },
  ];

  const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;

  return (
    <main className="wrap">
      <header className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="subtitle">Traiteur — <strong>Diététique & Gourmand</strong></p>
        <p className="intro">
          Des plats maison **surgelés** pour préserver la fraîcheur et les nutriments.  
          Réchauffage rapide : four 20&nbsp;min à 150&nbsp;°C · micro-ondes 8&nbsp;min · poêle 10&nbsp;min.
        </p>
        <Link href="/" className="back">← Retour à l’accueil</Link>
      </header>

      <section className="grid">
        {plats.map((p) => (
          <article key={p.slug} className="card">
            <div className="card-top">
              <div className="badges">
                <span className="badge bd-freeze">Surgelé</span>
                <span className="badge bd-diet">Diète</span>
              </div>
              <h3 className="title">{p.nom}</h3>
              <p className="resume">{p.resume}</p>
            </div>

            <div className="macros">
              <div><small>kcal</small><div className="num">{p.kcal}</div></div>
              <div><small>Prot.</small><div className="num">{p.prot} g</div></div>
              <div><small>Gluc.</small><div className="num">{p.gluc} g</div></div>
              <div><small>Lip.</small><div className="num">{p.lip} g</div></div>
            </div>

            <div className="cta">
              <div className="price">{euro(p.prix)}</div>
              <Link href={`/plats-surgeles/${p.slug}`} className="btn">Voir la fiche</Link>
            </div>
          </article>
        ))}
      </section>

      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#485060; --card:#fff; --ring:rgba(10,140,120,.22);
          --diet:#1aa87b; --freeze:#1b9fe6; --brand1:#0aa64c; --brand2:#2d7ae6;
        }
        .wrap{
          min-height:100vh;
          background:
            radial-gradient(900px 600px at 110% -20%, #e8f7ff, transparent 65%),
            radial-gradient(1000px 700px at -10% -10%, #dff8ee, transparent 60%),
            linear-gradient(180deg, #f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
          color:var(--ink);
        }
        .hero{max-width:1100px;margin:0 auto;padding:40px 20px 10px;}
        .brand{
          margin:0;font-size:clamp(44px,7vw,84px);line-height:.95;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          -webkit-background-clip:text;background-clip:text;color:transparent;
          letter-spacing:.5px;
        }
        .subtitle{margin:8px 0 6px;color:var(--muted);font-size:clamp(16px,2.5vw,22px)}
        .subtitle strong{color:#0d6b57}
        .intro{margin:6px 0 14px;color:var(--muted)}
        .back{display:inline-block;margin-top:6px;color:#2d7ae6;text-decoration:none}
        .grid{
          max-width:1100px;margin:12px auto 40px;padding:0 20px;
          display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr));
        }
        @media (max-width:820px){.grid{grid-template-columns:1fr}}
        .card{
          background:var(--card);border-radius:18px;padding:18px;
          box-shadow:0 10px 30px rgba(0,0,0,.06),0 1px 0 rgba(255,255,255,.7) inset;
          display:grid;gap:14px
        }
        .badges{display:flex;gap:8px;flex-wrap:wrap}
        .badge{
          display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;
          font-weight:700;font-size:12px;letter-spacing:.3px;color:#0b1020;
          background:#eef5ff;border:1px solid rgba(0,0,0,.06)
        }
        .bd-diet{background:rgba(26,168,123,.12);border-color:rgba(26,168,123,.25)}
        .bd-freeze{background:rgba(27,159,230,.12);border-color:rgba(27,159,230,.25)}
        .title{margin:0;font-size:clamp(18px,2.4vw,24px);line-height:1.2}
        .resume{margin:0;color:var(--muted)}
        .macros{
          display:grid;grid-template-columns:repeat(4,1fr);gap:8px;
          background:linear-gradient(180deg,#fafcff,#f3f7ff);
          border:1px solid rgba(0,0,0,.05);border-radius:12px;padding:10px
        }
        .macros small{color:var(--muted)} .num{font-weight:800;font-size:15px}
        .cta{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .price{font-size:22px;font-weight:800}
        .btn{
          padding:10px 16px;border-radius:12px;border:none;color:#fff;font-weight:700;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          box-shadow:0 10px 25px rgba(45,122,230,.22);text-decoration:none
        }
      `}</style>
    </main>
  );
}
