# 🚀 Nasadenie (GitHub Pages)

Doteraz tvoj web bežal len u teba — v **náhľade** (preview) vo tvojom prostredí. Vidíš ho iba ty, na svojom počítači. Keď zavrieš prehliadač, nikto iný sa naň nedostane.

**Nasadenie** (po anglicky *deployment*) znamená dať web na **verejnú adresu** na internete — takú, ktorú vieš poslať komukoľvek. Kamarátovi, rodičom, vyučujúcemu. Otvoria si odkaz a uvidia tvoj web presne tak, ako vyzerá.

A najlepšie na tom: nepotrebuješ nič inštalovať, žiadny FTP program, žiadne servery. Všetko spravíš priamo z prostredia, v ktorom už pracuješ. Poďme na to.

---

## 🎯 Čo dosiahneme

- Tvoj web dostane vlastnú **verejnú adresu** (napr. `https://tvojemeno.github.io/moj-web`).
- Odkaz pošleš komukoľvek — a uvidí presne to, čo ty.
- Keď web zmeníš, stačí zmenu uložiť a web sa **sám aktualizuje**.

!!! note "Prečo to ide tak ľahko?"
    Tvoj projekt už je **repozitár na GitHube** — to je taký online priečinok, kam sa tvoje súbory automaticky ukladajú z prostredia. A GitHub vie tento priečinok zadarmo premeniť na živý web. Túto službu volá **GitHub Pages**.

---

## 🔒 Najskôr dôležité upozornenie

!!! warning "Verejné = verejné"
    GitHub Pages zadarmo funguje len z **VEREJNÉHO** repozitára. To znamená, že ktokoľvek na internete si môže pozrieť nielen tvoj web, ale aj všetky súbory v ňom.

    Preto na ňom **NESMIE byť žiadny tajný kľúč ani heslo.** Ak si počas semestra niekde pridával API kľúč, over si, že nie je uložený priamo v súboroch webu. Ako na to, pozri [Bezpečnosť kľúčov](../znalostna-baza/bezpecnost-klucov.md).

    Zlaté pravidlo: **čo dáš na GitHub Pages, to vidí celý svet.**

---

## 🛠️ Postup krok za krokom (GitHub Pages)

Rob presne podľa krokov. Nič sa nedá pokaziť — kľudne to skús.

**1. Otvor svoj repozitár na github.com**

Choď na [github.com](https://github.com), prihlás sa a otvor repozitár so svojím projektom (v zozname *Your repositories*). Je to ten istý projekt, na ktorom si pracoval v prostredí.

**2. Klikni hore na záložku „Settings"**

Je to ozubené koliesko / nápis **Settings** v hornom menu repozitára (celkom vpravo).

**3. V ľavom menu nájdi a klikni „Pages"**

V ľavom stĺpci je dlhý zoznam možností. Zroluj nižšie a klikni na **Pages**.

**4. Nastav zdroj (Source)**

V časti **Build and deployment** pri položke **Source** zvoľ z rozbaľovacieho menu **Deploy from a branch**.

**5. Zvoľ vetvu a priečinok**

Objavia sa dve malé menu:

- pri **Branch** vyber **main**,
- pri priečinku nechaj **/ (root)**.

**6. Klikni „Save"**

Ulož tlačidlom **Save**.

**7. Počkaj 1–2 minúty**

GitHub potrebuje chvíľu, kým web pripraví. Po chvíli osviež stránku (F5) — hore na tej istej Pages stránke sa objaví zelený rámik s adresou v tvare:

```
https://tvojemeno.github.io/nazov-projektu
```

**To je tvoj web online!** 🎉

!!! tip "Nevidíš adresu hneď?"
    Prvé nasadenie niekedy trvá aj 2–3 minúty. Daj si kávu, osviež stránku (F5) a adresa sa objaví. Ak sa neobjaví ani po 5 minútach, skontroluj, či si v kroku 5 naozaj zvolil vetvu **main**.

---

## ✅ Over si to (na živej verzii)

**Vygenerované ešte neznamená hotové** — a nasadené tiež nie. To, že sa objavila adresa, ešte neznamená, že web vyzerá dobre. Musíš sa naň pozrieť.

Skopíruj adresu a otvor ju v prehliadači. A teraz to najdôležitejšie: **prejdi si [kontrolu webu](../znalostna-baza/kontrola-webu.md) ešte raz — na tejto živej verzii.**

Konkrétne over:

- **Načíta sa web?** Vidíš svoju úvodnú stránku, nie chybu „404"?
- **Preklikaj všetky odkazy v menu.** Vedú tam, kam majú? Nič nekončí na prázdnej stránke?
- **Obrázky.** Zobrazujú sa všetky? Alebo niekde svieti prázdny rámček?
- **Mobil.** Otvor adresu **priamo v telefóne** (pošli si ju napr. cez správu) — a rovno aj v prehliadači cez F12 → ikona mobilu. Vyzerá web dobre na malej obrazovke?
- **Konzola.** Stlač **F12 → záložka Console**. Sú tam **červené chyby**? Ak áno, niečo sa nenačítalo správne.

!!! warning "Častá chyba: obrázok sa v náhľade zobrazoval, na živom webe nie"
    Internet rozlišuje veľké a malé písmená v názvoch súborov. Ak sa obrázok volá `Foto.jpg`, ale v kóde je napísané `foto.jpg`, v tvojom náhľade to možno fungovalo, ale na živom webe obrázok zmizne. Keď niečo chýba, napíš to do Copilot Chat:

    ```
    Na mojom nasadenom webe sa nezobrazuje obrázok v hlavičke, hoci v náhľade fungoval. Skontroluj, či názov súboru obrázka v kóde presne sedí s názvom súboru v priečinku, vrátane veľkých a malých písmen, a oprav to.
    ```

    Potom zmenu ulož (pozri nižšie) a znova over živý web.

---

## 🔄 Ako web aktualizovať

Toto je krásne: web už **nemusíš znova nasadzovať**. Stačí spraviť zmenu a uložiť ju.

1. V prostredí uprav web ako obvykle (aj s pomocou Copilota).
2. Choď do panela **Source Control** (ikona vetvenia vľavo, tá s bodkami a čiarou).
3. Napíš krátky popis zmeny (napr. `pridal som fotku na úvod`) a potvrď (**Commit**), potom **Sync / Push**.
4. Počkaj 1–2 minúty — a **web sa sám aktualizuje.**

!!! tip "Ako zistím, že sa zmena už prejavila?"
    Otvor svoju živú adresu a stlač **Ctrl + Shift + R** (tvrdé obnovenie — načíta stránku úplne nanovo, bez starej pamäte prehliadača). Ak zmenu ešte nevidíš, počkaj minútu a skús znova.

---

## 🖱️ Alternatíva bez GitHubu: Netlify Drop

Chceš niekomu web ukázať **hneď a rýchlo**, bez nastavovania? Existuje aj bleskový spôsob.

1. Choď na [netlify.com/drop](https://netlify.com/drop).
2. Priečinok so svojím webom (ten, kde je súbor `index.html`) **pretiahni myšou** do okna.
3. Za pár sekúnd dostaneš hotový odkaz, ktorý môžeš poslať.

!!! note "Kedy použiť čo?"
    **Netlify Drop** je super na rýchle ukázanie („pozri, čo som spravil"). Adresa je však náhodná a web sa neaktualizuje sám — pri každej zmene musíš priečinok pretiahnuť znova.

    **GitHub Pages** je lepší na „ozajstné" nasadenie: máš peknú stálu adresu a web sa aktualizuje sám. Na predmete odporúčame GitHub Pages.

---

## 📨 A teraz to najlepšie

!!! tip "Pošli svoj web svetu"
    Tú adresu, ktorú si dostal, môžeš rovno **poslať vyučujúcemu** ako odovzdanie práce. A pokojne si ju daj aj **do životopisu** alebo na LinkedIn — je to hotový, živý web, ktorý si vytvoril ty. Pekná vizitka.

---

## 📝 Zhrnutie

Čo už vieš a máš hotové:

- Vieš, že **nasadenie** premení tvoj lokálny náhľad na **verejný web** s vlastnou adresou.
- Web si **nasadil cez GitHub Pages** (Settings → Pages → Deploy from a branch → main → Save).
- **Overil si živú verziu** — načítanie, odkazy, obrázky, mobil aj konzolu.
- Vieš web **aktualizovať** jednoduchým commitom a pushom.
- Poznáš aj rýchlu alternatívu **Netlify Drop**.
- Vieš, že na verejnom webe **nesmie byť žiadny tajný kľúč**.

Máš svoj prvý web na internete. Gratulujem! 🎉

Ďalej pokračuj blokom o tom, ako svoj hotový web ešte **skontrolovať a vyladiť** — pozri [Kontrola webu](../znalostna-baza/kontrola-webu.md).
