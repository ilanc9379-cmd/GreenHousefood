import Link from "next/link";

export default function ProduitsSurges() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">Produits surgelés — Pâtes artisanales & falafels</p>
      </header>

      {/* LISTE PRODUITS SURGELÉS */}
      <section className="cards">
        <article className="card">
          <h2>Pâtes artisanales (surgelées)</h2>
          <p>
            Farines locales (seigle, complète, aromette) &amp;{" "}
            <strong>œufs frais plein air</strong>. Surgelées pour une cuisson
            express et une qualité constante. <strong>Cuisson</strong> : eau
            bouillante <strong>1 min 30</strong>.
          </p>
          <Link href="/surgeles/pates" className="btn">Voir les pâtes</Link>
        </article>

        <article className="card alt">
          <h2>Falafels artisanaux (surgelés)</h2>
          <p>
            Pois chiches réhydratés, herbes fraîches et épices.{" "}
            <strong>Prix : 10,00 € / kg</strong>. Valeurs nutritionnelles
            moyennes pour 100 g : ~184 kcal, L 7,4 g (AGS 0,8 g), G 20,1 g
            (sucres 1,1 g), P 7,6 g, Sel 1,1 g.
          </p>
          <Link href="/surgeles/falafels" className="btn">Voir les falafels</Link>
        </article>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        .container { font-family: Arial, sans-serif; padding: 0 20px 40px; background: #f9fbfa; }
        .gh-header { text-align: center; padding: 50px 20px; background: linear-gradient(120deg,#0bb57a,#2a7eea); color:#fff; border-radius:0 0 30px 30px; margin-bottom:40px; box-shadow:0 6px 20px rgba(0,0,0,.15); }
        .brand { margin:0; font-size:clamp(42px,8vw,70px); font-weight:900; letter-spacing:1px; }
        .tag { margin-top:10px; font-size:clamp(16px,2.5vw,22px); font-weight:500; }
        .cards { display:grid; gap:24px; }
        .card { background:#fff; border-radius:16px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,.08); transition:transform .2s, box-shadow .2s; }
        .card.alt { background:#eef9f4; }
        .card:hover { transform:translateY(-4px); box-shadow:0 8px 20px rgba(0,0,0,.12); }
        .card h2 { margin:0 0 8px; font-size:22px; color:#0a6b5a; }
        .card p { color:#3c4a57; margin-bottom:14px; }
        .btn { display:inline-block; padding:10px 18px; border-radius:12px; font-weight:700; color:#fff; text-decoration:none; background:linear-gradient(90deg,#0bb57a,#2a7eea); box-shadow:0 4px 12px rgba(42,126,234,.3); transition:all .25s; }
        .btn:hover { filter:brightness(1.1); box-shadow:0 6px 18px rgba(11,181,122,.35); }
        .foot { text-align:center; margin-top:40px; font-size:14px; color:#6a737d; }
      `}</style>
    </main>
  );
}
