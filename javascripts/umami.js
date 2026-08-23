/* Analytika: self-hosted Umami (dashboard analytics.kryptology.sk).
   Bez cookies — netreba consent banner. Jediné miesto v projekte, ktoré vie
   o analytics nástroji; výmena nástroja = úprava tohto súboru.
   Web beží na GitHub Pages (statický hosting bez reverse-proxy), preto sa
   script načítava priamo z Umami inštancie. Meria len ostrú doménu —
   file://, localhost ani náhľady sa nepočítajú. Umami samo sleduje aj
   pushState navigáciu (Material navigation.instant). */
(function () {
  if (location.hostname !== "tvorbawww.fabus.eu") return;
  if (document.querySelector("script[data-website-id]")) return; // už vložený

  var s = document.createElement("script");
  s.src = "https://analytics.kryptology.sk/script.js";
  s.defer = true;
  s.setAttribute("data-website-id", "e53ee800-2641-4c21-8cfe-a563d5b7e2c2");
  document.head.appendChild(s);
})();
