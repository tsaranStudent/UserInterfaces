import React from 'react';
import { Container, Row, Col, Table, Form, Button, Accordion } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const Kategorie = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-tags icon-unified mb-2" aria-hidden="true" />
                        <h1 className="page-title">{t('kategorie.title')}</h1>
                        <p className="text-muted">{t('kategorie.subtitle')}</p>
                    </div>

                    {/* Pasek akcji i wyszukiwanie */}
                    <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                        <div className="actions-bar-start">
                            <Button variant="success" className="me-2">
                                <i className="bi bi-plus-lg me-1" aria-hidden="true" />
                                {t('kategorie.actions.new')}
                            </Button>
                            <Button variant="outline-primary">
                                <i className="bi bi-diagram-3 me-1" aria-hidden="true" />
                                {t('kategorie.actions.tree')}
                            </Button>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder={t('kategorie.search.placeholder')}
                            className="search-input w-25"
                        />
                    </div>

                    {/* Tabela kategorii produktów */}
                    <div className="form-section mb-4">
                        <Table bordered hover responsive className="data-table" role="grid">
                            <thead>
                                <tr>
                                    <th scope="col">{t('kategorie.table.headers.id')}</th>
                                    <th scope="col">{t('kategorie.table.headers.name')}</th>
                                    <th scope="col">{t('kategorie.table.headers.count')}</th>
                                    <th scope="col">{t('kategorie.table.headers.created')}</th>
                                    <th scope="col">{t('kategorie.table.headers.status')}</th>
                                    <th scope="col">{t('kategorie.table.headers.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>KAT-2025-001</td>
                                    <td>{t('kategorie.sample.electronics')}</td>
                                    <td>215</td>
                                    <td>05.01.2025</td>
                                    <td>
                                        <span className="badge badge-success">
                                            {t('kategorie.status.active')}
                                        </span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title={t('kategorie.actions.edit')}>
                                            <i className="bi bi-pencil" aria-hidden="true" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title={t('kategorie.actions.delete')}>
                                            <i className="bi bi-trash" aria-hidden="true" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>KAT-2025-002</td>
                                    <td>{t('kategorie.sample.homeGoods')}</td>
                                    <td>178</td>
                                    <td>10.01.2025</td>
                                    <td>
                                        <span className="badge badge-success">
                                            {t('kategorie.status.active')}
                                        </span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title={t('kategorie.actions.edit')}>
                                            <i className="bi bi-pencil" aria-hidden="true" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title={t('kategorie.actions.delete')}>
                                            <i className="bi bi-trash" aria-hidden="true" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>KAT-2025-003</td>
                                    <td>{t('kategorie.sample.clothing')}</td>
                                    <td>342</td>
                                    <td>15.01.2025</td>
                                    <td>
                                        <span className="badge badge-planned">
                                            {t('kategorie.status.planned')}
                                        </span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title={t('kategorie.actions.edit')}>
                                            <i className="bi bi-pencil" aria-hidden="true" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title={t('kategorie.actions.delete')}>
                                            <i className="bi bi-trash" aria-hidden="true" />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    {/* Formularz dodawania kategorii */}
                    <Accordion className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('kategorie.accordion.add')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="mb-3 g-3">
                                        <Col md={6}>
                                            <Form.Group controlId="katNazwa">
                                                <Form.Label>{t('kategorie.form.labels.name')}</Form.Label>
                                                <Form.Control type="text" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="katParent">
                                                <Form.Label>{t('kategorie.form.labels.parent')}</Form.Label>
                                                <Form.Select>
                                                    <option value="">{t('kategorie.form.parentOptions.none')}</option>
                                                    <option value="1">{t('kategorie.sample.electronics')}</option>
                                                    <option value="2">{t('kategorie.sample.homeGoods')}</option>
                                                    <option value="3">{t('kategorie.sample.clothing')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3 g-3">
                                        <Col md={6}>
                                            <Form.Group controlId="katStatus">
                                                <Form.Label>{t('kategorie.form.labels.status')}</Form.Label>
                                                <Form.Select>
                                                    <option value="active">{t('kategorie.form.status.active')}</option>
                                                    <option value="planned">{t('kategorie.form.status.planned')}</option>
                                                    <option value="inactive">{t('kategorie.form.status.inactive')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="katExpiry">
                                                <Form.Label>{t('kategorie.form.labels.expiry')}</Form.Label>
                                                <Form.Control type="date" min="2025-01-01" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">
                                            {t('kategorie.form.buttons.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            {t('kategorie.form.buttons.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie */}
                    <Container className="mb-4">
                        <Row>
                            <Col md={{ span: 4, offset: 8 }}>
                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>{t('kategorie.summary.countLabel')}</strong>{' '}
                                        {t('kategorie.summary.count', { count: 24 })}
                                    </div>
                                    <div className="summary-text">
                                        <strong>{t('kategorie.summary.lastUpdateLabel')}</strong>{' '}
                                        {t('kategorie.summary.lastUpdate', { date: '20.01.2025' })}
                                    </div>
                                    <Button variant="outline-primary" className="submit-btn mt-2">
                                        <i className="bi bi-diagram-3 me-1" aria-hidden="true" />
                                        {t('kategorie.summary.hierarchy')}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        </Container>
    );
};
