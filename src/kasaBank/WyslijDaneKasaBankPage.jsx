import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge,
    Alert, InputGroup
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const WyslijDaneKasaBank = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-bank2 icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-send me-1" aria-hidden="true" />
                        {t('wyslijDaneKasaBank.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('wyslijDaneKasaBank.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="wysylka" className="mb-4 module-tabs">
                    <Tab
                        eventKey="wysylka"
                        title={
                            <>
                                <i className="bi bi-send me-1" />
                                {t('wyslijDaneKasaBank.tabs.send')}
                            </>
                        }
                    >
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Alert variant="info">
                                    <i className="bi bi-clock-history me-2" />
                                    {t('wyslijDaneKasaBank.lastSend')}: 15.05.2025 14:30 | {t('wyslijDaneKasaBank.status')}: <Badge bg="success">{t('wyslijDaneKasaBank.statuses.sent')}</Badge>
                                </Alert>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-bank me-1" />
                                                {t('wyslijDaneKasaBank.selectBank')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('wyslijDaneKasaBank.banks.pko')}</option>
                                                <option>{t('wyslijDaneKasaBank.banks.pekao')}</option>
                                                <option>{t('wyslijDaneKasaBank.banks.mbank')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-file-earmark-text me-1" />
                                                {t('wyslijDaneKasaBank.dataType')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('wyslijDaneKasaBank.types.payments')}</option>
                                                <option>{t('wyslijDaneKasaBank.types.statement')}</option>
                                                <option>{t('wyslijDaneKasaBank.types.contractors')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar-date me-1" />
                                                {t('wyslijDaneKasaBank.dateFrom')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-01" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar2-date me-1" />
                                                {t('wyslijDaneKasaBank.dateTo')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="primary">
                                        <i className="bi bi-send me-1" />
                                        {t('wyslijDaneKasaBank.actions.sendData')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3">
                                    <i className="bi bi-list-ul me-2" />
                                    {t('wyslijDaneKasaBank.recentSends')}
                                </h5>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('wyslijDaneKasaBank.table.sendDate')}</th>
                                            <th><i className="bi bi-bank me-1" />{t('wyslijDaneKasaBank.table.bank')}</th>
                                            <th><i className="bi bi-file-earmark-text me-1" />{t('wyslijDaneKasaBank.table.dataType')}</th>
                                            <th><i className="bi bi-123 me-1" />{t('wyslijDaneKasaBank.table.records')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('wyslijDaneKasaBank.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025 14:30</td>
                                            <td>{t('wyslijDaneKasaBank.banks.pko')}</td>
                                            <td>{t('wyslijDaneKasaBank.types.payments')}</td>
                                            <td>24</td>
                                            <td><Badge bg="success">{t('wyslijDaneKasaBank.statuses.sent')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>30.04.2025 09:15</td>
                                            <td>{t('wyslijDaneKasaBank.banks.mbank')}</td>
                                            <td>{t('wyslijDaneKasaBank.types.statement')}</td>
                                            <td>18</td>
                                            <td><Badge bg="warning">{t('wyslijDaneKasaBank.statuses.inProgress')}</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="konfiguracja"
                        title={
                            <>
                                <i className="bi bi-gear me-1" />
                                {t('wyslijDaneKasaBank.tabs.config')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-sliders me-2" />
                                    {t('wyslijDaneKasaBank.config.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-clock me-1" />
                                                    {t('wyslijDaneKasaBank.config.autoSend')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>{t('wyslijDaneKasaBank.config.enabled')} (8:00)</option>
                                                    <option>{t('wyslijDaneKasaBank.config.disabled')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-file-earmark-binary me-1" />
                                                    {t('wyslijDaneKasaBank.config.dataFormat')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>XML</option>
                                                    <option>CSV</option>
                                                    <option>JSON</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <h6 className="mb-3">
                                        <i className="bi bi-key me-2" />
                                        {t('wyslijDaneKasaBank.config.accessData')}
                                    </h6>
                                    <Row className="mb-4">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-person me-1" />
                                                    {t('wyslijDaneKasaBank.config.apiLogin')}
                                                </Form.Label>
                                                <Form.Control type="text" placeholder={t('wyslijDaneKasaBank.config.enterLogin')} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-shield-lock me-1" />
                                                    {t('wyslijDaneKasaBank.config.apiKey')}
                                                </Form.Label>
                                                <Form.Control type="password" placeholder={t('wyslijDaneKasaBank.config.enterKey')} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-circle me-1" />
                                            {t('wyslijDaneKasaBank.actions.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" />
                                            {t('wyslijDaneKasaBank.actions.saveChanges')}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab
                        eventKey="logi"
                        title={
                            <>
                                <i className="bi bi-journal-text me-1" />
                                {t('wyslijDaneKasaBank.tabs.logs')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <div className="actions-bar mb-3">
                                    <div className="actions-bar-start">
                                        <Form.Select style={{ width: '200px' }}>
                                            <option>{t('wyslijDaneKasaBank.logs.allStatuses')}</option>
                                            <option>{t('wyslijDaneKasaBank.statuses.success')}</option>
                                            <option>{t('wyslijDaneKasaBank.statuses.error')}</option>
                                        </Form.Select>
                                    </div>
                                    <div className="actions-bar-end">
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-05-01"
                                            style={{ width: '150px' }}
                                        />
                                    </div>
                                </div>

                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('wyslijDaneKasaBank.table.date')}</th>
                                            <th><i className="bi bi-activity me-1" />{t('wyslijDaneKasaBank.table.operation')}</th>
                                            <th><i className="bi bi-bank me-1" />{t('wyslijDaneKasaBank.table.bank')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('wyslijDaneKasaBank.table.status')}</th>
                                            <th><i className="bi bi-file-text me-1" />{t('wyslijDaneKasaBank.table.details')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025 14:30</td>
                                            <td>{t('wyslijDaneKasaBank.operations.sendPayments')}</td>
                                            <td>{t('wyslijDaneKasaBank.banks.pko')}</td>
                                            <td><Badge bg="success">{t('wyslijDaneKasaBank.statuses.success')}</Badge></td>
                                            <td>{t('wyslijDaneKasaBank.logs.sent24')}</td>
                                        </tr>
                                        <tr>
                                            <td>14.05.2025 08:45</td>
                                            <td>{t('wyslijDaneKasaBank.operations.syncRates')}</td>
                                            <td>{t('wyslijDaneKasaBank.banks.nbp')}</td>
                                            <td><Badge bg="danger">{t('wyslijDaneKasaBank.statuses.error')}</Badge></td>
                                            <td>{t('wyslijDaneKasaBank.logs.noConnection')}</td>
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