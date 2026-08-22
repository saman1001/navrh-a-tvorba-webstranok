# ✅ Kontrola webu — čo preveriť, kým AI uveríš

Toto je jedna z najdôležitejších stránok celého predmetu. Prečo? Lebo AI ti kľudne povie „Hotovo, tvoj web je pripravený!" — a pritom tam môže byť rozbitý obrázok, tlačidlo, ktoré nikam nevedie, alebo text, ktorý sa na mobile pretečie mimo obrazovku.

!!! danger "Zapamätaj si jedno pravidlo"
    **Vygenerované ešte neznamená hotové.** AI je šikovný pomocník, ale nie je neomylný. Vždy si po ňom výsledok skontroluj — vlastnými očami a vlastným klikaním. Nemusíš na to vedieť čítať kód. Stačí sa pozerať a klikať.

Táto stránka je **checklist** — postupnosť krokov, ktorou si za pár minút overíš, či web naozaj funguje. Prejdi ich vždy, keď ti AI niečo vytvorí alebo zmení.

---

## 👀 Krok 1 — Otvor si živý náhľad webu

Aby si videl, ako web naozaj vyzerá, potrebuješ **živý náhľad** (Live Preview). To je okno, kde sa ti web zobrazí presne tak, ako ho uvidí návštevník.

1. V Codespaces (to je VS Code otvorený v prehliadači) nájdi svoj hlavný súbor webu — zvyčajne `index.html`.
2. Klikni naň pravým tlačidlom myši a vyber **„Show Preview"** alebo **„Open with Live Preview"**.
3. Otvorí sa okno s náhľadom tvojho webu priamo vedľa kódu.

!!! tip "Ako presne otvoriť náhľad u teba"
    Ak si nie si istý, kde je tlačidlo náhľadu, pozri si stránku [Prostredie Codespaces](../znalostna-baza/prostredie-codespaces.md) — je tam ukázané krok za krokom.

!!! note "Prečo živý náhľad?"
    „Živý" znamená, že keď AI niečo zmení a ty súbor uložíš, náhľad sa sám obnoví. Takže máš vždy pred sebou aktuálnu verziu.

---

## 🎨 Krok 2 — Vizuálna kontrola (pozri sa na to očami)

Teraz prejdi celú stránku **len očami**, zhora nadol. Nič neklikáš, len sa pozeráš. Pýtaj sa sám seba:

**Je to čitateľné?**

- Je písmo dosť veľké, aby sa dalo pohodlne prečítať? Nemusíš žmúriť?
- Je dosť **kontrastu** — teda vidno tmavý text na svetlom pozadí (alebo naopak)? Svetlosivý text na bielom pozadí je zlý nápad.

**Sedí to dokopy?**

- Sú **farby** konzistentné — teda drží sa web jednej farebnej línie, alebo je to farebný guláš?
- Je **font** (typ písma) všade rovnaký, alebo raz vyzerá text takto a raz úplne inak?
- Majú nadpisy, odseky a tlačidlá pravidelné rozostupy, alebo je niečo nalepené na okraj?

**Zobrazuje sa všetko?**

- Vidíš **všetky obrázky**? Alebo je niekde len **rozbitá ikona** (malý štvorček s prasknutým obrázkom)? To znamená, že sa obrázok nenačítal.
- Nechýba niekde text — nie je tam prázdne miesto, kde malo niečo byť?

!!! warning "Rozbitá ikona obrázka = problém"
    Ak vidíš namiesto obrázka malý biely štvorček s prasknutou ikonkou, obrázok sa nenačítal. Najčastejšia príčina: AI použil zlú cestu k súboru alebo obrázok vôbec neexistuje. Poznač si, ktorý obrázok to je — v kroku „Ako to popísať AI" ti ukážeme, ako to nahlásiť.

---

## 🖱️ Krok 3 — Funkčná kontrola (klikaj úplne na všetko)

Teraz začni **klikať**. Cieľ je jednoduchý: preklikaj **KAŽDÝ** odkaz v menu a **KAŽDÉ** tlačidlo na stránke. Nič nevynechaj.

Pri každom kliknutí sa pýtaj: **Stalo sa to, čo sa malo stať?**

- Odkaz v menu ťa má presunúť na správnu sekciu alebo stránku — spravil to?
- Tlačidlo „Odoslať", „Kúpiť", „Zisti viac" — urobilo, čo sľubuje?
- Nevedie žiadny odkaz **„nikam"** — teda na prázdnu stránku alebo na hlášku **404** (to znamená „stránka sa nenašla")?

!!! example "Ako na to prakticky"
    Prejdi menu zľava doprava a klikni na každú položku. Potom prejdi stránku zhora nadol a klikni na každé tlačidlo a každý odkaz v texte. Ak niečo nič neurobí alebo hodí chybu, poznač si to.

!!! note "Čo je 404?"
    Keď odkaz vedie na stránku, ktorá neexistuje, prehliadač ukáže chybu **404 — Not Found** („nenájdené"). Znamená to, že odkaz je pokazený alebo smeruje na nesprávne miesto.

---

## 📱 Krok 4 — Mobil (skontroluj úzku obrazovku)

Väčšina ľudí si dnes weby otvára na telefóne. Preto **musíš** overiť, či tvoj web funguje aj na úzkej obrazovke. Netreba na to skutočný telefón — prehliadač to vie odsimulovať.

1. Stlač klávesu **F12**. Otvoria sa **vývojárske nástroje** (panel pre technikov — neboj sa ho, len sa v ňom pozeráme).
2. V hornej časti tohto panela nájdi **ikonu mobilu/tabletu** (prepínač zariadení — vyzerá ako malý telefón vedľa väčšej obrazovky). Klikni na ňu.
3. Stránka sa zúži na šírku telefónu. Hore si môžeš vybrať konkrétny model (napr. iPhone).

Teraz sa pozeraj, či na úzkej obrazovke všetko sedí:

- **Neprekrýva sa menu** — dá sa otvoriť a položky sa nelepia jedna na druhú?
- **Nepreteká text mimo obrazovku** — nemusíš stránku posúvať doprava, aby si dočítal riadok?
- **Dá sa všetko prečítať** — nie je písmo zrazu maličké?
- **Nevytŕčajú obrázky** za okraj?

!!! tip "Vypnutie režimu mobilu"
    Keď skončíš, klikni ikonu mobilu ešte raz (vypne sa) a F12 zavri opäť klávesou **F12**. Vrátiš sa do normálneho zobrazenia.

---

## 🔧 Krok 5 — Chyby pod kapotou (Console a Network)

Niektoré chyby nie sú vidno na prvý pohľad — web vyzerá v poriadku, ale niečo v pozadí nefunguje. Prehliadač si tieto chyby zapisuje a ty sa k nim vieš dostať. **Nemusíš rozumieť, čo tam presne píše** — stačí, že vieš rozpoznať, že tam **červená chyba je**, a skopírovať ju pre AI.

### Záložka Console (konzola)

1. Stlač **F12**.
2. Klikni na záložku **„Console"** (konzola).
3. Pozri sa, či sú tam **červené riadky**. Červená = chyba.
4. Poklikaj po stránke (tlačidlá, odkazy) a sleduj, či **pribúdajú** nové červené riadky pri klikaní.

Ak je tam červená, **nič nemaž a nič neopravuj sám** — celý červený riadok označ myšou, skopíruj (Ctrl+C) a odlož si ho. Pošleš ho AI.

### Záložka Network (sieť)

1. V tom istom paneli (F12) klikni na záložku **„Network"** (sieť).
2. Obnov stránku klávesou **F5**.
3. Pozri sa do zoznamu, či niečo **svieti načerveno**. Červený riadok tu znamená, že sa nejaký súbor (obrázok, štýl…) **nenačítal**.

!!! note "Načo je Network?"
    Zoznam v Network ukazuje všetky súbory, ktoré si web sťahuje. Ak je niektorý červený, obvykle to súvisí s rozbitým obrázkom alebo chýbajúcim súborom, ktorý si videl už v kroku 2.

!!! tip "Funguje? Ešte jedna otázka — funguje pre všetkých?"
    Tento checklist overil, že web **funguje**. Či funguje aj ľuďom so slabším zrakom alebo bez myši, overíš samostatným rýchlym checklistom: [Prístupnosť webu — 5-minútová kontrola](pristupnost-webu.md). Prejdi si ho minimálne raz pred odovzdaním webu.

---

## 🗣️ Keď nájdeš problém — ako ho popísať AI

Keď niečo nefunguje, **nestačí AI napísať len „oprav to"**. AI nevidí tvoju obrazovku a nevie, čo máš na mysli. Čím presnejšie problém popíšeš, tým rýchlejšie a lepšie ho AI opraví.

Dobrý popis problému má **tri veci**:

1. **ČO** nefunguje — napr. „obrázok sa nezobrazuje", „tlačidlo nič nerobí".
2. **KDE** to je — ktorá sekcia, ktoré tlačidlo, ktorý odkaz. Buď konkrétny: „tlačidlo Odoslať v kontaktnom formulári".
3. **AKO sa to prejavuje** — čo sa deje (alebo nedeje). A ak si v záložke Console našiel **červenú chybu, skopíruj ju CELÚ** a vlož do promptu.

!!! example "Vzorový prompt do Copilot Chat"
    ```
    Na stránke sa po kliknutí na tlačidlo „Odoslať" v kontaktnom
    formulári v konzole (F12 → Console) objaví táto červená chyba:

    [sem vlož celú skopírovanú chybu]

    Oprav to a povedz mi jednou vetou po slovensky, čo bolo zle.
    ```

!!! tip "Prečo žiadať vysvetlenie jednou vetou"
    Keď AI napíšeš „povedz mi jednou vetou, čo bolo zle", postupne sa naučíš rozpoznávať typické chyby — a nabudúce ich odhalíš rýchlejšie. Neučíš sa kód, učíš sa súvislosti.

!!! warning "Po oprave skontroluj znova"
    Keď AI problém opraví, **neverí mu na slovo** — prejdi tento checklist ešte raz od kroku 1. Oprava jednej veci občas pokazí inú. Preto kontroluj vždy nanovo.

---

## 🔑 Malá poznámka o bezpečnosti

Ak sa v tvojom webe pracuje s nejakým **API kľúčom** (to je tajný prístupový kód k nejakej službe), platí: na tomto predmete používame len **bezcenné cvičné kľúče**. Skutočný tajný kľúč (najmä platobný) nikdy nedávaj do verejného repozitára a nikdy ho nezadávaj na zdieľanom školskom počítači. Viac v [Bezpečnosť kľúčov](../znalostna-baza/bezpecnost-klucov.md).

---

!!! tip "Túto stránku maj vždy poruke"
    Otvor si tento checklist **po každom kroku**, kde ti AI niečo vytvorí alebo zmení. Stane sa z toho zvyk, ktorý ťa ochráni pred rozbitým webom. A ešte raz to najdôležitejšie: **Vygenerované ešte neznamená hotové.**

---

## Zhrnutie

Teraz vieš, ako si za pár minút overíš, či web od AI naozaj funguje — bez čítania kódu:

- ✅ otvoríš si **živý náhľad**,
- ✅ prejdeš web **očami** (čitateľnosť, konzistentný dizajn, všetky obrázky),
- ✅ **preklikáš** každý odkaz a tlačidlo,
- ✅ vyskúšaš **mobil** (F12 → ikona mobilu),
- ✅ pozrieš **Console a Network** (F12) na červené chyby,
- ✅ a keď nájdeš problém, popíšeš ho AI **konkrétne** (čo, kde, ako) aj so skopírovanou chybou.

**Ďalej:** vráť sa k svojmu rozpracovanému webu a použi tento checklist na to, čo ti AI naposledy vytvoril.
