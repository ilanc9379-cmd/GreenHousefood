import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800">
      {/* HEADER */}
      <header className="text-center py-10 shadow-md bg-white/80 backdrop-blur">
        <div className="flex justify-center">
          <Image
            src="/favicon.png"
            alt="Logo GreenHouse"
            width={88}
            height={88}
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold text-green-700 mt-4">
          GreenHouse
        </h1>
        <p className="text-xl mt-2 text-gray-600">
          Traiteur artisanal — Diététique & gourmand
        </p>
        <p className="mt-3 text-lg font-medium text-green-600">
          Le bon plat au bon prix — Diète ou gourmand, à vous de choisir
        </p>
      </header>

      {/* CONTENU */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Livraison */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Livraison
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-2xl shadow">
              <p className="font-semibold">Moins de 20 €</p>
              <p className="text-green-600">+5 €</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <p className="font-semibold">20 € – 39,99 €</p>
              <p className="text-green-600">+3 €</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <p className="font-semibold">Dès 40 €</p>
              <p className="text-green-600 font-bold">Gratuit</p>
            </div>
          </div>
        </section>

        {/* GAMMES */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Nos gammes</h2>

          {/* Diète surgelé */}
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Gamme Diète — Surgelé (9,90 €)
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Pâtes au seigle, poulet émincé, julienne de légumes, sauce allégée poivron",
              "Lasagnes viande hachée et légumes",
              "Pâtes complètes bolognaise et légumes",
              "Falafels patate douce & aubergine, sauce allégée",
              "Gratin de patates douces, viande hachée et légumes",
            ].map((plat, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="font-medium">{plat}</p>
              </div>
            ))}
          </div>

          {/* Diète frais */}
          <h3 className="text-2xl font-semibold text-green-600 mb-4">
            Gamme Diète — Frais (sur réservation, 24h avant)
          </h3>
          <p className="italic mb-4 text-gray-600">
            Même composition que la gamme surgelée — disponible en frais sur
            réservation
          </p>
        </section>

        {/* Gourmand frais */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Gamme Gourmand — Frais
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { plat: "Pâtes au seigle arrabiata", prix: "7 €" },
              { plat: "Pâtes complètes au gorgonzola", prix: "7 €" },
              { plat: "Pâtes au seigle sauce crème basilic", prix: "7 €" },
              { plat: "Pâtes complètes escalope à la crème", prix: "9 €" },
              { plat: "Pâtes complètes saumon à la crème", prix: "10 €" },
              { plat: "Lasagnes saumon & épinards", prix: "11 €" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="font-medium">{item.plat}</p>
                <p className="text-orange-600 font-bold">{item.prix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spécialités */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">
            Spécialités
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <p className="font-medium">Pâtes fraîches artisanales</p>
              <p className="text-purple-600">7 €/kg</p>
              <p className="text-sm text-gray-500">Cuisson 1m30</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <p className="font-medium">Falafels artisanaux (surgelés)</p>
              <p className="text-purple-600">10 €/kg</p>
              <p className="text-sm text-gray-500">
                3 min friteuse · 14 min airfryer
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <p className="font-medium">Wrap falafel légumes sauce Bibeleskäse</p>
              <p className="text-purple-600">9 €</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 mt-10 bg-white/80 backdrop-blur shadow-inner">
        <p className="text-gray-600">
          © 2025 GreenHouse — Traiteur artisanal diététique & gourmand
        </p>
      </footer>
    </div>
  );
}
