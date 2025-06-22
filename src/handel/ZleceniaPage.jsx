import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Table, Tabs, Tab, Card, Form,
    Row, Col, Button, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Zlecenia = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-4">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-tools me-1" aria-hidden="true" />
                        {t('zlecenia.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('zlecenia.subtitle')}
                    </p>
                </div>

                {/* Pasek akcji */}
                <Card className="shadow-sm mb-4">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Form className="d-flex search-input w-50">
                            <i className="bi bi-search me-2 align-self-center" />
                            <Form.Control
                                type="search"
                                placeholder={t('zlecenia.actions.searchPlaceholder')}
                            />
                        </Form>
                        <Button variant="primary">
                            <i className="bi bi-plus-circle me-1" />
                            {t('zlecenia.actions.new')}
                        </Button>
                    </Card.Body>
                </Card>

                {/* Filtry */}
                <Card className="form-section mb-4 shadow-sm">
                    <Card.Body>
                        <Form>
                            <Row className="g-3 align-items-end">
                                <Col md={3}>
                                    <Form.Label>
                                        <i className="bi bi-calendar-date me-1" />
                                        {t('zlecenia.filter.dateFrom')}
                                    </Form.Label>
                                    <Form.Control type="date" />
                                </Col>
                                <Col md={3}>
                                    <Form.Label>
                                        <i className="bi bi-calendar2-date me-1" />
                                        {t('zlecenia.filter.dateTo')}
                                    </Form.Label>
                                    <Form.Control type="date" />
                                </Col>
                                <Col md={4}>
                                    <Form.Label>
                                        <i className="bi bi-card-text me-1" />
                                        {t('zlecenia.filter.title')}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={t('zlecenia.filter.titlePlaceholder')}
                                    />
                                </Col>
                                <Col md={2} className="d-grid">
                                    <Button variant="outline-primary">
                                        {t('zlecenia.actions.applyFilter')}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>

                {/* Zakładki zleceń */}
                <Tabs defaultActiveKey="open" className="module-tabs mb-4">
                    <Tab eventKey="open" title={t('zlecenia.tabs.open')}>
                        <Table striped hover responsive className="data-table mt-3">
                            <thead>
                                <tr>
                                    <th>{t('zlecenia.table.orderNo')}</th>
                                    <th>{t('zlecenia.table.title')}</th>
                                    <th>{t('zlecenia.table.created')}</th>
                                    <th>{t('zlecenia.table.due')}</th>
                                    <th>{t('zlecenia.table.status')}</th>
                                    <th>{t('zlecenia.table.priority')}</th>
                                    <th>{t('zlecenia.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ZLC/2025/07/001</td>
                                    <td>Naprawa dachu</td>
                                    <td>2025-06-10</td>
                                    <td>2025-06-17</td>
                                    <td>
                                        <Badge bg="warning" className="text-uppercase">
                                            {t('zlecenia.status.inProgress')}
                                        </Badge>
                                    </td>
                                    <td>{t('zlecenia.priority.high')}</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zlecenia.actions.details')}
                                        </Button>{' '}
                                        <Button variant="outline-success" size="sm" className="ms-2">
                                            {t('zlecenia.actions.approve')}
                                        </Button>{' '}
                                        <Button variant="outline-danger" size="sm" className="ms-2">
                                            {t('zlecenia.actions.cancel')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ZLC/2025/07/002</td>
                                    <td>Montaż okien</td>
                                    <td>2025-06-12</td>
                                    <td>2025-06-19</td>
                                    <td>
                                        <Badge bg="info" className="text-uppercase">
                                            {t('zlecenia.status.pending')}
                                        </Badge>
                                    </td>
                                    <td>{t('zlecenia.priority.medium')}</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zlecenia.actions.details')}
                                        </Button>{' '}
                                        <Button variant="outline-warning" size="sm" className="ms-2">
                                            {t('zlecenia.actions.wait')}
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="closed" title={t('zlecenia.tabs.closed')}>
                        <Table striped hover responsive className="data-table mt-3">
                            <thead>
                                <tr>
                                    <th>{t('zlecenia.table.orderNo')}</th>
                                    <th>{t('zlecenia.table.title')}</th>
                                    <th>{t('zlecenia.table.created')}</th>
                                    <th>{t('zlecenia.table.closed')}</th>
                                    <th>{t('zlecenia.table.status')}</th>
                                    <th>{t('zlecenia.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ZLC/2025/06/010</td>
                                    <td>Malowanie biura</td>
                                    <td>2025-06-01</td>
                                    <td>2025-06-05</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('zlecenia.status.done')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zlecenia.actions.details')}
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>ZLC/2025/06/011</td>
                                    <td>Wymiana oświetlenia</td>
                                    <td>2025-06-03</td>
                                    <td>2025-06-07</td>
                                    <td>
                                        <Badge bg="success" className="text-uppercase">
                                            {t('zlecenia.status.done')}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">
                                            {t('zlecenia.actions.details')}
                                        </Button>
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
