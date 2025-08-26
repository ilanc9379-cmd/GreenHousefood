// pages/plats-surgeles/falafel-patate-douce.js
import Link from "next/link";
import Head from "next/head";
import { useMemo, useState } from "react";

export default function FalafelPatateDouce() {
  // ------- Données plat -------
  const plat = {
    nom: "Falafels maison · purée de patate douce · courgettes grillées",
    badges: ["Diète", "Végé", "Surgelé"],
    // Portion ~500 g (200g falafels, 180g purée patate douce, 120g courgettes, 30g sauce yaourt-tahini)
    portionGrammes: 500,
    basePrice: 9.9,
    // Macros estimées par portion
    kcal: 690,
    proteines: 28,
    glucides: 78,
    lipides: 28,
    // Dérivés par 100 g
    get per100() {
      const f = (n) => +(n / (this.portionGrammes / 100)).toFixed(1);
      return {
        kcal: +(this.kcal / (this.portionGrammes / 100)).toFixed(0),
        p: f(this.proteines),
        g: f(this.glucides),
        l: f(this.lipides),
      };
    },
    ingredients: [
      { name: "Falafels maison", details: "pois chiches, oignon frais, ail frais, persil, coriandre, sésame, épices, bicarbonate, sel", qty: "200 g" },
      { name: "Purée de patate douce", details: "patate douce, huile d’olive, sel, poivre", qty: "180 g" },
      { name: "Courgettes grillées", details: "huile d’olive, herbes de Provence, sel", qty: "120 g" },
      { name: "Sauce yaourt-tahini", details: "yaourt nature, tahini, citron, ail, sel", qty: "30 g" },
    ],
    conservation: "Surgelé – conserver au congélateur (max 4 mois). Après décongélation : 48 h au réfrigérateur.",
    cuisson: [
      "Four 20 min à 150°C",
      "Micro-ondes 8 min",
      "Poêle 10 min",
    ],
    allergenes: "Sésame. Traces possibles : gluten et fruits à coque.",
    pitch:
      "Un bol complet, végétal et généreux : falafels croustillants, purée de patate douce onctueuse, courgettes grillées, et sauce yaourt-tahini citronnée.",
  };

  // ------- UI helpers -------
  const [qty, setQty] = useState(1);
  const nf = useMemo(() => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }), []);
  const totalPrice = useMemo(() => +(plat.basePrice * qty).toFixed(2), [qty]);

  // Répartition énergétique (par portion)
  const macroPct = useMemo(() => {
    const p = Math.round((plat.proteines * 4 * 100) / plat.kcal);
    const g = Math.round((plat.glucides * 4 * 100) / plat.kcal);
    const l = Math.round((plat.lipides * 9 * 100) / plat.kcal);
    return { p, g, l };
  }, []);

  return (
    <>
      <Head>
        <title>Greenhouse — {plat.nom}</title>
        <meta name="description" content={`${plat.nom} · Plat surgelé diète & végé — ${plat.pitch}`} />
      </Head>

      <main className="page">
        {/* Bandeau / retour */}
        <div className="topbar">
          <Link href="/plats-surgeles" className="back" aria-label="Retour">
            <span className="arrow">←</span> Retour aux plats surgelés
          </Link>
          <div className="brand">
            <span className="logo">GH</span>
            <h1 className="gh">Greenhouse</h1>
          </div>
        </div>

        {/* En-tête visuel */}
        <header className="hero">
          <div className="head">
            <div className="badges">
              {plat.badges.map((b) => (
                <span key={b} className={`badge ${b === "Diète" ? "bd-diet" : b === "Végé" ? "bd-vege" : "bd-freeze"}`}>
                  {b}
                </span>
              ))}
            </div>
            <h2 className="title">{plat.nom}</h2>
            <p className="slogan">Traiteur — diététique & gourmand</p>
            <p className="pitch">{plat.pitch}</p>
          </div>

          <div className="priceCard">
            <div className="label">Prix unitaire</div>
            <div className="price">{nf.format(plat.basePrice)}</div>

            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer">−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="Augmenter">+</button>
            </div>

            <div className="totalLabel">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="total">{nf.format(totalPrice)}</div>
            <button className="buy">Commander</button>
          </div>
        </header>

        {/* Ingrédients + Valeurs côte à côte */}
        <section className="two">
          <div className="card">
            <h3>Ingrédients</h3>
            <ul className="ing">
              {plat.ingredients.map((it) => (
                <li key={it.name}>
                  <div>
                    <strong>{it.name}</strong>
                    {it.details ? <span className="muted"> — {it.details}</span> : null}
                  </div>
                  <span className="qty">{it.qty}</span>
                </li>
              ))}
            </ul>
            <p className="muted small">Allergènes : {plat.allergenes}</p>
          </div>

          <div className="card">
            <h3>Valeurs nutritionnelles</h3>
            <div className="macros">
              <div><small>kcal / 100 g</small><div className="num">{plat.per100.kcal}</div></div>
              <div><small>Prot. / 100 g</small><div className="num">{plat.per100.p} g</div></div>
              <div><small>Gluc. / 100 g</small><div className="num">{plat.per100.g} g</div></div>
              <div><small>Lip. / 100 g</small><div className="num">{plat.per100.l} g</div></div>
            </div>

            <table className="nutri">
              <thead>
                <tr>
                  <th>Valeurs</th>
                  <th>Pour 100 g</th>
                  <th>Par portion ({plat.portionGrammes} g)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{plat.per100.kcal} kcal</td><td>{plat.kcal} kcal</td></tr>
                <tr><td>Protéines</td><td>{plat.per100.p} g</td><td>{plat.proteines} g</td></tr>
                <tr><td>Glucides</td><td>{plat.per100.g} g</td><td>{plat.glucides} g</td></tr>
                <tr><td>Lipides</td><td>{plat.per100.l} g</td><td>{plat.lipides} g</td></tr>
              </tbody>
            </table>

            <div className="split3">
              <div className="pill">
                <div className="t">Prot&eacute;ines</div>
                <div className="b">{macroPct.p}% des kcal</div>
              </div>
              <div className="pill">
                <div className="t">Glucides</div>
                <div className="b">{macroPct.g}% des kcal</div>
              </div>
              <div className="pill">
                <div className="t">Lipides</div>
                <div className="b">{macroPct.l}% des kcal</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cuisson / Conservation */}
        <section className="two">
          <div className="card">
            <h3>Réchauffage</h3>
            <ul className="list">
              {plat.cuisson.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3>Conservation</h3>
            <p>{plat.conservation}</p>
            <div className="freezeTip">
              La surgélation fige rapidement les aliments, limitant l’oxydation et la
              prolifération microbienne : on préserve ainsi **textures, goûts et nutriments**,
              tout en réduisant le gaspillage.
            </div>
          </div>
        </section>

        <footer className="foot">© {new Date().getFullYear()} Greenhouse — Traiteur</footer>
      </main>

      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#586072; --card:#ffffff;
          --diet:#14b87a; --vege:#6aa84f; --freeze:#2d7ae6;
          --ring:rgba(45,122,230,.18);
          --bg1:#f5fbff; --bg2:#f7fff9;
          --grad: linear-gradient(90deg,#0aa64c,#2d7ae6);
        }
        *{box-sizing:border-box}
        body{margin:0;color:var(--ink);font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial}
        .page{
          min-height:100vh;
          background:
            radial-gradient(900px 600px at -10% -10%, #e7fff3 0%, transparent 60%),
            radial-gradient(900px 600px at 110% -10%, #e6f0ff 0%, transparent 60%),
            linear-gradient(180deg,var(--bg1) 0%, var(--bg2) 60%, #fff 100%);
        }
        .topbar{
          max-width:1100px;margin:0 auto;padding:20px;
          display:flex;align-items:center;justify-content:space-between;
        }
        .back{display:inline-flex;gap:8px;align-items:center;padding:10px 12px;border-radius:12px;background:#fff;border:1px solid rgba(0,0,0,.06);box-shadow:0 6px 20px rgba(0,0,0,.05);text-decoration:none;color:var(--ink)}
        .back .arrow{font-weight:700}
        .brand{display:flex;align-items:center;gap:10px}
        .logo{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--grad);color:#fff;font-weight:800;letter-spacing:.5px}
        .gh{margin:0;font-size:28px;line-height:1;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}

        .hero{
          max-width:1100px;margin:0 auto;padding:12px 20px 10px;
          display:grid;gap:18px;grid-template-columns: 1.2fr .8fr;
        }
        @media (max-width: 900px){ .hero{grid-template-columns:1fr} }

        .head{}
        .badges{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px}
        .badge{font-weight:800;font-size:12px;letter-spacing:.3px;border-radius:999px;padding:6px 10px;border:1px solid rgba(0,0,0,.06);background:#fff}
        .bd-diet{background:rgba(20,184,122,.12);border-color:rgba(20,184,122,.3)}
        .bd-vege{background:rgba(106,168,79,.15);border-color:rgba(106,168,79,.35)}
        .bd-freeze{background:rgba(45,122,230,.12);border-color:rgba(45,122,230,.3)}
        .title{margin:0;font-size:clamp(22px,2.8vw,34px);line-height:1.15}
        .slogan{margin:4px 0 10px;color:var(--muted)}
        .pitch{margin:0;color:#243046}

        .priceCard{
          background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:18px;padding:16px;
          box-shadow:0 12px 30px rgba(45,122,230,.08), 0 0 0 4px var(--ring) inset;
          display:grid;gap:10px;align-content:start;
        }
        .label{font-size:12px;text-transform:uppercase;letter-spacing:.3px;color:#667085}
        .price{font-size:30px;font-weight:800}
        .qty{display:flex;align-items:center;gap:8px}
        .qty button{width:36px;height:36px;border-radius:10px;border:1px solid #d6d9e0;background:#fff;cursor:pointer}
        .qty input{width:70px;height:36px;text-align:center;border-radius:10px;border:1px solid #d6d9e0}
        .totalLabel{font-size:12px;color:#667085}
        .total{font-size:22px;font-weight:700}
        .buy{border:0;border-radius:14px;padding:12px 16px;color:#fff;background:var(--grad);font-weight:800;cursor:pointer;box-shadow:0 14px 30px rgba(45,122,230,.25)}

        .two{max-width:1100px;margin:14px auto;padding:0 20px;display:grid;gap:18px;grid-template-columns:1fr 1fr}
        @media (max-width: 900px){ .two{grid-template-columns:1fr} }
        .card{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
        .card h3{margin:0 0 10px}
        .ing{list-style:none;margin:0;padding:0;display:grid;gap:8px}
        .ing li{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
        .ing .qty{font-weight:700;white-space:nowrap}
        .muted{color:var(--muted)}
        .small{font-size:12px;margin-top:8px}

        .macros{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:linear-gradient(180deg,#f8fbff,#f2f6ff);border:1px solid rgba(0,0,0,.05);border-radius:12px;padding:10px}
        .macros small{color:var(--muted)}
        .num{font-weight:800}

        .nutri{width:100%;border-collapse:collapse;border:1px solid rgba(0,0,0,.06);overflow:hidden;border-radius:12px}
        .nutri th,.nutri td{padding:10px}
        .nutri thead tr{background:#f1f4fa;color:#2b3445}
        .nutri tbody tr+tr{border-top:1px solid #eef1f6}

        .split3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
        .pill{border:1px solid rgba(0,0,0,.06);border-radius:14px;padding:10px;background:linear-gradient(180deg,#ffffff,#f8fbff)}
        .pill .t{font-size:12px;color:#657084}
        .pill .b{font-weight:800}

        .list{margin:0;padding-left:18px;display:grid;gap:6px}
        .freezeTip{margin-top:10px;border-left:4px solid #2d7ae6;background:rgba(45,122,230,.06);padding:10px;border-radius:10px}

        .foot{max-width:1100px;margin:16px auto;padding:0 20px 30px;color:var(--muted);text-align:center}
      `}</style>
    </>
  );
}
