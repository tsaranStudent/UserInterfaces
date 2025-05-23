import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Pasek nawigacji START (podstawowe opcje systemowe i szybki start, jak w Optima)
export function HomeNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa systemu */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">SystemERP</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* START - Panel główny */}
                        <NavDropdown title={<span><i className="bi bi-house-door me-1" />Start</span>} id="start-dropdown">
                            <NavDropdown.Item as={Link} to="/">
                                <i className="bi bi-house-fill me-2" />Strona główna
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/informacjeoFirmie">
                                <i className="bi bi-info-circle me-2" />Informacje o firmie
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zmianaFirmy">
                                <i className="bi bi-building-up me-2" />Zmiana firmy
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KONFIGURACJA */}
                        <NavDropdown title={<span><i className="bi bi-sliders me-1" />Konfiguracja</span>} id="konfiguracja-dropdown">
                            <NavDropdown.Item as={Link} to="/konfiguracja">
                                <i className="bi bi-sliders2 me-2" />Konfiguracja systemu
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/odswierzKonfiguracje">
                                <i className="bi bi-arrow-repeat me-2" />Odśwież konfigurację
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wlaczNoweFunkcje">
                                <i className="bi bi-stars me-2" />Włącz nowe funkcje
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* AKTUALNOŚCI I WERSJE */}
                        <NavDropdown title={<span><i className="bi bi-lightbulb me-1" />Aktualności</span>} id="aktualnosci-dropdown">
                            <NavDropdown.Item as={Link} to="/nowoscWwersji">
                                <i className="bi bi-lightbulb-fill me-2" />Nowości w wersji
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* UŻYTKOWNIK / SESJA */}
                        <NavDropdown title={<span><i className="bi bi-person-circle me-1" />Użytkownik</span>} id="user-dropdown">
                            <NavDropdown.Item as={Link} to="/logowanie">
                                <i className="bi bi-person me-2" />Logowanie
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/koniecPracy">
                                <i className="bi bi-door-open me-2" />Koniec pracy
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
