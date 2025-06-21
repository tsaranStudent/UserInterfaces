import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Badge, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Rabaty = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-percent mb-2" aria-hidden="true" />
                        <h1 className="page-title">{t('rabaty.title')}</h1>
                        <p className="text-muted">{t('rabaty.subtitle')}</p>
                    </div>

                    {/* Pasek akcji i wyszukiwarka */}
                    <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                        <div>
                            <Button variant="success" className="me-2">
                                <i className="bi bi-percent me-1" aria-hidden="true" />
                                {t('rabaty.actions.new')}
                            </Button>
                            <Button variant="outline-primary">
                                <i className="bi bi-calendar-week me-1" aria-hidden="true" />
                                {t('rabaty.actions.planned')}
                            </Button>
                        </div>
                        <InputGroup className="search-input w-25">
                            <Form.Control placeholder={t('rabaty.search.placeholder')} />
                            <Button variant="outline-secondary">
                                <i className="bi bi-search" aria-hidden="true" />
                            </Button>
                        </InputGroup>
                    </div>

                    {/* Tabela rabatów */}
                    <Table bordered hover responsive className="data-table mb-4" role="grid">
                        <thead>
                            <tr>
                                <th scope="col">{t('rabaty.table.headers.code')}</th>
                                <th scope="col">{t('rabaty.table.headers.name')}</th>
                                <th scope="col">{t('rabaty.table.headers.value')}</th>
                                <th scope="col">{t('rabaty.table.headers.period')}</th>
                                <th scope="col">{t('rabaty.table.headers.status')}</th>
                                <th scope="col">{t('rabaty.table.headers.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RAB2025Q1</td>
                                <td>{t('rabaty.sample.newYearSale')}</td>
                                <td>15%</td>
                                <td>01.01.2025 - 31.03.2025</td>
                                <td>
                                    <Badge bg="success">
                                        <i className="bi bi-check-circle me-1" aria-hidden="true" />
                                        {t('rabaty.status.active')}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1" title={t('rabaty.actions.view')}>
                                        <i className="bi bi-eye" aria-hidden="true" />
                                    </Button>
                                    <Button variant="outline-secondary" size="sm" title={t('rabaty.actions.edit')}>
                                        <i className="bi bi-pencil" aria-hidden="true" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>WAKACJE25</td>
                                <td>{t('rabaty.sample.summerPromo')}</td>
                                <td>10%</td>
                                <td>01.06.2025 - 31.08.2025</td>
                                <td>
                                    <Badge bg="warning">
                                        <i className="bi bi-hourglass-split me-1" aria-hidden="true" />
                                        {t('rabaty.status.planned')}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1" title={t('rabaty.actions.view')}>
                                        <i className="bi bi-eye" aria-hidden="true" />
                                    </Button>
                                    <Button variant="outline-secondary" size="sm" title={t('rabaty.actions.edit')}>
                                        <i className="bi bi-pencil" aria-hidden="true" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* Accordion – formularz dodawania rabatu */}
                    <Accordion className="form-section mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <i className="bi bi-plus-circle me-2" aria-hidden="true" />
                                {t('rabaty.accordion.add')}
                            </Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="mb-3 g-3">
                                        <Col md={6}>
                                            <Form.Group controlId="rabatNazwa">
                                                <Form.Label htmlFor="rabatNazwa">
                                                    <i className="bi bi-tag me-1" aria-hidden="true" />
                                                    {t('rabaty.form.labels.name')}
                                                </Form.Label>
                                                <Form.Control id="rabatNazwa" type="text" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="rabatKod">
                                                <Form.Label htmlFor="rabatKod">
                                                    <i className="bi bi-upc-scan me-1" aria-hidden="true" />
                                                    {t('rabaty.form.labels.code')}
                                                </Form.Label>
                                                <Form.Control id="rabatKod" type="text" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3 g-3">
                                        <Col md={4}>
                                            <Form.Group controlId="rabatWartosc">
                                                <Form.Label htmlFor="rabatWartosc">
                                                    <i className="bi bi-cash-coin me-1" aria-hidden="true" />
                                                    {t('rabaty.form.labels.value')}
                                                </Form.Label>
                                                <InputGroup>
                                                    <Form.Control id="rabatWartosc" type="number" required />
                                                    <InputGroup.Text>%</InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="rabatStart">
                                                <Form.Label htmlFor="rabatStart">
                                                    <i className="bi bi-calendar-plus me-1" aria-hidden="true" />
                                                    {t('rabaty.form.labels.start')}
                                                </Form.Label>
                                                <Form.Control id="rabatStart" type="date" min="2025-01-01" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="rabatEnd">
                                                <Form.Label htmlFor="rabatEnd">
                                                    <i className="bi bi-calendar-check me-1" aria-hidden="true" />
                                                    {t('rabaty.form.labels.end')}
                                                </Form.Label>
                                                <Form.Control id="rabatEnd" type="date" min="2025-01-02" max="2025-12-31" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-x-circle me-1" aria-hidden="true" />
                                            {t('rabaty.form.buttons.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-save me-1" aria-hidden="true" />
                                            {t('rabaty.form.buttons.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie rabatów */}
                    <div className="summary-row">
                        <div className="summary-box">
                            <p>
                                <i className="bi bi-patch-check me-2" aria-hidden="true" />
                                <strong>{t('rabaty.summary.activeLabel')}</strong> {t('rabaty.summary.activeCount', { count: 3 })}
                            </p>
                            <p>
                                <i className="bi bi-calendar-week me-2" aria-hidden="true" />
                                <strong>{t('rabaty.summary.plannedLabel')}</strong> {t('rabaty.summary.plannedCount', { count: 5 })}
                            </p>
                            <Button variant="outline-primary" className="submit-btn mt-2">
                                <i className="bi bi-bar-chart-line me-1" aria-hidden="true" />
                                {t('rabaty.summary.annualReport')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
};
