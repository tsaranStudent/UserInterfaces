//GlownyNavbar.jsx
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GlownyNavbar = () => {
    return (
        <Nav className="me-auto">
            {/* Home Dropdown */}
            <NavDropdown title="Home" id="home-dropdown">
                <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logowanie">Logowanie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zmianaFirmy">Zmiana firmy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/informacjeoFirmie">Informacje o firmie</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/konfiguracja">Konfiguracja</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/odswierzKonfiguracje">Odświerz konfigurację</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/nowoscWwersji">Nowości w wersji</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wlaczNoweFunkcje">Włacz nowe funkcje</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/koniecPracy">Koniec pracy</NavDropdown.Item>
            </NavDropdown>

            {/* Ogólne Dropdown */}
            <NavDropdown title="Ogólne" id="ogolne-dropdown">
                <NavDropdown.Item as={Link} to="/kontrahenci">Kontrachenci</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyKontrahent">Nowy kontrachent</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pracownicy">Pracownicy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cennik">Cennik</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyTowar">Nowy towar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/grupyTowarowe">Grupy towarowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rabaty">Rabaty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/kategorie">Kategorie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/atrybuty">Atrybuty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wymiaryOpisuAnalitycznego">Wymiary opisu analitycznego</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/przesylkiKurierskie">Przesyłki kurierskie</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wiadomosciSms">Wiadomości SMS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zakupPaczkiSms">Zakup paczki SMS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/raporty">Raporty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/waluty">Waluty</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/daneOsobowe">Dane osobowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/udzielPelnomocnictwa">Udziel pełnomocnictwa</NavDropdown.Item>
            </NavDropdown>

            {/* CRM Dropdown */}
            <NavDropdown title="CRM" id="crm-dropdown">
                <NavDropdown.Item as={Link} to="/kontakty">Kontakty</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/terminarz">Terminarz</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/fakturyCykliczne">Faktury cykliczne</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ofertyHandlowe">Oferty handlowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/archiwumWydrukow">Archiwum wydruków</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/bibliotekaDokumentow">Biblioteka dokumentów</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyDokument">Nowy dokument</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/skrzynkaOperatora">Skrzynka operatora</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/skrzynkaPocztowa">Skrzynka pocztowa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/windykacjaSchematy">Schematy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/windykacjaHistoriaZdarzen">Historia zdarzeń</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ankietyAnkietowanie">Ankietowanie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyWzorceAnkiet">Wzorce ankietowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyPytania">Pytania</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietySzablonyOdpowiedzi">Szablony odpowiedzi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyGrupyZapytan">Grupy zapytań</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wiecejFunkcji">Wiecej funkcji</NavDropdown.Item>
            </NavDropdown>

            {/* Handel Dropdown */}
            <NavDropdown title="Handel" id="handel-dropdown">
                <NavDropdown.Item as={Link} to="/faktury">Faktury</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowaFaktura">Nowa faktura</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/paragony">Paragony</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyParagon">Nowy paragon</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy">Rezeerwacje odbiorcy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fakturyProforma">Faktury proforma</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/sprzedarzDedykowana">Sprzedarz dedykowana</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fakturyZakupu">Faktury zakupu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zleceniaUDostawcy">Zlecenia u dostawcy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zasoby">Zasoby</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/raportBrakow">Raport braków</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wydaniaZewnetrzne">Wydania zewnętrzne WZ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne">Przyjęcia zewnętrzne PZ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zlecenia">Zlecenia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zleceniaCykliczne">Zlecenia cykliczne</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/urzadzniaServis">Urządzenia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis">Rodzanie urządzeń</NavDropdown.Item>
            </NavDropdown>

            {/* Kasa/Bank Dropdown */}
            <NavDropdown title="Kasa/Bank" id="kasa-bank-dropdown">
                <NavDropdown.Item as={Link} to="/rejestryKasowoBankowe">Rejestry kasowe/bankowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/raportyKasowoBankowe">Raporty kasowe/bankowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zapisyKasowoBankowe">Zapisy kasowe/bankowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/preliminarzPlatnosci">Preliminarz platności</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/magazynWalut">Magazyn walut</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rozliczeniaPodmiotu">Rozmiczenia podmiotu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyNierozliczone">Dokumenty nierozliczone</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyRozliczone">Dokumenty rozliczone</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyKompensat">Dokumenty kompensat</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rozniceKursowe">Rónice kursowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/delegacje">Delegacje</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wyslijDaneKasaBank">Wyslij dane</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/odbierzDane">Odbierz dane</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/historiaWymiany">Historia wymiany</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/klienciBiura">Klienci biura</NavDropdown.Item>
            </NavDropdown>

            {/* Rejestry VAT Dropdown */}
            <NavDropdown title="Rejestry VAT" id="rejestry-vat-dropdown">
                <NavDropdown.Item as={Link} to="/rejestryVat">Rejestry VAT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/strukturaZakupow">Struktura zakupów</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaDodatkowa">Ewidencja dodatkowa</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaKasowegoPit">Ewidencja kasowego PIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">Pliki JPK_V7</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVatUe">Deklaracje VAT-UE</NavDropdown.Item>
                {/*<NavDropdown.Item as={Link} to="/deklracjeVat_8">Deklaracje VAT-8</NavDropdown.Item>*/}
                <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">Delegacje VAT-9M</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeInne">Deklaracje inne</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/odbierzDane">Odbierz dane</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wyslijDane">Wyślij dane</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/historiaWymiany">Historia wymiany</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/klienciBiura">Klienci biura</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wiadomosciOdKlientow">Wiadomosci od klientów</NavDropdown.Item>
            </NavDropdown>

            {/* Księgowość Dropdown */}
            <NavDropdown title="Księgowość" id="ksiegowosc-dropdown">
                <NavDropdown.Item as={Link} to="/zapisyKPiR">Zapisy KPiR</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spisZNatury">Spis z natury</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklaracjePIT">Deklaracje PIT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeCIT">Deklaracje CIT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/samochody">Samochody</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/dokumentyZrodlowe">Dokumenty źródłowe</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ewidencjaSrodkowTrwalych">Ewidencja środków trwałych</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentySrodowTrwalych">Dokumenty środków trwałych</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaWyposarzenia">Ewidencja wyposażenia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/inwentaryzacja">Inwentaryzacja</NavDropdown.Item>
            </NavDropdown>

            {/* JPK Dropdown */}
            <NavDropdown title="JPK" id="jpk-dropdown">
                <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">Pliki JPK_V7</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">Pliki VAT 9M</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVatUe">Pliki VAT UE-OE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklracjeVat_8">Pliki VAT 8</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/importDoRejetruVat">Import do rej. VAT</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/informacjeJpk">Informacje o JPK pomoc</NavDropdown.Item>
            </NavDropdown>

            {/* Płace i kadry Dropdown */}
            <NavDropdown title="Płace i kadry" id="place-kadry-dropdown">
                <NavDropdown.Item as={Link} to="/kadry">Kadry</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyPracownik">Nowy pracownik</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/listyPlac">Listy płac</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wtplatyPracownikow">Wypłaty pracowników</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zusPlikiKedu">ZUS Pliki KEDU</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklarecjeZus">Deklaracje ZUS rozliczeniowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklarazjeRoczneIwa">Deklaracje roczne IWA</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeRoczneZswa">Deklaracje roczne ZSWA</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zalacznikiNaPit4r">Zaliczki na PIT-4R</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/podatekNaPit8ar">Podatek na PIT-8AR</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePitPracownikow">Deklaracje PIT pracowników</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePfron">Deklaracje PFRON</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePpk">Deklaracje PPK</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/slowniki">Słowniki</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/strukturaOrganizacyjna">Struktura organizacyjna</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/kasyZapomogowoPorzyczkowePkzp">Kasy zapomogowo - pożyczkowe PKZP</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/hrmTs">KRM TS</NavDropdown.Item>
            </NavDropdown>

            {/* Widok Dropdown */}
            <NavDropdown title="Widok" id="widok-dropdown">
                <NavDropdown.Item as={Link} to="/kompozycjeWidoku">Kompozycje widoku</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/czcinki">Czcionki</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ustawieniaOkien">Ustawienia okien</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ustawieniaOkienImport">Import</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ustawieniaOkienEksport">Eksport</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ustawieniaOgolne">Ustawienia ogólne</NavDropdown.Item>
            </NavDropdown>

            {/* Pomoc Dropdown */}
            <NavDropdown title="Pomoc" id="pomoc-dropdown">
                <NavDropdown.Item as={Link} to="/pomoc">Pomoc</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocJakZaczac">Jak zacząć</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pomocFilmyInstruktarzowe">Filmy instruktarzowe</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocFaq">FAQ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pomocZdalna">Pomoc zdalna</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocSystemObslugiZdarzen">System obsługi zdarzeń</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocTwojaIndywidaStrona">Twoja indywidalna strona</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rejestracjaProgramu">Rejestracja programu</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/oprogramie">O programie</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default GlownyNavbar;
