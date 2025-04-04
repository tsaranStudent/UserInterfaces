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
                            <NavDropdown title="Home" id="magazynhome">
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Home</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Logowanie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Zmiana firmy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Informacje o frmie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Konfiguracja</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Odœwierz konfiguracjê</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Nowoœci w wersji</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">W³acz nowe funkcje</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Koniec pracy</Link>
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
                            <NavDropdown title="Ogólne" id="ogolne">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Kontrachenci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Nowy kontrachent</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Cennik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Nowy towar</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Grupy towarowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Rabaty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Kategorie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Atrybuty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wymiary opisu analitycznego</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Inne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Przesy³ki kurierskie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wiadomoœci SMS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Zakup paczkê SMS</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Raporty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Waluty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Dane osobowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Udziel pe³nomocnictwa</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="CRM" id="crm">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Kontakty</Link>
                                </NavDropdown.Item>                                
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Terminarz</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Faktury cykliczne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Oferty handlowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Archiwum wydruków</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Biblioteka dokumentów</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Nowy dokument</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Skrzynka operatora</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Skrzynka pocztowa</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Schematy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Historia zdarzeñ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Ankietowanie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wzorce ankietowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pytania</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Szablony odpowiedzi</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Grupy zapytañ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wiecej funkcji</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Handel" id="handel">
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Faktury</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Nowa faktura</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Paragony</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Nowy paragon</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Rezeerwacje odbiorcy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Faktury proforma</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Sprzedarz dedykowana</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Faktury zakupu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Zlecenia u dostawcy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Inne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Zasoby</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Raport braków</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Wydania zewnetrzne WZ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Przyjêcia zewnêtrzne PZ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Inne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Zlecenia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Zlecenia cykliczne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Urz¹dzenia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Rodzanie urz¹dzeñ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/" className="d-block">Wiecej funkcji</Link>
                                </NavDropdown.Item>                                
                            </NavDropdown>
                            <NavDropdown title="Kasa/Bank" id="kasaBank">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Rejestry kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Raporty kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Zapisy kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Preliminarz p³atnoœci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Magazyn walut</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Rozmiczenia podmiotu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Dokumenty nierozliczone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Dokumenty rozliczone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Dokumenty kompensat</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Ró¿nice kursowe</Link>
                                </NavDropdown.Item>                                
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Delegacje</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wyslij dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Odbierz dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Historia wymiany</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Klienci biura</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Rejestry VAT" id="rejestryVat">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Rejestry VAT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Struktura zakupów</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Ewidencja dodatkowa</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Ewidencja kasowego PIT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Pliki JPK_V7</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Deklaracje VAT-UE</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Deklaracje VAT-8</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Delegacje VAT-9M</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Deklaracje inne</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Odbierz dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wyœlij dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Historia wymiany</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Klienci biura</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Wiadomosci od klientów</Link>
                                </NavDropdown.Item>                               
                            </NavDropdown>
                            <NavDropdown title="Ksiêgowoœæ" id="ksiegowosc">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Zapisy KPiR</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Spis z natury</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">PIT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">CIT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Samochody</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Dokumenty Ÿród³owe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Ewidencja œrodków trwa³ych</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Dokumenty œrodków trwa³ych</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Ewidencja wyposa¿enia</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Inwentaryzacja</Link>
                                </NavDropdown.Item>                                
                            </NavDropdown>
                            <NavDropdown title="JPK" id="jpk">                                
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Pliki JPK_V7</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Pliki JPK</Link>
                                </NavDropdown.Item>                                
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Import do rej. VAT</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Informacje o JPK pomoc</Link>
                                </NavDropdown.Item>                                
                            </NavDropdown>
                            <NavDropdown title="P³ace i kadry" id="placeKardy">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Kadry</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Nowy pracownik</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Listy p³ac</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Wyp³aty pracowników</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">ZUS Pliki KEDU</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Deklaracje ZUS rozliczeniowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Deklaracje roczne IWA</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Deklaracje roczne ZSWA</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Zaliczki na PIT-4R</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Podatek na PIT-8AR</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Deklaracje PIT pracowników</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Deklaracje PFRON</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Deklaracje PPK</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">S³owniki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Struktura organizacyjna</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Kasy zapomogowo - po¿yczkowe PKZP</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">KRM TS</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kasa/Bank" id="kasaBank">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Rejestry kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Raporty kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Zapisy kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Preliminarz p³atnoœci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Magazyn walut</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Rozmiczenia podmiotu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Dokumenty nierozliczone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Delegacje</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Wyslij dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Odbierz dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Historia wymiany</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Klienci biura</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Kasa/Bank" id="kasaBank">
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Rejestry kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Raporty kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Zapisy kasowe/bankowe</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Preliminarz p³atnoœci</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Magazyn walut</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Rozmiczenia podmiotu</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Dokumenty nierozliczone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Delegacje</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Wyslij dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownicy" className="d-block">Odbierz dane</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Historia wymiany</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/pracownik" className="d-block">Klienci biura</Link>
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