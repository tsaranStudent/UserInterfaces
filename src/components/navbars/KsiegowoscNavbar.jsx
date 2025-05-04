import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function KsiegowoscNavbar() {
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
                    <span className="logo-name">Księgowość</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. KPiR */}
                        <Nav.Link as={Link} to="/zapisyKPiR">Zapisy KPiR</Nav.Link>

                        {/* 2. Spis z natury */}
                        <Nav.Link as={Link} to="/spisZNatury">Spis z natury</Nav.Link>

                        {/* 3. Deklaracje */}
                        <NavDropdown title="Deklaracje" id="deklaracje-dropdown">
                            <NavDropdown.Item as={Link} to="/deklaracjePIT">Deklaracje PIT</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeCIT">Deklaracje CIT</NavDropdown.Item>
                        </NavDropdown>

                        {/* 4. Samochody */}
                        <Nav.Link as={Link} to="/samochody">Samochody</Nav.Link>

                        {/* 5. Dokumenty */}
                        <Nav.Link as={Link} to="/dokumentyZrodlowe">Dokumenty źródłowe</Nav.Link>

                        {/* 6. Środki trwałe */}
                        <NavDropdown title="Środki trwałe" id="srodki-dropdown">
                            <NavDropdown.Item as={Link} to="/ewidencjaSrodkowTrwalych">Ewidencja środków trwałych</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentySrodowTrwalych">Dokumenty środków trwałych</NavDropdown.Item>
                        </NavDropdown>

                        {/* 7. Wyposażenie */}
                        <Nav.Link as={Link} to="/ewidencjaWyposarzenia">Ewidencja wyposażenia</Nav.Link>

                        {/* 8. Inwentaryzacja */}
                        <Nav.Link as={Link} to="/inwentaryzacja">Inwentaryzacja</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
