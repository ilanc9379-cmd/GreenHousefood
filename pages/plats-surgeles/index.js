import Link from "next/link";

export default function PlatsSurgeles() {
  const plats = [
    {
      slug: "bolo",
      titre: "Pâtes bolognaise maison",
      desc: "Pâtes complètes artisanales, bœuf haché maigre, sauce tomate maison.",
      prix: "9,90 €",
    },
    {
      slug: "boeuf",
      titre: "Bœuf carottes & purée",
      desc: "Bœuf bourguignon maigre, carottes fondantes, purée maison légère.",
      prix: "9,90 €",
    },
    {
      slug: "poulet-poivron",
      titre: "Pâtes complètes, émincé de poulet, sauce poivron maison",
      desc: "Poulet tendre, pâtes complètes artisanales, sauce poivron maison.",
      prix: "9,90 €",
    },
    {
      slug: "poulet-pommes-haricots",
      titre: "Cuisse de poulet rôtie, pommes de terre & haricots verts",
      desc: "Plat complet, équilibré et savoureux.",
      prix: "9,90 €",
    },
  ];

  return (
    <main className="container">
      {/* HEADER DIRECTEMENT DANS LA PAGE */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">
          Plats surgelés — fraîcheur & nutriments préservés, praticité au quotidien.
        </p>
      </header>

      <section className="grid">
        {plats.map((plat) => (
          <article key={plat.slug} className="card">
            <h2>{plat.titre}</h2>
            <p>{plat.desc}</p>
            <p className="prix">{plat.prix}</p>
            <Link href={`/plats-surgeles/${plat.slug}`}>Voir le plat</Link>
          </article>
        ))}
      </section>

      <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .gh-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .brand {
          margin: 0;
          font-weight: 900;
          font-size: clamp(36px, 7vw, 56px);
          line-height: 0.95;
          letter-spacing: 0.5px;
          background: linear-gradient(90deg, #0bb57a, #2a7eea);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tag {
          margin-top: 6px;
          color: #3c4a57;
          font-weight: 600;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }
        .card {
          border: 1px solid #ddd;
          padding: 16px;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        .prix {
          font-weight: bold;
          color: #0a6b5a;
        }
        a {
          display: inline-block;
          margin-top: 8px;
          color: #0a6b5a;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </main>
  );
}
