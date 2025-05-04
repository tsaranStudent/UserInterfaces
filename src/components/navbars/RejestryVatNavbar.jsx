import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function RejestryVatNavbar() {
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
                    <span className="logo-name">Rejestry VAT</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. Rejestry */}
                        <Nav.Link as={Link} to="/rejestryVat">Rejestry VAT</Nav.Link>

                        {/* 2. Struktura */}
                        <Nav.Link as={Link} to="/strukturaZakupow">Struktura zakupów</Nav.Link>

                        {/* 3. Ewidencja */}
                        <NavDropdown title="Ewidencja" id="ewidencja-dropdown">
                            <NavDropdown.Item as={Link} to="/ewidencjaDodatkowa">Ewidencja dodatkowa</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ewidencjaKasowegoPit">Ewidencja kasowego PIT</NavDropdown.Item>
                        </NavDropdown>

                        {/* 4. JPK_V7 */}
                        <Nav.Link as={Link} to="/deklaracjePlikiJPK_V7">Pliki JPK_V7</Nav.Link>

                        {/* 5. Deklaracje VAT */}
                        <NavDropdown title="Deklaracje VAT" id="deklaracje-dropdown">
                            <NavDropdown.Item as={Link} to="/deklaracjeVatUe">VAT-UE</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklracjeVat_8">VAT-8</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">VAT-9M</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeInne">Deklaracje inne</NavDropdown.Item>
                        </NavDropdown>

                        {/* 6. Komunikacja */}
                        <NavDropdown title="Komunikacja" id="komunikacja-dropdown">
                            <NavDropdown.Item as={Link} to="/odbierzDane">Odbierz dane</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wyslijDane">Wyślij dane</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historiaWymiany">Historia wymiany</NavDropdown.Item>
                        </NavDropdown>

                        {/* 7. Klienci */}
                        <Nav.Link as={Link} to="/klienciBiura">Klienci biura</Nav.Link>

                        {/* 8. Wiadomości */}
                        <Nav.Link as={Link} to="/wiadomosciOdKlientow">Wiadomości od klientów</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
