import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function PlaceKadryNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('placeKadryNavbar.brand')}</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="placekadry-navbar-nav" />

                {/* Sekcja nawigacyjna */}
                <Navbar.Collapse id="placekadry-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* KADRY */}
                        <NavDropdown title={<span><i className="bi bi-people-fill me-1" />{t('placeKadryNavbar.sections.hr')}</span>} id="kadry-dropdown">
                            <NavDropdown.Item as={Link} to="/kadry">
                                <i className="bi bi-person-badge me-2" />{t('placeKadryNavbar.links.hr')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyPracownik">
                                <i className="bi bi-person-plus me-2" />{t('placeKadryNavbar.links.newEmployee')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/strukturaOrganizacyjna">
                                <i className="bi bi-diagram-3 me-2" />{t('placeKadryNavbar.links.orgStructure')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* PŁACE */}
                        <NavDropdown title={<span><i className="bi bi-cash-stack me-1" />{t('placeKadryNavbar.sections.payroll')}</span>} id="place-dropdown">
                            <NavDropdown.Item as={Link} to="/listyPlac">
                                <i className="bi bi-list-ul me-2" />{t('placeKadryNavbar.links.payrollLists')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wtplatyPracownikow">
                                <i className="bi bi-cash-coin me-2" />{t('placeKadryNavbar.links.employeePayments')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ZUS */}
                        <NavDropdown title={<span><i className="bi bi-bank2 me-1" />{t('placeKadryNavbar.sections.socialSecurity')}</span>} id="zus-dropdown">
                            <NavDropdown.Item as={Link} to="/zusPlikiKedu">
                                <i className="bi bi-file-earmark-zip me-2" />{t('placeKadryNavbar.links.socialSecurityKeduFiles')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklarecjeZus">
                                <i className="bi bi-file-earmark-text me-2" />{t('placeKadryNavbar.links.socialSecurityDeclarations')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DEKLARACJE */}
                        <NavDropdown title={<span><i className="bi bi-file-earmark-bar-graph me-1" />{t('placeKadryNavbar.sections.declarations')}</span>} id="deklaracje-dropdown">
                            <NavDropdown.Item as={Link} to="/deklaracjePitPracownikow">
                                <i className="bi bi-filetype-pdf me-2" />{t('placeKadryNavbar.links.employeePitDeclarations')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zalacznikiNaPit4r">
                                <i className="bi bi-paperclip me-2" />{t('placeKadryNavbar.links.pit4rAdvances')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/podatekNaPit8ar">
                                <i className="bi bi-cash me-2" />{t('placeKadryNavbar.links.pit8arTax')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjePfron">
                                <i className="bi bi-building me-2" />{t('placeKadryNavbar.links.pfronDeclarations')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjePpk">
                                <i className="bi bi-person-video2 me-2" />{t('placeKadryNavbar.links.ppkDeclarations')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeRoczneZswa">
                                <i className="bi bi-calendar2-week me-2" />{t('placeKadryNavbar.links.annualZswaDeclarations')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklarazjeRoczneIwa">
                                <i className="bi bi-calendar2-check me-2" />{t('placeKadryNavbar.links.annualIwaDeclarations')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KASY ZAPOMOGOWO-POŻYCZKOWE */}
                        <NavDropdown title={<span><i className="bi bi-piggy-bank me-1" />{t('placeKadryNavbar.sections.employeeLoanFunds')}</span>} id="pkzp-dropdown">
                            <NavDropdown.Item as={Link} to="/kasyZapomogowoPorzyczkowePkzp">
                                <i className="bi bi-cash me-2" />{t('placeKadryNavbar.links.employeeLoanFunds')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* HRM/TS */}
                        <Nav.Link as={Link} to="/hrmTs">
                            <i className="bi bi-person-lines-fill me-1" />{t('placeKadryNavbar.links.hrmTs')}
                        </Nav.Link>

                        {/* SŁOWNIKI */}
                        <Nav.Link as={Link} to="/slowniki">
                            <i className="bi bi-book me-1" />{t('placeKadryNavbar.links.dictionaries')}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}