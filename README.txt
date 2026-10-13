MODAFINILSHOP v8 — PRODUKTOVÉ DETAILY (12. 10. 2026)
================================================

NOVÉ V TEJTO VERZII
- 10 samostatných informačných detailov pre presné názvy produktov.
- Zachované dodané texty, vrátane pôvodnej interpunkcie, dávok a pravopisu.
- Všetky texty v detailoch sú rozdelené do informačných sekcií a dvojstĺpcového
  rozloženia; na mobiloch sa sekcie automaticky zobrazia pod sebou.
- Text každej dodanej neprázdnej riadkovej jednotky sa v príslušnom detaile
  vyskytuje práve raz (automatická kontrola oproti content/product-texts.txt).
- Zachované pôvodné menu, päť výhod „Prečo my?“ a katalóg.
- Obrázky sú dočasné neutrálne zástupné obrázky, pripravené na výmenu.
- Prehľadné interné prekliky a odkazy na relevantné ďalšie produkty.
- Robots.txt povoľuje indexovanie.
- Žiadne platobné ani objednávkové funkcie; API Packeta/Chameleon nepripojené.

SÚBORY PRE TEXTY
- content/product-texts.txt: texty v zdrojovom znení, oddelené produktovými názvami.
- products/*.html: finálne naformátované informačné detaily.
- assets/product-detail.css: dizajn detailov a mobilné štýly.

KONTROLY
- Úplnosť všetkých 10 textov v jednotlivých HTML detailoch: prešla.
- Responzívnosť: 320, 375, 390, 768, 1024, 1440 px (60 kontrol): prešla.
- Odkazy, obrázky a mobilné menu: základné kontroly prešli.
- Prehliadačový render bol testovaný cez inline preview pretože lokálny súbor
  bol blokovaný; pred nasadením skontrolovať aj živý server.

POZOR PRED PUBLIKOVANÍM
- Dodané medicínske texty neboli fakticky ani odborne validované a obsahujú
  aj tvrdenia o dávkovaní a indikáciách, ktoré môžu byť nepresné alebo v rozpore
  s platnými schválenými informáciami v konkrétnej krajine.
- Pred zverejnením je nevyhnutná odborná a právna kontrola obsahu a oprávnení.
- Na Slovensku sa lieky viazané na recept nesmú legálne predávať online ani
  propagovať širokej verejnosti bežnou reklamou.
- Pridať fotografie, skutočnú doménu a SEO canonical podľa finálnej adresy.


Verzia v9 — OBNOVENÝ TMAVÝ LESKLÝ DIZAJN
- Farby, gradienty a glossy/sklenené panely obnovené doplnkovým súborom assets/dark-gloss.css (načítaný po ostatných štýloch).
- Všetky pôvodné texty desiatich produktov z verzie v8 sú bezo zmeny.
- Všetkých 5 výhod v sekcii Prečo my? zostáva zachovaných.
- Produktové fotografie sú stále zástupné, čakáme na dodanie skutočných fotografií.
- Ide o informačný katalóg bez aktivovaného predaja.


Verzia v10 — KLIKATEĽNÝ DEMO KOŠÍK, TMAVÝ DIZAJN ZACHOVANÝ
- Nemenili sme textové podklady produktov ani existujúci tmavý vizuálny štýl.
- Každá z 10 kariet aj každý detail má výber počtu kusov (1–99) a tlačidlo Pridať do košíka.
- Košík sa vysúva sprava, obsahuje prehľad vybraných produktov, odstránenie, +/- množstva,
  počítadlo v hlavičke, perzistenciu v localStorage a tlačidlo pokračovať v prehliadaní.
- Na mobile je hlavička v rozložení menu / logo / košík.
- Nezadávali sa žiadne ceny, preto demo nezobrazuje sumy.
- Neexistuje platobná brána, odoslanie objednávky, účet, server ani integrácia Packeta/Chameleon.
- UX prototyp nie je schválenie online predaja liekov viazaných na lekársky predpis.
- Súbory assets/cart-demo.css a assets/cart-demo.js obsahujú všetky nové správania.


V11: Spomaleny (1600 ms) let produktu do kosika, zatrasenie ikony a vysunutie panela,
leskly hover navigacie, mikroanimacie kariet, jemny scroll reveal. Optimalizacia:
CSS transform/opacity, bez kniznic, respektuje prefers-reduced-motion.
Povodny tmavy dizajn a texty v content/product-texts.txt su zachovane.
