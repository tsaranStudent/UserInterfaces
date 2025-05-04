import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function HomeNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo i nazwa systemu */}
                <a className="navbar-brand" href="#">
                    <img
                        src="./image/1.png"
                        alt="Logo"
                        className="logo"
                    />
                    <span className="logo-name">SystemERP</span>
                </a>

                {/* Przycisk do rozwinięcia menu na urządzeniach mobilnych */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Sekcja nawigacji */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        {/* Link główny */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>

                        {/* Sekcja Konto */}
                        <NavDropdown title="Konto" id="konto-dropdown">
                            <NavDropdown.Item as={Link} to="/logowanie">Logowanie</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zmianaFirmy">Zmiana firmy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/informacjeoFirmie">Informacje o firmie</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sekcja Konfiguracja */}
                        <NavDropdown title="Konfiguracja" id="konfiguracja-dropdown">
                            <NavDropdown.Item as={Link} to="/konfiguracja">Konfiguracja</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/odswierzKonfiguracje">Odśwież konfigurację</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sekcja Funkcje */}
                        <NavDropdown title="Funkcje" id="funkcje-dropdown">
                            <NavDropdown.Item as={Link} to="/nowoscWwersji">Nowości w wersji</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wlaczNoweFunkcje">Włącz nowe funkcje</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sekcja Pomoc */}
                        <NavDropdown title="Pomoc" id="pomoc-dropdown">
                            <NavDropdown.Item as={Link} to="/pomoc">Pomoc</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocJakZaczac">Jak zacząć</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocFilmyInstruktarzowe">Filmy instruktażowe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocFaq">FAQ</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sekcja Rejestracja */}
                        <NavDropdown title="Rejestracja" id="rejestracja-dropdown">
                            <NavDropdown.Item as={Link} to="/rejestracjaProgramu">Rejestracja programu</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/oprogramie">O programie</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sekcja Ustawienia */}
                        <NavDropdown title="Ustawienia" id="ustawienia-dropdown">
                            <NavDropdown.Item as={Link} to="/ustawieniaOkien">Ustawienia okien</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOkienImport">Import</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOkienEksport">Eksport</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOgolne">Ustawienia ogólne</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sekcja Widok */}
                        <NavDropdown title="Widok" id="widok-dropdown">
                            <NavDropdown.Item as={Link} to="/kompozycjeWidoku">Kompozycje widoku</NavDropdown.Item>
                        </NavDropdown>

                        {/* Link do zakończenia pracy */}
                        <Nav.Link as={Link} to="/koniecPracy">Koniec pracy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
