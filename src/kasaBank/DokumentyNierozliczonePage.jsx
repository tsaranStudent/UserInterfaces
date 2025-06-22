import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card, Tabs, Tab
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const DokumentyNierozliczone = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-files icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-text me-1" aria-hidden="true" />
                        {t('dokumentyNierozliczone.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('dokumentyNierozliczone.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                    <Tab
                        eventKey="lista"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('dokumentyNierozliczone.tabs.list')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-check-circle me-1" />
                                    {t('dokumentyNierozliczone.actions.settleSelected')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-download me-1" />
                                    {t('dokumentyNierozliczone.actions.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control
                                    type="text"
                                    placeholder={t('dokumentyNierozliczone.search.placeholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-hash me-1" />{t('dokumentyNierozliczone.table.documentNumber')}</th>
                                            <th><i className="bi bi-filetype-doc me-1" />{t('dokumentyNierozliczone.table.type')}</th>
                                            <th><i className="bi bi-building me-1" />{t('dokumentyNierozliczone.table.contractor')}</th>
                                            <th><i className="bi bi-calendar me-1" />{t('dokumentyNierozliczone.table.date')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('dokumentyNierozliczone.table.amount')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('dokumentyNierozliczone.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('dokumentyNierozliczone.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>FV/2025/123</td>
                                            <td>{t('dokumentyNierozliczone.types.invoice')}</td>
                                            <td>{t('dokumentyNierozliczone.example.contractor1')}</td>
                                            <td>15.05.2025</td>
                                            <td>12 450,00 PLN</td>
                                            <td>
                                                <Badge bg="warning" className="text-uppercase">
                                                    {t('dokumentyNierozliczone.status.pending')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-check-circle me-1" />
                                                    {t('dokumentyNierozliczone.actions.settle')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>PL/2025/456</td>
                                            <td>{t('dokumentyNierozliczone.types.payment')}</td>
                                            <td>{t('dokumentyNierozliczone.example.contractor2')}</td>
                                            <td>22.05.2025</td>
                                            <td>8 900,00 PLN</td>
                                            <td>
                                                <Badge bg="danger" className="text-uppercase">
                                                    {t('dokumentyNierozliczone.status.overdue')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-check-circle me-1" />
                                                    {t('dokumentyNierozliczone.actions.settle')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="rozliczenia"
                        title={
                            <>
                                <i className="bi bi-arrow-left-right me-1" />
                                {t('dokumentyNierozliczone.tabs.settlements')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-check me-2" />
                                    {t('dokumentyNierozliczone.settlement.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-file-earmark-text me-1" />
                                                    {t('dokumentyNierozliczone.settlement.selectDocument')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>FV/2025/123 - {t('dokumentyNierozliczone.example.contractor1')}</option>
                                                    <option>PL/2025/456 - {t('dokumentyNierozliczone.example.contractor2')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar me-1" />
                                                    {t('dokumentyNierozliczone.settlement.date')}
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-05-30" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Accordion defaultActiveKey="0" className="mb-4">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <i className="bi bi-link me-2" />
                                                {t('dokumentyNierozliczone.settlement.documentsToLink')}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Table bordered responsive>
                                                    <thead>
                                                        <tr>
                                                            <th><i className="bi bi-hash me-1" />{t('dokumentyNierozliczone.table.number')}</th>
                                                            <th><i className="bi bi-filetype-doc me-1" />{t('dokumentyNierozliczone.table.type')}</th>
                                                            <th><i className="bi bi-cash-stack me-1" />{t('dokumentyNierozliczone.table.amount')}</th>
                                                            <th><i className="bi bi-wallet2 me-1" />{t('dokumentyNierozliczone.table.balance')}</th>
                                                            <th><i className="bi bi-link-45deg me-1" />{t('dokumentyNierozliczone.table.link')}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>PL/2025/123</td>
                                                            <td>{t('dokumentyNierozliczone.types.payment')}</td>
                                                            <td>12 450,00 PLN</td>
                                                            <td>12 450,00 PLN</td>
                                                            <td>
                                                                <Form.Check type="checkbox" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FV/2025/456</td>
                                                            <td>{t('dokumentyNierozliczone.types.invoice')}</td>
                                                            <td>8 900,00 PLN</td>
                                                            <td>8 900,00 PLN</td>
                                                            <td>
                                                                <Form.Check type="checkbox" />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-circle me-1" />
                                            {t('dokumentyNierozliczone.actions.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-check-circle me-1" />
                                            {t('dokumentyNierozliczone.actions.confirmSettlement')}
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
                                <i className="bi bi-graph-up me-1" />
                                {t('dokumentyNierozliczone.tabs.reports')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-bar-graph me-2" />
                                    {t('dokumentyNierozliczone.reports.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar-date me-1" />
                                                    {t('dokumentyNierozliczone.reports.periodFrom')}
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-01-01" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar2-date me-1" />
                                                    {t('dokumentyNierozliczone.reports.periodTo')}
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-05-31" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Table striped bordered responsive className="mb-4">
                                        <thead>
                                            <tr>
                                                <th><i className="bi bi-filetype-doc me-1" />{t('dokumentyNierozliczone.table.documentType')}</th>
                                                <th><i className="bi bi-123 me-1" />{t('dokumentyNierozliczone.table.count')}</th>
                                                <th><i className="bi bi-cash-stack me-1" />{t('dokumentyNierozliczone.table.value')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t('dokumentyNierozliczone.types.invoices')}</td>
                                                <td>15</td>
                                                <td>65 200,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>{t('dokumentyNierozliczone.types.payments')}</td>
                                                <td>12</td>
                                                <td>42 150,00 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <Button variant="primary">
                                        <i className="bi bi-file-earmark-arrow-down me-1" />
                                        {t('dokumentyNierozliczone.actions.generateReport')}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};