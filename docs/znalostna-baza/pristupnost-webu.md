# ♿ Prístupnosť webu — 5-minútová kontrola

Tvoj web nebudú používať len ľudia s dokonalým zrakom, pevnou rukou na myši a novým telefónom. Príde naň niekto so slabším zrakom, starší človek, niekto s barlou v jednej ruke — alebo len bežný návštevník na mobile na prudkom slnku. **Prístupný web** je taký, ktorý funguje aj pre nich.

!!! note "Prečo sa ťa to týka (nie je to len slušnosť)"
    Od **28. júna 2025** platí v celej EÚ **European Accessibility Act** (u nás zákon č. 351/2022 Z. z.) — prístupnosť je povinná aj pre **e-shopy**. Keďže študuješ elektronický obchod, táto požiadavka ťa v praxi neminie. Dobrá správa: základ skontroluješ za 5 minút a opraviť ho vie AI.

Táto stránka je **checklist na 5 minút** — päť rýchlych testov, žiadne čítanie kódu. Ideálny moment: keď web funguje (prešiel [Kontrolou webu](kontrola-webu.md)) a najmä **po nasadení na živú adresu**.

---

## ⌨️ Test 1 — Odlož myš (Tab test) · 1 minúta

Niektorí ľudia myš nepoužívajú vôbec — pre problémy s motorikou, alebo preto, že web počúvajú cez čítačku obrazovky. Skús to aj ty:

1. Klikni raz do stránky a **odlož myš**.
2. Stláčaj klávesu **Tab** — mala by ťa posúvať z odkazu na odkaz, z tlačidla na tlačidlo. (**Shift+Tab** ide späť.)
3. Na aktívnom odkaze stlač **Enter** — mal by sa otvoriť.

Pýtaj sa:

- Dostaneš sa postupne na **každý odkaz a každé tlačidlo**?
- **Vidíš, kde práve „stojíš"** — má aktívny prvok rámik alebo iné zvýraznenie? Ak nič nevidno, návštevník bez myši je stratený.
- Dá sa odkaz **otvoriť Enterom**?

---

## 🔍 Test 2 — Priblíž na 200 % · 1 minúta

Ľudia so slabším zrakom si stránku zväčšujú. Over, že sa pri tom nerozsype:

1. Drž **Ctrl** a stlač **+** dvakrát až trikrát (priblíženie na ~200 %).
2. Prejdi stránku zhora nadol.

- Dá sa všetko **prečítať a používať**?
- **Neprekrývajú sa** texty, tlačidlá ani menu?
- Nezmizol nejaký obsah mimo obrazovku?

Späť na normál sa vrátiš cez **Ctrl+0**.

---

## 🎨 Test 3 — Kontrast očami · pol minúty

Toto už poznáš z [Kontroly webu](kontrola-webu.md) (krok 2): svetlosivý text na bielom pozadí je zlý nápad. Rýchly trik navyše — **prižmúr oči** alebo odstúp od monitora. Text, ktorý „zmizne" ako prvý, má slabý kontrast. Presné čísla za teba zmeria Lighthouse v teste 5.

---

## 🖼️ Test 4 — Alt texty obrázkov · 1 minúta

Nevidiaci návštevník používa **čítačku obrazovky** — program, ktorý stránku číta nahlas. Obrázok „prečíta" z jeho **alt textu** (krátkeho popisu v kóde). Bez alt textu je obrázok pre neho neviditeľný. HTML čítať nemusíš — požiadaj AI:

```
Skontroluj všetky obrázky na mojom webe: má každý z nich alt text?
Chýbajúce doplň — popis má povedať, čo na obrázku je a načo tam je
(napr. „Fotka majiteľky kaviarne Jany" namiesto „obrázok1").
Na záver mi vypíš zoznam, čo si kde doplnil.
```

---

## 💡 Test 5 — Lighthouse (automatický audit) · 2 minúty

Prehliadač (Chrome aj Edge) má vstavaný nástroj **Lighthouse**, ktorý stránku automaticky preverí a dá jej skóre prístupnosti od 0 do 100.

1. Otvor svoj web na **živej adrese** (tvoj `github.io` odkaz) — na adrese začínajúcej `file://` Lighthouse nefunguje.
2. Stlač **F12** a klikni na záložku **„Lighthouse"** (ak ju nevidíš, schováva sa pod šípkami **»**).
3. Zaškrtni kategóriu **Accessibility** a klikni **„Analyze page load"**.
4. Po chvíli dostaneš skóre a zoznam nálezov. Rozklikni červené a oranžové položky, ich názvy skopíruj a pošli AI.

!!! example "Vzorový prompt do Copilot Chat"
    ```
    Lighthouse audit prístupnosti našiel na mojom webe tieto problémy:

    [sem vlož skopírované názvy nálezov]

    Oprav ich a pri každom mi jednou vetou po slovensky vysvetli,
    čo bolo zle a komu to prekážalo.
    ```

!!! warning "Skóre 100 neznamená dokonale prístupný web"
    Automat odhalí len časť problémov (chýbajúce alt texty, slabý kontrast…). Tab test ani zoom nenahradí — preto robíš všetkých päť testov, nie len tento.

!!! warning "Po oprave skontroluj znova"
    Platí to isté ako pri každej oprave od AI: **never jej na slovo**. Spusti Lighthouse ešte raz a prejdi Tab test — oprava jednej veci občas pokazí inú.

---

## Zhrnutie

Za 5 minút vieš overiť, či tvoj web funguje **pre všetkých** — bez čítania kódu:

- ✅ **Tab test** — všade sa dá dostať bez myši a vidno, kde stojíš,
- ✅ **zoom 200 %** (Ctrl a +) — nič sa nerozsype,
- ✅ **kontrast** — text nemizne ani s prižmúrenými očami,
- ✅ **alt texty** — AI ich skontroluje a doplní za teba,
- ✅ **Lighthouse** (F12 → Lighthouse → Accessibility) — červené nálezy skopíruj a pošli AI.

A pamätaj: prístupnosť nie je extra bonus pre pár ľudí — je to kvalita webu pre všetkých. Rovnaké úpravy, ktoré pomôžu nevidiacemu, pomôžu aj zákazníkovi na mobile na slnku.

**Ďalej:** spusti túto kontrolu na svojom webe — najlepšie na živej adrese po [nasadení](nasadenie-github-pages.md).
