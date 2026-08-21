# Blok 7 — Web stránka (portfólio)

V tomto bloku si vyrobíš **vlastnú osobnú stránku (portfólio)** — jednu webovú stránku, na ktorej ukážeš, kto si a aké projekty robíš. Nie je to cvičný príklad z knihy, ale **tvoja stránka**, podľa tvojho vlastného vzhľadu (style guidu, ktorý si robil v predošlom bloku).

Portfólio je jednoducho „vizitka na webe" — miesto, kam môžeš niekoho poslať, keď sa spýta „a čo si už robil?".

!!! example "Čo budeš mať na konci"
    Funkčnú jednostránkovú osobnú stránku s navigáciou, úvodnou (hero) sekciou s tvojím menom, sekciou Projekty, sekciou O mne a pätičkou s kontaktom. Bude mať tvoje farby, tvoju fotku, jemné animácie a bude fungovať aj na mobile. A hlavne — budeš vedieť, ako si po každom kroku overíš, že to naozaj funguje.

!!! note "Než začneš"
    Predpokladáme, že máš v projekte súbor `docs/style-guide.md` z predošlého bloku (tvoj vizuálny štýl — farby, písmo, nálada). AI podľa neho stránku naštýluje. Ak ho nemáš, najskôr sa vráť a sprav si ho — inak stránka nebude „tvoja", ale nejaká všeobecná.

---

## 🚀 Krok 1 — hlavný prompt

Otvor **Copilot Chat** (bočný panel s AI) a napíš doň tento prompt. Je kompletný — netreba nič dopĺňať, len skopíruj a odošli:

```
Sprav jednostránkovú osobnú stránku (portfólio), kde budem ukazovať svoje projekty. Použi jeden súbor index.html, Tailwind CSS v4 cez toto CDN: <script src=https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4></script>, a čistý JavaScript. Dizajn sprav podľa docs/style-guide.md. Štruktúra: navigácia, hero sekcia s mojím menom a krátkym popisom, sekcia Projekty s 3 kartami, sekcia O mne a pätička s kontaktom. Texty po slovensky. Pridaj jemné animácie. Stránka musí fungovať aj na mobile.
```

Copilot ti vyrobí súbor `index.html` s celou stránkou.

!!! note "Čo znamenajú tie pojmy"
    - **Tailwind CSS** — nástroj, ktorý uľahčuje pekné štýlovanie stránky. Načíta sa cez jeden riadok (to CDN), nič neinštaluješ.
    - **CDN** — „internetová knižnica", odkiaľ sa nástroj načíta priamo do stránky.
    - **hero sekcia** — veľký úvodný pruh navrchu stránky, prvá vec, ktorú návštevník uvidí.

!!! danger "Vygenerované ešte neznamená hotové"
    AI ti niečo vyrobila — ale to **neznamená, že je to hotové a funkčné**. Zatiaľ si nič nevidel. V ďalšom kroku sa na výsledok pozrieš vlastnými očami. Toto pravidlo platí počas celého predmetu: **po každom kroku, kde AI niečo vyrobí, nasleduje kontrola.**

---

## 👀 Krok 2 — pozri si výsledok

Teraz sa na stránku pozrieš v **živom náhľade** (Live Preview) — to je okno, kde vidíš stránku tak, ako ju uvidí návštevník.

1. V zozname súborov vľavo klikni pravým tlačidlom na `index.html`.
2. Vyber **Open with Live Preview** (alebo klikni na ikonu náhľadu vpravo hore).
3. Otvorí sa okno so stránkou.

!!! tip "Náhľad obnovuješ po každej zmene"
    Vždy, keď AI stránku upraví, náhľad si **obnov** (refresh), aby si videl novú verziu. Živý náhľad sa väčšinou obnoví sám, ale ak nie, klikni doň a stlač obnovenie. Bez obnovenia pozeráš na starú verziu a zbytočne sa čuduješ, že sa nič nezmenilo.

**Čo skontroluj očami (nemusíš čítať kód):**

- Zobrazila sa stránka celá? Vidíš navigáciu, hero, projekty, o mne, pätičku?
- Je tam **tvoje meno** a **tvoje farby** (podľa style guidu)?
- Nie je niečo rozbité — text cez text, prázdne miesta, čierna obrazovka?

Ak niečo chýba alebo je rozbité, napíš to Copilotovi jednou vetou, napr. *„Chýba mi sekcia Projekty, doplň ju."*

Podrobný postup kontroly nájdeš na stránke [Kontrola webu](../znalostna-baza/kontrola-webu.md).

---

## ✨ Krok 3 — vylepšuj malými krokmi

Teraz stránku vyladíš. Dôležité pravidlo: **jedna zmena = jeden prompt = jedna kontrola.** Nerob päť zmien naraz — keby sa niečo pokazilo, nevieš čo. Po každom prompte si **obnov náhľad a pozri sa**.

### Pridaj favicon

Favicon je malá ikonka pri názve stránky v záložke prehliadača.

```
Pridaj stránke favicon, ktorý ladí s mojím dizajnom podľa docs/style-guide.md.
```

**Kontrola:** obnov náhľad a pozri sa na **záložku (tab)** prehliadača — máš tam malú ikonku?

!!! warning "Favicon sa nemusí zobraziť hneď"
    Prehliadač si ikonku „pamätá" (cache), takže po zmene môže chvíľu ukazovať starú alebo žiadnu. Pomôže **Ctrl+F5** (tvrdé obnovenie). Ak sa aj tak neukáže hneď, nie je to chyba — skús ešte raz o chvíľu.

### Pridaj vlastnú fotku

Najskôr musíš fotku dostať **do projektu** — AI ju nevidí, kým ju tam nenahráš.

1. Nájdi si na počítači nejakú svoju fotku.
2. V zozname súborov vľavo si vytvor priečinok `img` (pravým tlačidlom → New Folder), ak ho ešte nemáš.
3. **Pretiahni** súbor fotky myšou priamo do priečinka `img` v zozname súborov vľavo. Premenuj ju napríklad na `fotka.jpg`.

Keď je fotka v projekte (vidíš ju ako `img/fotka.jpg`), napíš prompt:

```
Pridaj do sekcie O mne moju fotku z img/fotka.jpg, uprav veľkosť aby ladila s dizajnom, a pridaj popis (alt text) s mojím menom.
```

**Kontrola:** obnov náhľad, choď na sekciu **O mne** — vidíš svoju fotku? Má rozumnú veľkosť (nie na celú obrazovku, ani mikroskopickú)?

!!! note "Čo je alt text"
    Alt text je krátky popis obrázka pre prípad, že sa obrázok nenačíta, a pre nevidiacich, ktorí používajú čítačku obrazovky. Preto doň dávame tvoje meno.

### Pridaj SVG ilustráciu do hero

SVG je obrázok, ktorý je „nakreslený kódom" — je vždy ostrý a dá sa ľahko prefarbiť do tvojich farieb.

```
Pridaj do hero sekcie jemnú dekoratívnu SVG ilustráciu vo farbách z docs/style-guide.md, tak aby dopĺňala text a neprekrývala ho.
```

**Kontrola:** obnov náhľad, pozri hero sekciu — je tam ilustrácia? Sú to **tvoje farby**? Neprekrýva nadpis ani meno?

### Pridaj ikony k nadpisom sekcií

```
Pridaj malé ikony k nadpisom sekcií (Projekty, O mne, Kontakt), nech je stránka vizuálne prehľadnejšia. Ikony zlaď s dizajnom.
```

**Kontrola:** obnov náhľad, prejdi cez sekcie — má každý nadpis ikonku a vyzerá to úhľadne, nie preplnene?

!!! tip "Commituj po každom vydarenom kroku"
    Vždy, keď je nejaká zmena hotová a vyzerá dobre, **ulož si ju do Gitu** (commit). Keby sa neskôr niečo pokazilo, vieš sa vrátiť k poslednej dobrej verzii. Ako na to je v [Git — ukladanie práce](../znalostna-baza/git-zachranna-brzda.md).

---

## 🖼️ Krok 4 — obrázok z Unsplash (správne)

Do hero sekcie chceš pekné fotografické pozadie. Unsplash je stránka s fotkami zadarmo.

!!! warning "Nepýtaj odkaz na obrázok od AI"
    Keď poprosíš AI *„daj mi odkaz na fotku z Unsplash"*, často dostaneš odkaz, ktorý **nefunguje** (obrázok sa nenačíta, vidíš prázdne miesto). Preto to spravíme inak — obrázok si stiahneš ty a nahráš ho do projektu, presne ako svoju fotku.

1. Otvor v prehliadači **unsplash.com**.
2. Vyber si obrázok, ktorý sa hodí k tvojej stránke.
3. Klikni na tlačidlo **Download** (stiahnuť).
4. Stiahnutý súbor **pretiahni** do priečinka `img` v zozname súborov vľavo a premenuj ho na `hero.jpg`.

Keď je obrázok v projekte (vidíš `img/hero.jpg`), napíš prompt:

```
Použi obrázok img/hero.jpg ako pozadie hero sekcie a pridaj tmavý priesvitný prekryv, nech zostane text čitateľný.
```

**Kontrola:** obnov náhľad, pozri hero — je tam tvoj obrázok ako pozadie? A hlavne: **dá sa text čítať**? Ak je text na svetlej fotke nečitateľný, napíš AI *„Sprav prekryv tmavší, text je slabo čitateľný."*

!!! note "Prečo prekryv"
    Prekryv je tmavá priesvitná vrstva medzi fotkou a textom. Bez neho by sa svetlý text na svetlej fotke stratil. S ním je text vždy čitateľný.

---

## 📱 Krok 5 — responzivita (kontrola na mobile)

„Responzívna" stránka je taká, ktorá vyzerá dobre aj na mobile, aj na tablete, aj na počítači. Väčšina ľudí navštívi tvoju stránku z telefónu, takže toto je dôležité.

Skontrolovať to vieš priamo v prehliadači cez **DevTools** (vývojárske nástroje):

1. Stlač **F12** (otvoria sa DevTools).
2. Klikni na **ikonu mobilu/tabletu** (obvykle vľavo hore v DevTools — dva obdĺžniky ako telefón a tablet).
3. Hore sa objaví lišta, kde vieš meniť **šírku** obrazovky. Vyskúšaj šírku telefónu (napr. 375) aj tabletu (napr. 768).

**Čo sleduj:**

- Nevylieza text mimo obrazovky? Nemusíš scrollovať do strán?
- Nedá sa niečo cez seba — menu cez logo, obrázok cez text?
- Sú tlačidlá a odkazy dosť veľké na to, aby sa dali klepnúť prstom?

Ak niečo nesedí, **popíš AI konkrétne, čo a kde** — nie „je to rozbité", ale presne čo vidíš:

```
Na úzkej mobilnej šírke sa mi menu prekrýva s logom. Oprav to.
```

(Namiesto „menu prekrýva logo" napíš, čo naozaj vidíš u seba — napr. „karty projektov sú príliš úzke", „text vylieza mimo obrazovky", „obrázok je príliš veľký".)

**Kontrola:** po oprave nechaj DevTools v mobilnom režime, obnov náhľad a znova preklikaj šírky — je problém preč?

!!! danger "Nepreskoč mobil"
    Aj keď na veľkom monitore vyzerá stránka super, na mobile môže byť rozbitá. **Vygenerované ešte neznamená hotové** — a „hotové" znamená, že to funguje aj na telefóne, nielen na tvojej obrazovke.

---

## 💾 Krok 6 — ulož si prácu (commit)

Keď je stránka hotová a vyzerá dobre na počítači aj na mobile, ulož ju do Gitu. Commit je „bod, ku ktorému sa vieš vrátiť" — poistka, keby si neskôr niečo pokazil.

Postup nájdeš na stránke [Git — ukladanie práce](../znalostna-baza/git-zachranna-brzda.md). Ako popis commitu daj niečo zrozumné, napr. *„Portfólio — hotová prvá verzia stránky"*.

---

## ✅ Zhrnutie

Čo teraz vieš a máš hotové:

- Máš **vlastnú jednostránkovú osobnú stránku (portfólio)** vytvorenú jedným hlavným promptom podľa svojho style guidu.
- Vieš stránku vylepšovať **malými krokmi** — favicon, vlastná fotka, SVG ilustrácia, ikony — a po **každom** kroku si výsledok skontrolovať v živom náhľade.
- Vieš správne pridať obrázok z Unsplash (stiahnuť a nahrať, nie pýtať odkaz od AI).
- Vieš skontrolovať **responzivitu** cez F12 → ikona mobilu a popísať AI konkrétny problém.
- Vieš si prácu priebežne **ukladať do Gitu**.

A hlavne máš v hlave pravidlo, ktoré ťa bude sprevádzať celým predmetom: **Vygenerované ešte neznamená hotové — po každom kroku sa pozri, preklikaj a over, že to funguje.**

➡️ Pokračuj na **[Blok 8](blok-8-git-a-oprava.md)**.
