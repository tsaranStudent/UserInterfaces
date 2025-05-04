import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function WidokNavbar() {
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
                    <span className="logo-name">Widok</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. Kompozycje widoku */}
                        <Nav.Link as={Link} to="/kompozycjeWidoku">Kompozycje widoku</Nav.Link>

                        {/* 2. Czcionki */}
                        <Nav.Link as={Link} to="/czcinki">Czcionki</Nav.Link>

                        {/* 3. Ustawienia okien */}
                        {/* 8 lub więcej pozycji, więc zamiast rozwijanej listy używamy bezpośrednich linków */}
                        <Nav.Link as={Link} to="/ustawieniaOkien">Ustawienia okien</Nav.Link>
                        <Nav.Link as={Link} to="/ustawieniaOkienImport">Import</Nav.Link>
                        <Nav.Link as={Link} to="/ustawieniaOkienEksport">Eksport</Nav.Link>

                        {/* 4. Ustawienia ogólne */}
                        <Nav.Link as={Link} to="/ustawieniaOgolne">Ustawienia ogólne</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
