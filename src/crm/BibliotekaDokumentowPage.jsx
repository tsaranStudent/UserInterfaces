import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col, Button,
    Badge, Card, InputGroup, Tab, Tabs
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next'; // Dodane: Import hooka do tłumaczeń

export const BibliotekaDokumentow = () => {
    const { t } = useTranslation(); // Dodane: Inicjalizacja hooka useTranslation

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-journals icon-unified mb-2" />
                        <h1 className="page-title">{t('bibliotekaDokumentow.title')}</h1>
                        <p className="text-muted">{t('bibliotekaDokumentow.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="dokumenty" className="mb-4">
                        <Tab eventKey="dokumenty" title={<><i className="bi bi-folder-fill me-1" />{t('bibliotekaDokumentow.tabs.documents')}</>}>
                            <div className="form-section actions-bar d-flex justify-content-between align-items-center">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '180px' }}>
                                        <option>{t('bibliotekaDokumentow.filters.allCategories')}</option>
                                        <option>{t('bibliotekaDokumentow.filters.contracts')}</option>
                                        <option>{t('bibliotekaDokumentow.filters.policies')}</option>
                                    </Form.Select>
                                    <Form.Select style={{ maxWidth: '180px' }}>
                                        <option>{t('bibliotekaDokumentow.filters.allDepartments')}</option>
                                        <option>{t('bibliotekaDokumentow.filters.hr')}</option>
                                        <option>{t('bibliotekaDokumentow.filters.it')}</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-file-earmark-plus me-1" /> {t('bibliotekaDokumentow.buttons.add')}
                                    </Button>
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder={t('bibliotekaDokumentow.searchPlaceholder')} />
                                        <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th><i className="bi bi-file-earmark" /> {t('bibliotekaDokumentow.table.name')}</th>
                                        <th><i className="bi bi-tags" /> {t('bibliotekaDokumentow.table.category')}</th>
                                        <th><i className="bi bi-calendar3" /> {t('bibliotekaDokumentow.table.date')}</th>
                                        <th><i className="bi bi-hdd" /> {t('bibliotekaDokumentow.table.size')}</th>
                                        <th><i className="bi bi-check2-circle" /> {t('bibliotekaDokumentow.table.status')}</th>
                                        <th><i className="bi bi-tools" /> {t('bibliotekaDokumentow.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { nazwa: 'Regulamin pracy', categoryKey: 'policies', data: '10.03.2025', size: '1.2 MB', badge: 'success' },
                                        { nazwa: 'Procedura RODO', categoryKey: 'procedures', data: '05.02.2025', size: '800 KB', badge: 'warning' },
                                        { nazwa: 'Umowa o dzieło', categoryKey: 'contracts', data: '22.01.2025', size: '1.5 MB', badge: 'secondary' }
                                    ].map((doc, i) => (
                                        <tr key={i}>
                                            <td>{doc.nazwa}</td>
                                            <td>{t(`bibliotekaDokumentow.filters.${doc.categoryKey}`)}</td>
                                            <td>{doc.data}</td>
                                            <td>{doc.size}</td>
                                            <td><Badge bg={doc.badge}>{t('bibliotekaDokumentow.statusActive')}</Badge></td>
                                            <td>
                                                <Button size="sm" variant="outline-primary" className="me-1" title={t('bibliotekaDokumentow.buttons.download')}>
                                                    <i className="bi bi-download" />
                                                </Button>
                                                <Button size="sm" variant="outline-info" className="me-1" title={t('bibliotekaDokumentow.buttons.history')}>
                                                    <i className="bi bi-clock-history" />
                                                </Button>
                                                <Button size="sm" variant="outline-danger" title={t('bibliotekaDokumentow.buttons.archive')}>
                                                    <i className="bi bi-archive" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="szablony" title={<><i className="bi bi-file-earmark-text me-1" />{t('bibliotekaDokumentow.tabs.templates')}</>}>
                            <Row className="form-section">
                                {[
                                    { titleKey: 'employmentContract', descKey: 'employmentContractDesc', badge: 'info', data: '15.01.2025' },
                                    { titleKey: 'vatInvoice', descKey: 'vatInvoiceDesc', badge: 'primary', data: '20.02.2025' },
                                    { titleKey: 'monthlyReport', descKey: 'monthlyReportDesc', badge: 'secondary', data: '05.03.2025' }
                                ].map((s, i) => (
                                    <Col md={4} key={i}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="mb-0">{t(`bibliotekaDokumentow.templates.${s.titleKey}`)}</h5>
                                                    <Badge bg={s.badge}>{s.badge.toUpperCase()}</Badge>
                                                </div>
                                                <p className="text-muted mt-2">{t(`bibliotekaDokumentow.templates.${s.descKey}`)}</p>
                                                <div className="d-flex justify-content-between">
                                                    <small className="text-muted">{t('bibliotekaDokumentow.templates.modification')}: {s.data}</small>
                                                    <Button size="sm" variant="outline-primary" title={t('bibliotekaDokumentow.buttons.download')}>
                                                        <i className="bi bi-download" />
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>

                        <Tab eventKey="kategorie" title={<><i className="bi bi-tags-fill me-1" />{t('bibliotekaDokumentow.tabs.categories')}</>}>
                            <Row className="form-section">
                                <Col md={6}>
                                    <h5><i className="bi bi-plus-circle me-1" />{t('bibliotekaDokumentow.categories.addCategory')}</h5>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t('bibliotekaDokumentow.categories.categoryName')}</Form.Label>
                                            <Form.Control placeholder={t('bibliotekaDokumentow.categories.enterNamePlaceholder')} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t('bibliotekaDokumentow.categories.department')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('bibliotekaDokumentow.filters.hr')}</option>
                                                <option>{t('bibliotekaDokumentow.filters.finance')}</option>
                                                <option>{t('bibliotekaDokumentow.filters.it')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Button variant="primary"><i className="bi bi-save me-1" />{t('bibliotekaDokumentow.buttons.save')}</Button>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <h5><i className="bi bi-list-ul me-1" />{t('bibliotekaDokumentow.categories.categoryList')}</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>{t('bibliotekaDokumentow.categories.category')}</th>
                                                <th>{t('bibliotekaDokumentow.categories.departmentHeader')}</th>
                                                <th>{t('bibliotekaDokumentow.table.actions')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t('bibliotekaDokumentow.categories.procedures')}</td>
                                                <td>{t('bibliotekaDokumentow.filters.hr')}</td>
                                                <td><Button size="sm" variant="outline-danger" title={t('bibliotekaDokumentow.buttons.delete')}><i className="bi bi-trash" /></Button></td>
                                            </tr>
                                            <tr>
                                                <td>{t('bibliotekaDokumentow.categories.reports')}</td>
                                                <td>{t('bibliotekaDokumentow.filters.finance')}</td>
                                                <td><Button size="sm" variant="outline-danger" title={t('bibliotekaDokumentow.buttons.delete')}><i className="bi bi-trash" /></Button></td>
                                            </tr>
                                            <tr>
                                                <td>{t('bibliotekaDokumentow.categories.templates')}</td>
                                                <td>{t('bibliotekaDokumentow.filters.it')}</td>
                                                <td><Button size="sm" variant="outline-danger" title={t('bibliotekaDokumentow.buttons.delete')}><i className="bi bi-trash" /></Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <div className="summary-text">
                            <i className="bi bi-folder2-open me-1" /><strong>{t('bibliotekaDokumentow.summary.documentsCount')}:</strong> 124
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-clock me-1" /><strong>{t('bibliotekaDokumentow.summary.lastUpdate')}:</strong> 10.03.2025
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};