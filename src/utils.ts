import { AccordionContent } from "./components/Accordion/Accordion"

export const emailLinkTeam = '#onboard'
export const emailTextTeam = 'Jetzt bewerben'
export const emailLinkCustomer = '#contact'
export const emailTextCustomer = 'Jetzt buchen'
export const teamArticles = [
  {
    headline: [
      {text: 'Auf uns kannst du ', isOutlined: false},
      {text: 'zählen', isOutlined: true}
    ],
    text: 'Teamwork und Teamgeist werden bei uns groß geschrieben! Denn eine Veranstaltung funktioniert nur dann gut, wenn wir alle zusammenarbeiten und in stetigem Austausch miteinander stehen. Damit das alles effizient funktioniert, wir neues lernen können und -ganz wichtig- daran auch Spaß haben, pflegen wir eine offene Feedbackkultur und stärken unseren Zusammenhalt in Teamevents und auch sehr gerne mal beim Feierabendbier.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam
  },
  {
    headline: [
      {text: 'Wissen & Knowhow ', isOutlined: false},
      {text: 'weitergeben', isOutlined: true}
    ],
    text: 'Um aus einer Gruppe von Menschen ein Team zu machen, ist es wichtig bereits erworbenes Wissen und Know-How zu teilen. Wir sind sehr darauf bedacht, dass Kolleg*innen sich untereinander helfen und unter die Arme greifen. Dies spiegelt sich auch in unseren flachen Hierarchien wider. Wenn ihr neue Arbeitsbereiche kennenlernen oder einfach mehr Verantwortung übernehmen wollt, lernen wir euch im laufenden Betrieb an.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam
  },
  {
    headline: [
      {text: 'Auf Augenhöhe ', isOutlined: false},
      {text: 'sprechen', isOutlined: true}
    ],
    text: 'Durch unsere vielen Jahre in der Veranstaltungsbranche haben wir gelernt: Es braucht Kolleg*innen in Leitungspositionen, die Spaß daran haben, Verantwortung zu übernehmen, Stress produktiv kanalisieren und Erfahrungen weitergeben können. Wichtig ist, dass diese Leitung immer auf Augenhöhe funktioniert – verknöcherte Hierarchien gibt es nämlich schon genug! Offene und konstruktive Kommunikation sind hier das Zauberwort, denn wir sind alle EIN Team! Du möchtest Teil unserer Crew werden? Dann bewirb dich jetzt!',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam
  },
  {
    headline: [
      {text: 'Arbeiten in ', isOutlined: false},
      {text: 'janz ', isOutlined: true},
      {text: 'Börlin', isOutlined: false}
    ],
    text: 'Wir arbeiten mit vielen verschiedenen Locations in ganz Berlin zusammen und jede von ihnen ist einzigartig. Es ist auf jeden Fall für Abwechslung gesorgt: du bist in kleinen und großen Hallen, drinnen sowie unter freiem Himmel. Dies birgt viele Vorteile und die Möglichkeit, sich weiterzuentwickeln. Die unterschiedlichen Arbeitsplätze erfordern aber auch eine hohe Lernbereitschaft und die Fähigkeit sich anzupassen. Du traust dir das zu? Dann klicke hier und werde Teil von SYSTEM.B!',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam
  },
  {
    headline: [
      {text: 'Gemeinsam weiterbilden ', isOutlined: false},
      {text: '& feiern', isOutlined: true}
    ],
    text: 'Nicht alles, was man wissen muss, kann im laufenden Betrieb weitergegeben werden, deshalb gibt es bei uns Teamevents (und nein, das sind keine Partys, die gibt es auch noch ;). In diesen Teamevents bilden wir uns gemeinsam weiter – einerseits in externen Schulungen, andererseits machen wir unsere Erfahrungen transparent und verraten dir unsere Tipps und Tricks. Die Teamevents werden bezahlt und sind uns extrem wichtig. Das klingt gut? Dann klicke hier und bewirb dich jetzt!',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam
  },
  {
    headline: [
      {text: 'Deine Leistung soll ', isOutlined: false},
      {text: 'belohnt ', isOutlined: true},
      {text: 'werden', isOutlined: false}
    ],
    text: 'Eine Schicht bei Veranstaltungen ist oft in den Abendstunden und körperlich fordernd. Ihr müsst rechnen, immer aufmerksam und konzentriert sein und dabei mit vielen Menschen im Kontakt stehen. Kurz gesagt: Gastronomie und Veranstaltungsarbeit fordert Energie. Dafür muss es dann auch die richtige Entlohnung geben. Nicht jeder kann am Anfang gleich alles. Um also einen Anreiz zu schaffen, staffeln wir deine Vergütung nach Expertise. Und selbstverständlich steht dir auch immer dein Trinkgeld zu!',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam
  },
]
const adl =  require('./assets/images/adl.jpg')
const bar =  require('./assets/images/beerbar.jpg')
const glasses =  require('./assets/images/glasses.jpg')
const tech =  require('./assets/images/tech.jpg')
const glasses2 =  require('./assets/images/glasses_2.jpg')
const wardrobe =  require('./assets/images/wardrobe.jpg')
const pans =  require('./assets/images/pans.jpg')
export const teamServices: AccordionContent[] = [
  {
    headline: 'Veranstaltungsleitung ADL´s',
    text: 'Wir vermitteln kompetentes Personal von der Barkraft bis zum Logistiker. Egal ob Konzert, Party, Festival, Biergarten oder Weihnachtsmarkt, jede Veranstaltung ohne Schlips und Kragen wird von uns kundenorientiert umgesetzt. Alle im Team sind im Besitz eines Gesundheitszeugnisses und Zapfen ist bei uns eine Grundausbildung. Einen detaillierten Überblick findest du unter Das Teams.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: adl
  },
  {
    headline: 'Logistik',
    text: 'Du organisierst den Nachschub und sorgst dafür, dass Bars oder Caterings immer mit ausreichend Ware und Equipment versorgt sind. Und obwohl du ein Auge dafür hast, dir Transport und Wege so einfach wie möglich zu machen, fühlst dich erst so richtig wohl, wenn du ins Schwitzen kommst. Und wenn dir Kühlschränke auffüllen nicht mehr reicht und du gute Ideen für Lagerkonzepte hast, gerne eine Logistikcrew anleitest, für dich Kühlketten, CO2-Druck, Hubwagen und Inventur keine Fremdwörter sind hast du definitiv das Zeug als Logistikchef*in durchzustarten.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: bar
  },
  {
    headline: 'Erfahrene Barchef *innen',
    text: 'Wenn du dich hinter einer Bar so richtig wohl fühlst, schon alle Handgriffe beherrschst und deinen Kolleg*innen gerne mal unter die Arme greifst, wird es Zeit eine Bar zu leiten. Als Barchef*in sorgst du für eine effiziente Organisation und einen reibungslosen Betrieb - angefangen beim Aufbau und der Struktur deiner Bar, bis hin zum Anleiten und Anlernen deiner Crew.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: glasses
  }, 
  {
    headline: 'Auf- und Abbau',
    text: 'Arbeite hinter den Kulissen und gestalte mit deinem Team eine Location, die sich sehen lässt. Bühne montieren, Bars bauen, Chillecken einrichten, aus einem Raum oder einer leeren Halle lässt du eine glänzende Eventlocation entstehen und am Ende kannst du mit einem Blick auf das Erschaffene sagen: “Geil geworden, jetzt kommt der Abriss!” Wenn dich das anspricht, bist du richtig im Auf- & Abbau Team.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: tech
  },
  {
    headline: 'Service',
    text: 'Arbeite hinter den Kulissen und gestalte mit deinem Team eine Location, die sich sehen lässt. Bühne montieren, Bars bauen, Chillecken einrichten, aus einem Raum oder einer leeren Halle lässt du eine glänzende Eventlocation entstehen und am Ende kannst du mit einem Blick auf das Erschaffene sagen: “Geil geworden, jetzt kommt der Abriss!” Wenn dich das anspricht, bist du richtig im Auf- & Abbau Team.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: glasses2
  },
  {
    headline: 'Freundliche Garderobencrew',
    text: 'Du nimmst das persönliche Hab und Gut der Besucher*innen entgegen. Dabei bist du schnell und kannst dich in verschiedene Garderobensysteme eindenken. Auch gehst du sorgsam mit den Sachen der Leute um, bist kommunikativ und freundlich. Die Garderobencrew ist meist die erste sowie letzte Ansprechpartnerin auf einer Veranstaltung und trägt somit maßgeblich zum Lösen der kleinen und großen Probleme bei.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: wardrobe
  },
  {
    headline: '„Die Juten“ Cateringhilfen',
    text: 'Die Cateringcrew kümmert sich Backstage um die leibliche Versorgung der Künstler:innen. Hier ist ein großes Maß an Vertrauen gefordert, denn du kommst den Stars hautnah. Schnippeln, spülen, verräumen - du sorgst hinter der Bühne für ein gutes Bauchgefühl.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: pans
  },
  {
    headline: 'Stagehand',
    text: 'Du lädst Trucks aus, schaffst die Cases zu den Bühnen und hilfst beim Aufbau der Ton und Lichtanlagen. Wenn du also gerne mal mit anpackst, körperlich belastbar bist und über ein technisches Grundverständnis verfügst, bist du bei den Stagehands genau richtig. Ihr baut Bühnenpodeste auf, verkabelt die Technik, klebt die Kabelwege ab und unterstützt die Veranstaltungstechniker dabei alle Voraussetzungen für ein gelungenes Konzert zu schaffen.',
    actionLink: emailLinkTeam,
    actionText: emailTextTeam,
    image: tech
  },
]

export const customerArticles = [
  {
    headline: [
      {text: 'Kompetentes', isOutlined: false},
      {text: 'Personal', isOutlined: true}
    ],
    text: 'Du suchst kompetentes Personal für deine Veranstaltung? Dann bist du bei uns genau richtig! Von der Bar bis zur Logistik – bei SYSTEM.B findest du genau die Leute, die dein Event benötigt! Egal ob Konzert, Party, Festival, Biergarten oder Weihnachtsmarkt - jede Veranstaltung ohne Schlips und Kragen wird von uns genauso umgesetzt, wie du es dir wünschst. Bei uns besitzt jeder ein Gesundheitszeugnis und Zapfen ist eine Grundausbildung!',
    actionLink: '#team-structure',
    actionText: 'Zu unseren Services'
  },
  {
    headline: [
      {text: 'Event-organisation', isOutlined: false},
      {text: 'im Detail', isOutlined: true}
    ],
    text: 'Struktur ist das A&O, Chaos im Lager oder hinter der Bar? Kein Problem! Wir unterstützen dich bei der Strukturierung deiner Veranstaltung, denn Gastro will organisiert sein! Zusammen arbeiten wir genau die Ordnung aus, die dir einen glatten Ablauf ermöglicht. Dabei stehen immer die Bedürfnisse deiner Veranstaltung im Vordergrund. Sowohl eine detaillierte Bestandsaufnahme mit transparenter Auswertung, als auch eine Beratung für wirtschaftliches Handeln sind bei uns buchbar.',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer
  },
  {
    headline: [
      {text: 'Produktion', isOutlined: false},
      {text: 'mit Expertise', isOutlined: true}
    ],
    text: 'Licht, Ton, Auf- und Abbau: Events sind viel mehr als nur Gastronomie. Wir stellen dir erfahrene Veranstaltungstechniker*innen zur Seite, die dich bei der Planung und Durchführung deines Projektes unterstützen. Sowohl Sicherheitspersonal und Sani’s, als auch Ausrüstung wie Absperrgitter, Funkgeräte und alles für Licht und Ton organisieren und bestellen wir für dich.',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer
  }
]

export const customerServices: AccordionContent[] = [
  {
    headline: 'Stagehands',
    text: 'Bei unseren Stagehands dreht sich alles um die kleine und große Zuarbeit für die Technik. Cases rollen, Verkabeln helfen und ordentlich mit anpacken, damit Licht und Ton bei deiner Veranstaltung richtig gut zur Geltung kommen.',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: adl
  },
  {
    headline: 'Barpersonal',
    text: 'Die Barcrew ist das freundliche Gesicht deines Events: Sie zaubern deinen Gästen nicht nur ein Lächeln auf die Lippen, sondern auch Getränke schnell und effizient hervor. Die Barchefs kümmern sich um Organisation, greifen dem Team unter die Arme und erledigen alles, was für eine gut laufende Bar wichtig ist. Buche bei uns deine freundliche Barcrew und du brauchst dir um das leibliche Wohl deiner Besucher*innen keine Gedanken mehr zu machen.',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: glasses
  },
  {
    headline: 'Logistiker*innen / Runner',
    text: 'Organisation von Ware und Equipment gehören bei jedem gut laufenden Event dazu – auch wenn es mal sehr voll ist und schnell gehen muss. Unsere Runner versorgen die Bar mit ausreichend Nachschub und kümmern sich um den logistischen Ablauf. Lagerkonzepte, Kühlketten und Inventur inklusive!',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: bar
  },
  {
    headline: 'Cateringhilfen',
    text: 'Natürlich wollen auch deine Artists mit allem versorgt sein, was sie brauchen. Mit unseren Cateringhilfen ist das kein Problem – sie sind backstage für die Künstler*innen da, schnippeln, spülen, verräumen und sorgen für ein gutes Bauchgefühl!',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: pans
  },
  {
    headline: 'Garderobenpersonal',
    text: 'Bei uns ist das Hab und Gut deiner Gäste in guten Händen! Unsere Garderobencrew kümmert sich als erste und letzte Ansprechpartnerin auf deinem Event um alles, was nicht mit auf die Tanzfläche muss – und dass immer mit System und einem freundlichen Lächeln!',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: wardrobe
  },
  {
    headline: 'Auf- und Abbau',
    text: 'Aus einer leeren Halle eine Eventlocation zu bauen, kann manchmal herausfordernd sein. Unser Auf- und Abbau Team geht euch dabei zur Hand, packt mit an beim Bühnen- und Barbau und natürlich auch am Ende beim Abriss. Ihr habt eure ganz eigene Vision von eurer Location? Cool! Das Team hilft euch beim Umsetzen eurer Ideen. Aber auch wenn ihr etwas Inspiration braucht, ist die Crew zur Stelle.',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: tech
  },
  {
    headline: 'Servicepersonal',
    text: 'Du hättest gerne Sektempfang und Flying Snacks? Kein Problem! Unsere Serviceprofis sind für deine Gäste da, behalten das Buffet im Auge und sorgen für ein ordentliches Ambiente. Aufgeschlossen, zuvorkommend und aufmerksam – richtig guter Service eben!',
    actionLink: emailLinkCustomer,
    actionText: emailTextCustomer,
    image: glasses2
  },
]
