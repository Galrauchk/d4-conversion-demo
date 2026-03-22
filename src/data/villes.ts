export interface Ville {
  slug: string;
  name: string;
  departement: string;
  codePostal: string;
  lat: number;
  lng: number;
  description: string;
  problemsLocal: string;
  interventionTime: string;
}

export const VILLES: Ville[] = [
  {
    slug: 'marseille',
    name: 'Marseille',
    departement: 'Bouches-du-Rhône',
    codePostal: '13001',
    lat: 43.2965,
    lng: 5.3698,
    description: 'Marseille, capitale de la Méditerranée, est particulièrement exposée aux nuisibles en raison de son port maritime et de sa densité urbaine. Les rats, cafards et punaises de lit y prolifèrent dans les quartiers du centre-ville, du Vieux-Port et des cités. MaxNuisibles intervient dans les 16 arrondissements de Marseille avec des équipes dédiées et agréées.',
    problemsLocal: 'zones portuaires, résidences du Vieux-Port, restaurants et hôtels du centre',
    interventionTime: '1h30'
  },
  {
    slug: 'montpellier',
    name: 'Montpellier',
    departement: 'Hérault',
    codePostal: '34000',
    lat: 43.6110,
    lng: 3.8767,
    description: 'Montpellier, ville universitaire en forte croissance, voit ses nuisibles proliférer dans les résidences étudiantes, les quartiers denses de l\'Écusson et les zones d\'Antigone. Le climat méditerranéen favorise le développement des blattes orientales et des guêpes. MaxNuisibles assure une intervention ultra-rapide sur toute la métropole.',
    problemsLocal: 'résidences étudiantes, Écusson, Antigone, quartiers Hôpitaux-Facultés',
    interventionTime: '1h45'
  },
  {
    slug: 'nimes',
    name: 'Nîmes',
    departement: 'Gard',
    codePostal: '30000',
    lat: 43.8367,
    lng: 4.3601,
    description: 'Nîmes, ville romaine aux ruelles historiques et caves ancestrales, est propice aux infestations de nuisibles. Les rongeurs s\'y installent facilement dans les bâtisses anciennes. MaxNuisibles assure une couverture totale de Nîmes et des communes avoisinantes du Gard.',
    problemsLocal: 'centre historique, Arènes, caves et bâtiments anciens, Costières',
    interventionTime: '2h'
  },
  {
    slug: 'toulon',
    name: 'Toulon',
    departement: 'Var',
    codePostal: '83000',
    lat: 43.1242,
    lng: 5.9280,
    description: 'Toulon et sa rade présentent une forte présence de nuisibles liée au port militaire et commercial. Les cafards et rongeurs prolifèrent dans les zones portuaires et les immeubles anciens du centre. MaxNuisibles couvre l\'ensemble de l\'agglomération toulonnaise 24h/24.',
    problemsLocal: 'port militaire, centre-ville, quartiers résidentiels collinaires',
    interventionTime: '1h45'
  },
  {
    slug: 'aix-en-provence',
    name: 'Aix-en-Provence',
    departement: 'Bouches-du-Rhône',
    codePostal: '13100',
    lat: 43.5297,
    lng: 5.4474,
    description: 'Aix-en-Provence, avec ses nombreux hôtels particuliers, cours thermales et bastides provençales, présente des défis spécifiques en matière de nuisibles. MaxNuisibles protège votre demeure aixoise avec des traitements respectueux du patrimoine.',
    problemsLocal: 'cours Mirabeau, hôtels particuliers, bastides, résidences sur garrigue',
    interventionTime: '1h30'
  },
  {
    slug: 'avignon',
    name: 'Avignon',
    departement: 'Vaucluse',
    codePostal: '84000',
    lat: 43.9493,
    lng: 4.8055,
    description: 'Avignon, cité des Papes entourée de ses remparts millénaires, est confrontée aux nuisibles dans ses bâtiments historiques, ses caves et ses restaurants touristiques. Notre équipe intervient dans l\'intra-muros et l\'extra-muros avec des solutions adaptées.',
    problemsLocal: 'intra-muros, caves historiques, quartiers touristiques, marchés',
    interventionTime: '2h'
  },
  {
    slug: 'arles',
    name: 'Arles',
    departement: 'Bouches-du-Rhône',
    codePostal: '13200',
    lat: 43.6770,
    lng: 4.6277,
    description: 'Arles, ville romaine et camarguaise au carrefour des cultures, est exposée aux nuisibles liés au delta du Rhône et à ses zones humides. Rats musqués, moustiques-tigres et cafards y sont fréquents. MaxNuisibles intervient sur Arles et toute la Camargue.',
    problemsLocal: 'abords du Rhône, mas camarguais, centre romain, quartiers résidentiels',
    interventionTime: '2h'
  },
  {
    slug: 'salon-de-provence',
    name: 'Salon-de-Provence',
    departement: 'Bouches-du-Rhône',
    codePostal: '13300',
    lat: 43.6400,
    lng: 5.0970,
    description: 'Salon-de-Provence, ville provençale dynamique entre Alpilles et Crau, fait face aux nuisibles liés à son environnement rural et urbain. Les zones pavillonnaires en périphérie sont particulièrement exposées. MaxNuisibles couvre toute la zone salonaise.',
    problemsLocal: 'zone industrielle, pavillons résidentiels, mas provençaux, centre historique',
    interventionTime: '1h30'
  },
  {
    slug: 'martigues',
    name: 'Martigues',
    departement: 'Bouches-du-Rhône',
    codePostal: '13500',
    lat: 43.4045,
    lng: 5.0484,
    description: 'Martigues, la "Venise provençale", avec ses canaux pittoresques et son importante zone industrielle pétrochimique, est particulièrement exposée aux rongeurs aquatiques et aux insectes. Nos équipes interviennent 24h/24 sur toute la commune.',
    problemsLocal: 'zone industrielle de Fos, bords d\'étang de Berre, canaux, port',
    interventionTime: '1h15'
  },
  {
    slug: 'aubagne',
    name: 'Aubagne',
    departement: 'Bouches-du-Rhône',
    codePostal: '13400',
    lat: 43.2972,
    lng: 5.5723,
    description: 'Aubagne, porte du Pays d\'Aubagne et de l\'Étoile à deux pas de Marseille, voit ses nuisibles prospérer dans ses zones commerciales actives et ses quartiers résidentiels. MaxNuisibles est votre spécialiste local avec une intervention en moins de 45 minutes.',
    problemsLocal: 'zone commerciale, lotissements récents, centre-ville, zone artisanale',
    interventionTime: '45min'
  },
  {
    slug: 'la-ciotat',
    name: 'La Ciotat',
    departement: 'Bouches-du-Rhône',
    codePostal: '13600',
    lat: 43.1757,
    lng: 5.6046,
    description: 'La Ciotat, ville côtière aux chantiers navals historiques reconvertis, présente des risques spécifiques de nuisibles liés à son port de plaisance et ses anciens ateliers industriels. MaxNuisibles intervient sur La Ciotat et toute la côte varoise.',
    problemsLocal: 'port de plaisance, anciens chantiers navals, quartiers balnéaires',
    interventionTime: '1h'
  },
  {
    slug: 'beziers',
    name: 'Béziers',
    departement: 'Hérault',
    codePostal: '34500',
    lat: 43.3442,
    lng: 3.2150,
    description: 'Béziers, capitale du vignoble languedocien aux caves profondes et bâtisses historiques, est confrontée aux nuisibles dans ses habitations anciennes et ses entrepôts viticoles. MaxNuisibles intervient sur tout Béziers et l\'Hérault occidental.',
    problemsLocal: 'caves viticoles, vieille ville, Plateau des Poètes, zones pavillonnaires',
    interventionTime: '2h'
  },
  {
    slug: 'sete',
    name: 'Sète',
    departement: 'Hérault',
    codePostal: '34200',
    lat: 43.4027,
    lng: 3.6974,
    description: 'Sète, l\'île singulière entre mer et étang de Thau, est particulièrement vulnérable aux nuisibles aquatiques, maritimes et côtiers. Notre équipe maîtrise les spécificités de ce territoire insulaire et maritime.',
    problemsLocal: 'port de pêche, quais de l\'étang, poissonneries, quartiers de canal',
    interventionTime: '2h'
  },
  {
    slug: 'agde',
    name: 'Agde',
    departement: 'Hérault',
    codePostal: '34300',
    lat: 43.3096,
    lng: 3.4748,
    description: 'Agde et le Cap d\'Agde, première station balnéaire nudiste d\'Europe et haut lieu touristique, sont exposés aux nuisibles lors des pics d\'occupation estivale. MaxNuisibles assure une protection toute l\'année, haute et basse saison.',
    problemsLocal: 'résidences de vacances, restaurants balnéaires, centre historique basaltique',
    interventionTime: '2h'
  },
  {
    slug: 'lunel',
    name: 'Lunel',
    departement: 'Hérault',
    codePostal: '34400',
    lat: 43.6745,
    lng: 4.1348,
    description: 'Lunel, à mi-chemin entre Montpellier et Nîmes sur le couloir commercial de l\'A9, est une ville en fort développement où les nuisibles trouvent refuge dans les constructions récentes et les zones commerciales étendues.',
    problemsLocal: 'zone commerciale, quartiers résidentiels récents, abords des étangs',
    interventionTime: '1h30'
  },
  {
    slug: 'palavas',
    name: 'Palavas-les-Flots',
    departement: 'Hérault',
    codePostal: '34250',
    lat: 43.5262,
    lng: 3.9275,
    description: 'Palavas-les-Flots, station balnéaire prisée des Montpelliérains, voit sa problématique nuisibles s\'intensifier pendant la saison estivale dans les restaurants et résidences de vacances. Intervention rapide garantie toute l\'année.',
    problemsLocal: 'restaurants de bord de mer, résidences estivales, canaux navigables',
    interventionTime: '1h'
  },
  {
    slug: 'frontignan',
    name: 'Frontignan',
    departement: 'Hérault',
    codePostal: '34110',
    lat: 43.4490,
    lng: 3.7556,
    description: 'Frontignan, célèbre pour son muscat et coincée entre l\'étang de Thau et la Méditerranée, présente des problèmes de nuisibles liés à ses zones industrielles et son environnement lacustre. MaxNuisibles est présent sur Frontignan et ses alentours.',
    problemsLocal: 'zone industrielle pétrolière, abords de l\'étang de Thau, vignobles',
    interventionTime: '1h30'
  },
  {
    slug: 'lattes',
    name: 'Lattes',
    departement: 'Hérault',
    codePostal: '34970',
    lat: 43.5693,
    lng: 3.9019,
    description: 'Lattes, commune résidentielle huppée au sud de Montpellier en plein essor, est une zone d\'expansion urbaine où les nuisibles s\'installent dans les nouvelles constructions et les zones humides du Lez. MaxNuisibles intervient en moins de 45 minutes.',
    problemsLocal: 'bords du Lez, Port Ariane, quartiers pavillonnaires, zones commerciales',
    interventionTime: '45min'
  },
  {
    slug: 'castelnau-le-lez',
    name: 'Castelnau-le-Lez',
    departement: 'Hérault',
    codePostal: '34170',
    lat: 43.6360,
    lng: 3.9182,
    description: 'Castelnau-le-Lez, commune résidentielle prisée à l\'est de Montpellier, héberge le campus universitaire et le centre commercial Odysseum. Les nuisibles n\'épargnent pas ce territoire dense. MaxNuisibles intervient avec discrétion et efficacité.',
    problemsLocal: 'villas résidentielles, zone Odysseum, Campus Montpellier, restaurants',
    interventionTime: '30min'
  },
  {
    slug: 'saint-jean-de-vedas',
    name: 'Saint-Jean-de-Védas',
    departement: 'Hérault',
    codePostal: '34430',
    lat: 43.5686,
    lng: 3.8283,
    description: 'Saint-Jean-de-Védas, commune en pleine expansion à l\'ouest de Montpellier le long de l\'A709, fait face aux nuisibles dans ses nouvelles zones résidentielles et ses zones commerciales le long des axes routiers. Intervention rapide garantie.',
    problemsLocal: 'nouveaux lotissements, zones commerciales, abords autoroute, ZAC',
    interventionTime: '1h'
  }
];

export function getVilleBySlug(slug: string): Ville | undefined {
  return VILLES.find(v => v.slug === slug);
}
