# 🧩 Prvky webstránky

Toto je tvoj **slovník** — jazyk, ktorým sa budeš s Copilotom rozprávať o webe. Nemusíš vedieť čítať kód. Stačí, keď vieš **pomenovať**, čo chceš. Keď povieš „hlavička", „hero sekcia" alebo „karty v troch stĺpcoch", AI presne vie, o čom hovoríš — a výsledok je oveľa bližšie k tomu, čo si si predstavoval.

!!! tip "Prečo je pomenovanie tvoj hlavný nástroj"
    Predstav si, že si v pekárni. Keď povieš „chcem to okrúhle so semienkami", dostaneš čokoľvek. Keď povieš „chcem celozrnný bagel", dostaneš presne to. S webom je to rovnaké — čím presnejší názov použiješ, tým lepší výsledok Copilot vyrobí.

---

## 🏗️ Rozloženie stránky (layout)

Každá typická webstránka je poskladaná zhora nadol z niekoľkých veľkých blokov. Toto sú tie hlavné.

| Prvok | Slovenský názov | Čo to je | Kde to nájdeš |
|---|---|---|---|
| **Header** | hlavička | Pruh úplne hore cez celú šírku, väčšinou s logom a menu | Úplne hore, „prilepený" pri posúvaní |
| **Navbar / menu** | navigácia | Odkazy na hlavné stránky (Domov, O nás, Kontakt) | Vnútri hlavičky |
| **Hero** | hero sekcia | Veľký úvodný pruh s hlavným nadpisom a výzvou (napr. tlačidlo „Kúpiť") | Hneď pod hlavičkou, prvá vec, čo návštevník vidí |
| **Content sections** | obsahové sekcie | Bloky s textom, obrázkami, službami, produktmi | Stred stránky, jeden pod druhým |
| **Cards** | karty | Malé ohraničené boxy s obrázkom, nadpisom a krátkym textom | V obsahových sekciách, často vedľa seba |
| **Footer** | pätička | Pruh úplne dole s kontaktom, odkazmi a copyrightom | Úplne dole cez celú šírku |

!!! note "Hero — zapamätaj si tento pojem"
    „Hero" je veľký úvodný pruh, ktorý má návštevníka okamžite chytiť. Väčšinou obsahuje jednu silnú vetu (napr. „Ručne pražená káva až k tebe domov") a jedno výrazné tlačidlo. Je to najdôležitejší kus stránky — návštevník sa podľa neho za 3 sekundy rozhodne, či ostane.

---

## 🧭 Typy menu a navigácie

Menu je spôsob, akým sa návštevník pohybuje po webe. Existuje viac druhov — každý sa hodí inam.

| Prvok | Slovenský názov | Čo to je | Kedy sa hodí |
|---|---|---|---|
| **Horizontal menu** | vodorovné menu | Odkazy vedľa seba v jednom riadku | Klasika v hlavičke na počítači |
| **Dropdown** | rozbaľovacie menu | Po kliknutí/prejdení myšou sa rozbalí zoznam podpoložiek | Keď máš veľa kategórií |
| **Sidebar** | bočné menu | Zvislý panel s odkazmi na boku stránky | Rozsiahle weby, e-shopy, dokumentácia |
| **Hamburger** | hamburger menu (☰) | Ikona troch čiarok; po klepnutí sa vysunie menu | Na mobile, kde niet miesta na plné menu |
| **Breadcrumbs** | drobčeková navigácia | Cestička, kde sa nachádzaš: `Domov > Káva > Espresso` | Aby sa návštevník nestratil v hlbších stránkach |
| **Pagination** | stránkovanie | Číselné odkazy `1 2 3 …` na rozdelenie dlhého zoznamu | Zoznam produktov, článkov na viac strán |

!!! tip "Hamburger — čo to je a prečo"
    Tie tri vodorovné čiarky (☰) na mobile sú „hamburger". Keď naň klepneš, vysunie sa menu. Volá sa tak, lebo tri čiarky vyzerajú ako žemľa, mäso a žemľa. Na mobile sa plné vodorovné menu nezmestí, preto sa schová práve pod túto ikonu.

---

## 🔘 Tlačidlá (buttons)

Tlačidlo je to, na čo návštevník klikne, aby sa niečo stalo. Nie všetky tlačidlá sú rovnaké — líšia sa dôležitosťou.

| Typ | Slovenský názov | Ako vyzerá | Na čo je |
|---|---|---|---|
| **Primary** | primárne tlačidlo | Výrazné, vyfarbené (napr. plná farba) | Hlavná akcia — „Kúpiť", „Odoslať" |
| **Secondary** | sekundárne tlačidlo | Menej výrazné, tlmená farba | Vedľajšia akcia — „Zrušiť", „Späť" |
| **Icon button** | ikonové tlačidlo | Len ikonka bez textu (napr. 🔍, 🛒) | Vyhľadávanie, košík, obľúbené |
| **Ghost** | priehľadné (ghost) tlačidlo | Len obrys alebo text, bez výplne | Nenápadná akcia, ktorá netlačí na oči |

!!! note "Pravidlo jedného primárneho tlačidla"
    V jednej sekcii má byť **len jedno** výrazné primárne tlačidlo — to, kam chceš návštevníka nasmerovať. Keby bolo všetko rovnako výrazné, oko nevie, kam skočiť. Toto pokojne povedz aj Copilotovi.

---

## 📝 Formulárové prvky

Formulár je miesto, kde návštevník niečo vypĺňa alebo vyberá — prihlásenie, objednávka, kontakt. Skladá sa z týchto políčok.

| Prvok | Slovenský názov | Čo to je |
|---|---|---|
| **Text field / input** | textové pole | Riadok, do ktorého sa píše (meno, e-mail) |
| **Search field** | vyhľadávacie pole | Textové pole s lupou 🔍 na hľadanie |
| **Select / dropdown** | výber z možností | Rozbalí sa zoznam, z ktorého vyberieš jednu položku (napr. krajina) |
| **Checkbox** | zaškrtávacie políčko | Štvorček, ktorý zaškrtneš — dá sa vybrať viac naraz („súhlasím") |
| **Radio / toggle** | prepínač | Kolieska, kde vyberieš len jednu možnosť; toggle je prepínač zap/vyp |
| **Textarea** | textová oblasť | Veľké viacriadkové pole na dlhší text (správa, poznámka) |

!!! warning "Checkbox vs. radio — nezameň si ich"
    **Checkbox** = môžeš zaškrtnúť viacero naraz (napr. „chcem novinky" aj „súhlasím s podmienkami").
    **Radio** = vyberieš len jedno z viacerých (napr. veľkosť: S / M / L).
    Keď to Copilotovi povieš správne, nemusíš to potom prerábať.

---

## ✨ Ďalšie prvky

Toto sú prvky, ktoré stránke pridávajú funkčnosť alebo šmrnc.

| Prvok | Slovenský názov | Čo to je |
|---|---|---|
| **Modal** | modálne okno (popup) | Okno, ktoré vyskočí navrch a stmaví pozadie (napr. potvrdenie, prihlásenie) |
| **Gallery** | galéria | Mriežka obrázkov, často sa dajú zväčšiť po kliknutí |
| **Table** | tabuľka | Údaje v riadkoch a stĺpcoch (cenník, porovnanie) |
| **Slider / carousel** | posuvník / kolotoč | Obrázky alebo obsah, ktoré sa posúvajú do strán |
| **Progress bar** | ukazovateľ priebehu | Pruh, ktorý ukazuje, koľko je hotové (napr. nahrávanie 70 %) |
| **Favicon** | favicon | Malá ikonka pri názve stránky v záložke prehliadača |

!!! tip "Favicon — malý detail, veľký dojem"
    Favicon je tá maličká ikonka, ktorú vidíš v záložke (tab) prehliadača vedľa názvu stránky. Pôsobí profesionálne a pomáha ľuďom nájsť tvoju záložku medzi ostatnými. Copilota pokojne požiadaj, aby ti nejaký pridal.

---

## 🗣️ Ako slovník použiť v prompte

Teraz to najdôležitejšie — **ako tieto názvy použiť**, keď píšeš Copilotovi. Čím presnejšie pomenovanie, tým menej prerábania.

!!! example "Ukážky konkrétnych promptov"
    Namiesto hmlistého „sprav to lepšie" napíš do Copilot Chatu presne, čo chceš — s názvami z tohto slovníka:

    ```
    Do hlavičky (header) pridaj hamburger menu, ktoré sa na mobile
    vysunie po klepnutí na ikonu ☰.
    ```

    ```
    Sekciu s projektmi sprav ako karty (cards) v troch stĺpcoch —
    každá karta nech má obrázok, nadpis a krátky popis.
    ```

    ```
    Na vrch stránky pridaj hero sekciu s veľkým nadpisom
    „Ručne pražená káva" a jedným primárnym tlačidlom „Objednať".
    ```

    ```
    Do pätičky (footer) daj kontakt, odkazy na sociálne siete
    a copyright s aktuálnym rokom.
    ```

    ```
    Pridaj kontaktný formulár s textovým poľom na meno, e-mail,
    textovou oblasťou (textarea) na správu a primárnym tlačidlom „Odoslať".
    ```

!!! danger "Vygenerované ešte neznamená hotové"
    Keď ti Copilot čokoľvek z tohto vyrobí, **VŽDY to skontroluj očami a preklikaním** — nie čítaním kódu:

    1. **Otvor náhľad** stránky a pozri sa, či prvok naozaj pribudol a je na správnom mieste.
    2. **Preklikaj to** — klikni na tlačidlo, rozbaľ menu, otvor popup. Naozaj to reaguje?
    3. **Skús mobil**: stlač `F12` a klikni na **ikonu mobilu** (prepnutie na zobrazenie telefónu). Zmestí sa hamburger menu? Nerozbité?
    4. **Pozri konzolu**: `F12` → záložka **Console**. Sú tam **červené chyby**? Ak áno, skopíruj ich a pošli Copilotovi s prosbou o opravu.

    Podrobný postup nájdeš v [Kontrola webu](../znalostna-baza/kontrola-webu.md).

---

## ✅ Zhrnutie

Čo už teraz vieš:

- **Pomenovať rozloženie stránky**: hlavička, hero, obsahové sekcie, karty, pätička.
- **Rozlíšiť typy menu**: vodorovné, dropdown, sidebar, hamburger, breadcrumbs, stránkovanie.
- **Poznať typy tlačidiel**: primárne, sekundárne, ikonové, ghost.
- **Vymenovať formulárové prvky**: textové pole, výber, checkbox, radio/toggle, textarea.
- **Použiť tieto názvy v prompte** tak, aby Copilot presne vedel, čo chceš — a **skontrolovať výsledok** očami, preklikaním, na mobile a v konzole.

Máš v ruke slovník. Odteraz sa s AI o webe rozprávaš ako profík — presnými názvami.

➡️ Pokračuj na [Prostredie – Codespaces](../znalostna-baza/prostredie-codespaces.md), kde sa naučíš, kde to všetko vyskúšaš.
