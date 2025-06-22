import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form, Row, Col,
    Button, Card, Tabs, Tab, Badge, Alert
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const OdbierzDane = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-cloud-download icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-bank me-1" aria-hidden="true" />
                        {t('odbierzDane.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('odbierzDane.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="pobierz" className="mb-4 module-tabs">
                    <Tab
                        eventKey="pobierz"
                        title={
                            <>
                                <i className="bi bi-download me-1" />
                                {t('odbierzDane.tabs.download')}
                            </>
                        }
                    >
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Alert variant="info">
                                    <i className="bi bi-clock-history me-2" />
                                    {t('odbierzDane.lastUpdate')}: 15.05.2025 08:45
                                </Alert>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-bank me-1" />
                                                {t('odbierzDane.selectBank')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('odbierzDane.banks.pko')}</option>
                                                <option>{t('odbierzDane.banks.pekao')}</option>
                                                <option>{t('odbierzDane.banks.mbank')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar-date me-1" />
                                                {t('odbierzDane.dateFrom')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-01" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label>
                                                <i className="bi bi-calendar2-date me-1" />
                                                {t('odbierzDane.dateTo')}
                                            </Form.Label>
                                            <Form.Control type="date" defaultValue="2025-05-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="primary">
                                        <i className="bi bi-cloud-download me-1" />
                                        {t('odbierzDane.actions.downloadData')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3">
                                    <i className="bi bi-list-ul me-2" />
                                    {t('odbierzDane.recentDownloads')}
                                </h5>
                                <Table striped bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-calendar me-1" />{t('odbierzDane.table.downloadDate')}</th>
                                            <th><i className="bi bi-bank me-1" />{t('odbierzDane.table.bank')}</th>
                                            <th><i className="bi bi-calendar-range me-1" />{t('odbierzDane.table.period')}</th>
                                            <th><i className="bi bi-123 me-1" />{t('odbierzDane.table.transactions')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('odbierzDane.table.status')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025 08:45</td>
                                            <td>{t('odbierzDane.banks.pko')}</td>
                                            <td>01.05.2025 - 15.05.2025</td>
                                            <td>24</td>
                                            <td><Badge bg="success">{t('odbierzDane.statuses.success')}</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>30.04.2025 09:12</td>
                                            <td>{t('odbierzDane.banks.mbank')}</td>
                                            <td>01.04.2025 - 30.04.2025</td>
                                            <td>18</td>
                                            <td><Badge bg="success">{t('odbierzDane.statuses.success')}</Badge></td>
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
                                {t('odbierzDane.tabs.config')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-sliders me-2" />
                                    {t('odbierzDane.config.title')}
                                </h5>

                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-clock me-1" />
                                                    {t('odbierzDane.config.autoDownload')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>{t('odbierzDane.config.enabled')} (8:00)</option>
                                                    <option>{t('odbierzDane.config.disabled')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>
                                                    <i className="bi bi-file-earmark-binary me-1" />
                                                    {t('odbierzDane.config.dataFormat')}
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
                                        {t('odbierzDane.config.accessData')}
                                    </h6>
                                    <Row className="mb-4">
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-person me-1" />
                                                    {t('odbierzDane.config.login')}
                                                </Form.Label>
                                                <Form.Control type="text" placeholder={t('odbierzDane.config.enterLogin')} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-shield-lock me-1" />
                                                    {t('odbierzDane.config.password')}
                                                </Form.Label>
                                                <Form.Control type="password" placeholder={t('odbierzDane.config.enterPassword')} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-circle me-1" />
                                            {t('odbierzDane.actions.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" />
                                            {t('odbierzDane.actions.saveChanges')}
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
                                {t('odbierzDane.tabs.logs')}
                            </>
                        }
                    >
                        <Card className="shadow-sm">
                            <Card.Body>
                                <div className="actions-bar mb-3">
                                    <div className="actions-bar-start">
                                        <Form.Select style={{ width: '200px' }}>
                                            <option>{t('odbierzDane.logs.allStatuses')}</option>
                                            <option>{t('odbierzDane.statuses.success')}</option>
                                            <option>{t('odbierzDane.statuses.error')}</option>
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
                                            <th><i className="bi bi-calendar me-1" />{t('odbierzDane.table.date')}</th>
                                            <th><i className="bi bi-activity me-1" />{t('odbierzDane.table.operation')}</th>
                                            <th><i className="bi bi-bank me-1" />{t('odbierzDane.table.bank')}</th>
                                            <th><i className="bi bi-info-circle me-1" />{t('odbierzDane.table.status')}</th>
                                            <th><i className="bi bi-file-text me-1" />{t('odbierzDane.table.details')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>15.05.2025 08:45</td>
                                            <td>{t('odbierzDane.operations.downloadTransactions')}</td>
                                            <td>{t('odbierzDane.banks.pko')}</td>
                                            <td><Badge bg="success">{t('odbierzDane.statuses.success')}</Badge></td>
                                            <td>{t('odbierzDane.logs.downloaded24')}</td>
                                        </tr>
                                        <tr>
                                            <td>14.05.2025 08:47</td>
                                            <td>{t('odbierzDane.operations.updateRates')}</td>
                                            <td>{t('odbierzDane.banks.nbp')}</td>
                                            <td><Badge bg="success">{t('odbierzDane.statuses.success')}</Badge></td>
                                            <td>{t('odbierzDane.logs.updated12')}</td>
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