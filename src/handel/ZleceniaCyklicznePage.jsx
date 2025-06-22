import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Card, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const ZleceniaCykliczne = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-arrow-repeat me-1" aria-hidden="true" />
                        {t('zleceniaCykliczne.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('zleceniaCykliczne.subtitle')}
                    </p>
                </div>

                {/* Pasek akcji */}
                <Card className="shadow-sm mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Form className="d-flex search-input w-50">
                            <i className="bi bi-search me-2 align-self-center" />
                            <Form.Control
                                type="search"
                                placeholder={t('zleceniaCykliczne.actions.searchPlaceholder')}
                            />
                        </Form>
                        <Form.Select
                            className="ms-3"
                            style={{ width: '200px' }}
                        >
                            <option>{t('zleceniaCykliczne.filter.allStatuses')}</option>
                            <option value="active">{t('zleceniaCykliczne.status.active')}</option>
                            <option value="completed">{t('zleceniaCykliczne.status.completed')}</option>
                            <option value="planned">{t('zleceniaCykliczne.status.planned')}</option>
                        </Form.Select>
                        <Button variant="primary" className="ms-3">
                            <i className="bi bi-plus-circle me-1" />
                            {t('zleceniaCykliczne.actions.new')}
                        </Button>
                    </Card.Body>
                </Card>

                {/* Tabela zleceń */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('zleceniaCykliczne.table.no')}</th>
                                    <th>{t('zleceniaCykliczne.table.name')}</th>
                                    <th>{t('zleceniaCykliczne.table.startDate')}</th>
                                    <th>{t('zleceniaCykliczne.table.frequency')}</th>
                                    <th>{t('zleceniaCykliczne.table.last')}</th>
                                    <th>{t('zleceniaCykliczne.table.next')}</th>
                                    <th>{t('zleceniaCykliczne.table.status')}</th>
                                    <th>{t('zleceniaCykliczne.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CYK/2025/01/001</td>
                                    <td>{t('zleceniaCykliczne.example.task1.name')}</td>
                                    <td>2023-01-15</td>
                                    <td>{t('zleceniaCykliczne.example.task1.freq')}</td>
                                    <td>2024-07-15</td>
                                    <td>2024-10-15</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('zleceniaCykliczne.status.active')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zleceniaCykliczne.actions.edit')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CYK/2025/02/005</td>
                                    <td>{t('zleceniaCykliczne.example.task2.name')}</td>
                                    <td>2023-02-01</td>
                                    <td>{t('zleceniaCykliczne.example.task2.freq')}</td>
                                    <td>2024-08-01</td>
                                    <td>2025-02-01</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('zleceniaCykliczne.status.completed')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zleceniaCykliczne.actions.edit')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CYK/2025/03/012</td>
                                    <td>{t('zleceniaCykliczne.example.task3.name')}</td>
                                    <td>2023-03-10</td>
                                    <td>{t('zleceniaCykliczne.example.task3.freq')}</td>
                                    <td>2024-03-10</td>
                                    <td>2025-03-10</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            {t('zleceniaCykliczne.status.planned')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zleceniaCykliczne.actions.edit')}
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
