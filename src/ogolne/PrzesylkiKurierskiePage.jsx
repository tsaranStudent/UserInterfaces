import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const PrzesylkiKurierskie = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener */}
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">

                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        {/* Ikona + tytuł + opis */}
                        <i className="bi bi-truck icon-unified mb-2" />
                        <h1 className="page-title">{t('przesylkiKurierskie.title')}</h1>
                        <p className="text-muted">{t('przesylkiKurierskie.subtitle')}</p>
                    </div>

                    {/* Pasek akcji i wyszukiwarka */}
                    <div className="form-section mb-4 d-flex justify-content-between align-items-center">
                        <div>
                            <Button variant="success" className="me-2">
                                <i className="bi bi-plus-circle me-1" /> {t('przesylkiKurierskie.actions.new')}
                            </Button>
                            <Button variant="outline-primary">
                                <i className="bi bi-printer me-1" /> {t('przesylkiKurierskie.actions.printLabels')}
                            </Button>
                        </div>
                        <InputGroup className="search-input w-25">
                            <Form.Control placeholder={t('przesylkiKurierskie.search.placeholder')} />
                            <Button variant="outline-secondary">
                                <i className="bi bi-search" />
                            </Button>
                        </InputGroup>
                    </div>

                    {/* Tabela przesyłek */}
                    <Table bordered hover responsive className="data-table mb-4">
                        <thead>
                            <tr>
                                <th>{t('przesylkiKurierskie.table.headers.number')}</th>
                                <th>{t('przesylkiKurierskie.table.headers.sender')}</th>
                                <th>{t('przesylkiKurierskie.table.headers.receiver')}</th>
                                <th>{t('przesylkiKurierskie.table.headers.date')}</th>
                                <th>{t('przesylkiKurierskie.table.headers.status')}</th>
                                <th>{t('przesylkiKurierskie.table.headers.courier')}</th>
                                <th>{t('przesylkiKurierskie.table.headers.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Przesyłka - dostarczona */}
                            <tr>
                                <td>KUR-2025-00147</td>
                                <td>TechCorp Sp. z o.o.</td>
                                <td>Jan Kowalski</td>
                                <td>15.01.2025</td>
                                <td><span className="badge badge-success">{t('przesylkiKurierskie.status.delivered')}</span></td>
                                <td>DPD (J. Nowak)</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-eye" />
                                    </Button>
                                    <Button variant="outline-secondary" size="sm">
                                        <i className="bi bi-printer" />
                                    </Button>
                                </td>
                            </tr>
                            {/* Przesyłka - w transporcie */}
                            <tr>
                                <td>KUR-2025-00148</td>
                                <td>SklepOnline.pl</td>
                                <td>Anna Wiśniewska</td>
                                <td>16.01.2025</td>
                                <td><span className="badge badge-planned">{t('przesylkiKurierskie.status.inTransit')}</span></td>
                                <td>InPost (A. Kowalczyk)</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-eye" />
                                    </Button>
                                    <Button variant="outline-secondary" size="sm">
                                        <i className="bi bi-printer" />
                                    </Button>
                                </td>
                            </tr>
                            {/* Przesyłka - zwrot */}
                            <tr>
                                <td>KUR-2025-00149</td>
                                <td>FirmaX S.A.</td>
                                <td>Michał Krawczyk</td>
                                <td>17.01.2025</td>
                                <td><span className="badge badge-inactive">{t('przesylkiKurierskie.status.return')}</span></td>
                                <td>DHL (M. Maj)</td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-eye" />
                                    </Button>
                                    <Button variant="outline-secondary" size="sm">
                                        <i className="bi bi-printer" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* Accordion - formularz nowej przesyłki */}
                    <Accordion className="form-section mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('przesylkiKurierskie.form.newShipment')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="mb-3 g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>{t('przesylkiKurierskie.form.labels.sender')}</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>{t('przesylkiKurierskie.form.labels.receiver')}</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3 g-3">
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Label>{t('przesylkiKurierskie.form.labels.date')}</Form.Label>
                                                <Form.Control type="date" defaultValue="2025-01-18" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Label>{t('przesylkiKurierskie.form.labels.company')}</Form.Label>
                                                <Form.Select required>
                                                    <option>{t('przesylkiKurierskie.form.companies.dpd')}</option>
                                                    <option>{t('przesylkiKurierskie.form.companies.inpost')}</option>
                                                    <option>{t('przesylkiKurierskie.form.companies.dhl')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group>
                                                <Form.Label>{t('przesylkiKurierskie.form.labels.weight')}</Form.Label>
                                                <Form.Control type="number" step="0.1" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="outline-secondary">{t('przesylkiKurierskie.actions.cancel')}</Button>
                                        <Button variant="primary">{t('przesylkiKurierskie.actions.send')}</Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie przesyłek */}
                    <div className="summary-row">
                        <div className="summary-box">
                            <div className="summary-text"><strong>{t('przesylkiKurierskie.summary.title')}</strong> {t('przesylkiKurierskie.summary.count')}</div>
                            <div className="summary-text"><strong>{t('przesylkiKurierskie.summary.delivered')}</strong> {t('przesylkiKurierskie.summary.deliveredCount')}</div>
                            <Button variant="outline-primary" className="submit-btn mt-2">
                                <i className="bi bi-bar-chart-line me-1" /> {t('przesylkiKurierskie.actions.generateReport')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};