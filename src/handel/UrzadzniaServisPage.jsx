import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Card, Form,
    Button, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const UrzadzniaServis = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-tools me-1" aria-hidden="true" />
                        {t('urzadzniaServis.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('urzadzniaServis.subtitle')}
                    </p>
                </div>

                {/* Pasek akcji */}
                <Card className="shadow-sm mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Form className="d-flex search-input w-50">
                            <i className="bi bi-search me-2 align-self-center" />
                            <Form.Control
                                type="search"
                                placeholder={t('urzadzniaServis.actions.searchPlaceholder')}
                            />
                        </Form>
                        <Button variant="primary">
                            <i className="bi bi-plus-circle me-1" />
                            {t('urzadzniaServis.actions.new')}
                        </Button>
                    </Card.Body>
                </Card>

                {/* Tabela urządzeń */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('urzadzniaServis.table.requestNo')}</th>
                                    <th>{t('urzadzniaServis.table.dateReceived')}</th>
                                    <th>{t('urzadzniaServis.table.device')}</th>
                                    <th>{t('urzadzniaServis.table.client')}</th>
                                    <th>{t('urzadzniaServis.table.status')}</th>
                                    <th>{t('urzadzniaServis.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SER/2025/07/001</td>
                                    <td>2025-06-12</td>
                                    <td>{t('urzadzniaServis.example.device1')}</td>
                                    <td>{t('urzadzniaServis.example.client1')}</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('urzadzniaServis.status.diagnosis')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('urzadzniaServis.actions.details')}
                                        </Button>{' '}
                                        <Button variant="outline-success" size="sm">
                                            {t('urzadzniaServis.actions.complete')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SER/2025/07/002</td>
                                    <td>2025-06-15</td>
                                    <td>{t('urzadzniaServis.example.device2')}</td>
                                    <td>{t('urzadzniaServis.example.client2')}</td>
                                    <td>
                                        <Badge bg="info" className="text-uppercase">
                                            {t('urzadzniaServis.status.repair')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('urzadzniaServis.actions.details')}
                                        </Button>{' '}
                                        <Button variant="outline-success" size="sm">
                                            {t('urzadzniaServis.actions.complete')}
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
