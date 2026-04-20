const imageFolder = "images/places-images/";

const photoDatabase = [
    {
      id: 1,
      filename: "AdrianJaramilloStreet1.webp",
      rawFilename: "AdrianJaramilloStreet-raw1.webp",
      title: "Morning Market",
      description: "The contrast between the shadows of the cathedral and the early morning vendors setting up their stalls in Place Kléber.",
      hasRaw: true
    },
    {
      id: 2,
      filename: "AdrianJaramilloStreet2.webp",
      rawFilename: "AdrianJaramilloStreet-raw2.webp",
      title: "Petite France Reflection",
      description: "A calm reflection of the half-timbered houses on the Ill river during dusk.",
      hasRaw: false
    },
    {
      id: 3,
      filename: "AdrianJaramilloStreet3.webp",
      rawFilename: "AdrianJaramilloStreet-raw3.webp",
      title: "Cathedral Shadows",
      description: "Harsh midday light cutting through the intricate gothic facade of Notre-Dame de Strasbourg.",
      hasRaw: true
    },
    {
      id: 4,
      filename: "AdrianJaramilloStreet4.webp",
      rawFilename: "AdrianJaramilloStreet-raw4.webp",
      title: "Cobblestone Commute",
      description: "A cyclist navigating the damp cobblestones of the old town during the morning rush.",
      hasRaw: true
    },
    {
      id: 5,
      filename: "AdrianJaramilloStreet5.webp",
      rawFilename: "AdrianJaramilloStreet-raw5.webp",
      title: "Vauban Dam Sights",
      description: "Panoramic view of the Ponts Couverts taken from the terrace of the Barrage Vauban under heavy clouds.",
      hasRaw: false
    },
    {
      id: 6,
      filename: "AdrianJaramilloStreet6.webp",
      rawFilename: "AdrianJaramilloStreet-raw6.webp",
      title: "Café Corner",
      description: "Patrons enjoying espresso outside a corner café in the Krutenau district, framed by overhanging ivy.",
      hasRaw: true
    },
    {
      id: 7,
      filename: "AdrianJaramilloStreet7.webp",
      rawFilename: "AdrianJaramilloStreet-raw7.webp",
      title: "Parliament Geometry",
      description: "Modern architectural lines and glass reflections at the European Parliament building.",
      hasRaw: true
    },
    {
      id: 8,
      filename: "AdrianJaramilloStreet8.webp",
      rawFilename: "AdrianJaramilloStreet-raw8.webp",
      title: "Orangerie Autumn",
      description: "Golden hour light filtering through the yellowing leaves along the pathways of Parc de l'Orangerie.",
      hasRaw: false
    },
    {
      id: 9,
      filename: "AdrianJaramilloStreet9.webp",
      rawFilename: "AdrianJaramilloStreet-raw9.webp",
      title: "Tramway Mist",
      description: "A modern tram emerging from a heavy winter fog crossing the Place de la République.",
      hasRaw: true
    },
    {
      id: 10,
      filename: "AdrianJaramilloStreet10.webp",
      rawFilename: "AdrianJaramilloStreet-raw10.webp",
      title: "Gutenberg Musician",
      description: "A street violinist silhouetted against the brightly lit carousel at Place Gutenberg.",
      hasRaw: true
    },
    {
      id: 11,
      filename: "AdrianJaramilloStreet11.webp",
      rawFilename: "AdrianJaramilloStreet-raw11.webp",
      title: "Kammerzell Details",
      description: "Close-up of the ornate wooden carvings and bottle-glass windows of the historic Maison Kammerzell.",
      hasRaw: false
    },
    {
      id: 12,
      filename: "AdrianJaramilloStreet12.webp",
      rawFilename: "AdrianJaramilloStreet-raw12.webp",
      title: "Evening Rain",
      description: "Neon signs reflecting off deep puddles in a narrow alleyway after a sudden downpour.",
      hasRaw: true
    },
    {
      id: 13,
      filename: "AdrianJaramilloStreet13.webp",
      rawFilename: "AdrianJaramilloStreet-raw13.webp",
      title: "Window Baker",
      description: "A local artisan dusting flour over fresh baguettes, captured through a slightly fogged bakery window.",
      hasRaw: true
    },
    {
      id: 14,
      filename: "AdrianJaramilloStreet14.webp",
      rawFilename: "AdrianJaramilloStreet-raw14.webp",
      title: "St. Paul Spires",
      description: "The twin spires of St. Paul's Church rising dramatically against a moody, overcast sky.",
      hasRaw: false
    },
    {
      id: 15,
      filename: "AdrianJaramilloStreet15.webp",
      rawFilename: "AdrianJaramilloStreet-raw15.webp",
      title: "Batorama Passing",
      description: "Tourists peering out from the glass roof of a Batorama boat sliding down the Ill river.",
      hasRaw: true
    },
    {
      id: 16,
      filename: "AdrianJaramilloStreet16.webp",
      rawFilename: "AdrianJaramilloStreet-raw16.webp",
      title: "Neustadt Grandeur",
      description: "The wide, imposing German imperial architecture of the Neustadt district bathed in harsh sunlight.",
      hasRaw: true
    },
    {
      id: 17,
      filename: "AdrianJaramilloStreet17.webp",
      rawFilename: "AdrianJaramilloStreet-raw17.webp",
      title: "Hidden Courtyard",
      description: "A quiet, secluded courtyard in the historical center, featuring an ancient well and creeping vines.",
      hasRaw: false
    },
    {
      id: 18,
      filename: "AdrianJaramilloStreet18.webp",
      rawFilename: "AdrianJaramilloStreet-raw18.webp",
      title: "Pigeon Flight",
      description: "A flock of pigeons scattering abruptly in front of the ornate sandstone arches of the cathedral.",
      hasRaw: true
    },
    {
      id: 19,
      filename: "AdrianJaramilloStreet19.webp",
      rawFilename: "AdrianJaramilloStreet-raw19.webp",
      title: "Botanical Glass",
      description: "Condensation on the inside of the tropical greenhouse at the University Botanical Gardens.",
      hasRaw: true
    },
    {
      id: 20,
      filename: "AdrianJaramilloStreet20.webp",
      rawFilename: "AdrianJaramilloStreet-raw20.webp",
      title: "Quai des Bateliers",
      description: "Pedestrians and cyclists sharing the sunlit promenade along the water at Quai des Bateliers.",
      hasRaw: false
    },
    {
      id: 21,
      filename: "AdrianJaramilloStreet21.webp",
      rawFilename: "AdrianJaramilloStreet-raw21.webp",
      title: "The Watcher",
      description: "Candid portrait of an elderly man leaning out of his window, observing the street life below.",
      hasRaw: true
    },
    {
      id: 22,
      filename: "AdrianJaramilloStreet22.webp",
      rawFilename: "AdrianJaramilloStreet-raw22.webp",
      title: "Canal Locks",
      description: "Water rushing through the heavy wooden gates of the historic locks in Petite France.",
      hasRaw: true
    },
    {
      id: 23,
      filename: "AdrianJaramilloStreet23.webp",
      rawFilename: "AdrianJaramilloStreet-raw23.webp",
      title: "Market Day Colors",
      description: "Vibrant local produce stacked high at a busy weekend outdoor market stall.",
      hasRaw: false
    },
    {
      id: 24,
      filename: "AdrianJaramilloStreet24.webp",
      rawFilename: "AdrianJaramilloStreet-raw24.webp",
      title: "Rooftop Horizons",
      description: "A sea of steep, pitched roofs with terra cotta tiles stretching out toward the horizon.",
      hasRaw: true
    },
    {
      id: 25,
      filename: "AdrianJaramilloStreet25.webp",
      rawFilename: "AdrianJaramilloStreet-raw25.webp",
      title: "Winter Market Glow",
      description: "The warm, festive illumination of the wooden chalets during the Christkindelsmärik.",
      hasRaw: true
    },
    {
      id: 26,
      filename: "AdrianJaramilloStreet26.webp",
      rawFilename: "AdrianJaramilloStreet-raw26.webp",
      title: "Bridge Shadows",
      description: "Long, dramatic shadows cast by pedestrians walking across the Pont du Corbeau at sunset.",
      hasRaw: false
    },
];
