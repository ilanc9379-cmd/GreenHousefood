// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";

/* =========================
   DONNÉES — À PERSONNALISER
   ========================= */
const FALAFEL_NUTR_100 = [
  { k: "Énergie", v: "250 kcal" },
  { k: "Protéines", v: "8 g" },
  { k: "Glucides", v: "26 g" },
  { k: "Lipides", v: "13 g" },
  { k: "Sel", v: "1.1 g" },
];

const PASTA_VARIANTS = [
  {
    id: "seigle",
    nom: "Pâtes artisanales surgelées — Seigle",
    resume:
      "Œufs frais plein air & farines locales. Texture rustique, goût gourmand.",
    nutr100: [
      { k: "Énergie", v: "280 kcal" },
      { k: "Protéines", v: "11 g" },
      { k: "Glucides", v: "50 g" },
      { k: "Lipides", v: "3.5 g" },
      { k: "Sel", v: "0.05 g" },
    ],
  },
  {
    id: "complete",
    nom: "Pâtes artisanales surgelées — Complètes",
    resume:
      "Œufs frais plein air & farines locales. Riche en fibres, satiétantes.",
    nutr100: [
      { k: "Énergie", v: "275 kcal" },
      { k: "Protéines", v: "11 g" },
      { k: "Glucides", v: "53 g" },
      { k: "Lipides", v: "2.5 g" },
      { k: "Sel", v: "0.05 g" },
    ],
  },
  {
    id: "aromette",
    nom: "Pâtes artisanales surgelées — Aromette",
    resume:
      "Œufs frais plein air & farines locales. Parfumées, idéales pour sauces légères.",
    nutr100: [
      { k: "Énergie", v: "280 kcal" },
      { k: "Protéines", v: "11 g" },
      { k: "Glucides", v: "52 g" },
      { k: "Lipides", v: "3 g" },
      { k: "Sel", v: "0.05 g" },
    ],
  },
];

const PLATS_SURGELES = [
  {
    id: "bolo",
    titre: "Pâtes Bolognaise maison",
    resume:
      "200 g pâtes au seigle, 150 g bœuf 5% MG, 150 g carottes, 100 g sauce tomate.",
    kcal: 700,
    prot: 54.3,
    gluc: 89,
    lip: 15.8,
    prix: 9.9,
    badge: "Diète",
  },
  {
    id: "poulet-poivron",
    titre: "Pâtes complètes — émincé de poulet, julienne de légumes, sauce poivron (maison)",
    resume:
      "Sauce poivron maison (poivron, aromates, ail, oignon, sel, poivre).",
    kcal: 680,
    prot: 45,
    gluc: 80,
    lip: 18,
    prix: 9.9,
    badge: "Diète",
  },
  // ➜ On pourra ajouter d’autres plats ici plus tard
];

/* ====== UI utils ====== */
const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;
const Stat = ({ label, value }) => (
  <div className="stat">
    <div className="stat-k">{label}</div>
    <div className="stat-v">{value}</div>
  </div>
);

export default function Home() {
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Gourmand
  const platsFiltres = useMemo(() => {
    return PLATS_SURGELES.filter((p) =>
      filtre === "Tous" ? true : p.badge === filtre
    );
  }, [filtre]);

  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur · Diète & Gourmand</title>
        <meta
          name="description"
          content="Des plats diététiques & gourmands cuisinés avec amour. Une gamme surgelée pour préserver au mieux les nutriments, et une gamme fraîche sous atmosphère modifiée pour une conservation optimale."
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        {/* ---- HERO ---- */}
        <section className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="hero-inner">
            <div className="brandline">
              <Image
                src="/favicon.png"
                alt="Logo GreenHouse"
                width={64}
                height={64}
                className="logo"
                priority
              />
              <h1 className="title-3d">
                <span className="gh">GreenHouse</span>
              </h1>
            </div>

            <p className="slogan">
              Des plats diététiques & gourmands cuisinés avec amour.{" "}
              <strong>Gamme surgelée</strong> : préservation optimale des nutriments.{" "}
              <strong>Gamme fraîche</strong> : conservation soignée sous atmosphère modifiée.
            </p>

            <div className="chips">
              <button
                className={`chip ${filtre === "Tous" ? "on" : ""}`}
                onClick={() => setFiltre("Tous")}
              >
                Tous
              </button>
              <button
                className={`chip ${filtre === "Diète" ? "on" : ""}`}
                onClick={() => setFiltre("Diète")}
              >
                Diète
              </button>
              <button
                className={`chip ${filtre === "Gourmand" ? "on" : ""}`}
                onClick={() => setFiltre("Gourmand")}
              >
                Gourmand
              </button>
            </div>
          </div>
        </section>

        {/* ---- FALAFELS ---- */}
        <section className="block">
          <header className="block-head">
            <h2 className="block-title">Falafels artisanaux — Surgelés</h2>
            <span className="badge b-surg">Surgelés</span>
          </header>

          <div className="card big">
            <div className="card-col">
              <p className="lead">
                Sans prix à l’unité — <strong>10,00 € / kg</strong>.  
                À conserver au congélateur (max <strong>4 mois</strong>).
              </p>
              <p className="muted">
                Cuisson&nbsp;: <strong>friteuse 3 min</strong> · <strong>Airfryer 15 min</strong>.
              </p>
              <p className="muted">Fabrication 100% artisanale.</p>

              <div className="cta-row">
                <button className="btn">Commander</button>
              </div>
            </div>

            <div className="card-col">
              <div className="nutr">
                <div className="nutr-head">Valeurs nutritionnelles (pour 100 g)</div>
                <div className="nutr-grid">
                  {FALAFEL_NUTR_100.map((it) => (
                    <Stat key={it.k} label={it.k} value={it.v} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- PÂTES SURGELÉES ---- */}
        <section className="block">
          <header className="block-head">
            <h2 className="block-title">Pâtes artisanales — Surgelées</h2>
            <span className="badge b-surg">Surgelés</span>
          </header>

          <p className="muted mb8">
            Œufs frais <strong>plein air</strong> & farines locales.  
            Cuisson&nbsp;: <strong>1 min 30</strong> dans l’eau bouillante.  
            À conserver au congélateur.
          </p>

          <div className="grid">
            {PASTA_VARIANTS.map((p) => (
              <article key={p.id} className="card">
                <h3 className="title">{p.nom}</h3>
                <p className="resume">{p.resume}</p>
                <div className="nutr">
                  <div className="nutr-head">Valeurs nutritionnelles (100 g)</div>
                  <div className="nutr-grid">
                    {p.nutr100.map((n) => (
                      <Stat key={n.k} label={n.k} value={n.v} />
                    ))}
                  </div>
                </div>
                <div className="cta-row">
                  <button className="btn">Commander</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---- PLATS SURGELÉS ---- */}
        <section className="block">
          <header className="block-head">
            <h2 className="block-title">Plats surgelés</h2>
            <span className="badge b-surg">Surgelés</span>
          </header>

          <div className="grid">
            {platsFiltres.map((p) => (
              <article key={p.id} className="card">
                <div className="card-top">
                  <span className={`pill ${p.badge === "Diète" ? "diet" : "gour"}`}>
                    {p.badge}
                  </span>
                  <h3 className="title">{p.titre}</h3>
                  <p className="resume">{p.resume}</p>
                </div>
                <div className="macros">
                  <Stat label="kcal" value={`${p.kcal}`} />
                  <Stat label="Prot." value={`${p.prot} g`} />
                  <Stat label="Gluc." value={`${p.gluc} g`} />
                  <Stat label="Lip." value={`${p.lip} g`} />
                </div>
                <div className="cta-row">
                  <div className="price">{euro(p.prix)}</div>
                  <button className="btn">Commander</button>
                </div>
                <p className="storage">
                  À conserver au congélateur (max <strong>4 mois</strong>) — après
                  décongélation, <strong>48 h au réfrigérateur</strong>.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- FOOTER ---- */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} GreenHouse — Traiteur · Diète & Gourmand</p>
        </footer>
      </main>

      {/* ====================
          STYLES (styled-jsx)
          ==================== */}
      <style jsx>{`
        :root{
          --ink:#0b1020;
          --muted:#5a6475;
          --card:#ffffff;
          --ring:rgba(45,122,230,.22);
          --diet:#1aa87b;
          --gour:#e85b37;
          --grad1:#0aa64c;
          --grad2:#2d7ae6;
          --grad3:#9a3fde;
          --bg1:#e8f7ff;
          --bg2:#dff8ee;
        }
        html,body,#__next{height:100%}
        body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial}

        /* PAGE WRAP */
        .page{
          min-height:100%;
          background:
            radial-gradient(1200px 700px at -10% -20%, var(--bg2), transparent 60%),
            radial-gradient(1000px 600px at 110% -10%, var(--bg1), transparent 65%),
            linear-gradient(180deg,#f7fbff 0%, #f6fff8 55%, #ffffff 100%);
        }

        /* HERO */
        .hero{position:relative;overflow:hidden}
        .hero-inner{
          max-width:1150px;margin:0 auto;padding:54px 20px 28px;position:relative;z-index:1;
        }
        .hero-bg{
          position:absolute;inset:-20px;z-index:0;filter:saturate(1.05);
          background:
            radial-gradient(600px 400px at 20% 10%, rgba(10,166,76,.18), transparent 60%),
            radial-gradient(600px 400px at 80% 0%, rgba(45,122,230,.18), transparent 60%),
            radial-gradient(900px 600px at 50% -20%, rgba(154,63,222,.15), transparent 65%);
          animation:bgFloat 12s ease-in-out infinite alternate;
        }
        @keyframes bgFloat{
          0%{transform:translateY(-6px)}
          100%{transform:translateY(6px)}
        }

        .brandline{display:flex;align-items:center;gap:18px}
        .logo{border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.12)}
        .gh{
          display:inline-block;
          font-size:clamp(42px,7vw,96px);
          line-height:.95;
          letter-spacing:.5px;
          background:conic-gradient(from 120deg, var(--grad1), var(--grad2), var(--grad3), var(--grad1));
          -webkit-background-clip:text;background-clip:text;color:transparent;
          animation:hue 8s linear infinite;
          text-shadow:0 1px 0 rgba(255,255,255,.4);
        }
        @keyframes hue{
          0%{filter:hue-rotate(0deg)}
          100%{filter:hue-rotate(360deg)}
        }
        .slogan{
          margin:10px 0 18px;color:var(--muted);
          font-size:clamp(16px,2.2vw,20px);
        }

        .chips{display:flex;flex-wrap:wrap;gap:10px;margin:8px 0 4px}
        .chip{
          border:1px solid rgba(0,0,0,.08);background:white;
          padding:8px 14px;border-radius:999px;font-weight:700;cursor:pointer;
          transition:box-shadow .12s ease, transform .12s ease
        }
        .chip.on{
          background:linear-gradient(90deg, rgba(10,166,76,.12), rgba(45,122,230,.12));
          box-shadow:0 0 0 3px var(--ring) inset;border-color:transparent
        }
        .chip:active{transform:translateY(1px) scale(.99)}

        /* SECTIONS */
        .block{max-width:1150px;margin:18px auto;padding:0 20px}
        .block-head{display:flex;align-items:center;gap:12px;margin:10px 0 12px}
        .block-title{margin:0;font-size:clamp(22px,3.2vw,32px)}
        .badge{
          font-weight:800;font-size:12px;letter-spacing:.3px;border-radius:999px;
          padding:6px 10px;display:inline-flex;align-items:center;gap:6px;
          border:1px solid rgba(0,0,0,.06);background:#eef5ff;color:#0b1020;
        }
        .b-surg{background:rgba(154,63,222,.12);border-color:rgba(154,63,222,.25)}

        /* CARDS & GRID */
        .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
        @media (max-width:860px){ .grid{grid-template-columns:1fr} }

        .card{
          background:var(--card);border-radius:18px;padding:18px;
          box-shadow:0 14px 35px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.65) inset;
          display:grid;gap:14px
        }
        .big{grid-template-columns:1.2fr .8fr}
        @media (max-width:920px){ .big{grid-template-columns:1fr} }

        .title{margin:0;font-size:clamp(18px,2.4vw,24px);line-height:1.2}
        .resume{margin:0;color:var(--muted)}
        .lead{margin:.2rem 0 .4rem;font-size:18px}
        .muted{color:var(--muted)}
        .mb8{margin-bottom:8px}

        .pill{
          display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;
          font-weight:800;font-size:12px;letter-spacing:.3px;color:#0b1020;
          background:#eef5ff;border:1px solid rgba(0,0,0,.06)
        }
        .diet{background:rgba(26,168,123,.12);border-color:rgba(26,168,123,.25)}
        .gour{background:rgba(232,91,55,.12);border-color:rgba(232,91,55,.25)}

        .card-top{display:grid;gap:8px}

        .macros{
          display:grid;grid-template-columns:repeat(4,1fr);gap:8px;
          background:linear-gradient(180deg,#fafcff,#f3f7ff);
          border:1px solid rgba(0,0,0,.05);border-radius:12px;padding:10px
        }

        .nutr{border:1px dashed rgba(0,0,0,.12);border-radius:14px;padding:12px}
        .nutr-head{font-weight:700;margin-bottom:8px}
        .nutr-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
        @media (min-width:560px){ .nutr-grid{grid-template-columns:repeat(3,1fr)} }

        .stat{
          background:linear-gradient(180deg,#ffffff,#f8fbff);
          border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:10px
        }
        .stat-k{font-size:12px;color:var(--muted)}
        .stat-v{font-weight:800}

        .cta-row{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .price{font-size:22px;font-weight:800}
        .btn{
          padding:10px 16px;border-radius:12px;border:none;color:white;font-weight:800;cursor:pointer;
          background:linear-gradient(90deg, var(--grad1), var(--grad2));
          box-shadow:0 12px 28px rgba(45,122,230,.22);transition:transform .12s ease
        }
        .btn:active{transform:translateY(1px)}

        .storage{margin:0;color:var(--muted);font-size:13px}

        .foot{text-align:center;color:var(--muted);padding:32px 16px 48px}
      `}</style>
    </>
  );
}
