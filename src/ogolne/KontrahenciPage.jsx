import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Tabs, Tab, Button, InputGroup, Form, Table, Accordion } from 'react-bootstrap';

export const Kontrahenci = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-people-fill icon-unified mb-2" />
                    <h1 className="page-title">Zarządzanie kontrahentami</h1>
                    <p className="text-muted">Aktualne dane kontrahentów na rok 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="all" className="mb-4">
                    <Tab eventKey="all" title="Wszyscy">
                        {/* Pasek akcji */}
                        <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                            <div>
                                <Button variant="success" className="me-2">
                                    <i className="bi bi-building-add me-1" /> Dodaj
                                </Button>
                                <Button variant="outline-primary">
                                    <i className="bi bi-funnel me-1" /> Filtry
                                </Button>
                            </div>
                            <InputGroup className="search-input w-25">
                                <Form.Control placeholder="Szukaj kontrahenta..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>

                        {/* Tabela kontrahentów */}
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nazwa</th>
                                    <th>NIP</th>
                                    <th>Grupa</th>
                                    <th>Transakcje 2025</th>
                                    <th>Status</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>TechSolutions Sp. z o.o.</td>
                                    <td>1234567890</td>
                                    <td>Biznes</td>
                                    <td>1 245 678 PLN</td>
                                    <td><span className="badge badge-success">Aktywny</span></td>
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
                                    <td>AlphaCorp</td>
                                    <td>0987654321</td>
                                    <td>Partner</td>
                                    <td>879 000 PLN</td>
                                    <td><span className="badge badge-planned">Oczekuje</span></td>
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
                                    <td>BetaTrade</td>
                                    <td>1122334455</td>
                                    <td>Standard</td>
                                    <td>456 300 PLN</td>
                                    <td><span className="badge badge-inactive">Nieaktywny</span></td>
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

                    <Tab eventKey="groups" title="Grupy">
                        <div className="form-section mb-3">
                            <h5>Zarządzanie grupami</h5>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Button variant="primary" size="sm">
                                    <i className="bi bi-plus-circle me-1" /> Nowa grupa
                                </Button>
                                <span className="text-muted">Zaktualizowano: 15.01.2025</span>
                            </div>
                            <Table bordered className="data-table">
                                <thead>
                                    <tr>
                                        <th>Grupa</th>
                                        <th>Liczba</th>
                                        <th>Data</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Biznes</td>
                                        <td>12</td>
                                        <td>10.03.2025</td>
                                        <td>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Partner</td>
                                        <td>8</td>
                                        <td>05.02.2025</td>
                                        <td>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Standard</td>
                                        <td>6</td>
                                        <td>12.01.2025</td>
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

                {/* Szybkie dodawanie */}
                <Accordion className="form-section mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj kontrahenta</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={4}><Form.Control placeholder="Nazwa*" required /></Col>
                                    <Col md={4}><Form.Control placeholder="NIP*" pattern="\d{10}" required /></Col>
                                    <Col md={4}>
                                        <Form.Select required>
                                            <option>Wybierz grupę</option>
                                            <option>Biznes</option>
                                            <option>Partner</option>
                                            <option>Standard</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-save me-1" /> Zapisz+Nowy
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-check-circle me-1" /> Zapisz
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Statystyki */}
                <Row className="form-section text-center">
                    <Col md={4} className="mb-3">
                        <h5>Nowi 2025</h5>
                        <h3 className="text-primary">15</h3>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Aktywni</h5>
                        <h3 className="text-success">25</h3>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Transakcje</h5>
                        <h3 className="text-info">2 580 000 PLN</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    </Container>
);
