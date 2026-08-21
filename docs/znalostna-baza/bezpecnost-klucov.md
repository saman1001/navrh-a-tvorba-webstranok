# 🔐 Bezpečnosť kľúčov

Keď tvoja stránka začne komunikovať s nejakou cudzou službou (napríklad načítať aktuálne kurzy mien), potrebuje sa jej „prihlásiť". Robí to takzvaným **API kľúčom**. V tomto bloku si vysvetlíme, čo taký kľúč je, prečo sa s ním musí zaobchádzať opatrne a ako ho neprezradiť celému internetu. Žiadna technika — len pár železných pravidiel, ktoré ti ušetria problémy.

!!! note "Čo je API"
    **API** je „prepojka" medzi dvomi programami — spôsob, akým sa tvoja stránka spýta cudzej služby na dáta (napr. „aký je dnes kurz eura?") a služba jej odpovie. Nemusíš tomu rozumieť do hĺbky, stačí vedieť, že na to prihlásenie treba **kľúč**.

## 🔑 Čo je API kľúč

Predstav si API kľúč ako **heslo pre tvoju stránku**. Nie je to heslo tvoje osobné, ale prihlasovací údaj, ktorým sa tvoja stránka predstaví cudzej službe: „ahoj, toto som ja, pusti ma dnu".

Vyzerá to zvyčajne ako dlhý nezmyselný reťazec písmen a číslic, napríklad:

```
sk_live_9f3Ka82Lq0ZbT7xN4pR
```

Dôležité na zapamätanie: **kto má tvoj kľúč, ten môže službu používať v tvojom mene.** Presne ako s heslom — komu ho dáš, ten sa vydáva za teba. Preto sa kľúč nikdy nesmie voľne povaľovať tam, kde ho niekto cudzí uvidí.

## ⛔ Dve železné pravidlá

!!! danger "Kľúč = heslo"
    Ku kľúču sa správaj presne ako k heslu k svojmu e-mailu. Platia dve pravidlá, ktoré neporušíš nikdy:

    1. **Kľúč NIKDY nepatrí do verejného repozitára na GitHube.** Na internete behajú automatické roboty, ktoré nonstop prehľadávajú verejné repozitáre a hľadajú kľúče. Nájdu ho do pár minút a zneužijú.
    2. **Kľúč NIKDY nevkladaj do promptu do AI chatu.** Keď kľúč napíšeš do Copilot Chatu, ostane v histórii konverzácie. Radšej AI povedz „kľúč doplním sám" a vlož ho až priamo do súboru.

Keď si tieto dve vety zapamätáš, máš vyhrané 90 % bezpečnosti.

## 👀 Prečo na našich weboch vidí kľúč každý

Toto je najdôležitejšia časť celého bloku, tak pomaly.

Weby, ktoré na predmete tvoríme, sú **statické** — to znamená, že celá stránka beží v prehliadači návštevníka. Nie je za ňou žiadny skrytý server, ktorý by niečo tajil. A to má jeden zásadný dôsledok:

!!! warning "Na statickom webe nie je nič naozaj skryté"
    Čokoľvek, čo tvoja stránka potrebuje na svoj chod — vrátane API kľúča — si **každý návštevník vie pozrieť**. Stačí, aby otvoril nástroje prehliadača (kláves ++f12++) a kľúč tam nájde. Nedá sa to „schovať" — statický web jednoducho takto funguje.

Znie to strašidelne, ale má to jednoduché riešenie:

**Na predmete používame len BEZCENNÉ, bezplatné kľúče.** To sú kľúče k službám, ktorými sa nedá nič zaplatiť a nič pokaziť — napríklad kľúč k službe s kurzami mien. Aj keby ho niekto videl, nič zlé sa nestane: maximálne si tiež pozrie kurz eura.

!!! danger "Kľúče napojené na peniaze na statický web NIKDY"
    Kľúče, cez ktoré tečú peniaze — platobné brány (Stripe a podobne), platené AI služby s tvojou kartou — na statický web **nepatria za žiadnych okolností**. Tam by ich videl každý a mohol ich zneužiť na tvoje náklady. Takéto kľúče vyžadujú **server**, ktorý ich schová — a to je pokročilá téma úplne mimo tohto predmetu. My sa jej nedotýkame práve preto, aby si sa nemohol popáliť.

Zhrnuté jednou vetou: **bezcenný kľúč na kurzy mien = v pohode; kľúč napojený na tvoje peniaze = nikdy na statický web.**

## 📁 Kam teda kľúč uložiť

Aj bezcenný kľúč je lepšie nedávať priamo do kódu, ktorý ide na GitHub. Zaužívaný a čistý spôsob je uložiť kľúč do samostatného súboru s názvom `.env` a zároveň povedať Gitu, aby tento súbor **ignoroval** — teda aby ho nikdy neposlal do repozitára.

!!! note "Čo je .env a .gitignore"
    - **`.env`** je malý textový súbor, v ktorom bývajú uložené „citlivé" hodnoty ako kľúče. Nie je súčasťou samotnej stránky, len ju kŕmi údajmi.
    - **`.gitignore`** je zoznam súborov, ktoré má Git prehliadať a nikdy neposielať na GitHub. Keď doň zapíšeš `.env`, tvoj kľúč sa do verejného repozitára jednoducho nedostane.

Toto nemusíš nastavovať ručne — **poprosíš o to AI**.

!!! tip "Ako o uloženie kľúča poprosiť AI"
    Otvor Copilot Chat a napíš mu tento prompt:

    ```
    Vytvor .env súbor pre môj API kľúč a pridaj .env do .gitignore, nech sa kľúč nedostane do repozitára. Kľúč doplním ručne.
    ```

    Všimni si poslednú vetu — **„kľúč doplním ručne"**. Tým AI povieš, aby pripravilo len prázdne miesto a samotný kľúč doň nikdy nepísalo (pripomeň si druhé železné pravidlo).

### ✅ Kontrola: naozaj sa kľúč neposiela na GitHub?

Vygenerované ešte neznamená hotové. Že AI súbory vytvorilo, ešte neznamená, že sú správne nastavené. Over si to takto — nepotrebuješ na to čítať kód:

1. V ľavom paneli (prehľad súborov) nájdi súbor **`.gitignore`**, klikni naň a pozri sa, či je v ňom niekde na samostatnom riadku napísané `.env`. Ak áno, výborne.
2. Pozri sa na súbor **`.env`** v zozname súborov. Ak je jeho názov sivý / stlmený oproti ostatným, je to dobré znamenie — znamená to, že ho Git ignoruje.
3. Otvor záložku **Source Control** (ikona vetvenia vľavo, vyzerá ako rozvetvená čiara). V zozname zmien, ktoré sa chystajú na GitHub, **`.env` NESMIE byť**. Ak ho tam nevidíš, je to presne tak, ako má byť.

!!! warning "Keď .env vidíš medzi zmenami"
    Ak sa `.env` predsa len objaví v Source Control medzi súbormi na odoslanie, **ešte ho neposielaj**. Napíš AI:

    ```
    Súbor .env sa mi zobrazuje medzi zmenami na odoslanie na GitHub. Skontroluj, či je .env správne zapísaný v .gitignore, a oprav to, nech sa .env neodosiela.
    ```

    Až keď `.env` zo zoznamu zmizne, je to v poriadku.

!!! tip "Alternatíva: Codespaces Secrets"
    GitHub Codespaces má aj vlastný trezor na kľúče — volá sa **Secrets**. Je to bezpečné miesto priamo v tvojom účte, kam kľúč uložíš raz a súbor `.env` už vôbec nepotrebuješ. Pre začiatok stačí spôsob s `.env` vyššie; Secrets je len dobré vedieť, že existuje.

## 🖥️ Zdieľaný školský počítač

Ak pracuješ na počítači v učebni, ktorý po tebe používa niekto ďalší, platí navyše jedno pravidlo:

!!! danger "Po sebe nič nenechávaj"
    Na zdieľanom školskom počítači **nikdy nenechávaj reálne kľúče ani heslá** — ani v súboroch, ani v otvorenom prehliadači, ani v prihlásených účtoch. Po tebe si k počítaču sadne ďalší študent a videl by ich. Používaj tu výhradne bezcenné kurzové kľúče a na konci sa zo svojich účtov odhlás.

## 🔥 Keď kľúč omylom unikne

Stane sa to aj skúseným. Dal si kľúč nešťastne do kódu, napísal si ho do promptu, alebo si ho omylom poslal na GitHub. Nič sa nedeje — dôležité je vedieť, čo urobiť.

!!! warning "Uniknutý kľúč je „spálený""
    Keď kľúč čo i len raz uvidel niekto cudzí (alebo sa dostal na verejný GitHub či do histórie AI chatu), považuj ho za **spálený** — už mu never a nepoužívaj ho. Nepomôže ho „zmazať späť", lebo si ho už niekto mohol skopírovať.

    Namiesto toho:

    1. Choď do služby, ktorá kľúč vydala (na jej web, do nastavení tvojho účtu).
    2. Starý kľúč tam **zneplatni** (zruš, „revoke" / „delete").
    3. Vygeneruj si **nový kľúč** a odteraz používaj ten.

    Tomuto výmennému postupu sa hovorí **rotácia kľúča**. Je to úplne bežná vec, netreba z toho mať zlý pocit.

Pri bezcenných kurzových kľúčoch nič nehrozí, ale je dobré si rotáciu vyskúšať aj s nimi — nabudúce, keď pôjde o niečo cennejšie, budeš vedieť, čo robiť.

## 🎯 Zhrnutie

Čo teraz vieš:

- **API kľúč je heslo tvojej stránky** k cudzej službe; kto ho má, používa službu v tvojom mene.
- Poznáš **dve železné pravidlá**: kľúč nikdy do verejného repozitára a nikdy do AI chatu.
- Rozumieš, prečo na **statickom webe kľúč vidí každý** — a preto na predmete používaš len **bezcenné, bezplatné kľúče**; kľúče napojené na peniaze na statický web nikdy nepatria.
- Vieš požiadať AI, aby ti kľúč uložilo do **`.env`** a zapísalo ho do **`.gitignore`**, a vieš si **vizuálne skontrolovať**, že sa `.env` neposiela na GitHub.
- Na **zdieľanom počítači** po sebe nenechávaš žiadne kľúče.
- Keď kľúč unikne, považuješ ho za **spálený** a spravíš **rotáciu** — zneplatníš starý a vygeneruješ nový.

Pokračuj ďalším blokom: [Kontrola webu](../znalostna-baza/kontrola-webu.md).
