# Blok 6 — Čo je web a Style guide

Vitaj v prvom bloku, kde začneš tvoriť web s pomocou AI. Nemusíš vedieť programovať a nemusíš vedieť čítať kód. Tvojou úlohou bude vedieť **pomenovať**, čo na stránke vidíš, a **skontrolovať**, či AI spravila to, čo si chcel. To je celé kúzlo — ty rozhoduješ a kontroluješ, AI píše.

V tomto bloku spustíš prostredie, pochopíš, z čoho sa web skladá, a spravíš svoj úplne **prvý výstup s AI** — dizajnovú referenciu (tzv. *style guide*), podľa ktorej bude AI tvoriť tvoj web v ďalších blokoch.

!!! note "Zapamätaj si jedno pravidlo"
    **Vygenerované ešte neznamená hotové.** Zakaždým, keď AI niečo vyrobí, ty sa na to musíš pozrieť a overiť, či to sedí. Túto vetu budeš počuť v každom bloku — je to najdôležitejšia zručnosť celého predmetu.

## 🎯 Čo sa v tomto bloku naučíš

- Spustiť si pracovné prostredie a nájsť, kde je AI asistent (Copilot Chat).
- Pochopiť, z akých troch vrstiev sa web skladá a ako pomenovať prvky stránky.
- Vytvoriť s AI svoj prvý súbor — **style guide** (dizajnovú referenciu).
- Skontrolovať výsledok bez toho, aby si čítal kód.
- Uložiť si prácu do histórie (prvý *commit*).

## Krok 1 — Priprav si prostredie 🖥️

Pracovať budeš celý čas v prehliadači — nič neinštaluješ. Otvoríš si tzv. **Codespace**, čo je editor kódu (VS Code) bežiaci priamo vo webe. V ňom je aj **Copilot Chat** — bočný panel, kam budeš písať AI, čo má spraviť.

Presný postup, ako codespace spustiť a kde nájsť Copilot Chat, máš v samostatnej stránke:

👉 [Prostredie (Codespaces)](../znalostna-baza/prostredie-codespaces.md)

!!! tip "Cieľ tohto kroku"
    Máš otvorený svoj codespace a vidíš vpravo (alebo v bočnom paneli) **Copilot Chat** — okienko, kam sa dá písať. To je celé, čo teraz potrebuješ.

## Krok 2 — Pochop, s čím pracuješ 🧩

Každá webstránka stojí na **troch vrstvách**. Nemusíš ich vedieť robiť — stačí, že vieš, čo ktorá robí, aby si vedel AI povedať, čo chceš zmeniť:

- **Obsah (HTML)** — text, nadpisy, obrázky, tlačidlá. *Čo* na stránke je.
- **Vzhľad (CSS)** — farby, písma, rozloženie, medzery. *Ako* to vyzerá.
- **Správanie (JavaScript)** — čo sa stane po kliknutí, animácie, formuláre. *Čo to robí.*

Podrobnejšie a s obrázkami je to vysvetlené tu:

👉 [Čo je web](../znalostna-baza/co-je-web.md)

A keď budeš chcieť AI presne povedať, ktorý prvok stránky myslíš (napr. „pätička", „hlavička", „navigácia"), použi tento malý slovníček:

👉 [Prvky webstránky](../znalostna-baza/prvky-webstranky.md)

!!! note "Tvoja úloha nie je písať kód"
    Tvojou úlohou je vedieť prvok **pomenovať** („zmeň farbu tlačidla v hlavičke") a potom **skontrolovať**, či to AI spravila správne. Kód píše AI. Ty si režisér, nie pisár.

## Krok 3 — Vytvor svoj style guide 🎨

**Style guide** je jednoduchý súbor s popisom dizajnu: aké farby, aké písma, ako vyzerajú tlačidlá a aký je celkový dojem. Prečo je to prvá vec, ktorú robíme? Lebo keď dáš AI takúto referenciu, v ďalších blokoch bude vedieť, **v akom vizuálnom štýle** má tvoriť — a tvoj web bude vyzerať jednotne, nie ako poskladaný z piatich rôznych stránok.

Postup je bezpečný a začiatočnícky — pracuješ len so **screenshotom**, nič nikam nevkladáš:

1. Otvor si v prehliadači **webstránku, ktorej dizajn sa ti páči**. Môže to byť značka, ktorú máš rád, pekný e-shop, portfólio.
2. Sprav **screenshot celej obrazovky**:
    - Windows: kláves `PrtScn`, alebo `Win + Shift + S` a vyber časť obrazovky.
    - Mac: `Cmd + Shift + 4` a vyber časť obrazovky.
3. Prepni sa do svojho codespace a otvor **Copilot Chat**.
4. **Vlož screenshot** priamo do okienka Copilot Chat (Ctrl+V / Cmd+V) a pod obrázok napíš tento prompt:

```
Z tohto screenshotu webu vytvor súbor docs/style-guide.md s popisom dizajnu: hlavné farby (odhadni kódy farieb), písma, štýl tlačidiel a celkový vizuálny dojem. Bude to referencia, podľa ktorej budeš tvoriť môj web.
```

5. Počkaj, kým AI súbor vytvorí. V ľavom paneli so súbormi by sa mal objaviť `docs/style-guide.md`.

!!! tip "Vyber stránku s konzistentným dizajnom"
    Čím jednotnejší štýl má stránka, ktorú si vyberieš (rovnaké farby, rovnaké písmo, poriadok), tým lepšiu referenciu z nej AI spraví. Vyhni sa preplneným stránkam plným reklám a piatich rôznych farieb — z chaosu vznikne chaotický style guide. Dobrý kandidát: web, ktorý si uviedol v časti *Vizuálny štýl* svojho design briefu z bloku 5 — style guide potom rovno využiješ pri stavbe svojho webu v bloku 11.

!!! warning "Nikdy nevkladaj cudzí kód do prehliadačovej konzoly"
    Na internete nájdeš „návody", ktoré ťa nabádajú skopírovať nejaký kód do konzoly prehliadača (F12 → Console), aby si vytiahol farby zo stránky. **Nikdy to nerob.** Je to častý trik podvodníkov, ktorým môžu ukradnúť tvoje prihlásenie. My to vôbec nepotrebujeme — screenshot úplne stačí.

## Krok 4 — Skontroluj výsledok ✅

Teraz to najdôležitejšie: **vygenerované ešte neznamená hotové.** Otvor si súbor `docs/style-guide.md` (klikni naň v ľavom paneli so súbormi) a pozri sa na jeho obsah očami — nemusíš rozumieť žiadnemu kódu, je to obyčajný text.

Over si tieto veci:

- [ ] Je tam sekcia o **farbách** (a nejaké kódy farieb, napr. `#1A73E8`)?
- [ ] Je tam sekcia o **písmach**?
- [ ] Je tam popis **tlačidiel** a **celkového dojmu**?
- [ ] **Sedí to so stránkou, ktorú si vybral?** Ak mala tmavomodrá stránka, mal by tam byť opísaný tmavomodrý štýl — nie ružový.

Ak niečo chýba alebo to nesedí, jednoducho AI poprosíš o opravu. Napíš do Copilot Chat napríklad:

```
V súbore docs/style-guide.md chýba sekcia o písmach a farby nesedia so screenshotom. Doplň sekciu o písmach a oprav hlavné farby tak, aby zodpovedali stránke na screenshote.
```

Potom si súbor znova otvor a znova skontroluj. Toto opakuj, kým nie si spokojný — presne takto sa s AI pracuje: povedz, skontroluj, oprav.

!!! example "Ako má style guide zhruba vyzerať"
    Nemusí to byť dlhé. Stačí prehľadný text so sekciami, napríklad: „Hlavné farby: modrá `#1A73E8`, biela pozadie, sivý text. Písmo: bezpätkové, moderné. Tlačidlá: zaoblené rohy, modré pozadie, biely text. Celkový dojem: čistý, vzdušný, dôveryhodný." Ak toto tam nájdeš, máš hotovo.

## Krok 5 — Ulož si prácu (prvý commit) 💾

Aby si o svoju prácu neprišiel, uložíš si aktuálny stav do histórie. Tomuto uloženiu sa hovorí **commit** — je to ako fotka projektu v danom momente, ku ktorej sa vieš kedykoľvek vrátiť. Je to tvoja **záchranná brzda**.

Nemusíš to robiť ručne — poprosíš AI. Napíš do Copilot Chat:

```
Ulož aktuálny stav ako commit s popisom: Blok 6 – style guide.
```

Viac o tom, ako commity fungujú a prečo sú dôležité, nájdeš tu:

👉 [Git — záchranná brzda](../znalostna-baza/git-zachranna-brzda.md)

!!! tip "Prečo commitovať tak skoro"
    Commituj po každom hotovom kroku, aj keď je malý. Keď sa niečo neskôr pokazí, vrátiš sa k poslednej „fotke" a nemusíš robiť nič nanovo. Radšej desať malých commitov ako žiadny.

## 📌 Zhrnutie

Čo teraz vieš a máš hotové:

- **Spustil si prostredie** — máš otvorený codespace a vieš, kde je Copilot Chat.
- **Rozumieš, z čoho sa web skladá** — obsah (HTML), vzhľad (CSS), správanie (JavaScript) — a vieš prvky pomenovať.
- **Máš svoj prvý výstup s AI** — súbor `docs/style-guide.md`, ktorý si aj **skontroloval** očami.
- **Uložil si prácu** do prvého commitu.
- A hlavne: zažil si na vlastnej koži pravidlo **„vygenerované ešte neznamená hotové"** — povedz, skontroluj, oprav.

Toto všetko použiješ hneď v ďalšom bloku, kde podľa svojho style guide začneš stavať prvú stránku.

👉 Pokračuj na **[Blok 7](blok-7-webstranka.md)**
