import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Tabs, Tab, Card, Button,
    Form, Table, Row, Col, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const DeklaracjePlikiJPK_V7 = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-code me-1" aria-hidden="true" />
                        {t('deklaracjePlikiJPK_V7.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('deklaracjePlikiJPK_V7.subtitle')}
                    </p>
                </div>

                <Tabs defaultActiveKey="lista" className="module-tabs mb-4">
                    <Tab eventKey="lista" title={<span><i className="bi bi-list-task me-1" />{t('deklaracjePlikiJPK_V7.tabs.lista')}</span>}>
                        <div className="actions-bar mb-3">
                            <div className="actions-bar-start">
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />
                                    {t('deklaracjePlikiJPK_V7.actions.newFile')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-upload me-1" />
                                    {t('deklaracjePlikiJPK_V7.actions.importFile')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Select className="me-2" style={{ width: '180px' }}>
                                    <option>{t('deklaracjePlikiJPK_V7.selectors.allMonths')}</option>
                                    <option>{t('deklaracjePlikiJPK_V7.selectors.may2025')}</option>
                                    <option>{t('deklaracjePlikiJPK_V7.selectors.apr2025')}</option>
                                </Form.Select>
                                <Form.Control
                                    placeholder={t('deklaracjePlikiJPK_V7.actions.filterPlaceholder')}
                                    className="search-input"
                                />
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-file-earmark me-1" />{t('deklaracjePlikiJPK_V7.table.fileName')}</th>
                                    <th><i className="bi bi-calendar3 me-1" />{t('deklaracjePlikiJPK_V7.table.period')}</th>
                                    <th><i className="bi bi-clock me-1" />{t('deklaracjePlikiJPK_V7.table.creationDate')}</th>
                                    <th><i className="bi bi-hdd me-1" />{t('deklaracjePlikiJPK_V7.table.size')}</th>
                                    <th><i className="bi bi-patch-check me-1" />{t('deklaracjePlikiJPK_V7.table.status')}</th>
                                    <th><i className="bi bi-tools me-1" />{t('deklaracjePlikiJPK_V7.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JPK_V7_05_2025.xml</td>
                                    <td>{t('deklaracjePlikiJPK_V7.selectors.may2025')}</td>
                                    <td>25.05.2025 14:30</td>
                                    <td>245 KB</td>
                                    <td><Badge bg="success">{t('deklaracjePlikiJPK_V7.statuses.uploaded')}</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">
                                            <i className="bi bi-download me-1" />{t('deklaracjePlikiJPK_V7.actionsCell.download')}
                                        </Button>
                                        <Button variant="outline-info" size="sm">
                                            <i className="bi bi-info-circle me-1" />{t('deklaracjePlikiJPK_V7.actionsCell.details')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>JPK_V7_04_2025.xml</td>
                                    <td>{t('deklaracjePlikiJPK_V7.selectors.apr2025')}</td>
                                    <td>25.04.2025 11:15</td>
                                    <td>198 KB</td>
                                    <td><Badge bg="warning">{t('deklaracjePlikiJPK_V7.statuses.verification')}</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">
                                            <i className="bi bi-download me-1" />{t('deklaracjePlikiJPK_V7.actionsCell.download')}
                                        </Button>
                                        <Button variant="outline-info" size="sm">
                                            <i className="bi bi-info-circle me-1" />{t('deklaracjePlikiJPK_V7.actionsCell.details')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="nowy" title={<span><i className="bi bi-file-earmark-plus me-1" />{t('deklaracjePlikiJPK_V7.tabs.nowy')}</span>}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>{t('deklaracjePlikiJPK_V7.newForm.fields.period.label')}</Form.Label>
                                                <Form.Select required>
                                                    {t('deklaracjePlikiJPK_V7.newForm.fields.period.options', { returnObjects: true }).map(opt => (
                                                        <option key={opt}>{opt}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>{t('deklaracjePlikiJPK_V7.newForm.fields.paymentDue.label')}</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    defaultValue={t('deklaracjePlikiJPK_V7.newForm.fields.paymentDue.default')}
                                                    disabled
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>{t('deklaracjePlikiJPK_V7.newForm.fields.declarationType.label')}</Form.Label>
                                                <Form.Select required>
                                                    {t('deklaracjePlikiJPK_V7.newForm.fields.declarationType.options', { returnObjects: true }).map(opt => (
                                                        <option key={opt}>{opt}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>{t('deklaracjePlikiJPK_V7.newForm.fields.schemaVersion.label')}</Form.Label>
                                                <Form.Select required>
                                                    {t('deklaracjePlikiJPK_V7.newForm.fields.schemaVersion.options', { returnObjects: true }).map(opt => (
                                                        <option key={opt}>{opt}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>{t('deklaracjePlikiJPK_V7.newForm.fields.notes.label')}</Form.Label>
                                        <Form.Control as="textarea" rows={2} />
                                    </Form.Group>

                                    <div className="actions-bar-end mt-4">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-circle me-1" />{t('deklaracjePlikiJPK_V7.newForm.buttons.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-gear-fill me-1" />{t('deklaracjePlikiJPK_V7.newForm.buttons.generate')}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="weryfikacja" title={<span><i className="bi bi-shield-check me-1" />{t('deklaracjePlikiJPK_V7.tabs.weryfikacja')}</span>}>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>{t('deklaracjePlikiJPK_V7.verification.selectFile.label')}</Form.Label>
                                    <Form.Select>
                                        {t('deklaracjePlikiJPK_V7.verification.selectFile.options', { returnObjects: true }).map(opt => (
                                            <option key={opt}>{opt}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Table bordered className="mb-4 data-table">
                                    <thead>
                                        <tr>
                                            <th><i className="bi bi-box-seam me-1" />{t('deklaracjePlikiJPK_V7.verification.table.element')}</th>
                                            <th><i className="bi bi-hash me-1" />{t('deklaracjePlikiJPK_V7.verification.table.count')}</th>
                                            <th><i className="bi bi-currency-exchange me-1" />{t('deklaracjePlikiJPK_V7.verification.table.netValue')}</th>
                                            <th><i className="bi bi-percent me-1" />{t('deklaracjePlikiJPK_V7.verification.table.vat')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sprzedaż 23%</td>
                                            <td>24</td>
                                            <td>15 200,00 PLN</td>
                                            <td>3 496,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Zakupy 8%</td>
                                            <td>12</td>
                                            <td>8 500,00 PLN</td>
                                            <td>680,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>{t('deklaracjePlikiJPK_V7.verification.summary.vatDue')}:</strong> 5 451,00 PLN
                                    </div>
                                    <Button variant="primary" className="me-2">
                                        <i className="bi bi-search-check me-1" />{t('deklaracjePlikiJPK_V7.verification.summary.verifyBtn')}
                                    </Button>
                                    <Button variant="success">
                                        <i className="bi bi-send-check me-1" />{t('deklaracjePlikiJPK_V7.verification.summary.sendBtn')}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tab>

                    <Tab eventKey="statystyki" title={<span><i className="bi bi-bar-chart-line me-1" />{t('deklaracjePlikiJPK_V7.tabs.statystyki')}</span>}>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h5 className="card-title">
                                            <i className="bi bi-calendar4-week me-1" />{t('deklaracjePlikiJPK_V7.statistics.yearlyTitle')}
                                        </h5>
                                        <Table borderless className="data-table">
                                            <tbody>
                                                <tr>
                                                    <td><i className="bi bi-file-earmark-text me-1" />{t('deklaracjePlikiJPK_V7.statistics.yearly.declarations')}</td>
                                                    <td className="text-end">5/12</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="bi bi-stopwatch me-1" />{t('deklaracjePlikiJPK_V7.statistics.yearly.avgTime')}</td>
                                                    <td className="text-end">2 min 15 s</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="bi bi-file-earmark-zip me-1" />{t('deklaracjePlikiJPK_V7.statistics.yearly.avgSize')}</td>
                                                    <td className="text-end">215 KB</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="shadow-sm h-100">
                                    <Card.Body>
                                        <h5 className="card-title">
                                            <i className="bi bi-layers-half me-1" />{t('deklaracjePlikiJPK_V7.statistics.filesStatusTitle')}
                                        </h5>
                                        <Table borderless className="data-table">
                                            <tbody>
                                                <tr>
                                                    <td><i className="bi bi-cloud-arrow-up me-1" />{t('deklaracjePlikiJPK_V7.statistics.filesStatus.uploaded')}</td>
                                                    <td className="text-end">4</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="bi bi-shield-check me-1" />{t('deklaracjePlikiJPK_V7.statistics.filesStatus.verification')}</td>
                                                    <td className="text-end">1</td>
                                                </tr>
                                                <tr>
                                                    <td><i className="bi bi-exclamation-circle me-1" />{t('deklaracjePlikiJPK_V7.statistics.filesStatus.errors')}</td>
                                                    <td className="text-end">0</td>
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
