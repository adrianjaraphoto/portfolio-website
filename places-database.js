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
      title: "Vox Trams I",
      description: "Two trams are stationed under the glowing red VOX sign at the cinema during a clear night in Strasbourg.",
      hasRaw: false
    },
    {
      id: 11,
      filename: "AdrianJaramilloStreet11.webp",
      rawFilename: "AdrianJaramilloStreet-raw11.webp",
      title: "Langstross",
      description: "Close-up of the ornate wooden carvings and bottle-glass windows of the historic Maison Kammerzell.",
      hasRaw: false
    },
    {
      id: 12,
      filename: "AdrianJaramilloStreet12.webp",
      rawFilename: "AdrianJaramilloStreet-raw12.webp",
      title: "Framed Colors",
      description: "Colorful half timbered houses are visible through a stone opening at Écluse A in Petite France.",
      hasRaw: false
    },
    {
      id: 13,
      filename: "AdrianJaramilloStreet13.webp",
      rawFilename: "AdrianJaramilloStreet-raw13.webp",
      title: "Scooter",
      description: "A rider on an electric scooter travels toward a bright sunset on Quai Saint Thomas.",
      hasRaw: true
    },
    {
      id: 14,
      filename: "AdrianJaramilloStreet14.webp",
      rawFilename: "AdrianJaramilloStreet-raw14.webp",
      title: "Rue Mercière",
      description: "Two people look toward the ornate facade of the Strasbourg Cathedral from Rue Mercière.",
      hasRaw: false
    },
    {
      id: 15,
      filename: "AdrianJaramilloStreet15.webp",
      rawFilename: "AdrianJaramilloStreet-raw15.webp",
      title: "Neon II",
      description: "A modern tram passes the bright red neon sign of Cinema Vox at night.",
      hasRaw: false
    },
    {
      id: 16,
      filename: "AdrianJaramilloStreet16.webp",
      rawFilename: "AdrianJaramilloStreet-raw16.webp",
      title: "Blur",
      description: "A blurred cyclist crosses the road in front of historic buildings and a distant spire at Pont de la Fonderie.",
      hasRaw: true
    },
    {
      id: 17,
      filename: "AdrianJaramilloStreet17.webp",
      rawFilename: "AdrianJaramilloStreet-raw17.webp",
      title: "Benjamin Zix",
      description: "Red heart shaped locks are fastened to a metal fence overlooking the water at Place Benjamin Zix.",
      hasRaw: false
    },
    {
      id: 18,
      filename: "AdrianJaramilloStreet18.webp",
      rawFilename: "AdrianJaramilloStreet-raw18.webp",
      title: "Cinema I",
      description: "People walk past the illuminated entrance and movie posters of the Cinema Vox.",
      hasRaw: false
    },
    {
      id: 19,
      filename: "AdrianJaramilloStreet19.webp",
      rawFilename: "AdrianJaramilloStreet-raw19.webp",
      title: "Heart Gate",
      description: "A metal gate is covered in red heart shaped locks on the Pont Saint Martin in Petite France.",
      hasRaw: false
    },
    {
      id: 20,
      filename: "AdrianJaramilloStreet20.webp",
      rawFilename: "AdrianJaramilloStreet-raw20.webp",
      title: "Dockside",
      description: "Two people sit on the ground at Presqu'île André Malraux watching the sunset reflect on the water.",
      hasRaw: true
    },
    {
      id: 21,
      filename: "AdrianJaramilloStreet21.webp",
      rawFilename: "AdrianJaramilloStreet-raw21.webp",
      title: "Foggy",
      description: "The red sandstone spire of the Strasbourg Cathedral fades into a thick blue mist.",
      hasRaw: true
    },
    {
      id: 22,
      filename: "AdrianJaramilloStreet22.webp",
      rawFilename: "AdrianJaramilloStreet-raw22.webp",
      title: "Blur II",
      description: "A motion blur shot captures a cyclist in winter gear passing buildings on Quai Kellerman.",
      hasRaw: false
    },
    {
      id: 23,
      filename: "AdrianJaramilloStreet23.webp",
      rawFilename: "AdrianJaramilloStreet-raw23.webp",
      title: "Badge",
      description: "A close focus highlights the silver Mazda logo on the hood of a red vehicle in Centre Ville.",
      hasRaw: true
    },
    {
      id: 24,
      filename: "AdrianJaramilloStreet24.webp",
      rawFilename: "AdrianJaramilloStreet-raw24.webp",
      title: "Symmetry",
      description: "Symmetrical architecture frames a traveler walking up the stairs between two escalators at Gare Centrale.",
      hasRaw: true
    },
    {
      id: 25,
      filename: "AdrianJaramilloStreet25.webp",
      rawFilename: "AdrianJaramilloStreet-raw25.webp",
      title: "Cockpit II",
      description: "A view through a car window reveals the interior of a vehicle parked in Place Kléber.",
      hasRaw: true
    },
    {
      id: 26,
      filename: "AdrianJaramilloStreet26.webp",
      rawFilename: "AdrianJaramilloStreet-raw26.webp",
      title: "Kléber",
      description: "A person walks across the damp pavement in Centre Ville as the skyline reflects in a puddle.",
      hasRaw: true
    },
    {
      id: 27,
      filename: "AdrianJaramilloStreet27.webp",
      rawFilename: "AdrianJaramilloStreet-raw27.webp",
      title: "Dominicains",
      description: "A man in a newsboy cap walks through a narrow passage toward the street on Rue des Dominicains.",
      hasRaw: true
    },
];
