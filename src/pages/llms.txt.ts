import type { APIRoute } from 'astro';
import { SITE, HORAIRES, fmtHeure } from '../data/site';
import prestations from '../data/prestations.json';

export const GET: APIRoute = ({ site }) => {
  const h = HORAIRES.map(
    (j) => `- ${j.nom} : ${j.aConfirmer ? 'à confirmer' : j.plages.length ? j.plages.map((p) => `${fmtHeure(p.ouvre)}-${fmtHeure(p.ferme)}`).join(', ') : 'fermé'}`,
  ).join('\n');
  const p = prestations.familles.map((f) => `- ${f.nom} : ${f.prestations.map((x) => x.nom).join(', ')}`).join('\n');
  const txt = `# ${SITE.nom}

> Salon de coiffure femme et homme au ${SITE.adresse.rue}, ${SITE.adresse.cp} ${SITE.adresse.ville} (Val-d'Oise), spécialiste de la couleur. Tenu par Valérie, plus de 17 ans d'expérience. Avec ou sans rendez-vous.

- Téléphone : ${SITE.telAffiche}
- Rendez-vous en ligne : ${SITE.planity}
- Instagram : ${SITE.instagram}
- Note Google : ${SITE.noteGoogle}/5 (${SITE.nbAvisGoogle} avis) ; note Planity : ${SITE.notePlanity}/5 (${SITE.nbAvisPlanity} avis)
- Accessible en fauteuil roulant (entrée et parking). Paiement : carte bancaire, sans contact.

## Horaires
${h}

## Prestations
${p}

## Pages
- [Accueil](${new URL('/', site).href})
- [Mentions légales](${new URL('/mentions-legales/', site).href})
- [Confidentialité](${new URL('/confidentialite/', site).href})
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
