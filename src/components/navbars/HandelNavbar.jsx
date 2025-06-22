import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 

export function HandelNavbar() {
    const { t } = useTranslation(); 

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('handelNavbar.brand')}</span>
                </Link>

                {/* Hamburger dla mobile */}
                <Navbar.Toggle aria-controls="handel-navbar-nav" />

                <Navbar.Collapse id="handel-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* SPRZEDAŻ */}
                        <NavDropdown title={<span><i className="bi bi-cart-check me-1" />{t('handelNavbar.sections.sales')}</span>} id="sprzedaz-dropdown">
                            <NavDropdown.Item as={Link} to="/faktury">
                                <i className="bi bi-receipt me-2" />{t('handelNavbar.links.salesInvoices')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowaFaktura">
                                <i className="bi bi-plus-circle me-2" />{t('handelNavbar.links.newInvoice')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/paragony">
                                <i className="bi bi-cash-coin me-2" />{t('handelNavbar.links.receipts')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyParagon">
                                <i className="bi bi-plus-square me-2" />{t('handelNavbar.links.newReceipt')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fakturyProforma">
                                <i className="bi bi-file-earmark-text me-2" />{t('handelNavbar.links.proformaInvoices')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy">
                                <i className="bi bi-bookmark-check me-2" />{t('handelNavbar.links.customerReservations')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ZAKUP */}
                        <NavDropdown title={<span><i className="bi bi-bag-plus me-1" />{t('handelNavbar.sections.purchase')}</span>} id="zakup-dropdown">
                            <NavDropdown.Item as={Link} to="/fakturyZakupu">
                                <i className="bi bi-cart-check me-2" />{t('handelNavbar.links.purchaseInvoices')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne">
                                <i className="bi bi-box-arrow-in-down me-2" />{t('handelNavbar.links.externalReceipts')}
                            </NavDropdown.Item>
                            {/* Proforma dostępna też tu */}
                            <NavDropdown.Item as={Link} to="/fakturyProforma">
                                <i className="bi bi-file-earmark-text me-2" />{t('handelNavbar.links.proformaInvoices')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* MAGAZYN */}
                        <NavDropdown title={<span><i className="bi bi-box-seam me-1" />{t('handelNavbar.sections.warehouse')}</span>} id="magazyn-dropdown">
                            <NavDropdown.Item as={Link} to="/zasoby">
                                <i className="bi bi-archive me-2" />{t('handelNavbar.links.resources')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/wydaniaZewnetrzne">
                                <i className="bi bi-box-arrow-up me-2" />{t('handelNavbar.links.externalIssues')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne">
                                <i className="bi bi-box-arrow-in-down me-2" />{t('handelNavbar.links.externalReceipts')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/raportBrakow">
                                <i className="bi bi-exclamation-triangle me-2" />{t('handelNavbar.links.shortageReport')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy">
                                <i className="bi bi-bookmark-check me-2" />{t('handelNavbar.links.customerReservations')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ZLECENIA */}
                        <NavDropdown title={<span><i className="bi bi-journal-album me-1" />{t('handelNavbar.sections.orders')}</span>} id="zlecenia-dropdown">
                            <NavDropdown.Item as={Link} to="/zlecenia">
                                <i className="bi bi-clipboard-data me-2" />{t('handelNavbar.links.salesOrders')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zleceniaCykliczne">
                                <i className="bi bi-arrow-repeat me-2" />{t('handelNavbar.links.recurringOrders')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zleceniaUDostawcy">
                                <i className="bi bi-truck me-2" />{t('handelNavbar.links.supplierOrders')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* SERWIS (urządzenia) */}
                        <NavDropdown title={<span><i className="bi bi-tools me-1" />{t('handelNavbar.sections.service')}</span>} id="serwis-dropdown">
                            <NavDropdown.Item as={Link} to="/urzadzniaServis">
                                <i className="bi bi-pc me-2" />{t('handelNavbar.links.deviceService')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis">
                                <i className="bi bi-shield-shaded me-2" />{t('handelNavbar.links.deviceTypes')}
                            </NavDropdown.Item>
                            {/* Zlecenia serwisowe też tutaj */}
                            <NavDropdown.Item as={Link} to="/zlecenia">
                                <i className="bi bi-clipboard-data me-2" />{t('handelNavbar.links.serviceOrders')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* SŁOWNIKI i DODATKI */}
                        <NavDropdown title={<span><i className="bi bi-book me-1" />{t('handelNavbar.sections.dictionaries')}</span>} id="slowniki-dropdown">
                            <NavDropdown.Item as={Link} to="/zasoby">
                                <i className="bi bi-archive me-2" />{t('handelNavbar.links.resourcesWarehouse')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis">
                                <i className="bi bi-shield-shaded me-2" />{t('handelNavbar.links.deviceTypes')}
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
