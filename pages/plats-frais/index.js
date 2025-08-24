// pages/plats-frais/index.js
import Head from "next/head";
import Link from "next/link";

export default function PlatsFrais() {
  return (
    <>
      <Head>
        <title>Plats frais — GreenHouse</title>
        <meta name="description" content="Liste des plats frais GreenHouse (à venir)." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="wrap">
        <header className="hdr">
          <h1>Plats frais</h1>
          <p>Gamme fraîche sous atmosphère modifiée — pour une meilleure conservation et une qualité constante. (Bientôt)</p>
        </header>

        <section className="placeholder">
          <div className="card">
            <p>La liste détaillée des plats frais arrive très bientôt.</p>
          </div>
        </section>

        <p className="back">
          <Link href="/">← Retour à l’accueil</Link>
        </p>
      </main>

      <style jsx>{`
        .wrap { max-width: 1000px; margin: 0 auto; padding: 28px 20px 60px; }
        .hdr h1 { margin: 0; font-size: clamp(28px, 4.5vw, 48px);
          background: linear-gradient(90deg, #0aa64c, #2d7ae6);
          -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hdr p { margin: 6px 0 16px; color: #5b6475; }
        .placeholder .card { background: white; border-radius: 14px; padding: 18px; border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 8px 26px rgba(0,0,0,0.06); }
        .back { margin-top: 20px; }
      `}</style>
    </>
  );
}
