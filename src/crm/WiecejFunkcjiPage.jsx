import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, Card, Badge, ListGroup
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const WiecejFunkcji = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-sliders icon-unified mb-2" />
                    <h1 className="page-title">{t('wiecejFunkcji.title')}</h1>
                    <p className="text-muted">{t('wiecejFunkcji.subtitle')}</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="raporty" className="mb-4 module-tabs">
                    {/* Raporty */}
                    <Tab eventKey="raporty" title={<><i className="bi bi-file-bar-graph me-1" />{t('wiecejFunkcji.tabs.reports')}</>}>
                        <Card className="shadow-sm mb-4">
                            <Card.Body>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Label><i className="bi bi-filter-circle me-1" />{t('wiecejFunkcji.reports.type')}</Form.Label>
                                        <Form.Select>
                                            <option>{t('wiecejFunkcji.reportTypes.sales')}</option>
                                            <option>{t('wiecejFunkcji.reportTypes.customerAnalysis')}</option>
                                            <option>{t('wiecejFunkcji.reportTypes.productivity')}</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label><i className="bi bi-calendar-date me-1" />{t('wiecejFunkcji.reports.dateFrom')}</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-01-01" />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Label><i className="bi bi-calendar2-check me-1" />{t('wiecejFunkcji.reports.dateTo')}</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-31" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('wiecejFunkcji.reports.reportName')}</th>
                                    <th>{t('wiecejFunkcji.reports.generationDate')}</th>
                                    <th>{t('wiecejFunkcji.reports.status')}</th>
                                    <th>{t('wiecejFunkcji.reports.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('wiecejFunkcji.examples.salesQ1')}</td>
                                    <td>2025-04-01</td>
                                    <td><Badge bg="success">{t('wiecejFunkcji.status.ready')}</Badge></td>
                                    <td><Button variant="outline-primary" size="sm">{t('wiecejFunkcji.buttons.download')}</Button></td>
                                </tr>
                                <tr>
                                    <td>{t('wiecejFunkcji.examples.vipAnalysis')}</td>
                                    <td>2025-05-15</td>
                                    <td><Badge bg="warning">{t('wiecejFunkcji.status.inProgress')}</Badge></td>
                                    <td><Button variant="outline-secondary" size="sm" disabled>{t('wiecejFunkcji.status.pending')}</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    {/* Harmonogram */}
                    <Tab eventKey="harmonogram" title={<><i className="bi bi-calendar3 me-1" />{t('wiecejFunkcji.tabs.schedule')}</>}>
                        <Accordion defaultActiveKey="0" className="mb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><i className="bi bi-funnel me-1" />{t('wiecejFunkcji.schedule.filters')}</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{t('wiecejFunkcji.schedule.dateRange')}</Form.Label>
                                                <Form.Select>
                                                    <option>{t('wiecejFunkcji.schedule.next30Days')}</option>
                                                    <option>{t('wiecejFunkcji.schedule.may2025')}</option>
                                                    <option>{t('wiecejFunkcji.schedule.custom')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{t('wiecejFunkcji.schedule.eventType')}</Form.Label>
                                                <Form.Select>
                                                    <option>{t('wiecejFunkcji.schedule.all')}</option>
                                                    <option>{t('wiecejFunkcji.schedule.meetings')}</option>
                                                    <option>{t('wiecejFunkcji.schedule.tasks')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{t('wiecejFunkcji.schedule.priority')}</Form.Label>
                                                <Form.Select>
                                                    <option>{t('wiecejFunkcji.schedule.all')}</option>
                                                    <option>{t('wiecejFunkcji.schedule.high')}</option>
                                                    <option>{t('wiecejFunkcji.schedule.medium')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <h5 className="mb-3"><i className="bi bi-clock-history me-1" />{t('wiecejFunkcji.schedule.upcomingEvents')}</h5>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="py-2 border-bottom">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <Badge bg="primary" className="me-2">{t('wiecejFunkcji.schedule.meeting')}</Badge>
                                                <strong>{t('wiecejFunkcji.examples.clientPresentation')}</strong>
                                            </div>
                                            <span>2025-06-05, 10:00</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="py-2">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <Badge bg="success" className="me-2">{t('wiecejFunkcji.schedule.task')}</Badge>
                                                <strong>{t('wiecejFunkcji.examples.monthEnd')}</strong>
                                            </div>
                                            <span>2025-05-31, 23:59</span>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Tab>
                </Tabs>

                {/* Akcje główne */}
                <div className="actions-bar mt-4 d-flex justify-content-between">
                    <div>
                        <Button variant="primary" className="me-2">
                            <i className="bi bi-bar-chart-line me-1" />{t('wiecejFunkcji.buttons.generateReport')}
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-box-arrow-down me-1" />{t('wiecejFunkcji.buttons.exportData')}
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline-success">
                            <i className="bi bi-save me-1" />{t('wiecejFunkcji.buttons.saveSettings')}
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};