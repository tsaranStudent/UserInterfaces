import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup, Form, Table, Accordion
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Kontakty = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener */}
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-person-lines-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('kontakty.title')}</h1>
                        <p className="text-muted">{t('kontakty.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="lista" className="mb-4">
                        <Tab eventKey="lista" title={t('kontakty.tabs.list')}>
                            {/* Pasek akcji */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-person-plus-fill me-1" /> {t('kontakty.buttons.add')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-funnel me-1" /> {t('kontakty.buttons.filters')}
                                    </Button>
                                </div>
                                <InputGroup className="search-input w-25">
                                    <Form.Control placeholder={t('kontakty.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>

                            {/* Tabela kontaktów */}
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('kontakty.table.id')}</th>
                                        <th>{t('kontakty.table.name')}</th>
                                        <th>{t('kontakty.table.type')}</th>
                                        <th>{t('kontakty.table.email')}</th>
                                        <th>{t('kontakty.table.phone')}</th>
                                        <th>{t('kontakty.table.status')}</th>
                                        <th>{t('kontakty.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>Jan Nowak</td>
                                        <td>{t('kontakty.types.client')}</td>
                                        <td>jan.nowak@firma.pl</td>
                                        <td>+48 600 123 456</td>
                                        <td><span className="badge badge-success">{t('kontakty.status.active')}</span></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye" />
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>002</td>
                                        <td>Maria Wiśniewska</td>
                                        <td>{t('kontakty.types.partner')}</td>
                                        <td>maria.wisniewska@firma.pl</td>
                                        <td>+48 511 789 654</td>
                                        <td><span className="badge badge-planned">{t('kontakty.status.pending')}</span></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye" />
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>003</td>
                                        <td>ABC Sp. z o.o.</td>
                                        <td>{t('kontakty.types.supplier')}</td>
                                        <td>kontakt@abc.pl</td>
                                        <td>+48 800 200 100</td>
                                        <td><span className="badge badge-inactive">{t('kontakty.status.inactive')}</span></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye" />
                                            </Button>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>

                        <Tab eventKey="grupy" title={t('kontakty.tabs.groups')}>
                            {/* Tabela grup */}
                            <div className="form-section mb-3">
                                <h5>{t('kontakty.groups.title')}</h5>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Button variant="primary" size="sm">
                                        <i className="bi bi-plus-circle me-1" /> {t('kontakty.buttons.newGroup')}
                                    </Button>
                                    <span className="text-muted">{t('kontakty.groups.updated')}: 12.03.2025</span>
                                </div>
                                <Table bordered className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('kontakty.groups.name')}</th>
                                            <th>{t('kontakty.groups.count')}</th>
                                            <th>{t('kontakty.groups.created')}</th>
                                            <th>{t('kontakty.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('kontakty.groups.vip')}</td>
                                            <td>10</td>
                                            <td>05.02.2025</td>
                                            <td>
                                                <Button variant="outline-secondary" size="sm">
                                                    <i className="bi bi-pencil" />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{t('kontakty.groups.strategic')}</td>
                                            <td>7</td>
                                            <td>20.01.2025</td>
                                            <td>
                                                <Button variant="outline-secondary" size="sm">
                                                    <i className="bi bi-pencil" />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>

                    {/* Formularz dodawania kontaktu */}
                    <Accordion className="form-section mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('kontakty.form.addContact')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}><Form.Control placeholder={t('kontakty.form.firstName')} required /></Col>
                                        <Col md={4}><Form.Control placeholder={t('kontakty.form.lastName')} required /></Col>
                                        <Col md={4}>
                                            <Form.Select required>
                                                <option>{t('kontakty.form.selectType')}</option>
                                                <option>{t('kontakty.types.client')}</option>
                                                <option>{t('kontakty.types.supplier')}</option>
                                                <option>{t('kontakty.types.partner')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}><Form.Control placeholder={t('kontakty.form.email')} type="email" required /></Col>
                                        <Col md={6}><Form.Control placeholder={t('kontakty.form.phone')} /></Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="success" className="me-2">
                                            <i className="bi bi-save me-1" /> {t('kontakty.buttons.saveNew')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-check-circle me-1" /> {t('kontakty.buttons.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Statystyki */}
                    <Row className="form-section text-center">
                        <Col md={4} className="mb-3">
                            <h5>{t('kontakty.stats.new2025')}</h5>
                            <h3 className="text-primary">18</h3>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5>{t('kontakty.stats.active')}</h5>
                            <h3 className="text-success">36</h3>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5>{t('kontakty.stats.total')}</h5>
                            <h3 className="text-info">72</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};