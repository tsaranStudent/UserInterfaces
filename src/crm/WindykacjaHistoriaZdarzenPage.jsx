import React from 'react';
import {
    Container, Table, Accordion, Form,
    Row, Col, Badge, Button, Card
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next'; // Dodane: Import hooka do tłumaczeń

export const WindykacjaHistoriaZdarzen = () => {
    const { t } = useTranslation(); // Dodane: Inicjalizacja hooka useTranslation

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-journal-text icon-unified mb-2" />
                <h1 className="page-title">{t('windykacjaHistoriaZdarzen.title')}</h1>
                <p className="text-muted">{t('windykacjaHistoriaZdarzen.subtitle')}</p>
            </div>

            {/* Filtr */}
            <Card className="form-section shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="g-3">
                            <Col md={3}>
                                <Form.Label>{t('windykacjaHistoriaZdarzen.filter.clientNumber')}</Form.Label>
                                <Form.Control type="text" placeholder={t('windykacjaHistoriaZdarzen.filter.clientNumberPlaceholder')} />
                            </Col>
                            <Col md={3}>
                                <Form.Label>{t('windykacjaHistoriaZdarzen.filter.dateFrom')}</Form.Label>
                                <Form.Control type="date" defaultValue="2025-01-01" />
                            </Col>
                            <Col md={3}>
                                <Form.Label>{t('windykacjaHistoriaZdarzen.filter.dateTo')}</Form.Label>
                                <Form.Control type="date" defaultValue="2025-05-31" />
                            </Col>
                            <Col md={3}>
                                <Form.Label>{t('windykacjaHistoriaZdarzen.filter.status')}</Form.Label>
                                <Form.Select>
                                    <option>{t('windykacjaHistoriaZdarzen.filter.statuses.all')}</option>
                                    <option>{t('windykacjaHistoriaZdarzen.filter.statuses.active')}</option>
                                    <option>{t('windykacjaHistoriaZdarzen.filter.statuses.completed')}</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <div className="actions-bar mt-3">
                            <Button variant="primary" className="me-2">
                                <i className="bi bi-funnel me-1" />{t('windykacjaHistoriaZdarzen.filter.filterButton')}
                            </Button>
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" />{t('windykacjaHistoriaZdarzen.filter.clearButton')}
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            {/* Podsumowanie */}
            <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <i className="bi bi-bar-chart-line me-2" />
                        {t('windykacjaHistoriaZdarzen.summary.title')}
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col md={4}>
                                <div className="p-3 border rounded bg-light">
                                    <div className="text-muted">{t('windykacjaHistoriaZdarzen.summary.totalDebt')}</div>
                                    <div className="h4">24 580,00 PLN</div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 border rounded bg-light">
                                    <div className="text-muted">{t('windykacjaHistoriaZdarzen.summary.activeCases')}</div>
                                    <div className="h4">18</div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 border rounded bg-light">
                                    <div className="text-muted">{t('windykacjaHistoriaZdarzen.summary.averageDelay')}</div>
                                    <div className="h4">45 {t('windykacjaHistoriaZdarzen.summary.days')}</div>
                                </div>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Tabela */}
            <div className="form-section">
                <Table striped bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th><i className="bi bi-calendar3" /> {t('windykacjaHistoriaZdarzen.table.headers.eventDate')}</th>
                            <th><i className="bi bi-person-badge" /> {t('windykacjaHistoriaZdarzen.table.headers.client')}</th>
                            <th><i className="bi bi-file-text" /> {t('windykacjaHistoriaZdarzen.table.headers.type')}</th>
                            <th><i className="bi bi-cash-stack" /> {t('windykacjaHistoriaZdarzen.table.headers.amount')}</th>
                            <th><i className="bi bi-activity" /> {t('windykacjaHistoriaZdarzen.table.headers.status')}</th>
                            <th><i className="bi bi-person" /> {t('windykacjaHistoriaZdarzen.table.headers.responsible')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2025-05-15</td>
                            <td>KLT/2025/001</td>
                            <td>{t('windykacjaHistoriaZdarzen.table.types.paymentReminder')}</td>
                            <td>3 245,00 PLN</td>
                            <td><Badge bg="warning">{t('windykacjaHistoriaZdarzen.table.statuses.inProgress')}</Badge></td>
                            <td>{t('windykacjaHistoriaZdarzen.table.responsible.annaKowalska')}</td>
                        </tr>
                        <tr>
                            <td>2025-05-10</td>
                            <td>KLT/2025/042</td>
                            <td>{t('windykacjaHistoriaZdarzen.table.types.debtCall')}</td>
                            <td>1 800,00 PLN</td>
                            <td><Badge bg="success">{t('windykacjaHistoriaZdarzen.table.statuses.completed')}</Badge></td>
                            <td>{t('windykacjaHistoriaZdarzen.table.responsible.janNowak')}</td>
                        </tr>
                        <tr>
                            <td>2025-05-05</td>
                            <td>KLT/2025/017</td>
                            <td>{t('windykacjaHistoriaZdarzen.table.types.reminderEmail')}</td>
                            <td>5 120,00 PLN</td>
                            <td><Badge bg="danger">{t('windykacjaHistoriaZdarzen.table.statuses.delayed')}</Badge></td>
                            <td>{t('windykacjaHistoriaZdarzen.table.responsible.marekWisniewski')}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* Akcje */}
            <div className="actions-bar mt-4">
                <div className="actions-bar-start">
                    <Button variant="outline-primary" className="me-2">
                        <i className="bi bi-filetype-csv me-1" />{t('windykacjaHistoriaZdarzen.actions.exportCSV')}
                    </Button>
                    <Button variant="outline-secondary">
                        <i className="bi bi-printer me-1" />{t('windykacjaHistoriaZdarzen.actions.printReport')}
                    </Button>
                </div>
                <div className="actions-bar-end">
                    <Button variant="primary">
                        <i className="bi bi-plus-circle me-1" />{t('windykacjaHistoriaZdarzen.actions.newEvent')}
                    </Button>
                </div>
            </div>
        </Container>
    );
};
