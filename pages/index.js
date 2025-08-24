// pages/index.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

/* ============
   DONNÉES PLATS (à adapter si besoin)
   href doit pointer vers tes fichiers dans /pages
   Exemple : /pages/pates-bolognaise.js  => href: "/pates-bolognaise"
   ============ */
const PLATS = [
  {
    id: 1,
    nom: "Pâtes bolognaise maison",
    type: "Gourmand",
    resume: "Seigle artisanal, bœuf 5% MG, carottes, sauce tomate.",
    prix: 9.9,
    href: "/pates-bolognaise",
  },
  {
    id: 2,
    nom: "Pâtes émincé de poulet · julienne de légumes · sauce poivron",
    type: "Diète",
    resume: "Poulet, poivron, ail, oignon, herbes — léger et savoureux.",
    prix: 9.9,
    href: "/pates-poulet-poivron",
  },
  {
    id: 3,
    nom: "Bœuf fondant, carottes & purée maison",
    type: "Surgelé",
    resume: "Bourguignon réconfortant + purée spécial, prêt à réchauffer.",
    prix: 10.9,
    href: "/boeuf-carottes-puree",
  },
  {
    id: 4,
    nom: "Falafels en vrac (surgelés)",
    type: "Surgelé",
    resume: "Falafels maison — macros pour 100 g · sans prix à l’unité.",
    prix: null,
    href: "/falafels-vrac",
  },
  {
    id: 5,
    nom: "Pâtes fraîches (au kilo)",
    type: "Épicerie",
    resume: "Lundi & jeudi — seigle, aromettes, complètes. 7,00 €/kg.",
    prix: 7.0,
    href: "/pates-fraiches",
  },
];

const euro = (n) => (n == null ? "—" : `${n.toFixed(2).replace(".", ",")} €`);

export default function Home() {
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Gourmand | Surgelé | Épicerie
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

  const types = ["Tous", "Diète", "Gourmand", "Surgelé", "Épicerie"];

  return (
    <>
      <Head>
        <title>Greenhouse — Traiteur | Diététique & Gourmand</title>
        <meta
          name="description"
          content="Greenhouse — Traiteur artisanal : Diététique & gourmand. Le bon plat au bon prix."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <h1 className="brand">Greenhouse</h1>
          <p className="slogan">
            Traiteur — <strong>Diététique & Gourmand</strong>
          </p>

          <div className="filters">
            {types.map((t) => (
              <button
                key={t}
                className={`chip ${filtre === t ? "on" : ""}`}
                onClick={() => setFiltre(t)}
                aria-pressed={filtre === t}
              >
                {t}
              </button>
            ))}
          </div>

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un plat…"
            className="search"
            aria-label="Rechercher un plat"
          />
        </header>

        {/* GRID */}
        <section className="grid">
          {platsFiltres.map((p) => (
            <Link href={p.href} key={p.id} className="card">
              <span
                className={`badge ${
                  p.type === "Diète"
                    ? "bd-diet"
                    : p.type === "Gourmand"
                    ? "bd-gour"
                    : p.type === "Surgelé"
                    ? "bd-frozen"
                    : "bd-grocery"
                }`}
              >
                {p.type}
              </span>
              <h3 className="title">{p.nom}</h3>
              <p className="resume">{p.resume}</p>
              <div className="foot">
                <span className="price">{euro(p.prix)}</span>
                <span className="cta">Voir la fiche →</span>
              </div>
            </Link>
          ))}
          {platsFiltres.length === 0 && (
            <p className="empty">Aucun plat ne correspond à votre recherche.</p>
          )}
        </section>

        {/* INFO SURGÉLÉS */}
        <section className="frozen-info">
          <h2>Surgelés : qualité & sécurité</h2>
          <p>
            Nos plats surgelés préservent saveurs, texture et nutriments grâce
            à une congélation rapide. Conservez <b>au congélateur (max 4 mois)</b> et,
            après décongélation, <b>au réfrigérateur 48 h</b> maximum.
          </p>
        </section>

        <footer className="sitefoot">
          © {new Date().getFullYear()} Greenhouse — Traiteur artisanal
        </footer>
      </main>

      {/* STYLES LOCAUX */}
      <style jsx>{`
        :root {
          --ink: #0b1020;
          --muted: #5a6374;
          --card: #ffffff;
          --ring: rgba(10, 140, 120, 0.24);
          --diet: #12b886;
          --gour: #f76707;
          --frozen: #228be6;
          --grocery: #845ef7;
          --brand1: #12b886; /* vert */
          --brand2: #228be6; /* bleu */
          --brand3: #845ef7; /* violet */
        }

        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
            Roboto, "Helvetica Neue", Arial;
          color: var(--ink);
          background:
            radial-gradient(1200px 600px at -10% -10%, #e6fff4 0%, transparent 60%),
            radial-gradient(1000px 600px at 110% -20%, #e8f2ff 0%, transparent 60%),
            linear-gradient(180deg, #f9fffd 0%, #f7f9ff 60%, #ffffff 100%);
        }

        .page {
          min-height: 100%;
          position: relative;
          isolation: isolate;
        }
        /* petit motif anim discret */
        .page::after {
          content: "";
          position: fixed;
          inset: -20% -10% auto -10%;
          height: 60vh;
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(18, 184, 134, 0.08),
            rgba(34, 139, 230, 0.08),
            rgba(132, 94, 247, 0.08),
            rgba(18, 184, 134, 0.08)
          );
          filter: blur(40px);
          animation: drift 14s linear infinite;
          z-index: -1;
          opacity: 0.8;
        }
        @keyframes drift {
          from {
            transform: translateY(0px) rotate(0deg);
          }
          to {
            transform: translateY(-20px) rotate(1turn);
          }
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px 12px;
          text-align: center;
        }

        .brand {
          margin: 0;
          font-size: clamp(44px, 9vw, 100px);
          line-height: 0.92;
          letter-spacing: 1px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2), var(--brand3));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 0 transparent;
        }

        .slogan {
          margin: 10px auto 18px;
          color: var(--muted);
          font-size: clamp(16px, 2.5vw, 22px);
        }
        .slogan strong {
          color: #0f766e;
        }

        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin: 8px 0 16px;
        }
        .chip {
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: white;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.2s;
        }
        .chip.on {
          border-color: transparent;
          background: linear-gradient(
            90deg,
            rgba(18, 184, 134, 0.16),
            rgba(34, 139, 230, 0.16),
            rgba(132, 94, 247, 0.16)
          );
          box-shadow: 0 0 0 4px var(--ring);
        }
        .chip:active {
          transform: translateY(1px) scale(0.99);
        }

        .search {
          width: 100%;
          max-width: 580px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: white;
          height: 46px;
          border-radius: 14px;
          padding: 0 14px;
          font-size: 16px;
          outline: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .search:focus {
          box-shadow: 0 0 0 4px var(--ring),
            0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .grid {
          max-width: 1100px;
          margin: 18px auto 40px;
          padding: 0 20px;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 820px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          display: grid;
          gap: 10px;
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06),
            0 1px 0 rgba(255, 255, 255, 0.7) inset;
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
        }
        .badge {
          align-self: start;
          display: inline-flex;
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.3px;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .bd-diet {
          background: rgba(18, 184, 134, 0.14);
          color: #065f46;
          border-color: rgba(18, 184, 134, 0.3);
        }
        .bd-gour {
          background: rgba(247, 103, 7, 0.14);
          color: #7c2d12;
          border-color: rgba(247, 103, 7, 0.3);
        }
        .bd-frozen {
          background: rgba(34, 139, 230, 0.14);
          color: #1e3a8a;
          border-color: rgba(34, 139, 230, 0.3);
        }
        .bd-grocery {
          background: rgba(132, 94, 247, 0.14);
          color: #4c1d95;
          border-color: rgba(132, 94, 247, 0.3);
        }

        .title {
          margin: 0;
          font-size: clamp(18px, 2.2vw, 24px);
          line-height: 1.2;
          font-weight: 800;
        }
        .resume {
          margin: 0;
          color: var(--muted);
        }
        .foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 6px;
        }
        .price {
          font-weight: 900;
          font-size: 20px;
        }
        .cta {
          font-weight: 700;
          opacity: 0.8;
        }

        .frozen-info {
          max-width: 1100px;
          margin: 0 auto 40px;
          padding: 18px 20px;
          border-radius: 18px;
          border: 1px solid rgba(34, 139, 230, 0.25);
          background: linear-gradient(
            180deg,
            rgba(34, 139, 230, 0.06),
            rgba(18, 184, 134, 0.06)
          );
        }
        .frozen-info h2 {
          margin: 0 0 6px;
          font-size: 20px;
        }

        .sitefoot {
          text-align: center;
          color: var(--muted);
          padding: 28px 16px 40px;
        }

        .empty {
          grid-column: 1 / -1;
          color: var(--muted);
          text-align: center;
          padding: 30px 0;
        }
      `}</style>
    </>
  );
}
