import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PlatBoeufCarottesPuree() {
  // --------- Données (modifiables) ----------
  const PORTION_GRAMS = 500; // 200 bœuf + 150 carottes + 150 purée
  const PRICE_EUR = 9.9;

  // Estimations PAR PORTION (ajuste si besoin)
  // (bœuf maigre cuit, carottes, purée légère)
  const NUTR_PORTION = {
    kcal: 560,
    lipides: 20,
    glucides: 34,
    proteines: 57,
    sel: 2.2,
  };
  // ------------------------------------------

  const nf = useMemo(() => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }), []);
  const [qty, setQty] = useState(1);

  const per100 = useMemo(() => {
    const f = PORTION_GRAMS / 100;
    const r = (v) => +(v / f).toFixed(1);
    return {
      kcal: +(NUTR_PORTION.kcal / f).toFixed(1),
      lipides: r(NUTR_PORTION.lipides),
      glucides: r(NUTR_PORTION.glucides),
      proteines: r(NUTR_PORTION.proteines),
      sel: r(NUTR_PORTION.sel),
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bœuf carottes & purée — GreenHouse</title>
        <meta name="description" content="Bœuf bourguignon maigre, carottes fondantes, purée maison." />
      </Head>

      <main className="wrap">
        <header className="header">
          <Link className="back" href="/">← Retour au menu</Link>
          <h1 className="brand">GreenHouse</h1>
          <p className="tag">Traiteur — Diététique & Gourmand</p>
        </header>

        <article className="sheet">
          <h2 className="h">Bœuf carottes & purée maison</h2>
          <div className="chips">
            <span className="chip chip--cold">Surgelé</span>
            <span className="chip chip--prot">Riche en protéines</span>
          </div>

          <p className="meta">
            <strong>Portion :</strong> {PORTION_GRAMS} g · prêt en 20 min <em>au four</em> · 8 min <em>au micro-ondes</em> · 10 min <em>à la poêle</em>
          </p>

          <p className="intro">
            Morceaux de bœuf bourguignon <em>peu gras</em>, carottes fondantes et purée
            de pommes de terre (variété spéciale purée). Assaisonné uniquement
            d’<em>aromates</em> — pas de bouillon cube.
          </p>

          <div className="cols">
            <div className="card price">
              <div className="label">Prix unitaire</div>
              <div className="big">{nf.format(PRICE_EUR)}</div>

              <div className="qty">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
                />
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>

              <div className="total">
                <div className="small">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
                <div className="sum">{nf.format(+(PRICE_EUR * qty).toFixed(2))}</div>
              </div>
            </div>

            <div className="card">
              <h3 className="sub">Ingrédients</h3>
              <ul className="ing">
                <li><span>Bœuf bourguignon (morceaux maigres)</span><b>200 g</b></li>
                <li><span>Carottes</span><b>150 g</b></li>
                <li><span>Purée de pommes de terre</span><b>150 g</b></li>
                <li><span>Aromates (oignon, ail, herbes, sel, poivre)</span><b>—</b></li>
              </ul>
            </div>

            <div className="card">
              <h3 className="sub">Valeurs nutritionnelles</h3>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Valeurs</th>
                      <th>Pour 100 g</th>
                      <th>Par portion ({PORTION_GRAMS} g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Énergie</td><td>{per100.kcal} kcal</td><td>{NUTR_PORTION.kcal} kcal</td></tr>
                    <tr><td>Matières grasses</td><td>{per100.lipides} g</td><td>{NUTR_PORTION.lipides} g</td></tr>
                    <tr><td>Glucides</td><td>{per100.glucides} g</td><td>{NUTR_PORTION.glucides} g</td></tr>
                    <tr><td>Protéines</td><td>{per100.proteines} g</td><td>{NUTR_PORTION.proteines} g</td></tr>
                    <tr><td>Sel</td><td>{per100.sel} g</td><td>{NUTR_PORTION.sel} g</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="cons">
                <h4>Conservation</h4>
                <ul>
                  <li>Conserver <b>au congélateur</b> : maximum <b>4 mois</b>.</li>
                  <li>Après décongélation : <b>48h au réfrigérateur</b>.</li>
                  <li><b>Ne pas recongeler</b> un produit décongelé.</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <footer className="foot">© {new Date().getFullYear()} GreenHouse</footer>
      </main>

      <style jsx>{styles}</style>
    </>
  );
}

const styles = `
/* mêmes styles que les deux autres pages */
.wrap{
  min-height:100%;
  background:
    radial-gradient(900px 600px at -10% -10%, #e9fff4, transparent 60%),
    radial-gradient(900px 600px at 110% -10%, #eaf2ff, transparent 60%),
    linear-gradient(180deg, #f7fbff 0%, #fafffb 60%, #ffffff 100%);
}
.header{max-width:1100px;margin:0 auto;padding:28px 20px 10px}
.brand{
  font-size: clamp(40px,7vw,84px); margin:0 0 4px 0; font-weight:900; letter-spacing:.4px;
  background: linear-gradient(90deg,#0aa64c,#2d7ae6); -webkit-background-clip:text; background-clip:text; color:transparent;
}
.tag{margin:0 0 6px 0; font-weight:700}
.back{color:#2d7ae6; text-decoration:none; display:inline-block; margin-bottom:6px}
.sheet{max-width:1100px;margin:0 auto; padding:10px 20px 40px}
.h{font-size:clamp(24px,4vw,42px);margin:8px 0 6px 0}
.chips{display:flex; gap:10px; margin:8px 0 10px}
.chip{padding:6px 10px;border-radius:999px;font-weight:700;font-size:12px;background:#eef5ff;border:1px solid rgba(0,0,0,.05)}
.chip--cold{background:rgba(0,196,140,.12);border-color:rgba(0,196,140,.3)}
.chip--prot{background:rgba(45,122,230,.12);border-color:rgba(45,122,230,.3)}
.meta{margin:0 0 12px 0;color:#5a6678}
.intro{margin:0 0 16px 0; color:#3a4252}
.cols{display:grid; gap:16px; grid-template-columns:1fr 1fr 1fr}
@media(max-width:980px){.cols{grid-template-columns:1fr}}
.card{
  background:#fff;border:1px solid rgba(0,0,0,.05);border-radius:16px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.06), 0 1px 0 rgba(255,255,255,.6) inset;
}
.sub{margin:0 0 10px 0}
.ing{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.ing li{display:flex;justify-content:space-between;gap:12px}
.ing b{font-variant-numeric:tabular-nums}
.table{overflow-x:auto;border-radius:12px;border:1px solid rgba(0,0,0,.06)}
table{width:100%;border-collapse:separate;border-spacing:0}
thead th{background:#f2f6ff;color:#334; text-align:left;padding:10px}
tbody td{padding:10px;border-top:1px solid rgba(0,0,0,.06)}
.price .label{font-size:12px;text-transform:uppercase;color:#66708a}
.price .big{font-size:32px;font-weight:800}
.qty{display:flex;align-items:center;gap:8px;margin:10px 0}
.qty button{height:36px;width:36px;border-radius:10px;border:1px solid #d7dbe5;background:#fff}
.qty input{height:36px;width:70px;text-align:center;border-radius:10px;border:1px solid #d7dbe5}
.total{display:flex;align-items:center;justify-content:space-between;margin-top:6px}
.small{color:#66708a}
.sum{font-size:22px;font-weight:800}
.cons h4{margin:10px 0 6px}
.cons ul{margin:0;padding-left:18px}
.foot{text-align:center;color:#66708a;padding:24px}
`;
