import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    InputGroup, Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const EwidencjaKasowegoPit = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-clipboard-data me-1" aria-hidden="true" />
                        {t('ewidencjaKasowegoPit.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('ewidencjaKasowegoPit.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="ewidencja" className="module-tabs mb-4">
                    <Tab eventKey="ewidencja" title={t('ewidencjaKasowegoPit.tabs.ewidencja')}>
                        {/* Pasek akcji */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('ewidencjaKasowegoPit.actions.addTransaction')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-bank me-1" />
                                    {t('ewidencjaKasowegoPit.actions.importBank')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select className="me-2" style={{ width: '150px' }}>
                                    <option>{t('ewidencjaKasowegoPit.selectors.selectMonth')}</option>
                                    <option>{t('ewidencjaKasowegoPit.selectors.selectMonthAlt')}</option>
                                    <option>{t('ewidencjaKasowegoPit.selectors.selectMonthMar')}</option>
                                </Form.Select>
                                <Form.Control
                                    placeholder={t('ewidencjaKasowegoPit.actions.filterPlaceholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('ewidencjaKasowegoPit.table.date')}</th>
                                    <th>{t('ewidencjaKasowegoPit.table.docNo')}</th>
                                    <th>{t('ewidencjaKasowegoPit.table.counterparty')}</th>
                                    <th>{t('ewidencjaKasowegoPit.table.netAmount')}</th>
                                    <th>{t('ewidencjaKasowegoPit.table.tax')}</th>
                                    <th>{t('ewidencjaKasowegoPit.table.status')}</th>
                                    <th>{t('ewidencjaKasowegoPit.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15.05.2025</td>
                                    <td>KP/2025/123</td>
                                    <td>Jan Kowalski</td>
                                    <td>1 200,00 PLN</td>
                                    <td>276,00 PLN</td>
                                    <td>
                                        <Badge bg="success">{t('ewidencjaKasowegoPit.statuses.posted')}</Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('ewidencjaKasowegoPit.actionsCell.details')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>18.05.2025</td>
                                    <td>KP/2025/124</td>
                                    <td>ABC Usługi</td>
                                    <td>2 500,00 PLN</td>
                                    <td>575,00 PLN</td>
                                    <td>
                                        <Badge bg="warning">{t('ewidencjaKasowegoPit.statuses.pending')}</Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('ewidencjaKasowegoPit.actionsCell.details')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="rozliczenie" title={t('ewidencjaKasowegoPit.tabs.rozliczenie')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('ewidencjaKasowegoPit.operations.monthlyHeading')}</Form.Label>
                                            <Form.Select required>
                                                <option>{t('ewidencjaKasowegoPit.selectors.selectMonth')}</option>
                                                <option>{t('ewidencjaKasowegoPit.selectors.selectMonthAlt')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('ewidencjaKasowegoPit.operations.paymentDue')}</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-06-20"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4 data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('ewidencjaKasowegoPit.report.fields.transactions')}</th>
                                            <th>{t('ewidencjaKasowegoPit.report.fields.netTotal')}</th>
                                            <th>{t('ewidencjaKasowegoPit.report.fields.taxDue')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>24</td>
                                            <td>15 200,00 PLN</td>
                                            <td>3 496,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>8 500,00 PLN</td>
                                            <td>1 955,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>{t('ewidencjaKasowegoPit.summary.header')}:</strong> 5 451,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        {t('ewidencjaKasowegoPit.summary.generateBtn')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="raporty" title={t('ewidencjaKasowegoPit.tabs.raporty')}>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h5 className="card-title">{t('ewidencjaKasowegoPit.report.quarterlyTitle')}</h5>
                                        <Table borderless className="data-table">
                                            <tbody>
                                                <tr>
                                                    <td>{t('ewidencjaKasowegoPit.report.fields.transactions')}</td>
                                                    <td className="text-end">124</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('ewidencjaKasowegoPit.report.fields.netTotal')}</td>
                                                    <td className="text-end">68 450,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('ewidencjaKasowegoPit.report.fields.taxDue')}</td>
                                                    <td className="text-end">15 743,50 PLN</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h5 className="card-title">{t('ewidencjaKasowegoPit.report.monthlyStatsTitle')}</h5>
                                        <Table borderless className="data-table">
                                            <tbody>
                                                <tr>
                                                    <td>{t('ewidencjaKasowegoPit.report.fields.avgTransaction')}</td>
                                                    <td className="text-end">552,02 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('ewidencjaKasowegoPit.report.fields.topCounterparty')}</td>
                                                    <td className="text-end">ABC Usługi (12)</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('ewidencjaKasowegoPit.report.fields.topDay')}</td>
                                                    <td className="text-end">15.05.2025 (8)</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <div className="actions-bar mb-3">
                                    <div className="actions-bar-start">
                                        <Button variant="primary">
                                            {t('ewidencjaKasowegoPit.report.groupedReport.generate')}
                                        </Button>
                                    </div>
                                    <div className="actions-bar-end">
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-05-01"
                                            className="me-2"
                                            style={{ width: '150px' }}
                                        />
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-05-31"
                                            className="me-2"
                                            style={{ width: '150px' }}
                                        />
                                        <Button variant="outline-secondary">
                                            {t('ewidencjaKasowegoPit.report.groupedReport.exportCsv')}
                                        </Button>
                                    </div>
                                </div>

                                <Table bordered responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('ewidencjaKasowegoPit.report.groupedTable.period')}</th>
                                            <th>{t('ewidencjaKasowegoPit.report.groupedTable.count')}</th>
                                            <th>{t('ewidencjaKasowegoPit.report.groupedTable.net')}</th>
                                            <th>{t('ewidencjaKasowegoPit.report.groupedTable.tax')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01–07.05.2025</td>
                                            <td>18</td>
                                            <td>9 850,00 PLN</td>
                                            <td>2 265,50 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>08–14.05.2025</td>
                                            <td>22</td>
                                            <td>12 100,00 PLN</td>
                                            <td>2 783,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};
