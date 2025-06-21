import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, Card, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const FakturyCykliczne = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener */}
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-receipt-cutoff icon-unified mb-2" />
                        <h1 className="page-title">{t('fakturyCykliczne.title')}</h1>
                        <p className="text-muted">{t('fakturyCykliczne.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="aktywne" className="mb-4">
                        <Tab eventKey="aktywne" title={<><i className="bi bi-check-circle-fill me-1" />{t('fakturyCykliczne.tabs.active')}</>}>
                            {/* Pasek akcji */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-file-earmark-plus me-1" /> {t('fakturyCykliczne.buttons.new')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-clock-history me-1" /> {t('fakturyCykliczne.buttons.history')}
                                    </Button>
                                </div>
                                <InputGroup className="search-input w-25">
                                    <Form.Control placeholder={t('fakturyCykliczne.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>

                            {/* Tabela faktur */}
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th><i className="bi bi-hash" /> {t('fakturyCykliczne.table.number')}</th>
                                        <th><i className="bi bi-person-vcard" /> {t('fakturyCykliczne.table.contractor')}</th>
                                        <th><i className="bi bi-calendar2-week" /> {t('fakturyCykliczne.table.period')}</th>
                                        <th><i className="bi bi-currency-exchange" /> {t('fakturyCykliczne.table.amount')}</th>
                                        <th><i className="bi bi-calendar-event" /> {t('fakturyCykliczne.table.next')}</th>
                                        <th><i className="bi bi-info-circle" /> {t('fakturyCykliczne.table.status')}</th>
                                        <th><i className="bi bi-tools" /> {t('fakturyCykliczne.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FV-CYC/001/2025</td>
                                        <td>{t('fakturyCykliczne.example.softnet')}</td>
                                        <td>{t('fakturyCykliczne.periods.monthly')}</td>
                                        <td>2 300,00 zł</td>
                                        <td>15.06.2025</td>
                                        <td><Badge bg="success"><i className="bi bi-check-circle me-1" /> {t('fakturyCykliczne.status.active')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                            <Button variant="outline-danger" size="sm">
                                                <i className="bi bi-x-circle" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>FV-CYC/002/2025</td>
                                        <td>{t('fakturyCykliczne.example.deltacom')}</td>
                                        <td>{t('fakturyCykliczne.periods.quarterly')}</td>
                                        <td>6 750,00 zł</td>
                                        <td>30.07.2025</td>
                                        <td><Badge bg="success"><i className="bi bi-check-circle me-1" /> {t('fakturyCykliczne.status.active')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                            <Button variant="outline-danger" size="sm">
                                                <i className="bi bi-x-circle" />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="zarchiwizowane" title={<><i className="bi bi-archive-fill me-1" />{t('fakturyCykliczne.tabs.archived')}</>}>
                            <div className="form-section mt-3">
                                <Table bordered hover className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('fakturyCykliczne.table.number')}</th>
                                            <th>{t('fakturyCykliczne.table.contractor')}</th>
                                            <th>{t('fakturyCykliczne.table.period')}</th>
                                            <th>{t('fakturyCykliczne.table.amount')}</th>
                                            <th>{t('fakturyCykliczne.table.ended')}</th>
                                            <th>{t('fakturyCykliczne.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>FV-CYC/015/2024</td>
                                            <td>{t('fakturyCykliczne.example.testowa')}</td>
                                            <td>{t('fakturyCykliczne.periods.monthly')}</td>
                                            <td>820,00 zł</td>
                                            <td>31.12.2024</td>
                                            <td>
                                                <Button variant="outline-secondary" size="sm">
                                                    <i className="bi bi-arrow-counterclockwise me-1" /> {t('fakturyCykliczne.buttons.restore')}
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>

                        <Tab eventKey="nowa" title={<><i className="bi bi-file-earmark-plus me-1" />{t('fakturyCykliczne.tabs.addNew')}</>}>
                            <div className="form-section mt-3">
                                <Card>
                                    <Card.Body>
                                        <Form>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label><i className="bi bi-person-lines-fill me-1" /> {t('fakturyCykliczne.form.contractor')}</Form.Label>
                                                        <Form.Select>
                                                            <option>{t('fakturyCykliczne.form.select')}</option>
                                                            <option>{t('fakturyCykliczne.example.companyA')}</option>
                                                            <option>{t('fakturyCykliczne.example.companyB')}</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group>
                                                        <Form.Label><i className="bi bi-repeat me-1" /> {t('fakturyCykliczne.form.period')}</Form.Label>
                                                        <Form.Select>
                                                            <option>{t('fakturyCykliczne.periods.monthly')}</option>
                                                            <option>{t('fakturyCykliczne.periods.quarterly')}</option>
                                                            <option>{t('fakturyCykliczne.periods.yearly')}</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Col md={4}>
                                                    <Form.Label><i className="bi bi-calendar-range me-1" /> {t('fakturyCykliczne.form.startDate')}</Form.Label>
                                                    <Form.Control type="date" />
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Label><i className="bi bi-calendar-event me-1" /> {t('fakturyCykliczne.form.nextInvoice')}</Form.Label>
                                                    <Form.Control type="date" />
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Label><i className="bi bi-cash-coin me-1" /> {t('fakturyCykliczne.form.netAmount')}</Form.Label>
                                                    <Form.Control type="number" />
                                                </Col>
                                            </Row>

                                            <Form.Group className="mb-3">
                                                <Form.Label><i className="bi bi-card-text me-1" /> {t('fakturyCykliczne.form.notes')}</Form.Label>
                                                <Form.Control as="textarea" rows={2} />
                                            </Form.Group>

                                            <div className="d-flex justify-content-end gap-2">
                                                <Button variant="outline-secondary">
                                                    <i className="bi bi-x-lg me-1" /> {t('fakturyCykliczne.buttons.cancel')}
                                                </Button>
                                                <Button variant="primary">
                                                    <i className="bi bi-check-circle me-1" /> {t('fakturyCykliczne.buttons.saveInvoice')}
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <div className="summary-text">
                            <i className="bi bi-bar-chart me-1" />
                            <strong>{t('fakturyCykliczne.summary.activeCount')}:</strong> 8
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-currency-dollar me-1" />
                            <strong>{t('fakturyCykliczne.summary.monthlySum')}:</strong> 18 420,00 zł
                        </div>
                        <div className="summary-text">
                            <i className="bi bi-calendar-check me-1" />
                            <strong>{t('fakturyCykliczne.summary.lastUpdate')}:</strong> 12.06.2025
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};