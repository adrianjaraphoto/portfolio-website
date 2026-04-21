const imageFolder = "images/places-images/";

const photoDatabase = [
    {
      id: 1,
      filename: "AdrianJaramilloStreet1.webp",
      rawFilename: "AdrianJaramilloStreet-raw1.webp",
      title: "Sunset",
      description: "Two people walk along a narrow path at Quai du Général Koenig as the setting sun reflects off the river water.",
      hasRaw: true
    },
    {
      id: 2,
      filename: "AdrianJaramilloStreet2.webp",
      rawFilename: "AdrianJaramilloStreet-raw2.webp",
      title: "Ornate",
      description: "A black and white shot focuses on an ornate street lamp overlooking the water at Écluse A de la Petite France.",
      hasRaw: true
    },
    {
      id: 3,
      filename: "AdrianJaramilloStreet3.webp",
      rawFilename: "AdrianJaramilloStreet-raw3.webp",
      title: "Neon",
      description: "A long exposure captures the blurred motion of a CTS tram passing vibrant neon signs at the Vox cinema.",
      hasRaw: true
    },
    {
      id: 4,
      filename: "AdrianJaramilloStreet4.webp",
      rawFilename: "AdrianJaramilloStreet-raw4.webp",
      title: "Gothic",
      description: "Pedestrians walk down the cobblestone Grande-Rue toward the fog shrouded spire of the Strasbourg Cathedral.",
      hasRaw: false
    },
    {
      id: 5,
      filename: "AdrianJaramilloStreet5.webp",
      rawFilename: "AdrianJaramilloStreet-raw5.webp",
      title: "Swan",
      description: "A couple walks along the riverbank in Petite France, Strasbourg while a white swan glides through the water below.",
      hasRaw: true
    },
    {
      id: 6,
      filename: "AdrianJaramilloStreet6.webp",
      rawFilename: "AdrianJaramilloStreet-raw6.webp",
      title: "Historic Waterfront",
      description: "A wide view from Pont Royal captures the Ill river, tour boats, and the historic skyline near Gallia station.",
      hasRaw: true
    },
    {
      id: 7,
      filename: "AdrianJaramilloStreet7.webp",
      rawFilename: "AdrianJaramilloStreet-raw7.webp",
      title: "Golden",
      description: "A person walks toward a bridge at Presqu'île André Malraux during a warm sunset that illuminates the trees.",
      hasRaw: true
    },
    {
      id: 8,
      filename: "AdrianJaramilloStreet8.webp",
      rawFilename: "AdrianJaramilloStreet-raw8.webp",
      title: "Cockpit",
      description: "A close up shot through a car window shows the steering wheel and dashboard of a red vehicle parked in Strasbourg.",
      hasRaw: true
    },
    {
      id: 9,
      filename: "AdrianJaramilloStreet9.webp",
      rawFilename: "AdrianJaramilloStreet-raw9.webp",
      title: "Underground",
      description: "A person in a yellow jacket descends an escalator at the Gare Centrale Strasbourg station under cool blue lighting.",
      hasRaw: true
    },
    {
      id: 10,
      filename: "AdrianJaramilloStreet10.webp",
      rawFilename: "AdrianJaramilloStreet-raw10.webp",
      title: "Vox Trams",
      description: "Two trams are stationed under the glowing red VOX sign at the cinema during a clear night in Strasbourg.",
      hasRaw: false
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
      hasRaw: false
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
      hasRaw: false
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
      hasRaw: false
    },
    {
      id: 19,
      filename: "AdrianJaramilloStreet19.webp",
      rawFilename: "AdrianJaramilloStreet-raw19.webp",
      title: "Botanical Glass",
      description: "Condensation on the inside of the tropical greenhouse at the University Botanical Gardens.",
      hasRaw: false
    },
    {
      id: 20,
      filename: "AdrianJaramilloStreet20.webp",
      rawFilename: "AdrianJaramilloStreet-raw20.webp",
      title: "Quai des Bateliers",
      description: "Pedestrians and cyclists sharing the sunlit promenade along the water at Quai des Bateliers.",
      hasRaw: true
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
      hasRaw: false
    },
    {
      id: 23,
      filename: "AdrianJaramilloStreet23.webp",
      rawFilename: "AdrianJaramilloStreet-raw23.webp",
      title: "Market Day Colors",
      description: "Vibrant local produce stacked high at a busy weekend outdoor market stall.",
      hasRaw: true
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
      hasRaw: true
    },
    {
      id: 27,
      filename: "AdrianJaramilloStreet27.webp",
      rawFilename: "AdrianJaramilloStreet-raw27.webp",
      title: "Bridge",
      description: "Long, dramatic shadows cast by pedestrians walking across the Pont du Corbeau at sunset.",
      hasRaw: true
    },
];
