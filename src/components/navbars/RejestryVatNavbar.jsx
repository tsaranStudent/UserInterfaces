import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function RejestryVatNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Rejestry VAT</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="rejestryvat-navbar-nav" />

                {/* Nawigacja */}
                <Navbar.Collapse id="rejestryvat-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* REJESTRY */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-text me-1" />Rejestry</span>}
                            id="rejestry-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/rejestryVat">
                                <i className="bi bi-journal me-2" />Rejestry VAT
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/strukturaZakupow">
                                <i className="bi bi-diagram-3 me-2" />Struktura zakupów
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* EWIDENCJA */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-data me-1" />Ewidencja</span>}
                            id="ewidencja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ewidencjaDodatkowa">
                                <i className="bi bi-journal-richtext me-2" />Ewidencja dodatkowa
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ewidencjaKasowegoPit">
                                <i className="bi bi-cash-coin me-2" />Ewidencja kasowego PIT
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* JPK */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-bar-graph me-1" />JPK</span>}
                            id="jpk-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">
                                <i className="bi bi-file-earmark-spreadsheet me-2" />Pliki JPK_V7
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DEKLARACJE VAT */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-text me-1" />Deklaracje VAT</span>}
                            id="deklaracje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjeVatUe">
                                <i className="bi bi-globe-europe-africa me-2" />VAT-UE
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_8">
                                <i className="bi bi-8-circle me-2" />VAT-8
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">
                                <i className="bi bi-9-circle me-2" />VAT-9M
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeInne">
                                <i className="bi bi-files me-2" />Deklaracje inne
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KOMUNIKACJA */}
                        <NavDropdown
                            title={<span><i className="bi bi-arrow-left-right me-1" />Komunikacja</span>}
                            id="komunikacja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/odbierzDane">
                                <i className="bi bi-download me-2" />Odbierz dane
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wyslijDane">
                                <i className="bi bi-upload me-2" />Wyślij dane
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historiaWymiany">
                                <i className="bi bi-clock-history me-2" />Historia wymiany
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KLIENCI */}
                        <NavDropdown
                            title={<span><i className="bi bi-building me-1" />Klienci</span>}
                            id="klienci-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/klienciBiura">
                                <i className="bi bi-people me-2" />Klienci biura
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WIADOMOŚCI */}
                        <NavDropdown
                            title={<span><i className="bi bi-chat-dots me-1" />Wiadomości</span>}
                            id="wiadomosci-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/wiadomosciOdKlientow">
                                <i className="bi bi-envelope-open me-2" />Wiadomości od klientów
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
