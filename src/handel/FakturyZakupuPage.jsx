import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Accordion, Form,
    Row, Col, Button, Badge, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const FakturyZakupu = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-earmark-text me-1" aria-hidden="true" />
                        {t('fakturyZakupu.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('fakturyZakupu.subtitle')}
                    </p>
                </div>

                {/* Sekcja filtrowania */}
                <Accordion defaultActiveKey="filter" className="mb-4 module-tabs">
                    <Accordion.Item eventKey="filter">
                        <Accordion.Header>
                            <i className="bi bi-funnel me-2" />
                            {t('fakturyZakupu.filter.title')}
                        </Accordion.Header>
                        <Accordion.Body>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <Form>
                                        <Row className="g-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-building me-1" />
                                                        {t('fakturyZakupu.filter.supplier')}
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder={t('fakturyZakupu.filter.supplierPlaceholder')}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar-date me-1" />
                                                        {t('fakturyZakupu.filter.dateFrom')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group>
                                                    <Form.Label>
                                                        <i className="bi bi-calendar2-date me-1" />
                                                        {t('fakturyZakupu.filter.dateTo')}
                                                    </Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end mt-3">
                                            <Button variant="secondary" className="me-2">
                                                <i className="bi bi-x-circle me-1" />
                                                {t('fakturyZakupu.actions.clear')}
                                            </Button>
                                            <Button variant="primary">
                                                <i className="bi bi-search me-1" />
                                                {t('fakturyZakupu.actions.search')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Przycisk dodawania */}
                <div className="actions-bar-end mb-4">
                    <Button variant="success">
                        <i className="bi bi-file-earmark-plus me-1" />
                        {t('fakturyZakupu.actions.newInvoice')}
                    </Button>
                </div>

                {/* Tabela faktur */}
                <Card className="shadow-sm">
                    <Card.Body>
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash me-1" />{t('fakturyZakupu.table.invoiceNumber')}</th>
                                    <th><i className="bi bi-building me-1" />{t('fakturyZakupu.table.supplier')}</th>
                                    <th><i className="bi bi-calendar me-1" />{t('fakturyZakupu.table.purchaseDate')}</th>
                                    <th><i className="bi bi-currency-dollar me-1" />{t('fakturyZakupu.table.amount')}</th>
                                    <th><i className="bi bi-info-circle me-1" />{t('fakturyZakupu.table.status')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FZ/2025/07</td>
                                    <td>{t('fakturyZakupu.example.supplier1')}</td>
                                    <td>2025-06-10</td>
                                    <td>4 800,00 zł</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('fakturyZakupu.status.recorded')}
                                        </Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FZ/2025/08</td>
                                    <td>{t('fakturyZakupu.example.supplier2')}</td>
                                    <td>2025-06-12</td>
                                    <td>9 200,00 zł</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('fakturyZakupu.status.pending')}
                                        </Badge>
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
