import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const ZleceniaUDostawcy = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-list-check me-1" aria-hidden="true" />
                        {t('zleceniaUDostawcy.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('zleceniaUDostawcy.subtitle')}
                    </p>
                </div>

                {/* Filtrowanie */}
                <Accordion defaultActiveKey="filter" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="filter">
                        <Accordion.Header>
                            <i className="bi bi-funnel me-2" />
                            {t('zleceniaUDostawcy.filter.title')}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form>
                                        <Row className="g-3">
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-building me-1" />
                                                        {t('zleceniaUDostawcy.filter.supplier')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('zleceniaUDostawcy.filter.supplierPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('zleceniaUDostawcy.filter.dateFrom')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar2-date me-1" />
                                                        {t('zleceniaUDostawcy.filter.dateTo')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-info-circle me-1" />
                                                        {t('zleceniaUDostawcy.filter.status')}
                                                    </Form.Label>
                                                    <Form.Select>
                                                        <option>{t('zleceniaUDostawcy.filter.choose')}</option>
                                                        <option value="pending">{t('zleceniaUDostawcy.status.pending')}</option>
                                                        <option value="completed">{t('zleceniaUDostawcy.status.completed')}</option>
                                                        <option value="cancelled">{t('zleceniaUDostawcy.status.cancelled')}</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="primary">
                                                <i className="bi bi-filter-circle me-1" />
                                                {t('zleceniaUDostawcy.actions.apply')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Tabela zleceń */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('zleceniaUDostawcy.table.orderNumber')}</th>
                                    <th><i className="bi bi-building me-1" />{t('zleceniaUDostawcy.table.supplier')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('zleceniaUDostawcy.table.orderDate')}</th>
                                    <th><i className="bi bi-info-circle me-1" />{t('zleceniaUDostawcy.table.status')}</th>
                                    <th><i className="bi bi-chat-left-text me-1" />{t('zleceniaUDostawcy.table.notes')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ZLD-2025-001</td>
                                    <td>{t('zleceniaUDostawcy.example.supplier1')}</td>
                                    <td>2025-05-10</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('zleceniaUDostawcy.status.pending')}
                                        </Badge>
                                    </td>
                                    <td>{t('zleceniaUDostawcy.example.noteNone')}</td>
                                </tr>
                                <tr>
                                    <td>ZLD-2025-002</td>
                                    <td>{t('zleceniaUDostawcy.example.supplier2')}</td>
                                    <td>2025-05-12</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('zleceniaUDostawcy.status.completed')}
                                        </Badge>
                                    </td>
                                    <td>{t('zleceniaUDostawcy.example.noteOnTime')}</td>
                                </tr>
                                <tr>
                                    <td>ZLD-2025-003</td>
                                    <td>{t('zleceniaUDostawcy.example.supplier3')}</td>
                                    <td>2025-06-02</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            {t('zleceniaUDostawcy.status.cancelled')}
                                        </Badge>
                                    </td>
                                    <td>{t('zleceniaUDostawcy.example.noteIssue')}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};
