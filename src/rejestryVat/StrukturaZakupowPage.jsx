import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge, InputGroup, ProgressBar
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const StrukturaZakupow = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-pie-chart-fill icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-cart4 me-1" aria-hidden="true" />
                        {t('strukturaZakupowPage.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('strukturaZakupowPage.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="analiza" className="mb-4 module-tabs">
                    <Tab
                        eventKey="analiza"
                        title={
                            <>
                                <i className="bi bi-graph-up me-1" />
                                {t('strukturaZakupowPage.tabs.analysis')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-file-earmark-text me-1" />
                                    {t('strukturaZakupowPage.actions.generateReport')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-excel me-1" />
                                    {t('strukturaZakupowPage.actions.exportExcel')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select className="me-2" style={{ width: '180px' }}>
                                    <option>{t('strukturaZakupowPage.months.may')} 2025</option>
                                    <option>{t('strukturaZakupowPage.months.april')} 2025</option>
                                    <option>{t('strukturaZakupowPage.months.march')} 2025</option>
                                </Form.Select>
                                <InputGroup style={{ width: '250px' }}>
                                    <Form.Control
                                        placeholder={t('strukturaZakupowPage.search.suppliers')}
                                    />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Row className="mb-4">
                            <Col md={4}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h6 className="text-muted">
                                            <i className="bi bi-cash-stack me-1" />
                                            {t('strukturaZakupowPage.summary.totalPurchases')}
                                        </h6>
                                        <h3>124 560,00 PLN</h3>
                                        <ProgressBar now={75} variant="success" className="mt-2" />
                                        <small className="text-muted">
                                            {t('strukturaZakupowPage.summary.growth', { value: '15%' })}
                                        </small>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h6 className="text-muted">
                                            <i className="bi bi-percent me-1" />
                                            {t('strukturaZakupowPage.summary.vatAmount')}
                                        </h6>
                                        <h3>28 648,80 PLN</h3>
                                        <ProgressBar now={60} variant="info" className="mt-2" />
                                        <small className="text-muted">
                                            {t('strukturaZakupowPage.summary.growth', { value: '12%' })}
                                        </small>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h6 className="text-muted">
                                            <i className="bi bi-receipt me-1" />
                                            {t('strukturaZakupowPage.summary.invoicesCount')}
                                        </h6>
                                        <h3>87</h3>
                                        <ProgressBar now={45} variant="warning" className="mt-2" />
                                        <small className="text-muted">
                                            {t('strukturaZakupowPage.summary.growth', { value: '5%' })}
                                        </small>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-building me-1" />{t('strukturaZakupowPage.table.supplier')}</th>
                                            <th><i className="bi bi-file-text me-1" />{t('strukturaZakupowPage.table.nip')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('strukturaZakupowPage.table.netValue')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('strukturaZakupowPage.table.vat')}</th>
                                            <th><i className="bi bi-123 me-1" />{t('strukturaZakupowPage.table.invoicesCount')}</th>
                                            <th><i className="bi bi-pie-chart me-1" />{t('strukturaZakupowPage.table.share')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('strukturaZakupowPage.exampleSuppliers.abc')}</td>
                                            <td>1234567890</td>
                                            <td>45 200,00 PLN</td>
                                            <td>10 396,00 PLN</td>
                                            <td>12</td>
                                            <td>
                                                <ProgressBar now={36} label={`36%`} variant="success" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{t('strukturaZakupowPage.exampleSuppliers.xyz')}</td>
                                            <td>0987654321</td>
                                            <td>32 150,00 PLN</td>
                                            <td>7 394,50 PLN</td>
                                            <td>8</td>
                                            <td>
                                                <ProgressBar now={26} label={`26%`} variant="info" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="stawki"
                        title={
                            <>
                                <i className="bi bi-percent me-1" />
                                {t('strukturaZakupowPage.tabs.vatRates')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-percent me-2" />
                                    {t('strukturaZakupowPage.vatRates.title')}
                                </h5>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('strukturaZakupowPage.vatRates.period')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('strukturaZakupowPage.months.may')} 2025</option>
                                                <option>{t('strukturaZakupowPage.months.april')} 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-tags me-1" />
                                                {t('strukturaZakupowPage.vatRates.supplierGroup')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('strukturaZakupowPage.vatRates.allGroups')}</option>
                                                <option>{t('strukturaZakupowPage.vatRates.buildingMaterials')}</option>
                                                <option>{t('strukturaZakupowPage.vatRates.services')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered responsive className="mb-4">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-percent me-1" />{t('strukturaZakupowPage.table.vatRate')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('strukturaZakupowPage.table.netValue')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('strukturaZakupowPage.table.vatAmount')}</th>
                                            <th><i className="bi bi-file-earmark-text me-1" />{t('strukturaZakupowPage.table.documentsCount')}</th>
                                            <th><i className="bi bi-pie-chart me-1" />{t('strukturaZakupowPage.table.share')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>23%</td>
                                            <td>78 450,00 PLN</td>
                                            <td>18 043,50 PLN</td>
                                            <td>45</td>
                                            <td>63%</td>
                                        </tr>
                                        <tr>
                                            <td>8%</td>
                                            <td>32 150,00 PLN</td>
                                            <td>2 572,00 PLN</td>
                                            <td>22</td>
                                            <td>26%</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box p-3 mb-3 bg-light rounded">
                                    <div className="summary-text fs-5">
                                        <i className="bi bi-currency-dollar me-2" />
                                        <strong>{t('strukturaZakupowPage.vatRates.totalNetValue')}:</strong> 110 600,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-3">
                                        <i className="bi bi-file-earmark-text me-1" />
                                        {t('strukturaZakupowPage.actions.generateSummary')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="dostawcy"
                        title={
                            <>
                                <i className="bi bi-people me-1" />
                                {t('strukturaZakupowPage.tabs.suppliersAnalysis')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '350px' }}>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-01"
                                        className="me-1"
                                    />
                                    <InputGroup.Text>-</InputGroup.Text>
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-31"
                                        className="me-2"
                                    />
                                    <Button variant="primary">
                                        <i className="bi bi-funnel me-1" />
                                        {t('strukturaZakupowPage.actions.filter')}
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-hash me-1" />{t('strukturaZakupowPage.table.lp')}</th>
                                            <th><i className="bi bi-building me-1" />{t('strukturaZakupowPage.table.supplier')}</th>
                                            <th><i className="bi bi-file-text me-1" />{t('strukturaZakupowPage.table.nip')}</th>
                                            <th><i className="bi bi-cash-stack me-1" />{t('strukturaZakupowPage.table.purchasesValue')}</th>
                                            <th><i className="bi bi-graph-up me-1" />{t('strukturaZakupowPage.table.trend')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('strukturaZakupowPage.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{t('strukturaZakupowPage.exampleSuppliers.abc')}</td>
                                            <td>1234567890</td>
                                            <td>45 200,00 PLN</td>
                                            <td><Badge bg="success">+15%</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('strukturaZakupowPage.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>{t('strukturaZakupowPage.exampleSuppliers.xyz')}</td>
                                            <td>0987654321</td>
                                            <td>32 150,00 PLN</td>
                                            <td><Badge bg="danger">-5%</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('strukturaZakupowPage.actions.details')}
                                                </Button>
                                            </td>
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