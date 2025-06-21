import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function PomocNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('pomocNavbar.brand')}</span>
                </Link>

                <Navbar.Toggle aria-controls="pomoc-navbar-nav" />

                <Navbar.Collapse id="pomoc-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* Pomoc i wsparcie */}
                        <NavDropdown title={<span><i className="bi bi-question-circle me-1" />{t('pomocNavbar.sections.support')}</span>} id="wsparcie-dropdown">
                            <NavDropdown.Item as={Link} to="/pomoc">
                                <i className="bi bi-question-diamond me-2" />{t('pomocNavbar.links.help')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocFaq">
                                <i className="bi bi-patch-question me-2" />{t('pomocNavbar.links.faq')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocJakZaczac">
                                <i className="bi bi-lightbulb me-2" />{t('pomocNavbar.links.gettingStarted')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocFilmyInstruktarzowe">
                                <i className="bi bi-film me-2" />{t('pomocNavbar.links.tutorialVideos')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Kontakt i zdalna pomoc */}
                        <NavDropdown title={<span><i className="bi bi-headset me-1" />{t('pomocNavbar.sections.contact')}</span>} id="kontakt-dropdown">
                            <NavDropdown.Item as={Link} to="/pomocZdalna">
                                <i className="bi bi-mouse me-2" />{t('pomocNavbar.links.remoteSupport')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocSystemObslugiZdarzen">
                                <i className="bi bi-exclamation-triangle me-2" />{t('pomocNavbar.links.incidentSystem')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/pomocTwojaIndywidaStrona">
                                <i className="bi bi-person-video3 me-2" />{t('pomocNavbar.links.personalPage')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Rejestracja i licencja */}
                        <NavDropdown title={<span><i className="bi bi-card-checklist me-1" />{t('pomocNavbar.sections.registration')}</span>} id="rejestracja-dropdown">
                            <NavDropdown.Item as={Link} to="/rejestracjaProgramu">
                                <i className="bi bi-clipboard2-check me-2" />{t('pomocNavbar.links.programRegistration')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Informacje o programie */}
                        <Nav.Link as={Link} to="/oprogramie">
                            <i className="bi bi-info-circle me-1" />{t('pomocNavbar.links.about')}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}