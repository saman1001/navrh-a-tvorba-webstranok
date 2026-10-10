# Roadmapa

Checklist funkcií projektu — čo je hotové a čo čaká. Bez dátumov (históriu drží git). Súbor je verejný — žiadne interné dohody. Detail rozpracovaných vecí je v CURRENT.md, zadanie v SPEC.md.

## Obsah predmetu

- [x] Úvodná stránka so štruktúrou dráhy (navrhni → postav → odprezentuj)
- [x] Časť 1 — Webdizajn, bloky 1–5 (cieľ webu, persóny, informačná architektúra, papierový a interaktívny prototyp, design brief)
- [x] Časť 2 — Vibe coding, bloky 6–11 (stavba webu s AI podľa design briefu, prompty a kontrolné kroky)
- [x] Blok 12 — referát a prezentácia (štruktúra referátu s bodovaním, osnova prezentácie)
- [x] Znalostná báza — 8 podporných stránok (prostredie, git, bezpečnosť kľúčov, nasadenie, kontrola webu, prístupnosť…)
- [x] 5-minútová kontrola prístupnosti (znalostná báza + kotvy v blokoch 10 a 11)
- [x] Šablóny a vzory na stiahnutie k blokom 1–5 (persóny, IA mind mapa, papierový prototyp, Axure vzor, cieľ webu)
- [x] Vzorový design brief doručovacej spoločnosti + ukážka výstupu z Claude Design (blok 5)
- [x] Požiadavka na interakcie v Axure prototype — stránková + štýlová (blok 5)
- [ ] Postup rozbaľovacieho menu v Axure alebo ekvivalentnom nástroji (blok 5)
- [ ] Zoznam nástrojov na testovanie webu — responzívnosť, WCAG, HTML, rýchlosť, kompletný test (blok 10)

## Web

- [x] Kostra MkDocs Material, slovenská lokalizácia, navigácia
- [x] Vlastný dizajn — petrolejová + koralová paleta, fonty, hero úvod, svetlý/tmavý režim
- [x] Komiksová infografika dráhy predmetu na úvodnej stránke
- [x] Kopírovanie promptov aj pri lokálnom otvorení HTML (file://)
- [x] Build bez warningov (`mkdocs build --strict`), overené interné odkazy
- [x] PDF archív celého webu (plugin print-site, postup v README)
- [x] Self-hosted Umami analytika bez cookies a consent lišty (namiesto GA4)
- [x] Meranie sťahovania šablón a príkladov — event `file_download { file, ext, section }` v `umami.js` (od 2026-10-10)
- [x] Stránka Ochrana súkromia s odkazom v pätičke
- [x] Style guide predmetových webov (`style_predmety.md`), tento web ako referenčná implementácia
- [ ] Pripnuté verzie MkDocs, Material a pluginov v `requirements.txt` (ochrana pred nekompatibilným MkDocs 2.0)

## Nasadenie

- [x] Verejný GitHub repozitár (interné súbory mimo repa)
- [x] GitHub Pages (`mkdocs gh-deploy`)
- [x] Vlastná doména tvorbawww.fabus.eu s HTTPS

## Pre vyučujúceho

- [x] Sylabus 12 cvičení (interný, mimo webu)
- [x] Námety na prednášky pre prednášajúceho (1 strana A4)
- [x] Checklist nastavenia Moodle s podmienkami absolvovania (interný, mimo repa)
- [x] Rubrika hodnotenia referátov a odovzdaných webov (v sylabe)

## Šablóna pre študentov

- [x] Template repozitár `eoam-vibe-web-template` (Codespaces, `.devcontainer`), odkazy v predmete
