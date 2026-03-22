export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  headline: string;
  description: string;
  guarantee: string;
  price: string;
  image: string;
  problem: string;
  solution: string;
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'deratisation',
    name: 'Dératisation',
    shortName: 'Rats & Souris',
    icon: '🐀',
    headline: 'Élimination définitive des rats et souris',
    description: 'Les rongeurs contaminent vos aliments, rongent vos câbles électriques et transmettent des maladies graves. Notre traitement professionnel agréé élimine toute la colonie et sécurise votre habitat contre toute réinfestation.',
    guarantee: 'Garantie 12 mois',
    price: 'Dès 149€',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    problem: 'Rats, souris, mulots dans votre logement ou commerce',
    solution: 'Piégeage professionnel + appâts rodenticides agréés + colmatage des accès',
    faq: [
      { q: 'Combien de temps dure un traitement dératisation ?', a: 'Une intervention dure entre 45 minutes et 2 heures selon la superficie. Le traitement complet avec garantie comprend généralement 2 passages à 15 jours d\'intervalle.' },
      { q: 'Le traitement est-il dangereux pour mes animaux ?', a: 'Non, nos produits sont homologués et placés dans des boîtiers sécurisés inaccessibles aux animaux domestiques. Nous vous donnons toutes les consignes de sécurité.' },
      { q: 'Dois-je quitter mon domicile pendant le traitement ?', a: 'En règle générale, non. Selon le produit utilisé, une absence de 2 à 4 heures peut être recommandée. Votre technicien vous informera précisément.' },
      { q: 'La dératisation est-elle prise en charge par l\'assurance ?', a: 'Oui, dans de nombreux cas. Nous sommes agréés assurance et pouvons vous fournir un rapport d\'intervention pour votre dossier.' }
    ]
  },
  {
    slug: 'cafards',
    name: 'Traitement Cafards',
    shortName: 'Cafards',
    icon: '🪳',
    headline: 'Élimination totale des cafards et blattes garantie',
    description: 'Les cafards (blattes germaniques ou orientales) se reproduisent à une vitesse alarmante et contaminent irrémédiablement vos cuisines. Notre traitement gel + pulvérisation éradique toute la colonie en 24h, avec garantie 6 mois.',
    guarantee: 'Garantie 6 mois',
    price: 'Dès 89€',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=80',
    problem: 'Cafards dans cuisine, salle de bain, ou toute la maison',
    solution: 'Gel insecticide professionnel + IGR + pulvérisation ciblée + suivi',
    faq: [
      { q: 'Pourquoi les cafards reviennent après mon traitement ?', a: 'Les produits de supermarché ne traitent que les insectes visibles, pas les œufs (oothèques). Nos produits professionnels avec IGR brisent le cycle de reproduction complet.' },
      { q: 'Combien de temps avant de ne plus voir de cafards ?', a: 'Les cafards disparaissent dans les 48 à 72h après traitement professionnel. La garantie de 6 mois couvre tout retour éventuel.' },
      { q: 'Faut-il vider les placards de cuisine ?', a: 'Nous vous enverrons un protocole de préparation simple. Les aliments doivent être dans des boîtes fermées, c\'est tout.' },
      { q: 'Le traitement fonctionne en appartement ?', a: 'Absolument. Nos gels appâts sont spécialement formulés pour les appartements et n\'ont aucune odeur dérangeante.' }
    ]
  },
  {
    slug: 'punaises-de-lit',
    name: 'Punaises de Lit',
    shortName: 'Punaises',
    icon: '🛏️',
    headline: 'Traitement punaises de lit — Chambre libérée en 24h',
    description: 'Les punaises de lit sont le cauchemar des propriétaires et hôteliers. Minuscules, résistantes et prolifiques, elles nécessitent un traitement thermique ou chimique professionnel. Garantie 3 mois, résultat en 24h.',
    guarantee: 'Garantie 3 mois',
    price: 'Dès 199€',
    image: 'https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=600&q=80',
    problem: 'Piqûres nocturnes, traces noires sur matelas, insectes dans coutures',
    solution: 'Traitement thermique ou insecticide professionnel + détection chien si besoin',
    faq: [
      { q: 'Comment savoir avec certitude si j\'ai des punaises ?', a: 'Inspectez les coutures de votre matelas avec une lampe LED. Cherchez des insectes rougeâtres de 5mm, des points noirs (excréments), et des mues translucides.' },
      { q: 'La chaleur détruit-elle les punaises ?', a: 'Oui, au-dessus de 55°C toutes les punaises et œufs meurent. Le traitement thermique professionnel est le plus efficace, mais pas toujours adapté à tous les logements.' },
      { q: 'Dois-je jeter mon matelas ?', a: 'Dans la grande majorité des cas, NON. Jeter le matelas serait gâcher de l\'argent car les punaises sont dans toute la chambre, pas seulement le matelas.' },
      { q: 'Mon hôtel peut-il rester ouvert pendant le traitement ?', a: 'Oui, pour les chambres non traitées. Nous planifions l\'intervention pour minimiser l\'impact sur votre activité. Nous intervenons tôt le matin ou en soirée.' }
    ]
  },
  {
    slug: 'guepes-frelons',
    name: 'Guêpes & Frelons',
    shortName: 'Guêpes',
    icon: '🐝',
    headline: 'Destruction nid de guêpes et frelons — Intervention sécurisée',
    description: 'Un nid de guêpes ou de frelons asiatiques représente un danger réel pour votre famille. Nos techniciens équipés en tenue de protection détruisent le nid en toute sécurité, même en hauteur, avec garantie de non-retour.',
    guarantee: 'Garantie saison',
    price: 'Dès 79€',
    image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&q=80',
    problem: 'Nid de guêpes sous toit, frelon asiatique dans jardin ou toiture',
    solution: 'Destruction sécurisée du nid + traitement insecticide + bouchage des entrées',
    faq: [
      { q: 'Quelle différence entre frelon européen et asiatique ?', a: 'Le frelon asiatique (Vespa velutina) est plus petit, avec abdomen jaune et orange, et construit des nids en hauteur. Il est invasif et représente un danger pour les abeilles et les personnes allergiques.' },
      { q: 'Peut-on détruire un nid soi-même ?', a: 'Fortement déconseillé. Un nid de guêpes contient de 3 000 à 10 000 individus capables d\'attaques massives. Pour les frelons, le danger est encore plus grand, appelez un professionnel.' },
      { q: 'Le nid reviendra-t-il l\'année prochaine ?', a: 'Un nouveau nid ne se formera pas au même endroit si nous traitons correctement la zone. Les nouvelles reines fondatrices évitent naturellement les zones traitées.' },
      { q: 'Intervenez-vous le week-end pour les nids de guêpes ?', a: 'Oui, nous intervenons 7j/7, week-ends et jours fériés inclus. Les urgences guêpes et frelons ne peuvent pas attendre.' }
    ]
  },
  {
    slug: 'termites',
    name: 'Termites',
    shortName: 'Termites',
    icon: '🪵',
    headline: 'Traitement termites — Protégez votre structure',
    description: 'Les termites détruisent silencieusement la structure en bois de votre maison pendant des années avant d\'être détectés. Notre diagnostic et traitement professionnel (barrière chimique, appâts) protège définitivement votre bien immobilier.',
    guarantee: 'Garantie 10 ans',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&q=80',
    problem: 'Bois creux au son, sciure fine, galeries dans charpente ou parquet',
    solution: 'Barrière chimique + système d\'appâtage + traitement des bois + attestation',
    faq: [
      { q: 'Comment savoir si j\'ai des termites ?', a: 'Frappez les bois suspects — un son creux indique une attaque. Cherchez aussi des galeries de boue, des ailes transparentes tombées au printemps, ou des trous fins dans le bois.' },
      { q: 'Le diagnostic termites est-il obligatoire pour vendre ?', a: 'Oui, dans les zones à risque définies par arrêté préfectoral (la plupart du Sud). Ce diagnostic est obligatoire lors de toute vente immobilière.' },
      { q: 'Le traitement nécessite-t-il des travaux importants ?', a: 'Selon le stade de l\'infestation, le traitement peut être non invasif (injections, appâts) ou nécessiter des tranchées périphériques. Nous établissons un devis précis après diagnostic.' },
      { q: 'L\'assurance couvre-t-elle les dégâts termites ?', a: 'Généralement non, sauf garanties spécifiques. Mais une attestation de traitement peut être exigée par votre assureur. Nous fournissons tous les documents nécessaires.' }
    ]
  },
  {
    slug: 'desinfection',
    name: 'Désinfection',
    shortName: 'Désinfection',
    icon: '🧪',
    headline: 'Désinfection & désinsectisation professionnelle',
    description: 'Au-delà des nuisibles visibles, bactéries, virus et champignons prolifèrent dans vos locaux. Notre désinfection professionnelle par brumisation ou ULV élimine 99,9% des agents pathogènes. Idéal post-infestation, COVID ou sinistre.',
    guarantee: 'Certificat fourni',
    price: 'Dès 120€',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&q=80',
    problem: 'Odeurs persistantes, moisissures, post-infestation, locaux commerciaux',
    solution: 'Brumisation ULV biocide + désodorisation + fourniture d\'attestation',
    faq: [
      { q: 'Quelle différence entre désinfection et désinsectisation ?', a: 'La désinfection cible les micro-organismes (bactéries, virus, champignons). La désinsectisation cible les insectes. Souvent les deux sont combinés après une infestation.' },
      { q: 'La désinfection est-elle nécessaire après traitement nuisibles ?', a: 'Oui, fortement recommandé. Les excréments de rongeurs, les cadavres d\'insectes et les nids contiennent des agents pathogènes. La désinfection post-traitement assainit complètement l\'espace.' },
      { q: 'Combien de temps faut-il quitter les locaux ?', a: 'En général, 2 à 4 heures après la désinfection par brumisation. Nos produits sont ensuite neutralisés et ne laissent aucun résidu dangereux.' },
      { q: 'Pouvez-vous intervenir dans des locaux alimentaires (restaurants) ?', a: 'Oui, nous utilisons des produits biocides homologués pour les secteurs alimentaires (TP 2, 3, 4). Nous intervenons hors heures d\'ouverture et fournissons le protocole pour votre HACCP.' }
    ]
  },
  {
    slug: 'nuisibles-entreprises',
    name: 'Nuisibles Entreprises',
    shortName: 'Entreprises',
    icon: '🏢',
    headline: 'Protection nuisibles pour professionnels et entreprises',
    description: 'Restaurants, hôtels, entrepôts, collectivités — les nuisibles menacent votre réputation et votre conformité HACCP. MaxNuisibles propose des contrats de maintenance préventive avec visites régulières et rapport de suivi pour satisfaire vos contrôles sanitaires.',
    guarantee: 'Contrat annuel',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    problem: 'Nuisibles dans restaurant, hôtel, entrepôt, résidence de tourisme',
    solution: 'Contrat maintenance + visites préventives + rapports HACCP + intervention urgence 2h',
    faq: [
      { q: 'Que couvre un contrat de maintenance nuisibles professionnel ?', a: 'Un contrat standard comprend des visites préventives trimestrielles ou mensuelles, la pose de pièges et boîtiers de surveillance, des rapports d\'intervention et une hotline urgence 24h/24.' },
      { q: 'Êtes-vous conformes pour les établissements HACCP ?', a: 'Oui, totalement. Nous fournissons les rapports de passage, les fiches techniques des produits et les registres de suivi conformes aux exigences HACCP et à la réglementation sanitaire.' },
      { q: 'Intervenez-vous la nuit pour ne pas perturber notre activité ?', a: 'Absolument. Nous adaptons nos horaires d\'intervention à vos contraintes opérationnelles. Beaucoup de nos clients restaurateurs nous demandent d\'intervenir après 22h ou avant 7h.' },
      { q: 'Quel délai pour une intervention urgence en milieu professionnel ?', a: 'Moins de 2 heures en zone couverte. Pour les professionnels sous contrat, nous garantissons une priorité absolue d\'intervention.' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug);
}
