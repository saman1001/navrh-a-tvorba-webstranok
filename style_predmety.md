# Štýl webov mojich predmetov

Prenositeľný style guide pre webstránky predmetov, ktoré učím (Juraj Fabuš, FPEDAS UNIZA).
Cieľ: každý nový predmetový web má vyzerať ako „z jednej rodiny" — rovnaké farby, typografia,
komponenty a správanie, mení sa len obsah a prípadne akcentová farba.

**Referenčná implementácia:** tento repozitár (`tvorba_webstranok`, predmet Návrh a tvorba
webových stránok). Zdrojom pravdy sú súbory v ňom — tento dokument vysvetľuje, čo znamenajú
a čo si nový projekt skopíruje. Pri zmene štýlu v referenčnom repe aktualizuj aj tento súbor.

---

## 1. Identita v skratke

- **Stack:** MkDocs + téma **Material for MkDocs**, jazyk `sk`, svetlý aj tmavý režim s prepínačom.
- **Farby:** petrolejová (primárna, `#0E5A6B`) + koralová (akcent, `#E4572E`) na teplom
  krémovom pozadí (`#FAF8F5`). Nie čistá biela stránka — biela je len na „kartách" (surface).
- **Hĺbka cez okraje, nie tiene a gradienty.** Všetko má 1px border (`--tw-border`),
  `box-shadow: none`; jediný tieň je jemný hover na kartách.
- **Zaoblenie:** 12 px (boxy, tabuľky, tlačidlá, kód), 16 px (karty), 999 px (badge/pill).
- **Typografia:** nadpisy **Bricolage Grotesque** (výrazné, h1 váha 800 so záporným letter-spacingom),
  text **IBM Plex Sans**, kód **IBM Plex Mono**.
- **Tón obsahu:** slovenčina, tykanie študentovi, krátke vety, konkrétne úlohy
  („tvojou úlohou je rozhodovať, zadávať a kontrolovať").

## 2. Čo skopírovať do nového projektu (1 : 1)

| Súbor | Účel |
|---|---|
| `docs/stylesheets/extra.css` | celý vizuál — tokeny, typografia, komponenty (kopíruj celý) |
| `docs/javascripts/copy-lokalne.js` | záložné tlačidlo „kopírovať" pri otvorení webu z `file://` |
| `docs/javascripts/umami.js` | analytika (Umami) vrátane eventu `prompt_copy` (kopírovanie promptov) — **zmeň doménu a website ID** pre nový predmet |

Ak chce nový predmet inú akcentovú farbu, meň v `extra.css` **len tokeny** v `:root` a
`[data-md-color-scheme="slate"]` (sekcia 4) — selektory a komponenty nechaj bez zmeny.

## 3. `mkdocs.yml` — kostra nastavení

Skopíruj a uprav len `site_name`, `site_description`, `site_url`, `repo_*` a `nav`:

```yaml
site_name: <Názov predmetu>
site_description: <Popis predmetu>
site_author: Juraj Fabuš
site_url: <https://...>
copyright: "© <rok> <Názov predmetu> · Žilinská univerzita v Žiline"
docs_dir: docs
# false = generuje blok-8.html (nie blok-8/index.html) — HTML sa dá otvoriť aj dvojklikom (file://)
use_directory_urls: false

theme:
  name: material
  language: sk
  features:
    - navigation.instant
    - navigation.tracking
    - navigation.sections
    - navigation.top
    - navigation.footer
    - toc.follow
    - search.suggest
    - search.highlight
    - content.code.copy
    - content.code.annotate
  palette:
    - media: "(prefers-color-scheme: light)"
      scheme: default
      primary: custom
      accent: custom
      toggle:
        icon: material/weather-night
        name: Prepnúť na tmavý režim
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: custom
      accent: custom
      toggle:
        icon: material/weather-sunny
        name: Prepnúť na svetlý režim
  font:
    text: IBM Plex Sans
    code: IBM Plex Mono

extra_css:
  - stylesheets/extra.css

extra_javascript:
  - javascripts/copy-lokalne.js
  - javascripts/umami.js

markdown_extensions:
  - admonition
  - pymdownx.tasklist:
      custom_checkbox: true
  - pymdownx.details
  - pymdownx.superfences
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - attr_list
  - md_in_html
  - tables
  - toc:
      permalink: true

plugins:
  - search
  # PDF archív semestra: spojená stránka print_page.html (Ctrl+P alebo headless Chrome)
  - print-site:
      add_to_navigation: false
      add_cover_page: true
      enumerate_headings: false
      add_print_site_banner: false
```

Kľúčové rozhodnutia (nemeniť bez dôvodu):

- `primary: custom` + `accent: custom` — farby definuje `extra.css`, nie Material paleta.
- `use_directory_urls: false` — export sa dá študentom poslať ako ZIP a otvoriť dvojklikom.
- `print-site` plugin — na konci semestra PDF archív celého webu.
- **Analytika:** self-hosted **Umami** (spoločná inštancia, dashboard
  `analytics.kryptology.sk`) — bez cookies, takže bez consent banneru. Nový predmet =
  nová „website" v Umami → jej ID a doménu zapíš do `docs/javascripts/umami.js`.
  Weby na GitHub Pages načítavajú script priamo z inštancie (statický hosting
  nemá reverse-proxy). Žiadna GA.

## 4. Farebné tokeny

Definované v `extra.css`. Material premenné (`--md-*`) napájajú tému, vlastné tokeny majú
prefix `--tw-` (pri novom predmete môžeš prefix nechať — je to len interné meno).

### Svetlý režim (`default`)

| Token | Hodnota | Význam |
|---|---|---|
| `--md-primary-fg-color` | `#0E5A6B` | primárna petrolejová (odkazy, aktívne prvky, primárne tlačidlo) |
| `--md-primary-fg-color--dark` | `#0B4654` | tmavšia petrolejová (hover primárneho tlačidla) |
| `--md-accent-fg-color` / `--tw-accent` | `#E4572E` | koralový akcent (zvýraznenie v h1, číslice krokov, bodka v badge) |
| `--tw-accent-soft` | `#FBE9E1` | jemné koralové pozadie (podklad číslic krokov) |
| `--md-default-bg-color` | `#FAF8F5` | krémové pozadie stránky |
| `--tw-surface` | `#FFFFFF` | biele „karty": header, footer, karty, tlačidlá |
| `--tw-border` | `#E7E1D8` | univerzálny 1px okraj |
| `--tw-ink` / `--md-default-fg-color` | `#16282E` | základný text |
| `--tw-muted` | `#5A6B70` | sekundárny text, popisky |
| `--tw-primary-soft` | `#E7F0F1` | jemné petrolejové pozadie (hover tlačidiel) |
| `--tw-table-head` | `#F5F1EA` | hlavička tabuliek |
| `--tw-inline-code-bg` | `#F0EBE2` | pozadie inline kódu |
| `--tw-check` | `#2E7D4F` | zelená fajka v zoznamoch zručností |

Admonition boxy (pozadie / okraj / ikona):

| Typ | Pozadie | Okraj | Ikona |
|---|---|---|---|
| note | `#EEF5F6` | `#CBDEE3` | `#0E5A6B` |
| tip | `#F1F8F3` | `#C7E0CF` | `#2E7D4F` |
| warning | `#FBF3E7` | `#EBD9C3` | `#B4530A` |
| example | `#F3EFFA` | `#DDD3EE` | `#6B4FA0` |

### Tmavý režim (`slate`)

| Token | Hodnota | Poznámka |
|---|---|---|
| `--md-primary-fg-color` | `#146275` | |
| `--md-accent-fg-color` / `--tw-accent` | `#FF6B47` | koral zosvetlený kvôli kontrastu |
| `--md-default-bg-color` | `#0C171A` | veľmi tmavá petrolejovo-čierna |
| `--md-typeset-a-color` | `#5BBECE` | odkazy = svetlá petrolejová |
| `--tw-surface` | `#12242A` | |
| `--tw-border` | `#23393F` | |
| `--tw-ink` | `#E9EFEC` | |
| `--tw-muted` | `#9BB0AC` | |
| `--tw-accent-soft` | `#3A241D` | |
| `--tw-primary-soft` | `#12333A` | |
| `--tw-table-head` | `#142930` | |
| `--tw-inline-code-bg` | `#1B3238` | |
| `--tw-check` | `#4FBF7F` | |

Admonition boxy v tmavom: note `#0F272C`/`#1C3D45`/`#5BBECE` · tip `#12281C`/`#24503A`/`#4FBF7F`
· warning `#2E2013`/`#4A3418`/`#E8A25C` · example `#241F33`/`#3A3153`/`#B39DDB`.

**Bloky kódu sú tmavé v oboch režimoch** (pozadie `#10262C`, text `#DCE8E4`) — prompty a kód
vyzerajú ako terminál aj na svetlej stránke.

## 5. Typografia

- **Nadpisy h1–h4:** Bricolage Grotesque (import z Google Fonts priamo v `extra.css`,
  váhy 600/700/800). h1: váha 800, `letter-spacing: -0.02em`. h2–h4: váha 700.
- **Text:** IBM Plex Sans, **kód:** IBM Plex Mono — oboje cez `theme.font` v `mkdocs.yml`.
- Hero h1 na úvode: 52 px (mobil 34 px), riadkovanie 1.12.
- Sekcie v ľavej navigácii: verzálky, 0.62 rem, letter-spacing 0.06em, muted farba.

## 6. Komponenty a ich používanie

### Admonition boxy — ustálený význam

- `!!! note` — kontext, vysvetlenie, „ako to funguje" (petrolejová)
- `!!! tip` — odporúčanie, skratka, dobrá prax (zelená)
- `!!! warning` — na čo si dať pozor, časté chyby (jantárová)
- `!!! example` — ukážka, vzorové riešenie (fialová)

Iné typy (danger, info…) nepoužívam — štyri stačia a študent sa naučí ich čítať.

### Grid karty (úvod, prehľady častí)

```markdown
<div class="grid cards" markdown>

- :material-palette: **Časť 1 — Webdizajn (bloky 1–5)**

    Krátky popis časti.

    [Otvoriť časť →](01-webdizajn/index.md)

</div>
```

### Hero na úvodnej stránke

Úvod má `hide: [navigation, toc]` vo frontmatteri. Štruktúra (triedy z `extra.css`):

```html
<div class="tw-hero" markdown>

<h1>Prvá časť titulku <span class="tw-accent">zvýraznená časť</span> — dovetok.</h1>

<p class="tw-hero-lead">Jedna–dve vety, čo študent na predmete dokáže.</p>

<div class="tw-hero-cta">
  <a class="md-button md-button--primary" href="...">Primárna akcia →</a>
  <a class="md-button" href="...">Sekundárny odkaz</a>
</div>

<div class="tw-steps">
  <div class="tw-step"><span class="tw-step-num">01</span><span><span class="tw-step-title">Krok</span><br><span class="tw-step-sub">rozsah</span></span></div>
  <span class="tw-step-arrow">→</span>
  <div class="tw-step"><span class="tw-step-num">02</span><span><span class="tw-step-title">Krok</span><br><span class="tw-step-sub">rozsah</span></span></div>
</div>

</div>
```

Voliteľne `tw-hero-badge` (pill s `tw-dot` bodkou) nad h1. Kroky sú vždy 2–4, na mobile
sa skladajú pod seba a šípky zmiznú.

### Zoznam zručností s fajkami

```markdown
<div class="tw-skills" markdown>

- **kľúčová zručnosť** — spresnenie,
- ďalšia zručnosť,

</div>
```

### Obrázky

Zaoblené rohy a lazy loading cez `attr_list`:

```markdown
![Zmysluplný alt text](img/obrazok.jpg){ style="border-radius: 12px;" loading=lazy }
```

## 7. Štruktúra obsahu a navigácie

- Obsah v `docs/`, kapitoly v číslovaných priečinkoch: `01-<cast>/`, `02-<cast>/`, `03-zaver/`.
- Súbory blokov: `blok-N-kratky-nazov.md` (kebab-case, bez diakritiky).
- Prílohy na stiahnutie v `<cast>/subory/`, obrázky v `<cast>/img/`.
- `nav`: **Úvod** → časti s prefixom „Časť N — …" (v časti najprv `Prehľad`, potom
  „Blok N — Názov") → **Záver** → **Znalostná báza** (návody, na ktoré bloky odkazujú).
- Vďaka `navigation.sections` sú časti nadpisy v ľavom paneli, nie rozbaľovacie uzly.

## 8. Checklist pre nový predmetový web

- [ ] `mkdocs.yml` z kostry (sekcia 3), upravené `site_*`, `copyright`, `nav`
- [ ] skopírovaný `docs/stylesheets/extra.css` + `docs/javascripts/copy-lokalne.js`
- [ ] `pip install mkdocs-material mkdocs-print-site-plugin`
- [ ] úvodná stránka: hero + kroky + grid karty + zoznam zručností + tip na znalostnú bázu
- [ ] založená website v Umami (`analytics.kryptology.sk`) + jej ID a doména v `docs/javascripts/umami.js`
- [ ] skontrolovaný svetlý **aj tmavý** režim a mobil (44em breakpoint)
- [ ] pri odchýlke od tohto guidu: buď ju vrátiť, alebo zapracovať sem
