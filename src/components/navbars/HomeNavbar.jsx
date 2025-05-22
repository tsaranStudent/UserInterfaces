import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function HomeNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo i nazwa systemu */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="./image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name">SystemERP</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Sekcja nawigacji */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto navbar-nav">
                        {/* Grupa 1 */}
                        <Nav.Link
                            as={Link}
                            to="/"
                            className="nav-item custom-link"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/informacjeoFirmie"
                            className="nav-item custom-link"
                        >
                            Informacje o firmie
                        </Nav.Link>

                      

                        {/* Grupa 2 */}
                        <Nav.Link
                            as={Link}
                            to="/konfiguracja"
                            className="nav-item custom-link"
                        >
                            Konfiguracja
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/odswierzKonfiguracje"
                            className="nav-item custom-link"
                        >
                            Odśwież konfigurację
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/wlaczNoweFunkcje"
                            className="nav-item custom-link"
                        >
                            Włącz nowe funkcje
                        </Nav.Link>

                        

                        {/* Grupa 3 */}
                        <Nav.Link
                            as={Link}
                            to="/koniecPracy"
                            className="nav-item custom-link"
                        >
                            Koniec pracy
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/logowanie"
                            className="nav-item custom-link"
                        >
                            Logowanie
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/nowoscWwersji"
                            className="nav-item custom-link"
                        >
                            Nowości w wersji
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/zmianaFirmy"
                            className="nav-item custom-link"
                        >
                            Zmiana firmy
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
