const DANE_LIST = [
  'SP七级', 'SP六级', 'SP五级', 'SP四级', 'SP三级', 'SP二级', 'SP一级', 'SP初段', 'SP二段', 'SP三段', 'SP四段', 'SP五段', 'SP六段', 'SP七段', 'SP八段', 'SP九段', 'SP十段', 'SP中伝', 'SP皆伝',
  'DP七级', 'DP六级', 'DP五级', 'DP四级', 'DP三级', 'DP二级', 'DP一级', 'DP初段', 'DP二段', 'DP三段', 'DP四段', 'DP五段', 'DP六段', 'DP七段', 'DP八段', 'DP九段', 'DP十段', 'DP中伝', 'DP皆伝'
];

const DIFFICULTY_LIST = ['BEGINNER', 'NORMAL', 'HYPER', 'ANOTHER', 'LEGENDARIA'];

// _.map(songList, i => ({
//   "artist": i.artist,
//   "genre": i.genre,
//   "id": i.entryId,
//   "title": i.title,
//   "title_ascii": i.asciiTitle
// }));
const SONG_LIST = [
  {
    "artist": "dj nagureo",
    "genre": "PIANO AMBIENT",
    "id": 1000,
    "title": "5.1.1.",
    "title_ascii": "5.1.1."
  },
  {
    "artist": "TAKA",
    "genre": "DIGI-ROCK",
    "id": 1001,
    "title": "GRADIUSIC CYBER",
    "title_ascii": "GRADIUSIC CYBER"
  },
  {
    "artist": "SPIRITUAL RIDE",
    "genre": "ALTERNATIVE ROCK",
    "id": 1002,
    "title": "Prince on a star",
    "title_ascii": "Prince on a star"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "RAVE",
    "id": 1003,
    "title": "R3",
    "title_ascii": "R3"
  },
  {
    "artist": "ANAL SPYDER",
    "genre": "TRIBAL HOUSE",
    "id": 1004,
    "title": "Macho Gang",
    "title_ascii": "Macho Gang"
  },
  {
    "artist": "L.E.D. LIGHT",
    "genre": "TRANCE",
    "id": 1005,
    "title": "THE EARTH LIGHT",
    "title_ascii": "THE EARTH LIGHT"
  },
  {
    "artist": "SLAKE",
    "genre": "BIG BEAT",
    "id": 1006,
    "title": "GAMBOL",
    "title_ascii": "GAMBOL"
  },
  {
    "artist": "DJ Swan",
    "genre": "DRUM'N'BASS",
    "id": 1007,
    "title": "gentle stress",
    "title_ascii": "gentle stress"
  },
  {
    "artist": "L.E.D. LIGHT",
    "genre": "TRANCE",
    "id": 1008,
    "title": "GENOM SCREAMS",
    "title_ascii": "GENOM SCREAMS"
  },
  {
    "artist": "SLAKE",
    "genre": "TECHNO",
    "id": 1009,
    "title": "22DUNK",
    "title_ascii": "22DUNK"
  },
  {
    "artist": "baby weapon  feat.Asuka.M",
    "genre": "DANCE POP",
    "id": 1010,
    "title": "Dr.LOVE",
    "title_ascii": "Dr.LOVE"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "EURO BEAT",
    "id": 1011,
    "title": "LUV TO ME(disco mix)",
    "title_ascii": "LUV TO ME(disco mix)"
  },
  {
    "artist": "Honey P feat.Asuka.M",
    "genre": "DANCE POP",
    "id": 1012,
    "title": "Melt in my arms",
    "title_ascii": "Melt in my arms"
  },
  {
    "artist": "NAOKI",
    "genre": "EURO GROOVE",
    "id": 1013,
    "title": "BRILLIANT 2U",
    "title_ascii": "BRILLIANT 2U"
  },
  {
    "artist": "dj nagureo",
    "genre": "DANCE POP",
    "id": 1015,
    "title": "deep in you",
    "title_ascii": "deep in you"
  },
  {
    "artist": "DJ FX",
    "genre": "TRANCE TECHNO",
    "id": 1016,
    "title": "Special energy",
    "title_ascii": "Special energy"
  },
  {
    "artist": "SYMPHONIC DEFOGGERS",
    "genre": "FUTURE JAZZ",
    "id": 1017,
    "title": "RUGGED ASH",
    "title_ascii": "RUGGED ASH"
  },
  {
    "artist": "QUADRA",
    "genre": "DRUM'N BASS",
    "id": 1018,
    "title": "diving money",
    "title_ascii": "diving money"
  },
  {
    "artist": "N.M.R.",
    "genre": "DANCE POP",
    "id": 1019,
    "title": "KEEP ON MOVIN'",
    "title_ascii": "KEEP ON MOVIN'"
  },
  {
    "artist": "190",
    "genre": "JUNGLE",
    "id": 1020,
    "title": "PARANOIA MAX～DIRTY MIX～",
    "title_ascii": "PARANOIA MAX-DIRTY MIX-"
  },
  {
    "artist": "JJ COMPANY",
    "genre": "SOUL CLASSIC BALLAD",
    "id": 1201,
    "title": "Be in my paradise",
    "title_ascii": "Be in my paradise"
  },
  {
    "artist": "m-flo",
    "genre": "JAPANESE HIPHOP",
    "id": 1202,
    "title": "been so long",
    "title_ascii": "been so long"
  },
  {
    "artist": "QUADRA",
    "genre": "AMBIENT",
    "id": 1203,
    "title": "Beginning of life",
    "title_ascii": "Beginning of life"
  },
  {
    "artist": "JJ COMPANY",
    "genre": "SOUL CLASSIC",
    "id": 1204,
    "title": "celebrate",
    "title_ascii": "celebrate"
  },
  {
    "artist": "QUADRA",
    "genre": "DRUM'N BASS",
    "id": 1205,
    "title": "Deep Clear Eyes",
    "title_ascii": "Deep Clear Eyes"
  },
  {
    "artist": "reo-nagumo",
    "genre": "BALLAD",
    "id": 1206,
    "title": "Do you love me?",
    "title_ascii": "Do you love me?"
  },
  {
    "artist": "e.o.s",
    "genre": "RAVE",
    "id": 1207,
    "title": "e-motion",
    "title_ascii": "e-motion"
  },
  {
    "artist": "DJ mazinger featuring Muhammad",
    "genre": "HIPHOP",
    "id": 1208,
    "title": "g.m.d.",
    "title_ascii": "g.m.d."
  },
  {
    "artist": "QUADRA",
    "genre": "WORLD GROOVE",
    "id": 1209,
    "title": "into the world",
    "title_ascii": "into the world"
  },
  {
    "artist": "Jam Master'73",
    "genre": "REGGAE",
    "id": 1210,
    "title": "jam jam reggae",
    "title_ascii": "jam jam reggae"
  },
  {
    "artist": "LOVEMINTS",
    "genre": "SOUL",
    "id": 1211,
    "title": "LOVE SO GROOVY",
    "title_ascii": "LOVE SO GROOVY"
  },
  {
    "artist": "MIRAK",
    "genre": "TECHNO",
    "id": 1212,
    "title": "OVERDOSER",
    "title_ascii": "OVERDOSER"
  },
  {
    "artist": "dj nagureo",
    "genre": "AMBIENT TECHNO",
    "id": 1213,
    "title": "patsenner",
    "title_ascii": "patsenner"
  },
  {
    "artist": "nite system",
    "genre": "HOUSE",
    "id": 1214,
    "title": "perfect free",
    "title_ascii": "perfect free"
  },
  {
    "artist": "Crunky Boy featuring Muhammad",
    "genre": "REGGAE",
    "id": 1215,
    "title": "Queen's Jamaica (astria mix)",
    "title_ascii": "Queen's Jamaica (astria mix)"
  },
  {
    "artist": "NITE SYSTEM",
    "genre": "KONAMIX",
    "id": 1216,
    "title": "Salamander Beat Crush mix",
    "title_ascii": "Salamander Beat Crush mix"
  },
  {
    "artist": "THE BALD HEADS",
    "genre": "SKA",
    "id": 1217,
    "title": "Ska a go go",
    "title_ascii": "Ska a go go"
  },
  {
    "artist": "m-flo",
    "genre": "JAPANESE HIPHOP",
    "id": 1218,
    "title": "The Rhyme Brokers",
    "title_ascii": "The Rhyme Brokers"
  },
  {
    "artist": "m-flo",
    "genre": "HIPHOP",
    "id": 1219,
    "title": "The Theme from \"Flo-jack\"",
    "title_ascii": "The Theme from \"Flo-jack\""
  },
  {
    "artist": "MONDAY MICHIRU",
    "genre": "JAZZ HOUSE",
    "id": 1220,
    "title": "YOU MAKE ME",
    "title_ascii": "YOU MAKE ME"
  },
  {
    "artist": "DJ Senda & Tiny-K",
    "genre": "DJ BATTLE",
    "id": 1401,
    "title": "NaHaNaHa vs. Gattchoon Battle",
    "title_ascii": "NaHaNaHa vs. Gattchoon Battle"
  },
  {
    "artist": "Laugh & Peace",
    "genre": "DRUM'N BASS",
    "id": 1402,
    "title": "ちょっときいてな(ZANSHIN-NA MIX)",
    "title_ascii": "CHOTTO KIITE NA (ZANSHIN-NA MIX)"
  },
  {
    "artist": "dj TAKA",
    "genre": "CHILL OUT",
    "id": 2000,
    "title": ".59",
    "title_ascii": ".59"
  },
  {
    "artist": "Vivi",
    "genre": "DANCE POP",
    "id": 2001,
    "title": "Bad boy",
    "title_ascii": "Bad boy"
  },
  {
    "artist": "good-cool",
    "genre": "DISCO",
    "id": 2002,
    "title": "Dancin' Into The Night",
    "title_ascii": "Dancin' Into The Night"
  },
  {
    "artist": "TaQ",
    "genre": "MINIMAL",
    "id": 2003,
    "title": "Digital MinD(A/T Libra mix)",
    "title_ascii": "Digital MinD(A/T Libra mix)"
  },
  {
    "artist": "dj nagureo",
    "genre": "TECHNO",
    "id": 2004,
    "title": "dong-tepo no.1",
    "title_ascii": "dong-tepo no.1"
  },
  {
    "artist": "TaQ",
    "genre": "BIG BEAT",
    "id": 2005,
    "title": "Electro Tuned(the SubS mix)",
    "title_ascii": "Electro Tuned(the SubS mix)"
  },
  {
    "artist": "good-cool",
    "genre": "ITALO HOUSE",
    "id": 2006,
    "title": "I Was The One",
    "title_ascii": "I Was The One"
  },
  {
    "artist": "dj TAKA",
    "genre": "SPEED GARAGE",
    "id": 2007,
    "title": "I'm In Love Again",
    "title_ascii": "I'm In Love Again"
  },
  {
    "artist": "TaQ",
    "genre": "GOA TRANCE",
    "id": 2008,
    "title": "Indigo Vision(full flavour hide around mix)",
    "title_ascii": "Indigo Vision(full flavour hide around mix)"
  },
  {
    "artist": "DJ SIMON",
    "genre": "SPIRITUAL",
    "id": 2009,
    "title": "SOFT LANDING ON THE BODY",
    "title_ascii": "SOFT LANDING ON THE BODY"
  },
  {
    "artist": "good-cool",
    "genre": "HOUSE",
    "id": 2010,
    "title": "Headache",
    "title_ascii": "Headache"
  },
  {
    "artist": "good-cool",
    "genre": "WARP HOUSE",
    "id": 2011,
    "title": "Hitch Hiker",
    "title_ascii": "Hitch Hiker"
  },
  {
    "artist": "dj TAKA feat. DE-SIRE",
    "genre": "JUNGLE",
    "id": 2012,
    "title": "SP-TRIP MACHINE(for beatmania II)",
    "title_ascii": "SP-TRIP MACHINE(for beatmania II)"
  },
  {
    "artist": "dj TAKA & DAY BREAKERS",
    "genre": "HIPHOP",
    "id": 2013,
    "title": "Second Style(Hip Hop Paradise)",
    "title_ascii": "Second Style(Hip Hop Paradise)"
  },
  {
    "artist": "Shorai",
    "genre": "SOUL",
    "id": 2014,
    "title": "Shine On",
    "title_ascii": "Shine On"
  },
  {
    "artist": "dj TAKA feat. UZI-LAY",
    "genre": "JAZZ FUNK",
    "id": 2016,
    "title": "PUT YOUR FAITH IN ME(for beatmania II)",
    "title_ascii": "PUT YOUR FAITH IN ME(for beatmania II)"
  },
  {
    "artist": "Satoru Shionoya + Satoshi Tomiie",
    "genre": "HOUSE",
    "id": 2201,
    "title": "Brazilian Rhyme",
    "title_ascii": "Brazilian Rhyme"
  },
  {
    "artist": "ON",
    "genre": "HARD BAG",
    "id": 2202,
    "title": "Get on Beat",
    "title_ascii": "Get on Beat"
  },
  {
    "artist": "Hirofumi Asamoto (ram jam world)",
    "genre": "DRUM'N'BASS",
    "id": 2203,
    "title": "Junglist King",
    "title_ascii": "Junglist King"
  },
  {
    "artist": "Hirofumi Asamoto (ram jam world)",
    "genre": "DRUM'N'BASS",
    "id": 2204,
    "title": "Junglist King (long)",
    "title_ascii": "Junglist King (long)"
  },
  {
    "artist": "STONE BROS.",
    "genre": "MIAMI BASS",
    "id": 2205,
    "title": "LET THE BEAT HIT EM! BASS MIX",
    "title_ascii": "LET THE BEAT HIT EM! BASS MIX"
  },
  {
    "artist": "MONDAY MICHIRU",
    "genre": "JAZZ DRUM'N'BASS",
    "id": 2206,
    "title": "lovin' you",
    "title_ascii": "lovin' you"
  },
  {
    "artist": "m-flo",
    "genre": "HIPHOP & SOUL",
    "id": 2207,
    "title": "Mirrorball Satellite 2012",
    "title_ascii": "Mirrorball Satellite 2012"
  },
  {
    "artist": "SILVA",
    "genre": "DISCO/HOUSE",
    "id": 2208,
    "title": "morning prayer",
    "title_ascii": "morning prayer"
  },
  {
    "artist": "Hirofumi Asamoto (ram jam world)",
    "genre": "SOUL CLASSIC",
    "id": 2209,
    "title": "Panorama",
    "title_ascii": "Panorama"
  },
  {
    "artist": "DR.BOMBAY",
    "genre": "INDIE EURO/DANCE",
    "id": 2210,
    "title": "S.O.S.",
    "title_ascii": "S.O.S."
  },
  {
    "artist": "double",
    "genre": "JAPANESE R&B",
    "id": 2211,
    "title": "Shake",
    "title_ascii": "Shake"
  },
  {
    "artist": "DR.BOMBAY",
    "genre": "INDIE EURO/DANCE",
    "id": 2212,
    "title": "踊る！福神漬(CALCUTTA)",
    "title_ascii": "CALCUTTA"
  },
  {
    "artist": "NAOKI",
    "genre": "HYPER EUROBEAT",
    "id": 3000,
    "title": "CAN'T STOP FALLIN'IN LOVE",
    "title_ascii": "CAN'T STOP FALLIN'IN LOVE"
  },
  {
    "artist": "dj TAKA feat. JP Miles",
    "genre": "HAPPY HANDBAG",
    "id": 3001,
    "title": "Don't Stop!",
    "title_ascii": "Don't Stop!"
  },
  {
    "artist": "NAOKI",
    "genre": "SPEED RAVE",
    "id": 3002,
    "title": "DYNAMITE RAVE",
    "title_ascii": "DYNAMITE RAVE"
  },
  {
    "artist": "NO.9",
    "genre": "DANCE SPEED",
    "id": 3003,
    "title": "END OF THE CENTURY",
    "title_ascii": "END OF THE CENTURY"
  },
  {
    "artist": "TaQ",
    "genre": "DRUM'N'BASS",
    "id": 3004,
    "title": "era (nostalmix)",
    "title_ascii": "era (nostalmix)"
  },
  {
    "artist": "TaQ",
    "genre": "HARD TECHNO",
    "id": 3005,
    "title": "Holic",
    "title_ascii": "Holic"
  },
  {
    "artist": "dj TAKA",
    "genre": "DIGI-ROCK",
    "id": 3006,
    "title": "LEADING CYBER",
    "title_ascii": "LEADING CYBER"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "PIANO AMBIENT",
    "id": 3007,
    "title": "Presto",
    "title_ascii": "Presto"
  },
  {
    "artist": "tigerYAMATO with ultrabeatbox",
    "genre": "RAVE",
    "id": 3008,
    "title": "R5",
    "title_ascii": "R5"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 3009,
    "title": "REINCARNATION",
    "title_ascii": "REINCARNATION"
  },
  {
    "artist": "TaQ",
    "genre": "BIG BEAT",
    "id": 3010,
    "title": "Schlagwerk",
    "title_ascii": "Schlagwerk"
  },
  {
    "artist": "good-cool",
    "genre": "EPIC HOUSE",
    "id": 3011,
    "title": "Skyscraper",
    "title_ascii": "Skyscraper"
  },
  {
    "artist": "dj TAKA",
    "genre": "AMBIENT",
    "id": 3012,
    "title": "Tangerine Stream",
    "title_ascii": "Tangerine Stream"
  },
  {
    "artist": "Lion Musashi",
    "genre": "WORLD HOUSE",
    "id": 3013,
    "title": "THE SAFARI",
    "title_ascii": "THE SAFARI"
  },
  {
    "artist": "Quadra with DJ FX",
    "genre": "TECHNO",
    "id": 3014,
    "title": "Cold Pulse",
    "title_ascii": "Cold Pulse"
  },
  {
    "artist": "SYMPHONIC DEFOGGERS",
    "genre": "LATIN HOUSE",
    "id": 3015,
    "title": "Get me in your sight",
    "title_ascii": "Get me in your sight"
  },
  {
    "artist": "Asuka.M",
    "genre": "DANCE POP",
    "id": 3016,
    "title": "IS THIS LOVE?",
    "title_ascii": "IS THIS LOVE?"
  },
  {
    "artist": "good-cool",
    "genre": "RAVE",
    "id": 3017,
    "title": "Sense",
    "title_ascii": "Sense"
  },
  {
    "artist": "good-cool feat. JP Miles",
    "genre": "GARAGE HOUSE",
    "id": 3018,
    "title": "never let you down",
    "title_ascii": "never let you down"
  },
  {
    "artist": "SILVA",
    "genre": "HOUSE",
    "id": 3201,
    "title": "Almost Love",
    "title_ascii": "Almost Love"
  },
  {
    "artist": "SYMPHONIC DEFOGGERS",
    "genre": "FUTURE JAZZ",
    "id": 3202,
    "title": "Artificial Impatience",
    "title_ascii": "Artificial Impatience"
  },
  {
    "artist": "CRUNKY BOY Jr.",
    "genre": "BIG BEAT",
    "id": 3203,
    "title": "Beat Machine",
    "title_ascii": "Beat Machine"
  },
  {
    "artist": "SHIN Murayama feat. mari saito",
    "genre": "HOUSE",
    "id": 3204,
    "title": "DREAM",
    "title_ascii": "DREAM"
  },
  {
    "artist": "EverythingButTheGirl",
    "genre": "HOUSE",
    "id": 3205,
    "title": "five fathoms (beatmania II special version)",
    "title_ascii": "five fathoms (beatmania II special version)"
  },
  {
    "artist": "DJ Mazinger",
    "genre": "HIPHOP",
    "id": 3206,
    "title": "Garden of Love",
    "title_ascii": "Garden of Love"
  },
  {
    "artist": "m-flo",
    "genre": "HIPHOP&SOUL",
    "id": 3207,
    "title": "L.O.T.(Love Or Truth)",
    "title_ascii": "L.O.T.(Love Or Truth)"
  },
  {
    "artist": "SHIN Murayama feat. Argie Phine",
    "genre": "SOUL",
    "id": 3208,
    "title": "Let's talk it over",
    "title_ascii": "Let's talk it over"
  },
  {
    "artist": "good-cool feat. JP Miles",
    "genre": "FUNK",
    "id": 3209,
    "title": "Make Your Move",
    "title_ascii": "Make Your Move"
  },
  {
    "artist": "atomic kitten",
    "genre": "DANCE DISCO",
    "id": 3210,
    "title": "Right Now",
    "title_ascii": "Right Now"
  },
  {
    "artist": "DR.JEKYLL",
    "genre": "DANCE EXPRESS Hi-speed",
    "id": 3211,
    "title": "S.O.S.(THE TIGER TOOK MY FAMILY)",
    "title_ascii": "S.O.S.(THE TIGER TOOK MY FAMILY)"
  },
  {
    "artist": "CHARLOTTE Remixed by Shin Murayama",
    "genre": "R&B",
    "id": 3212,
    "title": "SKIN",
    "title_ascii": "SKIN"
  },
  {
    "artist": "ANGELA",
    "genre": "DANCE EXPRESS Hi-speed",
    "id": 3213,
    "title": "TAKE ON ME",
    "title_ascii": "TAKE ON ME"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "GABBA",
    "id": 4000,
    "title": "250bpm",
    "title_ascii": "250bpm"
  },
  {
    "artist": "dj TAKA",
    "genre": "EPIC TRANCE",
    "id": 4001,
    "title": "ABSOLUTE",
    "title_ascii": "ABSOLUTE"
  },
  {
    "artist": "NAOKI",
    "genre": "SPEED RAVE",
    "id": 4002,
    "title": "B4U",
    "title_ascii": "B4U"
  },
  {
    "artist": "NAOKI feat.PAULA TERRY",
    "genre": "HYPER EUROBEAT",
    "id": 4003,
    "title": "Broken My Heart",
    "title_ascii": "Broken My Heart"
  },
  {
    "artist": "good-cool feat. JP Miles",
    "genre": "HIP HOP",
    "id": 4004,
    "title": "CHECKING YOU OUT",
    "title_ascii": "CHECKING YOU OUT"
  },
  {
    "artist": "kors k",
    "genre": "DUTCH TRANCE",
    "id": 4005,
    "title": "Clione",
    "title_ascii": "Clione"
  },
  {
    "artist": "TaQ",
    "genre": "TECHNO",
    "id": 4006,
    "title": "DXY!",
    "title_ascii": "DXY!"
  },
  {
    "artist": "TaQ",
    "genre": "DRUM'N'BASS",
    "id": 4007,
    "title": "empathy",
    "title_ascii": "empathy"
  },
  {
    "artist": "TaQ",
    "genre": "DRUM'N'BASS",
    "id": 4008,
    "title": "era (step mix)",
    "title_ascii": "era (step mix)"
  },
  {
    "artist": "ULTIMATE DUB",
    "genre": "DANCE EXPRESS Hi-speed",
    "id": 4009,
    "title": "FANTASY",
    "title_ascii": "FANTASY"
  },
  {
    "artist": "dj TAKA feat. Jasmine",
    "genre": "METALLIC EURO",
    "id": 4010,
    "title": "Final Count Down(MTO CRY BABY STYLE)",
    "title_ascii": "Final Count Down(MTO CRY BABY STYLE)"
  },
  {
    "artist": "Lion Musashi",
    "genre": "HARD HOUSE",
    "id": 4011,
    "title": "GET ON BEAT(WILD STYLE)",
    "title_ascii": "GET ON BEAT(WILD STYLE)"
  },
  {
    "artist": "NM feat. Sunny",
    "genre": "DANCE POP",
    "id": 4012,
    "title": "HIGHER",
    "title_ascii": "HIGHER"
  },
  {
    "artist": "CYDNEY",
    "genre": "DANCE EXPRESS Hi-speed",
    "id": 4013,
    "title": "JIVE INTO THE NIGHT",
    "title_ascii": "JIVE INTO THE NIGHT"
  },
  {
    "artist": "dj nagureo",
    "genre": "TECHNO",
    "id": 4014,
    "title": "KAMIKAZE",
    "title_ascii": "KAMIKAZE"
  },
  {
    "artist": "riewo",
    "genre": "TRANCE",
    "id": 4015,
    "title": "LOVE WILL・・・",
    "title_ascii": "LOVE WILL ..."
  },
  {
    "artist": "DETROIAN",
    "genre": "MINIMAL",
    "id": 4016,
    "title": "minimalian",
    "title_ascii": "minimalian"
  },
  {
    "artist": "Risky Men  feat.Asuka-M",
    "genre": "DANCE POP",
    "id": 4017,
    "title": "Mr.T.(take me higher)",
    "title_ascii": "Mr.T.(take me higher)"
  },
  {
    "artist": "WALL5",
    "genre": "CELTRANCE",
    "id": 4018,
    "title": "NORTH",
    "title_ascii": "NORTH"
  },
  {
    "artist": "Shoichiro Hirata",
    "genre": "DISCO",
    "id": 4019,
    "title": "Nothing Ain't Stoppin' Us",
    "title_ascii": "Nothing Ain't Stoppin' Us"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 4020,
    "title": "starmine",
    "title_ascii": "STARMINE"
  },
  {
    "artist": "TaQ",
    "genre": "BIG BEAT",
    "id": 4021,
    "title": "Voltage (feat. Hidemaru)",
    "title_ascii": "Voltage (feat. Hidemaru)"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "PIANO AMBIENT",
    "id": 4022,
    "title": "Vienna",
    "title_ascii": "Vienna"
  },
  {
    "artist": "good-cool",
    "genre": "WARP HOUSE",
    "id": 4023,
    "title": "Hitch Hiker2",
    "title_ascii": "Hitch Hiker2"
  },
  {
    "artist": "SLAKE feat. JP Miles",
    "genre": "TWO STEP",
    "id": 4024,
    "title": "I'M FOR REAL",
    "title_ascii": "I'M FOR REAL"
  },
  {
    "artist": "DJ SIMON",
    "genre": "LOUNGE HOUSE",
    "id": 4025,
    "title": "SWEET LAB",
    "title_ascii": "SWEET LAB"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "CYBER ROCK",
    "id": 4026,
    "title": "DIAMOND JEALOUSY",
    "title_ascii": "DIAMOND JEALOUSY"
  },
  {
    "artist": "dj TAKA feat.ANGEL",
    "genre": "PARAPARA",
    "id": 4027,
    "title": "ULTRA HIGH-HEELS",
    "title_ascii": "ULTRA HIGH-HEELS"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "EURO BEAT",
    "id": 4028,
    "title": "LUV TO ME(UCCHIE'S EDITION)",
    "title_ascii": "LUV TO ME(UCCHIE'S EDITION)"
  },
  {
    "artist": "NAOKI",
    "genre": "EURO GROOVE",
    "id": 4029,
    "title": "Burnin' The Floor",
    "title_ascii": "Burnin' The Floor"
  },
  {
    "artist": "Baby Weapon  feat.Asuka M",
    "genre": "DANCE POP",
    "id": 4030,
    "title": "Nasty!",
    "title_ascii": "Nasty!"
  },
  {
    "artist": "good-cool",
    "genre": "BIG BEAT",
    "id": 4031,
    "title": "Under Construction",
    "title_ascii": "Under Construction"
  },
  {
    "artist": "dj TAKA",
    "genre": "AMBIENT",
    "id": 4032,
    "title": "FLOWERS for ALBION",
    "title_ascii": "FLOWERS for ALBION"
  },
  {
    "artist": "FinalOffset",
    "genre": "WARP HOUSE",
    "id": 4033,
    "title": "Jam&Marmalade",
    "title_ascii": "Jam&Marmalade"
  },
  {
    "artist": "good-cool feat. JP Miles",
    "genre": "LATIN HOUSE",
    "id": 4202,
    "title": "CONGA",
    "title_ascii": "CONGA"
  },
  {
    "artist": "Shoichiro Hirata",
    "genre": "R&B",
    "id": 4203,
    "title": "GIRIGIRI DADDY",
    "title_ascii": "GIRIGIRI DADDY"
  },
  {
    "artist": "L.E.D. feat. GORO",
    "genre": "OCEANIAN TRIBAL TRANCE",
    "id": 4204,
    "title": "INFINITE PRAYER",
    "title_ascii": "INFINITE PRAYER"
  },
  {
    "artist": "GUY THOMAS",
    "genre": "DANCE EXPRESS Hi-speed",
    "id": 4205,
    "title": "NEW YORK CITY BOY",
    "title_ascii": "NEW YORK CITY BOY"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "RAVE",
    "id": 4206,
    "title": "R壱萬",
    "title_ascii": "R10K"
  },
  {
    "artist": "dj nagureo feat.Doublecheese",
    "genre": "HIPHOP",
    "id": 4207,
    "title": "Rest my mind",
    "title_ascii": "Rest my mind"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "ROCK OPERA",
    "id": 4208,
    "title": "sanctus",
    "title_ascii": "sanctus"
  },
  {
    "artist": "dj TAKA",
    "genre": "CLUB MIX",
    "id": 4209,
    "title": "Small Waves",
    "title_ascii": "Small Waves"
  },
  {
    "artist": "FinalOffset",
    "genre": "EURO BEAT",
    "id": 4210,
    "title": "Twin Bee(Generation X)",
    "title_ascii": "Twin Bee(Generation X)"
  },
  {
    "artist": "Togo Project feat.Sana",
    "genre": "CUBAN GROOVE",
    "id": 4211,
    "title": "サナ・モレッテ・ネ・エンテ",
    "title_ascii": "SANA MOLETTE NE ENTE"
  },
  {
    "artist": "L.E.D.-G VS GUHROOVY",
    "genre": "HARDCORE",
    "id": 4212,
    "title": "ErAseRmoToR maXimUM",
    "title_ascii": "ErAseRmoToR maXimUM"
  },
  {
    "artist": "L.E.D. feat.GORO",
    "genre": "AMBIENT",
    "id": 4214,
    "title": "INFINITE PRAYER -floating flock style-",
    "title_ascii": "INFINITE PRAYER -floating flock style-"
  },
  {
    "artist": "napakick",
    "genre": "MASHROOM FUNK",
    "id": 4215,
    "title": "Trancemission",
    "title_ascii": "Trancemission"
  },
  {
    "artist": "Togo Project feat.Sana",
    "genre": "MONDO-CUBAN",
    "id": 4216,
    "title": "サナ・モレッテ・ネ・エンテ(B.L.T.STYLE)",
    "title_ascii": "SANA MOLETTE NE ENTE (B.L.T.STYLE)"
  },
  {
    "artist": "dj TAKA",
    "genre": "INTELLIGENCE",
    "id": 5000,
    "title": "Abyss",
    "title_ascii": "Abyss"
  },
  {
    "artist": "good-cool feat. Aundrea L.Hopkins",
    "genre": "HOUSE",
    "id": 5001,
    "title": "Come With Me",
    "title_ascii": "Come With Me"
  },
  {
    "artist": "Dutch Force",
    "genre": "TRANCE",
    "id": 5002,
    "title": "Deadline",
    "title_ascii": "Deadline"
  },
  {
    "artist": "Shoichiro Hirata feat \"Red\"",
    "genre": "TWO STEP",
    "id": 5003,
    "title": "Give Me A Sign",
    "title_ascii": "Give Me A Sign"
  },
  {
    "artist": "ric",
    "genre": "TRANCE",
    "id": 5004,
    "title": "in my eyes",
    "title_ascii": "in my eyes"
  },
  {
    "artist": "NAOKI J-STYLE feat.MIU",
    "genre": "J-EURO POP",
    "id": 5005,
    "title": "Kiss me all night long",
    "title_ascii": "Kiss me all night long"
  },
  {
    "artist": "Orange Lounge",
    "genre": "FRENCH POP",
    "id": 5006,
    "title": "Mobo☆Moga",
    "title_ascii": "MOBO*MOGA"
  },
  {
    "artist": "sampling masters MEGA",
    "genre": "TECHNO",
    "id": 5007,
    "title": "outer wall",
    "title_ascii": "outer wall"
  },
  {
    "artist": "Lala Moore",
    "genre": "HOUSE",
    "id": 5008,
    "title": "OVER THE CLOUDS",
    "title_ascii": "OVER THE CLOUDS"
  },
  {
    "artist": "TaQ",
    "genre": "TECHNO",
    "id": 5009,
    "title": "QQQ",
    "title_ascii": "QQQ"
  },
  {
    "artist": "TaQ",
    "genre": "BIG BEAT",
    "id": 5010,
    "title": "Radical Faith",
    "title_ascii": "Radical Faith"
  },
  {
    "artist": "Aya",
    "genre": "DRUM'N'BASS",
    "id": 5011,
    "title": "Real",
    "title_ascii": "Real"
  },
  {
    "artist": "DJ.W",
    "genre": "INSTRUMENTAL",
    "id": 5012,
    "title": "Regulus",
    "title_ascii": "Regulus"
  },
  {
    "artist": "NM feat. Julie",
    "genre": "BALLAD",
    "id": 5013,
    "title": "Remember You",
    "title_ascii": "Remember You"
  },
  {
    "artist": "Mr.T",
    "genre": "POWER FUSION",
    "id": 5014,
    "title": "RIDE ON THE LIGHT (HI GREAT MIX)",
    "title_ascii": "RIDE ON THE LIGHT (HI GREAT MIX)"
  },
  {
    "artist": "ric",
    "genre": "NEW ROMANTIC",
    "id": 5015,
    "title": "RISLIM",
    "title_ascii": "RISLIM"
  },
  {
    "artist": "good-cool",
    "genre": "HOUSE",
    "id": 5016,
    "title": "Spin the disc",
    "title_ascii": "Spin the disc"
  },
  {
    "artist": "NAOKI",
    "genre": "HYPER EUROBEAT",
    "id": 5017,
    "title": "STILL IN MY HEART",
    "title_ascii": "STILL IN MY HEART"
  },
  {
    "artist": "TaQ feat. Meg",
    "genre": "AMBIENT",
    "id": 5018,
    "title": "still my words",
    "title_ascii": "still my words"
  },
  {
    "artist": "OutPhase (TaQ/dj TAKA)",
    "genre": "TRANCE",
    "id": 5019,
    "title": "sync",
    "title_ascii": "sync"
  },
  {
    "artist": "sampling masters MEGA",
    "genre": "RAVE",
    "id": 5020,
    "title": "tablets",
    "title_ascii": "tablets"
  },
  {
    "artist": "TAKA",
    "genre": "PROGRESSIVE",
    "id": 5021,
    "title": "V",
    "title_ascii": "V"
  },
  {
    "artist": "DJ SIMON",
    "genre": "HIPHOP",
    "id": 5022,
    "title": "IIDX",
    "title_ascii": "IIDX"
  },
  {
    "artist": "Aya",
    "genre": "SOUND TRACK",
    "id": 5023,
    "title": "sometime",
    "title_ascii": "sometime"
  },
  {
    "artist": "DJ SUWAMI",
    "genre": "DRUM'N'BASS",
    "id": 5024,
    "title": "THE CUBE",
    "title_ascii": "THE CUBE"
  },
  {
    "artist": "NAOKI feat.PAULA TERRY",
    "genre": "HYPER EUROBEAT",
    "id": 5025,
    "title": "LOVE AGAIN TONIGHT～for Mellisa mix～",
    "title_ascii": "LOVE AGAIN TONIGHT"
  },
  {
    "artist": "Brian Morris feat.Thomas",
    "genre": "HIPHOP",
    "id": 5026,
    "title": "VIRTUAL MIND",
    "title_ascii": "VIRTUAL MIND"
  },
  {
    "artist": "good-cool",
    "genre": "JAZZ",
    "id": 5027,
    "title": "Time is money",
    "title_ascii": "Time is money"
  },
  {
    "artist": "NAOKI underground",
    "genre": "EURO TRANCE",
    "id": 5029,
    "title": "INSERTiON",
    "title_ascii": "INSERTiON"
  },
  {
    "artist": "L.E.D. feat. Sana",
    "genre": "EPIC TRANCE",
    "id": 5030,
    "title": "THE SHINING POLARIS",
    "title_ascii": "THE SHINING POLARIS"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "ROCK OPERA",
    "id": 5201,
    "title": "1989",
    "title_ascii": "1989"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "SPANISH WALTZ",
    "id": 5202,
    "title": "Estella",
    "title_ascii": "Estella"
  },
  {
    "artist": "good-cool feat. Mickin'Tackin'",
    "genre": "J-DISCO",
    "id": 5203,
    "title": "Flash of Love",
    "title_ascii": "Flash of Love"
  },
  {
    "artist": "L.E.D.",
    "genre": "GOA TRANCE",
    "id": 5204,
    "title": "THE BIG VOYAGER",
    "title_ascii": "THE BIG VOYAGER"
  },
  {
    "artist": "オセロ",
    "genre": "EURO TRANCE",
    "id": 5205,
    "title": "天国のキッス ～D.J.TAKA'S STYLE～",
    "title_ascii": "TENGOKU NO KISS"
  },
  {
    "artist": "GWASHI",
    "genre": "HIPHOP",
    "id": 5206,
    "title": "c-r-a-c-k-ER",
    "title_ascii": "c-r-a-c-k-ER"
  },
  {
    "artist": "Macky",
    "genre": "ORIENTAL AMBIENT",
    "id": 5207,
    "title": "DENGUE",
    "title_ascii": "DENGUE"
  },
  {
    "artist": "napakick feat. Taja",
    "genre": "TRIPHOP",
    "id": 5208,
    "title": "DUNE",
    "title_ascii": "DUNE"
  },
  {
    "artist": "SPON",
    "genre": "DIGI-ROCK",
    "id": 5209,
    "title": "PRAT FALL",
    "title_ascii": "PRAT FALL"
  },
  {
    "artist": "dj nagureo",
    "genre": "HOUSE",
    "id": 6000,
    "title": "20,November",
    "title_ascii": "20,November"
  },
  {
    "artist": "NM feat.Thomas Howard",
    "genre": "BALLAD",
    "id": 6001,
    "title": "BALLAD FOR YOU～想いの雨～",
    "title_ascii": "BALLAD FOR YOU"
  },
  {
    "artist": "Fantastic Plastic Machine",
    "genre": "HOUSE",
    "id": 6002,
    "title": "Beautiful Days",
    "title_ascii": "Beautiful Days"
  },
  {
    "artist": "dj TAKA",
    "genre": "HOUSE",
    "id": 6003,
    "title": "Blueberry Stream",
    "title_ascii": "Blueberry Stream"
  },
  {
    "artist": "good-cool feat. Hideo Suwa",
    "genre": "ROCK",
    "id": 6004,
    "title": "Buffalo",
    "title_ascii": "Buffalo"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 6005,
    "title": "Colors (radio edit)",
    "title_ascii": "Colors (radio edit)"
  },
  {
    "artist": "Orange Lounge",
    "genre": "BOSSA LOUNGE",
    "id": 6006,
    "title": "Comment te dire adieu",
    "title_ascii": "Comment te dire adieu"
  },
  {
    "artist": "NAOKI feat.PAULA TERRY",
    "genre": "HYPER TRANCE EURO BEAT",
    "id": 6007,
    "title": "DIVE ～INTO YOUR HEART～",
    "title_ascii": "DIVE INTO YOUR HEART"
  },
  {
    "artist": "Vincent de Moor",
    "genre": "TRANCE",
    "id": 6009,
    "title": "Fly Away(Instrumental)",
    "title_ascii": "Fly Away(Instrumental)"
  },
  {
    "artist": "Mr.T",
    "genre": "TRANCE",
    "id": 6010,
    "title": "fly through the night",
    "title_ascii": "fly through the night"
  },
  {
    "artist": "Shapes",
    "genre": "DANCE POP",
    "id": 6011,
    "title": "Free Style",
    "title_ascii": "Free Style"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 6012,
    "title": "Frozen Ray (original mix)",
    "title_ascii": "Frozen Ray (original mix)"
  },
  {
    "artist": "Aya",
    "genre": "DRUM'N'BASS",
    "id": 6013,
    "title": "G2",
    "title_ascii": "G2"
  },
  {
    "artist": "NAOKI underground",
    "genre": "TRANCE",
    "id": 6014,
    "title": "L'amour et la liberte",
    "title_ascii": "L'amour et la liberte"
  },
  {
    "artist": "LEGO STUDIO",
    "genre": "LOUNGE POP",
    "id": 6015,
    "title": "Linus",
    "title_ascii": "Linus"
  },
  {
    "artist": "D.J.SETUP",
    "genre": "TECHNO",
    "id": 6016,
    "title": "NEMESIS",
    "title_ascii": "NEMESIS"
  },
  {
    "artist": "LOLITA",
    "genre": "SUPER EUROBEAT",
    "id": 6017,
    "title": "ROMEO&JULIET",
    "title_ascii": "ROMEO&JULIET"
  },
  {
    "artist": "sampling masters MEGA",
    "genre": "ROTTERDAM TECHNO",
    "id": 6018,
    "title": "rottel-da-sun",
    "title_ascii": "rottel-da-sun"
  },
  {
    "artist": "sampling masters MEGA",
    "genre": "NOISY",
    "id": 6019,
    "title": "route 80s",
    "title_ascii": "route 80s"
  },
  {
    "artist": "ReR",
    "genre": "GOTH",
    "id": 6020,
    "title": "Silhoette of my mind",
    "title_ascii": "Silhoette of my mind"
  },
  {
    "artist": "OutPhase",
    "genre": "TRIP HOP",
    "id": 6021,
    "title": "Summer Vacation(CU mix)",
    "title_ascii": "Summer Vacation(CU mix)"
  },
  {
    "artist": "Aya",
    "genre": "INSTRUMENTAL",
    "id": 6022,
    "title": "Take It Easy",
    "title_ascii": "Take It Easy"
  },
  {
    "artist": "good-cool",
    "genre": "ALL MIX",
    "id": 6023,
    "title": "VJ ARMY",
    "title_ascii": "VJ ARMY"
  },
  {
    "artist": "sampling masters AYA",
    "genre": "DISCO",
    "id": 6024,
    "title": "Wow Wow 70's",
    "title_ascii": "Wow Wow 70's"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "RAVE",
    "id": 6025,
    "title": "Y31",
    "title_ascii": "Y31"
  },
  {
    "artist": "CHERRY",
    "genre": "SUPER EUROBEAT",
    "id": 6026,
    "title": "YESTERDAY",
    "title_ascii": "YESTERDAY"
  },
  {
    "artist": "vivi",
    "genre": "SOUL",
    "id": 6027,
    "title": "こっちを向いてよ",
    "title_ascii": "KOTTI WO MUITEYO"
  },
  {
    "artist": "L.E.D.",
    "genre": "NU-NRG",
    "id": 6028,
    "title": "電人イェーガーのテーマ(Theme of DENJIN J)",
    "title_ascii": "THEME OF DENJIN J"
  },
  {
    "artist": "good-cool",
    "genre": "HOUSE",
    "id": 6029,
    "title": "19,November",
    "title_ascii": "19,November"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "JAZZ ARGENTINO",
    "id": 6030,
    "title": "Five Regrets",
    "title_ascii": "Five Regrets"
  },
  {
    "artist": "L.E.D.",
    "genre": "EPIC TRANCE",
    "id": 6031,
    "title": "SOMETHING WONDERFUL",
    "title_ascii": "SOMETHING WONDERFUL"
  },
  {
    "artist": "Yukihiro Fukutomi",
    "genre": "HOUSE",
    "id": 6201,
    "title": "A New Morning",
    "title_ascii": "A New Morning"
  },
  {
    "artist": "Osamu Kubota feat. Sizzle Ohtaka",
    "genre": "CELTIC",
    "id": 6202,
    "title": "Doigts de Fatima -ファティマの掌-",
    "title_ascii": "DOIGTS DE FATIMA"
  },
  {
    "artist": "Vincent de Moor",
    "genre": "TRANCE",
    "id": 6203,
    "title": "Flowtation(Original Mix)",
    "title_ascii": "Flowtation(Original Mix)"
  },
  {
    "artist": "NIKI",
    "genre": "HYPER TECHNO",
    "id": 6204,
    "title": "JUST DO IT",
    "title_ascii": "JUST DO IT"
  },
  {
    "artist": "L.E.D.-G VS GUHROOVY fw/asuka",
    "genre": "HAPPY HARDCORE",
    "id": 6205,
    "title": "LOVE IS DREAMINESS",
    "title_ascii": "LOVE IS DREAMINESS"
  },
  {
    "artist": "Shoichiro Hirata",
    "genre": "TWO STEP",
    "id": 6206,
    "title": "M-02stp.ver.1.01",
    "title_ascii": "M-02stp.ver.1.01"
  },
  {
    "artist": "NIKO",
    "genre": "SUPER EUROBEAT",
    "id": 6207,
    "title": "NIGHT OF FIRE",
    "title_ascii": "NIGHT OF FIRE"
  },
  {
    "artist": "DOMINO",
    "genre": "SUPER EUROBEAT",
    "id": 6208,
    "title": "PARAPARA PARADISE",
    "title_ascii": "PARAPARA PARADISE"
  },
  {
    "artist": "MAZIK K.",
    "genre": "HYPER TECHNO",
    "id": 6209,
    "title": "REAL LOVE",
    "title_ascii": "REAL LOVE"
  },
  {
    "artist": "RYOTA MITSUNAGA",
    "genre": "BALLAD",
    "id": 6211,
    "title": "Changes",
    "title_ascii": "Changes"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "RAVE",
    "id": 7000,
    "title": "2002",
    "title_ascii": "2002"
  },
  {
    "artist": "SYMPHONIC DEFOGGERS",
    "genre": "FAKE JAZZ",
    "id": 7001,
    "title": "9 o'clocks",
    "title_ascii": "9 o'clocks"
  },
  {
    "artist": "D.J.Amuro",
    "genre": "RENAISSANCE",
    "id": 7002,
    "title": "A",
    "title_ascii": "A"
  },
  {
    "artist": "Shawn The Horny Master",
    "genre": "ALTERNATIVE HOUSE",
    "id": 7003,
    "title": "AVE DE RAPINA",
    "title_ascii": "AVE DE RAPINA"
  },
  {
    "artist": "D.J. Spugna",
    "genre": "FILTER HOUSE",
    "id": 7004,
    "title": "Bad Routine",
    "title_ascii": "Bad Routine"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TRIBAL BASS",
    "id": 7005,
    "title": "BRING HER DOWN",
    "title_ascii": "BRING HER DOWN"
  },
  {
    "artist": "Mr.T with Motoaki.F",
    "genre": "12 BEAT",
    "id": 7006,
    "title": "Burning Heat! (Full Option Mix)",
    "title_ascii": "Burning Heat! (Full Option Mix)"
  },
  {
    "artist": "SARA",
    "genre": "SUPER EUROBEAT",
    "id": 7007,
    "title": "BURNING UP FOR YOU",
    "title_ascii": "BURNING UP FOR YOU"
  },
  {
    "artist": "Fuzita Blender",
    "genre": "BIG BEAT",
    "id": 7008,
    "title": "Cheer Train",
    "title_ascii": "Cheer Train"
  },
  {
    "artist": "SLAKE",
    "genre": "DRUM'N'BASS",
    "id": 7009,
    "title": "CLOUDY MUSIC",
    "title_ascii": "CLOUDY MUSIC"
  },
  {
    "artist": "NAOKI",
    "genre": "HYPER ROCK BEAT",
    "id": 7010,
    "title": "D2R",
    "title_ascii": "D2R"
  },
  {
    "artist": "NAOKI feat.Paula Terry",
    "genre": "HYPER EUROBEAT",
    "id": 7011,
    "title": "DESTINY",
    "title_ascii": "DESTINY"
  },
  {
    "artist": "reo nagumo feat.hajime.y",
    "genre": "SOUL",
    "id": 7012,
    "title": "E.V CAFE",
    "title_ascii": "E.V CAFE"
  },
  {
    "artist": "Kobo project with Masa",
    "genre": "TECHNO",
    "id": 7013,
    "title": "entrance",
    "title_ascii": "entrance"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "PROGRESSIVE JAZZ",
    "id": 7014,
    "title": "foreplay",
    "title_ascii": "foreplay"
  },
  {
    "artist": "SYMPHONIC DEFOGGERS",
    "genre": "UK GARAGE/2-STEP",
    "id": 7015,
    "title": "General Relativity",
    "title_ascii": "General Relativity"
  },
  {
    "artist": "Noria",
    "genre": "HIP HOP&SOUL",
    "id": 7016,
    "title": "Glorious Days",
    "title_ascii": "Glorious Days"
  },
  {
    "artist": "TaQ",
    "genre": "BIG BEAT",
    "id": 7017,
    "title": "Gravity",
    "title_ascii": "Gravity"
  },
  {
    "artist": "ASKA",
    "genre": "HOUSE",
    "id": 7018,
    "title": "Happy Wedding",
    "title_ascii": "Happy Wedding"
  },
  {
    "artist": "NATHALIE",
    "genre": "SUPER EUROBEAT",
    "id": 7019,
    "title": "HEARTBEAT",
    "title_ascii": "HEARTBEAT"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TRANCE",
    "id": 7020,
    "title": "i feel ...",
    "title_ascii": "i feel ..."
  },
  {
    "artist": "good-cool feat. Meg",
    "genre": "EUROBEAT",
    "id": 7021,
    "title": "Last Message",
    "title_ascii": "Last Message"
  },
  {
    "artist": "Sana",
    "genre": "AMBIENT POP",
    "id": 7022,
    "title": "Let the Snow Paint Me",
    "title_ascii": "Let the Snow Paint Me"
  },
  {
    "artist": "SUZY LAZY",
    "genre": "SUPER EUROBEAT",
    "id": 7023,
    "title": "LOVE GENERATION",
    "title_ascii": "LOVE GENERATION"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "NEW WAVE",
    "id": 7024,
    "title": "Love Me Do",
    "title_ascii": "Love Me Do"
  },
  {
    "artist": "Orange Lounge",
    "genre": "YEYE",
    "id": 7025,
    "title": "Marmalade Reverie",
    "title_ascii": "Marmalade Reverie"
  },
  {
    "artist": "Ω",
    "genre": "HARDCORE TECHNO",
    "id": 7026,
    "title": "MAX 300",
    "title_ascii": "MAX 300"
  },
  {
    "artist": "Fuzita Blender",
    "genre": "LIBRARY BEATS",
    "id": 7027,
    "title": "New York",
    "title_ascii": "New York"
  },
  {
    "artist": "LESLIE PARRISH",
    "genre": "SUPER EUROBEAT",
    "id": 7028,
    "title": "REMEMBER ME",
    "title_ascii": "REMEMBER ME"
  },
  {
    "artist": "dj nagureo feat.asuka.m",
    "genre": "SOFT ROCK",
    "id": 7029,
    "title": "Secret Tale",
    "title_ascii": "Secret Tale"
  },
  {
    "artist": "DUSTY",
    "genre": "SUPER EUROBEAT",
    "id": 7030,
    "title": "SOLID GOLD",
    "title_ascii": "SOLID GOLD"
  },
  {
    "artist": "good-cool",
    "genre": "POPS",
    "id": 7031,
    "title": "Somebody Like You",
    "title_ascii": "Somebody Like You"
  },
  {
    "artist": "D.JW",
    "genre": "HOUSE",
    "id": 7032,
    "title": "Spica",
    "title_ascii": "Spica"
  },
  {
    "artist": "good-cool",
    "genre": "HARD HOUSE",
    "id": 7033,
    "title": "Spooky",
    "title_ascii": "Spooky"
  },
  {
    "artist": "TaQ",
    "genre": "TECHNO",
    "id": 7034,
    "title": "stoic",
    "title_ascii": "stoic"
  },
  {
    "artist": "Svenson & Gielen",
    "genre": "TRANCE",
    "id": 7035,
    "title": "The Beauty Of Silence",
    "title_ascii": "The Beauty Of Silence"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 7036,
    "title": "Tomorrow Perfume",
    "title_ascii": "Tomorrow Perfume"
  },
  {
    "artist": "TaQ",
    "genre": "TRANCE",
    "id": 7037,
    "title": "traces",
    "title_ascii": "traces"
  },
  {
    "artist": "Mr.T",
    "genre": "ELECTROSHOCK",
    "id": 7038,
    "title": "ZERO-ONE",
    "title_ascii": "ZERO-ONE"
  },
  {
    "artist": "dj TAKA with NAOKI",
    "genre": "ORCHESTRAL",
    "id": 7039,
    "title": "革命",
    "title_ascii": "KAKUMEI"
  },
  {
    "artist": "Togo project feat. Sana",
    "genre": "2STEP",
    "id": 7201,
    "title": "more deep[ver.2.1]",
    "title_ascii": "more deep[ver.2.1]"
  },
  {
    "artist": "DuMonde",
    "genre": "TRANCE",
    "id": 7202,
    "title": "Never Look Back",
    "title_ascii": "Never Look Back"
  },
  {
    "artist": "Armin van Buuren Presents P.D.",
    "genre": "TRANCE",
    "id": 7203,
    "title": "The Sound Of Goodbye",
    "title_ascii": "The Sound Of Goodbye"
  },
  {
    "artist": "TaQ",
    "genre": "BIG BEAT",
    "id": 8000,
    "title": "abstract",
    "title_ascii": "abstract"
  },
  {
    "artist": "Mr.T",
    "genre": "INSTRUMENTAL",
    "id": 8001,
    "title": "airflow",
    "title_ascii": "airflow"
  },
  {
    "artist": "PINK PONG",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 8002,
    "title": "ALIEN WORLD",
    "title_ascii": "ALIEN WORLD"
  },
  {
    "artist": "RAM",
    "genre": "DRUM'N'BASS",
    "id": 8003,
    "title": "ALL RIGHT",
    "title_ascii": "ALL RIGHT"
  },
  {
    "artist": "Y&Co.",
    "genre": "TRANCE",
    "id": 8004,
    "title": "Attitude",
    "title_ascii": "Attitude"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "テクノ歌謡",
    "id": 8005,
    "title": "bit mania",
    "title_ascii": "bit mania"
  },
  {
    "artist": "good-cool feat. Jeff Coote",
    "genre": "EUROBEAT",
    "id": 8006,
    "title": "Blame",
    "title_ascii": "Blame"
  },
  {
    "artist": "good-cool feat. Jeff Coote",
    "genre": "80's EUROBEAT",
    "id": 8007,
    "title": "Blown My Heart Away",
    "title_ascii": "Blown My Heart Away"
  },
  {
    "artist": "N.M.R",
    "genre": "EURO GROOVE",
    "id": 8008,
    "title": "CELEBRATE NITE",
    "title_ascii": "CELEBRATE NITE"
  },
  {
    "artist": "dj TAKA (remixed by 横田商会)",
    "genre": "EUROBEAT",
    "id": 8009,
    "title": "Colors -Y&Co. Eurobeat Remix-",
    "title_ascii": "Colors -Y&Co. Eurobeat Remix-"
  },
  {
    "artist": "DE VOL",
    "genre": "NU SKOOL",
    "id": 8010,
    "title": "DANCER",
    "title_ascii": "DANCER"
  },
  {
    "artist": "kobo",
    "genre": "TRANCE",
    "id": 8011,
    "title": "dissolve",
    "title_ascii": "dissolve"
  },
  {
    "artist": "NAOKI feat.Paula Terry",
    "genre": "HYPER EUROBEAT",
    "id": 8012,
    "title": "Drivin'",
    "title_ascii": "Drivin'"
  },
  {
    "artist": "Mr.T",
    "genre": "GARAGE HOUSE",
    "id": 8013,
    "title": "dual control",
    "title_ascii": "dual control"
  },
  {
    "artist": "SPARKER",
    "genre": "DEEP HOUSE",
    "id": 8014,
    "title": "FLUTE MAN",
    "title_ascii": "FLUTE MAN"
  },
  {
    "artist": "dj TAKA feat. ASAKO",
    "genre": "TRANCE",
    "id": 8015,
    "title": "Foundation of our love",
    "title_ascii": "Foundation of our love"
  },
  {
    "artist": "SAWASAKI YOSHIHIRO",
    "genre": "ELECTRO",
    "id": 8016,
    "title": "FUNKY BINGO PARADISE",
    "title_ascii": "FUNKY BINGO PARADISE"
  },
  {
    "artist": "D.J.SETUP",
    "genre": "PSYCHEDELIC TECHNO",
    "id": 8017,
    "title": "Giudecca",
    "title_ascii": "Giudecca"
  },
  {
    "artist": "Yu Takami feat. Shihori Nakane",
    "genre": "GIRL ROCK",
    "id": 8018,
    "title": "Halfway of promise",
    "title_ascii": "Halfway of promise"
  },
  {
    "artist": "Shawn The Horny Master",
    "genre": "ALTERNATIVE HOUSE",
    "id": 8019,
    "title": "Hormiga obrera",
    "title_ascii": "Hormiga obrera"
  },
  {
    "artist": "L.E.D.LIGHT",
    "genre": "GOA TRANCE",
    "id": 8020,
    "title": "HYPER BOUNDARY GATE",
    "title_ascii": "HYPER BOUNDARY GATE"
  },
  {
    "artist": "Reo Nagumo feat. Mayumi Shizawa*",
    "genre": "ELECTRO",
    "id": 8021,
    "title": "I.C.F.5800",
    "title_ascii": "I.C.F.5800"
  },
  {
    "artist": "Togo project feat. Sana",
    "genre": "A.O.R.",
    "id": 8022,
    "title": "jelly kiss",
    "title_ascii": "jelly kiss"
  },
  {
    "artist": "RAM",
    "genre": "RAVE",
    "id": 8023,
    "title": "LAB",
    "title_ascii": "LAB"
  },
  {
    "artist": "Orange Lounge",
    "genre": "HARD CHANSON",
    "id": 8024,
    "title": "LOVE IS ORANGE",
    "title_ascii": "LOVE IS ORANGE"
  },
  {
    "artist": "Shoichiro Hirata",
    "genre": "2 STEP",
    "id": 8025,
    "title": "Luv 2 Feel Your Body",
    "title_ascii": "Luv 2 Feel Your Body"
  },
  {
    "artist": "TAKA",
    "genre": "BEAT ROCK",
    "id": 8026,
    "title": "memories",
    "title_ascii": "memories"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 8027,
    "title": "Monkey Dance",
    "title_ascii": "Monkey Dance"
  },
  {
    "artist": "yu_tokiwa.djw",
    "genre": "CUDDLECORE",
    "id": 8028,
    "title": "murmur twins",
    "title_ascii": "murmur twins"
  },
  {
    "artist": "SLAKE",
    "genre": "TECHNO",
    "id": 8029,
    "title": "MUSIC TO YOUR HEAD",
    "title_ascii": "MUSIC TO YOUR HEAD"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "HARDCORE BREAKBEATS",
    "id": 8030,
    "title": "OUTER LIMITS",
    "title_ascii": "OUTER LIMITS"
  },
  {
    "artist": "ASLETICS",
    "genre": "DISCO",
    "id": 8031,
    "title": "PLEASE DON'T GO",
    "title_ascii": "PLEASE DON'T GO"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 8032,
    "title": "rainbow flyer",
    "title_ascii": "rainbow flyer"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "LATIN SWING",
    "id": 8033,
    "title": "Red Nikita",
    "title_ascii": "Red Nikita"
  },
  {
    "artist": "Yu Takami",
    "genre": "JAZZ FUNK",
    "id": 8034,
    "title": "Small clone",
    "title_ascii": "Small clone"
  },
  {
    "artist": "Aya",
    "genre": "NU-FUSION",
    "id": 8035,
    "title": "Smoke",
    "title_ascii": "Smoke"
  },
  {
    "artist": "SAWASAKI YOSHIHIRO",
    "genre": "TECHNO",
    "id": 8036,
    "title": "SPEED TRANCE MACH 3",
    "title_ascii": "SPEED TRANCE MACH 3"
  },
  {
    "artist": "PINK PONG",
    "genre": "TRANCE",
    "id": 8037,
    "title": "STAR DREAM",
    "title_ascii": "STAR DREAM"
  },
  {
    "artist": "Megu with Scotty D.",
    "genre": "2 STEP",
    "id": 8038,
    "title": "Stick Around",
    "title_ascii": "Stick Around"
  },
  {
    "artist": "TaQ",
    "genre": "TECHNO",
    "id": 8039,
    "title": "symbolic",
    "title_ascii": "symbolic"
  },
  {
    "artist": "Lion MUSASHI",
    "genre": "HOUSE",
    "id": 8040,
    "title": "thunder",
    "title_ascii": "thunder"
  },
  {
    "artist": "NAPAKICK",
    "genre": "ROCKET BEATS",
    "id": 8041,
    "title": "TRIBAL MASTER",
    "title_ascii": "TRIBAL MASTER"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "TRANCE",
    "id": 8042,
    "title": "V35",
    "title_ascii": "V35"
  },
  {
    "artist": "ASLETICS",
    "genre": "HIP HOP",
    "id": 8043,
    "title": "WAR GAME",
    "title_ascii": "WAR GAME"
  },
  {
    "artist": "MTO",
    "genre": "POPS",
    "id": 8044,
    "title": "World Wide Love",
    "title_ascii": "World Wide Love"
  },
  {
    "artist": "Mr.T",
    "genre": "ELECTROSHOCK",
    "id": 8045,
    "title": "xenon",
    "title_ascii": "xenon"
  },
  {
    "artist": "School (good-cool feat. すわひでお)",
    "genre": "METAL HOUSE",
    "id": 8046,
    "title": "夜のサングラス",
    "title_ascii": "YORU NO SANGURASU"
  },
  {
    "artist": "L.E.D.",
    "genre": "NU-NRG",
    "id": 8047,
    "title": "合体せよ！ストロングイェーガー！！",
    "title_ascii": "THE STRONG JAEGER"
  },
  {
    "artist": "Reven-G",
    "genre": "SPIRITUAL",
    "id": 8048,
    "title": "桜",
    "title_ascii": "SAKURA"
  },
  {
    "artist": "NAOKI feat.YUKI",
    "genre": "J-TRANCE",
    "id": 8049,
    "title": "蒼い衝動",
    "title_ascii": "AOI SHOUDOU"
  },
  {
    "artist": "め組upper-slope",
    "genre": "J-SOUL",
    "id": 8201,
    "title": "LOVE BOX",
    "title_ascii": "LOVE BOX"
  },
  {
    "artist": "L.E.D.-G VS GUHROOVY fw NO+CHIN",
    "genre": "UK ASIAN",
    "id": 8202,
    "title": "STEP INTO THE NEW WORLD",
    "title_ascii": "STEP INTO THE NEW WORLD"
  },
  {
    "artist": "kita-g",
    "genre": "ACID HOUSE",
    "id": 8203,
    "title": "suggestion",
    "title_ascii": "suggestion"
  },
  {
    "artist": "Togo-chef feat.Sana",
    "genre": "HOUSE REMIX",
    "id": 8204,
    "title": "エブリデイ・ラブリデイ -L.E.D.STYLE MIX-",
    "title_ascii": "EVERY DAY LOVELY DAY -L.E.D.STYLE MIX-"
  },
  {
    "artist": "D.J.SETUP",
    "genre": "TECHNO",
    "id": 9000,
    "title": "lower world",
    "title_ascii": "lower world"
  },
  {
    "artist": "dj TAKA feat.Noria",
    "genre": "HAPPY HANDBAG",
    "id": 9001,
    "title": "Silvia Drive",
    "title_ascii": "Silvia Drive"
  },
  {
    "artist": "flare",
    "genre": "SOUL",
    "id": 9002,
    "title": "lights",
    "title_ascii": "lights"
  },
  {
    "artist": "Mr.T",
    "genre": "FUNK SHUFFLE",
    "id": 9003,
    "title": "fun",
    "title_ascii": "fun"
  },
  {
    "artist": "NAOKI",
    "genre": "ULTRA ROCK BEAT",
    "id": 9004,
    "title": "Be Rock U (1998 burst style)",
    "title_ascii": "Be Rock U (1998 burst style)"
  },
  {
    "artist": "NAOKI underground",
    "genre": "TRANCE",
    "id": 9005,
    "title": "Prelude",
    "title_ascii": "Prelude"
  },
  {
    "artist": "NAOKI feat.PAULA TERRY",
    "genre": "EUROBEAT",
    "id": 9006,
    "title": "MARIA (I believe... )",
    "title_ascii": "MARIA (I believe... )"
  },
  {
    "artist": "SLAKE",
    "genre": "TECHNO",
    "id": 9007,
    "title": "BREEDING",
    "title_ascii": "BREEDING"
  },
  {
    "artist": "SLAKE",
    "genre": "ELECTRONICA",
    "id": 9008,
    "title": "ADVANCE",
    "title_ascii": "ADVANCE"
  },
  {
    "artist": "SLAKE feat.EMIKO",
    "genre": "FORKTRONICA",
    "id": 9009,
    "title": "LOVE IS DROWING",
    "title_ascii": "LOVE IS DROWING"
  },
  {
    "artist": "positive MA feat.akino",
    "genre": "HEALIN' HARDCORE",
    "id": 9010,
    "title": "Cradle",
    "title_ascii": "Cradle"
  },
  {
    "artist": "Lala Moore with CoCoRo*Co",
    "genre": "GOSPEL",
    "id": 9011,
    "title": "Make A Difference",
    "title_ascii": "Make A Difference"
  },
  {
    "artist": "少年ラジオ",
    "genre": "POST ROCK",
    "id": 9012,
    "title": "moon_child",
    "title_ascii": "moon_child"
  },
  {
    "artist": "EeL",
    "genre": "ELECTRONICA",
    "id": 9013,
    "title": "The end of my spiritually",
    "title_ascii": "The end of my spiritually"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "テクノチョップ",
    "id": 9014,
    "title": "昭和企業戦士荒山課長",
    "title_ascii": "SHOWA KIGYO SENSHI ARAYAMA KACHO"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "ボデー",
    "id": 9015,
    "title": "ライオン好き",
    "title_ascii": "LION SUKI"
  },
  {
    "artist": "Sana",
    "genre": "HOUSE",
    "id": 9016,
    "title": "真夏の花・真夏の夢",
    "title_ascii": "MANATSU NO HANA MANATSU NO YUME"
  },
  {
    "artist": "D.J. Spugna",
    "genre": "FILTER HOUSE",
    "id": 9017,
    "title": "The Biggest Roaster",
    "title_ascii": "The Biggest Roaster"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "TURKISH PIANO'N'BASS",
    "id": 9018,
    "title": "Golden Horn",
    "title_ascii": "Golden Horn"
  },
  {
    "artist": "good-cool feat. Andrea L.Hopkins",
    "genre": "HOUSE",
    "id": 9019,
    "title": "Your Body",
    "title_ascii": "Your Body"
  },
  {
    "artist": "good-cool",
    "genre": "POPS",
    "id": 9020,
    "title": "Honey",
    "title_ascii": "Honey"
  },
  {
    "artist": "DRAGOON",
    "genre": "TECHNO",
    "id": 9021,
    "title": "ECHOES",
    "title_ascii": "ECHOES"
  },
  {
    "artist": "dj nagureo",
    "genre": "TECHNO",
    "id": 9022,
    "title": "Logic Board",
    "title_ascii": "Logic Board"
  },
  {
    "artist": "tiger YAMATO with マイク吉川 feat. ma-sa",
    "genre": "EUROBEAT",
    "id": 9023,
    "title": "Two DAYS OF LOVE",
    "title_ascii": "Two DAYS OF LOVE"
  },
  {
    "artist": "Yu Takami",
    "genre": "ELECTRO POP",
    "id": 9024,
    "title": "Dreamin' Sun",
    "title_ascii": "Dreamin' Sun"
  },
  {
    "artist": "Yu Takami",
    "genre": "EXTREME GRANGE",
    "id": 9025,
    "title": "I can fly,I've got reason",
    "title_ascii": "I can fly,I've got reason"
  },
  {
    "artist": "TaQ",
    "genre": "DRUM'N'BASS",
    "id": 9026,
    "title": "Karma",
    "title_ascii": "Karma"
  },
  {
    "artist": "Y&Co.",
    "genre": "NRG",
    "id": 9027,
    "title": "BAD BOY BASS!! (dj Remo-con MIX)",
    "title_ascii": "BAD BOY BASS!! (dj Remo-con MIX)"
  },
  {
    "artist": "OutPhase",
    "genre": "TRANCE",
    "id": 9028,
    "title": "quasar",
    "title_ascii": "quasar"
  },
  {
    "artist": "RAM",
    "genre": "RAVE",
    "id": 9029,
    "title": "ACT",
    "title_ascii": "ACT"
  },
  {
    "artist": "RAM",
    "genre": "DRUM'N'BASS",
    "id": 9030,
    "title": "SNOW",
    "title_ascii": "SNOW"
  },
  {
    "artist": "RAM",
    "genre": "TECHNO",
    "id": 9031,
    "title": "SWITCH",
    "title_ascii": "SWITCH"
  },
  {
    "artist": "PINK PONG",
    "genre": "TRANCE",
    "id": 9032,
    "title": "POWER DREAM",
    "title_ascii": "POWER DREAM"
  },
  {
    "artist": "ASLETICS",
    "genre": "HIP HOP",
    "id": 9033,
    "title": "SWEETEST SAVAGE",
    "title_ascii": "SWEETEST SAVAGE"
  },
  {
    "artist": "SADA",
    "genre": "TRANCE",
    "id": 9034,
    "title": "STAR FIELD",
    "title_ascii": "STAR FIELD"
  },
  {
    "artist": "SADA",
    "genre": "US HARD HOUSE",
    "id": 9035,
    "title": "WANNA TELL THAT WORD",
    "title_ascii": "WANNA TELL THAT WORD"
  },
  {
    "artist": "SHUNZZY",
    "genre": "ENSEMBLE",
    "id": 9036,
    "title": "ATOMIC AGE",
    "title_ascii": "ATOMIC AGE"
  },
  {
    "artist": "sampling masters MEGA",
    "genre": "GABBA",
    "id": 9037,
    "title": "rottel-the-Mercury",
    "title_ascii": "rottel-the-Mercury"
  },
  {
    "artist": "sampling masters AYA",
    "genre": "HARDCORE RAVE",
    "id": 9038,
    "title": "one or eight",
    "title_ascii": "one or eight"
  },
  {
    "artist": "大部真由美",
    "genre": "R&B",
    "id": 9039,
    "title": "Really Love",
    "title_ascii": "Really Love"
  },
  {
    "artist": "Takuma Saiki",
    "genre": "LOLIPOP",
    "id": 9040,
    "title": "Let's say Hello!",
    "title_ascii": "Let's say Hello!"
  },
  {
    "artist": "Db.saka feat. Piasa",
    "genre": "FRENCH BOSSA",
    "id": 9041,
    "title": "CHARLOTTE",
    "title_ascii": "CHARLOTTE"
  },
  {
    "artist": "小坂りゆ",
    "genre": "J-HAPPY HARDCORE",
    "id": 9042,
    "title": "LOVE?SHINE",
    "title_ascii": "LOVE LOVE SHINE"
  },
  {
    "artist": "290",
    "genre": "JUNGLE MIXTURE",
    "id": 9043,
    "title": "PARANOIA survivor MAX",
    "title_ascii": "PARANOIA survivor MAX"
  },
  {
    "artist": "NAOKI feat.PAULA TERRY",
    "genre": "EUROBEAT",
    "id": 9044,
    "title": "HYPER EUROBEAT (2DX style)",
    "title_ascii": "HYPER EUROBEAT (2DX style)"
  },
  {
    "artist": "jun",
    "genre": "HAPPY HARDCORE",
    "id": 9045,
    "title": "Sweet Sweet?Magic",
    "title_ascii": "SWEET SWEET LOVE MAGIC"
  },
  {
    "artist": "Reven-G",
    "genre": "SPIRITUAL",
    "id": 9046,
    "title": "bag",
    "title_ascii": "bag"
  },
  {
    "artist": "Mt.Circle",
    "genre": "LATIN GROOVE",
    "id": 9047,
    "title": "FESTA DO SOL",
    "title_ascii": "FESTA DO SOL"
  },
  {
    "artist": "e.o.s. Remixed by dj TAKA",
    "genre": "TRANCE",
    "id": 9048,
    "title": "e-motion 2003  -romantic extra-",
    "title_ascii": "e-motion 2003  -romantic extra-"
  },
  {
    "artist": "dj nagureo Remixed by Mr.T",
    "genre": "EPIC HOUSE",
    "id": 9049,
    "title": "u gotta groove -extend joy style-",
    "title_ascii": "u gotta groove -extend joy style-"
  },
  {
    "artist": "TaQ Remixed by kors k feat. U",
    "genre": "2 STEP",
    "id": 9050,
    "title": "traces -tracing you mix-",
    "title_ascii": "traces -tracing you mix-"
  },
  {
    "artist": "dj TAKA Remixed by Ryu☆",
    "genre": "TRANCE CORE",
    "id": 9051,
    "title": "Abyss -The Heavens Remix-",
    "title_ascii": "Abyss -The Heavens Remix-"
  },
  {
    "artist": "dj TAKA Remixed by TaQ",
    "genre": "MIXTURE",
    "id": 9052,
    "title": "Distress",
    "title_ascii": "Distress"
  },
  {
    "artist": "dj TAKA Remixed by Y&Co.",
    "genre": "EUROBEAT",
    "id": 9053,
    "title": "I'm In Love Again -Y&Co. EURO MIX-",
    "title_ascii": "I'm In Love Again -Y&Co. EURO MIX-"
  },
  {
    "artist": "Sana Remixed by Y&Co.",
    "genre": "TRANCE",
    "id": 9054,
    "title": "Let The Snow Paint Me -Y&Co. Remix-",
    "title_ascii": "Let The Snow Paint Me -Y&Co. Remix-"
  },
  {
    "artist": "good-cool Remixed by NAOKI",
    "genre": "EUROBEAT",
    "id": 9055,
    "title": "I Was The One (80's EUROBEAT STYLE)",
    "title_ascii": "I Was The One (80's EUROBEAT STYLE)"
  },
  {
    "artist": "Lala Moore Remixed by Flying Grind",
    "genre": "HOUSE",
    "id": 9056,
    "title": "OVER THE CLOUDS -Flying Grind mix-",
    "title_ascii": "OVER THE CLOUDS -Flying Grind mix-"
  },
  {
    "artist": "ric Remixed by Hisashi Nawata",
    "genre": "ELECTRO 2 STEP",
    "id": 9057,
    "title": "RISLIM -Remix-",
    "title_ascii": "RISLIM -Remix-"
  },
  {
    "artist": "SPARKER",
    "genre": "ROCOCO TEK",
    "id": 9058,
    "title": "BRIGHTNESS DARKNESS",
    "title_ascii": "BRIGHTNESS DARKNESS"
  },
  {
    "artist": "dj TAKA",
    "genre": "PSYCHEDELIC",
    "id": 9059,
    "title": "Quickening",
    "title_ascii": "Quickening"
  },
  {
    "artist": "GUHROOVY fw. NO+CHIN",
    "genre": "RAGGA JUNGLE",
    "id": 9201,
    "title": "5PM ETERNAL",
    "title_ascii": "5PM ETERNAL"
  },
  {
    "artist": "め組upper-slope",
    "genre": "DISCOTHEQUE",
    "id": 9202,
    "title": "80's CAPSULE",
    "title_ascii": "80's CAPSULE"
  },
  {
    "artist": "Shinji Ushiroda",
    "genre": "CLUB JAZZ",
    "id": 9204,
    "title": "paramnesia",
    "title_ascii": "paramnesia"
  },
  {
    "artist": "WaveGroup/DJ TK-ST",
    "genre": "SOUL MIX",
    "id": 9401,
    "title": "Celebration",
    "title_ascii": "Celebration"
  },
  {
    "artist": "Timo Maas",
    "genre": "ELECTRONICA",
    "id": 9402,
    "title": "First Day",
    "title_ascii": "First Day"
  },
  {
    "artist": "Lipps Inc.",
    "genre": "80'S REVIVAL",
    "id": 9403,
    "title": "Funkytown",
    "title_ascii": "Funkytown"
  },
  {
    "artist": "Moby",
    "genre": "ELECTRONICA",
    "id": 9404,
    "title": "Lift Me Up",
    "title_ascii": "Lift Me Up"
  },
  {
    "artist": "Paul Grogan Featuring Natalie Martin",
    "genre": "DANCE",
    "id": 9405,
    "title": "The Way You Move",
    "title_ascii": "The Way You Move"
  },
  {
    "artist": "WaveGroup/DJ TK-ST",
    "genre": "R&B MIX",
    "id": 9406,
    "title": "Virtual Insanity",
    "title_ascii": "Virtual Insanity"
  },
  {
    "artist": "dj TAKA feat.Tomomi",
    "genre": "TRANCE",
    "id": 10001,
    "title": "pandora",
    "title_ascii": "pandora"
  },
  {
    "artist": "Noria",
    "genre": "ITALO POP",
    "id": 10002,
    "title": "BABY LOVE",
    "title_ascii": "BABY LOVE"
  },
  {
    "artist": "TAKA with Junpei&三上",
    "genre": "J-REVIVAL",
    "id": 10003,
    "title": "JAM",
    "title_ascii": "JAM"
  },
  {
    "artist": "TAKA respect for J.S.B.",
    "genre": "PROGRESSIVE BAROQUE",
    "id": 10004,
    "title": "No.13",
    "title_ascii": "No.13"
  },
  {
    "artist": "Mr.T",
    "genre": "PIANO BALLADE",
    "id": 10005,
    "title": "desolation",
    "title_ascii": "desolation"
  },
  {
    "artist": "Mr.T",
    "genre": "ELECTROSHOCK",
    "id": 10006,
    "title": "EXE",
    "title_ascii": "EXE"
  },
  {
    "artist": "Mr.T と Brother Hiro",
    "genre": "J-REVIVAL",
    "id": 10007,
    "title": "どんなときも。",
    "title_ascii": "DONNATOKIMO"
  },
  {
    "artist": "platoniX (RB style)",
    "genre": "RB",
    "id": 10008,
    "title": "PLATONIC-XXX",
    "title_ascii": "PLATONIC-XXX"
  },
  {
    "artist": "小坂りゆ",
    "genre": "J-POP",
    "id": 10009,
    "title": "SHOOTING STAR",
    "title_ascii": "SHOOTING STAR"
  },
  {
    "artist": "platoniX (EURO style)",
    "genre": "EUROBEAT",
    "id": 10010,
    "title": "CARRY ON NIGHT (English version)",
    "title_ascii": "CARRY ON NIGHT (English version)"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "J-REVIVAL",
    "id": 10011,
    "title": "一途な恋 (HYPER J-EURO MIX)",
    "title_ascii": "ICHIZUNAKOI(HYPER J-EURO MIX)"
  },
  {
    "artist": "SLAKE",
    "genre": "NU JAZZ",
    "id": 10012,
    "title": "Ready To Rockit Blues",
    "title_ascii": "Ready To Rockit Blues"
  },
  {
    "artist": "SPARKER",
    "genre": "ROCOCO TEK",
    "id": 10013,
    "title": "Boundary",
    "title_ascii": "Boundary"
  },
  {
    "artist": "SLAKE",
    "genre": "TECHNO",
    "id": 10014,
    "title": "LIMITED",
    "title_ascii": "LIMITED"
  },
  {
    "artist": "SLAKE feat.MIKA",
    "genre": "J-REVIVAL",
    "id": 10015,
    "title": "CHOO CHOO TRAIN(dnb mix)",
    "title_ascii": "CHOO CHOO TRAIN(dnb mix)"
  },
  {
    "artist": "ELE BLOCK",
    "genre": "DANCE POP",
    "id": 10016,
    "title": "Lucy",
    "title_ascii": "Lucy"
  },
  {
    "artist": "ヒロシ＆チー子",
    "genre": "ムートラ(ムードトランス)",
    "id": 10017,
    "title": "システムロマンス",
    "title_ascii": "SYSTEM ROMANCE"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "戦艦テクノ",
    "id": 10018,
    "title": "SPACE FIGHT",
    "title_ascii": "SPACE FIGHT"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "2STEP POP TRANCE",
    "id": 10019,
    "title": "Back Into The Light",
    "title_ascii": "Back Into The Light"
  },
  {
    "artist": "Sota feat. Cyborg Akemi",
    "genre": "TRANCE",
    "id": 10020,
    "title": "Rise'n Beauty",
    "title_ascii": "Rise'n Beauty"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "PIANO AMBIENT",
    "id": 10021,
    "title": "scherzo",
    "title_ascii": "scherzo"
  },
  {
    "artist": "Ryu☆",
    "genre": "HARD HOUSE",
    "id": 10022,
    "title": "雪月花",
    "title_ascii": "SETSUGEKKA"
  },
  {
    "artist": "Ryu☆",
    "genre": "ARTCORE",
    "id": 10023,
    "title": "Narcissus At Oasis",
    "title_ascii": "Narcissus At Oasis"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 10024,
    "title": "rainbow rainbow",
    "title_ascii": "rainbow rainbow"
  },
  {
    "artist": "kors k",
    "genre": "TRANCE",
    "id": 10025,
    "title": "Love Is Eternity",
    "title_ascii": "Love Is Eternity"
  },
  {
    "artist": "good-cool feat.Sana",
    "genre": "NORTHERN EUROPE",
    "id": 10026,
    "title": "Think of me",
    "title_ascii": "Think of me"
  },
  {
    "artist": "good-cool",
    "genre": "HOUSE",
    "id": 10027,
    "title": "Drop on the floor",
    "title_ascii": "Drop on the floor"
  },
  {
    "artist": "TaQ",
    "genre": "TECHNO",
    "id": 10028,
    "title": "Innocent Walls",
    "title_ascii": "Innocent Walls"
  },
  {
    "artist": "TaQ",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 10029,
    "title": "Changes",
    "title_ascii": "Changes"
  },
  {
    "artist": "Y&Co.",
    "genre": "TRANCE",
    "id": 10030,
    "title": "Smell Like This",
    "title_ascii": "Smell Like This"
  },
  {
    "artist": "DJ Remo-con",
    "genre": "TECH HOUSE",
    "id": 10031,
    "title": "SCORE",
    "title_ascii": "SCORE"
  },
  {
    "artist": "DJ Remo-con",
    "genre": "BREAK BEATS",
    "id": 10032,
    "title": "Shakin'31",
    "title_ascii": "Shakin'31"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 10033,
    "title": "Daisuke",
    "title_ascii": "Daisuke"
  },
  {
    "artist": "RAM",
    "genre": "RAVE",
    "id": 10034,
    "title": "HIGH",
    "title_ascii": "HIGH"
  },
  {
    "artist": "RAM",
    "genre": "RAVE",
    "id": 10035,
    "title": "LOW",
    "title_ascii": "LOW"
  },
  {
    "artist": "RAM",
    "genre": "DRUM'N'BASS",
    "id": 10036,
    "title": "FEEL IT",
    "title_ascii": "FEEL IT"
  },
  {
    "artist": "PINK PONG",
    "genre": "TRANCE",
    "id": 10037,
    "title": "HI SCHOOL DREAM",
    "title_ascii": "HI SCHOOL DREAM"
  },
  {
    "artist": "PINK PONG",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 10038,
    "title": "ALIEN TEMPLE",
    "title_ascii": "ALIEN TEMPLE"
  },
  {
    "artist": "ASLETICS",
    "genre": "HIP HOP",
    "id": 10039,
    "title": "NO DOUBT GET LOUD",
    "title_ascii": "NO DOUBT GET LOUD"
  },
  {
    "artist": "sampling masters MEGA",
    "genre": "お江戸テクノ",
    "id": 10040,
    "title": "1st Samurai",
    "title_ascii": "1st Samurai"
  },
  {
    "artist": "sampling masters AYA",
    "genre": "ETHNO HARDCORE",
    "id": 10041,
    "title": "Debtty Daddy",
    "title_ascii": "Debtty Daddy"
  },
  {
    "artist": "Audio Highs",
    "genre": "BREAK BEATS",
    "id": 10042,
    "title": "Feedback",
    "title_ascii": "Feedback"
  },
  {
    "artist": "Mitsuto Suzuki",
    "genre": "MEDIUM WAVE",
    "id": 10043,
    "title": "Let's run",
    "title_ascii": "Let's run"
  },
  {
    "artist": "中山結衣",
    "genre": "J-POP",
    "id": 10044,
    "title": "Don't forget",
    "title_ascii": "Don't forget"
  },
  {
    "artist": "Toshiji Katoh",
    "genre": "ELECTRONICA",
    "id": 10045,
    "title": "COSMIC RAISE",
    "title_ascii": "COSMIC RAISE"
  },
  {
    "artist": "Twin AmadeuS",
    "genre": "NATURAL SOUND",
    "id": 10046,
    "title": "Freezing atmosphere",
    "title_ascii": "Freezing atmosphere"
  },
  {
    "artist": "EeL",
    "genre": "DREAM TECHNO",
    "id": 10047,
    "title": "ASTRAL VOYAGE",
    "title_ascii": "ASTRAL VOYAGE"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER J-POP FOUR",
    "id": 10048,
    "title": "DoLL",
    "title_ascii": "DoLL"
  },
  {
    "artist": "Risk Junk",
    "genre": "HAPPY",
    "id": 10049,
    "title": "One More Lovely",
    "title_ascii": "One More Lovely"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "RAVE",
    "id": 10050,
    "title": "R2",
    "title_ascii": "R2"
  },
  {
    "artist": "dj nagureo",
    "genre": "PIANO AMBIENT",
    "id": 10051,
    "title": "5.8.8.",
    "title_ascii": "5.8.8."
  },
  {
    "artist": "L.E.D.",
    "genre": "GOA TRANCE",
    "id": 10052,
    "title": "GHOST REVIVAL",
    "title_ascii": "GHOST REVIVAL"
  },
  {
    "artist": "Mr.T",
    "genre": "GAME MUSIC",
    "id": 10053,
    "title": "GRADIUS -FULL SPEED-",
    "title_ascii": "GRADIUS -FULL SPEED-"
  },
  {
    "artist": "Mr.T",
    "genre": "GAME MUSIC",
    "id": 10054,
    "title": "A-JAX(3-WAY MIX)",
    "title_ascii": "A-JAX(3-WAY MIX)"
  },
  {
    "artist": "L.E.D.",
    "genre": "LIQUID FUNK",
    "id": 10201,
    "title": "ACID VISION",
    "title_ascii": "ACID VISION"
  },
  {
    "artist": "Togo project feat.Sana(Remixed by Midihead)",
    "genre": "HARD HOUSE",
    "id": 10204,
    "title": "jelly kiss -Midihead's Smack Mix-",
    "title_ascii": "jelly kiss -Midihead's Smack Mix-"
  },
  {
    "artist": "Asami",
    "genre": "R&B",
    "id": 10205,
    "title": "Strong Woman feat.DABO",
    "title_ascii": "Strong Woman feat.DABO"
  },
  {
    "artist": "SPARKER",
    "genre": "TRANCE",
    "id": 11001,
    "title": "BLOCKS",
    "title_ascii": "BLOCKS"
  },
  {
    "artist": "SPARKER",
    "genre": "ROCOCO TEK",
    "id": 11002,
    "title": "BREATH",
    "title_ascii": "BREATH"
  },
  {
    "artist": "SLAKE",
    "genre": "DEATH DISCO",
    "id": 11003,
    "title": "TEXTURE",
    "title_ascii": "TEXTURE"
  },
  {
    "artist": "platoniX with ray.D",
    "genre": "J-POP",
    "id": 11004,
    "title": "Don't be afraid myself",
    "title_ascii": "Don't be afraid myself"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 11005,
    "title": "SPEEDY CAT",
    "title_ascii": "SPEEDY CAT"
  },
  {
    "artist": "DAVE&NUAGE",
    "genre": "SUPER EURO BEAT",
    "id": 11006,
    "title": "CAR OF YOUR DREAMS",
    "title_ascii": "CAR OF YOUR DREAMS"
  },
  {
    "artist": "NAOKI feat.星野奏子",
    "genre": "CYBER J-EURO",
    "id": 11007,
    "title": "太陽～T・A・I・Y・O～",
    "title_ascii": "TAIYO"
  },
  {
    "artist": "colors",
    "genre": "BEAT ROCK",
    "id": 11008,
    "title": "KEY",
    "title_ascii": "KEY"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TRANCE",
    "id": 11009,
    "title": "awakening",
    "title_ascii": "awakening"
  },
  {
    "artist": "Tatsh feat. K.Nayuki",
    "genre": "MEDIEVAL CHOIR",
    "id": 11010,
    "title": "Sphere",
    "title_ascii": "Sphere"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER J-POP FIVE",
    "id": 11011,
    "title": "ＵＬＴｉＭΛＴＥ",
    "title_ascii": "ULTIMATE"
  },
  {
    "artist": "D.J.SETUP",
    "genre": "PSYCHEDELIC TECHNO",
    "id": 11012,
    "title": "spiral galaxy",
    "title_ascii": "spiral galaxy"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "PSYCHEDELIC GOA TRANCE",
    "id": 11013,
    "title": "ANDROMEDA",
    "title_ascii": "ANDROMEDA"
  },
  {
    "artist": "KOHTA",
    "genre": "HARD SONATA",
    "id": 11014,
    "title": "RESONATE 1794",
    "title_ascii": "RESONATE 1794"
  },
  {
    "artist": "dj TAKA",
    "genre": "PIANO BALLAD",
    "id": 11015,
    "title": "earth scape",
    "title_ascii": "earth scape"
  },
  {
    "artist": "Orange Lounge",
    "genre": "FRANCE",
    "id": 11016,
    "title": "Les filles balancent",
    "title_ascii": "Les filles balancent"
  },
  {
    "artist": "good-cool feat. Raj Ramayya",
    "genre": "AFRICA",
    "id": 11017,
    "title": "Move Me",
    "title_ascii": "Move Me"
  },
  {
    "artist": "D-crew feat.DENNIS GUNN(DJ Yoshitaka SCRATCHING)",
    "genre": "AMERICA",
    "id": 11018,
    "title": "Close my Eyes for Me",
    "title_ascii": "Close my Eyes for Me"
  },
  {
    "artist": "ウッチーズ",
    "genre": "JAPAN",
    "id": 11019,
    "title": "大桟橋",
    "title_ascii": "OOSANBASHI"
  },
  {
    "artist": "Q'HEY",
    "genre": "MINIMAL",
    "id": 11020,
    "title": "ON THE TUBE",
    "title_ascii": "ON THE TUBE"
  },
  {
    "artist": "Nao Nakamura",
    "genre": "HAPPY",
    "id": 11021,
    "title": "believe...?",
    "title_ascii": "believe...?"
  },
  {
    "artist": "DJ 19",
    "genre": "TECHNO",
    "id": 11022,
    "title": "KING OF GROOVE",
    "title_ascii": "KING OF GROOVE"
  },
  {
    "artist": "Wall5",
    "genre": "TECHNO",
    "id": 11023,
    "title": "EVO66",
    "title_ascii": "EVO66"
  },
  {
    "artist": "DJ TOMO",
    "genre": "MIXTURE",
    "id": 11024,
    "title": "ROK DA WORLD",
    "title_ascii": "ROK DA WORLD"
  },
  {
    "artist": "Twin AmadeuS",
    "genre": "NATURAL SOUND",
    "id": 11025,
    "title": "Wonder Bullfighter",
    "title_ascii": "Wonder Bullfighter"
  },
  {
    "artist": "virkato",
    "genre": "DIRGE",
    "id": 11026,
    "title": "ピアノ協奏曲第１番”蠍火”",
    "title_ascii": "PF CONCERTO ANTI-ARES"
  },
  {
    "artist": "新谷あきら",
    "genre": "ELECTRIC CABARET",
    "id": 11027,
    "title": "INJECTION OF LOVE",
    "title_ascii": "INJECTION OF LOVE"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "CYBORG TRANCE",
    "id": 11028,
    "title": "The Hope of Tomorrow",
    "title_ascii": "The Hope of Tomorrow"
  },
  {
    "artist": "DJ SIMON",
    "genre": "TRIBAL LOUNGE",
    "id": 11029,
    "title": "Back to the Dance Floor",
    "title_ascii": "Back to the Dance Floor"
  },
  {
    "artist": "dj REMO-CON",
    "genre": "HARD ROCK",
    "id": 11030,
    "title": "FAKE TIME",
    "title_ascii": "FAKE TIME"
  },
  {
    "artist": "dj REMO-CON",
    "genre": "CLICK HOUSE",
    "id": 11031,
    "title": "Click Again",
    "title_ascii": "Click Again"
  },
  {
    "artist": "Tatsh&NAOKI",
    "genre": "SPEED RAVE",
    "id": 11032,
    "title": "RED ZONE",
    "title_ascii": "RED ZONE"
  },
  {
    "artist": "Baby Weapon feat.KAJIL",
    "genre": "DANCE POP",
    "id": 11033,
    "title": "Fly Away To India",
    "title_ascii": "Fly Away To India"
  },
  {
    "artist": "D.J.SWAN",
    "genre": "DRUM'N'BASS",
    "id": 11034,
    "title": "Secret of Love",
    "title_ascii": "Secret of Love"
  },
  {
    "artist": "Ryu☆",
    "genre": "HARD DANCE",
    "id": 11035,
    "title": "Be quiet",
    "title_ascii": "Be quiet"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 11036,
    "title": "AGEHA",
    "title_ascii": "AGEHA"
  },
  {
    "artist": "teranoid feat.MC Natsack",
    "genre": "NUSTYLE GABBA",
    "id": 11037,
    "title": "gigadelic",
    "title_ascii": "gigadelic"
  },
  {
    "artist": "LIA",
    "genre": "HAPPY HARDCORE",
    "id": 11038,
    "title": "HORIZON",
    "title_ascii": "HORIZON"
  },
  {
    "artist": "John Robinson",
    "genre": "TRANCE",
    "id": 11039,
    "title": "Kecak",
    "title_ascii": "Kecak"
  },
  {
    "artist": "D.J.Amuro",
    "genre": "RENAISSANCE",
    "id": 11040,
    "title": "AA",
    "title_ascii": "AA"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "ASIAN CROSSOVER",
    "id": 11041,
    "title": "惑",
    "title_ascii": "PERPLEXITY"
  },
  {
    "artist": "Tetsuya Uchida",
    "genre": "ERHU FUNK",
    "id": 11042,
    "title": "listen to yourself",
    "title_ascii": "listen to yourself"
  },
  {
    "artist": "DJ Yoshitaka feat.星野奏子",
    "genre": "J-POP",
    "id": 11043,
    "title": "D.A.N.C.E.!",
    "title_ascii": "D.A.N.C.E.!"
  },
  {
    "artist": "MATT LAND",
    "genre": "SUPER EURO BEAT",
    "id": 11044,
    "title": "NIGHT FLIGHT TO TOKYO",
    "title_ascii": "NIGHT FLIGHT TO TOKYO"
  },
  {
    "artist": "REGINA",
    "genre": "SUPER EURO BEAT",
    "id": 11045,
    "title": "HARMONY",
    "title_ascii": "HARMONY"
  },
  {
    "artist": "N.A.R.D feat. masayo",
    "genre": "SOFT ROCK",
    "id": 11046,
    "title": "PERFECTWORLD",
    "title_ascii": "PERFECTWORLD"
  },
  {
    "artist": "BeForU",
    "genre": "J-POP",
    "id": 11047,
    "title": "KI・SE・KI(IIDX RED EDIT)",
    "title_ascii": "KISEKI(IIDX RED EDIT)"
  },
  {
    "artist": "Togo-chef feat.朝比奈亜希",
    "genre": "R&B",
    "id": 11048,
    "title": "Tell Me More…",
    "title_ascii": "TELL ME MORE"
  },
  {
    "artist": "T-Hirono feat.PAULINHO",
    "genre": "CLUB BOSSA",
    "id": 11049,
    "title": "More Move",
    "title_ascii": "More Move"
  },
  {
    "artist": "L.E.D.",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 11050,
    "title": "NEBULA GRASPER",
    "title_ascii": "NEBULA GRASPER"
  },
  {
    "artist": "jun feat. PAULA TERRY",
    "genre": "COLORFUL HARDCORE",
    "id": 11051,
    "title": "Raspberry&#9825;Heart(English version)",
    "title_ascii": "RASPBERRY HEART"
  },
  {
    "artist": "dj Killer",
    "genre": "DRUM'N'BASS",
    "id": 11052,
    "title": "GENOCIDE",
    "title_ascii": "GENOCIDE"
  },
  {
    "artist": "Scott Brown",
    "genre": "HARDCORE",
    "id": 11201,
    "title": "Go Berzerk",
    "title_ascii": "Go Berzerk"
  },
  {
    "artist": "WaveGroup/Shoichiro Hirata ",
    "genre": "GARAGE MIX",
    "id": 11202,
    "title": "Toxic",
    "title_ascii": "Toxic"
  },
  {
    "artist": "WaveGroup/Shoichiro Hirata",
    "genre": "BREAKBEATS MIX",
    "id": 11203,
    "title": "You Really Got Me",
    "title_ascii": "You Really Got Me"
  },
  {
    "artist": "414",
    "genre": "BATTLE2005",
    "id": 12000,
    "title": "double thrash",
    "title_ascii": "double thrash"
  },
  {
    "artist": "GINGER",
    "genre": "K-GROOVE",
    "id": 12001,
    "title": "キャッシュレスは愛情消すティッシュ",
    "title_ascii": "TISSUE"
  },
  {
    "artist": "SHRINE 418",
    "genre": "PUNK OPERA",
    "id": 12002,
    "title": "Little Little Princess",
    "title_ascii": "Little Little Princess"
  },
  {
    "artist": "小坂りゆ",
    "genre": "J-HAPPY HARDCORE",
    "id": 12003,
    "title": "ヒマワリ",
    "title_ascii": "HIMAWARI"
  },
  {
    "artist": "Amuro vs Killer",
    "genre": "HUMAN SEQUENCER",
    "id": 12004,
    "title": "冥",
    "title_ascii": "MEI(TAKASH)"
  },
  {
    "artist": "ELEKTEL",
    "genre": "FUTURE HOUSE",
    "id": 12005,
    "title": "MOON RACE",
    "title_ascii": "MOON RACE"
  },
  {
    "artist": "Risk Junk feat.Erika Mochizuki",
    "genre": "HAPPY EXTREME",
    "id": 12006,
    "title": "LESSON 5",
    "title_ascii": "LESSON 5"
  },
  {
    "artist": "dj TAKA feat.Gt.Shintaro",
    "genre": "DIGI-ROCK",
    "id": 12007,
    "title": "rage against usual",
    "title_ascii": "rage against usual"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 12008,
    "title": "INAZUMA",
    "title_ascii": "INAZUMA"
  },
  {
    "artist": "jun with TAHIRIH",
    "genre": "HAPPY HARDCORE",
    "id": 12009,
    "title": "HAPPY☆ANGEL",
    "title_ascii": "HAPPY*ANGEL"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER J-POP SIX",
    "id": 12010,
    "title": "EDEN",
    "title_ascii": "EDEN"
  },
  {
    "artist": "A/I",
    "genre": "NOSTALISH REQUIEM",
    "id": 12011,
    "title": "CaptivAte～浄化～",
    "title_ascii": "CAPTIVATE-JOKA-"
  },
  {
    "artist": "DJ Yoshitaka feat. ERi",
    "genre": "ACID JAZZ",
    "id": 12012,
    "title": "Catch Me",
    "title_ascii": "Catch Me"
  },
  {
    "artist": "Tatsh feat. 星野奏子",
    "genre": "J-EUROBEAT",
    "id": 12013,
    "title": "月光",
    "title_ascii": "GEKKOU"
  },
  {
    "artist": "南さやか(BeForU) with platoniX",
    "genre": "J-EUROTRANCE",
    "id": 12014,
    "title": "Under the Sky",
    "title_ascii": "Under the Sky"
  },
  {
    "artist": "Tatsh",
    "genre": "MEDIEVAL CHOIR",
    "id": 12015,
    "title": "Xepher",
    "title_ascii": "Xepher"
  },
  {
    "artist": "Tatsh&DAYBREAKERS NEXT",
    "genre": "HAPPY EURO PARADISE",
    "id": 12016,
    "title": "Twelfth Style",
    "title_ascii": "Twelfth Style"
  },
  {
    "artist": "有沢みはる from BeForU",
    "genre": "CYBER J-ROCK",
    "id": 12018,
    "title": "I am",
    "title_ascii": "I am"
  },
  {
    "artist": "L.E.D./Remixed by Ryu☆",
    "genre": "HARD DANCE",
    "id": 12019,
    "title": "合体せよ！ストロングイェーガー！！ (Ryu☆ remix)",
    "title_ascii": "THE STRONG JAEGER(RYU* REMIX)"
  },
  {
    "artist": "青野りえ",
    "genre": "SWING WALTZ",
    "id": 12020,
    "title": "garden",
    "title_ascii": "garden"
  },
  {
    "artist": "あさき",
    "genre": "GOTHIC METAL",
    "id": 12021,
    "title": "Agnus Dei",
    "title_ascii": "Agnus Dei"
  },
  {
    "artist": "TOMOSUKE",
    "genre": "MPB",
    "id": 12022,
    "title": "Tizona d'El Cid",
    "title_ascii": "Tizona d'El Cid"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "E-ROCK",
    "id": 12023,
    "title": "EMPTY OF THE SKY",
    "title_ascii": "EMPTY OF THE SKY"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TECHNO",
    "id": 12024,
    "title": "tant pis pour toi",
    "title_ascii": "tant pis pour toi"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "SYNTHETIC PROGRESSIVE ROCK",
    "id": 12025,
    "title": "100% minimoo-G",
    "title_ascii": "100% minimoo-G"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "SYNTHESIZED TECHNO",
    "id": 12026,
    "title": "PLASMA",
    "title_ascii": "PLASMA"
  },
  {
    "artist": "Ryu☆",
    "genre": "CLICK HOUSE",
    "id": 12027,
    "title": "in motion",
    "title_ascii": "in motion"
  },
  {
    "artist": "kors k",
    "genre": "MAKINA",
    "id": 12028,
    "title": "SigSig",
    "title_ascii": "SigSig"
  },
  {
    "artist": "Chonan Chiharu",
    "genre": "REGGAE",
    "id": 12029,
    "title": "ラクエン",
    "title_ascii": "RAKUEN"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 12030,
    "title": "POODLE",
    "title_ascii": "POODLE"
  },
  {
    "artist": "dj REMO-CON",
    "genre": "HARD DANCE",
    "id": 12031,
    "title": "Pollinosis",
    "title_ascii": "Pollinosis"
  },
  {
    "artist": "MATALLY",
    "genre": "BIG BEAT",
    "id": 12032,
    "title": "SEXYSEXYCHEVY",
    "title_ascii": "SEXYSEXYCHEVY"
  },
  {
    "artist": "ULTRAdoof",
    "genre": "CYBER FUNK",
    "id": 12033,
    "title": "FUNKTION",
    "title_ascii": "FUNKTION"
  },
  {
    "artist": "Disconation",
    "genre": "RAVE",
    "id": 12034,
    "title": "Get'em up to R.A.V.E",
    "title_ascii": "Get'em up to R.A.V.E"
  },
  {
    "artist": "Mitsuto Suzuki",
    "genre": "CLICK HOUSE",
    "id": 12035,
    "title": "Listen up",
    "title_ascii": "Listen up"
  },
  {
    "artist": "Twin AmadeuS",
    "genre": "NATURAL SOUND",
    "id": 12036,
    "title": "alla turca con passione",
    "title_ascii": "alla turca con passione"
  },
  {
    "artist": "DANCE☆MAN",
    "genre": "FUNK",
    "id": 12037,
    "title": "オレはビートマニア！お前は何マニア？",
    "title_ascii": "OREHA BEATMANIA! OMAEHA NANIMANIA?"
  },
  {
    "artist": "DANCE☆MAN feat. Disっ娘",
    "genre": "DISCO",
    "id": 12038,
    "title": "We are Disっ娘よっつ打ち命",
    "title_ascii": "WE ARE DISKKO YOTTSUUCHI INOCHI"
  },
  {
    "artist": "ウッチーズ",
    "genre": "J-POP REMIX",
    "id": 12039,
    "title": "Don't let it go",
    "title_ascii": "Don't let it go"
  },
  {
    "artist": "Mr.T",
    "genre": "ELECTROSHOCK",
    "id": 12040,
    "title": "vault of heaven",
    "title_ascii": "vault of heaven"
  },
  {
    "artist": "D.J.SWAN",
    "genre": "DRUM'N'BASS",
    "id": 12041,
    "title": "Love Magic",
    "title_ascii": "Love Magic"
  },
  {
    "artist": "SILVER FOX PRODUCTIONS feat.星野奏子",
    "genre": "DANCE POP",
    "id": 12042,
    "title": "SPARK !",
    "title_ascii": "SPARK !"
  },
  {
    "artist": "good-cool",
    "genre": "TECHNO RAVE",
    "id": 12043,
    "title": "First Resolution",
    "title_ascii": "First Resolution"
  },
  {
    "artist": "SLAKE",
    "genre": "BROKEN TEK",
    "id": 12044,
    "title": "GREEN EYES",
    "title_ascii": "GREEN EYES"
  },
  {
    "artist": "CALF",
    "genre": "BREAKCORE",
    "id": 12045,
    "title": "SCREAM SQUAD",
    "title_ascii": "SCREAM SQUAD"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "UK PROGRESSIVE",
    "id": 12046,
    "title": "mind the gap",
    "title_ascii": "mind the gap"
  },
  {
    "artist": "BIG IDEA",
    "genre": "COUNTRY TECHNO",
    "id": 12047,
    "title": "TOE JAM",
    "title_ascii": "TOE JAM"
  },
  {
    "artist": "kobo",
    "genre": "DRUM'N BASS",
    "id": 12048,
    "title": "PATRIOTISM",
    "title_ascii": "PATRIOTISM"
  },
  {
    "artist": "Ryu☆",
    "genre": "TRANCE CORE",
    "id": 12049,
    "title": "Aurora",
    "title_ascii": "Aurora"
  },
  {
    "artist": "iconoclasm",
    "genre": "ANTHEM TRANCE",
    "id": 12050,
    "title": "Votum stellarum",
    "title_ascii": "Votum stellarum"
  },
  {
    "artist": "Kiyommy+Seiya",
    "genre": "HEART",
    "id": 12051,
    "title": "Pink Rose",
    "title_ascii": "Pink Rose"
  },
  {
    "artist": "DJ MURASAME",
    "genre": "TECHNO",
    "id": 12052,
    "title": "Scripted Connection⇒ N mix",
    "title_ascii": "SCRIPTED CONNECTION-> N MIX"
  },
  {
    "artist": "DJ MURASAME",
    "genre": "TECHNO",
    "id": 12053,
    "title": "Scripted Connection⇒ H mix",
    "title_ascii": "SCRIPTED CONNECTION-> H MIX"
  },
  {
    "artist": "DJ MURASAME",
    "genre": "TECHNO",
    "id": 12054,
    "title": "Scripted Connection⇒ A mix",
    "title_ascii": "SCRIPTED CONNECTION-> A MIX"
  },
  {
    "artist": "DJ Yoshitaka feat.星野奏子",
    "genre": "JAPANESE REGGAE",
    "id": 12202,
    "title": "Endless Summer Story",
    "title_ascii": "Endless Summer Story"
  },
  {
    "artist": "高田雅史",
    "genre": "CLUB JAZZ",
    "id": 12203,
    "title": "IceCube Pf.(RX-Ver.S.P.L.)",
    "title_ascii": "IceCube Pf.(RX-Ver.S.P.L.)"
  },
  {
    "artist": "PINK PONG",
    "genre": "TRANCE",
    "id": 12205,
    "title": "風の谷のDREAM",
    "title_ascii": "KAZE NO TANI NO DREAM"
  },
  {
    "artist": "白虎",
    "genre": "ASIAN MIXTURE",
    "id": 13000,
    "title": "華蝶風雪",
    "title_ascii": "KACHOUFUSETSU"
  },
  {
    "artist": "星野奏子 with the BAND",
    "genre": "POPROCK",
    "id": 13001,
    "title": "タシカナモノ",
    "title_ascii": "TASHIKANAMONO"
  },
  {
    "artist": "Tatsh Assault X",
    "genre": "SADISTIC HARDCORE",
    "id": 13002,
    "title": "The Dirty of Loudness",
    "title_ascii": "The Dirty of Loudness"
  },
  {
    "artist": "DJ MURASAME",
    "genre": "TECHNO",
    "id": 13003,
    "title": "D.C.fish",
    "title_ascii": "D.C.fish"
  },
  {
    "artist": "Remixed by Lion MUSASHI",
    "genre": "SAMBA",
    "id": 13004,
    "title": "SAMBA DE JANEIRO",
    "title_ascii": "SAMBA DE JANEIRO"
  },
  {
    "artist": "金獅子",
    "genre": "CONTEMPORARY",
    "id": 13005,
    "title": "嘆きの樹",
    "title_ascii": "NAGEKI NO KI"
  },
  {
    "artist": "Noria",
    "genre": "NEW ACOUSTIC",
    "id": 13006,
    "title": "Melody Life",
    "title_ascii": "Melody Life"
  },
  {
    "artist": "Remixed by DJ YOSHITAKA",
    "genre": "TRANCE",
    "id": 13007,
    "title": "SPRING RAIN (LLUVIA DE PRIMAVERA)",
    "title_ascii": "SPRING RAIN (LLUVIA DE PRIMAVERA)"
  },
  {
    "artist": "DJ Yoshitaka feat.杉村ことみ",
    "genre": "CUTE POP'S",
    "id": 13008,
    "title": "wish",
    "title_ascii": "wish"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "HARD RENAISSANCE",
    "id": 13009,
    "title": "Bloody Tears(IIDX EDITION)",
    "title_ascii": "Bloody Tears(IIDX EDITION)"
  },
  {
    "artist": "朱雀",
    "genre": "SUBLIME TECHNO",
    "id": 13010,
    "title": "CONTRACT",
    "title_ascii": "CONTRACT"
  },
  {
    "artist": "Caldeira feat.星野奏子",
    "genre": "BRAZILIAN HOUSE",
    "id": 13011,
    "title": "INFERNO",
    "title_ascii": "INFERNO"
  },
  {
    "artist": "NAOKI&Tatsh",
    "genre": "SUPER RAVE BEAT ",
    "id": 13012,
    "title": "DEEP ROAR",
    "title_ascii": "DEEP ROAR"
  },
  {
    "artist": "SEIYA MURAI meets “eimy”",
    "genre": "SYMPHONIC EURO",
    "id": 13013,
    "title": "Leaving...",
    "title_ascii": "LEAVING"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER J-POP SEVEN",
    "id": 13014,
    "title": "ALFARSHEAR 双神威に廻る夢",
    "title_ascii": "ALFARSHEAR"
  },
  {
    "artist": "jun with TAHIRIH",
    "genre": "LOVERS EUROBEAT",
    "id": 13015,
    "title": "Why did you go away",
    "title_ascii": "Why did you go away"
  },
  {
    "artist": "Remixed by Orange Lounge",
    "genre": "LOUNGE POP",
    "id": 13016,
    "title": "BREAK OUT",
    "title_ascii": "BREAK OUT"
  },
  {
    "artist": "Zektbach",
    "genre": "ORATORIO",
    "id": 13017,
    "title": "Apocalypse ～dirge of swans～",
    "title_ascii": "APOCALYPSE -dirge of swans-"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "FUTURELIST TYPE",
    "id": 13018,
    "title": "iFUTURELIST",
    "title_ascii": "iFUTURELIST"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TRANCE",
    "id": 13019,
    "title": "Heavenly Sun (IIDX VERSION)",
    "title_ascii": "Heavenly Sun (IIDX VERSION)"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "TRANCE",
    "id": 13020,
    "title": "Look To The Sky(cyber True Color)",
    "title_ascii": "Look To The Sky(cyber True Color)"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "FUNK'N JAZZ HOUSE",
    "id": 13021,
    "title": "with you…",
    "title_ascii": "WITH YOU"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "NU BIGBEAT BREAKS",
    "id": 13022,
    "title": "Winning Eleven9 Theme (IIDX EDITION)",
    "title_ascii": "Winning Eleven9 Theme (IIDX EDITION)"
  },
  {
    "artist": "小野秀幸",
    "genre": "LATIN HORNS GROOVE",
    "id": 13023,
    "title": "bluemoon",
    "title_ascii": "bluemoon"
  },
  {
    "artist": "D-crew feat.MAKOTO",
    "genre": "CORE POP",
    "id": 13024,
    "title": "This is Love",
    "title_ascii": "This is Love"
  },
  {
    "artist": "good-cool",
    "genre": "DRUM'N'ROCK",
    "id": 13025,
    "title": "罠",
    "title_ascii": "WANA"
  },
  {
    "artist": "玄武",
    "genre": "ESOTERIC SLOWCORE",
    "id": 13026,
    "title": "Ganymede",
    "title_ascii": "Ganymede"
  },
  {
    "artist": "ELEKTEL",
    "genre": "ELECTRO LOUNGE",
    "id": 13027,
    "title": "Ubiquitous Fantastic Ride",
    "title_ascii": "Ubiquitous Fantastic Ride"
  },
  {
    "artist": "S.S.D.FANTASICA feat.Naomi Koizumi",
    "genre": "CELTIC REEL",
    "id": 13028,
    "title": "BALLAD THE FEATHERS",
    "title_ascii": "BALLAD THE FEATHERS"
  },
  {
    "artist": "mh sequence",
    "genre": "HAPPY POP",
    "id": 13029,
    "title": "Sun Field",
    "title_ascii": "Sun Field"
  },
  {
    "artist": "Mr.T plus H",
    "genre": "ELECTRONICA",
    "id": 13030,
    "title": "Enjoy your life",
    "title_ascii": "Enjoy your life"
  },
  {
    "artist": "Mr.T",
    "genre": "TECHNO",
    "id": 13031,
    "title": "DUE TOMORROW",
    "title_ascii": "DUE TOMORROW"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 13032,
    "title": "BOOM BOOM DISCO NIGHT",
    "title_ascii": "BOOM BOOM DISCO NIGHT"
  },
  {
    "artist": "dj REMO-CON",
    "genre": "ELECTROCK",
    "id": 13033,
    "title": "Tonight?",
    "title_ascii": "Tonight?"
  },
  {
    "artist": "kors k vs teranoid",
    "genre": "FREEFORM",
    "id": 13034,
    "title": "tripping contact",
    "title_ascii": "tripping contact"
  },
  {
    "artist": "kors k feat.PSY",
    "genre": "2 STEP",
    "id": 13035,
    "title": "Power of Love",
    "title_ascii": "Power of Love"
  },
  {
    "artist": "teranoid＆MC Natsack",
    "genre": "NUSTYLE GABBA",
    "id": 13036,
    "title": "ay carumba!!!!",
    "title_ascii": "ay carumba!!!!"
  },
  {
    "artist": "HHH (Ryu☆ & Dai)",
    "genre": "BUCHIAGE TRANCE",
    "id": 13037,
    "title": "So Fabulous !!",
    "title_ascii": "So Fabulous !!"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 13038,
    "title": "waxing and wanding",
    "title_ascii": "waxing and wanding"
  },
  {
    "artist": "Ryu☆",
    "genre": "PROGRESSIVE HOUSE",
    "id": 13039,
    "title": "Harmony and Lovely",
    "title_ascii": "Harmony and Lovely"
  },
  {
    "artist": "SLAKE",
    "genre": "ELECTRONICA",
    "id": 13040,
    "title": "MINT",
    "title_ascii": "MINT"
  },
  {
    "artist": "K-MASERA",
    "genre": "80's TECHNO",
    "id": 13041,
    "title": "EURO-ROMANCE",
    "title_ascii": "EURO-ROMANCE"
  },
  {
    "artist": "tiger YAMATO",
    "genre": "NOISE POP",
    "id": 13042,
    "title": "tiger yamato",
    "title_ascii": "tiger yamato"
  },
  {
    "artist": "baby weapon feat. asuka.m",
    "genre": "DANCE POP",
    "id": 13043,
    "title": "Pretty Punisher",
    "title_ascii": "Pretty Punisher"
  },
  {
    "artist": "L.E.D.",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 13044,
    "title": "TYPE MARS(G-Style Mix)",
    "title_ascii": "TYPE MARS(G-Style Mix)"
  },
  {
    "artist": "Shoichiro Hirata",
    "genre": "MIXTURE",
    "id": 13045,
    "title": "Crazy K.I.N.O.",
    "title_ascii": "Crazy K.I.N.O."
  },
  {
    "artist": "SADA",
    "genre": "TRANCE",
    "id": 13046,
    "title": "Broadbanded",
    "title_ascii": "Broadbanded"
  },
  {
    "artist": "Tatsh feat. Junko Hirata & Sayaka Minami",
    "genre": "J-POP",
    "id": 13047,
    "title": "Double&#9825;&#9825;Loving Heart",
    "title_ascii": "DOUBLE LOVING HEART"
  },
  {
    "artist": "Tatsh",
    "genre": "CYBER OPUS",
    "id": 13048,
    "title": "Zenius -I- vanisher",
    "title_ascii": "Zenius -I- vanisher"
  },
  {
    "artist": "ＴЁЯＲＡ underground",
    "genre": "HYPER J-CORE",
    "id": 13049,
    "title": "Parasite World",
    "title_ascii": "Parasite World"
  },
  {
    "artist": "DJ YOSHITAKA feat.杉村ことみ",
    "genre": "EUROBEAT",
    "id": 13050,
    "title": "WISH(EUROBEAT MIX)",
    "title_ascii": "WISH(EUROBEAT MIX)"
  },
  {
    "artist": "kors k vs teranoid",
    "genre": "GABBA",
    "id": 13051,
    "title": "tripping contact(teranoid&MC Natsack Remix)",
    "title_ascii": "tripping contact(teranoid&MC Natsack Remix)"
  },
  {
    "artist": "dj TAKA feat.Erika Mochizuki",
    "genre": "哀愁ユーロ",
    "id": 13052,
    "title": "MOON",
    "title_ascii": "MOON"
  },
  {
    "artist": "DJ YOSHITAKA feat. G.S.C license",
    "genre": "LOVELY TRANS POP",
    "id": 13053,
    "title": "虹色",
    "title_ascii": "NIJIIRO"
  },
  {
    "artist": "佐々木博史",
    "genre": "PROGRESSIVE",
    "id": 13054,
    "title": "Concertino in Blue",
    "title_ascii": "Concertino in Blue"
  },
  {
    "artist": "橙色特別室",
    "genre": "和式電子音楽",
    "id": 13055,
    "title": "カゴノトリ～弐式～",
    "title_ascii": "KAGONOTORI"
  },
  {
    "artist": "DJ SIMON",
    "genre": "TECHNO POP",
    "id": 13201,
    "title": "321 STARS",
    "title_ascii": "321 STARS"
  },
  {
    "artist": "DJ FX",
    "genre": "HARD TECHNO",
    "id": 13202,
    "title": "Attack the music",
    "title_ascii": "Attack the music"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "2STEP POP TRANCE",
    "id": 13203,
    "title": "Back Into The Light (recut)",
    "title_ascii": "Back Into The Light (recut)"
  },
  {
    "artist": "Xephia(Tatsh＋Yuta)",
    "genre": "PROVIDENCE R",
    "id": 13204,
    "title": "Bleeding Luv ～Immorality act～",
    "title_ascii": "BLEEDING LUV -IMMORALITY ACT-"
  },
  {
    "artist": "Studio Bongo Mango feat.Tomoko Kataoka",
    "genre": "DIST.LOUNGE",
    "id": 13205,
    "title": "breathless",
    "title_ascii": "breathless"
  },
  {
    "artist": "CALF",
    "genre": "HARDCORE",
    "id": 13206,
    "title": "CALDERA",
    "title_ascii": "CALDERA"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "TEC-DRUM'N'BASS",
    "id": 13208,
    "title": "Hybrid Landscape",
    "title_ascii": "Hybrid Landscape"
  },
  {
    "artist": "RAM",
    "genre": "RAVE",
    "id": 13209,
    "title": "LIGHT MOTION",
    "title_ascii": "LIGHT MOTION"
  },
  {
    "artist": "nouvo nude",
    "genre": "DRUM'N BASS",
    "id": 13211,
    "title": "super highway",
    "title_ascii": "super highway"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "CYBORG TRANCE",
    "id": 13212,
    "title": "The Hope of Tomorrow (recut)",
    "title_ascii": "The Hope of Tomorrow (recut)"
  },
  {
    "artist": "DJ CHUCKY",
    "genre": "NU STYLE GABBA",
    "id": 13213,
    "title": "VANISHING POINT",
    "title_ascii": "VANISHING POINT"
  },
  {
    "artist": "高田雅史",
    "genre": "ETHNO POP",
    "id": 13214,
    "title": "WaterCube Pf.(RX-Ver.S.P.L.)",
    "title_ascii": "WaterCube Pf.(RX-Ver.S.P.L.)"
  },
  {
    "artist": "星野奏子",
    "genre": "EURO TRANCE",
    "id": 14000,
    "title": "リグレット",
    "title_ascii": "REGRET"
  },
  {
    "artist": "dj TAKA feat.HAL",
    "genre": "MILLENNIUM TRANCE",
    "id": 14001,
    "title": "INORI",
    "title_ascii": "INORI"
  },
  {
    "artist": "L.E.D. fw.堀澤麻衣子",
    "genre": "DRUM & BASS",
    "id": 14002,
    "title": "PHOTONGENIC",
    "title_ascii": "PHOTONGENIC"
  },
  {
    "artist": "Tatsh feat. Junko Hirata",
    "genre": "POPS",
    "id": 14003,
    "title": "Love Again...",
    "title_ascii": "Love Again..."
  },
  {
    "artist": "T&S seq. factory",
    "genre": "PSG WORKS",
    "id": 14004,
    "title": "TRANOID",
    "title_ascii": "TRANOID"
  },
  {
    "artist": "Risk Junk-G",
    "genre": "HAPPY",
    "id": 14005,
    "title": "Candy Galy",
    "title_ascii": "Candy Galy"
  },
  {
    "artist": "Kanako Hoshino with dj TAKA",
    "genre": "DANCE POP",
    "id": 14006,
    "title": "never…",
    "title_ascii": "NEVER..."
  },
  {
    "artist": "DJ YOSHITAKA-G feat.Michael a la mode",
    "genre": "RECKLESS RAVE",
    "id": 14007,
    "title": "GOLD RUSH",
    "title_ascii": "GOLD RUSH"
  },
  {
    "artist": "A/I",
    "genre": "NOSTALISH REQUIEM",
    "id": 14008,
    "title": "CaptivAte～誓い～",
    "title_ascii": "CAPTIVATE-CHIKAI-"
  },
  {
    "artist": "朱雀",
    "genre": "DECEPTIVE GABBA",
    "id": 14009,
    "title": "VANESSA",
    "title_ascii": "VANESSA"
  },
  {
    "artist": "Remixed by DJ Yoshitaka",
    "genre": "DISCO",
    "id": 14010,
    "title": "GHOSTBUSTERS",
    "title_ascii": "GHOSTBUSTERS"
  },
  {
    "artist": "DJ YOSHITAKA feat.星野奏子",
    "genre": "J-POP",
    "id": 14011,
    "title": "星をこの手に",
    "title_ascii": "NINE ELEMENTS OF THE STAR"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER J-POP ZERO",
    "id": 14012,
    "title": "零 - ZERO -",
    "title_ascii": "ZERO"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER J-POP+",
    "id": 14013,
    "title": "STARS☆☆☆(Re-tuned by HΛL) - IIDX EDITION -",
    "title_ascii": "STARS***(RE-TUNED BY HAL)-IIDX EDITION-"
  },
  {
    "artist": "Zektbach",
    "genre": "EPIC POETRY",
    "id": 14014,
    "title": "Blind Justice ～Torn souls, Hurt Faiths ～",
    "title_ascii": "Blind Justice"
  },
  {
    "artist": "D-crew",
    "genre": "FLOW POP",
    "id": 14015,
    "title": "Air Bell",
    "title_ascii": "Air Bell"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TECHNO",
    "id": 14016,
    "title": "ヨシダさん",
    "title_ascii": "YOSHIDA SAN"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "小倉テクノ",
    "id": 14017,
    "title": "Play back hate you",
    "title_ascii": "Play back hate you"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "PSYCHEDELIC SYNTH TRANCE",
    "id": 14018,
    "title": "ANDROMEDA II",
    "title_ascii": "ANDROMEDA II"
  },
  {
    "artist": "Sota Fujimori feat.cyborg AKEMI",
    "genre": "CYBORG TRANCE",
    "id": 14019,
    "title": "Cyber Force",
    "title_ascii": "Cyber Force"
  },
  {
    "artist": "miru_maki.gjw",
    "genre": "ELE POP",
    "id": 14020,
    "title": "smile",
    "title_ascii": "smile"
  },
  {
    "artist": "L.E.D.",
    "genre": "NU-SKOOL BREAKS",
    "id": 14021,
    "title": "LASER CRUSTER",
    "title_ascii": "LASER CRUSTER"
  },
  {
    "artist": "SAW WAVE SQUAD",
    "genre": "ELECTRONICA",
    "id": 14022,
    "title": "GRID KNIGHT",
    "title_ascii": "GRID KNIGHT"
  },
  {
    "artist": "jun with TAHIRIH",
    "genre": "DRAMATIC EURO TRANCE",
    "id": 14023,
    "title": "CROSSROAD ～Left Story～",
    "title_ascii": "CROSSROAD"
  },
  {
    "artist": "Mutsuhiko Izumi",
    "genre": "PROGRESSIVE",
    "id": 14024,
    "title": "HALF MOON",
    "title_ascii": "HALF MOON"
  },
  {
    "artist": "あさき",
    "genre": "INDUSTRIAL REVIEW",
    "id": 14025,
    "title": "鬼言集",
    "title_ascii": "KIGONSHU"
  },
  {
    "artist": "DAJI",
    "genre": "DIGITAL ROCK",
    "id": 14026,
    "title": "Yabis Starlight",
    "title_ascii": "Yabis Starlight"
  },
  {
    "artist": "ELEKTEL",
    "genre": "ACID JAZZ",
    "id": 14027,
    "title": "earth-like planet",
    "title_ascii": "earth-like planet"
  },
  {
    "artist": "S.S.D.FANTASICA feat.ユッコ",
    "genre": "JAPANESE ALTERATION",
    "id": 14028,
    "title": "花吹雪 ～ IIDX LIMITED ～",
    "title_ascii": "HANAFUBUKI"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "NU-NRG",
    "id": 14029,
    "title": "電人、暁に斃れる。",
    "title_ascii": "FATAL ATTACK"
  },
  {
    "artist": "StripE",
    "genre": "BUCHIAGE TRANCE",
    "id": 14030,
    "title": "FIRE FIRE",
    "title_ascii": "FIRE FIRE"
  },
  {
    "artist": "kors k",
    "genre": "SCHRANZ",
    "id": 14031,
    "title": "the shadow",
    "title_ascii": "the shadow"
  },
  {
    "artist": "John Robinson",
    "genre": "TECHNO RAVE",
    "id": 14032,
    "title": "Come On",
    "title_ascii": "Come On"
  },
  {
    "artist": "Ryu☆",
    "genre": "HANDZ UP",
    "id": 14033,
    "title": "Second Heaven",
    "title_ascii": "Second Heaven"
  },
  {
    "artist": "Auridy",
    "genre": "SCOUSE HOUSE",
    "id": 14034,
    "title": "Dreaming Sweetness",
    "title_ascii": "Dreaming Sweetness"
  },
  {
    "artist": "good-cool",
    "genre": "RAVE",
    "id": 14035,
    "title": "Sense 2007",
    "title_ascii": "Sense 2007"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "HINDU SALSA",
    "id": 14036,
    "title": "2hot2eat",
    "title_ascii": "2hot2eat"
  },
  {
    "artist": "good-cool ft. Raj Ramayya",
    "genre": "HOUSE",
    "id": 14037,
    "title": "Make Me Your Own",
    "title_ascii": "Make Me Your Own"
  },
  {
    "artist": "kors k",
    "genre": "FILTER HOUSE",
    "id": 14038,
    "title": "heaven above",
    "title_ascii": "heaven above"
  },
  {
    "artist": "Shoichiro Hirata plus Junko Hirata",
    "genre": "J-HOUSE",
    "id": 14039,
    "title": "With your Smile",
    "title_ascii": "With your Smile"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 14040,
    "title": "Roulette",
    "title_ascii": "Roulette"
  },
  {
    "artist": "Y&Co. feat.mioco",
    "genre": "歌謡ハウス",
    "id": 14041,
    "title": "So Real",
    "title_ascii": "So Real"
  },
  {
    "artist": "PINK PONG",
    "genre": "TRANCE",
    "id": 14042,
    "title": "シティ・エンジェル",
    "title_ascii": "CITY ANGEL"
  },
  {
    "artist": "SADA",
    "genre": "RETRO RAVE",
    "id": 14043,
    "title": "X-rated",
    "title_ascii": "X-rated"
  },
  {
    "artist": "akiko",
    "genre": "PIANO CONCERTO",
    "id": 14044,
    "title": "op.31 叙情",
    "title_ascii": "OP.31 JOJOU"
  },
  {
    "artist": "山根ミチル",
    "genre": "SPANISH COOL",
    "id": 14045,
    "title": "カミロ・ウナ・メンデス",
    "title_ascii": "CAMIRO UNA MENDES"
  },
  {
    "artist": "DJ TECHNORCH fw. GUHROOVY",
    "genre": "FREEFORM HARDCORE",
    "id": 14046,
    "title": "KAMAITACHI",
    "title_ascii": "KAMAITACHI"
  },
  {
    "artist": "DJ TECHNORCH fw. GUHROOVY",
    "genre": "OLDSKOOL HARDCORE RAVE",
    "id": 14047,
    "title": "METALLIC MIND",
    "title_ascii": "METALLIC MIND"
  },
  {
    "artist": "NAOKI feat. Becky Lucinda",
    "genre": "HYPER EUROBEAT",
    "id": 14048,
    "title": "My Only Shining Star",
    "title_ascii": "My Only Shining Star"
  },
  {
    "artist": "DJ YOSHITAKA feat.A/I",
    "genre": "NOSTALISH REQUIEM",
    "id": 14049,
    "title": "CaptivAte～裁き～",
    "title_ascii": "CAPTIVATE-SABAKI-"
  },
  {
    "artist": "DJ YOSHITAKA feat.DWP",
    "genre": "HIGH SPEED LOVE SONG",
    "id": 14050,
    "title": "High School Love",
    "title_ascii": "High School Love"
  },
  {
    "artist": "猫叉Master feat.JESSY",
    "genre": "POP",
    "id": 14051,
    "title": "The Smile of You",
    "title_ascii": "The Smile of You"
  },
  {
    "artist": "100-200-400",
    "genre": "SuperNOVA BEAT",
    "id": 14052,
    "title": "Fascination MAXX",
    "title_ascii": "Fascination MAXX"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 14053,
    "title": "snow storm",
    "title_ascii": "snow storm"
  },
  {
    "artist": "小坂りゆ",
    "genre": "HAPPY DANCE POP",
    "id": 14054,
    "title": "HONEY♂PUNCH",
    "title_ascii": "HONEY PUNCH"
  },
  {
    "artist": "Sis Bond Chit",
    "genre": "ROCK",
    "id": 14055,
    "title": "four-leaf",
    "title_ascii": "four-leaf"
  },
  {
    "artist": "イオンチャンネル",
    "genre": "FUTURE POP",
    "id": 14056,
    "title": "クルクル☆ラブ～Opioid Peptide MIX～",
    "title_ascii": "CURU CURU LOVE"
  },
  {
    "artist": "BeForU",
    "genre": "J-POP",
    "id": 14057,
    "title": "Red Rocket Rising",
    "title_ascii": "Red Rocket Rising"
  },
  {
    "artist": "MAD Sequence*",
    "genre": "HIP HOP",
    "id": 14058,
    "title": "Watch out!!",
    "title_ascii": "Watch out!!"
  },
  {
    "artist": "Remixed by QUADRA",
    "genre": "TECHNO",
    "id": 14201,
    "title": "Beginning of life(THE GROUND PULSE MIX)",
    "title_ascii": "Beginning of life(THE GROUND PULSE MIX)"
  },
  {
    "artist": "SySF.",
    "genre": "ELECTRO",
    "id": 14204,
    "title": "Electrified",
    "title_ascii": "Electrified"
  },
  {
    "artist": "youhei shimizu",
    "genre": "HOUSE",
    "id": 14205,
    "title": "feeling of love",
    "title_ascii": "feeling of love"
  },
  {
    "artist": "The Plastic Ambition（jun & DJ YOSHITAKA）",
    "genre": "SHINING RAVE",
    "id": 14206,
    "title": "Guilt & Love",
    "title_ascii": "Guilt & Love"
  },
  {
    "artist": "NAOKI & Ryu☆ fw.さちまゆ",
    "genre": "DANCE POP SPEED",
    "id": 14212,
    "title": "Treasure×Star",
    "title_ascii": "TREASURE*STAR"
  },
  {
    "artist": "Delaware feat. Jeff Coote",
    "genre": "LATIN SKA",
    "id": 14213,
    "title": "Turning the motor over",
    "title_ascii": "Turning the motor over"
  },
  {
    "artist": "朱雀",
    "genre": "HARD RENAISSANCE",
    "id": 15000,
    "title": "Anisakis -somatic mutation type\"Forza\"-",
    "title_ascii": "Anisakis -somatic mutation type\"Forza\"-"
  },
  {
    "artist": "Humanoid",
    "genre": "IRREGULAR HI-BREAK",
    "id": 15001,
    "title": "MENDES",
    "title_ascii": "MENDES"
  },
  {
    "artist": "DJ Yoshitaka feat.B-Agents",
    "genre": "J-R&B",
    "id": 15002,
    "title": "Darling my LUV",
    "title_ascii": "Darling my LUV"
  },
  {
    "artist": "DJ YOSHITAKA feat.星野奏子",
    "genre": "LOVELY BUCHIAGE POP",
    "id": 15003,
    "title": "MAX LOVE",
    "title_ascii": "MAX LOVE"
  },
  {
    "artist": "dj TAKA VS Ryu☆",
    "genre": "TRANCE",
    "id": 15004,
    "title": "Blue Rain",
    "title_ascii": "Blue Rain"
  },
  {
    "artist": "Lion",
    "genre": "JUNGLE",
    "id": 15005,
    "title": "four pieces of heaven",
    "title_ascii": "four pieces of heaven"
  },
  {
    "artist": "TAKA",
    "genre": "SOLDIER'S BALLAD",
    "id": 15006,
    "title": "走馬灯 -The Last Song-",
    "title_ascii": "The Last Song"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "NU STYLE GABBA",
    "id": 15007,
    "title": "THE DEEP STRIKER",
    "title_ascii": "THE DEEP STRIKER"
  },
  {
    "artist": "Scorpion",
    "genre": "BREAK CORE",
    "id": 15008,
    "title": "STEEL NEEDLE",
    "title_ascii": "STEEL NEEDLE"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "FREEFORM HARDCORE",
    "id": 15009,
    "title": "SOUND OF GIALLARHORN",
    "title_ascii": "SOUND OF GIALLARHORN"
  },
  {
    "artist": "jun with Alison",
    "genre": "TRI EURO FANTASIA",
    "id": 15010,
    "title": "REMINISCENCE",
    "title_ascii": "REMINISCENCE"
  },
  {
    "artist": "ＴЁЯＲＡ WORKS",
    "genre": "BALLAD",
    "id": 15011,
    "title": "PROMISE FOR LIFE",
    "title_ascii": "PROMISE FOR LIFE"
  },
  {
    "artist": "Dr.Honda",
    "genre": "SYMPHONIC TECHNO",
    "id": 15012,
    "title": "高高度降下低高度開傘",
    "title_ascii": "KOUKOUDOKOUKA TEIKOUDOKAISAN"
  },
  {
    "artist": "蓑舞衆",
    "genre": "HYMNUS",
    "id": 15013,
    "title": "oratio",
    "title_ascii": "oratio"
  },
  {
    "artist": "Zektbach",
    "genre": "OUVERT?RE",
    "id": 15014,
    "title": "Ristaccia",
    "title_ascii": "Ristaccia"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE EURO BEAT",
    "id": 15015,
    "title": "NEW GENERATION -もう、お前しか見えない-",
    "title_ascii": "NEW GENERATION"
  },
  {
    "artist": "Des-TRACT",
    "genre": "ULTIMATE CORE",
    "id": 15016,
    "title": "TROOPERS",
    "title_ascii": "TROOPERS"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "TECHNO",
    "id": 15017,
    "title": "SHIFT",
    "title_ascii": "SHIFT"
  },
  {
    "artist": "AKIRA YAMAOKA",
    "genre": "EDUCATION",
    "id": 15018,
    "title": "マチ子の唄",
    "title_ascii": "SONG OF MACHIKO"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "TECH-TRONIKA",
    "id": 15019,
    "title": "beatonic nation",
    "title_ascii": "beatonic nation"
  },
  {
    "artist": "Sota Fujimori feat. cyborg AKEMI",
    "genre": "TECHNOTRONICA",
    "id": 15020,
    "title": "State Of The Art",
    "title_ascii": "State Of The Art"
  },
  {
    "artist": "猫叉Master+",
    "genre": "FRENZY HOUSE",
    "id": 15021,
    "title": "end of world",
    "title_ascii": "end of world"
  },
  {
    "artist": "kors k",
    "genre": "PROG",
    "id": 15022,
    "title": "evergreen",
    "title_ascii": "evergreen"
  },
  {
    "artist": "Eagle",
    "genre": "NU-SKOOL BREAKBEATS HARDCORE",
    "id": 15023,
    "title": "ICARUS",
    "title_ascii": "ICARUS"
  },
  {
    "artist": "HHH",
    "genre": "HANDZ UP",
    "id": 15024,
    "title": "Dazzlin' Darlin",
    "title_ascii": "Dazzlin' Darlin"
  },
  {
    "artist": "Kraken",
    "genre": "N-BEATS",
    "id": 15025,
    "title": "Do it!! Do it!!",
    "title_ascii": "Do it!! Do it!!"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 15026,
    "title": "Time to Air",
    "title_ascii": "Time to Air"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "CLASSICAL PIANO SOLO",
    "id": 15027,
    "title": "avant-guerre",
    "title_ascii": "avant-guerre"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH-BREAKBEATS",
    "id": 15028,
    "title": "Digitank System",
    "title_ascii": "Digitank System"
  },
  {
    "artist": "Y&Co.",
    "genre": "80's EURO",
    "id": 15029,
    "title": "エコ爺",
    "title_ascii": "ECO-G"
  },
  {
    "artist": "Remo-con",
    "genre": "TRIBAL",
    "id": 15030,
    "title": "2 tribe 4 K",
    "title_ascii": "2 tribe 4 K"
  },
  {
    "artist": "PINK PONG",
    "genre": "PROGRESSIVE HOUSE",
    "id": 15031,
    "title": "madrugada",
    "title_ascii": "madrugada"
  },
  {
    "artist": "GUHROOVY fw.TECHNORCH",
    "genre": "HARD HOP",
    "id": 15032,
    "title": "MENTAL MELTDOWN",
    "title_ascii": "MENTAL MELTDOWN"
  },
  {
    "artist": "GUHROOVY fw. NO+CHIN",
    "genre": "RAGGA ROCK",
    "id": 15033,
    "title": "ROCK ME NOW",
    "title_ascii": "ROCK ME NOW"
  },
  {
    "artist": "S.S.D.FANTASICA feat. EMI with ARATA",
    "genre": "THE WORLD GROOVE",
    "id": 15034,
    "title": "JOURNEY TO \"FANTASICA\" (IIDX LIMITED)",
    "title_ascii": "JOURNEY TO \"FANTASICA\" (IIDX LIMITED)"
  },
  {
    "artist": "ウッチーズ",
    "genre": "ELECTRIC AOR",
    "id": 15035,
    "title": "叶うまでは",
    "title_ascii": "KANAUMADEHA"
  },
  {
    "artist": "DAJI",
    "genre": "WALTZ BEAT",
    "id": 15036,
    "title": "soldier's waltz",
    "title_ascii": "soldier's waltz"
  },
  {
    "artist": "Remixed by DJ YOSHITAKA",
    "genre": "TRANCE",
    "id": 15037,
    "title": "I'm In Love Again -DJ YOSHITAKA REMIX-",
    "title_ascii": "I'm In Love Again -DJ YOSHITAKA REMIX-"
  },
  {
    "artist": "Seiya Murai",
    "genre": "ETHNOTRONICA",
    "id": 15038,
    "title": "the trigger of innocence",
    "title_ascii": "the trigger of innocence"
  },
  {
    "artist": "Remixed by 少年ラジオ",
    "genre": "POST RENAISSANCE",
    "id": 15039,
    "title": "少年A",
    "title_ascii": "KID A"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 15040,
    "title": "scar in the earth",
    "title_ascii": "scar in the earth"
  },
  {
    "artist": "good-cool ft. Florence",
    "genre": "EUROBEAT",
    "id": 15041,
    "title": "Be OK",
    "title_ascii": "Be OK"
  },
  {
    "artist": "Aural Vampire",
    "genre": "ELECTRO",
    "id": 15042,
    "title": "湘南族 -cannibal coast-",
    "title_ascii": "SHONANZOKU"
  },
  {
    "artist": "上野圭市(aka. Babyweapon,DJ SWAMI)feat.星野奏子",
    "genre": "E-DANCE POP",
    "id": 15043,
    "title": "Kick Out 仮面",
    "title_ascii": "KICK OUT KAMEN"
  },
  {
    "artist": "RAM",
    "genre": "RAVE",
    "id": 15044,
    "title": "satfinal",
    "title_ascii": "satfinal"
  },
  {
    "artist": "RAM",
    "genre": "PIANO HOUSE",
    "id": 15045,
    "title": "Wanna Party?",
    "title_ascii": "Wanna Party?"
  },
  {
    "artist": "yasuhiro abe",
    "genre": "DANCE",
    "id": 15046,
    "title": "radius",
    "title_ascii": "radius"
  },
  {
    "artist": "StripE vs MUNETICA feat.ARISA",
    "genre": "ENERGETIC TRANCE",
    "id": 15047,
    "title": "Now and Forever",
    "title_ascii": "Now and Forever"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 15048,
    "title": "Freeway Shuffle",
    "title_ascii": "Freeway Shuffle"
  },
  {
    "artist": "αTYPE-300",
    "genre": "SUPERNOVA2 BEAT #1",
    "id": 15049,
    "title": "PARANOiA ～HADES～",
    "title_ascii": "PARANOIA -HADES-"
  },
  {
    "artist": "DE-SIRE改",
    "genre": "SUPERNOVA2 BEAT #2",
    "id": 15050,
    "title": "TRIP MACHINE PhoeniX",
    "title_ascii": "TRIP MACHINE PhoeniX"
  },
  {
    "artist": "Fracus",
    "genre": "HARD TRANCE",
    "id": 15051,
    "title": "Shades of Grey",
    "title_ascii": "Shades of Grey"
  },
  {
    "artist": "kors k feat.Rie",
    "genre": "UK HARDCORE",
    "id": 15052,
    "title": "Rising in the Sun(original mix)",
    "title_ascii": "Rising in the Sun(original mix)"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER JAPANESQUE 2",
    "id": 15054,
    "title": "華爛漫 -Flowers-",
    "title_ascii": "HANARANMAN"
  },
  {
    "artist": "DAISUKE ASAKURA ex.ＴЁЯＲＡ",
    "genre": "ULTIMATE J-POP",
    "id": 15055,
    "title": "switch",
    "title_ascii": "switch"
  },
  {
    "artist": "Jimmy Weckl",
    "genre": "FUSION",
    "id": 15056,
    "title": "ミラージュ・レジデンス",
    "title_ascii": "MIRAGE REGIDENCE"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 15057,
    "title": "in the Sky",
    "title_ascii": "in the Sky"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "HAPPY HARDCORE",
    "id": 15058,
    "title": "LOVELY STORM",
    "title_ascii": "LOVELY STORM"
  },
  {
    "artist": "猫叉Master",
    "genre": "HARD HOUSE",
    "id": 15059,
    "title": "satellite020712 from \"CODED ARMS\"",
    "title_ascii": "satellite020712 from \"CODED ARMS\""
  },
  {
    "artist": "TAKA respect for J.S.B.",
    "genre": "PROGRESSIVE BAROQUE",
    "id": 15061,
    "title": "?bertreffen",
    "title_ascii": "ubertreffen"
  },
  {
    "artist": "GUHROOVY fw.NO+CHIN",
    "genre": "RAGGACORE",
    "id": 15203,
    "title": "Biometrics Warrior",
    "title_ascii": "Biometrics Warrior"
  },
  {
    "artist": "RAM",
    "genre": "DIGITAL HARDCORE",
    "id": 15206,
    "title": "CRYMSON",
    "title_ascii": "CRYMSON"
  },
  {
    "artist": "Black∞Hole",
    "genre": "SUPERNOVA2 BEAT EX",
    "id": 15210,
    "title": "Pluto",
    "title_ascii": "Pluto"
  },
  {
    "artist": "kobo vs kr:ague",
    "genre": "DRUM'N'BASS",
    "id": 15214,
    "title": "symptom",
    "title_ascii": "symptom"
  },
  {
    "artist": "SLAKE feat. DAINA NORMAN",
    "genre": "NU JAZZ",
    "id": 15216,
    "title": "WHAT'S NEXT?",
    "title_ascii": "WHAT'S NEXT?"
  },
  {
    "artist": "e-lma",
    "genre": "NOSTALISH REQUIEM",
    "id": 16000,
    "title": "CaptivAte2～覚醒～",
    "title_ascii": "CAPTIVATE2"
  },
  {
    "artist": "小林ゆう",
    "genre": "J-TRANCE",
    "id": 16001,
    "title": "翼",
    "title_ascii": "TSUBASA"
  },
  {
    "artist": "Remixed by DJ YOSHITAKA with Michael a la mode",
    "genre": "RECKLESS RAVE",
    "id": 16002,
    "title": "B4U(BEMANI FOR YOU MIX)",
    "title_ascii": "B4U(BEMANI FOR YOU MIX)"
  },
  {
    "artist": "Lucky Vacuum",
    "genre": "HAPPY HARDCORE",
    "id": 16003,
    "title": "Colorful Cookie",
    "title_ascii": "Colorful Cookie"
  },
  {
    "artist": "TAKA",
    "genre": "PROGRESSIVE",
    "id": 16004,
    "title": "V2",
    "title_ascii": "V2"
  },
  {
    "artist": "D.J.SETUP",
    "genre": "RAGE AGAINST EMPRESS",
    "id": 16005,
    "title": "天空脳番長危機十六連打",
    "title_ascii": "RAGE AGAINST EMPRESS"
  },
  {
    "artist": "Risk Junk",
    "genre": "HARDCORE",
    "id": 16006,
    "title": "不沈艦CANDY",
    "title_ascii": "FUCHINKAN CANDY"
  },
  {
    "artist": "L.E.D.-G fw. Eriko Tanzawa",
    "genre": "HARDCORE",
    "id": 16007,
    "title": "JEWELLERY STORM",
    "title_ascii": "JEWELLERY STORM"
  },
  {
    "artist": "L.E.D.",
    "genre": "MORNING FULL ON",
    "id": 16008,
    "title": "HYPERION",
    "title_ascii": "HYPERION"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "JUMPSTYLE",
    "id": 16009,
    "title": "BITTER CHOCOLATE STRIKER",
    "title_ascii": "BITTER CHOCOLATE STRIKER"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "DREAM TRANCE",
    "id": 16010,
    "title": "Fly Above",
    "title_ascii": "Fly Above"
  },
  {
    "artist": "dj MAX STEROID",
    "genre": "ARABIC HARDCORE",
    "id": 16011,
    "title": "Arabian Rave Night",
    "title_ascii": "Arabian Rave Night"
  },
  {
    "artist": "IDEA NOTE",
    "genre": "DRAGON'BASS",
    "id": 16012,
    "title": "アタックNO.3",
    "title_ascii": "ATTACK NO.3"
  },
  {
    "artist": "AKIRA YAMAOKA feat.喜屋武ちあき",
    "genre": "ポップス",
    "id": 16013,
    "title": "山岡晃の「クイズ！家事都合！」",
    "title_ascii": "AKIRA YAMAOKA"
  },
  {
    "artist": "猫叉Master+",
    "genre": "BIGBEAT",
    "id": 16014,
    "title": "Queen's Tragedy",
    "title_ascii": "Queen's Tragedy"
  },
  {
    "artist": "飛燕流舞",
    "genre": "ASIAN JANGLE",
    "id": 16015,
    "title": "Kung-fu Empire",
    "title_ascii": "Kung-fu Empire"
  },
  {
    "artist": "Dr.Honda",
    "genre": "TRENDY TECHNO",
    "id": 16016,
    "title": "ミッドナイト堕天使",
    "title_ascii": "MIDNIGHT DATENSHI"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE EURO BEAT",
    "id": 16017,
    "title": "ALL MY TURN -このターンに、オレの全てを賭ける-",
    "title_ascii": "ALL MY TURN"
  },
  {
    "artist": "Marguerite du Pr&eacute;",
    "genre": "宮廷円舞曲",
    "id": 16018,
    "title": "Marie Antoinette",
    "title_ascii": "Marie Antoinette"
  },
  {
    "artist": "Zektbach",
    "genre": "ELEMENTAL CHANT",
    "id": 16019,
    "title": "Turii ～Panta rhei～",
    "title_ascii": "TURII -PANTA RHEI-"
  },
  {
    "artist": "朱雀 VS 玄武",
    "genre": "ESOTERIC SPEEDCORE",
    "id": 16020,
    "title": "卑弥呼",
    "title_ascii": "HIMIKO"
  },
  {
    "artist": "kors k",
    "genre": "CANDY RAVE",
    "id": 16021,
    "title": "smooooch・∀・",
    "title_ascii": "SMOOOOCH"
  },
  {
    "artist": "kors k as disconation",
    "genre": "MEGA MIX",
    "id": 16022,
    "title": "Flash Back 90's",
    "title_ascii": "Flash Back 90's"
  },
  {
    "artist": "kors k as StripE",
    "genre": "PSY TRANCE(FULL ON)",
    "id": 16023,
    "title": "Programmed World",
    "title_ascii": "Programmed World"
  },
  {
    "artist": "HHH+H",
    "genre": "J-DANCE POP",
    "id": 16024,
    "title": "まほろば",
    "title_ascii": "MAHOROBA"
  },
  {
    "artist": "Ryu☆",
    "genre": "ELECTRO-TECH",
    "id": 16025,
    "title": "Mind Mapping",
    "title_ascii": "Mind Mapping"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 16026,
    "title": "3y3s",
    "title_ascii": "3y3s"
  },
  {
    "artist": "Y&Co. Feat. DOMINO",
    "genre": "EUROBEAT",
    "id": 16027,
    "title": "Monkey Dance '09",
    "title_ascii": "Monkey Dance 09"
  },
  {
    "artist": "Y&Co.",
    "genre": "90's RAVE",
    "id": 16028,
    "title": "Y&Co. is dead or alive",
    "title_ascii": "Y&Co. is dead or alive"
  },
  {
    "artist": "GUHROOVY fw. M-Project",
    "genre": "HARD CORE",
    "id": 16029,
    "title": "ALL I NEED YOUR LOVE",
    "title_ascii": "ALL I NEED YOUR LOVE"
  },
  {
    "artist": "C×F",
    "genre": "DANCE MUSIC OF SORROW",
    "id": 16030,
    "title": "NΦ CRIME",
    "title_ascii": "N0 CRIME"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH-BREAKBEATS",
    "id": 16031,
    "title": "naughty girl@Queen's Palace",
    "title_ascii": "NAUGHTY GIRL QUEEN'S PALACE"
  },
  {
    "artist": "S.S.D. with ななっち",
    "genre": "HAPPY ☆ JIG",
    "id": 16032,
    "title": "BRIDAL FESTIVAL !!!",
    "title_ascii": "BRIDAL FESTIVAL !!!"
  },
  {
    "artist": "PINK PONG",
    "genre": "TRANCE",
    "id": 16033,
    "title": "MY FUTURE",
    "title_ascii": "MY FUTURE"
  },
  {
    "artist": "上野圭市(aka. Babyweapon,DJ SWAMI)feat.星野奏子",
    "genre": "E-DANCE POP",
    "id": 16034,
    "title": "Punch Love?仮面",
    "title_ascii": "PUNCH LOVE KAMEN"
  },
  {
    "artist": "Creative Life",
    "genre": "TECHNO POP",
    "id": 16035,
    "title": "I'm Screaming LOVE",
    "title_ascii": "I'm Screaming LOVE"
  },
  {
    "artist": "Seiya Murai",
    "genre": "IRON CONCERTO",
    "id": 16036,
    "title": "鉄甲乙女-under the steel-",
    "title_ascii": "TEKKOU OTOME-UNDER THE STEEL-"
  },
  {
    "artist": "BLACK STAR 幸広-YUKIHIRO-",
    "genre": "ONLY ONE TECHNO",
    "id": 16037,
    "title": "You'll say \"Now!\"",
    "title_ascii": "You'll say \"Now!\""
  },
  {
    "artist": "good-cool ft. CHiCO",
    "genre": "TECH-PARA",
    "id": 16038,
    "title": "Secrets",
    "title_ascii": "Secrets"
  },
  {
    "artist": "Des-MASTERS",
    "genre": "HOU-ROCK",
    "id": 16039,
    "title": "ハリツヤランデヴー",
    "title_ascii": "HARI TSUYA RENDEZ-VOUZ"
  },
  {
    "artist": "DM Ashura",
    "genre": "ENERGETIC TRANCE",
    "id": 16040,
    "title": "neogenesis",
    "title_ascii": "neogenesis"
  },
  {
    "artist": "Remixed by kors k",
    "genre": "UK HARD CORE",
    "id": 16041,
    "title": "THE SHINING POLARIS(kors k mix)",
    "title_ascii": "THE SHINING POLARIS(kors k mix)"
  },
  {
    "artist": "猫叉Master feat.JUNE",
    "genre": "HOUSE",
    "id": 16042,
    "title": "Bahram Attack-猫叉Master Remix-",
    "title_ascii": "BAHRAM ATTACK"
  },
  {
    "artist": "Remixed by DJ YOSHITAKA",
    "genre": "BUCHIAGE TRANCE",
    "id": 16043,
    "title": "Cyber Force -DJ Yoshitaka Remix- ",
    "title_ascii": "Cyber Force -DJ Yoshitaka Remix- "
  },
  {
    "artist": "Remixed by L.E.D.",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 16044,
    "title": "PSYCHE PLANET-GT",
    "title_ascii": "PSYCHE PLANET-GT"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE EPILOGUE",
    "id": 16045,
    "title": "THANK YOU FOR PLAYING",
    "title_ascii": "THANK YOU FOR PLAYING"
  },
  {
    "artist": "ravex",
    "genre": "HOUSE",
    "id": 16046,
    "title": "HOUSE NATION",
    "title_ascii": "HOUSE NATION"
  },
  {
    "artist": "Remix by Sunset In Ibiza (SII)",
    "genre": "HOUSE",
    "id": 16047,
    "title": "thunder HOUSE NATION Remix",
    "title_ascii": "thunder HOUSE NATION Remix"
  },
  {
    "artist": "Shinichi Osawa",
    "genre": "HOUSE",
    "id": 16048,
    "title": "Our Song",
    "title_ascii": "Our Song"
  },
  {
    "artist": "DesQ",
    "genre": "MIXTURE",
    "id": 16049,
    "title": "Jack",
    "title_ascii": "Jack"
  },
  {
    "artist": "紅色リトマス",
    "genre": "撫子ロック",
    "id": 16050,
    "title": "凛として咲く花の如く",
    "title_ascii": "RINTOSHITESAKUHANANOGOTOKU"
  },
  {
    "artist": "Ryu☆ Vs. Sota",
    "genre": "TRANCE CORE",
    "id": 16051,
    "title": "Go Beyond!!",
    "title_ascii": "Go Beyond!!"
  },
  {
    "artist": "L.E.D.",
    "genre": "TECHNO",
    "id": 16052,
    "title": "SOLITON BEAM",
    "title_ascii": "SOLITON BEAM"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "NU SKOOL BREAKS",
    "id": 16053,
    "title": "Just a Little Smile",
    "title_ascii": "Just a Little Smile"
  },
  {
    "artist": "ARTIST",
    "genre": "GENRE",
    "id": 16072,
    "title": "TUTORIAL HI-SPEED",
    "title_ascii": "TUTORIAL HI-SPEED"
  },
  {
    "artist": "ARTIST",
    "genre": "GENRE",
    "id": 16080,
    "title": "HOW TO",
    "title_ascii": "HOW TO"
  },
  {
    "artist": "ARTIST",
    "genre": "GENRE",
    "id": 16081,
    "title": "TUTORIAL BASIC",
    "title_ascii": "TUTORIAL BASIC"
  },
  {
    "artist": "ARTIST",
    "genre": "GENRE",
    "id": 16082,
    "title": "TUTORIAL CN",
    "title_ascii": "TUTORIAL CN"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "TRANCE",
    "id": 16201,
    "title": "Back Into The Light -Feelings Won't Fade Vocal Mix-",
    "title_ascii": "Back Into The Light -Feelings Won't Fade Vocal Mix-"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "ELECTRO",
    "id": 16202,
    "title": "Electrorgasm",
    "title_ascii": "Electrorgasm"
  },
  {
    "artist": "L.E.D.-G VS GUHROOVY",
    "genre": "HARDCORE",
    "id": 16203,
    "title": "ERaSeR EnGinE DistorteD",
    "title_ascii": "ERaSeR EnGinE DistorteD"
  },
  {
    "artist": "GUHROOVY fw.NO+CHIN",
    "genre": "DRUM'N'BASS",
    "id": 16204,
    "title": "FLAG OF PEACE",
    "title_ascii": "FLAG OF PEACE"
  },
  {
    "artist": "Studio Bongo Mango feat. Junko Wada (BE THE VOICE)",
    "genre": "BOSSA ELECTRO",
    "id": 16206,
    "title": "Gymnopedie 009",
    "title_ascii": "Gymnopedie 009"
  },
  {
    "artist": "kors k feat.Mari*Co",
    "genre": "乙女ハウス",
    "id": 16208,
    "title": "Sunshine Hero",
    "title_ascii": "Sunshine Hero"
  },
  {
    "artist": "kobo",
    "genre": "DRUM'N'BASS",
    "id": 16211,
    "title": "Troposphere",
    "title_ascii": "Troposphere"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "TRANCE CORE",
    "id": 17000,
    "title": "Elisha",
    "title_ascii": "Elisha"
  },
  {
    "artist": "セリカ＆エリカ",
    "genre": "POPS",
    "id": 17001,
    "title": "たからもの",
    "title_ascii": "TAKARAMONO"
  },
  {
    "artist": "Lucky Vacuum",
    "genre": "BUCHIAGE TRANCE",
    "id": 17002,
    "title": "MIRACLE MEETS",
    "title_ascii": "MIRACLE MEETS"
  },
  {
    "artist": "Creative Life",
    "genre": "TECHNO POP",
    "id": 17003,
    "title": "NoN-Fiction Story!",
    "title_ascii": "NoN-Fiction Story!"
  },
  {
    "artist": "dj TAKA feat.Kanako Hoshino",
    "genre": "WHITE SEQUENCE",
    "id": 17004,
    "title": "DROP",
    "title_ascii": "DROP"
  },
  {
    "artist": "ナイア",
    "genre": "ACTRESS",
    "id": 17005,
    "title": "Roots of my way!",
    "title_ascii": "Roots of my way!"
  },
  {
    "artist": "怒れる金の獅子",
    "genre": "EXPERIMENTAL MUSIC",
    "id": 17006,
    "title": "G59",
    "title_ascii": "G59"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "HARDCORE",
    "id": 17007,
    "title": "DOMINION",
    "title_ascii": "DOMINION"
  },
  {
    "artist": "L.E.D.",
    "genre": "HARDCORE TECHNO",
    "id": 17008,
    "title": "GALGALIM",
    "title_ascii": "GALGALIM"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "HARDCORE",
    "id": 17009,
    "title": "EXUSIA",
    "title_ascii": "EXUSIA"
  },
  {
    "artist": "Sota Fujimori feat.Kemy",
    "genre": "ELECTRO",
    "id": 17010,
    "title": "with me...",
    "title_ascii": "with me..."
  },
  {
    "artist": "ガキ大将ティーム",
    "genre": "モッシュ",
    "id": 17011,
    "title": "フェティッシュペイパー ～脇の汗回転ガール～",
    "title_ascii": "FETISH PAPER"
  },
  {
    "artist": "猫叉Master+ feat.JUNE",
    "genre": "ELECTRO POP",
    "id": 17012,
    "title": "being torn the sky",
    "title_ascii": "being torn the sky"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE BALLAD",
    "id": 17013,
    "title": "She is my wife",
    "title_ascii": "She is my wife"
  },
  {
    "artist": "SUPER HEROINE 彩香-AYAKA-",
    "genre": "ONLY ONE IDOL SONG",
    "id": 17014,
    "title": "NEW SENSATION -もう、あなたしか見えない-",
    "title_ascii": "NEW SENSATION"
  },
  {
    "artist": "Zektbach",
    "genre": "ASTRAL CHOIR",
    "id": 17015,
    "title": "Raison d'&ecirc;tre～交差する宿命～",
    "title_ascii": "RAISON D'ETRE-MALCHUT AND L'ERISIA-"
  },
  {
    "artist": "Galdeira",
    "genre": "AKASHIC RECORDS",
    "id": 17016,
    "title": "Almagest",
    "title_ascii": "Almagest"
  },
  {
    "artist": "virkato",
    "genre": "VALSE",
    "id": 17017,
    "title": "ワルツ第17番 ト短調”大犬のワルツ”",
    "title_ascii": "VALSE DU GRANDE CHIEN"
  },
  {
    "artist": "Paddington Private Detective",
    "genre": "SERIOUS STEP",
    "id": 17018,
    "title": "London Affairs Beckoned With Money Loved By Yellow Papers.",
    "title_ascii": "London Affairs Beckoned With Money Loved By Yellow Papers."
  },
  {
    "artist": "seiya-murai",
    "genre": "CLUB 80's",
    "id": 17019,
    "title": "To the Future",
    "title_ascii": "To the Future"
  },
  {
    "artist": "劇団レコード",
    "genre": "DISTORTED NEW AGE",
    "id": 17020,
    "title": "バビロニア",
    "title_ascii": "BABYLONIA"
  },
  {
    "artist": "Dirty Androids",
    "genre": "ELECTRO",
    "id": 17021,
    "title": "Last Burning",
    "title_ascii": "Last Burning"
  },
  {
    "artist": "kors k as teranoid",
    "genre": "INDUSTRIAL",
    "id": 17022,
    "title": "Bad Maniacs",
    "title_ascii": "Bad Maniacs"
  },
  {
    "artist": "kors k",
    "genre": "PSY TRANCE(MORNING)",
    "id": 17023,
    "title": "Programmed Sun",
    "title_ascii": "Programmed Sun"
  },
  {
    "artist": "Eagle",
    "genre": "NEXT SKOOL BREAKBEATS HARDCORE",
    "id": 17024,
    "title": "D",
    "title_ascii": "D"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 17025,
    "title": "bloomin' feeling",
    "title_ascii": "bloomin' feeling"
  },
  {
    "artist": "Ryu☆",
    "genre": "BUBBLEGUM DANCE",
    "id": 17026,
    "title": "Light Shine",
    "title_ascii": "Light Shine"
  },
  {
    "artist": "M-Project fw. GUHROOVY",
    "genre": "UK HARDCORE",
    "id": 17027,
    "title": "DESIRE",
    "title_ascii": "DESIRE"
  },
  {
    "artist": "GUHROOVY",
    "genre": "SPEEDCORE",
    "id": 17028,
    "title": "AIR RAID FROM THA UNDAGROUND",
    "title_ascii": "AIR RAID FROM THA UNDAGROUND"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 17029,
    "title": "Mysterious Time",
    "title_ascii": "Mysterious Time"
  },
  {
    "artist": "Ben Franklin",
    "genre": "LATIN HOUSE",
    "id": 17030,
    "title": "Brazilian Fire",
    "title_ascii": "Brazilian Fire"
  },
  {
    "artist": "Crystal Begley",
    "genre": "TECHNO/DANCE",
    "id": 17031,
    "title": "One of A Kind",
    "title_ascii": "One of A Kind"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH-BREAKBEATS",
    "id": 17032,
    "title": "Red. by Full Metal Jacket",
    "title_ascii": "Red. by Full Metal Jacket"
  },
  {
    "artist": "TSU-NA",
    "genre": "J-POP",
    "id": 17033,
    "title": "コスモス",
    "title_ascii": "COSMOS"
  },
  {
    "artist": "CULTVOICE by S.S.D.PRODUCTS",
    "genre": "INSANIO",
    "id": 17034,
    "title": "かずあそび",
    "title_ascii": "KAZUASOBI"
  },
  {
    "artist": "上野圭市(transforming into Masao?Lovely)feat.星野奏子",
    "genre": "E-DANCE POP",
    "id": 17035,
    "title": "beatchic☆仮面～好き、でいさせて～",
    "title_ascii": "BEATCHIC KAMEN"
  },
  {
    "artist": "good-cool ft. ＫＯЯＯ",
    "genre": "DRUM'N'METAL",
    "id": 17036,
    "title": "Sunrise",
    "title_ascii": "Sunrise"
  },
  {
    "artist": "星野奏子",
    "genre": "STARPOP",
    "id": 17037,
    "title": "未来のプリズム",
    "title_ascii": "PRISM OF FUTURE"
  },
  {
    "artist": "Yocke feat.Mayu",
    "genre": "TRIP-POP",
    "id": 17038,
    "title": "Chocolate Dancing",
    "title_ascii": "Chocolate Dancing"
  },
  {
    "artist": "DJ Command feat. NAGISA",
    "genre": "EUROBEAT",
    "id": 17039,
    "title": "Keep it-秋葉工房mix-",
    "title_ascii": "Keep it-AKIBA KOUBOU MIX-"
  },
  {
    "artist": "Remixed by DJ Command",
    "genre": "EUROBEAT",
    "id": 17040,
    "title": "Dazzlin' Darlin-秋葉工房mix-",
    "title_ascii": "Dazzlin' Darlin-AKIBA KOUBOU MIX-"
  },
  {
    "artist": "PRASTIK DANCEFLOOR",
    "genre": "ELECTRIC FUSION",
    "id": 17041,
    "title": "Session 1 -Genesis-",
    "title_ascii": "Session 1 -Genesis-"
  },
  {
    "artist": "PRASTIK DANCEFLOOR",
    "genre": "ELECTRO",
    "id": 17042,
    "title": "Do Back Burn",
    "title_ascii": "Do Back Burn"
  },
  {
    "artist": "MAD CHILD",
    "genre": "TECH DANCE",
    "id": 17043,
    "title": "Hydrogen Blueback",
    "title_ascii": "Hydrogen Blueback"
  },
  {
    "artist": "Auridy",
    "genre": "TECHNO POP SPEED",
    "id": 17044,
    "title": "mosaic",
    "title_ascii": "mosaic"
  },
  {
    "artist": "Jacca PoP",
    "genre": "ELECTRO POP",
    "id": 17045,
    "title": "MIRU key way",
    "title_ascii": "MIRU key way"
  },
  {
    "artist": "Dirty Androids",
    "genre": "CYBERPUNK",
    "id": 17046,
    "title": "Empire State Glory",
    "title_ascii": "Empire State Glory"
  },
  {
    "artist": "Remixed by dj TAKA VS PINK PONG",
    "genre": "TRANCE",
    "id": 17047,
    "title": "SPARK ! -essential RMX-",
    "title_ascii": "SPARK ! -essential RMX-"
  },
  {
    "artist": "Remixed by L.E.D.",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 17048,
    "title": "spiral galaxy -L.E.D. STYLE SPREADING PARTICLE BEAM MIX-",
    "title_ascii": "spiral galaxy -L.E.D. STYLE SPREADING PARTICLE BEAM MIX-"
  },
  {
    "artist": "Remixed by Sota Fujimori",
    "genre": "PSYCHE TRANCE",
    "id": 17049,
    "title": "DENJIN AKATSUKINI TAORERU -SF PureAnalogSynth Mix-",
    "title_ascii": "DENJIN AKATSUKINI TAORERU -SF PureAnalogSynth Mix-"
  },
  {
    "artist": "Remixed by DJ YOSHITAKA",
    "genre": "SUBLIME TECHNO",
    "id": 17050,
    "title": "CaptivAte～裁き～(SUBLIME TECHNO MIX)",
    "title_ascii": "CaptivAte-SABAKI-(SUBLIME TECHNO MIX) "
  },
  {
    "artist": "Ryu☆",
    "genre": "BUBBLEGUM DANCE",
    "id": 17051,
    "title": "bass 2 bass",
    "title_ascii": "bass 2 bass"
  },
  {
    "artist": "Y&Co.feat.Erica",
    "genre": "EUROBEAT",
    "id": 17052,
    "title": "IN THE NAME OF LOVE",
    "title_ascii": "IN THE NAME OF LOVE"
  },
  {
    "artist": "kors k feat. Suzuyo Miyamoto",
    "genre": "J-HOUSE",
    "id": 17053,
    "title": "Special One",
    "title_ascii": "Special One"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "HARD RENAISSANCE",
    "id": 17054,
    "title": "Evans",
    "title_ascii": "Evans"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 17055,
    "title": "水上の提督(Short mix from \"幻想水滸伝V\")",
    "title_ascii": "SUIJYOUNOTEITOKU"
  },
  {
    "artist": "L.E.D.-G VS GUHROOVY",
    "genre": "HARDCORE",
    "id": 17056,
    "title": "eRAseRmOToRpHAntOM",
    "title_ascii": "eRAseRmOToRpHAntOM"
  },
  {
    "artist": "L.E.D. fw.堀澤麻衣子",
    "genre": "DRUM & BASS",
    "id": 17057,
    "title": "DAWN -THE NEXT ENDEAVOUR-",
    "title_ascii": "DAWN -THE NEXT ENDEAVOUR-"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 17058,
    "title": "サヨナラ・ヘヴン",
    "title_ascii": "SAYONARA HEAVEN"
  },
  {
    "artist": "dj TAKA Vs. DJ YOSHITAKA",
    "genre": "TRANCE",
    "id": 17059,
    "title": "quell～the seventh slave～",
    "title_ascii": "quell-the seventh slave-"
  },
  {
    "artist": "kors k Vs. L.E.D.",
    "genre": "HARDSTYLE",
    "id": 17060,
    "title": "SOLID STATE SQUAD",
    "title_ascii": "SOLID STATE SQUAD"
  },
  {
    "artist": "dj REMO-CON VS dj TAKA",
    "genre": "TECHNO",
    "id": 17061,
    "title": "GOLDEN CROSS",
    "title_ascii": "GOLDEN CROSS"
  },
  {
    "artist": "SADA & Sota",
    "genre": "EPIC TRANCE",
    "id": 17062,
    "title": "The Story Begins",
    "title_ascii": "The Story Begins"
  },
  {
    "artist": "DJ SWAN",
    "genre": "DRUM'N'BASS",
    "id": 17063,
    "title": "BEAUTIFUL ANGEL",
    "title_ascii": "BEAUTIFUL ANGEL"
  },
  {
    "artist": "L.E.D.",
    "genre": "DRUM & BASS",
    "id": 17064,
    "title": "THE LAST STRIKER",
    "title_ascii": "THE LAST STRIKER"
  },
  {
    "artist": "Asako Yoshihiro",
    "genre": "EMO",
    "id": 17065,
    "title": "Sorrows",
    "title_ascii": "Sorrows"
  },
  {
    "artist": "Galdeira",
    "genre": "AKASHIC RECORDS",
    "id": 17100,
    "title": "Almagest (HCN Ver.) ",
    "title_ascii": "Almagest (HCN Ver.) "
  },
  {
    "artist": "DJ Yoshitaka feat.RINA",
    "genre": "R&B",
    "id": 18000,
    "title": "Stay my side",
    "title_ascii": "Stay my side"
  },
  {
    "artist": "DJ Mass MAD Izm* VS.DJ Yoshitaka",
    "genre": "TECH-BREAKBEATS",
    "id": 18001,
    "title": "Watch Out Pt.2",
    "title_ascii": "Watch Out Pt.2"
  },
  {
    "artist": "Risk Junk",
    "genre": "VACATION DANCE",
    "id": 18002,
    "title": "Tropical April",
    "title_ascii": "Tropical April"
  },
  {
    "artist": "ピンクターボ",
    "genre": "GIRLY ROCK",
    "id": 18003,
    "title": "DAYDREAMER",
    "title_ascii": "DAYDREAMER"
  },
  {
    "artist": "iconoclasm",
    "genre": "ANTHEM CORE",
    "id": 18004,
    "title": "perditus†paradisus",
    "title_ascii": "perditus/paradisus"
  },
  {
    "artist": "L.E.D.",
    "genre": "TRANCE",
    "id": 18005,
    "title": "THE DOOR INTO RAINBOW",
    "title_ascii": "THE DOOR INTO RAINBOW"
  },
  {
    "artist": "T.Kakuta With Starving Trancer + 森永真由美",
    "genre": "DANCE POP",
    "id": 18006,
    "title": "XANADU OF TWO",
    "title_ascii": "XANADU OF TWO"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "GABBA",
    "id": 18007,
    "title": "ELECTRIC MASSIVE DIVER",
    "title_ascii": "ELECTRIC MASSIVE DIVER"
  },
  {
    "artist": "L.E.D.",
    "genre": "GOA TRANCE",
    "id": 18008,
    "title": "THE BLACK KNIGHT",
    "title_ascii": "THE BLACK KNIGHT"
  },
  {
    "artist": "Ryu☆ Vs. L.E.D.-G",
    "genre": "TRANCE CORE",
    "id": 18009,
    "title": "PARADISE LOST",
    "title_ascii": "PARADISE LOST"
  },
  {
    "artist": "Sota Fujimori feat. dj MAX STEROID",
    "genre": "IIDX HANDZ UP!!",
    "id": 18010,
    "title": "Never Fade Away",
    "title_ascii": "Never Fade Away"
  },
  {
    "artist": "猫叉Master feat.Sana",
    "genre": "WORLD/POPS",
    "id": 18011,
    "title": "おおきなこえで",
    "title_ascii": "OOKINA KOEDE"
  },
  {
    "artist": "CAPACITY GATE",
    "genre": "ELECTRIC STEP",
    "id": 18012,
    "title": "Destiny Sword",
    "title_ascii": "Destiny Sword"
  },
  {
    "artist": "IT medalion",
    "genre": "TECHNO",
    "id": 18013,
    "title": "Aegis",
    "title_ascii": "Aegis"
  },
  {
    "artist": "Zektbach",
    "genre": "IDM",
    "id": 18014,
    "title": "ZETA～素数の世界と超越者～",
    "title_ascii": "ZETA"
  },
  {
    "artist": "XOGO BRYKK",
    "genre": "ELECLORE",
    "id": 18015,
    "title": "旅人リラン",
    "title_ascii": "THE FLYING RERUN"
  },
  {
    "artist": "seiya-murai feat. David Solanes Venzala",
    "genre": "CATALA LOUNGE",
    "id": 18016,
    "title": "La Mar",
    "title_ascii": "La Mar"
  },
  {
    "artist": "Dr.Honda",
    "genre": "トレンディートランス",
    "id": 18017,
    "title": "Dances with Snow Fairies",
    "title_ascii": "Dances with Snow Fairies"
  },
  {
    "artist": "kobo feat. Marsha",
    "genre": "DRUM & BASS",
    "id": 18018,
    "title": "I FIGHT ME",
    "title_ascii": "I FIGHT ME"
  },
  {
    "artist": "Mystic Moon",
    "genre": "PSYCHE FUSION",
    "id": 18019,
    "title": "Vermillion",
    "title_ascii": "Vermillion"
  },
  {
    "artist": "kors k",
    "genre": "PSY TRANCE(FULL ON)",
    "id": 18020,
    "title": "Programmed Life",
    "title_ascii": "Programmed Life"
  },
  {
    "artist": "kors k",
    "genre": "ENERGETIC HAWAIIAN TRANCE",
    "id": 18021,
    "title": "Kailua",
    "title_ascii": "Kailua"
  },
  {
    "artist": "kors k feat.Kanata Okajima＆楽天斎",
    "genre": "DANCEHALL",
    "id": 18022,
    "title": "Bounce Bounce Bounce",
    "title_ascii": "Bounce Bounce Bounce"
  },
  {
    "artist": "Cream puff",
    "genre": "BUBBLEGUM DANCE",
    "id": 18023,
    "title": "Mermaid girl",
    "title_ascii": "Mermaid girl"
  },
  {
    "artist": "Ryu☆",
    "genre": "HANDZ UP",
    "id": 18024,
    "title": "passionate fate",
    "title_ascii": "passionate fate"
  },
  {
    "artist": "Dirty Androids",
    "genre": "NU DISCO",
    "id": 18025,
    "title": "Golden Palms",
    "title_ascii": "Golden Palms"
  },
  {
    "artist": "Dirty Androids",
    "genre": "DYSTOPIA",
    "id": 18026,
    "title": "New Castle Legions",
    "title_ascii": "New Castle Legions"
  },
  {
    "artist": "Anemo=Aspel by MLREC.",
    "genre": "CROSSOVER HOUSE",
    "id": 18027,
    "title": "BLUST OF WIND",
    "title_ascii": "BLUST OF WIND"
  },
  {
    "artist": "MYTHOLOGIA by MLREC.",
    "genre": "SYMPHONIC-TEK",
    "id": 18028,
    "title": "BROKEN EDEN",
    "title_ascii": "BROKEN EDEN"
  },
  {
    "artist": "CULTVOICE by S.S.D.PRODUCTS",
    "genre": "NATSU MATSURI",
    "id": 18029,
    "title": "かげぬい ～ Ver.BENIBOTAN ～",
    "title_ascii": "KAGENUI"
  },
  {
    "artist": "M-Project fw. GUHROOVY",
    "genre": "UK HARDCORE",
    "id": 18030,
    "title": "Rock Da House",
    "title_ascii": "Rock Da House"
  },
  {
    "artist": "Remo-con",
    "genre": "TECH DANCE",
    "id": 18031,
    "title": "EXTREMA PT. 2",
    "title_ascii": "EXTREMA PT. 2"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "BROKEN SAMBA BREAK",
    "id": 18032,
    "title": "灼熱Beach Side Bunny",
    "title_ascii": "SHAKUNETSU BEACH SIDE BUNNY"
  },
  {
    "artist": "Keiichi Ueno feat. RIISA",
    "genre": "OKINAWA ANTHEM",
    "id": 18033,
    "title": "Raise your hands",
    "title_ascii": "Raise your hands"
  },
  {
    "artist": "good-cool ft. Brenda Vaughn",
    "genre": "ITALO HOUSE",
    "id": 18034,
    "title": "You Were The One",
    "title_ascii": "You Were The One"
  },
  {
    "artist": "星野奏子",
    "genre": "STARPOP",
    "id": 18035,
    "title": "Answer",
    "title_ascii": "Answer"
  },
  {
    "artist": "木之下慶行 feat.星野奏子",
    "genre": "RESORT HOUSE",
    "id": 18036,
    "title": "WISE UP!",
    "title_ascii": "WISE UP!"
  },
  {
    "artist": "DJ Command feat. うさ＆ともみん",
    "genre": "EUROBEAT",
    "id": 18037,
    "title": "恋愛レボリューション21-秋葉工房mix-",
    "title_ascii": "RENAI REVOLUTION 21 -AKIBA KOUBOU MIX-"
  },
  {
    "artist": "HIROSHI WATANABE",
    "genre": "DETROIT TECHNO",
    "id": 18038,
    "title": "LIFE SCROLLING",
    "title_ascii": "LIFE SCROLLING"
  },
  {
    "artist": "PRASTIK DANCEFLOOR",
    "genre": "ROCKIN' DRUM'N'BASS",
    "id": 18039,
    "title": "Session 9 -Chronicles-",
    "title_ascii": "Session 9 -Chronicles-"
  },
  {
    "artist": "NISH",
    "genre": "ENERGETIC TRANCE",
    "id": 18040,
    "title": "Space Time",
    "title_ascii": "Space Time"
  },
  {
    "artist": "Remixed by JAKAZiD",
    "genre": "TECHY FREEFORM",
    "id": 18041,
    "title": "ラクエン Feat.Chiharu Chonan -JAKA respect for K.S.K. Remix",
    "title_ascii": "RAKUEN FEAT.CHIHARU CHONAN -JAKA RESPECT FOR K.S.K. REMIX"
  },
  {
    "artist": "JAKAZiD",
    "genre": "AURAL ADRENALINE",
    "id": 18042,
    "title": "夕焼け ～Fading Day～",
    "title_ascii": "YUUYAKE -FADING DAY-"
  },
  {
    "artist": "Uraken feat. Calyn Tsukishima",
    "genre": "HARDCORE",
    "id": 18043,
    "title": "Believe In Me",
    "title_ascii": "Believe In Me"
  },
  {
    "artist": "Brisk & Ham",
    "genre": "UK HARDCORE",
    "id": 18044,
    "title": "Let The Track Flow",
    "title_ascii": "Let The Track Flow"
  },
  {
    "artist": "kevin energy",
    "genre": "HARDCORE",
    "id": 18045,
    "title": "Energy Drive",
    "title_ascii": "Energy Drive"
  },
  {
    "artist": "DJ Weaver",
    "genre": "HARDCORE",
    "id": 18046,
    "title": "Hardcore Mania",
    "title_ascii": "Hardcore Mania"
  },
  {
    "artist": "Art of Fighters",
    "genre": "HARDCORE",
    "id": 18047,
    "title": "Breaking the ground",
    "title_ascii": "Breaking the ground"
  },
  {
    "artist": "xac",
    "genre": "UPLIFTING TRANCE",
    "id": 18048,
    "title": "Programmed Sun (xac Antarctic Ocean mix)",
    "title_ascii": "Programmed Sun (xac Antarctic Ocean mix)"
  },
  {
    "artist": "PRASTIK DANCEFLOOR",
    "genre": "FIDGET HOUSE",
    "id": 18049,
    "title": "Cansei de S NIK",
    "title_ascii": "Cansei de S NIK"
  },
  {
    "artist": "Tatsh",
    "genre": "CYBER WALTZ",
    "id": 18050,
    "title": "reunion",
    "title_ascii": "reunion"
  },
  {
    "artist": "DJムラサメ",
    "genre": "LATIN TEK",
    "id": 18051,
    "title": "ANTHEM LANDING",
    "title_ascii": "ANTHEM LANDING"
  },
  {
    "artist": "壱岐尾彩花",
    "genre": "ELECTRO",
    "id": 18052,
    "title": "Get Out",
    "title_ascii": "Get Out"
  },
  {
    "artist": "イロハ＆リリナ",
    "genre": "MAGICAL POP",
    "id": 18053,
    "title": "Medicine of love",
    "title_ascii": "Medicine of love"
  },
  {
    "artist": "ツガル",
    "genre": "WINTER BALLADE",
    "id": 18054,
    "title": "Eternal Tears",
    "title_ascii": "Eternal Tears"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "HYPER FANTASIA",
    "id": 18055,
    "title": "Fantasia",
    "title_ascii": "Fantasia"
  },
  {
    "artist": "TAG",
    "genre": "SHOOTING WALTZ",
    "id": 18056,
    "title": "SABER WING",
    "title_ascii": "SABER WING"
  },
  {
    "artist": "NAOKI",
    "genre": "SPEED RAVE",
    "id": 18057,
    "title": "DM STAR～関西 energy style～",
    "title_ascii": "DM STAR -KANSAI ENERGY STYLE-"
  },
  {
    "artist": "Studio Bongo Mango feat. Likkle Mai",
    "genre": "SURF&DUB",
    "id": 18058,
    "title": "WE LOVE SHONAN",
    "title_ascii": "WE LOVE SHONAN"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "HARD RENAISSANCE",
    "id": 18059,
    "title": "ALBIDA",
    "title_ascii": "ALBIDA"
  },
  {
    "artist": "村正クオリア",
    "genre": "撫子メタル",
    "id": 18060,
    "title": "黒髪乱れし修羅となりて",
    "title_ascii": "KUROKAMI MIDARESHI SHURA TO NARITE"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 18061,
    "title": "sakura storm",
    "title_ascii": "sakura storm"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE ANTHEM",
    "id": 18062,
    "title": "Everlasting Resort",
    "title_ascii": "Everlasting Resort"
  },
  {
    "artist": "Sota Fujimori feat.Sachi",
    "genre": "SYNTHETIC ELECTRO",
    "id": 18063,
    "title": "Take Me Higher",
    "title_ascii": "Take Me Higher"
  },
  {
    "artist": "L.E.D.",
    "genre": "HARD DANCE",
    "id": 18064,
    "title": "STELLAR WIND",
    "title_ascii": "STELLAR WIND"
  },
  {
    "artist": "dj TAKA feat. REN",
    "genre": "HAPPY CORE",
    "id": 18065,
    "title": "Love?km",
    "title_ascii": "love km"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 18066,
    "title": "Sakura Reflection",
    "title_ascii": "Sakura Reflection"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "GOTH NU-STYLE GABBA",
    "id": 18067,
    "title": "THE FALLEN",
    "title_ascii": "THE FALLEN"
  },
  {
    "artist": "dj TAKA feat.AiMEE",
    "genre": "TRANCE",
    "id": 18068,
    "title": "Broken",
    "title_ascii": "Broken"
  },
  {
    "artist": "kors k",
    "genre": "CANDY RAVE",
    "id": 18069,
    "title": "Wuv U",
    "title_ascii": "Wuv U"
  },
  {
    "artist": "VENUS",
    "genre": "90's ELECTRIC POP",
    "id": 18070,
    "title": "Survival Games",
    "title_ascii": "Survival Games"
  },
  {
    "artist": "Lucky Vacuum",
    "genre": "BUCHIAGE TRANCE",
    "id": 18071,
    "title": "SPECIAL SUMMER CAMPAIGN!",
    "title_ascii": "SPECIAL SUMMER CAMPAIGN!"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 18072,
    "title": "中華急行",
    "title_ascii": "CHINA EXPRESS"
  },
  {
    "artist": "kors k",
    "genre": "ENERGETIC HAWAIIAN TRANCE",
    "id": 18102,
    "title": "Kailua (HCN Ver.)",
    "title_ascii": "Kailua (HCN Ver.)"
  },
  {
    "artist": "jun",
    "genre": "ジュエリーロック",
    "id": 18201,
    "title": "jewelry girl*",
    "title_ascii": "jewelry girl*"
  },
  {
    "artist": "L.E.D.-G feat. Zhang Yao",
    "genre": "HAPPY HARDCORE",
    "id": 18202,
    "title": "HONEY♂PUNCH ～L.E.D.-G STYLE MIX～",
    "title_ascii": "HONEY PUNCH -L.E.D.-G STYLE MIX-"
  },
  {
    "artist": "DJ Yoshitaka VS. DJ Mass MAD Izm*",
    "genre": "TECH-BREAKBEATS",
    "id": 19001,
    "title": "Snake Stick",
    "title_ascii": "Snake Stick"
  },
  {
    "artist": "Cuvelia",
    "genre": "ANTHEM",
    "id": 19002,
    "title": "天空の夜明け",
    "title_ascii": "TENKU NO YOAKE"
  },
  {
    "artist": "D.J.Amuro",
    "genre": "RENAISSANCE",
    "id": 19003,
    "title": "F",
    "title_ascii": "F"
  },
  {
    "artist": "Bulluvegola",
    "genre": "PROGRESSIVE ROCK",
    "id": 19004,
    "title": "In the Blackest Den",
    "title_ascii": "In the Blackest Den"
  },
  {
    "artist": "Prim",
    "genre": "Hi-BLEEP",
    "id": 19005,
    "title": "恋する☆宇宙戦争っ！！",
    "title_ascii": "koisuru uchusensou!!"
  },
  {
    "artist": "Mayumi Morinaga",
    "genre": "DANCE POP",
    "id": 19006,
    "title": "ANAGRAMS I to Y",
    "title_ascii": "ANAGRAMS I to Y"
  },
  {
    "artist": "Neulakyussra",
    "genre": "TERROR CORE",
    "id": 19007,
    "title": "YAKSHA",
    "title_ascii": "YAKSHA"
  },
  {
    "artist": "度胸兄弟",
    "genre": "TRANSCENDENTAL ETUDES",
    "id": 19008,
    "title": "DIAVOLO",
    "title_ascii": "DIAVOLO"
  },
  {
    "artist": "Ashemu",
    "genre": "HARD ROCK",
    "id": 19009,
    "title": "Scharfrichter",
    "title_ascii": "Scharfrichter"
  },
  {
    "artist": "Sota Fujimori feat. Kanako Hoshino",
    "genre": "DREAM TRANCE",
    "id": 19010,
    "title": "Lucky Days",
    "title_ascii": "Lucky Days"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 19011,
    "title": "CALL",
    "title_ascii": "CALL"
  },
  {
    "artist": "Dr.Honda feat. Moe",
    "genre": "トレンディーポップス",
    "id": 19012,
    "title": "KYAMISAMA ONEGAI!",
    "title_ascii": "KYAMISAMA ONEGAI!"
  },
  {
    "artist": "CAPACITY GATE",
    "genre": "VALIANT BEAT",
    "id": 19013,
    "title": "Several Words",
    "title_ascii": "Several Words"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE FINALE",
    "id": 19014,
    "title": "SA.YO.NA.RA. SUPER STAR",
    "title_ascii": "SA.YO.NA.RA. SUPER STAR"
  },
  {
    "artist": "Zektbach",
    "genre": "ORIENTAL MYTHOLOGY",
    "id": 19015,
    "title": "蛇神",
    "title_ascii": "KAGACHI"
  },
  {
    "artist": "Rche",
    "genre": "SACRED TRANCE",
    "id": 19016,
    "title": "Todestrieb",
    "title_ascii": "Todestrieb"
  },
  {
    "artist": "seiya-murai",
    "genre": "MARCHING ROCK",
    "id": 19017,
    "title": "GIGANT",
    "title_ascii": "GIGANT"
  },
  {
    "artist": "wｘs ft.*spiLa*",
    "genre": "NU PROGRESSIVE",
    "id": 19018,
    "title": "prompt",
    "title_ascii": "prompt"
  },
  {
    "artist": "iNO",
    "genre": "NEO CLASSICAL DANCE",
    "id": 19019,
    "title": "衰色小町メランコリア",
    "title_ascii": "SUISHOKUKOMACHI MELANCHOLIA"
  },
  {
    "artist": "Mystic Moon",
    "genre": "RAVE FUSION",
    "id": 19020,
    "title": "Quick Silver",
    "title_ascii": "Quick Silver"
  },
  {
    "artist": "kobo feat. RIO",
    "genre": "DRUM & BASS",
    "id": 19021,
    "title": "Into The Sunlight",
    "title_ascii": "Into The Sunlight"
  },
  {
    "artist": "Dr.Honda",
    "genre": "トレンディーフュージョン",
    "id": 19022,
    "title": "君のハートにロックオン",
    "title_ascii": "kimi no heart ni lockon"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "PLATINUM JAPANESQUE",
    "id": 19023,
    "title": "ЁVOLUTIΦN",
    "title_ascii": "EVOLUTION"
  },
  {
    "artist": "Qrispy Joybox",
    "genre": "TECHNO",
    "id": 19024,
    "title": "Almace",
    "title_ascii": "Almace"
  },
  {
    "artist": "kors k feat.古川未鈴",
    "genre": "AKIBA RAVE",
    "id": 19025,
    "title": "Drive Me Crazy",
    "title_ascii": "Drive Me Crazy"
  },
  {
    "artist": "Mamonis",
    "genre": "HARD TRANCE",
    "id": 19026,
    "title": "The Sampling Paradise",
    "title_ascii": "The Sampling Paradise"
  },
  {
    "artist": "kors k",
    "genre": "TECH DANCE",
    "id": 19027,
    "title": "Release The Music",
    "title_ascii": "Release The Music"
  },
  {
    "artist": "雷龍",
    "genre": "RAVERS DANCE SPEED",
    "id": 19028,
    "title": "Thunderbolt",
    "title_ascii": "Thunderbolt"
  },
  {
    "artist": "HHH×MM×ST",
    "genre": "J-DANCE POP",
    "id": 19029,
    "title": "Follow Tomorrow",
    "title_ascii": "Follow Tomorrow"
  },
  {
    "artist": "Levaslater",
    "genre": "ELECTRO GOTHIC",
    "id": 19030,
    "title": "NNRT",
    "title_ascii": "NNRT"
  },
  {
    "artist": "DJ MURASAME vs dj Killer",
    "genre": "TECHNO",
    "id": 19031,
    "title": "SHADE",
    "title_ascii": "SHADE"
  },
  {
    "artist": "Tatsh",
    "genre": "EURO RAVE",
    "id": 19032,
    "title": "24th Century BOY",
    "title_ascii": "24th Century BOY"
  },
  {
    "artist": "STN",
    "genre": "CYBER PUNK",
    "id": 19033,
    "title": "The Limbo",
    "title_ascii": "The Limbo"
  },
  {
    "artist": "Dirty Androids",
    "genre": "80's ELECTRO HOUSE",
    "id": 19034,
    "title": "Miami Sunset Drive",
    "title_ascii": "Miami Sunset Drive"
  },
  {
    "artist": "KANTASIA by S.S.D. PRODUCTS",
    "genre": "LA FABELO",
    "id": 19035,
    "title": "A MINSTREL ～ ver. short-scape ～",
    "title_ascii": "A MINSTREL - ver. short-scape -"
  },
  {
    "artist": "Katana Sounds",
    "genre": "LOUD TECH",
    "id": 19036,
    "title": "LAX5 feat.Ryota Yoshinari",
    "title_ascii": "LAX5 feat.Ryota Yoshinari"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH-BREAKBEATS",
    "id": 19037,
    "title": "BLACK.by X-Cross Fade",
    "title_ascii": "BLACK.by X-Cross Fade"
  },
  {
    "artist": "xac",
    "genre": "DRUM'N'BASS",
    "id": 19038,
    "title": "Yellow Sunrise",
    "title_ascii": "Yellow Sunrise"
  },
  {
    "artist": "星野奏子",
    "genre": "POP",
    "id": 19039,
    "title": "陽炎",
    "title_ascii": "KAGEROU"
  },
  {
    "artist": "Remixed by DJ Command",
    "genre": "EURO BEAT",
    "id": 19040,
    "title": "Mermaid girl-秋葉工房 MIX-",
    "title_ascii": "Mermaid girl -AKIBA KOUBOU MIX-"
  },
  {
    "artist": "PRASTIK DANCEFLOOR",
    "genre": "PROGRE SYNTHETIC",
    "id": 19041,
    "title": "Session 12 -Esther-",
    "title_ascii": "Session 12 -Esther-"
  },
  {
    "artist": "Beridzebeth",
    "genre": "BATTLE TRACK",
    "id": 19042,
    "title": "聖人の塔",
    "title_ascii": "SEIJIN NO TOU"
  },
  {
    "artist": "YOJI",
    "genre": "TECH DANCE",
    "id": 19043,
    "title": "DON'T WAKE ME FROM THE DREAM (2010 Summer Edition)",
    "title_ascii": "DON'T WAKE ME FROM THE DREAM (2010 Summer Edition)"
  },
  {
    "artist": "MACHO ROBOT feat. nouvo nude",
    "genre": "ELECTRO",
    "id": 19044,
    "title": "Electric Super Highway",
    "title_ascii": "Electric Super Highway"
  },
  {
    "artist": "REDALiCE feat. Shihori",
    "genre": "J-CORE",
    "id": 19045,
    "title": "Express Emotion",
    "title_ascii": "Express Emotion"
  },
  {
    "artist": "山本椛 (monotone)",
    "genre": "電波",
    "id": 19046,
    "title": "突撃!ガラスのニーソ姫!",
    "title_ascii": "RUSH! PRINCESS GLASS OVER-KNEE!"
  },
  {
    "artist": "kmp",
    "genre": "ELECTRO",
    "id": 19047,
    "title": "Liquid Crystal Girl feat. echo",
    "title_ascii": "Liquid Crystal Girl feat. echo"
  },
  {
    "artist": "Masayoshi Minoshima feat. 綾倉盟",
    "genre": "HYPER ELECTRO",
    "id": 19048,
    "title": "Round and Round",
    "title_ascii": "Round and Round"
  },
  {
    "artist": "Nhato",
    "genre": "TRANCE",
    "id": 19049,
    "title": "Star Trail",
    "title_ascii": "Star Trail"
  },
  {
    "artist": "SWAN K feat. Asuka M",
    "genre": "DRUM'N'BASS",
    "id": 19050,
    "title": "LOVE B.B.B",
    "title_ascii": "LOVE B.B.B"
  },
  {
    "artist": "Remo-con",
    "genre": "TECH DANCE",
    "id": 19051,
    "title": "Voxane",
    "title_ascii": "Voxane"
  },
  {
    "artist": "Tatsh feat.小田ユウ",
    "genre": "SPEED POP",
    "id": 19052,
    "title": "Change the World",
    "title_ascii": "Change the World"
  },
  {
    "artist": "MYTHOLOGIA by MLREC.",
    "genre": "SYMPHONIC-TEK",
    "id": 19053,
    "title": "ユミル",
    "title_ascii": "YMIR"
  },
  {
    "artist": "Hommarju",
    "genre": "HARD NRG",
    "id": 19054,
    "title": "Phoenix",
    "title_ascii": "Phoenix"
  },
  {
    "artist": "セリカ",
    "genre": "MYSTERIOUS ROCK",
    "id": 19055,
    "title": "RESISTANCE",
    "title_ascii": "RESISTANCE"
  },
  {
    "artist": "ＴЁЯＲＡ",
    "genre": "PLATINUM J-POP ONE",
    "id": 19056,
    "title": "LETHEBOLG ～双神威に斬り咲けり～",
    "title_ascii": "LETHEBOLG"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 19058,
    "title": "I'm so Happy",
    "title_ascii": "I'm so Happy"
  },
  {
    "artist": "Mutsuhiko Izumi",
    "genre": "ELECTRIC POMP",
    "id": 19059,
    "title": "Snow Goose",
    "title_ascii": "Snow Goose"
  },
  {
    "artist": "猫叉Master",
    "genre": "DRUM'N'BASS",
    "id": 19060,
    "title": "Far east nightbird",
    "title_ascii": "Far east nightbird"
  },
  {
    "artist": "高田雅史",
    "genre": "ALTERNATIVE ETHNO POP",
    "id": 19061,
    "title": "PentaCube Gt.(RX-Ver.S.P.L.)",
    "title_ascii": "PentaCube Gt.(RX-Ver.S.P.L.)"
  },
  {
    "artist": "猫叉Master+",
    "genre": "DRUM'N'BASS",
    "id": 19062,
    "title": "Infinite cave",
    "title_ascii": "Infinite cave"
  },
  {
    "artist": "L.E.D.",
    "genre": "TECHNO",
    "id": 19063,
    "title": "QUANTUM TELEPORTATION",
    "title_ascii": "QUANTUM TELEPORTATION"
  },
  {
    "artist": "Five Hammer",
    "genre": "HARD Pf",
    "id": 19064,
    "title": "fffff",
    "title_ascii": "fffff"
  },
  {
    "artist": "佐々木博史",
    "genre": "PROGRESSIVE",
    "id": 19065,
    "title": "子供の落書き帳",
    "title_ascii": "Children's Sketchbook"
  },
  {
    "artist": "Tatsh feat. ヨーコ",
    "genre": "CHARACTER SONG",
    "id": 19066,
    "title": "Trust -MATERIAL ver- (IIDX Edition)",
    "title_ascii": "Trust -MATERIAL ver- (IIDX Edition)"
  },
  {
    "artist": "S-C-U",
    "genre": "TEK-TRANCE",
    "id": 19067,
    "title": "yellow head joe",
    "title_ascii": "yellow head joe"
  },
  {
    "artist": "L.E.D.",
    "genre": "HARD TRANCE",
    "id": 19068,
    "title": "WONDER WALKER",
    "title_ascii": "WONDER WALKER"
  },
  {
    "artist": "Ryu☆",
    "genre": "HARDCORE",
    "id": 19069,
    "title": "532nm",
    "title_ascii": "532nm"
  },
  {
    "artist": "Lucky Vacuum",
    "genre": "HAPPY HARDCORE",
    "id": 19070,
    "title": "ビューティフルレシート",
    "title_ascii": "beautiful receipt"
  },
  {
    "artist": "Risk Junk",
    "genre": "HAPPY",
    "id": 19071,
    "title": "quaver♪",
    "title_ascii": "quaver"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 19072,
    "title": "Castle on the Moon",
    "title_ascii": "Castle on the Moon"
  },
  {
    "artist": "kors k",
    "genre": "CANDY HANDZ UP",
    "id": 19073,
    "title": "Flip Flap",
    "title_ascii": "Flip Flap"
  },
  {
    "artist": "L.E.D.",
    "genre": "DRUMSTEP",
    "id": 19074,
    "title": "TITANS RETURN",
    "title_ascii": "TITANS RETURN"
  },
  {
    "artist": "D.J.Amuro Vs MAX MAXIMIZER",
    "genre": "ECCENTRIC",
    "id": 19075,
    "title": "HAERETICUS",
    "title_ascii": "HAERETICUS"
  },
  {
    "artist": "S-C-U",
    "genre": "ELECTRIC POP",
    "id": 20000,
    "title": "planarian",
    "title_ascii": "planarian"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "CYBER PROGRESSIVE",
    "id": 20001,
    "title": "Fractal",
    "title_ascii": "Fractal"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 20002,
    "title": "Liberation",
    "title_ascii": "Liberation"
  },
  {
    "artist": "dj TAKA",
    "genre": "ROMANTIC SCHOOL VARIATIONS",
    "id": 20003,
    "title": "ΕΛΠΙΣ",
    "title_ascii": "Elpis"
  },
  {
    "artist": "覚醒ノPrim",
    "genre": "Hi-GOTH",
    "id": 20004,
    "title": "狂イ咲ケ焔ノ華",
    "title_ascii": "kuruizake homura no hana"
  },
  {
    "artist": "L.E.D.",
    "genre": "HARD DANCE",
    "id": 20005,
    "title": "BLUE STRAGGLER",
    "title_ascii": "BLUE STRAGGLER"
  },
  {
    "artist": "L.E.D. Vs. 幽閉サテライト",
    "genre": "歌謡 DRUM & BASS",
    "id": 20006,
    "title": "トリカゴノ鳳凰",
    "title_ascii": "TORIKAGONO HOUOH"
  },
  {
    "artist": "ギュ～っとしたい?Prim",
    "genre": "Hi-ν BLEEP",
    "id": 20007,
    "title": "キャトられ?恋はモ～モク",
    "title_ascii": "KYATORARE KOIHA MOOMOKU"
  },
  {
    "artist": "L.E.D. vs S-C-U",
    "genre": "HARD ELECTRIC POP",
    "id": 20008,
    "title": "Confiserie",
    "title_ascii": "Confiserie"
  },
  {
    "artist": "猫叉Master+",
    "genre": "DRUM'N'BASS",
    "id": 20009,
    "title": "POINT ZERO",
    "title_ascii": "POINT ZERO"
  },
  {
    "artist": "猫叉Master+",
    "genre": "ELECTRO",
    "id": 20010,
    "title": "portal",
    "title_ascii": "portal"
  },
  {
    "artist": "猫叉Master feat.*spiLa*",
    "genre": "LOUNGE POP",
    "id": 20011,
    "title": "connective",
    "title_ascii": "connective"
  },
  {
    "artist": "猫叉Master+",
    "genre": "HARD ELECTRONICA",
    "id": 20012,
    "title": "Proof of the existence",
    "title_ascii": "Proof of the existence"
  },
  {
    "artist": "猫叉Master feat.林ももこ",
    "genre": "DRUM'N'BASS",
    "id": 20013,
    "title": "Rainbow after snow",
    "title_ascii": "Rainbow after snow"
  },
  {
    "artist": "CAPACITY GATE",
    "genre": "BREAKBEATS",
    "id": 20014,
    "title": "Tp-RZ",
    "title_ascii": "Tp-RZ"
  },
  {
    "artist": "TAG feat. ERi",
    "genre": "EMOTIONAL SENTENCE",
    "id": 20015,
    "title": "Re:GENERATION",
    "title_ascii": "REGENERATION"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "HEAVENLY TRANCE",
    "id": 20016,
    "title": "In Heaven",
    "title_ascii": "In Heaven"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "KONAMI REMIX",
    "id": 20017,
    "title": "GRADIUS 2012",
    "title_ascii": "GRADIUS 2012"
  },
  {
    "artist": "Sota Fujimori 2nd Season",
    "genre": "HARD REVOLUTION",
    "id": 20018,
    "title": "CONCEPTUAL",
    "title_ascii": "CONCEPTUAL"
  },
  {
    "artist": "黒猫ダンジョン",
    "genre": "EPIC TECHNO",
    "id": 20019,
    "title": "龍と少女とデコヒーレンス",
    "title_ascii": "Decoherence"
  },
  {
    "artist": "dj TAKA meets DJ YOSHITAKA",
    "genre": "HARD RENAISSANCE",
    "id": 20020,
    "title": "Elemental Creation",
    "title_ascii": "Elemental Creation"
  },
  {
    "artist": "seiya-murai feat. ALT",
    "genre": "CHIPTUNE",
    "id": 20021,
    "title": "8bit Princess",
    "title_ascii": "8bit Princess"
  },
  {
    "artist": "iNO",
    "genre": "NEO CLASSICAL DANCE",
    "id": 20022,
    "title": "下弦の月",
    "title_ascii": "kagen no tsuki"
  },
  {
    "artist": "kors k",
    "genre": "HARDCORE",
    "id": 20023,
    "title": "New Lights",
    "title_ascii": "New Lights"
  },
  {
    "artist": "PON",
    "genre": "NU RAVE",
    "id": 20024,
    "title": "Howling",
    "title_ascii": "Howling"
  },
  {
    "artist": "REDALiCE",
    "genre": "UNIVERSAL J-CORE",
    "id": 20025,
    "title": "VEGA",
    "title_ascii": "VEGA"
  },
  {
    "artist": "Yuko Takahashi",
    "genre": "CLASSICAL PIANO",
    "id": 20027,
    "title": "Pr?ludium",
    "title_ascii": "praludium"
  },
  {
    "artist": "yu_tokiwa.djw",
    "genre": "LOUNGECORE",
    "id": 20028,
    "title": "rumrum triplets",
    "title_ascii": "rumrum triplets"
  },
  {
    "artist": "ユニバーサル度胸兄弟",
    "genre": "TRANSCENDENTAL ETUDES",
    "id": 20029,
    "title": "Thor's Hammer",
    "title_ascii": "Thor's Hammer"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "SPACY TRANCE",
    "id": 20030,
    "title": "BRAVE GLOW",
    "title_ascii": "BRAVE GLOW"
  },
  {
    "artist": "U1-ASAMi",
    "genre": "ORBITALIC CORE",
    "id": 20031,
    "title": "Illegal Function Call",
    "title_ascii": "Illegal Function Call"
  },
  {
    "artist": "Qrispy Joybox",
    "genre": "ELECTRO POP",
    "id": 20032,
    "title": "Ascalon",
    "title_ascii": "Ascalon"
  },
  {
    "artist": "Suke+Suke feat.Ribbon",
    "genre": "NEW 80's",
    "id": 20033,
    "title": "I know You know",
    "title_ascii": "I know You know"
  },
  {
    "artist": "kors k",
    "genre": "HOUSE",
    "id": 20034,
    "title": "Echo Of Forever",
    "title_ascii": "Echo Of Forever"
  },
  {
    "artist": "Eagle",
    "genre": "DRUMSTEP",
    "id": 20035,
    "title": "S!ck",
    "title_ascii": "S!ck"
  },
  {
    "artist": "Another Infinity",
    "genre": "HARDCORE",
    "id": 20036,
    "title": "405nm (Ryu☆mix)",
    "title_ascii": "405nm (Ryu* mix)"
  },
  {
    "artist": "Another Infinity feat. Mayumi Morinaga",
    "genre": "HANDZ UP",
    "id": 20037,
    "title": "Fly you to the star",
    "title_ascii": "Fly you to the star"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY GABBA",
    "id": 20038,
    "title": "Plan 8",
    "title_ascii": "Plan 8"
  },
  {
    "artist": "DJ MURASAME",
    "genre": "TECHNO",
    "id": 20039,
    "title": "仮想空間の旅人たち",
    "title_ascii": "The travelers of virtual space"
  },
  {
    "artist": "Tatsh",
    "genre": "HAPPY HARDCORE",
    "id": 20040,
    "title": "Light and Cyber…",
    "title_ascii": "Light and Cyber..."
  },
  {
    "artist": "Tatsh feat. 星野奏子",
    "genre": "LATIN EURO",
    "id": 20041,
    "title": "SYNC-ANTHEM",
    "title_ascii": "SYNC-ANTHEM"
  },
  {
    "artist": "Dirty Androids",
    "genre": "FRENCH HOUSE",
    "id": 20042,
    "title": "Spinning Around",
    "title_ascii": "Spinning Around"
  },
  {
    "artist": "佐々木博史",
    "genre": "PROGRESSIVE ROCK",
    "id": 20043,
    "title": "Timepiece phase II (CN Ver.)",
    "title_ascii": "Timepiece phase II (CN Ver.)"
  },
  {
    "artist": "Mutsuhiko Izumi & S-C-U",
    "genre": "LUCKY TECHNO",
    "id": 20044,
    "title": "ラキラキ",
    "title_ascii": "RAKIRAKI"
  },
  {
    "artist": "GUHROOVY ",
    "genre": "J-CORE",
    "id": 20045,
    "title": "Breaking Dawn feat. NO+CHIN, AYANO",
    "title_ascii": "Breaking Dawn feat. NO+CHIN, AYANO"
  },
  {
    "artist": "GUHROOVY",
    "genre": "SPEEDCORE",
    "id": 20046,
    "title": "Beastie Starter",
    "title_ascii": "Beastie Starter"
  },
  {
    "artist": "夏色ビキニのPrim",
    "genre": "Hi-CORE",
    "id": 20047,
    "title": "†渚の小悪魔ラヴリィ～レイディオ†(IIDX EDIT)",
    "title_ascii": "NAGISANOKOAKUMA LOVELY RADIO"
  },
  {
    "artist": "REDALiCE feat. Ayumi Nomiya",
    "genre": "J-CORE",
    "id": 20048,
    "title": "Little Star",
    "title_ascii": "Little Star"
  },
  {
    "artist": "ZODIACSYNDICATE",
    "genre": "ZODIAC ORACLE 7",
    "id": 20049,
    "title": "アストライアの双皿",
    "title_ascii": "BALANCE OF ASTRAIA"
  },
  {
    "artist": "星野奏子",
    "genre": "STARPOP",
    "id": 20050,
    "title": "To my star",
    "title_ascii": "To my star"
  },
  {
    "artist": "DJ TECHNORCH",
    "genre": "FREEFORM HARDCORE",
    "id": 20051,
    "title": "Sol Cosine Job 2",
    "title_ascii": "Sol Cosine Job 2"
  },
  {
    "artist": "Masayoshi Minoshima feat. 坂上なち",
    "genre": "HYPER ELECTRO",
    "id": 20052,
    "title": "ILIAS",
    "title_ascii": "ILIAS"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "TRANCE CORE",
    "id": 20053,
    "title": "FLOWER",
    "title_ascii": "FLOWER"
  },
  {
    "artist": "MOSAIC.WAV",
    "genre": "AKIBA-POP",
    "id": 20054,
    "title": "即席！脳直★ミュージックシステム",
    "title_ascii": "Sokuseki! Nouchoku Music System"
  },
  {
    "artist": "ARM feat. 山本椛 + Brasscapsule",
    "genre": "電波",
    "id": 20055,
    "title": "カジノファイヤーことみちゃん",
    "title_ascii": "Casino Fire Kotomi-chan"
  },
  {
    "artist": "Project B-",
    "genre": "PIECED ROCK",
    "id": 20056,
    "title": "Deceive Your Insight",
    "title_ascii": "Deceive Your Insight"
  },
  {
    "artist": "Mutsuhiko Izumi",
    "genre": "CHRISTMAS SYMPHONY",
    "id": 20057,
    "title": "Holy Snow",
    "title_ascii": "Holy Snow"
  },
  {
    "artist": "dj TAKA feat.AiMEE",
    "genre": "ESSENTIALLY",
    "id": 20058,
    "title": "True Blue",
    "title_ascii": "True Blue"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 20059,
    "title": "Take My Life",
    "title_ascii": "Take My Life"
  },
  {
    "artist": "TOMOSUKE × seiya-murai feat. ALT",
    "genre": "スウィートロニカ",
    "id": 20060,
    "title": "晴天Bon Voyage",
    "title_ascii": "SEITEN Bon Voyage"
  },
  {
    "artist": "中山真斗(Elements Garden)feat.桜川めぐ",
    "genre": "CYBER SYMPHONIC POP",
    "id": 20061,
    "title": "メイメツ、フラグメンツ",
    "title_ascii": "Mei-Metsu, Fragments"
  },
  {
    "artist": "MAX MAXIMIZER VS DJ TOTTO",
    "genre": "GRAVIOL",
    "id": 20062,
    "title": "STULTI",
    "title_ascii": "STULTI"
  },
  {
    "artist": "OSTER project",
    "genre": "SYMPHONIC BREAK BEATS",
    "id": 20063,
    "title": "Devilz Staircase",
    "title_ascii": "Devilz Staircase"
  },
  {
    "artist": "USAO",
    "genre": "DUB STEP",
    "id": 20064,
    "title": "ZED",
    "title_ascii": "ZED"
  },
  {
    "artist": "DJ Genki feat. Yukacco",
    "genre": "ELECTRO POP",
    "id": 20065,
    "title": "Shining World",
    "title_ascii": "Shining World"
  },
  {
    "artist": "DJ Noriken",
    "genre": "TECH DANCE",
    "id": 20066,
    "title": "Neonlights",
    "title_ascii": "Neonlights"
  },
  {
    "artist": "佐々木博史",
    "genre": "PROGRESSIVE ROCK",
    "id": 20067,
    "title": "Timepiece phase II",
    "title_ascii": "Timepiece phase II"
  },
  {
    "artist": "HIDEKI NAGANUMA",
    "genre": "NEO 80's EURO ELECTRO",
    "id": 20068,
    "title": "LUV CAN SAVE U",
    "title_ascii": "LUV CAN SAVE U"
  },
  {
    "artist": "Akhuta y OJ",
    "genre": "LIGHT-VISUAL POP",
    "id": 20069,
    "title": "虹色の花",
    "title_ascii": "NIJIIRO NO HANA"
  },
  {
    "artist": "Mutsuhiko Izumi",
    "genre": "DARK PROGRESSIVE",
    "id": 20070,
    "title": "DAY DREAM",
    "title_ascii": "DAY DREAM"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "HARD RENAISSANCE",
    "id": 20071,
    "title": "JOMANDA",
    "title_ascii": "JOMANDA"
  },
  {
    "artist": "Sota F.",
    "genre": "SPEED DANCE CORE",
    "id": 20072,
    "title": "New Decade IIDX Edition",
    "title_ascii": "New Decade IIDX Edition"
  },
  {
    "artist": "dj TAKA",
    "genre": "DRUM'N'BASS",
    "id": 20073,
    "title": "Hollywood Galaxy",
    "title_ascii": "Hollywood Galaxy"
  },
  {
    "artist": "少年ラジオ",
    "genre": "NIENTE",
    "id": 20074,
    "title": "neu",
    "title_ascii": "neu"
  },
  {
    "artist": "劇団レコード",
    "genre": "DESERT ALTERNATIVE EDGE",
    "id": 20075,
    "title": "YELLOW FROG  from Steel Chronicle",
    "title_ascii": "YELLOW FROG from Steel Chronicle"
  },
  {
    "artist": "猫叉Master",
    "genre": "BOSSA ELECTRONICA",
    "id": 20076,
    "title": "Reflection Into the EDEN",
    "title_ascii": "Reflection Into the EDEN"
  },
  {
    "artist": "dj TAKA feat.wac & secret K",
    "genre": "TRANCE",
    "id": 20082,
    "title": "Time To Empress",
    "title_ascii": "Time To Empress"
  },
  {
    "artist": "佐々木博史",
    "genre": "PROGRESSIVE",
    "id": 20083,
    "title": "たまゆら",
    "title_ascii": "tamayura"
  },
  {
    "artist": "Mr.Saturn",
    "genre": "PROGRESSIVE TRIBAL",
    "id": 20086,
    "title": "Saturn",
    "title_ascii": "Saturn"
  },
  {
    "artist": "L.E.D. vs TOMOSUKE fw.crimm",
    "genre": "BREAK CORE",
    "id": 20087,
    "title": "Cookie Bouquets",
    "title_ascii": "Cookie Bouquets"
  },
  {
    "artist": "youhei shimizu",
    "genre": "JAZZ HOUSE",
    "id": 20088,
    "title": "mnemoniq",
    "title_ascii": "mnemoniq"
  },
  {
    "artist": "大日本鉄倶楽部【あさき＆９６】",
    "genre": "お米タル",
    "id": 20089,
    "title": "お米の美味しい炊き方、そしてお米を食べることによるその効果。",
    "title_ascii": "HOW TO COOK DELICIOUS RICE AND THE EFFECT OF EATING RICE"
  },
  {
    "artist": "PON+wac",
    "genre": "CREATOR",
    "id": 20090,
    "title": "創世ノート",
    "title_ascii": "GENESIS NOTE"
  },
  {
    "artist": "TAG×U1-ASAMi",
    "genre": "ORBITALIC REVOLUTION",
    "id": 20091,
    "title": "Synergy For Angels",
    "title_ascii": "Synergy For Angels"
  },
  {
    "artist": "Sota÷Des",
    "genre": "DRUM STEP",
    "id": 20092,
    "title": "Empathetic",
    "title_ascii": "Empathetic"
  },
  {
    "artist": "猫叉L.E.D.Master+",
    "genre": "SPEED DANCE",
    "id": 20093,
    "title": "GAIA",
    "title_ascii": "GAIA"
  },
  {
    "artist": "iconoclasm",
    "genre": "SPACE REQUIEM",
    "id": 20094,
    "title": "Zirkfied",
    "title_ascii": "Zirkfied"
  },
  {
    "artist": "dj razzle dazzle",
    "genre": "VACATION DANCE",
    "id": 20095,
    "title": "examination leave",
    "title_ascii": "examination leave"
  },
  {
    "artist": "DJ YOSHITAKA ",
    "genre": "TRANCE CORE",
    "id": 20096,
    "title": "VALLIS-NERIA",
    "title_ascii": "VALLIS-NERIA"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "ART CORE",
    "id": 20097,
    "title": "Valanga",
    "title_ascii": "Valanga"
  },
  {
    "artist": "Qrispy Joybox feat.mao",
    "genre": "想歌 梅",
    "id": 20098,
    "title": "梅雪夜",
    "title_ascii": "UMEYUKIYO"
  },
  {
    "artist": "弁士カンタビレオ",
    "genre": "SILENT",
    "id": 20099,
    "title": "音楽",
    "title_ascii": "ONGAKU"
  },
  {
    "artist": "HHH×MM×ST",
    "genre": "FASCINATION",
    "id": 20100,
    "title": "朧",
    "title_ascii": "OBORO"
  },
  {
    "artist": "Cait Sith",
    "genre": "TOY CONTEMPORARY",
    "id": 20101,
    "title": "シュレーディンガーの猫",
    "title_ascii": "SCHRODINGER'S CAT"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "HI-SPEED FANTASY TUNE",
    "id": 20102,
    "title": "SHION",
    "title_ascii": "SHION"
  },
  {
    "artist": "dj TAKA",
    "genre": "BRIGHTNESS",
    "id": 21001,
    "title": "rainbow guitar weeps",
    "title_ascii": "rainbow guitar weeps"
  },
  {
    "artist": "楓璃夢＝ジークフリード＝ファイエルローゼン",
    "genre": "JUVENILE DRUM & BASS",
    "id": 21002,
    "title": "旋律のドグマ～Mis?rables～",
    "title_ascii": "SENRITSUNO DOGMA"
  },
  {
    "artist": "L.E.D.",
    "genre": "TECHNO",
    "id": 21003,
    "title": "EXTREME MACH COLLIDER",
    "title_ascii": "EXTREME MACH COLLIDER"
  },
  {
    "artist": "猫叉Master feat.霜月はるか",
    "genre": "HEALING POP",
    "id": 21004,
    "title": "Element of SPADA",
    "title_ascii": "Element of SPADA"
  },
  {
    "artist": "BaSTeT",
    "genre": "DARK ELEMENT",
    "id": 21005,
    "title": "DARK LEGACY",
    "title_ascii": "DARK LEGACY"
  },
  {
    "artist": "楽士ゾディアック",
    "genre": "ZODIAC ORACLE X",
    "id": 21006,
    "title": "牧神笛吹きて",
    "title_ascii": "AIGIPAN"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 21007,
    "title": "Critical Crystal",
    "title_ascii": "Critical Crystal"
  },
  {
    "artist": "kors k",
    "genre": "Hi-TECH FULL ON",
    "id": 21008,
    "title": "Insane Techniques",
    "title_ascii": "Insane Techniques"
  },
  {
    "artist": "TAG meets “eimy”",
    "genre": "EMOTIONAL SENTENCE",
    "id": 21009,
    "title": "esrev:eR",
    "title_ascii": "esreveR"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "DUBSTEP",
    "id": 21010,
    "title": "WOBBLE IMPACT",
    "title_ascii": "WOBBLE IMPACT"
  },
  {
    "artist": "Xceon feat. Mayumi Morinaga",
    "genre": "HYPER J-POP",
    "id": 21011,
    "title": "罪と罰",
    "title_ascii": "TSUMITOBATSU"
  },
  {
    "artist": "天叢雲剣",
    "genre": "J-CORE",
    "id": 21012,
    "title": "Close the World feat.a☆ru",
    "title_ascii": "CLOSE THE WORLD FEAT.A RU"
  },
  {
    "artist": "OSTER project",
    "genre": "SYMPHONIC BREAK BEATS",
    "id": 21013,
    "title": "Devilz Sacrifice -贖罪の羊-",
    "title_ascii": "Devilz Sacrifice -scapegoat-"
  },
  {
    "artist": "DJ Genki feat. Yukacco",
    "genre": "HAPPY CORE",
    "id": 21014,
    "title": "MAGIC & LOVE",
    "title_ascii": "MAGIC & LOVE"
  },
  {
    "artist": "USAO",
    "genre": "FRENCHCORE",
    "id": 21015,
    "title": "Miracle 5ympho X",
    "title_ascii": "Miracle 5ympho X"
  },
  {
    "artist": "DJ Noriken",
    "genre": "UK HARDCORE",
    "id": 21016,
    "title": "Elektrick U-Phoria",
    "title_ascii": "Elektrick U-Phoria"
  },
  {
    "artist": "山本椛",
    "genre": "電波METAL",
    "id": 21017,
    "title": "死神自爆中二妹アイドルももかりん(1歳)",
    "title_ascii": "Death-destruct-chuuni-imouto-idol Momokarin-1 year old"
  },
  {
    "artist": "DJ Shimamura",
    "genre": "HARDCORE RAVE",
    "id": 21018,
    "title": "Overload Frontier",
    "title_ascii": "Overload Frontier"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "ARTCORE",
    "id": 21019,
    "title": "Adularia",
    "title_ascii": "Adularia"
  },
  {
    "artist": "DJ Myosuke feat.Yukacco",
    "genre": "MAINSTREAM HARDCORE",
    "id": 21020,
    "title": "Valgus",
    "title_ascii": "Valgus"
  },
  {
    "artist": "Noizenecio",
    "genre": "GABBER",
    "id": 21021,
    "title": "Odin",
    "title_ascii": "Odin"
  },
  {
    "artist": "HALFBY",
    "genre": "UPBEAT",
    "id": 21022,
    "title": "MAD ATTACK",
    "title_ascii": "MAD ATTACK"
  },
  {
    "artist": "sasakure.UK",
    "genre": "NEUTRONIKA",
    "id": 21023,
    "title": "Atr?p?s",
    "title_ascii": "Atropos"
  },
  {
    "artist": "猫叉Master+",
    "genre": "JAG GLITCH",
    "id": 21024,
    "title": "Funny shuffle",
    "title_ascii": "Funny shuffle"
  },
  {
    "artist": "PON",
    "genre": "ELECTRO POP",
    "id": 21025,
    "title": "NPC World",
    "title_ascii": "NPC World"
  },
  {
    "artist": "TAG",
    "genre": "TRANCE POP",
    "id": 21026,
    "title": "Lighting Shower",
    "title_ascii": "Lighting Shower"
  },
  {
    "artist": "m1dy",
    "genre": "TOKYO STYLE SPEEDCORE",
    "id": 21027,
    "title": "m1dy Deluxe",
    "title_ascii": "m1dy Deluxe"
  },
  {
    "artist": "GUHROOVY",
    "genre": "DRUM'N'BASS",
    "id": 21028,
    "title": "LA FESTA LA VITA!!",
    "title_ascii": "LA FESTA LA VITA!!"
  },
  {
    "artist": "DJ TECHNORCH",
    "genre": "新世紀進歩的羽扇子音楽",
    "id": 21029,
    "title": "廿",
    "title_ascii": "TWENTY"
  },
  {
    "artist": "ななひら",
    "genre": "乙女EDM",
    "id": 21030,
    "title": "超!!遠距離らぶ?メ～ル",
    "title_ascii": "CHO ENKYORI LOVE MAIL"
  },
  {
    "artist": "Last Note.",
    "genre": "J-POP",
    "id": 21031,
    "title": "幻想系世界修復少女",
    "title_ascii": "GENSOUKEISEKAISHUUFUKUSHOUJO"
  },
  {
    "artist": "猫叉Master+",
    "genre": "HARD SYMPHONIC",
    "id": 21032,
    "title": "煉獄のエルフェリア",
    "title_ascii": "ELFERIA of purgatory"
  },
  {
    "artist": "ジャカルタファンクブラザーズ",
    "genre": "FUNKOT",
    "id": 21033,
    "title": "INSOMNIA",
    "title_ascii": "INSOMNIA"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 21034,
    "title": "Wonder Girl feat. Kanae Asaba",
    "title_ascii": "Wonder Girl feat. Kanae Asaba"
  },
  {
    "artist": "Dirty Androids",
    "genre": "DRUMSTEP",
    "id": 21035,
    "title": "RISE",
    "title_ascii": "RISE"
  },
  {
    "artist": "星野奏子",
    "genre": "KANA-POP",
    "id": 21036,
    "title": "Give Me Your Love",
    "title_ascii": "Give Me Your Love"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "HYPER GOTHIC BEAT",
    "id": 21037,
    "title": "ALBA -黎明-",
    "title_ascii": "ALBA -REIMEI-"
  },
  {
    "artist": "中山真斗 feat.桜川めぐ",
    "genre": "CYBER SYMPHONIC POP",
    "id": 21038,
    "title": "お願いアインシュタイン",
    "title_ascii": "ONEGAI EINSTEIN"
  },
  {
    "artist": "the wandering bard",
    "genre": "SYMPHONIC BREAKS",
    "id": 21039,
    "title": "into the battlefield",
    "title_ascii": "into the battlefield"
  },
  {
    "artist": "Expander",
    "genre": "GLITCH HOP",
    "id": 21041,
    "title": "diagram",
    "title_ascii": "diagram"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 21042,
    "title": "refractive index",
    "title_ascii": "refractive index"
  },
  {
    "artist": "Eagle",
    "genre": "DRUM&BASS",
    "id": 21043,
    "title": "Hypersonik",
    "title_ascii": "Hypersonik"
  },
  {
    "artist": "青龍",
    "genre": "RAVERS DANCE SPEED",
    "id": 21044,
    "title": "BLUE DRAGON(雷龍RemixIIDX)",
    "title_ascii": "BLUE DRAGON RAIRYU RemixIIDX"
  },
  {
    "artist": "dj TAKA",
    "genre": "HARD STACC",
    "id": 21045,
    "title": "Last Dance",
    "title_ascii": "Last Dance"
  },
  {
    "artist": "Destron",
    "genre": "INDUSTRIAL METAL",
    "id": 21046,
    "title": "All is Wrecked",
    "title_ascii": "All is Wrecked"
  },
  {
    "artist": "雷龍",
    "genre": "RAVERS DANCE SPEED",
    "id": 21047,
    "title": "ra'am",
    "title_ascii": "ra'am"
  },
  {
    "artist": "KUMOKIRI",
    "genre": "ORIENTAL CORE",
    "id": 21048,
    "title": "疾風迅雷",
    "title_ascii": "LIGHTNING SPEED"
  },
  {
    "artist": "DJ NAGAI",
    "genre": "J-CORE",
    "id": 21049,
    "title": "Immortal",
    "title_ascii": "Immortal"
  },
  {
    "artist": "Tyrfing",
    "genre": "HARD NRG",
    "id": 21050,
    "title": "Verflucht",
    "title_ascii": "Verflucht"
  },
  {
    "artist": "nomico / DOWNFORCE",
    "genre": "ELECTRANCE",
    "id": 21051,
    "title": "BRAVE OUT",
    "title_ascii": "BRAVE OUT"
  },
  {
    "artist": "Falsion",
    "genre": "HARDCORE RAVE",
    "id": 21052,
    "title": "Feel The Beat",
    "title_ascii": "Feel The Beat"
  },
  {
    "artist": "劇団レコード",
    "genre": "ANCIENT CIVILIZATION",
    "id": 21053,
    "title": "Pharaoh",
    "title_ascii": "Pharaoh"
  },
  {
    "artist": "Vivian",
    "genre": "CONTEMPORARY BREAKS",
    "id": 21054,
    "title": "Shattered control",
    "title_ascii": "Shattered control"
  },
  {
    "artist": "iconoclasm feat.GUMI ",
    "genre": "REPLICANT CORE",
    "id": 21055,
    "title": "Idola ",
    "title_ascii": "Idola "
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE MOMENT",
    "id": 21056,
    "title": "I will be back -オレは帰ってきた-",
    "title_ascii": "I will be back"
  },
  {
    "artist": "SUPER STAR 満-MITSURU-",
    "genre": "ONLY ONE ACT",
    "id": 21057,
    "title": "Smug Face -どうだ、オレの生き様は- (ONLY ONE EDITION)",
    "title_ascii": "Smug Face"
  },
  {
    "artist": "TAG",
    "genre": "BLOOM FUSION",
    "id": 21058,
    "title": "アルストロメリア",
    "title_ascii": "Alstroemeria"
  },
  {
    "artist": "Gram",
    "genre": "REQUIEM PSY",
    "id": 21059,
    "title": "Sigmund",
    "title_ascii": "Sigmund"
  },
  {
    "artist": "TAG underground",
    "genre": "ASTRAL HARDCORE",
    "id": 21060,
    "title": "?THER",
    "title_ascii": "AETHER"
  },
  {
    "artist": "Project B-",
    "genre": "PIECED DOWNBEAT",
    "id": 21061,
    "title": "M.D.Injection",
    "title_ascii": "M.D.Injection"
  },
  {
    "artist": "sampling masters MEGA vs 青龍",
    "genre": "ROTTERDAM TECHNO",
    "id": 21062,
    "title": "VOX UP",
    "title_ascii": "VOX UP"
  },
  {
    "artist": "Hardcore United Tokyo(teranoid & DJ TECHNORCH)",
    "genre": "TRANCECORE MEETS GABBA",
    "id": 21063,
    "title": "BRAINSTORM",
    "title_ascii": "BRAINSTORM"
  },
  {
    "artist": "Noria",
    "genre": "POPS",
    "id": 21064,
    "title": "Recollection",
    "title_ascii": "Recollection"
  },
  {
    "artist": "DJ Yoshitaka VS S.S.D.",
    "genre": "ILUZIO",
    "id": 21065,
    "title": "Claiomh Solais",
    "title_ascii": "Claiomh Solais"
  },
  {
    "artist": "DJ YOSHITAKA",
    "genre": "BREAKBEATS TRANCE ",
    "id": 21066,
    "title": "Unicorn tail",
    "title_ascii": "Unicorn tail"
  },
  {
    "artist": "Ryu☆",
    "genre": "HAPPY HARDCORE",
    "id": 21067,
    "title": "RIZING YOU UP",
    "title_ascii": "RIZING YOU UP"
  },
  {
    "artist": "teranoid VS L.E.D.-G",
    "genre": "NU STYLE GABBA",
    "id": 21068,
    "title": "THE DETONATOR",
    "title_ascii": "THE DETONATOR"
  },
  {
    "artist": "Durandal",
    "genre": "DYNASTIC FREEFORM",
    "id": 21069,
    "title": "Ancient Scapes",
    "title_ascii": "Ancient Scapes"
  },
  {
    "artist": "Remixed by Hommarju",
    "genre": "UK HARDCORE",
    "id": 21070,
    "title": "Votum stellarum -Hommarju Remix-",
    "title_ascii": "Votum stellarum -Hommarju Remix-"
  },
  {
    "artist": "Remixed by PHQUASE",
    "genre": "DRUM'N'BASS",
    "id": 21071,
    "title": "NEMESIS -gratitude remix- IIDX Edition",
    "title_ascii": "NEMESIS -gratitude remix- IIDX Edition"
  },
  {
    "artist": "黒龍",
    "genre": "MASSIVE DANCE SPEED",
    "id": 21072,
    "title": "Dark Fall",
    "title_ascii": "Dark Fall"
  },
  {
    "artist": "Caladborg",
    "genre": "TRIBE CORE",
    "id": 21073,
    "title": "invoker",
    "title_ascii": "invoker"
  },
  {
    "artist": "Akhuta Philharmonic Orchestra",
    "genre": "SYMPHONOVATIVE ROCK",
    "id": 21074,
    "title": "Stella Sinistra",
    "title_ascii": "Stella Sinistra"
  },
  {
    "artist": "96 with メカショッチョー",
    "genre": "青春剛速球メタル",
    "id": 21075,
    "title": "マインド・ゲーム",
    "title_ascii": "MIND GAME"
  },
  {
    "artist": "TAG×PON",
    "genre": "VARIANT RAVE",
    "id": 21076,
    "title": "PUNISHER",
    "title_ascii": "PUNISHER"
  },
  {
    "artist": "Hommarju",
    "genre": "BIG BEAT",
    "id": 21077,
    "title": "HYENA",
    "title_ascii": "HYENA"
  },
  {
    "artist": "VENUS feat. Mutsuhiko Izumi",
    "genre": "WITHOUT YOU TONIGHT-VI-",
    "id": 21078,
    "title": "Squeeze",
    "title_ascii": "Squeeze"
  },
  {
    "artist": "猫叉Masterβ2",
    "genre": "ELECTRIC MANOUSH SWING",
    "id": 21079,
    "title": "デッドボヲルdeホームラン",
    "title_ascii": "I like deadball"
  },
  {
    "artist": "あさき大監督",
    "genre": "野球のことがよくわかる",
    "id": 21080,
    "title": "野球の遊び方　そしてその歴史　～決定版～",
    "title_ascii": "How to play baseball. And for its history."
  },
  {
    "artist": "ダイナミック野球兄弟 v.s. クロスファイヤーPrim",
    "genre": "ベースボールヒロイン",
    "id": 21081,
    "title": "轟け！恋のビーンボール！！",
    "title_ascii": "THUNDER LOVE BEANBALL !"
  },
  {
    "artist": "dj TAKA VS DJ TOTTO feat.藍",
    "genre": "BLOOD METAL",
    "id": 21082,
    "title": "IX",
    "title_ascii": "NINE"
  },
  {
    "artist": "Ryu☆ ∞ Des-ROW",
    "genre": "HAPPY SAD CORE",
    "id": 21083,
    "title": "Engraved Mark",
    "title_ascii": "Engraved Mark"
  },
  {
    "artist": "cosMo＠暴走P",
    "genre": "J-SPEEDMETAL",
    "id": 21084,
    "title": "バンブーソード・ガール",
    "title_ascii": "Bamboosword Girl"
  },
  {
    "artist": "ピラミッ℃",
    "genre": "PHARAO BEAM STEP",
    "id": 21085,
    "title": "Cleopatrysm",
    "title_ascii": "Cleopatrysm"
  },
  {
    "artist": "昇天家族",
    "genre": "ニューエイジ合掌コア",
    "id": 21086,
    "title": "御千手メディテーション",
    "title_ascii": "Osenju Meditation"
  },
  {
    "artist": "くふおー",
    "genre": "PROGRESSIVE GOSPEL",
    "id": 21087,
    "title": "KHAMEN BREAK",
    "title_ascii": "KHAMEN BREAK"
  },
  {
    "artist": "兎々",
    "genre": "HYDRO CORE",
    "id": 21088,
    "title": "海神",
    "title_ascii": "WADATSUMI"
  },
  {
    "artist": "96",
    "genre": "HEAVY METAL",
    "id": 21089,
    "title": "KAISER PHOENIX",
    "title_ascii": "KAISER PHOENIX"
  },
  {
    "artist": "L.E.D.",
    "genre": "FULL ON",
    "id": 21090,
    "title": "SCHWARZSCHILD FIELD",
    "title_ascii": "SCHWARZSCHILD FIELD"
  },
  {
    "artist": "DJ MURASAME",
    "genre": "TECHNO",
    "id": 21201,
    "title": "Scripted Connection⇒ long mix",
    "title_ascii": "SCRIPTED CONNECTION LONG MIX"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 21265,
    "title": "3y3s(Long ver.)",
    "title_ascii": "3y3s(Long ver.)"
  },
  {
    "artist": "金獅子 VS 麒麟",
    "genre": "DUAL ANTIQUE",
    "id": 22001,
    "title": "Broken Sword",
    "title_ascii": "Broken Sword"
  },
  {
    "artist": "Ryu☆",
    "genre": "ELECTRO TECH",
    "id": 22002,
    "title": "Line 4 Ruin",
    "title_ascii": "Line 4 Ruin"
  },
  {
    "artist": "機龍",
    "genre": "EDM SPEED",
    "id": 22003,
    "title": "Rave*it!! Rave*it!! ",
    "title_ascii": "Rave*it!! Rave*it!! "
  },
  {
    "artist": "dj TAKA",
    "genre": "MUSIC GAME TRADITIONAL",
    "id": 22004,
    "title": "Shooting Fireball",
    "title_ascii": "Shooting Fireball"
  },
  {
    "artist": "kors k",
    "genre": "EDM",
    "id": 22005,
    "title": "Say YEEEAHH",
    "title_ascii": "Say YEEEAHH"
  },
  {
    "artist": "8bit Moonside",
    "genre": "FUTURE BASS",
    "id": 22006,
    "title": "Cosmic Cat",
    "title_ascii": "Cosmic Cat"
  },
  {
    "artist": "Eagle",
    "genre": "TRANCESTEP",
    "id": 22007,
    "title": "Reflux",
    "title_ascii": "Reflux"
  },
  {
    "artist": "L.E.D.",
    "genre": "CYBER DRUM & BASS",
    "id": 22008,
    "title": "CHRONO DIVER -NORNIR-",
    "title_ascii": "CHRONO DIVER -NORNIR-"
  },
  {
    "artist": "◇◆噂の怪盗少女 ぷらずま★彡Prim◇◆",
    "genre": "Hi-FUNK BREAKS",
    "id": 22009,
    "title": "表裏一体！？怪盗いいんちょの悩み?",
    "title_ascii": "HYOURIITTAI KAITOU IINCHOU NO NAYAMI"
  },
  {
    "artist": "シャイニング度胸兄弟",
    "genre": "きらめきコア",
    "id": 22010,
    "title": "もっと！モット！ときめき feat. 松下",
    "title_ascii": "Motto! motto! TOKIMEKI feat.Matsushita"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "MAINSTREAM HARDCORE",
    "id": 22011,
    "title": "NEO GENERATOR SEVEN",
    "title_ascii": "NEO GENERATOR SEVEN"
  },
  {
    "artist": "アイテール魔導士隊",
    "genre": "ASTRAL DRUM & BASS",
    "id": 22012,
    "title": "共鳴遊戯の華",
    "title_ascii": "kyoumeiyuugino hana"
  },
  {
    "artist": "猫叉Master feat.三澤 秋",
    "genre": "HEALING DRUM'N'BASS",
    "id": 22013,
    "title": "chrono diver -fragment-",
    "title_ascii": "chrono diver -fragment-"
  },
  {
    "artist": "猫叉Master+",
    "genre": "AFRO-SAMBA",
    "id": 22014,
    "title": "AFRO KNUCKLE",
    "title_ascii": "AFRO KNUCKLE"
  },
  {
    "artist": "猫叉Master",
    "genre": "HARD IRISH SYMPHONIC",
    "id": 22015,
    "title": "Despair of ELFERIA",
    "title_ascii": "Despair of ELFERIA"
  },
  {
    "artist": "Dollscythe",
    "genre": "DRUM'N'BASS",
    "id": 22016,
    "title": "Flashes",
    "title_ascii": "Flashes"
  },
  {
    "artist": "猫叉Master",
    "genre": "EPIC ELECTRONICA",
    "id": 22017,
    "title": "Symmetry",
    "title_ascii": "Symmetry"
  },
  {
    "artist": "ジャカルタファンクブラザーズ",
    "genre": "DUB COMEDY",
    "id": 22018,
    "title": "FANTASTIC THREE",
    "title_ascii": "FANTASTIC THREE"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "SYNTHETIC EDM",
    "id": 22019,
    "title": "illuminate",
    "title_ascii": "illuminate"
  },
  {
    "artist": "Expander",
    "genre": "GLITCH STEP",
    "id": 22020,
    "title": "subtractive",
    "title_ascii": "subtractive"
  },
  {
    "artist": "TAG",
    "genre": "BLOOM FUSION",
    "id": 22023,
    "title": "デンドロビウム",
    "title_ascii": "Dendrobium"
  },
  {
    "artist": "星野奏子",
    "genre": "KANA-POP",
    "id": 22024,
    "title": "恋は白帯、サンシロー",
    "title_ascii": "koihashiroobi sanshiro"
  },
  {
    "artist": "kors k VS 猫叉Master+",
    "genre": "FULL ON",
    "id": 22025,
    "title": "Chain of pain",
    "title_ascii": "Chain of pain"
  },
  {
    "artist": "Qrispy Joybox feat. 常盤ゆう",
    "genre": "想歌 風",
    "id": 22026,
    "title": "白露の風",
    "title_ascii": "SHIRATSUYUNOKAZE"
  },
  {
    "artist": "iNO",
    "genre": "NEO CLASSICAL DANCE ",
    "id": 22027,
    "title": "Beat Radiance",
    "title_ascii": "Beat Radiance"
  },
  {
    "artist": "D.J.SETUP",
    "genre": "TECHNO",
    "id": 22028,
    "title": "GUILTY",
    "title_ascii": "GUILTY"
  },
  {
    "artist": "劇団レコード",
    "genre": "LOST GROUND",
    "id": 22029,
    "title": "COLOSSEUM ",
    "title_ascii": "COLOSSEUM "
  },
  {
    "artist": "Project B-",
    "genre": "PIECED EUPHORIA",
    "id": 22031,
    "title": "超青少年ノ為ノ超多幸ナ超古典的超舞曲",
    "title_ascii": "VERY Classical Dance with VERY Euphoria for VERRRRRY Juvenile"
  },
  {
    "artist": "黒猫ダンジョン",
    "genre": "OLDSTYLE GAMEMUSIC",
    "id": 22032,
    "title": "リリーゼと炎龍レーヴァテイン",
    "title_ascii": "lilieze and her fire dragon"
  },
  {
    "artist": "PHQUASE",
    "genre": "MAELSTROM",
    "id": 22033,
    "title": "cinder",
    "title_ascii": "cinder"
  },
  {
    "artist": "movies (moimoi×Xceon×Dai.)",
    "genre": "SOLITUDE",
    "id": 22034,
    "title": "Realize Maze",
    "title_ascii": "Realize Maze"
  },
  {
    "artist": "DJ TECHNORCH",
    "genre": "新世紀進歩的羽扇子音楽",
    "id": 22035,
    "title": "Ｘ↑Ｘ↓",
    "title_ascii": "X7XL"
  },
  {
    "artist": "GUHROOVY feat. NO+CHIN",
    "genre": "BREAKCORE",
    "id": 22036,
    "title": "Light My Fire",
    "title_ascii": "Light My Fire"
  },
  {
    "artist": "Xceon feat.Mayumi Morinaga",
    "genre": "HYPER J-POP",
    "id": 22037,
    "title": "十六夜セツナ",
    "title_ascii": "Izayoi Setsuna"
  },
  {
    "artist": "DJ NAGAI feat. a☆ru",
    "genre": "J-CORE",
    "id": 22038,
    "title": "紅牡丹",
    "title_ascii": "BENIBOTAN"
  },
  {
    "artist": "DJ CHUCKY",
    "genre": "NU STYLE GABBA",
    "id": 22039,
    "title": "BLUE MIRAGE",
    "title_ascii": "BLUE MIRAGE"
  },
  {
    "artist": "DJ Noriken",
    "genre": "DUBCORE",
    "id": 22040,
    "title": "#The_Relentless",
    "title_ascii": "THE_RELENTLESS"
  },
  {
    "artist": "DJ Shimamura",
    "genre": "HARDCORE RAVE",
    "id": 22041,
    "title": "Blaze it UP!",
    "title_ascii": "Blaze it UP!"
  },
  {
    "artist": "DJ Genki feat. Yukacco",
    "genre": "ELECTRO POP",
    "id": 22042,
    "title": "Sweet Radar",
    "title_ascii": "Sweet Radar"
  },
  {
    "artist": "TOMOSUKE",
    "genre": "GOA TRANCE",
    "id": 22043,
    "title": "IMPLANTATION",
    "title_ascii": "IMPLANTATION"
  },
  {
    "artist": "USAO",
    "genre": "PUMPCORE",
    "id": 22044,
    "title": "Night sky",
    "title_ascii": "Night sky"
  },
  {
    "artist": "m1dy",
    "genre": "TOKYO STYLE SPEEDCORE",
    "id": 22045,
    "title": "m1dy Festival",
    "title_ascii": "m1dy Festival"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "DIMENSION WAVE",
    "id": 22046,
    "title": "SAMSARA",
    "title_ascii": "SAMSARA"
  },
  {
    "artist": "SWING HOLIC feat. A～YA",
    "genre": "TIME TRIP JAZZ",
    "id": 22047,
    "title": "時空トラベローグ",
    "title_ascii": "JIKUU TRAVELOG"
  },
  {
    "artist": "ARM(IOSYS) feat. 山本椛",
    "genre": "ぷろぐれっしぶ電波",
    "id": 22048,
    "title": "ぷろぐれっしぶ時空少女！うらしまたろ子ちゃん！",
    "title_ascii": "Progressive space time girl! Urashima Taroko chan!"
  },
  {
    "artist": "Remixed by DJ TECHNORCH fw.GUHROOVY",
    "genre": "GABBAH",
    "id": 22049,
    "title": "HELL SCAPER -Last Escape Remix-",
    "title_ascii": "HELL SCAPER -Last Escape Remix-"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 22050,
    "title": "Sometimes feat. Kanae Asaba",
    "title_ascii": "Sometimes feat. Kanae Asaba"
  },
  {
    "artist": "onoken",
    "genre": "ART CORE",
    "id": 22051,
    "title": "Amnolys",
    "title_ascii": "Amnolys"
  },
  {
    "artist": "L.E.D.",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 22052,
    "title": "IXION",
    "title_ascii": "IXION"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "PROGRESSIVE SCHRANZ",
    "id": 22053,
    "title": "Gravigazer",
    "title_ascii": "Gravigazer"
  },
  {
    "artist": "猫叉L.E.D.Master+",
    "genre": "CHRONO BREAKS",
    "id": 22054,
    "title": "Chrono Diver -PENDULUMs-",
    "title_ascii": "Chrono Diver -PENDULUMs-"
  },
  {
    "artist": "OSTER project",
    "genre": "RAGTIME FUTURE POP",
    "id": 22055,
    "title": "SpaceLand☆TOYBOX",
    "title_ascii": "SpaceLand*TOYBOX"
  },
  {
    "artist": "Y&Co.",
    "genre": "EUROBEAT",
    "id": 22056,
    "title": "TA・DA ☆ YO・SHI",
    "title_ascii": "TA DA YO SHI"
  },
  {
    "artist": "Hommarju",
    "genre": "GYPSYCORE",
    "id": 22057,
    "title": "Vulkan",
    "title_ascii": "Vulkan"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 22058,
    "title": "Scars of FAUNA",
    "title_ascii": "Scars of FAUNA"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": "A-STYLE DRUMSTEP",
    "id": 22059,
    "title": "ベィスドロップ・フリークス",
    "title_ascii": "BASSDROP-FREAKS"
  },
  {
    "artist": "Ryu☆",
    "genre": "CHIPCORE",
    "id": 22060,
    "title": "Sakura Mirage",
    "title_ascii": "Sakura Mirage"
  },
  {
    "artist": "P*Light feat. mow*2",
    "genre": "HAPPY HARDCORE",
    "id": 22061,
    "title": "Hello Happiness",
    "title_ascii": "Hello Happiness"
  },
  {
    "artist": "ヒゲドライバー join. SELEN",
    "genre": "JAPANESE TRADITIONAL",
    "id": 22062,
    "title": "打打打打打打打打打打",
    "title_ascii": "Dadadadadadadadadada"
  },
  {
    "artist": "RoughSketch feat.Aikapin",
    "genre": "HARD EDM",
    "id": 22063,
    "title": "No Tears",
    "title_ascii": "No Tears"
  },
  {
    "artist": "兎々",
    "genre": "ASURA TEK CORE",
    "id": 22064,
    "title": "鬼天",
    "title_ascii": "ONIGAMI"
  },
  {
    "artist": "Rche",
    "genre": "SACRED TRANCE",
    "id": 22065,
    "title": "entelecheia",
    "title_ascii": "entelecheia"
  },
  {
    "artist": "tofubeats",
    "genre": "J-POP",
    "id": 22066,
    "title": "Don't Stop The Music feat.森高千里",
    "title_ascii": "Don't Stop The Music feat.Chisato Moritaka"
  },
  {
    "artist": "HALFBY",
    "genre": "TROPICAL",
    "id": 22067,
    "title": "とろぴかる倶楽部",
    "title_ascii": "TROPICAL CLUB"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 22068,
    "title": "Beyond The Earth",
    "title_ascii": "Beyond The Earth"
  },
  {
    "artist": "Sasaki Hirofumi",
    "genre": "PROGRESSIVE",
    "id": 22069,
    "title": "The Least 100sec",
    "title_ascii": "The Least 100sec"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 22070,
    "title": "fallen leaves -IIDX edition-",
    "title_ascii": "fallen leaves -IIDX edition-"
  },
  {
    "artist": "Akhuta",
    "genre": "LIAISON",
    "id": 22071,
    "title": "Ludus In Tenebris",
    "title_ascii": "Ludus In Tenebris"
  },
  {
    "artist": "Last Note. feat.mirin",
    "genre": "ROCK",
    "id": 22072,
    "title": "フェイクアウト",
    "title_ascii": "FAKE OUT"
  },
  {
    "artist": "cosMo＠暴走P",
    "genre": "ARTCORE ROCK",
    "id": 22073,
    "title": "Monopole.",
    "title_ascii": "Monopole."
  },
  {
    "artist": "SOUND HOLIC Vs. T.Kakuta feat. YURiCa",
    "genre": "MELODIC SPEED METAL",
    "id": 22074,
    "title": "TOXIC VIBRATION",
    "title_ascii": "TOXIC VIBRATION"
  },
  {
    "artist": "kors k REASM Des-ROW",
    "genre": "FALLIN APART CORE",
    "id": 22075,
    "title": "Erosion Mark  ",
    "title_ascii": "Erosion Mark  "
  },
  {
    "artist": "kors k",
    "genre": "HARDSTYLE",
    "id": 22076,
    "title": "On My Wings(Hardstyle IIDX)",
    "title_ascii": "On My Wings(Hardstyle IIDX)"
  },
  {
    "artist": "D.J.Amuro",
    "genre": "INTELLIGENCE",
    "id": 22077,
    "title": "ZZ",
    "title_ascii": "ZZ"
  },
  {
    "artist": "REMO-CON",
    "genre": "HARD DANCE",
    "id": 22078,
    "title": "Rave Saves You feat. Cardz (Exclusive IIDX Mix)",
    "title_ascii": "Rave Saves You feat. Cardz (Exclusive IIDX Mix)"
  },
  {
    "artist": "SOUND HOLIC Vs. dj TAKA feat. YURiCa",
    "genre": "DEEP SPECTRUM",
    "id": 22079,
    "title": "TIEFSEE",
    "title_ascii": "TIEFSEE"
  },
  {
    "artist": "Remixed by P*Light",
    "genre": "HAPPY HARDCORE",
    "id": 22080,
    "title": "We're so Happy (P*Light Remix) IIDX ver.",
    "title_ascii": "We're so Happy (P*Light Remix) IIDX ver."
  },
  {
    "artist": "Remixed by DJ NAGAI",
    "genre": "GALACTIC J-CORE",
    "id": 22081,
    "title": "Hollywood Galaxy(DJ NAGAI Remix)",
    "title_ascii": "Hollywood Galaxy(DJ NAGAI Remix)"
  },
  {
    "artist": "DJ GW",
    "genre": "HAPPY VACAY CORE",
    "id": 22082,
    "title": "全力 SPECIAL VACATION!! ～限りある休日～",
    "title_ascii": "FULL STREAM SPECIAL VACATION!! -MISSING HOLY DAYS-"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 22083,
    "title": "千年ノ理",
    "title_ascii": "sennenno kotowari"
  },
  {
    "artist": "DJ TOTTO feat.3L",
    "genre": "DRUM'N'WALTZ",
    "id": 22084,
    "title": "妖隠し -あやかしかくし-",
    "title_ascii": "AYAKASHIKAKUSHI"
  },
  {
    "artist": "幽閉サテライト feat. senya",
    "genre": "HYPER J-POP",
    "id": 22085,
    "title": "取り残された美術(Arranged:HiZuMi)",
    "title_ascii": "torinokosareta bijutsu"
  },
  {
    "artist": "REDALiCE feat. Ayumi Nomiya",
    "genre": "J-CORE",
    "id": 22086,
    "title": "Scarlet Moon",
    "title_ascii": "Scarlet Moon"
  },
  {
    "artist": "夏色バーニングラブ☆Prim",
    "genre": "Hi-歌謡コア",
    "id": 22087,
    "title": "それは花火のような恋",
    "title_ascii": "soreha hanabino youna koi"
  },
  {
    "artist": "ヒゲドライバー join. shully & Nimo",
    "genre": "電波ソング",
    "id": 22088,
    "title": "パ→ピ→プ→Yeah!",
    "title_ascii": "Pa, Pi, Pu, Yeah!"
  },
  {
    "artist": "OSTER project",
    "genre": "RAGTIME CHIPTUNE",
    "id": 22089,
    "title": "EBONY & IVORY",
    "title_ascii": "EBONY & IVORY"
  },
  {
    "artist": "96 & Sota ft. Mayumi Morinaga",
    "genre": "HYBRID",
    "id": 22090,
    "title": "In The Breeze",
    "title_ascii": "In The Breeze"
  },
  {
    "artist": "Hommarju",
    "genre": "UK HARDCORE ",
    "id": 22091,
    "title": "Sounds Of Summer",
    "title_ascii": "Sounds Of Summer"
  },
  {
    "artist": "TAG",
    "genre": "PROGRESSIVE",
    "id": 22092,
    "title": "Chronos",
    "title_ascii": "Chronos"
  },
  {
    "artist": "Power Of Nature",
    "genre": "ムラクモ",
    "id": 22093,
    "title": "少年は空を辿る",
    "title_ascii": "Shonen ha Sora wo Tadoru"
  },
  {
    "artist": "L.E.D.-G + Qrispy Joybox + ARM feat. ななひら",
    "genre": "ドタバタ☆夏休み",
    "id": 22094,
    "title": "ドッキン☆サマーあばんちゅーる",
    "title_ascii": "Dokkin Summer Avanture"
  },
  {
    "artist": "猫叉王子 feat.L.E.D.-G",
    "genre": "HAPPY SUMMER CORE",
    "id": 22095,
    "title": "夏色DIARY - L.E.D.-G STYLE MIX -",
    "title_ascii": "NATSUIRO DIARY - L.E.D.-G STYLE MIX -"
  },
  {
    "artist": "lapix",
    "genre": "Hi-TECH PSYTRANCE",
    "id": 22098,
    "title": "Discloze",
    "title_ascii": "Discloze"
  },
  {
    "artist": "C-Show",
    "genre": "HOLIC",
    "id": 22099,
    "title": "Invitation from Mr.C",
    "title_ascii": "Invitation from Mr.C"
  },
  {
    "artist": "猫叉L.E.D.Master",
    "genre": "SYSTEM BGM",
    "id": 22100,
    "title": "PENDUAL TALISMAN",
    "title_ascii": "PENDUAL TALISMAN"
  },
  {
    "artist": "S-C-U vs L.E.D.",
    "genre": "HARD ELECTRIC POP",
    "id": 23000,
    "title": "DIAMOND CROSSING",
    "title_ascii": "DIAMOND CROSSING"
  },
  {
    "artist": "ミニョンヌ鉄道兄弟",
    "genre": "にゃんコア",
    "id": 23001,
    "title": "駅猫のワルツ",
    "title_ascii": "EKINEKONO WALTZ"
  },
  {
    "artist": "YURiCa/花たん",
    "genre": "ROCKIN' DRUM&BASS",
    "id": 23002,
    "title": "SHELTER OF THE MIND",
    "title_ascii": "SHELTER OF THE MIND"
  },
  {
    "artist": "miko",
    "genre": "SUMMER WORKOUT",
    "id": 23003,
    "title": "か・し・ま・し☆PUMP UP！",
    "title_ascii": "KASHIMASHI PUMP UP!"
  },
  {
    "artist": "海の底からマーメイド Prim by ARM×狐夢想",
    "genre": "Hi-RESORT電波",
    "id": 23004,
    "title": "ギョギョっと人魚 爆婚ブライダル",
    "title_ascii": "Gyogyotto Ningyo Bakkon Bridal"
  },
  {
    "artist": "猫叉Master",
    "genre": "SORROW STEP",
    "id": 23005,
    "title": "Nightmare before oversleep",
    "title_ascii": "Nightmare before oversleep"
  },
  {
    "artist": "HuΣeR",
    "genre": "BEMANIZED DIGITAL ROCK",
    "id": 23007,
    "title": "Highcharge Divolt",
    "title_ascii": "Highcharge Divolt"
  },
  {
    "artist": "kors k",
    "genre": "CANDY RAVE",
    "id": 23008,
    "title": "Uh-Oh",
    "title_ascii": "Uh-Oh"
  },
  {
    "artist": "kors k",
    "genre": "HDM",
    "id": 23009,
    "title": "M4K3 1T B0UNC3",
    "title_ascii": "M4K3 1T B0UNC3"
  },
  {
    "artist": "Ryu☆",
    "genre": "DONK",
    "id": 23010,
    "title": "Donkey Donk",
    "title_ascii": "Donkey Donk"
  },
  {
    "artist": "HHH×MM×ST",
    "genre": "J-DANCE POP",
    "id": 23011,
    "title": "Everlasting Last",
    "title_ascii": "Everlasting Last"
  },
  {
    "artist": "Xceon feat. Mayumi Morinaga",
    "genre": "HYPER J-POP",
    "id": 23012,
    "title": "オルタネイトβ",
    "title_ascii": "Alternate beta"
  },
  {
    "artist": "dj TAKA feat.AiMEE",
    "genre": "TRANCE",
    "id": 23013,
    "title": "refrain",
    "title_ascii": "refrain"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "TECH-TRANCE",
    "id": 23014,
    "title": "Transport",
    "title_ascii": "Transport"
  },
  {
    "artist": "Recycle",
    "genre": "FUTURE BASS",
    "id": 23015,
    "title": "Central Station",
    "title_ascii": "Central Station"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "空想ファンタジーシリーズ",
    "id": 23016,
    "title": "少女アリスと箱庭幻想コンチェルト",
    "title_ascii": "Alice in Mystic Garden"
  },
  {
    "artist": "USAO",
    "genre": "FRENCHCORE",
    "id": 23017,
    "title": "Outbreak",
    "title_ascii": "Outbreak"
  },
  {
    "artist": "D.J.Amuro",
    "genre": "RENAISSANCE",
    "id": 23018,
    "title": "X",
    "title_ascii": "X"
  },
  {
    "artist": "U1 overground",
    "genre": "ORBITALICTRO",
    "id": 23019,
    "title": "セロトニン",
    "title_ascii": "serotonin"
  },
  {
    "artist": "Project B-",
    "genre": "PIECED SUNDAY",
    "id": 23020,
    "title": "太陽SUNSUNボンジュールアバンチュール",
    "title_ascii": "taiyo sun sun bonjour aventure"
  },
  {
    "artist": "Lucky Vacuum",
    "genre": "ラッキーハードコア",
    "id": 23021,
    "title": "Daily Lunch Special",
    "title_ascii": "Daily Lunch Special"
  },
  {
    "artist": "TOMOSUKE feat. あさき",
    "genre": "禅ジャズ",
    "id": 23022,
    "title": "明鏡止水",
    "title_ascii": "meikyoushisui"
  },
  {
    "artist": "DJ NAGAI feat. Ayumi Nomiya",
    "genre": "J-CORE EXPRESS",
    "id": 23023,
    "title": "Dreamin Train",
    "title_ascii": "Dreamin Train"
  },
  {
    "artist": "DJ Shimamura",
    "genre": "HARDCORE RAVE",
    "id": 23024,
    "title": "GET READY!!",
    "title_ascii": "GET READY!!"
  },
  {
    "artist": "DJ Genki feat. SHIN from HYPERNOVA",
    "genre": "EDM",
    "id": 23025,
    "title": "To The Paradise",
    "title_ascii": "To The Paradise"
  },
  {
    "artist": "DJ Noriken feat. Yukacco",
    "genre": "TRAPSTYLE",
    "id": 23026,
    "title": "Go Faraway",
    "title_ascii": "Go Faraway"
  },
  {
    "artist": "USAO",
    "genre": "HYBRID TWERK",
    "id": 23027,
    "title": "Dynamite",
    "title_ascii": "Dynamite"
  },
  {
    "artist": "onoken feat. ALIAKE",
    "genre": "POST J-TRADITIONAL",
    "id": 23028,
    "title": "Aublia",
    "title_ascii": "Aublia"
  },
  {
    "artist": "RoughSketch",
    "genre": "HARDSTYLE",
    "id": 23029,
    "title": "Musik LoverZ",
    "title_ascii": "Musik LoverZ"
  },
  {
    "artist": "かめりあ",
    "genre": "JAZZY-ELECTRO",
    "id": 23030,
    "title": "Routing",
    "title_ascii": "Routing"
  },
  {
    "artist": "P*Light",
    "genre": "HAPPY EMOTION",
    "id": 23031,
    "title": "STARLIGHT DANCEHALL",
    "title_ascii": "STARLIGHT DANCEHALL"
  },
  {
    "artist": "PHQUASE",
    "genre": "FUTURE E-POP",
    "id": 23032,
    "title": "追想快晴テーマパーク",
    "title_ascii": "sunny theme park of nostalgia"
  },
  {
    "artist": "Y&Co.",
    "genre": "HARD TRANCE",
    "id": 23033,
    "title": "Set U Free feat. Kanae Asaba",
    "title_ascii": "Set U Free feat. Kanae Asaba"
  },
  {
    "artist": "SOUND HOLIC Vs. ZYTOKINE feat. Nana Takahashi",
    "genre": "GRAVITY POP",
    "id": 23034,
    "title": "SURVIVOR",
    "title_ascii": "SURVIVOR"
  },
  {
    "artist": "ARM feat. 普透明度 + Brasscapsule",
    "genre": "GLITCH JAZZ",
    "id": 23035,
    "title": "星屑ディスタンシア",
    "title_ascii": "STARDUST DISTANCIA"
  },
  {
    "artist": "LIQU@。",
    "genre": "METAL POPS",
    "id": 23036,
    "title": "NANAIRO",
    "title_ascii": "NANAIRO"
  },
  {
    "artist": "電龍",
    "genre": "DANCE EXPRESS",
    "id": 23037,
    "title": "AO-1",
    "title_ascii": "AO-1"
  },
  {
    "artist": "Nhato",
    "genre": "ELECTRO TRANCE",
    "id": 23038,
    "title": "Nowhere",
    "title_ascii": "Nowhere"
  },
  {
    "artist": "MK",
    "genre": "EDM",
    "id": 23039,
    "title": "do the thing feat. Kanae Asaba",
    "title_ascii": "do the thing feat. Kanae Asaba"
  },
  {
    "artist": "m1dy",
    "genre": "TOKYO STYLE SPEEDCORE",
    "id": 23040,
    "title": "m1dy Dynamic",
    "title_ascii": "m1dy Dynamic"
  },
  {
    "artist": "DJ TECHNORCH Vs. L.E.D.Light-G",
    "genre": "新世紀進歩的羽扇子音楽",
    "id": 23041,
    "title": "真 地獄超特急 -HELL or HELL-",
    "title_ascii": "THE HELL EXPRESS -HELL or HELL-"
  },
  {
    "artist": "GUHROOVY feat. NO+CHIN & Yuki",
    "genre": "J-CORE",
    "id": 23042,
    "title": "Ride To The Core",
    "title_ascii": "Ride To The Core"
  },
  {
    "artist": "Hommarju",
    "genre": "HARDCORE",
    "id": 23043,
    "title": "Rock It",
    "title_ascii": "Rock It"
  },
  {
    "artist": "OSTER project",
    "genre": "LATIN JAZZ TRIO",
    "id": 23044,
    "title": "Violet Rose",
    "title_ascii": "Violet Rose"
  },
  {
    "artist": "DJ SHARPNEL feat. みらい",
    "genre": "電波デステクノ",
    "id": 23045,
    "title": "めいさいアイドル☆あいむちゃん♪",
    "title_ascii": "Meisai Idol Aim-chang."
  },
  {
    "artist": "黒猫ダンジョン",
    "genre": "エピックプログレ",
    "id": 23046,
    "title": "量子の海のリントヴルム",
    "title_ascii": "maud and her water dragon"
  },
  {
    "artist": "星野奏子",
    "genre": "KANA-POP",
    "id": 23047,
    "title": "シュッパツシンコウ・シサカンコ",
    "title_ascii": "Syuppatsushinkou Shisakanko"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "WINTER GLOW",
    "id": 23048,
    "title": "麗 ～うらら～",
    "title_ascii": "URARA"
  },
  {
    "artist": "SUPER STAR 満-MITSURU- vs. 伝説のダンサー マイク",
    "genre": "ONLY ONE DANCE MUSIC",
    "id": 23049,
    "title": "NO LIMIT -オレ達に限界は無い-",
    "title_ascii": "NO LIMIT"
  },
  {
    "artist": "cosMo＠暴走P",
    "genre": "ARTCORE ROCK",
    "id": 23050,
    "title": "朝焼けから始まるボクらの小さな旅",
    "title_ascii": "asayakekarahajimaru bokuranotiisanatabi"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "BROKEN SAMBA BREAK",
    "id": 23051,
    "title": "灼熱 Pt.2 Long Train Running",
    "title_ascii": "shakunetsu pt.2 Long Train Running"
  },
  {
    "artist": "lapix",
    "genre": "HiTECH FULLON",
    "id": 23052,
    "title": "Inner Spirit",
    "title_ascii": "Inner Spirit"
  },
  {
    "artist": "C-Show",
    "genre": "RADIO SHOWCASE",
    "id": 23053,
    "title": "On the FM",
    "title_ascii": "On the FM"
  },
  {
    "artist": "Maozon",
    "genre": "CYBER DRUMSTEP",
    "id": 23054,
    "title": "Damage Per Second",
    "title_ascii": "Damage Per Second"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH BREAKBEATS",
    "id": 23055,
    "title": "199024club -Re:BounceKiller-",
    "title_ascii": "199024club -Re:BounceKiller-"
  },
  {
    "artist": "Maozon",
    "genre": "UPLIFTING TRANCE",
    "id": 23056,
    "title": "Arcana",
    "title_ascii": "Arcana"
  },
  {
    "artist": "ni-21",
    "genre": "HARD DANCE",
    "id": 23057,
    "title": "Acid Pumper",
    "title_ascii": "Acid Pumper"
  },
  {
    "artist": "Dirty Androids",
    "genre": "FUTURE JERSEY",
    "id": 23058,
    "title": "Exchange Place",
    "title_ascii": "Exchange Place"
  },
  {
    "artist": "Vivian",
    "genre": "ETHNIC",
    "id": 23059,
    "title": "Wheel of Journey",
    "title_ascii": "Wheel of Journey"
  },
  {
    "artist": "youhei shimizu",
    "genre": "J-TEKNO",
    "id": 23060,
    "title": "quick master (reform version)",
    "title_ascii": "quick master (reform version)"
  },
  {
    "artist": "DJ Myosuke",
    "genre": "MAINSTREAM HARDCORE",
    "id": 23061,
    "title": "Devil's Gear",
    "title_ascii": "Devil's Gear"
  },
  {
    "artist": "猫叉Master+",
    "genre": "WORLD/ELECTRONICA",
    "id": 23062,
    "title": "Tori-no-kimochi",
    "title_ascii": "Tori-no-kimochi"
  },
  {
    "artist": "DJ Scratch & Bend",
    "genre": "DREAM CORE",
    "id": 23063,
    "title": "Blue Spring Express",
    "title_ascii": "Blue Spring Express"
  },
  {
    "artist": "L.E.D. ",
    "genre": "HARDSTYLE",
    "id": 23065,
    "title": "炸裂！イェーガー電光チョップ！！(JAEGER FINAL ATTACK)",
    "title_ascii": "JAEGER FINAL ATTACK"
  },
  {
    "artist": "Kimitaka Matsumae",
    "genre": "CANTERBURY&BEAT",
    "id": 23066,
    "title": "GOBBLE",
    "title_ascii": "GOBBLE"
  },
  {
    "artist": "Masayoshi Minoshima",
    "genre": "ELECTRONIC DANCE",
    "id": 23067,
    "title": "GENERATE feat.綾倉盟",
    "title_ascii": "GENERATE feat.Mei Ayakura"
  },
  {
    "artist": "猫叉Master+",
    "genre": "HARD STEP",
    "id": 23068,
    "title": "chaos eater -IIDX edition-",
    "title_ascii": "chaos eater -IIDX edition-"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "HARD DANCE",
    "id": 23069,
    "title": "Battle Train -IIDX Edition-",
    "title_ascii": "Battle Train -IIDX Edition-"
  },
  {
    "artist": "Uraken",
    "genre": "HARDCORE",
    "id": 23070,
    "title": "Welcome",
    "title_ascii": "Welcome"
  },
  {
    "artist": "Remo-con vs. dj TAKA",
    "genre": "JUNGLE CLASSIC",
    "id": 23072,
    "title": "Konzert V",
    "title_ascii": "Konzert V"
  },
  {
    "artist": "Remo-con",
    "genre": "HARD DANCE",
    "id": 23073,
    "title": "Derelict Star feat. Ryu*",
    "title_ascii": "Derelict Star feat. Ryu*"
  },
  {
    "artist": "TAG underground",
    "genre": "PSYCHIC FLASH",
    "id": 23074,
    "title": "POSSESSION",
    "title_ascii": "POSSESSION"
  },
  {
    "artist": "dj TAKA xxx 猫叉Master xxx L.E.D.",
    "genre": "JOINT WORK",
    "id": 23075,
    "title": "Godspeed",
    "title_ascii": "Godspeed"
  },
  {
    "artist": "OSTER project",
    "genre": "PRIMAVERA JAZZ WALTZ",
    "id": 23076,
    "title": "La dolce primavera",
    "title_ascii": "La dolce primavera"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "HARDCORE",
    "id": 23077,
    "title": "OUTER LIMITS ALTERNATIVE",
    "title_ascii": "OUTER LIMITS ALTERNATIVE"
  },
  {
    "artist": "かめりあ",
    "genre": "GAMER'S ELECTRO/COMPLEXTRO",
    "id": 23078,
    "title": "Glitch Nerds",
    "title_ascii": "Glitch Nerds"
  },
  {
    "artist": "P*Light",
    "genre": "SHINOBI SPEED",
    "id": 23079,
    "title": "NINJA IS DEAD IIDX ver.",
    "title_ascii": "NINJA IS DEAD IIDX ver."
  },
  {
    "artist": "G.K",
    "genre": "GLITCH ELECTRO",
    "id": 23080,
    "title": "Violet Pulse",
    "title_ascii": "Violet Pulse"
  },
  {
    "artist": "星龍",
    "genre": "DANCE SPEED GOLD",
    "id": 23082,
    "title": "STARLiGHT",
    "title_ascii": "STARLiGHT"
  },
  {
    "artist": "Camellia Vs. Expander",
    "genre": "ORIENTAL TECHDANCE",
    "id": 23083,
    "title": "紫陽花 -AZISAI-",
    "title_ascii": "AZISAI"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 23084,
    "title": "Journey",
    "title_ascii": "Journey"
  },
  {
    "artist": "HEXA",
    "genre": "TECHNO",
    "id": 23085,
    "title": "CODE:1 [revision1.0.1]",
    "title_ascii": "CODE:1 [revision1.0.1]"
  },
  {
    "artist": "Kobaryo",
    "genre": "CHAOTIC SPEEDCORE",
    "id": 23086,
    "title": "SEITEN NO TERIYAKI",
    "title_ascii": "SEITEN NO TERIYAKI"
  },
  {
    "artist": "kors k & Numb'n'dub",
    "genre": "HARDCORE",
    "id": 23087,
    "title": "Super Duper Racers",
    "title_ascii": "Super Duper Racers"
  },
  {
    "artist": "The 4th",
    "genre": "END ROLL",
    "id": 23088,
    "title": "NZM",
    "title_ascii": "NZM"
  },
  {
    "artist": "xi",
    "genre": "HARD ART CORE",
    "id": 23090,
    "title": "Grand Chariot",
    "title_ascii": "Grand Chariot"
  },
  {
    "artist": "SHIKI",
    "genre": "TRANCE",
    "id": 23091,
    "title": "Sephirot",
    "title_ascii": "Sephirot"
  },
  {
    "artist": "削除",
    "genre": "FANTASY",
    "id": 23092,
    "title": "StrayedCatz",
    "title_ascii": "StrayedCatz"
  },
  {
    "artist": "t+pazolite",
    "genre": "HAPPY で HARDCORE",
    "id": 23093,
    "title": "Angelic Jelly",
    "title_ascii": "Angelic Jelly"
  },
  {
    "artist": "DJ YOSHITAKA meets dj TAKA",
    "genre": "RISK + VACUUM",
    "id": 23094,
    "title": "Triple Counter",
    "title_ascii": "Triple Counter"
  },
  {
    "artist": "TAG",
    "genre": "BLOOM CORE",
    "id": 23095,
    "title": "ZEPHYRANTHES",
    "title_ascii": "ZEPHYRANTHES"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "CROSSBREED",
    "id": 24000,
    "title": "鴉",
    "title_ascii": "KARASU"
  },
  {
    "artist": "RoughSketch Vs. L.E.D.-G",
    "genre": "HARDCORE",
    "id": 24001,
    "title": "焔極OVERKILL",
    "title_ascii": "ENGOKU OVERKILL"
  },
  {
    "artist": "L.E.D.-G",
    "genre": "HARDSTYLE",
    "id": 24002,
    "title": "RISING FIRE HAWK",
    "title_ascii": "RISING FIRE HAWK"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/ELECTRONICA",
    "id": 24003,
    "title": "イザナミノナゲキ",
    "title_ascii": "Izanami's wail"
  },
  {
    "artist": "猫叉劇団",
    "genre": "WORLD",
    "id": 24004,
    "title": "AsiaN distractive",
    "title_ascii": "AsiaN distractive"
  },
  {
    "artist": "kors k",
    "genre": "HARDTEK",
    "id": 24005,
    "title": "Super Rush",
    "title_ascii": "Super Rush"
  },
  {
    "artist": "kors k",
    "genre": "SPEED RAVE",
    "id": 24006,
    "title": "Rave Cannon",
    "title_ascii": "Rave Cannon"
  },
  {
    "artist": "Eagle",
    "genre": "HARD TRAP",
    "id": 24007,
    "title": "Caterpillar",
    "title_ascii": "Caterpillar"
  },
  {
    "artist": "Ryu*",
    "genre": "TRIBAL HOUSE",
    "id": 24008,
    "title": "?Viva!",
    "title_ascii": "Viva!"
  },
  {
    "artist": "Ryu☆ feat.moimoi",
    "genre": "BUBBLEGUM DANCE",
    "id": 24009,
    "title": "OOO",
    "title_ascii": "OOO"
  },
  {
    "artist": "神楽",
    "genre": "EXPERIMENTAL",
    "id": 24010,
    "title": "Mare Nectaris",
    "title_ascii": "Mare Nectaris"
  },
  {
    "artist": "Xceon",
    "genre": "HYPER ENKA POP",
    "id": 24011,
    "title": "冬椿 ft. Kanae Asaba",
    "title_ascii": "Fuyutsubaki ft. Kanae Asaba"
  },
  {
    "artist": "SETUP",
    "genre": "HARD TRANCE",
    "id": 24012,
    "title": "TOGAKUSHI",
    "title_ascii": "TOGAKUSHI"
  },
  {
    "artist": "Noria",
    "genre": "CANDY ROCK",
    "id": 24013,
    "title": "SINOBUZ Fantasy",
    "title_ascii": "SINOBUZ Fantasy"
  },
  {
    "artist": "罠師 VS 安室",
    "genre": "MICHINOKU",
    "id": 24014,
    "title": "津軽雪",
    "title_ascii": "TSUGARU SETSU"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "TECHNO",
    "id": 24015,
    "title": "Modular Technology",
    "title_ascii": "Modular Technology"
  },
  {
    "artist": "Expander",
    "genre": "HYPER TRAP",
    "id": 24016,
    "title": "Honey Trap",
    "title_ascii": "Honey Trap"
  },
  {
    "artist": "ABDI from ジャカルタファンクブラザーズ",
    "genre": "RDM",
    "id": 24017,
    "title": "ROTTERDAM SHOGUN",
    "title_ascii": "ROTTERDAM SHOGUN"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "ARCHAIC TALE EP1",
    "id": 24018,
    "title": "DORNWALD ～Junge～",
    "title_ascii": "DORNWALD -Junge-"
  },
  {
    "artist": "HuΣeR",
    "genre": "DRAMATIC WALTZ",
    "id": 24019,
    "title": "獅子霞麗ノ舞",
    "title_ascii": "Shishikasumu Uruwashinomai"
  },
  {
    "artist": "HuΣeR",
    "genre": "HYBRID BUCHIAGE TRANCE",
    "id": 24020,
    "title": "ECHIDNA",
    "title_ascii": "ECHIDNA"
  },
  {
    "artist": "dj Hellix",
    "genre": "HARD BREAK BEATS",
    "id": 24021,
    "title": "Quakes",
    "title_ascii": "Quakes"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": "MONDO-GROOVE BASSHOUSE",
    "id": 24022,
    "title": "PAPAYAPA BASS",
    "title_ascii": "PAPAYAPA BASS"
  },
  {
    "artist": "RoughSkreamZ feat.楽天斎",
    "genre": "HIP HOP",
    "id": 24023,
    "title": "?影",
    "title_ascii": "HIKAGE"
  },
  {
    "artist": "P*Light",
    "genre": "SHINOBI RAVE",
    "id": 24024,
    "title": "SAY BAY",
    "title_ascii": "SAY BAY"
  },
  {
    "artist": "Hommarju",
    "genre": "BIG BEAT/BREAKBEATS",
    "id": 24025,
    "title": "(This Is Not) The Angels",
    "title_ascii": "This Is Not The Angels"
  },
  {
    "artist": "OSTER project feat. かなたん",
    "genre": "R&B",
    "id": 24026,
    "title": "Selfish Sweet",
    "title_ascii": "Selfish Sweet"
  },
  {
    "artist": "PHQUASE feat.ぁゅ",
    "genre": "ALTERNATIVE TECHNO POP",
    "id": 24027,
    "title": "Be A Star",
    "title_ascii": "Be A Star"
  },
  {
    "artist": "Dirty Androids",
    "genre": "FUTURE BEATS",
    "id": 24028,
    "title": "Egret and Willow",
    "title_ascii": "Egret and Willow"
  },
  {
    "artist": "U1 overground",
    "genre": "ORBITALIC FUTURE BASS",
    "id": 24029,
    "title": "禍根",
    "title_ascii": "Source Of Calamity"
  },
  {
    "artist": "Project B-",
    "genre": "PIECED MAKIBISHI",
    "id": 24030,
    "title": "Sarutobi Champion is 拙者",
    "title_ascii": "Sarutobi Champion is Sessha"
  },
  {
    "artist": "小寺可南子",
    "genre": "POP ROCK",
    "id": 24031,
    "title": "次葉 -turn the page-",
    "title_ascii": "JIYOU -turn the page-"
  },
  {
    "artist": "青龍",
    "genre": "DANCE SPEED",
    "id": 24032,
    "title": "AO-∞",
    "title_ascii": "AO-INFINITY"
  },
  {
    "artist": "黒脛",
    "genre": "忍歌",
    "id": 24033,
    "title": "忍恋花",
    "title_ascii": "SHINOBI RENKA"
  },
  {
    "artist": "Ryu☆ Vs. Sota",
    "genre": "TRANCE CORE",
    "id": 24034,
    "title": "Go Ahead!!",
    "title_ascii": "Go Ahead!!"
  },
  {
    "artist": "DJ Genki",
    "genre": "EMOTIONAL HI-TECH",
    "id": 24035,
    "title": "DISAPPEAR feat. koyomin",
    "title_ascii": "DISAPPEAR feat. koyomin"
  },
  {
    "artist": "DJ Noriken",
    "genre": "NEON/TWERKCORE",
    "id": 24036,
    "title": "#MAGiCVLGiRL_TRVP_B3VTZ",
    "title_ascii": "MAGiCVLGiRL_TRVP_B3VTZ"
  },
  {
    "artist": "USAO",
    "genre": "HARDSTYLE",
    "id": 24037,
    "title": "The Commanders",
    "title_ascii": "The Commanders"
  },
  {
    "artist": "Maozon",
    "genre": "UPLIFTING TRANCE",
    "id": 24038,
    "title": "Umbral",
    "title_ascii": "Umbral"
  },
  {
    "artist": "Maozon",
    "genre": "DRUM&BASS",
    "id": 24039,
    "title": "Steel Edge",
    "title_ascii": "Steel Edge"
  },
  {
    "artist": "C-Show",
    "genre": "TURBOFUNK",
    "id": 24040,
    "title": "Music is The Answer",
    "title_ascii": "Music is The Answer"
  },
  {
    "artist": "lapix",
    "genre": "HiTECH FULLON",
    "id": 24041,
    "title": "Amazing Mirage",
    "title_ascii": "Amazing Mirage"
  },
  {
    "artist": "ni-21",
    "genre": "HARD DANCE",
    "id": 24042,
    "title": "Affection",
    "title_ascii": "Affection"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "CYBER JAZZSTEP",
    "id": 24043,
    "title": "XINOBIKILL",
    "title_ascii": "XINOBIKILL"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi & 709sec.",
    "genre": "HYPER DIGIMETAL",
    "id": 24044,
    "title": "FUZIN RIZIN",
    "title_ascii": "FUZIN RIZIN"
  },
  {
    "artist": "ARM×狐夢想 feat. 山本椛",
    "genre": "ネオスカ電波",
    "id": 24045,
    "title": "ディッシュウォッシャー◎彡おいわちゃん",
    "title_ascii": "Dish Washer Oiwa-Chan"
  },
  {
    "artist": "NU-KO",
    "genre": "ACEDIA",
    "id": 24046,
    "title": "ちらちら・はらはら",
    "title_ascii": "CHIRACHIRA HARAHARA"
  },
  {
    "artist": "DJ Shimamura feat. Renna",
    "genre": "HARDCORE RAVE",
    "id": 24047,
    "title": "Believe in you",
    "title_ascii": "Believe in you"
  },
  {
    "artist": "Manabu Namiki",
    "genre": "DETROIT TECHNO",
    "id": 24048,
    "title": "Shoot'Em All",
    "title_ascii": "Shoot'Em All"
  },
  {
    "artist": "REDALiCE feat. MONICO",
    "genre": "MOOMBAHCORE",
    "id": 24049,
    "title": "Breakin' Chain",
    "title_ascii": "Breakin' Chain"
  },
  {
    "artist": "Gram",
    "genre": "REQUIEM PSY",
    "id": 24050,
    "title": "GuNGNiR",
    "title_ascii": "GuNGNiR"
  },
  {
    "artist": "Massive New Krew",
    "genre": "HARDSTYLE",
    "id": 24051,
    "title": "HADES",
    "title_ascii": "HADES"
  },
  {
    "artist": "Y&Co.",
    "genre": "哀愁EUROBEAT",
    "id": 24052,
    "title": "Remedy feat. Kanae Asaba",
    "title_ascii": "Remedy feat. Kanae Asaba"
  },
  {
    "artist": "DJ SHARPNEL feat. みらい",
    "genre": "演歌ブレイクス",
    "id": 24053,
    "title": "お命ちょうDAI！901娘",
    "title_ascii": "Oinochi Cho-D.A.I. 901Girl "
  },
  {
    "artist": "Nhato",
    "genre": "TRANCE",
    "id": 24054,
    "title": "Beyond The Seven",
    "title_ascii": "Beyond The Seven"
  },
  {
    "artist": "MK",
    "genre": "EDM",
    "id": 24055,
    "title": "elemental bender feat. Kanae Asaba",
    "title_ascii": "elemental bender feat. Kanae Asaba"
  },
  {
    "artist": "Dirty Androids",
    "genre": "80's SYNTH FUNK",
    "id": 24056,
    "title": "Seaside Labyrinth",
    "title_ascii": "Seaside Labyrinth"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH BREAKBEATS",
    "id": 24057,
    "title": "SAMURAI-Scramble",
    "title_ascii": "SAMURAI-Scramble"
  },
  {
    "artist": "DJ CHUCKY feat. Jonjo",
    "genre": "MAINSTREAM HARDCORE",
    "id": 24058,
    "title": "Warrior",
    "title_ascii": "Warrior"
  },
  {
    "artist": "banvox",
    "genre": "DANCE MUSIC",
    "id": 24059,
    "title": "Summer",
    "title_ascii": "Summer"
  },
  {
    "artist": "maras k(marasy+kors k)",
    "genre": "BEAT PIANO MUSIC",
    "id": 24060,
    "title": "Piano Samurai",
    "title_ascii": "Piano Samurai"
  },
  {
    "artist": "livetune+",
    "genre": "J-POP",
    "id": 24061,
    "title": "Sweet Clapper",
    "title_ascii": "Sweet Clapper"
  },
  {
    "artist": "DJ BAKU",
    "genre": "ROCK",
    "id": 24062,
    "title": "SCREAM THE LIFE FEAT.KYONO",
    "title_ascii": "SCREAM THE LIFE FEAT.KYONO"
  },
  {
    "artist": "MASAYOSHI IIMORI",
    "genre": "FESTIVAL SOUND",
    "id": 24063,
    "title": "BREAK OVER",
    "title_ascii": "BREAK OVER"
  },
  {
    "artist": "DJ'TEKINA//SOMETHING feat.yuyoyuppe",
    "genre": "FUTURE BASS",
    "id": 24064,
    "title": "Seize the Day",
    "title_ascii": "Seize the Day"
  },
  {
    "artist": "t+pazolite",
    "genre": "POP BREAKCORE",
    "id": 24065,
    "title": "OTENAMI Hurricane",
    "title_ascii": "OTENAMI Hurricane"
  },
  {
    "artist": "Snail's House",
    "genre": "KAWAII FUTURE BASS",
    "id": 24066,
    "title": "Magical",
    "title_ascii": "Magical"
  },
  {
    "artist": "高田雅史",
    "genre": "ALTERNATIVE ELECTRO",
    "id": 24067,
    "title": "Yellow Sketch(RX-Ver.S.P.L.)",
    "title_ascii": "Yellow Sketch(RX-Ver.S.P.L.)"
  },
  {
    "artist": "ヒゲドライバー",
    "genre": "CHIPTUNE",
    "id": 24068,
    "title": "shuriken",
    "title_ascii": "shuriken"
  },
  {
    "artist": "かめりあ",
    "genre": "夏の夕暮れと、DUBSTEP。",
    "id": 24069,
    "title": "yamabiko (SINOBUZ Edition)",
    "title_ascii": "yamabiko (SINOBUZ Edition)"
  },
  {
    "artist": "天狐",
    "genre": "ORIENTAL FUSION",
    "id": 24070,
    "title": "九尾狐夜行",
    "title_ascii": "Kyuubikoyagyou"
  },
  {
    "artist": "NISH",
    "genre": "UPLIFTING TRANCE",
    "id": 24071,
    "title": "Around The Galaxy",
    "title_ascii": "Around The Galaxy"
  },
  {
    "artist": "Cuvelia",
    "genre": "ANTHEM",
    "id": 24072,
    "title": "Sky High",
    "title_ascii": "Sky High"
  },
  {
    "artist": "金獅子 vs 麒麟 feat. 獏",
    "genre": "ASIAN CONTEMPORARY",
    "id": 24073,
    "title": "Snakey Kung-fu",
    "title_ascii": "Snakey Kung-fu"
  },
  {
    "artist": "猫叉Master",
    "genre": "FOREST SNOW",
    "id": 24074,
    "title": "月雪に舞う華のように",
    "title_ascii": "Tsukiyuki ni mau hananoyouni"
  },
  {
    "artist": "L.E.D.",
    "genre": "NEUROFUNK",
    "id": 24075,
    "title": "INVISIBLE STRIX",
    "title_ascii": "INVISIBLE STRIX"
  },
  {
    "artist": "dj TAKA",
    "genre": "TRANCE",
    "id": 24076,
    "title": "RAIN",
    "title_ascii": "RAIN"
  },
  {
    "artist": "猫叉Master vs HuΣeR",
    "genre": "LAST ARTS",
    "id": 24077,
    "title": "刃図羅",
    "title_ascii": "BUZRA"
  },
  {
    "artist": "lapix",
    "genre": "HiTECH",
    "id": 24078,
    "title": "〆",
    "title_ascii": "SHIME"
  },
  {
    "artist": "Ako Atak",
    "genre": "SPIRAL STAIRS",
    "id": 24079,
    "title": "BabeL ～Grand Story～",
    "title_ascii": "BabeL -Grand Story-"
  },
  {
    "artist": "USAO",
    "genre": "SUPER ULTIMATE HYPER CORE",
    "id": 24080,
    "title": "BroGamer",
    "title_ascii": "BroGamer"
  },
  {
    "artist": "Hommarju",
    "genre": "DJ BATTLE",
    "id": 24081,
    "title": "Beat Juggling Mix",
    "title_ascii": "Beat Juggling Mix"
  },
  {
    "artist": "SLEDLAKE (SLAKE & L.E.D.)",
    "genre": "TECHNO",
    "id": 24082,
    "title": "SEQUENCE CAT",
    "title_ascii": "SEQUENCE CAT"
  },
  {
    "artist": "Setaria Virtuoso",
    "genre": "NOSTALGIA",
    "id": 24083,
    "title": "nostos",
    "title_ascii": "nostos"
  },
  {
    "artist": "beatnation Records",
    "genre": "ANTHEM",
    "id": 24084,
    "title": "crew",
    "title_ascii": "crew"
  },
  {
    "artist": "TOMOSUKE",
    "genre": "PIANO CONTEMPORARY",
    "id": 24085,
    "title": "Macuilxochitl",
    "title_ascii": "Macuilxochitl"
  },
  {
    "artist": "DJ Noriken",
    "genre": "HARDCORE RAVE",
    "id": 24086,
    "title": "Summerlights(IIDX Edition)",
    "title_ascii": "Summerlights(IIDX Edition)"
  },
  {
    "artist": "P*Light",
    "genre": "HAPPY",
    "id": 24087,
    "title": "HAPPY★RUSH",
    "title_ascii": "HAPPY*RUSH"
  },
  {
    "artist": "Tomoyuki Uchida",
    "genre": "ELECTRO FUSION",
    "id": 24088,
    "title": "Surf on the Light",
    "title_ascii": "Surf on the Light"
  },
  {
    "artist": "kors k vs L.E.D.-G",
    "genre": "JUMP UP/HARDCORE",
    "id": 24089,
    "title": "Venom",
    "title_ascii": "Venom"
  },
  {
    "artist": "kors k vs Sota Fujimori",
    "genre": "DREAM COLLABORATION",
    "id": 24090,
    "title": "Cyber True Color",
    "title_ascii": "Cyber True Color"
  },
  {
    "artist": "あべにゅうぷろじぇくと feat. 佐倉紗織 produced by ave;new",
    "genre": "理系ポップ",
    "id": 24091,
    "title": "恋はどう？モロ◎波動OK☆方程式!!",
    "title_ascii": "koihadou? moro hadou ok houteishiki!!"
  },
  {
    "artist": "Remo-con",
    "genre": "HARD HOUSE",
    "id": 24092,
    "title": "Vermilion",
    "title_ascii": "Vermilion"
  },
  {
    "artist": "猫叉Master+",
    "genre": "DRUM'N'BASS",
    "id": 24093,
    "title": "Lost wing at.0",
    "title_ascii": "Lost wing at.0"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "空想ファンタジーシリーズ",
    "id": 24094,
    "title": "童話回廊",
    "title_ascii": "DOUWAKAIROU"
  },
  {
    "artist": "Morrigan feat. リリィ",
    "genre": "EPIC D'N'B",
    "id": 24095,
    "title": "Apocalypse",
    "title_ascii": "Apocalypse"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi Vs.GOD PHOENIX Prim",
    "genre": "Hi-MYTH",
    "id": 25000,
    "title": "神謳 -RESONANCE-",
    "title_ascii": "SHINOH -RESONANCE-"
  },
  {
    "artist": "L.E.D. feat. YURiCa/花たん",
    "genre": "EUROBEAT",
    "id": 25001,
    "title": "THE CANNONBALLER",
    "title_ascii": "THE CANNONBALLER"
  },
  {
    "artist": "森永真由美",
    "genre": "歌謡ニューウェーブ",
    "id": 25002,
    "title": "ナイトシティー・アヴァンチュール",
    "title_ascii": "NIGHTCITY AVENTURE"
  },
  {
    "artist": "L.E.D.ALiCE(DJ NAGAI Vs. BEMANI Sound Team \"L.E.D.-G\")",
    "genre": "世紀末コア",
    "id": 25003,
    "title": "DEATH†ZIGOQ ～怒りの高速爆走野郎～",
    "title_ascii": "DEATH ZIGOQ"
  },
  {
    "artist": "BEMANI Sound Team \"謎の勢力\"",
    "genre": "00's TECHNO",
    "id": 25004,
    "title": "Initiation",
    "title_ascii": "Initiation"
  },
  {
    "artist": "HuΣeR",
    "genre": "CYBERNETICS PIANO HOUSE",
    "id": 25005,
    "title": "ChaserXX",
    "title_ascii": "ChaserXX"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\" feat.Fernweh",
    "genre": "EMOTIONAL ROCK",
    "id": 25006,
    "title": "純真可憐デザイア",
    "title_ascii": "JUNSHINKAREN DESIRE"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR vs dj Hellix\"",
    "genre": "IRREGULAR DJENT STEP",
    "id": 25007,
    "title": "EMERALDAS",
    "title_ascii": "EMERALDAS"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR Vs. SYUNN\"",
    "genre": "STYLISH CROSSOVER",
    "id": 25008,
    "title": "ANCHOR",
    "title_ascii": "ANCHOR"
  },
  {
    "artist": "D.J.Amuro",
    "genre": "RENAISSANCE",
    "id": 25009,
    "title": "AA -rebuild-",
    "title_ascii": "AA -rebuild-"
  },
  {
    "artist": "O/iviA",
    "genre": "EURO TRANCE",
    "id": 25010,
    "title": "I Love You",
    "title_ascii": "I Love You"
  },
  {
    "artist": "BEMANI Sound Team \"Saori Watanabe\"",
    "genre": "CLASSIC MOTIF",
    "id": 25011,
    "title": "バスルーム ロマンス",
    "title_ascii": "Bathroom Romance"
  },
  {
    "artist": "猫叉Master+",
    "genre": "COSMIC POP",
    "id": 25012,
    "title": "COSMIC☆WONDER☆REVOLUTION",
    "title_ascii": "COSMIC*WONDER*REVOLUTION"
  },
  {
    "artist": "Sota Fujimori",
    "genre": "SYNTH-TECH",
    "id": 25013,
    "title": "ACCELERATE",
    "title_ascii": "ACCELERATE"
  },
  {
    "artist": "BEMANI Sound Team \"Expander\"",
    "genre": "MIDDLE EASTERN TWERK",
    "id": 25014,
    "title": "Expanded !!",
    "title_ascii": "Expanded !!"
  },
  {
    "artist": "RoughSketch",
    "genre": "UPTEMPO HARDCORE",
    "id": 25015,
    "title": "Life Is A Game ft.DD\"ナカタ\"Metal",
    "title_ascii": "Life Is A Game ft.DD\"Nakata\"Metal"
  },
  {
    "artist": "DJ TOTTO",
    "genre": "WAGON WHEEL TRANCE",
    "id": 25016,
    "title": "Back Spin Sweeper",
    "title_ascii": "Back Spin Sweeper"
  },
  {
    "artist": "BEMANI Sound Team \"DJ TOTTO\" feat.rionos",
    "genre": "NATURE",
    "id": 25017,
    "title": "シムルグの目醒め",
    "title_ascii": "Dawn of Simurgh"
  },
  {
    "artist": "SYUNN",
    "genre": "DUBSTEP",
    "id": 25018,
    "title": "Abraxas",
    "title_ascii": "Abraxas"
  },
  {
    "artist": "BEMANI Sound Team \"SYUNN\"",
    "genre": "DRUMSTEP",
    "id": 25019,
    "title": "Papilio ulysses",
    "title_ascii": "Papilio ulysses"
  },
  {
    "artist": "Akhuta",
    "genre": "ALTERNATIVE FUGUE",
    "id": 25020,
    "title": "Mira",
    "title_ascii": "Mira"
  },
  {
    "artist": "DJ TECHNORCH feat.宇宙★海月 vs BEMANI Sound Team \"U1-ASAMi\"",
    "genre": "ORBITALIC GABBER STEP",
    "id": 25021,
    "title": "東京神話",
    "title_ascii": "TOKYO SHINWA"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\"",
    "genre": "SPEED EURO",
    "id": 25022,
    "title": "Beast mode",
    "title_ascii": "Beast mode"
  },
  {
    "artist": "BEMANI Sound Team \"RACER-X\"",
    "genre": "SPEED STAR",
    "id": 25023,
    "title": "FIRE BALL",
    "title_ascii": "FIRE BALL"
  },
  {
    "artist": "劇団レコード",
    "genre": "JOURNEY SCENE",
    "id": 25024,
    "title": "草原の王女-軌跡を辿って-",
    "title_ascii": "Princess in Grassland"
  },
  {
    "artist": "青龍 × sampling masters MEGA & sampling masters AYA",
    "genre": "ROTTERDAM RAVE",
    "id": 25025,
    "title": "VOX RUSH",
    "title_ascii": "VOX RUSH"
  },
  {
    "artist": "Ryu*",
    "genre": "TECHNO",
    "id": 25026,
    "title": "O/D*20",
    "title_ascii": "O/D*20"
  },
  {
    "artist": "255",
    "genre": "HYPER SPEED RAVE",
    "id": 25027,
    "title": "255",
    "title_ascii": "255"
  },
  {
    "artist": "kors k",
    "genre": "SCHRANZ",
    "id": 25028,
    "title": "Battleground",
    "title_ascii": "Battleground"
  },
  {
    "artist": "Eagle",
    "genre": "NEO JUNGLE",
    "id": 25029,
    "title": "Boomy and The Boost",
    "title_ascii": "Boomy and The Boost"
  },
  {
    "artist": "C-Show",
    "genre": "PSY TECH DANCE",
    "id": 25030,
    "title": "ANAGMA",
    "title_ascii": "ANAGMA"
  },
  {
    "artist": "Xceon",
    "genre": "YANKEE CAR J TRANCE",
    "id": 25031,
    "title": "ハイ*ビスカス ft. Kanae Asaba",
    "title_ascii": "Hi*biscus ft. Kanae Asaba"
  },
  {
    "artist": "Xceon",
    "genre": "PIANO TRANCE",
    "id": 25032,
    "title": "Alpheratz",
    "title_ascii": "Alpheratz"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": "熱帯 THE BASS",
    "id": 25033,
    "title": "Amor De Ver?o",
    "title_ascii": "Amor De Verao"
  },
  {
    "artist": "RoughSketch feat.Aikapin",
    "genre": "POPCORE",
    "id": 25034,
    "title": "LUV DRIVE",
    "title_ascii": "LUV DRIVE"
  },
  {
    "artist": "P*Light",
    "genre": "HANDZ STYLE",
    "id": 25035,
    "title": "HAT TRICK",
    "title_ascii": "HAT TRICK"
  },
  {
    "artist": "Hommarju & Akira Complex",
    "genre": "DRUMSTEP/HARDCORE",
    "id": 25036,
    "title": "Break Stasis",
    "title_ascii": "Break Stasis"
  },
  {
    "artist": "OSTER project feat. 常盤ゆう",
    "genre": "HARD FRENCH",
    "id": 25037,
    "title": "エディブルフラワーの独白",
    "title_ascii": "edible flower monologue"
  },
  {
    "artist": "DJ Noriken",
    "genre": "HARD BASS HOUSE",
    "id": 25038,
    "title": "Exhaust Hype",
    "title_ascii": "Exhaust Hype"
  },
  {
    "artist": "USAO",
    "genre": "HYPER DUBSTEP",
    "id": 25039,
    "title": "FREEDOM",
    "title_ascii": "FREEDOM"
  },
  {
    "artist": "lapix",
    "genre": "FUTURE CORE",
    "id": 25040,
    "title": "Slipstream",
    "title_ascii": "Slipstream"
  },
  {
    "artist": "Maozon",
    "genre": "CYBER LIQUID FUNK",
    "id": 25041,
    "title": "Best of Me",
    "title_ascii": "Best of Me"
  },
  {
    "artist": "Maozon vs. C-Show",
    "genre": "CYBERCORE",
    "id": 25042,
    "title": "Around the Future",
    "title_ascii": "Around the Future"
  },
  {
    "artist": "C-Show",
    "genre": "HOLIC",
    "id": 25043,
    "title": "FUTURE is Dead",
    "title_ascii": "FUTURE is Dead"
  },
  {
    "artist": "ni-21",
    "genre": "HARD DANCE",
    "id": 25044,
    "title": "Acidiva 303",
    "title_ascii": "Acidiva 303"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "JAZZ ROCK",
    "id": 25045,
    "title": "1001 -ESCAPE-",
    "title_ascii": "1001 -ESCAPE-"
  },
  {
    "artist": "D-Evoke（与那嶺雅人/小日向翔）",
    "genre": "ELEGANT SWING",
    "id": 25046,
    "title": "共犯へヴンズコード",
    "title_ascii": "Kyohan-Heaven'sCode"
  },
  {
    "artist": "ARM×狐夢想 feat. I've : 柚子乃 & RINA",
    "genre": "プログレッシブ徒競走",
    "id": 25047,
    "title": "うさ☆かめ 大戦争！",
    "title_ascii": "Usa Kame Wars!"
  },
  {
    "artist": "lapix",
    "genre": "ULTRA JAZZFUNKTION",
    "id": 25048,
    "title": "Nothing but Theory",
    "title_ascii": "Nothing but Theory"
  },
  {
    "artist": "DJ Noriken",
    "genre": "EMOTIONAL RAVE EUPHORIA",
    "id": 25049,
    "title": "Illusionary Waterlily",
    "title_ascii": "Illusionary Waterlily"
  },
  {
    "artist": "YUC'e",
    "genre": "FUTURE TERROR",
    "id": 25050,
    "title": "n'pa pa BBQ",
    "title_ascii": "n'pa pa BBQ"
  },
  {
    "artist": "Massive New Krew",
    "genre": "PSYSTYLE",
    "id": 25051,
    "title": "Temple of Anubis",
    "title_ascii": "Temple of Anubis"
  },
  {
    "artist": "Massive New Krew",
    "genre": "HARDSTYLE",
    "id": 25052,
    "title": "Persephone",
    "title_ascii": "Persephone"
  },
  {
    "artist": "Y&Co.",
    "genre": "HYPER TECHNO",
    "id": 25053,
    "title": "No Limit 2 dAnce feat. 大山愛未",
    "title_ascii": "No Limit 2 dAnce feat. Aimi Oyama"
  },
  {
    "artist": "MASAYOSHI IIMORI",
    "genre": "FREESTYLE",
    "id": 25054,
    "title": "Hella Deep",
    "title_ascii": "Hella Deep"
  },
  {
    "artist": "Nhato",
    "genre": "ELECTRO TRANCE",
    "id": 25055,
    "title": "Static State",
    "title_ascii": "Static State"
  },
  {
    "artist": "MK",
    "genre": "TROPICAL HOUSE",
    "id": 25056,
    "title": "Get Up! feat. Kanae Asaba",
    "title_ascii": "Get Up! feat. Kanae Asaba"
  },
  {
    "artist": "Dirty Androids",
    "genre": "NU 80's DISCO FUNK",
    "id": 25057,
    "title": "Midnight Lady",
    "title_ascii": "Midnight Lady"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH BREAKS",
    "id": 25058,
    "title": "The Chase",
    "title_ascii": "The Chase"
  },
  {
    "artist": "t+pazolite",
    "genre": "OSHARave",
    "id": 25059,
    "title": "UMMU",
    "title_ascii": "UMMU"
  },
  {
    "artist": "COSIO",
    "genre": "DRUM'N'BASS",
    "id": 25060,
    "title": "Rise Circuit",
    "title_ascii": "Rise Circuit"
  },
  {
    "artist": "YUC'e",
    "genre": "FUTURE BASS",
    "id": 25061,
    "title": "Chemical Cookie",
    "title_ascii": "Chemical Cookie"
  },
  {
    "artist": "Y&Co.",
    "genre": "GABBA",
    "id": 25062,
    "title": "Son, not gabba now",
    "title_ascii": "Son, not gabba now"
  },
  {
    "artist": "aran",
    "genre": "HYBRID HARDCORE",
    "id": 25063,
    "title": "Xperanza",
    "title_ascii": "Xperanza"
  },
  {
    "artist": "maras k/marasy×kors k",
    "genre": "BEAT PIANO MUSIC",
    "id": 25064,
    "title": "2 Player",
    "title_ascii": "2 Player"
  },
  {
    "artist": "Pa's Lam System",
    "genre": "ダンスミュージック",
    "id": 25065,
    "title": "I'm Coming (2017 Version)",
    "title_ascii": "I'm Coming (2017 Version)"
  },
  {
    "artist": "lapix",
    "genre": "EMO BREAKS",
    "id": 25066,
    "title": "LIGHTS ft. EVO+",
    "title_ascii": "LIGHTS ft. EVO+"
  },
  {
    "artist": "日龍",
    "genre": "TRANCE SPEED",
    "id": 25067,
    "title": "SUNLiGHT (IIDX Mix)",
    "title_ascii": "SUNLiGHT (IIDX Mix)"
  },
  {
    "artist": "DJ Taku aka ☆Taku Takahashi (m-flo)",
    "genre": "FUTURE J-POP",
    "id": 25068,
    "title": "ラストセンチュリーメランコリック",
    "title_ascii": "Last Century Melancholic"
  },
  {
    "artist": "AIKO OI",
    "genre": "VELLUM",
    "id": 25069,
    "title": "Eine Haube ～聖地の果てにあるもの～",
    "title_ascii": "Eine Haube"
  },
  {
    "artist": "RINA SOUND PRODUCE : KAZUYA TAKASE",
    "genre": "PSYCHDELIC TRANCE",
    "id": 25070,
    "title": "Only for now",
    "title_ascii": "Only for now"
  },
  {
    "artist": "sanodg",
    "genre": "TECH HOUSE",
    "id": 25071,
    "title": "From Time To Time",
    "title_ascii": "From Time To Time"
  },
  {
    "artist": "BEMANI Sound Team \"Mutsuhiko Izumi\"",
    "genre": "ROCK FUSION",
    "id": 25072,
    "title": "SPEED",
    "title_ascii": "SPEED"
  },
  {
    "artist": "Feryquitous",
    "genre": "ARTCORE",
    "id": 25073,
    "title": "Fervidex",
    "title_ascii": "Fervidex"
  },
  {
    "artist": "DJ Myosuke",
    "genre": "HARDCORE",
    "id": 25074,
    "title": "DEADHEAT",
    "title_ascii": "DEADHEAT"
  },
  {
    "artist": "BEMANI Sound Team \"Akhuta Works\"",
    "genre": "GENESIS",
    "id": 25075,
    "title": "Arca",
    "title_ascii": "Arca"
  },
  {
    "artist": "GUHROOVY feat. NO+CHIN",
    "genre": "HARDTEK",
    "id": 25076,
    "title": "SPEED DEMON",
    "title_ascii": "SPEED DEMON"
  },
  {
    "artist": "Scott Brown & M-Project",
    "genre": "HDM",
    "id": 25077,
    "title": "The Revolution (VIP Mix)",
    "title_ascii": "The Revolution (VIP Mix)"
  },
  {
    "artist": "志方あきこ",
    "genre": "STRANGE WORLD MUSIC",
    "id": 25078,
    "title": "命の標本",
    "title_ascii": "Dystopia"
  },
  {
    "artist": "中島由貴",
    "genre": "DIGITAL THRASH PUNK",
    "id": 25079,
    "title": "Be a Hero!",
    "title_ascii": "Be a Hero!"
  },
  {
    "artist": "OSTER project",
    "genre": "PANIC FUSION",
    "id": 25080,
    "title": "Raspberry Railgun",
    "title_ascii": "Raspberry Railgun"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "HEAV'NLY TRANCE",
    "id": 25081,
    "title": "STARLIGHT JUNCTION",
    "title_ascii": "STARLIGHT JUNCTION"
  },
  {
    "artist": "ota2",
    "genre": "DANCE POP",
    "id": 25082,
    "title": "Usual Days-remix",
    "title_ascii": "Usual Days-remix"
  },
  {
    "artist": "t+pazolite",
    "genre": "HARDCORE DANCE SPEED",
    "id": 25083,
    "title": "Antigravity",
    "title_ascii": "Antigravity"
  },
  {
    "artist": "ヒゲドライバー join. 新菜まこ & 松平なな",
    "genre": "電波ソング",
    "id": 25084,
    "title": "バ→ビ→ブ→Bomb!",
    "title_ascii": "Ba-Bi-Bu-Bomb!"
  },
  {
    "artist": "かめりあ",
    "genre": "MACHINEGUN PSYSTYLE",
    "id": 25085,
    "title": "NITROUS CANNON",
    "title_ascii": "NITROUS CANNON"
  },
  {
    "artist": "MOSAIC.WAV",
    "genre": "AKIBA-POP",
    "id": 25086,
    "title": "パラドキシカル・タイムリープトライアル(Short Ver.)",
    "title_ascii": "Paradoxical Time Leap Trial"
  },
  {
    "artist": "RAM",
    "genre": "DRUM'N'BASS",
    "id": 25087,
    "title": "SHOX",
    "title_ascii": "SHOX"
  },
  {
    "artist": "猫叉Master+",
    "genre": "DRUM'N'BASS",
    "id": 25088,
    "title": "encounter",
    "title_ascii": "encounter"
  },
  {
    "artist": "DJ CHUCKY",
    "genre": "GABBA",
    "id": 25089,
    "title": "HYPE THE CORE",
    "title_ascii": "HYPE THE CORE"
  },
  {
    "artist": "Dirty Androids",
    "genre": "DRUM&BASS",
    "id": 25090,
    "title": "City Never Sleeps (IIDX Edition)",
    "title_ascii": "City Never Sleeps (IIDX Edition)"
  },
  {
    "artist": "USAO",
    "genre": "HARDCORE",
    "id": 25091,
    "title": "Rampage",
    "title_ascii": "Rampage"
  },
  {
    "artist": "sky_delta",
    "genre": "Hi-TECHDANCE",
    "id": 25092,
    "title": "REVOLVER",
    "title_ascii": "REVOLVER"
  },
  {
    "artist": "Getty vs. DJ DiA",
    "genre": "PUMPCORE",
    "id": 25093,
    "title": "DropZ-Line-",
    "title_ascii": "DropZ-Line-"
  },
  {
    "artist": "猫叉Master feat.Mayumi Morinaga",
    "genre": "THE WORLD EVOLVE",
    "id": 25094,
    "title": "Sleepless days",
    "title_ascii": "Sleepless days"
  },
  {
    "artist": "BEMANI Sound Team \"dj TAKA\"",
    "genre": "ADMIRABLE",
    "id": 25095,
    "title": "MAXIVCORD",
    "title_ascii": "MAXIVCORD"
  },
  {
    "artist": "BEMANI Sound Team \"Sota F.\"",
    "genre": "FUTURE HOUSE",
    "id": 25096,
    "title": "Let's Bounce !!",
    "title_ascii": "Let's Bounce !!"
  },
  {
    "artist": "BEMANI Sound Team \"S-C-U vs L.E.D.\"",
    "genre": "HARD ELECTRIC POP",
    "id": 26000,
    "title": "THE DAY OF JUBILATIONS",
    "title_ascii": "THE DAY OF JUBILATIONS"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D. VS. L.E.D.-G\"",
    "genre": "PSYSTYLE",
    "id": 26001,
    "title": "KILL EACH OTHER",
    "title_ascii": "KILL EACH OTHER"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"L.E.D.\" & IOSYS",
    "genre": "IIDX EDITION",
    "id": 26002,
    "title": "Won(*3*)Chu KissMe!",
    "title_ascii": "Won(*3*)Chu KissMe!"
  },
  {
    "artist": "冬色AMOUR☆Prim",
    "genre": "Hi-歌謡コア",
    "id": 26003,
    "title": "抱きしめてモナムール",
    "title_ascii": "dakishimete mon amour"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.\" feat. KOTOKO",
    "genre": "DRUM & BASS",
    "id": 26004,
    "title": "UNDERWORLD HOLOGRAPHY",
    "title_ascii": "UNDERWORLD HOLOGRAPHY"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR+\"",
    "genre": "NEO J-TEKNO",
    "id": 26005,
    "title": "R∞tAge",
    "title_ascii": "Rootage"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"HuΣeR feat.PON\"",
    "genre": "IIDX EDITION",
    "id": 26006,
    "title": "HOT LIMIT",
    "title_ascii": "HOT LIMIT"
  },
  {
    "artist": "T.Σ.Generation",
    "genre": "ULTIΣATE COLLABORATION",
    "id": 26007,
    "title": "X-DEN",
    "title_ascii": "KAI-DEN"
  },
  {
    "artist": "BEMANI Sound Team \"dj TAKA\"",
    "genre": "ELECTRONIC RHAPSODY",
    "id": 26009,
    "title": "HEISEI",
    "title_ascii": "HEISEI"
  },
  {
    "artist": "KING & Princess",
    "genre": "8BARS",
    "id": 26010,
    "title": "Drastic Dramatic",
    "title_ascii": "Drastic Dramatic"
  },
  {
    "artist": "VINCENT GANATCH",
    "genre": "TECHNO GRAFFITI",
    "id": 26011,
    "title": "GENE",
    "title_ascii": "GENE"
  },
  {
    "artist": "BEMANI Sound Team \"猫叉Master\"",
    "genre": "DRUM'N'BASS",
    "id": 26012,
    "title": "Painful Fate",
    "title_ascii": "Painful Fate"
  },
  {
    "artist": "BEMANI Sound Team \"Mutsuhiko Izumi\"",
    "genre": "HARDROCK",
    "id": 26013,
    "title": "SIGMA",
    "title_ascii": "SIGMA"
  },
  {
    "artist": "BEMANI Sound Team \"Expander\"",
    "genre": "HYBRID",
    "id": 26014,
    "title": "Digital Skipper",
    "title_ascii": "Digital Skipper"
  },
  {
    "artist": "BEMANI Sound Team \"Sota Fujimori\"",
    "genre": "MELODIC TRANCE",
    "id": 26015,
    "title": "Lift Us High",
    "title_ascii": "Lift Us High"
  },
  {
    "artist": "BEMANI Sound Team \"HEXA\"",
    "genre": "BIG BEAT",
    "id": 26016,
    "title": "CODE:0",
    "title_ascii": "CODE:0"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\"",
    "genre": "BLOOM TRANCE",
    "id": 26017,
    "title": "BLO§OM",
    "title_ascii": "BLOSSOM"
  },
  {
    "artist": "ARM × BEMANI Sound Team \"U1 overground\"",
    "genre": "ORBITALIC ORIENTAL ELECTRO",
    "id": 26018,
    "title": "ZENDEGI DANCE",
    "title_ascii": "ZENDEGI DANCE"
  },
  {
    "artist": "BEMANI Sound Team \"SYUNN\"",
    "genre": "RIDDIM DUBSTEP",
    "id": 26019,
    "title": "Psycho Sheep Riddim",
    "title_ascii": "Psycho Sheep Riddim"
  },
  {
    "artist": "BEMANI Sound Team \"Captain Sonic\"",
    "genre": "BIGCORE",
    "id": 26020,
    "title": "COSMIC CYBER",
    "title_ascii": "COSMIC CYBER"
  },
  {
    "artist": "BEMANI Sound Team \"person09\"",
    "genre": "COMMENT OUT",
    "id": 26021,
    "title": "A Tale Hidden In The Abyss",
    "title_ascii": "A Tale Hidden In The Abyss"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"TAG\" feat. 柊木りお",
    "genre": "IIDX EDITION",
    "id": 26022,
    "title": "サクラあっぱれーしょん",
    "title_ascii": "Sakura Apparation"
  },
  {
    "artist": "kors k",
    "genre": "JUKE/FOOTWORK",
    "id": 26023,
    "title": "Garuda",
    "title_ascii": "Garuda"
  },
  {
    "artist": "BEMANI Sound Team \"劇団レコード\"",
    "genre": "SPANISH GUITAR",
    "id": 26024,
    "title": "グラナダの風",
    "title_ascii": "Granada Wind"
  },
  {
    "artist": "BEMANI Sound Team \"Anonymous\"",
    "genre": "METAL",
    "id": 26025,
    "title": "Unbelief",
    "title_ascii": "Unbelief"
  },
  {
    "artist": "Ryu☆",
    "genre": "UPLIFTING ETHNIC",
    "id": 26026,
    "title": "CoMAAAAAAA",
    "title_ascii": "CoMAAAAAAA"
  },
  {
    "artist": "Xceon feat.Mayumi Morinaga",
    "genre": "PIANO J TRANCE POP",
    "id": 26027,
    "title": "深愛のリグレット",
    "title_ascii": "shinaino regret "
  },
  {
    "artist": "kors k",
    "genre": "CANDY RAVE GABBER",
    "id": 26028,
    "title": "Wonderland",
    "title_ascii": "Wonderland"
  },
  {
    "artist": "kors k",
    "genre": "JUNGLE TERROR",
    "id": 26029,
    "title": "M?ch? M?nky",
    "title_ascii": "Macho Monky"
  },
  {
    "artist": "kradness",
    "genre": "EDM",
    "id": 26030,
    "title": "Glory",
    "title_ascii": "Glory"
  },
  {
    "artist": "Xceon",
    "genre": "Re 90's J-DANCE POP",
    "id": 26031,
    "title": "夏の匂い。キミの残像。 ft. Kanae Asaba",
    "title_ascii": "Natsunonioi kiminozanzou ft. Kanae Asaba"
  },
  {
    "artist": "DJ NAGAI",
    "genre": "HARDCORE",
    "id": 26032,
    "title": "AGAiN",
    "title_ascii": "AGAiN"
  },
  {
    "artist": "中島由貴",
    "genre": "MARVELOUS CHEER",
    "id": 26033,
    "title": "Catch Our Fire!",
    "title_ascii": "Catch Our Fire!"
  },
  {
    "artist": "DJ Noriken",
    "genre": "HARDER DANCE MUSIC",
    "id": 26034,
    "title": "dAuntl3ss",
    "title_ascii": "dAuntl3ss"
  },
  {
    "artist": "Massive New Krew feat.松平なな",
    "genre": "HARDSTYLE",
    "id": 26035,
    "title": "Starry Night",
    "title_ascii": "Starry Night"
  },
  {
    "artist": "USAO & DJ Nanashi",
    "genre": "HYPER HANDS UP",
    "id": 26036,
    "title": "Wing of Hearts",
    "title_ascii": "Wing of Hearts"
  },
  {
    "artist": "CANVAS feat. Quim?r",
    "genre": "SYMPHONIC TRANCECORE",
    "id": 26037,
    "title": "Carmina",
    "title_ascii": "Carmina"
  },
  {
    "artist": "aran",
    "genre": "UK HARDCORE",
    "id": 26038,
    "title": "L.F.O",
    "title_ascii": "L.F.O"
  },
  {
    "artist": "DJ Myosuke",
    "genre": "DJENTCORE",
    "id": 26039,
    "title": "The Rebellion of Sequencer",
    "title_ascii": "The Rebellion of Sequencer"
  },
  {
    "artist": "bermei.inazawa/feat.霜月はるか",
    "genre": "JAPANESE POPS",
    "id": 26040,
    "title": "泰東ノ翠霞",
    "title_ascii": "taito no suika"
  },
  {
    "artist": "RoughSkreamZ",
    "genre": "SOCA",
    "id": 26041,
    "title": "花冠 feat.Aikapin",
    "title_ascii": "Hanakanmuri feat.Aikapin"
  },
  {
    "artist": "OSTER project feat. echo",
    "genre": "GIRLS ROCK",
    "id": 26042,
    "title": "セカンドピアス",
    "title_ascii": "Second earrings"
  },
  {
    "artist": "Hommarju",
    "genre": "INDUSTRIAL TECHNO",
    "id": 26043,
    "title": "Dr. Chemical & Killing Machine",
    "title_ascii": "Dr. Chemical & Killing Machine"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": "A-STYLE RUSSIAN HARDBASS",
    "id": 26044,
    "title": "ハードベース・フェスタ",
    "title_ascii": "HARDBASS FESTA"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"PHQUASE feat.TRANDER Jr.\"",
    "genre": "IIDX EDITION",
    "id": 26045,
    "title": "U.S.A.",
    "title_ascii": "U.S.A."
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH-BREAKS",
    "id": 26046,
    "title": "IDC feat.REVERBEE (Mo'Cuts Ver)",
    "title_ascii": "IDC feat.REVERBEE (Mo'Cuts Ver)"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "TECH-BREAKS",
    "id": 26047,
    "title": "Red. by Jack Trance",
    "title_ascii": "Red. by Jack Trance"
  },
  {
    "artist": "Maozon feat. Kyte",
    "genre": "CYBER DANCE MUSIC",
    "id": 26048,
    "title": "Twilight Warp",
    "title_ascii": "Twilight Warp"
  },
  {
    "artist": "Y&Co.",
    "genre": "TRANCE",
    "id": 26049,
    "title": "ROCK女 feat. 大山愛未, Ken",
    "title_ascii": "ROCK ONNA feat. Aimi Oyama, Ken"
  },
  {
    "artist": "YUC'e",
    "genre": "FUTURE BASS",
    "id": 26050,
    "title": "Yum Yum Jelly",
    "title_ascii": "Yum Yum Jelly"
  },
  {
    "artist": "YUC'e",
    "genre": "GLITCH HOP",
    "id": 26051,
    "title": "LADYBIRD",
    "title_ascii": "LADYBIRD"
  },
  {
    "artist": "lapix",
    "genre": "GARAGE",
    "id": 26052,
    "title": "Cranberry City ft. Luschel",
    "title_ascii": "Cranberry City ft. Luschel"
  },
  {
    "artist": "lapix",
    "genre": "MEGA MIX",
    "id": 26053,
    "title": "& Intelligence",
    "title_ascii": "& Intelligence"
  },
  {
    "artist": "Masayoshi Iimori",
    "genre": "RAVE SXXX",
    "id": 26054,
    "title": "Hurry Hurry",
    "title_ascii": "Hurry Hurry"
  },
  {
    "artist": "Nhato",
    "genre": "FUSION TRANCE",
    "id": 26055,
    "title": "Ember Lights",
    "title_ascii": "Ember Lights"
  },
  {
    "artist": "Virtual Self",
    "genre": "NEOTRANCE",
    "id": 26057,
    "title": "Particle Arts",
    "title_ascii": "Particle Arts"
  },
  {
    "artist": "Dirty Androids",
    "genre": "JAZZY FOOTWORK JUNGLE",
    "id": 26058,
    "title": "Urban Constellations",
    "title_ascii": "Urban Constellations"
  },
  {
    "artist": "m1dy",
    "genre": "TOKYO STYLE SPEEDCORE",
    "id": 26059,
    "title": "ONIGOROSHI",
    "title_ascii": "ONIGOROSHI"
  },
  {
    "artist": "ARM×狐夢想 feat. ななひら",
    "genre": "勤労☆電波",
    "id": 26060,
    "title": "爆ゼニ☆がってんワーカー",
    "title_ascii": "Baku Zeni Gatten Worker"
  },
  {
    "artist": "ももいろクローバーZ",
    "genre": "J-POP",
    "id": 26061,
    "title": "Re:Story",
    "title_ascii": "Re:Story"
  },
  {
    "artist": "Zektbach",
    "genre": "ELEMENTAL JIG",
    "id": 26062,
    "title": "The Sealer ～ア・ミリアとミリアの民～",
    "title_ascii": "The Sealer"
  },
  {
    "artist": "☆Taku Takahashi (m-flo, block.fm)",
    "genre": "EUROTRAPBEAT",
    "id": 26063,
    "title": "The Best of Both Worlds",
    "title_ascii": "The Best of Both Worlds"
  },
  {
    "artist": "Blacklolita",
    "genre": "DUBSTEP",
    "id": 26064,
    "title": "GIGA THRASH",
    "title_ascii": "GIGA THRASH"
  },
  {
    "artist": "月代 彩",
    "genre": "DRUM & BASS",
    "id": 26065,
    "title": "Angels & Demons",
    "title_ascii": "Angels & Demons"
  },
  {
    "artist": "soejima takuma feat.BEMANI Sound Team \"猫叉Master\"",
    "genre": "ELECTRONICA",
    "id": 26066,
    "title": "ミストレス・アンに花束を",
    "title_ascii": "Bouquet for Ann"
  },
  {
    "artist": "AJURIKA",
    "genre": "PSYCHEDELIC TRANCE ",
    "id": 26067,
    "title": "SPEED ROCKER",
    "title_ascii": "SPEED ROCKER"
  },
  {
    "artist": "RINA",
    "genre": "PSYCHEDELIC ROCK",
    "id": 26068,
    "title": "IDOL syndrome.",
    "title_ascii": "IDOL syndrome."
  },
  {
    "artist": "空中分解feat.アンテナガール",
    "genre": "ELECTRO POP",
    "id": 26069,
    "title": "OVER TIME",
    "title_ascii": "OVER TIME"
  },
  {
    "artist": "sasakure.UK",
    "genre": "NEUTRONIKA",
    "id": 26070,
    "title": "Xl?",
    "title_ascii": "XLO"
  },
  {
    "artist": "Pizuya's Cell",
    "genre": "ELECTRIC DANCE ROCK",
    "id": 26071,
    "title": "Let me be your cure",
    "title_ascii": "Let me be your cure"
  },
  {
    "artist": "Yamato",
    "genre": "Drumstep / DnB",
    "id": 26072,
    "title": "Level One",
    "title_ascii": "Level One"
  },
  {
    "artist": "Hommarju",
    "genre": "THEME SONG",
    "id": 26074,
    "title": "Next Tales 2 Oath (IIDX 20th Anniv \"Ring\" Theme)",
    "title_ascii": "Next Tales 2 Oath (IIDX 20th Anniv \"Ring\" Theme)"
  },
  {
    "artist": "KSUKE",
    "genre": "FESTIVAL TRAP",
    "id": 26075,
    "title": "Serious?",
    "title_ascii": "Serious?"
  },
  {
    "artist": "BEMANI Sound Team \"黒猫ダンジョン\"",
    "genre": "RETROSPECTIVE EPIC MUSIC",
    "id": 26076,
    "title": "龍王の霊廟(Mausoleum Of The Primal Dragon)",
    "title_ascii": "Mausoleum Of The Primal Dragon"
  },
  {
    "artist": "Xceon",
    "genre": "PIANO TRANCE",
    "id": 26077,
    "title": "Wolf 1061",
    "title_ascii": "Wolf 1061"
  },
  {
    "artist": "DJ TECHNORCH feat. 宇宙★海月",
    "genre": "音ゲー賛美歌",
    "id": 26078,
    "title": "金野火織の金色提言",
    "title_ascii": "KONNO HIORI NO KONJIKI TEIGEN"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "PROGRESSIVE ROCK",
    "id": 26079,
    "title": "EVANESCENT",
    "title_ascii": "EVANESCENT"
  },
  {
    "artist": "かめりあ",
    "genre": "TECHNO",
    "id": 26080,
    "title": "LOST TECHNOLOGIE",
    "title_ascii": "LOST TECHNOLOGIE"
  },
  {
    "artist": "Mr.T",
    "genre": "ELECTRO SHOCK",
    "id": 26081,
    "title": "XENON II ～TOMOYUKIの野望～",
    "title_ascii": "XENON II -TOMOYUKI no Yabou-"
  },
  {
    "artist": "SLAKE",
    "genre": "TECHNO",
    "id": 26082,
    "title": "REPLAY",
    "title_ascii": "REPLAY"
  },
  {
    "artist": "DJ ODDBALL",
    "genre": "MINIMAL",
    "id": 26083,
    "title": "DRUNK MONKY",
    "title_ascii": "DRUNK MONKY"
  },
  {
    "artist": "kors k",
    "genre": "SPEED RAVE",
    "id": 26084,
    "title": "Playing With Fire",
    "title_ascii": "Playing With Fire"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\"",
    "genre": "RECKLESS HARDCORE",
    "id": 26085,
    "title": "Lethal Weapon",
    "title_ascii": "Lethal Weapon"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.-G\"",
    "genre": "HARDSTYLE",
    "id": 26086,
    "title": "GO OVER WITH GLARE -ROOTAGE 26-",
    "title_ascii": "GO OVER WITH GLARE -ROOTAGE 26-"
  },
  {
    "artist": "Snail's House",
    "genre": "SPEED CANDY",
    "id": 26087,
    "title": "お菓子の王国",
    "title_ascii": "Candy Kingdom"
  },
  {
    "artist": "BEMANI Sound Team",
    "genre": "ANNIVERSARY",
    "id": 26088,
    "title": "50th Memorial Songs -Beginning Story-",
    "title_ascii": "50th Memorial Songs -Beginning Story-"
  },
  {
    "artist": "BEMANI Sound Team",
    "genre": "ANNIVERSARY",
    "id": 26089,
    "title": "50th Memorial Songs -二人の時 ～under the cherry blossoms～-",
    "title_ascii": "50th Memorial Songs -FUTARINO TOKI under the cherry blossoms-"
  },
  {
    "artist": "BEMANI Sound Team",
    "genre": "ANNIVERSARY",
    "id": 26090,
    "title": "50th Memorial Songs -Flagship medley-",
    "title_ascii": "50th Memorial Songs -Flagship medley-"
  },
  {
    "artist": "BEMANI Sound Team",
    "genre": "ANNIVERSARY",
    "id": 26091,
    "title": "50th Memorial Songs -The BEMANI History-",
    "title_ascii": "50th Memorial Songs -The BEMANI History-"
  },
  {
    "artist": "MM",
    "genre": "EURO DYNAMITE",
    "id": 26092,
    "title": "Night! Night! Night!",
    "title_ascii": "Night! Night! Night!"
  },
  {
    "artist": "上ノ瀬つかさ",
    "genre": "IRIDESCENCE JAZZ ETUDE",
    "id": 26093,
    "title": "ruin of opals",
    "title_ascii": "ruin of opals"
  },
  {
    "artist": "DUNE & M-Project & GUHROOVY",
    "genre": "HDM",
    "id": 26094,
    "title": "Technicolour Dreams",
    "title_ascii": "Technicolour Dreams"
  },
  {
    "artist": "lapix",
    "genre": "FUTURE CORE",
    "id": 26095,
    "title": "Carry Me Away",
    "title_ascii": "Carry Me Away"
  },
  {
    "artist": "SOUND HOLIC Vs. T.Kakuta feat. Nana Takahashi",
    "genre": "MELODIC SPEED METAL",
    "id": 26096,
    "title": "ROZA DE ANDALUCIA",
    "title_ascii": "ROZA DE ANDALUCIA"
  },
  {
    "artist": "高田雅史",
    "genre": "NEW AGE",
    "id": 26097,
    "title": "ToyCube Pf.(RX-Ver.S.P.L.)",
    "title_ascii": "ToyCube Pf.(RX-Ver.S.P.L.)"
  },
  {
    "artist": "sanodg",
    "genre": "ELECTRO",
    "id": 26098,
    "title": "Sidechained Threats",
    "title_ascii": "Sidechained Threats"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\"",
    "genre": "GLITCH DUBSTEP",
    "id": 26099,
    "title": "Necroxis Girl",
    "title_ascii": "Necroxis Girl"
  },
  {
    "artist": "Maozon",
    "genre": "CYBER DRUMSTEP",
    "id": 26101,
    "title": "Geirsk?gul",
    "title_ascii": "Geirsk?gul"
  },
  {
    "artist": "C-Show",
    "genre": "JAZZY HOLIC",
    "id": 26102,
    "title": "Please Welcome Mr.C",
    "title_ascii": "Please Welcome Mr.C"
  },
  {
    "artist": "AJURIKA",
    "genre": "HARD TECHNO",
    "id": 26104,
    "title": "HARD BRAIN",
    "title_ascii": "HARD BRAIN"
  },
  {
    "artist": "Feryquitous",
    "genre": "REBIRTH OUT",
    "id": 26106,
    "title": "Visterhv",
    "title_ascii": "Visterhv"
  },
  {
    "artist": "BEMANI Sound Team \"dj TAKA\"",
    "genre": "MUSIC GAMES HARDCORE",
    "id": 26107,
    "title": "Trill auf G",
    "title_ascii": "Trill auf G"
  },
  {
    "artist": "BEMANI Sound Team \"PHQUASE\"",
    "genre": "VVV",
    "id": 26108,
    "title": "voltississimo",
    "title_ascii": "voltississimo"
  },
  {
    "artist": "BEMANI Sound Team \"S-C-U & SYUNN\"",
    "genre": "BOXINGCORE",
    "id": 26109,
    "title": "toy boxer",
    "title_ascii": "toy boxer"
  },
  {
    "artist": "DJ TECHNORCH",
    "genre": "ピタゴラス的不完全性破壊衝動音律(ハンマーによる)",
    "id": 26110,
    "title": "最小三倍完全数",
    "title_ascii": "SMALLEST 3K-PERFECT NUMBER"
  },
  {
    "artist": "BEMANI Sound Team \"Yvya × Mutsuhiko Izumi\"",
    "genre": "HARDROCK",
    "id": 26111,
    "title": "Six String Proof",
    "title_ascii": "Six String Proof"
  },
  {
    "artist": "BEMANI Sound Team \"PON\" feat.NU-KO",
    "genre": "LOVELY YOUTH",
    "id": 26112,
    "title": "おーまい！らぶりー！すうぃーてぃ！だーりん！",
    "title_ascii": "OH MY!LOVELY!SWEETY!DARLING!"
  },
  {
    "artist": "BEMANI Sound Team \"猫叉劇団\"",
    "genre": "ASYMMETRY ART",
    "id": 26113,
    "title": "Afterimage d'automne",
    "title_ascii": "Afterimage d'automne"
  },
  {
    "artist": "Akira Complex",
    "genre": "DANCE MUSIC",
    "id": 26114,
    "title": "BLACK JACKAL",
    "title_ascii": "BLACK JACKAL"
  },
  {
    "artist": "いちか",
    "genre": "BEMANIZED ROCKCORE",
    "id": 26115,
    "title": "ミッドナイト☆WAR",
    "title_ascii": "MIDNIGHT WAR"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.-G\"",
    "genre": "HARDCORE",
    "id": 27000,
    "title": "THE BRAVE MUST DIE",
    "title_ascii": "THE BRAVE MUST DIE"
  },
  {
    "artist": "BEMANI Sound Team \"T.Kakuta\" feat. 709sec. / 花たん",
    "genre": "DANCE POP DUET",
    "id": 27001,
    "title": "UNITE THE HEART",
    "title_ascii": "UNITE THE HEART"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.\" ",
    "genre": "PSYSTYLE",
    "id": 27002,
    "title": "PHASE SHIFT MANEUVER",
    "title_ascii": "PHASE SHIFT MANEUVER"
  },
  {
    "artist": "噂の怪盗少女ぷらずま★彡Prim@休業中～( _ _ ).。",
    "genre": "Hi-メランコリックコア",
    "id": 27003,
    "title": "がっつり陰キャ!? 怪盗いいんちょの億劫^^;",
    "title_ascii": "gattsuri inkya kaitouiincho no okkuu"
  },
  {
    "artist": "BEMANI Sound Team \"レ・度胸兄弟\"",
    "genre": "POLONAISE",
    "id": 27004,
    "title": "Dans la nuit de l'?ternit?",
    "title_ascii": "Dans la nuit de l'eternite"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\" feat.Fernweh",
    "genre": "HEROIC VALHALLA ROCK",
    "id": 27005,
    "title": "VALKYRIAS -英雄誕生-",
    "title_ascii": "VALKYRIAS -BIRTH OF A HERO-"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"HuΣeR feat.PON\"",
    "genre": "IIDX EDITION",
    "id": 27006,
    "title": "EXCITE",
    "title_ascii": "EXCITE"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\"",
    "genre": "Hi-GAIN ENERGY",
    "id": 27007,
    "title": "LIGHTNING STRIKES",
    "title_ascii": "LIGHTNING STRIKES"
  },
  {
    "artist": "BEMANI Sound Team \"HERO\"",
    "genre": "VERSE",
    "id": 27008,
    "title": "EROICA",
    "title_ascii": "EROICA"
  },
  {
    "artist": "BEMANI Sound Team \"SETUP from Berlin\"",
    "genre": "TECHNO",
    "id": 27009,
    "title": "TECHNO Style Essentials",
    "title_ascii": "TECHNO Style Essentials"
  },
  {
    "artist": "三代目 \"dj TAKA & DAYBREAKERS\"",
    "genre": "HIP HOP",
    "id": 27010,
    "title": "27th style",
    "title_ascii": "27th style"
  },
  {
    "artist": "BEMANI Sound Team \"setup VS 謎の勢力\"",
    "genre": "HARD D&B",
    "id": 27011,
    "title": "rough percussionythm",
    "title_ascii": "rough percussionythm"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"HuΣeR\"",
    "genre": "DRUM & BASS / HYBRID TRAP",
    "id": 27012,
    "title": "LASER CRUSTER (IGNITE REMIX)",
    "title_ascii": "LASER CRUSTER (IGNITE REMIX)"
  },
  {
    "artist": "DJ SHARPNEL feat. ￥Ｃｕスタ平",
    "genre": "特撮ハードコア",
    "id": 27013,
    "title": "錬成人間トリコロイダー",
    "title_ascii": "RENSEI NINGEN TRICOROIDER"
  },
  {
    "artist": "Ryu☆",
    "genre": "EUROBEAT",
    "id": 27014,
    "title": "Like+it!",
    "title_ascii": "Like+it!"
  },
  {
    "artist": "BEMANI Sound Team \"Sota Fujimori\"",
    "genre": "MELODIC DANCE MUSIC",
    "id": 27015,
    "title": "Hold My Hand",
    "title_ascii": "Hold My Hand"
  },
  {
    "artist": "BEMANI Sound Team \"Expander\"",
    "genre": "RIDDIM CORE",
    "id": 27016,
    "title": "STOIC HYPOTHESIS",
    "title_ascii": "STOIC HYPOTHESIS"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"PHQUASE\"",
    "genre": "DREAM DRUM'N'BASS",
    "id": 27017,
    "title": "Fly Above (Vicissitude Remix)",
    "title_ascii": "Fly Above (Vicissitude Remix)"
  },
  {
    "artist": "Wiktoria",
    "genre": "CINEMATIC VALSE",
    "id": 27018,
    "title": "華麗なる大犬円舞曲",
    "title_ascii": "Valse Brillante du Grand Chien"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\"",
    "genre": "LAPLACE CORE",
    "id": 27019,
    "title": "AKASHIC BREAK",
    "title_ascii": "AKASHIC BREAK"
  },
  {
    "artist": "ぺのれり",
    "genre": "EPIC ORCHESTRA",
    "id": 27020,
    "title": "Everlasting Message",
    "title_ascii": "Everlasting Message"
  },
  {
    "artist": "BEMANI Sound Team \"U1 overground\"",
    "genre": "ORBITALIC MOON MIXTURE",
    "id": 27021,
    "title": "Queen Kaguya",
    "title_ascii": "Queen Kaguya"
  },
  {
    "artist": "BEMANI Sound Team \"SYUNN\"",
    "genre": "FUTURE BASS",
    "id": 27022,
    "title": "Do What You Want",
    "title_ascii": "Do What You Want"
  },
  {
    "artist": "BEMANI Sound Team \"SYUNN\"",
    "genre": "DARKSTEP",
    "id": 27023,
    "title": "Lost Souls",
    "title_ascii": "Lost Souls"
  },
  {
    "artist": "BEMANI Sound Team \"Akhuta Works\" feat. Nana Takahashi",
    "genre": "GOTHIC CORE",
    "id": 27024,
    "title": "曼荼羅恋々",
    "title_ascii": "Mandala Renren"
  },
  {
    "artist": "BEMANI Sound Team \"劇団レコード\"",
    "genre": "EPIC STORY",
    "id": 27025,
    "title": "OUTER PLANETS",
    "title_ascii": "OUTER PLANETS"
  },
  {
    "artist": "BEMANI Sound Team \"TATSUYA\"",
    "genre": "TWINKLE POP",
    "id": 27026,
    "title": "魅惑のYUMMYスイーツ",
    "title_ascii": "Enchanting YUMMY sweets"
  },
  {
    "artist": "kors k",
    "genre": "Hi-TECH FULL ON",
    "id": 27029,
    "title": "Nasty Techniques",
    "title_ascii": "Nasty Techniques"
  },
  {
    "artist": "Eagle",
    "genre": "FUTURE SKOOL BREAKBEATS HARDCORE",
    "id": 27030,
    "title": "Rave Patroller",
    "title_ascii": "Rave Patroller"
  },
  {
    "artist": "kors k",
    "genre": "GARAGE",
    "id": 27031,
    "title": "Sugar Drippin'",
    "title_ascii": "Sugar Drippin'"
  },
  {
    "artist": "Xceon",
    "genre": "MS J TRANCE POP",
    "id": 27032,
    "title": "セピアの軌跡 ft. 天宮みや(少女フラクタル)",
    "title_ascii": "sepia no kiseki ft. Amamiya Miya"
  },
  {
    "artist": "Xceon",
    "genre": "JAZZ PIANO TRANCE",
    "id": 27033,
    "title": "Bow shock!!",
    "title_ascii": "Bow shock!!"
  },
  {
    "artist": "RoughSketch & TARACHINE",
    "genre": "RAVECORE",
    "id": 27034,
    "title": "T-REX vs Velociraptor (In the Far east euphoria)",
    "title_ascii": "T-REX vs Velociraptor (In the Far east euphoria)"
  },
  {
    "artist": "CANVAS feat. Quim?r",
    "genre": "MYSTICAL HARD DANCE",
    "id": 27035,
    "title": "Artist",
    "title_ascii": "Artist"
  },
  {
    "artist": "Hommarju",
    "genre": "FREEFORM HARDCORE",
    "id": 27036,
    "title": "GHOST",
    "title_ascii": "GHOST"
  },
  {
    "artist": "猫叉Master",
    "genre": "WORLD/CONTEMPORARY",
    "id": 27037,
    "title": "The Sky of Sadness",
    "title_ascii": "The Sky of Sadness"
  },
  {
    "artist": "ゴールデンボンバー",
    "genre": "RAVE",
    "id": 27038,
    "title": "令和(1991RAVE REMIX)",
    "title_ascii": "REIWA(1991RAVE REMIX)"
  },
  {
    "artist": "DJ Mass MAD Izm* feat.REO",
    "genre": "PIANO BEAT MUSIC",
    "id": 27039,
    "title": "Lords Of The Roundtable",
    "title_ascii": "Lords Of The Roundtable"
  },
  {
    "artist": "Maozon feat. Chica",
    "genre": "UPLIFTING TRANCE",
    "id": 27041,
    "title": "Rainstorm",
    "title_ascii": "Rainstorm"
  },
  {
    "artist": "Dazsta",
    "genre": "DUBSTEP/MMETAL/DJENT",
    "id": 27042,
    "title": "Drop It",
    "title_ascii": "Drop It"
  },
  {
    "artist": "lapix",
    "genre": "TRIBAL FRONTIER",
    "id": 27043,
    "title": "Primitive Vibes",
    "title_ascii": "Primitive Vibes"
  },
  {
    "artist": "lapix",
    "genre": "FUNKY GABBER",
    "id": 27044,
    "title": "Double Dribble",
    "title_ascii": "Double Dribble"
  },
  {
    "artist": "Nhato",
    "genre": "PROGRESSIVE DISCO",
    "id": 27045,
    "title": "Virus Funk",
    "title_ascii": "Virus Funk"
  },
  {
    "artist": "Nhato",
    "genre": "EUPHORIC HARDCORE",
    "id": 27046,
    "title": "Override",
    "title_ascii": "Override"
  },
  {
    "artist": "SOUND HOLIC Vs. ZYTOKINE feat. CALEN",
    "genre": "TRIBAL DANCE",
    "id": 27047,
    "title": "Voo Doo Bamboleo",
    "title_ascii": "Voo Doo Bamboleo"
  },
  {
    "artist": "Dirty Androids",
    "genre": "NEO 90's CINEMATIC TECHNO",
    "id": 27048,
    "title": "Infinity Mirror",
    "title_ascii": "Infinity Mirror"
  },
  {
    "artist": "Remixed by Masayoshi Iimori",
    "genre": "NRG",
    "id": 27049,
    "title": "灼熱Beach Side Bunny (Masayoshi Iimori Remix)",
    "title_ascii": "Shakunetsu Beach Side Bunny (Masayoshi Iimori Remix)"
  },
  {
    "artist": "DJ Shimamura",
    "genre": "HARDCORE RAVE",
    "id": 27050,
    "title": "Volcanic Dragon",
    "title_ascii": "Volcanic Dragon"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": "A-STYLE NEURO+\"スカ\"+FUNK DRUMSTEP",
    "id": 27051,
    "title": "Ska-sh All Neurons!!",
    "title_ascii": "Ska-sh All Neurons!!"
  },
  {
    "artist": "かめりあ",
    "genre": "TWERKCORE // uwu // BEATJUGGLE",
    "id": 27052,
    "title": "SCREW // owo // SCREW",
    "title_ascii": "SCREW // owo // SCREW"
  },
  {
    "artist": "OSTER project feat. かなたん",
    "genre": "JAZZ ROCK",
    "id": 27053,
    "title": "Calvados Queen",
    "title_ascii": "Calvados Queen"
  },
  {
    "artist": "OSTER project",
    "genre": "CYBER REQUIEM",
    "id": 27054,
    "title": "深淵に捧ぐレクイエム",
    "title_ascii": "Requiem for the abyss"
  },
  {
    "artist": "Y&Co.",
    "genre": "Hi-NRG",
    "id": 27055,
    "title": "NRG STAR '86 feat. 大山愛未",
    "title_ascii": "NRG STAR 86 feat. Aimi Oyama"
  },
  {
    "artist": "Remo-con",
    "genre": "TECHSTYLE",
    "id": 27056,
    "title": "Matt Silver",
    "title_ascii": "Matt Silver"
  },
  {
    "artist": "AJURIKA feat.矢吹真央",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 27058,
    "title": "Moving on",
    "title_ascii": "Moving on"
  },
  {
    "artist": "AJURIKA",
    "genre": "UK HARDCORE",
    "id": 27059,
    "title": "TRIUMPH",
    "title_ascii": "TRIUMPH"
  },
  {
    "artist": "AJURIKA",
    "genre": "PRIME BIG BEAT",
    "id": 27060,
    "title": "BEAT PRISONER",
    "title_ascii": "BEAT PRISONER"
  },
  {
    "artist": "ARM × kradness",
    "genre": "TRANCE",
    "id": 27061,
    "title": "Change Yourself",
    "title_ascii": "Change Yourself"
  },
  {
    "artist": "Masayoshi Iimori",
    "genre": "INDUSTRIAL BASS",
    "id": 27062,
    "title": "NEWALONE",
    "title_ascii": "NEWALONE"
  },
  {
    "artist": "ビートまりお",
    "genre": "BEAT MUSIC",
    "id": 27063,
    "title": "beatAffection",
    "title_ascii": "beatAffection"
  },
  {
    "artist": "Feryquitous",
    "genre": "PROGRES BEAT",
    "id": 27064,
    "title": "Friction[!]Function",
    "title_ascii": "Friction[!]Function"
  },
  {
    "artist": "Blacklolita",
    "genre": "EDM-DUBSTYLE",
    "id": 27065,
    "title": "GIGA VIOLATE",
    "title_ascii": "GIGA VIOLATE"
  },
  {
    "artist": "Crayvxn",
    "genre": "BASS HOUSE",
    "id": 27066,
    "title": "Crank It",
    "title_ascii": "Crank It"
  },
  {
    "artist": "佐野電磁",
    "genre": "DRUM & BASS",
    "id": 27067,
    "title": "Duration",
    "title_ascii": "Duration"
  },
  {
    "artist": "Sampling Masters MEGA",
    "genre": "RAVE",
    "id": 27068,
    "title": "Rave lithosphere",
    "title_ascii": "Rave lithosphere"
  },
  {
    "artist": "Remixed by Nhato",
    "genre": "HARDCORE",
    "id": 27069,
    "title": "S!ck (Nhato Remix)",
    "title_ascii": "S!ck (Nhato Remix)"
  },
  {
    "artist": "Ryu☆",
    "genre": "PROGRESSIVE TRANCE",
    "id": 27070,
    "title": "Beautiful Harmony (IIDX Mix)",
    "title_ascii": "Beautiful Harmony (IIDX Mix)"
  },
  {
    "artist": "Remixed by すわひでお & uno(IOSYS)",
    "genre": "IIDX EDITION",
    "id": 27071,
    "title": "俺ら東京さ行ぐだ",
    "title_ascii": "ora tokyo sa iguda"
  },
  {
    "artist": "上坂すみれ",
    "genre": "IIDX EDITION",
    "id": 27072,
    "title": "POP TEAM EPIC(kors k Remix)",
    "title_ascii": "POP TEAM EPIC(kors k Remix)"
  },
  {
    "artist": "Remixed by かめりあ",
    "genre": "IIDX EDITION",
    "id": 27073,
    "title": "ガヴリールドロップキック",
    "title_ascii": "Gabriel DropKick"
  },
  {
    "artist": "Tomggg",
    "genre": "エレクトロニック/エレクトロニカ/ポップ",
    "id": 27074,
    "title": "fairy cocktail",
    "title_ascii": "fairy cocktail"
  },
  {
    "artist": "Applekid",
    "genre": "DRUM'N'BASS",
    "id": 27075,
    "title": "Mel",
    "title_ascii": "Mel"
  },
  {
    "artist": "パソコン音楽クラブ",
    "genre": "DANCE POP",
    "id": 27076,
    "title": "Hyper Drive feat. ぷにぷに電機",
    "title_ascii": "Hyper Drive feat. punipunidenki"
  },
  {
    "artist": "YUTO",
    "genre": "TRAP",
    "id": 27077,
    "title": "Theory",
    "title_ascii": "Theory"
  },
  {
    "artist": "Yamato",
    "genre": "BIGBEAT / DUBSTEP",
    "id": 27078,
    "title": "Level 2",
    "title_ascii": "Level 2"
  },
  {
    "artist": "Fujishiro feat.KNA",
    "genre": "J-POP",
    "id": 27079,
    "title": "And-RoiD",
    "title_ascii": "And-RoiD"
  },
  {
    "artist": "中島由貴 × いちか",
    "genre": "KILLER PUNK",
    "id": 27080,
    "title": "ランカーキラーガール",
    "title_ascii": "Ranker Killer Girl"
  },
  {
    "artist": "Nhato Vs. MK",
    "genre": "EMO STEP",
    "id": 27081,
    "title": "VIBRΛ",
    "title_ascii": "VIBRA"
  },
  {
    "artist": "KSUKE",
    "genre": "FESTIVAL TRAP",
    "id": 27082,
    "title": "Ohayo!",
    "title_ascii": "Ohayo!"
  },
  {
    "artist": "D? D? MOUSE",
    "genre": "ELECTRO NU DISCO",
    "id": 27083,
    "title": "Silly Love",
    "title_ascii": "Silly Love"
  },
  {
    "artist": "fallen shepherd ft. ricono",
    "genre": "DJENT STEP",
    "id": 27084,
    "title": "Inferno of Fomalhaut",
    "title_ascii": "Inferno of Fomalhaut"
  },
  {
    "artist": "librarians of Rootage (Ripnte, Stampa and Cleep)",
    "genre": "CHARACTER SONG",
    "id": 27087,
    "title": "開きたまえ！Next stAge！",
    "title_ascii": "Hirakitamae! Next stAge!"
  },
  {
    "artist": "Remixed by BlackY",
    "genre": "PDM",
    "id": 27088,
    "title": "ピアノ協奏曲第1番”蠍火” (BlackY Remix)",
    "title_ascii": "Pf Concerto No.1 \"Anti-Ares\" BlackY Remix"
  },
  {
    "artist": "BEMANI Sound Team \"SPIRITUAL RIDE\"",
    "genre": "ALTANATIVE ROCK",
    "id": 27089,
    "title": "Horizons of Promise",
    "title_ascii": "Horizons of Promise"
  },
  {
    "artist": "Relect",
    "genre": "HARD PSY",
    "id": 27090,
    "title": "Shiva",
    "title_ascii": "Shiva"
  },
  {
    "artist": "TAKU INOUE",
    "genre": "FUTURE BASS",
    "id": 27092,
    "title": "Backyard Stars",
    "title_ascii": "Backyard Stars"
  },
  {
    "artist": "Masqed Pierrot",
    "genre": "PIERROT CORE",
    "id": 27094,
    "title": "THE F∀UST",
    "title_ascii": "THE FAUST"
  },
  {
    "artist": "nora2r",
    "genre": "HARDCORE",
    "id": 27095,
    "title": "Smashing Wedge",
    "title_ascii": "Smashing Wedge"
  },
  {
    "artist": "Blacklolita",
    "genre": "NEO DIGITAL FUTURE",
    "id": 27096,
    "title": "Advent Infamous",
    "title_ascii": "Advent Infamous"
  },
  {
    "artist": "banvox",
    "genre": "DANCE MUSIC",
    "id": 27097,
    "title": "Sellout",
    "title_ascii": "Sellout"
  },
  {
    "artist": "Masayoshi Iimori",
    "genre": "SWITCH UP",
    "id": 27098,
    "title": "Punching Down (IIDX Mix)",
    "title_ascii": "Punching Down (IIDX Mix)"
  },
  {
    "artist": "Pa's Lam System",
    "genre": "FUTURE BASS",
    "id": 27100,
    "title": "If",
    "title_ascii": "If"
  },
  {
    "artist": "KOTONOHOUSE",
    "genre": "FUTURE JERSEY",
    "id": 27101,
    "title": "take me higher",
    "title_ascii": "take me higher"
  },
  {
    "artist": "iconoclasm",
    "genre": "ANTHEM TRANCE",
    "id": 27102,
    "title": "Vinculum stellarum",
    "title_ascii": "Vinculum stellarum"
  },
  {
    "artist": "BEMANI Sound Team \"DJ TOTTO\"",
    "genre": "空想ファンタジーシリーズ",
    "id": 27103,
    "title": "眠りの国のステラ",
    "title_ascii": "Stella in Dreamland"
  },
  {
    "artist": "BEMANI Sound Team \"Sota F.\" feat.いちか",
    "genre": "HYPER POP",
    "id": 27105,
    "title": "ラブキラ☆スプラッシュ",
    "title_ascii": "Love Kira Splash"
  },
  {
    "artist": "BEMANI Sound Team \"Qrispy Joybox\" feat.いちか",
    "genre": "TWINKLE POP",
    "id": 27106,
    "title": "Sparkle Smilin'",
    "title_ascii": "Sparkle Smilin'"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR Vs. SYUNN\" feat.いちか",
    "genre": "STYLISH CROSSOVER",
    "id": 27107,
    "title": "狂水一華",
    "title_ascii": "KYOSUI ICHIKA"
  },
  {
    "artist": "Yuta Imai",
    "genre": "SPOOKY",
    "id": 27108,
    "title": "Into The Madness",
    "title_ascii": "Into The Madness"
  },
  {
    "artist": "かめりあ",
    "genre": "CETACEA HDM",
    "id": 27109,
    "title": "ORCA",
    "title_ascii": "ORCA"
  },
  {
    "artist": "アリスシャッハと魔法の楽団",
    "genre": "PIANO CHRONICLE",
    "id": 27110,
    "title": "バッドエンド・シンドローム",
    "title_ascii": "BADEND SYNDROME"
  },
  {
    "artist": "TAKU INOUE",
    "genre": "DRUM'N'BASS",
    "id": 27112,
    "title": "Forgetting Machine",
    "title_ascii": "Forgetting Machine"
  },
  {
    "artist": "Zektbach",
    "genre": "バトルダンス",
    "id": 27113,
    "title": "シャムシールの舞",
    "title_ascii": "shamshir dance"
  },
  {
    "artist": "SYUNN",
    "genre": "DRUMSTEP",
    "id": 27114,
    "title": "Megalara Garuda",
    "title_ascii": "Megalara Garuda"
  },
  {
    "artist": "BEMANI Sound Team \"setup\"",
    "genre": "HARD STACC",
    "id": 27116,
    "title": "Ypsilon",
    "title_ascii": "Ypsilon"
  },
  {
    "artist": "BEMANI Sound Team \"dj TAKA\" feat.のの",
    "genre": "GIRLY POP",
    "id": 27117,
    "title": "Jetcoaster Windy",
    "title_ascii": "Jetcoaster Windy"
  },
  {
    "artist": "Remixed by Ryu☆",
    "genre": "THE 4TH",
    "id": 27203,
    "title": "Clione (Ryu☆ Remix)",
    "title_ascii": "Clione (Ryu* Remix)"
  },
  {
    "artist": "LA BAILARINA☆Prim",
    "genre": "Hi-歌謡タンゴ",
    "id": 28000,
    "title": "涙のテ・エストラーニョ・ムーチョ",
    "title_ascii": "TE EXTRANO MUCHO"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"L.E.D.\" & IOSYS",
    "genre": "IIDX EDITION",
    "id": 28001,
    "title": "Romanticが止まらない",
    "title_ascii": "ROMANTIC GA TOMARANAI"
  },
  {
    "artist": "Yuta Imai Vs. BEMANI Sound Team \"L.E.D.-G\"",
    "genre": "HARD MIXTURE",
    "id": 28002,
    "title": "THE PEERLESS UNDER HEAVEN",
    "title_ascii": "THE PEERLESS UNDER HEAVEN"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\"",
    "genre": "HARD TRANCE",
    "id": 28004,
    "title": "無意識のフィロソフィア",
    "title_ascii": "Unconscious Philosophy"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\" respect for D.J.Amuro",
    "genre": "RENAISSANCE",
    "id": 28005,
    "title": "∀",
    "title_ascii": "TURN A"
  },
  {
    "artist": "Covered by BEMANI Sound Team \"HuΣeR\" feat. Mayumi Morinaga",
    "genre": "IIDX EDITION",
    "id": 28006,
    "title": "紅蓮華",
    "title_ascii": "GURENGE"
  },
  {
    "artist": "CANVAS feat. Quim?r & BEMANI Sound Team \"L.E.D.-G\"",
    "genre": "HAPPY BISTRO CORE",
    "id": 28007,
    "title": "LOCUS OF THE TRAVEL",
    "title_ascii": "LOCUS OF THE TRAVEL"
  },
  {
    "artist": "ぺのれり vs. BEMANI Sound Team \"HuΣeR\"",
    "genre": "CROSSOVER",
    "id": 28008,
    "title": "ディスコルディア",
    "title_ascii": "Discordia"
  },
  {
    "artist": "BEMANI Sound Team \"Trance Liquid\"",
    "genre": "TRANCE",
    "id": 28009,
    "title": "of the first magnitude",
    "title_ascii": "of the first magnitude"
  },
  {
    "artist": "BEMANI Sound Team \"Trance Liquid\"",
    "genre": "TRANCE",
    "id": 28010,
    "title": "X-ray binary",
    "title_ascii": "X-ray binary"
  },
  {
    "artist": "BEMANI Sound Team \"D.J.Amuro\"",
    "genre": "WHITE OUT",
    "id": 28011,
    "title": "-65℃",
    "title_ascii": "-65 degrees Celsius"
  },
  {
    "artist": "BEMANI Sound Team \"Sota Fujimori\"",
    "genre": "CYBER PUNK",
    "id": 28012,
    "title": "Breakin' Rules",
    "title_ascii": "Breakin' Rules"
  },
  {
    "artist": "BEMANI Sound Team \"Sota Fujimori\"",
    "genre": "THE 4TH",
    "id": 28013,
    "title": "Hands Up feat. kradness BEMANI Sound Team \"Sota Fujimori\" Remix",
    "title_ascii": "Hands Up feat. kradness BEMANI Sound Team \"Sota Fujimori\" Remix"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\"",
    "genre": "J-DANCE FUSION",
    "id": 28014,
    "title": "Euphoric Lagoon",
    "title_ascii": "Euphoric Lagoon"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\" feat. 猫体質",
    "genre": "BLOOM ROCK",
    "id": 28015,
    "title": "儚き恋の華",
    "title_ascii": "Hakanaki koi no hana"
  },
  {
    "artist": "BEMANI Sound Team \"Coyaan\"",
    "genre": "JAPANESE TECH BREAKS",
    "id": 28016,
    "title": "水鏡の異界",
    "title_ascii": "Suikyo no Ikai"
  },
  {
    "artist": "BEMANI Sound Team \"U1 overground\"",
    "genre": "ORBITALIC WORLD MUSIC",
    "id": 28017,
    "title": "P?rvat?",
    "title_ascii": "Parvati"
  },
  {
    "artist": "BEMANI Sound Team \"DARK TRAIN\"",
    "genre": "DARK TECHNO",
    "id": 28018,
    "title": "S-Bahn",
    "title_ascii": "S-Bahn"
  },
  {
    "artist": "BEMANI Sound Team \"Captain Sonic\"",
    "genre": "BIGCORE",
    "id": 28019,
    "title": "COSMIC RAY",
    "title_ascii": "COSMIC RAY"
  },
  {
    "artist": "BEMANI Sound Team \"Akhuta Works\" feat. mami",
    "genre": "BALKANIC ROCK",
    "id": 28020,
    "title": "乱膳の舞姫",
    "title_ascii": "Feast Of Battle Ladies"
  },
  {
    "artist": "BEMANI Sound Team \"Yvya\"",
    "genre": "PROGRESSIVE METAL",
    "id": 28021,
    "title": "Vitrum",
    "title_ascii": "Vitrum"
  },
  {
    "artist": "BEMANI Sound Team \"劇団レコード\" feat.Risa Yuzuki",
    "genre": "LAST FRONTIER",
    "id": 28022,
    "title": "霧幻メモリア",
    "title_ascii": "MUGEN MEMORIA"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\" & kors k",
    "genre": "THEME SONG",
    "id": 28023,
    "title": "Winner's Proof ft. KANASA from bless4",
    "title_ascii": "Winner's Proof ft. KANASA from bless4"
  },
  {
    "artist": "神楽改",
    "genre": "KAMIKURA",
    "id": 28024,
    "title": "Sinus Iridum",
    "title_ascii": "Sinus Iridum"
  },
  {
    "artist": "kors k",
    "genre": "JUNGLE TERROR",
    "id": 28025,
    "title": "Empire of Fury",
    "title_ascii": "Empire of Fury"
  },
  {
    "artist": "kors k",
    "genre": "LOVERS CANDY RAVE",
    "id": 28026,
    "title": "Rub-a Dub-a",
    "title_ascii": "Rub-a Dub-a"
  },
  {
    "artist": "kors k feat.Hboy",
    "genre": "Hi-TECH / PSY CORE",
    "id": 28027,
    "title": "Tiempo Loco",
    "title_ascii": "Tiempo Loco"
  },
  {
    "artist": "Xceon",
    "genre": "-和- EURO TRANCE",
    "id": 28028,
    "title": "水無月の雫 ft. 小林まな",
    "title_ascii": "minazuki no shizuku ft. kobayashi mana"
  },
  {
    "artist": "Xceon",
    "genre": "ACID LATIN JAZZ",
    "id": 28029,
    "title": "Rubrum Piano",
    "title_ascii": "Rubrum Piano"
  },
  {
    "artist": "DJ TECHNORCH & RoughSketch",
    "genre": "DARKSTEP",
    "id": 28030,
    "title": "閠槞彁の願い",
    "title_ascii": "GRK NO NEGAI"
  },
  {
    "artist": "らっぷびと Prod. by uno",
    "genre": "HIP HOP",
    "id": 28031,
    "title": "Midnight Drive",
    "title_ascii": "Midnight Drive"
  },
  {
    "artist": "まろん feat. キャサリン",
    "genre": "HAPPY COUNTRY CORE",
    "id": 28032,
    "title": "Lovely Howdy Cowboy!!",
    "title_ascii": "Lovely Howdy Cowboy!!"
  },
  {
    "artist": "nora2r",
    "genre": "MAKINA",
    "id": 28033,
    "title": "Frisk And Squeak",
    "title_ascii": "Frisk And Squeak"
  },
  {
    "artist": "ARM (IOSYS) × cotowari ft. anporin",
    "genre": "K-POP",
    "id": 28034,
    "title": "Party Starter",
    "title_ascii": "Party Starter"
  },
  {
    "artist": "fallen shepherd × cotowari ft. nayuta",
    "genre": "BULGARIAN CORE",
    "id": 28035,
    "title": "MEGAERA",
    "title_ascii": "MEGAERA"
  },
  {
    "artist": "The 4th feat.ここなつ",
    "genre": "J-CORE",
    "id": 28036,
    "title": "Here We Are",
    "title_ascii": "Here We Are"
  },
  {
    "artist": "Remixed by Ryu☆",
    "genre": "CAPTIVATE",
    "id": 28037,
    "title": "IIDX RED Ending (Ryu☆Remix)",
    "title_ascii": "IIDX RED Ending (Ryu* Remix)"
  },
  {
    "artist": "The 4th",
    "genre": "THE 4TH",
    "id": 28038,
    "title": "The Wind of China Express(The 4th Mashup)",
    "title_ascii": "The Wind of China Express(The 4th Mashup)"
  },
  {
    "artist": "Maozon feat. Chica",
    "genre": "TROPICAL ELECTRO HOUSE",
    "id": 28039,
    "title": "WAKE UP NOW",
    "title_ascii": "WAKE UP NOW"
  },
  {
    "artist": "Maozon",
    "genre": "CYBER LIQUID FUNK",
    "id": 28040,
    "title": "As You Want",
    "title_ascii": "As You Want"
  },
  {
    "artist": "Dazsta",
    "genre": "DUBSTEP",
    "id": 28041,
    "title": "Rowdy",
    "title_ascii": "Rowdy"
  },
  {
    "artist": "C-Show",
    "genre": "HOLIC",
    "id": 28042,
    "title": "Swarm Of Scarabs",
    "title_ascii": "Swarm Of Scarabs"
  },
  {
    "artist": "Snail's House",
    "genre": "FANTASY TOYPOP",
    "id": 28043,
    "title": "魔法のかくれんぼ",
    "title_ascii": "magical hide&seek"
  },
  {
    "artist": "Nhato",
    "genre": "ELECTRO FUNK",
    "id": 28044,
    "title": "Don't Stop The Music feat. Kanae Asaba",
    "title_ascii": "Don't Stop The Music feat. Kanae Asaba"
  },
  {
    "artist": "Nhato",
    "genre": "CELTIC TRANCE STEP",
    "id": 28045,
    "title": "Dawn Saga",
    "title_ascii": "Dawn Saga"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "ORIENTAL TRANCE",
    "id": 28046,
    "title": "AMRITA -不滅ノ花-",
    "title_ascii": "AMRITA -Fumetsu no Hana-"
  },
  {
    "artist": "Dirty Androids",
    "genre": "MOROCCAN CROSSOVER",
    "id": 28047,
    "title": "Farewell to Marrakech",
    "title_ascii": "Farewell to Marrakech"
  },
  {
    "artist": "Feryquitous",
    "genre": "CONTEMPORARY SALSA",
    "id": 28048,
    "title": "Danza Aestas",
    "title_ascii": "Danza Aestas"
  },
  {
    "artist": "KO3 & Relect",
    "genre": "ARABIC HARD RITUAL",
    "id": 28049,
    "title": "Ritual of Anubis",
    "title_ascii": "Ritual of Anubis"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": "ポルカ2020",
    "id": 28050,
    "title": "POL?AMAИIA",
    "title_ascii": "POLKAMANIA"
  },
  {
    "artist": "かめりあ",
    "genre": "BIG BEAT",
    "id": 28051,
    "title": "ASIAN VIRTUAL REALITIES (MELTING TOGETHER IN DAZZLING DARKNESS)",
    "title_ascii": "ASIAN VIRTUAL REALITIES (MELTING TOGETHER IN DAZZLING DARKNESS)"
  },
  {
    "artist": "OSTER project feat. そらこ",
    "genre": "FRENCH POP",
    "id": 28052,
    "title": "犬に雨傘",
    "title_ascii": "Dog and umbrella"
  },
  {
    "artist": "OSTER project",
    "genre": "BIGBAND JAZZ",
    "id": 28053,
    "title": "innocent revolver",
    "title_ascii": "innocent revolver"
  },
  {
    "artist": "Y&Co. feat. 大山愛未",
    "genre": "80s EUROBEAT",
    "id": 28054,
    "title": "So Punky",
    "title_ascii": "So Punky"
  },
  {
    "artist": "REMO-CON",
    "genre": "NU-NRG",
    "id": 28055,
    "title": "Viridian",
    "title_ascii": "Viridian"
  },
  {
    "artist": "Hommarju",
    "genre": "DRUMSTEP / RAGGATEK",
    "id": 28056,
    "title": "Jungle Eater",
    "title_ascii": "Jungle Eater"
  },
  {
    "artist": "AJURIKA",
    "genre": "PSYCHEDELIC TRANCE",
    "id": 28057,
    "title": "LAST DAY",
    "title_ascii": "LAST DAY"
  },
  {
    "artist": "AJURIKA",
    "genre": "DRUM STEP",
    "id": 28058,
    "title": "BIGソムタム",
    "title_ascii": "BIG SOM TUM"
  },
  {
    "artist": "AJURIKA feat.SAK.",
    "genre": "HYPER TECHNO",
    "id": 28059,
    "title": "Burning Flame",
    "title_ascii": "Burning Flame"
  },
  {
    "artist": "Blacklolita",
    "genre": "NEO RUSSIAN FUTURE",
    "id": 28060,
    "title": "GIGA RAID",
    "title_ascii": "GIGA RAID"
  },
  {
    "artist": "callasoiled",
    "genre": "BREAKCORE",
    "id": 28061,
    "title": "rommmo",
    "title_ascii": "rommmo"
  },
  {
    "artist": "削除 feat. 削除",
    "genre": "MEXICAN DRUMSTEP",
    "id": 28062,
    "title": "Para siempre",
    "title_ascii": "Para siempre"
  },
  {
    "artist": "m1dy",
    "genre": "TOKYO STYLE SPEEDCORE",
    "id": 28063,
    "title": "Brahma",
    "title_ascii": "Brahma"
  },
  {
    "artist": "Masayoshi Iimori",
    "genre": "UPTEMPO RAW",
    "id": 28064,
    "title": "Ah Hah Yeah",
    "title_ascii": "Ah Hah Yeah"
  },
  {
    "artist": "Juggernaut.",
    "genre": "HARDCORE",
    "id": 28065,
    "title": "apo:llioth",
    "title_ascii": "apo:llioth"
  },
  {
    "artist": "パソコン音楽クラブ",
    "genre": "DANCE POP",
    "id": 28066,
    "title": "Explorer feat. ぷにぷに電機",
    "title_ascii": "Explorer feat. punipunidenki"
  },
  {
    "artist": "PARKGOLF",
    "genre": "DRUM'N'BASS",
    "id": 28067,
    "title": "Overslept",
    "title_ascii": "Overslept"
  },
  {
    "artist": "さよひめぼう",
    "genre": "BALEARIC",
    "id": 28068,
    "title": "Mars beach",
    "title_ascii": "Mars beach"
  },
  {
    "artist": "Pizuya's Cell",
    "genre": "ROCK",
    "id": 28069,
    "title": "Tell me what you wish feat.らっぷびと",
    "title_ascii": "Tell me what you wish feat. Rapbit"
  },
  {
    "artist": "lapix",
    "genre": "HiTECH FUSION",
    "id": 28070,
    "title": "Ocean Blue feat. Luschel",
    "title_ascii": "Ocean Blue feat. Luschel"
  },
  {
    "artist": "lapix",
    "genre": "HARD LATIN",
    "id": 28071,
    "title": "Rosa azuL",
    "title_ascii": "Rosa azuL"
  },
  {
    "artist": "LADY'S ONLY",
    "genre": "HYBRID BASSLINE",
    "id": 28072,
    "title": "When I Met U",
    "title_ascii": "When I Met U"
  },
  {
    "artist": "BlackYooh vs. siromaru",
    "genre": "SYMPHONIC SPEED SCHRANZ",
    "id": 28073,
    "title": "BLACK or WHITE?",
    "title_ascii": "BLACK or WHITE?"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"TAG feat. PON\"",
    "genre": "IIDX EDITION",
    "id": 28074,
    "title": "新宝島",
    "title_ascii": "shintakarajima"
  },
  {
    "artist": "Remixed by まろん feat. ricono",
    "genre": "IIDX EDITION",
    "id": 28075,
    "title": "TOMORROW",
    "title_ascii": "TOMORROW"
  },
  {
    "artist": "Snail's House",
    "genre": "PLUS ONE",
    "id": 28076,
    "title": "Zenith",
    "title_ascii": "Zenith"
  },
  {
    "artist": "Yuta Imai",
    "genre": "HARDSTYLE",
    "id": 28077,
    "title": "HIGH VOLTAGE",
    "title_ascii": "HIGH VOLTAGE"
  },
  {
    "artist": "青龍×Eagle",
    "genre": "THE 4TH",
    "id": 28078,
    "title": "3!dolon Forc3",
    "title_ascii": "3!dolon Forc3"
  },
  {
    "artist": "TORIENA",
    "genre": "CHIP RAVE",
    "id": 28079,
    "title": "Chewingood!!!",
    "title_ascii": "Chewingood!!!"
  },
  {
    "artist": "Hommarju",
    "genre": "UK HARDCORE",
    "id": 28080,
    "title": "Crazy Jackpot",
    "title_ascii": "Crazy Jackpot"
  },
  {
    "artist": "上ノ瀬つかさ",
    "genre": "SPUKWALZER",
    "id": 28081,
    "title": "二人ノ廃城幽踊宴",
    "title_ascii": "A Revenant Ball For Two In An Abandoned Castle"
  },
  {
    "artist": "KOTONOHOUSE",
    "genre": "MOE CORE",
    "id": 28082,
    "title": "Sugarplum",
    "title_ascii": "Sugarplum"
  },
  {
    "artist": "Crayvxn",
    "genre": "SPEED HOUSE",
    "id": 28083,
    "title": "That Feeling",
    "title_ascii": "That Feeling"
  },
  {
    "artist": "BEMANI Sound Team \"神\"",
    "genre": "X",
    "id": 28084,
    "title": "Ignis†Ir?",
    "title_ascii": "Ignis+Irae"
  },
  {
    "artist": "BEMANI Sound Team \"Trance Liquid\"",
    "genre": "OLD FASHIONED",
    "id": 28085,
    "title": "OTOKOZAKA",
    "title_ascii": "OTOKOZAKA"
  },
  {
    "artist": "kors k vs MAD CHILD",
    "genre": "HDM",
    "id": 28086,
    "title": "Neo Heritage",
    "title_ascii": "Neo Heritage"
  },
  {
    "artist": "Remixed by xi",
    "genre": "LIFE STREAM",
    "id": 28087,
    "title": "SOLID STATE SQUAD -RISEN RELIC REMIX-",
    "title_ascii": "SOLID STATE SQUAD -RISEN RELIC REMIX-"
  },
  {
    "artist": "Remixed by kors k",
    "genre": "IIDX ANTHEM REVIVAL",
    "id": 28088,
    "title": "ABSOLUTE (kors k Remix)",
    "title_ascii": "ABSOLUTE (kors k Remix)"
  },
  {
    "artist": "Remixed by Snail's House",
    "genre": "CANDY RAVE BASS",
    "id": 28089,
    "title": "smooooch・∀・ (Snail's House Remix) ",
    "title_ascii": "smooooch (Snail's House Remix)"
  },
  {
    "artist": "かめりあ feat. ななひら",
    "genre": ".+:☆ BAD FUTURE ☆:+.",
    "id": 28090,
    "title": "バッド・スイーツ、バッド・ドリーム",
    "title_ascii": "Bad sweets, bad dreams"
  },
  {
    "artist": "OSTER project feat. かなたん",
    "genre": "BRAVE ANTHEM",
    "id": 28091,
    "title": "世界の果てに約束の凱歌を -ReUnion-",
    "title_ascii": "promised victory song -ReUnion-"
  },
  {
    "artist": "BEMANI Sound Team \"あさき隊\"",
    "genre": "ROCK",
    "id": 28092,
    "title": "ここからよろしく大作戦143",
    "title_ascii": "Operate143"
  },
  {
    "artist": "DJ TOTTO VS 兎々",
    "genre": "KUDOS CORE",
    "id": 28093,
    "title": "伐折羅-vajra-",
    "title_ascii": "VAJRA"
  },
  {
    "artist": "BEMANI Sound Team \"Sota Fujimori\"",
    "genre": "EPIC TRANCE",
    "id": 28094,
    "title": "CONNECT-",
    "title_ascii": "CONNECT-"
  },
  {
    "artist": "Osamu Kubota",
    "genre": "PROGRESSIVE SWING",
    "id": 28095,
    "title": "Scandal",
    "title_ascii": "Scandal"
  },
  {
    "artist": "Yamato",
    "genre": "DRUMSTEP / DnB",
    "id": 28096,
    "title": "Level 3",
    "title_ascii": "Level 3"
  },
  {
    "artist": "BEMANI Sound Team \"Sota F.\"",
    "genre": "BPL EDM",
    "id": 28098,
    "title": "BEMANI PRO LEAGUE Theme",
    "title_ascii": "BEMANI PRO LEAGUE Theme"
  },
  {
    "artist": "Remixed by かめりあ",
    "genre": "HUMAN AUTOMATION",
    "id": 28099,
    "title": "冥 (かめりあ's \"甦\" Remix) ",
    "title_ascii": "MEI (Camellia's \"SO [Rebirth]\" Remix)"
  },
  {
    "artist": "kors k",
    "genre": "EXPERIMENTAL EUROBEAT",
    "id": 28100,
    "title": "Fire Beat",
    "title_ascii": "Fire Beat"
  },
  {
    "artist": "sanodg",
    "genre": "TECH HOUSE",
    "id": 28101,
    "title": "Playball",
    "title_ascii": "Playball"
  },
  {
    "artist": "SLAKE",
    "genre": "TECHNO",
    "id": 28102,
    "title": "DENIM",
    "title_ascii": "DENIM"
  },
  {
    "artist": "かなたん,アマギセーラ,ぁゅ by BEMANI Sound Team \"藤森崇多\"",
    "genre": "JAPANESQUE",
    "id": 28109,
    "title": "MA・TSU・RI",
    "title_ascii": "MATSURI"
  },
  {
    "artist": "Jonny Dynamite!,Lisa - paint with stars -,Rio Hiiragi by BEMANI",
    "genre": "ORBITALIC ELECTRIC MUSIC",
    "id": 28110,
    "title": "MOVE! (We Keep It Movin')",
    "title_ascii": "MOVE! (We Keep It Movin')"
  },
  {
    "artist": "koyomi,星野奏子 by BEMANI Sound Team \"TAKA\"",
    "genre": "HEAVY METAL",
    "id": 28111,
    "title": "LIKE A VAMPIRE",
    "title_ascii": "LIKE A VAMPIRE"
  },
  {
    "artist": "すわひでお,秋成,かぼちゃ,藍月なくる,NU-KO by BEMANI Sound Team ",
    "genre": "オンセン?ヒーロー",
    "id": 28112,
    "title": "スーパー戦湯ババンバーン",
    "title_ascii": "SUPER BATTLE BATH BABAN-BURN"
  },
  {
    "artist": "Sana,ATSUMI UEDA by BEMANI Sound Team \"PON\"",
    "genre": "RAVE STEP",
    "id": 28113,
    "title": "Globe Glitter",
    "title_ascii": "Globe Glitter"
  },
  {
    "artist": "Mayumi Morinaga,Fernweh by BEMANI Sound Team \"L.E.D. & HuΣeR\"",
    "genre": "IIDX SOUNDS",
    "id": 28114,
    "title": "DUAL STRIKER",
    "title_ascii": "DUAL STRIKER"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\"",
    "genre": "STYLISH FUTURE",
    "id": 28117,
    "title": "Rejection Girl",
    "title_ascii": "Rejection Girl"
  },
  {
    "artist": "BEMANI Sound Team “Coyaan”",
    "genre": "ORIENTAL FUTURE BASS",
    "id": 28204,
    "title": "Amabie",
    "title_ascii": "Amabie"
  },
  {
    "artist": "NU-KO",
    "genre": "ANIMA SONG",
    "id": 28205,
    "title": "朱と碧のランページ",
    "title_ascii": "Aka to Ao no Rampage"
  },
  {
    "artist": "ZERO+ZIBA",
    "genre": "RUINOUS SPIRITUALS",
    "id": 28207,
    "title": "Remain",
    "title_ascii": "Remain"
  },
  {
    "artist": "あさき",
    "genre": "LAMENTO",
    "id": 28208,
    "title": "雫",
    "title_ascii": "Shizuku"
  },
  {
    "artist": "Sana",
    "genre": "UCHU-RYOKOU",
    "id": 28210,
    "title": "Space Dog",
    "title_ascii": "Space Dog"
  },
  {
    "artist": "BEMANI Sound Team \"S-C-U vs L.E.D.\"",
    "genre": "HARD ELECTRIC POP",
    "id": 29000,
    "title": "LIVE DRIVING!! feat. 花たん",
    "title_ascii": "LIVE DRIVING!! feat. Hanatan"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.\"",
    "genre": "HARDPSY",
    "id": 29001,
    "title": "SOLID WYVERN",
    "title_ascii": "SOLID WYVERN"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.\"",
    "genre": "NEUROFUNK",
    "id": 29002,
    "title": "GRAVITON",
    "title_ascii": "GRAVITON"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.\"",
    "genre": "LIGHTNING EUROBEAT",
    "id": 29003,
    "title": "PLASMA SOUL NIGHT feat. Nana Takahashi / 709sec.",
    "title_ascii": "PLASMA SOUL NIGHT feat. Nana Takahashi / 709sec."
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\" feat.ゆきまめ",
    "genre": "HEALING FUTURE",
    "id": 29005,
    "title": "HEARTACHE",
    "title_ascii": "HEARTACHE"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\"",
    "genre": "STYLISH COLOUR",
    "id": 29006,
    "title": "Onyx",
    "title_ascii": "Onyx"
  },
  {
    "artist": "BEMANI Sound Team \"dj Hellix\"",
    "genre": "IRREGULAR OMNIBUS HARDCORE",
    "id": 29007,
    "title": "ALTERNATOR",
    "title_ascii": "ALTERNATOR"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR × Yvya\" feat.紫村 花澄",
    "genre": "EMOTIONAL J-POP",
    "id": 29008,
    "title": "ANEMONE",
    "title_ascii": "ANEMONE"
  },
  {
    "artist": "BEMANI Sound Team \"dj TAKA\" feat.nana hatori",
    "genre": "TRANCE",
    "id": 29009,
    "title": "Tail Lights",
    "title_ascii": "Tail Lights"
  },
  {
    "artist": "BEMANI Sound Team \"D.J.Amuro\"",
    "genre": "BLACK OUT",
    "id": 29010,
    "title": "Binary Black Hole",
    "title_ascii": "Binary Black Hole"
  },
  {
    "artist": "Absolute The 4th",
    "genre": "BIG ANTHEM",
    "id": 29011,
    "title": "Divine Heaven",
    "title_ascii": "Divine Heaven"
  },
  {
    "artist": "lapix ∞ BEMANI Sound Team \"Sota Fujimori\"",
    "genre": "ハイテックトキオ",
    "id": 29012,
    "title": "ハイテックトキオ",
    "title_ascii": "HiTECH TOKIO"
  },
  {
    "artist": "BEMANI Sound Team \"Sota F.\"",
    "genre": "FUTURE POP",
    "id": 29013,
    "title": "AMICABLE",
    "title_ascii": "AMICABLE"
  },
  {
    "artist": "BEMANI Sound Team \"TAG\"",
    "genre": "EMOTIONAL SENTENCE -INSTRUMENTAL-",
    "id": 29014,
    "title": "ILAYZA",
    "title_ascii": "ILAYZA"
  },
  {
    "artist": "BEMANI Sound Team \"PHQUASE\" feat.ぁゅ",
    "genre": "ALTERNATIVE DANCE CORE",
    "id": 29015,
    "title": "ウツシミウツシ",
    "title_ascii": "transfer reflection"
  },
  {
    "artist": "BEMANI Sound Team \"L.E.D.-G\"",
    "genre": "EUPHORIC HARDSTYLE",
    "id": 29016,
    "title": "SPARK IN THE NIGHT",
    "title_ascii": "SPARK IN THE NIGHT"
  },
  {
    "artist": "BEMANI Sound Team \"Virkato Wakhmaninov\"",
    "genre": "THRENODY",
    "id": 29017,
    "title": "ピアノ独奏無言歌 \"灰燼\"",
    "title_ascii": "Lied ohne Worte \"Asche-Traum\""
  },
  {
    "artist": "BEMANI Sound Team \"Captain Sonic\"",
    "genre": "CYBERPUNK",
    "id": 29018,
    "title": "DISPARATE",
    "title_ascii": "DISPARATE"
  },
  {
    "artist": "BEMANI Sound Team \"SYUNN\"",
    "genre": "FUTURE BASS",
    "id": 29019,
    "title": "Pout",
    "title_ascii": "Pout"
  },
  {
    "artist": "BEMANI Sound Team \"謎の宇宙人スペースX\"",
    "genre": "ABDUCTION BEAT",
    "id": 29020,
    "title": "DREAM OF SPACE UFO ABDUCTION",
    "title_ascii": "DREAM OF SPACE UFO ABDUCTION"
  },
  {
    "artist": "BEMANI Sound Team \"Yvya\"",
    "genre": "PROGRESSIVE METAL",
    "id": 29021,
    "title": "Lawes's Parotia",
    "title_ascii": "Lawes's Parotia"
  },
  {
    "artist": "BEMANI Sound Team \"劇団レコード\"",
    "genre": "STORMY SEA",
    "id": 29022,
    "title": "PIRATES BLADE",
    "title_ascii": "PIRATES BLADE"
  },
  {
    "artist": "BEMANI Sound Team \"劇団レコード\"",
    "genre": "ADVENTURE TRIP",
    "id": 29023,
    "title": "Legendary Treasures",
    "title_ascii": "Legendary Treasures"
  },
  {
    "artist": "BEMANI Sound Team \"ZAQUVA\"",
    "genre": "VARIABLE FUTURE BASS",
    "id": 29024,
    "title": "Prohibited Props",
    "title_ascii": "Prohibited Props"
  },
  {
    "artist": "Eagle",
    "genre": "MELODIC RIDDIM",
    "id": 29025,
    "title": "Purple Perplex",
    "title_ascii": "Purple Perplex"
  },
  {
    "artist": "kors k",
    "genre": "CHANNEL K",
    "id": 29026,
    "title": "kors k's How to make OTOGE CORE",
    "title_ascii": "kors k's How to make OTOGE CORE"
  },
  {
    "artist": "kors k vs Yooh",
    "genre": "HARDCORE",
    "id": 29027,
    "title": "2 Beasts Unchained",
    "title_ascii": "2 Beasts Unchained"
  },
  {
    "artist": "Xceon",
    "genre": "EURO BEAT",
    "id": 29028,
    "title": "愛しくてラヴィンユー ft. マナ",
    "title_ascii": "itoshikute love in you ft.mana"
  },
  {
    "artist": "Xceon vs DJ Command (Eurobeat Union)",
    "genre": "EURO BEAT",
    "id": 29029,
    "title": "Fegrix",
    "title_ascii": "Fegrix"
  },
  {
    "artist": "m1dy, RoughSketch",
    "genre": "EXTRATONE",
    "id": 29030,
    "title": "GiGaGaHell",
    "title_ascii": "GiGaGaHell"
  },
  {
    "artist": "RoughSkreamZ",
    "genre": "DIGITAL HARDCORE",
    "id": 29031,
    "title": "Skreaming for Salvation",
    "title_ascii": "Skreaming for Salvation"
  },
  {
    "artist": "まろん vs. ビートまりお",
    "genre": "BEAT MUSIC",
    "id": 29032,
    "title": "Votania Beat",
    "title_ascii": "Votania Beat"
  },
  {
    "artist": "nora2r",
    "genre": "FRENCHCORE",
    "id": 29033,
    "title": "Xyndrome",
    "title_ascii": "Xyndrome"
  },
  {
    "artist": "D? D? MOUSE",
    "genre": "NU DRUM & BASS",
    "id": 29035,
    "title": "Wonderful Escape",
    "title_ascii": "Wonderful Escape"
  },
  {
    "artist": "BlackY",
    "genre": "ENERGETIC HARDCORE",
    "id": 29036,
    "title": "FINALLY BLAZE",
    "title_ascii": "FINALLY BLAZE"
  },
  {
    "artist": "DJ Shimamura",
    "genre": "HARDCORE RAVE",
    "id": 29037,
    "title": "Victory Of Ravers",
    "title_ascii": "Victory Of Ravers"
  },
  {
    "artist": "Ujico*",
    "genre": "AQUARIUM QUARTERSTEP",
    "id": 29038,
    "title": "青の洞窟",
    "title_ascii": "Blue Grotto"
  },
  {
    "artist": "nora2r",
    "genre": "EARLY RAVE",
    "id": 29039,
    "title": "Banger Banger Banger Banger",
    "title_ascii": "Banger Banger Banger Banger"
  },
  {
    "artist": "MK",
    "genre": "FUTURE BOUNCE",
    "id": 29040,
    "title": "Get set, Go! feat.Kanae Asaba",
    "title_ascii": "Get set, Go! feat.Kanae Asaba"
  },
  {
    "artist": "Qlarabelle",
    "genre": "HARD DANCE",
    "id": 29041,
    "title": "天邪鬼",
    "title_ascii": "AMANOJAKU"
  },
  {
    "artist": "DJ Mass MAD Izm*",
    "genre": "MIXTURE",
    "id": 29042,
    "title": "RAGE feat.H14 of LEONAIR",
    "title_ascii": "RAGE feat.H14 of LEONAIR"
  },
  {
    "artist": "SOUND HOLIC feat. Nana Takahashi",
    "genre": "DIGITAL POP",
    "id": 29043,
    "title": "Fantastic Merry-Go-Round",
    "title_ascii": "Fantastic Merry-Go-Round"
  },
  {
    "artist": "Nhato",
    "genre": "LATIN FUSION POP",
    "id": 29044,
    "title": "Blue Bird feat. Kanae Asaba",
    "title_ascii": "Blue Bird feat. Kanae Asaba"
  },
  {
    "artist": "Nhato",
    "genre": "HARD PSY TRANCE",
    "id": 29045,
    "title": "禊",
    "title_ascii": "Misogi"
  },
  {
    "artist": "satella feat.藍月なくる",
    "genre": "UNSUNG REQUIEM",
    "id": 29046,
    "title": "Ariah",
    "title_ascii": "Ariah"
  },
  {
    "artist": "Dirty Androids",
    "genre": "DARKSYNTH",
    "id": 29047,
    "title": "Nocturnal 2097",
    "title_ascii": "Nocturnal 2097"
  },
  {
    "artist": "lapix",
    "genre": "COLOUR CORE",
    "id": 29049,
    "title": "Flying Castle",
    "title_ascii": "Flying Castle"
  },
  {
    "artist": "かめりあ involving ななひら",
    "genre": "CROSSO-WHA-R",
    "id": 29050,
    "title": "WHA",
    "title_ascii": "WHA"
  },
  {
    "artist": "かめりあ",
    "genre": "ASTRONOMICAL TECHNO",
    "id": 29051,
    "title": "N.O.",
    "title_ascii": "N.O."
  },
  {
    "artist": "OSTER project",
    "genre": "CYBER TAIGA",
    "id": 29052,
    "title": "烽火連天の刃",
    "title_ascii": "HOKA RENTEN NO YAIBA"
  },
  {
    "artist": "OSTER project",
    "genre": "GALAXY QUEST",
    "id": 29053,
    "title": "オールトの雲",
    "title_ascii": "Oort Cloud"
  },
  {
    "artist": "REMO-CON",
    "genre": "TECH DANCE",
    "id": 29054,
    "title": "Smalt #28598F",
    "title_ascii": "Smalt 28598F"
  },
  {
    "artist": "TOMOSUKE",
    "genre": "亜空間ジャズ",
    "id": 29055,
    "title": "Ergosphere",
    "title_ascii": "Ergosphere"
  },
  {
    "artist": "sky_delta",
    "genre": "ELECTRIC POP",
    "id": 29056,
    "title": "EMOTiON TRiPPER",
    "title_ascii": "EMOTiON TRiPPER"
  },
  {
    "artist": "AJURIKA",
    "genre": "JUNGLE TERROR",
    "id": 29057,
    "title": "808monkey",
    "title_ascii": "808monkey"
  },
  {
    "artist": "AJURIKA",
    "genre": "DRUMSTEP",
    "id": 29058,
    "title": "10000 MILES AWAY",
    "title_ascii": "10000 MILES AWAY"
  },
  {
    "artist": "SARUKANI × Blacklolita",
    "genre": "HUMAN BEATBOX ELECTRO",
    "id": 29060,
    "title": "口カラ凸ゲキ",
    "title_ascii": "Kuchi kara Totsugeki"
  },
  {
    "artist": "Blacklolita",
    "genre": "SYMPHONIC DUBSTEP",
    "id": 29061,
    "title": "n/a",
    "title_ascii": "n/a"
  },
  {
    "artist": "xi",
    "genre": "PIANO TECH",
    "id": 29062,
    "title": "Angel's Ladder",
    "title_ascii": "Angel's Ladder"
  },
  {
    "artist": "Avans",
    "genre": "JAZZY STEP",
    "id": 29063,
    "title": "Ventriloquist",
    "title_ascii": "Ventriloquist"
  },
  {
    "artist": "Masayoshi Iimori",
    "genre": "DRUM'N'BASS",
    "id": 29064,
    "title": "Non Stop Rock",
    "title_ascii": "Non Stop Rock"
  },
  {
    "artist": "中山真斗 feat. CHAN",
    "genre": "ALTERNATIVE",
    "id": 29065,
    "title": "ナイトフィクション",
    "title_ascii": "Night Fiction"
  },
  {
    "artist": "Yuta Imai ≡ Blacklolita",
    "genre": "HIDEOUT",
    "id": 29066,
    "title": "hard-wired",
    "title_ascii": "hard-wired"
  },
  {
    "artist": "Des-ROW・組",
    "genre": "HIP ROCK3",
    "id": 29068,
    "title": "雪上断火",
    "title_ascii": "Burn out beyond determination on snowy"
  },
  {
    "artist": "NU-KO & yunocy",
    "genre": "J-POP",
    "id": 29069,
    "title": "No Day But Today!",
    "title_ascii": "No Day But Today!"
  },
  {
    "artist": "Hommarju ft. Mayumi Morinaga",
    "genre": "FREEFORM HARDCORE",
    "id": 29070,
    "title": "Arkadia",
    "title_ascii": "Arkadia"
  },
  {
    "artist": "Ado",
    "genre": "J-POP",
    "id": 29071,
    "title": "踊",
    "title_ascii": "ODO"
  },
  {
    "artist": "ツユ",
    "genre": "J-POP",
    "id": 29072,
    "title": "デモーニッシュ",
    "title_ascii": "damonisch"
  },
  {
    "artist": "Pizuya's Cell",
    "genre": "ROCK",
    "id": 29074,
    "title": "アクマフカ",
    "title_ascii": "Akumafuka"
  },
  {
    "artist": "P丸様。",
    "genre": "J-POP",
    "id": 29075,
    "title": "シル・ヴ・プレジデント",
    "title_ascii": "S'IL VOUS PRESIDENT"
  },
  {
    "artist": "DJ Mass MAD Izm* feat.H14(LEONAIR)",
    "genre": "MIXTURE",
    "id": 29076,
    "title": "Don't believe the hype",
    "title_ascii": "Don't believe the hype"
  },
  {
    "artist": "Yuta Imai",
    "genre": "RAWSTYLE",
    "id": 29077,
    "title": "P.O.W.E.R.",
    "title_ascii": "P.O.W.E.R."
  },
  {
    "artist": "Yuta Imai",
    "genre": "EUPHORIC FRENCHCORE",
    "id": 29078,
    "title": "ABSOLUTE EVIL",
    "title_ascii": "ABSOLUTE EVIL"
  },
  {
    "artist": "TORIENA",
    "genre": "CHIPBREAK POP",
    "id": 29079,
    "title": "月とミルク",
    "title_ascii": "Tsuki To Milk"
  },
  {
    "artist": "TORIENA",
    "genre": "ハッピースピードコア",
    "id": 29080,
    "title": "めでてえ",
    "title_ascii": "Medetee"
  },
  {
    "artist": "Remixed by Nhato feat. ricono",
    "genre": "IIDX EDITION",
    "id": 29081,
    "title": "怪物",
    "title_ascii": "KAIBUTSU"
  },
  {
    "artist": "Remixed by BEMANI Sound Team \"PON\"",
    "genre": "IIDX EDITION",
    "id": 29082,
    "title": "ミュージック・アワー",
    "title_ascii": "Music Hour"
  },
  {
    "artist": "Remixed by Xceon feat. Marcia(幽閉サテライト)",
    "genre": "IIDX EDITION",
    "id": 29083,
    "title": "ぐだふわエブリデー",
    "title_ascii": "gudafuwa everyday"
  },
  {
    "artist": "xi",
    "genre": "PIANO CONCERTINO + JAZZ FUSION",
    "id": 29084,
    "title": "Silver Bullet",
    "title_ascii": "Silver Bullet"
  },
  {
    "artist": "フレデリック",
    "genre": "J-POP",
    "id": 29085,
    "title": "オドループ",
    "title_ascii": "oddloop"
  },
  {
    "artist": "Blacklolita",
    "genre": "TRIUMPH",
    "id": 29086,
    "title": "《GRANDMASTER》",
    "title_ascii": "GRANDMASTER"
  },
  {
    "artist": "Yuta Imai",
    "genre": "HARD MIXTURE",
    "id": 29087,
    "title": "Game Changers",
    "title_ascii": "Game Changers"
  },
  {
    "artist": "Hommarju",
    "genre": "UK HARDCORE",
    "id": 29088,
    "title": "Hat Surprise",
    "title_ascii": "Hat Surprise"
  },
  {
    "artist": "かめりあ",
    "genre": "SUPER HARDCORE NOVA",
    "id": 29089,
    "title": "TOMAHAWK",
    "title_ascii": "TOMAHAWK"
  },
  {
    "artist": "RoughSketch",
    "genre": "EUPHORIC FRENCHCORE",
    "id": 29090,
    "title": "One for All",
    "title_ascii": "One for All"
  },
  {
    "artist": "MK",
    "genre": "MELODIC RIDDIM",
    "id": 29091,
    "title": "Brave Spirits",
    "title_ascii": "Brave Spirits"
  },
  {
    "artist": "BEMANI Sound Team \"dj TAKA & DJ YOSHITAKA & SYUNN\"",
    "genre": "MUSIC GAME TRADITIONAL",
    "id": 29092,
    "title": "Triple Cross",
    "title_ascii": "Triple Cross"
  },
  {
    "artist": "BEMANI Sound Team \"猫叉Master & あさき & Yvya\"",
    "genre": "ROCK",
    "id": 29093,
    "title": "Aftermath",
    "title_ascii": "Aftermath"
  },
  {
    "artist": "BEMANI Sound Team \"HuΣeR\" feat.Fernweh",
    "genre": "JAPANESQUE",
    "id": 29094,
    "title": "逆月",
    "title_ascii": "SAKADUKI"
  },
  {
    "artist": "しーけー",
    "genre": "ALCHEMY POP",
    "id": 29095,
    "title": "Souhait bleu",
    "title_ascii": "Souhait bleu"
  },
  {
    "artist": "ATSUMI UEDA",
    "genre": "NU PRELUDE",
    "id": 29096,
    "title": "Harmonia",
    "title_ascii": "Harmonia"
  },
  {
    "artist": "PSYQUI",
    "genre": "DANCE MUSIC",
    "id": 29097,
    "title": "Stepper",
    "title_ascii": "Stepper"
  },
  {
    "artist": "MOSAIC.WAV",
    "genre": "AKIBA-POP",
    "id": 29098,
    "title": "Push on Beats!～音ゲの国のeX-ストリーマー～",
    "title_ascii": "Push on Beats!Otoge no Kuni no eX-Streamer"
  },
  {
    "artist": "猫叉Master feat.霜月はるか",
    "genre": "SHOWA RETRO",
    "id": 29099,
    "title": "黒紅掬い",
    "title_ascii": "kurobeni sukui"
  },
  {
    "artist": "PON",
    "genre": "EDM STYLE",
    "id": 29100,
    "title": "Emera",
    "title_ascii": "Emera"
  },
  {
    "artist": "KMNZ",
    "genre": "DANCE MUSIC",
    "id": 29101,
    "title": "VR - Virtual Reality (prod.by Snail's House)",
    "title_ascii": "VR - Virtual Reality (prod.by Snail's House)"
  },
  {
    "artist": "Remixed by uno(IOSYS) & Liqo feat. Chiyoko",
    "genre": "IIDX EDITION",
    "id": 29102,
    "title": "グッバイ宣言",
    "title_ascii": "Good-bye Declaration"
  },
  {
    "artist": "ずっと真夜中でいいのに。",
    "genre": "J-POP",
    "id": 29103,
    "title": "あいつら全員同窓会",
    "title_ascii": "Inside Joke"
  }
];

const SONGID_LIST = SONG_LIST.map(function (song) { return song.id; });
