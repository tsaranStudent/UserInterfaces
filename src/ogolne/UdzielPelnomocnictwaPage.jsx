import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, Button, Badge, Accordion, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const UdzielPelnomocnictwa = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-person-badge icon-unified mb-2" />
                <h1 className="page-title">{t('udzielPelnomocnictwa.title')}</h1>
                <p className="text-muted">{t('udzielPelnomocnictwa.subtitle')}</p>
            </div>

            {/* Pasek akcji z wyszukiwarką */}
            <div className="actions-bar form-section mb-4">
                <div className="actions-bar-start">
                    <Button variant="success" className="me-2">
                        <i className="bi bi-file-earmark-plus me-1" /> {t('udzielPelnomocnictwa.actions.new')}
                    </Button>
                </div>
                <div className="actions-bar-end">
                    <Form.Control placeholder={t('udzielPelnomocnictwa.search.placeholder')} className="search-input" />
                </div>
            </div>

            {/* Tabela pełnomocnictw */}
            <Table striped bordered hover responsive className="data-table mb-4">
                <thead>
                    <tr>
                        <th>{t('udzielPelnomocnictwa.table.headers.number')}</th>
                        <th>{t('udzielPelnomocnictwa.table.headers.grantor')}</th>
                        <th>{t('udzielPelnomocnictwa.table.headers.attorney')}</th>
                        <th>{t('udzielPelnomocnictwa.table.headers.expiryDate')}</th>
                        <th>{t('udzielPelnomocnictwa.table.headers.status')}</th>
                        <th>{t('udzielPelnomocnictwa.table.headers.actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PEL/2025/001</td>
                        <td>{t('udzielPelnomocnictwa.people.janKowalski')}</td>
                        <td>{t('udzielPelnomocnictwa.people.annaNowak')}</td>
                        <td>31.12.2025</td>
                        <td>
                            <Badge bg="success">
                                <i className="bi bi-check-circle me-1" /> {t('udzielPelnomocnictwa.status.active')}
                            </Badge>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm" className="me-1" title={t('udzielPelnomocnictwa.actions.preview')}>
                                <i className="bi bi-eye" />
                            </Button>
                            <Button variant="outline-secondary" size="sm" title={t('udzielPelnomocnictwa.actions.edit')}>
                                <i className="bi bi-pencil" />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>PEL/2025/002</td>
                        <td>{t('udzielPelnomocnictwa.people.barbaraWisniewska')}</td>
                        <td>{t('udzielPelnomocnictwa.people.piotrZalewski')}</td>
                        <td>20.06.2025</td>
                        <td>
                            <Badge bg="warning">
                                <i className="bi bi-hourglass-split me-1" /> {t('udzielPelnomocnictwa.status.expiring')}
                            </Badge>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm" className="me-1" title={t('udzielPelnomocnictwa.actions.preview')}>
                                <i className="bi bi-eye" />
                            </Button>
                            <Button variant="outline-secondary" size="sm" title={t('udzielPelnomocnictwa.actions.edit')}>
                                <i className="bi bi-pencil" />
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>PEL/2025/003</td>
                        <td>{t('udzielPelnomocnictwa.people.tomaszMalinowski')}</td>
                        <td>{t('udzielPelnomocnictwa.people.katarzynaZielinska')}</td>
                        <td>15.03.2025</td>
                        <td>
                            <Badge bg="danger">
                                <i className="bi bi-x-circle me-1" /> {t('udzielPelnomocnictwa.status.expired')}
                            </Badge>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm" className="me-1" title={t('udzielPelnomocnictwa.actions.preview')}>
                                <i className="bi bi-eye" />
                            </Button>
                            <Button variant="outline-secondary" size="sm" title={t('udzielPelnomocnictwa.actions.edit')}>
                                <i className="bi bi-pencil" />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            {/* Accordion - formularz nowego pełnomocnictwa */}
            <Accordion className="mt-4 form-section">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <i className="bi bi-person-plus me-2" /> {t('udzielPelnomocnictwa.form.createNew')}
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3 g-3">
                                <Col md={6}>
                                    <Form.Group controlId="peniodawca">
                                        <Form.Label>
                                            <i className="bi bi-person me-1" /> {t('udzielPelnomocnictwa.form.labels.grantor')}
                                        </Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="pelnomocnik">
                                        <Form.Label>
                                            <i className="bi bi-person-check me-1" /> {t('udzielPelnomocnictwa.form.labels.attorney')}
                                        </Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3 g-3">
                                <Col md={6}>
                                    <Form.Group controlId="zakresUprawnien">
                                        <Form.Label>
                                            <i className="bi bi-shield-lock me-1" /> {t('udzielPelnomocnictwa.form.labels.scope')}
                                        </Form.Label>
                                        <Form.Select required>
                                            <option>{t('udzielPelnomocnictwa.form.scopes.full')}</option>
                                            <option>{t('udzielPelnomocnictwa.form.scopes.limited')}</option>
                                            <option>{t('udzielPelnomocnictwa.form.scopes.temporary')}</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="dataWaznosci">
                                        <Form.Label>
                                            <i className="bi bi-calendar-check me-1" /> {t('udzielPelnomocnictwa.form.labels.expiryDate')}
                                        </Form.Label>
                                        <Form.Control type="date" min="2025-01-01" max="2025-12-31" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="opisUprawnien" className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-info-circle me-1" /> {t('udzielPelnomocnictwa.form.labels.description')}
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className="actions-bar-end d-flex justify-content-end gap-2">
                                <Button variant="outline-secondary">
                                    <i className="bi bi-x-circle me-1" /> {t('udzielPelnomocnictwa.actions.cancel')}
                                </Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" /> {t('udzielPelnomocnictwa.actions.save')}
                                </Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Podsumowanie */}
            <div className="summary-box mt-4">
                <p>
                    <i className="bi bi-patch-check me-2" />
                    <strong>{t('udzielPelnomocnictwa.summary.active')}</strong> {t('udzielPelnomocnictwa.summary.activeCount')}
                </p>
                <p>
                    <i className="bi bi-hourglass-top me-2" />
                    <strong>{t('udzielPelnomocnictwa.summary.expiring')}</strong> {t('udzielPelnomocnictwa.summary.expiringCount')}
                </p>
                <Button variant="outline-primary" className="submit-btn mt-2">
                    <i className="bi bi-clipboard-data me-1" /> {t('udzielPelnomocnictwa.actions.generateReport')}
                </Button>
            </div>
        </Container>
    );
};