export const metadata = {
  title: "Greenhouse — Traiteur | Diète ou Gourmand",
  description: "Traiteur Greenhouse : diète ou gourmand, des plats frais, équilibrés et savoureux."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
