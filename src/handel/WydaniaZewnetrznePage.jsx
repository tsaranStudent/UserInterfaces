import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card, Dropdown
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const WydaniaZewnetrzne = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true" />
                        {t('wydaniaZewnetrzne.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('wydaniaZewnetrzne.subtitle')}
                    </p>
                </div>

                {/* Formularz dodawania */}
                <Accordion defaultActiveKey="new" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="new">
                        <Accordion.Header>
                            <i className="bi bi-plus-circle me-2" />
                            {t('wydaniaZewnetrzne.form.title')}
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
                                                        {t('wydaniaZewnetrzne.form.docNumber')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('wydaniaZewnetrzne.form.docNumberPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('wydaniaZewnetrzne.form.date')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-person me-1" />
                                                        {t('wydaniaZewnetrzne.form.recipient')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('wydaniaZewnetrzne.form.recipientPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-chat-left-text me-1" />
                                                        {t('wydaniaZewnetrzne.form.reason')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('wydaniaZewnetrzne.form.reasonPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="g-3 mb-3">
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-list-ol me-1" />
                                                        {t('wydaniaZewnetrzne.form.itemsCount')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder={t('wydaniaZewnetrzne.form.itemsCountPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={9}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-card-text me-1" />
                                                        {t('wydaniaZewnetrzne.form.notes')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={2}
                                                        placeholder={t('wydaniaZewnetrzne.form.notesPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end">
                                            <Button variant="secondary" className="me-2">
                                                <i className="bi bi-x-circle me-1" />
                                                {t('wydaniaZewnetrzne.actions.clear')}
                                            </Button>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />
                                                {t('wydaniaZewnetrzne.actions.save')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Akcje globalne */}
                <div className="actions-bar-end mb-4">
                    <Button variant="outline-primary">
                        {t('wydaniaZewnetrzne.actions.list')}
                    </Button>
                    <Button variant="outline-success" className="ms-3">
                        {t('wydaniaZewnetrzne.actions.export')}
                    </Button>
                </div>

                {/* Tabela wydania */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('wydaniaZewnetrzne.table.docNumber')}</th>
                                    <th>{t('wydaniaZewnetrzne.table.date')}</th>
                                    <th>{t('wydaniaZewnetrzne.table.recipient')}</th>
                                    <th>{t('wydaniaZewnetrzne.table.reason')}</th>
                                    <th>{t('wydaniaZewnetrzne.table.itemsCount')}</th>
                                    <th>{t('wydaniaZewnetrzne.table.status')}</th>
                                    <th>{t('wydaniaZewnetrzne.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WZ/2025/07/001</td>
                                    <td>2025-06-10</td>
                                    <td>{t('wydaniaZewnetrzne.example.recipient1')}</td>
                                    <td>{t('wydaniaZewnetrzne.example.reason1')}</td>
                                    <td>3</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('wydaniaZewnetrzne.status.approved')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('wydaniaZewnetrzne.actions.details')}
                                        </Button>{' '}
                                        <Dropdown size="sm" className="d-inline mx-1">
                                            <Dropdown.Toggle variant="outline-secondary">
                                                {t('wydaniaZewnetrzne.actions.convert')}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toReceipt')}</Dropdown.Item>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toInvoice')}</Dropdown.Item>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toRW')}</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>WZ/2025/07/002</td>
                                    <td>2025-06-12</td>
                                    <td>{t('wydaniaZewnetrzne.example.recipient2')}</td>
                                    <td>{t('wydaniaZewnetrzne.example.reason2')}</td>
                                    <td>1</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('wydaniaZewnetrzne.status.inProgress')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('wydaniaZewnetrzne.actions.details')}
                                        </Button>{' '}
                                        <Dropdown size="sm" className="d-inline mx-1">
                                            <Dropdown.Toggle variant="outline-secondary">
                                                {t('wydaniaZewnetrzne.actions.convert')}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toReceipt')}</Dropdown.Item>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toInvoice')}</Dropdown.Item>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toRW')}</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>WZ/2025/07/003</td>
                                    <td>2025-06-14</td>
                                    <td>{t('wydaniaZewnetrzne.example.recipient3')}</td>
                                    <td>{t('wydaniaZewnetrzne.example.reason3')}</td>
                                    <td>5</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            {t('wydaniaZewnetrzne.status.cancelled')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('wydaniaZewnetrzne.actions.details')}
                                        </Button>{' '}
                                        <Dropdown size="sm" className="d-inline mx-1">
                                            <Dropdown.Toggle variant="outline-secondary">
                                                {t('wydaniaZewnetrzne.actions.convert')}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toReceipt')}</Dropdown.Item>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toInvoice')}</Dropdown.Item>
                                                <Dropdown.Item>{t('wydaniaZewnetrzne.convert.toRW')}</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
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
