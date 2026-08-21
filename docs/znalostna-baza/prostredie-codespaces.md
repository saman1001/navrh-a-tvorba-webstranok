# 💻 Prostredie (Codespaces)

Toto je tvoj úplne prvý technický krok. Nič sa neboj — nebudeš nič inštalovať a všetko sa deje v prehliadači. Prejdi si túto stránku pomaly, krok za krokom, a keď niečo nefunguje, vráť sa sem.

## 🌐 Čo je GitHub Codespaces

**GitHub Codespaces je tvoj počítač na tvorbu webu, ktorý beží priamo v prehliadači — nič neinštaluješ, len klikáš.**

Predstav si to takto: normálne by si musel na počítač inštalovať kopu programov, aby si mohol tvoriť web. V Codespaces je všetko už pripravené a beží to kdesi na internete. Ty len otvoríš stránku a máš pred sebou hotové pracovné prostredie, ktoré vyzerá ako program VS Code (to je obľúbený editor kódu) — akurát otvorený vo webe.

!!! note "Potrebuješ internet"
    Celé prostredie beží online, takže funguje len vtedy, keď si pripojený na internet. Bez internetu sa Codespaces neotvorí.

## ✅ Čo potrebuješ na začiatok

Potrebuješ len jednu vec: **bezplatný GitHub účet.** GitHub je stránka, kde sa ukladajú a spravujú webové projekty (a kde beží aj Codespaces).

Ak ešte účet nemáš, založ si ho:

1. Otvor [github.com](https://github.com).
2. Klikni na **Sign up** (Zaregistrovať sa).
3. Zadaj svoj e-mail, vymysli heslo a používateľské meno.
4. Potvrď e-mail podľa pokynov (GitHub ti pošle overovací kód).

Hotovo — máš účet a môžeš pokračovať.

!!! tip "Ako študent máš Copilot zadarmo"
    GitHub Copilot je AI asistent, ktorý ti bude pomáhať tvoriť web (píšeš mu do bočného panela, čo chceš). Ako študent máš cez **GitHub Student Developer Pack** Copilot zadarmo — stačí sa prihlásiť školským e-mailom na [education.github.com](https://education.github.com). Na úplný začiatok ti však bohato stačí aj bezplatná verzia Copilota, ktorá je dostupná pre každý účet. Nemusíš teda nič riešiť hneď teraz.

## 🚀 Ako spustiť pracovné prostredie zo šablóny predmetu

Vyučujúci pre teba pripravil **šablónu** — hotový základ projektu, z ktorého si vyrobíš vlastnú kópiu. Postupuj presne takto:

1. Otvor šablónový repozitár predmetu: **[github.com/saman1001/eoam-vibe-web-template](https://github.com/saman1001/eoam-vibe-web-template)**  
   (Repozitár je priečinok s projektom na GitHube.)
2. Vpravo hore klikni na zelené tlačidlo **Use this template** (Použiť túto šablónu).
3. Z ponuky vyber **Create a new repository** (Vytvoriť nový repozitár).
4. Zadaj názov svojho nového repozitára (napr. `moj-web`) a klikni na tlačidlo, ktoré vytvorí repozitár.
5. Teraz si už vo svojom **novom** repozitári. Klikni na zelené tlačidlo **Code**.
6. Prepni sa na záložku **Codespaces**.
7. Klikni na **Create codespace on main** (Vytvoriť codespace na vetve main).

Počkaj približne **30 sekúnd**. Otvorí sa ti VS Code priamo v prehliadači — a to je tvoje pracovné prostredie. 🎉

!!! warning "Codespaces má mesačný bezplatný limit hodín"
    Codespaces je zadarmo do určitého počtu hodín mesačne. Na celý semester ti to bohato stačí, ale je dobrý zvyk: **codespace, ktorý práve nepoužívaš, radšej zavri** — buď cez tlačidlo, alebo jednoducho zatvorením záložky v prehliadači. Tým sa codespace „uspí" a neujedá ti hodiny zbytočne. Nabudúce ho znova zobudíš (ako, ukazujeme nižšie).

## 🧭 Orientácia v prostredí

Keď sa VS Code otvorí, môže sa zdať, že je tam veľa vecí. V skutočnosti ti stačia len tri:

- **Vľavo — zoznam súborov (Explorer):** tu vidíš všetky súbory svojho projektu. Kliknutím na súbor ho otvoríš.
- **V strede — editor:** tu sa zobrazuje obsah otvoreného súboru. Sem sa píše kód (ale neboj sa — väčšinu za teba spíše AI).
- **Vpravo alebo dole — panel Copilot Chat:** spoznáš ho podľa ikony Copilota. **Sem píšeš svoje požiadavky AI** — jednoducho slovami napíšeš, čo chceš, a Copilot to vytvorí.

!!! tip "Kde nájdeš Copilot Chat"
    Ak panel Copilot Chat nevidíš, hľadaj ikonu Copilota v pravom hornom rohu alebo v ľavom bočnom paneli s ikonami. Kliknutím naň sa panel otvorí. Do tohto panela budeš písať všetky prompty (požiadavky pre AI) počas celého predmetu.

## 👀 Ako si pozrieť web, ktorý tvoríš

Aby si videl svoj web ako skutočnú stránku (nie ako kód), potrebuješ **živý náhľad**:

1. V zozname súborov vľavo nájdi súbor **`index.html`** (to je hlavná stránka tvojho webu).
2. Klikni naň **pravým tlačidlom** myši.
3. Z ponuky vyber **Open with Live Preview** (Otvoriť so živým náhľadom) — prípadne klikni na tlačidlo náhľadu.

Otvorí sa ti živý náhľad tvojej stránky. Jeho výhoda: **obnovuje sa sám**. Keď niečo zmeníš, náhľad sa hneď aktualizuje a ty okamžite vidíš výsledok.

!!! example "Vyskúšaj si to hneď"
    Otvor `index.html` v živom náhľade a nechaj si ho otvorený vedľa editora. Toto okno budeš mať otvorené prakticky stále — po každej zmene sa naň pozrieš a skontroluješ, či web vyzerá tak, ako má.

## 🔍 Vygenerované ešte neznamená hotové

Toto je najdôležitejšie pravidlo celého predmetu: **keď ti AI niečo vyrobí, ešte to neznamená, že je to hotové a správne.** Vždy si výsledok musíš skontrolovať vlastnými očami. A keďže nemusíš vedieť čítať kód, kontrola je jednoduchá a vizuálna:

- **Pozri sa na živý náhľad** — vyzerá stránka tak, ako si chcel? Je tam všetko?
- **Preklikaj to** — fungujú odkazy, tlačidlá, menu? Skús na ne klikať.
- **Skús mobilnú verziu** — stlač **F12** (otvorí sa panel nástrojov), potom klikni na **ikonu mobilu/tabletu**. Uvidíš, ako web vyzerá na telefóne. Nič sa nerozbilo, nič nevytŕča?
- **Pozri sa na chyby** — v paneli **F12** klikni na záložku **Console** (Konzola). Ak sú tam **červené riadky**, niečo nie je v poriadku — skopíruj tú červenú chybu a napíš do Copilot Chat: „Toto mi ukazuje konzola, oprav to."

Ak niečo nesedí, jednoducho to Copilotovi napíš a poprosíš ho o opravu. Toto opakuj po každom kroku — je to úplne normálna súčasť práce.

Podrobný postup kontroly nájdeš na stránke [Kontrola webu](../znalostna-baza/kontrola-webu.md).

## 💾 Ako uložiť prácu, aby nezmizla

V Codespaces sa tvoje zmeny priebežne ukladajú, ale to nestačí — chceš si uložiť aj **verziu** svojej práce na GitHub, aby ti nič nezmizlo a mal si sa kam vrátiť. Tomu sa hovorí **commit** (uloženie verzie). Postupuj takto:

1. V ľavom paneli s ikonami klikni na **Source Control** — spoznáš ho podľa **ikony vetvenia** (vyzerá ako rozdvojená cestička).
2. Uvidíš zoznam súborov, ktoré si zmenil.
3. Do políčka hore napíš **krátky popis**, čo si urobil (napr. „pridal som úvodnú stránku").
4. Klikni na **Commit** (Uložiť verziu).
5. Potom klikni na **Sync** alebo **Push** (Odoslať) — tým sa tvoja verzia odošle na GitHub do bezpečia.

!!! tip "Commituj radšej častejšie"
    Nečakaj s uložením verzie do konca hodiny. Kedykoľvek máš niečo hotové a funguje to, pokojne commitni. Čím častejšie, tým lepšie — vždy sa vieš vrátiť k poslednej fungujúcej verzii.

Ak sa niečo pokazí alebo sa chceš vrátiť späť, pozri si stránku [Git — záchranná brzda](../znalostna-baza/git-zachranna-brzda.md).

## 🔁 Ako sa vrátiť nabudúce

Keď zavrieš codespace a nabudúce chceš pokračovať tam, kde si skončil:

1. Otvor [github.com](https://github.com) a prihlás sa.
2. Otvor **svoj repozitár** (nájdeš ho vo svojom profile v zozname repozitárov).
3. Klikni na zelené tlačidlo **Code**.
4. Prepni sa na záložku **Codespaces**.
5. Klikni na svoj **existujúci codespace** v zozname.

Codespace sa „zobudí" a otvorí sa presne tam, kde si prestal — aj s tvojimi súbormi. Nemusíš teda znova vytvárať nový.

!!! warning "Nevytváraj zakaždým nový codespace"
    Ak si už codespace raz vytvoril, nabudúce klikaj na **ten existujúci** v zozname, nie na „Create codespace". Inak by si si vyrobil ďalší nový a zbytočne míňal hodiny z bezplatného limitu.

## 💻 Alternatíva: pracovať v predinštalovanom VS Code (bez prehliadača)

Nemusíš pracovať v prehliadači. Ak ti viac vyhovuje **VS Code priamo na počítači** — ten istý program, v ktorom ste písali HTML a CSS — môžeš robiť aj v ňom. Celý zvyšok predmetu funguje rovnako, pretože **AI asistent Copilot je ten istý** v prehliadači aj v počítačovom VS Code.

Jediné, čo musíš spraviť navyše, je **prihlásiť sa svojím GitHub účtom** — kvôli Copilotovi:

1. Otvor **VS Code** na počítači.
2. Vľavo dole klikni na ikonu **účtu** (Accounts) → **Sign in** → prihlás sa cez **GitHub** (ten istý účet ako na webe). To je ten jediný krok navyše.
3. Skontroluj, že máš rozšírenia **GitHub Copilot**, **GitHub Copilot Chat** a **Live Preview**. Ak nie, nainštaluj ich cez ikonu **Extensions** (vľavo). *(V učebni ich možno máš predinštalované.)*
4. Otvor projekt predmetu: buď si stiahni šablónu ([github.com/saman1001/eoam-vibe-web-template](https://github.com/saman1001/eoam-vibe-web-template) → **Code → Download ZIP**, rozbaľ a **File → Open Folder**), alebo vo VS Code použi **Clone Repository** s adresou šablóny.
5. Náhľad webu: pravý klik na `index.html` → **Show Preview**, alebo jednoducho otvor súbor `index.html` dvojklikom vo svojom prehliadači.

!!! tip "Prompty sú rovnaké"
    Do panela **Copilot Chat** píšeš úplne rovnako ako v prehliadači. Všetky prompty a postupy z ďalších blokov platia bez akejkoľvek zmeny.

!!! warning "Na zdieľanom počítači sa odhlás"
    Ak pracuješ na školskom počítači, ktorý používajú aj iní, po skončení sa z GitHubu vo VS Code **odhlás** (ikona účtu → Sign out) — inak by tvoj účet mohol použiť niekto ďalší.

## 📝 Zhrnutie

Teraz už vieš:

- čo je GitHub Codespaces (tvoj počítač na tvorbu webu v prehliadači) a že potrebuješ len bezplatný GitHub účet,
- ako si vytvoriť projekt zo šablóny predmetu a spustiť pracovné prostredie,
- kde je zoznam súborov, editor a panel Copilot Chat, do ktorého píšeš AI,
- ako si pozrieť živý náhľad svojho webu a ako po každom kroku skontrolovať výsledok (náhľad, preklikanie, mobil cez F12, červené chyby v Console),
- ako uložiť verziu práce cez Source Control (commit + push),
- ako sa nabudúce vrátiť k svojmu codespace.

Máš pripravené prostredie a vieš sa v ňom pohybovať. Ďalej sa pozrieme na to, ako presne vyzerá tvoje pracovné prostredie a nástroje v ňom — pokračuj stránkou [Kontrola webu](../znalostna-baza/kontrola-webu.md).
