/* Analytika: self-hosted Umami (dashboard analytics.kryptology.sk).
   Bez cookies — netreba consent banner. Jediné miesto v projekte, ktoré vie
   o analytics nástroji; výmena nástroja = úprava tohto súboru.
   Web beží na GitHub Pages (statický hosting bez reverse-proxy), preto sa
   script načítava priamo z Umami inštancie. Meria len ostrú doménu —
   file://, localhost ani náhľady sa nepočítajú. Umami samo sleduje aj
   pushState navigáciu (Material navigation.instant).

   Eventy:
   - prompt_copy { section } — klik na „kopírovať" pri bloku kódu/promptu;
     section = id (príp. text) najbližšieho nadpisu nad blokom.
   - file_download { file, ext, section } — klik na odkaz na súbor
     (.xlsx, .docx, .pdf, .pptx, .rp, .zip), teda na šablónu alebo príklad.
     file = názov súboru, ext = prípona, section = najbližší nadpis nad
     odkazom, stránka je v url_path eventu. Od 2026-10-10. */
(function () {
  if (location.hostname !== "tvorbawww.fabus.eu") return;
  if (window.__twAnalytics) return; // idempotencia pri prípadnom opätovnom spustení
  window.__twAnalytics = true;

  var s = document.createElement("script");
  s.src = "https://analytics.kryptology.sk/script.js";
  s.defer = true;
  s.setAttribute("data-website-id", "e53ee800-2641-4c21-8cfe-a563d5b7e2c2");
  document.head.appendChild(s);

  /* Najbližší nadpis nad prvkom — stúpa po rodičoch a ich predchádzajúcich
     súrodencoch (nadpis nie je predok <pre>, je to súrodenec v .md-typeset). */
  function najblizsiNadpis(el) {
    for (var node = el; node; node = node.parentElement) {
      for (var sib = node.previousElementSibling; sib; sib = sib.previousElementSibling) {
        if (/^H[1-4]$/.test(sib.tagName)) {
          return (sib.id || sib.textContent.trim()).slice(0, 50);
        }
      }
    }
    return "";
  }

  /* Delegovane na document — prežije výmenu obsahu pri navigation.instant
     a chytí aj tlačidlá vložené neskôr. Material vkladá copy tlačidlo ako
     .md-code__button[data-md-type="copy"]; .md-clipboard je náš file:// fallback. */
  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest
      ? e.target.closest('.md-clipboard, .md-code__button[data-md-type="copy"]')
      : null;
    if (!btn || !window.umami) return;
    try {
      window.umami.track("prompt_copy", { section: najblizsiNadpis(btn) });
    } catch (err) {
      // analytika nikdy nesmie pokaziť stránku
    }
  });

  /* Sťahovanie súborov — klik na odkaz, ktorého cesta končí príponou šablóny
     alebo príkladu (.xlsx, .docx, .pdf, .pptx, .rp, .zip). Umami samo meria
     len načítania HTML stránok, klik na súbor by sa inak nezaznamenal.
     Delegovane na document, odkaz sa nemení a prehliadač ho spracuje ako
     doteraz. Tracker posiela event s keepalive, takže prežije aj otvorenie
     PDF v tej istej karte. */
  var SUBORY = /\.(xlsx|docx|pdf|pptx|rp|zip)$/i;
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
    if (!a || !window.umami) return;
    var cesta;
    try {
      cesta = new URL(a.href, location.href).pathname;
    } catch (err) {
      return;
    }
    if (!SUBORY.test(cesta)) return;
    try {
      window.umami.track("file_download", {
        file: decodeURIComponent(cesta.split("/").pop()).slice(0, 100),
        ext: cesta.split(".").pop().toLowerCase(),
        section: najblizsiNadpis(a)
      });
    } catch (err) {
      // analytika nikdy nesmie pokaziť stránku
    }
  });
})();
