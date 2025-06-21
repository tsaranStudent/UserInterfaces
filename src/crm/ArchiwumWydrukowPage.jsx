import React from 'react';
import {
    Container, Row, Col, Table, Tabs, Tab, Button,
    InputGroup, Form, Card, Badge
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const ArchiwumWydrukow = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-printer-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('archiwumWydrukow.title')}</h1>
                        <p className="text-muted">{t('archiwumWydrukow.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="wydruki" className="mb-4">
                        <Tab eventKey="wydruki" title={<><i className="bi bi-clock-history me-1" />{t('archiwumWydrukow.tabs.history')}</>}>
                            <div className="actions-bar form-section d-flex justify-content-between align-items-center">
                                <div className="actions-bar-start">
                                    <Form.Control type="date" max="2025-12-31" style={{ maxWidth: '180px' }} />
                                    <Form.Select style={{ maxWidth: '180px' }}>
                                        <option>{t('archiwumWydrukow.filters.allTypes')}</option>
                                        <option>{t('archiwumWydrukow.types.invoices')}</option>
                                        <option>{t('archiwumWydrukow.types.offers')}</option>
                                        <option>{t('archiwumWydrukow.types.orders')}</option>
                                    </Form.Select>
                                </div>
                                <InputGroup className="search-input">
                                    <Form.Control placeholder={t('archiwumWydrukow.search.placeholder')} />
                                    <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                                </InputGroup>
                            </div>

                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th><i className="bi bi-calendar3" /> {t('archiwumWydrukow.table.date')}</th>
                                        <th><i className="bi bi-file-earmark" /> {t('archiwumWydrukow.table.type')}</th>
                                        <th><i className="bi bi-file-earmark-pdf" /> {t('archiwumWydrukow.table.file')}</th>
                                        <th><i className="bi bi-person" /> {t('archiwumWydrukow.table.user')}</th>
                                        <th><i className="bi bi-hdd" /> {t('archiwumWydrukow.table.size')}</th>
                                        <th><i className="bi bi-tools" /> {t('archiwumWydrukow.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            data: '12.01.2025',
                                            typ: t('archiwumWydrukow.types.invoices'),
                                            badge: 'primary',
                                            plik: 'FV_001.pdf',
                                            user: 'j.kowalski',
                                            size: '240 KB'
                                        },
                                        {
                                            data: '05.03.2025',
                                            typ: t('archiwumWydrukow.types.orders'),
                                            badge: 'success',
                                            plik: 'ZO_013.pdf',
                                            user: 'a.nowak',
                                            size: '180 KB'
                                        },
                                        {
                                            data: '28.04.2025',
                                            typ: t('archiwumWydrukow.types.offers'),
                                            badge: 'warning',
                                            plik: 'OF_010.pdf',
                                            user: 'm.wisniewska',
                                            size: '210 KB'
                                        }
                                    ].map((r, i) => (
                                        <tr key={i}>
                                            <td>{r.data}</td>
                                            <td><Badge bg={r.badge}>{r.typ}</Badge></td>
                                            <td>{r.plik}</td>
                                            <td>{r.user}</td>
                                            <td>{r.size}</td>
                                            <td>
                                                <Button size="sm" variant="outline-primary" className="me-1" title={t('archiwumWydrukow.buttons.download')}>
                                                    <i className="bi bi-download" />
                                                </Button>
                                                <Button size="sm" variant="outline-danger" title={t('archiwumWydrukow.buttons.delete')}>
                                                    <i className="bi bi-trash" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="statystyki" title={<><i className="bi bi-graph-up-arrow me-1" />{t('archiwumWydrukow.tabs.statistics')}</>}>
                            <Row className="form-section">
                                <Col md={6}>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <h5><i className="bi bi-bar-chart-fill me-1" />{t('archiwumWydrukow.statistics.summary')}</h5>
                                            <Table bordered className="data-table mt-3">
                                                <tbody>
                                                    <tr><td>{t('archiwumWydrukow.statistics.totalPrints')}</td><td>128</td></tr>
                                                    <tr><td>{t('archiwumWydrukow.statistics.inMay2025')}</td><td>34</td></tr>
                                                    <tr><td>{t('archiwumWydrukow.statistics.dominantType')}</td><td>{t('archiwumWydrukow.types.invoices')} (64%)</td></tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card>
                                        <Card.Body>
                                            <h5><i className="bi bi-clock me-1" />{t('archiwumWydrukow.statistics.recentPrints')}</h5>
                                            {[
                                                { plik: 'FV_051.pdf', data: '12.05.2025', progress: 95 },
                                                { plik: 'Raport_Q1.pdf', data: '04.05.2025', progress: 75 },
                                                { plik: 'OF_2025_023.pdf', data: '29.04.2025', progress: 60 }
                                            ].map((item, i) => (
                                                <div key={i} className="mb-3">
                                                    <div className="d-flex justify-content-between small">
                                                        <span>{item.plik}</span><span>{item.data}</span>
                                                    </div>
                                                    <div className="progress" style={{ height: '5px' }}>
                                                        <div className="progress-bar bg-info" style={{ width: `${item.progress}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="ustawienia" title={<><i className="bi bi-gear-fill me-1" />{t('archiwumWydrukow.tabs.settings')}</>}>
                            <Form className="form-section">
                                <Form.Group className="mb-3">
                                    <Form.Label><i className="bi bi-hourglass-split me-1" /> {t('archiwumWydrukow.settings.retentionTime')}</Form.Label>
                                    <Form.Select defaultValue="6">
                                        <option value="1">{t('archiwumWydrukow.settings.1month')}</option>
                                        <option value="3">{t('archiwumWydrukow.settings.3months')}</option>
                                        <option value="6">{t('archiwumWydrukow.settings.6months')}</option>
                                        <option value="12">{t('archiwumWydrukow.settings.1year')}</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check
                                        label={t('archiwumWydrukow.settings.enableAutoCleanup')}
                                        defaultChecked
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label><i className="bi bi-database me-1" /> {t('archiwumWydrukow.settings.archiveSizeLimit')}</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="number" defaultValue="500" />
                                        <InputGroup.Text>MB</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-x-lg me-1" />{t('archiwumWydrukow.buttons.cancel')}
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-check-circle me-1" />{t('archiwumWydrukow.buttons.save')}
                                    </Button>
                                </div>
                            </Form>
                        </Tab>
                    </Tabs>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <div className="summary-text">
                            <i className="bi bi-hdd-fill me-1" />
                            <strong>{t('archiwumWydrukow.summary.spaceUsage')}:</strong> 132 MB / 500 MB
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-calendar-check-fill me-1" />
                            <strong>{t('archiwumWydrukow.summary.lastSave')}:</strong> 12.05.2025
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};