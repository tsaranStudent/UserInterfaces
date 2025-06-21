import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Form, Row, Col, Button, InputGroup, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NowyKontrahent = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-building-add icon-unified mb-2" />
                        <h1 className="page-title">{t('nowyKontrahent.title')}</h1>
                        <p className="text-muted">{t('nowyKontrahent.subtitle')}</p>
                    </div>

                    {/* Formularz główny */}
                    <Form className="form-section mb-4">
                        <h5>{t('nowyKontrahent.basicHeader')}</h5>
                        <Row className="g-3 mb-4">
                            <Col md={6}>
                                <Form.Control
                                    placeholder={t('nowyKontrahent.placeholders.name')}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Control
                                    placeholder={t('nowyKontrahent.placeholders.nip')}
                                    pattern="\d{10}"
                                    required
                                />
                            </Col>
                        </Row>

                        {/* Dane dodatkowe */}
                        <Accordion className="mb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    {t('nowyKontrahent.additionalHeader')}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row className="g-3 mb-4">
                                        <Col md={4}>
                                            <Form.Control placeholder={t('nowyKontrahent.placeholders.regon')} />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control placeholder={t('nowyKontrahent.placeholders.krs')} />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control
                                                type="date"
                                                max="2025-12-31"
                                            />
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <h5>{t('nowyKontrahent.addressHeader')}</h5>
                        <Row className="g-3 mb-4">
                            <Col md={6}>
                                <Form.Control placeholder={t('nowyKontrahent.placeholders.street')} required />
                            </Col>
                            <Col md={2}>
                                <Form.Control placeholder={t('nowyKontrahent.placeholders.houseNumber')} required />
                            </Col>
                            <Col md={2}>
                                <Form.Control placeholder={t('nowyKontrahent.placeholders.apartmentNumber')} />
                            </Col>
                            <Col md={2}>
                                <Form.Control placeholder={t('nowyKontrahent.placeholders.postalCode')} pattern="\d{2}-\d{3}" required />
                            </Col>
                        </Row>
                        <Row className="g-3 mb-4">
                            <Col md={6}>
                                <Form.Control placeholder={t('nowyKontrahent.placeholders.city')} required />
                            </Col>
                            <Col md={6}>
                                <Form.Select defaultValue="PL">
                                    <option value="PL">{t('nowyKontrahent.countries.PL')}</option>
                                    <option value="DE">{t('nowyKontrahent.countries.DE')}</option>
                                    <option value="CZ">{t('nowyKontrahent.countries.CZ')}</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <h5>{t('nowyKontrahent.contactHeader')}</h5>
                        <Row className="g-3 mb-4">
                            <Col md={4}>
                                <Form.Control
                                    type="email"
                                    placeholder={t('nowyKontrahent.placeholders.email')}
                                    required
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="tel"
                                    placeholder={t('nowyKontrahent.placeholders.phone')}
                                    required
                                />
                            </Col>
                            <Col md={4}>
                                <InputGroup>
                                    <InputGroup.Text>https://</InputGroup.Text>
                                    <Form.Control placeholder={t('nowyKontrahent.placeholders.website')} />
                                </InputGroup>
                            </Col>
                        </Row>

                        {/* Pasek akcji */}
                        <div className="actions-bar-end d-flex justify-content-end gap-2">
                            <Link to="/kontrahenci">
                                <Button variant="outline-secondary">
                                    {t('nowyKontrahent.actions.cancel')}
                                </Button>
                            </Link>
                            <Button variant="success" type="submit">
                                {t('nowyKontrahent.actions.save')}
                            </Button>
                        </div>
                    </Form>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <p>
                            <strong>{t('nowyKontrahent.summary.newCount')}</strong> {t('nowyKontrahent.summary.newCountValue')}
                        </p>
                        <p>
                            <strong>{t('nowyKontrahent.summary.lastAdded')}</strong> {t('nowyKontrahent.summary.lastAddedValue')}
                        </p>
                    </div>
                </Container>
            </div>
        </Container>
    );
};
