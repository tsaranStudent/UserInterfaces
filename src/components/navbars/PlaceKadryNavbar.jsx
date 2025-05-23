import React from 'react'; import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; import { Link } from 'react-router-dom';

export function PlaceKadryNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Płace i Kadry</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="placekadry-navbar-nav" />

                {/* Sekcja nawigacyjna */}
                <Navbar.Collapse id="placekadry-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* KADRY */}
                        <NavDropdown title={<span><i className="bi bi-people-fill me-1" />Kadry</span>} id="kadry-dropdown">
                            <NavDropdown.Item as={Link} to="/kadry">
                                <i className="bi bi-person-badge me-2" />Kadry
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyPracownik">
                                <i className="bi bi-person-plus me-2" />Nowy pracownik
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/strukturaOrganizacyjna">
                                <i className="bi bi-diagram-3 me-2" />Struktura organizacyjna
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* PŁACE */}
                        <NavDropdown title={<span><i className="bi bi-cash-stack me-1" />Płace</span>} id="place-dropdown">
                            <NavDropdown.Item as={Link} to="/listyPlac">
                                <i className="bi bi-list-ul me-2" />Listy płac
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wtplatyPracownikow">
                                <i className="bi bi-cash-coin me-2" />Wypłaty pracowników
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ZUS */}
                        <NavDropdown title={<span><i className="bi bi-bank2 me-1" />ZUS</span>} id="zus-dropdown">
                            <NavDropdown.Item as={Link} to="/zusPlikiKedu">
                                <i className="bi bi-file-earmark-zip me-2" />ZUS Pliki KEDU
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklarecjeZus">
                                <i className="bi bi-file-earmark-text me-2" />Deklaracje ZUS
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DEKLARACJE */}
                        <NavDropdown title={<span><i className="bi bi-file-earmark-bar-graph me-1" />Deklaracje</span>} id="deklaracje-dropdown">
                            <NavDropdown.Item as={Link} to="/deklaracjePitPracownikow">
                                <i className="bi bi-filetype-pdf me-2" />Deklaracje PIT pracowników
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zalacznikiNaPit4r">
                                <i className="bi bi-paperclip me-2" />Zaliczki na PIT-4R
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/podatekNaPit8ar">
                                <i className="bi bi-cash me-2" />Podatek na PIT-8AR
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjePfron">
                                <i className="bi bi-building me-2" />Deklaracje PFRON
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjePpk">
                                <i className="bi bi-person-video2 me-2" />Deklaracje PPK
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeRoczneZswa">
                                <i className="bi bi-calendar2-week me-2" />Deklaracje roczne ZSWA
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklarazjeRoczneIwa">
                                <i className="bi bi-calendar2-check me-2" />Deklaracje roczne IWA
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KASY ZAPOMOGOWO-POŻYCZKOWE */}
                        <NavDropdown title={<span><i className="bi bi-piggy-bank me-1" />PKZP</span>} id="pkzp-dropdown">
                            <NavDropdown.Item as={Link} to="/kasyZapomogowoPorzyczkowePkzp">
                                <i className="bi bi-cash me-2" />Kasy zapomogowo-pożyczkowe PKZP
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* HRM/TS */}
                        <Nav.Link as={Link} to="/hrmTs">
                            <i className="bi bi-person-lines-fill me-1" />HRM TS
                        </Nav.Link>

                        {/* SŁOWNIKI */}
                        <Nav.Link as={Link} to="/slowniki">
                            <i className="bi bi-book me-1" />Słowniki
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
