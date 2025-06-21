import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, Card, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const AnkietyGrupyZapytan = () => {
    const { t } = useTranslation();

    return (
        <div className="background">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-journal-text icon-unified mb-2" />
                    <h1 className="page-title">{t('ankietyGrupyZapytan.title')}</h1>
                    <p className="text-muted">{t('ankietyGrupyZapytan.subtitle')}</p>
                </div>

                <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                    {/* Lista */}
                    <Tab eventKey="lista" title={<><i className="bi bi-list-ul me-1" />{t('ankietyGrupyZapytan.tabs.list')}</>}>
                        <div className="form-section mb-4">
                            <div className="actions-bar d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <Button variant="primary" className="me-2">
                                        <i className="bi bi-plus-circle me-1" />{t('ankietyGrupyZapytan.buttons.newGroup')}
                                    </Button>
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-upload me-1" />{t('ankietyGrupyZapytan.buttons.import')}
                                    </Button>
                                </div>
                                <InputGroup className="search-input w-25">
                                    <Form.Control placeholder={t('ankietyGrupyZapytan.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>

                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('ankietyGrupyZapytan.table.groupName')}</th>
                                        <th>{t('ankietyGrupyZapytan.table.category')}</th>
                                        <th>{t('ankietyGrupyZapytan.table.questions')}</th>
                                        <th>{t('ankietyGrupyZapytan.table.created')}</th>
                                        <th>{t('ankietyGrupyZapytan.table.status')}</th>
                                        <th>{t('ankietyGrupyZapytan.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('ankietyGrupyZapytan.example.customerSatisfaction')}</td>
                                        <td>{t('ankietyGrupyZapytan.categories.customerService')}</td>
                                        <td>5</td>
                                        <td>10.01.2025</td>
                                        <td><Badge bg="success">{t('ankietyGrupyZapytan.status.active')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">{t('ankietyGrupyZapytan.buttons.preview')}</Button>
                                            <Button variant="outline-success" size="sm" className="me-1">{t('ankietyGrupyZapytan.buttons.use')}</Button>
                                            <Button variant="outline-danger" size="sm">{t('ankietyGrupyZapytan.buttons.delete')}</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{t('ankietyGrupyZapytan.example.hrEvaluation')}</td>
                                        <td>{t('ankietyGrupyZapytan.categories.management')}</td>
                                        <td>3</td>
                                        <td>15.03.2025</td>
                                        <td><Badge bg="warning">{t('ankietyGrupyZapytan.status.draft')}</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">{t('ankietyGrupyZapytan.buttons.preview')}</Button>
                                            <Button variant="outline-success" size="sm" className="me-1">{t('ankietyGrupyZapytan.buttons.use')}</Button>
                                            <Button variant="outline-danger" size="sm">{t('ankietyGrupyZapytan.buttons.delete')}</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    {/* Nowa grupa */}
                    <Tab eventKey="nowa" title={<><i className="bi bi-ui-checks me-1" />{t('ankietyGrupyZapytan.tabs.newGroup')}</>}>
                        <div className="form-section">
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Label>{t('ankietyGrupyZapytan.form.groupName')}</Form.Label>
                                        <Form.Control placeholder={t('ankietyGrupyZapytan.form.groupNamePlaceholder')} required />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>{t('ankietyGrupyZapytan.form.category')}</Form.Label>
                                        <Form.Select required>
                                            <option>{t('ankietyGrupyZapytan.categories.customerService')}</option>
                                            <option>{t('ankietyGrupyZapytan.categories.management')}</option>
                                            <option>{t('ankietyGrupyZapytan.categories.marketResearch')}</option>
                                            <option>{t('ankietyGrupyZapytan.categories.other')}</option>
                                        </Form.Select>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>{t('ankietyGrupyZapytan.form.description')}</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <h5 className="mb-3"><i className="bi bi-patch-question me-2" />{t('ankietyGrupyZapytan.form.questionsInGroup')}</h5>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>1. {t('ankietyGrupyZapytan.example.question1')}</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Label>{t('ankietyGrupyZapytan.form.questionType')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('ankietyGrupyZapytan.questionTypes.scale')}</option>
                                                <option>{t('ankietyGrupyZapytan.questionTypes.yesNo')}</option>
                                                <option>{t('ankietyGrupyZapytan.questionTypes.openText')}</option>
                                            </Form.Select>
                                            <Button variant="outline-danger" size="sm" className="mt-3">
                                                <i className="bi bi-trash me-1" />{t('ankietyGrupyZapytan.buttons.deleteQuestion')}
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <div className="mt-3">
                                    <Button variant="outline-primary" className="me-2">
                                        <i className="bi bi-plus-circle me-1" />{t('ankietyGrupyZapytan.buttons.addQuestion')}
                                    </Button>
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-journal-richtext me-1" />{t('ankietyGrupyZapytan.buttons.fromLibrary')}
                                    </Button>
                                </div>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">{t('ankietyGrupyZapytan.buttons.cancel')}</Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1" />{t('ankietyGrupyZapytan.buttons.saveGroup')}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>

                    {/* Statystyki */}
                    <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />{t('ankietyGrupyZapytan.tabs.statistics')}</>}>
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <h5><i className="bi bi-graph-up-arrow me-2" />{t('ankietyGrupyZapytan.statistics.title')}</h5>
                                    <Table bordered responsive className="data-table mt-3">
                                        <thead>
                                            <tr>
                                                <th>{t('ankietyGrupyZapytan.statistics.group')}</th>
                                                <th>{t('ankietyGrupyZapytan.statistics.usage')}</th>
                                                <th>{t('ankietyGrupyZapytan.statistics.lastUsed')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t('ankietyGrupyZapytan.example.customerSatisfaction')}</td>
                                                <td>18</td>
                                                <td>12.06.2025</td>
                                            </tr>
                                            <tr>
                                                <td>{t('ankietyGrupyZapytan.example.hrEvaluation')}</td>
                                                <td>9</td>
                                                <td>09.06.2025</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>
                </Tabs>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <i className="bi bi-puzzle me-1" />
                        <strong>{t('ankietyGrupyZapytan.summary.totalGroups')}:</strong> 5
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-bar-chart me-1" />
                        <strong>{t('ankietyGrupyZapytan.summary.mostUsed')}:</strong> {t('ankietyGrupyZapytan.example.customerSatisfaction')} (18 {t('ankietyGrupyZapytan.summary.uses')})
                    </div>
                </div>
            </Container>
        </div>
    );
};