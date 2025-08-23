// pages/index.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

const PLATS = [
  {
    id: "bolo",
    nom: "Pâtes bolognaise maison",
    type: "Surgelé", // Diète | Gourmand | Surgelé
    prix: 9.9,
    resume:
      "Pâtes au seigle artisanales, bœuf 5% MG, carottes, sauce tomate.",
    kcal: 700,
    macros: { P: 54.3, G: 89, L: 15.8 },
    tags: ["Riche en protéines"],
    href: "/plats/bolo",
  },
  {
    id: "poulet-poivron",
    nom: "Pâtes complètes · émincé de poulet · sauce poivron",
    type: "Surgelé",
    prix: 9.9,
    resume:
      "Pâtes complètes, poulet, julienne de légumes, sauce poivron/ail/oignon.",
    kcal: 690,
    macros: { P: 62, G: 86, L: 10 },
    tags: ["Équilibré"],
    href: "/plats/pates-poulet-poivron",
  },
  // ➜ Ajoute ici tes autres plats (même structure)
];

const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;

const Chip = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`chip ${active ? "on" : ""}`}
    aria-pressed={active}
  >
    {children}
  </button>
);

export default function Home() {
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Gourmand | Surgelé
  const [q, setQ] = useState("");

  const platsAffiches = useMemo(() => {
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
        <title>GreenHouse — Traiteur · Diététique & Gourmand</title>
        <meta
          name="description"
          content="Des plats maison bons & équilibrés, cuisinés en Alsace. Diète ou gourmand, à vous de choisir. Surgelés de qualité."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <h1 className="brand">GreenHouse</h1>
          <p className="slogan">
            <strong>Traiteur</strong> — Diététique & Gourmand
          </p>
          <p className="intro">
            Des plats maison bons et équilibrés, cuisinés en Alsace. Diète ou
            gourmand&nbsp;: à vous de choisir.
          </p>

          <div className="controls">
            <div className="chips">
              {["Tous", "Diète", "Gourmand", "Surgelé"].map((lab) => (
                <Chip
                  key={lab}
                  active={filtre === lab}
                  onClick={() => setFiltre(lab)}
                >
                  {lab}
                </Chip>
              ))}
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="search"
              placeholder="Rechercher un plat…"
              aria-label="Rechercher un plat"
            />
          </div>
        </header>

        {/* ENCARtS INFO */}
        <section className="infos">
          <article className="info-card pasta">
            <h3>🍝 Pâtes fraîches — 7,00 €/kg</h3>
            <p>
              Disponibles <strong>lundi</strong> & <strong>jeudi</strong>.
              Farines : <strong>seigle</strong>, <strong>aromette</strong>,
              <strong> complète</strong>. Production artisanale, œufs plein air.
            </p>
          </article>
          <article className="info-card frozen">
            <h3>❄️ Falafels en vrac (surgelés)</h3>
            <p>
              Idéals pour vos salades & bowls. Indication{" "}
              <strong>surgelé</strong> affichée – à conserver au congélateur.
            </p>
          </article>
        </section>

        {/* LISTE DES PLATS */}
        <section className="grid">
          {platsAffiches.map((p) => (
            <article key={p.id} className="card">
              <div className="top">
                <div className="badges">
                  <span
                    className={`badge ${
                      p.type === "Diète"
                        ? "bd-diet"
                        : p.type === "Gourmand"
                        ? "bd-gour"
                        : "bd-frozen"
                    }`}
                  >
                    {p.type}
                  </span>
                  {p.tags?.map((t) => (
                    <span className="badge soft" key={t}>
                      {t}
                    </span>
                  ))}
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
                  <div className="num">{p.macros.P} g</div>
                </div>
                <div>
                  <small>Gluc.</small>
                  <div className="num">{p.macros.G} g</div>
                </div>
                <div>
                  <small>Lip.</small>
                  <div className="num">{p.macros.L} g</div>
                </div>
              </div>

              <div className="cta">
                <div className="price">{euro(p.prix)}</div>
                <Link className="btn" href={p.href}>
                  Voir la fiche
                </Link>
              </div>
            </article>
          ))}

          {platsAffiches.length === 0 && (
            <p className="empty">Aucun plat ne correspond à votre recherche.</p>
          )}
        </section>

        {/* SURGÉLÉS – info qualité */}
        <section className="frozen-note">
          <h3>Pourquoi le surgelé ?</h3>
          <p>
            La surgélation <strong>préserve les qualités nutritionnelles</strong>{" "}
            et la <strong>saveur</strong> des aliments en stoppant le
            développement microbien. Nos plats surgelés se conservent{" "}
            <strong>jusqu’à 4 mois au congélateur</strong>. Après
            décongélation, consommez dans les <strong>48 h</strong> et{" "}
            <u>ne pas recongeler</u>.
          </p>
        </section>

        <footer className="foot">
          © {new Date().getFullYear()} GreenHouse — Traiteur artisanal
        </footer>
      </main>

      {/* STYLES */}
      <style jsx>{`
        :root {
          --ink: #081019;
          --muted: #506070;
          --card: #ffffff;
          --ring: rgba(14, 122, 230, 0.18);
          --brand1: #10b981; /* vert */
          --brand2: #3b82f6; /* bleu */
          --diet: #16a34a;
          --gour: #ef4444;
          --frozen: #0891b2;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            "Helvetica Neue", Arial;
          background: #f8fbff;
        }

        /* Fond animé */
        .page {
          min-height: 100%;
          position: relative;
          overflow: hidden;
        }
        .page::before,
        .page::after {
          content: "";
          position: absolute;
          inset: -20% -10% auto -10%;
          height: 60%;
          background: radial-gradient(
            60% 60% at 20% 20%,
            rgba(16, 185, 129, 0.18),
            transparent 70%
          );
          animation: float1 18s ease-in-out infinite;
          z-index: -1;
        }
        .page::after {
          inset: auto -10% -20% -10%;
          height: 70%;
          background: radial-gradient(
            65% 65% at 80% 80%,
            rgba(59, 130, 246, 0.18),
            transparent 70%
          );
          animation: float2 22s ease-in-out infinite;
        }
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(18px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-22px);
          }
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 20px 10px;
        }
        .brand {
          font-size: clamp(44px, 7.5vw, 88px);
          line-height: 0.95;
          margin: 0 0 8px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 0.5px;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }
        .slogan {
          margin: 0;
          font-size: clamp(18px, 2.6vw, 24px);
        }
        .intro {
          margin: 8px 0 16px;
          color: var(--muted);
          font-size: 16px;
        }

        .controls {
          display: grid;
          gap: 12px;
          align-items: center;
          grid-template-columns: 1fr;
        }
        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .chip {
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: white;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.12s ease, box-shadow 0.12s ease,
            background 0.12s ease;
        }
        .chip.on {
          border-color: transparent;
          background: linear-gradient(
            90deg,
            rgba(16, 185, 129, 0.12),
            rgba(59, 130, 246, 0.12)
          );
          box-shadow: 0 0 0 3px var(--ring) inset;
        }
        .chip:active {
          transform: translateY(1px) scale(0.99);
        }
        .search {
          width: 100%;
          max-width: 520px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: white;
          height: 44px;
          border-radius: 14px;
          padding: 0 14px;
          font-size: 16px;
          outline: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .search:focus {
          box-shadow: 0 0 0 4px var(--ring), 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .infos {
          max-width: 1100px;
          margin: 10px auto 6px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        @media (max-width: 860px) {
          .infos {
            grid-template-columns: 1fr;
          }
        }
        .info-card {
          background: #ffffffaa;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
        .info-card h3 {
          margin: 0 0 6px;
        }
        .info-card.pasta {
          border-left: 6px solid var(--brand1);
        }
        .info-card.frozen {
          border-left: 6px solid var(--frozen);
        }

        .grid {
          max-width: 1100px;
          margin: 16px auto 38px;
          padding: 0 20px;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (max-width: 860px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06),
            0 1px 0 rgba(255, 255, 255, 0.7) inset;
          display: grid;
          gap: 14px;
        }
        .badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.3px;
          background: #eef5ff;
          border: 1px solid rgba(0, 0, 0, 0.06);
          color: #0b1020;
        }
        .badge.soft {
          background: #f4f7fb;
        }
        .bd-diet {
          background: rgba(22, 163, 74, 0.12);
          border-color: rgba(22, 163, 74, 0.25);
        }
        .bd-gour {
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.25);
        }
        .bd-frozen {
          background: rgba(8, 145, 178, 0.12);
          border-color: rgba(8, 145, 178, 0.25);
        }

        .title {
          margin: 0;
          font-size: clamp(18px, 2.3vw, 24px);
          line-height: 1.2;
        }
        .resume {
          margin: 0;
          color: var(--muted);
        }

        .macros {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          background: linear-gradient(180deg, #fafcff, #f3f7ff);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          padding: 10px;
        }
        .macros small {
          color: var(--muted);
        }
        .num {
          font-weight: 800;
          font-size: 15px;
        }

        .cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .price {
          font-size: 22px;
          font-weight: 800;
        }
        .btn {
          padding: 10px 16px;
          border-radius: 12px;
          border: none;
          color: white;
          font-weight: 700;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          box-shadow: 0 10px 25px rgba(45, 122, 230, 0.22);
          text-decoration: none;
        }
        .btn:active {
          transform: translateY(1px);
        }

        .empty {
          grid-column: 1 / -1;
          color: var(--muted);
          text-align: center;
          padding: 30px 0;
        }

        .frozen-note {
          max-width: 1100px;
          margin: 0 auto 20px;
          padding: 0 20px 20px;
          color: var(--muted);
        }
        .frozen-note h3 {
          color: var(--ink);
        }

        .foot {
          text-align: center;
          color: var(--muted);
          padding: 28px 16px 40px;
        }
      `}</style>
    </>
  );
}
