// pages/plats-surgeles/index.js
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PlatsSurgeles() {
  const plats = [
    {
      id: "bolo",
      nom: "Pâtes bolognaise maison",
      desc: "Pâtes complètes artisanales, bœuf haché 5% MG et sauce tomate maison.",
      prix: "9,90 €",
    },
    {
      id: "poulet-poivron",
      nom: "Pâtes complètes, émincé de poulet & sauce poivron",
      desc: "Poulet tendre, julienne de légumes, sauce poivron maison.",
      prix: "9,90 €",
    },
    {
      id: "boeuf",
      nom: "Bœuf carottes & purée maison",
      desc: "Bœuf bourguignon maigre, carottes fondantes et purée légère.",
      prix: "9,90 €",
    },
    {
      id: "poulet-pommes-haricots",
      nom: "Poulet, pommes de terre rôties & haricots verts",
      desc: "Cuisse de poulet rôtie, pommes de terre au four et haricots verts.",
      prix: "9,90 €",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Flèche retour */}
      <Link href="/" className="back">
        <ArrowLeft size={20} style={{ marginRight: "6px" }} />
        Retour à l’accueil
      </Link>

      <h1 style={{ 
        fontSize: "2rem", 
        fontWeight: "bold", 
        background: "linear-gradient(to right, #16a34a, #2563eb)", 
        WebkitBackgroundClip: "text", 
        color: "transparent",
        margin: "10px 0"
      }}>
        GreenHouse
      </h1>

      <h2 style={{ marginBottom: "20px" }}>Plats surgelés</h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {plats.map((plat) => (
          <div
            key={plat.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{plat.nom}</h3>
            <p>{plat.desc}</p>
            <p style={{ fontWeight: "bold" }}>{plat.prix}</p>
            <Link href={`/plats-surgeles/${plat.id}`}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  background: "linear-gradient(to right, #16a34a, #2563eb)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Voir le plat
              </button>
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .back {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
        }
        .back:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
