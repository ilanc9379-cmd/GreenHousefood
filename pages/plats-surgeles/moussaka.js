// pages/plats-surgeles/moussaka.js
import Link from "next/link";

export default function Moussaka() {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.heroInner}>
          <Link href="/plats-surgeles">
            <a style={styles.back}>← Retour</a>
          </Link>
          <h1 style={styles.brand}>GreenHouse</h1>
          <h2 style={styles.title}>Moussaka revisitée</h2>
          <p style={styles.subtitle}>
            Plat surgelé — prêt à réchauffer · Portion 600 g
          </p>
          <p style={styles.blurb}>
            Une moussaka revisitée, plus légère mais toujours généreuse : 
            des aubergines fondantes, une sauce tomate parfumée, du bœuf maigre 
            et un riz complet pour la tenue. Couronnée d’un peu de fromage gratiné, 
            c’est un plat réconfortant, équilibré et rassasiant.
          </p>
        </div>
      </header>

      <main style={styles.container}>
        {/* Bloc gauche prix + conservation */}
        <aside style={styles.sidebar}>
          <div style={styles.card}>
            <div style={styles.label}>Prix unitaire</div>
            <div style={styles.price}>9,90 €</div>
            <div style={styles.portion}>600 g</div>
            <a href="#" style={styles.cta}>Commander</a>
          </div>

          <div style={styles.card}>
            <div style={styles.label}>Réchauffage</div>
            <ul style={styles.list}>
              <li>Four 150°C : 20 min</li>
              <li>Micro-ondes : 8 min</li>
              <li>Poêle : 10 min</li>
            </ul>
          </div>

          <div style={styles.cardInfo}>
            <div style={styles.label}>Conservation</div>
            <p>À conserver au congélateur (-18°C) max 4 mois. 
            Après décongélation : 48 h au réfrigérateur.</p>
          </div>
        </aside>

        {/* Bloc droit ingrédients + valeurs */}
        <section style={styles.mainCols}>
          <div style={styles.cardBig}>
            <h3 style={styles.h3}>Ingrédients</h3>
            <ul style={styles.ingredients}>
              <li style={styles.ingRow}><span>Aubergines</span><span>150 g</span></li>
              <li style={styles.ingRow}><span>Riz complet</span><span>150 g</span></li>
              <li style={styles.ingRow}><span>Bœuf haché 5% MG</span><span>150 g</span></li>
              <li style={styles.ingRow}><span>Tomates concassées</span><span>100 g</span></li>
              <li style={styles.ingRow}><span>Fromage râpé</span><span>50 g</span></li>
              <li style={styles.ingRow}><span>Huile d’olive</span><span>5 g</span></li>
              <li style={styles.ingRow}><span>Ail, oignon, herbes, paprika</span></li>
              <li style={styles.ingRow}><span>Sel, poivre</span></li>
            </ul>
            <p style={styles.allergens}>
              <strong>Allergènes :</strong> lait (fromage).
            </p>
          </div>

          <div style={styles.cardBig}>
            <h3 style={styles.h3}>Valeurs nutritionnelles</h3>
            <div style={styles.macros}>
              <span style={styles.mChip}>⚡ 900 kcal/portion</span>
              <span style={styles.mChip}>🥩 55 g protéines</span>
              <span style={styles.mChip}>🍝 95 g glucides</span>
              <span style={styles.mChip}>🫒 30 g lipides</span>
            </div>
            <table style={styles.table}>
              <thead>
                <tr><th>Valeur</th><th>Pour 100 g</th><th>Par portion</th></tr>
              </thead>
              <tbody>
                <tr><td>Énergie</td><td>150 kcal</td><td>900 kcal</td></tr>
                <tr><td>Protéines</td><td>9,2 g</td><td>55 g</td></tr>
                <tr><td>Glucides</td><td>15,8 g</td><td>95 g</td></tr>
                <tr><td>Lipides</td><td>5 g</td><td>30 g</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Styles inline */
const styles = {
  page: { fontFamily:"Inter,sans-serif", color:"#0f172a", background:"#f7fafc", minHeight:"100vh" },
  hero: { background:"linear-gradient(120deg,#22c55e,#60a5fa)", color:"white", padding:"32px 16px" },
  heroInner:{ maxWidth:1100, margin:"0 auto" },
  back:{ display:"inline-block", marginBottom:10, color:"white", textDecoration:"none", fontWeight:600 },
  brand:{ margin:"0 0 10px", fontSize:40, fontWeight:900,
    background:"linear-gradient(90deg,#fff,#dbeafe)",WebkitBackgroundClip:"text",color:"transparent" },
  title:{ margin:0, fontSize:28, fontWeight:800 },
  subtitle:{ margin:"6px 0 0", fontWeight:600 },
  blurb:{ marginTop:10, maxWidth:800, fontSize:16, lineHeight:1.5 },

  container:{ maxWidth:1100, margin:"24px auto", padding:"0 16px", display:"grid", gridTemplateColumns:"300px 1fr", gap:16 },
  sidebar:{ display:"grid", gap:16 },
  card:{ background:"white", borderRadius:16, padding:16, boxShadow:"0 6px 16px rgba(0,0,0,.08)" },
  cardInfo:{ background:"#ecfeff", borderRadius:16, padding:16, boxShadow:"0 6px 16px rgba(8,145,178,.15)" },
  label:{ fontSize:12, fontWeight:700, textTransform:"uppercase", marginBottom:6, color:"#64748b" },
  price:{ fontSize:28, fontWeight:900 },
  portion:{ marginTop:6, fontWeight:600, color:"#334155" },
  cta:{ display:"inline-block", marginTop:12, background:"linear-gradient(135deg,#22c55e,#3b82f6)", color:"white", padding:"10px 14px", borderRadius:12, fontWeight:800, textDecoration:"none" },
  cardBig:{ background:"white", borderRadius:16, padding:16, boxShadow:"0 6px 16px rgba(0,0,0,.08)" },
  h3:{ margin:"0 0 12px", fontSize:18, fontWeight:800 },
  ingredients:{ listStyle:"none", padding:0, margin:0, display:"grid", gap:8 },
  ingRow:{ display:"flex", justifyContent:"space-between", background:"#f8fafc", padding:"8px 12px", borderRadius:8 },
  allergens:{ marginTop:10, color:"#475569" },
  macros:{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:10 },
  mChip:{ background:"#eef2ff", borderRadius:999, padding:"6px 10px", fontWeight:700, fontSize:12 },
  table:{ width:"100%", borderCollapse:"collapse" },
};
