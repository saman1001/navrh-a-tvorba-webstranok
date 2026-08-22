# Návrh a tvorba webových stránok — zdroj predmetu

Materiál predmetu **Návrh a tvorba webových stránok** pre študentov elektronického obchodu a manažmentu.
Postavený na [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Štruktúra

Predmet je jedna dráha cez 12 blokov: študent si web **navrhne**, potom ho **postaví s AI** a nakoniec **odprezentuje**.

- **Časť 1 — Webdizajn** (`docs/01-webdizajn/`) — bloky 1–5: cieľ webu, persóny, informačná architektúra, papierový a interaktívny prototyp; výstupom je design brief (zadanie pre AI). Šablóny a vzory sú v `docs/01-webdizajn/subory/`.
- **Časť 2 — Vibe coding** (`docs/02-vibe-coding/`) — bloky 6–11: tvorba webu s AI asistentom; v bloku 11 študent postaví web navrhnutý v časti 1.
- **Záver** (`docs/03-zaver/`) — blok 12: referát a prezentácia.
- **Znalostná báza** (`docs/znalostna-baza/`) — návody a postupy, na ktoré bloky odkazujú.
- **Sylabus cvičení** (`SYLABUS-CVICENIA.md`) — metodická príručka pre vyučujúceho (12 cvičení); je mimo `docs/`, takže sa nedostane do webu pre študentov.
- **Roadmapa** (`ROADMAP.md`) — checklist, čo je hotové a čo čaká.
- **Stav projektu** (`CURRENT.md`) — interný snapshot stavu pre vývoj; spolu so zadaním (`SPEC.md`) je mimo repozitára.
- **Pôvodné podklady** (`webdizajn/`) — materiály vyučujúceho, z ktorých vznikla časť 1; nejdú do webu.

## Ako si materiál pozrieť lokálne

Potrebuješ Python (máš ho). V priečinku `tvorba_webstranok`:

```bash
pip install mkdocs-material
mkdocs serve
```

Potom otvor `http://127.0.0.1:8000` v prehliadači. Pri každej zmene `.md` súboru sa web sám obnoví.
(Ak príkaz `mkdocs` nie je v PATH, použi `python -m mkdocs serve` / `python -m mkdocs build`.)

## Ako materiál vydať online

Web beží na GitHub Pages s vlastnou doménou: **https://tvorbawww.fabus.eu**

```bash
python -m mkdocs gh-deploy --force   # build + nasadenie na GitHub Pages (vetva gh-pages)
mkdocs build                          # len lokálny build do site/ (dá sa otvoriť dvojklikom)
```

## Poznámka k prostrediu predmetu

Predmet beží v **GitHub Codespaces + GitHub Copilot** (VS Code v prehliadači) — študenti
nič neinštalujú. Alternatívne sa dá pracovať aj v **predinštalovanom VS Code** (stačí
prihlásiť sa cez GitHub). Detaily v `docs/znalostna-baza/prostredie-codespaces.md`.
