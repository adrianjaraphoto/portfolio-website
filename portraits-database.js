const imageFolder = "images/portraits-images/";

const photoDatabase = [
    {
      id: 1,
      filename: "AdrianJaramilloPortraits1.webp",
      rawFilename: "AdrianJaramilloPortraits-raw1.webp",
      title: "Friendly Portrait 1",
      description: "A smiling woman wearing a tan Carhartt jacket and distinctive silver earrings poses for a portrait in front of the Palais Universitaire in Strasbourg.",
      hasRaw: true
    },
    {
      id: 2,
      filename: "AdrianJaramilloPortraits2.webp",
      rawFilename: "AdrianJaramilloPortraits-raw2.webp",
      title: "Friendly Portrait 2",
      description: "A man wearing glasses and a scarf smiles with his eyes closed under warm red lighting at the Queen Elizabeth bar in Strasbourg.",
      hasRaw: true
    },
    {
      id: 3,
      filename: "AdrianJaramilloPortraits3.webp",
      rawFilename: "AdrianJaramilloPortraits-raw3.webp",
      title: "Friendly Portrait 3",
      description: "A woman with glasses and a varsity jacket smiles for a night portrait at the Gallia tram station in Strasbourg.",
      hasRaw: true
    },
    {
      id: 4,
      filename: "AdrianJaramilloPortraits4.webp",
      rawFilename: "AdrianJaramilloPortraits-raw4.webp",
      title: "Friendly Portrait 4",
      description: "A black and white night portrait captures a woman with glasses and a varsity jacket making a playful or mock-surprised expression at the Gallia tram station in Strasbourg.",
      hasRaw: true
    },
    {
      id: 5,
      filename: "AdrianJaramilloPortraits5.webp",
      rawFilename: "AdrianJaramilloPortraits-raw5.webp",
      title: "Portrait 1",
      description: "A woman in a trench coat holding a smartphone is framed by golden autumn leaves near the Gallia tram station in Strasbourg.",
      hasRaw: false
    },
    /* {
      id: 6,
      filename: "AdrianJaramilloPortraits6.webp",
      rawFilename: "AdrianJaramilloPortraits-raw6.webp",
      title: "Café Corner",
      description: "Patrons enjoying espresso outside a corner café in the Krutenau district, framed by overhanging ivy.",
      hasRaw: true
    },
    {
      id: 7,
      filename: "AdrianJaramilloPortraits7.webp",
      rawFilename: "AdrianJaramilloPortraits-raw7.webp",
      title: "Parliament Geometry",
      description: "Modern architectural lines and glass reflections at the European Parliament building.",
      hasRaw: true
    },
    {
      id: 8,
      filename: "AdrianJaramilloPortraits8.webp",
      rawFilename: "AdrianJaramilloPortraits-raw8.webp",
      title: "Orangerie Autumn",
      description: "Golden hour light filtering through the yellowing leaves along the pathways of Parc de l'Orangerie.",
      hasRaw: false
    },
    {
      id: 9,
      filename: "AdrianJaramilloPortraits9.webp",
      rawFilename: "AdrianJaramilloPortraits-raw9.webp",
      title: "Tramway Mist",
      description: "A modern tram emerging from a heavy winter fog crossing the Place de la République.",
      hasRaw: true
    },
    {
      id: 10,
      filename: "AdrianJaramilloPortraits10.webp",
      rawFilename: "AdrianJaramilloPortraits-raw10.webp",
      title: "Gutenberg Musician",
      description: "A Portraits violinist silhouetted against the brightly lit carousel at Place Gutenberg.",
      hasRaw: true
    },
    {
      id: 11,
      filename: "AdrianJaramilloPortraits11.webp",
      rawFilename: "AdrianJaramilloPortraits-raw11.webp",
      title: "Kammerzell Details",
      description: "Close-up of the ornate wooden carvings and bottle-glass windows of the historic Maison Kammerzell.",
      hasRaw: false
    },
    {
      id: 12,
      filename: "AdrianJaramilloPortraits12.webp",
      rawFilename: "AdrianJaramilloPortraits-raw12.webp",
      title: "Evening Rain",
      description: "Neon signs reflecting off deep puddles in a narrow alleyway after a sudden downpour.",
      hasRaw: true
    },
    {
      id: 13,
      filename: "AdrianJaramilloPortraits13.webp",
      rawFilename: "AdrianJaramilloPortraits-raw13.webp",
      title: "Window Baker",
      description: "A local artisan dusting flour over fresh baguettes, captured through a slightly fogged bakery window.",
      hasRaw: true
    },
    {
      id: 14,
      filename: "AdrianJaramilloPortraits14.webp",
      rawFilename: "AdrianJaramilloPortraits-raw14.webp",
      title: "St. Paul Spires",
      description: "The twin spires of St. Paul's Church rising dramatically against a moody, overcast sky.",
      hasRaw: false
    },
    {
      id: 15,
      filename: "AdrianJaramilloPortraits15.webp",
      rawFilename: "AdrianJaramilloPortraits-raw15.webp",
      title: "Batorama Passing",
      description: "Tourists peering out from the glass roof of a Batorama boat sliding down the Ill river.",
      hasRaw: true
    },
    {
      id: 16,
      filename: "AdrianJaramilloPortraits16.webp",
      rawFilename: "AdrianJaramilloPortraits-raw16.webp",
      title: "Neustadt Grandeur",
      description: "The wide, imposing German imperial architecture of the Neustadt district bathed in harsh sunlight.",
      hasRaw: true
    },
    {
      id: 17,
      filename: "AdrianJaramilloPortraits17.webp",
      rawFilename: "AdrianJaramilloPortraits-raw17.webp",
      title: "Hidden Courtyard",
      description: "A quiet, secluded courtyard in the historical center, featuring an ancient well and creeping vines.",
      hasRaw: false
    },
    {
      id: 18,
      filename: "AdrianJaramilloPortraits18.webp",
      rawFilename: "AdrianJaramilloPortraits-raw18.webp",
      title: "Pigeon Flight",
      description: "A flock of pigeons scattering abruptly in front of the ornate sandstone arches of the cathedral.",
      hasRaw: true
    },
    {
      id: 19,
      filename: "AdrianJaramilloPortraits19.webp",
      rawFilename: "AdrianJaramilloPortraits-raw19.webp",
      title: "Botanical Glass",
      description: "Condensation on the inside of the tropical greenhouse at the University Botanical Gardens.",
      hasRaw: true
    },
    {
      id: 20,
      filename: "AdrianJaramilloPortraits20.webp",
      rawFilename: "AdrianJaramilloPortraits-raw20.webp",
      title: "Quai des Bateliers",
      description: "Pedestrians and cyclists sharing the sunlit promenade along the water at Quai des Bateliers.",
      hasRaw: false
    },
    {
      id: 21,
      filename: "AdrianJaramilloPortraits21.webp",
      rawFilename: "AdrianJaramilloPortraits-raw21.webp",
      title: "The Watcher",
      description: "Candid portrait of an elderly man leaning out of his window, observing the Portraits life below.",
      hasRaw: true
    },
    {
      id: 22,
      filename: "AdrianJaramilloPortraits22.webp",
      rawFilename: "AdrianJaramilloPortraits-raw22.webp",
      title: "Canal Locks",
      description: "Water rushing through the heavy wooden gates of the historic locks in Petite France.",
      hasRaw: true
    },
    {
      id: 23,
      filename: "AdrianJaramilloPortraits23.webp",
      rawFilename: "AdrianJaramilloPortraits-raw23.webp",
      title: "Market Day Colors",
      description: "Vibrant local produce stacked high at a busy weekend outdoor market stall.",
      hasRaw: false
    },
    {
      id: 24,
      filename: "AdrianJaramilloPortraits24.webp",
      rawFilename: "AdrianJaramilloPortraits-raw24.webp",
      title: "Rooftop Horizons",
      description: "A sea of steep, pitched roofs with terra cotta tiles stretching out toward the horizon.",
      hasRaw: true
    },
    {
      id: 25,
      filename: "AdrianJaramilloPortraits25.webp",
      rawFilename: "AdrianJaramilloPortraits-raw25.webp",
      title: "Winter Market Glow",
      description: "The warm, festive illumination of the wooden chalets during the Christkindelsmärik.",
      hasRaw: true
    },
    {
      id: 26,
      filename: "AdrianJaramilloPortraits26.webp",
      rawFilename: "AdrianJaramilloPortraits-raw26.webp",
      title: "Bridge Shadows",
      description: "Long, dramatic shadows cast by pedestrians walking across the Pont du Corbeau at sunset.",
      hasRaw: false
    }, */
];
