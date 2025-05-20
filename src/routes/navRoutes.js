// Grupa Home
export const homeRoutes = [
    "/",
    "/logowanie",
    "/zmianaFirmy",
    "/informacjeoFirmie",
    "/konfiguracja",
    "/odswierzKonfiguracje",
    "/nowoscWwersji",
    "/wlaczNoweFunkcje",
    "/koniecPracy"
];


// Grupa Ogólne
export const ogolneRoutes = [
    "/atrybuty",
    "/cennik",
    "/daneOsobowe",
    "/grupyTowarowe",
    "/kategorie",
    "/kontrahenci",
    "/nowyKontrahent",
    "/nowyTowar",
    "/pracownicy",
    "/przesylkiKurierskie",
    "/rabaty",
    "/raporty",
    "/udzielPelnomocnictwa",
    "/waluty",
    "/wiadomosciSms",
    "/wymiaryOpisuAnalitycznego",
    "/zakupPaczkiSms"
];

// Grupa CRM
export const crmRoutes = [
    "/ankietyAnkietowanie",
    "/ankietyGrupyZapytan",
    "/ankietyPytania",
    "/ankietySzablonyOdpowiedzi",
    "/ankietyWzorceAnkiet",
    "/archiwumWydrukow",
    "/bibliotekaDokumentow",
    "/fakturyCykliczne",
    "/kontakty",
    "/nowyDokument",
    "/ofertyHandlowe",
    "/skrzynkaOperatora",
    "/skrzynkaPocztowa",
    "/terminarz",
    "/wiecejFunkcji",
    "/windykacjaHistoriaZdarzen",
    "/windykacjaSchematy"
];

// Grupa Handel
export const handelRoutes = [
    "/faktury",
    "/fakturyProforma",
    "/fakturyZakupu",
    "/inneHandel",
    "/inneMagazyn",
    "/nowaFaktura",
    "/nowyParagon",
    "/paragony",
    "/przyjeciaZewnetrzne",
    "/raportBrakow",
    "/rezerwacjeOdbiorcy",
    "/rodzajeUrzadzenServis",
    "/sprzedarzDedykowana",
    "/urzadzniaServis",
    "/wydaniaZewnetrzne",
    "/zasoby",
    "/zleceniaCykliczne",
    "/zlecenia",
    "/zleceniaUDostawcy"
];

// Grupa Kasa/Bank
export const kasaBankRoutes = [
    "/delegacje",
    "/dokumentyKompensat",
    "/dokumentyNierozliczone",
    "/dokumentyRozliczone",
    "/historiaWymiany",
    "/klienciBiura",
    "/magazynWalut",
    "/odbierzDane",
    "/preliminarzPlatnosci",
    "/raportyKasowoBankowe",
    "/rejestryKasowoBankowe",
    "/rozliczeniaPodmiotu",
    "/rozniceKursowe",
    "/wyslijDaneKasaBank",
    "/zapisyKasowoBankowe"
];

// Grupa Rejestry VAT
export const rejestryVatRoutes = [
    "/deklaracjeInne",
    "/deklaracjePlikiJPK_V7",
    "/deklaracjeVat_9M",
    "/deklaracjeVatUe",
    "/deklaracjeVat_8",
    "/ewidencjaDodatkowa",
    "/ewidencjaKasowegoPit",
    "/rejestryVat",
    "/strukturaZakupow",
    "/wiadomosciOdKlientow",
    "/wyslijDane"
];

// Grupa Księgowość
export const ksiegowoscRoutes = [
    "/deklaracjeCIT",
    "/deklaracjePIT",
    "/dokumentySrodowTrwalych",
    "/dokumentyZrodlowe",
    "/ewidencjaSrodkowTrwalych",
    "/ewidencjaWyposarzenia",
    "/inwentaryzacja",
    "/samochody",
    "/spisZNatury",
    "/zapisyKPiR"
];

// Grupa JPK
export const jpkRoutes = [
    "/importDoRejetruVat",
    "/informacjeJpk"
];

// Grupa Płace i Kadry
export const placeKadryRoutes = [
    "/deklaracjePfron",
    "/deklaracjePitPracownikow",
    "/deklaracjePpk",
    "/deklaracjeRoczneZswa",
    "/deklarazjeRoczneIwa",
    "/deklarecjeZus",
    "/hrmTs",
    "/kadry",
    "/kasyZapomogowoPorzyczkowePkzp",
    "/listyPlac",
    "/nowyPracownik",
    "/podatekNaPit8ar",
    "/slowniki",
    "/strukturaOrganizacyjna",
    "/wtplatyPracownikow",
    "/zalacznikiNaPit4r",
    "/zusPlikiKedu"
];

// Grupa Widok
export const widokRoutes = [
    "/czcinki",
    "/kompozycjeWidoku",
    "/ustawieniaOgolne",
    "/ustawieniaOkienEksport",
    "/ustawieniaOkienImport",
    "/ustawieniaOkien"
];

// Grupa Pomoc
export const pomocRoutes = [
    "/oprogramie",
    "/pomocFaq",
    "/pomocFilmyInstruktarzowe",
    "/pomocJakZaczac",
    "/pomoc",
    "/pomocSystemObslugiZdarzen",
    "/pomocTwojaIndywidaStrona",
    "/pomocZdalna",
    "/rejestracjaProgramu"
];

// Eksport wszystkich grup
export const allRoutes = {
    home: homeRoutes,
    ogolne: ogolneRoutes,
    crm: crmRoutes,
    handel: handelRoutes,
    kasaBank: kasaBankRoutes,
    rejestryVat: rejestryVatRoutes,
    ksiegowosc: ksiegowoscRoutes,
    jpk: jpkRoutes,
    placeKadry: placeKadryRoutes,
    widok: widokRoutes,
    pomoc: pomocRoutes
};