import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Pasek nawigacji – podgrupa Ogólne (w stylu Comarch Optima)
export function OgolneNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Ogólne</span>
                </Link>

                <Navbar.Toggle aria-controls="ogolne-navbar-nav" />

                <Navbar.Collapse id="ogolne-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* KONTRAHENCI */}
                        <NavDropdown title={<span><i className="bi bi-people-fill me-1" />Kontrahenci</span>} id="kontrahenci-dropdown">
                            <NavDropdown.Item as={Link} to="/kontrahenci">
                                <i className="bi bi-list-ul me-2" />Lista kontrahentów
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyKontrahent">
                                <i className="bi bi-person-plus me-2" />Nowy kontrahent
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">
                                <i className="bi bi-diagram-3 me-2" />Grupy kontrahentów
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">
                                <i className="bi bi-collection me-2" />Kategorie
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* TOWARY */}
                        <NavDropdown title={<span><i className="bi bi-box-seam me-1" />Towary</span>} id="towary-dropdown">
                            <NavDropdown.Item as={Link} to="/nowyTowar">
                                <i className="bi bi-plus-square me-2" />Nowy towar
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/atrybuty">
                                <i className="bi bi-sliders2-vertical me-2" />Atrybuty
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">
                                <i className="bi bi-diagram-3 me-2" />Grupy towarowe
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">
                                <i className="bi bi-tags me-2" />Kategorie
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* CENNIKI I RABATY */}
                        <NavDropdown title={<span><i className="bi bi-cash-coin me-1" />Cenniki i rabaty</span>} id="cennik-rabaty-dropdown">
                            <NavDropdown.Item as={Link} to="/cennik">
                                <i className="bi bi-currency-exchange me-2" />Cennik
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rabaty">
                                <i className="bi bi-percent me-2" />Rabaty
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* PRACOWNICY I UŻYTKOWNICY */}
                        <NavDropdown title={<span><i className="bi bi-person-badge me-1" />Pracownicy</span>} id="pracownicy-dropdown">
                            <NavDropdown.Item as={Link} to="/pracownicy">
                                <i className="bi bi-people me-2" />Pracownicy
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/udzielPelnomocnictwa">
                                <i className="bi bi-person-check me-2" />Pełnomocnictwa
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/daneOsobowe">
                                <i className="bi bi-person-vcard me-2" />Dane osobowe
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KOMUNIKACJA I WYSYŁKI */}
                        <NavDropdown title={<span><i className="bi bi-send-fill me-1" />Komunikacja</span>} id="komunikacja-dropdown">
                            <NavDropdown.Item as={Link} to="/przesylkiKurierskie">
                                <i className="bi bi-truck me-2" />Przesyłki kurierskie
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wiadomosciSms">
                                <i className="bi bi-chat-dots me-2" />Wiadomości SMS
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zakupPaczkiSms">
                                <i className="bi bi-envelope-plus me-2" />Zakup paczki SMS
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* RAPORTY I ANALITYKA */}
                        <NavDropdown title={<span><i className="bi bi-bar-chart-line me-1" />Raporty</span>} id="raporty-dropdown">
                            <NavDropdown.Item as={Link} to="/raporty">
                                <i className="bi bi-file-earmark-bar-graph me-2" />Raporty
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wymiaryOpisuAnalitycznego">
                                <i className="bi bi-layers-half me-2" />Wymiary opisu analitycznego
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* SŁOWNIKI (tu powtarzamy część kluczowych podstron) */}
                        <NavDropdown title={<span><i className="bi bi-book me-1" />Słowniki</span>} id="slowniki-dropdown">
                            <NavDropdown.Item as={Link} to="/waluty">
                                <i className="bi bi-currency-dollar me-2" />Waluty
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">
                                <i className="bi bi-tags me-2" />Kategorie
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">
                                <i className="bi bi-diagram-3 me-2" />Grupy towarowe
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
