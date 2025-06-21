import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Badge, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const Atrybuty = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-list-check icon-unified mb-2" aria-hidden="true" />
                        <h1 className="page-title">{t('atrybuty.title')}</h1>
                        <p className="text-muted">{t('atrybuty.subtitle')}</p>
                    </div>

                    {/* Filtry */}
                    <div className="form-section mb-4">
                        <Row className="g-3">
                            <Col md={4}>
                                <InputGroup>
                                    <Form.Control placeholder={t('atrybuty.filters.searchPlaceholder')} />
                                    <Button variant="outline-secondary" title={t('atrybuty.filters.searchButton')}>
                                        <i className="bi bi-search" aria-hidden="true" />
                                    </Button>
                                </InputGroup>
                            </Col>
                            <Col md={3}>
                                <Form.Select defaultValue="">
                                    <option value="">{t('atrybuty.filters.typeAll')}</option>
                                    <option value="text">{t('atrybuty.filters.types.text')}</option>
                                    <option value="number">{t('atrybuty.filters.types.number')}</option>
                                    <option value="date">{t('atrybuty.filters.types.date')}</option>
                                    <option value="list">{t('atrybuty.filters.types.list')}</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Select defaultValue="">
                                    <option value="">{t('atrybuty.filters.statusAll')}</option>
                                    <option value="active">{t('atrybuty.filters.status.active')}</option>
                                    <option value="inactive">{t('atrybuty.filters.status.inactive')}</option>
                                </Form.Select>
                            </Col>
                            <Col md={2} className="d-flex align-items-end">
                                <Button variant="primary" className="w-100">
                                    {t('atrybuty.filters.button')}
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    {/* Pasek akcji */}
                    <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                        <div>
                            <Button variant="success" className="me-2">
                                <i className="bi bi-plus-lg me-1" aria-hidden="true" />
                                {t('atrybuty.actions.add')}
                            </Button>
                            <Button variant="outline-secondary">
                                <i className="bi bi-download me-1" aria-hidden="true" />
                                {t('atrybuty.actions.export')}
                            </Button>
                        </div>
                        <Button variant="outline-danger">
                            <i className="bi bi-trash me-1" aria-hidden="true" />
                            {t('atrybuty.actions.deleteSelected')}
                        </Button>
                    </div>

                    {/* Tabela atrybutów */}
                    <Table bordered hover responsive className="data-table mb-4" role="grid">
                        <thead>
                            <tr>
                                <th style={{ width: 50 }}>
                                    <Form.Check aria-label={t('atrybuty.table.headers.checkbox')} />
                                </th>
                                <th scope="col">{t('atrybuty.table.headers.name')}</th>
                                <th scope="col">{t('atrybuty.table.headers.key')}</th>
                                <th scope="col">{t('atrybuty.table.headers.type')}</th>
                                <th scope="col">{t('atrybuty.table.headers.required')}</th>
                                <th scope="col">{t('atrybuty.table.headers.status')}</th>
                                <th scope="col">{t('atrybuty.table.headers.options')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Check /></td>
                                <td>{t('atrybuty.sample.color')}</td>
                                <td>color</td>
                                <td>{t('atrybuty.sampleTypes.text')}</td>
                                <td>
                                    <Badge bg="success">
                                        {t('atrybuty.table.required.yes')}
                                    </Badge>
                                </td>
                                <td>
                                    <Badge bg="success">
                                        {t('atrybuty.table.status.active')}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1" title={t('atrybuty.actions.edit')}>
                                        <i className="bi bi-pencil" aria-hidden="true" />
                                    </Button>
                                    <Button variant="outline-danger" size="sm" title={t('atrybuty.actions.delete')}>
                                        <i className="bi bi-trash" aria-hidden="true" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td><Form.Check /></td>
                                <td>{t('atrybuty.sample.weight')}</td>
                                <td>weight</td>
                                <td>{t('atrybuty.sampleTypes.number')}</td>
                                <td>
                                    <Badge bg="warning" text="dark">
                                        {t('atrybuty.table.required.no')}
                                    </Badge>
                                </td>
                                <td>
                                    <Badge bg="success">
                                        {t('atrybuty.table.status.active')}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1" title={t('atrybuty.actions.edit')}>
                                        <i className="bi bi-pencil" aria-hidden="true" />
                                    </Button>
                                    <Button variant="outline-danger" size="sm" title={t('atrybuty.actions.delete')}>
                                        <i className="bi bi-trash" aria-hidden="true" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td><Form.Check /></td>
                                <td>{t('atrybuty.sample.expiryDate')}</td>
                                <td>expiry_date</td>
                                <td>{t('atrybuty.sampleTypes.date')}</td>
                                <td>
                                    <Badge bg="success">
                                        {t('atrybuty.table.required.yes')}
                                    </Badge>
                                </td>
                                <td>
                                    <Badge bg="secondary">
                                        {t('atrybuty.table.status.inactive')}
                                    </Badge>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1" title={t('atrybuty.actions.edit')}>
                                        <i className="bi bi-pencil" aria-hidden="true" />
                                    </Button>
                                    <Button variant="outline-danger" size="sm" title={t('atrybuty.actions.delete')}>
                                        <i className="bi bi-trash" aria-hidden="true" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* Formularz dodawania atrybutu */}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('atrybuty.accordion.add')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Control
                                                placeholder={t('atrybuty.form.labels.name')}
                                                required
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <InputGroup>
                                                <Form.Control
                                                    placeholder={t('atrybuty.form.labels.key')}
                                                    required
                                                />
                                                <Button
                                                    variant="outline-secondary"
                                                    title={t('atrybuty.form.generateKey')}
                                                >
                                                    <i className="bi bi-magic" aria-hidden="true" />
                                                </Button>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}>
                                            <Form.Select required>
                                                <option value="">{t('atrybuty.form.labels.type')}</option>
                                                <option value="text">{t('atrybuty.form.types.text')}</option>
                                                <option value="number">{t('atrybuty.form.types.number')}</option>
                                                <option value="date">{t('atrybuty.form.types.date')}</option>
                                                <option value="boolean">{t('atrybuty.form.types.boolean')}</option>
                                                <option value="list">{t('atrybuty.form.types.list')}</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select>
                                                <option value="">{t('atrybuty.form.labels.group')}</option>
                                                <option value="general">{t('atrybuty.form.groups.general')}</option>
                                                <option value="inventory">{t('atrybuty.form.groups.inventory')}</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Select>
                                                <option value="">{t('atrybuty.form.labels.status')}</option>
                                                <option value="active">{t('atrybuty.form.status.active')}</option>
                                                <option value="inactive">{t('atrybuty.form.status.inactive')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Form.Check label={t('atrybuty.form.check.required')} className="mb-2" />
                                    <Form.Check label={t('atrybuty.form.check.filterable')} className="mb-3" />
                                    <div className="d-flex justify-content-end gap-2">
                                        <Button variant="outline-secondary">
                                            {t('atrybuty.form.buttons.cancel')}
                                        </Button>
                                        <Button variant="primary">
                                            {t('atrybuty.form.buttons.save')}
                                        </Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </Container>
    );
};
