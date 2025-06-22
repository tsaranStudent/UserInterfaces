import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Row, Col, Button, Form, Table, Accordion,
    Badge, Card, ListGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Paragony = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-cash-stack me-1" aria-hidden="true" />
                        {t('paragony.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('paragony.subtitle')}
                    </p>
                </div>

                {/* Panel wyszukiwania */}
                <Accordion defaultActiveKey="filters" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="filters">
                        <Accordion.Header>
                            <i className="bi bi-funnel me-2" />
                            {t('paragony.search.title')}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form>
                                        <Row className="g-3">
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-123 me-1" />
                                                        {t('paragony.search.receiptNumber')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('paragony.search.receiptNumberPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('paragony.search.dateFrom')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar2-check me-1" />
                                                        {t('paragony.search.dateTo')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-currency-dollar me-1" />
                                                        {t('paragony.search.amountAbove')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder={t('paragony.currency')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="primary">
                                                <i className="bi bi-funnel me-1" />
                                                {t('paragony.actions.filter')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Tabela paragonów */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="page-title mb-0">
                                <i className="bi bi-list-ul me-2" />
                                {t('paragony.listTitle')}
                            </h4>
                            <div>
                                <Link to="/nowyParagon">
                                    <Button variant="primary">
                                        <i className="bi bi-plus-circle me-1" />
                                        {t('paragony.actions.addNew')}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <Table striped hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('paragony.table.receiptNumber')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('paragony.table.date')}</th>
                                    <th><i className="bi bi-person me-1" />{t('paragony.table.seller')}</th>
                                    <th><i className="bi bi-cash-stack me-1" />{t('paragony.table.amount')}</th>
                                    <th><i className="bi bi-check-circle me-1" />{t('paragony.table.status')}</th>
                                    <th><i className="bi bi-gear me-1" />{t('paragony.actions.title')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PAR/2023/07/001</td>
                                    <td>2023-07-15 10:23</td>
                                    <td>{t('paragony.example.seller1')}</td>
                                    <td>189.99 {t('paragony.currency')}</td>
                                    <td>
                                        <Badge bg="success">
                                            {t('paragony.status.booked')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            <i className="bi bi-eye me-1" />
                                            {t('paragony.actions.view')}
                                        </Button>
                                        <Button variant="outline-secondary" size="sm">
                                            <i className="bi bi-printer me-1" />
                                            {t('paragony.actions.print')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* Sekcja podsumowania */}
                <Card className="shadow-sm mt-4 summary-card">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={8}>
                                <h5><i className="bi bi-graph-up me-2" />{t('paragony.summary.title')}</h5>
                                <ListGroup horizontal className="mt-2">
                                    <ListGroup.Item className="border-0 ps-0">
                                        <i className="bi bi-receipt me-1" />
                                        {t('paragony.summary.totalReceipts')}: <strong>1</strong>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="border-0">
                                        <i className="bi bi-cash-coin me-1" />
                                        {t('paragony.summary.totalAmount')}: <strong>189.99 {t('paragony.currency')}</strong>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={4} className="text-end">
                                <Button variant="success" size="lg">
                                    <i className="bi bi-check-circle me-1" />
                                    {t('paragony.actions.confirm')}
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};