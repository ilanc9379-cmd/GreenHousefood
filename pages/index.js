export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #1b4332, #081c15)",
        color: "#fff",
        minHeight: "100vh",
        margin: 0,
        padding: "20px",
      }}
    >
      <header style={{ textAlign: "center", padding: "40px 0" }}>
        <h1 style={{ fontSize: "3rem", margin: "0", color: "#95d5b2" }}>
          GreenHouse
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#d8f3dc" }}>
          Traiteur artisanal – Diététique & Gourmand
        </p>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        <div style={{ background: "#2d6a4f", borderRadius: "12px", padding: "20px" }}>
          <h2>Pâtes complètes saumon crème</h2>
          <p>Saumon · crème · aneth · ail.</p>
          <p><strong>Prix : 10,00 €</strong></p>
          <p>Calories : ~760 kcal · Protéines : ~35 g · Glucides : ~82 g · Lipides : ~28 g</p>
        </div>

        <div style={{ background: "#40916c", borderRadius: "12px", padding: "20px" }}>
          <h2>Lasagnes saumon & épinards</h2>
          <p>Saumon · épinards · béchamel · fromage râpé.</p>
          <p><strong>Prix : 11,00 €</strong></p>
          <p>Calories : ~820 kcal · Protéines : ~40 g · Glucides : ~74 g · Lipides : ~40 g</p>
        </div>

        <div style={{ background: "#2d6a4f", borderRadius: "12px", padding: "20px" }}>
          <h2>Wrap falafel & crudités</h2>
          <p>Galette complète 100 g · falafels 150 g · crudités · sauce au fromage blanc alsacien.</p>
          <p><strong>Prix : 9,00 €</strong></p>
          <p>Calories : ~680 kcal · Protéines : ~26 g · Glucides : ~86 g · Lipides : ~22 g</p>
        </div>

        <div style={{ background: "#40916c", borderRadius: "12px", padding: "20px" }}>
          <h2>Pâtes poulet sauce légère</h2>
          <p>Poulet · sauce légère · champignons · oignons.</p>
          <p><strong>Prix : 9,00 €</strong></p>
          <p>Calories : ~780 kcal · Protéines : ~42 g · Glucides : ~84 g · Lipides : ~28 g</p>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "40px 0", color: "#b7e4c7" }}>
        <p>© 2025 GreenHouse — Le bon plat au bon prix</p>
      </footer>
    </div>
  );
}
