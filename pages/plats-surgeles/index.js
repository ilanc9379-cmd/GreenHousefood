import Link from "next/link";

export default function PlatsSurgeles() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">Plats surgelés — Équilibrés, gourmands et pratiques</p>
      </header>

      {/* LISTE DES PLATS */}
      <section className="cards">
        <article className="card">
          <h2>Pâtes bolognaise maison</h2>
          <p>Pâtes complètes artisanales, sauce tomate maison, bœuf maigre 5% MG.</p>
          <Link href="/plats-surgeles/bolo" className="btn">
            Voir le plat
          </Link>
        </article>

        <article className="card alt">
          <h2>Pâtes émincé poulet & poivron</h2>
          <p>Pâtes complètes artisanales, sauce poivron maison, émincé de poulet tendre.</p>
          <Link href="/plats-surgeles/poulet-poivron" className="btn">
            Voir le plat
          </Link>
        </article>

        <article className="card">
          <h2>Bœuf carottes & purée</h2>
          <p>Bœuf bourguignon maigre, carottes fondantes et purée légère.</p>
          <Link href="/plats-surgeles/boeuf" className="btn">
            Voir le plat
          </Link>
        </article>

        <article className="card alt">
          <h2>Pommes de terre rôties, cuisse de poulet & haricots verts</h2>
          <p>Cuisse de poulet, pommes de terre rôties au four et haricots verts frais.</p>
          <Link href="/plats-surgeles/poulet-pommes-haricots" className="btn">
            Voir le plat
          </Link>
        </article>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          padding: 0 20px 40px;
          background: #f9fbfa;
        }

        .gh-header {
          text-align: center;
          padding: 50px 20px;
          background: linear-gradient(120deg, #0bb57a, #2a7eea);
          color: white;
          border-radius: 0 0 30px 30px;
          margin-bottom: 40px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        .brand {
          margin: 0;
          font-size: clamp(42px, 8vw, 70px);
          font-weight: 900;
          letter-spacing: 1px;
        }
        .tag {
          margin-top: 10px;
          font-size: clamp(16px, 2.5vw, 22px);
          font-weight: 500;
        }

        .cards {
          display: grid;
          gap: 24px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card.alt {
          background: #eef9f4;
        }
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        .card h2 {
          margin: 0 0 8px;
          font-size: 22px;
          color: #0a6b5a;
        }
        .card p {
          color: #3c4a57;
          margin-bottom: 14px;
        }

        .btn {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 12px;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(90deg, #0bb57a, #2a7eea);
          box-shadow: 0 4px 12px rgba(42, 126, 234, 0.3);
          transition: all 0.25s ease;
        }
        .btn:hover {
          filter: brightness(1.1);
          box-shadow: 0 6px 18px rgba(11, 181, 122, 0.35);
        }

        .foot {
          text-align: center;
          margin-top: 40px;
          font-size: 14px;
          color: #6a737d;
        }
      `}</style>
    </main>
  );
}
