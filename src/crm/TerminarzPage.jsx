import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, ListGroup, Badge
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Terminarz = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener */}
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-calendar-week icon-unified mb-2" />
                        <h1 className="page-title">{t('terminarz.title')}</h1>
                        <p className="text-muted">{t('terminarz.subtitle')}</p>
                    </div>

                    {/* Zakładki */}
                    <Tabs defaultActiveKey="lista" className="mb-4">
                        <Tab eventKey="lista" title={t('terminarz.tabs.upcoming')}>
                            {/* Pasek akcji */}
                            <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-calendar-plus me-1" /> {t('terminarz.buttons.new')}
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-clock-history me-1" /> {t('terminarz.buttons.history')}
                                    </Button>
                                </div>
                                <InputGroup className="search-input w-25">
                                    <Form.Control type="date" defaultValue="2025-05-01" />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>

                            {/* Lista wydarzeń */}
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>{t('terminarz.table.type')}</th>
                                        <th>{t('terminarz.table.subject')}</th>
                                        <th>{t('terminarz.table.date')}</th>
                                        <th>{t('terminarz.table.time')}</th>
                                        <th>{t('terminarz.table.status')}</th>
                                        <th>{t('terminarz.table.actions')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Badge bg="primary">{t('terminarz.types.meeting')}</Badge></td>
                                        <td>{t('terminarz.events.clientMeeting')}</td>
                                        <td>10.05.2025</td>
                                        <td>10:00–11:30</td>
                                        <td><span className="badge badge-success">{t('terminarz.status.scheduled')}</span></td>
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
                                        <td><Badge bg="warning">{t('terminarz.types.task')}</Badge></td>
                                        <td>{t('terminarz.events.presentation')}</td>
                                        <td>15.05.2025</td>
                                        <td>{t('terminarz.events.until')} 14:00</td>
                                        <td><span className="badge badge-planned">{t('terminarz.status.pending')}</span></td>
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

                        <Tab eventKey="grupy" title={t('terminarz.tabs.categories')}>
                            {/* Kategorie wydarzeń */}
                            <div className="form-section mb-3">
                                <h5>{t('terminarz.categories.title')}</h5>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Button variant="primary" size="sm">
                                        <i className="bi bi-plus-circle me-1" /> {t('terminarz.buttons.newCategory')}
                                    </Button>
                                    <span className="text-muted">{t('terminarz.categories.updated')}: 01.05.2025</span>
                                </div>
                                <Table bordered className="data-table">
                                    <thead>
                                        <tr>
                                            <th>{t('terminarz.categories.category')}</th>
                                            <th>{t('terminarz.categories.count')}</th>
                                            <th>{t('terminarz.categories.created')}</th>
                                            <th>{t('terminarz.table.actions')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{t('terminarz.categories.meetings')}</td>
                                            <td>6</td>
                                            <td>03.04.2025</td>
                                            <td>
                                                <Button variant="outline-secondary" size="sm">
                                                    <i className="bi bi-pencil" />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{t('terminarz.categories.tasks')}</td>
                                            <td>9</td>
                                            <td>20.03.2025</td>
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

                    {/* Formularz dodawania */}
                    <Accordion className="form-section mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('terminarz.form.addEvent')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}><Form.Control placeholder={t('terminarz.form.subject')} required /></Col>
                                        <Col md={4}>
                                            <Form.Select required>
                                                <option>{t('terminarz.form.selectType')}</option>
                                                <option>{t('terminarz.types.meeting')}</option>
                                                <option>{t('terminarz.types.task')}</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}><Form.Control type="date" required /></Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}><Form.Control type="time" placeholder={t('terminarz.form.startTime')} /></Col>
                                        <Col md={6}><Form.Control type="time" placeholder={t('terminarz.form.endTime')} /></Col>
                                    </Row>
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="success" className="me-2">
                                            <i className="bi bi-save me-1" /> {t('terminarz.buttons.saveNew')}
                                        </Button>
                                        <Button variant="primary">
                                            <i className="bi bi-check-circle me-1" /> {t('terminarz.buttons.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Statystyki */}
                    <Row className="form-section text-center">
                        <Col md={4} className="mb-3">
                            <h5>{t('terminarz.stats.allMay')}</h5>
                            <h3 className="text-primary">12</h3>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5>{t('terminarz.stats.scheduledMeetings')}</h5>
                            <h3 className="text-success">4</h3>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5>{t('terminarz.stats.tasksToDo')}</h5>
                            <h3 className="text-info">5</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};