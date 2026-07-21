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

const vegList = document.querySelector("#vegList");
const fertList = document.querySelector("#fertList");
const alphaStrip = document.querySelector("#alphaStrip");
const searchInput = document.querySelector("#search");
const tabs = [...document.querySelectorAll(".tab")];
const panels = [...document.querySelectorAll(".tab-panel")];

const normalize = (value) => value.toLowerCase().trim();

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
    const haystack = normalize(`${item.name} ${item.feeding} ${item.schedule} ${item.notes}`);
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

  const vegButton = event.target.closest(".veg-button");
  if (vegButton) {
    const item = vegButton.closest(".veg-item");
    const isOpen = item.classList.toggle("is-open");
    vegButton.setAttribute("aria-expanded", String(isOpen));
  }
});

searchInput.addEventListener("input", renderVegetables);

renderVegetables();
renderFertilizers();
setTab(localStorage.getItem("gardenNotesTab") || "vegetables");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
