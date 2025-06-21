import React from 'react';
import { Container, Row, Col, Card, Alert, Button, ProgressBar, Table, Badge, Tabs, Tab, InputGroup, Form, Accordion } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const Kontrahenci = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-people-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('kontrahenci.title')}</h1>
                        <p className="text-muted">{t('kontrahenci.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="all" className="mb-4">
                        <Tab eventKey="all" title={t('kontrahenci.tabs.all')}>
                            {/* Pasek akcji */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-building-add me-1" />{t('kontrahenci.actions.add')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-funnel me-1" />{t('kontrahenci.actions.filter')}
                                    </Button>
                                </div>
                                <InputGroup className="search-input w-25">
                                    <Form.Control placeholder={t('kontrahenci.searchPlaceholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>

                            {/* Tabela kontrahentów */}
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('kontrahenci.table.id')}</th>
                                        <th>{t('kontrahenci.table.name')}</th>
                                        <th>{t('kontrahenci.table.nip')}</th>
                                        <th>{t('kontrahenci.table.group')}</th>
                                        <th>{t('kontrahenci.table.transactions')}</th>
                                        <th>{t('kontrahenci.table.status')}</th>
                                        <th>{t('kontrahenci.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>TechSolutions Sp. z o.o.</td>
                                        <td>1234567890</td>
                                        <td>{t('kontrahenci.groups.business')}</td>
                                        <td>1 245 678 PLN</td>
                                        <td><Badge bg="success">{t('kontrahenci.status.active')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye" /> {t('kontrahenci.actions.view')}
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" /> {t('kontrahenci.actions.edit')}
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>002</td>
                                        <td>AlphaCorp</td>
                                        <td>0987654321</td>
                                        <td>{t('kontrahenci.groups.partner')}</td>
                                        <td>879 000 PLN</td>
                                        <td><Badge bg="warning">{t('kontrahenci.status.pending')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye" /> {t('kontrahenci.actions.view')}
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" /> {t('kontrahenci.actions.edit')}
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>003</td>
                                        <td>BetaTrade</td>
                                        <td>1122334455</td>
                                        <td>{t('kontrahenci.groups.standard')}</td>
                                        <td>456 300 PLN</td>
                                        <td><Badge bg="danger">{t('kontrahenci.status.inactive')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye" /> {t('kontrahenci.actions.view')}
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" /> {t('kontrahenci.actions.edit')}
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="groups" title={t('kontrahenci.tabs.groups')}>
                            <div className="form-section mb-3">
                                <h5>{t('kontrahenci.groups.manageHeader')}</h5>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Button variant="primary" size="sm">
                                        <i className="bi bi-plus-circle me-1" /> {t('kontrahenci.groups.add')}
                                    </Button>
                                    <span className="text-muted">{t('kontrahenci.groups.updated', { date: '15.01.2025' })}</span>
                                </div>
                                <Table bordered className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('kontrahenci.groups.table.group')}</th>
                                            <th>{t('kontrahenci.groups.table.count')}</th>
                                            <th>{t('kontrahenci.groups.table.date')}</th>
                                            <th>{t('kontrahenci.groups.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {['business', 'partner', 'standard'].map(key => (
                                            <tr key={key}>
                                                <td>{t(`kontrahenci.groups.${key}`)}</td>
                                                <td>{t(`kontrahenci.groups.counts.${key}`)}</td>
                                                <td>{t(`kontrahenci.groups.dates.${key}`)}</td>
                                                <td>
                                                    <Button variant="outline-secondary" size="sm">
                                                        <i className="bi bi-pencil" /> {t('kontrahenci.actions.edit')}
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* Szybkie dodawanie */}
                    <Accordion className="form-section mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('kontrahenci.quickAdd.header')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}>
                                            <Form.Control placeholder={t('kontrahenci.quickAdd.placeholders.name')} required />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control placeholder={t('kontrahenci.quickAdd.placeholders.nip')} pattern="\d{10}" required />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select required>
                                                <option>{t('kontrahenci.quickAdd.placeholders.group')}</option>
                                                <option>{t('kontrahenci.groups.business')}</option>
                                                <option>{t('kontrahenci.groups.partner')}</option>
                                                <option>{t('kontrahenci.groups.standard')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="success" className="me-2">
                                            <i className="bi bi-save me-1" /> {t('kontrahenci.quickAdd.actions.saveNew')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-check-circle me-1" /> {t('kontrahenci.quickAdd.actions.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Statystyki */}
                    <Row className="form-section text-center">
                        <Col md={4} className="mb-3">
                            <h5>{t('kontrahenci.stats.new2025')}</h5>
                            <h3 className="text-primary">{t('kontrahenci.stats.values.new')}</h3>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5>{t('kontrahenci.stats.active')}</h5>
                            <h3 className="text-success">{t('kontrahenci.stats.values.active')}</h3>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5>{t('kontrahenci.stats.transactions')}</h5>
                            <h3 className="text-info">{t('kontrahenci.stats.values.transactions')}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};
