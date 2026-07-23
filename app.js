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

const cropPlans = [
  {
    id: "tomatoes",
    name: "Tomatoes",
    group: "Fruit-Fill Crops",
    note: "Fruit-fill management: steady water, calcium transport, then K-supported ripening.",
    products: [
      { name: "Espoma Tomato-tone", rate: "3 tbsp in soil", timing: "Immediate soil top-dress" },
      { name: "Farmer's Secret Tomato Booster", rate: "4 tsp per 2-gal jug", timing: "Every 10-14 days starting mid-August" }
    ]
  },
  {
    id: "zucchini-squash",
    name: "Zucchini & Squash",
    group: "Cucurbits",
    note: "Support reproductive growth, pollination access, and continued harvest pressure.",
    products: [
      { name: "Espoma Tomato-tone", rate: "3 tbsp in soil", timing: "Immediate soil top-dress" },
      { name: "FoxFarm Tiger Bloom", rate: "4 tsp per 2-gal jug", timing: "Every 14 days during morning watering" }
    ]
  },
  {
    id: "celery",
    name: "Celery",
    group: "Greens & Stalks",
    note: "Nitrogen plus constant moisture. Do not let the root zone dry down hard.",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "4 tbsp per 2-gal jug", timing: "Weekly" }]
  },
  {
    id: "kale",
    name: "Kale",
    group: "Greens & Stalks",
    note: "Keep vegetative growth active; avoid drought stress and heat-triggered toughness.",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "4 tbsp per 2-gal jug", timing: "Weekly" }]
  },
  {
    id: "corn",
    name: "Corn",
    group: "Greens & Stalks",
    note: "Grass-family nitrogen demand is high during rapid growth and ear fill.",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "4 tbsp per 2-gal jug", timing: "Weekly" }]
  },
  {
    id: "eggplant",
    name: "Eggplant",
    group: "Fruit-Fill Crops",
    note: "Treat like tomato-style fruit-fill: steady moisture, calcium availability, late K emphasis.",
    products: [
      { name: "Espoma Tomato-tone", rate: "3 tbsp in soil", timing: "Immediate soil top-dress" },
      { name: "Farmer's Secret Tomato Booster", rate: "4 tsp per 2-gal jug", timing: "Every 10-14 days starting mid-August" }
    ]
  },
  {
    id: "strawberries",
    name: "Strawberries",
    group: "Fruit-Fill Crops",
    note: "Light feeding only; avoid excess nitrogen that favors leaves/runners over berry quality.",
    products: [
      { name: "Espoma Tomato-tone", rate: "1.5 tbsp in soil", timing: "Immediate light soil top-dress" },
      { name: "Farmer's Secret Tomato Booster", rate: "4 tsp per 2-gal jug", timing: "Every 10-14 days starting mid-August" }
    ]
  },
  {
    id: "leeks",
    name: "Leeks",
    group: "Roots & Storage Organs",
    note: "Low-maintenance base fertility. Fish emulsion only as a light rescue if pale/stalled.",
    products: [{ name: "Espoma Tomato-tone", rate: "1.5 tbsp in soil", timing: "Immediate single feed" }]
  },
  {
    id: "horseradish",
    name: "Horseradish",
    group: "Roots & Storage Organs",
    note: "Feed once and allow natural seasonal root build.",
    products: [{ name: "Espoma Tomato-tone", rate: "1.5 tbsp in soil", timing: "Immediate single feed" }]
  },
  {
    id: "herbs-leafy",
    name: "Leafy Herbs",
    group: "Herbs",
    note: "For basil, parsley, cilantro, dill, mint, and chives. Use nitrogen lightly for leaf production.",
    products: [{ name: "Alaska Fish Fertilizer QT", rate: "Half-strength", timing: "Every 3-4 weeks only if actively growing" }]
  },
  {
    id: "herbs-woody",
    name: "Woody Herbs",
    group: "Herbs",
    note: "Rosemary, thyme, oregano, sage, and lavender prefer leaner soil. Skip routine fish emulsion.",
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

function renderCropTracker() {
  if (!cropTracker) {
    return;
  }

  const entries = readCropLog();
  const openState = readCropOpenState();
  cropTracker.innerHTML = orderedCropPlans()
    .map((crop) => {
      const cropEntries = entries
        .filter((entry) => entry.cropId === crop.id)
        .sort((a, b) => b.timestamp - a.timestamp);
      const latest = cropEntries[0];
      const defaultProduct = crop.products[0];
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
        .map((product) => `<option value="${escapeHtml(product.name)}">${escapeHtml(product.name)}</option>`)
        .join("");
      const history = cropEntries.length
        ? cropEntries
            .slice(0, 4)
            .map(
              (entry) => `
                <div class="crop-history-row">
                  <strong>${formatFeedDate(entry.date)}</strong>
                  <p>${escapeHtml(entry.product)} | ${escapeHtml(entry.amount)}${
                    entry.note ? `<br>${escapeHtml(entry.note)}` : ""
                  }</p>
                </div>
              `
            )
            .join("")
        : `<div class="crop-history-row"><strong>Status</strong><p>No feedings logged for this crop yet.</p></div>`;
      const isOpen = openState[crop.id] === true;
      const lastFed = latest ? `${relativeFeedDate(latest.date)} (${formatFeedDate(latest.date)})` : "not logged";

      return `
        <article class="crop-card ${isOpen ? "is-open" : ""}" data-crop-id="${crop.id}">
          <button class="crop-toggle" type="button" data-crop-toggle aria-expanded="${String(isOpen)}">
            <span class="chevron crop-chevron" aria-hidden="true">></span>
            <span class="crop-title-wrap">
              <span class="crop-card-title">${escapeHtml(crop.name)}</span>
              <span class="crop-last-fed">Last fed: ${lastFed}</span>
            </span>
            <span class="crop-group-pill">${escapeHtml(crop.group)}</span>
          </button>
          <div class="crop-card-body">
            <p class="crop-note">${escapeHtml(crop.note)}</p>
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
  const entries = readCropLog();
  entries.push({
    cropId: crop.id,
    cropName: crop.name,
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
