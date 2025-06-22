import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RezerwacjeOdbiorcy = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-calendar-check icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-people me-1" aria-hidden="true" />
                        {t('rezerwacjeOdbiorcy.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('rezerwacjeOdbiorcy.subtitle')}
                    </p>
                </div>

                {/* Formularz dodawania */}
                <Accordion defaultActiveKey="form" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="form">
                        <Accordion.Header>
                            <i className="bi bi-plus-circle me-2" />
                            {t('rezerwacjeOdbiorcy.form.addTitle')}
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
                                                        {t('rezerwacjeOdbiorcy.form.recipient')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('rezerwacjeOdbiorcy.form.recipientPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('rezerwacjeOdbiorcy.form.reservationDate')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar2-check me-1" />
                                                        {t('rezerwacjeOdbiorcy.form.expiryDate')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-info-circle me-1" />
                                                        {t('rezerwacjeOdbiorcy.form.status')}
                                                    </Form.Label>
                                                    <Form.Select>
                                                        <option>{t('rezerwacjeOdbiorcy.status.pending')}</option>
                                                        <option>{t('rezerwacjeOdbiorcy.status.inProgress')}</option>
                                                        <option>{t('rezerwacjeOdbiorcy.status.confirmed')}</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="secondary" className="me-2">
                                                <i className="bi bi-x-circle me-1" />
                                                {t('rezerwacjeOdbiorcy.actions.clear')}
                                            </Button>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />
                                                {t('rezerwacjeOdbiorcy.actions.save')}
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
                    <Button variant="outline-primary" className="me-3">
                        <i className="bi bi-list-ul me-1" />
                        {t('rezerwacjeOdbiorcy.actions.allReservations')}
                    </Button>
                    <Button variant="outline-success">
                        <i className="bi bi-file-earmark-arrow-down me-1" />
                        {t('rezerwacjeOdbiorcy.actions.exportCSV')}
                    </Button>
                </div>

                {/* Tabela danych */}
                <Card className="shadow-sm mt-4">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('rezerwacjeOdbiorcy.table.reservationNumber')}</th>
                                    <th><i className="bi bi-person me-1" />{t('rezerwacjeOdbiorcy.table.recipient')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('rezerwacjeOdbiorcy.table.reservationDate')}</th>
                                    <th><i className="bi bi-clock-history me-1" />{t('rezerwacjeOdbiorcy.table.expiryDate')}</th>
                                    <th><i className="bi bi-list-ol me-1" />{t('rezerwacjeOdbiorcy.table.itemsCount')}</th>
                                    <th><i className="bi bi-info-circle me-1" />{t('rezerwacjeOdbiorcy.table.status')}</th>
                                    <th><i className="bi bi-gear me-1" />{t('rezerwacjeOdbiorcy.actions.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>REZ/2023/07/002</td>
                                    <td>{t('rezerwacjeOdbiorcy.example.client1')}</td>
                                    <td>2023-07-02</td>
                                    <td>2023-07-15</td>
                                    <td>5</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            {t('rezerwacjeOdbiorcy.status.pending')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            <i className="bi bi-pencil me-1" />
                                            {t('rezerwacjeOdbiorcy.actions.edit')}
                                        </Button>
                                        <Button variant="outline-success" size="sm">
                                            <i className="bi bi-check-circle me-1" />
                                            {t('rezerwacjeOdbiorcy.actions.process')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>REZ/2023/07/003</td>
                                    <td>{t('rezerwacjeOdbiorcy.example.client2')}</td>
                                    <td>2023-07-05</td>
                                    <td>2023-07-20</td>
                                    <td>10</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('rezerwacjeOdbiorcy.status.inProgress')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            <i className="bi bi-pencil me-1" />
                                            {t('rezerwacjeOdbiorcy.actions.edit')}
                                        </Button>
                                        <Button variant="outline-success" size="sm">
                                            <i className="bi bi-check-circle me-1" />
                                            {t('rezerwacjeOdbiorcy.actions.process')}
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