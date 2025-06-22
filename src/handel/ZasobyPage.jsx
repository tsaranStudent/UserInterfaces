import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Form,
    Row, Col, Button, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Zasoby = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-box-seam icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-hdd-stack me-1" aria-hidden="true" />
                        {t('zasoby.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('zasoby.subtitle')}
                    </p>
                </div>

                {/* Pasek akcji */}
                <Card className="shadow-sm mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Form className="d-flex search-input w-50">
                            <i className="bi bi-search me-2 align-self-center" />
                            <Form.Control
                                type="search"
                                placeholder={t('zasoby.actions.searchPlaceholder')}
                            />
                        </Form>
                        <Button variant="primary">
                            <i className="bi bi-plus-circle me-1" />
                            {t('zasoby.actions.add')}
                        </Button>
                    </Card.Body>
                </Card>

                {/* Tabela zasobów */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('zasoby.table.id')}</th>
                                    <th><i className="bi bi-tag me-1" />{t('zasoby.table.name')}</th>
                                    <th><i className="bi bi-boxes me-1" />{t('zasoby.table.type')}</th>
                                    <th><i className="bi bi-calculator me-1" />{t('zasoby.table.quantity')}</th>
                                    <th><i className="bi bi-grid me-1" />{t('zasoby.table.unit')}</th>
                                    <th><i className="bi bi-check2-circle me-1" />{t('zasoby.table.availability')}</th>
                                    <th><i className="bi bi-gear me-1" />{t('zasoby.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ZAS/2025/001</td>
                                    <td>{t('zasoby.example.item1.name')}</td>
                                    <td>{t('zasoby.example.item1.type')}</td>
                                    <td>5</td>
                                    <td>{t('zasoby.table.unitLabel')}</td>
                                    <td>
                                        <span className="badge bg-success text-uppercase">
                                            {t('zasoby.status.available')}
                                        </span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            <i className="bi bi-pencil me-1" />
                                            {t('zasoby.actions.edit')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ZAS/2025/002</td>
                                    <td>{t('zasoby.example.item2.name')}</td>
                                    <td>{t('zasoby.example.item2.type')}</td>
                                    <td>10</td>
                                    <td>{t('zasoby.table.unitSet')}</td>
                                    <td>
                                        <span className="badge bg-warning text-uppercase">
                                            {t('zasoby.status.low')}
                                        </span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            <i className="bi bi-pencil me-1" />
                                            {t('zasoby.actions.edit')}
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
