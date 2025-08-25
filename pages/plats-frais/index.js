import Link from "next/link";

export default function PlatsFrais() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">
          Traiteur artisanal — Des plats frais, équilibrés, sous atmosphère
          modifiée pour préserver qualité et praticité.
        </p>
        <p className="sub">
          Conservation au réfrigérateur : <strong>jusqu’à 5 jours</strong>.
        </p>
        <nav className="nav">
          <Link href="/">← Retour à l’accueil</Link>
          <span>·</span>
          <Link href="/plats-surgeles">Plats surgelés</Link>
          <span>·</span>
          <Link href="/surgeles">Produits surgelés</Link>
        </nav>
      </header>

      {/* SECTION CARTES */}
      <section className="grid">
        <article className="card coming">
          <h2>Vitrine des plats frais</h2>
          <p>
            La sélection arrive très bientôt. Nous finalisons les fiches, macros
            et allergènes.
          </p>
          <ul className="list">
            <li>• Recettes équilibrées & de saison</li>
            <li>• Sous atmosphère modifiée</li>
            <li>• Conservation 5 jours au frais</li>
          </ul>
          <div className="cta-row">
            <Link className="btn" href="/">Être averti bientôt</Link>
          </div>
        </article>

        <article className="card">
          <h2>Besoin d’un plat frais spécifique ?</h2>
          <p>
            On cuisine aussi <strong>à la demande</strong> pour entreprises,
            sportifs, événements. Portions & macros personnalisées.
          </p>
          <div className="cta-row">
            <a className="btn ghost" href="mailto:contact@greenhouse.example">
              Nous écrire
            </a>
          </div>
        </article>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        .container { padding: 20px; font-family: Arial, sans-serif; }
        .gh-header { text-align: center; margin-bottom: 40px; }
        .brand {
          margin: 0; font-weight: 900; font-size: clamp(40px, 7vw, 64px); line-height: .95;
          background: linear-gradient(90deg, #0bb57a, #2a7eea); -webkit-background-clip: text;
          background-clip: text; color: transparent; letter-spacing: .5px;
        }
        .tag { margin-top: 10px; color: #3c4a57; font-weight: 600; font-size: clamp(16px, 2.5vw, 22px); }
        .sub { margin: 4px 0 10px; color: #526072; }
        .nav { display: flex; gap: 10px; justify-content: center; align-items: center; color: #0a6b5a; }
        .nav a { color: #0a6b5a; text-decoration: none; font-weight: 600; }
        .nav a:hover { text-decoration: underline; }

        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
        .card {
          border: 1px solid #e6e8eb; padding: 20px; border-radius: 14px; background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,.06);
        }
        .card h2 { margin: 0 0 6px; color: #0a6b5a; }
        .list { margin: 10px 0 0; padding-left: 0; list-style: none; color: #3c4a57; }
        .cta-row { margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap; }
        .btn {
          display: inline-block; padding: 10px 16px; border-radius: 12px; font-weight: 700; text-decoration: none;
          color: #fff; background: linear-gradient(90deg, #0bb57a, #2a7eea); box-shadow: 0 6px 18px rgba(42,126,234,.22);
        }
        .btn.ghost {
          background: #fff; color: #0a6b5a; border: 1px solid #cfe7df; box-shadow: none;
        }
        .coming { background: linear-gradient(180deg, #f7fffb, #ffffff); }
        .foot { text-align: center; margin-top: 40px; color: #6a737d; font-size: 14px; }
      `}</style>
    </main>
  );
}
