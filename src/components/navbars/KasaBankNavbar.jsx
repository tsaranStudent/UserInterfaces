import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function KasaBankNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">

                {/* Logo i nazwa podgrupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('kasaBankNavbar.brand')}</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="kasabank-navbar-nav" />

                <Navbar.Collapse id="kasabank-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* REJESTRY */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-text me-1" />{t('kasaBankNavbar.sections.registers')}</span>}
                            id="rejestry-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/rejestryKasowoBankowe">
                                <i className="bi bi-wallet2 me-2" />{t('kasaBankNavbar.links.cashBankRegisters')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* RAPORTY */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-data me-1" />{t('kasaBankNavbar.sections.reports')}</span>}
                            id="raporty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/raportyKasowoBankowe">
                                <i className="bi bi-clipboard-check me-2" />{t('kasaBankNavbar.links.cashBankReports')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/zapisyKasowoBankowe">
                                <i className="bi bi-journal-check me-2" />{t('kasaBankNavbar.links.cashBankEntries')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ROZLICZENIA */}
                        <NavDropdown
                            title={<span><i className="bi bi-calculator me-1" />{t('kasaBankNavbar.sections.settlements')}</span>}
                            id="rozliczenia-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/rozliczeniaPodmiotu">
                                <i className="bi bi-person-badge me-2" />{t('kasaBankNavbar.links.entitySettlements')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyNierozliczone">
                                <i className="bi bi-file-earmark-excel me-2" />{t('kasaBankNavbar.links.unsettledDocuments')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyRozliczone">
                                <i className="bi bi-file-earmark-check me-2" />{t('kasaBankNavbar.links.settledDocuments')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dokumentyKompensat">
                                <i className="bi bi-shuffle me-2" />{t('kasaBankNavbar.links.compensationDocuments')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WALUTY */}
                        <NavDropdown
                            title={<span><i className="bi bi-currency-exchange me-1" />{t('kasaBankNavbar.sections.currencies')}</span>}
                            id="waluty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/magazynWalut">
                                <i className="bi bi-currency-dollar me-2" />{t('kasaBankNavbar.links.currencyWarehouse')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/rozniceKursowe">
                                <i className="bi bi-graph-up-arrow me-2" />{t('kasaBankNavbar.links.exchangeDifferences')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* PŁATNOŚCI */}
                        <NavDropdown
                            title={<span><i className="bi bi-credit-card me-1" />{t('kasaBankNavbar.sections.payments')}</span>}
                            id="platnosci-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/preliminarzPlatnosci">
                                <i className="bi bi-calendar-week me-2" />{t('kasaBankNavbar.links.paymentSchedule')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DELEGACJE */}
                        <NavDropdown
                            title={<span><i className="bi bi-briefcase me-1" />{t('kasaBankNavbar.sections.businessTrips')}</span>}
                            id="delegacje-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/delegacje">
                                <i className="bi bi-person-walking me-2" />{t('kasaBankNavbar.links.businessTrips')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WYMIANA DANYCH */}
                        <NavDropdown
                            title={<span><i className="bi bi-arrow-left-right me-1" />{t('kasaBankNavbar.sections.dataExchange')}</span>}
                            id="wymiana-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/wyslijDaneKasaBank">
                                <i className="bi bi-upload me-2" />{t('kasaBankNavbar.links.sendData')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/odbierzDane">
                                <i className="bi bi-download me-2" />{t('kasaBankNavbar.links.receiveData')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/historiaWymiany">
                                <i className="bi bi-clock-history me-2" />{t('kasaBankNavbar.links.exchangeHistory')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* BIURO */}
                        <NavDropdown
                            title={<span><i className="bi bi-building me-1" />{t('kasaBankNavbar.sections.office')}</span>}
                            id="biuro-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/klienciBiura">
                                <i className="bi bi-people me-2" />{t('kasaBankNavbar.links.officeClients')}
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}