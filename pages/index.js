import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="gh-header">
        <h1 className="brand">GreenHouse</h1>
        <p className="tag">
          Traiteur artisanal — Des plats diététiques & gourmands, frais ou
          surgelés. Le bon plat, au bon prix.
        </p>
      </header>

      {/* SECTIONS */}
      <section className="cards">
        <article className="card">
          <h2>Plats surgelés</h2>
          <p>
            Une gamme de plats surgelés cuisinés artisanalement, pour préserver
            nutriments et saveurs. Conservation jusqu’à 4 mois.
          </p>
          <Link href="/plats-surgeles" className="btn">
            Voir les plats surgelés
          </Link>
        </article>

        <article className="card alt">
          <h2>Plats frais</h2>
          <p>
            Des plats frais, équilibrés, sous atmosphère modifiée pour garantir
            qualité et praticité. Conservation 5 jours au réfrigérateur.
          </p>
          <Link href="/plats-frais" className="btn">
            Voir les plats frais
          </Link>
        </article>

        <article className="card">
          <h2>Produits surgelés</h2>
          <p>
            Pâtes artisanales aux farines locales et falafels faits maison.
            Surgelés pour une conservation optimale et une cuisson rapide.
          </p>
          <Link href="/surgeles" className="btn">
            Voir les produits surgelés
          </Link>
        </article>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          padding: 0 20px 40px;
          background: #f9fbfa;
        }

        /* HEADER avec fond dégradé */
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

        /* SECTIONS */
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

        /* BOUTONS */
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

        /* FOOTER */
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
