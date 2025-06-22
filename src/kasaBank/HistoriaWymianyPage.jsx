import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge, InputGroup
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const HistoriaWymiany = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-currency-exchange icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-graph-up me-1" aria-hidden="true" />
                        {t('historiaWymiany.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-archive me-1" aria-hidden="true" />
                        {t('historiaWymiany.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                    <Tab
                        eventKey="lista"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('historiaWymiany.tabs.list')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Form.Select style={{ width: '200px' }}>
                                    <option>{t('historiaWymiany.filters.allCurrencies')}</option>
                                    <option>EUR</option>
                                    <option>USD</option>
                                    <option>GBP</option>
                                </Form.Select>
                                <Button variant="outline-secondary" className="ms-2">
                                    <i className="bi bi-download me-1" />
                                    {t('historiaWymiany.actions.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '300px' }}>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-01-01"
                                    />
                                    <InputGroup.Text>-</InputGroup.Text>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-31"
                                    />
                                </InputGroup>
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-hash me-1" />{t('historiaWymiany.table.operationNumber')}</th>
                                            <th><i className="bi bi-calendar me-1" />{t('historiaWymiany.table.date')}</th>
                                            <th><i className="bi bi-currency-bitcoin me-1" />{t('historiaWymiany.table.sourceCurrency')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('historiaWymiany.table.targetCurrency')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('historiaWymiany.table.rate')}</th>
                                            <th><i className="bi bi-coin me-1" />{t('historiaWymiany.table.amount')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('historiaWymiany.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('historiaWymiany.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>WE/2025/001</td>
                                            <td>12.05.2025</td>
                                            <td>10 000 PLN</td>
                                            <td>2 150,00 EUR</td>
                                            <td>4,6512</td>
                                            <td>10 000,00 PLN</td>
                                            <td><Badge bg="success">{t('historiaWymiany.statuses.booked')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('historiaWymiany.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>WE/2025/002</td>
                                            <td>18.05.2025</td>
                                            <td>5 000 USD</td>
                                            <td>19 750,00 PLN</td>
                                            <td>3,9500</td>
                                            <td>5 000,00 USD</td>
                                            <td><Badge bg="warning">{t('historiaWymiany.statuses.pending')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('historiaWymiany.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="nowa"
                        title={
                            <>
                                <i className="bi bi-plus-circle me-1" />
                                {t('historiaWymiany.tabs.new')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-arrow-left-right me-2" />
                                    {t('historiaWymiany.newOperation.title')}
                                </h5>

                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('historiaWymiany.newOperation.operationDate')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-currency-bitcoin me-1" />
                                                {t('historiaWymiany.newOperation.sourceCurrency')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>PLN</option>
                                                <option>EUR</option>
                                                <option>USD</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-coin me-1" />
                                                {t('historiaWymiany.newOperation.amount')}
                                            </Form.Label>
                                            <Form.Control type="number" placeholder="0,00" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-cash-stack me-1" />
                                                {t('historiaWymiany.newOperation.targetCurrency')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>EUR</option>
                                                <option>USD</option>
                                                <option>GBP</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-percent me-1" />
                                                {t('historiaWymiany.newOperation.exchangeRate')}
                                            </Form.Label>
                                            <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calculator me-1" />
                                                {t('historiaWymiany.newOperation.exchangedAmount')}
                                            </Form.Label>
                                            <Form.Control type="text" readOnly placeholder="0,00" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-x-circle me-1" />
                                        {t('historiaWymiany.actions.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-check-circle me-1" />
                                        {t('historiaWymiany.actions.confirmExchange')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="raport"
                        title={
                            <>
                                <i className="bi bi-file-earmark-bar-graph me-1" />
                                {t('historiaWymiany.tabs.report')}
                            </>
                        }
                    >
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">
                                            <i className="bi bi-graph-up me-2" />
                                            {t('historiaWymiany.reports.averageRates')} - Maj 2025
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-currency-bitcoin me-1" />{t('historiaWymiany.table.currency')}</th>
                                                    <th><i className="bi bi-percent me-1" />{t('historiaWymiany.table.averageRate')}</th>
                                                    <th><i className="bi bi-arrow-left-right me-1" />{t('historiaWymiany.table.change')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>EUR</td>
                                                    <td>4,6521</td>
                                                    <td className="text-success">+0,12%</td>
                                                </tr>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>3,9518</td>
                                                    <td className="text-danger">-0,45%</td>
                                                </tr>
                                                <tr>
                                                    <td>GBP</td>
                                                    <td>5,4123</td>
                                                    <td className="text-success">+0,08%</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="mb-3">
                                            <i className="bi bi-pie-chart me-2" />
                                            {t('historiaWymiany.reports.exchangeStats')}
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-arrow-left-right me-1" />{t('historiaWymiany.table.currencyPair')}</th>
                                                    <th><i className="bi bi-123 me-1" />{t('historiaWymiany.table.operationsCount')}</th>
                                                    <th><i className="bi bi-stack me-1" />{t('historiaWymiany.table.totalAmount')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>PLN → EUR</td>
                                                    <td>24</td>
                                                    <td>120 450,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>USD → PLN</td>
                                                    <td>15</td>
                                                    <td>59 250,00 USD</td>
                                                </tr>
                                                <tr>
                                                    <td>EUR → USD</td>
                                                    <td>8</td>
                                                    <td>32 150,00 EUR</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};