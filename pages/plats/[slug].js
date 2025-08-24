// pages/plat/[slug].js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

/** ============
 *  Données plats
 *  ============
 *  Ajoute/édite ici pour chaque fiche.
 */
const DISHES = {
  // --- Bolognaise (fiche complète) ---
  bolo: {
    nom: "Pâtes bolognaise maison",
    surgele: true,
    visuel: "/favicon.png", // remplace par une vraie image si tu veux
    resume:
      "Pâtes au seigle, bœuf 5% MG, carottes, sauce tomate. Portion 600 g.",
    prix: 9.9,

    portionGrams: 600,
    // Totaux nutritionnels pour une portion (valeurs envoyées plus haut)
    kcalPortion: 700,
    lipidesPortion: 15.8,
    glucidesPortion: 89,
    proteinesPortion: 54.3,
    selPortion: 3, // g
    sucrePortion: 11, // g
    agsPortion: +(15.8 * 0.34).toFixed(1),

    ingredients: [
      { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
      { name: "Bœuf haché 5% MG", qty: "150 g" },
      { name: "Carottes", qty: "150 g" },
      { name: "Sauce tomate", qty: "100 g" },
      { name: "Herbes/aromates (ail, poivre, basilic, sel)", qty: "" }, // tu avais demandé d'enlever “au goût”
    ],
  },

  // --- Poulet poivron (fiche simple à compléter plus tard) ---
  "poulet-poivron": {
    nom: "Pâtes — émincé de poulet, julienne de légumes, sauce poivron",
    surgele: true,
    visuel: "/favicon.png",
    resume:
      "Sauce poivron (poivron, aromates, ail, oignon, sel, poivre). Portion type 600 g.",
    prix: 9.9,
    // Ajoute tes valeurs nutritionnelles ici quand tu veux :
    portionGrams: 600,
  },

  // --- Bœuf + carottes + purée (fiche simple à compléter plus tard) ---
  "boeuf-carottes-puree": {
    nom: "Bœuf fondant aux carottes & purée maison",
    surgele: true,
    visuel: "/favicon.png",
    resume:
      "Morceaux peu gras mijotés, carottes, purée de pommes de terre. Portion type 600 g.",
    // prix: 10.9,
    portionGrams: 600,
  },
};

/** Helpers format */
const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;

export default function FichePlat() {
  const { query } = useRouter();
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug;
  const p = slug ? DISHES[slug] : null;

  // Page 404 “douce” si slug inconnu
  if (!p) {
    return (
      <main className="page">
        <Head>
          <title>Plat introuvable — GreenHouse</title>
        </Head>
        <div className="container">
          <h1 className="brand">GreenHouse</h1>
          <div className="ghost">
            <h2>Oups… plat introuvable</h2>
            <p>Le lien n’existe pas ou a changé.</p>
            <Link className="btn" href="/">← Retour à l’accueil</Link>
          </div>
        </div>
        <style jsx>{styles}</style>
      </main>
    );
  }

  // Calculs si on a les macros
  const hasMacros =
    p.kcalPortion ||
    p.lipidesPortion ||
    p.glucidesPortion ||
    p.proteinesPortion;

  const g = p.portionGrams || 600;
  const kcal100 = hasMacros ? +(p.kcalPortion / (g / 100)).toFixed(1) : null;
  const lipides100 = hasMacros
    ? +(p.lipidesPortion / (g / 100)).toFixed(1)
    : null;
  const glucides100 = hasMacros
    ? +(p.glucidesPortion / (g / 100)).toFixed(1)
    : null;
  const proteines100 = hasMacros
    ? +(p.proteinesPortion / (g / 100)).toFixed(1)
    : null;
  const sel100 = hasMacros ? +(p.selPortion / (g / 100)).toFixed(1) : null;
  const ags100 = hasMacros ? +(p.agsPortion / (g / 100)).toFixed(1) : null;
  const sucre100 = hasMacros
    ? +(p.sucrePortion / (g / 100)).toFixed(1)
    : null;

  return (
    <main className="page">
      <Head>
        <title>{p.nom} — GreenHouse</title>
        <meta name="description" content={`${p.nom} — ${p.resume}`} />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container">
        {/* En-tête marque */}
        <Link href="/" className="link-home">
          ← Retour
        </Link>
        <h1 className="brand">GreenHouse</h1>

        {/* Hero fiche */}
        <section className="hero">
          <div className="media">
            <Image
              src={p.visuel || "/favicon.png"}
              alt={p.nom}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              priority
            />
          </div>

          <div className="hero-text">
            <div className="topline">
              {p.surgele && <span className="pill pill-surg">Surgelé</span>}
              <span className="pill pill-keep">4 mois congélateur · 48 h frigo</span>
            </div>
            <h2 className="title">{p.nom}</h2>
            <p className="resume">{p.resume}</p>

            <div className="cta">
              {"prix" in p && p.prix != null ? (
                <div className="price">{euro(p.prix)} <span className="ttc">TTC</span></div>
              ) : (
                <div className="price muted">Prix indiqué sur la vitrine</div>
              )}
              <button className="btn">Commander</button>
            </div>
          </div>
        </section>

        {/* Deux colonnes : ingrédients / valeurs */}
        <section className="two">
          <div className="col">
            <h3>Ingrédients</h3>
            {p.ingredients ? (
              <ul className="ing">
                {p.ingredients.map((it) => (
                  <li key={it.name}>
                    <span>{it.name}</span>
                    {it.qty && <b>{it.qty}</b>}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="placeholder">
                Fiche ingrédients à venir.
              </div>
            )}
            <p className="allergenes">
              * Allergènes possibles : gluten, œufs (selon la recette).
            </p>
          </div>

          <div className="col">
            <h3>Valeurs nutritionnelles</h3>
            {hasMacros ? (
              <div className="table-wrap">
                <table className="vals">
                  <thead>
                    <tr>
                      <th>Valeurs</th>
                      <th>Pour 100 g</th>
                      <th>Par portion ({g} g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Énergie</td>
                      <td>{kcal100} kcal</td>
                      <td>{p.kcalPortion} kcal</td>
                    </tr>
                    <tr>
                      <td>Matières grasses</td>
                      <td>{lipides100} g</td>
                      <td>{p.lipidesPortion} g</td>
                    </tr>
                    <tr className="sub">
                      <td>dont AG saturés</td>
                      <td>{ags100} g</td>
                      <td>{p.agsPortion} g</td>
                    </tr>
                    <tr>
                      <td>Glucides</td>
                      <td>{glucides100} g</td>
                      <td>{p.glucidesPortion} g</td>
                    </tr>
                    <tr className="sub">
                      <td>dont sucres</td>
                      <td>{sucre100} g</td>
                      <td>{p.sucrePortion} g</td>
                    </tr>
                    <tr>
                      <td>Protéines</td>
                      <td>{proteines100} g</td>
                      <td>{p.proteinesPortion} g</td>
                    </tr>
                    <tr>
                      <td>Sel</td>
                      <td>{sel100} g</td>
                      <td>{p.selPortion} g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="placeholder">
                Valeurs nutritionnelles détaillées à venir.
              </div>
            )}
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} GreenHouse — Traiteur diététique & gourmand
        </footer>
      </div>

      <style jsx>{styles}</style>
    </main>
  );
}

/* ===== Styles partagés (mêmes couleurs que l’accueil) ===== */
const styles = `
:root{
  --ink:#0c111d;
  --muted:#556070;
  --card:#ffffff;
  --brand1:#13b66a;
  --brand2:#2d7ae6;
  --bg1:#e9fff3;
  --bg2:#e8f1ff;
}
html,body,#__next{height:100%}
body{margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;color:var(--ink);background:#f7fbff}
.page{min-height:100%;position:relative;overflow-x:hidden}
.page::before,.page::after{
  content:"";position:absolute;inset:-20% -10% auto -10%;height:55vh;
  background: radial-gradient(60% 60% at 25% 30%, var(--bg1), transparent 60%),
              radial-gradient(60% 60% at 80% 20%, var(--bg2), transparent 60%);
  filter: blur(18px);z-index:-2;animation: floaty 18s ease-in-out infinite alternate;opacity:.9;
}
.page::after{inset:auto -10% -25% -10%;height:50vh;transform:rotate(180deg);animation-duration:22s;opacity:.85}
@keyframes floaty{from{transform:translateY(-10px) scale(1.02)}to{transform:translateY(10px) scale(1.04)}}

.container{max-width:1200px;margin:0 auto;padding:24px 20px 40px}
.link-home{display:inline-block;margin-bottom:6px;text-decoration:none;color:#2d7ae6}
.brand{
  margin:0 0 12px 0;
  font-size: clamp(44px, 7.5vw, 90px);
  font-weight: 900;
  line-height:.9;
  background: linear-gradient(90deg, var(--brand1), var(--brand2));
  -webkit-background-clip:text; background-clip:text; color:transparent;
  text-shadow: 0 2px 20px rgba(45,122,230,.15);
}

/* hero */
.hero{display:grid;grid-template-columns: 1.1fr 1fr;gap:22px;align-items:center}
@media (max-width: 900px){ .hero{grid-template-columns:1fr; } }
.media{position:relative;aspect-ratio:16/11;border-radius:22px;overflow:hidden;background:linear-gradient(90deg,#f2fff8,#eef4ff);border:1px solid rgba(0,0,0,.06);box-shadow:0 12px 30px rgba(0,0,0,.06)}
.hero-text{display:grid;gap:10px}
.topline{display:flex;flex-wrap:wrap;gap:8px}
.pill{display:inline-flex;align-items:center;padding:6px 12px;border-radius:999px;font-weight:700;font-size:12px;border:1px solid rgba(0,0,0,.08);background:#fff}
.pill-surg{background:rgba(45,122,230,.12);border-color:rgba(45,122,230,.25);color:#1f4fb9}
.pill-keep{background:rgba(19,182,106,.12);border-color:rgba(19,182,106,.25);color:#0e7a52}
.title{margin:2px 0 0;font-size:clamp(22px,3.5vw,34px)}
.resume{margin:0;color:var(--muted)}
.cta{display:flex;align-items:center;gap:14px;margin-top:6px}
.price{font-size:24px;font-weight:900}
.price .ttc{font-size:12px;color:var(--muted);margin-left:6px}
.price.muted{color:var(--muted);font-weight:600}
.btn{padding:10px 14px;border-radius:12px;border:none;color:white;background:linear-gradient(90deg,var(--brand1),var(--brand2));font-weight:800;box-shadow:0 10px 25px rgba(45,122,230,.22);text-decoration:none}

/* 2 colonnes */
.two{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:22px}
@media (max-width: 900px){ .two{grid-template-columns:1fr} }
.col{background:var(--card);border:1px solid rgba(0,0,0,.06);border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
.col h3{margin:0 0 10px}
.ing{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.ing li{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(180deg,#f6f9ff,#ffffff);border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:10px}
.ing li b{font-variant-numeric:tabular-nums}
.placeholder{padding:14px;border:1px dashed rgba(0,0,0,.2);border-radius:12px;color:var(--muted);background:#fff}
.table-wrap{overflow-x:auto;border-radius:12px;border:1px solid rgba(0,0,0,.06);background:#fff}
.vals{width:100%;border-collapse:collapse}
.vals thead th{background:#f3f6ff;text-align:left;padding:10px}
.vals tbody td{padding:10px;border-top:1px solid rgba(0,0,0,.06)}
.vals tbody tr.sub td{color:#6b7380}

.footer{margin-top:26px;text-align:center;color:var(--muted)}
.ghost{background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:16px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
`;
