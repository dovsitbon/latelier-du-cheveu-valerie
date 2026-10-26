# À compléter / à confirmer avec Valérie

Chaque point est affiché `[À CONFIRMER]` (surligné jaune) sur le site tant qu'il n'est pas renseigné.

## Horaires
- [ ] **Lundi** : Google indique fermé, une cliente écrit « ouvert le lundi ». À trancher. Modifier `HORAIRES` dans `src/data/site.ts` (retirer `aConfirmer`, mettre les plages ou laisser vide pour « Fermé »).
- [ ] Coupure du midi éventuelle du mardi au samedi (actuellement 9h30–19h00 en continu, d'après Google).

## Tarifs (`src/data/prestations.json`)
- [ ] Balayage, ombré, patine, mèches, coloration, rattrapage de couleur.
- [ ] Coupe femme, carré, brushing.
- [ ] Lissage + technique / produit utilisés.
- [ ] Coupe homme + détail de la prestation.
- [ ] Les intitulés de prestation eux-mêmes (liste reconstituée à partir des avis : la valider avec la carte du salon ou Planity).

## Avant / après
- [ ] 3 paires de photos avant / après **avec accord écrit des clientes** (marqueur `[À PRENDRE AVEC ACCORD DES CLIENTES]`). Voir `PHOTOS_A_PRENDRE.md`.

## Mentions légales
- [ ] Forme juridique, capital social, RCS, n° TVA intracommunautaire, adresse du siège.
- [ ] E-mail de contact (aussi utilisé dans la page Confidentialité).
- [ ] Nom de la directrice de la publication.

## SEO local
- [ ] Coordonnées GPS (latitude / longitude) du 27 rue de Paris : non connues avec certitude, donc `geo` est **omis** du JSON-LD. Les ajouter dans `src/layouts/Base.astro` (`geo: { '@type': 'GeoCoordinates', latitude, longitude }`) une fois relevées sur la fiche Google.
- [ ] Lien de la fiche Fresha (mentionnée sans lien sur le site ; à ajouter à `sameAs` si souhaité).
- [ ] Lien de la fiche Google Business Profile (à ajouter à `sameAs`).
- [ ] Après mise en ligne : mettre l'URL du site sur la fiche Google, Planity et la bio Instagram.

## Divers
- [ ] Description du décor du salon (style, couleurs) si Valérie souhaite la mettre en avant : le texte actuel s'appuie seulement sur les avis.
