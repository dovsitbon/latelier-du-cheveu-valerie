# L'atelier du cheveu by Valérie : site vitrine

Site statique Astro 7 + Tailwind 4. Polices auto-hébergées (Cormorant Garamond, Manrope), aucun traceur.

## Lancer en local
```
npm install
npm run dev          # http://localhost:4321
npm run build        # génère dist/
npm run preview      # http://localhost:4408
npm run captures     # captures 390 px et 1440 px dans captures/ (après build)
npm run og           # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Projet Vercel importé depuis le dépôt Git : chaque push sur `main` redéploie. Aucune variable d'environnement.
Après branchement d'un domaine définitif, changer l'URL dans `src/data/url.mjs` (canonical, sitemap, robots, JSON-LD suivent).

## Où changer quoi
- **Nom, adresse, téléphone, liens Planity / Instagram, notes, horaires, avis** : `src/data/site.ts`.
  Horaires : tableau `HORAIRES` (le lundi est marqué `aConfirmer`). Le statut « Ouvert / Fermé » et le JSON-LD se mettent à jour seuls.
- **Prestations et tarifs** : `src/data/prestations.json` (remplacer `[À CONFIRMER]` par le prix).
- **Textes de l'accueil** : `src/pages/index.astro`. Mentions légales : `src/pages/mentions-legales.astro`.
- **Photos** : déposer les fichiers dans `src/assets/`, puis passer `src={import}` au composant `<Photo>` (portrait, salon)
  ou `avantSrc` / `apresSrc` au composant `<Comparateur>` (avant / après). Conversion AVIF/WebP automatique.
  Liste des clichés à faire : `PHOTOS_A_PRENDRE.md`.
- Tout ce qui reste à vérifier : `A_COMPLETER.md`.
