import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Form, InputGroup, Button, Table, Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const DaneOsobowe = () => {
    const { t } = useTranslation();

    return (
        <Container className="lang-pl mt-2 mb-2">
            {/* Główny kontener */}
            <div className="background mt-2 mb-2">
                {/* Tło sekcji */}
                <Container className="main-content lang-pl mt-2 mb-2">
                    {/* Nagłówek sekcji */}
                    <div className="form-section text-center mb-4">
                        {/* Tytuł i opis */}
                        <i className="bi bi-person-lines-fill icon-unified mb-2" />
                        <h1 className="page-title">{t('daneOsobowe.title')}</h1>
                        <p className="text-muted">{t('daneOsobowe.subtitle')}</p>
                    </div>

                    {/* Pasek filtrów */}
                    <div className="form-section mb-4">
                        <Row className="g-3">
                            <Col md={4}>
                                <InputGroup>
                                    <Form.Control placeholder={t('daneOsobowe.search.placeholder')} />
                                    <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                                </InputGroup>
                            </Col>
                            <Col md={3}>
                                <Form.Select>
                                    <option>{t('daneOsobowe.filters.allDepartments')}</option>
                                    <option>{t('daneOsobowe.departments.hr')}</option>
                                    <option>{t('daneOsobowe.departments.finance')}</option>
                                    <option>{t('daneOsobowe.departments.it')}</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Select>
                                    <option>{t('daneOsobowe.filters.allStatuses')}</option>
                                    <option>{t('daneOsobowe.status.active')}</option>
                                    <option>{t('daneOsobowe.status.vacation')}</option>
                                    <option>{t('daneOsobowe.status.inactive')}</option>
                                </Form.Select>
                            </Col>
                            <Col md={2} className="d-flex align-items-end">
                                <Button variant="primary" className="w-100">{t('daneOsobowe.actions.filter')}</Button>
                            </Col>
                        </Row>
                    </div>

                    {/* Pasek akcji */}
                    <div className="actions-bar form-section mb-4 d-flex justify-content-between">
                        <div>
                            <Button variant="success" className="me-2">
                                <i className="bi bi-person-plus me-1" />{t('daneOsobowe.actions.add')}
                            </Button>
                            <Button variant="outline-primary">
                                <i className="bi bi-upload me-1" />{t('daneOsobowe.actions.import')}
                            </Button>
                        </div>
                        <div>
                            <Button variant="outline-secondary" className="me-2">
                                <i className="bi bi-printer me-1" />{t('daneOsobowe.actions.print')}
                            </Button>
                            <Button variant="outline-success">
                                <i className="bi bi-file-excel me-1" />{t('daneOsobowe.actions.export')}
                            </Button>
                        </div>
                    </div>

                    {/* Tabela danych */}
                    <Table bordered hover responsive className="data-table mb-4">
                        <thead>
                            <tr>
                                <th>{t('daneOsobowe.table.headers.id')}</th>
                                <th>{t('daneOsobowe.table.headers.name')}</th>
                                <th>{t('daneOsobowe.table.headers.position')}</th>
                                <th>{t('daneOsobowe.table.headers.department')}</th>
                                <th>{t('daneOsobowe.table.headers.hireDate')}</th>
                                <th>{t('daneOsobowe.table.headers.contractEnd')}</th>
                                <th>{t('daneOsobowe.table.headers.status')}</th>
                                <th>{t('daneOsobowe.table.headers.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>{t('daneOsobowe.employees.annaKowalska')}</td>
                                <td>{t('daneOsobowe.positions.accountant')}</td>
                                <td>{t('daneOsobowe.departments.finance')}</td>
                                <td>15.02.2023</td>
                                <td>31.12.2025</td>
                                <td><span className="badge badge-success">{t('daneOsobowe.status.active')}</span></td>
                                <td><Button size="sm"><i className="bi bi-pencil" /></Button></td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>{t('daneOsobowe.employees.piotrNowak')}</td>
                                <td>{t('daneOsobowe.positions.developer')}</td>
                                <td>{t('daneOsobowe.departments.it')}</td>
                                <td>01.06.2021</td>
                                <td>—</td>
                                <td><span className="badge badge-success">{t('daneOsobowe.status.active')}</span></td>
                                <td><Button size="sm"><i className="bi bi-pencil" /></Button></td>
                            </tr>
                            <tr>
                                <td>003</td>
                                <td>{t('daneOsobowe.employees.mariaWisniewska')}</td>
                                <td>{t('daneOsobowe.positions.hrbp')}</td>
                                <td>{t('daneOsobowe.departments.hr')}</td>
                                <td>10.09.2024</td>
                                <td>—</td>
                                <td><span className="badge badge-planned">{t('daneOsobowe.status.vacation')}</span></td>
                                <td><Button size="sm"><i className="bi bi-pencil" /></Button></td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* Formularz dodawania */}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{t('daneOsobowe.form.addEmployee')}</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}><Form.Control placeholder={t('daneOsobowe.form.labels.firstName')} required /></Col>
                                        <Col md={4}><Form.Control placeholder={t('daneOsobowe.form.labels.lastName')} required /></Col>
                                        <Col md={4}><Form.Control placeholder={t('daneOsobowe.form.labels.pesel')} pattern="\d{11}" required /></Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={6}>
                                            <Form.Select required>
                                                <option>{t('daneOsobowe.form.selectPlaceholders.position')}</option>
                                                <option>{t('daneOsobowe.positions.accountant')}</option>
                                                <option>{t('daneOsobowe.positions.developer')}</option>
                                                <option>{t('daneOsobowe.positions.hrbp')}</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Select required>
                                                <option>{t('daneOsobowe.form.selectPlaceholders.department')}</option>
                                                <option>{t('daneOsobowe.departments.finance')}</option>
                                                <option>{t('daneOsobowe.departments.hr')}</option>
                                                <option>{t('daneOsobowe.departments.it')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <Row className="g-3 mb-3">
                                        <Col md={4}><Form.Control type="date" max="2025-12-31" required /></Col>
                                        <Col md={4}><Form.Control type="date" min="2025-01-01" /></Col>
                                        <Col md={4}>
                                            <Form.Select required>
                                                <option>{t('daneOsobowe.form.selectPlaceholders.contractType')}</option>
                                                <option>{t('daneOsobowe.contractTypes.employment')}</option>
                                                <option>{t('daneOsobowe.contractTypes.b2b')}</option>
                                                <option>{t('daneOsobowe.contractTypes.contract')}</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    <div className="actions-bar-end">
                                        <Button variant="outline-secondary" className="me-2">{t('daneOsobowe.actions.cancel')}</Button>
                                        <Button variant="primary"><i className="bi bi-save me-1" />{t('daneOsobowe.actions.save')}</Button>
                                    </div>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Podsumowanie */}
                    <div className="summary-box mt-4">
                        <p><strong>{t('daneOsobowe.summary.total')}</strong> {t('daneOsobowe.summary.totalCount')}</p>
                        <p><strong>{t('daneOsobowe.summary.new')}</strong> {t('daneOsobowe.summary.newCount')}</p>
                        <p><strong>{t('daneOsobowe.summary.lastUpdate')}</strong> 15.01.2025</p>
                        <Button variant="outline-primary"><i className="bi bi-graph-up me-1" />{t('daneOsobowe.actions.statistics')}</Button>
                    </div>
                </Container>
            </div>
        </Container>
    );
};