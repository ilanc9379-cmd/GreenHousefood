// pages/plats-surgeles/moussaka.js
import { useState } from "react";
import Link from "next/link";

export default function Moussaka() {
  const PRICE = 9.9;
  const [qty, setQty] = useState(1);
  const total = (PRICE * qty).toFixed(2).replace(".", ",");

  const fmt = (n) => String(n).replace(".", ",");

  return (
    <div style={st.page}>
      <header style={st.header}>
        <div style={st.headerInner}>
          <Link href="/plats-surgeles"><a style={st.back}>← Retour aux plats surgelés</a></Link>
          <h1 style={st.brand}>Greenhouse</h1>
          <p style={st.tagline}>Traiteur — Diététique & Gourmand</p>
        </div>
      </header>

      <main style={st.wrap}>
        {/* Colonne contenu (titre + description) */}
        <section style={st.content}>
          <h2 style={st.h2}>Moussaka revisitée</h2>

          <div style={st.badgesRow}>
            <span style={badge("Surgelé")}>Surgelé</span>
          </div>

          <p style={st.meta}>
            Portion : <strong>600 g</strong> · prêt en <strong>20 min</strong> au <em>four</em> ·
            <strong> 8 min</strong> au <em>micro-ondes</em> · <strong>10 min</strong> à la <em>poêle</em>.
            À conserver au congélateur (max 4 mois). Après décongélation : 48h au réfrigérateur.
          </p>

          <p style={st.blurb}>
            Une moussaka revisitée, plus légère mais toujours généreuse : des aubergines fondantes,
            une sauce tomate parfumée, du bœuf maigre et un riz complet pour la tenue.
            Couronnée d’un peu de fromage gratiné, c’est un plat réconfortant, équilibré et rassasiant.
          </p>

          {/* Ingrédients */}
          <div style={st.card}>
            <h3 style={st.h3}>Ingrédients</h3>
            <ul style={st.list}>
              <li><strong>150 g</strong> — Aubergines</li>
              <li><strong>150 g</strong> — Riz complet</li>
              <li><strong>150 g</strong> — Bœuf haché 5% MG</li>
              <li><strong>100 g</strong> — Tomates concassées</li>
              <li><strong>50 g</strong> — Fromage râpé</li>
              <li><strong>5 g</strong> — Huile d’olive</li>
              <li>Ail, oignon, herbes de Provence, paprika · Sel, poivre</li>
            </ul>
            <p style={st.allergens}><strong>Allergènes :</strong> lait (fromage).</p>
          </div>

          {/* Cuisson & conservation */}
          <div style={st.card}>
            <h3 style={st.h3}>Cuisson</h3>
            <ul style={st.list}>
              <li>Four <strong>150 °C</strong> : <strong>20 min</strong></li>
              <li>Micro-ondes : <strong>8 min</strong></li>
              <li>Poêle : <strong>10 min</strong></li>
            </ul>
            <h3 style={{...st.h3, marginTop: 16}}>Conservation</h3>
            <ul style={st.list}>
              <li>Conserver au congélateur : <strong>max 4 mois</strong></li>
              <li>Après décongélation : <strong>48h</strong> au réfrigérateur</li>
              <li>Ne pas recongeler un produit décongelé</li>
            </ul>
            <p style={st.note}>
              La surgélation préserve fraîcheur et qualités nutritionnelles : refroidir très vite
              évite la dégradation des nutriments et garde la texture.
            </p>
          </div>
        </section>

        {/* Colonne droite : prix + valeurs */}
        <aside style={st.sidebar}>
          <div style={st.priceCard}>
            <div style={st.priceLabel}>Prix unitaire</div>
            <div style={st.priceVal}>9,90 €</div>
            <div style={st.qtyRow}>
              <button aria-label="moins" onClick={() => setQty(Math.max(1, qty - 1))} style={st.qtyBtn}>−</button>
              <div style={st.qtyBox}>{qty}</div>
              <button aria-label="plus" onClick={() => setQty(qty + 1)} style={st.qtyBtn}>+</button>
            </div>
            <div style={st.total}>
              <div>Total ( {qty} {qty>1?"plats":"plat"} )</div>
              <div style={st.totalVal}>{total} €</div>
            </div>
            <button style={st.cta}>Commander</button>
          </div>

          <div style={st.card}>
            <h3 style={st.h3}>Valeurs nutritionnelles</h3>
            <table style={st.table}>
              <thead>
                <tr>
                  <th style={st.th}>Valeurs</th>
                  <th style={st.th}>Pour 100 g</th>
                  <th style={st.th}>Par portion</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={st.td}>Énergie</td><td style={st.td}>{fmt(150)} kcal</td><td style={st.td}>{fmt(900)} kcal</td></tr>
                <tr><td style={st.td}>Matières grasses</td><td style={st.td}>{fmt(5)} g</td><td style={st.td}>{fmt(30)} g</td></tr>
                <tr><td style={st.td}>Glucides</td><td style={st.td}>{fmt(15.8)} g</td><td style={st.td}>{fmt(95)} g</td></tr>
                <tr><td style={st.td}>Protéines</td><td style={st.td}>{fmt(9.2)} g</td><td style={st.td}>{fmt(55)} g</td></tr>
                <tr><td style={st.td}>Sel</td><td style={st.td}>—</td><td style={st.td}>—</td></tr>
              </tbody>
            </table>
          </div>
        </aside>
      </main>
    </div>
  );
}

/* Styles identiques à la bolo (avec fix pour le titre) */
const st = {
  page: { fontFamily:"Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif", color:"#0f172a", background:"#f7fafc" },
  header: {
    background:"linear-gradient(135deg,#22c55e,#3b82f6)",
    color:"#fff", padding:"28px 16px 22px", overflow:"visible"
  },
  headerInner:{ maxWidth:1100, margin:"0 auto" },
  back:{ display:"inline-block", marginBottom:8, color:"#eaffff", textDecoration:"none", fontWeight:700 },
  brand:{
    margin:"0 0 6px", lineHeight:1.05,
    fontWeight:900, fontSize:"clamp(36px,7vw,64px)", paddingRight:6,
    background:"linear-gradient(90deg,#ffffff,#dbeafe)", WebkitBackgroundClip:"text", color:"transparent",
    wordBreak:"keep-all"
  },
  tagline:{ margin:0, opacity:.95, fontWeight:600 },

  wrap:{ maxWidth:1100, margin:"20px auto 64px", padding:"0 16px",
         display:"grid", gridTemplateColumns:"1fr 340px", gap:16 },
  content:{ display:"grid", gap:16 },
  h2:{ margin:"8px 0 6px", fontSize:36, lineHeight:1.1, fontWeight:900 },
  badgesRow:{ display:"flex", gap:8, flexWrap:"wrap", margin:"6px 0 2px" },
  meta:{ color:"#334155", fontSize:16 },
  blurb:{ fontSize:18, lineHeight:1.55 },
  card:{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 8px 22px rgba(15,23,42,.08)" },
  cardSoft:{ background:"#f1f5f9", borderRadius:16, padding:16 },
  h3:{ margin:"0 0 10px", fontSize:18, fontWeight:800 },
  list:{ margin:0, paddingLeft:18, lineHeight:1.6 },
  allergens:{ marginTop:10, color:"#475569" },
  note:{ marginTop:12, color:"#334155" },

  sidebar:{ display:"grid", gap:16 },
  priceCard:{ background:"#fff", borderRadius:16, padding:16, boxShadow:"0 8px 22px rgba(15,23,42,.08)" },
  priceLabel:{ fontSize:12, textTransform:"uppercase", color:"#64748b", fontWeight:800 },
  priceVal:{ fontSize:34, fontWeight:900, marginTop:2 },
  qtyRow:{ display:"flex", alignItems:"center", gap:8, margin:"10px 0" },
  qtyBtn:{ width:44, height:44, borderRadius:12, border:"1px solid #e2e8f0", background:"#f8fafc", fontSize:22 },
  qtyBox:{ width:64, height:44, display:"flex", alignItems:"center", justifyContent:"center",
           borderRadius:12, border:"1px solid #e2e8f0", background:"#fff", fontWeight:800 },
  total:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:6, fontWeight:700 },
  totalVal:{ fontSize:22, fontWeight:900 },
  cta:{ width:"100%", marginTop:10, background:"linear-gradient(135deg,#22c55e,#3b82f6)", color:"#fff",
        border:"none", borderRadius:14, padding:"12px 16px", fontWeight:900, fontSize:16, boxShadow:"0 10px 24px rgba(59,130,246,.25)" },

  table:{ width:"100%", borderCollapse:"collapse", overflow:"hidden", borderRadius:12 },
  th:{ textAlign:"left", background:"#f1f5f9", padding:"10px 12px", borderBottom:"1px solid #e2e8f0", fontSize:14 },
  td:{ padding:"10px 12px", borderBottom:"1px solid #eef2f7", fontSize:14 }
};

function badge(label){
  const m = { "Surgelé": {bg:"#e6f7f1", fg:"#0c7a5f"} };
  const {bg, fg} = m[label] || {bg:"#f1f5f9", fg:"#0f172a"};
  return { background:bg, color:fg, borderRadius:999, padding:"6px 10px", fontWeight:800, fontSize:12 };
}
