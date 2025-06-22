import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge, InputGroup, Accordion
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const EwidencjaDodatkowa = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-journal-bookmark icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-spreadsheet me-1" aria-hidden="true" />
                        {t('ewidencjaDodatkowaPage.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('ewidencjaDodatkowaPage.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="rejestry" className="mb-4 module-tabs">
                    <Tab
                        eventKey="rejestry"
                        title={
                            <>
                                <i className="bi bi-journal-text me-1" />
                                {t('ewidencjaDodatkowaPage.tabs.registers')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('ewidencjaDodatkowaPage.actions.newEntry')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-file-earmark-text me-1" />
                                    {t('ewidencjaDodatkowaPage.actions.generateReport')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select className="me-2" style={{ width: '200px' }}>
                                    <option>{t('ewidencjaDodatkowaPage.filters.allRegisters')}</option>
                                    <option>{t('ewidencjaDodatkowaPage.registerTypes.fixedAssets')}</option>
                                    <option>{t('ewidencjaDodatkowaPage.registerTypes.internationalServices')}</option>
                                    <option>{t('ewidencjaDodatkowaPage.registerTypes.companyCars')}</option>
                                </Form.Select>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-01"
                                    style={{ width: '150px' }}
                                />
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('ewidencjaDodatkowaPage.table.date')}</th>
                                            <th><i className="bi bi-tags me-1" />{t('ewidencjaDodatkowaPage.table.registerType')}</th>
                                            <th><i className="bi bi-file-earmark me-1" />{t('ewidencjaDodatkowaPage.table.documentNumber')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('ewidencjaDodatkowaPage.table.netAmount')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('ewidencjaDodatkowaPage.table.vat')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('ewidencjaDodatkowaPage.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025</td>
                                            <td>{t('ewidencjaDodatkowaPage.registerTypes.fixedAssets')}</td>
                                            <td>ST/2025/012</td>
                                            <td>12 500,00 PLN</td>
                                            <td>2 875,00 PLN</td>
                                            <td><Badge bg="success">{t('ewidencjaDodatkowaPage.statuses.booked')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>10.05.2025</td>
                                            <td>{t('ewidencjaDodatkowaPage.registerTypes.internationalServices')}</td>
                                            <td>UM/2025/008</td>
                                            <td>8 200,00 PLN</td>
                                            <td>0,00 PLN</td>
                                            <td><Badge bg="warning">{t('ewidencjaDodatkowaPage.statuses.verification')}</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="zestawienia"
                        title={
                            <>
                                <i className="bi bi-file-earmark-bar-graph me-1" />
                                {t('ewidencjaDodatkowaPage.tabs.statements')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-calendar-range me-2" />
                                    {t('ewidencjaDodatkowaPage.statements.title')}
                                </h5>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar me-1" />
                                                {t('ewidencjaDodatkowaPage.statements.period')}*
                                            </Form.Label>
                                            <Form.Select required>
                                                <option>{t('ewidencjaDodatkowaPage.months.may')} 2025</option>
                                                <option>{t('ewidencjaDodatkowaPage.months.april')} 2025</option>
                                                <option>{t('ewidencjaDodatkowaPage.months.march')} 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-file-earmark-text me-1" />
                                                {t('ewidencjaDodatkowaPage.statements.type')}*
                                            </Form.Label>
                                            <Form.Select required>
                                                <option>{t('ewidencjaDodatkowaPage.statementTypes.taxationChoice')}</option>
                                                <option>{t('ewidencjaDodatkowaPage.statementTypes.splitPayment')}</option>
                                                <option>{t('ewidencjaDodatkowaPage.statementTypes.wdtWnt')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Accordion defaultActiveKey="0" className="mb-4">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <i className="bi bi-list-ul me-2" />
                                            {t('ewidencjaDodatkowaPage.statements.details')}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Table bordered responsive>
                                                <thead>
                                                    <tr>
                                                        <th><i className="bi bi-tag me-1" />{t('ewidencjaDodatkowaPage.table.category')}</th>
                                                        <th><i className="bi bi-123 me-1" />{t('ewidencjaDodatkowaPage.table.transactionsCount')}</th>
                                                        <th><i className="bi bi-currency-dollar me-1" />{t('ewidencjaDodatkowaPage.table.netValue')}</th>
                                                        <th><i className="bi bi-percent me-1" />{t('ewidencjaDodatkowaPage.table.vat')}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{t('ewidencjaDodatkowaPage.categories.intraCommunityAcquisition')}</td>
                                                        <td>5</td>
                                                        <td>24 500,00 PLN</td>
                                                        <td>5 635,00 PLN</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t('ewidencjaDodatkowaPage.categories.intraCommunitySupply')}</td>
                                                        <td>3</td>
                                                        <td>18 200,00 PLN</td>
                                                        <td>0,00 PLN</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="summary-box p-3 mb-3 bg-light rounded">
                                    <div className="summary-text fs-5">
                                        <i className="bi bi-cash-stack me-2" />
                                        <strong>{t('ewidencjaDodatkowaPage.statements.totalValue')}:</strong> 42 700,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-3">
                                        <i className="bi bi-file-earmark-zip me-1" />
                                        {t('ewidencjaDodatkowaPage.actions.exportJpk')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="korekty"
                        title={
                            <>
                                <i className="bi bi-slash-square me-1" />
                                {t('ewidencjaDodatkowaPage.tabs.corrections')}
                            </>
                        }
                    >
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('ewidencjaDodatkowaPage.actions.addCorrection')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup style={{ width: '300px' }}>
                                    <Form.Control
                                        placeholder={t('ewidencjaDodatkowaPage.search.corrections')}
                                    />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <Table bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('ewidencjaDodatkowaPage.table.correctionDate')}</th>
                                            <th><i className="bi bi-file-earmark me-1" />{t('ewidencjaDodatkowaPage.table.sourceDocument')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('ewidencjaDodatkowaPage.table.correctionAmount')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('ewidencjaDodatkowaPage.table.vat')}</th>
                                            <th><i className="bi bi-tags me-1" />{t('ewidencjaDodatkowaPage.table.correctionType')}</th>
                                            <th><i className="bi bi-gear me-1" />{t('ewidencjaDodatkowaPage.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>18.05.2025</td>
                                            <td>FV/2025/123</td>
                                            <td>-1 200,00 PLN</td>
                                            <td>-276,00 PLN</td>
                                            <td>{t('ewidencjaDodatkowaPage.correctionTypes.correctingInvoice')}</td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('ewidencjaDodatkowaPage.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12.05.2025</td>
                                            <td>ST/2025/005</td>
                                            <td>850,00 PLN</td>
                                            <td>195,50 PLN</td>
                                            <td>{t('ewidencjaDodatkowaPage.correctionTypes.fixedAssetCorrection')}</td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">
                                                    <i className="bi bi-eye me-1" />
                                                    {t('ewidencjaDodatkowaPage.actions.details')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="analiza"
                        title={
                            <>
                                <i className="bi bi-graph-up me-1" />
                                {t('ewidencjaDodatkowaPage.tabs.analysis')}
                            </>
                        }
                    >
                        <Row className="mb-4">
                            <Col md={4}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h6>
                                            <i className="bi bi-star me-1" />
                                            {t('ewidencjaDodatkowaPage.analysis.specialTransactions')}
                                        </h6>
                                        <h3>24</h3>
                                        <div className="text-muted">{t('ewidencjaDodatkowaPage.analysis.currentMonth')}</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h6>
                                            <i className="bi bi-arrow-counterclockwise me-1" />
                                            {t('ewidencjaDodatkowaPage.analysis.totalCorrections')}
                                        </h6>
                                        <h3>-2 450,00 PLN</h3>
                                        <div className="text-muted">{t('ewidencjaDodatkowaPage.analysis.lastQuarter')}</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h6>
                                            <i className="bi bi-clock me-1" />
                                            {t('ewidencjaDodatkowaPage.analysis.avgSettlementTime')}
                                        </h6>
                                        <h3>3,5 {t('ewidencjaDodatkowaPage.analysis.days')}</h3>
                                        <div className="text-muted">{t('ewidencjaDodatkowaPage.analysis.forSpecialTransactions')}</div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3">
                                    <i className="bi bi-calendar-month me-2" />
                                    {t('ewidencjaDodatkowaPage.analysis.monthlyStats')}
                                </h5>
                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('ewidencjaDodatkowaPage.table.month')}</th>
                                            <th><i className="bi bi-star me-1" />{t('ewidencjaDodatkowaPage.table.specialTransactions')}</th>
                                            <th><i className="bi bi-arrow-counterclockwise me-1" />{t('ewidencjaDodatkowaPage.table.vatCorrections')}</th>
                                            <th><i className="bi bi-currency-dollar me-1" />{t('ewidencjaDodatkowaPage.table.netValue')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('ewidencjaDodatkowaPage.months.may')} 2025</td>
                                            <td>8</td>
                                            <td>2</td>
                                            <td>15 200,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>{t('ewidencjaDodatkowaPage.months.april')} 2025</td>
                                            <td>12</td>
                                            <td>4</td>
                                            <td>24 500,00 PLN</td>
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