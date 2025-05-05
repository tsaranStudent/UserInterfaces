import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function KasaBankNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo i nazwa */}
                <a className="navbar-brand" href="#">
                    <img
                        src="./image/1.png"
                        alt="Logo"
                        className="logo"
                    />
                    <span className="logo-name">Kasa/Bank</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">
                        {/* 1. Rejestry - pojedynczy element, bez rozwijanej listy */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/rejestryKasowoBankowe">Rejestry kasowe/bankowe</Nav.Link>
                        </Nav.Item>

                        {/* 2. Raporty - rozwijane */}
                        <NavDropdown title="Raporty" id="raporty-dropdown">
                            <NavDropdown.Item as={Link} to="/raportyKasowoBankowe">Raporty kasowe/bankowe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zapisyKasowoBankowe">Zapisy kasowe/bankowe</NavDropdown.Item>
                        </NavDropdown>

                        {/* 3. Płatności - pojedynczy element, bez rozwijanej listy */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/preliminarzPlatnosci">Preliminarz płatności</Nav.Link>
                        </Nav.Item>

                        {/* 4. Waluty - rozwijane */}
                        <NavDropdown title="Waluty" id="waluty-dropdown">
                            <NavDropdown.Item as={Link} to="/magazynWalut">Magazyn walut</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rozniceKursowe">Różnice kursowe</NavDropdown.Item>
                        </NavDropdown>

                        {/* 5. Rozliczenia - rozwijane */}
                        <NavDropdown title="Rozliczenia" id="rozliczenia-dropdown">
                            <NavDropdown.Item as={Link} to="/rozliczeniaPodmiotu">Rozliczenia podmiotu</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyNierozliczone">Dokumenty nierozliczone</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyRozliczone">Dokumenty rozliczone</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyKompensat">Dokumenty kompensat</NavDropdown.Item>
                        </NavDropdown>

                        {/* 6. Delegacje - pojedynczy element, bez rozwijanej listy */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/delegacje">Delegacje</Nav.Link>
                        </Nav.Item>

                        {/* 7. Wymiana danych - rozwijane */}
                        <NavDropdown title="Wymiana danych" id="wymiana-dropdown">
                            <NavDropdown.Item as={Link} to="/wyslijDaneKasaBank">Wyślij dane</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/odbierzDane">Odbierz dane</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historiaWymiany">Historia wymiany</NavDropdown.Item>
                        </NavDropdown>

                        {/* 8. Biuro - pojedynczy element, bez rozwijanej listy */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/klienciBiura">Klienci biura</Nav.Link>
                        </Nav.Item>

                        {/* 9. Zasoby - rozwijane */}
                        {/*<NavDropdown title="Zasoby" id="zasoby-dropdown">*/}
                        {/*    <NavDropdown.Item as={Link} to="/materialy">Materiały</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item as={Link} to="/dokumentacja">Dokumentacja</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}

                        {/* 10. Ustawienia - rozwijane */}
                        {/*<NavDropdown title="Ustawienia" id="ustawienia-dropdown">*/}
                        {/*    <NavDropdown.Item as={Link} to="/ustawieniaProfilu">Ustawienia profilu</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item as={Link} to="/zmianaHasla">Zmiana hasła</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
