import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { Container, Row, Col, Tabs, Tab, Button, Form, Table, Accordion, Badge, Card, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Faktury = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-file-text-fill me-1" aria-hidden="true" />
                        {t('faktury.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('faktury.subtitle')}
                    </p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="search" className="mb-4 module-tabs">
                    {/* Wyszukiwanie */}
                    <Tab
                        eventKey="search"
                        title={
                            <>
                                <i className="bi bi-search me-1" aria-hidden="true" />
                                {t('faktury.search.title')}
                            </>
                        }
                    >
                        <Card className="form-section">
                            <Card.Body>
                                <Form>
                                    <Row className="g-3">
                                        <Col md={3}>
                                            <Form.Label className="form-label">
                                                <i className="bi bi-file-earmark-text me-1" aria-hidden="true" />
                                                {t('faktury.search.invoiceNumber')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={t('faktury.search.invoiceNumberPlaceholder')}
                                                className="search-input"
                                            />
                                        </Col>
                                        <Col md={3}>
                                            <Form.Label className="form-label">
                                                <i className="bi bi-people me-1" aria-hidden="true" />
                                                {t('faktury.search.contractor')}
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder={t('faktury.search.contractorPlaceholder')}
                                                className="search-input"
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label className="form-label">
                                                <i className="bi bi-calendar-date me-1" aria-hidden="true" />
                                                {t('faktury.search.dateFrom')}
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label className="form-label">
                                                <i className="bi bi-calendar2-check me-1" aria-hidden="true" />
                                                {t('faktury.search.dateTo')}
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Label className="form-label">
                                                <i className="bi bi-wallet2 me-1" aria-hidden="true" />
                                                {t('faktury.search.paymentStatus')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('faktury.search.all')}</option>
                                                <option value="zaplacona">{t('faktury.status.paid')}</option>
                                                <option value="niezaplacona">{t('faktury.status.unpaid')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <div className="actions-bar-end mt-3">
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-x-circle me-1" aria-hidden="true" />
                                            {t('faktury.buttons.clear')}
                                        </Button>
                                        <Button variant="primary" className="ms-2">
                                            <i className="bi bi-funnel me-1" aria-hidden="true" />
                                            {t('faktury.buttons.filter')}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Tab>

                    {/* Lista faktur */}
                    <Tab
                        eventKey="list"
                        title={
                            <>
                                <i className="bi bi-list-ul me-1" aria-hidden="true" />
                                {t('faktury.tabs.list')}
                            </>
                        }
                    >
                        {/* Wyszukiwanie w liście */}
                        <div className="actions-bar mb-3">
                            <InputGroup className="search-input">
                                <Form.Control placeholder={t('faktury.search.placeholderList')} />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" aria-hidden="true" />
                                </Button>
                            </InputGroup>
                            <div className="actions-bar-end">
                                <Link to="/nowaFaktura">
                                    <Button variant="outline-success" className="me-2">
                                        <i className="bi bi-plus-circle me-1" aria-hidden="true" />
                                        {t('faktury.buttons.newInvoice')}
                                    </Button>
                                </Link>
                                <Link to="/fakturyProforma">
                                    <Button variant="outline-primary">
                                        <i className="bi bi-file-earmark-text-fill me-1" aria-hidden="true" />
                                        {t('faktury.buttons.proformaList')}
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>
                                        <i className="bi bi-hash me-1" aria-hidden="true" />
                                        {t('faktury.table.number')}
                                    </th>
                                    <th>
                                        <i className="bi bi-calendar-date me-1" aria-hidden="true" />
                                        {t('faktury.table.issueDate')}
                                    </th>
                                    <th>
                                        <i className="bi bi-people me-1" aria-hidden="true" />
                                        {t('faktury.table.contractor')}
                                    </th>
                                    <th>
                                        <i className="bi bi-cash-stack me-1" aria-hidden="true" />
                                        {t('faktury.table.grossAmount')}
                                    </th>
                                    <th>
                                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                                        {t('faktury.table.status')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Przykładowe wiersze */}
                                <tr>
                                    <td>FV/2024/001</td>
                                    <td>2024-04-01</td>
                                    <td>{t('faktury.example.companyABC')}</td>
                                    <td>5 000,00 zł</td>
                                    <td>
                                        <Badge bg="success">
                                            <i className="bi bi-check2-circle me-1" aria-hidden="true" />
                                            {t('faktury.status.paid')}
                                        </Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FV/2024/002</td>
                                    <td>2024-04-03</td>
                                    <td>{t('faktury.example.companyXYZ')}</td>
                                    <td>8 500,00 zł</td>
                                    <td>
                                        <Badge bg="danger">
                                            <i className="bi bi-x-circle me-1" aria-hidden="true" />
                                            {t('faktury.status.unpaid')}
                                        </Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FV/2024/003</td>
                                    <td>2024-04-05</td>
                                    <td>{t('faktury.example.janNowak')}</td>
                                    <td>1 200,00 zł</td>
                                    <td>
                                        <Badge bg="success">
                                            <i className="bi bi-check2-circle me-1" aria-hidden="true" />
                                            {t('faktury.status.paid')}
                                        </Badge>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};
