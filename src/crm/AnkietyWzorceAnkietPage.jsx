import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col,
    Badge, Button, Card, Tabs, Tab, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const AnkietyWzorceAnkiet = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-ui-checks icon-unified mb-2" />
                <h1 className="page-title">{t('ankietyWzorce.title')}</h1>
                <p className="text-muted">{t('ankietyWzorce.subtitle')}</p>
            </div>

            <Tabs defaultActiveKey="wzorce" className="module-tabs">
                {/* Zakładka: Lista wzorców */}
                <Tab eventKey="wzorce" title={<><i className="bi bi-list-task me-1" />{t('ankietyWzorce.tabs.templates')}</>}>
                    <div className="form-section">
                        <div className="actions-bar">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />{t('ankietyWzorce.buttons.newTemplate')}
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-upload me-1" />{t('ankietyWzorce.buttons.import')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup className="search-input">
                                    <Form.Control placeholder={t('ankietyWzorce.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-file-earmark-text" /> {t('ankietyWzorce.table.name')}</th>
                                    <th><i className="bi bi-tags" /> {t('ankietyWzorce.table.category')}</th>
                                    <th><i className="bi bi-patch-question" /> {t('ankietyWzorce.table.questions')}</th>
                                    <th><i className="bi bi-calendar-event" /> {t('ankietyWzorce.table.date')}</th>
                                    <th><i className="bi bi-check2-circle" /> {t('ankietyWzorce.table.status')}</th>
                                    <th><i className="bi bi-tools" /> {t('ankietyWzorce.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('ankietyWzorce.example.customerSatisfaction')}</td>
                                    <td>{t('ankietyWzorce.categories.marketResearch')}</td>
                                    <td>12</td>
                                    <td>15.01.2025</td>
                                    <td><Badge bg="success">{t('ankietyWzorce.status.active')}</Badge></td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-1">{t('ankietyWzorce.buttons.preview')}</Button>
                                        <Button size="sm" variant="outline-success" className="me-1">{t('ankietyWzorce.buttons.use')}</Button>
                                        <Button size="sm" variant="outline-danger">{t('ankietyWzorce.buttons.delete')}</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t('ankietyWzorce.example.trainingEvaluation')}</td>
                                    <td>{t('ankietyWzorce.categories.hr')}</td>
                                    <td>8</td>
                                    <td>20.02.2025</td>
                                    <td><Badge bg="warning">{t('ankietyWzorce.status.draft')}</Badge></td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-1">{t('ankietyWzorce.buttons.preview')}</Button>
                                        <Button size="sm" variant="outline-success" className="me-1">{t('ankietyWzorce.buttons.use')}</Button>
                                        <Button size="sm" variant="outline-danger">{t('ankietyWzorce.buttons.delete')}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* Zakładka: Nowy wzorzec */}
                <Tab eventKey="nowy" title={<><i className="bi bi-file-plus me-1" />{t('ankietyWzorce.tabs.newTemplate')}</>}>
                    <div className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>{t('ankietyWzorce.form.templateName')}</Form.Label>
                                    <Form.Control type="text" placeholder={t('ankietyWzorce.form.namePlaceholder')} />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>{t('ankietyWzorce.form.category')}</Form.Label>
                                    <Form.Select>
                                        <option>{t('ankietyWzorce.categories.marketResearch')}</option>
                                        <option>{t('ankietyWzorce.categories.hr')}</option>
                                        <option>{t('ankietyWzorce.categories.customerService')}</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>{t('ankietyWzorce.form.description')}</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><i className="bi bi-patch-question me-2" />{t('ankietyWzorce.form.question')} 1</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label>{t('ankietyWzorce.form.questionType')}</Form.Label>
                                            <Form.Select>
                                                <option>{t('ankietyWzorce.questionTypes.scale')}</option>
                                                <option>{t('ankietyWzorce.questionTypes.yesNo')}</option>
                                                <option>{t('ankietyWzorce.questionTypes.text')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Button variant="outline-danger" size="sm">
                                            <i className="bi bi-trash" /> {t('ankietyWzorce.buttons.deleteQuestion')}
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Button variant="outline-primary" className="mt-3 me-2">
                                <i className="bi bi-plus-circle me-1" /> {t('ankietyWzorce.buttons.addQuestion')}
                            </Button>
                            <Button variant="outline-secondary">
                                <i className="bi bi-collection me-1" /> {t('ankietyWzorce.buttons.fromLibrary')}
                            </Button>

                            <div className="actions-bar-end mt-4">
                                <Button variant="outline-secondary" className="me-2">{t('ankietyWzorce.buttons.cancel')}</Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" />{t('ankietyWzorce.buttons.saveTemplate')}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>

                {/* Zakładka: Statystyki */}
                <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />{t('ankietyWzorce.tabs.statistics')}</>}>
                    <div className="form-section">
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3"><i className="bi bi-graph-up" /> {t('ankietyWzorce.statistics.usage')}</h5>
                                <Table bordered responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('ankietyWzorce.table.template')}</th>
                                            <th>{t('ankietyWzorce.table.usageCount')}</th>
                                            <th>{t('ankietyWzorce.table.lastUsed')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('ankietyWzorce.example.customerSatisfaction')}</td>
                                            <td>24</td>
                                            <td>10.03.2025</td>
                                        </tr>
                                        <tr>
                                            <td>{t('ankietyWzorce.example.trainingEvaluation')}</td>
                                            <td>15</td>
                                            <td>15.02.2025</td>
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
                <div className="summary-text"><strong>{t('ankietyWzorce.summary.templatesCount')}:</strong> 8</div>
                <div className="summary-text"><strong>{t('ankietyWzorce.summary.mostUsed')}:</strong> {t('ankietyWzorce.example.customerSatisfaction')} (24 {t('ankietyWzorce.summary.uses')})</div>
            </div>
        </Container>
    );
};