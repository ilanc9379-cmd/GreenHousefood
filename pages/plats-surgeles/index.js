// pages/plats-surgeles/index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

/** =========
 *  DONNÉES
 *  =========
 *  Tous tes plats actuels (Diète uniquement pour l’instant).
 *  Ajoute/retire des items ici : le reste de la page s’adapte.
 */
const PLATS = [
  {
    slug: "pates-bolognaise-seigle",
    titre: "Pâtes complètes au seigle — Bolognaise maison",
    resume:
      "Bœuf 5%, carotte, tomate, herbes. Pâtes artisanales au seigle.",
    badges: ["Diète", "Surgelé"],
    kcal: 700,
    prix: 9.9,
  },
  {
    slug: "pates-poulet-poivron",
    titre: "Pâtes complètes — émincé de poulet & sauce poivron maison",
    resume:
      "Julienne de légumes, ail & oignon, sauce poivron maison.",
    badges: ["Diète", "Surgelé"],
    kcal: 640,
    prix: 9.9,
  },
  {
    slug: "boeuf-bourguignon-puree",
    titre: "Bœuf mijoté, carottes & purée maison",
    resume:
      "Morceaux maigres, carottes fondantes, purée de pommes de terre.",
    badges: ["Diète", "Surgelé"],
    kcal: 680,
    prix: 9.9,
  },
  {
    slug: "moussaka-revisitee",
    titre: "Moussaka revisitée — aubergine, bœuf 5%, riz complet",
    resume:
      "Aubergine, concassée de tomate, riz complet, fromage gratiné.",
    badges: ["Diète", "Surgelé"],
    kcal: 720,
    prix: 9.9,
  },
  {
    slug: "riz-cabillaud-petits-legumes",
    titre: "Cabillaud & riz complet — petits légumes",
    resume:
      "Carotte, oignon, poivron, petits pois, huile d’olive & aromates.",
    badges: ["Diète", "Surgelé"],
    kcal: 610,
    prix: 9.9,
  },
  {
    slug: "curry-pois-chiches-quinoa",
    titre: "Bol végé — curry de pois chiches & quinoa",
    resume:
      "Plat végétal complet, sauce douce aux épices.",
    badges: ["Diète", "Végé", "Surgelé"],
    kcal: 590,
    prix: 9.9,
  },
  {
    slug: "saumon-haricots-verts-riz",
    titre: "Saumon, haricots verts & riz complet",
    resume:
      "Filet de saumon, haricots verts, citron & herbes.",
    badges: ["Diète", "Surgelé"],
    kcal: 650,
    prix: 9.9,
  },
  {
    slug: "falafel-patate-douce",
    titre: "Falafels maison · purée de patate douce · courgettes",
    resume:
      "Végétal, sauce yaourt-tahini citronnée.",
    badges: ["Diète", "Végé", "Surgelé"],
    kcal: 690,
    prix: 9.9,
  },
];

const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;

const Chip = ({ active, onClick, children }) => (
  <button
    className={`chip ${active ? "on" : ""}`}
    onClick={onClick}
    aria-pressed={active}
  >
    {children}
  </button>
);

export default function PlatsSurgeles() {
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Végé
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    return PLATS.filter((p) => {
      const okType =
        filtre === "Tous" ? true : p.badges.includes(filtre);
      const txt = (p.titre + " " + p.resume).toLowerCase();
      const okQ = !q || txt.includes(q.toLowerCase());
      return okType && okQ;
    });
  }, [filtre, q]);

  return (
    <>
      <Head>
        <title>Greenhouse — Plats surgelés</title>
        <meta
          name="description"
          content="Plats surgelés Greenhouse — diététiques & gourmands, préparés artisanalement pour préserver saveurs & nutriments."
        />
      </Head>

      <main className="wrap">
        {/* Bandeau haut */}
        <div className="top">
          <Link href="/" className="brand">
            <Image
              src="/favicon.png"
              alt="Logo Greenhouse"
              width={48}
              height={48}
              className="logo"
              priority
            />
            <h1 className="gh">Greenhouse</h1>
          </Link>

          <p className="slogan">
            Traiteur — <strong>diététique & gourmand</strong>
          </p>

          <div className="chips">
            <Chip active={filtre === "Tous"} onClick={() => setFiltre("Tous")}>
              Tous
            </Chip>
            <Chip active={filtre === "Diète"} onClick={() => setFiltre("Diète")}>
              Diète
            </Chip>
            <Chip active={filtre === "Végé"} onClick={() => setFiltre("Végé")}>
              Végé
            </Chip>
          </div>

          <input
            className="search"
            placeholder="Rechercher un plat…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label="Rechercher un plat"
          />

          <div className="freezeNote">
            <strong>Surgelé, mais vivant.</strong> Une surgélation rapide limite
            l’oxydation et fige la fraîcheur : <em>goûts, textures et nutriments</em> sont
            mieux préservés — et le gaspillage, réduit.
          </div>
        </div>

        {/* Grille de cartes */}
        <section className="grid">
          {list.map((p) => (
            <Link href={`/plats-surgeles/${p.slug}`} key={p.slug} className="card">
              <div className="card-top">
                <div className="badges">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className={`badge ${
                        b === "Végé" ? "bd-vege" : b === "Diète" ? "bd-diet" : "bd-freeze"
                      }`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h3 className="title">{p.titre}</h3>
                <p className="resume">{p.resume}</p>
              </div>

              <div className="meta">
                <div className="pill">
                  <small>kcal (portion)</small>
                  <div className="num">{p.kcal}</div>
                </div>
                <div className="pill">
                  <small>Prix</small>
                  <div className="num">{euro(p.prix)}</div>
                </div>
              </div>

              <div className="cta">
                <span className="more">Voir la fiche</span>
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}

          {list.length === 0 && (
            <p className="empty">Aucun plat ne correspond à votre recherche.</p>
          )}
        </section>

        <footer className="foot">
          © {new Date().getFullYear()} Greenhouse — Plats surgelés
        </footer>
      </main>

      <style jsx>{`
        :root {
          --ink: #0b1020;
          --muted: #586072;
          --card: #ffffff;
          --ring: rgba(45, 122, 230, 0.18);
          --diet: #14b87a;
          --vege: #6aa84f;
          --freeze: #2d7ae6;
          --brand1: #0aa64c;
          --brand2: #2d7ae6;
          --bg1: #f5fbff;
          --bg2: #f7fff9;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
        }
        .wrap {
          min-height: 100%;
          background:
            radial-gradient(1200px 700px at -10% -10%, #e6fff4, transparent 60%),
            radial-gradient(1000px 650px at 110% -10%, #e8f0ff, transparent 65%),
            linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 55%, #fff 100%);
        }

        .top {
          max-width: 1100px;
          margin: 0 auto;
          padding: 32px 20px 10px;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
        }
        .logo {
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        .gh {
          margin: 0;
          font-size: clamp(40px, 6vw, 82px);
          line-height: 0.95;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 0.5px;
        }
        .slogan {
          margin: 8px 0 16px;
          color: var(--muted);
          font-size: clamp(16px, 2.2vw, 22px);
        }
        .slogan strong {
          color: #0d6b57;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 6px 0 14px;
        }
        .chip {
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: white;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.12s ease, box-shadow 0.12s ease;
        }
        .chip.on {
          border-color: transparent;
          background: linear-gradient(90deg, rgba(13, 171, 110, 0.12), rgba(45, 122, 230, 0.12));
          box-shadow: 0 0 0 3px var(--ring) inset;
        }
        .search {
          width: 100%;
          max-width: 580px;
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

        .freezeNote {
          margin-top: 14px;
          max-width: 780px;
          border-left: 4px solid var(--freeze);
          background: rgba(45, 122, 230, 0.06);
          padding: 10px 12px;
          border-radius: 10px;
          color: #23324a;
        }

        .grid {
          max-width: 1100px;
          margin: 18px auto 36px;
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
          gap: 12px;
          background: var(--card);
          border-radius: 18px;
          padding: 16px;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          transition: transform 0.14s ease, box-shadow 0.14s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(45, 122, 230, 0.12);
        }

        .card-top {
          display: grid;
          gap: 6px;
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
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.3px;
          background: #eef5ff;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }
        .bd-diet {
          background: rgba(20, 184, 122, 0.14);
          border-color: rgba(20, 184, 122, 0.28);
        }
        .bd-vege {
          background: rgba(106, 168, 79, 0.18);
          border-color: rgba(106, 168, 79, 0.36);
        }
        .bd-freeze {
          background: rgba(45, 122, 230, 0.14);
          border-color: rgba(45, 122, 230, 0.28);
        }

        .title {
          margin: 0;
          font-size: clamp(18px, 2.2vw, 22px);
          line-height: 1.2;
        }
        .resume {
          margin: 0;
          color: var(--muted);
        }

        .meta {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .pill {
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 12px;
          padding: 8px 10px;
          background: linear-gradient(180deg, #fafcff, #f3f7ff);
        }
        .pill small {
          color: var(--muted);
        }
        .num {
          font-weight: 800;
        }

        .cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          padding-top: 10px;
        }
        .more {
          font-weight: 700;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .empty {
          grid-column: 1 / -1;
          color: var(--muted);
          text-align: center;
          padding: 30px 0;
        }
        .foot {
          text-align: center;
          color: var(--muted);
          padding: 0 16px 36px;
        }
      `}</style>
    </>
  );
}
