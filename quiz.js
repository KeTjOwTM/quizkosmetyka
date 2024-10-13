// Tablica z pytaniami i odpowiedziami
const questions = [
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
    //{ question: "", answers: ["", "", "", ""], correct: 3 },
];

// Funkcja losująca pytania
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Zmienna przechowująca wybrane pytania
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;

// Funkcja rozpoczynająca quiz
function startQuiz(mode) {
    // Ukryj ekran startowy
    document.getElementById('start-screen').style.display = 'none';
    if (mode === 40) {
        // Losuj 40 pytań
        shuffleArray(questions);
        selectedQuestions = questions.slice(0, 40);
        totalQuestions = 40;
        console.log("Wylosowane pytania: ", selectedQuestions); // Debugowanie
        document.getElementById('quiz').style.display = 'block';
        showQuestion();
    } else {
        // Wyświetl wszystkie pytania
        selectedQuestions = questions;
        totalQuestions = questions.length;
        console.log("Wszystkie pytania: ", selectedQuestions); // Debugowanie
        document.getElementById('all-questions').style.display = 'block';
        showAllQuestions();
    }
}

// Funkcja do wyświetlania jednego pytania na raz
function showQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    console.log("Wyświetlane pytanie: ", currentQuestion); // Debugowanie
    if (currentQuestion) {
        // Dodaj numer pytania i tekst
        questionElement.innerHTML = `<strong>${currentQuestionIndex + 1} :</strong> ${currentQuestion.question}`;
        answerButtons.forEach((button, index) => {
            button.innerText = currentQuestion.answers[index];
            button.disabled = false; // Umożliwia kliknięcie odpowiedzi
            button.classList.remove('selected', 'correct', 'wrong'); // Resetuj klasy
        });
    }
}

function selectAnswer(index) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");
    // Zaznacz wybraną odpowiedź
    answerButtons.forEach((button, btnIndex) => {
        button.disabled = true; // Wyłącz inne przyciski po wyborze
        if (btnIndex === index) {
            button.classList.add('selected'); // Oznacz wybraną odpowiedź
        }
        if (btnIndex === currentQuestion.correct) {
            button.classList.add('correct'); // Oznacz poprawną odpowiedź
        } else if (btnIndex === index && btnIndex !== currentQuestion.correct) {
            button.classList.add('wrong'); // Oznacz błędną odpowiedź
        }
    });
    if (index === currentQuestion.correct) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block"; // Pokazuje przycisk "Następne pytanie"
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion(); // Wyświetlenie następnego pytania
        document.getElementById("next-btn").style.display = "none"; // Ukrycie przycisku "Następne pytanie"
    } else {
        showResult(); // Pokazuje wynik końcowy
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    // Wyświetlenie wyniku
    document.getElementById("score").innerText = score;
    // Wyświetlenie liczby wszystkich pytań
    document.getElementById("total-questions").innerText = totalQuestions;
}

// Funkcja do wyświetlania wszystkich pytań naraz
function showAllQuestions() {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    selectedQuestions.forEach((question, questionIndex) => {
        console.log("Wyświetlane pytanie: ", question); // Debugowanie
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('full-question');
        
        // Wyświetlenie pytania z numeracją i pogrubieniem
        const questionText = document.createElement('h3');
        questionText.innerHTML = `<strong>${questionIndex + 1}.</strong> ${question.question}`;
        questionDiv.appendChild(questionText);
        
        // Wyświetlenie odpowiedzi
        const answersList = document.createElement('ul');
        answersList.classList.add('answers');
        
        question.answers.forEach((answer, answerIndex) => {
            const answerItem = document.createElement('li');
            answerItem.innerText = answer;
            answerItem.classList.add('answer');
            
            // Wyróżnienie poprawnej odpowiedzi
            if (answerIndex === question.correct) {
                answerItem.classList.add('correct');
            }
            
            answersList.appendChild(answerItem);
        });
        questionDiv.appendChild(answersList);
        questionsList.appendChild(questionDiv);
    });
}

// Funkcja cofania do menu głównego
function goBackToMenu() {
    // Ukryj wszystkie sekcje poza menu startowym
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('all-questions').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    // Resetuj stan quizu
    currentQuestionIndex = 0;
    score = 0;
}

