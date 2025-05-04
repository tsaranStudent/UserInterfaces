import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function HandelNavbar() {
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
                    <span className="logo-name">Handel</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        {/* Faktury Section */}
                        <NavDropdown title="Faktury" id="faktury-dropdown">
                            <NavDropdown.Item as={Link} to="/faktury">Faktury</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowaFaktura">Nowa faktura</NavDropdown.Item>
                        </NavDropdown>

                        {/* Paragony Section */}
                        <NavDropdown title="Paragony" id="paragony-dropdown">
                            <NavDropdown.Item as={Link} to="/paragony">Paragony</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyParagon">Nowy paragon</NavDropdown.Item>
                        </NavDropdown>

                        {/* Rezerwacje Section */}
                        <NavDropdown title="Rezerwacje" id="rezerwacje-dropdown">
                            <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy">Rezerwacje odbiorcy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fakturyProforma">Faktury proforma</NavDropdown.Item>
                        </NavDropdown>

                        {/* Zlecenia Section */}
                        <NavDropdown title="Zlecenia" id="zlecenia-dropdown">
                            <NavDropdown.Item as={Link} to="/zleceniaUDostawcy">Zlecenia u dostawcy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zlecenia">Zlecenia</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zleceniaCykliczne">Zlecenia cykliczne</NavDropdown.Item>
                        </NavDropdown>

                        {/* Urządzenia Section */}
                        <NavDropdown title="Urządzenia" id="urzadzenia-dropdown">
                            <NavDropdown.Item as={Link} to="/urzadzniaServis">Urządzenia</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis">Rodzaje urządzeń</NavDropdown.Item>
                        </NavDropdown>

                        {/* Zasoby and Reports */}
                        <Nav.Link as={Link} to="/zasoby">Zasoby</Nav.Link>
                        <Nav.Link as={Link} to="/raportBrakow">Raport braków</Nav.Link>
                        <Nav.Link as={Link} to="/wydaniaZewnetrzne">Wydania zewnętrzne</Nav.Link>
                        <Nav.Link as={Link} to="/przyjeciaZewnetrzne">Przyjęcia zewnętrzne</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
