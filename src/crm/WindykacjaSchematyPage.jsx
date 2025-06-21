import React from 'react';
import {
    Container, Tabs, Tab, Form, Row, Col, Button,
    Badge, Card, Accordion, Table
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next'; // Dodane: Import hooka do tłumaczeń

export const WindykacjaSchematy = () => {
    const { t } = useTranslation(); // Dodane: Inicjalizacja hooka useTranslation

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-exclamation-triangle-fill icon-unified mb-2" />
                <h1 className="page-title">{t('windykacjaSchematy.title')}</h1>
                <p className="text-muted">{t('windykacjaSchematy.subtitle')}</p>
            </div>

            {/* Zakładki */}
            <Tabs defaultActiveKey="schematy" className="mb-4 module-tabs">
                <Tab eventKey="schematy" title={<><i className="bi bi-list-ul me-1" />{t('windykacjaSchematy.tabs.listSchemes')}</>}>
                    <div className="form-section">
                        <div className="actions-bar">
                            <div className="actions-bar-start">
                                <Button variant="primary"><i className="bi bi-plus-circle me-1" />{t('windykacjaSchematy.list.newSchemeButton')}</Button>
                                <Button variant="outline-secondary"><i className="bi bi-upload me-1" />{t('windykacjaSchematy.list.importButton')}</Button>
                            </div>
                            <div className="actions-bar-end">
                                <Form.Control type="text" placeholder={t('windykacjaSchematy.list.searchPlaceholder')} className="search-input" />
                            </div>
                        </div>

                        <Card className="shadow-sm">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><i className="bi bi-diagram-3-fill me-2" />{t('windykacjaSchematy.list.standardProcessTitle')}</Accordion.Header>
                                    <Accordion.Body>
                                        <Table borderless className="data-table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>{t('windykacjaSchematy.list.table.step')}</th>
                                                    <th>{t('windykacjaSchematy.list.table.action')}</th>
                                                    <th>{t('windykacjaSchematy.list.table.deadline')}</th>
                                                    <th>{t('windykacjaSchematy.list.table.status')}</th>
                                                    <th>{t('windykacjaSchematy.list.table.actions')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>{t('windykacjaSchematy.list.table.sendReminder')}</td>
                                                    <td>+7 {t('windykacjaSchematy.list.table.days')}</td>
                                                    <td><Badge bg="success">{t('windykacjaSchematy.list.table.activeStatus')}</Badge></td>
                                                    <td>
                                                        <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                                        <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>{t('windykacjaSchematy.list.table.recoveryCall')}</td>
                                                    <td>+14 {t('windykacjaSchematy.list.table.days')}</td>
                                                    <td><Badge bg="success">{t('windykacjaSchematy.list.table.activeStatus')}</Badge></td>
                                                    <td>
                                                        <Button variant="outline-primary" size="sm" className="me-1"><i className="bi bi-pencil" /></Button>
                                                        <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /></Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </div>
                </Tab>

                <Tab eventKey="nowy" title={<><i className="bi bi-plus-square-fill me-1" />{t('windykacjaSchematy.tabs.newScheme')}</>}>
                    <div className="form-section">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Label>{t('windykacjaSchematy.newScheme.schemeNameLabel')}*</Form.Label>
                                            <Form.Control type="text" placeholder={t('windykacjaSchematy.newScheme.schemeNamePlaceholder')} required />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label>{t('windykacjaSchematy.newScheme.clientTypeLabel')}*</Form.Label>
                                            <Form.Select required>
                                                <option>{t('windykacjaSchematy.newScheme.clientTypeStandard')}</option>
                                                <option>{t('windykacjaSchematy.newScheme.clientTypeVIP')}</option>
                                                <option>{t('windykacjaSchematy.newScheme.clientTypeCorporate')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>

                                    <h5 className="mb-3"><i className="bi bi-cursor-fill me-1" />{t('windykacjaSchematy.newScheme.stepsInSchemeTitle')}</h5>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header><i className="bi bi-1-circle me-2" />{t('windykacjaSchematy.newScheme.step1Title')}</Accordion.Header>
                                            <Accordion.Body>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>{t('windykacjaSchematy.newScheme.actionTypeLabel')}</Form.Label>
                                                    <Form.Select>
                                                        <option>{t('windykacjaSchematy.newScheme.actionTypeEmail')}</option>
                                                        <option>{t('windykacjaSchematy.newScheme.actionTypeSMS')}</option>
                                                        <option>{t('windykacjaSchematy.newScheme.actionTypeList')}</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Button variant="outline-danger" size="sm"><i className="bi bi-trash" /> {t('windykacjaSchematy.newScheme.deleteStepButton')}</Button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                    <Button variant="outline-primary" className="mt-3 me-2">
                                        <i className="bi bi-plus-circle" /> {t('windykacjaSchematy.newScheme.addStepButton')}
                                    </Button>

                                    <div className="actions-bar-end mt-4">
                                        <Button variant="outline-secondary" className="me-2">
                                            <i className="bi bi-x-lg" /> {t('windykacjaSchematy.newScheme.cancelButton')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-check-circle" /> {t('windykacjaSchematy.newScheme.saveSchemeButton')}
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Tab>
            </Tabs>

            {/* Podsumowanie */}
            <div className="summary-box mt-4">
                <div className="summary-text">
                    <i className="bi bi-layers-fill me-1" /><strong>{t('windykacjaSchematy.summary.activeSchemes')}:</strong> 5
                </div>
                <div className="summary-text">
                    <i className="bi bi-clock-history me-1" /><strong>{t('windykacjaSchematy.summary.lastModified')}:</strong> 15.05.2025
                </div>
            </div>
        </Container>
    );
};
