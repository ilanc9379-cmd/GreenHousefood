// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";

/* ============
   DONNÉES PLATS
   ============ */
const PLATS = [
  // Ceux visibles sur tes captures
  {
    id: 101,
    nom: "Pâtes complètes — crème légère, champignons & oignons",
    type: "Gourmand",
    calories: 780, proteines: 42, glucides: 84, lipides: 28,
    prix: 9.0,
    resume: "Pâtes complètes, crème légère, champignons, oignons.",
  },
  {
    id: 102,
    nom: "Pâtes complètes — (base tomate)",
    type: "Diète",
    calories: 730, proteines: 22, glucides: 86, lipides: 28,
    prix: 7.0,
    resume: "Sauce tomate maison, herbes, profil plus léger.",
  },

  // Ceux qu’on avait déjà nommés précisément
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
    resume: "Galette complète 100 g, falafels 150 g, crudités, sauce au fromage blanc alsacien.",
  },

  /* =====
     ASTUCE
     =====
     ➜ Ajoute ici tous tes autres plats en copiant un objet et en changeant nom/prix/macros/type.
     type = 'Diète' ou 'Gourmand'
  */
];

/* Petites helpers */
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
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Gourmand
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
        <title>Greenhouse — Traiteur | Diète ou Gourmand</title>
        <meta name="description" content="Greenhouse — Traiteur artisanal : Diététique & gourmand. Le bon plat au bon prix." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        {/* HERO */}
        <header className="hero">
          <div className="brand">
            <Image
              src="/favicon.png"
              alt="Greenhouse logo"
              width={56}
              height={56}
              className="logo"
              priority
            />
            <h1>Greenhouse</h1>
          </div>
          <p className="subtitle">
            Traiteur artisanal — <strong>Diététique & gourmand</strong>
          </p>

          <div className="chips">
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
          </div>

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un plat…"
            className="search"
            aria-label="Rechercher un plat"
          />
        </header>

        {/* LISTE */}
        <section className="grid">
          {platsFiltres.map((p) => (
            <article key={p.id} className="card" role="article">
              <div className="card-top">
                <span className={`badge ${p.type === "Diète" ? "bd-diet" : "bd-gour"}`}>
                  {p.type}
                </span>
                <h3 className="title">{p.nom}</h3>
                <p className="resume">{p.resume}</p>
              </div>

              <div className="macros">
                <div>
                  <small>kcal</small>
                  <div className="num">{p.calories}</div>
                </div>
                <div>
                  <small>Prot.</small>
                  <div className="num">{p.proteines} g</div>
                </div>
                <div>
                  <small>Gluc.</small>
                  <div className="num">{p.glucides} g</div>
                </div>
                <div>
                  <small>Lip.</small>
                  <div className="num">{p.lipides} g</div>
                </div>
              </div>

              <div className="cta">
                <div className="price">{euro(p.prix)}</div>
                <button className="btn">Commander</button>
              </div>
            </article>
          ))}
          {platsFiltres.length === 0 && (
            <p className="empty">Aucun plat ne correspond à votre recherche.</p>
          )}
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} Greenhouse — Traiteur artisanal</p>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --bg1: #e8f7ff;
          --bg2: #dff8ee;
          --ink: #0b1020;
          --muted: #485060;
          --card: #ffffff;
          --ring: rgba(10, 140, 120, 0.22);
          --diet: #1aa87b;
          --gour: #e85b37;
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
        }
        html, body, #__next { height: 100%; }
        body { margin: 0; color: var(--ink); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial; }

        .wrap {
          min-height: 100%;
          background: radial-gradient(1000px 700px at -10% -10%, var(--bg2), transparent 60%),
                      radial-gradient(900px 600px at 110% -20%, var(--bg1), transparent 65%),
                      linear-gradient(180deg, #f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
        }

        .hero {
          max-width: 1100px; margin: 0 auto; padding: 48px 20px 12px;
        }
        .brand { display: flex; align-items: center; gap: 14px; }
        .brand h1 {
          font-size: clamp(40px, 6vw, 80px);
          line-height: 0.95;
          margin: 0;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text; background-clip: text; color: transparent;
          letter-spacing: 0.5px;
        }
        .logo { border-radius: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); }

        .subtitle { margin: 8px 0 18px; color: var(--muted); font-size: clamp(16px, 2.5vw, 22px); }
        .subtitle strong { color: #0d6b57; }

        .chips { display: flex; flex-wrap: wrap; gap: 10px; margin: 6px 0 16px; }
        .chip {
          border: 1px solid rgba(0,0,0,0.08);
          background: white;
          padding: 8px 14px; border-radius: 999px;
          font-weight: 600; cursor: pointer;
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .chip--on {
          border-color: transparent;
          background: linear-gradient(90deg, rgba(13,171,110,.12), rgba(45,122,230,.12));
          box-shadow: 0 0 0 3px var(--ring) inset;
        }
        .chip:active { transform: translateY(1px) scale(.99); }

        .search {
          width: 100%; max-width: 580px;
          border: 1px solid rgba(0,0,0,.08);
          background: white; height: 44px; border-radius: 14px;
          padding: 0 14px; font-size: 16px;
          outline: none; box-shadow: 0 10px 30px rgba(0,0,0,.05);
        }
        .search:focus { box-shadow: 0 0 0 4px var(--ring), 0 10px 30px rgba(0,0,0,.06); }

        .grid {
          max-width: 1100px; margin: 16px auto 40px; padding: 0 20px;
          display: grid; gap: 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }

        .card {
          background: var(--card); border-radius: 18px; padding: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.7) inset;
          display: grid; gap: 14px;
        }
        .card-top { display: grid; gap: 8px; }
        .badge {
          display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px;
          font-weight: 700; font-size: 12px; letter-spacing: .3px; color: #0b1020;
          background: #eef5ff; border: 1px solid rgba(0,0,0,.06);
        }
        .bd-diet { background: rgba(26,168,123,.12); border-color: rgba(26,168,123,.25); }
        .bd-gour { background: rgba(232,91,55,.12); border-color: rgba(232,91,55,.25); }

        .title { margin: 0; font-size: clamp(18px, 2.4vw, 24px); line-height: 1.2; }
        .resume { margin: 0; color: var(--muted); }

        .macros {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 8px;
          background: linear-gradient(180deg,#fafcff,#f3f7ff);
          border: 1px solid rgba(0,0,0,.05); border-radius: 12px; padding: 10px;
        }
        .macros small { color: var(--muted); }
        .num { font-weight: 800; font-size: 15px; }

        .cta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .price { font-size: 22px; font-weight: 800; }
        .btn {
          padding: 10px 16px; border-radius: 12px; border: none; color: white; font-weight: 700; cursor: pointer;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 10px 25px rgba(45,122,230,.22);
        }
        .btn:active { transform: translateY(1px); }

        .empty { grid-column: 1/-1; color: var(--muted); text-align: center; padding: 30px 0; }

        .foot { text-align: center; color: var(--muted); padding: 28px 16px 40px; }
      `}</style>
    </>
  );
}
