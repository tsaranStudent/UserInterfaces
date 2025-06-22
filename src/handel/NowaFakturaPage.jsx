import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Form, Row, Col,
    Button, InputGroup, Table, Card
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NowaFaktura = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-3 mb-3">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-file-earmark-plus icon-unified mb-2" aria-hidden="true" />
                    <h1 className="page-title">
                        <i className="bi bi-receipt me-1" aria-hidden="true" />
                        {t('nowaFaktura.title')}
                    </h1>
                    <p className="text-muted">
                        <i className="bi bi-info-circle me-1" aria-hidden="true" />
                        {t('nowaFaktura.subtitle')}
                    </p>
                </div>

                <Form>
                    {/* Sekcja danych faktury */}
                    <Card className="form-section">
                        <Card.Body>
                            <Row className="g-3">
                                <Col md={3}>
                                    <Form.Label className="form-label">
                                        <i className="bi bi-people me-1" aria-hidden="true" />
                                        {t('nowaFaktura.form.contractor')}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder={t('nowaFaktura.form.contractorPlaceholder')}
                                        className="search-input"
                                    />
                                </Col>
                                <Col md={3}>
                                    <Form.Label className="form-label">
                                        <i className="bi bi-calendar-date me-1" aria-hidden="true" />
                                        {t('nowaFaktura.form.issueDate')}
                                    </Form.Label>
                                    <Form.Control type="date" />
                                </Col>
                                <Col md={2}>
                                    <Form.Label className="form-label">
                                        <i className="bi bi-clock-history me-1" aria-hidden="true" />
                                        {t('nowaFaktura.form.dueDate')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option value="7">{t('nowaFaktura.dueOptions.7')}</option>
                                        <option value="14">{t('nowaFaktura.dueOptions.14')}</option>
                                        <option value="30">{t('nowaFaktura.dueOptions.30')}</option>
                                    </Form.Select>
                                </Col>
                                <Col md={2}>
                                    <Form.Label className="form-label">
                                        <i className="bi bi-credit-card me-1" aria-hidden="true" />
                                        {t('nowaFaktura.form.paymentMethod')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option value="transfer">{t('nowaFaktura.paymentOptions.transfer')}</option>
                                        <option value="cash">{t('nowaFaktura.paymentOptions.cash')}</option>
                                        <option value="card">{t('nowaFaktura.paymentOptions.card')}</option>
                                    </Form.Select>
                                </Col>
                                <Col md={2}>
                                    <Form.Label className="form-label">
                                        <i className="bi bi-receipt-cutoff me-1" aria-hidden="true" />
                                        {t('nowaFaktura.form.invoiceType')}
                                    </Form.Label>
                                    <Form.Select>
                                        <option value="vat">{t('nowaFaktura.invoiceTypes.vat')}</option>
                                        <option value="proforma">{t('nowaFaktura.invoiceTypes.proforma')}</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Sekcja pozycji faktury */}
                    <Card className="form-section">
                        <Card.Body>
                            <h5 className="mb-3">
                                <i className="bi bi-list-ul me-1" aria-hidden="true" />
                                {t('nowaFaktura.items.header')}
                            </h5>
                            <Table bordered responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('nowaFaktura.items.name')}</th>
                                        <th>{t('nowaFaktura.items.qty')}</th>
                                        <th>{t('nowaFaktura.items.unit')}</th>
                                        <th>{t('nowaFaktura.items.netPrice')}</th>
                                        <th>{t('nowaFaktura.items.vat')}</th>
                                        <th>{t('nowaFaktura.items.netValue')}</th>
                                        <th>{t('common.actions.title')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Form.Control type="text" placeholder={t('nowaFaktura.items.name')} />
                                        </td>
                                        <td>
                                            <Form.Control type="number" defaultValue="1" />
                                        </td>
                                        <td>
                                            <Form.Select>
                                                <option>{t('nowaFaktura.units.pcs')}</option>
                                                <option>{t('nowaFaktura.units.kg')}</option>
                                                <option>{t('nowaFaktura.units.m')}</option>
                                            </Form.Select>
                                        </td>
                                        <td>
                                            <InputGroup>
                                                <Form.Control type="number" step="0.01" />
                                                <InputGroup.Text>{t('common.currency')}</InputGroup.Text>
                                            </InputGroup>
                                        </td>
                                        <td>
                                            <Form.Select>
                                                <option>23%</option>
                                                <option>8%</option>
                                                <option>5%</option>
                                                <option>0%</option>
                                            </Form.Select>
                                        </td>
                                        <td>0.00 {t('common.currency')}</td>
                                        <td>
                                            <Button variant="danger" size="sm">
                                                <i className="bi bi-trash me-1" aria-hidden="true" />
                                                {t('common.actions.remove')}
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="outline-primary">
                                <i className="bi bi-plus-circle me-1" aria-hidden="true" />
                                {t('common.actions.add')}
                            </Button>
                        </Card.Body>
                    </Card>

                    {/* Przyciski akcji */}
                    <div className="actions-bar-end form-section">
                        <Link to="/faktury">
                            <Button variant="outline-primary" className="me-3">
                                <i className="bi bi-list-ul me-1" aria-hidden="true" />
                                {t('nowaFaktura.buttons.backVAT')}
                            </Button>
                        </Link>
                        <Link to="/fakturyProforma">
                            <Button variant="outline-primary" className="me-3">
                                <i className="bi bi-list-ul me-1" aria-hidden="true" />
                                {t('nowaFaktura.buttons.backProforma')}
                            </Button>
                        </Link>
                        <Button variant="success" size="lg">
                            <i className="bi bi-save me-1" aria-hidden="true" />
                            {t('common.actions.save')}
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};