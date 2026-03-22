export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'comment-savoir-si-on-a-des-rats',
    title: '7 signes qui indiquent que vous avez des rats chez vous',
    description: 'Grattements la nuit, crottes, odeurs — comment identifier une infestation de rats avant qu\'elle ne devienne incontrôlable. Guide d\'expert MaxNuisibles.',
    date: '2024-01-15',
    category: 'Dératisation',
    readTime: '5 min',
    content: `
<h2>Les 7 signes d'une infestation de rats</h2>
<p>Les rats sont des animaux nocturnes et discrets qui s'installent souvent dans votre domicile sans que vous le remarquiez immédiatement. Pourtant, les signaux d'alerte sont là si vous savez où chercher.</p>

<h3>1. Des bruits nocturnes suspects</h3>
<p>Le premier signe est souvent auditif : grattements, couinements, courses dans les cloisons, le plafond ou sous le plancher. Ces bruits s'intensifient la nuit quand vous êtes calme et que les rats sortent s'alimenter.</p>

<h3>2. Des crottes caractéristiques</h3>
<p>Les crottes de rat mesurent 1 à 2 cm, en forme de fuseau avec les extrémités pointues. Vous les trouverez le long des murs, derrière les appareils électroménagers, dans les placards et sous les éviers.</p>

<h3>3. Des traces de mâchonnement</h3>
<p>Les rongeurs ont des incisives qui poussent continuellement et doivent constamment mâcher. Câbles électriques rongés, tuyaux abîmés, boîtes de nourriture percées — voilà leurs traces.</p>

<h3>4. Une odeur d'ammoniaque</h3>
<p>L'urine de rat dégage une odeur forte et caractéristique d'ammoniaque. Si vous sentez une odeur persistante dans vos placards ou sous votre évier, c'est un signal d'alarme.</p>

<h3>5. Des empreintes ou traces de passage</h3>
<p>Les rats empruntent toujours les mêmes chemins. Le long des murs, vous pouvez observer des traces graisseuses (dues à leur fourrure), des empreintes dans la poussière ou des coulées dans la végétation extérieure.</p>

<h3>6. Des nids dissimulés</h3>
<p>Les rats construisent leurs nids avec des matériaux de fortune : papier déchiqueté, tissu, isolant arraché. Cherchez dans les recoins sombres, les vides sanitaires, les combles ou derrière les appareils électroménagers.</p>

<h3>7. Vos animaux domestiques sont agités</h3>
<p>Les chiens et chats détectent la présence de rats bien avant vous. Si votre animal s'intéresse soudainement à un coin précis, gratte sous un meuble ou refuse d'entrer dans une pièce, prenez cela au sérieux.</p>

<h2>Que faire en cas d'infestation avérée ?</h2>
<p>N'attendez pas que la colonie grossisse. Une femelle rat peut avoir jusqu'à 80 petits par an. Appelez MaxNuisibles dès les premiers signes : <strong>0 800 000 000</strong>. Nos techniciens agréés interviennent en moins de 2 heures avec des produits professionnels homologués.</p>
    `
  },
  {
    slug: 'traitement-cafards-efficace',
    title: 'Traitement cafards : pourquoi les produits du commerce ne suffisent pas',
    description: 'Les cafards de supermarché résistent aux produits grand public. Découvrez pourquoi seul un traitement professionnel éradique durablement les blattes.',
    date: '2024-02-03',
    category: 'Cafards',
    readTime: '6 min',
    content: `
<h2>Le problème des cafards résistants</h2>
<p>Vous avez acheté des bombes aérosol, des pièges à phéromones, des appâts du supermarché — et les cafards sont toujours là. Vous n'êtes pas seul. Des études montrent que les blattes germaniques développent une résistance aux insecticides courants en seulement quelques générations.</p>

<h3>La résistance aux pyréthrines</h3>
<p>La majorité des produits grand public contiennent des pyréthrines synthétiques (deltaméthrine, cyperméthrine). Les populations de cafards exposées à ces produits développent rapidement des mécanismes de résistance enzymatique. En clair : les insecticides de supermarché sélectionnent les individus résistants et aggravent le problème.</p>

<h3>Les oothèques — la vraie menace</h3>
<p>Une femelle cafard porte une capsule d'œufs (oothèque) contenant 30 à 50 embryons. Ces oothèques sont imperméables aux insecticides de contact. Même si vous tuez tous les adultes, les oothèques éclosent 4 à 6 semaines plus tard et vous repartez de zéro.</p>

<h2>Le traitement professionnel : une autre approche</h2>
<h3>Les IGR (Régulateurs de Croissance)</h3>
<p>Les IGR sont des molécules qui perturbent le développement des insectes. Ils empêchent les nymphes de muer correctement et stérilisent les femelles. Combinés aux insecticides adultes, ils brisent le cycle de reproduction complet sur 6 mois.</p>

<h3>Le gel appât professionnel</h3>
<p>Contrairement aux bombes aérosol qui repoussent les cafards dans les fissures, le gel appât attire les insectes. Un cafard empoisonné retourne au nid et contamine ses congénères par contact et ingestion de matières fécales. L'effet domino élimine toute la colonie.</p>

<h3>La cartographie précise</h3>
<p>Un technicien professionnel inspecte méthodiquement les cachettes des cafards : joints de siphon, faux-plafonds, tableaux électriques, espaces entre carrelages. Il applique le traitement là où les insectes vivent, pas dans l'air.</p>

<h2>Résultats garantis</h2>
<p>Avec MaxNuisibles, vous bénéficiez d'une garantie 6 mois. Si des cafards réapparaissent dans ce délai, nous revenons gratuitement. Appelez le <strong>0 800 000 000</strong> pour une intervention dès aujourd'hui.</p>
    `
  },
  {
    slug: 'punaises-de-lit-symptomes',
    title: 'Punaises de lit : symptômes, détection et que faire immédiatement',
    description: 'Piqûres en ligne, taches noires sur matelas... comment identifier avec certitude les punaises de lit et les étapes à suivre immédiatement pour éviter la propagation.',
    date: '2024-02-20',
    category: 'Punaises de Lit',
    readTime: '7 min',
    content: `
<h2>Les symptômes d'une infestation de punaises</h2>
<p>Les punaises de lit (Cimex lectularius) sont des ectoparasites hématophages de 4 à 5mm, plats et rougeâtres. Nocturnes, elles se nourrissent de sang humain pendant votre sommeil.</p>

<h3>Les piqûres caractéristiques</h3>
<p>Contrairement aux moustiques, les punaises piquent plusieurs fois pendant leur repas, laissant des traces en ligne ou en triangle (qu'on appelle le "petit-déjeuner, déjeuner, dîner"). Les piqûres apparaissent sur les zones découvertes : épaules, bras, cou, visage. Elles provoquent des démangeaisons intenses qui peuvent durer jusqu'à 2 semaines.</p>

<h3>Les traces visuelles</h3>
<p>Inspectez les coutures de votre matelas avec une lampe torche puissante. Cherchez :</p>
<ul>
<li>Des points noirs (excréments consolidés) dans les coutures et plis</li>
<li>Des taches rouille (sang) sur les draps ou le matelas</li>
<li>Des mues translucides de 1 à 4mm (exuvies)</li>
<li>Des insectes vivants : plats, ovales, brun-rougeâtre</li>
</ul>

<h3>L'odeur caractéristique</h3>
<p>Une infestation importante dégage une odeur douceâtre, légèrement écoeurante, parfois décrite comme "vieille vanille" ou "amande amère". Cette odeur vient des phéromones d'agrégation sécrétées par les colonies.</p>

<h2>Que faire immédiatement</h2>
<h3>Ne pas jeter le matelas</h3>
<p>C'est la première erreur. Les punaises ne vivent pas que dans le matelas — elles colonisent le sommier, le cadre de lit, les prises électriques, les tableaux accrochés, les rideaux, les plinthes. Jeter le matelas résout 10% du problème.</p>

<h3>Ne pas utiliser d'insecticide aérosol</h3>
<p>Les aérosols repoussent les punaises vers d'autres pièces et aggravent la contamination. Attendez l'arrivée d'un professionnel.</p>

<h3>Isoler le lit</h3>
<p>Posez des protège-matelas anti-acariens hermétiques et des pièges intercepteurs sous les pieds du lit. Évitez que le linge touche le sol.</p>

<h2>Le traitement professionnel MaxNuisibles</h2>
<p>Nous proposons deux options selon votre situation :</p>
<ul>
<li><strong>Traitement chimique multi-passages</strong> : insecticide adulticide + IGR, 2 à 3 passages</li>
<li><strong>Traitement thermique</strong> : montée à 55°C dans toute la pièce, résultats immédiats et sans produits chimiques</li>
</ul>
<p>Appelez le <strong>0 800 000 000</strong> — intervention sous 2h.</p>
    `
  },
  {
    slug: 'nid-de-guepes-que-faire',
    title: 'Nid de guêpes : que faire et ne surtout pas faire',
    description: 'Découvert un nid de guêpes ou de frelons asiatiques ? Voici les erreurs fatales à éviter et la marche à suivre pour une destruction sécurisée.',
    date: '2024-03-10',
    category: 'Guêpes & Frelons',
    readTime: '5 min',
    content: `
<h2>Vous avez trouvé un nid de guêpes — restez calme</h2>
<p>Un nid de guêpes communes (Vespula germanica) peut contenir de 3 000 à 10 000 individus en fin d'été. Contrairement aux abeilles, les guêpes peuvent piquer plusieurs fois et alerter toute la colonie via des phéromones d'alarme. La panique est votre pire ennemi.</p>

<h3>Ce qu'il ne faut JAMAIS faire</h3>
<ul>
<li><strong>Ne jamais boucher l'entrée du nid</strong> : les guêpes trouveront une autre sortie, potentiellement dans votre logement</li>
<li><strong>Ne pas asperger d'eau</strong> : l'eau les excite et provoque une attaque massive</li>
<li><strong>Ne pas utiliser de feu</strong> : le nid est en papier, c'est extrêmement inflammable</li>
<li><strong>Ne pas taper sur le nid</strong> : les vibrations déclenchent l'attaque</li>
<li><strong>Ne pas traiter sans équipement de protection</strong> : une combinaison apicole est indispensable</li>
</ul>

<h3>Le frelon asiatique — une menace spécifique</h3>
<p>Le frelon asiatique (Vespa velutina nigrithorax) est une espèce invasive plus petite que le frelon européen, avec un abdomen jaune orangé. Il construit ses nids en hauteur (arbres, façades, sous toits) sous forme de ballon gris. Son venin est moins fort que le frelon européen mais il attaque en plus grand nombre. Il est également dévastateur pour les colonies d'abeilles.</p>

<h2>Quand intervenir soi-même est possible</h2>
<p>Un tout petit nid (taille orange) en début de saison (avant juin), accessible et à hauteur d'homme, peut être traité avec un insecticide mousse vendu en jardinerie, de nuit, avec une bonne protection. Au-delà, appelez un professionnel.</p>

<h2>L'intervention MaxNuisibles</h2>
<p>Nos techniciens interviennent avec :</p>
<ul>
<li>Combinaison de protection intégrale homologuée</li>
<li>Insecticide professionnel à action foudroyante</li>
<li>Équipement de travail en hauteur (échelle, nacelle si besoin)</li>
<li>Dépose du nid et traitement de la cavité</li>
</ul>
<p>Intervention possible en urgence le jour même : <strong>0 800 000 000</strong>.</p>
    `
  },
  {
    slug: 'prevention-termites-maison',
    title: 'Prévention termites : protéger sa maison dans le Sud de la France',
    description: 'Le Sud de la France est une zone à risque termites. Comment prévenir l\'infestation, diagnostiquer tôt et protéger durablement votre patrimoine immobilier.',
    date: '2024-04-05',
    category: 'Termites',
    readTime: '8 min',
    content: `
<h2>Pourquoi le Sud est une zone à risque élevé</h2>
<p>La France compte plus de 30 espèces de termites, dont les plus destructrices sont les termites souterrains (Reticulitermes). Ils prospèrent dans les zones où la température ne descend jamais très bas et où l'humidité du sol est suffisante — conditions idéales dans tout le pourtour méditerranéen.</p>

<p>Des arrêtés préfectoraux classent la quasi-totalité des Bouches-du-Rhône, du Var, du Gard et de l'Hérault en zones à risque. En cas de vente immobilière, un diagnostic termites est obligatoire.</p>

<h3>Comment les termites entrent dans votre maison</h3>
<p>Contrairement à une idée reçue, les termites ne rongent pas le béton — mais ils le contournent. Ils créent des galeries de terre (galeries de cheminement) le long des fondations, sous les dallages, à travers les fissures. Ils peuvent coloniser une maison depuis le jardin voisin sans jamais être détectés pendant 5 à 10 ans.</p>

<h2>Les 5 mesures préventives essentielles</h2>

<h3>1. Éliminer les sources de bois humide</h3>
<p>Tas de bois contre la maison, souches non dessouchées, bois de coffrages enterrés, vieilles traverses de chemin de fer — tout cela attire les termites. Gardez la zone périphérique de votre maison propre et sèche.</p>

<h3>2. Assurer un bon drainage</h3>
<p>Les termites souterrains ont besoin d'humidité. Vérifiez que vos gouttières ne fuient pas, que le sol s'éloigne de la maison (pente de drainage) et que votre vide sanitaire est bien ventilé.</p>

<h3>3. Ventiler les vides sanitaires</h3>
<p>Un vide sanitaire humide est un buffet pour les termites. Assurez une ventilation transversale efficace. Posez un pare-vapeur sur le sol terreux si ce n'est pas déjà fait.</p>

<h3>4. Traiter le bois neuf</h3>
<p>Lors de travaux, faites traiter tous les bois de charpente, solives et parquet avec des produits insecticides-fongicides de classe 2 ou 4 selon leur usage. Ce traitement préventif est nettement moins coûteux qu'un traitement curatif.</p>

<h3>5. Surveiller annuellement</h3>
<p>Faites inspecter votre maison chaque année par un professionnel agréé. Un diagnostic précoce peut limiter les dégâts à quelques centaines d'euros ; un diagnostic tardif peut représenter des dizaines de milliers d'euros de charpente à remplacer.</p>

<h2>Le traitement curatif MaxNuisibles</h2>
<p>En cas d'infestation avérée, nous proposons :</p>
<ul>
<li><strong>Barrière chimique</strong> : injections dans le sol en périphérie pour stopper les termites souterrains</li>
<li><strong>Système d'appâtage</strong> : stations appâts enterrées qui empoisonnent toute la colonie</li>
<li><strong>Traitement des bois</strong> : injection et badigeonnage des bois infestés</li>
</ul>
<p>Nous fournissons une attestation de traitement valable pour vos obligations légales. Devis gratuit au <strong>0 800 000 000</strong>.</p>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
