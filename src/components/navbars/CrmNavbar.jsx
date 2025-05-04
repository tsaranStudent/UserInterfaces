import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function CrmNavbar() {
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
                    <span className="logo-name">CRM</span>
                </a>

                {/* Toggle button for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* 1. Kontakty i Terminarz */}
                        <NavDropdown title="Kontakty" id="kontakty-dropdown">
                            <NavDropdown.Item as={Link} to="/kontakty">Lista kontaktów</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/terminarz">Terminarz</NavDropdown.Item>
                        </NavDropdown>

                        {/* 2. Dokumenty Handlowe */}
                        <NavDropdown title="Dokumenty" id="dokumenty-dropdown">
                            <NavDropdown.Item as={Link} to="/fakturyCykliczne">Faktury cykliczne</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ofertyHandlowe">Oferty handlowe</NavDropdown.Item>
                        </NavDropdown>

                        {/* 3. Archiwum */}
                        <NavDropdown title="Archiwum" id="archiwum-dropdown">
                            <NavDropdown.Item as={Link} to="/archiwumWydrukow">Archiwum wydruków</NavDropdown.Item>
                        </NavDropdown>

                        {/* 4. Biblioteka Dokumentów */}
                        <NavDropdown title="Biblioteka" id="biblioteka-dropdown">
                            <NavDropdown.Item as={Link} to="/bibliotekaDokumentow">Przeglądaj dokumenty</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyDokument">Nowy dokument</NavDropdown.Item>
                        </NavDropdown>

                        {/* 5. Komunikacja */}
                        <NavDropdown title="Komunikacja" id="komunikacja-dropdown">
                            <NavDropdown.Item as={Link} to="/skrzynkaOperatora">Skrzynka operatora</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/skrzynkaPocztowa">Skrzynka pocztowa</NavDropdown.Item>
                        </NavDropdown>

                        {/* 6. Windykacja */}
                        <NavDropdown title="Windykacja" id="windykacja-dropdown">
                            <NavDropdown.Item as={Link} to="/windykacjaSchematy">Schematy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/windykacjaHistoriaZdarzen">Historia zdarzeń</NavDropdown.Item>
                        </NavDropdown>

                        {/* 7. Ankiety */}
                        <NavDropdown title="Ankiety" id="ankiety-dropdown">
                            <NavDropdown.Item as={Link} to="/ankietyAnkietowanie">Ankietowanie</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietyWzorceAnkiet">Wzorce ankiet</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietyPytania">Pytania</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietySzablonyOdpowiedzi">Szablony odpowiedzi</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietyGrupyZapytan">Grupy zapytań</NavDropdown.Item>
                        </NavDropdown>

                        {/* 8. Dodatkowe Funkcje */}
                        <NavDropdown title="Więcej" id="wiecej-dropdown">
                            <NavDropdown.Item as={Link} to="/wiecejFunkcji">Więcej funkcji</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}