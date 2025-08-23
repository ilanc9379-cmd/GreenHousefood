// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const PLATS = [
  {
    id: 101,
    nom: "Pâtes complètes — crème légère, champignons & oignons",
    type: "Gourmand",
    calories: 780, proteines: 42, glucides: 84, lipides: 28,
    prix: 9.0,
    resume: "Pâtes complètes, crème légère, champignons, oignons.",
  },
  {
    id: 201,
    nom: "Pâtes complètes saumon crème",
    type: "Gourmand",
    calories: 760, proteines: 35, glucides: 82, lipides: 28,
    prix: 10.0,
    resume: "Saumon, crème, aneth, ail.",
  },
  {
    id: 202,
    nom: "Lasagnes saumon & épinards",
    type: "Gourmand",
    calories: 820, proteines: 40, glucides: 74, lipides: 40,
    prix: 11.0,
    resume: "Saumon, épinards, béchamel, fromage râpé.",
  },
  {
    id: 203,
    nom: "Wrap falafel & crudités (sauce bibalaka)",
    type: "Diète",
    calories: 680, proteines: 26, glucides: 86, lipides: 22,
    prix: 9.0,
    resume: "Falafels maison, crudités, sauce au fromage blanc alsacien.",
  },
];

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
      const okTexte =
        !q ||
        p.nom.toLowerCase().includes(q.toLowerCase()) ||
        p.resume.toLowerCase().includes(q.toLowerCase());
      return okType && okTexte;
    });
  }, [filtre, q]);

  return (
    <>
      <Head>
        <title>GreenHouse — Traiteur | Diététique & Gourmand</title>
        <meta name="description" content="GreenHouse — Traiteur artisanal : Diététique & Gourmand. Le bon plat au bon prix." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        {/* HEADER FIXE */}
        <header className="header">
          <Image src="/favicon.png" alt="Logo GreenHouse" width={40} height={40} className="logo" />
          <h1 className="brand-name">GreenHouse</h1>
        </header>

        {/* HERO */}
        <section className="hero">
          <p className="subtitle">
            Traiteur artisanal — <strong>Diététique & Gourmand</strong>
          </p>

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
        </section>

        {/* PLATS FRAIS */}
        <section className="grid">
          {platsFiltres.map((p) => (
            <article key={p.id} className="card">
              <div className="card-top">
                <span className={`badge ${p.type === "Diète" ? "bd-diet" : "bd-gour"}`}>{p.type}</span>
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
                <button className="btn">Commander</button>
              </div>
            </article>
          ))}
        </section>

        {/* SURGELÉS */}
        <section className="sect-freeze">
          <div className="freeze-head">
            <h2>Nos plats surgelés ❄️</h2>
            <span className="badge badge-freeze">Surgelé</span>
          </div>

          <div className="grid">
            <article className="card card-freeze">
              <div className="card-top">
                <span className="badge badge-freeze">Surgelé</span>
                <h3 className="title">Pâtes bolognaise maison</h3>
                <p className="resume">Barquette 600 g — prêt en 20 mn au four (ou 8 mn micro-ondes).</p>
              </div>
              <div className="cta">
                <div className="price">9,90 €</div>
                <Link href="/plats/bolo" className="btn btn-freeze">Voir la fiche</Link>
              </div>
            </article>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg1: #e8f7ff; --bg2: #dff8ee;
          --ink: #0b1020; --muted: #485060; --card: #ffffff;
          --ring: rgba(10, 140, 120, 0.22);
          --diet: #1aa87b; --gour: #e85b37;
          --brand1: #0aa64c; --brand2: #2d7ae6;
          --freeze:#3aa3ff;
        }
        body { margin: 0; color: var(--ink); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto; }

        .wrap { min-height: 100%; background: linear-gradient(180deg, #f5fbff, #f7fff9 60%, #fdfefe 100%); }

        /* HEADER */
        .header {
          position: sticky; top: 0; z-index: 100;
          background: white; display: flex; align-items: center; gap: 12px;
          padding: 10px 20px; box-shadow: 0 4px 15px rgba(0,0,0,.08);
        }
        .brand-name {
          font-size: 28px; font-weight: 900; margin: 0;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .logo { border-radius: 6px; }

        .hero { max-width: 1100px; margin: 20px auto; padding: 20px; text-align: center; }
        .subtitle { color: var(--muted); font-size: 18px; }

        .chips { display: flex; justify-content: center; gap: 10px; margin: 16px 0; }
        .chip { border: 1px solid rgba(0,0,0,0.08); background: white; padding: 8px 14px; border-radius: 999px; font-weight: 600; cursor: pointer; }
        .chip--on { background: linear-gradient(90deg, rgba(13,171,110,.12), rgba(45,122,230,.12)); box-shadow: 0 0 0 3px var(--ring) inset; }
        .search { width: 100%; max-width: 500px; border: 1px solid rgba(0,0,0,.08); background: white; height: 44px; border-radius: 14px; padding: 0 14px; font-size: 16px; box-shadow: 0 6px 15px rgba(0,0,0,.05); }

        .grid { max-width: 1100px; margin: 20px auto; padding: 0 20px; display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }

        .card { background: var(--card); border-radius: 18px; padding: 18px; box-shadow: 0 6px 18px rgba(0,0,0,.08); display: grid; gap: 14px; }
        .card-top { display: grid; gap: 8px; }
        .badge { display:inline-flex; align-items:center; padding:4px 10px; border-radius:999px; font-weight:700; font-size:12px; }
        .bd-diet { background: rgba(26,168,123,.12); color:#0c6d50; }
        .bd-gour { background: rgba(232,91,55,.12); color:#9c2d10; }
        .badge-freeze { background: rgba(58,163,255,.15); color:#065ea8; }

        .card-freeze { border: 2px solid var(--freeze); background: linear-gradient(180deg,#f0f8ff,#ffffff); }

        .title { margin: 0; font-size: 20px; }
        .resume { margin: 0; color: var(--muted); }
        .macros { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; border-radius: 12px; padding: 10px; background:#f7fbff; }
        .num { font-weight: 700; }

        .cta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .price { font-size: 20px; font-weight: 800; }
        .btn { padding: 8px 14px; border-radius: 12px; border: none; color: white; font-weight: 700; cursor: pointer; background: linear-gradient(90deg, var(--brand1), var(--brand2)); }
        .btn-freeze { background: linear-gradient(90deg,#3aa3ff,#0066cc); }

        .sect-freeze { background: linear-gradient(180deg,#e6f4ff,#ffffff); padding: 30px 20px; margin-top: 30px; }
        .freeze-head { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }

        .foot { text-align: center; color: var(--muted); padding: 30px; }
      `}</style>
    </>
  );
}
