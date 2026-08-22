# Blok 5 — Interaktívny prototyp a zadanie pre AI

Papierový prototyp má jednu slabinu: každý si ho môže vyložiť po svojom. Statický náčrt nepovie, čo sa stane po kliknutí — a presne tam vznikajú nedorozumenia medzi návrhom a realizáciou. Preto posledný krok návrhu: **interaktívny prototyp** — klikateľná verzia tvojho webu, v ktorej sa dá naozaj „chodiť" medzi obrazovkami.

Interaktívny prototyp je v praxi **priame zadanie pre grafika a programátora**. V tvojom prípade bude programátorom **AI** — a na konci tohto bloku zbalíš celý svoj návrh do **design briefu**: dokumentu, ktorý v časti 2 dáš AI ako zadanie. Čím presnejší prototyp, tým menej si toho AI domyslí po svojom.

## 🎯 Čo sa v tomto bloku naučíš

- Preniesť papierový prototyp do digitálneho nástroja.
- Prepojiť obrazovky do **klikateľného** prototypu.
- Otestovať ho a porovnať výsledok s papierovou verziou.
- Zostaviť **design brief** — zadanie, podľa ktorého ti AI postaví web.

## Krok 1 — Vyber si nástroj 🛠️

Na cvičení pracujeme s dvoma cestami — vyber si (alebo skús obe):

**A) Axure RP — profesionálny štandard.** Najprepracovanejší prototypovací nástroj; používa sa nielen na weby, ale aj na návrhy mobilných aplikácií a veľkých informačných systémov. Na ňom ti bude vyučujúci postup ukazovať.

- **Študentská licencia zadarmo na 2 roky:** registruj sa na [axure.com/edu](https://www.axure.com/edu) — uveď **školský e-mail** a názov školy **Zilinska univerzita**.
- Návody: [Getting Started video](https://docs.axure.com/axure-rp/reference/getting-started-video/) · šablóny zadarmo: [Axemplate](https://axemplate.com/axure-freebies/), [Axure Themes](https://www.axurethemes.com/free-axure-tools)
- Vzorový projekt na rozobratie: 📥 **[axure-vzor.rp](subory/axure-vzor.rp)**

**B) Visily — jednoduchá AI cesta v prehliadači.** Bezplatný online nástroj ([visily.ai](https://www.visily.ai)), ktorý vie **z fotky tvojho papierového prototypu vygenerovať digitálny wireframe** — odfotíš papier z bloku 4, nahráš, a máš obrazovky, ktoré len upratáš a prepojíš. Nič neinštaluješ.

!!! tip "Ktorú cestu si vybrať?"
    Ak chceš zručnosť do životopisu a nevadí ti inštalácia — **Axure** (v praxi oň môžeš zavadiť pri návrhu informačných systémov). Ak chceš rýchly výsledok v prehliadači — **Visily**. Hodnotí sa výsledok (klikateľný prototyp verný tvojmu návrhu), nie nástroj.

!!! note "AI vzory áno, AI návrh nie"
    Vo Visily pokojne využi AI na **prevod tvojej fotky** na wireframe — to je tvoj návrh, len prekreslený. Neplatí to pre generovanie obrazoviek z textu („navrhni mi web kaviarne") — vtedy už nenavrhuješ ty, ale AI, a pravidlo časti 1 je porušené.

## Krok 2 — Prenes obrazovky 🖥️

Prekresli (alebo cez Visily prekonvertuj a uprac) obrazovky z papierového prototypu — **vrátane opráv z guerilla testu**. Drž sa zásad:

- **Verne k návrhu:** prototyp má zodpovedať tvojej informačnej architektúre a papierovým obrazovkám. Nezačínaj odznova „lebo v počítači to zvádza na krajšie".
- **Obsah radšej skutočný:** namiesto *lorem ipsum* píš skutočné nadpisy a texty svojho webu („Rezervuj si stôl", nie „Button 1"). AI v časti 2 tieto texty prevezme.
- **Detaily, ktoré rozhodujú:** stavy tlačidiel, čo je povinné vo formulári, čo sa zobrazí po odoslaní. Prototyp je zadanie — čo v ňom nie je, to si realizátor (AI!) domyslí sám.

## Krok 3 — Prepoj obrazovky do klikateľného celku 🔗

Toto je krok, ktorý z obrázkov robí prototyp: nastav **prepojenia** — klik na „Rezervovať" vedie na formulár, klik na logo vedie domov, odoslanie formulára vedie na poďakovanie. V Axure sa to robí interakciami na prvkoch, vo Visily prepojeniami v prototype móde.

Ak pracuješ v Axure, pridaj **minimálne dva druhy interakcií**:

1. **stránkovú** — klik na prvok vedie na inú stránku (prepojenia vyššie),
2. **štýlovú** — prvok pri interakcii zmení vzhľad, napr. položka menu pri prechode myšou zmení farbu textu (v Axure: *Style Effects → Mouse Over*).

Hotový prototyp si spusti v režime náhľadu a **preklikaj všetky cesty** — každé tlačidlo niekam vedie, žiadna slepá ulička.

## Krok 4 — Test: papier vs. klik 🧪

Zopakuj guerilla test z bloku 4 — tie isté **3 úlohy**, ale s **iným kolegom** (ten minulý už tvoj web pozná, jeho oči sú „opotrebované") a tentoraz klikaním v prototype. Pravidlá platia rovnako: nevysvetľuj, nechaj ho myslieť nahlas, zapisuj zaváhania.

Porovnaj s papierovým kolom: čo sa zlepšilo? Objavili sa nové zádrhely? Oprav ich — v prototype je to stále lacné.

## Krok 5 — Zostav design brief: zadanie pre AI 📦

Finále celej časti 1. Všetko, čo si za päť blokov vytvoril, zbalíš do jedného dokumentu — **design briefu**. V časti 2 ho doslova skopíruješ AI asistentovi ako zadanie webu.

Vytvor súbor **`zadanie-webu`** (dokument alebo Markdown) s touto štruktúrou:

```
# Zadanie webu: [názov]

## 1. Cieľ
Čo web robí a komu slúži (odsek z bloku 1) + odpovede na 4 otázky
(kto / aký problém / v čom lepší / prečo) + KPI.

## 2. Používatelia
3 persóny v skratke: meno, segment, hlavný problém, čo potrebuje,
čo od nej chce firma.

## 3. Štruktúra webu
Mind mapa (obrázok) alebo odrážkový zoznam sekcií a funkcií.

## 4. Obrazovky
Zoznam obrazoviek/sekcií + screenshoty z interaktívneho prototypu
(prípadne odkaz na spustiteľný prototyp). Pri každej: čo je na nej
najdôležitejšie a kam vedú tlačidlá.

## 5. Vizuálny štýl (voliteľné)
Nálada, farby, príklady webov, ktorých štýl sa ti páči.
```

!!! warning "Tento dokument budeš potrebovať"
    Design brief je vstupom do **celej časti 2** — v bloku 11 podľa neho postavíš svoj web. Ulož si ho tak, aby si ho o pár týždňov našiel (OneDrive/Google Drive, nie plocha školského PC).

!!! example "Ukážka: ako rýchlo vie AI čítať tvoj návrh"
    Na záver bloku vyučujúci predvedie, ako moderné AI nástroje (napr. **Claude Design**) premenia hotový design brief na návrh stránky za pár minút. Uvidíš, prečo sa celý semester oplatilo pracovať na zadaní: AI je presne taká dobrá, aké dobré je zadanie, ktoré dostane.

    Pozri si to na vzorovom príklade doručovacej spoločnosti — brief (vrátane promptu na začiatku) a to, čo z neho Claude Design vygeneroval:

    📄 **[Vzorový design brief — doručovacia spoločnosť (Word)](subory/zadanie-webu-priklad-dorucovanie.docx)** · 🎨 **[Výsledok z Claude Design (PowerPoint)](subory/kuriero-navrh.pptx)**

## ✅ Skontroluj si výstup

- [ ] Mám **klikateľný prototyp** (Axure alebo Visily) so všetkými obrazovkami z papierovej verzie.
- [ ] Sú v ňom **zapracované opravy** z guerilla testu a texty sú skutočné, nie výplňové.
- [ ] **Všetky tlačidlá niekam vedú** — preklikal som každú cestu.
- [ ] (Axure) Mám **aspoň dva druhy interakcií** — stránkovú (preklik) aj štýlovú (napr. zmena farby v menu).
- [ ] Prototyp prešiel **druhým testom** (iný kolega) a zádrhely som opravil.
- [ ] Mám hotový **design brief** `zadanie-webu` so všetkými 5 časťami a uložený tam, kde ho nájdem.

## 📌 Zhrnutie

- Interaktívny prototyp odstraňuje nedorozumenia — ukazuje, **čo sa stane po kliknutí**.
- Prototyp je **zadanie pre realizátora** — v tvojom prípade pre AI. Čo v ňom chýba, to si AI domyslí.
- Nástroj je vec voľby (Axure = profesionálny štandard, Visily = rýchla AI cesta) — hodnotí sa návrh.
- **Design brief** = celý tvoj semestrálny návrh na pár stranách: cieľ, persóny, štruktúra, obrazovky, štýl.

Tým sa končí návrhová časť predmetu. Gratulujem — máš navrhnutý web, otestovaný na dvoch kolegoch, a zadanie, s ktorým sa dá stavať. V časti 2 sa naučíš presne to: **postaviť ho s AI a dať na internet.**

👉 Pokračuj na **[Časť 2 — Vibe coding](../02-vibe-coding/index.md)**
