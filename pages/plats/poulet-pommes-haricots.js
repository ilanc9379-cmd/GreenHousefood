// pages/plats/poulet-pommes-haricots.js
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PouletPommesHaricots() {
  // --- Données recette (estimations cuisine maison) ---
  // Portions : 1 plat surgelé
  // Pommes de terre 150 g + 5 g huile
  // Cuisse de poulet (grosse) -> ~180 g comestible cuit (sans os) + 10 g huile (marinade/roti)
  // Haricots verts 150 g + 5 g huile
  // Épices/aromates : paprika fumé, ail, oignon rouge, moutarde à l’ancienne, poivre, sel (kcal négligeables)
  const prix = 9.9;

  // Totaux nutritionnels (≈) PAR PORTION
  const portionGrams = 480; // 180g poulet + 150g PDT + 150g haricots (approx.)
  const kcal = 663;
  const lipides = 37;     // g
  const glucides = 33;    // g
  const proteines = 48.6; // g
  const sel = 2;          // g (estimation légère, car sel d’assaisonnement)

  // Dérivés pour 100 g
  const kcal100 = +(kcal / (portionGrams / 100)).toFixed(1);       // ~138.1
  const lipides100 = +(lipides / (portionGrams / 100)).toFixed(1); // ~7.7
  const glucides100 = +(glucides / (portionGrams / 100)).toFixed(1); // ~6.9
  const proteines100 = +(proteines / (portionGrams / 100)).toFixed(1); // ~10.1
  const sel100 = +(sel / (portionGrams / 100)).toFixed(2);

  // Prix total si quantité > 1
  const [qty, setQty] = useState(1);
  const format = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const total = useMemo(() => +(prix * qty).toFixed(2), [prix, qty]);

  // Répartition macros (par portion)
  const pctP = Math.round((proteines * 4 * 100) / kcal);
  const pctG = Math.round((glucides * 4 * 100) / kcal);
  const pctL = Math.round((lipides * 9 * 100) / kcal);

  return (
    <div className="wrap">
      <header className="hero">
        <h1 className="brand">GreenHouse</h1>
        <p className="tagline">Traiteur — Diététique &amp; Gourmand</p>
        <p className="intro">
          Des plats maison équilibrés, cuisinés en Alsace, prêts à être dégustés.
          Diète ou gourmand : à vous de choisir.
        </p>
        <p className="back">
          <Link href="/">← Retour au menu</Link>
        </p>
      </header>

      <main className="container">
        <section className="card">
          <h2 className="title">Cuisse de poulet rôtie · pommes de terre &amp; haricots verts</h2>
          <div className="badges">
            <span className="badge bd-frozen">Surgelé</span>
            <span className="badge bd-prot">Riche en protéines</span>
          </div>

          <p className="meta">
            <strong>Portion :</strong> {portionGrams} g&nbsp;·&nbsp;
            prêt en 25–30 min <em>au four</em> · 8–9 min <em>au micro-ondes</em> · 8–10 min <em>à la poêle</em>
          </p>

          <p className="desc">
            Une cuisse de poulet rôtie aux <em>aromates</em> (ail, oignon rouge, paprika fumé, moutarde à l’ancienne),
            accompagnée de pommes de terre rôties et de haricots verts frais. Un plat complet, savoureux et équilibré.
          </p>

          {/* Prix / quantité */}
          <div className="priceRow">
            <div className="priceBox">
              <div className="label">Prix unitaire</div>
              <div className="price">{format.format(prix)}</div>
              <div className="qty">
                <button aria-label="Moins" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
                />
                <button aria-label="Plus" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <div className="total">
                Total ({qty} plat{qty > 1 ? "s" : ""}) : <strong>{format.format(total)}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Deux colonnes : Ingrédients / Valeurs */}
        <section className="grid">
          <article className="card">
            <h3 className="h3">Ingrédients</h3>
            <ul className="ing">
              <li>Pommes de terre — 150 g</li>
              <li>Huile d’olive — 5 g (rôties)</li>
              <li>Paprika (fumé) — q.s.</li>
              <li>Ail — q.s.</li>
              <li>Cuisse de poulet rôtie (grosse) — ~180 g comestible</li>
              <li>Ail — q.s., oignon rouge haché fin</li>
              <li>Moutarde à l’ancienne — q.s., paprika fumé — q.s.</li>
              <li>Poivre gris, sel — q.s.</li>
              <li>Huile d’olive — 10 g (marinade/roti)</li>
              <li>Haricots verts — 150 g (cuits à l’eau)</li>
              <li>Ail — q.s., huile d’olive — 5 g</li>
            </ul>
            <p className="muted">Allergènes : moutarde. Peut contenir des traces selon fournisseurs.</p>

            <div className="conservation">
              <h4>Conservation</h4>
              <ul>
                <li>
                  Conserver <strong>au congélateur</strong> : maximum <strong>4 mois</strong>.
                </li>
                <li>
                  Après décongélation : <strong>48h au réfrigérateur</strong>.
                </li>
                <li>
                  <strong>Ne pas recongeler</strong> un produit décongelé.
                </li>
              </ul>
            </div>
          </article>

          <article className="card">
            <h3 className="h3">Valeurs nutritionnelles</h3>
            <div className="nutro">
              <table>
                <thead>
                  <tr>
                    <th>Valeurs</th>
                    <th>Pour 100 g</th>
                    <th>Par portion ({portionGrams} g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Énergie</td>
                    <td>{kcal100} kcal</td>
                    <td>{kcal} kcal</td>
                  </tr>
                  <tr>
                    <td>Matières grasses</td>
                    <td>{lipides100} g</td>
                    <td>{lipides} g</td>
                  </tr>
                  <tr>
                    <td>Glucides</td>
                    <td>{glucides100} g</td>
                    <td>{glucides} g</td>
                  </tr>
                  <tr>
                    <td>Protéines</td>
                    <td>{proteines100} g</td>
                    <td>{proteines} g</td>
                  </tr>
                  <tr>
                    <td>Sel</td>
                    <td>{sel100} g</td>
                    <td>{sel} g</td>
                  </tr>
                </tbody>
              </table>

              <div className="macros">
                <div>
                  <div className="small">Protéines</div>
                  <div className="big">{pctP}%</div>
                  <div className="small">des kcal</div>
                </div>
                <div>
                  <div className="small">Glucides</div>
                  <div className="big">{pctG}%</div>
                  <div className="small">des kcal</div>
                </div>
                <div>
                  <div className="small">Lipides</div>
                  <div className="big">{pctL}%</div>
                  <div className="small">des kcal</div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} GreenHouse — Traiteur artisanal (plats surgelés)
      </footer>

      {/* Styles locaux */}
      <style jsx>{`
        :root {
          --bg1: #e6fff7;
          --bg2: #e8f2ff;
          --ink: #0e1420;
          --muted: #5b667a;
          --brand1: #10b981; /* émeraude */
          --brand2: #3b82f6; /* bleu */
          --card: #ffffff;
          --ring: rgba(16, 185, 129, 0.18);
          --frozen: #0ea5e9;
          --prot: #10b981;
        }
        html, body, #__next { height: 100%; }
        body { margin: 0; color: var(--ink); font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial; }
        .wrap {
          min-height: 100%;
          background:
            radial-gradient(900px 600px at -10% -10%, var(--bg1), transparent 60%),
            radial-gradient(900px 600px at 110% -10%, var(--bg2), transparent 60%),
            linear-gradient(180deg, #f8fffb 0%, #f6fbff 60%, #ffffff 100%);
        }
        .hero { max-width: 1100px; margin: 0 auto; padding: 36px 16px 8px; }
        .brand {
          margin: 0 0 4px;
          font-size: clamp(42px, 7vw, 76px);
          line-height: .9;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text; background-clip: text; color: transparent;
          letter-spacing: .6px;
        }
        .tagline { margin: 0; color: var(--ink); font-weight: 700; }
        .intro { color: var(--muted); max-width: 900px; }
        .back a { color: #2563eb; text-decoration: none; }
        .back a:hover { text-decoration: underline; }

        .container { max-width: 1100px; margin: 0 auto; padding: 8px 16px 40px; display: grid; gap: 18px; }
        .grid { display: grid; gap: 18px; grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }

        .card {
          background: var(--card);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 12px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.8) inset;
        }
        .title { margin: 4px 0 8px; font-size: clamp(24px, 3.2vw, 34px); }
        .badges { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; border-radius: 999px;
          background: #f1f5f9; color: var(--ink); font-weight: 700; font-size: 13px;
          border: 1px solid rgba(0,0,0,.05);
        }
        .bd-frozen { background: rgba(14,165,233,.14); border-color: rgba(14,165,233,.3); }
        .bd-prot { background: rgba(16,185,129,.16); border-color: rgba(16,185,129,.32); }
        .meta { margin: 10px 0; color: var(--ink); }
        .desc { color: var(--muted); }

        .priceRow { display: flex; flex-wrap: wrap; gap: 18px; }
        .priceBox {
          background: linear-gradient(180deg, #f8fbff, #f3fff9);
          border: 1px solid rgba(0,0,0,.06); border-radius: 14px;
          padding: 14px; min-width: 260px;
        }
        .label { text-transform: uppercase; font-size: 12px; color: var(--muted); letter-spacing: .1em; }
        .price { font-size: 30px; font-weight: 800; }
        .qty { display: flex; align-items: center; gap: 10px; margin: 6px 0; }
        .qty button {
          width: 36px; height: 36px; border-radius: 10px; border: 1px solid rgba(0,0,0,.12);
          background: white; cursor: pointer;
        }
        .qty input {
          width: 70px; height: 36px; text-align: center; border: 1px solid rgba(0,0,0,.12);
          border-radius: 10px;
        }

        .h3 { margin: 6px 0 10px; }
        .ing { margin: 0; padding-left: 18px; }
        .muted { color: var(--muted); }

        .conservation {
          margin-top: 14px; padding: 10px; border-radius: 12px;
          background: linear-gradient(180deg, #ecfeff, #effdf6);
          border: 1px solid rgba(0,0,0,.06);
        }
        .conservation h4 { margin: 0 0 6px; }

        .nutro table { width: 100%; border-collapse: collapse; overflow: hidden; border-radius: 12px; }
        .nutro thead th { background: #f1f5f9; color: #334155; }
        .nutro th, .nutro td { padding: 10px; border-bottom: 1px solid #e5e7eb; text-align: left; }
        .macros { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-top: 10px; }
        .macros > div { text-align: center; padding: 10px; border-radius: 12px; background: #f9fafb; }
        .macros .small { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; }
        .macros .big { font-size: 22px; font-weight: 800; }

        .foot { text-align: center; color: var(--muted); padding: 26px 16px 40px; }
      `}</style>
    </div>
  );
}
