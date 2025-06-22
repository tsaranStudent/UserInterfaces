import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    InputGroup, Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const MagazynWalut = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-cash-stack me-1" aria-hidden="true" />
                        {t('magazynWalut.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('magazynWalut.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="stan" className="module-tabs mb-4">
                    <Tab eventKey="stan" title={t('magazynWalut.tabs.status')}>
                        {/* Pasek akcji */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('magazynWalut.status.add')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-arrow-down me-1" />
                                    {t('magazynWalut.status.export')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control
                                    type="text"
                                    placeholder={t('magazynWalut.status.filterPlaceholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('magazynWalut.table.currency')}</th>
                                            <th>{t('magazynWalut.table.amount')}</th>
                                            <th>{t('magazynWalut.table.value')}</th>
                                            <th>{t('magazynWalut.table.updated')}</th>
                                            <th>{t('magazynWalut.table.status')}</th>
                                            <th>{t('magazynWalut.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>EUR</td>
                                            <td>125 450,00</td>
                                            <td>583 456,50 PLN</td>
                                            <td>15.05.2025</td>
                                            <td>
                                                <Badge bg="success">{t('magazynWalut.status.available')}</Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    {t('magazynWalut.actions.history')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>USD</td>
                                            <td>89 250,00</td>
                                            <td>352 537,50 PLN</td>
                                            <td>18.05.2025</td>
                                            <td>
                                                <Badge bg="warning">{t('magazynWalut.status.low')}</Badge>
                                            </td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    {t('magazynWalut.actions.history')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="operacje" title={t('magazynWalut.tabs.operations')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">{t('magazynWalut.operations.heading')}</h5>
                                <Row className="g-3 mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('magazynWalut.operations.form.type')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('magazynWalut.operations.types.in')}</option>
                                                <option>{t('magazynWalut.operations.types.out')}</option>
                                                <option>{t('magazynWalut.operations.types.adjust')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('magazynWalut.operations.form.date')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('magazynWalut.operations.form.docNo')}</Form.Label>
                                            <Form.Control type="text" placeholder={t('magazynWalut.operations.form.docNoPlaceholder')} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-4">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('magazynWalut.operations.form.currency')}</Form.Label>
                                            <Form.Select>
                                                <option>EUR</option>
                                                <option>USD</option>
                                                <option>GBP</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('magazynWalut.operations.form.amount')}</Form.Label>
                                            <Form.Control type="number" step="0.01" placeholder="0,00" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('magazynWalut.operations.form.rate')}</Form.Label>
                                            <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4">
                                    <Form.Label>{t('magazynWalut.operations.form.notes')}</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        {t('magazynWalut.actions.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        {t('magazynWalut.actions.confirm')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="raport" title={t('magazynWalut.tabs.report')}>
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('magazynWalut.report.flow')}</h5>
                                        <Table bordered responsive className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('magazynWalut.table.currency')}</th>
                                                    <th>{t('magazynWalut.report.in')}</th>
                                                    <th>{t('magazynWalut.report.out')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>EUR</td>
                                                    <td>245 000,00</td>
                                                    <td>198 500,00</td>
                                                </tr>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>180 000,00</td>
                                                    <td>156 250,00</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('magazynWalut.report.value')}</h5>
                                        <Table bordered responsive className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('magazynWalut.table.currency')}</th>
                                                    <th>{t('magazynWalut.table.amount')}</th>
                                                    <th>{t('magazynWalut.table.value')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>EUR</td>
                                                    <td>125 450,00</td>
                                                    <td>583 456,50 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>USD</td>
                                                    <td>89 250,00</td>
                                                    <td>352 537,50 PLN</td>
                                                </tr>
                                                <tr className="fw-bold">
                                                    <td>{t('magazynWalut.report.total')}</td>
                                                    <td>–</td>
                                                    <td>935 994,00 PLN</td>
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
