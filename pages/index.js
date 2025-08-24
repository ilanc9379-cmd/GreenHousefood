import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ 
        fontSize: "3rem", 
        background: "linear-gradient(to right, #00b09b, #96c93d)", 
        WebkitBackgroundClip: "text", 
        color: "transparent" 
      }}>
        GreenHouse
      </h1>
      <h2>Traiteur — Diététique & Gourmand</h2>
      <p>
        Des plats maison équilibrés, cuisinés avec soin et surgelés pour préserver toutes leurs qualités.
      </p>

      <ul>
        <li>
          <Link href="/plats/bolo">Pâtes Bolognaise maison</Link>
        </li>
        <li>
          <Link href="/plats/pates-poulet-poivron">Pâtes émincé poulet & sauce poivron</Link>
        </li>
        <li>
          <Link href="/plats/boeuf">Bœuf carottes & purée maison</Link>
        </li>
      </ul>
    </div>
  );
}
