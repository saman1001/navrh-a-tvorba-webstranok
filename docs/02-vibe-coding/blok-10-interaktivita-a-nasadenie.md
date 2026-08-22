# Blok 10 — Interaktivita a nasadenie

Tvoj web už niečo vie — má dizajn, portfólio, možno aj malú appku z minulého bloku. Zatiaľ však bol **statický**: len sa naň pozeráš, ale nič sa v ňom nedeje. V tomto bloku to zmeníme dvakrát.

Najskôr pridáš do stránky **interaktívnu appku** — jednoduchý zoznam úloh (TODO), ktorý si **pamätá** to, čo doň napíšeš. A potom dáš celý web **online**, na verejnú adresu, ktorú budeš vedieť poslať komukoľvek.

!!! tip "Čo dosiahneš v tomto bloku"
    - malú appku priamo v tvojej stránke, ktorá si pamätá dáta aj po zavretí,
    - hotové portfólio na **verejnej adrese** na internete,
    - odkaz, ktorý pošleš rodine, kamarátom alebo vyučujúcemu.

---

## Časť A — Interaktivita (zoznam úloh)

### Ako budeme pracovať: najskôr sa opýtaj, potom vyber

Skús odolať pokušeniu hneď povedať AI „sprav mi TODO appku". Lepšie je pracovať **v dvoch krokoch**:

1. Najskôr sa AI opýtaš na **návrh** — aké funkcie by taká appka mohla mať.
2. Potom si **ty** z ponuky vyberieš tie, ktoré naozaj chceš, a až tie zadáš na spracovanie.

Prečo? Lebo tak zostávaš ty ten, kto rozhoduje. AI ti pomôže s nápadmi, ale výber je na tebe — a menšia appka, ktorú chápeš, je lepšia ako veľká, v ktorej sa stratíš.

### Krok 1 — opýtaj sa na návrh

Otvor **Copilot Chat** (bočný panel s AI) a napíš tento prompt:

```
Chcem do svojej stránky pridať jednoduchý zoznam úloh (TODO), ktorý pobeží len v prehliadači, bez servera a prihlasovania. Aké funkcie by mal mať? Vypíš od najdôležitejších po doplnkové, ku každej jednu vetu. Zatiaľ nič neprogramuj.
```

AI ti vypíše zoznam — napríklad: pridanie úlohy, označenie úlohy ako hotovej, vymazanie úlohy, úprava textu, počítadlo zostávajúcich úloh, filtrovanie hotových a podobne.

!!! note "Zatiaľ nič nevzniklo"
    Všimni si posledná vetu v prompte: *„Zatiaľ nič neprogramuj."* Chceme len návrh, nie hotovú appku. To je zámer — najskôr rozmýšľame, potom staviame.

### Krok 2 — vyber si 3 až 5 funkcií a zadaj ich

Z ponuky si vyber **3 až 5 funkcií** — nie viac. Pre prvú appku úplne stačia tie základné: pridať úlohu, označiť ako hotovú, vymazať. Potom napíš do Copilot Chat tento prompt (do hranatých zátvoriek dopíš svoje vybrané funkcie):

```
Zo zoznamu vyberám tieto funkcie: [dopíš, napr. pridanie úlohy, označenie ako hotová, vymazanie]. Zapracuj zoznam úloh priamo do index.html ako novú sekciu 'Moje úlohy'. Dáta ukladaj do localStorage prehliadača, aby úlohy ostali aj po obnovení stránky. Dizajn podľa docs/style-guide.md. Ostatné časti stránky nemeň.
```

AI teraz upraví tvoj súbor `index.html` a pridá doň novú sekciu. Prijmi zmeny (tlačidlo **Keep** / **Accept** pri návrhu od Copilota).

!!! warning "Vygenerované ešte neznamená hotové"
    AI práve niečo vyrobila — ale to neznamená, že to funguje. Teraz musí prísť **kontrola**. A keďže kód čítať nemusíš, kontrola je **vizuálna a funkčná**: pozri sa na výsledok a vyskúšaj ho.

### Kontrola č. 1 — vyzerá to a dá sa to používať?

Otvor **náhľad** svojej stránky (preview) a nájdi novú sekciu **Moje úlohy**. Over postupne:

- **Vidno sekciu?** Je na stránke nová časť „Moje úlohy" a ladí farbami a písmom so zvyškom webu?
- **Pridá sa úloha?** Napíš do políčka „Kúpiť chlieb" a stlač tlačidlo (alebo Enter). Objaví sa úloha v zozname?
- **Označí sa ako hotová?** Klikni na úlohu (alebo na jej zaškrtávacie políčko). Zmení sa (napr. prečiarkne)?
- **Vymaže sa úloha?** Klikni na tlačidlo vymazania. Zmizne úloha zo zoznamu?

Ak niečo nefunguje, napíš to AI presne a konkrétne, napríklad:

```
Keď kliknem na tlačidlo Pridať, úloha sa v zozname nezobrazí. Priamo v index.html to oprav tak, aby sa nová úloha po kliknutí pridala do zoznamu. Ostatné časti stránky nemeň.
```

### Kontrola č. 2 — pamätá si to? (toto je najdôležitejšie)

Toto je srdce celej appky. Zoznam úloh má jednu úlohu navyše oproti obyčajnej stránke: **musí si dáta pamätať.** Over to takto:

1. Pridaj **tri úlohy** (napr. „Kúpiť chlieb", „Zavolať babke", „Dokončiť kurz").
2. Stlač **F5** (obnovenie stránky). Úlohy **musia ostať** — nesmú zmiznúť.
3. **Zavri náhľad** a otvor ho znova. Úlohy tam **musia byť stále**.

Ak úlohy po obnovení zmiznú, ukladanie nefunguje. Napíš AI:

```
Po obnovení stránky (F5) sa úlohy zo zoznamu strácajú. Uprav index.html tak, aby sa úlohy ukladali do localStorage prehliadača a po obnovení stránky sa znova načítali. Ostatné časti stránky nemeň.
```

!!! note "Čo je to localStorage — po ľudsky"
    **localStorage** je malé úložisko priamo v **tvojom** prehliadači. Tvoje úlohy sa uložia sem, do tohto počítača a tohto prehliadača — a preto ostanú aj po obnovení či zavretí stránky.

    Dôležité: vidíš ich **len ty**, na tomto zariadení. Keby si tvoju stránku otvoril niekto iný (alebo ty na inom počítači), mal by **vlastný prázdny zoznam** — tvoje úlohy tam nie sú. Pri osobnom TODO zozname je to úplne v poriadku, dokonca je to tak lepšie: nikto cudzí ti do zoznamu nevidí.

### Kontrola č. 3 — žiadne skryté chyby a funguje aj na mobile

Ešte dva rýchle testy, ktoré si zvykni robiť po každej zmene:

- **Konzola:** stlač **F12**, klikni na kartu **Console**. Ak tam svietia **červené** riadky, niečo je pokazené — skopíruj to celé do Copilot Chat a poproś o opravu.
- **Mobil:** v okne s F12 klikni na **ikonu mobilu** (prepnutie na malú obrazovku). Vyskúšaj pridať a vymazať úlohu aj takto — políčko aj tlačidlá musia byť dosť veľké a nič sa nesmie „rozsypať".

---

## Časť B — Nasadenie (web ide online)

Appka funguje — čas dať celý web **na internet**. Doteraz ho vidíš len ty v náhľade. **Nasadenie** znamená dať web na **verejnú adresu**, ktorú vieš poslať komukoľvek.

Celý postup je pripravený krok za krokom v znalostnej báze:

**➡️ [Nasadenie (GitHub Pages)](../znalostna-baza/nasadenie-github-pages.md)**

Prejdi si ho celý. Na konci budeš mať adresu v tvare `https://tvojemeno.github.io/moj-web` — presne tú pošli ďalej.

!!! warning "Než klikneš na publikovať: repozitár bude VEREJNÝ"
    GitHub Pages zverejní **všetky** súbory tvojho projektu — nielen web, ale aj všetko za ním. Preto na ňom **nesmie byť žiadny tajný kľúč ani heslo.**

    Ak si v predošlom bloku pracoval s API kľúčom, over si, že nie je napísaný priamo v súboroch. Na predmete používame len **bezcenné testovacie kľúče** a na zdieľanom školskom počítači **nikdy** reálne platobné kľúče. Detaily: [Bezpečnosť kľúčov](../znalostna-baza/bezpecnost-klucov.md).

### Kontrola po nasadení — otestuj to na živej adrese

!!! danger "Vygenerované — ba ani nasadené — ešte neznamená hotové"
    To, že sa web „publikoval", neznamená, že na živej adrese naozaj všetko funguje. Otvor svoju **verejnú adresu** (nie náhľad, ale ten `github.io` odkaz) a prejdi znova celú [Kontrolu webu](../znalostna-baza/kontrola-webu.md):

    - Načíta sa stránka? Vidno dizajn, portfólio aj sekciu **Moje úlohy**?
    - Fungujú odkazy a tlačidlá? Pridá a vymaže sa úloha?
    - **F12 → Console:** žiadne červené chyby?
    - **Mobil (F12 → ikona mobilu):** vyzerá to dobre aj na malej obrazovke?
    - **Prístupnosť:** prejdi [5-minútovú kontrolu prístupnosti](../znalostna-baza/pristupnost-webu.md) — práve na živej adrese funguje aj automatický audit **Lighthouse** (na náhľade cez `file://` nejde).

!!! tip "Pozor na úlohy na živej adrese"
    Živá adresa je iná ako tvoj náhľad, takže sa tvári ako **nový prehliadač** — zoznam úloh na nej bude na začiatku **prázdny**. To je správne, tak localStorage funguje (pamätá si dáta pre danú adresu a prehliadač). Skús pridať pár úloh priamo na živej adrese, obnoviť (F5) a over, že ostanú.

---

## Uloženie zmien (commit + push)

Nakoniec zmeny **ulož**, aby o ne prostredie neprišlo a aby sa prejavili aj na živom webe. V paneli **Source Control** (ikona vetvenia vľavo) alebo cez Copilot:

1. Napíš krátku správu k zmene, napr. `Pridaný zoznam úloh a web nasadený online`.
2. Potvrď uloženie (**Commit**).
3. Odošli zmeny na GitHub (**Push** / **Sync**).

Po chvíľke sa tvoj **živý web sám aktualizuje** — GitHub Pages vezme nové súbory a zverejní ich.

!!! note "Nevieš si rady s ukladaním alebo sa niečo pokazilo?"
    Pozri [Prostredie (Codespaces)](../znalostna-baza/prostredie-codespaces.md) na ovládanie prostredia a [Git — záchranná brzda](../znalostna-baza/git-zachranna-brzda.md), ak sa potrebuješ vrátiť späť pred pokazenú zmenu.

---

## Zhrnutie

Máš za sebou veľký míľnik. Teraz:

- máš v stránke **interaktívnu appku** — zoznam úloh, ktorý si **pamätá dáta** aj po obnovení a zavretí (vďaka localStorage),
- vieš pracovať **dvojkrokovo**: najskôr sa AI opýtaš na návrh, potom si sám vyberieš funkcie,
- overuješ výsledok **vizuálne a funkčne** — preklikaním, testom perzistencie (F5), konzolou (F12), na mobile a kontrolou prístupnosti (Tab test, Lighthouse),
- máš celé portfólio **online na verejnej adrese**, ktorú vieš poslať komukoľvek,
- vieš, že do verejného repozitára **nikdy** nepatrí tajný kľúč.

**Ďalej:** v ďalšom bloku spojíš všetko, čo si sa naučil — postavíš web, ktorý si navrhol v časti 1. Pokračuj na [Blok 11 — Vlastný projekt](blok-11-vlastny-projekt.md).
