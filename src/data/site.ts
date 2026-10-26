// Données du salon : nom, adresse, téléphone, liens, horaires, avis.
// Modifier ici : tout le site (pages, pied de page, JSON-LD, statut ouvert/fermé) suit.
export { URL_SITE } from './url.mjs';

export const SITE = {
  nom: "L'atelier du cheveu by Valérie",
  nomCourt: "L'atelier du cheveu",
  societe: "L'ATELIER DU CHEVEU",
  siret: '943 565 804 00011',
  adresse: { rue: '27 rue de Paris', cp: '95350', ville: 'Saint-Brice-sous-Forêt', region: "Val-d'Oise", pays: 'FR' },
  telAffiche: '01 39 90 00 44',
  telLien: '+33139900044',
  planity: 'https://www.planity.com/latelier-du-cheveu-95350-saint-brice-sous-foret',
  instagram: 'https://www.instagram.com/latelier_du_cheveu_byvalerie/',
  instagramPseudo: '@latelier_du_cheveu_byvalerie',
  noteGoogle: '4,8',
  noteGoogleNum: 4.8,
  nbAvisGoogle: 100,
  notePlanity: '5,0',
  nbAvisPlanity: 77,
  experience: 17,
  itineraire:
    'https://www.google.com/maps/dir/?api=1&destination=27%20rue%20de%20Paris%2C%2095350%20Saint-Brice-sous-For%C3%AAt',
  carte: 'https://www.google.com/maps?q=27%20rue%20de%20Paris%2C%2095350%20Saint-Brice-sous-For%C3%AAt&output=embed',
  voisines: ['Groslay', 'Montmorency', 'Sarcelles', 'Deuil-la-Barre', 'Montmagny', 'Domont', 'Ézanville'],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Format 24 h "HH:MM".
// ouvre/ferme à null = fermé. aConfirmer = information non vérifiée (affichée « [À CONFIRMER] »).
// Coupure du midi : remplacer par plages: [{ ouvre, ferme }, { ouvre, ferme }].
export type Jour = { jour: number; nom: string; plages: { ouvre: string; ferme: string }[]; aConfirmer?: boolean };
export const HORAIRES: Jour[] = [
  { jour: 1, nom: 'Lundi', plages: [], aConfirmer: true },
  { jour: 2, nom: 'Mardi', plages: [{ ouvre: '09:30', ferme: '19:00' }] },
  { jour: 3, nom: 'Mercredi', plages: [{ ouvre: '09:30', ferme: '19:00' }] },
  { jour: 4, nom: 'Jeudi', plages: [{ ouvre: '09:30', ferme: '19:00' }] },
  { jour: 5, nom: 'Vendredi', plages: [{ ouvre: '09:30', ferme: '19:00' }] },
  { jour: 6, nom: 'Samedi', plages: [{ ouvre: '09:30', ferme: '19:00' }] },
  { jour: 0, nom: 'Dimanche', plages: [] },
];

export const fmtHeure = (h: string) => h.replace(/^0/, '').replace(':', 'h');

// Les 5 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = [
  "C'est rare d'avoir une coiffeuse aussi investie, qui vous conseille pour le bien de vos cheveux et pas juste pour vous coiffer.",
  "J'avais les cheveux avec pas mal de nuances différentes dues à mes précédentes couleurs. Je lui ai laissé carte blanche : balayage et reprise du contouring au top, un effet lumineux et naturel.",
  'Accueil sans rendez-vous, j’ai de suite été prise en main. Conseils de couleur adaptés à mes cheveux : un ombré et une patine très jolis.',
  'Valérie se distingue par son sens de l’écoute et son approche personnalisée.',
  'Le salon est magnifique et très bien décoré. Je suis ravie du résultat.',
];
