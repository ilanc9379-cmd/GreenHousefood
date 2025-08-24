// pages/plats/[slug].js
import Head from "next/head";
import Link from "next/link";

// ========
// Données
// ========
const PLATS = [
  // 1) Bolognaise — tes chiffres validés
  {
    slug: "bolo",
    nom: "Pâtes Bolognaise maison",
    surgele: true,
    conservation: "À conserver au congélateur (max 4 mois) ou 48 h au réfrigérateur.",
    portionGrams: 600, // 200 pâtes + 150 bœuf + 150 carottes + 100 sauce
    prix: 9.9,
    chauffes: {
      four: "20 min à 160 °C (plat couvert)",
      micro: "8 min à 800 W (remuer à mi-temps)",
      poele: "10 min à feu moyen",
    },
    // Ingrédients — sans “au goût” et sans ligne isolée “sel 3 g”
    ingredients: [
      "Pâtes artisanales au seigle (œufs plein air) — 200 g",
      "Bœuf haché 5% MG — 150 g",
      "Carottes — 150 g",
      "Sauce tomate — 100 g",
      "Herbes & aromates (ail, poivre, basilic, sel)",
    ],
    // Valeurs nutritionnelles (tes chiffres)
    nutri: {
      portion: {
        kcal: 700,
        lipides: 15.8,
        ags: +(15.8 * 0.34).toFixed(1), // ≈ 1/3 des lipides
        glucides: 89,
        sucres: 11,
        proteines: 54.3,
        sel: 3,
        poids: 600,
      },
      per100: {
        kcal: +(700 / 6).toFixed(1), // ≈ 116.7
        lipides: +(15.8 / 6).toFixed(1), // ≈ 2.6
        ags: +((15.8 * 0.34) / 6).toFixed(1), // ≈ 0.9
        glucides: +(89 / 6).toFixed(1), // ≈ 14.8
        sucres: +(11 / 6).toFixed(1), // ≈ 1.8
        proteines: +(54.3 / 6).toFixed(1), // ≈ 9.1
        sel: +(3 / 6).toFixed(1), // 0.5
      },
    },
  },

  // 2) Pâtes poulet sauce poivron — surgelé, prix validé
  //    Nutriments à compléter quand tu me les donnes : la fiche s’affiche quand même.
  {
    slug: "pates-poulet-poivron",
    nom: "Pâtes, émincé de poulet, julienne de légumes — sauce poivron",
    surgele: true,
    conservation: "À conserver au congélateur (max 4 mois) ou 48 h au réfrigérateur.",
    portionGrams: 600,
    prix: 9.9,
    chauffes: {
      four: "20 min à 160 °C (plat couvert)",
      micro: "8 min à 800 W (remuer à mi-temps)",
      poele: "10 min à feu moyen",
    },
    ingredients: [
      "Pâtes complètes — 200 g",
      "Émincé de poulet — 180 g",
      "Julienne de légumes — 140 g",
      "Sauce poivron (poivron, aromates, ail, oignon, sel, poivre) — 80 g",
    ],
    nutri: null, // <= mets les chiffres ici quand prêts (voir structure ci-dessus)
  },

  // 3) Bœuf carottes & purée — surgelé
  //    Tu m’as demandé le titre “Bœuf carottes & purée maison” (bourguignon maigre)
  //    et d’afficher pour 1 portion + 100 g. Chiffres provisoires (à ajuster si besoin).
  {
    slug: "boeuf",
    nom: "Bœuf carottes & purée maison",
    surgele: true,
    conservation: "À conserver au congélateur (max 4 mois) ou 48 h au réfrigérateur.",
    portionGrams: 500, // 200 viande + 150 carottes + 150 purée
    prix: 9.9,
    chauffes: {
      four: "20 min à 160 °C (plat couvert)",
      micro: "8–9 min à 800 W (remuer à mi-temps)",
      poele: "10–12 min à feu moyen",
    },
    ingredients: [
      "Bœuf (morceaux maigres) — 200 g",
      "Carottes — 150 g",
      "Purée de pommes de terre — 150 g",
      "Aromates (ail, oignon, herbes), sel, poivre",
    ],
    // Valeurs estimatives cohérentes (+/−) — donne-moi tes chiffres officiels pour les figer.
    nutri: {
      portion: {
        kcal: 620,
        lipides: 20,
        ags: 7,
        glucides: 58,
        sucres: 10,
        proteines: 44,
        sel: 2.2,
        poids: 500,
      },
      per100: {
        kcal: 124,
        lipides: 4.0,
        ags: 1.4,
        glucides: 11.6,
        sucres: 2.0,
        proteines: 8.8,
        sel: 0.44,
      },
    },
  },
];

// ============
// Page Plat
// ============
export default function PlatPage({ plat }) {
  if (!plat) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600">Plat introuvable.</p>
        <Link
          href="/"
          className="inline-block mt-4 rounded-lg bg-slate-900 text-white px-4 py-2"
        >
          Retour à l’accueil
        </Link>
      </div>
    );
  }

  // Helpers d’affichage
  const nf = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  });

  const hasNutri = !!plat.nutri;

  return (
    <>
      <Head>
        <title>{plat.nom} — Greenhouse</title>
        <meta
          name="description"
          content={`${plat.nom} — plat ${plat.surgele ? "surgelé" : ""} par Greenhouse.`}
        />
      </Head>

      <div className="space-y-8">
        {/* En-tête + badges */}
        <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600">
              {plat.nom}
            </h1>
            <p className="text-slate-600">
              Portion&nbsp;: {plat.portionGrams} g · prêt en{" "}
              <span className="font-medium">
                {plat.chauffes.four}
              </span>
              {" · "}
              <span className="font-medium">{plat.chauffes.micro}</span>
              {" · "}
              <span className="font-medium">{plat.chauffes.poele}</span>
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {plat.surgele && (
                <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1">
                  Surgelé
                </span>
              )}
              <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1">
                Conservation
              </span>
              <span className="text-slate-600 text-sm">{plat.conservation}</span>
            </div>
          </div>

          <div className="shrink-0 rounded-2xl bg-white shadow p-5 w-full md:w-72">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
              Prix unitaire
            </div>
            <div className="text-3xl font-bold">{nf.format(plat.prix)}</div>
            <Link
              href="/"
              className="mt-4 block text-center rounded-xl bg-slate-900 text-white py-3 font-medium hover:bg-slate-800 active:scale-[0.99]"
            >
              Commander
            </Link>
          </div>
        </header>

        {/* Grille : ingrédients / nutrition côte à côte */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Ingrédients */}
          <div className="rounded-2xl bg-white shadow p-5">
            <h2 className="text-xl font-semibold mb-3">Ingrédients</h2>
            <ul className="space-y-2">
              {plat.ingredients.map((txt, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2"
                >
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Valeurs nutritionnelles */}
          <div className="rounded-2xl bg-white shadow p-5">
            <h2 className="text-xl font-semibold mb-3">Valeurs nutritionnelles</h2>

            {!hasNutri && (
              <p className="text-slate-600">
                Les valeurs seront ajoutées très bientôt pour ce plat.
              </p>
            )}

            {hasNutri && (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-slate-700">
                      <th className="p-3">Valeurs</th>
                      <th className="p-3">Pour 100 g</th>
                      <th className="p-3">
                        Par portion ({plat.nutri.portion.poids} g)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr>td]:p-3">
                    <tr className="border-t">
                      <td>Énergie</td>
                      <td>{plat.nutri.per100.kcal} kcal</td>
                      <td>{plat.nutri.portion.kcal} kcal</td>
                    </tr>
                    <tr className="border-t">
                      <td>Matières grasses</td>
                      <td>{plat.nutri.per100.lipides} g</td>
                      <td>{plat.nutri.portion.lipides} g</td>
                    </tr>
                    <tr>
                      <td className="pl-6 text-slate-600">dont acides gras saturés</td>
                      <td>{plat.nutri.per100.ags} g</td>
                      <td>{plat.nutri.portion.ags} g</td>
                    </tr>
                    <tr className="border-t">
                      <td>Glucides</td>
                      <td>{plat.nutri.per100.glucides} g</td>
                      <td>{plat.nutri.portion.glucides} g</td>
                    </tr>
                    <tr>
                      <td className="pl-6 text-slate-600">dont sucres</td>
                      <td>{plat.nutri.per100.sucres} g</td>
                      <td>{plat.nutri.portion.sucres} g</td>
                    </tr>
                    <tr className="border-t">
                      <td>Protéines</td>
                      <td>{plat.nutri.per100.proteines} g</td>
                      <td>{plat.nutri.portion.proteines} g</td>
                    </tr>
                    <tr className="border-t">
                      <td>Sel</td>
                      <td>{plat.nutri.per100.sel} g</td>
                      <td>{plat.nutri.portion.sel} g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Lien retour */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700"
          >
            ← Retour à la vitrine
          </Link>
        </div>
      </div>
    </>
  );
}

// ====================
// SSG (pages router)
// ====================
export async function getStaticPaths() {
  const paths = PLATS.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const plat = PLATS.find((p) => p.slug === params.slug) || null;
  return { props: { plat } };
}
