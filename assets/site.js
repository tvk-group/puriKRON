(function () {
  const languages = [
    ["en", "English"],
    ["tr", "Türkçe"],
    ["de", "Deutsch"],
    ["fr", "Français"],
    ["es", "Español"],
    ["it", "Italiano"],
    ["pt", "Português"],
    ["nl", "Nederlands"],
    ["sv", "Svenska"],
    ["no", "Norsk"],
    ["da", "Dansk"],
    ["fi", "Suomi"],
    ["pl", "Polski"],
    ["cs", "Čeština"],
    ["ro", "Română"],
    ["el", "Ελληνικά"],
    ["ru", "Русский"],
    ["ar", "العربية"],
    ["he", "עברית"],
    ["zh", "中文"],
    ["ja", "日本語"],
    ["ko", "한국어"],
    ["hi", "हिन्दी"],
    ["id", "Bahasa Indonesia"],
    ["uk", "Українська"]
  ];

  const rtlLanguages = new Set(["ar", "he"]);

  const copy = {
    en: {
      languageLabel: "Language",
      navVision: "Vision",
      navEcosystem: "Ecosystem",
      navAccess: "Access",
      navTerms: "Terms",
      navPrivacy: "Privacy",
      navRisk: "Risk",
      eyebrow: "Kron Family wellness project",
      heroTitle: "A polished wellness gateway for the Kron ecosystem.",
      heroLead: "Clean presentation, global access, and a concise project experience built for PURITE-aligned wellness communities.",
      primaryCta: "Explore access",
      secondaryCta: "View legal pages",
      metricOneLabel: "Project",
      metricTwoLabel: "Ecosystem",
      metricThreeLabel: "Languages",
      visionKicker: "Vision",
      visionTitle: "Premium, calm, and ready for international visitors.",
      visionText: "The page now focuses on brand confidence, simple navigation, and a lighter message without long informational blocks.",
      ecosystemKicker: "Ecosystem",
      ecosystemTitle: "Connected to the wider Kron project family.",
      ecosystemText: "A consistent structure keeps puriKRON aligned with TVK Group, EnteleKRON, and related ecosystem properties.",
      accessKicker: "Access",
      accessTitle: "Every key page supports the language selector.",
      accessText: "Visitors can switch language on the homepage, terms page, privacy page, or risk page and keep that choice while browsing.",
      linksKicker: "Official links",
      linksTitle: "Project destinations",
      footerBrand: "© puriKRON. Kron ecosystem project.",
      legalKicker: "Legal"
    },
    tr: {
      languageLabel: "Dil",
      navVision: "Vizyon",
      navEcosystem: "Ekosistem",
      navAccess: "Erişim",
      navTerms: "Şartlar",
      navPrivacy: "Gizlilik",
      navRisk: "Risk",
      eyebrow: "Kron Family wellness projesi",
      heroTitle: "Kron ekosistemi için zarif bir wellness kapısı.",
      heroLead: "PURITE uyumlu wellness toplulukları için temiz sunum, küresel erişim ve kısa proje deneyimi.",
      primaryCta: "Erişimi keşfet",
      secondaryCta: "Yasal sayfaları gör",
      metricOneLabel: "Proje",
      metricTwoLabel: "Ekosistem",
      metricThreeLabel: "Diller",
      visionKicker: "Vizyon",
      visionTitle: "Premium, sakin ve uluslararası ziyaretçilere hazır.",
      visionText: "Sayfa artık uzun bilgi blokları olmadan marka güvenine, sade gezinmeye ve daha hafif mesaja odaklanır.",
      ecosystemKicker: "Ekosistem",
      ecosystemTitle: "Daha geniş Kron proje ailesine bağlı.",
      ecosystemText: "Tutarlı yapı puriKRON'u TVK Group, EnteleKRON ve ilgili ekosistem varlıklarıyla uyumlu tutar.",
      accessKicker: "Erişim",
      accessTitle: "Her ana sayfa dil seçiciyi destekler.",
      accessText: "Ziyaretçiler ana sayfa, şartlar, gizlilik veya risk sayfasında dili değiştirip gezinirken seçimini korur.",
      linksKicker: "Resmi bağlantılar",
      linksTitle: "Proje hedefleri",
      footerBrand: "© puriKRON. Kron ekosistem projesi.",
      legalKicker: "Yasal"
    },
    de: {
      languageLabel: "Sprache",
      navVision: "Vision",
      navEcosystem: "Ökosystem",
      navAccess: "Zugang",
      navTerms: "Bedingungen",
      navPrivacy: "Datenschutz",
      navRisk: "Risiko",
      eyebrow: "Kron Family Wellness-Projekt",
      heroTitle: "Ein elegantes Wellness-Portal für das Kron-Ökosystem.",
      heroLead: "Klare Präsentation, globaler Zugang und eine knappe Projekterfahrung für PURITE-orientierte Wellness-Communities.",
      primaryCta: "Zugang erkunden",
      secondaryCta: "Rechtliche Seiten ansehen",
      metricOneLabel: "Projekt",
      metricTwoLabel: "Ökosystem",
      metricThreeLabel: "Sprachen",
      visionKicker: "Vision",
      visionTitle: "Premium, ruhig und bereit für internationale Besucher.",
      visionText: "Die Seite konzentriert sich auf Markenvertrauen, einfache Navigation und eine leichtere Botschaft ohne lange Infoblöcke.",
      ecosystemKicker: "Ökosystem",
      ecosystemTitle: "Mit der größeren Kron-Projektfamilie verbunden.",
      ecosystemText: "Eine einheitliche Struktur hält puriKRON im Einklang mit TVK Group, EnteleKRON und verwandten Projekten.",
      accessKicker: "Zugang",
      accessTitle: "Jede wichtige Seite unterstützt die Sprachauswahl.",
      accessText: "Besucher können die Sprache auf Startseite, Bedingungen, Datenschutz oder Risiko wechseln und die Auswahl behalten.",
      linksKicker: "Offizielle Links",
      linksTitle: "Projektziele",
      footerBrand: "© puriKRON. Kron-Ökosystemprojekt.",
      legalKicker: "Rechtliches"
    },
    fr: {
      languageLabel: "Langue",
      navVision: "Vision",
      navEcosystem: "Écosystème",
      navAccess: "Accès",
      navTerms: "Conditions",
      navPrivacy: "Confidentialité",
      navRisk: "Risque",
      eyebrow: "Projet bien-être Kron Family",
      heroTitle: "Une passerelle bien-être raffinée pour l'écosystème Kron.",
      heroLead: "Présentation claire, accès mondial et expérience concise pour les communautés bien-être alignées avec PURITE.",
      primaryCta: "Explorer l'accès",
      secondaryCta: "Voir les pages légales",
      metricOneLabel: "Projet",
      metricTwoLabel: "Écosystème",
      metricThreeLabel: "Langues",
      visionKicker: "Vision",
      visionTitle: "Premium, calme et prêt pour les visiteurs internationaux.",
      visionText: "La page privilégie la confiance de marque, une navigation simple et un message léger sans longs blocs d'information.",
      ecosystemKicker: "Écosystème",
      ecosystemTitle: "Connecté à la grande famille des projets Kron.",
      ecosystemText: "Une structure cohérente aligne puriKRON avec TVK Group, EnteleKRON et les propriétés associées.",
      accessKicker: "Accès",
      accessTitle: "Chaque page clé prend en charge le sélecteur de langue.",
      accessText: "Les visiteurs peuvent changer de langue sur l'accueil, les conditions, la confidentialité ou le risque et conserver ce choix.",
      linksKicker: "Liens officiels",
      linksTitle: "Destinations du projet",
      footerBrand: "© puriKRON. Projet de l'écosystème Kron.",
      legalKicker: "Légal"
    },
    es: {
      languageLabel: "Idioma",
      navVision: "Visión",
      navEcosystem: "Ecosistema",
      navAccess: "Acceso",
      navTerms: "Términos",
      navPrivacy: "Privacidad",
      navRisk: "Riesgo",
      eyebrow: "Proyecto wellness de Kron Family",
      heroTitle: "Una puerta wellness pulida para el ecosistema Kron.",
      heroLead: "Presentación limpia, acceso global y una experiencia concisa para comunidades wellness alineadas con PURITE.",
      primaryCta: "Explorar acceso",
      secondaryCta: "Ver páginas legales",
      metricOneLabel: "Proyecto",
      metricTwoLabel: "Ecosistema",
      metricThreeLabel: "Idiomas",
      visionKicker: "Visión",
      visionTitle: "Premium, sereno y listo para visitantes internacionales.",
      visionText: "La página se centra en confianza de marca, navegación sencilla y un mensaje ligero sin largos bloques informativos.",
      ecosystemKicker: "Ecosistema",
      ecosystemTitle: "Conectado con la familia más amplia de proyectos Kron.",
      ecosystemText: "Una estructura consistente mantiene puriKRON alineado con TVK Group, EnteleKRON y propiedades relacionadas.",
      accessKicker: "Acceso",
      accessTitle: "Cada página clave admite el selector de idioma.",
      accessText: "Los visitantes pueden cambiar el idioma en inicio, términos, privacidad o riesgo y conservar la elección al navegar.",
      linksKicker: "Enlaces oficiales",
      linksTitle: "Destinos del proyecto",
      footerBrand: "© puriKRON. Proyecto del ecosistema Kron.",
      legalKicker: "Legal"
    },
    it: {
      languageLabel: "Lingua",
      navVision: "Visione",
      navEcosystem: "Ecosistema",
      navAccess: "Accesso",
      navTerms: "Termini",
      navPrivacy: "Privacy",
      navRisk: "Rischio",
      eyebrow: "Progetto wellness Kron Family",
      heroTitle: "Un gateway wellness raffinato per l'ecosistema Kron.",
      heroLead: "Presentazione pulita, accesso globale ed esperienza concisa per community wellness allineate a PURITE.",
      primaryCta: "Esplora accesso",
      secondaryCta: "Vedi pagine legali",
      metricOneLabel: "Progetto",
      metricTwoLabel: "Ecosistema",
      metricThreeLabel: "Lingue",
      visionKicker: "Visione",
      visionTitle: "Premium, calmo e pronto per visitatori internazionali.",
      visionText: "La pagina punta su fiducia nel brand, navigazione semplice e messaggio leggero senza lunghi blocchi informativi.",
      ecosystemKicker: "Ecosistema",
      ecosystemTitle: "Collegato alla più ampia famiglia di progetti Kron.",
      ecosystemText: "Una struttura coerente mantiene puriKRON allineato con TVK Group, EnteleKRON e proprietà correlate.",
      accessKicker: "Accesso",
      accessTitle: "Ogni pagina chiave supporta il selettore lingua.",
      accessText: "I visitatori possono cambiare lingua su home, termini, privacy o rischio e mantenere la scelta durante la navigazione.",
      linksKicker: "Link ufficiali",
      linksTitle: "Destinazioni del progetto",
      footerBrand: "© puriKRON. Progetto ecosistema Kron.",
      legalKicker: "Legale"
    },
    pt: {
      languageLabel: "Idioma",
      navVision: "Visão",
      navEcosystem: "Ecossistema",
      navAccess: "Acesso",
      navTerms: "Termos",
      navPrivacy: "Privacidade",
      navRisk: "Risco",
      eyebrow: "Projeto wellness Kron Family",
      heroTitle: "Um portal wellness refinado para o ecossistema Kron.",
      heroLead: "Apresentação limpa, acesso global e experiência concisa para comunidades wellness alinhadas à PURITE.",
      primaryCta: "Explorar acesso",
      secondaryCta: "Ver páginas legais",
      metricOneLabel: "Projeto",
      metricTwoLabel: "Ecossistema",
      metricThreeLabel: "Idiomas",
      visionKicker: "Visão",
      visionTitle: "Premium, calmo e pronto para visitantes internacionais.",
      visionText: "A página foca confiança de marca, navegação simples e uma mensagem leve sem blocos longos de informação.",
      ecosystemKicker: "Ecossistema",
      ecosystemTitle: "Conectado à família maior de projetos Kron.",
      ecosystemText: "Uma estrutura consistente mantém puriKRON alinhado com TVK Group, EnteleKRON e propriedades relacionadas.",
      accessKicker: "Acesso",
      accessTitle: "Cada página principal oferece seletor de idioma.",
      accessText: "Visitantes podem trocar o idioma na página inicial, termos, privacidade ou risco e manter a escolha ao navegar.",
      linksKicker: "Links oficiais",
      linksTitle: "Destinos do projeto",
      footerBrand: "© puriKRON. Projeto do ecossistema Kron.",
      legalKicker: "Legal"
    },
    nl: {
      languageLabel: "Taal",
      navVision: "Visie",
      navEcosystem: "Ecosysteem",
      navAccess: "Toegang",
      navTerms: "Voorwaarden",
      navPrivacy: "Privacy",
      navRisk: "Risico",
      eyebrow: "Kron Family wellnessproject",
      heroTitle: "Een verfijnde wellnesspoort voor het Kron-ecosysteem.",
      heroLead: "Heldere presentatie, wereldwijde toegang en een compacte projectervaring voor PURITE-gerichte wellnesscommunities.",
      primaryCta: "Toegang verkennen",
      secondaryCta: "Juridische pagina's bekijken",
      metricOneLabel: "Project",
      metricTwoLabel: "Ecosysteem",
      metricThreeLabel: "Talen",
      visionKicker: "Visie",
      visionTitle: "Premium, rustig en klaar voor internationale bezoekers.",
      visionText: "De pagina richt zich op merkvertrouwen, eenvoudige navigatie en een lichtere boodschap zonder lange informatieblokken.",
      ecosystemKicker: "Ecosysteem",
      ecosystemTitle: "Verbonden met de bredere Kron-projectfamilie.",
      ecosystemText: "Een consistente structuur houdt puriKRON afgestemd op TVK Group, EnteleKRON en verwante projecten.",
      accessKicker: "Toegang",
      accessTitle: "Elke belangrijke pagina ondersteunt de taalselector.",
      accessText: "Bezoekers kunnen taal wisselen op home, voorwaarden, privacy of risico en die keuze behouden tijdens het browsen.",
      linksKicker: "Officiële links",
      linksTitle: "Projectbestemmingen",
      footerBrand: "© puriKRON. Kron-ecosysteemproject.",
      legalKicker: "Juridisch"
    },
    sv: {
      languageLabel: "Språk",
      navVision: "Vision",
      navEcosystem: "Ekosystem",
      navAccess: "Åtkomst",
      navTerms: "Villkor",
      navPrivacy: "Integritet",
      navRisk: "Risk",
      eyebrow: "Kron Family wellnessprojekt",
      heroTitle: "En polerad wellness-port för Kron-ekosystemet.",
      heroLead: "Ren presentation, global åtkomst och en kort projektupplevelse för PURITE-anpassade wellnessgrupper.",
      primaryCta: "Utforska åtkomst",
      secondaryCta: "Visa juridiska sidor",
      metricOneLabel: "Projekt",
      metricTwoLabel: "Ekosystem",
      metricThreeLabel: "Språk",
      visionKicker: "Vision",
      visionTitle: "Premium, lugn och redo för internationella besökare.",
      visionText: "Sidan fokuserar på varumärkesförtroende, enkel navigering och ett lättare budskap utan långa informationsblock.",
      ecosystemKicker: "Ekosystem",
      ecosystemTitle: "Kopplat till den större Kron-projektfamiljen.",
      ecosystemText: "En konsekvent struktur håller puriKRON i linje med TVK Group, EnteleKRON och relaterade projekt.",
      accessKicker: "Åtkomst",
      accessTitle: "Varje nyckelsida stöder språkvalet.",
      accessText: "Besökare kan byta språk på startsidan, villkor, integritet eller risk och behålla valet när de bläddrar.",
      linksKicker: "Officiella länkar",
      linksTitle: "Projektmål",
      footerBrand: "© puriKRON. Kron-ekosystemprojekt.",
      legalKicker: "Juridik"
    },
    no: {
      languageLabel: "Språk",
      navVision: "Visjon",
      navEcosystem: "Økosystem",
      navAccess: "Tilgang",
      navTerms: "Vilkår",
      navPrivacy: "Personvern",
      navRisk: "Risiko",
      eyebrow: "Kron Family wellnessprosjekt",
      heroTitle: "En profesjonell wellness-port for Kron-økosystemet.",
      heroLead: "Ren presentasjon, global tilgang og en kort prosjektopplevelse for PURITE-tilpassede wellnessmiljøer.",
      primaryCta: "Utforsk tilgang",
      secondaryCta: "Se juridiske sider",
      metricOneLabel: "Prosjekt",
      metricTwoLabel: "Økosystem",
      metricThreeLabel: "Språk",
      visionKicker: "Visjon",
      visionTitle: "Premium, rolig og klar for internasjonale besøkende.",
      visionText: "Siden fokuserer på merkevarens tillit, enkel navigasjon og et lettere budskap uten lange informasjonsblokker.",
      ecosystemKicker: "Økosystem",
      ecosystemTitle: "Koblet til den større Kron-prosjektfamilien.",
      ecosystemText: "En konsekvent struktur holder puriKRON på linje med TVK Group, EnteleKRON og relaterte prosjekter.",
      accessKicker: "Tilgang",
      accessTitle: "Alle nøkkelsider støtter språkvelgeren.",
      accessText: "Besøkende kan bytte språk på forsiden, vilkår, personvern eller risiko og beholde valget under navigering.",
      linksKicker: "Offisielle lenker",
      linksTitle: "Prosjektdestinasjoner",
      footerBrand: "© puriKRON. Kron-økosystemprosjekt.",
      legalKicker: "Juridisk"
    },
    da: {
      languageLabel: "Sprog",
      navVision: "Vision",
      navEcosystem: "Økosystem",
      navAccess: "Adgang",
      navTerms: "Vilkår",
      navPrivacy: "Privatliv",
      navRisk: "Risiko",
      eyebrow: "Kron Family wellnessprojekt",
      heroTitle: "En poleret wellness-indgang til Kron-økosystemet.",
      heroLead: "Ren præsentation, global adgang og en kort projektoplevelse for PURITE-tilpassede wellnessfællesskaber.",
      primaryCta: "Udforsk adgang",
      secondaryCta: "Se juridiske sider",
      metricOneLabel: "Projekt",
      metricTwoLabel: "Økosystem",
      metricThreeLabel: "Sprog",
      visionKicker: "Vision",
      visionTitle: "Premium, rolig og klar til internationale besøgende.",
      visionText: "Siden fokuserer på brandtillid, enkel navigation og et lettere budskab uden lange informationsblokke.",
      ecosystemKicker: "Økosystem",
      ecosystemTitle: "Forbundet med den bredere Kron-projektfamilie.",
      ecosystemText: "En ensartet struktur holder puriKRON på linje med TVK Group, EnteleKRON og relaterede projekter.",
      accessKicker: "Adgang",
      accessTitle: "Hver nøgleside understøtter sprogvalg.",
      accessText: "Besøgende kan skifte sprog på forsiden, vilkår, privatliv eller risiko og beholde valget under browsing.",
      linksKicker: "Officielle links",
      linksTitle: "Projektdestinationer",
      footerBrand: "© puriKRON. Kron-økosystemprojekt.",
      legalKicker: "Juridisk"
    },
    fi: {
      languageLabel: "Kieli",
      navVision: "Visio",
      navEcosystem: "Ekosysteemi",
      navAccess: "Pääsy",
      navTerms: "Ehdot",
      navPrivacy: "Tietosuoja",
      navRisk: "Riski",
      eyebrow: "Kron Family wellness -projekti",
      heroTitle: "Viimeistelty wellness-portti Kron-ekosysteemiin.",
      heroLead: "Selkeä esitys, globaali pääsy ja ytimekäs projektikokemus PURITE-linjaisille wellness-yhteisöille.",
      primaryCta: "Tutki pääsyä",
      secondaryCta: "Katso lakisivut",
      metricOneLabel: "Projekti",
      metricTwoLabel: "Ekosysteemi",
      metricThreeLabel: "Kielet",
      visionKicker: "Visio",
      visionTitle: "Premium, rauhallinen ja valmis kansainvälisille vieraille.",
      visionText: "Sivu keskittyy brändiluottamukseen, helppoon navigointiin ja kevyempään viestiin ilman pitkiä tietolohkoja.",
      ecosystemKicker: "Ekosysteemi",
      ecosystemTitle: "Yhteydessä laajempaan Kron-projektiperheeseen.",
      ecosystemText: "Yhtenäinen rakenne pitää puriKRONin linjassa TVK Groupin, EnteleKRONin ja muiden projektien kanssa.",
      accessKicker: "Pääsy",
      accessTitle: "Jokainen avainsivu tukee kielivalitsinta.",
      accessText: "Vierailijat voivat vaihtaa kieltä etusivulla, ehdoissa, tietosuojassa tai riskisivulla ja säilyttää valinnan.",
      linksKicker: "Viralliset linkit",
      linksTitle: "Projektikohteet",
      footerBrand: "© puriKRON. Kron-ekosysteemiprojekti.",
      legalKicker: "Lakiasiat"
    },
    pl: {
      languageLabel: "Język",
      navVision: "Wizja",
      navEcosystem: "Ekosystem",
      navAccess: "Dostęp",
      navTerms: "Warunki",
      navPrivacy: "Prywatność",
      navRisk: "Ryzyko",
      eyebrow: "Projekt wellness Kron Family",
      heroTitle: "Dopracowana brama wellness dla ekosystemu Kron.",
      heroLead: "Czysta prezentacja, globalny dostęp i zwięzłe doświadczenie projektu dla społeczności wellness zgodnych z PURITE.",
      primaryCta: "Poznaj dostęp",
      secondaryCta: "Zobacz strony prawne",
      metricOneLabel: "Projekt",
      metricTwoLabel: "Ekosystem",
      metricThreeLabel: "Języki",
      visionKicker: "Wizja",
      visionTitle: "Premium, spokojnie i gotowe dla odwiedzających z całego świata.",
      visionText: "Strona skupia się na zaufaniu do marki, prostej nawigacji i lżejszym przekazie bez długich bloków informacji.",
      ecosystemKicker: "Ekosystem",
      ecosystemTitle: "Połączony z szerszą rodziną projektów Kron.",
      ecosystemText: "Spójna struktura utrzymuje puriKRON w zgodzie z TVK Group, EnteleKRON i powiązanymi projektami.",
      accessKicker: "Dostęp",
      accessTitle: "Każda kluczowa strona obsługuje wybór języka.",
      accessText: "Odwiedzający mogą zmienić język na stronie głównej, warunkach, prywatności lub ryzyku i zachować wybór.",
      linksKicker: "Oficjalne linki",
      linksTitle: "Miejsca projektu",
      footerBrand: "© puriKRON. Projekt ekosystemu Kron.",
      legalKicker: "Prawne"
    },
    cs: {
      languageLabel: "Jazyk",
      navVision: "Vize",
      navEcosystem: "Ekosystém",
      navAccess: "Přístup",
      navTerms: "Podmínky",
      navPrivacy: "Soukromí",
      navRisk: "Riziko",
      eyebrow: "Wellness projekt Kron Family",
      heroTitle: "Vyladěná wellness brána pro ekosystém Kron.",
      heroLead: "Čistá prezentace, globální přístup a stručný projektový zážitek pro wellness komunity sladěné s PURITE.",
      primaryCta: "Prozkoumat přístup",
      secondaryCta: "Zobrazit právní stránky",
      metricOneLabel: "Projekt",
      metricTwoLabel: "Ekosystém",
      metricThreeLabel: "Jazyky",
      visionKicker: "Vize",
      visionTitle: "Prémiové, klidné a připravené pro mezinárodní návštěvníky.",
      visionText: "Stránka se zaměřuje na důvěru ve značku, jednoduchou navigaci a lehčí sdělení bez dlouhých informačních bloků.",
      ecosystemKicker: "Ekosystém",
      ecosystemTitle: "Propojeno s širší rodinou projektů Kron.",
      ecosystemText: "Konzistentní struktura drží puriKRON v souladu s TVK Group, EnteleKRON a souvisejícími projekty.",
      accessKicker: "Přístup",
      accessTitle: "Každá klíčová stránka podporuje výběr jazyka.",
      accessText: "Návštěvníci mohou změnit jazyk na domovské stránce, podmínkách, soukromí nebo riziku a volbu zachovat.",
      linksKicker: "Oficiální odkazy",
      linksTitle: "Cíle projektu",
      footerBrand: "© puriKRON. Projekt ekosystému Kron.",
      legalKicker: "Právní"
    },
    ro: {
      languageLabel: "Limbă",
      navVision: "Viziune",
      navEcosystem: "Ecosistem",
      navAccess: "Acces",
      navTerms: "Termeni",
      navPrivacy: "Confidențialitate",
      navRisk: "Risc",
      eyebrow: "Proiect wellness Kron Family",
      heroTitle: "O poartă wellness rafinată pentru ecosistemul Kron.",
      heroLead: "Prezentare curată, acces global și experiență concisă pentru comunități wellness aliniate cu PURITE.",
      primaryCta: "Explorează accesul",
      secondaryCta: "Vezi paginile legale",
      metricOneLabel: "Proiect",
      metricTwoLabel: "Ecosistem",
      metricThreeLabel: "Limbi",
      visionKicker: "Viziune",
      visionTitle: "Premium, calm și pregătit pentru vizitatori internaționali.",
      visionText: "Pagina se concentrează pe încrederea în brand, navigare simplă și un mesaj mai ușor fără blocuri lungi de informații.",
      ecosystemKicker: "Ecosistem",
      ecosystemTitle: "Conectat la familia extinsă de proiecte Kron.",
      ecosystemText: "O structură consecventă menține puriKRON aliniat cu TVK Group, EnteleKRON și proprietăți conexe.",
      accessKicker: "Acces",
      accessTitle: "Fiecare pagină cheie acceptă selectorul de limbă.",
      accessText: "Vizitatorii pot schimba limba pe prima pagină, termeni, confidențialitate sau risc și pot păstra alegerea.",
      linksKicker: "Linkuri oficiale",
      linksTitle: "Destinații proiect",
      footerBrand: "© puriKRON. Proiect al ecosistemului Kron.",
      legalKicker: "Legal"
    },
    el: {
      languageLabel: "Γλώσσα",
      navVision: "Όραμα",
      navEcosystem: "Οικοσύστημα",
      navAccess: "Πρόσβαση",
      navTerms: "Όροι",
      navPrivacy: "Απόρρητο",
      navRisk: "Κίνδυνος",
      eyebrow: "Wellness έργο Kron Family",
      heroTitle: "Μια κομψή wellness πύλη για το οικοσύστημα Kron.",
      heroLead: "Καθαρή παρουσίαση, παγκόσμια πρόσβαση και σύντομη εμπειρία έργου για κοινότητες wellness ευθυγραμμισμένες με PURITE.",
      primaryCta: "Εξερεύνηση πρόσβασης",
      secondaryCta: "Προβολή νομικών σελίδων",
      metricOneLabel: "Έργο",
      metricTwoLabel: "Οικοσύστημα",
      metricThreeLabel: "Γλώσσες",
      visionKicker: "Όραμα",
      visionTitle: "Premium, ήρεμο και έτοιμο για διεθνείς επισκέπτες.",
      visionText: "Η σελίδα εστιάζει στην εμπιστοσύνη της μάρκας, την απλή πλοήγηση και ένα ελαφρύτερο μήνυμα χωρίς μεγάλα ενημερωτικά μπλοκ.",
      ecosystemKicker: "Οικοσύστημα",
      ecosystemTitle: "Συνδεδεμένο με την ευρύτερη οικογένεια έργων Kron.",
      ecosystemText: "Μια συνεπής δομή κρατά το puriKRON ευθυγραμμισμένο με TVK Group, EnteleKRON και συναφή έργα.",
      accessKicker: "Πρόσβαση",
      accessTitle: "Κάθε βασική σελίδα υποστηρίζει επιλογή γλώσσας.",
      accessText: "Οι επισκέπτες μπορούν να αλλάζουν γλώσσα στην αρχική, στους όρους, στο απόρρητο ή στον κίνδυνο και να κρατούν την επιλογή.",
      linksKicker: "Επίσημοι σύνδεσμοι",
      linksTitle: "Προορισμοί έργου",
      footerBrand: "© puriKRON. Έργο οικοσυστήματος Kron.",
      legalKicker: "Νομικά"
    },
    ru: {
      languageLabel: "Язык",
      navVision: "Видение",
      navEcosystem: "Экосистема",
      navAccess: "Доступ",
      navTerms: "Условия",
      navPrivacy: "Конфиденциальность",
      navRisk: "Риск",
      eyebrow: "Wellness-проект Kron Family",
      heroTitle: "Профессиональный wellness-портал для экосистемы Kron.",
      heroLead: "Чистая презентация, глобальный доступ и краткий опыт проекта для wellness-сообществ, связанных с PURITE.",
      primaryCta: "Изучить доступ",
      secondaryCta: "Открыть правовые страницы",
      metricOneLabel: "Проект",
      metricTwoLabel: "Экосистема",
      metricThreeLabel: "Языки",
      visionKicker: "Видение",
      visionTitle: "Премиально, спокойно и готово для международных посетителей.",
      visionText: "Страница фокусируется на доверии к бренду, простой навигации и легком сообщении без длинных информационных блоков.",
      ecosystemKicker: "Экосистема",
      ecosystemTitle: "Связано с более широкой семьей проектов Kron.",
      ecosystemText: "Единая структура удерживает puriKRON в соответствии с TVK Group, EnteleKRON и связанными проектами.",
      accessKicker: "Доступ",
      accessTitle: "Каждая ключевая страница поддерживает выбор языка.",
      accessText: "Посетители могут менять язык на главной, условиях, конфиденциальности или рисках и сохранять выбор при переходах.",
      linksKicker: "Официальные ссылки",
      linksTitle: "Направления проекта",
      footerBrand: "© puriKRON. Проект экосистемы Kron.",
      legalKicker: "Правовая информация"
    },
    ar: {
      languageLabel: "اللغة",
      navVision: "الرؤية",
      navEcosystem: "النظام",
      navAccess: "الوصول",
      navTerms: "الشروط",
      navPrivacy: "الخصوصية",
      navRisk: "المخاطر",
      eyebrow: "مشروع عافية من عائلة Kron",
      heroTitle: "بوابة عافية احترافية لمنظومة Kron.",
      heroLead: "عرض نظيف، وصول عالمي، وتجربة موجزة لمجتمعات العافية المتوافقة مع PURITE.",
      primaryCta: "استكشف الوصول",
      secondaryCta: "عرض الصفحات القانونية",
      metricOneLabel: "المشروع",
      metricTwoLabel: "المنظومة",
      metricThreeLabel: "اللغات",
      visionKicker: "الرؤية",
      visionTitle: "فاخر وهادئ وجاهز للزوار الدوليين.",
      visionText: "تركز الصفحة على ثقة العلامة، والتنقل البسيط، ورسالة أخف بدون كتل معلومات طويلة.",
      ecosystemKicker: "النظام",
      ecosystemTitle: "متصل بعائلة مشاريع Kron الأوسع.",
      ecosystemText: "يحافظ الهيكل الموحد على توافق puriKRON مع TVK Group و EnteleKRON والمشاريع المرتبطة.",
      accessKicker: "الوصول",
      accessTitle: "كل صفحة رئيسية تدعم اختيار اللغة.",
      accessText: "يمكن للزوار تغيير اللغة في الرئيسية أو الشروط أو الخصوصية أو المخاطر مع الاحتفاظ بالاختيار أثناء التصفح.",
      linksKicker: "روابط رسمية",
      linksTitle: "وجهات المشروع",
      footerBrand: "© puriKRON. مشروع منظومة Kron.",
      legalKicker: "قانوني"
    },
    he: {
      languageLabel: "שפה",
      navVision: "חזון",
      navEcosystem: "אקוסיסטם",
      navAccess: "גישה",
      navTerms: "תנאים",
      navPrivacy: "פרטיות",
      navRisk: "סיכון",
      eyebrow: "פרויקט wellness של Kron Family",
      heroTitle: "שער wellness מלוטש לאקוסיסטם Kron.",
      heroLead: "הצגה נקייה, גישה גלובלית וחוויית פרויקט תמציתית לקהילות wellness המותאמות ל-PURITE.",
      primaryCta: "גלו גישה",
      secondaryCta: "הצגת דפים משפטיים",
      metricOneLabel: "פרויקט",
      metricTwoLabel: "אקוסיסטם",
      metricThreeLabel: "שפות",
      visionKicker: "חזון",
      visionTitle: "פרימיום, רגוע ומוכן למבקרים בינלאומיים.",
      visionText: "העמוד מתמקד בביטחון במותג, ניווט פשוט ומסר קל יותר ללא בלוקים ארוכים של מידע.",
      ecosystemKicker: "אקוסיסטם",
      ecosystemTitle: "מחובר למשפחת פרויקטי Kron הרחבה.",
      ecosystemText: "מבנה עקבי שומר את puriKRON מיושר עם TVK Group, EnteleKRON ונכסים קשורים.",
      accessKicker: "גישה",
      accessTitle: "כל עמוד מרכזי תומך בבורר השפה.",
      accessText: "מבקרים יכולים לשנות שפה בדף הבית, תנאים, פרטיות או סיכון ולשמור את הבחירה בזמן הגלישה.",
      linksKicker: "קישורים רשמיים",
      linksTitle: "יעדי הפרויקט",
      footerBrand: "© puriKRON. פרויקט אקוסיסטם Kron.",
      legalKicker: "משפטי"
    },
    zh: {
      languageLabel: "语言",
      navVision: "愿景",
      navEcosystem: "生态",
      navAccess: "访问",
      navTerms: "条款",
      navPrivacy: "隐私",
      navRisk: "风险",
      eyebrow: "Kron Family 健康项目",
      heroTitle: "面向 Kron 生态的专业健康入口。",
      heroLead: "清晰呈现、全球访问，并为符合 PURITE 理念的健康社区提供简洁项目体验。",
      primaryCta: "探索访问",
      secondaryCta: "查看法律页面",
      metricOneLabel: "项目",
      metricTwoLabel: "生态",
      metricThreeLabel: "语言",
      visionKicker: "愿景",
      visionTitle: "高级、平静，并面向国际访问者。",
      visionText: "页面聚焦品牌信任、简单导航和轻量信息，移除冗长的信息块。",
      ecosystemKicker: "生态",
      ecosystemTitle: "连接更广泛的 Kron 项目家族。",
      ecosystemText: "一致的结构让 puriKRON 与 TVK Group、EnteleKRON 及相关生态资产保持统一。",
      accessKicker: "访问",
      accessTitle: "每个关键页面都支持语言选择。",
      accessText: "访问者可在首页、条款、隐私或风险页面切换语言，并在浏览时保留选择。",
      linksKicker: "官方链接",
      linksTitle: "项目目的地",
      footerBrand: "© puriKRON。Kron 生态项目。",
      legalKicker: "法律"
    },
    ja: {
      languageLabel: "言語",
      navVision: "ビジョン",
      navEcosystem: "エコシステム",
      navAccess: "アクセス",
      navTerms: "規約",
      navPrivacy: "プライバシー",
      navRisk: "リスク",
      eyebrow: "Kron Family ウェルネスプロジェクト",
      heroTitle: "Kronエコシステムのための洗練されたウェルネスゲートウェイ。",
      heroLead: "PURITEに沿ったウェルネスコミュニティ向けに、明快な表現、グローバルアクセス、簡潔な体験を提供します。",
      primaryCta: "アクセスを見る",
      secondaryCta: "法的ページを見る",
      metricOneLabel: "プロジェクト",
      metricTwoLabel: "エコシステム",
      metricThreeLabel: "言語",
      visionKicker: "ビジョン",
      visionTitle: "上質で落ち着きがあり、国際訪問者に対応。",
      visionText: "長い情報ブロックを避け、ブランド信頼、簡単なナビゲーション、軽いメッセージに集中します。",
      ecosystemKicker: "エコシステム",
      ecosystemTitle: "より広いKronプロジェクトファミリーと接続。",
      ecosystemText: "一貫した構造により、puriKRONはTVK Group、EnteleKRON、関連プロジェクトと整合します。",
      accessKicker: "アクセス",
      accessTitle: "すべての主要ページが言語セレクターに対応。",
      accessText: "訪問者はホーム、規約、プライバシー、リスクページで言語を切り替え、選択を維持できます。",
      linksKicker: "公式リンク",
      linksTitle: "プロジェクトのリンク先",
      footerBrand: "© puriKRON。Kronエコシステムプロジェクト。",
      legalKicker: "法務"
    },
    ko: {
      languageLabel: "언어",
      navVision: "비전",
      navEcosystem: "생태계",
      navAccess: "접근",
      navTerms: "약관",
      navPrivacy: "개인정보",
      navRisk: "위험",
      eyebrow: "Kron Family 웰니스 프로젝트",
      heroTitle: "Kron 생태계를 위한 세련된 웰니스 게이트웨이.",
      heroLead: "PURITE와 맞는 웰니스 커뮤니티를 위해 깔끔한 표현, 글로벌 접근, 간결한 프로젝트 경험을 제공합니다.",
      primaryCta: "접근 살펴보기",
      secondaryCta: "법적 페이지 보기",
      metricOneLabel: "프로젝트",
      metricTwoLabel: "생태계",
      metricThreeLabel: "언어",
      visionKicker: "비전",
      visionTitle: "프리미엄, 차분함, 국제 방문자 준비 완료.",
      visionText: "긴 정보 블록 없이 브랜드 신뢰, 쉬운 탐색, 가벼운 메시지에 집중합니다.",
      ecosystemKicker: "생태계",
      ecosystemTitle: "더 넓은 Kron 프로젝트 패밀리와 연결.",
      ecosystemText: "일관된 구조로 puriKRON을 TVK Group, EnteleKRON 및 관련 프로젝트와 맞춥니다.",
      accessKicker: "접근",
      accessTitle: "모든 주요 페이지가 언어 선택을 지원합니다.",
      accessText: "방문자는 홈, 약관, 개인정보, 위험 페이지에서 언어를 바꾸고 선택을 유지할 수 있습니다.",
      linksKicker: "공식 링크",
      linksTitle: "프로젝트 목적지",
      footerBrand: "© puriKRON. Kron 생태계 프로젝트.",
      legalKicker: "법적"
    },
    hi: {
      languageLabel: "भाषा",
      navVision: "दृष्टि",
      navEcosystem: "इकोसिस्टम",
      navAccess: "एक्सेस",
      navTerms: "शर्तें",
      navPrivacy: "गोपनीयता",
      navRisk: "जोखिम",
      eyebrow: "Kron Family वेलनेस प्रोजेक्ट",
      heroTitle: "Kron इकोसिस्टम के लिए एक पेशेवर वेलनेस गेटवे।",
      heroLead: "PURITE-समर्थित वेलनेस समुदायों के लिए साफ प्रस्तुति, वैश्विक पहुंच और संक्षिप्त प्रोजेक्ट अनुभव।",
      primaryCta: "एक्सेस देखें",
      secondaryCta: "कानूनी पेज देखें",
      metricOneLabel: "प्रोजेक्ट",
      metricTwoLabel: "इकोसिस्टम",
      metricThreeLabel: "भाषाएं",
      visionKicker: "दृष्टि",
      visionTitle: "प्रीमियम, शांत और अंतरराष्ट्रीय आगंतुकों के लिए तैयार।",
      visionText: "पेज लंबे सूचना ब्लॉक हटाकर ब्रांड भरोसे, सरल नेविगेशन और हल्के संदेश पर केंद्रित है।",
      ecosystemKicker: "इकोसिस्टम",
      ecosystemTitle: "विस्तृत Kron प्रोजेक्ट परिवार से जुड़ा।",
      ecosystemText: "सुसंगत संरचना puriKRON को TVK Group, EnteleKRON और संबंधित परियोजनाओं के साथ रखती है।",
      accessKicker: "एक्सेस",
      accessTitle: "हर मुख्य पेज भाषा चयन का समर्थन करता है।",
      accessText: "आगंतुक होम, शर्तें, गोपनीयता या जोखिम पेज पर भाषा बदल सकते हैं और ब्राउज करते समय चयन रख सकते हैं।",
      linksKicker: "आधिकारिक लिंक",
      linksTitle: "प्रोजेक्ट गंतव्य",
      footerBrand: "© puriKRON. Kron इकोसिस्टम प्रोजेक्ट.",
      legalKicker: "कानूनी"
    },
    id: {
      languageLabel: "Bahasa",
      navVision: "Visi",
      navEcosystem: "Ekosistem",
      navAccess: "Akses",
      navTerms: "Ketentuan",
      navPrivacy: "Privasi",
      navRisk: "Risiko",
      eyebrow: "Proyek wellness Kron Family",
      heroTitle: "Gerbang wellness profesional untuk ekosistem Kron.",
      heroLead: "Presentasi bersih, akses global, dan pengalaman proyek ringkas untuk komunitas wellness yang selaras dengan PURITE.",
      primaryCta: "Jelajahi akses",
      secondaryCta: "Lihat halaman legal",
      metricOneLabel: "Proyek",
      metricTwoLabel: "Ekosistem",
      metricThreeLabel: "Bahasa",
      visionKicker: "Visi",
      visionTitle: "Premium, tenang, dan siap untuk pengunjung internasional.",
      visionText: "Halaman berfokus pada kepercayaan merek, navigasi sederhana, dan pesan ringan tanpa blok informasi panjang.",
      ecosystemKicker: "Ekosistem",
      ecosystemTitle: "Terhubung dengan keluarga proyek Kron yang lebih luas.",
      ecosystemText: "Struktur konsisten menjaga puriKRON selaras dengan TVK Group, EnteleKRON, dan properti terkait.",
      accessKicker: "Akses",
      accessTitle: "Setiap halaman utama mendukung pemilih bahasa.",
      accessText: "Pengunjung dapat mengganti bahasa di beranda, ketentuan, privasi, atau risiko dan mempertahankan pilihannya.",
      linksKicker: "Tautan resmi",
      linksTitle: "Tujuan proyek",
      footerBrand: "© puriKRON. Proyek ekosistem Kron.",
      legalKicker: "Legal"
    },
    uk: {
      languageLabel: "Мова",
      navVision: "Бачення",
      navEcosystem: "Екосистема",
      navAccess: "Доступ",
      navTerms: "Умови",
      navPrivacy: "Приватність",
      navRisk: "Ризик",
      eyebrow: "Wellness-проєкт Kron Family",
      heroTitle: "Професійний wellness-портал для екосистеми Kron.",
      heroLead: "Чиста презентація, глобальний доступ і стислий досвід проєкту для wellness-спільнот, узгоджених із PURITE.",
      primaryCta: "Дослідити доступ",
      secondaryCta: "Переглянути юридичні сторінки",
      metricOneLabel: "Проєкт",
      metricTwoLabel: "Екосистема",
      metricThreeLabel: "Мови",
      visionKicker: "Бачення",
      visionTitle: "Преміально, спокійно і готово для міжнародних відвідувачів.",
      visionText: "Сторінка зосереджена на довірі до бренду, простій навігації та легшому повідомленні без довгих інформаційних блоків.",
      ecosystemKicker: "Екосистема",
      ecosystemTitle: "Пов'язано з ширшою родиною проєктів Kron.",
      ecosystemText: "Послідовна структура тримає puriKRON у відповідності з TVK Group, EnteleKRON і пов'язаними проєктами.",
      accessKicker: "Доступ",
      accessTitle: "Кожна ключова сторінка підтримує вибір мови.",
      accessText: "Відвідувачі можуть змінити мову на головній, умовах, приватності або ризику і зберегти вибір.",
      linksKicker: "Офіційні посилання",
      linksTitle: "Напрями проєкту",
      footerBrand: "© puriKRON. Проєкт екосистеми Kron.",
      legalKicker: "Юридичне"
    }
  };

  const legal = {
    en: legalPages(
      ["Terms of Use", "Concise terms for browsing the puriKRON site and related project pages.", "Use", "Use the site responsibly. Do not misuse branding, links, or contact channels.", "Content", "Project content is presented for general information and may change without notice.", "Contact", "Questions can be sent to hq@tvk.group."],
      ["Privacy Policy", "A simple privacy summary for this static multilingual site.", "Data", "This site keeps data collection minimal.", "Language", "Your language choice may be stored locally in your browser.", "Contact", "Privacy questions can be sent to hq@tvk.group."],
      ["Risk Disclosure", "A clear reminder for visitors evaluating digital ecosystem projects.", "Notice", "Digital projects and tokens can involve high risk.", "No advice", "Nothing on this site is financial, legal, or investment advice.", "Verify", "Always verify official links and announcements before acting."]
    ),
    tr: legalPages(
      ["Kullanım Şartları", "puriKRON sitesi ve ilgili proje sayfaları için kısa kullanım şartları.", "Kullanım", "Siteyi sorumlu kullanın. Marka, bağlantı veya iletişim kanallarını kötüye kullanmayın.", "İçerik", "Proje içeriği genel bilgi amaçlıdır ve bildirim olmadan değişebilir.", "İletişim", "Sorular hq@tvk.group adresine gönderilebilir."],
      ["Gizlilik Politikası", "Bu statik çok dilli site için basit gizlilik özeti.", "Veri", "Bu site veri toplamayı minimumda tutar.", "Dil", "Dil tercihiniz tarayıcınızda yerel olarak saklanabilir.", "İletişim", "Gizlilik soruları hq@tvk.group adresine gönderilebilir."],
      ["Risk Açıklaması", "Dijital ekosistem projelerini değerlendiren ziyaretçiler için açık hatırlatma.", "Uyarı", "Dijital projeler ve tokenlar yüksek risk içerebilir.", "Tavsiye değil", "Bu sitedeki hiçbir şey finansal, hukuki veya yatırım tavsiyesi değildir.", "Doğrula", "Harekete geçmeden önce resmi bağlantıları ve duyuruları her zaman doğrulayın."]
    ),
    de: legalPages(
      ["Nutzungsbedingungen", "Kurze Bedingungen für die Nutzung der puriKRON-Website und verwandter Projektseiten.", "Nutzung", "Nutzen Sie die Seite verantwortungsvoll. Missbrauchen Sie Marke, Links oder Kontaktkanäle nicht.", "Inhalt", "Projektinhalte dienen allgemeinen Informationen und können sich ohne Hinweis ändern.", "Kontakt", "Fragen können an hq@tvk.group gesendet werden."],
      ["Datenschutzrichtlinie", "Eine einfache Datenschutzzusammenfassung für diese statische mehrsprachige Website.", "Daten", "Diese Website hält Datenerfassung minimal.", "Sprache", "Ihre Sprachauswahl kann lokal im Browser gespeichert werden.", "Kontakt", "Datenschutzfragen können an hq@tvk.group gesendet werden."],
      ["Risikohinweis", "Ein klarer Hinweis für Besucher, die digitale Ökosystemprojekte bewerten.", "Hinweis", "Digitale Projekte und Token können hohe Risiken beinhalten.", "Keine Beratung", "Nichts auf dieser Website ist Finanz-, Rechts- oder Anlageberatung.", "Prüfen", "Überprüfen Sie offizielle Links und Ankündigungen immer vor Handlungen."]
    ),
    fr: legalPages(
      ["Conditions d'utilisation", "Conditions concises pour consulter le site puriKRON et les pages de projet associées.", "Utilisation", "Utilisez le site de façon responsable. N'abusez pas de la marque, des liens ou des canaux de contact.", "Contenu", "Le contenu du projet est fourni à titre général et peut changer sans préavis.", "Contact", "Les questions peuvent être envoyées à hq@tvk.group."],
      ["Politique de confidentialité", "Résumé simple de confidentialité pour ce site statique multilingue.", "Données", "Ce site limite la collecte de données au minimum.", "Langue", "Votre choix de langue peut être stocké localement dans votre navigateur.", "Contact", "Les questions de confidentialité peuvent être envoyées à hq@tvk.group."],
      ["Divulgation des risques", "Rappel clair pour les visiteurs évaluant des projets d'écosystème numérique.", "Avis", "Les projets numériques et tokens peuvent comporter un risque élevé.", "Pas un conseil", "Rien sur ce site n'est un conseil financier, juridique ou d'investissement.", "Vérifier", "Vérifiez toujours les liens et annonces officiels avant d'agir."]
    ),
    es: legalPages(
      ["Términos de uso", "Términos concisos para navegar el sitio puriKRON y páginas relacionadas.", "Uso", "Use el sitio con responsabilidad. No haga mal uso de marca, enlaces o canales de contacto.", "Contenido", "El contenido del proyecto es información general y puede cambiar sin aviso.", "Contacto", "Las preguntas pueden enviarse a hq@tvk.group."],
      ["Política de privacidad", "Resumen simple de privacidad para este sitio estático multilingüe.", "Datos", "Este sitio mantiene la recopilación de datos al mínimo.", "Idioma", "Su elección de idioma puede guardarse localmente en su navegador.", "Contacto", "Las preguntas de privacidad pueden enviarse a hq@tvk.group."],
      ["Divulgación de riesgos", "Recordatorio claro para visitantes que evalúan proyectos digitales.", "Aviso", "Los proyectos digitales y tokens pueden implicar alto riesgo.", "Sin asesoría", "Nada en este sitio es asesoría financiera, legal o de inversión.", "Verificar", "Verifique siempre enlaces y anuncios oficiales antes de actuar."]
    ),
    it: legalPages(
      ["Termini di utilizzo", "Termini sintetici per navigare il sito puriKRON e le pagine correlate.", "Uso", "Usa il sito responsabilmente. Non abusare di brand, link o canali di contatto.", "Contenuto", "Il contenuto del progetto è informativo e può cambiare senza preavviso.", "Contatto", "Le domande possono essere inviate a hq@tvk.group."],
      ["Informativa sulla privacy", "Semplice riepilogo privacy per questo sito statico multilingue.", "Dati", "Questo sito mantiene minima la raccolta dati.", "Lingua", "La scelta della lingua può essere salvata localmente nel browser.", "Contatto", "Le domande privacy possono essere inviate a hq@tvk.group."],
      ["Informativa sui rischi", "Promemoria chiaro per visitatori che valutano progetti digitali.", "Avviso", "Progetti digitali e token possono comportare alto rischio.", "Nessun consiglio", "Nulla in questo sito è consulenza finanziaria, legale o di investimento.", "Verifica", "Verifica sempre link e annunci ufficiali prima di agire."]
    ),
    pt: legalPages(
      ["Termos de uso", "Termos concisos para navegar no site puriKRON e páginas relacionadas.", "Uso", "Use o site com responsabilidade. Não faça mau uso de marca, links ou canais de contato.", "Conteúdo", "O conteúdo do projeto é informação geral e pode mudar sem aviso.", "Contato", "Perguntas podem ser enviadas para hq@tvk.group."],
      ["Política de privacidade", "Resumo simples de privacidade para este site estático multilíngue.", "Dados", "Este site mantém a coleta de dados mínima.", "Idioma", "Sua escolha de idioma pode ser armazenada localmente no navegador.", "Contato", "Perguntas de privacidade podem ser enviadas para hq@tvk.group."],
      ["Divulgação de risco", "Lembrete claro para visitantes avaliando projetos digitais.", "Aviso", "Projetos digitais e tokens podem envolver alto risco.", "Sem aconselhamento", "Nada neste site é aconselhamento financeiro, jurídico ou de investimento.", "Verifique", "Sempre verifique links e anúncios oficiais antes de agir."]
    ),
    nl: legalPages(
      ["Gebruiksvoorwaarden", "Beknopte voorwaarden voor het bezoeken van de puriKRON-site en gerelateerde pagina's.", "Gebruik", "Gebruik de site verantwoordelijk. Misbruik merk, links of contactkanalen niet.", "Inhoud", "Projectinhoud is algemene informatie en kan zonder bericht wijzigen.", "Contact", "Vragen kunnen naar hq@tvk.group worden gestuurd."],
      ["Privacybeleid", "Een eenvoudige privacysamenvatting voor deze statische meertalige site.", "Data", "Deze site houdt gegevensverzameling minimaal.", "Taal", "Uw taalkeuze kan lokaal in uw browser worden opgeslagen.", "Contact", "Privacyvragen kunnen naar hq@tvk.group worden gestuurd."],
      ["Risicodisclosure", "Een duidelijke herinnering voor bezoekers die digitale projecten beoordelen.", "Kennisgeving", "Digitale projecten en tokens kunnen hoog risico inhouden.", "Geen advies", "Niets op deze site is financieel, juridisch of beleggingsadvies.", "Verifiëren", "Controleer altijd officiële links en aankondigingen voordat u handelt."]
    ),
    sv: legalPages(
      ["Användarvillkor", "Korta villkor för att besöka puriKRON-webbplatsen och relaterade sidor.", "Användning", "Använd webbplatsen ansvarsfullt. Missbruka inte varumärke, länkar eller kontaktkanaler.", "Innehåll", "Projektinnehåll är allmän information och kan ändras utan meddelande.", "Kontakt", "Frågor kan skickas till hq@tvk.group."],
      ["Integritetspolicy", "En enkel integritetssammanfattning för denna statiska flerspråkiga webbplats.", "Data", "Denna webbplats håller datainsamling minimal.", "Språk", "Ditt språkval kan sparas lokalt i webbläsaren.", "Kontakt", "Integritetsfrågor kan skickas till hq@tvk.group."],
      ["Riskinformation", "En tydlig påminnelse för besökare som utvärderar digitala projekt.", "Meddelande", "Digitala projekt och tokens kan innebära hög risk.", "Ingen rådgivning", "Inget på denna webbplats är finansiell, juridisk eller investeringsrådgivning.", "Verifiera", "Verifiera alltid officiella länkar och meddelanden innan du agerar."]
    ),
    no: legalPages(
      ["Bruksvilkår", "Korte vilkår for å besøke puriKRON-nettstedet og relaterte prosjektsider.", "Bruk", "Bruk nettstedet ansvarlig. Ikke misbruk merkevare, lenker eller kontaktkanaler.", "Innhold", "Prosjektinnhold er generell informasjon og kan endres uten varsel.", "Kontakt", "Spørsmål kan sendes til hq@tvk.group."],
      ["Personvernerklæring", "En enkel personvernoppsummering for dette statiske flerspråklige nettstedet.", "Data", "Dette nettstedet holder datainnsamling minimal.", "Språk", "Språkvalget ditt kan lagres lokalt i nettleseren.", "Kontakt", "Personvernspørsmål kan sendes til hq@tvk.group."],
      ["Risikoinformasjon", "En tydelig påminnelse for besøkende som vurderer digitale prosjekter.", "Varsel", "Digitale prosjekter og tokens kan innebære høy risiko.", "Ingen rådgivning", "Ingenting på dette nettstedet er finans-, juridisk- eller investeringsrådgivning.", "Verifiser", "Verifiser alltid offisielle lenker og kunngjøringer før du handler."]
    ),
    da: legalPages(
      ["Brugsvilkår", "Korte vilkår for at besøge puriKRON-sitet og relaterede projektsider.", "Brug", "Brug sitet ansvarligt. Misbrug ikke brand, links eller kontaktkanaler.", "Indhold", "Projektindhold er generel information og kan ændres uden varsel.", "Kontakt", "Spørgsmål kan sendes til hq@tvk.group."],
      ["Privatlivspolitik", "En enkel privatlivsoversigt for dette statiske flersprogede site.", "Data", "Dette site holder dataindsamling minimal.", "Sprog", "Dit sprogvalg kan gemmes lokalt i browseren.", "Kontakt", "Privatlivsspørgsmål kan sendes til hq@tvk.group."],
      ["Risikoinformation", "En klar påmindelse til besøgende, der vurderer digitale projekter.", "Bemærkning", "Digitale projekter og tokens kan indebære høj risiko.", "Ingen rådgivning", "Intet på dette site er finansiel, juridisk eller investeringsrådgivning.", "Bekræft", "Bekræft altid officielle links og meddelelser, før du handler."]
    ),
    fi: legalPages(
      ["Käyttöehdot", "Tiiviit ehdot puriKRON-sivuston ja liittyvien projektisivujen selaamiseen.", "Käyttö", "Käytä sivustoa vastuullisesti. Älä väärinkäytä brändiä, linkkejä tai yhteyskanavia.", "Sisältö", "Projektisisältö on yleistä tietoa ja voi muuttua ilman ilmoitusta.", "Yhteys", "Kysymykset voi lähettää osoitteeseen hq@tvk.group."],
      ["Tietosuojakäytäntö", "Yksinkertainen tietosuojayhteenveto tälle staattiselle monikieliselle sivustolle.", "Data", "Tämä sivusto pitää tiedonkeruun vähäisenä.", "Kieli", "Kielivalintasi voidaan tallentaa paikallisesti selaimeesi.", "Yhteys", "Tietosuojakysymykset voi lähettää osoitteeseen hq@tvk.group."],
      ["Riskitiedote", "Selkeä muistutus kävijöille, jotka arvioivat digitaalisia projekteja.", "Huomautus", "Digitaaliset projektit ja tokenit voivat sisältää suurta riskiä.", "Ei neuvontaa", "Mikään tällä sivustolla ei ole taloudellista, juridista tai sijoitusneuvontaa.", "Varmista", "Tarkista aina viralliset linkit ja ilmoitukset ennen toimintaa."]
    ),
    pl: legalPages(
      ["Warunki użytkowania", "Zwięzłe warunki korzystania ze strony puriKRON i powiązanych stron projektu.", "Użycie", "Korzystaj ze strony odpowiedzialnie. Nie nadużywaj marki, linków ani kanałów kontaktu.", "Treść", "Treści projektu mają charakter ogólny i mogą zmienić się bez powiadomienia.", "Kontakt", "Pytania można wysłać na hq@tvk.group."],
      ["Polityka prywatności", "Proste podsumowanie prywatności dla tej statycznej wielojęzycznej strony.", "Dane", "Ta strona ogranicza zbieranie danych do minimum.", "Język", "Twój wybór języka może być zapisany lokalnie w przeglądarce.", "Kontakt", "Pytania o prywatność można wysłać na hq@tvk.group."],
      ["Ujawnienie ryzyka", "Jasne przypomnienie dla odwiedzających oceniających projekty cyfrowe.", "Uwaga", "Projekty cyfrowe i tokeny mogą wiązać się z wysokim ryzykiem.", "Brak porady", "Nic na tej stronie nie jest poradą finansową, prawną ani inwestycyjną.", "Weryfikuj", "Zawsze weryfikuj oficjalne linki i ogłoszenia przed działaniem."]
    ),
    cs: legalPages(
      ["Podmínky použití", "Stručné podmínky pro procházení webu puriKRON a souvisejících projektových stránek.", "Použití", "Používejte web odpovědně. Nezneužívejte značku, odkazy ani kontaktní kanály.", "Obsah", "Obsah projektu je obecná informace a může se změnit bez upozornění.", "Kontakt", "Dotazy lze poslat na hq@tvk.group."],
      ["Zásady soukromí", "Jednoduchý souhrn soukromí pro tento statický vícejazyčný web.", "Data", "Tento web udržuje sběr dat minimální.", "Jazyk", "Vaše volba jazyka může být uložena lokálně v prohlížeči.", "Kontakt", "Dotazy k soukromí lze poslat na hq@tvk.group."],
      ["Upozornění na rizika", "Jasná připomínka pro návštěvníky hodnotící digitální projekty.", "Upozornění", "Digitální projekty a tokeny mohou nést vysoké riziko.", "Žádné poradenství", "Nic na tomto webu není finanční, právní ani investiční rada.", "Ověřit", "Před jednáním vždy ověřte oficiální odkazy a oznámení."]
    ),
    ro: legalPages(
      ["Termeni de utilizare", "Termeni conciși pentru navigarea site-ului puriKRON și a paginilor asociate.", "Utilizare", "Folosiți site-ul responsabil. Nu abuzați de brand, linkuri sau canale de contact.", "Conținut", "Conținutul proiectului este informativ și se poate schimba fără notificare.", "Contact", "Întrebările pot fi trimise la hq@tvk.group."],
      ["Politica de confidențialitate", "Rezumat simplu de confidențialitate pentru acest site static multilingv.", "Date", "Acest site menține colectarea datelor la minimum.", "Limbă", "Alegerea limbii poate fi stocată local în browser.", "Contact", "Întrebările de confidențialitate pot fi trimise la hq@tvk.group."],
      ["Dezvăluire de risc", "Reamintire clară pentru vizitatorii care evaluează proiecte digitale.", "Notificare", "Proiectele digitale și tokenurile pot implica risc ridicat.", "Fără consultanță", "Nimic de pe acest site nu este consultanță financiară, juridică sau de investiții.", "Verificați", "Verificați mereu linkurile și anunțurile oficiale înainte de a acționa."]
    ),
    el: legalPages(
      ["Όροι χρήσης", "Σύντομοι όροι για περιήγηση στον ιστότοπο puriKRON και σχετικές σελίδες έργου.", "Χρήση", "Χρησιμοποιήστε τον ιστότοπο υπεύθυνα. Μην κάνετε κατάχρηση μάρκας, συνδέσμων ή καναλιών επικοινωνίας.", "Περιεχόμενο", "Το περιεχόμενο του έργου είναι γενική πληροφορία και μπορεί να αλλάξει χωρίς ειδοποίηση.", "Επικοινωνία", "Οι ερωτήσεις μπορούν να σταλούν στο hq@tvk.group."],
      ["Πολιτική απορρήτου", "Απλή σύνοψη απορρήτου για αυτόν τον στατικό πολύγλωσσο ιστότοπο.", "Δεδομένα", "Ο ιστότοπος κρατά τη συλλογή δεδομένων ελάχιστη.", "Γλώσσα", "Η επιλογή γλώσσας μπορεί να αποθηκευτεί τοπικά στο πρόγραμμα περιήγησης.", "Επικοινωνία", "Ερωτήσεις απορρήτου μπορούν να σταλούν στο hq@tvk.group."],
      ["Γνωστοποίηση κινδύνου", "Σαφής υπενθύμιση για επισκέπτες που αξιολογούν ψηφιακά έργα.", "Ειδοποίηση", "Τα ψηφιακά έργα και token μπορεί να έχουν υψηλό κίνδυνο.", "Όχι συμβουλή", "Τίποτα εδώ δεν αποτελεί οικονομική, νομική ή επενδυτική συμβουλή.", "Επαλήθευση", "Πάντα επαληθεύετε επίσημους συνδέσμους και ανακοινώσεις πριν ενεργήσετε."]
    ),
    ru: legalPages(
      ["Условия использования", "Краткие условия просмотра сайта puriKRON и связанных страниц проекта.", "Использование", "Используйте сайт ответственно. Не злоупотребляйте брендом, ссылками или каналами связи.", "Контент", "Контент проекта представлен как общая информация и может изменяться без уведомления.", "Контакт", "Вопросы можно отправить на hq@tvk.group."],
      ["Политика конфиденциальности", "Простое резюме конфиденциальности для этого статического многоязычного сайта.", "Данные", "Этот сайт сохраняет сбор данных минимальным.", "Язык", "Ваш выбор языка может храниться локально в браузере.", "Контакт", "Вопросы о конфиденциальности можно отправить на hq@tvk.group."],
      ["Раскрытие рисков", "Четкое напоминание для посетителей, оценивающих цифровые проекты.", "Уведомление", "Цифровые проекты и токены могут иметь высокий риск.", "Не совет", "Ничто на этом сайте не является финансовой, юридической или инвестиционной рекомендацией.", "Проверяйте", "Всегда проверяйте официальные ссылки и объявления перед действиями."]
    ),
    ar: legalPages(
      ["شروط الاستخدام", "شروط موجزة لتصفح موقع puriKRON وصفحات المشروع المرتبطة.", "الاستخدام", "استخدم الموقع بمسؤولية. لا تسيء استخدام العلامة أو الروابط أو قنوات التواصل.", "المحتوى", "يعرض محتوى المشروع كمعلومات عامة وقد يتغير دون إشعار.", "التواصل", "يمكن إرسال الأسئلة إلى hq@tvk.group."],
      ["سياسة الخصوصية", "ملخص خصوصية بسيط لهذا الموقع الثابت متعدد اللغات.", "البيانات", "يحافظ هذا الموقع على جمع بيانات محدود.", "اللغة", "قد يتم حفظ اختيار اللغة محلياً في متصفحك.", "التواصل", "يمكن إرسال أسئلة الخصوصية إلى hq@tvk.group."],
      ["إفصاح المخاطر", "تذكير واضح للزوار الذين يقيمون مشاريع رقمية.", "تنبيه", "قد تتضمن المشاريع الرقمية والرموز مخاطر عالية.", "ليست نصيحة", "لا يوجد في هذا الموقع أي نصيحة مالية أو قانونية أو استثمارية.", "تحقق", "تحقق دائماً من الروابط والإعلانات الرسمية قبل التصرف."]
    ),
    he: legalPages(
      ["תנאי שימוש", "תנאים תמציתיים לגלישה באתר puriKRON ובעמודי פרויקט קשורים.", "שימוש", "השתמשו באתר באחריות. אל תנצלו לרעה מיתוג, קישורים או ערוצי קשר.", "תוכן", "תוכן הפרויקט מוצג כמידע כללי ועשוי להשתנות ללא הודעה.", "יצירת קשר", "ניתן לשלוח שאלות אל hq@tvk.group."],
      ["מדיניות פרטיות", "סיכום פרטיות פשוט לאתר סטטי ורב-לשוני זה.", "נתונים", "האתר שומר על איסוף נתונים מינימלי.", "שפה", "בחירת השפה עשויה להישמר מקומית בדפדפן.", "יצירת קשר", "שאלות פרטיות ניתן לשלוח אל hq@tvk.group."],
      ["גילוי סיכונים", "תזכורת ברורה למבקרים הבוחנים פרויקטים דיגיטליים.", "הודעה", "פרויקטים דיגיטליים וטוקנים עשויים לכלול סיכון גבוה.", "לא ייעוץ", "שום דבר באתר אינו ייעוץ פיננסי, משפטי או השקעות.", "אימות", "תמיד אמתו קישורים והודעות רשמיים לפני פעולה."]
    ),
    zh: legalPages(
      ["使用条款", "浏览 puriKRON 网站及相关项目页面的简明条款。", "使用", "请负责任地使用本网站。不得滥用品牌、链接或联系渠道。", "内容", "项目内容仅作一般信息展示，可能随时更改。", "联系", "问题可发送至 hq@tvk.group。"],
      ["隐私政策", "本静态多语言网站的简单隐私摘要。", "数据", "本网站尽量减少数据收集。", "语言", "您的语言选择可能会本地保存在浏览器中。", "联系", "隐私问题可发送至 hq@tvk.group。"],
      ["风险披露", "面向评估数字生态项目访问者的清晰提醒。", "提示", "数字项目和代币可能涉及高风险。", "非建议", "本网站内容不构成财务、法律或投资建议。", "验证", "行动前请始终验证官方链接和公告。"]
    ),
    ja: legalPages(
      ["利用規約", "puriKRONサイトおよび関連プロジェクトページを閲覧するための簡潔な規約。", "利用", "サイトを責任を持って利用してください。ブランド、リンク、連絡手段を悪用しないでください。", "コンテンツ", "プロジェクト内容は一般情報であり、予告なく変更される場合があります。", "連絡", "質問は hq@tvk.group へ送信できます。"],
      ["プライバシーポリシー", "この静的な多言語サイトの簡単なプライバシー概要。", "データ", "このサイトはデータ収集を最小限にします。", "言語", "言語選択はブラウザにローカル保存される場合があります。", "連絡", "プライバシーに関する質問は hq@tvk.group へ送信できます。"],
      ["リスク開示", "デジタルエコシステムプロジェクトを評価する訪問者への明確な注意。", "通知", "デジタルプロジェクトやトークンには高いリスクが伴う場合があります。", "助言ではありません", "本サイトの内容は金融、法律、投資助言ではありません。", "確認", "行動前に公式リンクと発表を必ず確認してください。"]
    ),
    ko: legalPages(
      ["이용 약관", "puriKRON 사이트와 관련 프로젝트 페이지 탐색을 위한 간결한 약관입니다.", "이용", "사이트를 책임 있게 이용하세요. 브랜드, 링크, 연락 채널을 오용하지 마세요.", "콘텐츠", "프로젝트 콘텐츠는 일반 정보이며 예고 없이 변경될 수 있습니다.", "연락", "질문은 hq@tvk.group 으로 보낼 수 있습니다."],
      ["개인정보 처리방침", "이 정적 다국어 사이트를 위한 간단한 개인정보 요약입니다.", "데이터", "이 사이트는 데이터 수집을 최소화합니다.", "언어", "언어 선택은 브라우저에 로컬로 저장될 수 있습니다.", "연락", "개인정보 질문은 hq@tvk.group 으로 보낼 수 있습니다."],
      ["위험 고지", "디지털 생태계 프로젝트를 평가하는 방문자를 위한 명확한 안내입니다.", "공지", "디지털 프로젝트와 토큰에는 높은 위험이 있을 수 있습니다.", "조언 아님", "이 사이트의 어떤 내용도 금융, 법률 또는 투자 조언이 아닙니다.", "확인", "행동하기 전에 항상 공식 링크와 발표를 확인하세요."]
    ),
    hi: legalPages(
      ["उपयोग की शर्तें", "puriKRON साइट और संबंधित प्रोजेक्ट पेज देखने के लिए संक्षिप्त शर्तें।", "उपयोग", "साइट का जिम्मेदारी से उपयोग करें। ब्रांड, लिंक या संपर्क चैनलों का दुरुपयोग न करें।", "सामग्री", "प्रोजेक्ट सामग्री सामान्य जानकारी के लिए है और बिना सूचना बदल सकती है।", "संपर्क", "प्रश्न hq@tvk.group पर भेजे जा सकते हैं।"],
      ["गोपनीयता नीति", "इस स्थिर बहुभाषी साइट के लिए सरल गोपनीयता सारांश।", "डेटा", "यह साइट डेटा संग्रह न्यूनतम रखती है।", "भाषा", "आपकी भाषा पसंद ब्राउज़र में स्थानीय रूप से संग्रहीत हो सकती है।", "संपर्क", "गोपनीयता प्रश्न hq@tvk.group पर भेजे जा सकते हैं।"],
      ["जोखिम प्रकटीकरण", "डिजिटल इकोसिस्टम प्रोजेक्ट का मूल्यांकन करने वाले आगंतुकों के लिए स्पष्ट स्मरण।", "सूचना", "डिजिटल प्रोजेक्ट और टोकन में उच्च जोखिम हो सकता है।", "सलाह नहीं", "इस साइट पर कुछ भी वित्तीय, कानूनी या निवेश सलाह नहीं है।", "सत्यापित करें", "कार्य करने से पहले हमेशा आधिकारिक लिंक और घोषणाएं सत्यापित करें।"]
    ),
    id: legalPages(
      ["Ketentuan penggunaan", "Ketentuan ringkas untuk menelusuri situs puriKRON dan halaman proyek terkait.", "Penggunaan", "Gunakan situs secara bertanggung jawab. Jangan menyalahgunakan merek, tautan, atau kanal kontak.", "Konten", "Konten proyek disajikan sebagai informasi umum dan dapat berubah tanpa pemberitahuan.", "Kontak", "Pertanyaan dapat dikirim ke hq@tvk.group."],
      ["Kebijakan privasi", "Ringkasan privasi sederhana untuk situs statis multibahasa ini.", "Data", "Situs ini menjaga pengumpulan data tetap minimal.", "Bahasa", "Pilihan bahasa Anda dapat disimpan secara lokal di browser.", "Kontak", "Pertanyaan privasi dapat dikirim ke hq@tvk.group."],
      ["Pengungkapan risiko", "Pengingat jelas bagi pengunjung yang menilai proyek ekosistem digital.", "Pemberitahuan", "Proyek digital dan token dapat melibatkan risiko tinggi.", "Bukan nasihat", "Tidak ada di situs ini yang merupakan nasihat finansial, hukum, atau investasi.", "Verifikasi", "Selalu verifikasi tautan dan pengumuman resmi sebelum bertindak."]
    ),
    uk: legalPages(
      ["Умови використання", "Стислі умови перегляду сайту puriKRON і пов'язаних сторінок проєкту.", "Використання", "Користуйтеся сайтом відповідально. Не зловживайте брендом, посиланнями або каналами зв'язку.", "Контент", "Контент проєкту є загальною інформацією і може змінюватися без повідомлення.", "Контакт", "Питання можна надіслати на hq@tvk.group."],
      ["Політика приватності", "Простий підсумок приватності для цього статичного багатомовного сайту.", "Дані", "Цей сайт зводить збір даних до мінімуму.", "Мова", "Ваш вибір мови може зберігатися локально у браузері.", "Контакт", "Питання приватності можна надіслати на hq@tvk.group."],
      ["Розкриття ризиків", "Чітке нагадування для відвідувачів, які оцінюють цифрові проєкти.", "Повідомлення", "Цифрові проєкти й токени можуть мати високий ризик.", "Не порада", "Ніщо на цьому сайті не є фінансовою, юридичною чи інвестиційною порадою.", "Перевіряйте", "Завжди перевіряйте офіційні посилання та оголошення перед діями."]
    )
  };

  function legalPages(terms, privacy, risk) {
    return {
      terms: pageFromFlatArray(terms),
      privacy: pageFromFlatArray(privacy),
      risk: pageFromFlatArray(risk)
    };
  }

  function pageFromFlatArray(values) {
    return {
      title: values[0],
      lead: values[1],
      cards: [
        { title: values[2], text: values[3] },
        { title: values[4], text: values[5] },
        { title: values[6], text: values[7] }
      ]
    };
  }

  function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    const saved = window.localStorage.getItem("purikron-language");
    const browser = (window.navigator.language || "en").slice(0, 2).toLowerCase();
    return normalizeLanguage(requested) || normalizeLanguage(saved) || normalizeLanguage(browser) || "en";
  }

  function normalizeLanguage(value) {
    if (!value) return "";
    const normalized = String(value).toLowerCase();
    return copy[normalized] ? normalized : "";
  }

  function translate(key, language) {
    return (copy[language] && copy[language][key]) || copy.en[key] || key;
  }

  function localizeUrl(href, language) {
    if (!href || href.startsWith("mailto:") || href.startsWith("http")) return href;
    const url = new URL(href, window.location.origin);
    url.searchParams.set("lang", language);
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function renderLanguageOptions(select, language) {
    select.innerHTML = "";
    languages.forEach(([code, label]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = label;
      option.selected = code === language;
      select.append(option);
    });
  }

  function renderLegalPage(language) {
    const page = document.body.dataset.page;
    if (!["terms", "privacy", "risk"].includes(page)) return;

    const pageCopy = (legal[language] && legal[language][page]) || legal.en[page];
    const kicker = document.querySelector("[data-legal-kicker]");
    const title = document.querySelector("[data-page-title]");
    const lead = document.querySelector("[data-page-lead]");
    const grid = document.querySelector("[data-legal-cards]");

    if (kicker) kicker.textContent = translate("legalKicker", language);
    if (title) title.textContent = pageCopy.title;
    if (lead) lead.textContent = pageCopy.lead;
    if (grid) {
      grid.innerHTML = "";
      pageCopy.cards.forEach((card) => {
        const article = document.createElement("article");
        article.className = "legal-card";
        article.innerHTML = `<h2></h2><p></p>`;
        article.querySelector("h2").textContent = card.title;
        article.querySelector("p").textContent = card.text;
        grid.append(article);
      });
    }

    document.title = `${pageCopy.title} | puriKRON`;
  }

  function applyLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = rtlLanguages.has(language) ? "rtl" : "ltr";
    window.localStorage.setItem("purikron-language", language);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n, language);
    });

    document.querySelectorAll("[data-localized-link]").forEach((element) => {
      element.setAttribute("href", localizeUrl(element.getAttribute("href"), language));
    });

    const select = document.getElementById("language-select");
    if (select) {
      select.value = language;
      select.setAttribute("aria-label", translate("languageLabel", language));
    }

    renderLegalPage(language);

    const current = new URL(window.location.href);
    current.searchParams.set("lang", language);
    window.history.replaceState({}, "", `${current.pathname}${current.search}${current.hash}`);
  }

  const language = getInitialLanguage();
  const select = document.getElementById("language-select");

  if (select) {
    renderLanguageOptions(select, language);
    select.addEventListener("change", (event) => applyLanguage(event.target.value));
  }

  applyLanguage(language);
})();
