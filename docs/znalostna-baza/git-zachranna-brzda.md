# 🛟 Git — záchranná brzda

Predstav si, že hráš hru a práve sa ti podarilo prejsť ťažké miesto. Čo urobíš? **Uložíš si pozíciu.** Keby ťa o chvíľu niečo zabilo, nezačínaš od začiatku — vrátiš sa k uloženej pozícii.

Presne toto je **Git** pre tvoj web. Je to tvoja záchranná brzda.

## 🤔 Prečo to potrebuješ

AI asistent (Copilot) je skvelý pomocník, ale nie je neomylný. Občas ho poprosíš o zmenu a namiesto zlepšenia ti niečo **rozbije** — obrázok zmizne, farby sa pokazia, stránka prestane fungovať. A ty ako začiatočník nevidíš v kóde, čo sa stalo.

Bez záchrannej brzdy by si musel/musela všetko pracne opravovať naspäť. S Gitom stačí jedno: **vrátim sa k poslednej uloženej verzii, ktorá fungovala.** Sekunda a máš späť funkčný web.

!!! tip "Nemusíš si pamätať žiadne príkazy"
    Git má povesť, že je zložitý a plný tajomných príkazov. Zabudni na to. Tebe stačí vedieť **ČO chceš** — buď *uložiť bod*, alebo *vrátiť sa* — a povedať to Copilotovi normálnou vetou. Zvyšok spraví za teba.

## 📚 Dva pojmy, ktoré stačí poznať

Nepotrebuješ rozumieť celému Gitu. Stačia ti dve slová:

- **Commit** (číta sa „komit") = **uložený bod**. Je to fotka tvojho projektu v jednom okamihu — presne taký, aký bol, keď fungoval. Ku každému uloženému bodu sa vieš kedykoľvek vrátiť.
- **Repozitár** (skrátene „repo") = **tvoj celý projekt aj s históriou** všetkých uložených bodov. Je to ako album, kde máš odfotené všetky pozície, ku ktorým sa dá vrátiť.

To je celé. Uložený bod = commit. Album bodov = repozitár.

## 💾 Ako si uložiť bod (commit)

Máš dve možnosti — vyber si tú, ktorá ti vyhovuje. Obe robia to isté.

### Možnosť A: cez tlačidlá vo VS Code

1. V ľavom paneli klikni na ikonu **Source Control** — vyzerá ako vetvička/rázcestie (tri prepojené bodky). Je to jedna z ikon úplne vľavo.
2. Uvidíš zoznam súborov, ktoré si zmenil.
3. Hore je políčko na text — napíš doň **krátky popis**, čo je toto za bod. Napríklad:
   `funkčné portfólio pred úpravou farieb`
4. Klikni na tlačidlo **Commit** (modré tlačidlo hore).
5. Objaví sa ponuka **Sync Changes** alebo **Push** — potvrď ju. Tým sa tvoj bod uloží aj do GitHubu (na internet), takže je v bezpečí, aj keby sa niečo stalo s Codespaces.

!!! note "Prečo písať popis"
    Popis je odkaz pre teba samého do budúcnosti. Keď o týždeň hľadáš bod, ku ktorému sa vrátiť, prečítaš si popisy a hneď vieš, ktorý to je. Preto píš konkrétne: nie „zmena", ale `funkčné portfólio pred úpravou farieb`.

### Možnosť B: povedz to Copilotovi

Ak sa ti nechce klikať, otvor **Copilot Chat** a napíš doň tento prompt (uprav si popis podľa toho, čo máš práve hotové):

```
Ulož aktuálny stav projektu ako commit s popisom: funkčné portfólio pred úpravou farieb.
```

Copilot commit spraví za teba.

!!! warning "Vygenerované ešte neznamená hotové — over si, že sa bod naozaj uložil"
    Aj uloženie bodu treba skontrolovať. Klikni v ľavom paneli na **Source Control**. Ak sa zoznam zmenených súborov **vyprázdnil** (už tam nič nesvieti), commit prebehol správne — všetko je uložené. Ak tam súbory ešte visia, bod sa neuložil a treba to zopakovať.

## 🥇 Zlaté pravidlo

!!! danger "Commitni VŽDY predtým, než necháš AI spraviť väčšiu zmenu"
    Skôr než povieš Copilotovi niečo veľké — „prerob mi celý dizajn", „zmeň rozloženie stránky", „pridaj novú sekciu" — **najskôr si ulož bod.** Keď sa zmena nepodarí, máš sa kam vrátiť.

    A rovnako: **po každom kroku, ktorý funguje, si ulož bod.** Funguje ti kontaktný formulár? Commit. Vyzerá web dobre na mobile? Commit. Každý funkčný stav = jeden uložený bod.

Pravidlo v jednej vete: **commituj často a commituj vždy pred veľkou zmenou.**

## ⏪ Keď sa niečo pokazí — návrat späť

Toto je moment, pre ktorý celý Git robíš. AI niečo zmenil, web sa rozbil a ty sa chceš vrátiť k poslednému funkčnému bodu.

Najjednoduchšie je opäť Copilot. **Ale pozor — nerob to naslepo.** Najskôr si nechaj vysvetliť, čo návratom stratíš.

**Krok 1 — opýtaj sa, čo sa stane.** Napíš do Copilot Chat:

```
Chcem sa vrátiť do stavu posledného commitu. Najskôr mi vypíš, čo sa od neho zmenilo a čo návratom stratím. Nič zatiaľ nerob, počkaj na moje potvrdenie.
```

**Krok 2 — prečítaj si odpoveď.** Copilot ti napíše, ktoré zmeny zahodíš. Rozmysli si, či o ne naozaj nechceš prísť.

**Krok 3 — ak súhlasíš, potvrď.** Napíš:

```
Potvrdzujem, vráť projekt do stavu posledného commitu.
```

!!! warning "Návrat zahodí neuložené zmeny"
    Vrátenie k staršiemu bodu **zmaže všetko, čo si spravil po ňom a neuložil** ako nový commit. Preto to dvojkrokové potvrdenie — aby ťa nič neprekvapilo. A preto to zlaté pravidlo vyššie: **keď commituješ často, návratom nikdy nestratíš veľa.**

### Vygenerované ešte neznamená hotové — over si, že sa web vrátil

Copilot ti napíše, že hotovo. To ale **neznamená**, že je web naozaj v poriadku. Skontroluj to vlastnými očami:

1. **Otvor náhľad webu** (živý náhľad stránky) a pozri sa — je späť to, čo fungovalo? Vrátil sa obrázok, farby, rozloženie?
2. **Preklikaj stránku** — odkazy, tlačidlá, menu. Funguje všetko ako predtým?
3. **Skús mobil**: stlač `F12`, klikni na **ikonu mobilu/tabletu** (prepínač zariadení) hore. Vyzerá web dobre aj na úzkej obrazovke?
4. **Pozri konzolu na chyby**: v `F12` klikni na záložku **Console**. Ak tam svietia **červené riadky**, niečo ešte nie je v poriadku — napíš Copilotovi, čo vidíš.

Ak všetko sedí, máš späť funkčný web. Presne o toto išlo.

## 🕰️ Ešte jedna cesta: história

V prostredí sa dá k starším bodom dostať aj cez **históriu commitov** priamo vo VS Code (v paneli Source Control alebo v ponuke *Timeline*). Je to užitočné, keď sa chceš vrátiť nie k poslednému, ale k nejakému **staršiemu** bodu.

Ako úplný začiatočník to ale zatiaľ nepotrebuješ. **Cez Copilot je návrat najjednoduchší** — povieš vetou, čo chceš, a on to spraví. K histórii sa vždy vieš vrátiť neskôr, keď budeš istejší.

## ✅ Zhrnutie

Teraz vieš:

- **Prečo** je Git tvoja záchranná brzda — AI občas web rozbije a ty sa vieš vrátiť k funkčnému stavu.
- Čo je **commit** (uložený bod) a **repozitár** (projekt aj s históriou bodov).
- Ako **uložiť bod** — cez tlačidlo *Source Control → Commit → Sync/Push*, alebo jednou vetou Copilotovi.
- **Zlaté pravidlo**: commituj často a vždy pred veľkou zmenou.
- Ako sa **vrátiť späť** cez Copilot — najskôr sa opýtaj, čo stratíš, potom potvrď.
- Že po každom návrate **vizuálne a funkčne skontroluješ**, či je web naozaj v poriadku.

Nemusíš si pamätať jediný príkaz. Stačí vedieť, čo chceš, a povedať to.

Túto zručnosť si prakticky nacvičíš v **Bloku 8**.

➡️ Ďalej pokračuj na [Kontrola webu](../znalostna-baza/kontrola-webu.md), kde sa naučíš systematicky overiť, že tvoj web funguje, ako má.
