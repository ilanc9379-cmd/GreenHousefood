// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";

/* =========================
   DONNÉES — PLATS (DIÈTE)
   ========================= */
const PLATS = [
  {
    id: "bolo",
    nom: "Pâtes bolognaise maison",
    type: "Diète",
    surgele: true,
    prix: 9.9,
    resume:
      "Pâtes au seigle artisanales, bœuf 5% MG, carottes, sauce tomate.",
    kcal: 700,
    prot: 54.3,
    gluc: 89,
    lip: 15.8,
    href: "/plats/bolo",
  },
  {
    id: "pates-poulet-poivron",
    nom: "Pâtes complètes, émincé de poulet & sauce poivron",
    type: "Diète",
    surgele: true,
    prix: 9.9,
    resume:
      "Pâtes complètes, poulet tendre, julienne de légumes, sauce poivron/ail/oignon.",
    kcal: 689,
    prot: 62,
    gluc: 86,
    lip: 10,
    href: "/plats/pates-poulet-poivron",
  },
  {
    id: "boeuf-carottes-puree",
    nom: "Bœuf carottes & purée maison",
    type: "Diète",
    surgele: true,
    prix: 9.9,
    resume:
      "Bourguignon maigre, carottes fondantes, purée légère de pommes de terre.",
    kcal: 700, // valeur indicative, la fiche dédiée donne le détail
    prot: 45,
    gluc: 75,
    lip: 18,
    href: "/plats/boeuf",
  },
  {
    id: "pdt-poulet-haricots",
    nom: "Pomme de terre rôtie, cuisse de poulet & haricots verts",
    type: "Diète",
    surgele: true,
    prix: 9.9,
    resume:
      "Pommes de terre rôties, cuisse de poulet (marinade paprika/moutarde), haricots verts à l’ail.",
    kcal: 720, // estimatif propre, fiche détaillée à venir si tu veux
    prot: 44,
    gluc: 67,
    lip: 26,
    href: "#", // si tu crées la fiche, remplace par /plats/xxx
  },
];

/* ===========================================
   FALAFELS EN VRAC — SURGELÉS (ARTISANAUX)
   =========================================== */
const FALAFEL_NUTR_100 = {
  kcal: 184,
  lipides: 7.4,
  ags: 0.8,
  glucides: 20.1,
  sucres: 1.1,
  fibres: 5.3,
  proteines: 7.6,
  sel: 1.1,
};
const FALAFEL_PRIX_KG = 10.0;

/* ===========================================
   PÂTES FRAÎCHES — CALCULS POUR 100 g (cru)
   Recette : 4 kg farine + 1 kg semoule blé dur
             + 1,4 kg œufs plein air + 0,4 kg eau
   =========================================== */
// Références nutrition (pour 100 g ingrédient)
const REF = {
  seigle: { kcal: 335, P: 9.0, G: 76.0, L: 2.2 },
  complete: { kcal: 340, P: 13.2, G: 72.0, L: 2.5 },
  aromette: { kcal: 360, P: 10.0, G: 76.0, L: 1.3 }, // proxys farine blanche/aromatisée
  semoule: { kcal: 360, P: 12.5, G: 72.0, L: 1.5 },
  oeufs: { kcal: 143, P: 12.6, G: 1.1, L: 9.9 },
};
function mix100(flourKey) {
  const w = { flour: 4000, semoule: 1000, oeufs: 1400, eau: 400 }; // grammes
  const total = w.flour + w.semoule + w.oeufs + w.eau; // 6800 g
  const sum = (k) =>
    (REF[flourKey][k] * w.flour +
      REF.semolue?.[k] * 0 + // sécurité
      REF.semoule[k] * w.semoule +
      REF.oeufs[k] * w.oeufs) /
    (total / 100);
  return {
    kcal: Math.round(sum("kcal") * 10) / 10,
    P: Math.round(sum("P") * 10) / 10,
    G: Math.round(sum("G") * 10) / 10,
    L: Math.round(sum("L") * 10) / 10,
  };
}
const PATES_100 = {
  seigle: mix100("seigle"), // ≈ 279 kcal; P 9.7; G 55.5; L 3.6
  complete: mix100("complete"), // ≈ 292 kcal; P 11.9; G 53.7; L 3.8
  aromette: mix100("aromette"), // ≈ 294 kcal; P 10.3; G 55.5; L 3.0
};

/* ==============
   PETITES HELPERS
   ============== */
const euro = (n) => `${n.toFixed(2).replace(".", ",")} €`;
const MailButton = ({ label = "Commander", subject = "Commande GreenHouse" }) => (
  <a
    className="btn"
    href={`mailto:greenhouse.68@outlook.fr?subject=${encodeURIComponent(
      subject
    )}`}
  >
    {label}
  </a>
);

export default function Home() {
  const [filtre, setFiltre] = useState("Tous"); // Tous | Diète | Surgelé
  const [q, setQ] = useState("");

  const platsFiltres = useMemo(() => {
    return PLATS.filter((p) => {
      const okType =
        filtre === "Tous"
          ? true
          : filtre === "Surgelé"
          ? p.surgele
          : p.type === filtre;
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
        <title>GreenHouse — Traiteur | Diète & Gourmand</title>
        <meta
          name="description"
          content="GreenHouse — Traiteur artisanal : diététique & gourmand. Plats maison surgelés, falafels artisanaux, pâtes fraîches. Mulhouse & alentours."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        {/* HERO */}
        <header className="hero">
          <div className="brandline">
            <h1 className="brand">GreenHouse</h1>
            <p className="tag">
              Traiteur — <strong>Diététique & Gourmand</strong>
            </p>
            <p className="slogan">
              Des plats maison équilibrés, cuisinés avec soin et{" "}
              <strong>surgelez</strong> pour préserver toutes leurs qualités.
            </p>
          </div>

          <div className="toolbar">
            <div className="chips">
              {["Tous", "Diète", "Surgelé"].map((k) => (
                <button
                  key={k}
                  className={`chip ${filtre === k ? "chip--on" : ""}`}
                  onClick={() => setFiltre(k)}
                >
                  {k}
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
          </div>
        </header>

        {/* LISTE PLATS */}
        <section className="section">
          <h2 className="h2">Nos plats (Diète · Surgelés)</h2>
          <div className="grid">
            {platsFiltres.map((p) => (
              <article key={p.id} className="card">
                <div className="card-top">
                  <div className="badges">
                    {p.surgele && <span className="badge bd-ice">Surgelé</span>}
                    <span className="badge bd-diet">{p.type}</span>
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
                    <div className="num">{p.prot} g</div>
                  </div>
                  <div>
                    <small>Gluc.</small>
                    <div className="num">{p.gluc} g</div>
                  </div>
                  <div>
                    <small>Lip.</small>
                    <div className="num">{p.lip} g</div>
                  </div>
                </div>

                <div className="cta">
                  <div className="price">{euro(p.prix)}</div>
                  <a className="btn ghost" href={p.href}>
                    Voir la fiche
                  </a>
                  <MailButton subject={`Commande plat — ${p.nom}`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FALAFELS EN VRAC */}
        <section className="section">
          <h2 className="h2">Falafels en vrac — <span className="ice">surgelés</span></h2>
          <div className="falafel">
            <div className="f-left">
              <p className="lead">
                Falafels <strong>artisanaux</strong> (pois chiches, persil, coriandre, sésame…).
                Idéal pour vos salades & bowls. Indication <em>surgelé</em> affichée — à conserver au congélateur.
              </p>
              <ul className="bul">
                <li>Prix : <strong>{euro(FALAFEL_PRIX_KG)}/kg</strong></li>
                <li>Origine : fabrication maison à Mulhouse</li>
              </ul>
              <MailButton subject="Commande — Falafels en vrac" />
            </div>
            <div className="f-right">
              <table className="nutri">
                <thead>
                  <tr>
                    <th colSpan={2}>Valeurs nutritionnelles (pour 100 g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Énergie</td><td>{FALAFEL_NUTR_100.kcal} kcal</td></tr>
                  <tr><td>Matières grasses</td><td>{FALAFEL_NUTR_100.lipides} g (AGS {FALAFEL_NUTR_100.ags} g)</td></tr>
                  <tr><td>Glucides</td><td>{FALAFEL_NUTR_100.glucides} g (sucres {FALAFEL_NUTR_100.sucres} g)</td></tr>
                  <tr><td>Fibres</td><td>{FALAFEL_NUTR_100.fibres} g</td></tr>
                  <tr><td>Protéines</td><td>{FALAFEL_NUTR_100.proteines} g</td></tr>
                  <tr><td>Sel</td><td>{FALAFEL_NUTR_100.sel} g</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PÂTES FRAÎCHES */}
        <section className="section">
          <h2 className="h2">Pâtes fraîches — 7,00 €/kg</h2>
          <p className="muted">
            Disponibles <strong>lundi & jeudi</strong>. Farines : <strong>seigle</strong>, <strong>aromette</strong>, <strong>complète</strong> — production artisanale, œufs plein air.
          </p>
          <div className="grid pasta">
            {[
              { key: "seigle", label: "Seigle" },
              { key: "aromette", label: "Aromette" },
              { key: "complete", label: "Complète" },
            ].map((x) => (
              <article className="card" key={x.key}>
                <div className="card-top">
                  <h3 className="title">Pâtes {x.label}</h3>
                  <p className="resume">Valeurs nutritionnelles pour 100 g (pâte crue).</p>
                </div>
                <div className="macros">
                  <div><small>kcal</small><div className="num">{PATES_100[x.key].kcal}</div></div>
                  <div><small>Prot.</small><div className="num">{PATES_100[x.key].P} g</div></div>
                  <div><small>Gluc.</small><div className="num">{PATES_100[x.key].G} g</div></div>
                  <div><small>Lip.</small><div className="num">{PATES_100[x.key].L} g</div></div>
                </div>
                <div className="cta">
                  <div className="price">7,00 € / kg</div>
                  <MailButton subject={`Commande — Pâtes fraîches ${x.label}`} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="foot">
          <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal · Mulhouse</p>
        </footer>
      </main>

      <style jsx>{`
        :root{
          --ink:#0b1020; --muted:#475569; --card:#fff;
          --ring:rgba(10,140,120,.22);
          --diet:#10b981; --ice:#22d3ee;
          --grad1:#10b981; --grad2:#2563eb;
        }
        html,body,#__next{height:100%}
        body{margin:0;color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}
        .wrap{
          min-height:100%;
          background:
            radial-gradient(1000px 700px at -10% -10%, rgba(16,185,129,.15), transparent 60%),
            radial-gradient(900px 600px at 110% -20%, rgba(37,99,235,.12), transparent 65%),
            linear-gradient(180deg, #f6fffb 0%, #f7fbff 45%, #ffffff 100%);
          animation: float 20s linear infinite;
        }
        @keyframes float {
          0% { background-position: 0 0, 0 0, 0 0; }
          50% { background-position: 10px -8px, -12px 8px, 0 0; }
          100% { background-position: 0 0, 0 0, 0 0; }
        }

        /* HERO */
        .hero{max-width:1200px;margin:0 auto;padding:32px 18px 12px}
        .brand{margin:0;font-size: clamp(42px, 8vw, 96px);line-height:.95;
          background: linear-gradient(90deg, var(--grad1), var(--grad2));
          -webkit-background-clip:text;background-clip:text;color:transparent}
        .tag{margin:6px 0 2px;color:var(--ink);font-size:clamp(16px,2.4vw,22px)}
        .slogan{margin:0;color:var(--muted)}
        .toolbar{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-top:18px}
        .chips{display:flex;gap:8px;flex-wrap:wrap}
        .chip{border:1px solid rgba(0,0,0,.08);background:#fff;padding:8px 14px;border-radius:999px;font-weight:600;cursor:pointer}
        .chip--on{border-color:transparent;background:linear-gradient(90deg, rgba(16,185,129,.14), rgba(37,99,235,.14));box-shadow:0 0 0 3px var(--ring) inset}
        .search{flex:1;min-width:240px;height:44px;border:1px solid rgba(0,0,0,.08);border-radius:14px;padding:0 12px;outline:none;background:#fff}
        .search:focus{box-shadow:0 0 0 4px var(--ring)}

        .section{max-width:1200px;margin:18px auto;padding:0 18px}
        .h2{margin:6px 0 12px;font-size:clamp(22px,3vw,28px)}
        .grid{display:grid;gap:18px;grid-template-columns:repeat(2,minmax(0,1fr))}
        @media (max-width:860px){.grid{grid-template-columns:1fr}}

        .card{background:var(--card);border-radius:18px;padding:18px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
        .card-top{display:grid;gap:6px}
        .title{margin:0;font-size:clamp(18px,2.2vw,22px)}
        .resume{margin:0;color:var(--muted)}
        .badges{display:flex;gap:8px}
        .badge{padding:4px 10px;border-radius:999px;font-weight:700;font-size:12px;border:1px solid rgba(0,0,0,.06);background:#eef5ff}
        .bd-diet{background:rgba(16,185,129,.14);border-color:rgba(16,185,129,.25)}
        .bd-ice{background:rgba(34,211,238,.16);border-color:rgba(34,211,238,.28)}
        .ice{color:#0b8ea4}
        .macros{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:linear-gradient(180deg,#f9fbff,#f2f7ff);border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:10px}
        .macros small{color:var(--muted)}
        .num{font-weight:800}
        .cta{display:flex;gap:10px;align-items:center;justify-content:flex-end;margin-top:6px}
        .price{margin-right:auto;font-size:20px;font-weight:800}
        .btn{padding:10px 14px;border-radius:12px;border:none;color:#fff;font-weight:700;cursor:pointer;text-decoration:none;display:inline-block;background:linear-gradient(90deg,var(--grad1),var(--grad2));box-shadow:0 10px 25px rgba(37,99,235,.18)}
        .btn.ghost{background:#fff;color:var(--ink);border:1px solid rgba(0,0,0,.12);box-shadow:none}

        /* Falafel bloc */
        .falafel{display:grid;grid-template-columns:1.2fr .8fr;gap:18px}
        @media (max-width:860px){.falafel{grid-template-columns:1fr}}
        .lead{margin-top:0}
        .bul{margin:10px 0 16px}
        .bul li{margin:4px 0}
        .nutri{width:100%;border-collapse:separate;border-spacing:0;overflow:hidden;border-radius:14px;border:1px solid rgba(0,0,0,.08);background:#fff}
        .nutri th{background:#f1f5ff;padding:10px;text-align:left}
        .nutri td{padding:8px;border-top:1px solid rgba(0,0,0,.06)}

        .pasta .price{font-size:18px}

        .foot{margin:26px 0 40px;text-align:center;color:var(--muted)}
      `}</style>
    </>
  );
}
