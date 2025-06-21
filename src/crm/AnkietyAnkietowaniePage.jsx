import React from 'react';
import {
    Container, Table, Accordion, Form,
    Row, Col, Badge, Button, Card, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const AnkietyAnkietowanie = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-clipboard-check icon-unified mb-2" />
                <h1 className="page-title">{t('ankietyAnkietowanie.title')}</h1>
                <p className="text-muted">{t('ankietyAnkietowanie.subtitle')}</p>
            </div>

            {/* Filtr ankiet */}
            <Card className="form-section shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="g-3">
                            <Col md={4}>
                                <Form.Label>{t('ankietyAnkietowanie.filter.keyword')}</Form.Label>
                                <Form.Control placeholder={t('ankietyAnkietowanie.filter.keywordPlaceholder')} />
                            </Col>
                            <Col md={3}>
                                <Form.Label>{t('ankietyAnkietowanie.filter.createdFrom')}</Form.Label>
                                <Form.Control type="date" defaultValue="2025-01-01" />
                            </Col>
                            <Col md={3}>
                                <Form.Label>{t('ankietyAnkietowanie.filter.status')}</Form.Label>
                                <Form.Select>
                                    <option>{t('ankietyAnkietowanie.status.all')}</option>
                                    <option>{t('ankietyAnkietowanie.status.active')}</option>
                                    <option>{t('ankietyAnkietowanie.status.inPreparation')}</option>
                                </Form.Select>
                            </Col>
                            <Col md={2}>
                                <Form.Label> </Form.Label>
                                <div className="d-grid">
                                    <Button variant="primary">
                                        <i className="bi bi-search" /> {t('ankietyAnkietowanie.buttons.filter')}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            {/* Podsumowanie */}
            <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <i className="bi bi-bar-chart-line me-2" />
                        {t('ankietyAnkietowanie.summary.title')}
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col md={4}>
                                <div className="p-3 border rounded bg-light">
                                    <div className="text-muted">{t('ankietyAnkietowanie.summary.totalSurveys')}</div>
                                    <div className="h4">12</div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 border rounded bg-light">
                                    <div className="text-muted">{t('ankietyAnkietowanie.summary.activeNow')}</div>
                                    <div className="h4">5</div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="p-3 border rounded bg-light">
                                    <div className="text-muted">{t('ankietyAnkietowanie.summary.avgResponses')}</div>
                                    <div className="h4">36</div>
                                </div>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Tabela ankiet */}
            <div className="form-section">
                <Table striped bordered hover responsive className="data-table">
                    <thead>
                        <tr>
                            <th><i className="bi bi-chat-text" /> {t('ankietyAnkietowanie.table.title')}</th>
                            <th><i className="bi bi-calendar-plus" /> {t('ankietyAnkietowanie.table.created')}</th>
                            <th><i className="bi bi-hourglass" /> {t('ankietyAnkietowanie.table.deadline')}</th>
                            <th><i className="bi bi-check2-circle" /> {t('ankietyAnkietowanie.table.status')}</th>
                            <th><i className="bi bi-people" /> {t('ankietyAnkietowanie.table.responses')}</th>
                            <th><i className="bi bi-gear" /> {t('ankietyAnkietowanie.table.actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t('ankietyAnkietowanie.example.erpSurvey')}</td>
                            <td>15.01.2025</td>
                            <td>31.03.2025</td>
                            <td><Badge bg="success">{t('ankietyAnkietowanie.status.active')}</Badge></td>
                            <td>24/50</td>
                            <td><Button size="sm" variant="outline-primary">{t('ankietyAnkietowanie.buttons.preview')}</Button></td>
                        </tr>
                        <tr>
                            <td>{t('ankietyAnkietowanie.example.trainingSurvey')}</td>
                            <td>10.02.2025</td>
                            <td>15.04.2025</td>
                            <td><Badge bg="warning">{t('ankietyAnkietowanie.status.inPreparation')}</Badge></td>
                            <td>–</td>
                            <td><Button size="sm" variant="outline-primary">{t('ankietyAnkietowanie.buttons.edit')}</Button></td>
                        </tr>
                        <tr>
                            <td>{t('ankietyAnkietowanie.example.customerSurvey')}</td>
                            <td>05.03.2025</td>
                            <td>30.06.2025</td>
                            <td><Badge bg="success">{t('ankietyAnkietowanie.status.active')}</Badge></td>
                            <td>12/40</td>
                            <td><Button size="sm" variant="outline-primary">{t('ankietyAnkietowanie.buttons.preview')}</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* Akcje globalne */}
            <div className="actions-bar mt-4">
                <div className="actions-bar-start">
                    <Button variant="outline-primary" className="me-2">
                        <i className="bi bi-file-earmark-spreadsheet me-1" /> {t('ankietyAnkietowanie.buttons.exportCSV')}
                    </Button>
                    <Button variant="outline-secondary">
                        <i className="bi bi-printer me-1" /> {t('ankietyAnkietowanie.buttons.printReport')}
                    </Button>
                </div>
                <div className="actions-bar-end">
                    <Button variant="primary">
                        <i className="bi bi-plus-circle me-1" /> {t('ankietyAnkietowanie.buttons.newSurvey')}
                    </Button>
                </div>
            </div>
        </Container>
    );
};