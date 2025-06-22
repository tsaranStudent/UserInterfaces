import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    InputGroup, Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RozliczeniaPodmiotu = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-cash-stack me-1" aria-hidden="true" />
                        {t('rozliczeniaPodmiotu.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('rozliczeniaPodmiotu.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="lista" className="module-tabs mb-4">
                    <Tab eventKey="lista" title={t('rozliczeniaPodmiotu.tabs.lista')}>
                        {/* Pasek akcji */}
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('rozliczeniaPodmiotu.actions.new')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-arrow-down me-1" />
                                    {t('rozliczeniaPodmiotu.actions.export')}
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
                                            <th>{t('rozliczeniaPodmiotu.table.settlementNo')}</th>
                                            <th>{t('rozliczeniaPodmiotu.table.date')}</th>
                                            <th>{t('rozliczeniaPodmiotu.table.source')}</th>
                                            <th>{t('rozliczeniaPodmiotu.table.target')}</th>
                                            <th>{t('rozliczeniaPodmiotu.table.amount')}</th>
                                            <th>{t('rozliczeniaPodmiotu.table.status')}</th>
                                            <th>{t('rozliczeniaPodmiotu.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>RZ/2025/001</td>
                                            <td>15.05.2025</td>
                                            <td>Dział Sprzedaży</td>
                                            <td>Dział Marketingu</td>
                                            <td>25 000,00 PLN</td>
                                            <td><Badge bg="success">{t('rozliczeniaPodmiotu.statuses.posted')}</Badge></td>
                                            <td>
                                                <Button variant="outline-info" size="sm">
                                                    {t('rozliczeniaPodmiotu.actionsCell.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>RZ/2025/002</td>
                                            <td>18.05.2025</td>
                                            <td>Centrala</td>
                                            <td>Oddział Warszawa</td>
                                            <td>50 000,00 PLN</td>
                                            <td><Badge bg="warning">{t('rozliczeniaPodmiotu.statuses.inProgress')}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    {t('rozliczeniaPodmiotu.actionsCell.edit')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="nowe" title={t('rozliczeniaPodmiotu.tabs.nowe')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">{t('rozliczeniaPodmiotu.newForm.heading')}</h5>

                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('rozliczeniaPodmiotu.newForm.fields.source.label')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('rozliczeniaPodmiotu.newForm.fields.source.placeholder')}</option>
                                                <option>Dział Sprzedaży</option>
                                                <option>Centrala</option>
                                                <option>Magazyn Główny</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('rozliczeniaPodmiotu.newForm.fields.target.label')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('rozliczeniaPodmiotu.newForm.fields.target.placeholder')}</option>
                                                <option>Dział Marketingu</option>
                                                <option>Oddział Warszawa</option>
                                                <option>Dział Logistyki</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="g-3 mb-4">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('rozliczeniaPodmiotu.newForm.fields.date.label')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-30" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('rozliczeniaPodmiotu.newForm.fields.amount.label')}</Form.Label>
                                            <Form.Control type="number" step="0.01" placeholder={t('rozliczeniaPodmiotu.newForm.fields.amount.placeholder')} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('rozliczeniaPodmiotu.newForm.fields.currency.label')}</Form.Label>
                                            <Form.Select>
                                                <option>PLN</option>
                                                <option>EUR</option>
                                                <option>USD</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label>{t('rozliczeniaPodmiotu.newForm.fields.description.label')}</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder={t('rozliczeniaPodmiotu.newForm.fields.description.placeholder')} />
                                </Form.Group>

                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        {t('rozliczeniaPodmiotu.newForm.buttons.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        {t('rozliczeniaPodmiotu.newForm.buttons.save')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="raporty" title={t('rozliczeniaPodmiotu.tabs.raporty')}>
                        <Row>
                            <Col md={6}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('rozliczeniaPodmiotu.report.monthlyHeading')}</h5>
                                        <Table bordered responsive className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('rozliczeniaPodmiotu.report.monthlyTable.entity')}</th>
                                                    <th>{t('rozliczeniaPodmiotu.report.monthlyTable.count')}</th>
                                                    <th>{t('rozliczeniaPodmiotu.report.monthlyTable.total')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Centrala</td>
                                                    <td>12</td>
                                                    <td>185 000,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>Dział Sprzedaży</td>
                                                    <td>8</td>
                                                    <td>95 000,00 PLN</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="mb-3">{t('rozliczeniaPodmiotu.report.balanceHeading')}</h5>
                                        <Table bordered responsive className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>{t('rozliczeniaPodmiotu.report.balanceTable.entity')}</th>
                                                    <th>{t('rozliczeniaPodmiotu.report.balanceTable.balance')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Centrala</td>
                                                    <td>+250 000,00 PLN</td>
                                                </tr>
                                                <tr>
                                                    <td>Oddział Warszawa</td>
                                                    <td>-85 000,00 PLN</td>
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
