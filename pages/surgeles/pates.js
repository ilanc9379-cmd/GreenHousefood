export default function Pates() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">Pâtes artisanales surgelées</p>
      </header>

      {/* CONTENU */}
      <section className="card">
        <h2>Pâtes maison – 3 variétés</h2>
        <p>
          Pâtes surgelées réalisées artisanalement à partir d’ingrédients locaux : 
          œufs frais plein air, farines sélectionnées et semoule de blé dur.
        </p>

        <h3>Variétés disponibles</h3>
        <ul>
          <li>Pâtes au <strong>seigle</strong></li>
          <li>Pâtes <strong>complètes</strong></li>
          <li>Pâtes <strong>aromette</strong></li>
        </ul>

        <h3>Ingrédients (recette de base)</h3>
        <ul>
          <li>4 kg farine (selon variété)</li>
          <li>1 kg semoule de blé dur</li>
          <li>1,4 kg œufs frais plein air</li>
          <li>400 g d’eau</li>
        </ul>

        <h3>Valeurs nutritionnelles (pour 100 g – produit surgelé)</h3>
        <ul>
          <li>Énergie : ~ 288 kcal</li>
          <li>Matières grasses : 3,5 g (dont saturées 1,1 g)</li>
          <li>Glucides : 55 g (dont sucres 2 g)</li>
          <li>Protéines : 11 g</li>
          <li>Sel : 0,01 g</li>
        </ul>

        <h3>Conservation</h3>
        <p>
          À conserver au congélateur (-18 °C). Ne pas recongeler après décongélation.
        </p>

        <h3>Cuisson</h3>
        <p>
          Eau bouillante salée : <strong>1 min 30</strong> sans décongélation.
        </p>

        <h3>Prix</h3>
        <p><strong>7,00 € / kg</strong></p>

        <h3>Allergènes</h3>
        <p>Contient : gluten (blé), œufs.</p>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        .container { font-family: Arial, sans-serif; padding: 0 20px 40px; background: #f9fbfa; }
        .gh-header { text-align: center; padding: 40px 20px; background: linear-gradient(120deg,#0bb57a,#2a7eea); color:#fff; border-radius:0 0 30px 30px; margin-bottom:30px; box-shadow:0 6px 20px rgba(0,0,0,.15); }
        .brand { margin:0; font-size:clamp(38px,7vw,64px); font-weight:900; letter-spacing:1px; }
        .tag { margin-top:8px; font-size:clamp(16px,2.5vw,20px); font-weight:500; }
        .card { background:#fff; border-radius:16px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,.08); }
        .card h2 { margin-top:0; color:#0a6b5a; }
        .card h3 { margin-top:20px; color:#2a7eea; }
        .card ul { margin:8px 0; padding-left:20px; }
        .card li { margin:4px 0; }
        .foot { text-align:center; margin-top:30px; font-size:14px; color:#6a737d; }
      `}</style>
    </main>
  );
}
