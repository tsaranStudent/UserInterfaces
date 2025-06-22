import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge,
    InputGroup, Alert
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RozniceKursowe = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-currency-exchange icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-graph-up-arrow me-1" aria-hidden="true" />
                        {t('rozniceKursowe.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('rozniceKursowe.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="ewidencja" className="mb-4 module-tabs">
                    <Tab
                        eventKey="ewidencja"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('rozniceKursowe.tabs.registry')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('rozniceKursowe.actions.addDifference')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-download me-1" />
                                    {t('rozniceKursowe.actions.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '300px' }}>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-01"
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
                                            <th><i className="bi bi-calendar me-1" />{t('rozniceKursowe.table.date')}</th>
                                            <th><i className="bi bi-cash-coin me-1" />{t('rozniceKursowe.table.currency')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('rozniceKursowe.table.amount')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('rozniceKursowe.table.nbpRate')}</th>
                                            <th><i className="bi bi-calculator me-1" />{t('rozniceKursowe.table.difference')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('rozniceKursowe.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('rozniceKursowe.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025</td>
                                            <td>EUR</td>
                                            <td>10 000,00</td>
                                            <td>4.6521</td>
                                            <td className="text-success">+1 250,00 PLN</td>
                                            <td>
                                                <Badge bg="success" className="text-uppercase">
                                                    {t('rozniceKursowe.status.booked')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-info" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('rozniceKursowe.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>18.05.2025</td>
                                            <td>USD</td>
                                            <td>5 000,00</td>
                                            <td>3.9518</td>
                                            <td className="text-danger">-450,00 PLN</td>
                                            <td>
                                                <Badge bg="warning" className="text-uppercase">
                                                    {t('rozniceKursowe.status.toSettle')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-check-circle me-1" />
                                                    {t('rozniceKursowe.actions.settle')}
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
                                {t('rozniceKursowe.tabs.new')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-currency-exchange me-2" />
                                    {t('rozniceKursowe.newDifference.title')}
                                </h5>

                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('rozniceKursowe.newDifference.operationDate')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-cash-coin me-1" />
                                                {t('rozniceKursowe.newDifference.currency')}
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
                                                <i className="bi bi-currency-dollar me-1" />
                                                {t('rozniceKursowe.newDifference.amount')}
                                            </Form.Label>
                                            <Form.Control type="number" step="0.01" placeholder="0,00" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-bank me-1" />
                                                {t('rozniceKursowe.newDifference.nbpRate')}
                                            </Form.Label>
                                            <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-arrow-left-right me-1" />
                                                {t('rozniceKursowe.newDifference.transactionRate')}
                                            </Form.Label>
                                            <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Alert variant="info" className="mb-4">
                                    <i className="bi bi-info-circle me-2" />
                                    {t('rozniceKursowe.newDifference.differenceLabel')}: <strong>0,00 PLN</strong>
                                </Alert>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-x-circle me-1" />
                                        {t('rozniceKursowe.actions.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1" />
                                        {t('rozniceKursowe.actions.saveDifference')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="raporty"
                        title={
                            <>
                                <i className="bi bi-graph-up me-1" />
                                {t('rozniceKursowe.tabs.reports')}
                            </>
                        }
                    >
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">
                                            <i className="bi bi-calendar-range me-2" />
                                            {t('rozniceKursowe.reports.monthlySettlements')} - {t('rozniceKursowe.months.may')} 2025
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-cash-coin me-1" />{t('rozniceKursowe.table.currency')}</th>
                                                    <th><i className="bi bi-123 me-1" />{t('rozniceKursowe.table.operationsCount')}</th>
                                                    <th><i className="bi bi-calculator me-1" />{t('rozniceKursowe.table.differencesSum')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>EUR</td>
                                                    <td>12</td>
                                                    <td className="text-success">+8 250,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>8</td>
                                                    <td className="text-danger">-1 950,00 PLN</td>
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
                                            <i className="bi bi-bank me-2" />
                                            {t('rozniceKursowe.reports.nbpRates')}
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-cash-coin me-1" />{t('rozniceKursowe.table.currency')}</th>
                                                    <th><i className="bi bi-percent me-1" />{t('rozniceKursowe.table.averageRate')}</th>
                                                    <th><i className="bi bi-arrow-left-right me-1" />{t('rozniceKursowe.table.change')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>EUR</td>
                                                    <td>4.6521</td>
                                                    <td className="text-success">+0.12%</td>
                                                </tr>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>3.9518</td>
                                                    <td className="text-danger">-0.45%</td>
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