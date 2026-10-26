# Prompt Claude Code : site « L'atelier du cheveu by Valérie » (salon de coiffure, Saint-Brice-sous-Forêt)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet du salon **L'atelier du cheveu by Valérie**. Objectif business : faire venir de nouvelles clientes pour la **couleur** (balayage, ombré, patine, rattrapage de couleur), mettre en avant **Valérie et ses 17 ans d'expérience**, et pousser la prise de rendez-vous en ligne (déjà sur Planity), tout en rappelant qu'on peut venir **sans rendez-vous**.

## Fiche d'identité (informations vérifiées)
- **Nom** : L'atelier du cheveu by Valérie (société : L'ATELIER DU CHEVEU, SIRET 943 565 804 00011)
- **Type** : salon de coiffure femme et homme, spécialité couleur et conseils personnalisés
- **Adresse** : 27 rue de Paris, 95350 Saint-Brice-sous-Forêt
- **Téléphone** : 01 39 90 00 44
- **Horaires (Google)** : mardi au samedi 09h30–19h00 · dimanche fermé · lundi fermé selon Google, mais une cliente écrit « ouvert le lundi, la chance » → **lundi `[À CONFIRMER]`**
- **Prise de RDV en ligne** : Planity (planity.com/latelier-du-cheveu-95350-saint-brice-sous-foret), note 5,0 sur 77 avis Planity · aussi présent sur Fresha
- **Note Google** : 4,8/5 sur 100 avis
- **Instagram** : @latelier_du_cheveu_byvalerie (~380 abonnés), bio : « La beauté dans chaque détail »
- **Expérience** : la patronne a plus de 17 ans d'expérience (fiche annuaire)
- **Pratique** : accepte les clients **sans rendez-vous**, accessible en fauteuil roulant (entrée et parking), établissement géré par une femme
- **Paiements** : CB, sans contact
- **Schema.org** : `HairSalon`

## Ce que disent les clientes (thèmes récurrents)
Valérie à l'écoute, douce, sincère dans ses conseils, « elle conseille pour le bien de vos cheveux et pas juste pour vous coiffer ». Prestations citées : **balayage, ombré, patine, coloration, mèches, rattrapage de contouring, coupe, brushing, lissage, carré**. Salon « magnifique, très bien décoré », ambiance chaleureuse, rapide, bon rapport qualité/prix. Plusieurs clientes venues sans RDV pour un changement total.

Extraits d'avis utilisables (« Avis Google ») :
- « C'est rare d'avoir une coiffeuse aussi investie, qui vous conseille pour le bien de vos cheveux et pas juste pour vous coiffer. »
- « J'avais les cheveux avec pas mal de nuances différentes dues à mes précédentes couleurs. Je lui ai laissé carte blanche : balayage et reprise du contouring au top, un effet lumineux et naturel. »
- « Accueil sans rendez-vous, j'ai de suite été prise en main. Conseils de couleur adaptés à mes cheveux : un ombré et une patine très jolis. »
- « Valérie se distingue par son sens de l'écoute et son approche personnalisée. »
- « Le salon est magnifique et très bien décoré. Je suis ravie du résultat. »

## Direction artistique (angle : « l'atelier de couture du cheveu »)
- Le mot « atelier » est le fil rouge : **patrons de couture, mètre ruban, croquis au trait, étiquettes cousues**. Valérie « fait du sur-mesure ».
- Palette : bleu nuit d'encre, nude rosé poudré (en fond, pas en dégradé), cuivre pour les accents, blanc cassé.
- Typo : une serif élégante (ex. Cormorant Garamond ou Fraunces) + une sans moderne (ex. Manrope).
- Idée signature : un **comparateur avant / après** (curseur glissant accessible au clavier) pour les transformations couleur, avec emplacements photo `[À PRENDRE AVEC ACCORD DES CLIENTES]`, et des **étiquettes cousues** pour les noms de prestations.

## Structure
1. **Accueil** : « Coiffure et couleur sur-mesure à Saint-Brice », note 4,8/5, boutons « Prendre RDV en ligne » (lien Planity) + « Appeler », mention « Avec ou sans rendez-vous », statut ouvert/fermé.
2. **Valérie** : portrait (photo à prendre), 17 ans de métier, sa façon de travailler (écoute, conseil honnête, protéger le cheveu).
3. **Les prestations** : couleur (balayage, ombré, patine, mèches, coloration, rattrapage de couleur), coupe & brushing, lissage, homme. Tarifs `[À CONFIRMER]` dans `src/data/prestations.json`.
4. **Avant / après** : 3 emplacements de comparaison.
5. **Le salon** : décor, ambiance, accessibilité.
6. **Avis** : 5 extraits + 4,8/5 Google + 5,0/5 Planity.
7. **Infos pratiques** : horaires, adresse rue de Paris, carte, Instagram.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
