// pages/plats-surgeles/index.js
import Link from "next/link";

export default function PlatsSurgeles() {
  const plats = [
    {
      slug: "bolo",
      titre: "Pâtes bolognaise maison",
      desc: "Pâtes complètes artisanales, bœuf 5% MG, carottes, sauce tomate maison",
      price: 9.9,
      nutriments: { kcal: 700, prot: 54.3, gluc: 89, lip: 15.8 },
    },
    {
      slug: "poulet-poivron",
      titre: "Pâtes complètes, poulet & sauce poivron maison",
      desc: "Pâtes complètes artisanales, émincé de poulet, julienne de légumes, sauce poivron maison",
      price: 9.9,
      nutriments: { kcal: 690, prot: 62, gluc: 86, lip: 10 },
    },
    {
      slug: "boeuf",
      titre: "Bœuf carottes & purée maison",
      desc: "Bœuf bourguignon maigre, carottes fondantes, purée maison",
      price: 9.9,
      nutriments: { kcal: 610, prot: 55, gluc: 48, lip: 18.1 },
    },
    {
      slug: "poulet-pommes-haricots",
      titre: "Poulet rôti, pommes de terre & haricots verts",
      desc: "Pommes de terre rôties, cuisse de poulet aux aromates, haricots verts frais",
      price: 9.9,
      nutriments: { kcal: 526, prot: 36, gluc: 39, lip: 27.5 },
    },
  ];

  return (
    <main className="page">
      <aside className="side">
        <Link href="/" className="back">← Retour accueil</Link>
        <h1 className="brand">Greenhouse</h1>
        <p className="tag">Traiteur — Diététique &amp; Gourmand</p>
      </aside>

      <section className="content">
        <h2 className="title">Plats surgelés</h2>
        <p className="intro">
          Découvrez notre gamme de plats surgelés équilibrés, préparés avec des ingrédients frais et nos{" "}
          <strong>pâtes artisanales (œufs plein air)</strong>.  
          La surgélation permet de préserver toute la fraîcheur et les qualités nutritionnelles.
        </p>

        <div className="list">
          {plats.map((p, i) => (
            <div key={i} className="card">
              <div className="head">
                <h3>{p.titre}</h3>
                <p className="desc">{p.desc}</p>
              </div>
              <div className="nutri">
                <div><b>{p.nutriments.kcal}</b><span>kcal</span></div>
                <div><b>{p.nutriments.prot} g</b><span>Prot.</span></div>
                <div><b>{p.nutriments.gluc} g</b><span>Gluc.</span></div>
                <div><b>{p.nutriments.lip} g</b><span>Lip.</span></div>
              </div>
              <div className="foot">
                <div className="price">{p.price.toFixed(2)} €</div>
                <Link href={`/plats-surgeles/${p.slug}`} className="btn">Voir la fiche</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{styles}</style>
    </main>
  );
}

const styles = `
.page{display:grid;grid-template-columns:260px 1fr;min-height:100vh;background:linear-gradient(180deg,#eaf7ff,#f7fffb);}
.side{padding:24px 18px;background:linear-gradient(180deg,#dff1ff,#e6fff7);}
.back{display:inline-block;margin-bottom:12px;color:#0b6;text-decoration:none}
.brand{margin:0;font-size:48px;line-height:0.9;background:linear-gradient(90deg,#0aa64c,#2d7ae6);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:900}
.tag{color:#246}
.content{padding:24px;max-width:1000px}
.title{font-size:32px;margin:0 0 8px}
.intro{margin:0 0 24px;color:#234;max-width:720px}
.list{display:grid;gap:16px}
.card{background:#fff;border-radius:18px;box-shadow:0 6px 18px rgba(0,0,0,.08);padding:18px;display:grid;grid-template-columns:2fr 1fr auto;align-items:center;gap:16px}
.head h3{margin:0;font-size:20px}
.head .desc{margin:4px 0 0;color:#456;font-size:14px}
.nutri{display:flex;gap:16px;justify-content:center}
.nutri div{text-align:center}
.nutri b{display:block;font-size:18px;color:#123}
.foot{display:flex;flex-direction:column;align-items:end;gap:8px}
.price{font-size:20px;font-weight:700}
.btn{padding:8px 14px;border-radius:10px;background:linear-gradient(90deg,#0aa64c,#2d7ae6);color:#fff;text-decoration:none;font-weight:700}
@media(max-width:900px){.page{grid-template-columns:1fr}.list{grid-template-columns:1fr}.card{grid-template-columns:1fr;gap:10px}}
`;
