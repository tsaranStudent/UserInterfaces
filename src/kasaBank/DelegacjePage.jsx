import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card, Tabs, Tab
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Delegacje = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-briefcase icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-person-walking me-1" aria-hidden="true" />
                        {t('delegacje.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('delegacje.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                    <Tab
                        eventKey="lista"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" />
                                {t('delegacje.tabs.list')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('delegacje.actions.newDelegation')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-upload me-1" />
                                    {t('delegacje.actions.import')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control
                                    type="text"
                                    placeholder={t('delegacje.search.placeholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-hash me-1" />{t('delegacje.table.number')}</th>
                                            <th><i className="bi bi-person me-1" />{t('delegacje.table.employee')}</th>
                                            <th><i className="bi bi-geo-alt me-1" />{t('delegacje.table.purpose')}</th>
                                            <th><i className="bi bi-calendar-range me-1" />{t('delegacje.table.period')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('delegacje.table.amount')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('delegacje.table.status')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('delegacje.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>DEL/2025/012</td>
                                            <td>{t('delegacje.example.employee1')}</td>
                                            <td>{t('delegacje.example.purpose1')}</td>
                                            <td>15-17.05.2025</td>
                                            <td>1 245,00 PLN</td>
                                            <td>
                                                <Badge bg="success" className="text-uppercase">
                                                    {t('delegacje.status.settled')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('delegacje.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>DEL/2025/018</td>
                                            <td>{t('delegacje.example.employee2')}</td>
                                            <td>{t('delegacje.example.purpose2')}</td>
                                            <td>22-24.05.2025</td>
                                            <td>890,00 PLN</td>
                                            <td>
                                                <Badge bg="warning" className="text-uppercase">
                                                    {t('delegacje.status.toSettle')}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('delegacje.actions.details')}
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
                                {t('delegacje.tabs.new')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-plus me-2" />
                                    {t('delegacje.newDelegation.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-person me-1" />
                                                    {t('delegacje.newDelegation.employee')}*
                                                </Form.Label>
                                                <Form.Select required>
                                                    <option>{t('delegacje.newDelegation.selectEmployee')}</option>
                                                    <option>{t('delegacje.example.employee1')}</option>
                                                    <option>{t('delegacje.example.employee2')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar me-1" />
                                                    {t('delegacje.newDelegation.orderDate')}*
                                                </Form.Label>
                                                <Form.Control type="date" defaultValue="2025-05-01" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>
                                            <i className="bi bi-geo-alt me-1" />
                                            {t('delegacje.newDelegation.purpose')}*
                                        </Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar-plus me-1" />
                                                    {t('delegacje.newDelegation.startDate')}*
                                                </Form.Label>
                                                <Form.Control type="date" min="2025-05-01" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-calendar-minus me-1" />
                                                    {t('delegacje.newDelegation.endDate')}*
                                                </Form.Label>
                                                <Form.Control type="date" min="2025-05-01" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Accordion defaultActiveKey="0" className="mb-3">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <i className="bi bi-cash-stack me-2" />
                                                {t('delegacje.newDelegation.costs')}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Col md={4}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>
                                                                <i className="bi bi-currency-dollar me-1" />
                                                                {t('delegacje.newDelegation.diet')}
                                                            </Form.Label>
                                                            <Form.Control type="number" min="0" step="0.01" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>
                                                                <i className="bi bi-house me-1" />
                                                                {t('delegacje.newDelegation.accommodation')}
                                                            </Form.Label>
                                                            <Form.Control type="number" min="0" step="0.01" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>
                                                                <i className="bi bi-bus-front me-1" />
                                                                {t('delegacje.newDelegation.transport')}
                                                            </Form.Label>
                                                            <Form.Control type="number" min="0" step="0.01" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-circle me-1" />
                                            {t('delegacje.actions.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" />
                                            {t('delegacje.actions.saveDelegation')}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="rozliczenia"
                        title={
                            <>
                                <i className="bi bi-calculator me-1" />
                                {t('delegacje.tabs.settlements')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-file-earmark-check me-2" />
                                    {t('delegacje.settlements.title')}
                                </h5>

                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <i className="bi bi-search me-1" />
                                        {t('delegacje.settlements.selectDelegation')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option>DEL/2025/018 - {t('delegacje.example.employee2')} (22-24.05.2025)</option>
                                        <option>DEL/2025/019 - {t('delegacje.example.employee3')} (28-30.05.2025)</option>
                                    </Form.Select>
                                </Form.Group>

                                <Table bordered responsive className="mb-4">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-tag me-1" />{t('delegacje.table.category')}</th>
                                            <th><i className="bi bi-cash me-1" />{t('delegacje.table.advance')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('delegacje.table.settlement')}</th>
                                            <th><i className="bi bi-calculator me-1" />{t('delegacje.table.difference')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('delegacje.categories.diet')}</td>
                                            <td>450,00 PLN</td>
                                            <td>420,00 PLN</td>
                                            <td className="text-danger">-30,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>{t('delegacje.categories.accommodation')}</td>
                                            <td>800,00 PLN</td>
                                            <td>750,00 PLN</td>
                                            <td className="text-danger">-50,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box bg-light p-3 rounded mb-3">
                                    <div className="summary-text fw-bold">
                                        <i className="bi bi-wallet2 me-2" />
                                        {t('delegacje.settlements.finalBalance')}: <span className="text-danger">-80,00 PLN</span>
                                    </div>
                                </div>

                                <Button variant="primary">
                                    <i className="bi bi-check-circle me-1" />
                                    {t('delegacje.actions.approveSettlement')}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};