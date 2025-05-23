import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Główny pasek nawigacyjny - dostęp do wszystkich podstron systemu ERP.
 * Ikony: Bootstrap Icons.
 * Layout zgodny z ERP/CRM. Możesz użyć jako pasek górny w <Navbar>.
 */
const GlownyNavbar = () => {
    return (
        <Nav className="me-auto flex-wrap">
            {/* HOME */}
            <NavDropdown title={<span><i className="bi bi-house-door me-1" />Home</span>} id="home-dropdown">
                <NavDropdown.Item as={Link} to="/"><i className="bi bi-house me-1" />Strona główna</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logowanie"><i className="bi bi-box-arrow-in-right me-1" />Logowanie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zmianaFirmy"><i className="bi bi-building-gear me-1" />Zmiana firmy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/informacjeoFirmie"><i className="bi bi-info-circle me-1" />Informacje o firmie</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/konfiguracja"><i className="bi bi-gear me-1" />Konfiguracja</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/odswierzKonfiguracje"><i className="bi bi-arrow-repeat me-1" />Odśwież konfigurację</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/nowoscWwersji"><i className="bi bi-stars me-1" />Nowości w wersji</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wlaczNoweFunkcje"><i className="bi bi-toggle2-on me-1" />Włącz nowe funkcje</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/koniecPracy"><i className="bi bi-box-arrow-right me-1" />Koniec pracy</NavDropdown.Item>
            </NavDropdown>

            {/* OGÓLNE */}
            <NavDropdown title={<span><i className="bi bi-collection me-1" />Ogólne</span>} id="ogolne-dropdown">
                <NavDropdown.Item as={Link} to="/kontrahenci"><i className="bi bi-people me-1" />Kontrahenci</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyKontrahent"><i className="bi bi-person-plus me-1" />Nowy kontrahent</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pracownicy"><i className="bi bi-person-badge me-1" />Pracownicy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cennik"><i className="bi bi-cash-coin me-1" />Cennik</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyTowar"><i className="bi bi-box-seam me-1" />Nowy towar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/grupyTowarowe"><i className="bi bi-tags me-1" />Grupy towarowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rabaty"><i className="bi bi-percent me-1" />Rabaty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/kategorie"><i className="bi bi-collection-fill me-1" />Kategorie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/atrybuty"><i className="bi bi-sliders2-vertical me-1" />Atrybuty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wymiaryOpisuAnalitycznego"><i className="bi bi-layers-half me-1" />Wymiary opisu analitycznego</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/przesylkiKurierskie"><i className="bi bi-truck me-1" />Przesyłki kurierskie</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wiadomosciSms"><i className="bi bi-chat-dots me-1" />Wiadomości SMS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zakupPaczkiSms"><i className="bi bi-envelope-plus me-1" />Zakup paczki SMS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/raporty"><i className="bi bi-bar-chart me-1" />Raporty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/waluty"><i className="bi bi-currency-exchange me-1" />Waluty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/daneOsobowe"><i className="bi bi-person-vcard me-1" />Dane osobowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/udzielPelnomocnictwa"><i className="bi bi-person-check me-1" />Udziel pełnomocnictwa</NavDropdown.Item>
            </NavDropdown>

            {/* CRM */}
            <NavDropdown title={<span><i className="bi bi-person-lines-fill me-1" />CRM</span>} id="crm-dropdown">
                <NavDropdown.Item as={Link} to="/kontakty"><i className="bi bi-telephone me-1" />Kontakty</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/terminarz"><i className="bi bi-calendar-check me-1" />Terminarz</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/fakturyCykliczne"><i className="bi bi-recycle me-1" />Faktury cykliczne</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ofertyHandlowe"><i className="bi bi-handbag me-1" />Oferty handlowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/archiwumWydrukow"><i className="bi bi-archive me-1" />Archiwum wydruków</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/bibliotekaDokumentow"><i className="bi bi-journal-bookmark me-1" />Biblioteka dokumentów</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyDokument"><i className="bi bi-file-earmark-plus me-1" />Nowy dokument</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/skrzynkaOperatora"><i className="bi bi-inbox me-1" />Skrzynka operatora</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/skrzynkaPocztowa"><i className="bi bi-envelope-open me-1" />Skrzynka pocztowa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/windykacjaSchematy"><i className="bi bi-diagram-3 me-1" />Schematy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/windykacjaHistoriaZdarzen"><i className="bi bi-clock-history me-1" />Historia zdarzeń</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ankietyAnkietowanie"><i className="bi bi-clipboard-check me-1" />Ankietowanie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyWzorceAnkiet"><i className="bi bi-ui-checks me-1" />Wzorce ankietowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyPytania"><i className="bi bi-patch-question me-1" />Pytania</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietySzablonyOdpowiedzi"><i className="bi bi-chat-right-dots me-1" />Szablony odpowiedzi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyGrupyZapytan"><i className="bi bi-list-task me-1" />Grupy zapytań</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wiecejFunkcji"><i className="bi bi-three-dots me-1" />Więcej funkcji</NavDropdown.Item>
            </NavDropdown>

            {/* HANDEL */}
            <NavDropdown title={<span><i className="bi bi-bag me-1" />Handel</span>} id="handel-dropdown">
                <NavDropdown.Item as={Link} to="/faktury"><i className="bi bi-file-earmark-text me-1" />Faktury</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowaFaktura"><i className="bi bi-file-earmark-plus me-1" />Nowa faktura</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/paragony"><i className="bi bi-receipt me-1" />Paragony</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyParagon"><i className="bi bi-plus-square me-1" />Nowy paragon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy"><i className="bi bi-person-check me-1" />Rezerwacje odbiorcy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fakturyProforma"><i className="bi bi-file-earmark-text me-1" />Faktury proforma</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/sprzedarzDedykowana"><i className="bi bi-gift me-1" />Sprzedaż dedykowana</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fakturyZakupu"><i className="bi bi-file-earmark-arrow-down me-1" />Faktury zakupu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zleceniaUDostawcy"><i className="bi bi-truck me-1" />Zlecenia u dostawcy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zasoby"><i className="bi bi-layers me-1" />Zasoby</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/raportBrakow"><i className="bi bi-x-octagon me-1" />Raport braków</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wydaniaZewnetrzne"><i className="bi bi-arrow-right-square me-1" />Wydania zewnętrzne WZ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne"><i className="bi bi-arrow-left-square me-1" />Przyjęcia zewnętrzne PZ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zlecenia"><i className="bi bi-list-check me-1" />Zlecenia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zleceniaCykliczne"><i className="bi bi-repeat me-1" />Zlecenia cykliczne</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/urzadzniaServis"><i className="bi bi-cpu me-1" />Urządzenia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis"><i className="bi bi-hdd-stack me-1" />Rodzaje urządzeń</NavDropdown.Item>
            </NavDropdown>

            {/* KASA/BANK */}
            <NavDropdown title={<span><i className="bi bi-cash-stack me-1" />Kasa/Bank</span>} id="kasa-bank-dropdown">
                <NavDropdown.Item as={Link} to="/rejestryKasowoBankowe"><i className="bi bi-bank me-1" />Rejestry kasowe/bankowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/raportyKasowoBankowe"><i className="bi bi-file-earmark-bar-graph me-1" />Raporty kasowe/bankowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zapisyKasowoBankowe"><i className="bi bi-journal-text me-1" />Zapisy kasowe/bankowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/preliminarzPlatnosci"><i className="bi bi-list-ol me-1" />Preliminarz płatności</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/magazynWalut"><i className="bi bi-currency-dollar me-1" />Magazyn walut</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rozliczeniaPodmiotu"><i className="bi bi-receipt me-1" />Rozliczenia podmiotu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyNierozliczone"><i className="bi bi-file-earmark-x me-1" />Dokumenty nierozliczone</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyRozliczone"><i className="bi bi-file-earmark-check me-1" />Dokumenty rozliczone</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyKompensat"><i className="bi bi-file-earmark-diff me-1" />Dokumenty kompensat</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rozniceKursowe"><i className="bi bi-graph-up me-1" />Różnice kursowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/delegacje"><i className="bi bi-person-walking me-1" />Delegacje</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wyslijDaneKasaBank"><i className="bi bi-upload me-1" />Wyślij dane</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/odbierzDane"><i className="bi bi-download me-1" />Odbierz dane</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/historiaWymiany"><i className="bi bi-clock me-1" />Historia wymiany</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/klienciBiura"><i className="bi bi-person-badge me-1" />Klienci biura</NavDropdown.Item>
            </NavDropdown>

            {/* REJESTRY VAT */}
            <NavDropdown title={<span><i className="bi bi-receipt me-1" />Rejestry VAT</span>} id="rejestry-vat-dropdown">
                <NavDropdown.Item as={Link} to="/rejestryVat"><i className="bi bi-journal-bookmark-fill me-1" />Rejestry VAT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/strukturaZakupow"><i className="bi bi-diagram-3 me-1" />Struktura zakupów</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaDodatkowa"><i className="bi bi-clipboard-data me-1" />Ewidencja dodatkowa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaKasowegoPit"><i className="bi bi-calculator me-1" />Ewidencja kasowego PIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7"><i className="bi bi-file-earmark-bar-graph me-1" />Pliki JPK_V7</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVatUe"><i className="bi bi-globe me-1" />Deklaracje VAT-UE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_8"><i className="bi bi-8-circle me-1" />Deklaracje VAT-8</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_9M"><i className="bi bi-9-circle me-1" />Delegacje VAT-9M</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeInne"><i className="bi bi-file-earmark-diff me-1" />Deklaracje inne</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/odbierzDane"><i className="bi bi-download me-1" />Odbierz dane</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wyslijDane"><i className="bi bi-upload me-1" />Wyślij dane</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/historiaWymiany"><i className="bi bi-clock-history me-1" />Historia wymiany</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/klienciBiura"><i className="bi bi-person-badge me-1" />Klienci biura</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wiadomosciOdKlientow"><i className="bi bi-chat-left-text me-1" />Wiadomości od klientów</NavDropdown.Item>
            </NavDropdown>

            {/* KSIĘGOWOŚĆ */}
            <NavDropdown title={<span><i className="bi bi-journal-bookmark me-1" />Księgowość</span>} id="ksiegowosc-dropdown">
                <NavDropdown.Item as={Link} to="/zapisyKPiR"><i className="bi bi-journal-text me-1" />Zapisy KPiR</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spisZNatury"><i className="bi bi-journal-richtext me-1" />Spis z natury</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklaracjePIT"><i className="bi bi-file-earmark-person me-1" />Deklaracje PIT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeCIT"><i className="bi bi-file-earmark-person me-1" />Deklaracje CIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/samochody"><i className="bi bi-truck-front me-1" />Samochody</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/dokumentyZrodlowe"><i className="bi bi-file-earmark me-1" />Dokumenty źródłowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ewidencjaSrodkowTrwalych"><i className="bi bi-hdd-network me-1" />Ewidencja środków trwałych</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentySrodowTrwalych"><i className="bi bi-file-earmark-text me-1" />Dokumenty środków trwałych</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaWyposarzenia"><i className="bi bi-archive me-1" />Ewidencja wyposażenia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/inwentaryzacja"><i className="bi bi-clipboard-data me-1" />Inwentaryzacja</NavDropdown.Item>
            </NavDropdown>

            {/* JPK */}
            <NavDropdown title={<span><i className="bi bi-file-earmark-bar-graph me-1" />JPK</span>} id="jpk-dropdown">
                <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7"><i className="bi bi-file-earmark-bar-graph me-1" />Pliki JPK_V7</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_9M"><i className="bi bi-9-circle me-1" />Pliki VAT 9M</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVatUe"><i className="bi bi-globe me-1" />Pliki VAT UE-OE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_8"><i className="bi bi-8-circle me-1" />Pliki VAT 8</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/importDoRejetruVat"><i className="bi bi-arrow-bar-down me-1" />Import do rej. VAT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/informacjeJpk"><i className="bi bi-info-circle me-1" />Informacje o JPK</NavDropdown.Item>
            </NavDropdown>

            {/* PŁACE I KADRY */}
            <NavDropdown title={<span><i className="bi bi-person-gear me-1" />Płace i kadry</span>} id="place-kadry-dropdown">
                <NavDropdown.Item as={Link} to="/kadry"><i className="bi bi-people me-1" />Kadry</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyPracownik"><i className="bi bi-person-plus me-1" />Nowy pracownik</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/listyPlac"><i className="bi bi-journal-check me-1" />Listy płac</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wtplatyPracownikow"><i className="bi bi-cash me-1" />Wypłaty pracowników</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zusPlikiKedu"><i className="bi bi-file-earmark-medical me-1" />ZUS Pliki KEDU</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklarecjeZus"><i className="bi bi-file-earmark-person me-1" />Deklaracje ZUS rozliczeniowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklarazjeRoczneIwa"><i className="bi bi-calendar-check me-1" />Deklaracje roczne IWA</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeRoczneZswa"><i className="bi bi-calendar-check me-1" />Deklaracje roczne ZSWA</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zalacznikiNaPit4r"><i className="bi bi-file-earmark-richtext me-1" />Zaliczki na PIT-4R</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/podatekNaPit8ar"><i className="bi bi-currency-exchange me-1" />Podatek na PIT-8AR</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePitPracownikow"><i className="bi bi-file-earmark-person me-1" />Deklaracje PIT pracowników</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePfron"><i className="bi bi-award me-1" />Deklaracje PFRON</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePpk"><i className="bi bi-award me-1" />Deklaracje PPK</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/slowniki"><i className="bi bi-book-half me-1" />Słowniki</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/strukturaOrganizacyjna"><i className="bi bi-diagram-3 me-1" />Struktura organizacyjna</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/kasyZapomogowoPorzyczkowePkzp"><i className="bi bi-bank2 me-1" />Kasy zapomogowo-pożyczkowe PKZP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/hrmTs"><i className="bi bi-people-fill me-1" />HRM TS</NavDropdown.Item>
            </NavDropdown>

            {/* WIDOK */}
            <NavDropdown title={<span><i className="bi bi-ui-checks-grid me-1" />Widok</span>} id="widok-dropdown">
                <NavDropdown.Item as={Link} to="/kompozycjeWidoku"><i className="bi bi-layout-text-window-reverse me-1" />Kompozycje widoku</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/czcinki"><i className="bi bi-type me-1" />Czcionki</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ustawieniaOkien"><i className="bi bi-window me-1" />Ustawienia okien</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ustawieniaOkienImport"><i className="bi bi-box-arrow-in-down me-1" />Import</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ustawieniaOkienEksport"><i className="bi bi-box-arrow-up me-1" />Eksport</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ustawieniaOgolne"><i className="bi bi-gear me-1" />Ustawienia ogólne</NavDropdown.Item>
            </NavDropdown>

            {/* POMOC */}
            <NavDropdown title={<span><i className="bi bi-life-preserver me-1" />Pomoc</span>} id="pomoc-dropdown">
                <NavDropdown.Item as={Link} to="/pomoc"><i className="bi bi-question-circle me-1" />Pomoc</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocJakZaczac"><i className="bi bi-lightbulb me-1" />Jak zacząć</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pomocFilmyInstruktarzowe"><i className="bi bi-play-btn me-1" />Filmy instruktarzowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocFaq"><i className="bi bi-question-square me-1" />FAQ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pomocZdalna"><i className="bi bi-cloud-arrow-up me-1" />Pomoc zdalna</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocSystemObslugiZdarzen"><i className="bi bi-lightning me-1" />System obsługi zdarzeń</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocTwojaIndywidaStrona"><i className="bi bi-person-video3 me-1" />Twoja indywidualna strona</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rejestracjaProgramu"><i className="bi bi-box-arrow-in-down me-1" />Rejestracja programu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/oprogramie"><i className="bi bi-info-circle me-1" />O programie</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default GlownyNavbar;
