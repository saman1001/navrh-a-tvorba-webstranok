# Blok 3 — Informačná architektúra

Máš cieľ a máš persóny. Teraz rozhodneš, **čo všetko na webe bude a ako to bude usporiadané** — tomu sa hovorí **informačná architektúra** (IA). Je to prehľadná mapa „vecí" na webe: funkcií, obsahu a ich hierarchie.

Prečo sa s tým trápiť teraz, na papieri? Lebo presúvať položky v mind mape trvá sekundy. Presúvať sekcie v hotovom prototype trvá hodiny — a prerábať hotový web dni. Každé rozhodnutie, ktoré spravíš teraz, si ušetríš neskôr trikrát. (Vo veľkých firmách je to samostatné povolanie — *informačný architekt*.)

## 🎯 Čo sa v tomto bloku naučíš

- Odvodiť **funkcie a obsah webu z potrieb persón** (nie z toho, „čo majú všetci").
- Overiť si usporiadanie **card sortingom** s kolegom.
- Nakresliť IA ako **mind mapu**.
- Skontrolovať návrh proti štyrom princípom dobrej architektúry.

## Krok 1 — Z persón vypíš funkcie a obsah 📋

Otvor si persóny z bloku 2 a prejdi **každú potrebu a každý krok scenárov**. Ku každej si polož otázku: *čo musí byť na webe, aby sa to dalo spraviť?* Zapisuj do jednoduchej tabuľky:

| Persóna potrebuje… | …takže web musí mať |
|---|---|
| rýchlo zistiť, či je otvorené | otváracie hodiny hneď na úvodnej stránke |
| rezervovať stôl bez telefonovania | rezervačný formulár |
| vedieť, čo dostane | ponuka / cenník s fotkami |
| nájsť cestu | mapa + adresa v pätičke |

(*Vo vzorovom príklade doručovacej spoločnosti takto z potreby „okamžite vedieť o probléme so zásielkou" vznikla funkcia notifikácií — a tá sa potom objaví v architektúre aj v prototype. Presne táto niť **potreba → funkcia → miesto na webe** robí návrh obhájiteľným.*)

Výsledok: zoznam 10–20 položiek — funkcie, obsahové bloky, drobnosti (logo, kontakt, sociálne siete). Zatiaľ **bez usporiadania**, len úplný zoznam.

!!! tip "Škrtaj smelo"
    Ak položka nepomáha žiadnej persóne ani cieľu z bloku 1, škrtni ju — hoci ju „majú všetci". Menší web, ktorý rieši skutočné potreby, porazí veľký web plný balastu.

## Krok 2 — Card sorting s kolegom 🃏

Skôr než položky usporiadaš **ty**, over si, ako by ich usporiadal **používateľ**. Technika sa volá **card sorting** a v dvojici trvá 10 minút:

1. Napíš každú položku zo zoznamu na samostatný lístok (papieriky / nalepovacie bločky; pri väčšom projekte sa používajú aj online nástroje ako Treejack).
2. Daj kôpku kolegovi. Jeho úloha: **zoskupiť lístky tak, ako by to čakal on** ako návštevník, a každú skupinu pomenovať.
3. Nezasahuj a nevysvetľuj — len sa pozeraj a rob si poznámky.
4. Porovnajte: kde jeho skupiny sedia s tvojou predstavou a kde nie? Tam, kde sa nezhodnete, sa **používatelia budú strácať**.

Potom sa vymeňte. Skupiny, na ktorých sa zhodnete, sú kandidáti na sekcie a položky menu tvojho webu.

## Krok 3 — Nakresli mind mapu 🗺️

Teraz štruktúru zakresli ako **mind mapu**: v strede názov webu, z neho hlavné vetvy (sekcie) a z nich konkrétne položky.

**Nástroje** (všetky majú bezplatnú verziu, stačí prehliadač): [Coggle](https://coggle.it), [Whimsical](https://whimsical.com), [mind42](https://mind42.com), prípadne FigJam. Vyber si ľubovoľný — dôležitá je mapa, nie nástroj.

Pozri si vzor — mind mapu webu doručovacej spoločnosti (robená v Coggle):

📄 **[Príklad IA — doručovacia spoločnosť (PDF)](subory/ia-priklad-dorucovanie.pdf)**

Všimni si na nej: centrálny uzol → hlavné časti (Monitoring, Nastavenia, Reporty, Profil…) → konkrétne funkcie (priradiť vodiča, stiahnuť foto doručenia…), a pri voliteľných veciach poznámku *(voliteľné)*. Tvoja mapa bude menšia — pri malom webe je úplne v poriadku 2–4 hlavné vetvy.

## Krok 4 — Skontroluj architektúru 🔎

Prejdi hotovú mapu proti **štyrom princípom** dobrej informačnej architektúry:

1. **Postupné odhaľovanie** — na úvodnej stránke len to hlavné, detaily o úroveň nižšie. Nevyklop všetko naraz.
2. **Príklady** — ukazuj, nehovor: fotka jedla namiesto vety „máme dobré jedlo", ukážka práce namiesto „sme profesionáli".
3. **Vstupná stránka** — každá persóna musí zo vstupnej stránky **na prvý pohľad** pochopiť, kde je a kam ísť ďalej.
4. **Možnosť roztriedenia** — ak máš veľa položiek (produkty, práce, články), používateľ ich musí vedieť filtrovať alebo triediť.

Nakoniec **AI oponentúra** — over mapu proti persónam:

```
Navrhujem web: [cieľ]. Toto sú moje persóny: [stručne]. Toto je moja informačná
architektúra: [prepíš vetvy mind mapy]. Prejdi persónu po persóne a jej scenár
prvého použitia: nájde na webe všetko, čo potrebuje? Čo nenájde alebo bude hľadať
inde, než som to umiestnil? Neprestavuj architektúru za mňa — len ukáž diery.
```

Diery oprav — teraz je to zadarmo.

## ✅ Skontroluj si výstup

- [ ] Mám **zoznam funkcií a obsahu** odvodený z persón (tabuľka potreba → funkcia).
- [ ] Usporiadanie prešlo **card sortingom** s kolegom.
- [ ] Mám **mind mapu** webu (export/screenshot vložený do dokumentu „Návrh webu").
- [ ] Mapa prešla kontrolou proti **4 princípom** a AI oponentúrou.
- [ ] Ku každej vetve mapy viem povedať, **ktorej persóne slúži** — ak neviem, škrtol som ju.

## 📌 Zhrnutie

- Informačná architektúra = **čo na webe bude a ako je to usporiadané** — rozhodnuté skôr, než sa čokoľvek kreslí.
- Funkcie sa **odvádzajú z persón**, nie z toho, čo „má každý web".
- **Card sorting** odhalí, kde by sa používatelia strácali — za 10 minút a zadarmo.
- Mind mapa je tvoj plán: v ďalšom bloku podľa nej nakreslíš prvé obrazovky.

👉 Pokračuj na **[Blok 4 — Papierový prototyp](blok-4-papierovy-prototyp.md)**
