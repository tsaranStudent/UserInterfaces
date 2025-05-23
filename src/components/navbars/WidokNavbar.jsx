import React from 'react'; import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; import { Link } from 'react-router-dom';

export function WidokNavbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">Widok</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="widok-navbar-nav" />

                <Navbar.Collapse id="widok-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* WIDOKI */}
                        <NavDropdown title={<span><i className="bi bi-columns-gap me-1" />Widoki</span>} id="widoki-dropdown">
                            <NavDropdown.Item as={Link} to="/kompozycjeWidoku">
                                <i className="bi bi-layers me-2" />Kompozycje widoku
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/czcinki">
                                <i className="bi bi-type me-2" />Czcionki
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* OKNA */}
                        <NavDropdown title={<span><i className="bi bi-windows me-1" />Okna</span>} id="okna-dropdown">
                            <NavDropdown.Item as={Link} to="/ustawieniaOkien">
                                <i className="bi bi-window me-2" />Ustawienia okien
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOkienImport">
                                <i className="bi bi-file-earmark-arrow-up me-2" />Import
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOkienEksport">
                                <i className="bi bi-file-earmark-arrow-down me-2" />Eksport
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* USTAWIENIA OGÓLNE */}
                        <Nav.Link as={Link} to="/ustawieniaOgolne">
                            <i className="bi bi-gear-wide me-1" />Ustawienia ogólne
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
