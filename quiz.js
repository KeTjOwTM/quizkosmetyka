// Tablica z pytaniami i odpowiedziami
const questions = [


    //CZERWIEC 2024
    { question: "Optyczna korekta oczu osadzonych zbyt blisko siebie polega między innymi na naniesieniu", answers: ["ciemnego cienia w kącikach wewnętrznych oczu.", "jasnego cienia na środek powieki ruchomej.", "ciemnego cienia pod łukiem brwiowym.", "jasnego cienia w kącikach wewnętrznych oczu."], correct: 3 },
    { question: "Zgodnie z procedurą postępowania z pędzlami kosmetycznymi używanymi do makijażu należy je kolejno:", answers: ["przetrzeć płynem do dezynfekcji narzędzi, osuszyć, wysterylizować w autoklawie.", "umyć wodą z mydłem, osuszyć, zdezynfekować płynem na bazie alkoholu, osuszyć.", "wytrzeć chusteczką higieniczną, spryskać płynem do dezynfekcji narzędzi.", "umyć wodą z mydłem, opłukać wodą destylowaną, osuszyć."], correct: 1 },
    { question: "Aerograf kosmetyczny tzw. airbrush jest przeznaczony między innymi do", answers: ["face i body paintingu.", "waporyzacji skóry twarzy.", "rozpylania toniku na twarz.", "makijażu permanentnego."], correct: 0 },
    { question: "W celu określenia odczynu skóry należy zastosować do diagnozy", answers: ["dermatoskop.", "kutometr.", "korneometr.", "pehametr."], correct: 3 },
    { question: "Przygotowanie i aplikacja maski ściągającej kaolinowej w proszku polega na rozrobieniu jej", answers: ["z aktywatorem do alg i nałożeniu szpatułką drewnianą.", "z koncentratem ziołowym i nałożeniu palcami.", "z wodą utlenioną i nałożeniu szpatułką silikonową.", "z wodą mineralną i nałożeniu pędzlem."], correct: 3 },
    { question: "Jasny kolor skóry, włosy chłodny blond lub popielate, oczy jasne, błękitne lub szarozielone i blade usta, to cechy charakterystyczne dla typu urody", answers: ["zima.", "lato.", "jesień.", "wiosna."], correct: 3 },
    { question: "Którą z metod złuszczania skóry twarzy należy zastosować w celu spłycenia blizn po trądziku?", answers: ["Mikrodermabrazję.", "Oxybrazję.", "Peeling kawitacyjny.", "Brushing."], correct: 0 },
    { question: "Przeciwwskazaniem do wykonania zabiegu darsonwalizacji skóry twarzy jest", answers: ["trądzik pospolity.", "łojotok skóry.", "świąd skóry.", "trądzik różowaty."], correct: 3 },
    { question: "Mały, płaski pędzel z naturalnego włosia ze spiczastym zakończeniem należy zastosować do", answers: ["nałożenia różu na policzki.", "aplikacji pomadki na usta.", "roztarcia cieni na powiekach.", "aplikacji fluidu na twarz."], correct: 1 },
    { question: "Użycie prądów d’Arsonvala w obrębie skóry twarzy wskazane jest między innymi bezpośrednio po wykonaniu zabiegu", answers: ["depilacji pęsetą.", "mezoterapii igłowej.", "złuszczania peelingiem ziołowym.", "eksfoliacji kwasem migdałowym."], correct: 3 },
    { question: "W celu wykluczenia przeciwwskazań do wykonania zabiegu złuszczania peelingiem ziołowym skóry twarzy, w wywiadzie kosmetycznym należy zapytać:", answers: ["o charakter wykonywanej pracy.", "o sposób odżywiania.", "o skłonność do uczuleń.", "o elementy metalowe w tkankach."], correct: 2 },
    { question: "W celu rozjaśnienia skóry twarzy z przebarwieniami posłonecznymi należy zastosować:", answers: ["maskę z kwasem hialuronowym.", "maskę z wyciągiem z bluszczu.", "krem z glinką zieloną.", "krem z kwasem askorbinowym."], correct: 3 },
    { question: "Lampą stosowaną w diagnozie kosmetycznej jest lampa:", answers: ["Wooda.", "Minina.", "Sollux.", "kwarcowa."], correct: 0 },
    { question: "Wykonując makijaż wieczorowy młodej klientce z widocznymi teleangiektazjami należy zastosować:", answers: ["fioletowy korektor i fluid nawilżający.", "żółty korektor i fluid matujący.", "biały korektor i fluid liftingujący.", "zielony korektor i fluid kryjący."], correct: 3 },
    { question: "W celu wykonania zabiegu opóźniającego proces starzenia skóry twarzy należy dobrać między innymi", answers: ["krem z cynkiem", "maskę z kaolinem", "krem z garbnikami", "maskę z cytokinami"], correct: 3 },
    { question: "Przeciwwskazaniem do zastosowania metody przedłużania rzęs 1:1 są między innymi", answers: ["rzadkie i bardzo jasne rzęsy", "krótkowzroczność i noszenie okularów", "kreski permanentne na górnych powiekach", "swędzące i zaczerwienione powieki"], correct: 3 },
    { question: "Zgodnie z zasadami postępowania z narzędziami i przyborami używanymi do zabiegu kosmetycznego, które nie naruszają ciągłości tkanek, należy je kolejno", answers: ["umyć wodą destylowaną, zanurzyć w środku dezynfekcyjnym, opłukać pod bieżącą wodą i wysuszyć", "oczyścić, zdezynfekować płynem dezynfekcyjnym, opłukać wodą mineralną i włożyć do sanityzatora", "umyć pod bieżącą wodą, wytrzeć, zdezynfekować płynem dezynfekcyjnym, opłukać pod bieżącą wodą i wysuszyć", "oczyścić, umyć pod bieżącą wodą, zdezynfekować płynem dezynfekcyjnym, opłukać w wodzie destylowanej i wysuszyć"], correct: 3 },
    { question: "Makijaż ślubny powinien charakteryzować się", answers: ["mocno podkreślonymi oczami, tzw. smokey eyes, sztucznymi rzęsami i intensywnym różem na policzkach", "rozświetlonym drobinkami brokatu wyrazistym makijażem oczu i mocno kryjącym podkładem z efektem opalenizny", "delikatnym makijażem oczu w jasnych cielistych barwach, brązowym tuszem na rzęsach i jasnym beżowym błyszczykiem", "subtelnie, ale wyraźnie podkreślonymi oczami, rzęsami pokrytymi wodoodpornym tuszem i rozświetleniem"], correct: 3 },
    { question: "Przed przystąpieniem do wykonania u klientki pierwszego zabiegu farbowania brwi i rzęs należy", answers: ["wykonać test uczuleniowy godzinę przed zabiegiem", "poprosić o przybycie na zabieg bez makijażu", "zaproponować użycie wyłącznie brązowej henny", "wykonać test płatkowy dobę przed zabiegiem"], correct: 3 },
    { question: "W celu uzyskania 2 litrów roztworu roboczego środka dezynfekcyjnego o stężeniu 10% należy zmieszać", answers: ["1800 ml wody i 200 ml środka dezynfekcyjnego", "2000 ml wody i 20 ml środka dezynfekcyjnego", "2000 ml wody i 200 ml środka dezynfekcyjnego", "1800 ml wody i 360 ml środka dezynfekcyjnego"], correct: 0 },
    { question: "Do zbędnego wyposażenia kufra wizażystki należy zaliczyć", answers: ["kremy do różnych typów skóry, pelerynkę i make-up fixer", "preparaty do demakijażu, sztuczne rzęsy i fluidy", "błyszczyki, temperówkę i transparentny puder sypki", "peeling AHA, miskę gumową i olejek do masażu"], correct: 3 },
    { question: "Wykonując makijaż wieczorowy klientce ze skórą tłustą, bezpośrednio przed nałożeniem fluidu należy nałożyć", answers: ["bazę rozświetlającą", "krem odżywczy", "krem z filtrem UV", "bazę matującą"], correct: 3 },
    { question: "Klientce z sińcami pod oczami, należy zalecić stosowanie w warunkach domowych", answers: ["kremów pod oczy z wyciągami z arniki i miłorzębu japońskiego", "żeli pod oczy z ekstraktami ze świetlika lekarskiego i bluszczu", "ciepłych kompresów z naparu z szałwii pod oczy", "zimnych okładów z wyciągami ze skrzypu i lipy na powieki"], correct: 0 },
    { question: "Pod wpływem działania promieniowania podczerwonego na skórę twarzy w tkankach powstaje efekt", answers: ["fotochemiczny", "fototermiczny", "elektrochemiczny", "elektrokinetyczny"], correct: 1 },
    { question: "W zabiegu pielęgnacyjnym delikatnej i cienkiej skóry twarzy z teleangiektazjami u 60-letniej klientki, należy zastosować między innymi", answers: ["piankę do demakijażu, maskę peel-off i aparat do darsonwalizacji", "żel do demakijażu, maskę termiczną i aparat do mikrodermabrazji diamentowej", "płyn micelarny do demakijażu, maskę gipsową i aparat do mikrodermabrazji korundowej", "śmietankę do demakijażu, maskę regenerującą i aparat do ultradźwięków"], correct: 3 },
    { question: "Regulację łuku brwiowego u klientki należy rozpocząć od", answers: ["końca do nasady brwi", "środka do końca brwi", "środka do nasady brwi", "nasady do końca brwi"], correct: 0 },
    { question: "Teleangiektazje w obrębie policzków oraz skrzydełek nosa są przeciwwskazaniem do wykonania zabiegu", answers: ["łagodzącego z maską kremową", "nawilżającego z maską alginatową", "regenerującego z płatem kolagenowym", "modelującego z maską gipsową"], correct: 3 },
    { question: "W celu wyjałowienia narzędzi mogących naruszyć ciągłość skóry należy zastosować metodę sterylizacji", answers: ["ultradźwiękowej", "radiacyjnej", "termicznej", "promieniami UV"], correct: 2 },
    { question: "W celu złagodzenia objawów przedawkowania promieniowania UV, należy wykonać naświetlanie lampą Sollux z filtrem", answers: ["przeźroczystym", "czerwonym", "fioletowym", "niebieskim"], correct: 1 },
    { question: "Optyczna korekta opadających zewnętrznych kącików oczu w makijażu polega na wykonaniu", answers: ["bardzo cienkich, długich i prostych kresek, poprowadzonych prosto, poza kąciki zewnętrzne oczu", "kresek grubszych na środkowych częściach powiek, a cieńszych w kącikach zewnętrznych i wewnętrznych", "grubych kresek rozpoczynających się w połowie powiek, a kończących się dokładnie w kącikach zewnętrznych oczu", "kresek na całej długości oczu, w zewnętrznych kącikach oczu grubszych skierowanych lekko w górę"], correct: 3 },
    { question: "Cienka, pergaminowa, z licznymi teleangiektazjami, to cechy skóry twarzy", answers: ["tłustej", "suchej", "mieszanej", "naczyniowej"], correct: 3 },
    { question: "Który zestaw składników aktywnych należy zalecić klientce w składzie kosmetyków przeznaczonych do pielęgnacji skóry dojrzałej i odwodnionej?", answers: ["Kwas hialuronowy, ceramidy, elastynę i witaminę A", "Wyciąg z lukrecji, enzymy, żywokost lekarski i witaminę K", "Żywice, cynk, olejek z drzewa herbacianego i witaminę B1", "Balsam peruwiański, garbniki, krwawnik i witaminę D"], correct: 0 },
    { question: "Przygotowując klientkę do wykonania mikrodermabrazji diamentowej, obszar skóry, który będzie poddany temu zabiegowi należy", answers: ["posmarować żelem aloesowym", "przetrzeć środkiem odtłuszczającym", "rozpulchnić pod wapozonem", "zabezpieczyć wazeliną kosmetyczną"], correct: 1 },
    { question: "Który zespół objawów jest charakterystyczny dla skóry twarzy określanej jako tłusta?", answers: ["Ziemista, błyszcząca, lepka w dotyku", "Napięta, swędząca, szorstka", "Wiotka, szorstka ze skłonnością do przebarwień", "Cienka, jasna, skłonna do łuszczenia się"], correct: 0 },
    { question: "W celu zatuszowania fioletowych cieni pod oczami należy użyć w miejscu ich wystąpienia korektora", answers: ["ciemniejszego od fluidu, z pomarańczowym odcieniem", "jaśniejszego od fluidu, z niebieskim odcieniem", "jaśniejszego od fluidu, z żółtym odcieniem", "w kolorze fluidu, z zielonym odcieniem"], correct: 2 },
    { question: "Zabezpieczenie ust klientki wazeliną i oczu płatkami kosmetycznymi jest konieczne przed przystąpieniem do wykonywania", answers: ["mikrodermabrazji tlenkiem glinu", "peelingu kawitacyjnego", "maski alginatowej", "eksfoliacji kwasem glikolowym"], correct: 3 },
    { question: "Peloty wywołującej wyładowania energii elektromagnetycznej w postaci deszczu iskrowego należy użyć w zabiegu", answers: ["dezinkrustacji", "darsonwalizacji", "sonoforezy", "ridulizy"], correct: 1 },
    { question: "Podczas zabiegu galwanizacji stabilnej należy zastosować między innymi", answers: ["elektrodę Bergoniego i jałową gazę", "pelotę szklaną i żel do jonoforezy", "głowicę do ultradźwięków i żel sprzęgający", "elektrodę wałeczkową i folię aluminiową"], correct: 0 },
    { question: "Podczas wywiadu kosmetycznego należy bezwzględnie zadać pytania", answers: ["o dotychczasową pielęgnację i stosowane terapie farmakologiczne", "o warunki mieszkaniowe i adres zamieszkania", "o stan cywilny i rodzaj stosowanej diety", "o poziom wykształcenia i warunki wykonywania pracy"], correct: 0 },
    { question: "Do cery tłustej w celu uzyskania działania ściągającego, przeciwbakteryjnego i przeciwzapalnego należy zastosować preparat kosmetyczny zawierający", answers: ["flawonoidy", "garbniki", "antocyjany", "embrioblasty"], correct: 1 },
    

    //CZERWIEC 2024 2
    { question: "Pelota łukowa w zabiegu darsonwalizacji jest przeznaczona do stosowania na skórze", answers: ["szyi i ramion", "pleców", "twarzy i dekoltu", "dłoni"], correct: 0 },
    { question: "Krem do stóp z witaminą A należy zastosować przy", answers: ["pękających piętach i rogowaceniu okołomieszkowym", "wrastających paznokciach i odparzeniach", "modzelach i brodawkach płaskich", "nadmiernej potliwości i nagniotkach"], correct: 0 },
    { question: "Przeciwwskazaniami do przeprowadzenia zabiegu kriolipolizy w obrębie ud i pośladków jest", answers: ["obniżona elastyczność skóry", "otyłość hipertroficzna", "wszczepiony rozrusznik serca", "cellulit lipidowy"], correct: 2 },
    { question: "Okluzję w zabiegach pielęgnacyjnych dłoni uzyskuje się poprzez", answers: ["wmasowanie kremu nawilżającego do wchłonięcia", "usunięcie zrogowaciałych komórek naskórka przy pomocy peelingu", "wykonanie masażu na krem tłusty przed nałożeniem maski", "założenie rękawicy foliowej i rękawicy frotte po aplikacji maski"], correct: 3 },
    { question: "Przeciwwskazaniem do zastosowania algoterapii ciała jest między innymi", answers: ["wszczepiony rozrusznik serca", "trądzik pospolity", "obrzęk kończyny dolnej", "nadczynność tarczycy"], correct: 3 },
    { question: "Do wykonania manicure biologicznego u klientki należy przygotować między innymi", answers: ["gilotynę i frezarkę", "cążki do skórek i dłutko", "remover i patyczek drewniany", "patyczek drewniany i cęgi kątowe"], correct: 2 },
    { question: "Który preparat należy zastosować do odtłuszczenia płytek paznokciowych w celu zwiększenia przyczepności i przedłużenia trwałości zdobienia hybrydowego?", answers: ["Puder", "Primer", "Bazę", "Top"], correct: 1 },
    { question: "Który zabieg należy zastosować w celu usunięcia przebarwień z powierzchni grzbietowych skóry rąk?", answers: ["Diatermię", "Elektrolizę", "Laseroterapię", "Elektrokoagulację"], correct: 2 },
    { question: "Kostka Arkady jest przeznaczona do", answers: ["usuwania hiperkeratoz z pięt", "ustawienia palucha koślawego", "przedłużania naturalnych paznokci", "korygowania wrastających paznokci"], correct: 3 },
    { question: "W celu optycznego powiększenia małej płytki paznokciowej wskazane jest malowanie lakierem", answers: ["czerwonym pozostawiając wolne brzegi paznokcia", "ciemnym środka paznokcia", "ciemnym omijając obłączek paznokcia", "perłowym dokładnie całego paznokcia"], correct: 3 },
    { question: "W celu likwidacji form przetrwalnikowych bakterii należy zastosować preparat do dezynfekcji oznaczony", answers: ["symbolem B", "symbolem F", "symbolem V", "symbolem S"], correct: 3 },
    { question: "Przeciwwskazaniem do wykonania zabiegu presoterapii kończyn dolnych jest występowanie u klientki", answers: ["zakrzepicy żylnej", "obrzęków pourazowych", "ociężałości kończyn dolnych", "lipodystrofii tkanki łącznej"], correct: 0 },
    { question: "W zabiegu skóry rąk, w celu odbudowy zniszczonego detergentami płaszcza hydrolipidowego, należy zastosować między innymi", answers: ["maskę z wyciągiem z pokrzywy i związkami cynku", "balsam z olejem rycynowym i ekstraktem z mięty", "żel z ekstraktem z nagietka i związkami srebra", "krem z olejem arganowym i mocznikiem"], correct: 3 },
    { question: "W celu oceny elastyczności skóry biustu i dekoltu należy zastosować metodę z wykorzystaniem", answers: ["korneometru", "meksametru", "ekstensometru", "pehametru"],correct: 2},
    { question: "W zabiegu oxybrazji do złuszczenia martwych komórek naskórka wykorzystuje się tlen oraz", answers: ["dwutlenek węgla", "sól fizjologiczną", "kwas owocowy", "tlenek glinu"], correct: 1},
    { question: "Klientce z liposklerozą należy zalecić stosowanie preparatów zawierających między innymi:", answers: ["witaminę C, alantoinę, kwas glikolowy", "d-panthenol, wyciągi z łopianu i rozmarynu", "wyciągi z ruszczyka i kasztanowca, kofeinę", "witaminę B6, koenzym Q10, ceramidy"], correct: 2},
    { question: "Klientce z problemem zimnych stóp należy zalecić do stosowania preparaty z wyciągami", answers: ["z rumianku i kozieradki", "z papryki i rozmarynu", "z lawendy i tymianku", "z kory dębu i szałwii"],correct: 1},
    { question: "W celu zmniejszenia objawów fotostarzenia występujących na grzbietowych powierzchniach rąk należy wykonać", answers: ["manicure hybrydowy", "masaż ultradźwiękowy", "eksfoliację kwasami", "kompresjoterapię bierną"], correct: 2 },
    { question: "W stylizacji paznokci ma zastosowanie", answers: ["lampa bioptron", "lampa Minina", "lampa UV", "lampa IR"], correct: 2},
    { question: "W warunkach domowych klientce, która chce się zrelaksować należy zaproponować do kąpieli następujący zestaw olejków eterycznych:", answers: ["z drzewa herbacianego, paczulowy, anyżowy", "lawendowy, pomarańczowy, grejpfrutowy", "imbirowy, jałowcowy, z kopru włoskiego", "cynamonowy, sosnowy, eukaliptusowy"], correct: 1},
    { question: "Klientce z problemem suchych, szorstkich łokci należy zaproponować stosowanie", answers: ["kremu z witaminą C", "maści z wyciągiem z nagietka", "kremu z witaminą A", "maści z wyciągiem z arniki górskiej"], correct: 2 },
    { question: "W zabiegach antycellulitowych należy zastosować aparaty do", answers: ["galwanizacji katodowej i darsonwalizacji", "mezoterapii bezigłowej i endermologii", "galwanizacji anodowej i sonoforezy kawitacyjnej", "krioterapii miejscowej i waponizacji"], correct: 1 },
    { question: "Trwałe usunięcie zbędnego owłosienia można uzyskać zabiegami z wykorzystaniem aparatów generujących:", answers: ["parę wodną, prądy diadynamiczne, promieniowanie podczerwone", "podciśnienie, promieniowanie ultrafioletowe, prądy d’Arsonwala", "światło spolaryzowane, fale radiowe, prąd interferencyjny", "światło laserowe, prąd galwaniczny, ultradźwięki"], correct: 3},
    { question: "W zabiegu miejscowej krioterapii dyszę urządzenia należy trzymać", answers: ["bezpośrednio przy powierzchni skóry, nieruchomo", "bezpośrednio przy powierzchni skóry, wykonując ruchy przemiatające", "około 20 cm od powierzchni skóry, wykonując ruchy okrężne", "około 20 cm od powierzchni skóry, nieruchomo"], correct: 2},
    { question: "Do wykonania zabiegu na ciało o działaniu intensywnie nawilżającym i zapobiegającym przesuszaniu się naskórka należy zastosować preparat zawierający w swoim składzie między innymi", answers: ["olejki z lawendy i drzewa herbacianego", "fitokompleksy z szałwii i kory dębu", "sorbitol i masło shea", "wyciągi z arniki i miłorzębu japońskiego"], correct: 2 },
    { question: "W celu zmniejszenia widoczności rozstępów w fazie zanikowej należy wykonać", answers: ["mikrodermabrazję", "elektrostymulację", "lipolizę", "endermologię"], correct: 0 },
    { question: "Klientce z łuszczącą, szorstką skórą stóp zaleca się stosowanie w domu", answers: ["kremów rozjaśniających i masek algowych", "peelingów gruboziarnistych i masek ściągających", "peelingów enzymatycznych i masek termoaktywnych", "kremów nawilżających i masek odżywczych"], correct: 3},
    { question: "Klientce, która ma rozdwajające płytki paznokciowe oraz suche, zniszczone skórki okołopaznokciowe należy wykonać manicure", answers: ["hybrydowy", "japoński", "tradycyjny", "na ciepło"], correct: 3},
    { question: "Przeciwwskazaniami do zabiegu zmniejszającego nadmierną potliwość stóp są",answers: ["zastoje limfatyczne i cukrzyca", "obrzęki i zrogowaciały naskórek", "grzybica paznokci i brodawki", "nadwaga i wrastające paznokcie"], correct: 2},
    { question: "Którą maskę należy zastosować podczas wykonywania zabiegu ujędrniająco-modelującego na biust?", answers: ["Gipsową", "Ziołową", "Kaolinową", "Żelową"], correct: 0 },
    { question: "Przeciwwskazaniami do przeprowadzenia zabiegu manicure biologicznego są:",answers: ["onycholiza, łuszczyca skóry, cukrzyca", "bielactwo, bruzdowanie podłużne paznokcia, skrzydlik", "pęknięcia naskórka między palcami, brodawki, zanokcica", "koilonychia, hemofilia, leukonychia"],correct: 2},
    { question: "Do dezynfekcji skóry twarzy po zabiegu usuwania prosaków należy użyć roztworu nadtlenku wodoru w stężeniu",answers: ["3%", "9%", "2%", "12%"],correct: 0},
    { question: "Przed przystąpieniem do wykonania zabiegu lipolizy ultradźwiękowej skórę klientki objętą cellulitem należy",answers: ["pokryć żelem sprzęgającym", "dokładnie odtłuścić", "natłuścić olejem mineralnym", "zwilżyć wodą"],correct: 0},
    { question: "Chcąc wykonać zdobienie paznokci metodą one stroke należy", answers: ["ozdobić paznokcie wypukłymi elementami wykonanymi z akrylu", "namalować wzory geometryczne o ostrych krawędziach przy użyciu rapitografu", "namalować cieniowane elementy kwiatowe przy użyciu pędzli w odpowiednio dobranym kształcie", "ozdobić paznokcie motywem koronki wykonanym plasteliną UV"], correct: 2 },
    { question: "Podczas zdobienia paznokci metodą stampingu wzór na pomalowaną płytkę paznokciową z wzornika należy przenieść za pomocą", answers: ["stempla", "płytki metalowej", "wacika bezpyłowego", "magnesu"], correct: 0 },
    { question: "Polerowanie płytek paznokciowych w manicure biologicznym należy wykonać bezpośrednio", answers: ["przed opiłowaniem paznokci", "przed malowaniem paznokci", "po skróceniu paznokci", "po dezynfekcji dłoni"], correct: 1 },
    { question: "Przed przystąpieniem do wykonania zabiegu kawitacji skóry pleców klienta, szpatułę ultradźwiękową należy", answers: ["umyć mydłem antybakteryjnym", "zdezynfekować preparatem do dezynfekcji narzędzi", "przetrzeć tonikiem antybakteryjnym", "wysterylizować w autoklawie"], correct: 1 },
    { question: "Klientce przyjmującej preparaty o charakterze fotouczulającym nie należy wykonywać", answers: ["depilacji woskiem ciepłym", "termolizy", "depilacji pastą cukrową", "laseroterapii"], correct: 3 },
    { question: "W celu zapobiegania szybkiemu odrostowi włosów po zabiegu depilacji woskiem należy zastosować na podrażnioną skórę kończyn dolnych preparat o działaniu", answers: ["łagodzącym z papainą", "łagodzącym z arbutyną", "regenerującym z ceramidami", "regenerującym z kolagenem"], correct: 0 },
    { question: "W celu wykonania zabiegu złuszczania martwych komórek naskórka skóry pleców za pomocą szczoteczki należy przygotować aparat do", answers: ["kawitacji", "brushingu", "darsonwalizacji", "mikrodermabrazji"], correct: 1 },
     

    //STYCZEŃ 2024 test 2
    { question: "Zdobienie paznokci z użyciem lakierożelu światłoutwardzalnego należy wykonać w manicure", answers: ["biologicznym", "tradycyjnym", "japońskim", "hybrydowym"], correct: 3 },
    { question: "W terapii antycellulitowej należy zastosować maski zawierające w swoim składzie ekstrakty roślinne", answers: ["z lawendy lekarskiej i dziurawca zwyczajnego", "z ostrokrzewu paragwajskiego i bluszczu", "z mącznicy lekarskiej i rumianku", "z brzozy i szałwii lekarskiej"], correct: 1 },
    { question: "Uczulenie na światło słoneczne jest przeciwwskazaniem do wykonania", answers: ["helioterapii", "krioterapii", "presoterapii", "hydroterapii"], correct: 0 },
    { question: "Klientce z problemem łamliwych, kruchych, rozdwajających się paznokci oraz suchych, zniszczonych skórek okołopaznokciowych należy zaproponować wykonanie manicure", answers: ["na ciepło", "chevron", "japońskiego", "french"], correct: 0 },
    { question: "Najtrwalszą metodą usuwania owłosienia pod pachami jest depilacja", answers: ["nitkowa", "pastą cukrową", "woskiem twardym", "laserowa"], correct: 3 },
    { question: "Kontrolowaną hipotermię należy zastosować w zabiegu", answers: ["endermologii", "liposukcji", "helioterapii", "krioterapii"], correct: 3 },
    { question: "W celu dezynfekcji narzędzi przygotowując je do czynności sterylizacji przed planowanym zabiegiem pedicure należy użyć preparatu chemicznego", answers: ["w autoklawie", "w sanityzatorze", "w myjce utradźwiękowej", "w sterylizatorze kulkowym"], correct: 2 },
    { question: "W celu wyjałowienia narzędzi mogących naruszyć ciągłość skóry należy zastosować metodę sterylizacji", answers: ["ultradźwiękowej", "radiacyjnej", "termicznej", "promieniami UV"], correct: 2 },
    { question: "W zabiegu pielęgnacyjnym dłoni w celu odbudowy zniszczonego detergentami płaszcza hydrolipidowego skóry, należy zastosować między innymi", answers: ["żel z ekstraktem z nagietka i związkami srebra", "balsam z olejem rycynowym i ekstraktem z mięty", "krem z olejem arganowym i mocznikiem", "maskę z wyciągiem z pokrzywy i związkami cynku"], correct: 2 },
    { question: "Zabieg ujędrniająco-modelujący zwiotczałej skóry biustu należy wykonać w kolejności", answers: ["masaż, peeling, maska odżywcza, maska gipsowa", "peeling, masaż, maska odżywcza, maska gipsowa", "peeling, maska gipsowa, masaż, maska odżywcza", "masaż, peeling, maska gipsowa, maska odżywcza"], correct: 1 },
    { question: "W celu wzmocnienia paznokci z tendencją do łamliwości i rozdwajania się należy zastosować preparat zawierający", answers: ["związki siarki", "glinkę", "krzemionkę", "związki cynku"], correct: 2 },
    { question: "Która metoda diagnostyczna stosowana w zabiegach antycellulitowych umożliwia określenie zawartości wody, tkanki tłuszczowej i mięśni w organizmie", answers: ["Profilometrii pośredniej", "Bioimpedancji elektrycznej", "Wideokapilaroskopii", "Termografii"], correct: 1 },
    { question: "W przypadku stosowania techniki labilnej w terapii podciśnieniowej kończyn dolnych należy", answers: ["przesuwać głowicę wolno aż do wystąpienia odczucia bólu", "ugniatać skórę głowicą w różnych kierunkach", "głowicę prowadzić w kierunku dosercowym", "głowicę prowadzić w kierunku od serca do węzłów chłonnych dystalnych"], correct: 2 },
    { question: "Pilnik o gradacji ziarna o wartości 320 i powyżej należy zastosować do", answers: ["skrócenia i wyrównania brzegu płytki paznokciowej", "wypolerowania powierzchni płytki paznokciowej", "skrócenia i modelowania masy akrylowej na paznokciach", "opracowania wału paznokciowego oraz usunięcia obrąbka"], correct: 1 },
    { question: "Przed wykonaniem na ciało klientki zabiegu endermologii należy bezwzględnie", answers: ["poprosić klientkę o założenie specjalnego kostiumu", "nanieść na ciało klientki żel sprzęgający", "wykonać klientce peeling scrub", "przygotować podkłady bezpośrednie"], correct: 0 },
    { question: "Klientce z problemem suchej skóry stóp oraz tendencją do powstawania pęknięć w okolicy pięt należy zaproponować balsam", answers: ["z olejkiem cynamonowym i melisą", "z mocznikiem i lanoliną", "z olejkiem miętowym i arniką górską", "z chlorkiem glinu"], correct: 1 },
    { question: "U klientki z suchą, zniszczoną detergentami skórą dłoni wskazane jest wykonanie zabiegu", answers: ["z błota algowego", "parafinowego", "parafango", "guam"], correct: 1 },
    { question: "Do wykonania zabiegu normalizującego skórę pleców z trądzikiem pospolitym wskazane są preparaty zawierające olejek", answers: ["sosnowy", "herbaciany", "neroli", "cynamonowy"], correct: 1 },
    { question: "W celu wzmocnienia mięśni oraz wymodelowania sylwetki należy zastosować aparat do", answers: ["brushingu", "darsonwalizacji", "elektrostymulacji", "oxybrazji"], correct: 2 },
    { question: "Wykonując masaż piersi, należy zastosować kolejno techniki", answers: ["głaskania, oklepywania, rozcierania, ugniatania", "głaskania, ugniatania, rozcierania, oklepywania", "rozcierania, głaskania, ugniatania, oklepywania", "głaskania, rozcierania, ugniatania, oklepywania"], correct: 3 },
    { question: "Przeciwskazaniem do wykonania zabiegu pielęgnacyjnego na zniszczoną i suchą skórę dłoni klientki z wykorzystaniem okluzji z ciepłej maski parafinowej jest", answers: ["zwiotczenie zewnętrznych powierzchni dłoni", "hiperpigmentacja skóry rąk", "hipopigmentacja skóry rąk", "kandydoza wewnętrznych powierzchni dłoni"], correct: 3 },
    { question: "Do wykonania manicure biologicznego u klientki należy przygotować między innymi", answers: ["cążki do skórek i dłutko", "remover i patyczek drewniany", "gilotynę i frezarkę", "patyczek drewniany i cęgi kątowe"], correct: 1 },
    { question: "Pelota łukowa w zabiegu darsonwalizacji jest przeznaczona do stosowania na skórze", answers: ["dłoni", "pleców", "szyi i ramion", "twarzy i dekoltu"], correct: 3 },
    { question: "Korygując kształt kwadratowych płytek paznokciowych, należy nałożyć", answers: ["ciemny lakier na całe płytki", "ciemny lakier tylko na środek płytek", "jasny lakier na całe płytki", "jasny lakier z pominięciem obłączków paznokci"], correct: 2 },
    { question: "Preparat, z którym z wymienionych składników aktywnych należy zalecić klientce w celu pojędrnienia skóry biustu w warunkach domowych?", answers: ["Z jonami cynku", "Z jonami srebra", "Z fitohormonami soi", "Z kwasem salicylowym"], correct: 2 },
    { question: "Przygotowując klientkę do wykonania terapii podciśnieniowej labilnej skórę pośladków należy bezpośrednio przed przyłożeniem głowicy", answers: ["przetrzeć środkiem dezynfekującym", "osuszyć ręcznikiem jednorazowym", "posmarować środkiem poślizgowym", "zwilżyć wodą termalną"], correct: 2 },
    { question: "Naświetlanie lampą Sollux z czerwonym filtrem należy wykonać w celu", answers: ["uspokojenia skóry podrażnionej depilacją woskiem", "przyśpieszenia wysychania maski ściągającej", "złagodzenia skutków nadmiernego opalania", "przyspieszenia gojenia miejsc, które wcześniej uległy odmrożeniu"], correct: 2 },
    { question: "Masaż stóp należy wykonywać w kolejności:", answers: ["głaskanie strony grzbietowej, rozcieranie strony podeszwowej, gimnastyka bierna", "gimnastyka bierna, głaskanie strony podeszwowej, rozcieranie strony grzbietowej", "rozcieranie strony grzbietowej, gimnastyka bierna, rozcieranie strony podeszwowej", "rozcieranie strony podeszwowej, gimnastyka bierna, głaskanie strony grzbietowej"], correct: 0 },
    { question: "Przystępując do zabiegu pedicure, czynność usunięcia lakieru z płytki paznokciowej stóp należy wykonać bezpośrednio po", answers: ["masażu", "wymoczeniu", "peelingu", "dezynfekcji"], correct: 3 },
    { question: "W celu przygotowania głowicy dermomasażera do zabiegu należy zastosować metodę niszczenia drobnoustrojów z użyciem", answers: ["środków chemicznych", "ultradźwięków", "promieniowania ultrafioletowego", "pary wodnej"], correct: 0 },
    { question: "Przyjmowanie leków na bazie izotretynoiny jest przeciwwskazaniem do wykonania", answers: ["depilacji cukrowej", "hydromasażu stóp", "kąpieli elektryczno-wodnej", "zabiegu parafinowego"], correct: 0 },
    { question: "U klientki, u której zdiagnozowany został problem tzw. ciężkich nóg należy wykonać zabieg o działaniu", answers: ["zmiękczającym", "drenującym", "wygładzającym", "uelastyczniającym"], correct: 1 },
    { question: "Zużyty do depilacji wosk twardy należy", answers: ["zdezynfekować preparatem alkoholowym", "wyrzucić do kosza na odpady komunalne", "umieścić w pojemniku na odpady medyczne", "poddać procesowi podgrzania i filtracji"], correct: 1 },
    { question: "Klientce z cellulitem na udach i pośladkach należy zalecić w pielęgnacji domowej stosowanie", answers: ["balsamów z kwasem hialuronowym oraz noszenie rajstop uciskowych", "balsamów z ekstraktem z łopianu oraz gimnastykę rozciągającą", "masek z ekstraktem z szałwii oraz kąpieli wirowych stóp w solankach", "peelingów ziarnistych oraz automasaży na bazie emulsji z kofeiną"], correct: 3 },
    { question: "Którą metodę należy zastosować w celu wykonania zabiegu redukującego cellulit tłuszczowy przy użyciu głowicy emitującej ultradźwięki?", answers: ["Brushingu", "Lipolizy", "Koagulacji", "Pulweryzacji"], correct: 1 },
    { question: "Klientce ze skłonnością do pojawiania się opuchnięć w okolicy kostek należy zalecić do stosowania w warunkach domowych moczenie stóp w wodzie z solą o działaniu", answers: ["złuszczającym", "regenerującym", "relaksującym", "normalizującym"], correct: 2 },
    { question: "Klientce z zespołem stopy cukrzycowej leczącej się w poradni diabetologicznej należy zalecić w pielęgnacji domowej", answers: ["mycie stóp w wodzie o temperaturze około 37°C", "kąpiele rozgrzewające stóp", "codzienne, długotrwałe moczenie stóp w ciepłej wodzie", "stosowanie poduszki elektrycznej do rozgrzewania stóp"], correct: 0 },
    { question: "Klientce z problemem szorstkości łokci należy zalecić do stosowania w warunkach domowych kremów", answers: ["z witaminą K", "z witaminą A", "z witaminą B", "z witaminą D"], correct: 1 },
    { question: "Który zabieg należy wykonać klientce z problemem nadmiernej keratynizacji naskórka w obrębie skóry stóp?", answers: ["Limfodrenujący", "Hydromineralny", "Złuszczająco-regenerujący", "Detoksykująco-normalizujący"], correct: 2 },
    { question: "Klientce z objawem tzw. brudnych kolan należy zaproponować w pielęgnacji domowej między innymi stosowanie", answers: ["peelingów solnych", "zimnych okładów", "żeli limfodrenujących", "ciepłych natrysków"], correct: 0 },


    //STYCZEŃ 2024
    { question: "Przeciwwskazaniem do wykonania u klientki zabiegu henny rzęs jest", answers: ["świeża blizna na szyi", "otarcie naskórka w okolicy brwi", "zdiagnozowana krótkowzroczność", "jęczmień powieki górnej"], correct: 3 },
    { question: "Preparaty kosmetyczne zawierające w swoim składzie bisabolol i srebro, zastosowane w zabiegu pielęgnacyjnym, mają działanie", answers: ["natłuszczające", "nawilżające", "antybakteryjne", "odżywcze"], correct: 2 },
    { question: "Dla której cery charakterystyczne jest uczucie pieczenia, mrowienia, ściągania i świądu po zastosowaniu nieodpowiednich kosmetyków lub umyciu twarzy wodą?", answers: ["Dla cery dojrzałej", "Dla cery wrażliwej", "Dla cery mieszanej", "Dla cery tłustej"], correct: 1 },
    { question: "Klientce z blisko osadzonymi oczami należy zalecić, aby podczas makijażu oczu", answers: ["rozjaśniała wewnętrzne kąciki oczu", "przyciemniała wewnętrzne kąciki oczu", "rozjaśniała całe powieki górne", "przyciemniała całe powieki górne"], correct: 0 },
    { question: "W celu wykluczenia przeciwwskazań do przeprowadzenia zabiegu mikrodermabrazji diamentowej, w wywiadzie kosmetycznym należy zapytać między innymi", answers: ["o nadczynność tarczycy", "o łuszczycę", "o rodzaj stosowanej diety", "o obecność elementów metalowych w tkankach"], correct: 1 },
    { question: "Którą metodę dezynfekcji głowicy do sonoforezy należy zastosować przed przystąpieniem do zabiegu?", answers: ["Chemiczno-termiczną", "Termiczną", "Fizyczną", "Chemiczną"], correct: 3 },
    { question: "W celu wykonania zabiegu farbowania brwi klientce o jesiennym typie urody, należy zaproponować hennę w kolorze", answers: ["grafitowym", "brązowym", "granatowym", "ciemnoniebieskim"], correct: 1 },
    { question: "W celu wykonania zabiegu zmniejszającego czynność wydzielniczą gruczołów łojowych, w którym wykorzystuje się prąd wielkiej częstotliwości należy zastosować aparat do", answers: ["galwanizacji", "darsonwalizacji", "kawitacji", "mikrodermabrazji"], correct: 1 },
    { question: "Klientowi z cerą tłustą wskazane jest zaproponowanie zabiegu kosmetycznego o działaniu", answers: ["poprawiającym mikrokrążenie skóry twarzy", "likwidującym obrzęki i zaczerwienienia", "ujędrniająco-dotleniającym", "odżywiająco-detoksykującym"], correct: 0 },
    { question: "W pielęgnacji domowej dojrzałej skóry twarzy należy polecić klientce stosowanie serum zawierającego między innymi:", answers: ["witaminę D, E, ekstrakt z zielonej herbaty i sok z lukrecji", "witaminę A, H, D-pantenol i sole siarki", "witaminę C, B6, wyciąg z arniki górskiej i malwy", "witaminę A, C, olej jojoba i koenzym Q10"], correct: 3 },
    { question: "Bardzo jasna, mleczna, porcelanowa cera, włosy ciemne, tęczówki w kolorze fiołkowoniebieskim, ciemnoniebieskim lub brązowym to charakterystyczne cechy typu kolorystycznego określanego jako", answers: ["zima", "lato", "wiosna", "jesień"], correct: 0 },
    { question: "Który z zabiegów wymaga zabezpieczenia oczu klientki okularami ochronnymi?", answers: ["Mezoterapia", "Fotoodmładzanie", "Sonoforeza", "Elektrostymulacja"], correct: 1 },
    { question: "W celu osiągnięcia w zabiegu efektu nawilżenia należy zastosować preparaty zawierające w swoim składzie", answers: ["garbniki i koenzym Q10", "kaolin i glinkę zieloną", "algi i mukopolisacharydy", "rutynę i elastynę"], correct: 2 },
    { question: "Które cechy są charakterystyczne dla typu kolorystycznego określanego jako jesień?", answers: ["Skóra bladobeżowa, włosy w odcieniu chłodny popielaty blond lub beż, tęczówki szaroniebieskie", "Skóra beżowo-brzoskwiniowa, włosy bursztynowe lub kasztanowe, tęczówki oliwkowe", "Skóra brzoskwiniowa, policzki często zarumienione, włosy w odcieniu ciepły blond, tęczówki niebieskie", "Skóra porcelanowa, włosy bardzo ciemne, tęczówki piwne lub brązowe"], correct: 1 },
    { question: "W celu usunięcia szorstkiego, zrogowaciałego naskórka z twarzy należy zastosować metodę", answers: ["elektrostymulacji", "jonoforezy", "mezoterapii", "oxybrazji"], correct: 3 },
    { question: "W celu wyjałowienia łyżeczki Unny po zabiegu oczyszczania twarzy należy zastosować sterylizację", answers: ["wysokotemperaturową", "niskotemperaturową", "gazową", "radiacyjną"], correct: 0 },
    { question: "W celu przedłużenia trwałości makijażu wskazane jest zastosowanie", answers: ["kamuflażu", "korektora", "podkładu", "bazy"], correct: 3 },
    { question: "Który rodzaj cery ma osoba przejawiająca skłonność do występowania rozszerzonych porów, zaskórników otwartych i zamkniętych w strefie T oraz łuszczenia, uczucia pieczenia i napięcia skóry w pozostałych partiach twarzy?", answers: ["Tłustą", "Mieszaną", "Suchą", "Normalną"], correct: 1 },
    { question: "Który preparat należy nałożyć na skórę twarzy 19-letniej klientki bezpośrednio przed przystąpieniem do wykonywania makijażu dziennego?", answers: ["Maskę odżywczą", "Krem nawilżający", "Krem liftingujący", "Maskę borowinową"], correct: 1 },
    { question: "W celu ukrycia zaczerwień w okolicy skrzydełek nosa należy zaaplikować w miejscu ich wystąpienia na skórę korektor w kolorze", answers: ["zielonym", "żółtym", "fioletowym", "białym"], correct: 0 },
    { question: "Technika upiększania twarzy polegająca na wychodzeniu makijażem poza przestrzeń oka na policzki i szyję oraz dekolt jest charakterystyczna dla makijażu", answers: ["fantazyjnego", "naturalnego", "wieczorowego", "dziennego"], correct: 0 },
    { question: "Efektem oddziaływania na skórę twarzy zabiegu elektrostymulacji jest", answers: ["usunięcie martwych komórek skóry", "zmniejszenie czynności wydzielniczej gruczołów łojowych", "poprawa stanu napięcia mięśni mimicznych", "obkurczenie naczyń krwionośnych"], correct: 2 },
    { question: "W makijażu w celu optycznego zmniejszenia i spłaszczenia danej części twarzy należy stosować kosmetyki", answers: ["ciemne i połyskujące", "jasne i połyskujące", "ciemne i matowe", "jasne i matowe"], correct: 2 },
    { question: "Jednym z efektów oddziaływania na skórę galwanizacji anodowej jest jej działanie", answers: ["łagodzące", "stymulujące", "przekrwienne", "regenerujące"], correct: 0 },
    { question: "Do usuwania osypujących się cieni należy użyć", answers: ["pędzla miotełki", "pędzla kabuki", "pędzelka pacynki", "gąbki lateksowej"], correct: 0 },
    { question: "Którą metodę postępowania z pesetą należy zastosować przed zabiegiem regulacji brwi?", answers: ["Oczyścić chusteczką", "Zdezynfekować wodą utlenioną", "Umyć mydłem antybakteryjnym", "Wysterylizować w autoklawie"], correct: 3 },
    { question: "Podczas wykonywania zabiegu mezoterapii bezigłową głowicę aparatu należy", answers: ["przemieszczać w niewielkiej odległości od powierzchni skóry", "naprzemiennie dotykać i odrywać od powierzchni skóry", "przemieszczać w dużej odległości od powierzchni skóry", "przesuwać ruchami okrężnymi lub spiralnymi po skórze"], correct: 3 },
    { question: "W celu oceny głębokości zmarszczek i gładkości skóry należy zastosować", answers: ["metodę profilometrii", "metodę diaskopii", "badanie z użyciem ewaporometru", "badanie z użyciem ekstensometru"], correct: 0 },
    { question: "Który z peelingów można wykonać metodą masażu manualnego lub z wykorzystaniem brushingu?", answers: ["Scrub", "Ziołowy", "Kwasowy", "Gommage"], correct: 0 },
    { question: "Klientowi z szarą, zmęczoną i niedotlenioną skórą należy zaproponować serię zabiegów", answers: ["normalizujących", "zamykających pory", "uszczelniających naczynia", "detoksykujących"], correct: 3 },
    { question: "Przeciwskazaniami do zabiegu pielęgnacyjnego skóry twarzy z zastosowaniem darsonwalizacji są", answers: ["rozszerzone ujścia gruczołów łojowych i odmrożenia", "osteoporoza i nadczynność tarczycy", "zaskórniki i bliznowce", "teleangiektazje i wszczepy metalowe w ciele"], correct: 3 },
    { question: "W celu regulacji łuku brwiowego u klientki ze skórą dojrzałą należy zastosować metodę depilacji", answers: ["z użyciem pęsety", "woskiem miękkim", "pastą cukrową", "woskiem twardym"], correct: 0 },
    { question: "Wykorzystując do diagnozy skóry twistometr, dokonuje się oceny jej", answers: ["elastyczności", "nawilżenia", "przetłuszczenia", "kolorytu"], correct: 0 },
    { question: "Klientce z licznymi zmarszczkami wokół oczu należy zalecić w warunkach domowych stosowanie między innymi", answers: ["okładów z miłorzębu i świetlika", "kremów z kolagenem i elastyną", "żeli ze świetlikiem i rumiankiem", "masek z kopru włoskiego i arniki"], correct: 1 },
    { question: "W celu uzyskania optycznego powiększenia małych oczu należy nałożyć", answers: ["na wewnętrzne kąciki jasny cień", "na całe powieki ruchome ciemny cień", "na wewnętrzne kąciki ciemny cień", "na całe powieki ruchome jasny cień"], correct: 3 },
    { question: "Przed przystąpieniem do wykonywania makijażu pędzel do nakładania podkładu należy", answers: ["umyć w wodzie z mydłem i zdezynfekować", "zanurzyć w spirytusie salicylowym", "wysterylizować w autoklawie", "umyć pod bieżącą wodą i wysterylizować"], correct: 0 },
    { question: "Przed zabiegiem mikrodermabrazji korundowej skórę klienta należy zmyć, zdezynfekować, a następnie", answers: ["naświetlić promieniami ultrafioletowymi", "natłuścić kremem ochronnym", "nanieść na nią żel obojętny", "dokładnie osuszyć"], correct: 3 },
    { question: "W makijażu biały korektor w kompakcie należy zastosować w celu", answers: ["ukrycia przebarwień na skórze twarzy", "kamuflażu teleangiektazji", "zatuszowania sińców pod oczami", "rozświetlenia skóry twarzy"], correct: 3 },
    { question: "Przeciwwskazaniem do wykonania makijażu kamuflującego skóry twarzy jest", answers: ["opryszczka wargowa", "blizna potrądzikowa", "ostuda", "cukrzyca"], correct: 0 },
    { question: "W zabiegu darsonwalizacji należy posłużyć się aparatem", answers: ["z pelotą szklaną", "z głowicą diamentową", "z głowicą ultradźwiękową", "z elektrodą wałeczkową"], correct: 0 },
    

    //CZERWIEC 2023 2
    { question: "U klienta z cerą naczyniową w zabiegach fizykalnych nie należy stosować", answers: ["sonoforezy", "peelingu kawitacyjnego", "darsonwalizacji", "jonoforezy"], correct: 2 },
    { question: "Która technika masażu polega na ucisku fałdu skóry, zwolnieniu i przesunięciu rąk?", answers: ["Oklepywanie", "Rozcieranie", "Ugniatanie", "Głaskanie"], correct: 2 },
    { question: "Czego nie należy stosować do regulacji łuku brwiowego w przypadku skóry dojrzałej i wiotkiej?", answers: ["Nitki", "Trymera", "Pęsety", "Wosku"], correct: 3 },
    { question: "Klientce z cerą dojrzałą do domowej pielęgnacji należy polecić stosowanie kremu z wysoką zawartością", answers: ["wyciągu z aloesu", "koenzymu Q10", "srebra koloidalnego", "alantoiny"], correct: 1 },
    { question: "Który preparat należy zastosować w celu nadania skórze jednolitego koloru?", answers: ["Bazę", "Kamuflaż", "Puder", "Podkład"], correct: 3 },
    { question: "Do usuwania sztucznych rzęs metodą 1:1 należy posłużyć się", answers: ["płynem micelarnym", "removerem", "śmietanką kosmetyczną", "oliwką"], correct: 1 },
    { question: "Który rodzaj peelingu mechanicznego należy zastosować w pielęgnacji skóry naczyniowej?", answers: ["Mikrodermabrazję", "Brusching", "Dermabrazję", "Oxybrazję"], correct: 3 },
    { question: "Którą metodę należy zastosować w celu złuszczenia martwych komórek naskórka?", answers: ["Sonoforezy", "Brushingu", "Jonoforezy", "Mezoterapii"], correct: 1 },
    { question: "Zastosowanie na skórze twarzy klientki pre peelu przed planowanym zabiegiem peelingu chemicznego ma na celu", answers: ["zdezynfekowanie skóry", "natłuszczenie skóry", "tonizowanie skóry", "odtłuszczenie skóry"], correct: 3 },
    { question: "Który prąd wykorzystywany jest podczas wykonywania zabiegu darsonwalizacji w gabinecie kosmetycznym?", answers: ["Stały", "Impulsowy", "Diadynamiczny", "Zmienny"], correct: 3 },
    { question: "Rumień fotochemiczny występuje podczas zabiegów kosmetycznych z zastosowaniem", answers: ["promieniowania UV", "promieniowania IR", "prądu stałego", "prądu zmiennego"], correct: 0 },
    { question: "Które z podanych preparatów należy zastosować podczas wykonywania młodej klientce z widocznymi teleangiektazjami makijażu wieczorowego?", answers: ["Żółty korektor i fluid matujący", "Biały korektor i fluid liftingujący", "Fioletowy korektor i fluid nawilżający", "Zielony korektor i fluid kryjący"], correct: 3 },
    { question: "Działanie zmniejszające kruchość włosowatych naczyń krwionośnych w preparatach do cery naczyniowej wykazuje", answers: ["zielona herbata", "arnika górska", "olej macadamia", "chlorella"], correct: 1},
    { question: "Jeżeli klientka ma cerę atroficzną, to należy doradzić jej wykonywanie demakijażu twarzy", answers: ["mleczkiem kosmetycznym", "żelem antybakteryjnym", "wodą z mydłem", "płynem micelarnym"], correct: 0 },
    { question: "Przeciwwskazaniem do wykonania u klientki zabiegu henny rzęs jest", answers: ["świeża blizna na szyi", "jęczmień powieki górnej", "otarcie naskórka w okolicy brwi", "zdiagnozowana krótkowzroczność"], correct: 1 },
    { question: "Który zespół objawów jest charakterystyczny dla trądziku różowatego?", answers: ["Grudki, krostki, zaskórniki", "Krostki, grudki, teleangiektazje", "Guzki, guzy, zaskórniki", "Krostki, guzy, przetoki"], correct: 1 },
    { question: "Klientce z opadającymi kącikami ust należy zaproponować", answers: ["obrysowanie ust nad czerwienią wargową", "obrysowanie ust po wewnętrznym obrysie czerwieni wargowej", "obrysowanie ust lekko powyżej ich kącików", "zaznaczenie łuku Kupidyna na wargach"], correct: 2 },
    { question: "Do wyjałowienia głowicy przed zabiegiem mikrodermabrazji diamentowej należy zastosować sterylizację", answers: ["tlenkiem etylenu", "kwasem nadoctowym", "parą wodną pod ciśnieniem", "formaldehydem"], correct: 2 },
    { question: "Którą elektrodę należy zastosować w zabiegu przeciwłojotokowym skóry twarzy z zastosowaniem prądów d'Arsonvala?", answers: ["Łukową", "Wałeczkową", "Grzebieniową", "Grzybkową"], correct: 3 },
    { question: "Do aplikacji różu przeznaczony jest pędzel", answers: ["ostro zakończony", "zakończony na prosto, płaski", "w kształcie wachlarza", "miękki, skośny na końcu"], correct: 3 },
    { question: "W celu optycznego skorygowania twarzy klientki w kształcie gruszki, podczas modelowania należy", answers: ["przyciemnić kości żuchwy", "nałożyć róż poziomo do linii ucha", "rozjaśnić kości żuchwy", "przyciemnić skórę czoła przy linii włosów"], correct: 0 },
    { question: "Którym urządzeniem należy posłużyć się w celu określenia stopnia transepidermalnej utraty wody przez naskórek?", answers: ["Kutometrem", "Twistometrem", "Pehametrem", "Ewaporymetrem"], correct: 3 },
    { question: "W makijażu oczu u osoby noszącej okulary z powodu dalekowzroczności wskazane jest stosowanie cieni", answers: ["satynowych", "brokatowych", "perłowych", "opalizujących"], correct: 0 },
    { question: "Stosując ultradźwięki jako środek do odkażania narzędzi, wykorzystuje się metodę dezynfekcji", answers: ["fizycznej", "chemicznej", "chemiczno-termicznej", "termicznej"], correct: 0 },
    { question: "Naświetlanie skóry lampą Sollux z filtrem czerwonym podczas wykonywania zabiegów kosmetycznych", answers: ["łagodzi teleangiektazje", "zmniejsza wydzielanie łoju", "łagodzi trądzik różowaty", "przyspiesza wchłanianie substancji odżywczych"], correct: 3 },
    { question: "Do aplikacji na twarz podkładu metodą natryskową należy zastosować", answers: ["aerograf", "brązer", "kajal", "fix-up"], correct: 0 },
    { question: "Przeciwwskazaniem do wykonania waponizacji w zabiegu kosmetycznym są występujące na twarzy klienta", answers: ["teleangiektazje", "rozszerzone pory skóry", "prosaki", "zaskórniki"], correct: 0 },
    { question: "Roślinne związki biologicznie aktywne o właściwościach przeciwutleniających i uszczelniających naczynia krwionośne to", answers: ["śluzy", "garbniki", "azuleny", "flawonoidy"], correct: 3 },
    { question: "Cechami charakterystycznymi której cery jest brak elastyczności, regres tkanki tłuszczowej i stopniowy zanik przydatków skóry?", answers: ["Tłustej", "Suchej", "Wrażliwej", "Atroficznej"], correct: 3 },
    { question: "Cera w odcieniu ciepłym beżowym, często rumieniące się policzki, włosy w odcieniu złocistego blondu, tęczówki niebieskie. Którego typu kolorystycznego dotyczy podany opis?", answers: ["Lata", "Jesieni", "Zimy", "Wiosny"], correct: 3 },
    { question: "Na czym polega makijaż oczu z efektem flash?", answers: ["Na nadaniu cieniem kształtu banana w załamaniu powiek i dolnej linii rzęs", "Na użyciu jednego koloru cienia i rozświetleniu środka powiek ruchomych", "Na aplikacji cienia w ciemnym kolorze na całych powiekach ruchomych", "Na modelowaniu powiek kilkoma kolorami"], correct: 1 },
    { question: "Którą czynność należy wykonać przed wykonaniem na skórze twarzy klientki zabiegu z zastosowaniem prądu stałego?", answers: ["Usunąć metalowe przedmioty z pola zabiegowego", "Zabezpieczyć oczy klientki okularami ochronnymi", "Nanieść olejek na skórę twarzy klientki", "Zaaplikować krem natłuszczający na skórę twarzy"], correct: 0 },
    { question: "Korektorem w jakim kolorze należy korygować fioletowe zasinienia pod oczami?", answers: ["Zielonym", "Żółtym", "Niebieskim", "Białym"], correct: 1 },
    { question: "O co należy zapytać w wywiadzie kosmetycznym w celu wykluczenia przeciwwskazań do przeprowadzenia zabiegu mikrodermabrazji diamentowej?", answers: ["O stosowaną dietę", "O obecność elementów metalowych w tkankach", "O grubość naskórka", "O występowanie łuszczycy"], correct: 3 },
    { question: "Metodą profilometrii z użyciem odcisku silikonowego należy posłużyć się podczas oceny", answers: ["natłuszczenia skóry", "odczynu skóry", "nawilżenia skóry", "gładkości skóry"], correct: 3 },
    { question: "Przed przystąpieniem do wykonywania makijażu pędzel do nakładania podkładu należy", answers: ["umyć pod bieżącą wodą i wysterylizować", "umyć w wodzie z mydłem i zdezynfekować", "zanurzyć w spirytusie salicylowym", "wysterylizować w autoklawie"], correct: 1},
    { question: "Które działanie ma zawarta w składzie pudru sypkiego skrobia ryżowa?", answers: ["Matujące", "Natłuszczające", "Antyoksydacyjne", "Odżywcze"], correct: 0 },
    { question: "Korektor w jakim kolorze należy zastosować w celu korekty ziemistej, przyżółconej cery palacza?", answers: ["Zielonym", "Niebieskim", "Fioletowym", "Żółtym"], correct: 2 },
    { question: "Które zjawisko jest wykorzystywane podczas zabiegów laserowego usuwania owłosienia na twarzy?", answers: ["Elektroporacji", "Fototermolizy", "Mechanotransdukcji", "Kawitacji"], correct: 1 },
    { question: "19-letniej klientce z cerą naczyniową należy zaproponować wykonanie w gabinecie serii zabiegów", answers: ["ściągająco-normalizujących", "wyciszająco-nawilżających", "regeneracyjno-liftingujących", "dotleniająco-modelujących"], correct: 1 },

    
    //STYCZEN 2023
    { question: "Bezpośrednio przed zabiegiem przyklejania kępek rzęs pęsetę należy poddać dezynfekcji", answers: ["chemicznej", "chemiczno-termicznej", "termicznej", "radiacyjnej"], correct: 0 },
    { question: "Najdłużej utrzymujący się efekt usunięcia owłosienia z twarzy daje depilacja", answers: ["pastą cukrową", "woskiem miękkim", "laserem diodowym", "kremem do depilacji"], correct: 2 },
    { question: "Do charakterystycznych cech skóry wrażliwej zalicza się między innymi", answers: ["świecenie i lepkość w dotyku", "wiotkość i skłonność do przebarwień", "napięcie i swędzenie", "cienki naskórek i skłonność do łuszczenia"], correct: 2 },
    { question: "Klientowi z objawami acne vulgaris należy zaproponować zabieg", answers: ["wybielający", "sebostatyczny", "liftingujący", "termomodelujący"], correct: 1 },
    { question: "W celu ukrycia fioletowych zasinień pod oczami należy zastosować korektor o barwie", answers: ["różowej", "zielonej", "żółtej", "fioletowej"], correct: 2 },
    { question: "Do pielęgnacji domowej cery atroficznej należy zalecić stosowanie preparatów z zawartością", answers: ["kaolinu", "ekstraktu z pokrzywy", "glinki zielonej", "ekstraktu z alg brunatnych"], correct: 3 },
    { question: "Przeciwwskazaniem do wykonania makijażu oczu metodą smokey eye jest", answers: ["zespół suchego oka", "świeża blizna pod brwią", "obecność prosaków", "zasiniona powieka"], correct: 1 },
    { question: "Do zdezynfekowania stanowiska kosmetycznego przed planowanym zabiegiem należy wybrać metodę", answers: ["termiczną", "radiacyjną", "chemiczną", "chemiczno-termiczną"], correct: 2 },
    { question: "Do oceny poziomu natłuszczenia skóry przeznaczony jest", answers: ["twistometr", "korneometr", "sebumetr", "ewaporymetr"], correct: 2 },
    { question: "Białe, drobne punkciki umiejscowione pod naskórkiem najczęściej na powiekach i policzkach, to", answers: ["piegi", "prosaki", "kaszaki", "zaskórniki"], correct: 1 },
    { question: "Przeciwwskazaniem do zabiegu naświetlania promieniowaniem UV w solarium jest", answers: ["łupież łojotokowy", "cukrzyca", "łuszczyca", "łysienie plackowate"], correct: 1 },
    { question: "Klientka o ciepłym beżowobrzoskwiniowym odcieniu skóry, włosach z rudawymi refleksami i szarobrązowych oczach reprezentuje typ kolorystyczny", answers: ["lato", "wiosna", "zima", "jesień"], correct: 3 },
    { question: "Metodą, która pozwoli ocenić poziom wrażliwości skóry jest", answers: ["dermografizm", "profilometria pośrednia", "diaskopia", "profilometria bezpośrednia"], correct: 0 },
    { question: "Do zabiegu jonoforezy metodą stabilną należy zastosować", answers: ["elektrodę Bergoniego", "elektrodę wałeczkową", "szklaną pelotę", "głowicę labilną"], correct: 0 },
    { question: "W wyniku naświetlania promieniami UV na skórze powstaje rumień", answers: ["cieplny", "galwaniczny", "termiczny", "fotochemiczny"], correct: 3 },
    { question: "Udzielając mężczyźnie porady pielęgnacyjnej dotyczącej tłustej skóry twarzy należy zaproponować między innymi stosowanie kosmetyków o działaniu", answers: ["mocno wysuszającym i ściągającym skórę", "likwidującym przebarwienia skóry", "silnie natłuszczającym skórę", "zmniejszającym grubość warstwy rogowej"], correct: 3 },
    { question: "Wykonując makijaż klientce, biały korektor należy użyć w celu", answers: ["ukrycia mankamentów", "rozświetlenia skóry twarzy", "utrwalenia podkładu", "konturowania oczu"], correct: 1 },
    { question: "Makijaż oczu u klientki z dalekowzrocznością noszącej okulary należy wykonać", answers: ["cieniami opalizującymi", "wyraziście z mocną kreską", "w kolorach pastelowych", "cieniami perłowymi"], correct: 2 },
    { question: "Którą metodę należy zastosować w celu oceny gładkości skóry i głębokości zmarszczek klientki?", answers: ["Korneometrii", "Profilometrii", "Sebumetrii", "Diaskopii"], correct: 1},
    { question: "Który zabieg wymaga w trakcie jego wykonywania ciągłego zwilżania skóry twarzy wodą, roztworem wodnym chlorku sodu lub tonikiem bezalkoholowym?", answers: ["Mezoterapia", "Kawitacja", "Termoliza", "Elektrostymulacja"], correct: 1 },
    { question: "Przed zabiegiem darsonwalizacji należy skórę zmyć, a następnie", answers: ["osuszyć", "natłuścić", "nawilżyć kremem", "pokryć żelem"], correct: 0 },
    { question: "Kosmetyczka bezpośrednio przed przystąpieniem do zabiegu mikrodermabrazji powinna bezwzględnie", answers: ["założyć czepek ochronny na włosy", "nałożyć rękawiczki bawełniane", "ubrać się w fartuch jednorazowy", "założyć rękawiczki jednorazowe"], correct: 3 },
    { question: "Użyte do zabiegu mikrodermabrazji głowice należy", answers: ["umyć w wodzie z mydłem", "wysterylizować w autoklawie", "zdezynfekować w sanityzatorze", "pozostawić do zaschnięcia i oczyścić szczoteczką"], correct: 1 },
    { question: "Przeprowadzając zabieg pielęgnacyjny na skórze palacza należy zastosować preparaty mające w swoim składzie", answers: ["wyciągi z łopianu i lawendy", "spirulinę i kwas glikolowy", "glinkę zieloną i wyciąg z pokrzywy", "garbniki i ceramidy"], correct: 1 },
    { question: "Klientce z cerą atroficzną należy zaproponować między innymi zabieg", answers: ["odżywczy", "dotleniający", "oczyszczający", "normalizujący"], correct: 0 },
    { question: "Przeciwwskazaniem do wykonania air brushingu jest", answers: ["opryszczka", "tłusta skóra", "ostuda", "sucha skóra"], correct: 0 },
    { question: "Kosmetyczną elektrodę wałeczkową przed przystąpieniem wykonania zabiegu należy", answers: ["wymyć mydłem i wodą", "wysterylizować w autoklawie", "poddać sterylizacji radiacyjnej", "przetrzeć preparatem do dezynfekcji narzędzi"], correct: 3 },
    { question: "Pędzelka w kształcie kulki należy użyć do", answers: ["aplikacji pomadki", "rysowania kreski", "aplikacji cieni", "nakładania korektora"], correct: 2 },
    { question: "Maskę termoaktywną na twarz należy nałożyć bezpośrednio na", answers: ["zwilżoną skórę", "wilgotny kompres", "suchy kompres", "suchą skórę"], correct: 1 },
    { question: "W celu obkurczenia i wzmocnienia ścian naczyń krwionośnych w zabiegu jonoforezy stabilnej stosuje się", answers: ["jony cynku", "jony miedzi", "kwas askorbinowy", "sodę oczyszczoną"], correct: 2},
    { question: "Naświetlanie promieniowaniem UV należy zaproponować klientce z problemem", answers: ["teleangiektazji", "znamion", "ostudy", "łuszczycy"], correct: 3 },
    { question: "Przeciwwskazaniem do wykonania farbowania brwi i rzęs między innymi są", answers: ["świeżo wydepilowane brwi", "liczne teleangiektazje", "cienkie rzęsy", "przebarwienia"], correct: 0 },
    { question: "Przed nałożeniem henny na rzęsy należy", answers: ["wykonać regulację łuku brwiowego", "przeprowadzić farbowanie brwi", "podłożyć pod rzęsy natłuszczony podkład", "zdezynfekować skórę twarzy"], correct: 2 },
    { question: "W makijażu fikser należy zastosować w celu", answers: ["kamuflażu sińców pod oczami", "utrwalenia makijażu", "rozświetlenia makijażu", "przyciemnienia konturów twarzy"], correct: 1 },
    { question: "Aerografu należy użyć w celu wykonania klientce", answers: ["epilacji", "peelingu", "face paintingu", "pomiaru odczynu pH skóry"], correct: 2 },
    { question: "Przed wykonaniem po raz pierwszy u klientki zabiegu farbowania brwi i rzęs, należy przeprowadzić", answers: ["ocenę zabarwienia skóry", "regulację brwi", "test płatkowy", "natłuszczenie skóry twarzy"], correct: 2 },
    { question: "W modelowaniu oczu głęboko osadzonych należy", answers: ["obrysować oczy czarną kredką", "nałożyć ciemny cień pod liniami brwi", "przyciemnić powieki górne, ruchome", "rozjaśnić powieki górne, ruchome"], correct: 3 },
    { question: "W celu rozszerzenia ujść gruczołów łojowych i rozpulchnienia cery tłustej należy zastosować maskę", answers: ["gipsową", "parafinową", "alginatową", "peel-off"], correct: 1 },
    { question: "Klientce z dużymi, wypukłymi oczami należy zaproponować używanie cieni", answers: ["perłowych", "matowych", "brokatowych", "opalizujących"], correct: 1 },


    //STYCZEŃ 2023 2
    { question: "Klientce z cellulitem wskazane jest wykonanie", answers: ["kriolipolizy", "dezinkrustacji", "termolizy", "darsonwalizacji"], correct: 0 },
    { question: "Do wypolerowania powierzchni naturalnej płytki paznokciowej należy zastosować frez", answers: ["stalowy", "korundowy", "diamentowy", "filcowy"], correct: 3 },
    { question: "Klientowi z problemem nadmiernej potliwości stóp, należy zalecić moczenie stóp w naparze", answers: ["z chabra i krwawnika", "z lipy i prawoślazu", "z nagietka i arniki", "z szałwii i pokrzywy"], correct: 3 },
    { question: "Klientce, która przyszła na zdobienie paznokci lakierożelem światłoutwardzalnym należy wykonać manicure", answers: ["hybrydowy", "biologiczny", "japoński", "klasyczny"], correct: 0 },
    { question: "Klientce z problemem suchej i pękającej skóry na piętach należy zalecić stosowanie preparatów zawierających między innymi", answers: ["ekstrakty z nagietka i szałwii", "wyciągi z kasztanowca i arniki", "wyciągi z lawendy i miłorzębu", "oligopeptydy i prowitaminę B5"], correct: 3 },
    { question: "Manicure biologiczny należy wykonać w kolejności:", answers: ["odepchnięcie skórek, zmycie lakieru, nałożenie oliwki na skórki, opiłowanie paznokci, odtłuszczenie płytki, lakierowanie", "odtłuszczenie płytki, odepchnięcie skórek, zmycie lakieru, opiłowanie paznokci, lakierowanie, nałożenie removera na skórki", "zmycie lakieru, opiłowanie paznokci, nałożenie removera, odepchnięcie skórek, odtłuszczenie płytki, lakierowanie, nałożenie oliwki na skórki", "nałożenie removera, odepchnięcie skórek, opiłowanie paznokci, lakierowanie, nałożenie oliwki na skórki, odtłuszczenie płytki"], correct: 2 },
    { question: "Klientce z problemem odparzonych stóp należy polecić w pielęgnacji domowej stosowanie", answers: ["kąpieli ziołowej z kory dębu", "plastrów na nagniotki", "maski kaolinowej", "peelingu enzymatycznego"], correct: 0 },
    { question: "Klientce z otyłością ramion należy zalecić do pielęgnacji domowej", answers: ["złuszczanie skóry peelingami solnymi", "stosowanie na skórę preparatów z witaminą A", "wmasowywanie w skórę preparatów na bazie alg morskich", "kąpiel całego ciała w wodzie z dodatkiem oliwy i soku z cytryny"], correct: 2 },
    { question: "Szklaną pelotę przed zabiegiem darsonwalizacji należy", answers: ["przetrzeć wilgotną gazą", "wysterylizować w autoklawie", "poddać działaniu gorącego powietrza", "zdezynfekować preparatem chemicznym"], correct: 3 },
    { question: "Zabieg manicure’u na ciepło należy wykonać w kolejności:", answers: ["odsunięcie skórek, nałożenie maski odżywczej, diagnoza, zmycie lakieru, masaż", "opiłowanie paznokci, kąpiel paznokci, odsunięcie skórek, diagnoza, zmycie lakieru", "zmycie lakieru, diagnoza, opiłowanie paznokci, odsunięcie skórek, kąpiel paznokci", "kąpiel paznokci, opiłowanie paznokci, nałożenie maski, zmycie lakieru"], correct: 2 },
    { question: "Klientce z zespołem stopy cukrzycowej leczącej się w poradni diabetologicznej należy zalecić w pielęgnacji domowej", answers: ["stosowanie środków chemicznych rozpuszczających modzele", "kąpiele rozgrzewające stóp", "stosowanie poduszki elektrycznej do rozgrzewania stóp", "mycie stóp w wodzie o temperaturze około 37°C"], correct: 3 },
    { question: "W celu naniesienia na paznokcie wzorów z wykorzystaniem płytki zaprezentowanej na zamieszczonej ilustracji należy posłużyć się", answers: ["stemplem", "pędzlem", "gąbką", "pęsetą"], correct: 0 },
    { question: "W pielęgnacji domowej stóp z tendencją do pękania skóry pięt, należy polecić stosowanie do kąpieli sól zawierającą w składzie", answers: ["wyciąg z kasztanowca", "ekstrakt z guarany", "związki srebra", "kamforę"], correct: 2 },
    { question: "W zabiegu manicure’u pielęgnacyjno-upiększającym paznokcie należy pomalować", answers: ["po zdjęciu maski parafinowej", "przed nałożeniem maski parafinowej", "przed odepchnięciem i wycięciem skórek", "bezpośrednio po opiłowaniu paznokci"], correct: 0 },
    { question: "Zużyte podczas usuwania zaskórników igły należy", answers: ["wyrzucić do kosza na odpady zmieszane", "zdezynfekować preparatem alkoholowym", "umieścić w pojemniku na odpady medyczne", "poddać procesowi sterylizacji"], correct: 2 },
    { question: "W celu usunięcia komórek tłuszczowych z okolicy pośladków klientki należy zastosować aparat do", answers: ["lipolizy ultradźwiękowej", "mikrodermabrazji", "presoterapii", "elektrostymulacji"], correct: 0 },
    { question: "W celu diagnozy poziomu nawilżenia skóry biustu u klientki należy zastosować", answers: ["korneometr", "dermatoskop", "profilometr", "ekstensometr"], correct: 0 },
    { question: "Wykonując zabieg naświetlania lampą Sollux, stosuje się", answers: ["promieniowanie podczerwone", "promieniowanie UVA", "promieniowanie UVB", "promieniowanie laserowe"], correct: 0 },
    { question: "W celu wypolerowania powierzchni płytki paznokciowej należy użyć pilnika o gradacji", answers: ["120", "180", "100", "400"], correct: 3 },
    { question: "W zabiegu limfodrenującym na stopy należy zastosować maskę", answers: ["z kwasami AHA", "z glinką zieloną", "algową plastyczną", "borowinową"], correct: 2 },
    { question: "Cążki użyte do wykonania zabiegu manicure należy poddać sterylizacji", answers: ["w autoklawie parowym", "w sanityzatorze UV", "w sterylizatorze kulkowym", "w wanience dezynfekcyjnej"], correct: 0 },
    { question: "Klientce z objawami okołomieszkowego rogowacenia skóry ramion należy zalecić do stosowania w domu preparat z zawartością", answers: ["witaminy A", "witaminy F", "witaminy H", "witaminy K"], correct: 0 },
    { question: "Przed wykonaniem zabiegu endermologii na ciało klientki należy bezwzględnie", answers: ["nanieść na ciało klientki żel sprzęgający", "wykonać klientce peeling drobnoziarnisty", "poprosić klientkę o założenie specjalnego kostiumu", "przygotować podkłady bezpośrednie"], correct: 2 },
    { question: "Uczulenie na światło słoneczne jest przeciwwskazaniem do wykonania", answers: ["krioterapii", "helioterapii", "hydroterapii", "presoterapii"], correct: 1 },
    { question: "Do wykonania zabiegu pielęgnacyjnego na stopach z nadmierną potliwością wskazane są preparaty zawierające", answers: ["olej jojoba", "olejek z kory cynamonu", "olej winogronowy", "olejek z szałwii lekarskiej"], correct: 3 },
    { question: "W zabiegu, którego celem jest wspomaganie terapii antycellulitowej przy użyciu prądów impulsowych, należy zastosować", answers: ["lipomasażer", "elektrostymulator", "dermomasażer", "galwan"], correct: 1 },
    { question: "Klientce z problemem pobruzdowanych, łamliwych paznokci należy wykonać manicure", answers: ["frezarkowy", "klasyczny", "hybrydowy", "japoński"], correct: 3 },
    { question: "W celu wykonania manualnego drenażu limfatycznego należy zastosować techniki:", answers: ["głaskania, ucisków, oklepywania", "głaskania, rozcierania, wibracji", "głaskania, rozcierania, ucisków", "głaskania, ugniatania, wstrząsania"], correct: 2 },
    { question: "Przeciwwskazaniem do wykonania masażu bańką chińską jest zdiagnozowanie u klienta", answers: ["rozstępów", "nadwagi i cellulitu", "kruchości naczyń krwionośnych", "stanów zapalnych mięśni i stawów"], correct: 2},
    { question: "W zdobieniu paznokci typu chevron french, na wolny brzeg paznokcia nakłada się biały lakier w kształcie", answers: ["litery C", "litery U", "litery V", "litery L"], correct: 2 },
    { question: "Wykonując zabieg relaksacyjny całego ciała, wskazane jest zastosowanie masażu", answers: ["kamieniami", "Jacqueta", "izometrycznego", "limfatycznego"], correct: 0 },
    { question: "W celu zmniejszenia obrzęków okolicy stóp zaleca się stosowanie kosmetyków zawierających w składzie między innymi", answers: ["wyciąg z arniki i kasztanowca", "bromelainę i tiaminę", "wyciąg z pokrzywy i kory dębu", "mocznik i bisabolol"], correct: 0 },
    { question: "Przeciwwskazaniem do zabiegu presoterapii jest", answers: ["obrzęk pourazowy", "ociężałość stóp", "niewydolność oddechowa", "cellulit wodny"], correct: 2 },
    { question: "Do wyjałowienia cążek po zabiegu manicure należy zastosować sterylizację", answers: ["radiacyjną", "niskotemperaturową", "wysokotemperaturową", "gazową"], correct: 2 },
    { question: "W celu przygotowania skóry do terapii podciśnieniowej metodą labilną należy", answers: ["usunąć owłosienie woskiem cukrowym", "nanieść na skórę żel sprzęgający", "zwilżyć powierzchnię zabiegową wodą", "nanieść na skórę środek poślizgowy"], correct: 3 },
    { question: "W zabiegu podnoszącym biust należy zastosować maskę", answers: ["z kwasem hialuronowym", "z siarczanem wapnia", "z allantoiną", "z aloesem"], correct: 1 },
    { question: "Masaż dłoni i przedramienia należy wykonywać w kolejności:", answers: ["rozcieranie, głaskanie, oklepywanie", "głaskanie, rozcieranie, ugniatanie", "głaskanie, ugniatanie, rozcieranie", "oklepywanie, głaskanie, rozcieranie"], correct: 1 },
    { question: "Klientce z kwadratową płytką paznokciową należy wysmuklić optycznie paznokcie poprzez", answers: ["podpiłowanie boków z zaokrągleniem i polakierowanie paznokci z marginesami po bokach", "opiłowanie na krótko i pomalowanie paznokci z pominięciem obłączka", "nadanie kształtu trójkąta i pomalowanie paznokci lakierem perłowym", "nadanie kształtu migdała i pomalowanie paznokci we wzory geometryczne"], correct: 0 },
    { question: "Ruch głaskania w masażu stopy po rozprowadzeniu preparatu należy rozpocząć od", answers: ["głaskania strony podeszwowej stopy od nasady palców do krawędzi pięty", "głaskania strony grzbietowej i podeszwowej każdego palca po kolei w kierunku serca", "głaskania ścięgna Achillesa w kierunku serca", "głaskania bocznych stron stopy oburącz jednocześnie od nasady palców w kierunku pięty"], correct: 1 },
    { question: "Do wprowadzenia substancji aktywnych w głąb tkanek z wykorzystaniem zjawiska elektroporacji należy posłużyć się aparatem do", answers: ["kawitacji", "brashingu", "jonoforezy", "mezoterapii"], correct: 3 }

    
    //CZERWIEC 2022



    //{ question: "", answers: ["", "", "", ""], correct: 3 },
];

// Function to shuffle questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Variables for the quiz
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;
let answers = []; // to keep track of user's answers

// Function to start the quiz
function startQuiz(mode) {
    document.getElementById('start-screen').style.display = 'none';
    if (mode === 40) {
        shuffleArray(questions);
        selectedQuestions = questions.slice(0, 40);
        totalQuestions = 40;
        console.log("Selected questions: ", selectedQuestions); // Debugging
        document.getElementById('quiz').style.display = 'block';
        showQuestion();
    } else {
        selectedQuestions = questions;
        totalQuestions = questions.length;
        console.log("All questions: ", selectedQuestions); // Debugging
        document.getElementById('all-questions').style.display = 'block';
        showAllQuestions();
    }
}

// Function to show a single question
function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    console.log("Showing question: ", currentQuestion); // Debugging
    if (currentQuestion) {
        questionElement.innerHTML = `<strong>${currentQuestionIndex + 1} :</strong> ${currentQuestion.question}`;
        answerButtons.forEach((button, index) => {
            button.innerText = currentQuestion.answers[index];
            button.disabled = false;
            button.classList.remove('selected', 'correct', 'wrong'); // Reset classes
            if (answers[currentQuestionIndex] !== undefined) {
                button.disabled = true;
                if (index === answers[currentQuestionIndex]) {
                    button.classList.add('selected');
                }
                if (index === currentQuestion.correct) {
                    button.classList.add('correct');
                } else if (index === answers[currentQuestionIndex] && index !== currentQuestion.correct) {
                    button.classList.add('wrong');
                }
            }
        });
        // Show/hide previous button
        document.getElementById("prev-btn").style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
        // Change next button to finish button on last question
        document.getElementById("next-btn").innerText = currentQuestionIndex === totalQuestions - 1 ? 'Zakończ test' : 'Następne pytanie';
    }
}

// Function to handle answer selection
function selectAnswer(index) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((button, btnIndex) => {
        button.disabled = true;
        if (btnIndex === index) {
            button.classList.add('selected');
        }
        if (btnIndex === currentQuestion.correct) {
            button.classList.add('correct');
        } else if (btnIndex === index && btnIndex !== currentQuestion.correct) {
            button.classList.add('wrong');
        }
    });
    answers[currentQuestionIndex] = index; // Save user's answer
    if (index === currentQuestion.correct) {
        score++;
    }
}

// Function to go to the next question or show the result
function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult(); // Show final result
    }
}

// Function to go to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Function to show the final result
function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = score;
    document.getElementById("total-questions").innerText = totalQuestions;
}

// Function to show all questions at once
function showAllQuestions() {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    selectedQuestions.forEach((question, questionIndex) => {
        console.log("Displaying question: ", question); // Debugging
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('full-question');
        const questionText = document.createElement('h3');
        questionText.innerHTML = `<strong>${questionIndex + 1}.</strong> ${question.question}`;
        questionDiv.appendChild(questionText);
        const answersList = document.createElement('ul');
        answersList.classList.add('answers');
        question.answers.forEach((answer, answerIndex) => {
            const answerItem = document.createElement('li');
            answerItem.innerText = answer;
            answerItem.classList.add('answer');
            if (answerIndex === question.correct) {
                answerItem.classList.add('correct');
            }
            answersList.appendChild(answerItem);
        });
        questionDiv.appendChild(answersList);
        questionsList.appendChild(questionDiv);
    });
}

// Function to go back to the menu
function goBackToMenu() {
    // Hide all sections except the start menu
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('all-questions').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    answers = []; // Clear user's answers
}

