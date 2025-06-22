import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card, Tabs, Tab
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const DokumentyRozliczone = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-file-earmark-check-fill icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-check-circle me-1" aria-hidden="true" />
                        {t('dokumentyRozliczone.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('dokumentyRozliczone.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="przeglad" className="mb-4 module-tabs">
                    <Tab
                        eventKey="przeglad"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('dokumentyRozliczone.tabs.overview')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="outline-primary">
                                    <i className="bi bi-funnel me-1" />
                                    {t('dokumentyRozliczone.actions.filter')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-excel me-1" />
                                    {t('dokumentyRozliczone.actions.exportExcel')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control
                                    type="text"
                                    placeholder={t('dokumentyRozliczone.search.placeholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>

                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-hash me-1" />{t('dokumentyRozliczone.table.settlementNumber')}</th>
                                            <th><i className="bi bi-calendar me-1" />{t('dokumentyRozliczone.table.date')}</th>
                                            <th><i className="bi bi-file-earmark-text me-1" />{t('dokumentyRozliczone.table.type')}</th>
                                            <th><i className="bi bi-123 me-1" />{t('dokumentyRozliczone.table.documentsCount')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('dokumentyRozliczone.table.amount')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('dokumentyRozliczone.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('dokumentyRozliczone.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RL/2025/001</td>
                                            <td>10.05.2025</td>
                                            <td>{t('dokumentyRozliczone.types.invoicePayment')}</td>
                                            <td>2</td>
                                            <td>24 500,00 PLN</td>
                                            <td>
                                                <Badge bg="success" className="text-uppercase">
                                                    {t('dokumentyRozliczone.status.booked')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-info" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('dokumentyRozliczone.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>RL/2025/002</td>
                                            <td>15.05.2025</td>
                                            <td>{t('dokumentyRozliczone.types.multipleDocuments')}</td>
                                            <td>5</td>
                                            <td>18 750,00 PLN</td>
                                            <td>
                                                <Badge bg="warning" className="text-uppercase">
                                                    {t('dokumentyRozliczone.status.verification')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-info" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('dokumentyRozliczone.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="szczegoly"
                        title={
                            <>
                                <i className="bi bi-file-earmark-text me-1" />
                                {t('dokumentyRozliczone.tabs.details')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-ruled me-2" />
                                    {t('dokumentyRozliczone.details.title')} RL/2025/001
                                </h5>

                                <Row className="mb-4">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('dokumentyRozliczone.details.settlementDate')}
                                            </Form.Label>
                                            <Form.Control type="text" readOnly value="10.05.2025" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-cash-stack me-1" />
                                                {t('dokumentyRozliczone.details.settlementAmount')}
                                            </Form.Label>
                                            <Form.Control type="text" readOnly value="24 500,00 PLN" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-check-circle me-1" />
                                                {t('dokumentyRozliczone.details.status')}
                                            </Form.Label>
                                            <Form.Control type="text" readOnly value={t('dokumentyRozliczone.status.booked')} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <i className="bi bi-link me-2" />
                                            {t('dokumentyRozliczone.details.linkedDocuments')}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Table bordered responsive>
                                                <thead>
                                                    <tr>
                                                        <th><i className="bi bi-hash me-1" />{t('dokumentyRozliczone.table.documentNumber')}</th>
                                                        <th><i className="bi bi-file-earmark-text me-1" />{t('dokumentyRozliczone.table.type')}</th>
                                                        <th><i className="bi bi-building me-1" />{t('dokumentyRozliczone.table.contractor')}</th>
                                                        <th><i className="bi bi-currency-dollar me-1" />{t('dokumentyRozliczone.table.amount')}</th>
                                                        <th><i className="bi bi-calendar me-1" />{t('dokumentyRozliczone.table.date')}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>FV/2025/123</td>
                                                        <td>{t('dokumentyRozliczone.types.invoice')}</td>
                                                        <td>{t('dokumentyRozliczone.example.contractor1')}</td>
                                                        <td>12 450,00 PLN</td>
                                                        <td>05.05.2025</td>
                                                    </tr>
                                                    <tr>
                                                        <td>PL/2025/456</td>
                                                        <td>{t('dokumentyRozliczone.types.payment')}</td>
                                                        <td>{t('dokumentyRozliczone.example.contractor1')}</td>
                                                        <td>12 450,00 PLN</td>
                                                        <td>10.05.2025</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-printer me-1" />
                                        {t('dokumentyRozliczone.actions.printConfirmation')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="statystyki"
                        title={
                            <>
                                <i className="bi bi-graph-up me-1" />
                                {t('dokumentyRozliczone.tabs.statistics')}
                            </>
                        }
                    >
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">
                                            <i className="bi bi-calendar-range me-2" />
                                            {t('dokumentyRozliczone.statistics.year2025')}
                                        </h5>
                                        <Form>
                                            <Row className="mb-3">
                                                <Col>
                                                    <Form.Select>
                                                        <option>{t('dokumentyRozliczone.months.january')} 2025</option>
                                                        <option selected>{t('dokumentyRozliczone.months.may')} 2025</option>
                                                        <option>{t('dokumentyRozliczone.statistics.wholeYear')}</option>
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                        </Form>
                                        <Table bordered responsive>
                                            <tbody>
                                                <tr>
                                                    <td><i className="bi bi-123 me-1" />{t('dokumentyRozliczone.statistics.settlementsCount')}</td>
                                                    <td className="fw-bold">24</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="bi bi-cash-stack me-1" />{t('dokumentyRozliczone.statistics.totalAmount')}</td>
                                                    <td className="fw-bold">156 820,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="bi bi-calculator me-1" />{t('dokumentyRozliczone.statistics.averageValue')}</td>
                                                    <td className="fw-bold">6 534,17 PLN</td>
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
                                            {t('dokumentyRozliczone.statistics.settlementTypes')}
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-file-earmark-text me-1" />{t('dokumentyRozliczone.table.type')}</th>
                                                    <th><i className="bi bi-123 me-1" />{t('dokumentyRozliczone.table.count')}</th>
                                                    <th><i className="bi bi-percent me-1" />{t('dokumentyRozliczone.table.percentage')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('dokumentyRozliczone.types.invoicePayment')}</td>
                                                    <td>15</td>
                                                    <td>62.5%</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('dokumentyRozliczone.types.multipleDocuments')}</td>
                                                    <td>7</td>
                                                    <td>29.2%</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('dokumentyRozliczone.types.other')}</td>
                                                    <td>2</td>
                                                    <td>8.3%</td>
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