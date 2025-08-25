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
      <section className="grid">
        <article className="card">
          <h2>Plats surgelés</h2>
          <p>
            Une gamme de plats surgelés cuisinés artisanalement, pour préserver
            nutriments et saveurs. Conservation jusqu’à 4 mois.
          </p>
          <Link href="/plats-surgeles">Voir les plats surgelés</Link>
        </article>

        <article className="card">
          <h2>Plats frais</h2>
          <p>
            Des plats frais, équilibrés, sous atmosphère modifiée pour garantir
            qualité et praticité. Conservation 5 jours au réfrigérateur.
          </p>
          <Link href="/plats-frais">Voir les plats frais</Link>
        </article>

        <article className="card">
          <h2>Produits surgelés</h2>
          <p>
            Pâtes artisanales aux farines locales et falafels faits maison.
            Surgelés pour une conservation optimale et une cuisson express.
          </p>
          <Link href="/surgeles">Voir les produits surgelés</Link>
        </article>
      </section>

      <footer className="foot">
        <p>© {new Date().getFullYear()} GreenHouse — Traiteur artisanal</p>
      </footer>

      <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .gh-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .brand {
          margin: 0;
          font-weight: 900;
          font-size: clamp(40px, 7vw, 64px);
          line-height: 0.95;
          letter-spacing: 0.5px;
          background: linear-gradient(90deg, #0bb57a, #2a7eea);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tag {
          margin-top: 10px;
          color: #3c4a57;
          font-weight: 600;
          font-size: clamp(16px, 2.5vw, 22px);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }
        .card h2 {
          margin-top: 0;
          color: #0a6b5a;
        }
        a {
          display: inline-block;
          margin-top: 12px;
          color: #0a6b5a;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
        .foot {
          text-align: center;
          margin-top: 40px;
          color: #6a737d;
          font-size: 14px;
        }
      `}</style>
    </main>
  );
}
