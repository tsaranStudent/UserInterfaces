import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Card, Form,
    Button, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const RaportBrakow = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-clipboard-data me-1" aria-hidden="true" />
                        {t('raportBrakow.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('raportBrakow.subtitle')}
                    </p>
                </div>

                {/* Formularz generowania raportu */}
                <Card className="shadow-sm mb-4">
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-building me-1" />
                                    {t('raportBrakow.form.selectWarehouse')}
                                </Form.Label>
                                <Form.Select>
                                    <option>{t('raportBrakow.form.all')}</option>
                                    <option value="main">{t('raportBrakow.form.main')}</option>
                                    <option value="backup">{t('raportBrakow.form.backup')}</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="primary">
                                    <i className="bi bi-file-earmark-text me-1" />
                                    {t('raportBrakow.actions.generate')}
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Tabela braków */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-barcode me-1" />{t('raportBrakow.table.code')}</th>
                                    <th><i className="bi bi-box-seam me-1" />{t('raportBrakow.table.name')}</th>
                                    <th><i className="bi bi-calculator me-1" />{t('raportBrakow.table.min')}</th>
                                    <th><i className="bi bi-stack me-1" />{t('raportBrakow.table.current')}</th>
                                    <th><i className="bi bi-dash-circle me-1" />{t('raportBrakow.table.diff')}</th>
                                    <th><i className="bi bi-clock-history me-1" />{t('raportBrakow.table.lastDelivery')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PROD-001</td>
                                    <td>{t('raportBrakow.example.item1.name')}</td>
                                    <td>10</td>
                                    <td>2</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            -8
                                        </Badge>
                                    </td>
                                    <td>2025-06-10</td>
                                </tr>
                                <tr>
                                    <td>PROD-002</td>
                                    <td>{t('raportBrakow.example.item2.name')}</td>
                                    <td>15</td>
                                    <td>0</td>
                                    <td>
                                        <Badge bg="danger" className="text-uppercase">
                                            -15
                                        </Badge>
                                    </td>
                                    <td>2025-06-12</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};
