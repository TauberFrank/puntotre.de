/*
 * Kuratorische Testdaten fuer den WPE-Showroom.
 * Die Praesentationslogik in showroom.js kennt keine Puntotre-spezifische Datenquelle.
 * Bei der Uebernahme nach WPE wird dieses Objekt aus den vorhandenen Kombinationsdaten erzeugt.
 */
window.WPEShowroomConfig = {
  version: '2026-07-29.1',
  brand: {
    name: 'Waschplatz-Experten',
    label: 'WASCHPLATZ–EXPERTEN',
    homeUrl: 'https://www.waschplatz-experten.com/'
  },
  links: {
    plan: 'https://www.waschplatz-experten.com/planen/online-planung.html',
    allIdeas: 'https://www.waschplatz-experten.com/design/kombinationen/rundgang/',
    favorites: 'https://www.waschplatz-experten.com/kunden/merkliste.html'
  },
  hero: {
    eyebrow: 'Digitaler Showroom',
    title: 'Räume,\ndie bleiben.',
    intro: 'Nicht zuerst Maße. Erst die Wirkung.',
    slides: [
      { image: 'assets/kombis/kombis_alto-07_main-2.webp', alt: 'Ausdrucksstarker Waschplatz mit rotem Naturstein' },
      { image: 'assets/kombis/kombis_vertigoevo-05_main-3.webp', alt: 'Architektonischer Waschplatz mit klaren Linien' },
      { image: 'assets/kombis/kombis_reverso-14_main.webp', alt: 'Großzügiger blauer Waschplatz mit ruhiger Raumwirkung' },
      { image: 'assets/kombis/kombis_art-05_main.webp', alt: 'Eleganter dunkler Waschplatz mit besonderer Lichtwirkung' }
    ]
  },
  statement: {
    eyebrow: 'Der Raum beginnt nicht an der Wand',
    title: 'Ein Waschplatz ist kein Möbelstück am Rand.',
    copy: 'Er prägt den Raum. Jeden Morgen. Viele Jahre. Deshalb beginnt gute Planung nicht mit einer Artikelliste, sondern mit einem Bild davon, wie sich der Raum anfühlen soll.'
  },
  worldsIntro: {
    eyebrow: 'Vier Wege hinein',
    title: 'Welche Wirkung zieht Sie an?'
  },
  worlds: [
    {
      id: 'leise-kraft',
      number: '01',
      title: 'Leise Kraft',
      subtitle: 'Helle Töne. Natürliche Oberflächen. Ruhe, die nicht langweilig wird.',
      image: 'assets/kombis/kombis_reverso-04_main.webp',
      position: 'center',
      items: [
        {
          id: 'ola-nw213b',
          name: 'OLA',
          mood: 'Weiche Linien und natürliche Töne machen aus Funktion eine ruhige Selbstverständlichkeit.',
          image: 'assets/kombis/kombis_ola-nw213b_main.webp',
          thumb: 'assets/kombis/thumb/kombis_ola-nw213b_main.webp',
          detailUrl: 'ola.html',
          series: 'OLA',
          manufacturer: 'Puntotre',
          material: 'Möbelwaschtisch und Badmöbel',
          character: 'organisch · warm · ruhig'
        },
        {
          id: 'young-21-01',
          name: 'YOUNG',
          mood: 'Helle Flächen, Holz und ein klarer Rhythmus geben dem Raum Wärme ohne Schwere.',
          image: 'assets/kombis/kombis_young-21-01_main-2.webp',
          thumb: 'assets/kombis/thumb/kombis_young-21-01_main.webp',
          detailUrl: 'young.html',
          series: 'YOUNG',
          manufacturer: 'Puntotre',
          material: 'Badmöbel mit individueller Waschtischlösung',
          character: 'natürlich · leicht · wohnlich'
        },
        {
          id: 'reverso-04',
          name: 'REVERSO',
          mood: 'Zurückhaltende Farbe und präzise Proportionen schaffen eine Ruhe, die bewusst gestaltet ist.',
          image: 'assets/kombis/kombis_reverso-04_main.webp',
          thumb: 'assets/kombis/thumb/kombis_reverso-04_main.webp',
          detailUrl: 'reverso.html',
          series: 'REVERSO',
          manufacturer: 'Puntotre',
          material: 'Modulares Badmöbelsystem',
          character: 'sanft · präzise · zeitlos'
        }
      ]
    },
    {
      id: 'klare-linie',
      number: '02',
      title: 'Klare Linie',
      subtitle: 'Kontraste, Präzision und eine Architektur, die nichts beweisen muss.',
      image: 'assets/kombis/kombis_alto-03_main.webp',
      position: 'center',
      items: [
        {
          id: 'alto-03',
          name: 'ALTO',
          mood: 'Strenge Linien und dunkle Flächen formen einen Waschplatz mit architektonischer Präsenz.',
          image: 'assets/kombis/kombis_alto-03_main.webp',
          thumb: 'assets/kombis/thumb/kombis_alto-03_main.webp',
          detailUrl: 'alto.html',
          series: 'ALTO',
          manufacturer: 'Puntotre',
          material: 'Badmöbel mit geradliniger Waschtischlösung',
          character: 'grafisch · reduziert · stark'
        },
        {
          id: 'vertigo-01',
          name: 'VERTIGO',
          mood: 'Eine ruhige Komposition aus Horizontalen, Licht und klar gesetzten Volumen.',
          image: 'assets/kombis/kombis_vertigo-01_main-2.webp',
          thumb: 'assets/kombis/thumb/kombis_vertigo-01_main-2.webp',
          detailUrl: 'vertigo.html',
          series: 'VERTIGO',
          manufacturer: 'Puntotre',
          material: 'Modulares Badmöbelsystem',
          character: 'linear · großzügig · souverän'
        },
        {
          id: 'vertigo-evolution-05',
          name: 'VERTIGO EVOLUTION',
          mood: 'Reduktion wird nicht kühl, wenn Material, Licht und Proportion miteinander arbeiten.',
          image: 'assets/kombis/kombis_vertigoevo-05_main-3.webp',
          thumb: 'assets/kombis/thumb/kombis_vertigoevo-05_main-3.webp',
          detailUrl: 'vertigo.html',
          series: 'VERTIGO EVOLUTION',
          manufacturer: 'Puntotre',
          material: 'Badmöbel und Waschtisch als Gesamtkomposition',
          character: 'präzise · kontrastreich · modern'
        }
      ]
    },
    {
      id: 'farbe-bekennen',
      number: '03',
      title: 'Farbe bekennen',
      subtitle: 'Material und Farbe nicht als Akzent. Als Haltung.',
      image: 'assets/kombis/kombis_alto-07_main-2.webp',
      position: 'center',
      items: [
        {
          id: 'alto-07',
          name: 'ALTO',
          mood: 'Naturstein, Relief und ein mutiger Farbton machen den Waschplatz zum Mittelpunkt des Raumes.',
          image: 'assets/kombis/kombis_alto-07_main-2.webp',
          thumb: 'assets/kombis/thumb/kombis_alto-07_main-2.webp',
          detailUrl: 'alto.html',
          series: 'ALTO',
          manufacturer: 'Puntotre',
          material: 'Natursteinwirkung und strukturierte Fronten',
          character: 'expressiv · sinnlich · unverwechselbar'
        },
        {
          id: 'art-08',
          name: 'ART',
          mood: 'Farbe, Form und Spiegel treten gemeinsam auf – selbstbewusst, aber nicht laut.',
          image: 'assets/kombis/kombis_art-08_main.webp',
          thumb: 'assets/kombis/thumb/kombis_art-08_main.webp',
          detailUrl: 'art.html',
          series: 'ART',
          manufacturer: 'Puntotre',
          material: 'Badmöbel mit individueller Farb- und Spiegelgestaltung',
          character: 'künstlerisch · farbig · eigenständig'
        },
        {
          id: 'reverso-10',
          name: 'REVERSO',
          mood: 'Ein warmer Roséton verändert die Atmosphäre, ohne die Klarheit der Form aufzugeben.',
          image: 'assets/kombis/kombis_reverso-10_main.webp',
          thumb: 'assets/kombis/thumb/kombis_reverso-10_main.webp',
          detailUrl: 'reverso.html',
          series: 'REVERSO',
          manufacturer: 'Puntotre',
          material: 'Modulares Badmöbelsystem',
          character: 'warm · mutig · elegant'
        }
      ]
    },
    {
      id: 'grosse-geste',
      number: '04',
      title: 'Große Geste',
      subtitle: 'Großzügige Proportionen und Details, die erst beim zweiten Blick auffallen.',
      image: 'assets/kombis/kombis_reverso-09_main.webp',
      position: 'center',
      items: [
        {
          id: 'reverso-09',
          name: 'REVERSO',
          mood: 'Große Flächen, feine Details und ein ruhiger Aufbau geben dem Raum selbstverständliche Größe.',
          image: 'assets/kombis/kombis_reverso-09_main.webp',
          thumb: 'assets/kombis/thumb/kombis_reverso-09_main.webp',
          detailUrl: 'reverso.html',
          series: 'REVERSO',
          manufacturer: 'Puntotre',
          material: 'Großzügige modulare Waschplatzlösung',
          character: 'weit · hochwertig · souverän'
        },
        {
          id: 'accademia-34',
          name: 'ACCADEMIA',
          mood: 'Klassische Anklänge treffen auf klare Proportionen und eine ungewöhnliche Materialwirkung.',
          image: 'assets/kombis/kombis_accademia-34_main.webp',
          thumb: 'assets/kombis/kombis_accademia-34_main.webp',
          detailUrl: 'index.html#ws-planning',
          series: 'ACCADEMIA',
          manufacturer: 'Puntotre',
          material: 'Badmöbel und Waschtisch als individuelle Komposition',
          character: 'repräsentativ · detailreich · besonders'
        },
        {
          id: 'reverso-14',
          name: 'REVERSO',
          mood: 'Ein tiefer Blauton, viel Fläche und wenige präzise Linien schaffen einen Raum mit Haltung.',
          image: 'assets/kombis/kombis_reverso-14_main.webp',
          thumb: 'assets/kombis/thumb/kombis_reverso-14_main.webp',
          detailUrl: 'reverso.html',
          series: 'REVERSO',
          manufacturer: 'Puntotre',
          material: 'Modulares Badmöbelsystem',
          character: 'großzügig · tief · charaktervoll'
        }
      ]
    }
  ],
  showcase: {
    eyebrow: 'Was hängen bleibt',
    title: 'Nicht auswählen. Entdecken.',
    copy: 'Manche Ideen wirken sofort. Andere erst im Detail. Beides gehört zu einem Waschplatz, der nicht nach Katalog aussieht.',
    items: [
      { image: 'assets/kombis/kombis_reverso-09_main.webp', alt: 'Großzügiger Waschplatz Reverso', size: 'tall', world: 'grosse-geste' },
      { image: 'assets/kombis/kombis_reverso-04_detail-2.webp', alt: 'Detailaufnahme einer Reverso-Komposition', size: 'standard', world: 'leise-kraft' },
      { image: 'assets/kombis/kombis_alto-07_detail-1.webp', alt: 'Detailaufnahme Naturstein und Frontstruktur', size: 'standard', world: 'farbe-bekennen' },
      { image: 'assets/kombis/kombis_vertigoevo-05_detail-1.webp', alt: 'Detailaufnahme einer klaren Waschtisch-Komposition', size: 'wide', world: 'klare-linie' },
      { image: 'assets/kombis/kombis_young-nw205b_detail-2.webp', alt: 'Detailaufnahme einer natürlichen Badmöbel-Lösung', size: 'standard', world: 'leise-kraft' }
    ]
  },
  materials: {
    eyebrow: 'Material und Nähe',
    title: 'Nähe verändert alles.',
    copy: 'Oberfläche, Kante, Fuge, Licht: Die Qualität eines Waschplatzes zeigt sich nicht nur im großen Bild. Sie zeigt sich dort, wo man jeden Tag hinsieht und hingreift.',
    items: [
      { image: 'assets/details/details_detail-glaswaschtisch.webp', label: 'Oberfläche' },
      { image: 'assets/details/details_detail-tiefenversatz.webp', label: 'Proportion' },
      { image: 'assets/details/details_detail-updown-griffleiste.webp', label: 'Detail' },
      { image: 'assets/muster/thumb/muster_echtholz-080-nussbaum.webp', label: 'Holz' },
      { image: 'assets/muster/thumb/muster_glaks-n179m-agave-cannettato.webp', label: 'Struktur' },
      { image: 'assets/muster/thumb/muster_concrete-lc01.webp', label: 'Materialität' }
    ]
  },
  individual: {
    eyebrow: 'Nicht nur anschauen',
    title: 'Das Bild ist der Anfang. Nicht die Grenze.',
    copy: 'Breite, Tiefe, Waschtisch, Möbel, Spiegel, Licht und Oberfläche werden für Ihren Raum zusammengebracht. Die Inspiration bleibt – die Lösung wird Ihre.',
    image: 'assets/kombis/kombis_vertigo-01_main-2.webp'
  },
  planning: {
    eyebrow: 'Vom Showroom an den Beratungstisch',
    title: 'Gesehen. Gefühlt. Jetzt für Ihren Raum.',
    copy: 'Bringen Sie Ihre Lieblingsrichtung mit. Gemeinsam wird daraus ein Waschplatz, der zu Ihrem Bad, Ihren Maßen und Ihrem Alltag passt.',
    actions: [
      { label: 'Online-Planung starten', urlKey: 'plan', style: 'light' },
      { label: 'Alle Ideen ansehen', urlKey: 'allIdeas', style: 'line' }
    ]
  }
};
