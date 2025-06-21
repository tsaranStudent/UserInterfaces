import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function KsiegowoscNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('ksiegowoscNavbar.brand')}</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="ksiegowosc-navbar-nav" />

                <Navbar.Collapse id="ksiegowosc-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* KPiR */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-check me-1" />{t('ksiegowoscNavbar.sections.kpir')}</span>}
                            id="kpir-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/zapisyKPiR">
                                <i className="bi bi-list-task me-2" />{t('ksiegowoscNavbar.links.kpirEntries')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/spisZNatury">
                                <i className="bi bi-clipboard-data me-2" />{t('ksiegowoscNavbar.links.inventoryList')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Deklaracje */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-text me-1" />{t('ksiegowoscNavbar.sections.declarations')}</span>}
                            id="deklaracje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjePIT">
                                <i className="bi bi-file-earmark-person me-2" />{t('ksiegowoscNavbar.links.pitDeclarations')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeCIT">
                                <i className="bi bi-briefcase-fill me-2" />{t('ksiegowoscNavbar.links.citDeclarations')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Środki trwałe */}
                        <NavDropdown
                            title={<span><i className="bi bi-building me-1" />{t('ksiegowoscNavbar.sections.fixedAssets')}</span>}
                            id="srodki-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ewidencjaSrodkowTrwalych">
                                <i className="bi bi-boxes me-2" />{t('ksiegowoscNavbar.links.fixedAssetsRegister')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentySrodowTrwalych">
                                <i className="bi bi-file-earmark-zip me-2" />{t('ksiegowoscNavbar.links.fixedAssetsDocuments')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Wyposażenie */}
                        <NavDropdown
                            title={<span><i className="bi bi-briefcase me-1" />{t('ksiegowoscNavbar.sections.equipment')}</span>}
                            id="wyposazenie-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ewidencjaWyposarzenia">
                                <i className="bi bi-box me-2" />{t('ksiegowoscNavbar.links.equipmentRegister')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Samochody */}
                        <NavDropdown
                            title={<span><i className="bi bi-truck me-1" />{t('ksiegowoscNavbar.sections.cars')}</span>}
                            id="samochody-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/samochody">
                                <i className="bi bi-truck-front me-2" />{t('ksiegowoscNavbar.links.cars')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Dokumenty */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark me-1" />{t('ksiegowoscNavbar.sections.documents')}</span>}
                            id="dokumenty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/dokumentyZrodlowe">
                                <i className="bi bi-file-earmark-richtext me-2" />{t('ksiegowoscNavbar.links.sourceDocuments')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Inwentaryzacja */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-check me-1" />{t('ksiegowoscNavbar.sections.inventory')}</span>}
                            id="inwentaryzacja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/inwentaryzacja">
                                <i className="bi bi-archive me-2" />{t('ksiegowoscNavbar.links.inventory')}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}