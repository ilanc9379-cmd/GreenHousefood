"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-200 via-emerald-100 to-cyan-200 p-8">
      {/* Titre principal */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-500 text-transparent bg-clip-text drop-shadow-lg">
        GreenHouse
      </h1>
      <p className="text-center text-xl text-gray-700 mb-12">
        Traiteur — Diététique & Gourmand <br />
        Des plats maison équilibrés, cuisinés avec soin et surgelés pour
        préserver toutes leurs qualités.
      </p>

      {/* Section vitrine plats */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Plat Bolognaise */}
        <div className="rounded-2xl shadow-lg bg-white p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">Pâtes Bolognaise maison</h2>
          <p className="text-gray-600 mb-4">
            Une bolognaise authentique avec pâtes au seigle artisanales.
          </p>
          <Link
            href="/plats/bolo"
            className="inline-block px-4 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600"
          >
            Voir le plat
          </Link>
        </div>

        {/* Plat Poulet poivron */}
        <div className="rounded-2xl shadow-lg bg-white p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">
            Pâtes émincé poulet & sauce poivron
          </h2>
          <p className="text-gray-600 mb-4">
            Poulet tendre, sauce poivron maison et julienne de légumes.
          </p>
          <Link
            href="/plats/poulet-poivron"
            className="inline-block px-4 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600"
          >
            Voir le plat
          </Link>
        </div>

        {/* Plat Bœuf carottes purée */}
        <div className="rounded-2xl shadow-lg bg-white p-6 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-2">
            Bœuf carottes & purée maison
          </h2>
          <p className="text-gray-600 mb-4">
            Bœuf bourguignon maigre, carottes fondantes et purée légère.
          </p>
          <Link
            href="/plats/boeuf-carottes-puree"
            className="inline-block px-4 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600"
          >
            Voir le plat
          </Link>
        </div>
      </section>
    </main>
  );
}
