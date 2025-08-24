import "@/styles/globals.css"; // importe les styles globaux
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GreenHouse Food</title>
        <meta
          name="description"
          content="GreenHouse — Traiteur diététique & gourmand : des plats maison équilibrés et surgelés pour préserver toutes leurs qualités."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Layout global */}
      <div className="min-h-screen flex flex-col">
        {/* Header global */}
        <header className="py-6 text-center">
          <h1 className="text-5xl font-extrabold gh-gradient-title">GreenHouse</h1>
          <p className="mt-2 text-lg text-slate-600">
            Traiteur — <span className="font-semibold">Diététique & Gourmand</span>
          </p>
        </header>

        {/* Contenu des pages */}
        <main className="flex-1 container-narrow">
          <Component {...pageProps} />
        </main>

        {/* Footer global */}
        <footer className="py-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} GreenHouse — Tous droits réservés.
        </footer>
      </div>
    </>
  );
}
