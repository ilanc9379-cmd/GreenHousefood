// pages/index.js
import Link from "next/link";
import { useMemo, useState } from "react";

/* ---------------------------
   Données plats (à compléter)
---------------------------- */
const PLATS = [
  {
    id: "bolo",
    nom: "Pâtes bolognaise maison",
    type: "Gourmand",
    surgele: true,
    kcal: 700,
    p: 54.3,
    g: 89,
    l: 15.8,
    prix: 9.9,
    resume:
      "Bolognaise authentique avec pâtes au seigle artisanales (œufs plein air).",
  },
  {
    id: "pates-poulet-poivron",
    nom: "Pâtes complètes · émincé de poulet · sauce poivron",
    type: "Diète",
    surgele: true,
    kcal: 690,
    p: 62,
    g: 86,
    l: 10,
    prix: 9.9,
    resume:
      "Poulet tendre, julienne de légumes et sauce poivron maison (ail, oignon, aromates).",
  },
  {
    id: "boeuf",
    nom: "Bœuf carottes & purée maison",
    type: "Gourmand",
    surgele: true,
    kcal: 690,
    p: 37,
    g: 58,
    l: 24,
    prix: 9.9,
    resume:
      "Bourguignon maigre, carottes fondantes et purée de pommes de terre.",
  },
  {
    id: "poulet-pommes-haricots",
    nom: "Cuisse de poulet rôtie · pommes de terre & haricots verts",
    type: "Diète",
    surgele: true,
    kcal: 780,
    p: 54,
    g: 62,
    l: 32,
    prix: 9.9,
    resume:
      "Cuisse rôtie aux aromates, pommes de terre rôties et haricots verts.",
  },
];

/* utilitaires */
const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;

const Chip = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`chip ${active ? "chip--on" : ""}`}
    aria-pressed={active}
  >
    {children}
  </button>
);

export default function Home() {
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Gourmand | Surgelé
  const [q, setQ] = useState("");

  const plats = useMemo(() => {
    return PLATS.filter((p) => {
      const byType =
        filtre === "Tous"
          ? true
          : filtre === "Surgelé"
          ? p.surgele
          : p.type === filtre;
      const bySearch =
        !q ||
        p.nom.toLowerCase().includes(q.toLowerCase()) ||
        p.resume.toLowerCase().includes(q.toLowerCase());
      return byType && bySearch;
    });
  }, [filtre, q]);

  return (
    <div className="wrap">
      {/* HERO */}
      <header className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="tagline">Traiteur — Diététique &amp; Gourmand</p>
        <p className="intro">
          Des plats maison équilibrés, cuisinés en Alsace et{" "}
          <strong>surge&shy;lés</strong> pour préserver toutes leurs qualités.
        </p>

        <div className="filters">
          <Chip active={filtre === "Tous"} onClick={() => setFiltre("Tous")}>
            Tous
          </Chip>
          <Chip active={filtre === "Diète"} onClick={() => setFiltre("Diète")}>
            Diète
          </Chip>
          <Chip
            active={filtre === "Gourmand"}
            onClick={() => setFiltre("Gourmand")}
          >
            Gourmand
          </Chip>
          <Chip
            active={filtre === "Surgelé"}
            onClick={() => setFiltre("Surgelé")}
          >
            Surgelé
          </Chip>
        </div>

        <input
          className="search"
          placeholder="Rechercher un plat…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Rechercher un plat"
        />
      </header>

      {/* INFOS */}
      <section className="infoGrid">
        <article className="infoCard">
          <h3>🍝 Pâtes fraîches — <b>7,00 €/kg</b></h3>
          <p className="infoText">
            Disponibles <b>lundi &amp; jeudi</b>. Farines&nbsp;:{" "}
            <b>seigle</b>, <b>aromate</b>, <b>complète</b>. Production
            artisanale, œufs plein air.
          </p>
        </article>

        <article className="infoCard">
          <h3>❄️ Falafels en vrac (surgelés)</h3>
          <p className="infoText">
            Idéals pour vos salades &amp; bowls. Indication{" "}
            <b>surgelé</b> affichée — à conserver au congélateur.
          </p>
        </article>
      </section>

      {/* LISTE PLATS */}
      <main className="container">
        <ul className="grid">
          {plats.map((p) => (
            <li key={p.id} className="card">
              <div className="top">
                <div className="badges">
                  {p.surgele && <span className="badge b-frozen">Surgelé</span>}
                  <span
                    className={`badge ${
                      p.type === "Diète" ? "b-diet" : "b-gourmand"
                    }`}
                  >
                    {p.type}
                  </span>
                </div>
                <h3 className="title">{p.nom}</h3>
                <p className="resume">{p.resume}</p>
              </div>

              <div className="macros">
                <div>
                  <small>kcal</small>
                  <div className="num">{p.kcal}</div>
                </div>
                <div>
                  <small>Prot.</small>
                  <div className="num">{p.p} g</div>
                </div>
                <div>
                  <small>Gluc.</small>
                  <div className="num">{p.g} g</div>
                </div>
                <div>
                  <small>Lip.</small>
                  <div className="num">{p.l} g</div>
                </div>
              </div>

              <div className="cta">
                <div className="price">{euro(p.prix)}</div>
                <Link className="btn" href={`/plats/${p.id}`}>
                  Voir le plat
                </Link>
              </div>
            </li>
          ))}
          {plats.length === 0 && (
            <p className="empty">Aucun plat ne correspond à la recherche.</p>
          )}
        </ul>
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
      </footer>

      {/* STYLES */}
      <style jsx>{`
        :root {
          --ink: #0b1320;
          --muted: #576073;
          --card: #ffffff;
          --ring: rgba(16, 185, 129, 0.22);
          --brand1: #10b981;
          --brand2: #3b82f6;
          --diet: #10b981;
          --gour: #ef4444;
          --frozen: #0ea5e9;
        }

        /* fond vivant */
        .wrap {
          min-height: 100vh;
          background:
            radial-gradient(900px 600px at -10% -10%, #e7fff6 0%, transparent 60%),
            radial-gradient(900px 600px at 110% -10%, #e7f0ff 0%, transparent 60%),
            linear-gradient(180deg, #f8fffb 0%, #f6fbff 55%, #ffffff 100%);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 18px 10px;
          text-align: center;
        }
        .brand {
          margin: 0;
          font-size: clamp(44px, 7vw, 88px);
          font-weight: 900;
          letter-spacing: 0.4px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tagline { margin: 6px 0 4px; font-weight: 700; }
        .intro { margin: 0 auto 14px; color: var(--muted); max-width: 720px; }

        .filters {
          display: flex; gap: 10px; flex-wrap: wrap;
          justify-content: center; margin: 8px 0 12px;
        }
        .chip {
          border: 1px solid rgba(0,0,0,.08);
          background: #fff;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: box-shadow .12s ease, transform .12s ease;
        }
        .chip--on {
          border-color: transparent;
          background: linear-gradient(90deg, rgba(16,185,129,.12), rgba(59,130,246,.12));
          box-shadow: 0 0 0 3px var(--ring) inset;
        }
        .chip:active { transform: translateY(1px); }

        .search {
          width: 100%; max-width: 560px; height: 46px;
          margin: 4px auto 0;
          display: block;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,.08);
          background: #fff;
          font-size: 16px;
          outline: none;
          box-shadow: 0 12px 32px rgba(0,0,0,.05);
        }
        .search:focus { box-shadow: 0 0 0 4px var(--ring), 0 12px 32px rgba(0,0,0,.06); }

        .infoGrid {
          max-width: 1100px;
          margin: 14px auto 6px;
          padding: 0 18px;
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 860px) { .infoGrid { grid-template-columns: 1fr; } }

        .infoCard {
          background: #ffffffcc;
          border: 1px solid rgba(0,0,0,.05);
          border-radius: 16px;
          padding: 14px 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06);
        }
        .infoCard h3 { margin: 0 0 6px; }
        .infoText { margin: 0; color: var(--muted); }

        .container { max-width: 1100px; margin: 0 auto; padding: 6px 18px 36px; }

        .grid {
          list-style: none; padding: 0;
          display: grid; gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 860px) { .grid { grid-template-columns: 1fr; } }

        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 12px 32px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.7) inset;
          display: grid; gap: 12px;
        }
        .badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .badge {
          font-size: 12px; font-weight: 800; letter-spacing: .3px;
          padding: 4px 10px; border-radius: 999px;
          border: 1px solid rgba(0,0,0,.06);
          background: #eef5ff; color: #0b1320;
        }
        .b-diet { background: rgba(16,185,129,.14); border-color: rgba(16,185,129,.28); }
        .b-gourmand { background: rgba(239,68,68,.14); border-color: rgba(239,68,68,.28); }
        .b-frozen { background: rgba(14,165,233,.14); border-color: rgba(14,165,233,.28); color: var(--frozen); }

        .title { margin: 0; font-size: clamp(18px, 2.3vw, 24px); line-height: 1.2; }
        .resume { margin: 0; color: var(--muted); }

        .macros {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 8px;
          background: linear-gradient(180deg,#fafcff,#f3f8ff);
          border: 1px solid rgba(0,0,0,.05);
          border-radius: 12px; padding: 10px;
        }
        .macros small { color: var(--muted); }
        .num { font-weight: 800; }

        .cta { display: flex; align-items: center; justify-content: space-between; }
        .price { font-weight: 900; font-size: 22px; }
        .btn {
          padding: 10px 16px; border-radius: 12px; text-decoration: none;
          color: #fff; font-weight: 800;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 10px 25px rgba(59,130,246,.22);
        }
        .btn:active { transform: translateY(1px); }

        .empty { grid-column: 1/-1; color: var(--muted); text-align: center; padding: 24px 0; }

        .foot { text-align: center; color: var(--muted); padding: 26px 16px; }
      `}</style>
    </div>
  );
}
