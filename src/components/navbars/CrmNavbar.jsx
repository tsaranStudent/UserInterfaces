import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CrmNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <div className="container-fluid d-flex align-items-center">
                {/* Logo i nazwa grupy */}
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src="/image/1.png" alt="Logo" className="logo" />
                    <span className="logo-name ms-2">{t('crmNavbar.brand')}</span>
                </Link>

                {/* Hamburger na mobile */}
                <Navbar.Toggle aria-controls="crm-navbar-nav" />

                <Navbar.Collapse id="crm-navbar-nav">
                    <Nav className="ml-auto d-flex flex-wrap">

                        {/* KONTAKTY I RELACJE */}
                        <NavDropdown
                            title={<span><i className="bi bi-person-lines-fill me-1" />{t('crmNavbar.sections.contacts')}</span>}
                            id="kontakty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/kontakty">
                                <i className="bi bi-people me-2" />{t('crmNavbar.links.contactsList')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/terminarz">
                                <i className="bi bi-calendar-event me-2" />{t('crmNavbar.links.calendar')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ofertyHandlowe">
                                <i className="bi bi-journal-text me-2" />{t('crmNavbar.links.commercialOffers')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DOKUMENTY */}
                        <NavDropdown
                            title={<span><i className="bi bi-journal-bookmark me-1" />{t('crmNavbar.sections.documents')}</span>}
                            id="dokumenty-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/fakturyCykliczne">
                                <i className="bi bi-arrow-repeat me-2" />{t('crmNavbar.links.recurringInvoices')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ofertyHandlowe">
                                <i className="bi bi-journal-text me-2" />{t('crmNavbar.links.commercialOffers')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyDokument">
                                <i className="bi bi-file-earmark-plus me-2" />{t('crmNavbar.links.newDocument')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* BIBLIOTEKA DOKUMENTÓW */}
                        <NavDropdown
                            title={<span><i className="bi bi-collection me-1" />{t('crmNavbar.sections.library')}</span>}
                            id="biblioteka-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/bibliotekaDokumentow">
                                <i className="bi bi-folder2-open me-2" />{t('crmNavbar.links.browseDocuments')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/nowyDokument">
                                <i className="bi bi-file-earmark-plus me-2" />{t('crmNavbar.links.newDocument')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ARCHIWUM I HISTORIA */}
                        <NavDropdown
                            title={<span><i className="bi bi-archive me-1" />{t('crmNavbar.sections.archive')}</span>}
                            id="archiwum-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/archiwumWydrukow">
                                <i className="bi bi-file-earmark-zip me-2" />{t('crmNavbar.links.printArchive')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/kontakty">
                                <i className="bi bi-person-vcard me-2" />{t('crmNavbar.links.archivedContacts')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* KOMUNIKACJA */}
                        <NavDropdown
                            title={<span><i className="bi bi-envelope-paper me-1" />{t('crmNavbar.sections.communication')}</span>}
                            id="komunikacja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/skrzynkaOperatora">
                                <i className="bi bi-inbox me-2" />{t('crmNavbar.links.operatorInbox')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/skrzynkaPocztowa">
                                <i className="bi bi-envelope-at me-2" />{t('crmNavbar.links.mailbox')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* WINDYKACJA */}
                        <NavDropdown
                            title={<span><i className="bi bi-exclamation-octagon me-1" />{t('crmNavbar.sections.collection')}</span>}
                            id="windykacja-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/windykacjaSchematy">
                                <i className="bi bi-diagram-3 me-2" />{t('crmNavbar.links.schemes')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/windykacjaHistoriaZdarzen">
                                <i className="bi bi-clock-history me-2" />{t('crmNavbar.links.eventHistory')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* ANKIETY I BADANIA */}
                        <NavDropdown
                            title={<span><i className="bi bi-clipboard-check me-1" />{t('crmNavbar.sections.surveys')}</span>}
                            id="ankiety-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/ankietyAnkietowanie">
                                <i className="bi bi-list-task me-2" />{t('crmNavbar.links.surveying')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietyWzorceAnkiet">
                                <i className="bi bi-ui-checks me-2" />{t('crmNavbar.links.surveyTemplates')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietyPytania">
                                <i className="bi bi-question-circle me-2" />{t('crmNavbar.links.questions')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietySzablonyOdpowiedzi">
                                <i className="bi bi-file-earmark-text me-2" />{t('crmNavbar.links.answerTemplates')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ankietyGrupyZapytan">
                                <i className="bi bi-tags me-2" />{t('crmNavbar.links.queryGroups')}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* DODATKOWE FUNKCJE */}
                        <NavDropdown
                            title={<span><i className="bi bi-gear-wide-connected me-1" />{t('crmNavbar.sections.more')}</span>}
                            id="wiecej-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/wiecejFunkcji">
                                <i className="bi bi-collection-play me-2" />{t('crmNavbar.links.moreFeatures')}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ofertyHandlowe">
                                <i className="bi bi-journal-text me-2" />{t('crmNavbar.links.commercialOffers')}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}