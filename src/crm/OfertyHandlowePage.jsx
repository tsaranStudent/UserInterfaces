import React from 'react';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Card, Badge, ProgressBar
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const OfertyHandlowe = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-briefcase icon-unified mb-2" />
                        <h1 className="page-title">{t('ofertyHandlowe.title')}</h1>
                        <p className="text-muted">{t('ofertyHandlowe.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="aktywne" className="mb-4">
                        <Tab eventKey="aktywne" title={<><i className="bi bi-list-check me-1" />{t('ofertyHandlowe.tabs.active')}</>}>
                            {/* Pasek akcji */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-plus-circle me-1" /> {t('ofertyHandlowe.buttons.new')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-clock-history me-1" /> {t('ofertyHandlowe.buttons.history')}
                                    </Button>
                                </div>
                                <InputGroup className="search-input w-25">
                                    <Form.Control placeholder={t('ofertyHandlowe.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>

                            {/* Tabela ofert */}
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th><i className="bi bi-hash" /> {t('ofertyHandlowe.table.number')}</th>
                                        <th><i className="bi bi-person-badge" /> {t('ofertyHandlowe.table.client')}</th>
                                        <th><i className="bi bi-calendar" /> {t('ofertyHandlowe.table.date')}</th>
                                        <th><i className="bi bi-calendar-check" /> {t('ofertyHandlowe.table.validity')}</th>
                                        <th><i className="bi bi-cash" /> {t('ofertyHandlowe.table.amount')}</th>
                                        <th><i className="bi bi-info-circle" /> {t('ofertyHandlowe.table.status')}</th>
                                        <th><i className="bi bi-tools" /> {t('ofertyHandlowe.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { nr: 'OF/2025/03/001', klient: t('ofertyHandlowe.example.abc'), data: '01.03.2025', waznosc: '31.03.2025', kwota: '12 450,00 zł', status: t('ofertyHandlowe.status.sent'), badge: 'warning' },
                                        { nr: 'OF/2025/02/045', klient: t('ofertyHandlowe.example.xyz'), data: '15.02.2025', waznosc: '15.03.2025', kwota: '28 700,00 zł', status: t('ofertyHandlowe.status.accepted'), badge: 'success' },
                                        { nr: 'OF/2025/01/010', klient: t('ofertyHandlowe.example.techmedia'), data: '02.01.2025', waznosc: '31.01.2025', kwota: '5 900,00 zł', status: t('ofertyHandlowe.status.inPreparation'), badge: 'secondary' }
                                    ].map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.nr}</td>
                                            <td>{row.klient}</td>
                                            <td>{row.data}</td>
                                            <td>{row.waznosc}</td>
                                            <td>{row.kwota}</td>
                                            <td><Badge bg={row.badge}>{row.status}</Badge></td>
                                            <td>
                                                <Button variant="outline-primary" size="sm" className="me-1">
                                                    <i className="bi bi-eye" />
                                                </Button>
                                                {row.badge === 'secondary' ? (
                                                    <Button variant="outline-secondary" size="sm">
                                                        <i className="bi bi-pencil" />
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant={row.badge === 'success' ? 'outline-info' : 'outline-success'}
                                                        size="sm"
                                                    >
                                                        <i className={`bi ${row.badge === 'success' ? 'bi-box-arrow-in-right' : 'bi-check-circle'}`} />
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line-fill me-1" />{t('ofertyHandlowe.tabs.statistics')}</>}>
                            <div className="form-section mt-3">
                                <Row>
                                    <Col md={6}>
                                        <Card className="mb-4">
                                            <Card.Body>
                                                <h5 className="mb-3"><i className="bi bi-graph-up me-1" />{t('ofertyHandlowe.statistics.effectiveness')}</h5>
                                                {[
                                                    { label: t('ofertyHandlowe.status.accepted'), val: 32, variant: 'success' },
                                                    { label: t('ofertyHandlowe.status.rejected'), val: 18, variant: 'danger' },
                                                    { label: t('ofertyHandlowe.status.inProgress'), val: 50, variant: 'warning' }
                                                ].map((item, idx) => (
                                                    <div className="mb-3" key={idx}>
                                                        <div className="d-flex justify-content-between mb-1">
                                                            <span>{item.label}</span><span>{item.val}%</span>
                                                        </div>
                                                        <ProgressBar variant={item.variant} now={item.val} />
                                                    </div>
                                                ))}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6}>
                                        <Card>
                                            <Card.Body>
                                                <h5 className="mb-3"><i className="bi bi-star-fill me-1" />{t('ofertyHandlowe.statistics.topOffers')}</h5>
                                                <Table bordered>
                                                    <thead>
                                                        <tr>
                                                            <th>{t('ofertyHandlowe.table.number')}</th>
                                                            <th>{t('ofertyHandlowe.table.client')}</th>
                                                            <th>{t('ofertyHandlowe.table.amount')}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>OF/2025/01/120</td><td>{t('ofertyHandlowe.example.firmaTech')}</td><td>45 200,00 zł</td></tr>
                                                        <tr><td>OF/2025/02/045</td><td>{t('ofertyHandlowe.example.xyz')}</td><td>28 700,00 zł</td></tr>
                                                        <tr><td>OF/2025/01/050</td><td>{t('ofertyHandlowe.example.alpha')}</td><td>21 350,00 zł</td></tr>
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <div className="summary-text">
                            <i className="bi bi-folder2-open me-1" />
                            <strong>{t('ofertyHandlowe.summary.activeOffers')}:</strong> 24
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-currency-exchange me-1" />
                            <strong>{t('ofertyHandlowe.summary.inProgressValue')}:</strong> 156 800,00 zł
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};