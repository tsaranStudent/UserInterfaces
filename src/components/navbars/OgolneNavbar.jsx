import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Pasek nawigacji – podgrupa Ogólne (w stylu Comarch Optima)
export function OgolneNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('ogolne.nazwa')}</span>
                </Link>

                <Navbar.Toggle aria-controls="ogolne-navbar-nav" />

                <Navbar.Collapse id="ogolne-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        <NavDropdown title={<span><i className="bi bi-people-fill me-1" />{t('ogolne.kontrahenci')}</span>} id="kontrahenci-dropdown">
                            <NavDropdown.Item as={Link} to="/kontrahenci">
                                <i className="bi bi-list-ul me-2" />{t('ogolne.listaKontrahentow')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyKontrahent">
                                <i className="bi bi-person-plus me-2" />{t('ogolne.nowyKontrahent')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">
                                <i className="bi bi-diagram-3 me-2" />{t('ogolne.grupyKontrahentow')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">
                                <i className="bi bi-collection me-2" />{t('ogolne.kategorie')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="bi bi-box-seam me-1" />{t('ogolne.towary')}</span>} id="towary-dropdown">
                            <NavDropdown.Item as={Link} to="/nowyTowar">
                                <i className="bi bi-plus-square me-2" />{t('ogolne.nowyTowar')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/atrybuty">
                                <i className="bi bi-sliders2-vertical me-2" />{t('ogolne.atrybuty')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">
                                <i className="bi bi-diagram-3 me-2" />{t('ogolne.grupyTowarowe')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">
                                <i className="bi bi-tags me-2" />{t('ogolne.kategorie')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="bi bi-cash-coin me-1" />{t('ogolne.cennikiIRabaty')}</span>} id="cennik-rabaty-dropdown">
                            <NavDropdown.Item as={Link} to="/cennik">
                                <i className="bi bi-currency-exchange me-2" />{t('ogolne.cennik')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rabaty">
                                <i className="bi bi-percent me-2" />{t('ogolne.rabaty')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="bi bi-person-badge me-1" />{t('ogolne.pracownicy')}</span>} id="pracownicy-dropdown">
                            <NavDropdown.Item as={Link} to="/pracownicy">
                                <i className="bi bi-people me-2" />{t('ogolne.pracownicy')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/udzielPelnomocnictwa">
                                <i className="bi bi-person-check me-2" />{t('ogolne.pelnomocnictwa')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/daneOsobowe">
                                <i className="bi bi-person-vcard me-2" />{t('ogolne.daneOsobowe')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="bi bi-send-fill me-1" />{t('ogolne.komunikacja')}</span>} id="komunikacja-dropdown">
                            <NavDropdown.Item as={Link} to="/przesylkiKurierskie">
                                <i className="bi bi-truck me-2" />{t('ogolne.przesylki')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wiadomosciSms">
                                <i className="bi bi-chat-dots me-2" />{t('ogolne.smsy')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zakupPaczkiSms">
                                <i className="bi bi-envelope-plus me-2" />{t('ogolne.zakupSms')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="bi bi-bar-chart-line me-1" />{t('ogolne.raporty')}</span>} id="raporty-dropdown">
                            <NavDropdown.Item as={Link} to="/raporty">
                                <i className="bi bi-file-earmark-bar-graph me-2" />{t('ogolne.raporty')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wymiaryOpisuAnalitycznego">
                                <i className="bi bi-layers-half me-2" />{t('ogolne.wymiary')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="bi bi-book me-1" />{t('ogolne.slowniki')}</span>} id="slowniki-dropdown">
                            <NavDropdown.Item as={Link} to="/waluty">
                                <i className="bi bi-currency-dollar me-2" />{t('ogolne.waluty')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kategorie">
                                <i className="bi bi-tags me-2" />{t('ogolne.kategorie')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/grupyTowarowe">
                                <i className="bi bi-diagram-3 me-2" />{t('ogolne.grupyTowarowe')}
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
