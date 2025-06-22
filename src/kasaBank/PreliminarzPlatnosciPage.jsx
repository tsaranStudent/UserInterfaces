import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    InputGroup, Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const PreliminarzPlatnosci = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-calendar-check me-1" aria-hidden="true" />
                        {t('preliminarzPlatnosci.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('preliminarzPlatnosci.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="lista" className="module-tabs mb-4">
                    <Tab eventKey="lista" title={t('preliminarzPlatnosci.tabs.list')}>
                        {/* Pasek akcji */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('preliminarzPlatnosci.list.add')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-arrow-down me-1" />
                                    {t('preliminarzPlatnosci.list.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '300px' }}>
                                    <Form.Control type="date" defaultValue="2025-05-01" />
                                    <InputGroup.Text>–</InputGroup.Text>
                                    <Form.Control type="date" defaultValue="2025-05-31" />
                                </InputGroup>
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('preliminarzPlatnosci.table.due')}</th>
                                            <th>{t('preliminarzPlatnosci.table.doc')}</th>
                                            <th>{t('preliminarzPlatnosci.table.partner')}</th>
                                            <th>{t('preliminarzPlatnosci.table.amount')}</th>
                                            <th>{t('preliminarzPlatnosci.table.currency')}</th>
                                            <th>{t('preliminarzPlatnosci.table.status')}</th>
                                            <th>{t('preliminarzPlatnosci.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>20.05.2025</td>
                                            <td>FV/2025/123</td>
                                            <td>ABC Sp. z o.o.</td>
                                            <td>12 450,00</td>
                                            <td>PLN</td>
                                            <td><Badge bg="warning">{t('preliminarzPlatnosci.status.pending')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    {t('preliminarzPlatnosci.actions.pay')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>25.05.2025</td>
                                            <td>FV/2025/456</td>
                                            <td>XYZ S.A.</td>
                                            <td>8 900,00</td>
                                            <td>EUR</td>
                                            <td><Badge bg="success">{t('preliminarzPlatnosci.status.posted')}</Badge></td>
                                            <td>
                                                <Button variant="outline-info" size="sm">
                                                    {t('preliminarzPlatnosci.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="nowa" title={t('preliminarzPlatnosci.tabs.new')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">{t('preliminarzPlatnosci.new.heading')}</h5>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.docType')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('preliminarzPlatnosci.new.options.invoice')}</option>
                                                <option>{t('preliminarzPlatnosci.new.options.bill')}</option>
                                                <option>{t('preliminarzPlatnosci.new.options.other')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.due')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.docNo')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('preliminarzPlatnosci.new.form.docNoPlaceholder')} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.partner')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('preliminarzPlatnosci.new.form.partnerPlaceholder')} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-4">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.amount')}</Form.Label>
                                            <Form.Control type="number" step="0.01" placeholder="0,00" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.currency')}</Form.Label>
                                            <Form.Select>
                                                <option>PLN</option>
                                                <option>EUR</option>
                                                <option>USD</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('preliminarzPlatnosci.new.form.method')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('preliminarzPlatnosci.new.options.transfer')}</option>
                                                <option>{t('preliminarzPlatnosci.new.options.cash')}</option>
                                                <option>{t('preliminarzPlatnosci.new.options.card')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        {t('preliminarzPlatnosci.actions.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        {t('preliminarzPlatnosci.actions.save')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="podsumowanie" title={t('preliminarzPlatnosci.tabs.summary')}>
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('preliminarzPlatnosci.summary.byStatus')}</h5>
                                        <Table bordered className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('preliminarzPlatnosci.summary.table.status')}</th>
                                                    <th>{t('preliminarzPlatnosci.summary.table.count')}</th>
                                                    <th>{t('preliminarzPlatnosci.summary.table.amount')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('preliminarzPlatnosci.status.pending')}</td>
                                                    <td>15</td>
                                                    <td>85 200,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('preliminarzPlatnosci.status.posted')}</td>
                                                    <td>24</td>
                                                    <td>142 750,00 PLN</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('preliminarzPlatnosci.summary.byCurrency')}</h5>
                                        <Table bordered className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('preliminarzPlatnosci.summary.table.currency')}</th>
                                                    <th>{t('preliminarzPlatnosci.summary.table.count')}</th>
                                                    <th>{t('preliminarzPlatnosci.summary.table.amount')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>PLN</td>
                                                    <td>32</td>
                                                    <td>195 450,00</td>
                                                </tr>
                                                <tr>
                                                    <td>EUR</td>
                                                    <td>7</td>
                                                    <td>32 500,00</td>
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
