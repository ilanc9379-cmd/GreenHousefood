// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

/* ============
   DONNÉES — PLATS
   ============ */
const PLATS = [
  // existants
  {
    id: 101,
    nom: "Pâtes complètes — crème légère, champignons & oignons",
    type: "Gourmand",
    calories: 780, proteines: 42, glucides: 84, lipides: 28,
    prix: 9.0,
    resume: "Pâtes complètes, crème légère, champignons, oignons.",
    surgele: false,
  },
  {
    id: 102,
    nom: "Pâtes complètes — base tomate (profil léger)",
    type: "Diète",
    calories: 730, proteines: 22, glucides: 86, lipides: 28,
    prix: 7.0,
    resume: "Sauce tomate maison, herbes. Idéal pour un repas plus léger.",
    surgele: false,
  },
  {
    id: 201,
    nom: "Pâtes complètes saumon crème",
    type: "Gourmand",
    calories: 760, proteines: 35, glucides: 82, lipides: 28,
    prix: 10.0,
    resume: "Saumon, crème, aneth, ail.",
    surgele: false,
  },
  {
    id: 202,
    nom: "Lasagnes saumon & épinards",
    type: "Gourmand",
    calories: 820, proteines: 40, glucides: 74, lipides: 40,
    prix: 11.0,
    resume: "Saumon, épinards, béchamel, fromage râpé.",
    surgele: false,
  },
  {
    id: 203,
    nom: "Wrap falafel & crudités (sauce bibalaka)",
    type: "Diète",
    calories: 680, proteines: 26, glucides: 86, lipides: 22,
    prix: 9.0,
    resume: "Galette complète 100 g, falafels 150 g, crudités, sauce au fromage blanc alsacien.",
    surgele: true,
  },

  // DIÈTE surgelé ajoutés
  {
    id: 301,
    nom: "Gratin de patates douces (Diète, surgelé)",
    type: "Diète",
    calories: 520, proteines: 18, glucides: 62, lipides: 18,
    prix: 8.5,
    resume: "Patates douces rôties & gratiné léger — prêt à réchauffer.",
    surgele: true,
  },
  {
    id: 302,
    nom: "Pâtes complètes — émincé de poulet, sauce aubergine (Diète, surgelé)",
    type: "Diète",
    calories: 640, proteines: 36, glucides: 70, lipides: 18,
    prix: 9.5,
    resume: "Émincé de poulet, sauce d’aubergine rôtie, herbes.",
    surgele: true,
  },

  // NOUVEAU — d’après tes captures
  {
    id: 401,
    nom: "Lasagne — potiron & fromage Gouda",
    type: "Gourmand",
    // par portion 440 g : 603 kcal / 44 g prot / 44 g gluc / 29 g lip
    calories: 603, proteines: 44, glucides: 44, lipides: 29,
    prix: 12.9,
    resume:
      "Bœuf, potiron, carottes, sauce bolognaise savoureuse et plaques de lasagnes fraîches. Fromage Gouda.",
    surgele: true,
  },

  // NOUVEAU — fiche dédiée
  {
    id: 501,
    nom: "Pâtes bolognaise maison (fiche détaillée)",
    type: "Gourmand",
    calories: 700, proteines: 54.3, glucides: 89, lipides: 15.8,
    prix: 9.9,
    resume:
      "200 g pâtes seigle, 150 g bœuf 5% MG, 150 g carottes, 100 g sauce tomate.",
    surgele: false,
    lien: "/plats/bolo",
  },
];

/* ============
   SPÉCIAUX
   ============ */
const FALAFEL_100G = { kcal: 240, prot: 9, gluc: 22, lip: 12 }; // macros /100 g
const FARINES = ["Seigle", "Aromette", "Complète"]; // pâtes fraîches

/* Helpers */
const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;
const Chip = ({ active, onClick, children }) => (
  <button onClick={onClick} className={`chip ${active ? "chip--on" : ""}`} aria-pressed={active}>
    {children}
  </button>
);

export default function Home() {
  const [filtre, setFiltre] = useState("Tous");
  const [q, setQ] = useState("");

  const platsFiltres = useMemo(() => {
    return PLATS.filter((p) => {
      const okType = filtre === "Tous" ? true : p.type === filtre;
      const txt = (p.nom + " " + p.resume).toLowerCase();
      return okType && (!q || txt.includes(q.toLowerCase()));
    });
  }, [filtre, q]);

  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur | Diète ou Gourmand</title>
        <meta name="description" content="Traiteur artisanal — Diététique & Gourmand. Le bon plat au bon prix." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        {/* HERO */}
        <header className="hero">
          <div className="brandline">
            <Image src="/favicon.png" alt="GreenHouse" width={96} height={96} className="logo-big" priority />
            <h1 className="brand">GreenHouse</h1>
          </div>
          <p className="subtitle">Traiteur — <strong>Diététique & Gourmand</strong></p>

          <div className="info-banner">
            <div>🍝 <b>Pâtes fraîches</b> (7 €/kg) — disponibles <b>lundi & jeudi</b>. Farines : {FARINES.join(" · ")}.</div>
            <div>🧆 <b>Falafels en vrac — surgelés</b> (au poids). Macros ci-dessous pour 100 g.</div>
          </div>

          <div className="chips">
            <Chip active={filtre === "Tous"} onClick={() => setFiltre("Tous")}>Tous</Chip>
            <Chip active={filtre === "Diète"} onClick={() => setFiltre("Diète")}>Diète</Chip>
            <Chip active={filtre === "Gourmand"} onClick={() => setFiltre("Gourmand")}>Gourmand</Chip>
          </div>

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un plat…"
            className="search"
            aria-label="Rechercher un plat"
          />
        </header>

        {/* SPÉCIAUX */}
        <section className="specials">
          <article className="special-card">
            <div className="special-head">
              <h3>Falafels en vrac</h3>
              <span className="pill pill-red">Surgelé</span>
            </div>
            <p className="muted">Préparation maison, pratique à la demande (au poids).</p>
            <div className="macros">
              <div><small>kcal/100g</small><div className="num">{FALAFEL_100G.kcal}</div></div>
              <div><small>Prot./100g</small><div className="num">{FALAFEL_100G.prot} g</div></div>
              <div><small>Gluc./100g</small><div className="num">{FALAFEL_100G.gluc} g</div></div>
              <div><small>Lip./100g</small><div className="num">{FALAFEL_100G.lip} g</div></div>
            </div>
            <div className="cta">
              <div className="price">—</div>
              <button className="btn">Commander au poids</button>
            </div>
          </article>

          <article className="special-card">
            <h3>Pâtes fraîches maison</h3>
            <p className="muted">Au kilo — 7 €/kg. Disponibles <b>lundi & jeudi</b>.</p>
            <div className="tags">{FARINES.map((f) => <span key={f} className="tag">{f}</span>)}</div>
            <div className="cta">
              <div className="price">7,00 € <span className="muted">/ kg</span></div>
              <button className="btn btn-ghost">Voir disponibilités</button>
            </div>
          </article>
        </section>

        {/* LISTE DES PLATS */}
        <section className="grid">
          {platsFiltres.map((p) => (
            <article key={p.id} className="card" role="article">
              <div className="card-top">
                <div className="badges">
                  <span className={`badge ${p.type === "Diète" ? "bd-diet" : "bd-gour"}`}>{p.type}</span>
                  {p.surgele && <span className="badge bd-freeze">Surgelé</span>}
                </div>
                <h3 className="title">{p.nom}</h3>
                <p className="resume">{p.resume}</p>
              </div>

              <div className="macros">
                <div><small>kcal</small><div className="num">{p.calories}</div></div>
                <div><small>Prot.</small><div className="num">{p.proteines} g</div></div>
                <div><small>Gluc.</small><div className="num">{p.glucides} g</div></div>
                <div><small>Lip.</small><div className="num">{p.lipides} g</div></div>
              </div>

              <div className="cta">
                <div className="price">{euro(p.prix)}</div>
                {p.lien ? (
                  <Link href={p.lien} className="btn btn-ghost">Voir la fiche</Link>
                ) : (
                  <button className="btn">Commander</button>
                )}
              </div>
            </article>
          ))}
          {platsFiltres.length === 0 && (
            <p className="empty">Aucun plat ne correspond à votre recherche.</p>
          )}
        </section>

        {/* LIVRAISON */}
        <section className="info">
          <h2>Livraison</h2>
          <p>
            <b>Zones :</b> Mulhouse, Kingersheim, Wittenheim, Pulversheim, Wittelsheim, Richwiller,
            Lutterbach, Pfastatt, Illzach, Rixheim, Riedisheim, Habsheim, Eschentzwiller, Brunstatt.
          </p>
          <p className="muted">Le jour même selon disponibilité — nous contacter pour les communes limitrophes.</p>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
        </footer>
      </main>

      {/* ====== STYLES ====== */}
      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#5a6376; --card:#fff;
          --diet:#1aa87b; --gour:#e85b37; --freeze:#6b7cff;
          --brand1:#0aa64c; --brand2:#2d7ae6; --ring:rgba(45,122,230,.18);
        }
        html,body,#__next{height:100%}
        body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial}

        /* Fond vivant */
        .wrap{
          min-height:100%;
          background:
            radial-gradient(1100px 700px at 10% -10%, rgba(13,171,110,.15), transparent 60%),
            radial-gradient(900px 600px at 110% 0%, rgba(45,122,230,.18), transparent 60%),
            linear-gradient(180deg,#f7fbff 0%, #f6fff7 60%, #ffffff 100%);
          position:relative; overflow-x:hidden;
        }
        .wrap::before{
          content:"";
          position:absolute; inset:-20% -10%;
          background:conic-gradient(from 0deg, rgba(45,122,230,.10), rgba(13,171,110,.10), rgba(45,122,230,.10));
          filter:blur(80px); animation:float 12s linear infinite; pointer-events:none;
        }
        @keyframes float{from{transform:rotate(0)}to{transform:rotate(360deg)}}

        .hero{max-width:1100px;margin:0 auto;padding:56px 20px 18px}
        .brandline{display:flex;align-items:center;gap:14px}
        .logo-big{border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.12)}
        .brand{
          margin:0; font-size:clamp(64px, 10vw, 120px); line-height:.9;
          background:linear-gradient(90deg, var(--brand1), #16b36e, #24a0ff, var(--brand2));
          background-size:200% 100%;
          -webkit-background-clip:text;background-clip:text;color:transparent;
          animation:shine 6s ease-in-out infinite alternate; letter-spacing:.5px;
        }
        @keyframes shine{to{background-position:100% 0}}
        .subtitle{margin:8px 0 16px;color:var(--muted);font-size:clamp(18px,2.6vw,26px)}
        .subtitle strong{color:#0d6b57}

        .info-banner{
          display:grid;gap:6px;margin:14px 0 10px;padding:12px 14px;border-radius:14px;
          background:#ffffffcc; backdrop-filter:blur(8px);
          border:1px solid rgba(0,0,0,.06); box-shadow:0 8px 24px rgba(0,0,0,.06)
        }

        .chips{display:flex;flex-wrap:wrap;gap:10px;margin:10px 0 16px}
        .chip{border:1px solid rgba(0,0,0,.08);background:#fff;padding:8px 14px;border-radius:999px;font-weight:600;cursor:pointer;transition:transform .12s, box-shadow .12s}
        .chip--on{border-color:transparent;background:linear-gradient(90deg, rgba(13,171,110,.10), rgba(45,122,230,.10)); box-shadow:0 0 0 3px var(--ring) inset}
        .chip:active{transform:translateY(1px) scale(.99)}

        .search{width:100%;max-width:600px;border:1px solid rgba(0,0,0,.08);background:#fff;height:46px;border-radius:14px;padding:0 14px;font-size:16px;outline:none; box-shadow:0 10px 30px rgba(0,0,0,.05)}
        .search:focus{box-shadow:0 0 0 4px var(--ring),0 10px 30px rgba(0,0,0,.06)}

        .specials{max-width:1100px;margin:0 auto 10px;padding:0 20px;display:grid;gap:16px;grid-template-columns:repeat(2,minmax(0,1fr))}
        @media(max-width:860px){.specials{grid-template-columns:1fr}}
        .special-card{background:var(--card);border-radius:18px;padding:18px;box-shadow:0 10px 26px rgba(0,0,0,.06)}
        .special-head{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .pill{font-weight:800;font-size:12px;padding:4px 10px;border-radius:999px;background:#eef2ff;border:1px solid rgba(0,0,0,.06)}
        .pill-red{background:#f3f5ff;border-color:#cfd6ff;color:#3b49b6}

        .tags{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}
        .tag{padding:6px 10px;border-radius:999px;background:#f1f7ff;border:1px solid rgba(0,0,0,.06);font-weight:600;font-size:13px}
        .muted{color:var(--muted)}

        .grid{max-width:1100px;margin:16px auto 40px;padding:0 20px;display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr))}
        @media(max-width:820px){.grid{grid-template-columns:1fr}}

        .card{background:var(--card);border-radius:18px;padding:18px;box-shadow:0 10px 26px rgba(0,0,0,.06);display:grid;gap:14px;transition:transform .15s ease, box-shadow .15s ease}
        .card:hover{transform:translateY(-2px); box-shadow:0 16px 40px rgba(0,0,0,.08)}
        .card-top{display:grid;gap:8px}
        .badges{display:flex;gap:8px;align-items:center}
        .badge{display:inline-flex;align-items:center;padding:4px 10px;border-radius:999px;font-weight:700;font-size:12px;letter-spacing:.3px;color:#0b1020;background:#eef5ff;border:1px solid rgba(0,0,0,.06)}
        .bd-diet{background:rgba(26,168,123,.12);border-color:rgba(26,168,123,.25)}
        .bd-gour{background:rgba(232,91,55,.12);border-color:rgba(232,91,55,.25)}
        .bd-freeze{background:rgba(107,124,255,.14);border-color:rgba(107,124,255,.28)}
        .title{margin:0;font-size:clamp(18px,2.3vw,24px);line-height:1.2}
        .resume{margin:0;color:var(--muted)}

        .macros{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:linear-gradient(180deg,#fafcff,#f3f7ff);border:1px solid rgba(0,0,0,.05);border-radius:12px;padding:10px}
        .macros small{color:var(--muted)}
        .num{font-weight:800;font-size:15px}

        .cta{display:flex;align-items:center;justify-content:space-between;gap:12px}
        .price{font-size:22px;font-weight:800}
        .btn{padding:10px 16px;border-radius:12px;border:none;color:#fff;font-weight:700;cursor:pointer;background:linear-gradient(90deg, var(--brand1), var(--brand2));box-shadow:0 10px 25px rgba(45,122,230,.22)}
        .btn:active{transform:translateY(1px)}
        .btn-ghost{background:transparent;color:#1b5ec8;border:1px solid rgba(27,94,200,.28);box-shadow:none;border-radius:12px;padding:10px 16px;text-decoration:none}

        .empty{grid-column:1/-1;color:var(--muted);text-align:center;padding:28px 0}

        .info{max-width:1100px;margin:0 auto 30px;padding:0 20px}
        .info h2{margin:0 0 8px}

        .foot{text-align:center;color:var(--muted);padding:28px 16px 40px}
      `}</style>
    </>
  );
}
