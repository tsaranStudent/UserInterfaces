import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    InputGroup, Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const ZapisyKasowoBankowe = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-journal-check me-1" aria-hidden="true" />
                        {t('zapisyKasowoBankowe.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('zapisyKasowoBankowe.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="operacje" className="module-tabs mb-4">
                    <Tab eventKey="operacje" title={t('zapisyKasowoBankowe.tabs.operations')}>
                        {/* Pasek akcji */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('zapisyKasowoBankowe.operations.new')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-arrow-down me-1" />
                                    {t('zapisyKasowoBankowe.operations.export')}
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
                                            <th>{t('zapisyKasowoBankowe.table.date')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.docNo')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.type')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.amount')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.account')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.status')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025</td>
                                            <td>KP/2025/123</td>
                                            <td>{t('zapisyKasowoBankowe.types.cashOut')}</td>
                                            <td>5 000,00 PLN</td>
                                            <td>{t('zapisyKasowoBankowe.accounts.cash')}</td>
                                            <td><Badge bg="success">{t('zapisyKasowoBankowe.status.posted')}</Badge></td>
                                            <td>
                                                <Button variant="outline-info" size="sm">
                                                    {t('zapisyKasowoBankowe.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>18.05.2025</td>
                                            <td>PL/2025/456</td>
                                            <td>{t('zapisyKasowoBankowe.types.bankOut')}</td>
                                            <td>12 450,00 PLN</td>
                                            <td>{t('zapisyKasowoBankowe.accounts.current')}</td>
                                            <td><Badge bg="warning">{t('zapisyKasowoBankowe.status.pending')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    {t('zapisyKasowoBankowe.actions.edit')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="nowa" title={t('zapisyKasowoBankowe.tabs.new')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">{t('zapisyKasowoBankowe.new.heading')}</h5>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('zapisyKasowoBankowe.new.form.type')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('zapisyKasowoBankowe.types.cashIn')}</option>
                                                <option>{t('zapisyKasowoBankowe.types.cashOut')}</option>
                                                <option>{t('zapisyKasowoBankowe.types.bankIn')}</option>
                                                <option>{t('zapisyKasowoBankowe.types.bankOut')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('zapisyKasowoBankowe.new.form.date')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('zapisyKasowoBankowe.new.form.amount')}</Form.Label>
                                            <Form.Control type="number" step="0.01" placeholder="0,00" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('zapisyKasowoBankowe.new.form.account')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('zapisyKasowoBankowe.accounts.cash')}</option>
                                                <option>{t('zapisyKasowoBankowe.accounts.current')}</option>
                                                <option>{t('zapisyKasowoBankowe.accounts.currency')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4">
                                    <Form.Label>{t('zapisyKasowoBankowe.new.form.desc')}</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder={t('zapisyKasowoBankowe.new.form.descPlaceholder')} />
                                </Form.Group>
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        {t('zapisyKasowoBankowe.actions.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        {t('zapisyKasowoBankowe.actions.save')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="salda" title={t('zapisyKasowoBankowe.tabs.balances')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3">{t('zapisyKasowoBankowe.balances.heading')}</h5>
                                <Table bordered responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('zapisyKasowoBankowe.table.account')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.balance')}</th>
                                            <th>{t('zapisyKasowoBankowe.table.currency')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('zapisyKasowoBankowe.accounts.cash')}</td>
                                            <td>25 450,00</td>
                                            <td>PLN</td>
                                        </tr>
                                        <tr>
                                            <td>{t('zapisyKasowoBankowe.accounts.current')}</td>
                                            <td>185 200,00</td>
                                            <td>PLN</td>
                                        </tr>
                                        <tr>
                                            <td>{t('zapisyKasowoBankowe.accounts.currency')}</td>
                                            <td>32 150,00</td>
                                            <td>EUR</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};
