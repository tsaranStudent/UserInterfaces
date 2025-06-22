import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card, Tabs, Tab
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const DokumentyKompensat = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-arrow-left-right icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-text me-1" aria-hidden="true" />
                        {t('dokumentyKompensat.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('dokumentyKompensat.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                    <Tab
                        eventKey="lista"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('dokumentyKompensat.tabs.list')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('dokumentyKompensat.actions.newCompensation')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-upload me-1" />
                                    {t('dokumentyKompensat.actions.import')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control
                                    type="text"
                                    placeholder={t('dokumentyKompensat.search.placeholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-hash me-1" />{t('dokumentyKompensat.table.documentNumber')}</th>
                                            <th><i className="bi bi-calendar me-1" />{t('dokumentyKompensat.table.date')}</th>
                                            <th><i className="bi bi-building me-1" />{t('dokumentyKompensat.table.contractor')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('dokumentyKompensat.table.amount')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('dokumentyKompensat.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('dokumentyKompensat.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>KMP/2025/012</td>
                                            <td>15.05.2025</td>
                                            <td>{t('dokumentyKompensat.example.contractor1')}</td>
                                            <td>12 450,00 PLN</td>
                                            <td>
                                                <Badge bg="success" className="text-uppercase">
                                                    {t('dokumentyKompensat.status.booked')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('dokumentyKompensat.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>KMP/2025/018</td>
                                            <td>22.05.2025</td>
                                            <td>{t('dokumentyKompensat.example.contractor2')}</td>
                                            <td>8 900,00 PLN</td>
                                            <td>
                                                <Badge bg="warning" className="text-uppercase">
                                                    {t('dokumentyKompensat.status.inProgress')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-pencil me-1" />
                                                    {t('dokumentyKompensat.actions.edit')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="nowy"
                        title={
                            <>
                                <i className="bi bi-file-earmark-plus me-1" />
                                {t('dokumentyKompensat.tabs.new')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-text me-2" />
                                    {t('dokumentyKompensat.newDocument.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-file-earmark-text me-1" />
                                                    {t('dokumentyKompensat.newDocument.documentType')}*
                                                </Form.Label>
                                                <Form.Select required>
                                                    <option>{t('dokumentyKompensat.types.internal')}</option>
                                                    <option>{t('dokumentyKompensat.types.contractor')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar me-1" />
                                                    {t('dokumentyKompensat.newDocument.documentDate')}*
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-05-01" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            <i className="bi bi-building me-1" />
                                            {t('dokumentyKompensat.newDocument.contractor')}*
                                        </Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>

                                    <Accordion defaultActiveKey="0" className="mb-3">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <i className="bi bi-list-check me-2" />
                                                {t('dokumentyKompensat.newDocument.compensationItems')}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Table bordered responsive>
                                                    <thead>
                                                        <tr>
                                                            <th><i className="bi bi-file-earmark-text me-1" />{t('dokumentyKompensat.table.type')}</th>
                                                            <th><i className="bi bi-hash me-1" />{t('dokumentyKompensat.table.documentNumber')}</th>
                                                            <th><i className="bi bi-cash-stack me-1" />{t('dokumentyKompensat.table.amount')}</th>
                                                            <th><i className="bi bi-wallet2 me-1" />{t('dokumentyKompensat.table.balance')}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{t('dokumentyKompensat.types.invoice')}</td>
                                                            <td>FV/2025/123</td>
                                                            <td>5 000,00 PLN</td>
                                                            <td>5 000,00 PLN</td>
                                                        </tr>
                                                        <tr>
                                                            <td>{t('dokumentyKompensat.types.payment')}</td>
                                                            <td>PL/2025/456</td>
                                                            <td>-3 000,00 PLN</td>
                                                            <td>2 000,00 PLN</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                                <Button variant="outline-primary" className="mt-3">
                                                    <i className="bi bi-plus-circle me-1" />
                                                    {t('dokumentyKompensat.actions.addItem')}
                                                </Button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-circle me-1" />
                                            {t('dokumentyKompensat.actions.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" />
                                            {t('dokumentyKompensat.actions.saveDocument')}
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
                                {t('dokumentyKompensat.tabs.reports')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-bar-graph me-2" />
                                    {t('dokumentyKompensat.reports.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar-date me-1" />
                                                    {t('dokumentyKompensat.reports.periodFrom')}
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-01-01" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar2-date me-1" />
                                                    {t('dokumentyKompensat.reports.periodTo')}
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-05-31" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Table striped bordered responsive className="mb-4">
                                        <thead>
                                            <tr>
                                                <th><i className="bi bi-calendar-month me-1" />{t('dokumentyKompensat.table.month')}</th>
                                                <th><i className="bi bi-123 me-1" />{t('dokumentyKompensat.table.count')}</th>
                                                <th><i className="bi bi-cash-stack me-1" />{t('dokumentyKompensat.table.value')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t('dokumentyKompensat.months.may')} 2025</td>
                                                <td>12</td>
                                                <td>45 200,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>{t('dokumentyKompensat.months.april')} 2025</td>
                                                <td>8</td>
                                                <td>32 150,00 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <Button variant="outline-primary">
                                        <i className="bi bi-file-earmark-arrow-down me-1" />
                                        {t('dokumentyKompensat.actions.generateReport')}
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