(() => {
  const PHONE = "526144137178";
  const WA_TEXT = "Hola, me interesa un auto de su inventario.";
  const WA_LINK = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(WA_TEXT);

  const CARS = [
    { slug: "nissan-versa-2021", name: "Nissan Versa Sense", meta: "2021 · 62,000 km · Automático", price: "$259,000", type: "Sedán" },
    { slug: "chevrolet-aveo-2020", name: "Chevrolet Aveo LS", meta: "2020 · 78,500 km · Manual", price: "$215,000", type: "Sedán" },
    { slug: "mazda3-2019", name: "Mazda 3 i Touring", meta: "2019 · 84,000 km · Automático", price: "$289,000", type: "Sedán" },
    { slug: "kia-rio-2021", name: "Kia Rio LX", meta: "2021 · 51,000 km · Automático", price: "$249,000", type: "Hatchback" },
    { slug: "vw-polo-2020", name: "Volkswagen Polo Comfortline", meta: "2020 · 69,000 km · Automático", price: "$239,000", type: "Hatchback" },
    { slug: "nissan-kicks-2020", name: "Nissan Kicks Advance", meta: "2020 · 74,000 km · Automático", price: "$319,000", type: "SUV" },
    { slug: "audi-q8-2019", name: "Audi Q8 S Line", meta: "2019 · 88,000 km · Automático", price: "$949,000", type: "SUV" },
    { slug: "ford-ranger-2019", name: "Ford Ranger XL", meta: "2019 · 96,000 km · Diésel", price: "$389,000", type: "Pick-up" },
    { slug: "toyota-hilux-2018", name: "Toyota Hilux Base", meta: "2018 · 112,000 km · Manual", price: "$429,000", type: "Pick-up" },
  ];

  const FILTER_LABELS = ["Todos", "Sedán", "Hatchback", "SUV", "Pick-up"];

  let activeFilter = "Todos";

  const filtersEl = document.getElementById("filters");
  const countLabelEl = document.getElementById("countLabel");
  const carGridEl = document.getElementById("carGrid");

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shownCars() {
    return activeFilter === "Todos" ? CARS : CARS.filter((c) => c.type === activeFilter);
  }

  function renderFilters() {
    filtersEl.innerHTML = "";
    FILTER_LABELS.forEach((label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-btn" + (label === activeFilter ? " is-active" : "");
      btn.textContent = label;
      btn.addEventListener("click", () => {
        activeFilter = label;
        renderFilters();
        renderCars();
      });
      filtersEl.appendChild(btn);
    });
  }

  function renderCars() {
    const cars = shownCars();

    countLabelEl.textContent = cars.length + (cars.length === 1 ? " unidad disponible" : " unidades disponibles");

    carGridEl.innerHTML = cars
      .map(
        (car) => `
      <article class="car-card">
        <div class="car-photo">
          <span>foto: ${escapeHtml(car.slug)}</span>
        </div>
        <div class="car-body">
          <div>
            <h3 class="car-name">${escapeHtml(car.name)}</h3>
            <p class="car-meta">${escapeHtml(car.meta)}</p>
          </div>
          <div class="car-price">${escapeHtml(car.price)}</div>
          <div class="car-actions">
            <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn-dark">Cotizar</a>
            <a href="${WA_LINK}" target="_blank" rel="noopener" class="btn btn-outline-dark">Ver más</a>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  document.querySelectorAll("[data-wa-link]").forEach((el) => {
    el.setAttribute("href", WA_LINK);
  });

  renderFilters();
  renderCars();
})();
