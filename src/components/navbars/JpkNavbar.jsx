import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function JpkNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('jpkNavbar.brand')}</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="jpk-navbar-nav" />

                {/* Główna nawigacja */}
                <Navbar.Collapse id="jpk-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* Pliki JPK */}
                        <NavDropdown
                            title={<span><i className="bi bi-file-earmark-ruled me-1" />{t('jpkNavbar.sections.jpkFiles')}</span>}
                            id="jpk-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7">
                                <i className="bi bi-filetype-xml me-2" />{t('jpkNavbar.links.jpkV7Files')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_9M">
                                <i className="bi bi-file-earmark-break me-2" />{t('jpkNavbar.links.vat9mFiles')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVatUe">
                                <i className="bi bi-file-earmark-spreadsheet me-2" />{t('jpkNavbar.links.vatUeFiles')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/deklaracjeVat_8">
                                <i className="bi bi-file-earmark-break me-2" />{t('jpkNavbar.links.vat8Files')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Import i eksport do VAT */}
                        <NavDropdown
                            title={<span><i className="bi bi-arrow-bar-down me-1" />{t('jpkNavbar.sections.importExport')}</span>}
                            id="import-eksport-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/importDoRejetruVat">
                                <i className="bi bi-arrow-down-up me-2" />{t('jpkNavbar.links.importToVatRegister')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Informacje o JPK */}
                        <NavDropdown
                            title={<span><i className="bi bi-info-circle me-1" />{t('jpkNavbar.sections.information')}</span>}
                            id="informacje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/informacjeJpk">
                                <i className="bi bi-question-circle me-2" />{t('jpkNavbar.links.jpkInfoHelp')}
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}