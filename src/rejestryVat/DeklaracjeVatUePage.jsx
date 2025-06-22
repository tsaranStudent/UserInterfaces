import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const DeklaracjeVatUe = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-globe-europe-africa icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-spreadsheet me-1" aria-hidden="true" />
                        {t('deklaracjeVatUe.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('deklaracjeVatUe.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="wdt" className="mb-4">
                    <Tab eventKey="wdt" title={<span><i className="bi bi-box-arrow-up-right me-1" />{t('deklaracjeVatUe.tabs.wdt')}</span>}>
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary"><i className="bi bi-plus-circle me-1" />{t('deklaracjeVatUe.actions.newDeclaration')}</Button>
                                <Button variant="outline-secondary"><i className="bi bi-upload me-1" />{t('deklaracjeVatUe.actions.importData')}</Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select className="me-2" style={{ width: '180px' }}>
                                    <option>{t('deklaracjeVatUe.selectors.may')}</option>
                                    <option>{t('deklaracjeVatUe.selectors.april')}</option>
                                    <option>{t('deklaracjeVatUe.selectors.march')}</option>
                                </Form.Select>
                                <Form.Control placeholder={t('deklaracjeVatUe.actions.searchPlaceholder')} className="search-input" />
                            </div>
                        </div>

                        <Table striped bordered hover className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('deklaracjeVatUe.table.country')}</th>
                                    <th>{t('deklaracjeVatUe.table.contractor')}</th>
                                    <th>{t('deklaracjeVatUe.table.vatNumber')}</th>
                                    <th>{t('deklaracjeVatUe.table.netValue')}</th>
                                    <th>{t('deklaracjeVatUe.table.transactions')}</th>
                                    <th>{t('deklaracjeVatUe.table.status')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>DE</td>
                                    <td>ABC GmbH</td>
                                    <td>DE123456789</td>
                                    <td>15 200,00 EUR</td>
                                    <td>3</td>
                                    <td><Badge bg="success">{t('deklaracjeVatUe.status.reported')}</Badge></td>
                                </tr>
                                <tr>
                                    <td>FR</td>
                                    <td>XYZ SAS</td>
                                    <td>FR987654321</td>
                                    <td>8 500,00 EUR</td>
                                    <td>2</td>
                                    <td><Badge bg="warning">{t('deklaracjeVatUe.status.inProgress')}</Badge></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="wnt" title={<span><i className="bi bi-box-arrow-in-down me-1" />{t('deklaracjeVatUe.tabs.wnt')}</span>}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('deklaracjeVatUe.wntForm.period')}</Form.Label>
                                            <Form.Select required>
                                                <option>{t('deklaracjeVatUe.selectors.may')}</option>
                                                <option>{t('deklaracjeVatUe.selectors.april')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>{t('deklaracjeVatUe.wntForm.deadline')}</Form.Label>
                                            <Form.Control type="date" defaultValue="2025-06-25" disabled />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>{t('deklaracjeVatUe.table.originCountry')}</th>
                                            <th>{t('deklaracjeVatUe.table.supplier')}</th>
                                            <th>{t('deklaracjeVatUe.table.vatNumber')}</th>
                                            <th>{t('deklaracjeVatUe.table.netValue')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>IT</td>
                                            <td>FORNITURE SRL</td>
                                            <td>IT12345678901</td>
                                            <td>12 350,00 EUR</td>
                                        </tr>
                                        <tr>
                                            <td>ES</td>
                                            <td>TECNOLOGIA SA</td>
                                            <td>ES987654321</td>
                                            <td>5 800,00 EUR</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>{t('deklaracjeVatUe.summary.totalWnt')}:</strong> 18 150,00 EUR
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        <i className="bi bi-file-earmark-check me-1" />{t('deklaracjeVatUe.actions.generateWnt')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="intrastat" title={<span><i className="bi bi-graph-up-arrow me-1" />{t('deklaracjeVatUe.tabs.intrastat')}</span>}>
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary"><i className="bi bi-bar-chart me-1" />{t('deklaracjeVatUe.actions.generateReport')}</Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control type="date" defaultValue="2025-05-01" className="me-2" style={{ width: '150px' }} />
                                <Form.Control type="date" defaultValue="2025-05-31" className="me-2" style={{ width: '150px' }} />
                                <Button variant="outline-secondary"><i className="bi bi-filetype-xml me-1" />{t('deklaracjeVatUe.actions.exportXml')}</Button>
                            </div>
                        </div>

                        <Table bordered hover className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('deklaracjeVatUe.table.goodsCode')}</th>
                                    <th>{t('deklaracjeVatUe.table.country')}</th>
                                    <th>{t('deklaracjeVatUe.table.netValue')}</th>
                                    <th>{t('deklaracjeVatUe.table.quantity')}</th>
                                    <th>{t('deklaracjeVatUe.table.unit')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>84713000</td>
                                    <td>DE</td>
                                    <td>24 500,00 EUR</td>
                                    <td>5</td>
                                    <td>{t('deklaracjeVatUe.units.pcs')}</td>
                                </tr>
                                <tr>
                                    <td>85423110</td>
                                    <td>FR</td>
                                    <td>12 300,00 EUR</td>
                                    <td>120</td>
                                    <td>{t('deklaracjeVatUe.units.kg')}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="statystyki" title={<span><i className="bi bi-bar-chart-steps me-1" />{t('deklaracjeVatUe.tabs.statistics')}</span>}>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h5 className="card-title"><i className="bi bi-arrow-up-right-square me-1" />{t('deklaracjeVatUe.stats.wdt')}</h5>
                                        <Table borderless>
                                            <tbody>
                                                <tr>
                                                    <td>{t('deklaracjeVatUe.stats.contractors')}</td>
                                                    <td className="text-end">12</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('deklaracjeVatUe.stats.totalValue')}</td>
                                                    <td className="text-end">68 450,00 EUR</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('deklaracjeVatUe.stats.topCountry')}</td>
                                                    <td className="text-end">{t('deklaracjeVatUe.stats.germany')}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h5 className="card-title"><i className="bi bi-arrow-down-left-square me-1" />{t('deklaracjeVatUe.stats.wnt')}</h5>
                                        <Table borderless>
                                            <tbody>
                                                <tr>
                                                    <td>{t('deklaracjeVatUe.stats.suppliers')}</td>
                                                    <td className="text-end">8</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('deklaracjeVatUe.stats.totalValue')}</td>
                                                    <td className="text-end">42 150,00 EUR</td>
                                                </tr>
                                                <tr>
                                                    <td>{t('deklaracjeVatUe.stats.topCountry')}</td>
                                                    <td className="text-end">{t('deklaracjeVatUe.stats.italy')}</td>
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
