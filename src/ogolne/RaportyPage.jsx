import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Tabs, Tab, Form, Table, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Raporty = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-bar-chart-line icon-unified mb-2" />
                <h1 className="page-title">{t('raporty.title')}</h1>
                <p className="text-muted">{t('raporty.subtitle')}</p>
            </div>

            {/* Zakładki z raportami sprzedażowymi i magazynowymi */}
            <Tabs defaultActiveKey="sales" className="mb-4">
                <Tab eventKey="sales" title={t('raporty.tabs.sales')}>
                    <div className="form-section mt-3">
                        <Row className="mb-3">
                            <Col md={3}>
                                <Form.Group controlId="rapSalesType">
                                    <Form.Label>
                                        <i className="bi bi-archive me-1" /> {t('raporty.form.labels.reportType')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option>{t('raporty.reportTypes.monthly')}</option>
                                        <option>{t('raporty.reportTypes.quarterly')}</option>
                                        <option>{t('raporty.reportTypes.yearly')}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="rapSalesFrom">
                                    <Form.Label>
                                        <i className="bi bi-calendar me-1" /> {t('raporty.form.labels.fromDate')}
                                    </Form.Label>
                                    <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="rapSalesTo">
                                    <Form.Label>
                                        <i className="bi bi-calendar me-1" /> {t('raporty.form.labels.toDate')}
                                    </Form.Label>
                                    <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                                </Form.Group>
                            </Col>
                            <Col md={3} className="d-flex align-items-end">
                                <Button variant="primary" className="w-100">
                                    <i className="bi bi-bar-chart-steps me-1" /> {t('raporty.actions.generate')}
                                </Button>
                            </Col>
                        </Row>

                        {/* Tabela wygenerowanych raportów */}
                        <Table bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('raporty.table.headers.type')}</th>
                                    <th>{t('raporty.table.headers.period')}</th>
                                    <th>{t('raporty.table.headers.generationDate')}</th>
                                    <th>{t('raporty.table.headers.status')}</th>
                                    <th>{t('raporty.table.headers.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('raporty.reportTypes.monthly')}</td>
                                    <td>{t('raporty.periods.january2025')}</td>
                                    <td>01.02.2025</td>
                                    <td>
                                        <Badge bg="success">
                                            <i className="bi bi-check-circle me-1" /> {t('raporty.status.ready')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" title={t('raporty.actions.download')}>
                                            <i className="bi bi-download" /> {t('raporty.actions.download')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t('raporty.reportTypes.quarterly')}</td>
                                    <td>{t('raporty.periods.q1_2025')}</td>
                                    <td>03.04.2025</td>
                                    <td>
                                        <Badge bg="success">
                                            <i className="bi bi-check-circle me-1" /> {t('raporty.status.ready')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" title={t('raporty.actions.download')}>
                                            <i className="bi bi-download" /> {t('raporty.actions.download')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t('raporty.reportTypes.yearly')}</td>
                                    <td>2024</td>
                                    <td>02.01.2025</td>
                                    <td>
                                        <Badge bg="warning">
                                            <i className="bi bi-hourglass-split me-1" /> {t('raporty.status.inProgress')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-secondary" size="sm" title={t('raporty.status.pending')} disabled>
                                            <i className="bi bi-clock" /> {t('raporty.status.pending')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                <Tab eventKey="warehouse" title={t('raporty.tabs.warehouse')}>
                    <div className="form-section mt-3">
                        <Row className="mb-3">
                            <Col md={5}>
                                <Form.Group controlId="rapWarehouseProduct">
                                    <Form.Label>
                                        <i className="bi bi-box me-1" /> {t('raporty.form.labels.product')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option>{t('raporty.products.monitor')}</option>
                                        <option>{t('raporty.products.printer')}</option>
                                        <option>{t('raporty.products.paper')}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={5}>
                                <Form.Group controlId="rapWarehouseType">
                                    <Form.Label>
                                        <i className="bi bi-list-columns me-1" /> {t('raporty.form.labels.reportKind')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option>{t('raporty.warehouseReports.stock')}</option>
                                        <option>{t('raporty.warehouseReports.movements')}</option>
                                        <option>{t('raporty.warehouseReports.receipts')}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={2} className="d-flex align-items-end">
                                <Button variant="primary" className="w-100">
                                    <i className="bi bi-clipboard-data me-1" /> {t('raporty.actions.generate')}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Tab>
            </Tabs>

            {/* Zaplanowane raporty */}
            <div className="form-section">
                <h5>
                    <i className="bi bi-clock-history me-2" /> {t('raporty.scheduledReports.title')}
                </h5>
                <Table bordered responsive className="data-table">
                    <thead>
                        <tr>
                            <th>{t('raporty.scheduledReports.headers.name')}</th>
                            <th>{t('raporty.scheduledReports.headers.frequency')}</th>
                            <th>{t('raporty.scheduledReports.headers.recipients')}</th>
                            <th>{t('raporty.scheduledReports.headers.nextExecution')}</th>
                            <th>{t('raporty.scheduledReports.headers.actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{t('raporty.scheduledReports.types.weekly')}</td>
                            <td>{t('raporty.scheduledReports.frequencies.weekly')}</td>
                            <td>kierownik@firma.pl</td>
                            <td>15.01.2025</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" title={t('raporty.actions.edit')}>
                                    <i className="bi bi-pencil" /> {t('raporty.actions.edit')}
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>{t('raporty.scheduledReports.types.monthly')}</td>
                            <td>{t('raporty.scheduledReports.frequencies.monthly')}</td>
                            <td>zarzad@firma.pl</td>
                            <td>01.02.2025</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" title={t('raporty.actions.edit')}>
                                    <i className="bi bi-pencil" /> {t('raporty.actions.edit')}
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>{t('raporty.scheduledReports.types.yearly')}</td>
                            <td>{t('raporty.scheduledReports.frequencies.yearly')}</td>
                            <td>audyt@firma.pl</td>
                            <td>01.01.2026</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" title={t('raporty.actions.edit')}>
                                    <i className="bi bi-pencil" /> {t('raporty.actions.edit')}
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* Podsumowanie */}
            <div className="summary-box mt-4">
                <p>
                    <i className="bi bi-bar-chart-line me-2" />
                    <strong>{t('raporty.summary.generated')}</strong> {t('raporty.summary.generatedCount')}
                </p>
                <p>
                    <i className="bi bi-clock me-2" />
                    <strong>{t('raporty.summary.scheduled')}</strong> {t('raporty.summary.scheduledCount')}
                </p>
                <Button variant="outline-primary" className="submit-btn mt-2">
                    <i className="bi bi-clock-history me-1" /> {t('raporty.actions.reportHistory')}
                </Button>
            </div>
        </Container>
    );
};