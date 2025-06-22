import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SprzedarzDedykowana = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-file-earmark-text-fill icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-currency-dollar me-1" aria-hidden="true" />
                        {t('sprzedarzDedykowana.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('sprzedarzDedykowana.subtitle')}
                    </p>
                </div>

                {/* Formularz nowej umowy */}
                <Accordion defaultActiveKey="newAgreement" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="newAgreement">
                        <Accordion.Header>
                            <i className="bi bi-plus-circle me-2" />
                            {t('sprzedarzDedykowana.form.title')}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-person me-1" />
                                                        {t('sprzedarzDedykowana.form.client')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('sprzedarzDedykowana.form.clientPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('sprzedarzDedykowana.form.agreementDate')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-cash-stack me-1" />
                                                        {t('sprzedarzDedykowana.form.agreementValue')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder={t('sprzedarzDedykowana.form.currency')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="primary">
                                                <i className="bi bi-cart-plus me-1" />
                                                {t('sprzedarzDedykowana.actions.addProducts')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Tabela umów */}
                <Card className="shadow-sm mt-4">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('sprzedarzDedykowana.table.agreementNumber')}</th>
                                    <th><i className="bi bi-building me-1" />{t('sprzedarzDedykowana.table.client')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('sprzedarzDedykowana.table.signDate')}</th>
                                    <th><i className="bi bi-calendar-check me-1" />{t('sprzedarzDedykowana.table.deadline')}</th>
                                    <th><i className="bi bi-currency-dollar me-1" />{t('sprzedarzDedykowana.table.value')}</th>
                                    <th><i className="bi bi-info-circle me-1" />{t('sprzedarzDedykowana.table.status')}</th>
                                    <th><i className="bi bi-gear me-1" />{t('sprzedarzDedykowana.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>UM/2023/07/001</td>
                                    <td>{t('sprzedarzDedykowana.example.client1')}</td>
                                    <td>2023-07-01</td>
                                    <td>2023-08-15</td>
                                    <td>12,450.00 zł</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('sprzedarzDedykowana.status.inProgress')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            <i className="bi bi-eye me-1" />
                                            {t('sprzedarzDedykowana.actions.details')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>UM/2023/07/002</td>
                                    <td>{t('sprzedarzDedykowana.example.client2')}</td>
                                    <td>2023-07-10</td>
                                    <td>2023-09-01</td>
                                    <td>8,750.00 zł</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('sprzedarzDedykowana.status.completed')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            <i className="bi bi-eye me-1" />
                                            {t('sprzedarzDedykowana.actions.details')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};