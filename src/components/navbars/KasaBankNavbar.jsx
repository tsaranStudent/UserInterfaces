import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function KasaBankNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Kasa/Bank</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="kasabank-navbar-nav" />

                <Navbar.Collapse id="kasabank-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* REJESTRY */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-text me-1" />Rejestry</span>}
                            id="rejestry-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/rejestryKasowoBankowe">
                                <i className="bi bi-wallet2 me-2" />Rejestry kasowe/bankowe
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* RAPORTY */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-data me-1" />Raporty</span>}
                            id="raporty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/raportyKasowoBankowe">
                                <i className="bi bi-clipboard-check me-2" />Raporty kasowo/bankowe
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zapisyKasowoBankowe">
                                <i className="bi bi-journal-check me-2" />Zapisy kasowo/bankowe
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ROZLICZENIA */}
                        <NavDropdown
                            title={<span><i className="bi bi-calculator me-1" />Rozliczenia</span>}
                            id="rozliczenia-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/rozliczeniaPodmiotu">
                                <i className="bi bi-person-badge me-2" />Rozliczenia podmiotu
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyNierozliczone">
                                <i className="bi bi-file-earmark-excel me-2" />Dokumenty nierozliczone
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyRozliczone">
                                <i className="bi bi-file-earmark-check me-2" />Dokumenty rozliczone
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyKompensat">
                                <i className="bi bi-shuffle me-2" />Dokumenty kompensat
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WALUTY */}
                        <NavDropdown
                            title={<span><i className="bi bi-currency-exchange me-1" />Waluty</span>}
                            id="waluty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/magazynWalut">
                                <i className="bi bi-currency-dollar me-2" />Magazyn walut
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rozniceKursowe">
                                <i className="bi bi-graph-up-arrow me-2" />Różnice kursowe
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* PŁATNOŚCI */}
                        <NavDropdown
                            title={<span><i className="bi bi-credit-card me-1" />Płatności</span>}
                            id="platnosci-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/preliminarzPlatnosci">
                                <i className="bi bi-calendar-week me-2" />Preliminarz płatności
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DELEGACJE */}
                        <NavDropdown
                            title={<span><i className="bi bi-briefcase me-1" />Delegacje</span>}
                            id="delegacje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/delegacje">
                                <i className="bi bi-person-walking me-2" />Delegacje
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WYMIANA DANYCH */}
                        <NavDropdown
                            title={<span><i className="bi bi-arrow-left-right me-1" />Wymiana danych</span>}
                            id="wymiana-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/wyslijDaneKasaBank">
                                <i className="bi bi-upload me-2" />Wyślij dane
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/odbierzDane">
                                <i className="bi bi-download me-2" />Odbierz dane
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historiaWymiany">
                                <i className="bi bi-clock-history me-2" />Historia wymiany
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* BIURO */}
                        <NavDropdown
                            title={<span><i className="bi bi-building me-1" />Biuro</span>}
                            id="biuro-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/klienciBiura">
                                <i className="bi bi-people me-2" />Klienci biura
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
