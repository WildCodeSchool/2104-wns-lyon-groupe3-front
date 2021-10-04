const now = new Date()

export default [
  {
    id: 0,
    title: 'Toute la journée',
    allDay: true,
    start: new Date(2021, 3, 0),
    end: new Date(2021, 3, 1),
  },
  {
    id: 1,
    title: 'Événement longue durée',
    start: new Date(2021, 3, 7),
    end: new Date(2021, 3, 10),
  },
  {
    id: 2,
    title: 'Séance de sport',
    start: new Date(2021, 3, 9, 0, 0, 0),
    end: new Date(2021, 3, 10, 0, 0, 0),
    desc: 'Séance de sport',
  },
  {
    id: 3,
    title: 'Conférence',
    start: new Date(2021, 3, 11),
    end: new Date(2021, 3, 13),
    desc: "Conférence avec l'administration de l'école",
  },
  {
    id: 4,
    title: 'RDV avec le directeur',
    start: new Date(2021, 3, 9, 0, 0, 0),
    end: new Date(2021, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: "Organisation d'activités",
    start: new Date(2021, 3, 11),
    end: new Date(2021, 3, 13),
    desc: "Organisation voyage d'études",
  },
  {
    id: 6,
    title: 'RDV parents',
    start: new Date(2021, 3, 12, 10, 30, 0, 0),
    end: new Date(2021, 3, 12, 12, 30, 0, 0),
    desc: 'RDV avec les parents de la classe C',
  },
  {
    id: 7,
    title: 'Préparer le quiz',
    start: new Date(2021, 3, 12, 12, 0, 0, 0),
    end: new Date(2021, 3, 12, 13, 0, 0, 0),
    desc: "Préparer le quiz d'anglais",
  },
  {
    id: 8,
    title: 'RDV administration',
    start: new Date(2021, 3, 12, 14, 0, 0, 0),
    end: new Date(2021, 3, 12, 15, 0, 0, 0),
    desc: "RDV avec l'administration",
  },
  {
    id: 9,
    title: 'Réunion',
    start: new Date(2021, 3, 12, 17, 0, 0, 0),
    end: new Date(2021, 3, 12, 17, 30, 0, 0),
    desc: 'Réunion avec les collègues',
  },
  {
    id: 10,
    title: 'RDV avec les parents',
    start: new Date(2021, 3, 12, 20, 0, 0, 0),
    end: new Date(2021, 3, 12, 21, 0, 0, 0),
    desc: 'RDV avec les parents de la classe D',
  },
  {
    id: 11,
    title: 'Coaching des élèves',
    start: new Date(2021, 3, 13, 8, 0, 0),
    end: new Date(2021, 3, 13, 10, 30, 0),
    desc: 'Coaching des élèves pour les Olympiades',
  },
  {
    id: 11.1,
    title: 'Conférence avec le directeur',
    start: new Date(2021, 3, 13, 9, 30, 0),
    end: new Date(2021, 3, 13, 12, 0, 0),
    desc: 'Coaching avec le directeur',
  },
  {
    id: 11.2,
    title: "Préparation des cours",
    start: new Date(2021, 3, 13, 11, 30, 0),
    end: new Date(2021, 3, 13, 14, 0, 0),
    desc: 'Préparation des cours surprise',
  },
  {
    id: 11.3,
    title: 'Corrections',
    start: new Date(2021, 3, 13, 15, 30, 0),
    end: new Date(2021, 3, 13, 16, 0, 0),
    desc: 'Corrections des dossiers',
  },
  {
    id: 12,
    title: 'Formation',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 18, 2, 0, 0),
    desc: 'Formation',
  },
  {
    id: 12.5,
    title: 'Réunion',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 17, 23, 30, 0),
    desc: 'Réunion avec les collègues',

  },
  {
    id: 13,
    title: "Organisation d'activités",
    start: new Date(2021, 3, 20, 19, 30, 0),
    end: new Date(2021, 3, 22, 2, 0, 0),
    desc: "Organisation d'activités",

  },
  {
    id: 14,
    title: "Aujourd'hui",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    desc: 'Formation',

  },
  {
    id: 15,
    title: 'Orientation sur les projets individuels',
    start: now,
    end: now,
    desc: 'Orientation sur les projets individuels',

  },
  {
    id: 16,
    title: 'Formation pédagogique',
    start: new Date(2021, 3, 14, 15, 30, 0),
    end: new Date(2021, 3, 14, 19, 0, 0),
    desc: 'Formation pédagogique',

  },
  {
    id: 17,
    title: 'RDV parents',
    start: new Date(2021, 3, 14, 16, 30, 0),
    end: new Date(2021, 3, 14, 20, 0, 0),
    desc: 'RDV parents',
  },
  {
    id: 18,
    title: 'Correction des tests',
    start: new Date(2021, 3, 14, 16, 30, 0),
    end: new Date(2021, 3, 14, 17, 30, 0),
    desc: 'Correction des tests',
  },
  {
    id: 19,
    title: 'Test en ligne',
    start: new Date(2021, 3, 14, 17, 30, 0),
    end: new Date(2021, 3, 14, 20, 30, 0),
    desc: 'Test surprise',
  },
  {
    id: 20,
    title: 'Formation',
    start: new Date(2021, 3, 14, 17, 0, 0),
    end: new Date(2021, 3, 14, 18, 30, 0),
    desc: 'Formation',
  },
  {
    id: 21,
    title: 'RDV téléphonique',
    start: new Date(2021, 3, 14, 17, 0, 0),
    end: new Date(2021, 3, 14, 18, 30, 0),
    desc: 'RDV téléphonique',
  },
  {
    id: 22,
    title: 'Brainstorming avec les élèves',
    start: new Date(2021, 3, 14, 17, 30, 0),
    end: new Date(2021, 3, 14, 19, 0, 0),
    desc: 'Brainstorming avec les élèves',
  },
  {
    id: 23,
    title: "Rapport d'activité de classe",
    start: new Date(2021, 3, 14, 18, 30, 0),
    end: new Date(2021, 3, 14, 20, 0, 0),
    desc: "Rapport d'activité de classe",
  },
]