import Head from "next/head";
import Image from "next/image";

/**
 * ============================
 * 1) CONTENU À PERSONNALISER
 * ============================
 * Modifie simplement ce bloc : titres, slogans, plats, prix, émojis.
 */
const BRAND = {
  name: "GreenHouse",
  slogan: "Traiteur — diète ou gourmand",
  phone: "06 12 34 56 78",
  address: "123 rue des Platanes, 69000 Lyon",
  hours: "Lun–Sam : 11h30–14h30, 18h30–22h • Dim : 18h–22h",
};

const SECTIONS = [
  {
    id: "bowls",
    title: "Bowls",
    theme: "emerald", // emerald | sky | amber | rose | violet
    items: [
      {
        name: "Bowl Poulet Teriyaki",
        desc: "Riz vinaigré, poulet teriyaki, avocat, concombre, sésame",
        price: "12,90€",
        tag: "Gourmand",
        emoji: "🥢",
      },
      {
        name: "Bowl Saumon Fit",
        desc: "Quinoa, saumon rôti, brocoli, sauce yaourt citronnée",
        price: "13,50€",
        tag: "Diète",
        emoji: "🐟",
      },
      {
        name: "Bowl Veggie Méditerranée",
        desc: "Boulgour, houmous, tomates, olives, feta, herbes",
        price: "11,90€",
        tag: "Végétarien",
        emoji: "🥗",
      },
      {
        name: "Bowl Bœuf & Sésame",
        desc: "Riz, bœuf mariné, edamame, carotte pickles, sésame noir",
        price: "13,90€",
        tag: "Gourmand",
        emoji: "🥩",
      },
    ],
  },
  {
    id: "plats",
    title: "Plats",
    theme: "rose",
    items: [
      {
        name: "Poulet Citron & Herbes",
        desc: "Filet grillé, patate douce rôtie, salade croquante",
        price: "14,00€",
        tag: "Diète",
        emoji: "🍗",
      },
      {
        name: "Pâtes Crème de Champignons",
        desc: "Tagliatelles fraîches, parmesan, huile de truffe",
        price: "13,50€",
        tag: "Gourmand",
        emoji: "🍝",
      },
      {
        name: "Saumon Miso & Légumes",
        desc: "Saumon laqué, légumes vapeur, riz complet",
        price: "15,50€",
        tag: "Diète",
        emoji: "🍣",
      },
      {
        name: "Wok Légumes & Tofu",
        desc: "Nouilles, tofu croustillant, sauce soja-sésame",
        price: "12,50€",
        tag: "Vegan",
        emoji: "🥡",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    theme: "amber",
    items: [
      {
        name: "Cheesecake Citron",
        desc: "Ultra onctueux, zeste frais",
        price: "5,50€",
        tag: "Gourmand",
        emoji: "🍰",
      },
      {
        name: "Salade de Fruits",
        desc: "Fruits de saison, sirop léger",
        price: "4,50€",
        tag: "Diète",
        emoji: "🍓",
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    theme: "sky",
    items: [
      { name: "Eau plate / gazeuse", desc: "50 cl", price: "2,00€", tag: "—", emoji: "💧" },
      { name: "Kombucha", desc: "Maison, gingembre/citron", price: "3,90€", tag: "—", emoji: "🫖" },
      { name: "Thé glacé", desc: "Pêche ou citron", price: "3,50€", tag: "—", emoji: "🧊" },
      { name: "Jus pressé", desc: "Orange ou pomme", price: "3,90€", tag: "—", emoji: "🍊" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{BRAND.name} – {BRAND.slogan}</title>
        <meta name="description" content={`${BRAND.name} · ${BRAND.slogan}`} />
        {/* Favicon depuis /public/favicon.png */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* FOND & HÉRO */}
      <div className="page">
        <header className="hero">
          <div className="hero-inner">
            <div className="brand">
              <div className="logo">
                {/* Si tu as un vrai logo plus tard : remplace /favicon.png */}
                <Image src="/favicon.png" alt="GreenHouse" width={72} height={72} />
              </div>
              <h1 className="title">
                <span className="brandname">{BRAND.name}</span>
              </h1>
              <p className="slogan">{BRAND.slogan}</p>
              <p className="meta">
                <span>{BRAND.hours}</span> • <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a> • {BRAND.address}
              </p>
              <a href="#menu" className="cta">Voir le menu</a>
            </div>
          </div>
          <div className="hero-glow" />
        </header>

        {/* MENU */}
        <main id="menu" className="content">
          {SECTIONS.map((section) => (
            <section key={section.id} className={`section section-${section.theme}`}>
              <div className="section-head">
                <h2>{section.title}</h2>
                <div className="divider" />
              </div>

              <div className="grid">
                {section.items.map((item, i) => (
                  <article key={i} className="card">
                    <div className="card-top">
                      <span className="emoji" aria-hidden>{item.emoji}</span>
                      <h3 className="name">{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="desc">{item.desc}</p>
                    <div className="tags">
                      {item.tag && <span className="tag">{item.tag}</span>}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</p>
        </footer>
      </div>

      {/* STYLES */}
      <style jsx>{`
        /* Layout général */
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(1200px 600px at 10% -10%, rgba(52,211,153,0.18), transparent 60%),
            radial-gradient(900px 500px at 90% -20%, rgba(59,130,246,0.18), transparent 60%),
            linear-gradient(180deg, #0b1220 0%, #0e1324 40%, #0f1427 100%);
          color: #f8fafc;
        }

        /* HERO */
        .hero {
          position: relative;
          padding: 80px 20px 40px;
          overflow: hidden;
        }
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .logo {
          margin: 0 auto 14px;
          opacity: 0.95;
          filter: drop-shadow(0 4px 14px rgba(0,0,0,0.3));
        }
        .title {
          margin: 0;
          font-size: clamp(42px, 6vw, 84px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.05;
        }
        .brandname {
          background: linear-gradient(92deg, #34d399, #60a5fa 35%, #a78bfa 70%, #f59e0b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 0 rgba(0,0,0,0); /* garde le texte net */
        }
        .slogan {
          margin: 10px 0 8px;
          font-size: clamp(16px, 2.5vw, 22px);
          color: #e2e8f0;
          opacity: 0.95;
        }
        .meta {
          margin: 4px 0 20px;
          font-size: 14px;
          color: #cbd5e1;
        }
        .meta a { color: #cbd5e1; text-decoration: none; border-bottom: 1px dotted #94a3b8; }
        .meta a:hover { color: #e2e8f0; }

        .cta {
          display: inline-block;
          margin-top: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          background: linear-gradient(90deg, #34d399, #60a5fa);
          color: #0b1220;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(52,211,153,0.25);
          transition: transform .15s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.25);
          opacity: .95;
        }

        .hero-glow {
          position: absolute;
          inset: -20% -10% auto -10%;
          height: 60%;
          background:
            radial-gradient(900px 400px at 50% 0%, rgba(99,102,241,0.25), transparent 60%),
            radial-gradient(700px 350px at 30% -10%, rgba(34,197,94,0.
