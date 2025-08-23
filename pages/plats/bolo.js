// pages/plat/bolo.js
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Bolo() {
  // Données plat
  const portionGrams = 600;
  const basePrice = 9.9;

  // Valeurs par portion
  const kcalPortion = 700;
  const lipidesPortion = 15.8;
  const glucidesPortion = 89;
  const proteinesPortion = 54.3;
  const selPortion = 3;
  const agsPortion = +(lipidesPortion * 0.34).toFixed(1);
  const sucrePortion = 11;

  // Par 100 g
  const kcal100 = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100 = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100 = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100 = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100 = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100 = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  // Ingrédients (sans “au goût”, et sans ligne “sel 3 g”)
  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    { name: "Herbes/aromates (ail, poivre, basilic)", qty: "—" },
  ];

  // Quantité & prix
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );
  const totalPrice = useMemo(() => +(basePrice * qty).toFixed(2), [qty]);

  // Répartition macros (par portion)
  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      {/* BANNIÈRE AVEC GREENHOUSE EN GRAND */}
      <section className="heroBar">
        <div className="heroGradient" aria-hidden="true" />
        <div className="heroInner">
          <h1 className="brand">GreenHouse</h1>
          <p className="sub">Traiteur — Diététique & Gourmand</p>
          <p className="pitch">
            Des plats maison bons et équilibrés, cuisinés en Alsace, prêts à être
            dégustés. Diète ou gourmand : à vous de choisir.
          </p>
          <Link href="/" className="homeLink">← Retour au menu</Link>
        </div>
      </section>

      {/* FICHE PLAT */}
      <main className="wrap">
        <article className="card">
          <header className="cardHead">
            <h2 className="title">Pâtes bolognaise maison</h2>
            <div className="badges">
              <span className="badge badge-freeze">Surgelé</span>
              <span className="badge badge-prot">Riche en protéines</span>
            </div>

            <p className="meta">
              <strong>Portion :</strong> {portionGrams} g · <strong>prêt en</strong>{" "}
              20 min <em>au four</em> · 8 min <em>au micro-ondes</em> · 10 min{" "}
              <em>à la poêle</em>
            </p>

            <p className="desc">
              Une bolognaise authentique sublimée par des pâtes au seigle
              artisanales (œufs plein air). La tendreté du bœuf, la douceur des
              carottes et la fraîcheur de la tomate s’unissent pour un plat
              complet, réconfortant et équilibré.
            </p>
          </header>

          <section className="grid2">
            {/* Prix */}
            <div className="panel">
              <div className="panelTitle">Prix unitaire</div>
              <div className="price">{nf.format(basePrice)}</div>

              <div className="qtyRow">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="btnGhost"
                  aria-label="Diminuer la quantité"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                  }
                  className="qtyInput"
                />
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="btnGhost"
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>

              <div className="totalLabel">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
              <div className="total">{nf.format(totalPrice)}</div>

              <button className="btnPrimary">Commander</button>
            </div>

            {/* Ingrédients */}
            <div className="panel">
              <div className="panelTitle">Ingrédients</div>
              <ul className="ingList">
                {ingredients.map((it) => (
                  <li key={it.name} className="ingItem">
                    <span>{it.name}</span>
                    <span className="qty">{it.qty}</span>
                  </li>
                ))}
              </ul>
              <p className="allergenes">
                Allergènes : gluten (seigle, blé), œufs.
              </p>
            </div>
          </section>

          {/* Conservation */}
          <section className="storage">
            <h3>Conservation</h3>
            <ul>
              <li>
                Conserver <strong>au congélateur</strong> : maximum{" "}
                <strong>4 mois</strong>.
              </li>
              <li>
                Après décongélation : <strong>48h au réfrigérateur</strong>.
              </li>
              <li>
                <strong>Ne pas recongeler</strong> un produit décongelé.
              </li>
            </ul>
          </section>

          {/* Valeurs nutritionnelles */}
          <section className="nutri">
            <h3>Valeurs nutritionnelles</h3>
            <div className="tableWrap">
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
                    <td>{kcalPortion} kcal</td>
                  </tr>
                  <tr>
                    <td>Matières grasses</td>
                    <td>{lipides100} g</td>
                    <td>{lipidesPortion} g</td>
                  </tr>
                  <tr className="sub">
                    <td>dont AG saturés</td>
                    <td>{ags100} g</td>
                    <td>{agsPortion} g</td>
                  </tr>
                  <tr>
                    <td>Glucides</td>
                    <td>{glucides100} g</td>
                    <td>{glucidesPortion} g</td>
                  </tr>
                  <tr className="sub">
                    <td>dont sucres</td>
                    <td>{sucre100} g</td>
                    <td>{sucrePortion} g</td>
                  </tr>
                  <tr>
                    <td>Protéines</td>
                    <td>{proteines100} g</td>
                    <td>{proteinesPortion} g</td>
                  </tr>
                  <tr>
                    <td>Sel</td>
                    <td>{sel100} g</td>
                    <td>{selPortion} g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Macros */}
            <div className="macros">
              <div className="macroCard">
                <div className="label">Protéines</div>
                <div className="big">{macroPct.p}%</div>
                <div className="hint">des kcal</div>
              </div>
              <div className="macroCard">
                <div className="label">Glucides</div>
                <div className="big">{macroPct.g}%</div>
                <div className="hint">des kcal</div>
              </div>
              <div className="macroCard">
                <div className="label">Lipides</div>
                <div className="big">{macroPct.l}%</div>
                <div className="hint">des kcal</div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* STYLES */}
      <style jsx>{`
        :root{
          --ink:#0b1020;--muted:#4b5565;--card:#fff;
          --grad1:#0aa64c;--grad2:#2d7ae6;
          --bg1:#e8f7ff;--bg2:#dff8ee;--ring:rgba(10,140,120,.25);
          --freeze:#c9f1e6;--prot:#e9eefc;
        }
        html,body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial}

        /* HERO BAR — GreenHouse en grand */
        .heroBar{position:relative;overflow:hidden}
        .heroGradient{
          position:absolute;inset:0;z-index:0;
          background:
            radial-gradient(1100px 700px at -10% -20%, var(--bg2), transparent 60%),
            radial-gradient(1000px 650px at 120% -10%, var(--bg1), transparent 65%),
            linear-gradient(180deg,#f5fbff 0%, #f7fff9 60%, #fdfefe 100%);
        }
        .heroInner{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:40px 16px 28px}
        .brand{
          margin:0;
          font-size:clamp(56px,10vw,130px);
          line-height:.9;
          background:linear-gradient(90deg,var(--grad1),var(--grad2));
          -webkit-background-clip:text;background-clip:text;
          color:transparent; -webkit-text-fill-color: transparent; /* iOS/Android */
          text-shadow:0 14px 40px rgba(45,122,230,.22);
          font-weight:900; letter-spacing:.5px;
        }
        .sub{margin:6px 0 10px;font-size:clamp(16px,2.5vw,22px);color:#0c6b56;font-weight:800}
        .pitch{margin:0 0 10px;color:var(--muted)}
        .homeLink{display:inline-block;margin-top:4px;color:#2553d8;text-decoration:none}
        .homeLink:hover{text-decoration:underline}

        /* PAGE */
        .wrap{background:linear-gradient(180deg,#fdfefe,#f5fbff);padding:12px 0 60px}
        .card{max-width:1100px;margin:0 auto;background:var(--card);border-radius:24px;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.06)}
        .cardHead{padding:10px 6px 4px}
        .title{margin:0 0 8px;font-size:clamp(28px,4.5vw,44px)}
        .badges{display:flex;gap:10px;margin:8px 0 10px;flex-wrap:wrap}
        .badge{display:inline-flex;align-items:center;font-weight:700;font-size:12px;padding:6px 12px;border-radius:999px;border:1px solid rgba(0,0,0,.06)}
        .badge-freeze{background:var(--freeze)}
        .badge-prot{background:var(--prot)}
        .meta{margin:6px 0 10px;color:#1f2a37}
        .desc{margin:0;color:var(--muted);font-size:18px}

        .grid2{display:grid;gap:16px;margin-top:16px;grid-template-columns:280px 1fr}
        @media(max-width:880px){.grid2{grid-template-columns:1fr}}

        .panel{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.04)}
        .panelTitle{font-size:13px;text-transform:uppercase;letter-spacing:.12em;color:#667085;margin-bottom:6px}
        .price{font-size:34px;font-weight:800}
        .qtyRow{display:flex;align-items:center;gap:10px;margin:12px 0}
        .btnGhost{height:42px;width:42px;border-radius:12px;border:1px solid #d0d5dd;background:#fff;cursor:pointer}
        .qtyInput{height:42px;width:72px;text-align:center;border-radius:12px;border:1px solid #d0d5dd}
        .totalLabel{color:#667085;font-size:14px;margin-top:6px}
        .total{font-size:22px;font-weight:700}
        .btnPrimary{
          margin-top:10px;width:100%;padding:12px 16px;border:none;border-radius:14px;color:#fff;font-weight:700;cursor:pointer;
          background:linear-gradient(90deg,var(--grad1),var(--grad2));
          box-shadow:0 14px 36px rgba(45,122,230,.25);
        }

        .ingList{list-style:none;padding:0;margin:0;display:grid;gap:8px}
        .ingItem{display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:12px;background:#fafcff;border:1px solid rgba(0,0,0,.04)}
        .ingItem .qty{font-weight:600}
        .allergenes{color:#6b7280;margin-top:8px}

        .storage{margin-top:18px;padding:16px;border-radius:18px;background:linear-gradient(180deg,#effdf6,#eaf6ff)}
        .storage h3{margin:0 0 8px}
        .storage ul{margin:0;padding-left:18px}
        .storage li{margin:6px 0}

        .nutri{margin-top:18px}
        .nutri h3{margin:0 0 10px}
        .tableWrap{overflow:auto;border-radius:16px;border:1px solid rgba(0,0,0,.06);background:#fff}
        table{width:100%;border-collapse:collapse;font-size:15px}
        thead th{background:#f3f6ff;color:#334155;text-align:left;padding:10px}
        tbody td{padding:10px;border-top:1px solid rgba(0,0,0,.06)}
        tbody tr.sub td{color:#667085}

        .macros{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
        .macroCard{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:16px;padding:14px;text-align:center}
        .macroCard .label{font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#667085}
        .macroCard .big{font-size:26px;font-weight:800}
        .macroCard .hint{font-size:12px;color:#98a2b3}
      `}</style>
    </>
  );
}
