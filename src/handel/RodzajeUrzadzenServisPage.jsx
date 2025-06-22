import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Form, Row, Col, Button,
    Table, InputGroup, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RodzajeUrzadzenServis = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-hdd-stack me-1" aria-hidden="true" />
                        {t('rodzajeUrzadzenServis.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('rodzajeUrzadzenServis.subtitle')}
                    </p>
                </div>

                {/* Formularz wyszukiwania */}
                <Card className="shadow-sm mb-4">
                    <Card.Body>
                        <Form className="form-section">
                            <Row className="g-3 align-items-end">
                                <Col md={8}>
                                    <Form.Label>
                                        <i className="bi bi-search me-1" />
                                        {t('rodzajeUrzadzenServis.form.searchLabel')}
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder={t('rodzajeUrzadzenServis.form.searchPlaceholder')}
                                        />
                                        <Button variant="outline-primary">
                                            {t('rodzajeUrzadzenServis.actions.search')}
                                        </Button>
                                    </InputGroup>
                                </Col>
                                <Col md={4} className="text-end">
                                    <Button variant="primary">
                                        <i className="bi bi-plus-circle me-1" />
                                        {t('rodzajeUrzadzenServis.actions.add')}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Tabela typów urządzeń */}
                <Card className="shadow-sm mb-4">
                    <Card.Body>
                        <h5 className="mb-3">{t('rodzajeUrzadzenServis.table.heading')}</h5>
                        <Table bordered responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('rodzajeUrzadzenServis.table.id')}</th>
                                    <th>{t('rodzajeUrzadzenServis.table.type')}</th>
                                    <th>{t('rodzajeUrzadzenServis.table.avgRepair')}</th>
                                    <th>{t('rodzajeUrzadzenServis.table.requests')}</th>
                                    <th>{t('rodzajeUrzadzenServis.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{t('rodzajeUrzadzenServis.example.type1')}</td>
                                    <td>3 dni</td>
                                    <td>24</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('rodzajeUrzadzenServis.actions.edit')}
                                        </Button>{' '}
                                        <Button variant="outline-danger" size="sm">
                                            {t('rodzajeUrzadzenServis.actions.delete')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{t('rodzajeUrzadzenServis.example.type2')}</td>
                                    <td>2 dni</td>
                                    <td>42</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('rodzajeUrzadzenServis.actions.edit')}
                                        </Button>{' '}
                                        <Button variant="outline-danger" size="sm">
                                            {t('rodzajeUrzadzenServis.actions.delete')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

                {/* Formularz dodawania nowego typu */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <h5 className="mb-3">{t('rodzajeUrzadzenServis.form.newHeading')}</h5>
                        <Form>
                            <Row className="g-3 mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>{t('rodzajeUrzadzenServis.form.name')}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder={t('rodzajeUrzadzenServis.form.namePlaceholder')}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>{t('rodzajeUrzadzenServis.form.avgRepair')}</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder={t('rodzajeUrzadzenServis.form.avgRepairPlaceholder')}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>{t('rodzajeUrzadzenServis.form.requests')}</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder={t('rodzajeUrzadzenServis.form.requestsPlaceholder')}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="text-end">
                                <Button variant="success">
                                    {t('rodzajeUrzadzenServis.actions.save')}
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};
