// pages/index.js
export default function Home() {
  const plats = [
    {
      titre: "Pâtes complètes saumon crème",
      desc: "Saumon • crème • aneth • ail.",
      prix: "10,00 €",
      nutri: { kcal: 760, prot: 35, gluc: 82, lip: 28 },
      tag: "Gourmand"
    },
    {
      titre: "Lasagnes saumon & épinards",
      desc: "Saumon • épinards • béchamel • fromage râpé.",
      prix: "11,00 €",
      nutri: { kcal: 820, prot: 40, gluc: 74, lip: 40 },
      tag: "Gourmand"
    },
    {
      titre: "Wrap falafel & crudités (sauce bibalaka)",
      desc: "Galette complète 100 g • falafels 150 g • crudités • sauce au fromage blanc alsacien.",
      prix: "9,00 €",
      nutri: { kcal: 680, prot: 26, gluc: 86, lip: 22 },
      tag: "Diète"
    },
    {
      titre: "Pâtes complètes poulet champignons",
      desc: "Poulet • sauce légère • champignons • oignons.",
      prix: "9,00 €",
      nutri: { kcal: 780, prot: 42, gluc: 84, lip: 28 },
      tag: "Équilibré"
    },
    {
      titre: "Bol protéiné poulet & riz",
      desc: "Poulet mariné • riz basmati • légumes croquants • herbes fraîches.",
      prix: "9,50 €",
      nutri: { kcal: 690, prot: 48, gluc: 75, lip: 16 },
      tag: "Diète"
    },
    {
      titre: "Pâtes complètes tomate & basilic",
      desc: "Coulis tomate maison • basilic • huile d’olive.",
      prix: "7,00 €",
      nutri: { kcal: 730, prot: 22, gluc: 86, lip: 28 },
      tag: "Végétarien"
    }
  ];

  const zones = [
    "Mulhouse","Kingersheim","Wittenheim","Pulversheim","Wittelsheim","Richwiller",
    "Lutterbach","Pfastatt","Illzach","Rixheim","Riedisheim","Habsheim","Eschentzwiller","Brunstatt"
  ];

  return (
    <main className="wrap">
      <section className="hero">
        <div className="hero-side">
          <h1 className="brand">GreenHouse</h1>
          <p className="subtitle">Traiteur artisanal — <strong>Diététique & Gourmand</strong></p>

          <div className="chips">
            <a className="chip" href="#accueil">
              <svg viewBox="0 0 24 24"><path d="M3 12l9-9 9 9v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9z"/></svg>
              Accueil
            </a>
            <a className="chip" href="#livraison">
              <svg viewBox="0 0 24 24"><path d="M3 7h13v8H3zM16 9h3l2 3v3h-5zM7 18a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z"/></svg>
              Livraison
            </a>
            <a className="chip" href="#gammes">
              <svg viewBox="0 0 24 24"><path d="M4 6h16v4H4zM4 14h16v4H4z"/></svg>
              Nos gammes
            </a>
            <a className="chip" href="#infos">
              <svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zM11 11h2v6h-2z"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              Infos produits
            </a>
            <a className="chip" href="#plats">
              <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              Nos plats
            </a>
          </div>

          <div className="cta">
            <a className="btn btn-primary" href="#plats">Voir les plats</a>
            <a className="btn btn-ghost" href="#livraison">Zones & horaires</a>
          </div>
        </div>

        <div className="hero-card">
          <h2>Le bon plat au bon prix</h2>
          <p>Diète ou gourmand — à vous de choisir. Pâtes fraîches maison, gammes fraîches & surgelées, falafels artisanaux.</p>
        </div>
      </section>

      <section id="livraison" className="card">
        <h3>Livraison</h3>
        <p><b>Zones :</b> {zones.join(", ")}.</p>
        <p><b>Horaires :</b> du lundi au vendredi, 11:30 – 14:00 & 18:30 – 21:30.</p>
        <p><b>Commande :</b> WhatsApp / téléphone – retrait possible.</p>
      </section>

      <section id="plats" className="grid">
        {plats.map((p, i) => (
          <article className="meal" key={i}>
            <div className="meal-head">
              <span className={`pill pill-${p.tag.toLowerCase()}`}>{p.tag}</span>
              <h4>{p.titre}</h4>
              <p className="desc">{p.desc}</p>
            </div>
            <div className="price">Prix : <b>{p.prix}</b></div>
            <div className="nutri">
              <div><small>Calories</small><b>~{p.nutri.kcal} kcal</b></div>
              <div><small>Prot.</small><b>~{p.nutri.prot} g</b></div>
              <div><small>Gluc.</small><b>~{p.nutri.gluc} g</b></div>
              <div><small>Lip.</small><b>~{p.nutri.lip} g</b></div>
            </div>
          </article>
        ))}
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
      </footer>

      <style jsx>{`
        :root{
          --bg1:#0b1020; --bg2:#111a2d;
          --grad1:#1c3d5a; --grad2:#0ea5ea; --grad3:#34d399;
          --card:#0f172a; --muted:#94a3b8; --text:#e5f0ff;
          --pill1:#22c55e; --pill2:#f59e0b; --pill3:#60a5fa; --pill4:#e879f9;
          --ring: rgba(14,165,233,.25);
        }
        html,body{height:100%}
        body{margin:0; color:var(--text); background:
          radial-gradient(1300px 700px at 10% 10%, rgba(14,165,233,.10), transparent 60%),
          radial-gradient(1000px 600px at 90% 0%, rgba(52,211,153,.10), transparent 60%),
          radial-gradient(900px 560px at 30% 100%, rgba(14,165,233,.10), transparent 60%),
          linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 100%);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }
        .wrap{max-width:1100px; margin:0 auto; padding:24px 16px 96px}
        .hero{display:grid; grid-template-columns: 1.1fr .9fr; gap:24px; align-items:stretch}
        @media (max-width:920px){ .hero{grid-template-columns:1fr} }

        .brand{font-size:clamp(44px,7vw,88px); line-height:.95; margin:8px 0 6px;
          background:linear-gradient(90deg,var(--grad2),var(--grad3));
          -webkit-background-clip:text; background-clip:text; color:transparent;}
        .subtitle{margin:0 0 18px; font-size:clamp(16px,2.6vw,22px); color:var(--muted)}

        .chips{display:flex; flex-wrap:wrap; gap:10px; margin:10px 0 18px}
        .chip{display:inline-flex; align-items:center; gap:8px; padding:9px 14px; border-radius:999px;
          background:linear-gradient(180deg, rgba(148,163,184,.18), rgba(15,23,42,.55));
          border:1px solid rgba(148,163,184,.18); color:#e2e8f0; text-decoration:none; font-weight:600}
        .chip svg{width:16px;height:16px;fill:currentColor;opacity:.8}
        .chip:hover{transform:translateY(-1px); box-shadow:0 8px 24px var(--ring)}
        .cta{display:flex; flex-wrap:wrap; gap:12px}
        .btn{appearance:none; border:0; cursor:pointer; text-decoration:none; padding:12px 18px;
          font-weight:800; border-radius:14px}
        .btn-primary{background:linear-gradient(90deg, var(--grad2), var(--grad3)); color:#061019}
        .btn-primary:hover{transform:translateY(-1px); box-shadow:0 16px 42px var(--ring)}
        .btn-ghost{background:transparent; color:var(--text); border:1px solid rgba(148,163,184,.25)}
        .btn-ghost:hover{background:rgba(148,163,184,.08)}

        .hero-card{
          background:linear-gradient(180deg, rgba(2,8,23,.6), rgba(2,6,23,.35));
          border:1px solid rgba(148,163,184,.18);
          border-radius:22px; padding:22px 22px 20px; position:relative; overflow:hidden;
          box-shadow:inset 0 0 0 1px rgba(148,163,184,.06), 0 24px 60px rgba(2,6,23,.45);
        }
        .hero-card:after{
          content:""; position:absolute; inset:-1px; border-radius:22px; pointer-events:none;
          background:conic-gradient(from 180deg at 50% 50%, rgba(14,165,233,.18), transparent, rgba(52,211,153,.18));
          filter:blur(24px); opacity:.35; mix-blend:screen;
        }
        .hero-card h2{margin:0 0 4px; font-size:clamp(26px,4.6vw,36px)}
        .hero-card p{margin:0; color:#cdd7e6}

        .card{margin-top:22px; background:linear-gradient(180deg, rgba(2,8,23,.6), rgba(2,6,23,.35));
          border:1px solid rgba(148,163,184,.18); border-radius:22px; padding:20px 22px}
        .card h3{margin:0 0 10px; font-size:clamp(22px,4vw,32px)}

        .grid{margin-top:22px; display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap:18px}
        @media (max-width:820px){ .grid{grid-template-columns:1fr} }

        .meal{
          background:linear-gradient(180deg, rgba(15,23,42,.9), rgba(15,23,42,.78));
          border:1px solid rgba(148,163,184,.18); border-radius:22px; padding:18px;
          box-shadow: 0 10px 28px rgba(2,6,23,.42);
        }
        .meal-head h4{margin:8px 0 6px; font-size:clamp(18px,2.8vw,24px)}
        .meal .desc{margin:0; color:#c7d2fe}
        .price{margin:12px 0 10px; font-size:clamp(16px,2.6vw,20px)}
        .nutri{display:grid; grid-template-columns:repeat(4,1fr); gap:8px}
        .nutri div{background:rgba(2,6,23,.45); border:1px solid rgba(148,163,184,.18); border-radius:12px; padding:8px}
        .nutri small{display:block; color:var(--muted)}
        .nutri b{font-size:14px}

        .pill{display:inline-block; font-size:12px; font-weight:800; padding:6px 10px; border-radius:999px;
          background:rgba(148,163,184,.15); border:1px solid rgba(148,163,184,.25); color:#e2e8f0}
        .pill-diète{background:rgba(34,197,94,.15); border-color:rgba(34,197,94,.35); color:#bbf7d0}
        .pill-gourmand{background:rgba(245,158,11,.16); border-color:rgba(245,158,11,.4); color:#fde68a}
        .pill-équilibré{background:rgba(96,165,250,.16); border-color:rgba(96,165,250,.4); color:#bfdbfe}
        .pill-végétarien{background:rgba(232,121,249,.16); border-color:rgba(232,121,249,.4); color:#f5d0fe}

        .footer{opacity:.8; text-align:center; margin-top:28px}
      `}</style>
    </main>
  );
}
