// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const PLATS = [
  {
    slug: "bolo",
    nom: "Pâtes bolognaise maison",
    resume: "Pâtes au seigle, bœuf 5% MG, carottes, sauce tomate.",
    prix: 9.9,
    surgele: true,
    visuel: "/favicon.png", // remplace par une vraie image si tu veux
    badges: ["Riche en protéines", "Portion 600 g"],
  },
  {
    slug: "poulet-poivron",
    nom: "Pâtes – émincé de poulet, julienne de légumes, sauce poivron",
    resume: "Poivron, aromates, ail, oignon, sel, poivre.",
    prix: 9.9,
    surgele: true,
    visuel: "/favicon.png",
    badges: ["Equilibré", "Gourmand"],
  },
  {
    slug: "boeuf-carottes-puree",
    nom: "Bœuf mijoté aux carottes & purée maison",
    resume: "Morceaux maigres, carottes, purée de pommes de terre.",
    // prix: 10.9, // décommente si tu veux afficher un prix
    surgele: true,
    visuel: "/favicon.png",
    badges: ["Confort food", "Cuisson lente"],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur | Diététique & Gourmand</title>
        <meta
          name="description"
          content="GreenHouse : traiteur diététique & gourmand. Plats surgelés artisanaux, pratiques et savoureux."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <div className="brand">
            <Image
              src="/favicon.png"
              alt="Logo GreenHouse"
              width={72}
              height={72}
              className="logo"
              priority
            />
            <h1 className="title">
              <span>GreenHouse</span>
            </h1>
          </div>
          <p className="slogan">Traiteur diététique & gourmand</p>
        </header>

        {/* BLOC SURGELÉS (pédagogie) */}
        <section className="surgele">
          <div className="surgele-card">
            <div className="surgele-head">
              <span className="pill pill-surg">Surgelés</span>
              <h2>La qualité, préservée par le froid ❄️</h2>
            </div>
            <p className="lead">
              La surgélation fige la fraîcheur au plus près de la cuisson :
              elle aide à préserver les nutriments, la texture et le goût —
              <strong> sans conservateurs</strong>. C’est pratique (portionnable),
              anti-gaspi et parfait pour s’organiser.
            </p>
            <ul className="bullets">
              <li>🧊 Conservation conseillée : <strong>jusqu’à 4 mois au congélateur</strong>.</li>
              <li>🥶 Après décongélation : <strong>48 h max au réfrigérateur</strong>.</li>
              <li>🔥 Réchauffage : four, micro-ondes ou poêle selon le plat.</li>
            </ul>
          </div>
        </section>

        {/* GRILLE DE PLATS */}
        <section className="grid-wrap">
          <div className="grid-head">
            <h3>Nos plats surgelés</h3>
            <p>Artisanal, pratique, et pensé pour l’équilibre.</p>
          </div>

          <div className="grid">
            {PLATS.map((p) => (
              <article key={p.slug} className="card">
                <div className="card-media">
                  {/* Remplace /favicon.png par une vraie photo dans /public/images/... */}
                  <Image
                    src={p.visuel || "/favicon.png"}
                    alt={p.nom}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>

                <div className="card-body">
                  <div className="topline">
                    {p.surgele && <span className="pill pill-surg">Surgelé</span>}
                    <span className="pill pill-keep">4 mois congélateur · 48 h frigo</span>
                  </div>

                  <h4 className="card-title">{p.nom}</h4>
                  <p className="card-resume">{p.resume}</p>

                  <div className="badges">
                    {p.badges?.map((b) => (
                      <span key={b} className="mini">{b}</span>
                    ))}
                  </div>

                  <div className="cta">
                    <div className="left">
                      {"prix" in p && p.prix != null ? (
                        <>
                          <div className="price">
                            {p.prix.toFixed(2).replace(".", ",")} €
                          </div>
                          <div className="ttc">TTC</div>
                        </>
                      ) : (
                        <div className="price muted">Prix sur la fiche</div>
                      )}
                    </div>
                    <Link href={`/plat/${p.slug}`} className="btn">
                      Voir le plat
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
        </footer>
      </main>

      <style jsx>{`
        :root{
          --ink:#0c111d;
          --muted:#556070;
          --card:#ffffff;
          --brand1:#13b66a;
          --brand2:#2d7ae6;
          --ring:rgba(19,182,106,.2);
          --bg1:#e9fff3;
          --bg2:#e8f1ff;
          --pill:#0b5b4c;
        }
        html,body,#__next{height:100%}
        body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;color:var(--ink);background:#f7fbff}

        /* ===== Fond vivant (dégradés + léger mouvement) ===== */
        .page{
          min-height:100%;
          position:relative;
          overflow-x:hidden;
        }
        .page::before,
        .page::after{
          content:"";
          position:absolute; inset:-20% -10% auto -10%;
          height:60vh;
          background: radial-gradient(60% 60% at 20% 30%, var(--bg1), transparent 60%),
                      radial-gradient(60% 60% at 80% 20%, var(--bg2), transparent 60%);
          filter: blur(20px);
          z-index:-2;
          animation: floaty 18s ease-in-out infinite alternate;
          opacity:.9;
        }
        .page::after{
          inset:auto -10% -25% -10%;
          height:55vh;
          transform: rotate(180deg);
          animation-duration: 22s;
          opacity:.8;
        }
        @keyframes floaty{
          from{transform: translateY(-10px) scale(1.02)}
          to{transform: translateY(10px) scale(1.04)}
        }

        /* ===== Hero ===== */
        .hero{max-width:1200px;margin:0 auto;padding:48px 20px 20px}
        .brand{display:flex;align-items:center;gap:14px}
        .logo{border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.12)}
        .title{
          margin:0;
          line-height:.9;
        }
        .title span{
          font-size: clamp(48px, 9vw, 108px);
          font-weight: 900;
          letter-spacing: .5px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip:text; background-clip:text; color:transparent;
          text-shadow: 0 2px 20px rgba(45,122,230,.15);
        }
        .slogan{
          margin: 10px 0 0;
          font-size: clamp(16px, 2.4vw, 24px);
          color:var(--muted);
        }

        /* ===== Bloc surgelés (pédagogie) ===== */
        .surgele{max-width:1200px;margin:16px auto;padding:0 20px}
        .surgele-card{
          background:linear-gradient(180deg,#ffffff, #f4fbff);
          border:1px solid rgba(0,0,0,.06);
          border-radius:22px; padding:20px;
          box-shadow:0 12px 30px rgba(0,0,0,.06);
        }
        .surgele-head{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
        .surgele-card h2{margin:0;font-size:clamp(20px,3vw,28px)}
        .lead{margin:10px 0 8px;color:#2a3545}
        .bullets{display:grid;gap:6px;margin:8px 0 0;padding-left:0;list-style:none}
        .pill{
          display:inline-flex;align-items:center;gap:8px;
          padding:6px 12px;border-radius:999px;font-weight:700;font-size:12px;
          letter-spacing:.3px;border:1px solid rgba(0,0,0,.08);background:#fff;color:var(--pill)
        }
        .pill-surg{background:rgba(45,122,230,.12);border-color:rgba(45,122,230,.25);color:#1f4fb9}
        .pill-keep{background:rgba(19,182,106,.12);border-color:rgba(19,182,106,.25);color:#0e7a52}

        /* ===== Grille de plats ===== */
        .grid-wrap{max-width:1200px;margin:16px auto 40px;padding:0 20px}
        .grid-head h3{margin:10px 0 0;font-size:clamp(22px,3.2vw,30px)}
        .grid-head p{margin:4px 0 14px;color:var(--muted)}
        .grid{
          display:grid;gap:18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 980px){ .grid{grid-template-columns: repeat(2, 1fr);} }
        @media (max-width: 640px){ .grid{grid-template-columns: 1fr;} }

        .card{
          background:var(--card); border-radius:18px; overflow:hidden;
          border:1px solid rgba(0,0,0,.06);
          box-shadow:0 10px 30px rgba(0,0,0,.06);
          display:flex; flex-direction:column;
        }
        .card-media{position:relative;aspect-ratio: 16/10; background:linear-gradient(90deg,#f2fff8,#eef4ff)}
        .card-body{display:grid;gap:10px;padding:14px}
        .topline{display:flex;flex-wrap:wrap;gap:8px}
        .card-title{margin:0;font-size:clamp(16px,2.2vw,20px);line-height:1.25}
        .card-resume{margin:0;color:var(--muted)}
        .badges{display:flex;flex-wrap:wrap;gap:8px}
        .mini{
          font-size:12px;padding:4px 10px;border-radius:999px;
          background:linear-gradient(180deg,#f6f9ff,#ffffff);
          border:1px solid rgba(0,0,0,.06);
        }
        .cta{
          margin-top:6px;
          display:flex;align-items:center;justify-content:space-between;gap:12px
        }
        .left{display:grid}
        .price{font-weight:900;font-size:20px}
        .price.muted{color:var(--muted);font-weight:600}
        .ttc{font-size:12px;color:var(--muted)}
        .btn{
          padding:10px 14px;border-radius:12px;border:none;color:white;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          text-decoration:none;font-weight:800;box-shadow:0 10px 25px rgba(45,122,230,.22);
        }

        /* ===== Footer ===== */
        .footer{padding:28px 20px 40px;text-align:center;color:var(--muted)}
      `}</style>
    </>
  );
}
