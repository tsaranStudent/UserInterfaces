import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    Form, Row, Col, Table, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RaportyKasowoBankowe = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-bar-graph me-1" aria-hidden="true" />
                        {t('raportyKasowoBankowe.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('raportyKasowoBankowe.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="dzienne" className="module-tabs mb-4">
                    <Tab eventKey="dzienne" title={t('raportyKasowoBankowe.tabs.daily')}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Row className="g-3 mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.daily.form.date')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-15" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.daily.form.type')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('raportyKasowoBankowe.daily.form.all')}</option>
                                                <option value="inflows">{t('raportyKasowoBankowe.daily.form.onlyInflows')}</option>
                                                <option value="outflows">{t('raportyKasowoBankowe.daily.form.onlyOutflows')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.daily.form.currency')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('raportyKasowoBankowe.daily.form.curAll')}</option>
                                                <option value="PLN">PLN</option>
                                                <option value="EUR">EUR</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end">
                                    <Button variant="primary">
                                        {t('raportyKasowoBankowe.daily.actions.generate')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3">{t('raportyKasowoBankowe.daily.summaryTitle')}</h5>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('raportyKasowoBankowe.daily.table.account')}</th>
                                            <th>{t('raportyKasowoBankowe.daily.table.inflows')}</th>
                                            <th>{t('raportyKasowoBankowe.daily.table.outflows')}</th>
                                            <th>{t('raportyKasowoBankowe.daily.table.balance')}</th>
                                            <th>{t('raportyKasowoBankowe.daily.table.transactions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('raportyKasowoBankowe.daily.accounts.main')}</td>
                                            <td>125 450,00 PLN</td>
                                            <td>85 200,00 PLN</td>
                                            <td>40 250,00 PLN</td>
                                            <td>24</td>
                                        </tr>
                                        <tr>
                                            <td>{t('raportyKasowoBankowe.daily.accounts.currency')}</td>
                                            <td>15 800,00 EUR</td>
                                            <td>12 450,00 EUR</td>
                                            <td>3 350,00 EUR</td>
                                            <td>8</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="miesieczne" title={t('raportyKasowoBankowe.tabs.monthly')}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Row className="g-3 mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.monthly.form.month')}</Form.Label>
                                            <Form.Select>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.monthly.form.type')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('raportyKasowoBankowe.monthly.form.general')}</option>
                                                <option>{t('raportyKasowoBankowe.monthly.form.byCounterparty')}</option>
                                                <option>{t('raportyKasowoBankowe.monthly.form.byCategory')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.monthly.form.export')}</Form.Label>
                                            <Form.Select>
                                                <option>PDF</option>
                                                <option>Excel</option>
                                                <option>CSV</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end">
                                    <Button variant="primary" className="me-2">
                                        {t('raportyKasowoBankowe.monthly.actions.generate')}
                                    </Button>
                                    <Button variant="outline-secondary">
                                        {t('raportyKasowoBankowe.monthly.actions.export')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3">{t('raportyKasowoBankowe.monthly.summaryTitle')}</h5>
                                <Table bordered responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('raportyKasowoBankowe.monthly.table.category')}</th>
                                            <th>{t('raportyKasowoBankowe.monthly.table.inflows')}</th>
                                            <th>{t('raportyKasowoBankowe.monthly.table.outflows')}</th>
                                            <th>{t('raportyKasowoBankowe.monthly.table.balance')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sprzedaż</td>
                                            <td>450 200,00 PLN</td>
                                            <td>–</td>
                                            <td>+450 200,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Zakupy</td>
                                            <td>–</td>
                                            <td>285 500,00 PLN</td>
                                            <td>–285 500,00 PLN</td>
                                        </tr>
                                        <tr className="fw-bold">
                                            <td>{t('raportyKasowoBankowe.monthly.table.total')}</td>
                                            <td>450 200,00 PLN</td>
                                            <td>285 500,00 PLN</td>
                                            <td>+164 700,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="niestandardowe" title={t('raportyKasowoBankowe.tabs.custom')}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">{t('raportyKasowoBankowe.custom.title')}</h5>
                                <Row className="g-3 mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.custom.form.from')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-01" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('raportyKasowoBankowe.custom.form.to')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('raportyKasowoBankowe.custom.form.accounts')}</Form.Label>
                                    <Form.Select multiple>
                                        <option>{t('raportyKasowoBankowe.custom.accounts.main')}</option>
                                        <option>{t('raportyKasowoBankowe.custom.accounts.currency')}</option>
                                        <option>{t('raportyKasowoBankowe.custom.accounts.savings')}</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>{t('raportyKasowoBankowe.custom.form.categories')}</Form.Label>
                                    <Form.Check type="checkbox" label={t('raportyKasowoBankowe.custom.categories.all')} defaultChecked />
                                    <Form.Check type="checkbox" label={t('raportyKasowoBankowe.custom.categories.sales')} />
                                    <Form.Check type="checkbox" label={t('raportyKasowoBankowe.custom.categories.purchases')} />
                                    <Form.Check type="checkbox" label={t('raportyKasowoBankowe.custom.categories.salary')} />
                                </Form.Group>
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        {t('raportyKasowoBankowe.custom.actions.clear')}
                                    </Button>
                                    <Button variant="primary">
                                        {t('raportyKasowoBankowe.custom.actions.generate')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};
