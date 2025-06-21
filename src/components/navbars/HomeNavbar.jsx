import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Pasek nawigacji START (wszystko pod kluczami start.*)
export function HomeNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa systemu */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('system.nazwa')}</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* START - Panel główny */}
                        <NavDropdown title={<span><i className="bi bi-house-door me-1" />{t('start.nazwa')}</span>} id="start-dropdown">
                            <NavDropdown.Item as={Link} to="/">
                                <i className="bi bi-house-fill me-2" />{t('start.stronaGlowna')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/informacjeoFirmie">
                                <i className="bi bi-info-circle me-2" />{t('start.informacjeOFirmie')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zmianaFirmy">
                                <i className="bi bi-building-up me-2" />{t('start.zmianaFirmy')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KONFIGURACJA */}
                        <NavDropdown title={<span><i className="bi bi-sliders me-1" />{t('start.konfiguracja')}</span>} id="konfiguracja-dropdown">
                            <NavDropdown.Item as={Link} to="/konfiguracja">
                                <i className="bi bi-sliders2 me-2" />{t('start.konfiguracjaSystemu')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/odswierzKonfiguracje">
                                <i className="bi bi-arrow-repeat me-2" />{t('start.odswiezKonfiguracje')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wlaczNoweFunkcje">
                                <i className="bi bi-stars me-2" />{t('start.wlaczNoweFunkcje')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* AKTUALNOŚCI I WERSJE */}
                        <NavDropdown title={<span><i className="bi bi-lightbulb me-1" />{t('start.aktualnosci')}</span>} id="aktualnosci-dropdown">
                            <NavDropdown.Item as={Link} to="/nowoscWwersji">
                                <i className="bi bi-lightbulb-fill me-2" />{t('start.nowosciWersji')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* UŻYTKOWNIK / SESJA */}
                        <NavDropdown title={<span><i className="bi bi-person-circle me-1" />{t('start.uzytkownik')}</span>} id="user-dropdown">
                            <NavDropdown.Item as={Link} to="/logowanie">
                                <i className="bi bi-person me-2" />{t('start.logowanie')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/koniecPracy">
                                <i className="bi bi-door-open me-2" />{t('start.koniecPracy')}
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
