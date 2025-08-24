import Link from "next/link";

export default function Home() {
  const plats = [
    {
      slug: "bolo",
      nom: "Pâtes Bolognaise maison",
      desc: "Une bolognaise authentique avec pâtes au seigle artisanales.",
    },
    {
      slug: "pates-poulet-poivron",
      nom: "Pâtes émincé poulet & sauce poivron",
      desc: "Poulet tendre, sauce poivron maison et julienne de légumes.",
    },
    {
      slug: "boeuf",
      nom: "Bœuf carottes & purée maison",
      desc: "Bœuf bourguignon maigre, carottes fondantes et purée légère.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Introduction */}
      <section className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-slate-700">
          Nos plats maison surgelés
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Des plats cuisinés avec soin en Alsace, prêts à déguster. Surgelés
          pour préserver toutes leurs qualités, livrés directement chez vous.
        </p>
      </section>

      {/* Liste des plats */}
      <section className="grid md:grid-cols-3 gap-6">
        {plats.map((plat) => (
          <div
            key={plat.slug}
            className="rounded-2xl bg-white shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{plat.nom}</h3>
              <p className="text-slate-600 text-sm">{plat.desc}</p>
              <Link
                href={`/plats/${plat.slug}`}
                className="inline-block mt-2 rounded-lg bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700"
              >
                Voir le plat
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
