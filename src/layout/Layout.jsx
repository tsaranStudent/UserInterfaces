import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/1.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/*grupa statrt ,uwaga na Home*/}
                            <NavDropdown title="Home" id="magazynhome">
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Home</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/logowanie" className="d-block">Logowanie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zmianaFirmy" className="d-block">Zmiana firmy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/informacjeoFirmie" className="d-block">Informacje o firmie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/konfiguracja" className="d-block">Konfiguracja</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/odswierzKonfiguracje" className="d-block">Odświerz konfigurację</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/nowoscWwersji" className="d-block">Nowości w wersji</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/wlaczNoweFunkcje" className="d-block">Włacz nowe funkcje</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/koniecPracy" className="d-block">Koniec pracy</Link>
                                </NavDropdown.Item>
                            </NavDropdown>                            
                            {/*<NavDropdown title="Magazyn" id="magazyn">*/}
                            {/*    <NavDropdown.Item>*/}
                            {/*        <Link to="/towary" className="d-block">Towary</Link>*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item>*/}
                            {/*        <Link to="/towar" className="d-block">Towar</Link>*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            {/*<NavDropdown title="Kadry" id="kadry">*/}
                            {/*    <NavDropdown.Item>*/}
                            {/*        <Link to="/pracownicy" className="d-block">Pracownicy</Link>*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item>*/}
                            {/*        <Link to="/pracownik" className="d-block">Pracownik</Link>*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}

                            {/*grupa ogolne*/}
                            <NavDropdown title="Ogólne" id="ogolne">
                                <NavDropdown.Item>
                                    <Link to="/kontrahenci" className="d-block">Kontrachenci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowyKontrahent" className="d-block">Nowy kontrachent</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/cennik" className="d-block">Cennik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowyTowar" className="d-block">Nowy towar</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/grupyTowarowe" className="d-block">Grupy towarowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/rabaty" className="d-block">Rabaty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/kategorie" className="d-block">Kategorie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/atrybuty" className="d-block">Atrybuty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/wymiaryOpisuAnalitycznego" className="d-block">Wymiary opisu analitycznego</Link>
                                </NavDropdown.Item>
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item>*/}
                                {/*    <Link to="/ogolne" className="d-block">Inne</Link>*/}
                                {/*</NavDropdown.Item>*/}
                                {/*<NavDropdown.Divider />*/}
                                <NavDropdown.Item>
                                    <Link to="/przesylkiKurierskie" className="d-block">Przesyłki kurierskie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/wiadomosciSms" className="d-block">Wiadomości SMS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zakupPaczkiSms" className="d-block">Zakup paczki SMS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/raporty" className="d-block">Raporty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/waluty" className="d-block">Waluty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/daneOsobowe" className="d-block">Dane osobowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/udzielPelnomocnictwa" className="d-block">Udziel pełnomocnictwa</Link>
                                </NavDropdown.Item>
                            </NavDropdown>


                            {/*grupa crm*/}
                            <NavDropdown title="CRM" id="crm">
                                <NavDropdown.Item>
                                    <Link to="/kontakty" className="d-block">Kontakty</Link>
                                </NavDropdown.Item>                                
                                <NavDropdown.Item>
                                    <Link to="/terminarz" className="d-block">Terminarz</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/fakturyCykliczne" className="d-block">Faktury cykliczne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ofertyHandlowe" className="d-block">Oferty handlowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/archiwumWydrukow" className="d-block">Archiwum wydruków</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/bibliotekaDokumentow" className="d-block">Biblioteka dokumentów</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowyDokument" className="d-block">Nowy dokument</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/skrzynkaOperatora" className="d-block">Skrzynka operatora</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/skrzynkaPocztowa" className="d-block">Skrzynka pocztowa</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/windykacjaSchematy" className="d-block">Schematy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/windykacjaHistoriaZdarzen" className="d-block">Historia zdarzeń</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/ankietyAnkietowanie" className="d-block">Ankietowanie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ankietyWzorceAnkiet" className="d-block">Wzorce ankietowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ankietyPytania" className="d-block">Pytania</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ankietySzablonyOdpowiedzi" className="d-block">Szablony odpowiedzi</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ankietyGrupyZapytan" className="d-block">Grupy zapytań</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/wiecejFunkcji" className="d-block">Wiecej funkcji</Link>
                                </NavDropdown.Item>
                            </NavDropdown>



                            {/*grupa handel*/}
                            <NavDropdown title="Handel" id="handel">
                                <NavDropdown.Item>
                                    <Link to="/faktury" className="d-block">Faktury</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowaFaktura" className="d-block">Nowa faktura</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/paragony" className="d-block">Paragony</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowyParagon" className="d-block">Nowy paragon</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/rezerwacjeOdbiorcy" className="d-block">Rezeerwacje odbiorcy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/fakturyProforma" className="d-block">Faktury proforma</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/sprzedarzDedykowana" className="d-block">Sprzedarz dedykowana</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/fakturyZakupu" className="d-block">Faktury zakupu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link to="/zleceniaUDostawcy" className="d-block">Zlecenia u dostawcy</Link>
                                </NavDropdown.Item>
                                {/*<NavDropdown.Item>*/}
                                {/*    <Link to="/" className="d-block">Inne</Link>*/}
                                {/*</NavDropdown.Item>*/}
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                        <Link to="/zasoby" className="d-block">Zasoby</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/raportBrakow" className="d-block">Raport braków</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/wydaniaZewnetrzne" className="d-block">Wydania zewnętrzne WZ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/przyjeciaZewnetrzne" className="d-block">Przyjęcia zewnętrzne PZ</Link>
                                </NavDropdown.Item>
                                    {/*<NavDropdown.Item>*/}
                                    {/*    <Link to="/" className="d-block">Inne</Link>*/}
                                    {/*</NavDropdown.Item>*/}
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/zlecenia" className="d-block">Zlecenia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zleceniaCykliczne" className="d-block">Zlecenia cykliczne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                   <Link to="/urzadzniaServis" className="d-block">Urządzenia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/rodzajeUrzadzenServis" className="d-block">Rodzanie urządzeń</Link>
                                </NavDropdown.Item>
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item>*/}
                                {/*   <Link to="/wiecejFunkcji" className="d-block">Wiecej funkcji</Link>*/}
                                {/*</NavDropdown.Item>*/}
                            </NavDropdown>



                            {/*grupa kasaBank*/}
                            <NavDropdown title="Kasa/Bank" id="kasaBank">
                                <NavDropdown.Item>
                                    <Link to="/rejestryKasowoBankowe" className="d-block">Rejestry kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/raportyKasowoBankowe" className="d-block">Raporty kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zapisyKasowoBankowe" className="d-block">Zapisy kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/preliminarzPlatnosci" className="d-block">Preliminarz platności</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/magazynWalut" className="d-block">Magazyn walut</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/rozliczeniaPodmiotu" className="d-block">Rozmiczenia podmiotu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/dokumentyNierozliczone" className="d-block">Dokumenty nierozliczone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/dokumentyRozliczone" className="d-block">Dokumenty rozliczone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/dokumentyKompensat" className="d-block">Dokumenty kompensat</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/rozniceKursowe" className="d-block">Rónice kursowe</Link>
                                </NavDropdown.Item>                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/delegacje" className="d-block">Delegacje</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/wyslijDane" className="d-block">Wyslij dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/odbierzDane" className="d-block">Odbierz dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/historiaWymiany" className="d-block">Historia wymiany</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/klienciBiura" className="d-block">Klienci biura</Link>
                                </NavDropdown.Item>
                            </NavDropdown>


                            {/*grupa rejestryVat*/}
                            <NavDropdown title="Rejestry VAT" id="rejestryVat">
                                <NavDropdown.Item>
                                    <Link to="/rejestryVat" className="d-block">Rejestry VAT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/strukturaZakupow" className="d-block">Struktura zakupów</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ewidencjaDodatkowa" className="d-block">Ewidencja dodatkowa</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ewidencjaKasowegoPit" className="d-block">Ewidencja kasowego PIT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/deklaracjePlikiJPK_V7" className="d-block">Pliki JPK_V7</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeVatUe" className="d-block">Deklaracje VAT-UE</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklracjeVat_8" className="d-block">Deklaracje VAT-8</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeVat_9M" className="d-block">Delegacje VAT-9M</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeInne" className="d-block">Deklaracje inne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/odbierzDane" className="d-block">Odbierz dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/wyslijDane" className="d-block">Wyślij dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/historiaWymiany" className="d-block">Historia wymiany</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/klienciBiura" className="d-block">Klienci biura</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/wiadomosciOdKlientow" className="d-block">Wiadomosci od klientów</Link>
                                </NavDropdown.Item>                               
                            </NavDropdown>



                            {/*grupa ksiegowosc*/}
                            <NavDropdown title="Księgowość" id="ksiegowosc">
                                <NavDropdown.Item>
                                    <Link to="/zapisyKPiR" className="d-block">Zapisy KPiR</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/spisZNatury" className="d-block">Spis z natury</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/deklaracjePIT" className="d-block">Deklaracje PIT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeCIT" className="d-block">Deklaracje CIT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/samochody" className="d-block">Samochody</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/dokumentyZrodlowe" className="d-block">Dokumenty źródłowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/ewidencjaSrodkowTrwalych" className="d-block">Ewidencja środków trwałych</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/dokumentySrodowTrwalych" className="d-block">Dokumenty środków trwałych</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ewidencjaWyposarzenia" className="d-block">Ewidencja wyposażenia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/inwentaryzacja" className="d-block">Inwentaryzacja</Link>
                                </NavDropdown.Item>                                
                            </NavDropdown>



                            {/*grupa JPK*/}
                            <NavDropdown title="JPK" id="jpk">                                
                                <NavDropdown.Item>
                                    <Link to="/deklaracjePlikiJPK_V7" className="d-block">Pliki JPK_V7</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeVat_9M" className="d-block">Pliki VAT 9M</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeVatUe" className="d-block">Pliki VAT UE-OE</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklracjeVat_8" className="d-block">Pliki VAT 8</Link>
                                </NavDropdown.Item>                                                                
                                <NavDropdown.Item>
                                    <Link to="/importDoRejetruVat" className="d-block">Import do rej. VAT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/informacjeJpk" className="d-block">Informacje o JPK pomoc</Link>
                                </NavDropdown.Item>                                
                            </NavDropdown>



                            {/*grupa placeKadry*/}
                            <NavDropdown title="Płace i kadry" id="placeKardy">
                                <NavDropdown.Item>
                                    <Link to="/kadry" className="d-block">Kadry</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/nowyPracownik" className="d-block">Nowy pracownik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/listyPlac" className="d-block">Listy płac</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/wtplatyPracownikow" className="d-block">Wypłaty pracowników</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/zusPlikiKedu" className="d-block">ZUS Pliki KEDU</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/deklarecjeZus" className="d-block">Deklaracje ZUS rozliczeniowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklarazjeRoczneIwa" className="d-block">Deklaracje roczne IWA</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjeRoczneZswa" className="d-block">Deklaracje roczne ZSWA</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/zalacznikiNaPit4r" className="d-block">Zaliczki na PIT-4R</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/podatekNaPit8ar" className="d-block">Podatek na PIT-8AR</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjePitPracownikow" className="d-block">Deklaracje PIT pracowników</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjePfron" className="d-block">Deklaracje PFRON</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/deklaracjePpk" className="d-block">Deklaracje PPK</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/slowniki" className="d-block">Słowniki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/strukturaOrganizacyjna" className="d-block">Struktura organizacyjna</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/kasyZapomogowoPorzyczkowePkzp" className="d-block">Kasy zapomogowo - pożyczkowe PKZP</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/hrmTs" className="d-block">KRM TS</Link>
                                </NavDropdown.Item>
                            </NavDropdown>


                            {/*grupa widok*/}
                            <NavDropdown title="Widok" id="widok">
                                <NavDropdown.Item>
                                    <Link to="/kompozycjeWidoku" className="d-block">Kompozycje widoku</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/czcinki" className="d-block">Czcionki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/ustawieniaOkien" className="d-block">Ustawienia okien</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ustawieniaOkienImport" className="d-block">Import</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/ustawieniaOkienEksport" className="d-block">Eksport</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/ustawieniaOgolne" className="d-block">Ustawienia ogólne</Link>
                                </NavDropdown.Item>
                            </NavDropdown>



                            {/*grupa pomoc*/}
                            <NavDropdown title="Pomoc" id="pomoc">
                                <NavDropdown.Item>
                                    <Link to="/pomoc" className="d-block">Pomoc</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pomocJakZaczac" className="d-block">Jak zacząć</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pomocFilmyInstruktarzowe" className="d-block">Filmy instruktarzowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pomocFaq" className="d-block">FAQ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pomocZdalna" className="d-block">Pomoc zdalna</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pomocSystemObslugiZdarzen" className="d-block">System obsługi zdarzeń</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pomocTwojaIndywidaStrona" className="d-block">Twoja indywidalna strona</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/rejestracjaProgramu" className="d-block">Rejestracja programu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/oprogramie" className="d-block">O programie</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
         
        </div>
    )
}