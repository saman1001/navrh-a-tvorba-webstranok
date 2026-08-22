# Blok 8 — Git a oprava chýb

V tomto bloku sa naučíš dve najdôležitejšie záchranné zručnosti pri tvorbe webu s AI:

1. **Vrátiť sa späť**, keď AI niečo pokazí (to je *git* — tvoja záchranná brzda).
2. **Systematicky nájsť a opraviť chybu**, ktorú AI spravila — bez toho, aby si vedel čítať kód.

!!! tip "Prečo je tento blok najdôležitejší"
    V reálnej praxi budeš opravovať oveľa viac, než tvoriť od nuly. A to najcennejšie nie je „vedieť programovať" — je to vedieť chybu **NÁJSŤ** a presne **POPÍSAŤ**. Kto vie povedať *čo, kde a ako sa prejavuje*, ten dostane od AI dobrú opravu. Kto povie len „nefunguje to", dostane hádanie.

---

## 🧯 Časť A — Záchranná brzda (git)

*Git* je systém, ktorý si pamätá verzie tvojho webu. Keď si uložíš („commitneš") funkčný stav, môžeš sa k nemu kedykoľvek vrátiť — aj keby si medzitým všetko rozbil. Predstav si to ako uloženú pozíciu v hre: keď sa niečo pokazí, načítaš poslednú dobrú pozíciu.

Podrobnosti a všetky príkazy nájdeš na stránke [Git — záchranná brzda](../znalostna-baza/git-zachranna-brzda.md). Tu si to natvrdo vyskúšame.

### Krok 1 — Ulož funkčný stav (commit)

Najskôr sa uisti, že tvoje portfólio funguje: otvor náhľad, preklikaj odkazy, pozri sa, či je všetko na svojom mieste. Až keď je to v poriadku, ulož tento stav. Napíš do Copilot Chat.

```
Commitni aktuálny stav portfólia. Použi krátku výstižnú správu commitu, napríklad "Funkčné portfólio pred experimentom". Potvrď mi, že commit prebehol.
```

!!! warning "Vygenerované ešte neznamená hotové — over si to"
    Commit je „uloženie pozície". Ak neprebehol, nemáš sa kam vrátiť! Over si to takto: v ľavom paneli klikni na ikonu **Source Control** (vetvička). Ak je zoznam zmien prázdny (žiadne „Changes"), commit prebehol a máš čistý, uložený stav. Ak tam zmeny stále visia, commit sa nepodaril — napíš AI: *„Commit neprebehol, skús to znova a povedz mi, kde je problém."*

### Krok 2 — Nechaj AI spraviť riskantnú zmenu

Teraz naschvál urobíme veľkú, riskantnú zmenu — jedným veľkým promptom naraz. Toto je presne to, čo sa **neodporúča** robiť v praxi, ale teraz to chceme, aby si videl, prečo. Napíš do Copilot Chat.

```
Kompletne prerob farebnú schému a navigáciu celého webu: tmavý dizajn, iné písma, menu do bočného panela. Zmeň všetko naraz.
```

### Krok 3 — Pozri sa na výsledok

Otvor náhľad webu a pozri sa, čo sa stalo. Preklikaj stránky.

!!! example "Vizuálna kontrola"
    - Vyzerá web tak, ako si chcel? Alebo je z toho chaos?
    - Fungujú ešte odkazy v menu, keď je teraz v bočnom paneli?
    - Je text čitateľný na tmavom pozadí, alebo niekde zmizol?
    - Stlač **F12 → Console** a pozri sa, či nesvietia červené chyby.

    Skoro určite zistíš, že jedna zo zmien sa ti páči, ale dve iné veci sa pokazili. A práve preto je taký veľký prompt problém — **zmenilo sa priveľa vecí naraz a ty už nevieš, ktorá zmena čo spôsobila.**

### Krok 4 — Nacvič návrat späť

Toto je tá záchranná brzda. Vrátime sa presne do stavu, ktorý sme uložili v Kroku 1. Najskôr si vyžiadaj, čo tým stratíš — nikdy nevracaj naslepo. Napíš do Copilot Chat.

```
Chcem sa vrátiť do stavu posledného commitu. Najskôr mi vypíš, čo stratím. Počkaj na potvrdenie.
```

Prečítaj si, čo ti AI napíše — vypíše zoznam zmien, ktoré sa zahodia. Ak s tým súhlasíš (a v tomto cvičení áno, veď to bol pokus), potvrď. Napíš do Copilot Chat.

```
Potvrdzujem, vráť to.
```

!!! warning "Skontroluj, že návrat naozaj prebehol"
    Nestačí, že to AI napísala. **Over to očami:** otvor náhľad webu — vyzerá zase ako pôvodné funkčné portfólio? Preklikaj odkazy. Stlač **F12 → Console**, či je bez červených chýb. V paneli **Source Control** by nemali visieť žiadne zmeny. Až keď vidíš pôvodný web, vieš, že brzda zabrala.

### Ponaučenie z časti A

!!! note "Malé kroky > veľký skok"
    Veľké zmeny naraz sa **ťažko kontrolujú** — keď sa niečo pokazí, nevieš čo. Preto v praxi:

    - Zmeň **jednu vec**, skontroluj ju, a keď funguje, **commitni**.
    - Až potom ďalšiu zmenu.
    - Časté commity = husto rozmiestnené záchranné body. Čím bližšie máš posledný dobrý bod, tým menej stratíš.

---

## 🐞 Časť B — Pokazený web (nájdi a oprav)

Teraz si natrénuješ to najcennejšie: **hľadanie chýb.** Necháme AI vyrobiť cvičnú stránku, do ktorej naschvál ukryje chyby. Tvojou úlohou bude ich nájsť — **sám, bez AI.**

!!! danger "Najdôležitejšie pravidlo tohto cvičenia"
    **Nepýtaj sa AI, aké chyby tam sú!** Keby si sa spýtal, pripravíš sa o celý tréning. Chyby musíš objaviť sám — presne tak, ako to bude v praxi, keď ti nikto nepovie, čo je zle. AI použiješ až na **opravu**, nie na hľadanie.

### Krok 1 — Nechaj AI vyrobiť cvičnú stránku s chybami

Napíš do Copilot Chat presne tento prompt (skopíruj celý):

```
Vytvor jednostránkový web fiktívnej kaviarne (čisté HTML + CSS + trocha JavaScriptu, bez frameworkov): menu s odkazmi, hero, ponuka nápojov s obrázkami, kontaktný formulár, pätička. Zámerne ukry presne 5 chýb: 1) odkaz v menu vedie na neexistujúcu stránku, 2) jeden obrázok sa nezobrazí (zlá cesta), 3) tlačidlo po kliknutí vyhodí chybu do konzoly, 4) na mobile obsah preteká mimo obrazovku, 5) jeden dôležitý text má veľmi slabý kontrast. Chyby nekomentuj a neprezraď. Napíš len: Hotovo.
```

Keď AI odpovie „Hotovo", otvor náhľad stránky. **Nepozeraj sa do kódu** — a ani nemusíš. Ideš to preklikať ako obyčajný návštevník.

### Krok 2 — Nájdi chyby SÁM (bez AI)

Toto je jadro celého bloku. Postupuj systematicky podľa stránky [Kontrola webu](../znalostna-baza/kontrola-webu.md). Priprav si papier alebo poznámkový blok a **každú chybu si zapíš** v tvare: **čo** je zle, **kde** to je, **ako sa to prejavuje.**

!!! example "Kontrolný postup — prejdi všetkých 5 miest"
    **1. Preklikaj všetky odkazy v menu.** Klikni na každý. Vedie niektorý na stránku, ktorá neexistuje (chyba „404" alebo prázdno)? Zapíš si ktorý.

    **2. Pozri sa na obrázky.** Zobrazujú sa všetky? Nie je niekde prázdny rámik alebo ikona rozbitého obrázka? Ak áno, otvor **F12 → záložka Network**, obnov stránku a hľadaj červený riadok obrázka (zvyčajne so stavom 404) — to je ten s nesprávnou cestou.

    **3. Vyskúšaj tlačidlá.** Otvor **F12 → Console**, potom klikni na tlačidlá na stránke. Objaví sa po kliknutí **červená chyba v konzole**? Zapíš si, ktoré tlačidlo a čo v tej chybe píše.

    **4. Skús mobil.** Stlač **F12 → klikni ikonu mobilu/tabletu** (prepnutie na mobilné zobrazenie). Preteká niektorý obsah mimo obrazovku? Musíš rolovať do strán (horizontálny posuvník)? Zapíš, ktorá časť pretekáva.

    **5. Skontroluj čitateľnosť.** Prejdi text očami. Je niekde text taký svetlý (alebo slabo odlíšený od pozadia), že sa ťažko číta? Zapíš, ktorý text to je.

!!! tip "Nenašiel si všetkých 5?"
    Nevadí — vráť sa a prejdi postup ešte raz, pomalšie. Chyba č. 5 (kontrast) sa prehliada najľahšie. Cieľom nie je uhádať, ale **naozaj vidieť** každú chybu na vlastné oči a vedieť ju popísať. Až keď máš zoznam, ideš opravovať.

### Krok 3 — Oprav chyby jednu po druhej

Teraz — a až teraz — zapojíš AI. **Opravuj po jednej.** Nikdy nepošli „oprav všetko naraz" — to je presne tá chyba z časti A. Pre každú chybu použi tento vzor (doplň svoj popis):

```
Našiel som chybu: [popíš čo, kde a ako sa prejavuje; ak je v konzole chybová hláška, skopíruj ju sem celú]. Oprav len túto jednu chybu, nič iné nemeň, a povedz mi jednou vetou, čo bolo zle.
```

!!! warning "Po každej oprave znovu skontroluj — vygenerované ešte neznamená hotové"
    Keď AI ohlási opravu, **over ju rovnakým spôsobom, akým si chybu našiel:**

    - Opravený odkaz? → klikni naň, či teraz vedie kam má.
    - Opravený obrázok? → obnov stránku, či sa zobrazí.
    - Opravené tlačidlo? → klikni a pozri **F12 → Console**, či už chyba nesvieti.
    - Opravený mobil? → **F12 → ikona mobilu**, či už obsah nepretekáva.
    - Opravený kontrast? → pozri, či je text teraz jasne čitateľný.

    A pozor: over aj to, či oprava **nepokazila niečo iné.** Preto opravujeme po jednej — pri jednej zmene ľahko zbadáš, ak sa niečo pohlo.

Keď je oprava v poriadku, je dobrý čas **commitnúť** (viď časť A) — máš zase o jeden záchranný bod viac. Potom prejdi na ďalšiu chybu.

### Krok 4 — Záverečná previerka

Keď si presvedčený, že si opravil všetkých 5, over si to. Ale najskôr skús **sám** ešte raz prejsť stránku — nezostala niekde chyba, ktorú si prehliadol? Až potom sa spýtaj AI ako poslednú kontrolu. Napíš do Copilot Chat.

```
Skontroluj, či ostala niektorá z 5 ukrytých chýb — popíš ju, ale neopravuj.
```

!!! note "Prečo neopravovať hneď"
    Ak AI nejakú ešte nájde, **najskôr ju skús vidieť sám** na stránke podľa jej popisu — to je posledný kúsok tréningu tvojho oka. Až keď ju naozaj vidíš, opravíš ju rovnakým vzorom ako v Kroku 3 a znovu skontroluješ.

---

## ✅ Zhrnutie

Čo teraz vieš a máš hotové:

- **Commitovať** funkčný stav webu a overiť si v paneli Source Control, že sa commit naozaj uložil.
- **Vrátiť sa späť** do posledného commitu — a to bezpečne: najskôr si vyžiadaš, čo stratíš, potvrdíš, a až potom skontroluješ, že návrat prebehol.
- Chápeš, prečo **veľké zmeny naraz** sú riskantné a prečo je lepšie **malé kroky + časté commity.**
- Vieš **systematicky nájsť chybu sám** — preklikať odkazy, skontrolovať obrázky cez Network, tlačidlá cez Console, mobil cez ikonu mobilu, a čitateľnosť očami.
- Vieš chybu **presne popísať** (čo, kde, ako sa prejavuje) a nechať AI opraviť **len ju jednu** — a po každej oprave znovu skontrolovať.

Najdôležitejšie: **hľadať a popisovať chyby je cennejšie než tvoriť od nuly.** A **vygenerované ešte neznamená hotové** — vždy nasleduje kontrola.

➡️ Pokračuj na **Blok 9**, kde spojíš všetko doteraz naučené dokopy.
