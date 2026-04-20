const imageFolder = "images/sports-images/";

const photoDatabase = [
    {
      id: 1,
      filename: "AdrianJaramilloSports1.webp",
      rawFilename: "AdrianJaramilloSports-raw1.webp",
      title: "Morning Market",
      description: "The contrast between the shadows of the cathedral and the early morning vendors setting up their stalls in Place Kléber.",
      hasRaw: true
    },
    {
      id: 2,
      filename: "AdrianJaramilloSports2.webp",
      rawFilename: "AdrianJaramilloSports-raw2.webp",
      title: "Petite France Reflection",
      description: "A calm reflection of the half-timbered houses on the Ill river during dusk.",
      hasRaw: false
    },
    {
      id: 3,
      filename: "AdrianJaramilloSports3.webp",
      rawFilename: "AdrianJaramilloSports-raw3.webp",
      title: "Cathedral Shadows",
      description: "Harsh midday light cutting through the intricate gothic facade of Notre-Dame de Strasbourg.",
      hasRaw: true
    },
    {
      id: 4,
      filename: "AdrianJaramilloSports4.webp",
      rawFilename: "AdrianJaramilloSports-raw4.webp",
      title: "Cobblestone Commute",
      description: "A cyclist navigating the damp cobblestones of the old town during the morning rush.",
      hasRaw: true
    },
    {
      id: 5,
      filename: "AdrianJaramilloSports5.webp",
      rawFilename: "AdrianJaramilloSports-raw5.webp",
      title: "Vauban Dam Sights",
      description: "Panoramic view of the Ponts Couverts taken from the terrace of the Barrage Vauban under heavy clouds.",
      hasRaw: false
    },
    {
      id: 6,
      filename: "AdrianJaramilloSports6.webp",
      rawFilename: "AdrianJaramilloSports-raw6.webp",
      title: "Café Corner",
      description: "Patrons enjoying espresso outside a corner café in the Krutenau district, framed by overhanging ivy.",
      hasRaw: true
    },
    {
      id: 7,
      filename: "AdrianJaramilloSports7.webp",
      rawFilename: "AdrianJaramilloSports-raw7.webp",
      title: "Parliament Geometry",
      description: "Modern architectural lines and glass reflections at the European Parliament building.",
      hasRaw: true
    },
    {
      id: 8,
      filename: "AdrianJaramilloSports8.webp",
      rawFilename: "AdrianJaramilloSports-raw8.webp",
      title: "Orangerie Autumn",
      description: "Golden hour light filtering through the yellowing leaves along the pathways of Parc de l'Orangerie.",
      hasRaw: false
    },
    {
      id: 9,
      filename: "AdrianJaramilloSports9.webp",
      rawFilename: "AdrianJaramilloSports-raw9.webp",
      title: "Tramway Mist",
      description: "A modern tram emerging from a heavy winter fog crossing the Place de la République.",
      hasRaw: true
    },
    {
      id: 10,
      filename: "AdrianJaramilloSports10.webp",
      rawFilename: "AdrianJaramilloSports-raw10.webp",
      title: "Gutenberg Musician",
      description: "A Sports violinist silhouetted against the brightly lit carousel at Place Gutenberg.",
      hasRaw: true
    },
    {
      id: 11,
      filename: "AdrianJaramilloSports11.webp",
      rawFilename: "AdrianJaramilloSports-raw11.webp",
      title: "Kammerzell Details",
      description: "Close-up of the ornate wooden carvings and bottle-glass windows of the historic Maison Kammerzell.",
      hasRaw: false
    },
    {
      id: 12,
      filename: "AdrianJaramilloSports12.webp",
      rawFilename: "AdrianJaramilloSports-raw12.webp",
      title: "Evening Rain",
      description: "Neon signs reflecting off deep puddles in a narrow alleyway after a sudden downpour.",
      hasRaw: true
    },
    {
      id: 13,
      filename: "AdrianJaramilloSports13.webp",
      rawFilename: "AdrianJaramilloSports-raw13.webp",
      title: "Window Baker",
      description: "A local artisan dusting flour over fresh baguettes, captured through a slightly fogged bakery window.",
      hasRaw: true
    },
    {
      id: 14,
      filename: "AdrianJaramilloSports14.webp",
      rawFilename: "AdrianJaramilloSports-raw14.webp",
      title: "St. Paul Spires",
      description: "The twin spires of St. Paul's Church rising dramatically against a moody, overcast sky.",
      hasRaw: false
    },
    {
      id: 15,
      filename: "AdrianJaramilloSports15.webp",
      rawFilename: "AdrianJaramilloSports-raw15.webp",
      title: "Batorama Passing",
      description: "Tourists peering out from the glass roof of a Batorama boat sliding down the Ill river.",
      hasRaw: true
    },
    {
      id: 16,
      filename: "AdrianJaramilloSports16.webp",
      rawFilename: "AdrianJaramilloSports-raw16.webp",
      title: "Neustadt Grandeur",
      description: "The wide, imposing German imperial architecture of the Neustadt district bathed in harsh sunlight.",
      hasRaw: true
    },
    /*{
      id: 17,
      filename: "AdrianJaramilloSports17.webp",
      rawFilename: "AdrianJaramilloSports-raw17.webp",
      title: "Hidden Courtyard",
      description: "A quiet, secluded courtyard in the historical center, featuring an ancient well and creeping vines.",
      hasRaw: false
    },
    {
      id: 18,
      filename: "AdrianJaramilloSports18.webp",
      rawFilename: "AdrianJaramilloSports-raw18.webp",
      title: "Pigeon Flight",
      description: "A flock of pigeons scattering abruptly in front of the ornate sandstone arches of the cathedral.",
      hasRaw: true
    },
    {
      id: 19,
      filename: "AdrianJaramilloSports19.webp",
      rawFilename: "AdrianJaramilloSports-raw19.webp",
      title: "Botanical Glass",
      description: "Condensation on the inside of the tropical greenhouse at the University Botanical Gardens.",
      hasRaw: true
    },
    {
      id: 20,
      filename: "AdrianJaramilloSports20.webp",
      rawFilename: "AdrianJaramilloSports-raw20.webp",
      title: "Quai des Bateliers",
      description: "Pedestrians and cyclists sharing the sunlit promenade along the water at Quai des Bateliers.",
      hasRaw: false
    },
    {
      id: 21,
      filename: "AdrianJaramilloSports21.webp",
      rawFilename: "AdrianJaramilloSports-raw21.webp",
      title: "The Watcher",
      description: "Candid portrait of an elderly man leaning out of his window, observing the Sports life below.",
      hasRaw: true
    },
    {
      id: 22,
      filename: "AdrianJaramilloSports22.webp",
      rawFilename: "AdrianJaramilloSports-raw22.webp",
      title: "Canal Locks",
      description: "Water rushing through the heavy wooden gates of the historic locks in Petite France.",
      hasRaw: true
    },
    {
      id: 23,
      filename: "AdrianJaramilloSports23.webp",
      rawFilename: "AdrianJaramilloSports-raw23.webp",
      title: "Market Day Colors",
      description: "Vibrant local produce stacked high at a busy weekend outdoor market stall.",
      hasRaw: false
    },
    {
      id: 24,
      filename: "AdrianJaramilloSports24.webp",
      rawFilename: "AdrianJaramilloSports-raw24.webp",
      title: "Rooftop Horizons",
      description: "A sea of steep, pitched roofs with terra cotta tiles stretching out toward the horizon.",
      hasRaw: true
    },
    {
      id: 25,
      filename: "AdrianJaramilloSports25.webp",
      rawFilename: "AdrianJaramilloSports-raw25.webp",
      title: "Winter Market Glow",
      description: "The warm, festive illumination of the wooden chalets during the Christkindelsmärik.",
      hasRaw: true
    },
    {
      id: 26,
      filename: "AdrianJaramilloSports26.webp",
      rawFilename: "AdrianJaramilloSports-raw26.webp",
      title: "Bridge Shadows",
      description: "Long, dramatic shadows cast by pedestrians walking across the Pont du Corbeau at sunset.",
      hasRaw: false
    }, */
];
