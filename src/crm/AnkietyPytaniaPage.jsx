import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col,
    Badge, Button, Card, Tabs, Tab, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const AnkietyPytania = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-question-circle icon-unified mb-2" />
                <h1 className="page-title">{t('ankietyPytania.title')}</h1>
                <p className="text-muted">{t('ankietyPytania.subtitle')}</p>
            </div>

            <Tabs defaultActiveKey="wszystkie" className="module-tabs">
                {/* Zakładka: Lista pytań */}
                <Tab eventKey="wszystkie" title={<><i className="bi bi-list-ul me-1" />{t('ankietyPytania.tabs.allQuestions')}</>}>
                    <div className="form-section">
                        <div className="actions-bar">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />{t('ankietyPytania.buttons.newQuestion')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup className="search-input">
                                    <Form.Control placeholder={t('ankietyPytania.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-card-text" /> {t('ankietyPytania.table.questionText')}</th>
                                    <th><i className="bi bi-sliders" /> {t('ankietyPytania.table.type')}</th>
                                    <th><i className="bi bi-folder" /> {t('ankietyPytania.table.group')}</th>
                                    <th><i className="bi bi-calendar" /> {t('ankietyPytania.table.addedDate')}</th>
                                    <th><i className="bi bi-check2-circle" /> {t('ankietyPytania.table.status')}</th>
                                    <th><i className="bi bi-tools" /> {t('ankietyPytania.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('ankietyPytania.example.productRating')}</td>
                                    <td><Badge bg="info">{t('ankietyPytania.questionTypes.ratingScale')}</Badge></td>
                                    <td>{t('ankietyPytania.groups.satisfaction')}</td>
                                    <td>15.01.2025</td>
                                    <td><Badge bg="success">{t('ankietyPytania.status.active')}</Badge></td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-1">{t('ankietyPytania.buttons.edit')}</Button>
                                        <Button size="sm" variant="outline-danger">{t('ankietyPytania.buttons.delete')}</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t('ankietyPytania.example.importantFeatures')}</td>
                                    <td><Badge bg="warning">{t('ankietyPytania.questionTypes.multipleChoice')}</Badge></td>
                                    <td>{t('ankietyPytania.groups.preferences')}</td>
                                    <td>20.02.2025</td>
                                    <td><Badge bg="secondary">{t('ankietyPytania.status.archived')}</Badge></td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-1">{t('ankietyPytania.buttons.edit')}</Button>
                                        <Button size="sm" variant="outline-danger">{t('ankietyPytania.buttons.delete')}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* Zakładka: Nowe pytanie */}
                <Tab eventKey="nowe" title={<><i className="bi bi-patch-plus me-1" />{t('ankietyPytania.tabs.newQuestion')}</>}>
                    <div className="form-section">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>{t('ankietyPytania.form.questionText')}</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder={t('ankietyPytania.form.questionPlaceholder')}
                                />
                            </Form.Group>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>{t('ankietyPytania.form.questionType')}</Form.Label>
                                    <Form.Select>
                                        <option>{t('ankietyPytania.form.selectPlaceholder')}</option>
                                        <option>{t('ankietyPytania.questionTypes.singleChoice')}</option>
                                        <option>{t('ankietyPytania.questionTypes.multipleChoice')}</option>
                                        <option>{t('ankietyPytania.questionTypes.ratingScale')}</option>
                                        <option>{t('ankietyPytania.questionTypes.textAnswer')}</option>
                                    </Form.Select>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>{t('ankietyPytania.form.questionGroup')}</Form.Label>
                                    <Form.Select>
                                        <option>{t('ankietyPytania.groups.none')}</option>
                                        <option>{t('ankietyPytania.groups.satisfaction')}</option>
                                        <option>{t('ankietyPytania.groups.preferences')}</option>
                                        <option>{t('ankietyPytania.groups.demographics')}</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <i className="bi bi-ui-checks me-2" />
                                        {t('ankietyPytania.form.answerOptions')}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Group className="mb-2">
                                            <Form.Label>{t('ankietyPytania.form.option')} 1</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-2">
                                            <Form.Label>{t('ankietyPytania.form.option')} 2</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Button size="sm" variant="outline-secondary">
                                            <i className="bi bi-plus-circle me-1" />
                                            {t('ankietyPytania.buttons.addOption')}
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Form.Check
                                className="mt-3 mb-3"
                                type="checkbox"
                                label={t('ankietyPytania.form.requiredQuestion')}
                                defaultChecked
                            />

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    {t('ankietyPytania.buttons.cancel')}
                                </Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" />
                                    {t('ankietyPytania.buttons.saveQuestion')}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>

                {/* Zakładka: Statystyki */}
                <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart me-1" />{t('ankietyPytania.tabs.statistics')}</>}>
                    <div className="form-section">
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">
                                    <i className="bi bi-graph-up-arrow me-2" />
                                    {t('ankietyPytania.statistics.usageStats')}
                                </h5>
                                <Table bordered responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('ankietyPytania.table.question')}</th>
                                            <th>{t('ankietyPytania.table.surveys')}</th>
                                            <th>{t('ankietyPytania.table.lastUsed')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('ankietyPytania.example.productRating')}</td>
                                            <td>8</td>
                                            <td>10.03.2025</td>
                                        </tr>
                                        <tr>
                                            <td>{t('ankietyPytania.example.importantFeatures')}</td>
                                            <td>5</td>
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
                <div className="summary-text">
                    <strong>{t('ankietyPytania.summary.activeQuestions')}:</strong> 24
                </div>
                <div className="summary-text">
                    <strong>{t('ankietyPytania.summary.lastAdded')}:</strong> 20.02.2025
                </div>
            </div>
        </Container>
    );
};