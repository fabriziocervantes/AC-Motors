(() => {
  const PHONE = "526144137178";
  const WA_TEXT = "Hola, me interesa un auto de su inventario.";
  const ADDRESS = "Rep. de Perú 213, Panamericana, 31210 Chihuahua, Chih.";
  const ADDRESS_MAP = "Rep. de Peru 213, Panamericana, 31210 Chihuahua, Chih.";

  window.SITE_WA_LINK = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(WA_TEXT);
  window.SITE_MAP_LINK = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);
  window.SITE_MAP_EMBED = "https://maps.google.com/maps?q=" + encodeURIComponent(ADDRESS_MAP) + "&z=15&output=embed";

  document.querySelectorAll("[data-wa-link]").forEach((el) => el.setAttribute("href", window.SITE_WA_LINK));
  document.querySelectorAll("[data-map-link]").forEach((el) => el.setAttribute("href", window.SITE_MAP_LINK));
  document.querySelectorAll("[data-map-embed]").forEach((el) => el.setAttribute("src", window.SITE_MAP_EMBED));
})();
