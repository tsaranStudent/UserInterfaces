import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function OgolneNavbar() {
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
                    <span className="logo-name">Ogólne</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. Kontrahenci */}
                        <NavDropdown title="Kontrahenci" id="kontrahenci-dropdown">
                            <NavDropdown.Item as={Link} to="/kontrahenci">Lista kontrahentów</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyKontrahent">Nowy kontrahent</NavDropdown.Item>
                        </NavDropdown>

                        {/* 2. Towary */}
                        <NavDropdown title="Towary" id="towary-dropdown">
                            <NavDropdown.Item as={Link} to="/nowyTowar">Dodaj towar</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/atrybuty">Atrybuty</NavDropdown.Item>
                        </NavDropdown>

                        {/* 3. Grupy i Kategorie */}
                        <NavDropdown title="Grupy i Kategorie" id="grupy-dropdown">
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">Grupy towarowe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">Kategorie</NavDropdown.Item>
                        </NavDropdown>

                        {/* 4. Cennik */}
                        <NavDropdown title="Cennik" id="cennik-dropdown">
                            <NavDropdown.Item as={Link} to="/cennik">Cennik</NavDropdown.Item>
                        </NavDropdown>

                        {/* 5. Rabaty */}
                        <NavDropdown title="Rabaty" id="rabaty-dropdown">
                            <NavDropdown.Item as={Link} to="/rabaty">Rabaty</NavDropdown.Item>
                        </NavDropdown>

                        {/* 6. Pracownicy i Użytkownicy */}
                        <NavDropdown title="Pracownicy i Użytkownicy" id="pracownicy-dropdown">
                            <NavDropdown.Item as={Link} to="/pracownicy">Pracownicy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/udzielPelnomocnictwa">Pełnomocnictwa</NavDropdown.Item>
                        </NavDropdown>

                        {/* 7. Wysyłki i Komunikacja */}
                        <NavDropdown title="Wysyłki i Komunikacja" id="komunikacja-dropdown">
                            <NavDropdown.Item as={Link} to="/przesylkiKurierskie">Przesyłki kurierskie</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wiadomosciSms">Wiadomości SMS</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zakupPaczkiSms">Zakup paczki SMS</NavDropdown.Item>
                        </NavDropdown>

                        {/* 8. Raporty i Analityka */}
                        <NavDropdown title="Raporty i Analityka" id="raporty-dropdown">
                            <NavDropdown.Item as={Link} to="/raporty">Raporty</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wymiaryOpisuAnalitycznego">Wymiary opisu analitycznego</NavDropdown.Item>
                        </NavDropdown>

                        {/* 9. Ustawienia */}
                        <NavDropdown title="Ustawienia" id="ustawienia-dropdown">
                            <NavDropdown.Item as={Link} to="/waluty">Waluty</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/daneOsobowe">Dane osobowe</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
