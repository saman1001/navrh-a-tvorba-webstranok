# Blok 4 — Papierový prototyp

Mind mapa hovorí, **čo** na webe bude. Dnes prvýkrát rozhodneš, **ako to bude vyzerať** — nakreslíš obrazovky webu na papier. Žiadny počítač, žiadny nástroj: papier, ceruzka, hrubá fixka.

Prečo papier? Lebo je **rýchly a nič ťa nestojí**. Obrazovku nakreslíš za pár minút, a keď je zlá, zhúžveš ju a nakreslíš novú — bez ľútosti. Presne o tom prototypovanie je: lacno vyskúšať a lacno zahodiť. (Keby si začal rovno v počítači, každú obrazovku by si si „odpracoval" a bránil by si ju, aj keď je zlá.)

## 🎯 Čo sa v tomto bloku naučíš

- Používať overené **UX/UI vzory** namiesto vymýšľania vymysleného.
- Nakresliť obrazovky webu podľa informačnej architektúry.
- Otestovať papierový prototyp s kolegom (**guerilla test**) a opraviť, čo nefunguje.

## Krok 1 — Nevymýšľaj vymyslené: UX vzory 📚

Kreativita je super — keď má dizajnér skúsenosti. Kým ich nemáš, drž sa zásady: **nevymýšľaj už vymyslené**. Milióny webov pred tebou vyriešili, kde býva logo (vľavo hore), kde menu (hore), kde kontakt (pätička a pravý horný roh). Používatelia to **čakajú** — a web, ktorý čakávania napĺňa, sa používa sám.

Preto skôr, než chytíš ceruzku:

1. Otvor si **2–3 weby rovnakého typu**, ako je tvoj (kaviarne, ak robíš kaviareň…). Všimni si, čo majú spoločné: poradie sekcií, umiestnenie prvkov, čo je hore a čo dole.
2. Pozri si katalógy overených vzorov: [UI Patterns](http://ui-patterns.com/) a [GoodUI](https://goodui.org/) (výsledky A/B testov — čo preukázateľne funguje).
3. Pri kreslení používaj pojmy z [Prvkov webstránky](../znalostna-baza/prvky-webstranky.md) — hlavička, hero, sekcie, pätička. Tie isté pojmy budeš v časti 2 hovoriť AI.

!!! note "Odlíš sa obsahom, nie rozložením"
    Tvoj web má byť výnimočný tým, **čo hovorí a komu pomáha** — nie tým, že má menu naspodku a logo v strede. Neštandardné rozloženie si môžeš dovoliť, keď budeš mať za sebou pár rokov praxe a dôvod.

## Krok 2 — Nakresli obrazovky ✏️

Zober papiere A4 (jeden papier = jedna obrazovka) a kresli podľa svojej mind mapy:

- **Hlavná stránka** — najdôležitejšia. Nakresli ju **zhora nadol**: hlavička s logom a menu → hero (hlavný nadpis + výzva na akciu) → sekcie podľa IA → pätička s kontaktom.
- **Ďalšie obrazovky** — podľa svojej architektúry: detail ponuky, rezervačný formulár, podstránka… Spolu **3–4 obrazovky** stačia. Pri jednostránkovom webe kresli sekcie ako samostatné papiere.
- Kresli **škaredo a rýchlo**: obdĺžnik s krížikom = obrázok, vlnovky = text, obdĺžnik = tlačidlo. Hrubou fixkou — núti ťa nekresliť detaily. Ku každému prvku pripíš perom poznámku, čo to je.

Pozri si, ako vyzerá reálny papierový prototyp (vzorový príklad doručovacej aplikácie — hlavná obrazovka s mapou, formulár, detail zásielky, karta kuriéra):

📄 **[Príklad papierového prototypu (PDF)](subory/papierovy-prototyp-priklad.pdf)**

Vidíš — nie je to žiadne umenie. Čiary, vlnovky a popisky modrým perom. Presne toto stačí.

!!! tip "Každý prvok musí mať alibi"
    Pri každom prvku vieš povedať: *táto vec tu je, lebo persóna X potrebuje Y* (niť z bloku 3). Ak alibi nemá, nekresli ho.

## Krok 3 — Guerilla test s kolegom 🧪

Toto je najzábavnejšia časť bloku — tvoj papierový web ide do prevádzky. Otestuješ ho s kolegom technikou, ktorej sa hovorí **guerilla test** (rýchly test použiteľnosti s prvým poruke človekom):

**Príprava (2 min):** vymysli **3 úlohy** — konkrétne veci, ktoré má na tvojom webe spraviť tvoja persóna. Napr.: *„Zisti, či je otvorené v nedeľu." „Rezervuj stôl pre dvoch." „Nájdi, koľko stojí strih."*

**Priebeh:** kolega „používa" tvoj papierový web — **prstom klika** po nakreslených tlačidlách a odkazoch. Ty hráš počítač: keď klikne, vymeníš papier za obrazovku, ktorá by sa zobrazila.

**Železné pravidlá:**

- **Nevysvetľuj a nenavádzaj.** Ani slovo. Web bude raz na internete sám — bez teba vedľa stoličky.
- Povzbuď kolegu, nech **myslí nahlas** („hľadám cenník, čakal by som ho hore…").
- **Zapisuj si** každé zaváhanie: kde hľadal niečo inde, než to je; kde sa zasekol; čo nepochopil.

Potom sa vymeňte — ty testuješ jeho web.

!!! warning "Nezhadzuj zistenia zo stola"
    „Veď to je jasné, len sa zle pozeral" — nie. Ak sa testujúci zasekol, zasekne sa aj skutočný návštevník, ibaže ten **odíde**. Každé zaváhanie je darček: chybu si našiel za 10 minút na papieri, nie o mesiac na hotovom webe.

## Krok 4 — Oprav a zdokumentuj 📸

1. Podľa poznámok z testu **oprav**, čo sa zaseklo — prekresli obrazovku, presuň prvok, premenuj tlačidlo. (Preto kreslíme na papier — oprava stojí minútu.)
2. Hotové obrazovky **odfoť** a fotky vlož do dokumentu „Návrh webu". Pripíš 2–3 vety: čo test odhalil a čo si zmenil.

## ✅ Skontroluj si výstup

- [ ] Pozrel som si **2–3 weby rovnakého typu** a katalógy vzorov — moje rozloženie je štandardné.
- [ ] Mám nakreslené **3–4 obrazovky** (alebo sekcie) podľa mind mapy z bloku 3.
- [ ] Každý prvok má **alibi** — viem, ktorej persóne a načo slúži.
- [ ] Prototyp prešiel **guerilla testom** s kolegom (3 úlohy) a mám poznámky zo zaváhaní.
- [ ] Opravené obrazovky sú **odfotené v dokumente** „Návrh webu" aj s poznámkou, čo test zmenil.

## 📌 Zhrnutie

- Papierový prototyp = najlacnejší spôsob, ako **uvidieť a otestovať** web skôr, než existuje.
- **Nevymýšľaj vymyslené** — štandardné vzory sú štandardné preto, že fungujú.
- **Guerilla test**: 3 úlohy, prst po papieri, ticho a zapisovať. Každé zaváhanie je nájdená chyba.
- Chyby nájdené dnes stoja minútu; tie isté chyby v hotovom webe stoja hodiny.

V ďalšom bloku papierový prototyp ožije — spravíš z neho **klikateľný interaktívny prototyp** a zbalíš celý návrh do zadania pre AI.

👉 Pokračuj na **[Blok 5 — Interaktívny prototyp](blok-5-interaktivny-prototyp.md)**
