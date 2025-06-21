import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function WidokNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('widokNavbar.brand')}</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="widok-navbar-nav" />

                <Navbar.Collapse id="widok-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* WIDOKI */}
                        <NavDropdown title={<span><i className="bi bi-columns-gap me-1" />{t('widokNavbar.sections.views')}</span>} id="widoki-dropdown">
                            <NavDropdown.Item as={Link} to="/kompozycjeWidoku">
                                <i className="bi bi-layers me-2" />{t('widokNavbar.links.viewCompositions')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/czcinki">
                                <i className="bi bi-type me-2" />{t('widokNavbar.links.fonts')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* OKNA */}
                        <NavDropdown title={<span><i className="bi bi-windows me-1" />{t('widokNavbar.sections.windows')}</span>} id="okna-dropdown">
                            <NavDropdown.Item as={Link} to="/ustawieniaOkien">
                                <i className="bi bi-window me-2" />{t('widokNavbar.links.windowSettings')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOkienImport">
                                <i className="bi bi-file-earmark-arrow-up me-2" />{t('widokNavbar.links.import')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ustawieniaOkienEksport">
                                <i className="bi bi-file-earmark-arrow-down me-2" />{t('widokNavbar.links.export')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* USTAWIENIA OGÓLNE */}
                        <Nav.Link as={Link} to="/ustawieniaOgolne">
                            <i className="bi bi-gear-wide me-1" />{t('widokNavbar.links.generalSettings')}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}