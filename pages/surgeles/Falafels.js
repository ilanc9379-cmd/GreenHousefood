export default function Falafels() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">Falafels artisanaux surgelés</p>
      </header>

      {/* CONTENU */}
      <section className="card">
        <h2>Falafels maison</h2>
        <p>
          Pois chiches réhydratés (env. 83%), oignons, herbes fraîches (persil, coriandre),
          ail frais, graines de sésame, épices (cumin, ras el hanout), sel, levure.
        </p>

        <h3>Valeurs nutritionnelles (pour 100 g)</h3>
        <ul>
          <li>Énergie : 184 kcal (769 kJ)</li>
          <li>Matières grasses : 7,4 g (dont acides saturés 0,8 g)</li>
          <li>Glucides : 20,1 g (dont sucres 1,1 g)</li>
          <li>Fibres alimentaires : 5,3 g</li>
          <li>Protéines : 7,6 g</li>
          <li>Sel : 1,1 g</li>
        </ul>

        <h3>Conservation</h3>
        <p>
          À conserver au congélateur (-18 °C). Ne pas recongeler après décongélation.
        </p>

        <h3>Cuisson</h3>
        <ul>
          <li>Friteuse (180 °C) : 3 min sans décongélation</li>
          <li>Airfryer : 15 min sans décongélation</li>
          <li>Four (180 °C) : 9 min sans décongélation</li>
        </ul>

        <h3>Prix</h3>
        <p><strong>10,00 € / kg</strong></p>

        <h3>Allergènes</h3>
        <p>
          Contient : sésame. Peut contenir des traces de gluten, fruits à coque, moutarde.
        </p>
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
