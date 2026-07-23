const vegetables = [
  {
    name: "Carrot",
    light: "Full sun, but tolerates light afternoon shade in hot stretches.",
    water: "Keep the top few inches evenly moist until roots size up.",
    soil: "Loose, stone-free soil. Avoid heavy nitrogen once roots start forming.",
    feeding: "Light feeder",
    schedule: "Mix compost before sowing. Side-dress lightly at 4 to 5 weeks if growth is pale.",
    notes: "Thin early so roots have room. Inconsistent water can split roots."
  },
  {
    name: "Cucumber",
    light: "Full sun and warm soil.",
    water: "Deep water 1 to 2 times weekly, more during fruiting heat.",
    soil: "Rich, well-drained soil with steady moisture.",
    feeding: "Heavy feeder",
    schedule: "Compost at planting, balanced feed at first vines, then every 2 to 3 weeks while producing.",
    notes: "Pick often. Missed mature fruit slows new flowers."
  },
  {
    name: "Kale",
    light: "Full sun in cool weather; afternoon shade helps in heat.",
    water: "Steady moisture keeps leaves tender.",
    soil: "Fertile soil with compost and good drainage.",
    feeding: "Medium feeder",
    schedule: "Compost at planting. Nitrogen feed every 3 to 4 weeks during harvest.",
    notes: "Harvest outer leaves first so the center keeps growing."
  },
  {
    name: "Lettuce",
    light: "Morning sun or light shade in warm weather.",
    water: "Shallow roots need frequent, even moisture.",
    soil: "Loose, fertile soil with compost.",
    feeding: "Light feeder",
    schedule: "Compost before planting. Use diluted fish emulsion only if leaves stall.",
    notes: "Heat and drought make it bolt. Succession sow for steady harvests."
  },
  {
    name: "Pepper",
    light: "Full sun, warm conditions, and protected roots.",
    water: "Deep water after the top inch dries. Avoid wet-dry swings.",
    soil: "Well-drained soil with moderate fertility.",
    feeding: "Medium feeder",
    schedule: "Compost at planting, light balanced feed after transplant recovery, then lower nitrogen once flowering.",
    notes: "Too much nitrogen gives leafy plants with fewer peppers."
  },
  {
    name: "Radish",
    light: "Full sun in cool weather.",
    water: "Even moisture for fast, crisp roots.",
    soil: "Loose soil without fresh heavy fertilizer.",
    feeding: "Light feeder",
    schedule: "Compost before sowing is usually enough. Avoid extra nitrogen.",
    notes: "Harvest promptly. Oversized roots turn woody or spicy."
  },
  {
    name: "Tomato",
    light: "Full sun, 6 to 8+ hours.",
    water: "Deep, consistent watering at soil level.",
    soil: "Rich, well-drained soil with calcium available and steady moisture.",
    feeding: "Heavy feeder",
    schedule: "Compost at planting. Feed when first fruit sets, then every 2 to 3 weeks with tomato fertilizer.",
    notes: "Mulch after soil warms. Avoid high nitrogen once flowering starts."
  },
  {
    name: "Zucchini",
    light: "Full sun and warm soil.",
    water: "Deep water at the base. Large leaves wilt temporarily in hot afternoons.",
    soil: "Rich soil with compost and room for roots.",
    feeding: "Heavy feeder",
    schedule: "Compost at planting, balanced feed at first flowers, then every 2 to 3 weeks during harvest.",
    notes: "Pick small for best texture and to keep production moving."
  }
];

const fertilizers = [
  {
    name: "Compost",
    tag: "Soil base",
    npk: "Mild, variable NPK",
    timing: "Before planting, transplanting, or as a side-dress",
    bestFor: "Most vegetables, soil structure, steady background nutrients",
    caution: "Use finished compost. Unfinished material can tie up nitrogen."
  },
  {
    name: "Worm Castings",
    tag: "Gentle boost",
    npk: "Low NPK",
    timing: "Planting holes, containers, seedling mixes, light top-dress",
    bestFor: "Seedlings, herbs, leafy crops, stressed plants",
    caution: "Great support, but not enough by itself for heavy feeders."
  },
  {
    name: "Fish Emulsion",
    tag: "Leaf growth",
    npk: "Nitrogen-forward",
    timing: "Every 2 to 4 weeks during active vegetative growth",
    bestFor: "Lettuce, kale, young tomatoes, young peppers",
    caution: "Dilute carefully. Too much nitrogen can delay fruiting."
  },
  {
    name: "Kelp",
    tag: "Stress support",
    npk: "Low NPK",
    timing: "After transplanting, heat stress, or growth stalls",
    bestFor: "Transplants, peppers, tomatoes, containers",
    caution: "Use as support, not the main feed for hungry crops."
  },
  {
    name: "Tomato / Vegetable Fertilizer",
    tag: "Fruit set",
    npk: "Balanced or lower nitrogen",
    timing: "At first fruit set, then every 2 to 3 weeks as directed",
    bestFor: "Tomatoes, peppers, cucumbers, zucchini",
    caution: "Follow label rates. Overfeeding can burn roots or reduce fruit quality."
  },
  {
    name: "Bone Meal",
    tag: "Phosphorus",
    npk: "Phosphorus-forward",
    timing: "Before planting where soil test shows need",
    bestFor: "Rooting and flowering support",
    caution: "Do not add blindly if phosphorus is already high."
  }
];

const fertilizerGuides = {
  Carrot: [
    {
      name: "Compost",
      how: "Mix a thin layer into the bed before sowing. Keep it gentle so roots grow clean and straight."
    },
    {
      name: "Bone Meal",
      how: "Use only if the bed needs phosphorus. Work it into the soil before sowing, not after roots form."
    }
  ],
  Cucumber: [
    {
      name: "Compost",
      how: "Add at planting to hold moisture and give the vines a steady base feed."
    },
    {
      name: "Tomato / Vegetable Fertilizer",
      how: "Start when vines run or first flowers appear. Feed every 2 to 3 weeks at label rate."
    }
  ],
  Kale: [
    {
      name: "Fish Emulsion",
      how: "Use diluted as a nitrogen boost every 3 to 4 weeks while harvesting leaves."
    },
    {
      name: "Compost",
      how: "Side-dress around the plant base and water it in for slower, steadier feeding."
    }
  ],
  Lettuce: [
    {
      name: "Worm Castings",
      how: "Scratch lightly into the top soil or add around seedlings for a gentle leaf boost."
    },
    {
      name: "Fish Emulsion",
      how: "Use half-strength only if growth stalls or leaves look pale."
    }
  ],
  Pepper: [
    {
      name: "Kelp",
      how: "Use after transplanting or during heat stress to support recovery."
    },
    {
      name: "Tomato / Vegetable Fertilizer",
      how: "Use lightly once buds form. Avoid high-nitrogen feeds after flowering starts."
    }
  ],
  Radish: [
    {
      name: "Compost",
      how: "Prepare the bed before sowing. That is usually enough for a quick crop."
    },
    {
      name: "Worm Castings",
      how: "Use a small amount in tired soil. Skip strong nitrogen fertilizers."
    }
  ],
  Tomato: [
    {
      name: "Compost",
      how: "Add at planting and mulch over it once the soil is warm."
    },
    {
      name: "Tomato / Vegetable Fertilizer",
      how: "Begin when first fruit sets, then feed every 2 to 3 weeks at label rate."
    }
  ],
  Zucchini: [
    {
      name: "Compost",
      how: "Work into the planting mound or bed before transplanting or sowing."
    },
    {
      name: "Tomato / Vegetable Fertilizer",
      how: "Feed when flowers start, then every 2 to 3 weeks while harvesting."
    }
  ]
};

const vegList = document.querySelector("#vegList");
const fertList = document.querySelector("#fertList");
const cropTracker = document.querySelector("#cropTracker");
const alphaStrip = document.querySelector("#alphaStrip");
const searchInput = document.querySelector("#search");
const feedLogSummary = document.querySelector("#feedLogSummary");
const feedLogRecent = document.querySelector("#feedLogRecent");
const tabNav = document.querySelector(".tabs");
const tabs = [...document.querySelectorAll(".tab")];
const panels = [...document.querySelectorAll(".tab-panel")];

const normalize = (value) => value.toLowerCase().trim();
const TAB_ORDER_KEY = "gardenTabOrderV1";
const FEED_LOG_KEY = "gardenFeedLogV1";
const CROP_LOG_KEY = "gardenCropFeedLogV1";
const CROP_OPEN_KEY = "gardenCropOpenV1";
const CROP_ORDER_KEY = "gardenCropOrderV1";
const CROP_PHASE_KEY = "gardenCropPhaseV1";
const feedProtocols = {
  tomatoTone: {
    label: "Tomato-tone",
    crops: "Tomatoes, zucchini, squash, eggplant, strawberries, leeks, horseradish",
    dose: "3 tbsp large plants; 1.5 tbsp strawberries/leeks/horseradish"
  },
  fishEmulsion: {
    label: "Alaska Fish",
    crops: "Celery, kale, corn",
    dose: "4 tbsp per 2-gal jug"
  },
  tigerBloom: {
    label: "Tiger Bloom",
    crops: "Zucchini, squash",
    dose: "4 tsp per 2-gal jug"
  },
  farmersSecret: {
    label: "Farmer's Secret",
    crops: "Tomatoes, eggplant, strawberries",
    dose: "4 tsp per 2-gal jug"
  }
};

const cropPhaseSets = {
  tomatoes: [
    {
      id: "transplant",
      label: "Transplant establishment",
      looks: "Recently planted or recently stressed; new leaves are just starting, and the root system is not fully driving top growth.",
      feed: "Water discipline matters more than food. Use only a gentle Tomato-tone base feed if the container was not already amended.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "vegetative",
      label: "Vegetative canopy build",
      looks: "Rapid stems and leaves, larger canopy, no open flower clusters yet or only the first buds forming.",
      feed: "Moderate base nutrition is fine. Avoid repeated nitrogen pushes because they can delay flowering and fruiting.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "flowering",
      label: "Flowering and fruit set",
      looks: "Yellow flower clusters are open; after pollination, tiny green fruit remain where petals dropped.",
      feed: "Hold moisture steady and avoid high-N feeding. Tomato-tone is the main move if base fertility is due.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "fruit-fill",
      label: "Green fruit expansion",
      looks: "Fruit are set and sizing up but still mostly green. Blossom-end rot risk shows on fast-expanding fruit.",
      feed: "Prioritize steady water for calcium transport. Use Tomato-tone if base feed is due; do not chase foliage growth.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "ripening",
      label: "Ripening finish",
      looks: "Fruit show color break, blush, softening, or clusters close to harvest.",
      feed: "Shift to low-N, K-forward support. Farmer's Secret fits here every 10-14 days if the plant is still actively producing.",
      product: "Farmer's Secret Tomato Booster"
    },
    {
      id: "senescence",
      label: "Late-season senescence",
      looks: "Older leaves yellow, nights cool, disease pressure rises, and new flowers are unlikely to finish.",
      feed: "Stop pushing new growth. Harvest, water evenly, remove diseased foliage, and feed only if healthy fruit still need finishing.",
      product: "Farmer's Secret Tomato Booster"
    }
  ],
  cucurbits: [
    {
      id: "establishment",
      label: "Establishment",
      looks: "Seedlings or transplants are rooted but not yet running; leaves are small to medium and growth is still organizing.",
      feed: "Use compost or Tomato-tone as the base. Keep roots evenly moist and warm.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "vegetative-vining",
      label: "Vegetative vine build",
      looks: "Large leaves expand quickly, stems run or mound out, and the plant is building energy before heavy flowering.",
      feed: "Base feed is useful here. Avoid letting the plant dry hard because large leaves pull water fast.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "male-bloom",
      label: "Early male bloom",
      looks: "Many flowers appear on thin stems with no swollen ovary behind them; female flowers are absent or rare.",
      feed: "Do not panic-feed. Male flowers commonly precede female flowers. Maintain water and wait for female bloom.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "female-fruit-set",
      label: "Female bloom and fruit set",
      looks: "Female flowers show a tiny zucchini or squash ovary behind the blossom. Bees need to move pollen in the morning window.",
      feed: "Tiger Bloom can support reproductive demand, but pollination and water are just as important as fertilizer.",
      product: "FoxFarm Tiger Bloom"
    },
    {
      id: "production",
      label: "Harvest production",
      looks: "New fruit are setting while older fruit size rapidly. Missed oversized fruit slow the plant down.",
      feed: "Use Tiger Bloom every 14 days during active production. Pick frequently and water deeply at the base.",
      product: "FoxFarm Tiger Bloom"
    },
    {
      id: "decline",
      label: "Decline or pest stress",
      looks: "Leaves yellow, vines wilt beyond afternoon flagging, stems weaken, or powdery mildew/pest damage is obvious.",
      feed: "Do not try to fertilize through collapse. Remove bad fruit, keep water steady, and feed only if new healthy growth remains.",
      product: "FoxFarm Tiger Bloom"
    }
  ],
  celery: [
    {
      id: "establishment",
      label: "Transplant establishment",
      looks: "Small plants are settling in; center leaves are green but stalks are still thin.",
      feed: "Keep moisture consistent. Use fish lightly only after roots are active and new growth is visible.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "vegetative",
      label: "Vegetative rosette",
      looks: "Leaf canopy expands from the crown, with many upright petioles but little stalk thickness.",
      feed: "Fish emulsion is appropriate while growth is actively vegetative. Do not let the root zone dry out.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "petiole-expansion",
      label: "Petiole expansion",
      looks: "Stalks thicken and lengthen; the usable celery ribs are forming.",
      feed: "Weekly fish plus steady water. Moisture stress can make stalks stringy or contribute to blackheart conditions.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "harvest",
      label: "Harvest hold",
      looks: "Stalks are near usable size and the crown is still tight, with no tall flower stalk.",
      feed: "Keep water even. Feed lightly only if color fades or growth stalls.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "bolting",
      label: "Bolting stress",
      looks: "A tall central flower stalk starts rising, texture toughens, or bitterness increases.",
      feed: "Stop pushing fertilizer. Harvest what is usable and focus on water and shade stress reduction.",
      product: "Alaska Fish Fertilizer QT"
    }
  ],
  kale: [
    {
      id: "seedling",
      label: "Seedling establishment",
      looks: "Small plants have a few true leaves and shallow roots.",
      feed: "Keep soil evenly moist. Use fish only at reduced strength if leaves are pale.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "vegetative",
      label: "Vegetative leaf build",
      looks: "Center leaves keep unfolding and outer leaves reach harvest size.",
      feed: "Fish emulsion supports leaf production. Harvest outer leaves without cutting the growth point.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "harvest-regrowth",
      label: "Cut-and-come-again harvest",
      looks: "You are taking outer leaves and the center keeps producing new leaves.",
      feed: "Use fish every 2-4 weeks if growth is active. Water stress makes leaves tougher.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "heat-stress",
      label: "Heat stress or bolting",
      looks: "Leaves get tougher, growth narrows, or a central flower stalk begins forming.",
      feed: "Do not push nitrogen hard. Harvest usable leaves, shade if possible, and wait for cooler regrowth.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "cool-regrowth",
      label: "Cool-season regrowth",
      looks: "After heat eases, new tender leaves resume from the crown.",
      feed: "A light fish feed can restart leaf production if the plant is healthy.",
      product: "Alaska Fish Fertilizer QT"
    }
  ],
  corn: [
    {
      id: "seedling",
      label: "Seedling",
      looks: "Short grass-like plants with a few leaves; roots are still shallow.",
      feed: "Keep moisture even. Wait for stronger vegetative demand before pushing hard nitrogen.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "rapid-vegetative",
      label: "Rapid vegetative growth",
      looks: "Plants stretch fast, leaves widen, and stalks thicken before tassels appear.",
      feed: "This is the main nitrogen-demand phase. Fish emulsion fits here if the plants are actively growing.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "tasseling-silking",
      label: "Tasseling and silking",
      looks: "Tassels shed pollen from the top while silks emerge from ears.",
      feed: "Water is critical for pollination and kernel set. Feed only if color or vigor shows nitrogen need.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "ear-fill",
      label: "Kernel ear fill",
      looks: "Silks brown down, ears swell, and kernels move from watery to milky.",
      feed: "Maintain moisture and modest nitrogen support if leaves are pale. Avoid drought during fill.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "maturity",
      label: "Maturity",
      looks: "Husks dry, kernels firm, or the eating window is basically done.",
      feed: "Stop feeding. Fertilizer will not fix mature ears.",
      product: "Alaska Fish Fertilizer QT"
    }
  ],
  eggplant: [
    {
      id: "establishment",
      label: "Transplant establishment",
      looks: "Plant is settling in with limited new growth and possible transplant pause.",
      feed: "Water evenly and keep roots warm. Use Tomato-tone only as a gentle base feed.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "vegetative",
      label: "Vegetative canopy build",
      looks: "Broad leaves and branching increase; purple or white flowers are not open yet.",
      feed: "Moderate base fertility is enough. Avoid excess N that makes leaves instead of fruit.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "flowering",
      label: "Flowering and fruit set",
      looks: "Star-shaped flowers open; tiny fruit remain after successful set.",
      feed: "Keep moisture steady. Tomato-tone supports base fertility while the plant starts fruiting.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "fruit-fill",
      label: "Fruit expansion",
      looks: "Fruit enlarge and stay glossy; skin should remain firm and shiny.",
      feed: "Use steady water and low-N fruit support. Farmer's Secret can help active fruit fill.",
      product: "Farmer's Secret Tomato Booster"
    },
    {
      id: "harvest",
      label: "Harvest and continued set",
      looks: "Fruit are harvestable while new flowers or small fruit continue forming.",
      feed: "Keep a light fruiting rhythm. Harvest before fruit dulls or seeds harden.",
      product: "Farmer's Secret Tomato Booster"
    },
    {
      id: "senescence",
      label: "Late-season senescence",
      looks: "Leaves yellow, flowering slows, and nights or disease pressure limit new fruit.",
      feed: "Stop pushing new growth unless healthy fruit are still sizing.",
      product: "Farmer's Secret Tomato Booster"
    }
  ],
  strawberries: [
    {
      id: "establishment",
      label: "Crown establishment",
      looks: "Crowns are rooting, new leaves are forming, and runners may be limited.",
      feed: "Use light base fertility only. Keep crowns at the correct height and do not bury them.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "vegetative-runners",
      label: "Vegetative runner growth",
      looks: "Leaves and runners are the main growth; flowers or berries are limited.",
      feed: "Do not use fruit booster here. If growth is weak, use gentle organic base feed rather than heavy bloom food.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "flowering",
      label: "Flowering",
      looks: "White flowers open above the crown; pollination quality sets berry shape.",
      feed: "Avoid heavy nitrogen. Keep water steady and leave flowers accessible to pollinators.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "green-fruit",
      label: "Green fruit fill",
      looks: "Small green berries enlarge; poor pollination can create lumpy or nubby shape.",
      feed: "Use very light fruit support only if plants are actively carrying berries. Do not overfeed N.",
      product: "Farmer's Secret Tomato Booster"
    },
    {
      id: "ripe-harvest",
      label: "Ripe harvest flush",
      looks: "Berries color, soften, and ripen in waves.",
      feed: "Prioritize water consistency and picking. Use booster sparingly if another flush is still forming.",
      product: "Farmer's Secret Tomato Booster"
    },
    {
      id: "post-harvest",
      label: "Post-harvest reset",
      looks: "Fruit flush slows and the plant returns to leaves, crowns, and runners.",
      feed: "Stop fruit booster. Light organic nitrogen or compost is the usual direction if runner/crown growth is weak.",
      product: "Espoma Tomato-tone"
    }
  ],
  leeks: [
    {
      id: "establishment",
      label: "Transplant establishment",
      looks: "Thin upright leaves are rooting in and may pause after transplant.",
      feed: "Water steadily. Wait until roots are established before adding much food.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "leaf-build",
      label: "Leaf blade build",
      looks: "Blue-green strap leaves increase and the plant gains photosynthetic area.",
      feed: "A light base feed is useful if growth is pale or slow.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "shaft-expansion",
      label: "Pseudostem shaft expansion",
      looks: "The white/light shaft thickens as leaf bases stack; soil or mulch may be used for blanching.",
      feed: "Keep fertility steady but not lush. One light Tomato-tone feed is enough for your plan.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "maturation",
      label: "Maturation",
      looks: "Shaft diameter is usable and growth slows.",
      feed: "Do not keep feeding. Maintain moisture and harvest as needed.",
      product: "Espoma Tomato-tone"
    }
  ],
  horseradish: [
    {
      id: "establishment",
      label: "Root piece establishment",
      looks: "Leaves emerge from the crown/root cutting and root anchoring begins.",
      feed: "A light base feed is enough. Avoid wet, rich conditions that drive soft growth.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "leaf-canopy",
      label: "Leaf canopy",
      looks: "Large coarse leaves build a strong canopy above the crown.",
      feed: "If you have not fed once, Tomato-tone can be used lightly now.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "root-bulking",
      label: "Storage-root bulking",
      looks: "Top growth may look stable while the harvest root thickens underground.",
      feed: "Leave it alone. Repeated liquid feeding can reduce root quality.",
      product: "Espoma Tomato-tone"
    },
    {
      id: "dormancy-harvest",
      label: "Dormancy and harvest",
      looks: "Top growth declines after cold; root flavor and pungency are usually strongest after frost.",
      feed: "No feeding. Harvest or let it overwinter.",
      product: "Espoma Tomato-tone"
    }
  ],
  leafyHerbs: [
    {
      id: "establishment",
      label: "Establishment",
      looks: "Small plants are rooting in and producing new tender tips.",
      feed: "Go light. Half-strength fish only if leaves are pale and active growth has started.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "vegetative-harvest",
      label: "Vegetative harvest",
      looks: "Tender shoots and leaves regrow after pinching or cutting.",
      feed: "Half-strength fish every 3-4 weeks can support leaf herbs. Do not over-soften growth.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "pre-bloom",
      label: "Pre-bloom",
      looks: "Stems elongate, internodes stretch, and flower buds start forming.",
      feed: "Pinch if you want leaves. Avoid nitrogen pushes that dilute flavor and make floppy growth.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "flowering-seed",
      label: "Flowering or seed",
      looks: "Flowers open, seed heads form, and leaf quality often drops.",
      feed: "Stop routine feeding. Harvest flowers/seed or cut back for regrowth.",
      product: "Alaska Fish Fertilizer QT"
    },
    {
      id: "regrowth",
      label: "Cutback regrowth",
      looks: "New shoots emerge after pruning or harvest.",
      feed: "A light half-strength fish feed can restart leafy growth if the plant is not heat-stressed.",
      product: "Alaska Fish Fertilizer QT"
    }
  ],
  woodyHerbs: [
    {
      id: "establishment",
      label: "Establishment",
      looks: "Young plant or recent transplant with fresh root growth beginning.",
      feed: "Use lean soil and careful water. Skip routine fertilizer unless growth is clearly stalled.",
      product: "No routine feed"
    },
    {
      id: "spring-flush",
      label: "Vegetative flush",
      looks: "New aromatic shoots extend from older woody stems.",
      feed: "Usually no feed. Too much nitrogen makes soft, less aromatic growth.",
      product: "No routine feed"
    },
    {
      id: "flowering",
      label: "Flowering",
      looks: "Small flowers form on mature shoots.",
      feed: "Do not feed for bloom. Keep drainage sharp and harvest lightly if needed.",
      product: "No routine feed"
    },
    {
      id: "hardened-growth",
      label: "Hardened summer growth",
      looks: "Shoots firm up, leaves are smaller/tougher, and growth slows in heat.",
      feed: "No routine fertilizer. Avoid wet roots.",
      product: "No routine feed"
    },
    {
      id: "winter-rest",
      label: "Winter rest",
      looks: "Little new growth; plant is holding structure rather than producing tender shoots.",
      feed: "No feeding.",
      product: "No routine feed"
    }
  ]
};

const cropPhaseTimings = {
  tomatoes: {
    transplant: "Usually 0-2 weeks after transplant.",
    vegetative: "Usually weeks 2-5 after transplant.",
    flowering: "Often weeks 4-8 after transplant, depending on variety and heat.",
    "fruit-fill": "Commonly starts after fruit set; green fruit may size for 2-5 weeks before color.",
    ripening: "Often begins about 6-10 weeks after transplant and repeats by cluster.",
    senescence: "Final 3-6 weeks of the season, or whenever frost, disease, or night cold wins."
  },
  cucurbits: {
    establishment: "Usually 0-2 weeks after emergence or transplant.",
    "vegetative-vining": "Usually weeks 2-4 after emergence, faster in warm soil.",
    "male-bloom": "Often weeks 3-5; male flowers commonly show 1-2 weeks before female flowers.",
    "female-fruit-set": "Often weeks 4-7 from sowing, once female flowers with swollen ovaries appear.",
    production: "Usually starts around weeks 6-8 and can run for weeks if picked frequently.",
    decline: "Any time after peak production, especially during heat, mildew, vine borer, or root stress."
  },
  celery: {
    establishment: "Usually 0-2 weeks after transplant.",
    vegetative: "Usually weeks 2-5 after transplant.",
    "petiole-expansion": "Usually weeks 5-10 after transplant.",
    harvest: "Often around weeks 10-12+ after transplant, depending on stalk size.",
    bolting: "Can happen after cold shock or summer stress; timing is stress-driven."
  },
  kale: {
    seedling: "Usually 0-3 weeks from sowing or after transplant.",
    vegetative: "Usually weeks 3-6, as leaves reach harvestable size.",
    "harvest-regrowth": "Usually week 6 onward; can continue for weeks or months in cool weather.",
    "heat-stress": "Any time during hot weather, drought, or long-day stress.",
    "cool-regrowth": "Often 1-3 weeks after heat eases, cutting back, or cooler weather returns."
  },
  corn: {
    seedling: "Usually 0-3 weeks after emergence.",
    "rapid-vegetative": "Usually weeks 3-7 after emergence.",
    "tasseling-silking": "Often weeks 7-10 after planting, depending on variety and weather.",
    "ear-fill": "Usually about 18-24 days from first visible silk to sweet-corn harvest.",
    maturity: "After milk-stage harvest or once kernels/husks are past the eating window."
  },
  eggplant: {
    establishment: "Usually 0-2 weeks after transplant.",
    vegetative: "Usually weeks 2-5 after transplant.",
    flowering: "Often weeks 5-8 after transplant in warm conditions.",
    "fruit-fill": "Usually 2-4 weeks after successful fruit set.",
    harvest: "Often starts around weeks 8-12 after transplant, then repeats while glossy fruit set continues.",
    senescence: "Final 3-6 weeks of the season, or when cool nights and disease slow new fruit."
  },
  strawberries: {
    establishment: "Usually the first 2-4 weeks after planting or crown restart.",
    "vegetative-runners": "Common after establishment and post-harvest; runners often build through summer.",
    flowering: "Often 3-6 weeks before a ripe flush; new transplants may flower before they should crop.",
    "green-fruit": "Usually 2-4 weeks from bloom to ripe fruit, weather dependent.",
    "ripe-harvest": "June-bearing flushes often run 2-4 weeks; day-neutral types repeat in waves.",
    "post-harvest": "Starts right after the main flush; renovation/runner management often follows within 1-2 weeks."
  },
  leeks: {
    establishment: "Usually 0-3 weeks after transplant.",
    "leaf-build": "Usually weeks 3-8 after transplant.",
    "shaft-expansion": "Usually weeks 8-16+ as leaf bases stack and the shaft thickens.",
    maturation: "Most leeks are long-season crops, roughly 120-150 days to maturity."
  },
  horseradish: {
    establishment: "Usually the first 3-4 weeks after planting a root piece.",
    "leaf-canopy": "Usually weeks 4-10 as large leaves build the plant.",
    "root-bulking": "Mostly midsummer through fall; think 10+ weeks after planting onward.",
    "dormancy-harvest": "After top growth declines, usually fall after frost or very early spring."
  },
  leafyHerbs: {
    establishment: "Usually 0-2 weeks after transplant or emergence.",
    "vegetative-harvest": "Often weeks 2-8+ while tender shoots regrow after cutting.",
    "pre-bloom": "Often weeks 4-8+ for annual herbs, or whenever heat and maturity push stems tall.",
    "flowering-seed": "Usually a 1-4 week transition once buds open and seed heads form.",
    regrowth: "Usually 1-3 weeks after cutting back, if heat and water allow recovery."
  },
  woodyHerbs: {
    establishment: "Usually the first 2-6 weeks after transplant.",
    "spring-flush": "Often 2-8 weeks of active new shoots in spring or after pruning.",
    flowering: "Species-specific; often a 1-4 week bloom window.",
    "hardened-growth": "Usually midsummer into fall, after spring growth firms up.",
    "winter-rest": "Cool-season or winter dormancy/rest, with little tender new growth."
  }
};

const cropPlans = [
  {
    id: "tomatoes",
    name: "Tomatoes",
    group: "Fruit-Fill Crops",
    note: "Solanaceous fruit crop. Move from canopy build to flowering, fruit set, green fruit expansion, then ripening finish.",
    phaseSet: "tomatoes",
    defaultPhase: "fruit-fill",
    products: [
      { name: "Espoma Tomato-tone", rate: "3 tbsp in soil", timing: "Immediate soil top-dress" },
      { name: "Farmer's Secret Tomato Booster", rate: "4 tsp per 2-gal jug", timing: "Every 10-14 days starting mid-August" }
    ]
  },
  {
    id: "zucchini-squash",
    name: "Zucchini & Squash",
    group: "Cucurbits",
    note: "Monoecious cucurbits. Male bloom comes first; productive phase depends on female flowers, pollination, water, and frequent harvest.",
    phaseSet: "cucurbits",
    defaultPhase: "production",
    products: [
      { name: "Espoma Tomato-tone", rate: "3 tbsp in soil", timing: "Immediate soil top-dress" },
      { name: "FoxFarm Tiger Bloom", rate: "4 tsp per 2-gal jug", timing: "Every 14 days during morning watering" }
    ]
  },
  {
    id: "celery",
    name: "Celery",
    group: "Greens & Stalks",
    note: "Vegetative petiole crop. The target is thick, crisp stalks without drought stress or blackheart conditions.",
    phaseSet: "celery",
    defaultPhase: "petiole-expansion",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "4 tbsp per 2-gal jug", timing: "Weekly" }]
  },
  {
    id: "kale",
    name: "Kale",
    group: "Greens & Stalks",
    note: "Leaf brassica. Feed for vegetative regrowth while avoiding drought and heat-triggered bolting.",
    phaseSet: "kale",
    defaultPhase: "harvest-regrowth",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "4 tbsp per 2-gal jug", timing: "Weekly" }]
  },
  {
    id: "corn",
    name: "Corn",
    group: "Greens & Stalks",
    note: "Grass crop. Nitrogen demand peaks during rapid vegetative growth and remains important through ear fill.",
    phaseSet: "corn",
    defaultPhase: "ear-fill",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "4 tbsp per 2-gal jug", timing: "Weekly" }]
  },
  {
    id: "eggplant",
    name: "Eggplant",
    group: "Fruit-Fill Crops",
    note: "Solanaceous fruit crop. Similar feeding logic to tomato, but harvest is based on glossy, actively expanding fruit.",
    phaseSet: "eggplant",
    defaultPhase: "fruit-fill",
    products: [
      { name: "Espoma Tomato-tone", rate: "3 tbsp in soil", timing: "Immediate soil top-dress" },
      { name: "Farmer's Secret Tomato Booster", rate: "4 tsp per 2-gal jug", timing: "Every 10-14 days starting mid-August" }
    ]
  },
  {
    id: "strawberries",
    name: "Strawberries",
    group: "Fruit-Fill Crops",
    note: "Perennial crown crop. Separate runner/crown growth from flowering and berry-fill phases.",
    phaseSet: "strawberries",
    defaultPhase: "green-fruit",
    products: [
      { name: "Espoma Tomato-tone", rate: "1.5 tbsp in soil", timing: "Immediate light soil top-dress" },
      { name: "Farmer's Secret Tomato Booster", rate: "4 tsp per 2-gal jug", timing: "Every 10-14 days starting mid-August" }
    ]
  },
  {
    id: "leeks",
    name: "Leeks",
    group: "Roots & Storage Organs",
    note: "Allium pseudostem crop. Feed gently while leaves build and shafts expand; do not push lush late growth.",
    phaseSet: "leeks",
    defaultPhase: "shaft-expansion",
    products: [{ name: "Espoma Tomato-tone", rate: "1.5 tbsp in soil", timing: "Immediate single feed" }]
  },
  {
    id: "horseradish",
    name: "Horseradish",
    group: "Roots & Storage Organs",
    note: "Storage-root crop. Once the canopy is built, root bulking is mostly a leave-it-alone phase.",
    phaseSet: "horseradish",
    defaultPhase: "root-bulking",
    products: [{ name: "Espoma Tomato-tone", rate: "1.5 tbsp in soil", timing: "Immediate single feed" }]
  },
  {
    id: "herbs-leafy",
    name: "Leafy Herbs",
    group: "Herbs",
    note: "For basil, parsley, cilantro, dill, mint, and chives. Feed only enough to keep tender vegetative harvest going.",
    phaseSet: "leafyHerbs",
    defaultPhase: "vegetative-harvest",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "Half-strength", timing: "Every 3-4 weeks only if actively growing" }]
  },
  {
    id: "herbs-woody",
    name: "Woody Herbs",
    group: "Herbs",
    note: "Rosemary, thyme, oregano, sage, and lavender prefer leaner soil and sharper drainage than leafy herbs.",
    phaseSet: "woodyHerbs",
    defaultPhase: "hardened-growth",
    products: [{ name: "No routine feed", rate: "Observe only", timing: "Feed only if genuinely pale/stalled" }]
  }
];

function groupedVegetables(items) {
  return items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((groups, item) => {
      const letter = item.name.charAt(0).toUpperCase();
      groups[letter] = groups[letter] || [];
      groups[letter].push(item);
      return groups;
    }, {});
}

function renderAlpha(items) {
  const letters = Object.keys(groupedVegetables(items));
  alphaStrip.innerHTML = letters
    .map((letter) => `<button type="button" data-letter="${letter}" aria-label="Jump to ${letter}">${letter}</button>`)
    .join("");
}

function renderVegetables() {
  const query = normalize(searchInput.value);
  const filtered = vegetables.filter((item) => {
    const examples = (fertilizerGuides[item.name] || [])
      .map((example) => `${example.name} ${example.how}`)
      .join(" ");
    const haystack = normalize(`${item.name} ${item.feeding} ${item.schedule} ${item.notes} ${examples}`);
    return haystack.includes(query);
  });

  renderAlpha(filtered);

  if (!filtered.length) {
    vegList.innerHTML = `<div class="empty-state">No matching vegetables.</div>`;
    return;
  }

  const groups = groupedVegetables(filtered);
  vegList.innerHTML = Object.entries(groups)
    .map(([letter, items]) => {
      const rows = items
        .map((item) => {
          const id = item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const fertilizerExamples = (fertilizerGuides[item.name] || [])
            .map(
              (example) => `
                <article class="fert-example">
                  <strong>${example.name}</strong>
                  <p>${example.how}</p>
                </article>
              `
            )
            .join("");
          return `
            <article class="veg-item" id="${id}">
              <button class="veg-button" type="button" aria-expanded="false">
                <span class="chevron" aria-hidden="true">></span>
                <span>
                  <span class="veg-name">${item.name}</span>
                  <span class="veg-line">${item.light}</span>
                </span>
                <span class="feed-pill">${item.feeding}</span>
              </button>
              <div class="veg-details">
                <div class="detail-grid">
                  <section class="detail-card">
                    <span class="detail-label">Water</span>
                    <p>${item.water}</p>
                  </section>
                  <section class="detail-card">
                    <span class="detail-label">Soil</span>
                    <p>${item.soil}</p>
                  </section>
                  <section class="detail-card">
                    <span class="detail-label">Feeding Schedule</span>
                    <p>${item.schedule}</p>
                  </section>
                  <section class="detail-card">
                    <span class="detail-label">Need</span>
                    <p>${item.feeding}</p>
                  </section>
                </div>
                <section class="note-card">
                  <span class="detail-label">Note</span>
                  <p>${item.notes}</p>
                </section>
                <section class="fert-examples">
                  <span class="detail-label">Fertilizer Examples</span>
                  <div class="fert-example-grid">
                    ${fertilizerExamples}
                  </div>
                </section>
              </div>
            </article>
          `;
        })
        .join("");
      return `<h2 class="letter-heading" id="letter-${letter}">${letter}</h2>${rows}`;
    })
    .join("");
}

function renderFertilizers() {
  fertList.innerHTML = fertilizers
    .map(
      (item) => `
        <article class="fert-card">
          <span class="tag">${item.tag}</span>
          <strong>${item.name}</strong>
          <p>${item.bestFor}</p>
          <div class="fert-meta">
            <span>${item.npk}</span>
            <span>${item.timing}</span>
          </div>
          <p>${item.caution}</p>
        </article>
      `
    )
    .join("");
}

function readFeedLog() {
  try {
    return JSON.parse(localStorage.getItem(FEED_LOG_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeFeedLog(entries) {
  localStorage.setItem(FEED_LOG_KEY, JSON.stringify(entries));
}

function todayIso() {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

function formatFeedDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function relativeFeedDate(isoDate) {
  const today = todayIso();
  if (isoDate === today) {
    return "Today";
  }

  const todayDate = new Date(`${today}T00:00:00`);
  const feedDate = new Date(`${isoDate}T00:00:00`);
  const days = Math.round((todayDate - feedDate) / 86400000);
  if (days === 1) {
    return "Yesterday";
  }
  if (days > 1) {
    return `${days} days ago`;
  }
  return formatFeedDate(isoDate);
}

function renderFeedLog() {
  if (!feedLogSummary || !feedLogRecent) {
    return;
  }

  const entries = readFeedLog();
  const latestByProtocol = entries.reduce((latest, entry) => {
    if (!latest[entry.id] || entry.timestamp > latest[entry.id].timestamp) {
      latest[entry.id] = entry;
    }
    return latest;
  }, {});

  feedLogSummary.innerHTML = Object.entries(feedProtocols)
    .map(([id, protocol]) => {
      const latest = latestByProtocol[id];
      const status = latest ? `${relativeFeedDate(latest.date)} (${formatFeedDate(latest.date)})` : "Not logged yet";
      return `
        <article class="feed-log-card">
          <strong>${protocol.label}</strong>
          <span>${status}</span>
          <span>${protocol.crops}</span>
        </article>
      `;
    })
    .join("");

  const recent = entries.slice(-3).reverse();
  feedLogRecent.textContent = recent.length
    ? `Recent: ${recent
        .map((entry) => `${feedProtocols[entry.id]?.label || "Feed"} on ${formatFeedDate(entry.date)}`)
        .join(" | ")}`
    : "No feedings logged yet. Tap a product above after you apply it.";
}

function logFeed(protocolId) {
  const protocol = feedProtocols[protocolId];
  if (!protocol) {
    return;
  }

  const entries = readFeedLog();
  entries.push({
    id: protocolId,
    label: protocol.label,
    crops: protocol.crops,
    dose: protocol.dose,
    date: todayIso(),
    timestamp: Date.now()
  });
  writeFeedLog(entries);
  renderFeedLog();
}

function undoLastFeedLog() {
  const entries = readFeedLog();
  entries.pop();
  writeFeedLog(entries);
  renderFeedLog();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readCropLog() {
  try {
    return JSON.parse(localStorage.getItem(CROP_LOG_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeCropLog(entries) {
  localStorage.setItem(CROP_LOG_KEY, JSON.stringify(entries));
}

function readCropOpenState() {
  try {
    return JSON.parse(localStorage.getItem(CROP_OPEN_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeCropOpenState(openState) {
  localStorage.setItem(CROP_OPEN_KEY, JSON.stringify(openState));
}

function orderedCropPlans() {
  let savedOrder = [];
  try {
    savedOrder = JSON.parse(localStorage.getItem(CROP_ORDER_KEY) || "[]");
  } catch {
    savedOrder = [];
  }

  const validKeys = cropPlans.map((crop) => crop.id);
  const orderedKeys = [...savedOrder.filter((key) => validKeys.includes(key)), ...validKeys.filter((key) => !savedOrder.includes(key))];
  return orderedKeys.map((key) => cropPlans.find((crop) => crop.id === key)).filter(Boolean);
}

function readCropPhaseState() {
  try {
    return JSON.parse(localStorage.getItem(CROP_PHASE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeCropPhaseState(phaseState) {
  localStorage.setItem(CROP_PHASE_KEY, JSON.stringify(phaseState));
}

function phasesForCrop(crop) {
  return cropPhaseSets[crop.phaseSet] || [];
}

function timingForPhase(crop, phase) {
  return cropPhaseTimings[crop.phaseSet]?.[phase.id] || "Timing varies; use plant cues first.";
}

function selectedCropPhase(crop, phaseState = readCropPhaseState()) {
  const phases = phasesForCrop(crop);
  if (!phases.length) {
    return null;
  }

  return phases.find((phase) => phase.id === phaseState[crop.id]) || phases.find((phase) => phase.id === crop.defaultPhase) || phases[0];
}

function preferredCropProduct(crop, phase) {
  return selectedCropProduct(crop, phase?.product || crop.products[0]?.name);
}

function renderCropTracker() {
  if (!cropTracker) {
    return;
  }

  const entries = readCropLog();
  const openState = readCropOpenState();
  const phaseState = readCropPhaseState();
  cropTracker.innerHTML = orderedCropPlans()
    .map((crop) => {
      const cropEntries = entries
        .filter((entry) => entry.cropId === crop.id)
        .sort((a, b) => b.timestamp - a.timestamp);
      const latest = cropEntries[0];
      const phases = phasesForCrop(crop);
      const selectedPhase = selectedCropPhase(crop, phaseState);
      const selectedPhaseIndex = selectedPhase ? phases.findIndex((phase) => phase.id === selectedPhase.id) : -1;
      const defaultProduct = preferredCropProduct(crop, selectedPhase);
      const recs = crop.products
        .map(
          (product) => `
            <article class="crop-rec">
              <strong>${escapeHtml(product.name)}</strong>
              <span>${escapeHtml(product.rate)}</span>
              <span>${escapeHtml(product.timing)}</span>
            </article>
          `
        )
        .join("");
      const options = crop.products
        .map(
          (product) =>
            `<option value="${escapeHtml(product.name)}" ${product.name === defaultProduct.name ? "selected" : ""}>${escapeHtml(
              product.name
            )}</option>`
        )
        .join("");
      const phaseOptions = phases
        .map(
          (phase) =>
            `<option value="${escapeHtml(phase.id)}" ${phase.id === selectedPhase?.id ? "selected" : ""}>${escapeHtml(
              phase.label
            )}</option>`
        )
        .join("");
      const phaseTrack = phases
        .map(
          (phase, index) => `
            <li class="${phase.id === selectedPhase?.id ? "is-current" : ""}">
              <span>${index + 1}</span>
              <div>
                <strong>${escapeHtml(phase.label)}</strong>
                <small>${escapeHtml(timingForPhase(crop, phase))}</small>
                <p>${escapeHtml(phase.looks)}</p>
              </div>
            </li>
          `
        )
        .join("");
      const phaseMarkup = selectedPhase
        ? `
            <section class="crop-phase-panel">
              <label class="crop-phase-select">
                Current phase
                <select data-crop-phase>${phaseOptions}</select>
              </label>
              <div class="phase-focus">
                <span class="phase-position">Phase ${selectedPhaseIndex + 1} of ${phases.length}</span>
                <strong>${escapeHtml(selectedPhase.label)}</strong>
                <p><span>Typical timing:</span> ${escapeHtml(timingForPhase(crop, selectedPhase))}</p>
                <p><span>Looks like:</span> ${escapeHtml(selectedPhase.looks)}</p>
                <p><span>Feed move:</span> ${escapeHtml(selectedPhase.feed)}</p>
              </div>
              <ol class="phase-track">${phaseTrack}</ol>
            </section>
          `
        : "";
      const history = cropEntries.length
        ? cropEntries
            .slice(0, 4)
            .map(
              (entry) => `
                <div class="crop-history-row">
                  <strong>${formatFeedDate(entry.date)}</strong>
                  <p>${escapeHtml(entry.product)} | ${escapeHtml(entry.amount)}${
                    entry.phaseLabel ? `<br><span class="history-phase">${escapeHtml(entry.phaseLabel)}</span>` : ""
                  }${
                    entry.note ? `<br>${escapeHtml(entry.note)}` : ""
                  }</p>
                </div>
              `
            )
            .join("")
        : `<div class="crop-history-row"><strong>Status</strong><p>No feedings logged for this crop yet.</p></div>`;
      const isOpen = openState[crop.id] === true;
      const lastFed = latest ? `${relativeFeedDate(latest.date)} (${formatFeedDate(latest.date)})` : "not logged";
      const phaseStatus = selectedPhase ? `Phase: ${selectedPhase.label}` : "Phase: not set";

      return `
        <article class="crop-card ${isOpen ? "is-open" : ""}" data-crop-id="${crop.id}">
          <button class="crop-toggle" type="button" data-crop-toggle aria-expanded="${String(isOpen)}">
            <span class="chevron crop-chevron" aria-hidden="true">></span>
            <span class="crop-title-wrap">
              <span class="crop-card-title">${escapeHtml(crop.name)}</span>
              <span class="crop-last-fed">${escapeHtml(phaseStatus)} | Last fed: ${lastFed}</span>
            </span>
            <span class="crop-group-pill">${escapeHtml(crop.group)}</span>
          </button>
          <div class="crop-card-body">
            <p class="crop-note">${escapeHtml(crop.note)}</p>
            ${phaseMarkup}
            <div class="crop-recs">${recs}</div>
            <div class="crop-entry">
              <label>
                Date
                <input type="date" data-crop-date value="${todayIso()}" />
              </label>
              <label>
                Product
                <select data-crop-product>${options}</select>
              </label>
              <label>
                Amount
                <input type="text" data-crop-amount value="${escapeHtml(defaultProduct.rate)}" />
              </label>
              <textarea data-crop-note placeholder="Notes: what looked dry, pale, flowering, fruiting, skipped, etc."></textarea>
              <button type="button" data-crop-log>Log Feeding</button>
            </div>
            <div class="crop-history">
              <span class="detail-label">History</span>
              ${history}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function selectedCropProduct(crop, productName) {
  return crop.products.find((product) => product.name === productName) || crop.products[0];
}

function logCropFeeding(card) {
  const crop = cropPlans.find((item) => item.id === card.dataset.cropId);
  if (!crop) {
    return;
  }

  const product = card.querySelector("[data-crop-product]").value;
  const amount = card.querySelector("[data-crop-amount]").value.trim();
  const date = card.querySelector("[data-crop-date]").value || todayIso();
  const note = card.querySelector("[data-crop-note]").value.trim();
  const selectedPhaseId = card.querySelector("[data-crop-phase]")?.value;
  const selectedPhase = selectedCropPhase(crop, { [crop.id]: selectedPhaseId });
  const entries = readCropLog();
  entries.push({
    cropId: crop.id,
    cropName: crop.name,
    phaseId: selectedPhase?.id || "",
    phaseLabel: selectedPhase?.label || "",
    product,
    amount,
    date,
    note,
    timestamp: Date.now()
  });
  writeCropLog(entries);
  renderCropTracker();
}

function undoLastCropLog() {
  const entries = readCropLog();
  entries.pop();
  writeCropLog(entries);
  renderCropTracker();
}

function toggleCropCard(card) {
  const cropId = card.dataset.cropId;
  const openState = readCropOpenState();
  openState[cropId] = !card.classList.contains("is-open");
  writeCropOpenState(openState);
  renderCropTracker();
}

function setAllCropCards(open) {
  const openState = orderedCropPlans().reduce((state, crop) => {
    state[crop.id] = open;
    return state;
  }, {});
  writeCropOpenState(openState);
  renderCropTracker();
}

function saveCropOrder() {
  if (!cropTracker) {
    return;
  }

  const order = [...cropTracker.querySelectorAll(".crop-card")].map((card) => card.dataset.cropId);
  localStorage.setItem(CROP_ORDER_KEY, JSON.stringify(order));
}

function tabKeys() {
  return tabs.map((tab) => tab.dataset.tab);
}

function currentTabOrder() {
  return [...tabNav.querySelectorAll(".tab")].map((tab) => tab.dataset.tab);
}

function applySavedTabOrder() {
  if (!tabNav) {
    return;
  }

  let savedOrder = [];
  try {
    savedOrder = JSON.parse(localStorage.getItem(TAB_ORDER_KEY) || "[]");
  } catch {
    savedOrder = [];
  }

  const validKeys = tabKeys();
  const orderedKeys = [...savedOrder.filter((key) => validKeys.includes(key)), ...validKeys.filter((key) => !savedOrder.includes(key))];
  orderedKeys.forEach((key) => {
    const tab = tabs.find((item) => item.dataset.tab === key);
    if (tab) {
      tabNav.appendChild(tab);
    }
  });
}

function saveTabOrder() {
  if (!tabNav) {
    return;
  }

  localStorage.setItem(TAB_ORDER_KEY, JSON.stringify(currentTabOrder()));
}

let tabDrag = null;
let suppressNextTabClick = false;
let cropDrag = null;
let suppressNextCropToggleClick = false;

function positionTabGhost(clientX, clientY) {
  if (!tabDrag?.ghost) {
    return;
  }

  tabDrag.ghost.style.left = `${clientX}px`;
  tabDrag.ghost.style.top = `${clientY}px`;
}

function activateTabDrag(event) {
  if (!tabDrag || tabDrag.active) {
    return;
  }

  const rect = tabDrag.tab.getBoundingClientRect();
  const ghost = document.createElement("div");
  ghost.className = "tab-drag-ghost";
  ghost.textContent = tabDrag.tab.textContent;
  ghost.style.width = `${rect.width}px`;
  ghost.style.height = `${rect.height}px`;
  document.body.appendChild(ghost);

  tabDrag.active = true;
  tabDrag.ghost = ghost;
  tabDrag.tab.classList.add("is-placeholder");
  positionTabGhost(event.clientX, event.clientY);
}

function startTabDrag(event) {
  const tab = event.target.closest(".tab");
  if (!tab || event.button > 0) {
    return;
  }

  tabDrag = {
    tab,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    active: false,
    ghost: null
  };
  tab.setPointerCapture?.(event.pointerId);
}

function moveTabDrag(event) {
  if (!tabDrag || event.pointerId !== tabDrag.pointerId) {
    return;
  }

  const distance = Math.hypot(event.clientX - tabDrag.startX, event.clientY - tabDrag.startY);
  if (!tabDrag.active && distance < 8) {
    return;
  }

  activateTabDrag(event);
  event.preventDefault();
  positionTabGhost(event.clientX, event.clientY);

  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".tab");
  if (!target || target === tabDrag.tab || !tabNav.contains(target)) {
    return;
  }

  const targetRect = target.getBoundingClientRect();
  const sameRow = event.clientY >= targetRect.top && event.clientY <= targetRect.bottom;
  const insertAfter = sameRow
    ? event.clientX > targetRect.left + targetRect.width / 2
    : event.clientY > targetRect.top + targetRect.height / 2;
  tabNav.insertBefore(tabDrag.tab, insertAfter ? target.nextSibling : target);
}

function endTabDrag(event) {
  if (!tabDrag || event.pointerId !== tabDrag.pointerId) {
    return;
  }

  tabDrag.tab.releasePointerCapture?.(event.pointerId);
  tabDrag.tab.classList.remove("is-placeholder");
  tabDrag.ghost?.remove();

  if (tabDrag.active) {
    saveTabOrder();
    suppressNextTabClick = true;
    window.setTimeout(() => {
      suppressNextTabClick = false;
    }, 250);
  }

  tabDrag = null;
}

function positionCropGhost(clientX, clientY) {
  if (!cropDrag?.ghost) {
    return;
  }

  cropDrag.ghost.style.left = `${clientX}px`;
  cropDrag.ghost.style.top = `${clientY}px`;
}

function activateCropDrag(event) {
  if (!cropDrag || cropDrag.active) {
    return;
  }

  const rect = cropDrag.card.getBoundingClientRect();
  const title = cropDrag.card.querySelector(".crop-card-title")?.textContent || "Crop";
  const group = cropDrag.card.querySelector(".crop-group-pill")?.textContent || "";
  const ghost = document.createElement("div");
  ghost.className = "crop-drag-ghost";
  ghost.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(group)}</span>`;
  ghost.style.width = `${rect.width}px`;
  document.body.appendChild(ghost);

  cropDrag.card.style.height = `${rect.height}px`;
  cropDrag.card.classList.add("is-card-placeholder");
  cropDrag.active = true;
  cropDrag.ghost = ghost;
  positionCropGhost(event.clientX, event.clientY);
}

function reorderCropDrag(clientY) {
  const cards = [...cropTracker.querySelectorAll(".crop-card:not(.is-card-placeholder)")];
  const target = cards.find((card) => {
    const rect = card.getBoundingClientRect();
    return clientY < rect.top + rect.height / 2;
  });

  cropTracker.insertBefore(cropDrag.card, target || null);
}

function startCropDrag(event) {
  const toggle = event.target.closest("[data-crop-toggle]");
  if (!toggle || event.button > 0) {
    return;
  }

  const card = toggle.closest(".crop-card");
  cropDrag = {
    card,
    handle: toggle,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    active: false,
    ghost: null
  };
  toggle.setPointerCapture?.(event.pointerId);
}

function moveCropDrag(event) {
  if (!cropDrag || event.pointerId !== cropDrag.pointerId) {
    return;
  }

  const distance = Math.hypot(event.clientX - cropDrag.startX, event.clientY - cropDrag.startY);
  if (!cropDrag.active && distance < 8) {
    return;
  }

  activateCropDrag(event);
  event.preventDefault();
  positionCropGhost(event.clientX, event.clientY);
  reorderCropDrag(event.clientY);

  if (event.clientY < 80) {
    window.scrollBy({ top: -14, behavior: "auto" });
  } else if (event.clientY > window.innerHeight - 80) {
    window.scrollBy({ top: 14, behavior: "auto" });
  }
}

function endCropDrag(event) {
  if (!cropDrag || event.pointerId !== cropDrag.pointerId) {
    return;
  }

  cropDrag.handle.releasePointerCapture?.(event.pointerId);
  cropDrag.card.classList.remove("is-card-placeholder");
  cropDrag.card.style.height = "";
  cropDrag.ghost?.remove();

  if (cropDrag.active) {
    saveCropOrder();
    suppressNextCropToggleClick = true;
    window.setTimeout(() => {
      suppressNextCropToggleClick = false;
    }, 250);
  }

  cropDrag = null;
}

function setTab(nextTab) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === nextTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === nextTab);
  });

  localStorage.setItem("gardenNotesTab", nextTab);
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (tab) {
    if (suppressNextTabClick) {
      event.preventDefault();
      return;
    }

    setTab(tab.dataset.tab);
    return;
  }

  const alphaButton = event.target.closest("[data-letter]");
  if (alphaButton) {
    document.querySelector(`#letter-${alphaButton.dataset.letter}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    return;
  }

  const feedButton = event.target.closest("[data-feed-log]");
  if (feedButton) {
    logFeed(feedButton.dataset.feedLog);
    return;
  }

  const undoButton = event.target.closest("[data-feed-undo]");
  if (undoButton) {
    undoLastFeedLog();
    return;
  }

  const cropLogButton = event.target.closest("[data-crop-log]");
  if (cropLogButton) {
    logCropFeeding(cropLogButton.closest(".crop-card"));
    return;
  }

  const cropToggleButton = event.target.closest("[data-crop-toggle]");
  if (cropToggleButton) {
    if (suppressNextCropToggleClick) {
      event.preventDefault();
      return;
    }

    toggleCropCard(cropToggleButton.closest(".crop-card"));
    return;
  }

  const cropExpandButton = event.target.closest("[data-crop-expand-all]");
  if (cropExpandButton) {
    setAllCropCards(true);
    return;
  }

  const cropCollapseButton = event.target.closest("[data-crop-collapse-all]");
  if (cropCollapseButton) {
    setAllCropCards(false);
    return;
  }

  const cropUndoButton = event.target.closest("[data-crop-undo]");
  if (cropUndoButton) {
    undoLastCropLog();
    return;
  }

  const vegButton = event.target.closest(".veg-button");
  if (vegButton) {
    const item = vegButton.closest(".veg-item");
    const isOpen = item.classList.toggle("is-open");
    vegButton.setAttribute("aria-expanded", String(isOpen));
  }
});

document.addEventListener("change", (event) => {
  const phaseSelect = event.target.closest("[data-crop-phase]");
  if (phaseSelect) {
    const card = phaseSelect.closest(".crop-card");
    const phaseState = readCropPhaseState();
    phaseState[card.dataset.cropId] = phaseSelect.value;
    writeCropPhaseState(phaseState);
    renderCropTracker();
    return;
  }

  const select = event.target.closest("[data-crop-product]");
  if (!select) {
    return;
  }

  const card = select.closest(".crop-card");
  const crop = cropPlans.find((item) => item.id === card.dataset.cropId);
  if (!crop) {
    return;
  }

  const product = selectedCropProduct(crop, select.value);
  card.querySelector("[data-crop-amount]").value = product.rate;
});

tabNav?.addEventListener("pointerdown", startTabDrag);
tabNav?.addEventListener("pointermove", moveTabDrag);
tabNav?.addEventListener("pointerup", endTabDrag);
tabNav?.addEventListener("pointercancel", endTabDrag);
cropTracker?.addEventListener("pointerdown", startCropDrag);
cropTracker?.addEventListener("pointermove", moveCropDrag);
cropTracker?.addEventListener("pointerup", endCropDrag);
cropTracker?.addEventListener("pointercancel", endCropDrag);

searchInput.addEventListener("input", renderVegetables);

applySavedTabOrder();
renderVegetables();
renderFertilizers();
renderFeedLog();
renderCropTracker();
setTab(localStorage.getItem("gardenNotesTab") || "vegetables");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
