import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col, Button, Badge,
    Card, Tab, Tabs, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import { useTranslation } from 'react-i18next';

export const AnkietySzablonyOdpowiedzi = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-chat-left-dots icon-unified mb-2" />
                <h1 className="page-title">{t('ankietySzablony.title')}</h1>
                <p className="text-muted">{t('ankietySzablony.subtitle')}</p>
            </div>

            <Tabs defaultActiveKey="szablony" className="module-tabs">
                {/* Lista szablonów */}
                <Tab eventKey="szablony" title={<><i className="bi bi-collection me-1" />{t('ankietySzablony.tabs.templates')}</>}>
                    <div className="form-section">
                        <div className="actions-bar">
                            <div className="actions-bar-start">
                                <Button variant="primary">
                                    <i className="bi bi-plus-circle me-1" />{t('ankietySzablony.buttons.newTemplate')}
                                </Button>
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup className="search-input">
                                    <Form.Control placeholder={t('ankietySzablony.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>{t('ankietySzablony.table.name')}</th>
                                    <th>{t('ankietySzablony.table.type')}</th>
                                    <th>{t('ankietySzablony.table.optionsCount')}</th>
                                    <th>{t('ankietySzablony.table.date')}</th>
                                    <th>{t('ankietySzablony.table.status')}</th>
                                    <th>{t('ankietySzablony.table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{t('ankietySzablony.example.satisfactionScale')}</td>
                                    <td><Badge bg="info">{t('ankietySzablony.types.scale')}</Badge></td>
                                    <td>5</td>
                                    <td>15.01.2025</td>
                                    <td><Badge bg="success">{t('ankietySzablony.status.active')}</Badge></td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-1">{t('ankietySzablony.buttons.edit')}</Button>
                                        <Button size="sm" variant="outline-danger">{t('ankietySzablony.buttons.delete')}</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{t('ankietySzablony.example.qualityRating')}</td>
                                    <td><Badge bg="warning">{t('ankietySzablony.types.list')}</Badge></td>
                                    <td>4</td>
                                    <td>20.02.2025</td>
                                    <td><Badge bg="warning">{t('ankietySzablony.status.draft')}</Badge></td>
                                    <td>
                                        <Button size="sm" variant="outline-primary" className="me-1">{t('ankietySzablony.buttons.edit')}</Button>
                                        <Button size="sm" variant="outline-danger">{t('ankietySzablony.buttons.delete')}</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* Nowy szablon */}
                <Tab eventKey="nowy" title={<><i className="bi bi-pencil-square me-1" />{t('ankietySzablony.tabs.newTemplate')}</>}>
                    <div className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>{t('ankietySzablony.form.templateName')}</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>{t('ankietySzablony.form.responseType')}</Form.Label>
                                    <Form.Select>
                                        <option>{t('ankietySzablony.types.numericScale')}</option>
                                        <option>{t('ankietySzablony.types.choiceList')}</option>
                                        <option>{t('ankietySzablony.types.yesNo')}</option>
                                        <option>{t('ankietySzablony.types.verbalRating')}</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>{t('ankietySzablony.form.description')}</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>

                            <h5 className="mb-3"><i className="bi bi-ui-checks me-1" />{t('ankietySzablony.form.responseOptions')}</h5>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form.Group className="mb-2">
                                        <Form.Label>{t('ankietySzablony.form.option')} 1</Form.Label>
                                        <Form.Control defaultValue={t('ankietySzablony.example.veryDissatisfied')} />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>{t('ankietySzablony.form.option')} 2</Form.Label>
                                        <Form.Control defaultValue={t('ankietySzablony.example.satisfied')} />
                                    </Form.Group>
                                    <Button variant="outline-secondary" size="sm">
                                        <i className="bi bi-plus-circle me-1" />{t('ankietySzablony.buttons.addOption')}
                                    </Button>
                                </Card.Body>
                            </Card>

                            <Form.Check
                                type="checkbox"
                                label={t('ankietySzablony.form.setAsDefault')}
                                className="mb-3"
                            />

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">{t('ankietySzablony.buttons.cancel')}</Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" />{t('ankietySzablony.buttons.saveTemplate')}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>

                {/* Statystyki */}
                <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />{t('ankietySzablony.tabs.statistics')}</>}>
                    <div className="form-section">
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3"><i className="bi bi-graph-up-arrow me-2" />{t('ankietySzablony.statistics.usage')}</h5>
                                <Table bordered responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('ankietySzablony.table.template')}</th>
                                            <th>{t('ankietySzablony.table.usageCount')}</th>
                                            <th>{t('ankietySzablony.table.lastUsed')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('ankietySzablony.example.satisfactionScale')}</td>
                                            <td>12</td>
                                            <td>10.03.2025</td>
                                        </tr>
                                        <tr>
                                            <td>{t('ankietySzablony.example.qualityRating')}</td>
                                            <td>8</td>
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
                    <strong>{t('ankietySzablony.summary.activeTemplates')}:</strong> 7
                </div>
                <div className="summary-text">
                    <strong>{t('ankietySzablony.summary.lastAdded')}:</strong> 20.02.2025
                </div>
            </div>
        </Container>
    );
};