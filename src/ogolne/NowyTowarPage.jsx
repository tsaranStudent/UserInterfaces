import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Tabs, Tab, Form, Row, Col, Button, InputGroup, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Formularz dodawania nowego towaru
export const NowyTowar = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener */}
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-box-seam icon-unified mb-2" />
                        <h1 className="page-title">{t('nowyTowar.title')}</h1>
                        <p className="text-muted">{t('nowyTowar.subtitle')}</p>
                    </div>

                    {/* Zakładki formularza */}
                    <div className="form-section mb-4">
                        <Tabs defaultActiveKey="basic" id="product-tabs" className="mb-3">
                            <Tab eventKey="basic" title={t('nowyTowar.tabs.basic')}>
                                <Form className="mt-3">
                                    {/* Podstawowe dane */}
                                    <Row className="g-3 mb-3">
                                        <Col md={8}>
                                            <Form.Control
                                                placeholder={t('nowyTowar.form.basic.productNamePlaceholder')}
                                                required
                                            />
                                        </Col>
                                        <Col md={4}>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    {t('nowyTowar.form.basic.codePrefix')}
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder={t('nowyTowar.form.basic.codePlaceholder')}
                                                    required
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}>
                                            <Form.Select required>
                                                <option value="">
                                                    {t('nowyTowar.form.basic.categoryPlaceholder')}
                                                </option>
                                                {Object.entries(t('nowyTowar.form.basic.categories', { returnObjects: true }))
                                                    .map(([key, label]) => (
                                                        <option key={key} value={key}>
                                                            {label}
                                                        </option>
                                                    ))}
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select defaultValue={t('nowyTowar.form.basic.unitPlaceholder')}>
                                                {Object.entries(t('nowyTowar.form.basic.units', { returnObjects: true }))
                                                    .map(([key, label]) => (
                                                        <option key={key} value={key}>
                                                            {label}
                                                        </option>
                                                    ))}
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control
                                                type="number"
                                                defaultValue="0"
                                                placeholder={t('nowyTowar.form.basic.initialStockPlaceholder')}
                                            />
                                        </Col>
                                    </Row>
                                    {/* Opis dodatkowy */}
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                {t('nowyTowar.form.basic.descriptionHeader')}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Form.Control as="textarea" rows={3} />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Form>
                            </Tab>

                            <Tab eventKey="price" title={t('nowyTowar.tabs.price')}>
                                {/* Ceny */}
                                <div className="mt-3">
                                    <Row className="g-3 mb-3">
                                        <Col md={4}>
                                            <InputGroup>
                                                <Form.Control
                                                    type="number"
                                                    step="0.01"
                                                    placeholder={t('nowyTowar.form.price.purchaseNetPlaceholder')}
                                                />
                                                <InputGroup.Text>zł</InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                        <Col md={4}>
                                            <InputGroup>
                                                <Form.Control
                                                    type="number"
                                                    step="0.01"
                                                    placeholder={t('nowyTowar.form.price.saleNetPlaceholder')}
                                                    required
                                                />
                                                <InputGroup.Text>zł</InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select defaultValue={t('nowyTowar.form.price.vatValues.0')}>
                                                {t('nowyTowar.form.price.vatValues', { returnObjects: true })
                                                    .map((v, idx) => (
                                                        <option key={idx} value={v}>
                                                            {v}
                                                        </option>
                                                    ))}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                    {/* Pasek akcji */}
                    <div className="actions-bar-end form-section d-flex justify-content-end gap-2 mb-4">
                        <Button variant="outline-secondary">
                            {t('nowyTowar.actions.cancel')}
                        </Button>
                        <Button variant="success">
                            {t('nowyTowar.actions.save')}
                        </Button>
                    </div>

                    {/* Podsumowanie */}
                    <Container className="mt-4">
                        <div className="summary-box">
                            <p>
                                <strong>{t('nowyTowar.summary.newProducts')}</strong>{' '}
                                {/* liczba */}
                            </p>
                            <p>
                                <strong>{t('nowyTowar.summary.lastAdded')}</strong>{' '}
                                {/* kod */}
                            </p>
                        </div>
                    </Container>
                </Container>
            </div>
        </Container>
    );
};
