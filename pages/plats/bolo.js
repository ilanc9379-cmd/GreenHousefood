// pages/plats/bolo.js
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function PlatBoloFiche() {
  // === Données recette ===
  const portionGrams = 600;            // 200 + 150 + 150 + 100
  const basePrice    = 9.9;            // € par plat

  const ingredients = [
    { name: "Pâtes artisanales au seigle (œufs plein air)", qty: "200 g" },
    { name: "Bœuf haché 5% MG", qty: "150 g" },
    { name: "Carottes", qty: "150 g" },
    { name: "Sauce tomate", qty: "100 g" },
    // (pas de 'Sel 3 g', pas de 'au goût')
    { name: "Herbes/aromates (ail, poivre, basilic)" },
  ];

  // === Totaux nutritionnels (par portion entière) ===
  const kcalPortion      = 700;
  const lipidesPortion   = 15.8;
  const glucidesPortion  = 89;
  const proteinesPortion = 54.3;
  const selPortion       = 3;
  const agsPortion       = +(lipidesPortion * 0.34).toFixed(1);
  const sucrePortion     = 11;

  // === Dérivés par 100 g ===
  const kcal100      = +(kcalPortion / (portionGrams / 100)).toFixed(1);
  const lipides100   = +(lipidesPortion / (portionGrams / 100)).toFixed(1);
  const glucides100  = +(glucidesPortion / (portionGrams / 100)).toFixed(1);
  const proteines100 = +(proteinesPortion / (portionGrams / 100)).toFixed(1);
  const sel100       = +(selPortion / (portionGrams / 100)).toFixed(1);
  const ags100       = +(agsPortion / (portionGrams / 100)).toFixed(1);
  const sucre100     = +(sucrePortion / (portionGrams / 100)).toFixed(1);

  // Sélecteur de quantité
  const [qty, setQty] = useState(1);
  const nf = useMemo(
    () => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }),
    []
  );

  // Totaux multi-plateaux
  const totals = useMemo(
    () => ({
      price: +(basePrice * qty).toFixed(2),
      kcal: kcalPortion * qty,
      lipides: +(lipidesPortion * qty).toFixed(1),
      ags: +(agsPortion * qty).toFixed(1),
      glucides: +(glucidesPortion * qty).toFixed(1),
      sucres: +(sucrePortion * qty).toFixed(1),
      proteines: +(proteinesPortion * qty).toFixed(1),
      sel: +(selPortion * qty).toFixed(1),
      poids: portionGrams * qty,
    }),
    [qty]
  );

  // Répartition énergétique (par portion)
  const macroPct = {
    p: Math.round((proteinesPortion * 4 * 100) / kcalPortion),
    g: Math.round((glucidesPortion * 4 * 100) / kcalPortion),
    l: Math.round((lipidesPortion * 9 * 100) / kcalPortion),
  };

  return (
    <>
      <Head>
        <title>Pâtes bolognaise maison — GreenHouse (surgelé)</title>
        <meta
          name="description"
          content="Plat surgelé — Pâtes bolognaise maison (600 g). Conserver au congélateur (max 4 mois). Après décongélation : 48 h au réfrigérateur."
        />
      </Head>

      <main className="wrap">
        {/* Bandeau */}
        <header className="hero">
          <div className="over">
            <Link href="/" className="back">← Retour à l'accueil</Link>
            <span className="badge badge-freeze">Surgelé</span>
          </div>

          <h1 className="title">Pâtes bolognaise maison</h1>

          <p className="meta">
            Portion : <strong>{portionGrams} g</strong> ·
            <span> prêt en <strong>20&nbsp;mn</strong> au four</span> ·
            <span> <strong>8&nbsp;mn</strong> au micro-ondes</span> ·
            <span> <strong>10&nbsp;mn</strong> à la poêle</span> ·
            <span> riche en protéines</span>
          </p>

          <p className="lead">
            Une bolognaise authentique sublimée par des pâtes au seigle
            artisanales, élaborées avec des œufs plein air. La tendreté du
            bœuf haché, la douceur des carottes et la fraîcheur de la tomate
            s’unissent pour un plat réconfortant et équilibré.
          </p>

          {/* Carte prix / quantité */}
          <div className="buy">
            <div className="buy-label">Prix unitaire</div>
            <div className="buy-price">{nf.format(basePrice)}</div>
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Moins">−</button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value || "1", 10)))
                }
              />
              <button onClick={() => setQty((q) => q + 1)} aria-label="Plus">+</button>
            </div>
            <div className="buy-total-label">Total ({qty} plat{qty > 1 ? "s" : ""})</div>
            <div className="buy-total">{nf.format(totals.price)}</div>
            <button className="btn">Commander</button>
          </div>
        </header>

        {/* Ingrédients */}
        <section className="sect">
          <h2>Ingrédients</h2>
          <ul className="ilist">
            {ingredients.map((it) => (
              <li key={it.name}>
                <span>{it.name}</span>
                {it.qty ? <span className="qtytxt">{it.qty}</span> : <span />}
              </li>
            ))}
          </ul>
          <p className="muted">Allergènes : gluten (seigle, blé), œufs.</p>
        </section>

        {/* Conservation (surgelé) */}
        <section className="sect keep">
          <h2>Conservation</h2>
          <p>
            <strong>Produit surgelé.</strong> À conserver au congélateur (−18 °C)
            <strong> maximum 4 mois</strong>. Après décongélation : conserver au
            réfrigérateur et <strong>consommer sous 48 h</strong>. Ne pas recongeler
            un produit décongelé.
          </p>
        </section>

        {/* Valeurs nutritionnelles */}
        <section className="sect">
          <h2>Valeurs nutritionnelles</h2>

          <div className="cards3">
            <div className="kcard"><div>Protéines</div><strong>{macroPct.p}%</strong><small>des kcal</small></div>
            <div className="kcard"><div>Glucides</div><strong>{macroPct.g}%</strong><small>des kcal</small></div>
            <div className="kcard"><div>Lipides</div><strong>{macroPct.l}%</strong><small>des kcal</small></div>
          </div>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Valeurs</th>
                  <th>Pour 100 g</th>
                  <th>Par portion ({portionGrams} g)</th>
                  <th>Commande ({qty}×)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>{kcal100} kcal</td><td>{kcalPortion} kcal</td><td>{totals.kcal} kcal</td></tr>
                <tr><td>Matières grasses</td><td>{lipides100} g</td><td>{lipidesPortion} g</td><td>{totals.lipides} g</td></tr>
                <tr className="sub"><td>dont acides gras saturés</td><td>{ags100} g</td><td>{agsPortion} g</td><td>{totals.ags} g</td></tr>
                <tr><td>Glucides</td><td>{glucides100} g</td><td>{glucidesPortion} g</td><td>{totals.glucides} g</td></tr>
                <tr className="sub"><td>dont sucres</td><td>{sucre100} g</td><td>{sucrePortion} g</td><td>{totals.sucres} g</td></tr>
                <tr><td>Protéines</td><td>{proteines100} g</td><td>{proteinesPortion} g</td><td>{totals.proteines} g</td></tr>
                <tr><td>Sel</td><td>{sel100} g</td><td>{selPortion} g</td><td>{totals.sel} g</td></tr>
                <tr><td>Poids total</td><td>—</td><td>{portionGrams} g</td><td>{totals.poids} g</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <style jsx>{`
        :root {
          --ink:#0b1020; --muted:#5a6475;
          --bg1:#e9fbff; --bg2:#e9fff6;
          --brand1:#0aa64c; --brand2:#2d7ae6;
          --accent:#0d6b57; --ring:rgba(45,122,230,.25);
          --freeze:#3aa3ff;
        }
        body { color:var(--ink); }
        .wrap {
          min-height:100vh;
          background:
            radial-gradient(1200px 700px at -10% -10%, var(--bg2), transparent 60%),
            radial-gradient(1000px 700px at 110% -10%, var(--bg1), transparent 60%),
            linear-gradient(#f7fffd,#f9fbff);
        }
        .hero { max-width:1100px; margin:0 auto; padding:40px 18px 10px; position:relative; }
        .over{display:flex;gap:12px;align-items:center;justify-content:space-between}
        .back{color:var(--muted);text-decoration:none}
        .badge{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:999px;font-weight:700;border:1px solid rgba(0,0,0,.06);background:#fff;}
        .badge-freeze{background:rgba(58,163,255,.12); border-color:rgba(58,163,255,.3); color:#065ea8;}
        .title{
          margin:6px 0 8px;
          font-size: clamp(34px, 6vw, 56px);
          line-height:1.05;
          background:linear-gradient(90deg,var(--brand1),var(--brand2));
          -webkit-background-clip:text; background-clip:text; color:transparent;
        }
        .meta{color:var(--muted);margin:0 0 10px;}
        .lead{max-width:820px;color:#223047;margin:0 0 18px;}

        .buy{
          margin-top:12px;background:#fff;border:1px solid rgba(0,0,0,.06);
          border-radius:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.06);max-width:320px;
        }
        .buy-label{font-size:12px;letter-spacing:.4px;color:var(--muted);text-transform:uppercase}
        .buy-price{font-size:32px;font-weight:800}
        .qty{display:flex;align-items:center;gap:8px;margin:12px 0}
        .qty button{height:40px;width:40px;border-radius:12px;border:1px solid rgba(0,0,0,.15);background:#fff;cursor:pointer}
        .qty input{height:40px;width:70px;border-radius:12px;border:1px solid rgba(0,0,0,.15);text-align:center}
        .buy-total-label{margin-top:6px;color:var(--muted)}
        .buy-total{font-size:22px;font-weight:700}
        .btn{
          margin-top:10px;width:100%;padding:12px 16px;border:none;border-radius:14px;color:#fff;font-weight:800;cursor:pointer;
          background:linear-gradient(90deg,var(--brand1),var(--brand2)); box-shadow:0 10px 25px rgba(45,122,230,.22);
        }

        .sect{max-width:1100px;margin:22px auto;padding:0 18px}
        .sect h2{font-size:22px;margin:0 0 10px}
        .ilist{list-style:none;margin:0;padding:0;display:grid;gap:8px}
        .ilist li{
          display:grid;grid-template-columns:1fr auto;align-items:center;
          background:#fff;border:1px solid rgba(0,0,0,.06);padding:10px 12px;border-radius:12px;
        }
        .qtytxt{font-weight:600}
        .muted{color:var(--muted);margin-top:6px}

        .keep p{background:#fff;border-left:6px solid var(--freeze);padding:12px;border-radius:10px}

        .cards3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0}
        .kcard{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:14px;padding:12px;text-align:center}
        .kcard strong{font-size:26px}

        .table{overflow-x:auto;background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:14px}
        table{width:100%;border-collapse:collapse}
        th,td{padding:10px 12px;text-align:left}
        thead tr{background:#f2f6ff;color:#28324a}
        tbody tr{border-top:1px solid rgba(0,0,0,.06)}
        tbody tr.sub td{color:#6a7385}
      `}</style>
    </>
  );
}
