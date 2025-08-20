
# GreenHousefood (Vite + React + Tailwind)

Site vitrine + panier avec livraison (barème Mulhouse) et retrait au dépôt.
Paiement : bouton de démonstration (prévu pour Stripe).

## Scripts
- `npm install`
- `npm run dev`     # dev local
- `npm run build`   # build de prod (dossier `dist/`)

## Déploiement Vercel
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Stripe (à brancher plus tard)
- Backend: créer une route qui génère une PaymentIntent (EUR).
- Front: utiliser Stripe Elements pour confirmer le paiement.
