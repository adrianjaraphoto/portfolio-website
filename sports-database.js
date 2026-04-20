const imageFolder = "images/sports-images/";

const photoDatabase = [
    {
      id: 1,
      filename: "AdrianJaramilloSports1.webp",
      rawFilename: "AdrianJaramilloSports-raw1.webp",
      title: "Cleat Control",
      description: "A close up shot features a player resting a silver Nike cleat on a Champions League football over green turf.",
      hasRaw: true
    },
    {
      id: 2,
      filename: "AdrianJaramilloSports2.webp",
      rawFilename: "AdrianJaramilloSports-raw2.webp",
      title: "Mid-Kick Action",
      description: "A man in a navy long sleeve shirt and black shorts strikes a football during a bright day on an outdoor pitch.",
      hasRaw: true
    },
    {
      id: 3,
      filename: "AdrianJaramilloSports3.webp",
      rawFilename: "AdrianJaramilloSports-raw3.webp",
      title: "Pitch Walk",
      description: "A man wearing a navy athletic quarter zip and black shorts walks across a green football field.",
      hasRaw: true
    },
    {
      id: 4,
      filename: "AdrianJaramilloSports4.webp",
      rawFilename: "AdrianJaramilloSports-raw4.webp",
      title: "Ball Ready",
      description: "A player in a white and black training kit stands with one foot on the ball while looking across the field.",
      hasRaw: true
    },
    {
      id: 5,
      filename: "AdrianJaramilloSports5.webp",
      rawFilename: "AdrianJaramilloSports-raw5.webp",
      title: "Power Strike",
      description: "A football player wearing a white Nike kit executes a powerful kick with his right foot on a sunny day.",
      hasRaw: true
    },
    {
      id: 6,
      filename: "AdrianJaramilloSports6.webp",
      rawFilename: "AdrianJaramilloSports-raw6.webp",
      title: "Juggling Skills",
      description: "A man in white athletic gear demonstrates focus while juggling a star patterned football with his knee.",
      hasRaw: true
    },
    {
      id: 7,
      filename: "AdrianJaramilloSports7.webp",
      rawFilename: "AdrianJaramilloSports-raw7.webp",
      title: "Dribbling Motion",
      description: "A player in a white and black long sleeve top tracks the movement of a football during an active drill.",
      hasRaw: true
    },
    {
      id: 8,
      filename: "AdrianJaramilloSports8.webp",
      rawFilename: "AdrianJaramilloSports-raw8.webp",
      title: "Sunset Kickflip",
      description: "A skateboarder catches significant air performing a trick in front of a modern building during the golden hour.",
      hasRaw: false
    },
    {
      id: 9,
      filename: "AdrianJaramilloSports9.webp",
      rawFilename: "AdrianJaramilloSports-raw9.webp",
      title: "Field Focus",
      description: "A medium shot captures a man in a navy athletic top looking intently across the field during a bright day.",
      hasRaw: true
    },
    {
      id: 10,
      filename: "AdrianJaramilloSports10.webp",
      rawFilename: "AdrianJaramilloSports-raw10.webp",
      title: "Golden Air",
      description: "A skateboarder is silhouetted against the sunset while performing a high jump in front of a blue building.",
      hasRaw: false
    },
    {
      id: 11,
      filename: "AdrianJaramilloSports11.webp",
      rawFilename: "AdrianJaramilloSports-raw11.webp",
      title: "Knee Juggling",
      description: "A player in white athletic gear maintains focus while balancing a star patterned football on his knee.",
      hasRaw: true
    },
    {
      id: 12,
      filename: "AdrianJaramilloSports12.webp",
      rawFilename: "AdrianJaramilloSports-raw12.webp",
      title: "Dribble Prep",
      description: "A close up shot follows a player in black shorts and cleats as he approaches a football on the turf.",
      hasRaw: true
    },
    {
      id: 13,
      filename: "AdrianJaramilloSports13.webp",
      rawFilename: "AdrianJaramilloSports-raw13.webp",
      title: "Winding Up",
      description: "A man in a navy long sleeve shirt and black shorts prepares to strike a football with full force.",
      hasRaw: true
    },
    {
      id: 14,
      filename: "AdrianJaramilloSports14.webp",
      rawFilename: "AdrianJaramilloSports-raw14.webp",
      title: "Pitch Presence",
      description: "A wide shot features a man in a white training kit walking across a green field framed by a goal post.",
      hasRaw: true
    },
    {
      id: 15,
      filename: "AdrianJaramilloSports15.webp",
      rawFilename: "AdrianJaramilloSports-raw15.webp",
      title: "Cleat Contact",
      description: "A detailed action shot shows a silver Nike cleat making contact with a football mid air above the turf.",
      hasRaw: true
    },
    {
      id: 16,
      filename: "AdrianJaramilloSports16.webp",
      rawFilename: "AdrianJaramilloSports-raw16.webp",
      title: "Precision Tap",
      description: "A player wearing a navy top and black shorts uses his cleat to control a football on a sunny outdoor pitch.",
      hasRaw: true
    },
    /* {
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
