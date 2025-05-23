import React from 'react'; import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; import { Link } from 'react-router-dom';

// Pasek nawigacji – podgrupa JPK (styl Comarch Optima: pliki JPK, Import, Informacje)
export function JpkNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">JPK</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="jpk-navbar-nav" />

                {/* Główna nawigacja */}
                <Navbar.Collapse id="jpk-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* Pliki JPK */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-ruled me-1" />Pliki JPK</span>}
                            id="jpk-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">
                                <i className="bi bi-filetype-xml me-2" />Pliki JPK_V7
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">
                                <i className="bi bi-file-earmark-break me-2" />Pliki VAT 9M
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVatUe">
                                <i className="bi bi-file-earmark-spreadsheet me-2" />Pliki VAT UE-OE
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_8">
                                <i className="bi bi-file-earmark-break me-2" />Pliki VAT 8
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Import i eksport do VAT */}
                        <NavDropdown
                            title={<span><i className="bi bi-arrow-bar-down me-1" />Import/Eksport</span>}
                            id="import-eksport-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/importDoRejetruVat">
                                <i className="bi bi-arrow-down-up me-2" />Import do rejestru VAT
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Informacje o JPK */}
                        <NavDropdown
                            title={<span><i className="bi bi-info-circle me-1" />Informacje</span>}
                            id="informacje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/informacjeJpk">
                                <i className="bi bi-question-circle me-2" />Informacje o JPK / pomoc
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
