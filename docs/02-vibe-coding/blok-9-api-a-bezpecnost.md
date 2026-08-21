# Blok 9 — API a bezpečnosť 🔌

V tomto bloku pridáš do svojho portfólia malú appku, ktorá **berie živé dáta z internetu** — prevodník mien s aktuálnymi kurzami. Zároveň sa naučíš dôležitú vec: ako **bezpečne** narábať s prístupovým kľúčom a ako rozpoznať, keď si AI **vymýšľa**.

## 🍽️ Čo je API — po ľudsky

**API** je spôsob, ako si tvoja stránka vypýta dáta z inej služby cez internet. Predstav si to ako **reštauráciu**:

- Ty (tvoja stránka) si **hosť**, ktorý má požiadavku — „chcem dnešný kurz eura".
- **Čašník** odnesie tvoju objednávku do kuchyne.
- **Kuchyňa (server cudzej služby)** ju pripraví.
- Čašník ti prinesie **odpoveď** — hotové dáta.

Ty nemusíš vedieť, ako to v kuchyni funguje. Stačí, že vieš, čo si objednať a kam poslať objednávku.

Tri pojmy, ktoré budeš počuť:

- **API kľúč** — tvoje osobné heslo k službe. Podľa neho služba vie, že požiadavku posielaš práve ty.
- **Endpoint** — adresa (URL), na ktorú sa požiadavka posiela. Napríklad `.../latest/USD` znamená „daj mi kurzy voči doláru".
- **JSON** — formát, v ktorom odpoveď príde späť. Je to obyčajný text usporiadaný do dvojíc „názov: hodnota". Nemusíš mu rozumieť do detailu — appku poskladá AI, ty výsledok len skontroluješ očami.

!!! note "Nič sa neinštaluje"
    Všetko robíš v prehliadači cez GitHub Codespaces a prompty píšeš do panela **Copilot Chat**. Žiadny program neinštaluješ.

## 🔑 Krok 1 — získaj bezplatný kľúč

Použijeme službu **ExchangeRate-API**, ktorá dáva kurzy mien zadarmo.

1. Otvor v prehliadači [exchangerate-api.com](https://www.exchangerate-api.com).
2. Klikni na tlačidlo **Get Free Key**.
3. Zaregistruj sa e-mailom a heslom. **Platobnú kartu nepýta** — je to zadarmo.
4. Potvrď registráciu cez e-mail (príde ti overovací odkaz).
5. Po prihlásení uvidíš svoj **dashboard** a na ňom svoj **API kľúč** — dlhý reťazec písmen a číslic. Ten si o chvíľu skopíruješ.

!!! note "Free plán má svoje hranice"
    Bezplatný plán aktualizuje kurzy **raz denne** a má **mesačný limit** počtu požiadaviek. Na cvičenie to bohato stačí. Nečakaj kurzy „naživo po sekundách" — na to je platený plán.

## 🛠️ Krok 2 — vytvor prevodník

Teraz necháš AI poskladať celú appku. Do **Copilot Chat** napíš tento prompt. **Namiesto `SEM-VLOZ-SVOJ-KLUC` daj svoj skutočný kľúč** z dashboardu (na dvoch miestach v prompte):

```
Vytvor nový projekt Prevodník mien s tabuľkou aktuálnych kurzov, ktorý použije ExchangeRate API. Môj API kľúč: SEM-VLOZ-SVOJ-KLUC. Vzorová požiadavka: https://v6.exchangerate-api.com/v6/SEM-VLOZ-SVOJ-KLUC/latest/USD. Prevodník: zadám sumu, vyberiem zdrojovú a cieľovú menu, zobrazí sa výsledok. Tabuľka: aktuálne kurzy voči vybranej mene. Pridaj ho ako nový projekt do index.html a appku sprav na podstránke. Dizajn podľa docs/style-guide.md. Ošetri chyby: keď API vráti chybu, zobraz zrozumiteľnú hlášku. Na záver mi napíš, ako appku otvorím a čím overím, že funguje.
```

!!! tip "Prečo v prompte píšeme placeholder a nie kľúč"
    V učebnom materiáli vidíš `SEM-VLOZ-SVOJ-KLUC` naschvál — aby sa sem nedostal ničí skutočný kľúč. Ty do svojho promptu vložíš svoj vlastný. Nižšie si vysvetlíme, prečo to pri tomto konkrétnom kľúči môžeme spraviť a kedy by to bola chyba.

!!! danger "Kľúč do promptu normálne nepatrí (tu je výnimka)"
    Platí zásada: **prístupový kľúč nepíš do promptu.** Prečo tu robíme výnimku? Kľúč z ExchangeRate-API je **bezcenný** — nedá sa ním nič zaplatiť, umožňuje len čítať verejné kurzy mien. Preto si na cvičení môžeme dovoliť vložiť ho priamo.

    Keby išlo o kľúč napojený na **peniaze** (platby, platený účet, tvoja karta), kľúč do promptu **NIKDY** nedávaj — vložíš ho ručne do súboru. Rovnako na **zdieľanom školskom PC nikdy nepoužívaj reálne platobné kľúče**. Viac v [Bezpečnosť kľúčov](../znalostna-baza/bezpecnost-klucov.md).

## ✅ Krok 3 — KONTROLA: vygenerované ešte neznamená hotové

AI ti appku vyrobila. To **neznamená, že funguje** — musíš to overiť **očami a klikaním**. Keďže kód čítať nemusíš, kontrola je vizuálna a funkčná.

1. Otvor náhľad appky (podstránku prevodníka), ktorý ti Copilot na konci opísal.
2. Zadaj sumu **100**, zdrojová mena **EUR**, cieľová **USD**.
3. Klikni na prevod — **zobrazil sa výsledok** s číslom? Ak áno, dáta reálne prichádzajú z internetu. 🎉
4. Skús ešte jednu dvojicu, napr. **50 CZK → EUR**. Vyzerá výsledok rozumne?
5. Pozri sa na **tabuľku kurzov** — sú tam vypísané meny a čísla, alebo je prázdna?

!!! warning "Keď sa nič nezobrazí alebo svieti chyba"
    Otvor **F12 → záložka Console** a pozri sa na **červené riadky**. Najčastejšia príčina býva zle vložený alebo neúplný kľúč. Skontroluj, že si kľúč vložil celý a na oboch miestach v prompte.

Celý postup vizuálnej a funkčnej kontroly (náhľad, mobil cez F12 → ikona mobilu, konzola) máš zhrnutý v [Kontrola webu](../znalostna-baza/kontrola-webu.md).

## 🙈 Krok 4 — kľúč mimo zverejnenia

Keď appka funguje, upraceme kľúč z kódu do samostatného súboru. Do **Copilot Chat** napíš:

```
Presuň môj API kľúč z kódu do súboru .env a pridaj .env do .gitignore, nech sa nedostane do repozitára. Skontroluj, či kľúč neostal v inom súbore.
```

**Súbor `.env`** je miesto na tajné údaje. **`.gitignore`** je zoznam súborov, ktoré sa **nemajú** dostať do verejného repozitára na GitHube. Takto sa kľúč nezverejní spolu s kódom.

!!! warning "Poctivá pravda: na statickom webe kľúč aj tak vidno"
    Nechcem ťa oklamať. Toto je **statický web** — všetko beží v prehliadači návštevníka. Kľúč sa **stále** posiela z prehliadača do služby, a preto si ho ktokoľvek vie pozrieť:

    **F12 → záložka Network → klikni na požiadavku smerujúcu na `exchangerate-api.com` → v jej adrese (URL) uvidíš svoj kľúč.**

    Preto na tomto predmete používame **len bezcenné kľúče** — aj keď ich niekto uvidí, nič sa nestane. Skutočné skrytie kľúča pred návštevníkom vyžaduje **vlastný server** (medzičlánok, ktorý kľúč drží u seba a von ho nepustí), a to je už mimo tohto predmetu. `.env` a `.gitignore` sú aj tak dobrý návyk — chránia ťa pred tým, aby si kľúč omylom nenahral na GitHub.

## 🧠 Krok 5 — keď si AI vymýšľa (halucinácie)

AI odpovedá vždy **sebavedomo** — aj keď nemá pravdu. Vyskúšajme si to naschvál. Do **Copilot Chat** napíš:

```
Pridaj graf vývoja kurzu za posledných 30 dní použitím môjho kľúča.
```

AI ti pravdepodobne s istotou napíše, že to spraví, a možno aj vygeneruje kód. Lenže **historické dáta free plán ExchangeRate-API nemá** — takže to **nebude fungovať**. Graf zostane prázdny alebo vyhodí chybu.

Ako to overíš, keď nevieš čítať kód:

1. Otvor **F12 → záložka Network**.
2. Klikni na požiadavku, ktorá išla na API.
3. Pozri sa na **odpoveď (Response)** — čo API naozaj vrátilo? Namiesto dát tam bude chybová hláška (napr. že taká funkcia nie je dostupná).
4. Otvor **oficiálnu dokumentáciu** služby na [exchangerate-api.com](https://www.exchangerate-api.com) a over, či sa historické dáta na free pláne vôbec dajú získať. Nedajú.

Poučenie: **netlač donekonečna „oprav to".** Keď niečo opakovane nefunguje, príčina často nie je chyba v kóde — služba to jednoducho **neponúka**. Over v dokumentácii, čo sa naozaj dá, a až potom zadávaj ďalšie prompty.

!!! tip "Tri signály, kedy AI VŽDY over"
    - **Hovorí o cudzej alebo platenej službe** — či tá funkcia naozaj existuje a či ju máš v pláne.
    - **Volá adresu alebo funkciu, ktorú si nikdy nevidel** — nová URL či názov, čo sa objaví „odnikiaľ".
    - **Hovorí „malo by to fungovať"** bez toho, aby to otestoval — „malo by" nie je „funguje". Otestuj to sám.

## 📌 Zhrnutie

Čo teraz vieš a máš hotové:

- Chápeš, **čo je API** (čašník medzi tvojou stránkou a cudzou službou), **kľúč** (tvoje heslo) a **endpoint** (adresa požiadavky), a že odpoveď chodí ako **JSON**.
- Máš v portfóliu **funkčný prevodník mien**, ktorý berie **živé dáta** z internetu.
- Vieš, prečo sa **bezcenný kľúč** na cvičenie smie použiť a prečo **platobný kľúč do promptu nikdy**.
- Vieš, že na statickom webe je kľúč **viditeľný** (F12 → Network) a že skutočné skrytie vyžaduje server.
- Vieš rozpoznať **halucináciu AI**: overiť v F12 → Network, čo API vrátilo, a v oficiálnej dokumentácii, či to vôbec ide.

Pokračuj na **[Blok 10](blok-10-interaktivita-a-nasadenie.md)**.
