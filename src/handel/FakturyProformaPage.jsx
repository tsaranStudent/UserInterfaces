import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const FakturyProforma = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-text me-1" aria-hidden="true" />
                        {t('fakturyProforma.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('fakturyProforma.subtitle')}
                    </p>
                </div>

                {/* Formularz wyszukiwania */}
                <Accordion defaultActiveKey="search" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="search">
                        <Accordion.Header>
                            <i className="bi bi-search me-2" />
                            {t('fakturyProforma.search.title')}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form>
                                        <Row className="g-3">
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-person me-1" />
                                                        {t('fakturyProforma.search.recipient')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('fakturyProforma.search.recipientPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-file-earmark-text me-1" />
                                                        {t('fakturyProforma.search.invoiceNumber')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('fakturyProforma.search.invoiceNumberPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('fakturyProforma.search.dateFrom')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar2-date me-1" />
                                                        {t('fakturyProforma.search.dateTo')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="secondary" className="me-2">
                                                <i className="bi bi-x-circle me-1" />
                                                {t('fakturyProforma.actions.clear')}
                                            </Button>
                                            <Button variant="primary" className="me-2">
                                                <i className="bi bi-search me-1" />
                                                {t('fakturyProforma.actions.search')}
                                            </Button>
                                            <Button variant="success">
                                                <i className="bi bi-file-earmark-plus me-1" />
                                                {t('fakturyProforma.actions.generateVAT')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Przyciski akcji */}
                <div className="actions-bar-end mt-4">
                    <Link to="/nowaFaktura">
                        <Button variant="outline-success" className="me-3">
                            <i className="bi bi-plus-circle me-1" />
                            {t('fakturyProforma.actions.newInvoice')}
                        </Button>
                    </Link>
                    <Link to="/faktury">
                        <Button variant="outline-primary">
                            <i className="bi bi-list-ul me-1" />
                            {t('fakturyProforma.actions.vatInvoicesList')}
                        </Button>
                    </Link>
                </div>

                {/* Tabela danych */}
                <Card className="shadow-sm mt-4">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('fakturyProforma.table.invoiceNumber')}</th>
                                    <th><i className="bi bi-person me-1" />{t('fakturyProforma.table.recipient')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('fakturyProforma.table.date')}</th>
                                    <th><i className="bi bi-currency-dollar me-1" />{t('fakturyProforma.table.amount')}</th>
                                    <th><i className="bi bi-info-circle me-1" />{t('fakturyProforma.table.status')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PF/2024/01</td>
                                    <td>{t('fakturyProforma.example.client1')}</td>
                                    <td>2024-04-01</td>
                                    <td>3 500,00 zł</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('fakturyProforma.status.sent')}
                                        </Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>PF/2024/02</td>
                                    <td>{t('fakturyProforma.example.client2')}</td>
                                    <td>2024-04-04</td>
                                    <td>7 200,00 zł</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            {t('fakturyProforma.status.pending')}
                                        </Badge>
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