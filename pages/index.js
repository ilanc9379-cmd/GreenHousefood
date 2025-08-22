// pages/index.js
import Head from "next/head";

const PLATS = [
  {
    id: 1,
    nom: "Wrap Poulet César",
    type: "Gourmand",
    calories: 780,
    proteines: 42,
    glucides: 85,
    lipides: 34,
    prix: 12.5,
    resume: "Poulet pané, romaine, parmesan, sauce césar.",
  },
  {
    id: 2,
    nom: "Bowl Saumon & Quinoa",
    type: "Diète",
    calories: 520,
    proteines: 34,
    glucides: 47,
    lipides: 18,
    prix: 14.9,
    resume: "Saumon grillé, quinoa, avocat, edamame, sauce citronnée.",
  },
  {
    id: 3,
    nom: "Burger Signature",
    type: "Gourmand",
    calories: 980,
    proteines: 45,
    glucides: 87,
    lipides: 49,
    prix: 13.9,
    resume: "Bœuf maturé, cheddar, oignons confits, sauce maison.",
  },
  {
    id: 4,
    nom: "Veggie Power Bowl",
    type: "Diète",
    calories: 610,
    proteines: 28,
    glucides: 64,
    lipides: 22,
    prix: 11.9,
    resume: "Tofu croustillant, panais rôtis, fèves, curry doux, tahini.",
  },
];

const CHIP = ({ active, label, onClick }) => (
  <button
    className={`chip ${active ? "chip--active" : ""}`}
    onClick={onClick}
    type="button"
  >
    {label}
    <style jsx>{`
      .chip {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.06);
        border-radius: 999px;
        padding: 8px 14px;
        font-weight: 600;
        letter-spacing: 0.2px;
        backdrop-filter: blur(6px);
        transition: transform 0.15s ease, background 0.15s ease,
          border-color 0.15s ease;
      }
      .chip:hover {
        transform: translateY(-1px);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.35);
      }
      .chip--active {
        border-color: transparent;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        color: #04130d;
      }
    `}</style>
  </button>
);

export default function Home() {
  // Filtre côté build/SSR-safe : uniquement des calculs JS simples
  const [filtre, setFiltre] = React.useState("Tous");

  const platsFiltres =
    filtre === "Tous" ? PLATS : PLATS.filter((p) => p.type === filtre);

  return (
    <>
      <Head>
        <title>Greenhouse — Traiteur | Diète & Gourmand</title>
        <meta
          name="description"
          content="Greenhouse — Traiteur artisanal. Diététique & Gourmand. Plats frais, équilibrés, faits maison."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        <header className="hero">
          <div className="hero__left">
            <h1 className="brand">Greenhouse</h1>
            <p className="subtitle">
              Traiteur artisanal — <strong>Diététique &amp; Gourmand</strong>
            </p>
            <div className="chips">
              {["Tous", "Diète", "Gourmand"].map((c) => (
                <CHIP
                  key={c}
                  label={c}
                  active={filtre === c}
                  onClick={() => setFiltre(c)}
                />
              ))}
            </div>
          </div>
          <div className="hero__right">
            <div className="hero-card">
              <h3>Le bon plat au bon prix</h3>
              <p>
                Diète ou gourmand — à vous de choisir.
                <br />
                Pâtes fraîches maison, gammes fraîches &amp; surgelées, falafels
                artisanaux.
              </p>
            </div>
          </div>
        </header>

        <section className="grid">
          {platsFiltres.map((p) => (
            <article className={`card card--${p.type.toLowerCase()}`} key={p.id}>
              <div className="card__head">
                <span className="badge">{p.type}</span>
                <h3 className="card__title">{p.nom}</h3>
                <p className="card__desc">{p.resume}</p>
              </div>

              <div className="macros">
                <div>
                  <small>Calories</small>
                  <strong>{p.calories}</strong>
                </div>
                <div>
                  <small>Prot.</small>
                  <strong>{p.proteines} g</strong>
                </div>
                <div>
                  <small>Gluc.</small>
                  <strong>{p.glucides} g</strong>
                </div>
                <div>
                  <small>Lip.</small>
                  <strong>{p.lipides} g</strong>
                </div>
              </div>

              <div className="card__foot">
                <div className="price">
                  <span className="amount">{p.prix.toFixed(2)} €</span>
                </div>
                <button className="cta">Commander</button>
              </div>
            </article>
          ))}
        </section>

        <footer className="foot">
          © {new Date().getFullYear()} Greenhouse — Traiteur artisanal
        </footer>
      </main>

      {/* Styles globaux + composants via styled-jsx */}
      <style jsx global>{`
        :root {
          --bg1: #021a10;
          --bg2: #032017;
          --bg3: #04261d;
          --card: #0b1f2a;
          --muted: rgba(255, 255, 255, 0.7);
          --soft: rgba(255, 255, 255, 0.1);
          --ring: 0 10px 35px rgba(0, 0, 0, 0.35);
          --green: #22c55e;
          --green-deep: #16a34a;
          --amber: #f59e0b;
          --rose: #f43f5e;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
          color: #e6f2ec;
          background:
            radial-gradient(900px 560px at 30% 10%, rgba(34, 197, 94, 0.065), transparent 60%),
            radial-gradient(1000px 650px at 85% 0%, rgba(15, 118, 110, 0.08), transparent 65%),
            linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 40%, var(--bg3) 100%);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 32px 18px 64px;
        }

        /* HERO */
        .hero {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 16px;
          align-items: stretch;
          margin-bottom: 28px;
        }
        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }
        .brand {
          margin: 0;
          font-size: clamp(42px, 7vw, 100px);
          line-height: 1;
          letter-spacing: 0.5px;
          background: linear-gradient(135deg, #2dd4bf, #22c55e 45%, #86efac 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
        }
        .subtitle {
          margin: 10px 0 18px;
          color: var(--muted);
          font-size: clamp(16px, 2.6vw, 22px);
        }
        .chips {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero__right {
          display: grid;
          align-items: end;
        }
        .hero-card {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.06));
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 22px 20px;
          box-shadow: var(--ring);
        }
        .hero-card h3 {
          margin: 0 0 6px;
          font-size: clamp(22px, 3vw, 26px);
        }
        .hero-card p {
          margin: 0;
          color: var(--muted);
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        @media (max-width: 820px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        /* CARD */
        .card {
          background: rgba(7, 19, 26, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 18px;
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 12px;
          box-shadow: var(--ring);
        }
        .card--diète {
          border-color: rgba(34, 197, 94, 0.25);
        }
        .card--gourmand {
          border-color: rgba(245, 158, 11, 0.25);
        }
        .card__head .badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 6px;
        }
        .card__title {
          margin: 0 0 6px;
          font-size: clamp(22px, 2.8vw, 26px);
        }
        .card__desc {
          margin: 0;
          color: var(--muted);
        }
        .macros {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .macros > div {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 12px;
          padding: 10px;
          text-align: center;
        }
        .macros small {
          display: block;
          opacity: 0.75;
        }
        .macros strong {
          font-size: 16px;
        }
        .card__foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .amount {
          font-weight: 800;
          font-size: 20px;
        }
        .cta {
          appearance: none;
          border: 0;
          cursor: pointer;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--green), var(--green-deep));
          color: #06150e;
          font-weight: 800;
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .cta:hover {
          transform: translateY(-1px);
          filter: brightness(1.05);
        }

        .foot {
          margin-top: 36px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

// Important : React doit être importé quand on utilise JSX sans framework plugin automatique
import * as React from "react";
