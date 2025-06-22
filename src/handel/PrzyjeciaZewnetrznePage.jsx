import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const PrzyjeciaZewnetrzne = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-box-arrow-in-down me-1" aria-hidden="true" />
                        {t('przyjeciaZewnetrzne.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('przyjeciaZewnetrzne.subtitle')}
                    </p>
                </div>

                {/* Formularz dodawania */}
                <Accordion defaultActiveKey="new" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="new">
                        <Accordion.Header>
                            <i className="bi bi-plus-circle me-2" />
                            {t('przyjeciaZewnetrzne.form.title')}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form>
                                        <Row className="g-3 mb-3">
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-file-earmark-text me-1" />
                                                        {t('przyjeciaZewnetrzne.form.docNumber')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('przyjeciaZewnetrzne.form.docNumberPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('przyjeciaZewnetrzne.form.date')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-building me-1" />
                                                        {t('przyjeciaZewnetrzne.form.supplier')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('przyjeciaZewnetrzne.form.supplierPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-receipt-cutoff me-1" />
                                                        {t('przyjeciaZewnetrzne.form.invoiceNumber')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('przyjeciaZewnetrzne.form.invoiceNumberPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="g-3 mb-3">
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-list-ol me-1" />
                                                        {t('przyjeciaZewnetrzne.form.itemsCount')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder={t('przyjeciaZewnetrzne.form.itemsCountPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-info-circle me-1" />
                                                        {t('przyjeciaZewnetrzne.form.status')}
                                                    </Form.Label>
                                                    <Form.Select>
                                                        <option>{t('przyjeciaZewnetrzne.status.inProgress')}</option>
                                                        <option>{t('przyjeciaZewnetrzne.status.approved')}</option>
                                                        <option>{t('przyjeciaZewnetrzne.status.rejected')}</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-chat-left-text me-1" />
                                                        {t('przyjeciaZewnetrzne.form.notes')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        placeholder={t('przyjeciaZewnetrzne.form.notesPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end">
                                            <Button variant="secondary" className="me-2">
                                                <i className="bi bi-x-circle me-1" />
                                                {t('przyjeciaZewnetrzne.actions.clear')}
                                            </Button>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />
                                                {t('przyjeciaZewnetrzne.actions.save')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Akcje globalne */}
                <div className="actions-bar-end mb-4 form-section">
                    <Button variant="outline-primary">
                        <i className="bi bi-list-ul me-1" />
                        {t('przyjeciaZewnetrzne.actions.list')}
                    </Button>
                    <Button variant="outline-success" className="ms-3">
                        <i className="bi bi-file-earmark-arrow-up me-1" />
                        {t('przyjeciaZewnetrzne.actions.export')}
                    </Button>
                </div>

                {/* Tabela przyjęć */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-file-earmark-text me-1" />{t('przyjeciaZewnetrzne.table.docNumber')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('przyjeciaZewnetrzne.table.date')}</th>
                                    <th><i className="bi bi-building me-1" />{t('przyjeciaZewnetrzne.table.supplier')}</th>
                                    <th><i className="bi bi-receipt-cutoff me-1" />{t('przyjeciaZewnetrzne.table.invoiceNumber')}</th>
                                    <th><i className="bi bi-list-ol me-1" />{t('przyjeciaZewnetrzne.table.itemsCount')}</th>
                                    <th><i className="bi bi-info-circle me-1" />{t('przyjeciaZewnetrzne.table.status')}</th>
                                    <th><i className="bi bi-gear me-1" />{t('przyjeciaZewnetrzne.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PZ/2025/07/001</td>
                                    <td>2025-06-10</td>
                                    <td>{t('przyjeciaZewnetrzne.example.supplier1')}</td>
                                    <td>{t('przyjeciaZewnetrzne.example.invoice1')}</td>
                                    <td>12</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('przyjeciaZewnetrzne.status.inProgress')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            {t('przyjeciaZewnetrzne.actions.edit')}
                                        </Button>
                                        <Button variant="outline-success" size="sm">
                                            {t('przyjeciaZewnetrzne.actions.approve')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>PZ/2025/07/002</td>
                                    <td>2025-06-12</td>
                                    <td>{t('przyjeciaZewnetrzne.example.supplier2')}</td>
                                    <td>{t('przyjeciaZewnetrzne.example.invoice2')}</td>
                                    <td>15</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('przyjeciaZewnetrzne.status.approved')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            {t('przyjeciaZewnetrzne.actions.edit')}
                                        </Button>
                                        <Button variant="outline-danger" size="sm">
                                            {t('przyjeciaZewnetrzne.actions.reject')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>PZ/2025/07/003</td>
                                    <td>2025-06-14</td>
                                    <td>{t('przyjeciaZewnetrzne.example.supplier3')}</td>
                                    <td>{t('przyjeciaZewnetrzne.example.invoice3')}</td>
                                    <td>20</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            {t('przyjeciaZewnetrzne.status.rejected')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-2">
                                            {t('przyjeciaZewnetrzne.actions.edit')}
                                        </Button>
                                        <Button variant="outline-danger" size="sm">
                                            {t('przyjeciaZewnetrzne.actions.reject')}
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
