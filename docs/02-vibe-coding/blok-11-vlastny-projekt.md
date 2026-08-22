# Blok 11 — Vlastný projekt 🚀

Toto je vyvrcholenie celého predmetu. Žiadny návod krok za krokom — teraz to **zvládneš sám**. Celú slučku (zadať → skontrolovať → otestovať → opraviť → nasadiť) už poznáš z predošlých blokov. A hlavne: **nezačínaš od nuly.** Postavíš web, ktorý si **sám navrhol v časti 1** — máš k nemu cieľ, persóny, informačnú architektúru aj klikateľný prototyp.

!!! tip "Nejde o veľkosť projektu"
    Cieľom **nie je** postaviť celý navrhnutý web do posledného detailu. Cieľom je funkčné **MVP** — najmenšia verzia, ktorá plní hlavný cieľ z tvojho návrhu. Radšej malý web, ktorý naozaj funguje, než veľký, ktorý sa nedá dokončiť.

## 📋 Tvoje zadanie: web z časti 1

Tvoje zadanie si napísal sám — je to **design brief** z konca [bloku 5](../01-webdizajn/blok-5-interaktivny-prototyp.md). Otvor si ho a rozhodni, čo z návrhu je **jadro** (musí byť) a čo je **rozšírenie** (ak zostane čas):

- **Jadro:** hlavná stránka s obsahom podľa tvojho prototypu — to, čo rieši problém tvojej najdôležitejšej persóny.
- **Rozšírenie:** ďalšie sekcie/obrazovky, interaktívny prvok (formulár, kalkulačka, galéria), vychytávky.

!!! note "Nemáš návrh z časti 1?"
    Ak návrh z nejakého dôvodu nemáš (prestúpil si, chýbal si), dohodni sa s vyučujúcim a vyber si niečo jednoduché: jednostránkový web pre kaviareň či službu, landing page produktu s formulárom, cenník s kartami alebo stránku podujatia. Aj tak si najskôr v skratke prejdi kroky z časti 1 — aspoň cieľ a hrubý náčrt.

## 🔁 Ako na to — slučka, ktorú už poznáš

Toto je presne ten postup, ktorý si robil celý semester. Teraz ho spravíš sám.

### 1. Najskôr naplánuj s AI (nekóduj hneď)

Nenechaj AI hneď písať kód. Najskôr **vlož svoj design brief do projektu**: vytvor v priečinku `docs/` súbor `zadanie-webu.md` a skopíruj doň text svojho briefu. Nie je to len pomôcka pre AI — súbor je **povinná súčasť odovzdania**: pri hodnotení sa porovnáva, či hotový web zodpovedá tvojmu návrhu. Potom napíš do Copilot Chatu:

```
Zatiaľ nekóduj. Zadanie webu, ktorý ideme stavať, je v súbore docs/zadanie-webu.md — cieľ, používatelia a štruktúra. Navrhni, z akých sekcií bude prvá verzia (MVP) a čo bude v každej sekcii. Drž sa môjho návrhu. Počkaj na moje schválenie.
```

Prečítaj si návrh a **porovnaj ho so svojím prototypom** — sedí rozloženie? Nechýba funkcia, ktorú potrebuje tvoja persóna? Prípadne uprav („pridaj sekciu s otváracími hodinami", „kontaktný formulár nechcem"). Až keď si spokojný, dáš AI zelenú.

### 2. Stavaj po malých krokoch

Jeden prompt = jedna vec. Nie „sprav mi celý web naraz", ale „urob hlavičku s názvom a menu", potom „pridaj hero sekciu", potom „pridaj cenník". Po **každom** vydarenom kroku commitni (ulož míľnik), aby si sa mal kam vrátiť.

!!! note "Prečo po malých krokoch"
    Keď zadáš jednu vec naraz, ľahko skontroluješ, či je dobre, a ak nie, presne vieš, čo sa pokazilo. Pri „sprav všetko naraz" sa v chybe stratíš. Ako sa commituje, nájdeš v [Git — záchranná brzda](../znalostna-baza/git-zachranna-brzda.md).

### 3. Po každom kroku KONTROLA

**Vygenerované ešte neznamená hotové.** Po každom kroku, kde AI niečo vyrobí, sa presvedč, že to naozaj funguje — vizuálne, nie čítaním kódu:

- **Pozri sa** na náhľad — vyzerá to tak, ako si chcel?
- **Preklikaj** všetky odkazy a tlačidlá — vedú, kam majú?
- **Skús mobil** — `F12` → ikona mobilu (Toggle device toolbar). Nič sa nerozsypalo?
- **Pozri konzolu** — `F12` → záložka **Console**. Sú tam **červené** chyby? Ak áno, nie je hotovo.

Celý postup kontroly máš v [Kontrola webu](../znalostna-baza/kontrola-webu.md). Toto je najdôležitejší krok — nepreskakuj ho.

### 4. Keď sa niečo pokazí

Nepíš AI len „oprav to". Popíš **presne**, čo vidíš:

```
Po kliknutí na tlačidlo „Objednať" sa nič nestane. Malo by sa zobraziť poďakovanie. V konzole (F12) je červená chyba: [sem skopíruj text chyby]. Nájdi príčinu a oprav to.
```

Ak sa web pokazí tak, že sa nevieš pohnúť, vráť sa k poslednému vydarenému commitu — návod je v [Git — záchranná brzda](../znalostna-baza/git-zachranna-brzda.md). Preto commituješ po každom kroku.

### 5. Ak potrebuješ dáta z internetu

Ak tvoj projekt ťahá dáta zvonku (kurzy mien, počasie, obrázky cez API), dodrž pravidlá pre kľúče: na predmete len **bezcenné** kľúče, secret **nikdy** do verejného repozitára, na školskom PC **nikdy** reálne platobné kľúče. Detaily v [Bezpečnosť kľúčov](../znalostna-baza/bezpecnost-klucov.md).

### 6. Nasaď online a pošli link

Keď je web hotový a skontrolovaný, daj ho na internet a pošli odkaz. Postup máš v [Nasadenie (GitHub Pages)](../znalostna-baza/nasadenie-github-pages.md).

!!! warning "Pred nasadením ešte raz skontroluj"
    Po nasadení otvor **verejnú adresu** (nie náhľad v editore) a preklikaj web znova — priamo tam. To, čo funguje v náhľade, sa občas na živej adrese správa inak.

## 🧑‍💼 Rozhodni sa ako manažér

Občas ti AI ponúkne viac ciest — napríklad „formulár môžem spraviť takto alebo takto". Nemusíš rozumieť kódu, aby si sa rozhodol. Nech ti to AI vysvetlí po ľudsky. Do Copilot Chatu napíš:

```
Navrhni 2 rôzne spôsoby, ako toto spraviť. Pri každom napíš: ako to funguje (pre laika), čo ma to bude stáť (čas, peniaze, zložitosť), čo sa pri ňom najskôr pokazí. Na konci nič neodporúčaj — rozhodnem sa ja.
```

**Rozhodnutie je na tebe, implementácia na AI.** Ty si manažér: vyberáš smer podľa toho, čo dáva zmysel pre tvoj projekt. AI je ten, kto to potom postaví.

## ✅ Checklist odovzdania

Než povieš „hotovo", prejdi tento zoznam. Odškrtni každú položku — ak niektorá neplatí, ešte nie si hotový:

- [ ] Web sa otvára na **verejnej adrese** (nie len v náhľade editora).
- [ ] **Všetky odkazy a tlačidlá fungujú** — preklikal som ich.
- [ ] Web **funguje na mobile** (`F12` → ikona mobilu).
- [ ] **Konzola bez červených chýb** (`F12` → Console).
- [ ] **Prešiel som [5-minútovú kontrolu prístupnosti](../znalostna-baza/pristupnost-webu.md)** — Tab test, zoom 200 %, kontrast, alt texty, Lighthouse.
- [ ] **Žiadny tajný kľúč** vo verejnom repozitári.
- [ ] **Design brief je v repozitári** ako `docs/zadanie-webu.md`.
- [ ] **Web zodpovedá môjmu návrhu z časti 1** — plní cieľ, obsahuje jadro z informačnej architektúry; ak som sa od prototypu odchýlil, viem povedať prečo.
- [ ] **Poslal som link** na hotový web.

## 📌 Zhrnutie

Máš za sebou celú tvorivú časť predmetu. Poďme si zrekapitulovať, čo už vieš:

- **rozprávať sa s AI o webe** — pomenovať prvky, zadať zmenu, iterovať po malých krokoch,
- **plánovať pred kódením** — najskôr návrh, potom stavba,
- **kontrolovať a testovať** — vizuálne, klik, mobil, konzola; rozpoznať, keď si AI niečo vymyslela,
- **opravovať chyby** — popísať problém presne, alebo sa vrátiť k poslednému commitu,
- **pracovať s API a kľúčmi** — bezpečne, bez úniku secretov,
- **dať web online** a poslať naň odkaz,
- **rozhodovať sa ako manažér** — vybrať smer, nechať implementáciu na AI.

A hlavne: práve si **sám** prešiel celú cestu — od cieľa a persón cez prototyp až po hotový web na internete. To je zručnosť, ktorú si odnášaš z predmetu — nie memorovanie príkazov, ale schopnosť navrhnúť, zadať, skontrolovať, opraviť a nasadiť. 🎉

Ostáva posledný krok: spísať a odprezentovať, čo si vytvoril.

👉 Pokračuj na **[Blok 12 — Referát a prezentácia](../03-zaver/blok-12-referat-a-prezentacia.md)**
