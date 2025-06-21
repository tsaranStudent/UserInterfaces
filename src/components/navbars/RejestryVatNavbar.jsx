import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function RejestryVatNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('rejestryVatNavbar.brand')}</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="rejestryvat-navbar-nav" />

                {/* Nawigacja */}
                <Navbar.Collapse id="rejestryvat-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* REJESTRY */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-text me-1" />{t('rejestryVatNavbar.sections.registers')}</span>}
                            id="rejestry-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/rejestryVat">
                                <i className="bi bi-journal me-2" />{t('rejestryVatNavbar.links.vatRegisters')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/strukturaZakupow">
                                <i className="bi bi-diagram-3 me-2" />{t('rejestryVatNavbar.links.purchaseStructure')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* EWIDENCJA */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-data me-1" />{t('rejestryVatNavbar.sections.records')}</span>}
                            id="ewidencja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ewidencjaDodatkowa">
                                <i className="bi bi-journal-richtext me-2" />{t('rejestryVatNavbar.links.additionalRecords')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ewidencjaKasowegoPit">
                                <i className="bi bi-cash-coin me-2" />{t('rejestryVatNavbar.links.cashPitRecords')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* JPK */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-bar-graph me-1" />{t('rejestryVatNavbar.sections.jpk')}</span>}
                            id="jpk-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">
                                <i className="bi bi-file-earmark-spreadsheet me-2" />{t('rejestryVatNavbar.links.jpkV7Files')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DEKLARACJE VAT */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-text me-1" />{t('rejestryVatNavbar.sections.vatDeclarations')}</span>}
                            id="deklaracje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjeVatUe">
                                <i className="bi bi-globe-europe-africa me-2" />{t('rejestryVatNavbar.links.vatUe')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_8">
                                <i className="bi bi-8-circle me-2" />{t('rejestryVatNavbar.links.vat8')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">
                                <i className="bi bi-9-circle me-2" />{t('rejestryVatNavbar.links.vat9m')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeInne">
                                <i className="bi bi-files me-2" />{t('rejestryVatNavbar.links.otherDeclarations')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KOMUNIKACJA */}
                        <NavDropdown
                            title={<span><i className="bi bi-arrow-left-right me-1" />{t('rejestryVatNavbar.sections.communication')}</span>}
                            id="komunikacja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/odbierzDane">
                                <i className="bi bi-download me-2" />{t('rejestryVatNavbar.links.receiveData')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wyslijDane">
                                <i className="bi bi-upload me-2" />{t('rejestryVatNavbar.links.sendData')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historiaWymiany">
                                <i className="bi bi-clock-history me-2" />{t('rejestryVatNavbar.links.exchangeHistory')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KLIENCI */}
                        <NavDropdown
                            title={<span><i className="bi bi-building me-1" />{t('rejestryVatNavbar.sections.clients')}</span>}
                            id="klienci-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/klienciBiura">
                                <i className="bi bi-people me-2" />{t('rejestryVatNavbar.links.officeClients')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WIADOMOŚCI */}
                        <NavDropdown
                            title={<span><i className="bi bi-chat-dots me-1" />{t('rejestryVatNavbar.sections.messages')}</span>}
                            id="wiadomosci-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/wiadomosciOdKlientow">
                                <i className="bi bi-envelope-open me-2" />{t('rejestryVatNavbar.links.clientMessages')}
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}