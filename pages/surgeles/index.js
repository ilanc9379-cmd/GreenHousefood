import Link from "next/link";

export default function ProduitsSurgeles() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">
          Produits surgelés — Pratiques, bons, artisanaux. Surgelés pour
          préserver les nutriments, la texture et le goût.
        </p>
        <p className="sub">
          À conserver au congélateur. <strong>Cuisson express</strong> quand
          vous voulez.
        </p>
        <nav className="nav">
          <Link href="/">← Retour à l’accueil</Link>
          <span>·</span>
          <Link href="/plats-surgeles">Plats surgelés</Link>
          <span>·</span>
          <Link href="/plats-frais">Plats frais</Link>
        </nav>
      </header>

      {/* SECTION CARTES */}
      <section className="grid">
        {/* PÂTES */}
        <article className="card">
          <div className="badge">Surgelé</div>
          <h2>Pâtes artisanales surgelées</h2>
          <p>
            Œufs frais plein air & farines locales. Variétés :{" "}
            <strong>Seigle</strong>, <strong>Complètes</strong>,{" "}
            <strong>Aromette</strong>. Cuisson eau bouillante{" "}
            <strong>1 min 30</strong>.
          </p>
          <ul className="list">
            <li>• Conditionnement vrac ou portions</li>
            <li>• À conserver au congélateur</li>
            <li>• Allergènes : gluten, œufs</li>
          </ul>
          <div className="cta-row">
            {/* À brancher vers ta page liste/fiche quand prête */}
            <Link className="btn" href="/surgeles/pates">Voir les pâtes</Link>
            <a className="btn ghost" href="mailto:contact@greenhouse.example">Commander</a>
          </div>
        </article>

        {/* FALAFELS */}
        <article className="card">
          <div className="badge">Surgelé</div>
          <h2>Falafels artisanaux surgelés</h2>
          <p>
            Fabrication maison. Prix : <strong>10,00 € / kg</strong>. Cuisson{" "}
            <strong>friteuse 3 min</strong> ou <strong>airfryer 15 min</strong>.
          </p>
          <ul className="list">
            <li>• Sans additifs, texture crousti-fondante</li>
            <li>• À conserver au congélateur</li>
            <li>• Valeurs nutritionnelles : indiquées par 100 g</li>
          </ul>
          <div className="cta-row">
            {/* À brancher vers ta page fiche falafel quand prête */}
            <Link className="btn" href="/surgeles/falafels">Voir les falafels</Link>
            <a className="btn ghost" href="mailto:contact@greenhouse.example">Commander</a>
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
          position: relative;
          border: 1px solid #e6e8eb; padding: 20px; border-radius: 14px; background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,.06);
        }
        .badge {
          position: absolute; top: 14px; right: 14px;
          padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 800;
          background: rgba(11, 181, 122, .12); color: #0a6b5a; border: 1px solid #bfe8d9;
        }
        .card h2 { margin: 0 0 8px; color: #0a6b5a; }
        .list { margin: 10px 0 0; padding-left: 0; list-style: none; color: #3c4a57; }
        .cta-row { margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap; }
        .btn {
          display: inline-block; padding: 10px 16px; border-radius: 12px; font-weight: 700; text-decoration: none;
          color: #fff; background: linear-gradient(90deg, #0bb57a, #2a7eea); box-shadow: 0 6px 18px rgba(42,126,234,.22);
        }
        .btn.ghost {
          background: #fff; color: #0a6b5a; border: 1px solid #cfe7df; box-shadow: none;
        }
        .foot { text-align: center; margin-top: 40px; color: #6a737d; font-size: 14px; }
      `}</style>
    </main>
  );
}
