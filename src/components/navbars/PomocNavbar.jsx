import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PomocNavbar() {
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
                    <span className="logo-name">Pomoc</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">
                        {/* 1. Pomoc */}
                        <Nav.Link as={Link} to="/pomoc">Pomoc</Nav.Link>

                        {/* 2. Jak zacząć */}
                        <Nav.Link as={Link} to="/pomocJakZaczac">Jak zacząć</Nav.Link>

                        {/* 3. Filmy instruktażowe */}
                        <Nav.Link as={Link} to="/pomocFilmyInstruktarzowe">Filmy instruktażowe</Nav.Link>

                        {/* 4. FAQ */}
                        <Nav.Link as={Link} to="/pomocFaq">FAQ</Nav.Link>

                        {/* 5. Pomoc zdalna */}
                        <Nav.Link as={Link} to="/pomocZdalna">Pomoc zdalna</Nav.Link>

                        {/* 6. System obsługi zdarzeń */}
                        <Nav.Link as={Link} to="/pomocSystemObslugiZdarzen">System obsługi zdarzeń</Nav.Link>

                        {/* 7. Twoja indywidualna strona */}
                        <Nav.Link as={Link} to="/pomocTwojaIndywidaStrona">Twoja indywidualna strona</Nav.Link>

                        {/* 8. Rejestracja programu */}
                        <Nav.Link as={Link} to="/rejestracjaProgramu">Rejestracja programu</Nav.Link>

                        {/* 9. O programie */}
                        <Nav.Link as={Link} to="/oprogramie">O programie</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
