import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export function HandelNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Handel</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="handel-navbar-nav" />

                <Navbar.Collapse id="handel-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* SPRZEDAŻ */}
                        <NavDropdown title={<span><i className="bi bi-cart-check me-1" />Sprzedaż</span>} id="sprzedaz-dropdown">
                            <NavDropdown.Item as={Link} to="/faktury">
                                <i className="bi bi-receipt me-2" />Faktury sprzedaży
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowaFaktura">
                                <i className="bi bi-plus-circle me-2" />Nowa faktura
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/paragony">
                                <i className="bi bi-cash-coin me-2" />Paragony
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyParagon">
                                <i className="bi bi-plus-square me-2" />Nowy paragon
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fakturyProforma">
                                <i className="bi bi-file-earmark-text me-2" />Faktury proforma
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy">
                                <i className="bi bi-bookmark-check me-2" />Rezerwacje odbiorcy
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ZAKUP */}
                        <NavDropdown title={<span><i className="bi bi-bag-plus me-1" />Zakup</span>} id="zakup-dropdown">
                            <NavDropdown.Item as={Link} to="/fakturyZakupu">
                                <i className="bi bi-cart-check me-2" />Faktury zakupu
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne">
                                <i className="bi bi-box-arrow-in-down me-2" />Przyjęcia zewnętrzne (PZ)
                            </NavDropdown.Item>
                            {/* Proforma dostępna też tu */}
                            <NavDropdown.Item as={Link} to="/fakturyProforma">
                                <i className="bi bi-file-earmark-text me-2" />Faktury proforma
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* MAGAZYN */}
                        <NavDropdown title={<span><i className="bi bi-box-seam me-1" />Magazyn</span>} id="magazyn-dropdown">
                            <NavDropdown.Item as={Link} to="/zasoby">
                                <i className="bi bi-archive me-2" />Zasoby (stany magazynowe)
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wydaniaZewnetrzne">
                                <i className="bi bi-box-arrow-up me-2" />Wydania zewnętrzne (WZ)
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne">
                                <i className="bi bi-box-arrow-in-down me-2" />Przyjęcia zewnętrzne (PZ)
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/raportBrakow">
                                <i className="bi bi-exclamation-triangle me-2" />Raport braków
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy">
                                <i className="bi bi-bookmark-check me-2" />Rezerwacje odbiorcy
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ZLECENIA */}
                        <NavDropdown title={<span><i className="bi bi-journal-album me-1" />Zlecenia</span>} id="zlecenia-dropdown">
                            <NavDropdown.Item as={Link} to="/zlecenia">
                                <i className="bi bi-clipboard-data me-2" />Zlecenia sprzedaży
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zleceniaCykliczne">
                                <i className="bi bi-arrow-repeat me-2" />Zlecenia cykliczne
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zleceniaUDostawcy">
                                <i className="bi bi-truck me-2" />Zlecenia u dostawcy
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* SERWIS (urządzenia) */}
                        <NavDropdown title={<span><i className="bi bi-tools me-1" />Serwis</span>} id="serwis-dropdown">
                            <NavDropdown.Item as={Link} to="/urzadzniaServis">
                                <i className="bi bi-pc me-2" />Serwis urządzeń
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis">
                                <i className="bi bi-shield-shaded me-2" />Rodzaje urządzeń
                            </NavDropdown.Item>
                            {/* Zlecenia serwisowe też tutaj */}
                            <NavDropdown.Item as={Link} to="/zlecenia">
                                <i className="bi bi-clipboard-data me-2" />Zlecenia serwisowe
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* SŁOWNIKI i DODATKI */}
                        <NavDropdown title={<span><i className="bi bi-book me-1" />Słowniki</span>} id="slowniki-dropdown">
                            <NavDropdown.Item as={Link} to="/zasoby">
                                <i className="bi bi-archive me-2" />Zasoby (magazyn)
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis">
                                <i className="bi bi-shield-shaded me-2" />Rodzaje urządzeń
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
