import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    InputGroup, Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RejestryKasowoBankowe = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-cash-stack me-1" aria-hidden="true" />
                        {t('rejestryKasowoBankowe.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('rejestryKasowoBankowe.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="kasa" className="module-tabs mb-4">
                    <Tab eventKey="kasa" title={t('rejestryKasowoBankowe.tabs.kasa')}>
                        {/* Kasa */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('rejestryKasowoBankowe.kasa.newDocument')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-arrow-down me-1" />
                                    {t('rejestryKasowoBankowe.kasa.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '300px' }}>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-01"
                                    />
                                    <InputGroup.Text>–</InputGroup.Text>
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
                                            <th><i className="bi bi-calendar-date me-1" />{t('rejestryKasowoBankowe.kasa.table.date')}</th>
                                            <th><i className="bi bi-file-earmark-text me-1" />{t('rejestryKasowoBankowe.kasa.table.number')}</th>
                                            <th><i className="bi bi-tag me-1" />{t('rejestryKasowoBankowe.kasa.table.type')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('rejestryKasowoBankowe.kasa.table.amount')}</th>
                                            <th><i className="bi bi-chat-left-text me-1" />{t('rejestryKasowoBankowe.kasa.table.description')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('rejestryKasowoBankowe.kasa.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025</td>
                                            <td>KP/2025/123</td>
                                            <td>{t('rejestryKasowoBankowe.kasa.types.payout')}</td>
                                            <td>5 000,00 PLN</td>
                                            <td>{t('rejestryKasowoBankowe.kasa.desc.salary')}</td>
                                            <td><Badge bg="success">{t('rejestryKasowoBankowe.status.recorded')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>18.05.2025</td>
                                            <td>KW/2025/456</td>
                                            <td>{t('rejestryKasowoBankowe.kasa.types.receipt')}</td>
                                            <td>12 450,00 PLN</td>
                                            <td>{t('rejestryKasowoBankowe.kasa.desc.client')}</td>
                                            <td><Badge bg="warning">{t('rejestryKasowoBankowe.status.pending')}</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="bank" title={t('rejestryKasowoBankowe.tabs.bank')}>
                        {/* Bank */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('rejestryKasowoBankowe.bank.newTransaction')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-download me-1" />
                                    {t('rejestryKasowoBankowe.bank.download')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select style={{ width: '200px' }}>
                                    <option>{t('rejestryKasowoBankowe.bank.filter.allAccounts')}</option>
                                    <option value="main">{t('rejestryKasowoBankowe.bank.filter.main')}</option>
                                    <option value="currency">{t('rejestryKasowoBankowe.bank.filter.currency')}</option>
                                </Form.Select>
                            </div>
                        </div>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar-date me-1" />{t('rejestryKasowoBankowe.bank.table.date')}</th>
                                            <th><i className="bi bi-hash me-1" />{t('rejestryKasowoBankowe.bank.table.transactionNo')}</th>
                                            <th><i className="bi bi-tag me-1" />{t('rejestryKasowoBankowe.bank.table.type')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('rejestryKasowoBankowe.bank.table.amount')}</th>
                                            <th><i className="bi bi-people me-1" />{t('rejestryKasowoBankowe.bank.table.counterparty')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('rejestryKasowoBankowe.bank.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12.05.2025</td>
                                            <td>TR/2025/789</td>
                                            <td>{t('rejestryKasowoBankowe.bank.types.outgoing')}</td>
                                            <td>8 900,00 PLN</td>
                                            <td>{t('rejestryKasowoBankowe.bank.counterparty.supplier')}</td>
                                            <td><Badge bg="success">{t('rejestryKasowoBankowe.status.recorded')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>20.05.2025</td>
                                            <td>TR/2025/790</td>
                                            <td>{t('rejestryKasowoBankowe.bank.types.incoming')}</td>
                                            <td>15 000,00 EUR</td>
                                            <td>{t('rejestryKasowoBankowe.bank.counterparty.client')}</td>
                                            <td><Badge bg="warning">{t('rejestryKasowoBankowe.status.pending')}</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="podsumowanie" title={t('rejestryKasowoBankowe.tabs.summary')}>
                        {/* Podsumowanie */}
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('rejestryKasowoBankowe.summary.balanceDate')}</h5>
                                        <Table bordered className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('rejestryKasowoBankowe.summary.table.account')}</th>
                                                    <th>{t('rejestryKasowoBankowe.summary.table.balance')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('rejestryKasowoBankowe.summary.accounts.cash')}</td>
                                                    <td>25 450,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('rejestryKasowoBankowe.summary.accounts.current')}</td>
                                                    <td>185 200,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('rejestryKasowoBankowe.summary.accounts.currency')}</td>
                                                    <td>32 150,00 EUR</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('rejestryKasowoBankowe.summary.monthly')}</h5>
                                        <Table bordered className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('rejestryKasowoBankowe.summary.table.account')}</th>
                                                    <th>{t('rejestryKasowoBankowe.summary.table.inflow')}</th>
                                                    <th>{t('rejestryKasowoBankowe.summary.table.outflow')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('rejestryKasowoBankowe.summary.accounts.cash')}</td>
                                                    <td>45 200,00 PLN</td>
                                                    <td>32 150,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('rejestryKasowoBankowe.summary.accounts.current')}</td>
                                                    <td>250 000,00 PLN</td>
                                                    <td>185 000,00 PLN</td>
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
