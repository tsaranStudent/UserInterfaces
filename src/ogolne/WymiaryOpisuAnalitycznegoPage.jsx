import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Tabs, Tab, Button, InputGroup, Form, Table, Badge, Accordion, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const WymiaryOpisuAnalitycznego = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-sliders icon-unified mb-2" aria-hidden="true" />
                <h1 className="page-title">{t('wymiaryOpisuAnalitycznego.title')}</h1>
                <p className="text-muted">{t('wymiaryOpisuAnalitycznego.subtitle')}</p>
            </div>

            {/* Zakładki */}
            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab
                    eventKey="lista"
                    title={
                        <>
                            <i className="bi bi-list-ul me-1" aria-hidden="true" />
                            {t('wymiaryOpisuAnalitycznego.tabs.list')}
                        </>
                    }
                >
                    {/* Akcje nad tabelą */}
                    <div className="form-section mt-3">
                        <div className="actions-bar mb-3 d-flex justify-content-between align-items-center">
                            <Button variant="success">
                                <i className="bi bi-plus-circle me-1" aria-hidden="true" />
                                {t('wymiaryOpisuAnalitycznego.actions.add')}
                            </Button>
                            <InputGroup className="search-input">
                                <Form.Control placeholder={t('wymiaryOpisuAnalitycznego.search.placeholder')} />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" aria-hidden="true" />
                                </Button>
                            </InputGroup>
                        </div>
                        {/* Tabela wymiarów */}
                        <Table striped bordered hover responsive className="data-table mb-4" role="grid">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-code me-1" aria-hidden="true" />{t('wymiaryOpisuAnalitycznego.table.headers.code')}</th>
                                    <th><i className="bi bi-tag me-1" aria-hidden="true" />{t('wymiaryOpisuAnalitycznego.table.headers.name')}</th>
                                    <th><i className="bi bi-info-circle me-1" aria-hidden="true" />{t('wymiaryOpisuAnalitycznego.table.headers.desc')}</th>
                                    <th><i className="bi bi-patch-check me-1" aria-hidden="true" />{t('wymiaryOpisuAnalitycznego.table.headers.status')}</th>
                                    <th><i className="bi bi-calendar3 me-1" aria-hidden="true" />{t('wymiaryOpisuAnalitycznego.table.headers.created')}</th>
                                    <th><i className="bi bi-gear me-1" aria-hidden="true" />{t('wymiaryOpisuAnalitycznego.table.headers.actions')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>W01</td>
                                    <td>{t('wymiaryOpisuAnalitycznego.sample.region')}</td>
                                    <td>{t('wymiaryOpisuAnalitycznego.sample.regionDesc')}</td>
                                    <td>
                                        <Badge bg="success">
                                            <i className="bi bi-check-circle me-1" aria-hidden="true" />
                                            {t('wymiaryOpisuAnalitycznego.status.active')}
                                        </Badge>
                                    </td>
                                    <td>15.01.2025</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title={t('wymiaryOpisuAnalitycznego.actions.edit')}>
                                            <i className="bi bi-pencil" aria-hidden="true" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title={t('wymiaryOpisuAnalitycznego.actions.delete')}>
                                            <i className="bi bi-trash" aria-hidden="true" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>W02</td>
                                    <td>{t('wymiaryOpisuAnalitycznego.sample.channel')}</td>
                                    <td>{t('wymiaryOpisuAnalitycznego.sample.channelDesc')}</td>
                                    <td>
                                        <Badge bg="success">
                                            <i className="bi bi-check-circle me-1" aria-hidden="true" />
                                            {t('wymiaryOpisuAnalitycznego.status.active')}
                                        </Badge>
                                    </td>
                                    <td>20.02.2025</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title={t('wymiaryOpisuAnalitycznego.actions.edit')}>
                                            <i className="bi bi-pencil" aria-hidden="true" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title={t('wymiaryOpisuAnalitycznego.actions.delete')}>
                                            <i className="bi bi-trash" aria-hidden="true" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>W03</td>
                                    <td>{t('wymiaryOpisuAnalitycznego.sample.cost')}</td>
                                    <td>{t('wymiaryOpisuAnalitycznego.sample.costDesc')}</td>
                                    <td>
                                        <Badge bg="secondary">
                                            <i className="bi bi-dash-circle me-1" aria-hidden="true" />
                                            {t('wymiaryOpisuAnalitycznego.status.inactive')}
                                        </Badge>
                                    </td>
                                    <td>10.02.2025</td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1" title={t('wymiaryOpisuAnalitycznego.actions.edit')}>
                                            <i className="bi bi-pencil" aria-hidden="true" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm" title={t('wymiaryOpisuAnalitycznego.actions.delete')}>
                                            <i className="bi bi-trash" aria-hidden="true" />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                <Tab
                    eventKey="raporty"
                    title={
                        <>
                            <i className="bi bi-graph-up me-1" aria-hidden="true" />
                            {t('wymiaryOpisuAnalitycznego.tabs.reports')}
                        </>
                    }
                >
                    {/* Statystyki */}
                    <div className="form-section mt-3">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="bi bi-bar-chart me-2" aria-hidden="true" />
                                    {t('wymiaryOpisuAnalitycznego.reports.header')}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={6}>
                                            <div className="summary-text">
                                                <i className="bi bi-patch-check me-1" aria-hidden="true" />
                                                <strong>{t('wymiaryOpisuAnalitycznego.reports.activeCountLabel')}</strong>{' '}
                                                {t('wymiaryOpisuAnalitycznego.reports.activeCount', { count: 2 })}
                                            </div>
                                            <div className="summary-text">
                                                <i className="bi bi-star me-1" aria-hidden="true" />
                                                <strong>{t('wymiaryOpisuAnalitycznego.reports.mostUsedLabel')}</strong>{' '}
                                                {t('wymiaryOpisuAnalitycznego.sample.region')} (W01)
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="summary-text">
                                                <i className="bi bi-plus-circle me-1" aria-hidden="true" />
                                                <strong>{t('wymiaryOpisuAnalitycznego.reports.lastAddedLabel')}</strong>{' '}
                                                20.02.2025
                                            </div>
                                            <div className="summary-text">
                                                <i className="bi bi-dash-circle me-1" aria-hidden="true" />
                                                <strong>{t('wymiaryOpisuAnalitycznego.reports.inactiveCountLabel')}</strong>{' '}
                                                {t('wymiaryOpisuAnalitycznego.reports.inactiveCount', { count: 1 })}
                                            </div>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Tab>
            </Tabs>

            {/* Modal zarządzania wymiarem */}
            <Modal show={false} onHide={() => { }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i className="bi bi-plus-circle me-2" aria-hidden="true" />
                        {t('wymiaryOpisuAnalitycznego.modal.title')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3 g-3">
                            <Col md={6}>
                                <Form.Group controlId="wymKod">
                                    <Form.Label htmlFor="wymKod">
                                        <i className="bi bi-code me-1" aria-hidden="true" />
                                        {t('wymiaryOpisuAnalitycznego.form.labels.code')}
                                    </Form.Label>
                                    <Form.Control type="text" required maxLength={10} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="wymNazwa">
                                    <Form.Label htmlFor="wymNazwa">
                                        <i className="bi bi-tag me-1" aria-hidden="true" />
                                        {t('wymiaryOpisuAnalitycznego.form.labels.name')}
                                    </Form.Label>
                                    <Form.Select required>
                                        <option value="">{t('wymiaryOpisuAnalitycznego.form.selectPlaceholder')}</option>
                                        <option value="Region">{t('wymiaryOpisuAnalitycznego.sample.region')}</option>
                                        <option value="Kanał sprzedaży">{t('wymiaryOpisuAnalitycznego.sample.channel')}</option>
                                        <option value="Typ kosztu">{t('wymiaryOpisuAnalitycznego.sample.cost')}</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="wymOpis" className="mb-3">
                            <Form.Label htmlFor="wymOpis">
                                <i className="bi bi-info-circle me-1" aria-hidden="true" />
                                {t('wymiaryOpisuAnalitycznego.form.labels.desc')}
                            </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="wymStatus" className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label={
                                    <>
                                        <i className="bi bi-patch-check me-1" aria-hidden="true" />
                                        {t('wymiaryOpisuAnalitycznego.form.labels.active')}
                                    </>
                                }
                                defaultChecked
                            />
                        </Form.Group>
                        <div className="actions-bar-end d-flex justify-content-end gap-2">
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" aria-hidden="true" />
                                {t('wymiaryOpisuAnalitycznego.form.buttons.cancel')}
                            </Button>
                            <Button variant="primary">
                                <i className="bi bi-save me-1" aria-hidden="true" />
                                {t('wymiaryOpisuAnalitycznego.form.buttons.save')}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};