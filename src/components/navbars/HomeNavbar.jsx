import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
                        {/* Linki główne */}
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/informacjeoFirmie">Informacje o firmie</Nav.Link>
                        <Nav.Link as={Link} to="/konfiguracja">Konfiguracja</Nav.Link>
                        <Nav.Link as={Link} to="/koniecPracy">Koniec pracy</Nav.Link>
                        <Nav.Link as={Link} to="/logowanie">Logowanie</Nav.Link>
                        <Nav.Link as={Link} to="/nowoscWwersji">Nowości w wersji</Nav.Link>
                        <Nav.Link as={Link} to="/odswierzKonfiguracje">Odśwież konfigurację</Nav.Link>
                        <Nav.Link as={Link} to="/wlaczNoweFunkcje">Włącz nowe funkcje</Nav.Link>
                        <Nav.Link as={Link} to="/zmianaFirmy">Zmiana firmy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
