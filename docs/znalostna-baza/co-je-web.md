# Čo je web

Skôr než začneš tvoriť svoju prvú webstránku, oplatí sa mať v hlave jednoduchú mentálnu mapu — čo to vlastne web je a z čoho sa skladá. Žiadny kód, žiadne písanie, len pár obrázkov v hlave. Keď tomuto porozumieš, budeš vedieť AI oveľa presnejšie povedať, čo chceš.

## 📄 Web stránka je len súbor

Predstav si webstránku ako dokument. Presne tak, ako máš vo Worde súbor `diplomovka.docx`, web má súbor `index.html`. Rozdiel je len v tom, že tento súbor neotvára Word, ale **prehliadač** (Chrome, Edge, Firefox) — a ten ho zobrazí ako peknú stránku s nadpismi, obrázkami a tlačidlami.

Väčšina webov je len **súbor alebo pár súborov** uložených na počítači. Prehliadač ich prečíta a nakreslí to, čo vidíš. To je celé kúzlo. Nič viac za tým na začiatku nehľadaj.

!!! note "Prečo je to dobrá správa"
    Keď je web „len súbor", znamená to, že sa nedá nič nenávratne pokaziť. Keď sa niečo zobrazí zle, súbor sa jednoducho zmení späť a hotovo. Budeš experimentovať bez strachu.

## 🏠 Tri vrstvy webu — ako dom

Každá webstránka sa skladá z troch vrstiev. Najlepšie si ich zapamätáš cez prirovnanie k domu, ktorý si staviaš.

### 1. HTML — kostra a obsah domu

HTML je **hrubá stavba**: steny, miestnosti, nábytok. Je to všetko, čo na stránke *je* — nadpisy, texty, obrázky, tlačidlá, odkazy. Keď povieš „chcem sem pridať nadpis a pod neho fotku a tlačidlo", hovoríš o HTML.

> HTML je skratka pre *HyperText Markup Language* — jazyk, ktorým sa opisuje obsah stránky. Ty ho písať nemusíš, píše ho AI.

### 2. CSS — omietka a zariadenie

CSS je **vzhľad**: omietka, farba stien, koberce, zariadenie. Nemení, *čo* v dome je, ale *ako to vyzerá* — farby, fonty (druh písma), veľkosti, rozloženie, medzery, či je tlačidlo okrúhle alebo hranaté. Keď povieš „zmeň farbu tlačidla na zelenú" alebo „daj väčšie písmo", hovoríš o CSS.

> CSS je skratka pre *Cascading Style Sheets* — jazyk, ktorým sa opisuje vzhľad stránky.

### 3. JavaScript — elektrina a spotrebiče

JavaScript je **správanie**: elektrina, vypínače, spotrebiče. Je to to, *čo sa stane*, keď niečo urobíš — čo sa deje po kliknutí, po zadaní textu, po posunutí stránky. Keď povieš „po kliknutí na tlačidlo nech sa zobrazí správa" alebo „keď používateľ vyplní formulár, nech sa poďakuje", hovoríš o JavaScripte.

> JavaScript (skrátene JS) je jazyk, ktorý dáva stránke interaktivitu — teda reakcie na to, čo návštevník robí.

!!! important "Toto je najdôležitejšia veta celej stránky"
    **Tieto tri jazyky nemusíš vedieť písať — AI ich píše za teba.** Ty potrebuješ vedieť len jednu vec: **ktorá vrstva za čo zodpovedá.** Vďaka tomu vieš AI presne povedať, čo chceš zmeniť, a AI ťa pochopí na prvýkrát.

## 📊 Rýchla tabuľka na zapamätanie

| Vrstva | Za čo zodpovedá | Príklad zadania pre AI |
|--------|-----------------|------------------------|
| **HTML** | Obsah — čo na stránke je (nadpisy, texty, obrázky, tlačidlá) | „Pridaj na stránku nadpis *Vitajte* a pod neho tlačidlo *Kúpiť*." |
| **CSS** | Vzhľad — ako to vyzerá (farby, fonty, rozloženie) | „Zmeň farbu tlačidla na tmavozelenú a zaobli mu rohy." |
| **JavaScript** | Správanie — čo sa stane po akcii | „Po kliknutí na tlačidlo *Kúpiť* nech sa zobrazí správa *Ďakujeme za objednávku*." |

!!! tip "Vedieť vrstvu = lepší výsledok od AI"
    Keď chceš niečo na webe zmeniť, pomôže vedieť, do ktorej vrstvy to patrí — AI potom oveľa lepšie pochopí, čo od nej chceš. „Zmeň farbu" je jasne CSS, „po kliknutí nech sa stane…" je jasne JavaScript. Konkrétny slovník prvkov, ktoré na stránke nájdeš (nadpis, tlačidlo, obrázok, formulár…), máš v [Prvky webstránky](../znalostna-baza/prvky-webstranky.md).

## 🖥️ Frontend a backend — dve strany webu

Ešte jeden pojem, ktorý budeš počúvať často. Web má dve strany.

- **Frontend** je všetko, čo **vidíš v prehliadači** — presne tie tri vrstvy vyššie (HTML, CSS, JavaScript). To je časť, ktorú na tomto predmete tvoríme.
- **Backend** je **server v pozadí**, ktorý nevidíš — databázy (kde sa ukladajú údaje), prihlasovanie používateľov, spracovanie platieb. Beží na vzdialenom počítači, ďaleko od prehliadača.

!!! note "Na tomto predmete zostávame pri frontende"
    Robíme weby, ktoré sú „len súbory" a bežia priamo v prehliadači. To úplne stačí na krásnu, funkčnú a interaktívnu stránku. Backend (databázy, reálne prihlasovanie) je téma na neskôr a na tomto predmete ho nepotrebuješ.

## Zhrnutie

Teraz vieš mentálnu mapu webu:

- Webstránka je **súbor**, ktorý prehliadač zobrazí — nič sa nedá nenávratne pokaziť.
- Web má **tri vrstvy**: HTML (obsah = kostra domu), CSS (vzhľad = omietka a zariadenie), JavaScript (správanie = elektrina a spotrebiče).
- **Nemusíš tieto jazyky vedieť písať** — píše ich AI. Ty len potrebuješ vedieť, ktorá vrstva za čo zodpovedá, aby si vedel AI presne zadať zmenu.
- Web má **frontend** (to, čo vidíš) a **backend** (server v pozadí) — my sme celý semester na frontende.

V ďalšom bloku sa pozrieme na konkrétne prvky, z ktorých sa stránka skladá — nadpisy, tlačidlá, obrázky, formuláre — a naučíš sa ich pomenovať: [Prvky webstránky](../znalostna-baza/prvky-webstranky.md).
