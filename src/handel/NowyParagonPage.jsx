import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Form, Row, Col,
    Button, Table, InputGroup, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const NowyParagon = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Header with icon and subtitle */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-plus-circle me-1" aria-hidden="true" />
                        {t('nowyParagon.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('nowyParagon.subtitle')}
                    </p>
                </div>

                {/* Form section */}
                <Card className="shadow-sm form-section">
                    <Card.Body>
                        <Row className="g-3 mb-4">
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>
                                        <i className="bi bi-person me-1" />
                                        {t('nowyParagon.form.seller')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option>{t('nowyParagon.example.seller1')}</option>
                                        <option>{t('nowyParagon.example.seller2')}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>
                                        <i className="bi bi-people me-1" />
                                        {t('nowyParagon.form.client')}
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            placeholder={t('nowyParagon.form.clientPlaceholder')}
                                        />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search" />
                                        </Button>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>
                                        <i className="bi bi-calendar-date me-1" />
                                        {t('nowyParagon.form.date')}
                                    </Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* Products table */}
                        <h5 className="mb-3">
                            <i className="bi bi-list-ul me-1" />
                            {t('nowyParagon.products.title')}
                        </h5>

                        <Table bordered hover responsive className="data-table mb-4">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-upc me-1" />{t('nowyParagon.products.code')}</th>
                                    <th><i className="bi bi-box-seam me-1" />{t('nowyParagon.products.name')}</th>
                                    <th><i className="bi bi-123 me-1" />{t('nowyParagon.products.quantity')}</th>
                                    <th><i className="bi bi-currency-dollar me-1" />{t('nowyParagon.products.price')}</th>
                                    <th><i className="bi bi-calculator me-1" />{t('nowyParagon.products.value')}</th>
                                    <th><i className="bi bi-gear me-1" />{t('nowyParagon.actions.title')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            placeholder={t('nowyParagon.products.scanPlaceholder')}
                                        />
                                    </td>
                                    <td>{t('nowyParagon.example.product1')}</td>
                                    <td>
                                        <Form.Control
                                            type="number"
                                            defaultValue="1"
                                            min="1"
                                        />
                                    </td>
                                    <td>25.99 {t('nowyParagon.currency')}</td>
                                    <td>25.99 {t('nowyParagon.currency')}</td>
                                    <td>
                                        <Button variant="danger" size="sm">
                                            <i className="bi bi-trash me-1" />
                                            {t('nowyParagon.actions.remove')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="actions-bar">
                            <Button variant="outline-primary" className="me-2">
                                <i className="bi bi-plus-circle me-1" />
                                {t('nowyParagon.actions.addProduct')}
                            </Button>
                            <Button variant="outline-secondary">
                                <i className="bi bi-percent me-1" />
                                {t('nowyParagon.actions.discount')}
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* Summary section */}
                <div className="actions-bar-end mt-4">
                    <h5 className="summary-text mb-0 me-3">
                        {t('nowyParagon.summary.total')}: <strong>25.99 {t('nowyParagon.currency')}</strong>
                    </h5>
                    <Button variant="success" size="lg">
                        <i className="bi bi-receipt me-1" />
                        {t('nowyParagon.actions.issue')}
                    </Button>
                </div>
            </Container>
        </div>
    );
};