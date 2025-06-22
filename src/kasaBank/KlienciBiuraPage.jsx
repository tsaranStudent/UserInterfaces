import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge, InputGroup, Accordion
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const KlienciBiura = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-people-fill icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-building me-1" aria-hidden="true" />
                        {t('klienciBiura.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('klienciBiura.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                    <Tab
                        eventKey="lista"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('klienciBiura.tabs.list')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-person-plus me-1" />
                                    {t('klienciBiura.actions.addClient')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-download me-1" />
                                    {t('klienciBiura.actions.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '300px' }}>
                                    <Form.Control
                                        placeholder={t('klienciBiura.search.placeholder')}
                                    />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search me-1" />
                                        {t('klienciBiura.search.button')}
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-person-badge me-1" />{t('klienciBiura.table.clientId')}</th>
                                            <th><i className="bi bi-person-circle me-1" />{t('klienciBiura.table.name')}</th>
                                            <th><i className="bi bi-tags me-1" />{t('klienciBiura.table.type')}</th>
                                            <th><i className="bi bi-calendar-event me-1" />{t('klienciBiura.table.lastTransaction')}</th>
                                            <th><i className="bi bi-123 me-1" />{t('klienciBiura.table.transactionsCount')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('klienciBiura.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('klienciBiura.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>KW/2025/001</td>
                                            <td>{t('klienciBiura.exampleClients.individual')}</td>
                                            <td>{t('klienciBiura.clientTypes.individual')}</td>
                                            <td>15.05.2025</td>
                                            <td>12</td>
                                            <td><Badge bg="success">{t('klienciBiura.statuses.active')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-clock-history me-1" />
                                                    {t('klienciBiura.actions.history')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>KW/2025/002</td>
                                            <td>{t('klienciBiura.exampleClients.company')}</td>
                                            <td>{t('klienciBiura.clientTypes.company')}</td>
                                            <td>10.05.2025</td>
                                            <td>5</td>
                                            <td><Badge bg="warning">{t('klienciBiura.statuses.verification')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-clock-history me-1" />
                                                    {t('klienciBiura.actions.history')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="dodaj"
                        title={
                            <>
                                <i className="bi bi-person-plus me-1" />
                                {t('klienciBiura.tabs.add')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-person-plus me-2" />
                                    {t('klienciBiura.newClient.title')}
                                </h5>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-tags me-1" />
                                                {t('klienciBiura.newClient.clientType')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('klienciBiura.clientTypes.individual')}</option>
                                                <option>{t('klienciBiura.clientTypes.company')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('klienciBiura.newClient.registrationDate')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-person me-1" />
                                                {t('klienciBiura.newClient.name')}
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={t('klienciBiura.newClient.namePlaceholder')} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-file-text me-1" />
                                                {t('klienciBiura.newClient.documentNumber')}
                                            </Form.Label>
                                            <Form.Control type="text" placeholder={t('klienciBiura.newClient.documentPlaceholder')} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Accordion className="mb-4">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <i className="bi bi-telephone me-2" />
                                            {t('klienciBiura.newClient.contactData')}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            <i className="bi bi-envelope me-1" />
                                                            {t('klienciBiura.newClient.email')}
                                                        </Form.Label>
                                                        <Form.Control type="email" placeholder="email@domena.pl" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>
                                                            <i className="bi bi-phone me-1" />
                                                            {t('klienciBiura.newClient.phone')}
                                                        </Form.Label>
                                                        <Form.Control type="tel" placeholder="+48 123 456 789" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        <i className="bi bi-x-circle me-1" />
                                        {t('klienciBiura.actions.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-check-circle me-1" />
                                        {t('klienciBiura.actions.register')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="statystyki"
                        title={
                            <>
                                <i className="bi bi-bar-chart me-1" />
                                {t('klienciBiura.tabs.stats')}
                            </>
                        }
                    >
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">
                                            <i className="bi bi-activity me-2" />
                                            {t('klienciBiura.stats.activity')} - 2025
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-calendar-month me-1" />{t('klienciBiura.table.month')}</th>
                                                    <th><i className="bi bi-person-plus me-1" />{t('klienciBiura.table.newClients')}</th>
                                                    <th><i className="bi bi-currency-exchange me-1" />{t('klienciBiura.table.transactions')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('klienciBiura.months.may')} 2025</td>
                                                    <td>24</td>
                                                    <td>156</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('klienciBiura.months.april')} 2025</td>
                                                    <td>18</td>
                                                    <td>132</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('klienciBiura.months.march')} 2025</td>
                                                    <td>15</td>
                                                    <td>98</td>
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
                                            {t('klienciBiura.stats.distribution')}
                                        </h5>
                                        <Table bordered responsive>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-tag me-1" />{t('klienciBiura.table.clientType')}</th>
                                                    <th><i className="bi bi-123 me-1" />{t('klienciBiura.table.count')}</th>
                                                    <th><i className="bi bi-percent me-1" />{t('klienciBiura.table.share')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('klienciBiura.clientTypes.individual')}</td>
                                                    <td>85</td>
                                                    <td>68%</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('klienciBiura.clientTypes.company')}</td>
                                                    <td>40</td>
                                                    <td>32%</td>
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