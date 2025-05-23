import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Pasek nawigacji – podgrupa Księgowość (styl Comarch Optima: KPiR, Deklaracje, Środki trwałe, Wyposażenie, Samochody, Dokumenty, Inwentaryzacja)
export function KsiegowoscNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Księgowość</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="ksiegowosc-navbar-nav" />

                <Navbar.Collapse id="ksiegowosc-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* KPiR */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-check me-1" />KPiR</span>}
                            id="kpir-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/zapisyKPiR">
                                <i className="bi bi-list-task me-2" />Zapisy KPiR
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/spisZNatury">
                                <i className="bi bi-clipboard-data me-2" />Spis z natury
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Deklaracje */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-text me-1" />Deklaracje</span>}
                            id="deklaracje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjePIT">
                                <i className="bi bi-file-earmark-person me-2" />Deklaracje PIT
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeCIT">
                                <i className="bi bi-briefcase-fill me-2" />Deklaracje CIT
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Środki trwałe */}
                        <NavDropdown
                            title={<span><i className="bi bi-building me-1" />Środki trwałe</span>}
                            id="srodki-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ewidencjaSrodkowTrwalych">
                                <i className="bi bi-boxes me-2" />Ewidencja środków trwałych
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentySrodowTrwalych">
                                <i className="bi bi-file-earmark-zip me-2" />Dokumenty środków trwałych
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Wyposażenie */}
                        <NavDropdown
                            title={<span><i className="bi bi-briefcase me-1" />Wyposażenie</span>}
                            id="wyposazenie-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ewidencjaWyposarzenia">
                                <i className="bi bi-box me-2" />Ewidencja wyposażenia
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Samochody */}
                        <NavDropdown
                            title={<span><i className="bi bi-truck me-1" />Samochody</span>}
                            id="samochody-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/samochody">
                                <i className="bi bi-truck-front me-2" />Samochody
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Dokumenty */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark me-1" />Dokumenty</span>}
                            id="dokumenty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/dokumentyZrodlowe">
                                <i className="bi bi-file-earmark-richtext me-2" />Dokumenty źródłowe
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Inwentaryzacja */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-check me-1" />Inwentaryzacja</span>}
                            id="inwentaryzacja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/inwentaryzacja">
                                <i className="bi bi-archive me-2" />Inwentaryzacja
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
