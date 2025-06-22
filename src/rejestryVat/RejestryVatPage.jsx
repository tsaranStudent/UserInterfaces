import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge, InputGroup
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RejestryVat = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-journal-text icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-calculator me-1" aria-hidden="true" />
                        {t('rejestryVatPage.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('rejestryVatPage.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="ewidencja" className="mb-4 module-tabs">
                    <Tab
                        eventKey="ewidencja"
                        title={
                            <>
                                <i className="bi bi-table me-1" />
                                {t('rejestryVatPage.tabs.register')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('rejestryVatPage.actions.newEntry')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-download me-1" />
                                    {t('rejestryVatPage.actions.import')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select className="me-2" style={{ width: '150px' }}>
                                    <option>{t('rejestryVatPage.filters.all')}</option>
                                    <option>{t('rejestryVatPage.filters.sales')}</option>
                                    <option>{t('rejestryVatPage.filters.purchases')}</option>
                                </Form.Select>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-01"
                                    className="me-2"
                                    style={{ width: '150px' }}
                                />
                                <InputGroup style={{ width: '200px' }}>
                                    <Form.Control
                                        placeholder={t('rejestryVatPage.search.placeholder')}
                                    />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('rejestryVatPage.table.date')}</th>
                                            <th><i className="bi bi-hash me-1" />{t('rejestryVatPage.table.number')}</th>
                                            <th><i className="bi bi-building me-1" />{t('rejestryVatPage.table.contractor')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('rejestryVatPage.table.net')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('rejestryVatPage.table.vat')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('rejestryVatPage.table.gross')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('rejestryVatPage.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025</td>
                                            <td>FV/2025/123</td>
                                            <td>{t('rejestryVatPage.exampleContractors.abc')}</td>
                                            <td>5 000,00 PLN</td>
                                            <td>1 150,00 PLN</td>
                                            <td>6 150,00 PLN</td>
                                            <td><Badge bg="success">{t('rejestryVatPage.statuses.booked')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>18.05.2025</td>
                                            <td>FV/2025/124</td>
                                            <td>{t('rejestryVatPage.exampleContractors.xyz')}</td>
                                            <td>2 500,00 PLN</td>
                                            <td>575,00 PLN</td>
                                            <td>3 075,00 PLN</td>
                                            <td><Badge bg="warning">{t('rejestryVatPage.statuses.pending')}</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="rozliczenie"
                        title={
                            <>
                                <i className="bi bi-file-earmark-text me-1" />
                                {t('rejestryVatPage.tabs.settlement')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-calendar-month me-2" />
                                    {t('rejestryVatPage.settlement.title')}
                                </h5>
                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar me-1" />
                                                    {t('rejestryVatPage.settlement.month')}*
                                                </Form.Label>
                                                <Form.Select required>
                                                    <option>{t('rejestryVatPage.months.may')} 2025</option>
                                                    <option>{t('rejestryVatPage.months.april')} 2025</option>
                                                    <option>{t('rejestryVatPage.months.march')} 2025</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar-check me-1" />
                                                    {t('rejestryVatPage.settlement.deadline')}
                                                </Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    defaultValue="2025-06-25"
                                                    disabled
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Table bordered responsive className="mb-4">
                                        <thead>
                                            <tr>
                                                <th><i className="bi bi-percent me-1" />{t('rejestryVatPage.table.rate')}</th>
                                                <th><i className="bi bi-currency-dollar me-1" />{t('rejestryVatPage.table.net')}</th>
                                                <th><i className="bi bi-percent me-1" />{t('rejestryVatPage.table.vat')}</th>
                                                <th><i className="bi bi-cash-stack me-1" />{t('rejestryVatPage.table.gross')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>23%</td>
                                                <td>15 000,00 PLN</td>
                                                <td>3 450,00 PLN</td>
                                                <td>18 450,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>8%</td>
                                                <td>5 000,00 PLN</td>
                                                <td>400,00 PLN</td>
                                                <td>5 400,00 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className="summary-box p-3 mb-3 bg-light rounded">
                                        <div className="summary-text fs-5">
                                            <i className="bi bi-currency-dollar me-2" />
                                            <strong>{t('rejestryVatPage.settlement.vatToPay')}:</strong> 12 450,00 PLN
                                        </div>
                                        <Button variant="primary" className="mt-3">
                                            <i className="bi bi-file-earmark-pdf me-1" />
                                            {t('rejestryVatPage.actions.generateVat7')}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="raporty"
                        title={
                            <>
                                <i className="bi bi-file-earmark-bar-graph me-1" />
                                {t('rejestryVatPage.tabs.reports')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-bank me-2" />
                                    {t('rejestryVatPage.reports.title')}
                                </h5>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('rejestryVatPage.reports.dateFrom')}*
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-01"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('rejestryVatPage.reports.dateTo')}*
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-05-31"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="actions-bar mb-3">
                                    <div className="actions-bar-start">
                                        <Button variant="primary">
                                            <i className="bi bi-file-earmark-text me-1" />
                                            {t('rejestryVatPage.actions.generateReport')}
                                        </Button>
                                    </div>
                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-file-earmark-excel me-1" />
                                            {t('rejestryVatPage.actions.exportCsv')}
                                        </Button>
                                    </div>
                                </div>

                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('rejestryVatPage.table.operationDate')}</th>
                                            <th><i className="bi bi-hash me-1" />{t('rejestryVatPage.table.documentNumber')}</th>
                                            <th><i className="bi bi-card-text me-1" />{t('rejestryVatPage.table.description')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('rejestryVatPage.table.amount')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>02.05.2025</td>
                                            <td>OP/VAT/0525/001</td>
                                            <td>{t('rejestryVatPage.reports.paymentForInvoice')} FV/2025/120</td>
                                            <td>2 460,00 PLN</td>
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