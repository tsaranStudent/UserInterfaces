import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Table, Form, InputGroup, Row, Col, Button, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Pracownicy = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-people icon-unified mb-2" />
                        <h1 className="page-title">{t('pracownicy.title')}</h1>
                        <p className="text-muted">{t('pracownicy.subtitle')}</p>
                    </div>

                    {/* Pasek akcji i wyszukiwarka */}
                    <div className="form-section mb-4 d-flex justify-content-between align-items-center">
                        <div>
                            <Button variant="success" className="me-2">
                                <i className="bi bi-person-plus me-1" />{t('pracownicy.actions.add')}
                            </Button>
                            <Button variant="outline-primary">
                                <i className="bi bi-upload me-1" />{t('pracownicy.actions.import')}
                            </Button>
                        </div>
                        <InputGroup className="search-input w-25">
                            <Form.Control placeholder={t('pracownicy.searchPlaceholder')} />
                            <Button variant="outline-secondary">
                                <i className="bi bi-search" />
                            </Button>
                        </InputGroup>
                    </div>

                    {/* Tabela pracowników */}
                    <div className="form-section mb-4">
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('pracownicy.table.id')}</th>
                                    <th>{t('pracownicy.table.name')}</th>
                                    <th>{t('pracownicy.table.position')}</th>
                                    <th>{t('pracownicy.table.hireDate')}</th>
                                    <th>{t('pracownicy.table.contractUntil')}</th>
                                    <th>{t('pracownicy.table.status')}</th>
                                    <th>{t('pracownicy.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {['1', '2', '3'].map(key => (
                                    <tr key={key}>
                                        <td>{t(`pracownicy.rows.${key}.id`)}</td>
                                        <td>{t(`pracownicy.rows.${key}.name`)}</td>
                                        <td>{t(`pracownicy.rows.${key}.position`)}</td>
                                        <td>{t(`pracownicy.rows.${key}.hireDate`)}</td>
                                        <td>{t(`pracownicy.rows.${key}.contractUntil`)}</td>
                                        <td>
                                            <span className={`badge badge-${t(`pracownicy.rows.${key}.statusVariant`)}`}>
                                                {t(`pracownicy.rows.${key}.statusText`)}
                                            </span>
                                        </td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">
                                                <i className="bi bi-eye" /> {t('pracownicy.actions.view')}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    {/* Formularz dodawania pracownika */}
                    <Accordion className="form-section mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('pracownicy.new.header')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Control placeholder={t('pracownicy.new.placeholders.firstName')} />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control placeholder={t('pracownicy.new.placeholders.lastName')} />
                                        </Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Select>
                                                <option>{t('pracownicy.new.placeholders.position')}</option>
                                                <option>{t('pracownicy.positions.manager')}</option>
                                                <option>{t('pracownicy.positions.specialist')}</option>
                                                <option>{t('pracownicy.positions.warehouse')}</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control type="date" />
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="outline-secondary">{t('pracownicy.new.actions.cancel')}</Button>
                                        <Button variant="primary">{t('pracownicy.new.actions.save')}</Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie */}
                    <Container>
                        <div className="summary-box">
                            <p>
                                <strong>{t('pracownicy.summary.total')}</strong>{' '}
                                {t('pracownicy.summary.totalValue')}
                            </p>
                            <p>
                                <strong>{t('pracownicy.summary.new')}</strong>{' '}
                                {t('pracownicy.summary.newValue')}
                            </p>
                            <Button variant="outline-primary" className="mt-2">
                                {t('pracownicy.summary.yearlyReport')}
                            </Button>
                        </div>
                    </Container>
                </Container>
            </div>
        </Container>
    );
};
