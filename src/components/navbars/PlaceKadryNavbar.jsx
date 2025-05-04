import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PlaceKadryNavbar() {
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
                    <span className="logo-name">Płace i Kadry</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. Kadry */}
                        <NavDropdown title="Kadry" id="kadry-dropdown">
                            <NavDropdown.Item as={Link} to="/kadry">Kadry</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyPracownik">Nowy pracownik</NavDropdown.Item>
                        </NavDropdown>

                        {/* 2. Listy płac */}
                        <NavDropdown title="Listy płac" id="listy-plac-dropdown">
                            <NavDropdown.Item as={Link} to="/listyPlac">Listy płac</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wtplatyPracownikow">Wypłaty pracowników</NavDropdown.Item>
                        </NavDropdown>

                        {/* 3. ZUS (jeśli tylko jedna pozycja, bez dropdown) */}
                        <Nav.Link as={Link} to="/zusPlikiKedu">ZUS Pliki KEDU</Nav.Link>

                        {/* 4. Deklaracje PIT */}
                        <NavDropdown title="Deklaracje PIT" id="pit-dropdown">
                            <NavDropdown.Item as={Link} to="/zalacznikiNaPit4r">Zaliczki na PIT-4R</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/podatekNaPit8ar">Podatek na PIT-8AR</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjePitPracownikow">Deklaracje PIT pracowników</NavDropdown.Item>
                        </NavDropdown>

                        {/* 5. Deklaracje PFRON */}
                        <NavDropdown title="Deklaracje PFRON" id="pfron-dropdown">
                            <NavDropdown.Item as={Link} to="/deklaracjePfron">Deklaracje PFRON</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjePpk">Deklaracje PPK</NavDropdown.Item>
                        </NavDropdown>

                        {/* 6. Słowniki */}
                        <Nav.Link as={Link} to="/slowniki">Słowniki</Nav.Link>

                        {/* 7. Struktura organizacyjna */}
                        <Nav.Link as={Link} to="/strukturaOrganizacyjna">Struktura organizacyjna</Nav.Link>

                        {/* 8. Kasy zapomogowo - pożyczkowe */}
                        <Nav.Link as={Link} to="/kasyZapomogowoPorzyczkowePkzp">Kasy zapomogowo - pożyczkowe PKZP</Nav.Link>

                        {/* 9. KRM TS */}
                        <Nav.Link as={Link} to="/hrmTs">KRM TS</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
