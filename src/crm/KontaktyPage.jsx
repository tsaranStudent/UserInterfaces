import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup, Form, Table, Accordion
} from 'react-bootstrap';

export const Kontakty = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-person-lines-fill icon-unified mb-2" />
                    <h1 className="page-title">Zarządzanie kontaktami</h1>
                    <p className="text-muted">Baza kontaktów CRM - stan na 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4">
                    <Tab eventKey="lista" title="Lista kontaktów">
                        {/* Pasek akcji */}
                        <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                            <div>
                                <Button variant="success" className="me-2">
                                    <i className="bi bi-person-plus-fill me-1" /> Dodaj
                                </Button>
                                <Button variant="outline-primary">
                                    <i className="bi bi-funnel me-1" /> Filtry
                                </Button>
                            </div>
                            <InputGroup className="search-input w-25">
                                <Form.Control placeholder="Szukaj kontaktu..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>

                        {/* Tabela kontaktów */}
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Imię i nazwisko</th>
                                    <th>Typ</th>
                                    <th>E-mail</th>
                                    <th>Telefon</th>
                                    <th>Status</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Jan Nowak</td>
                                    <td>Klient</td>
                                    <td>jan.nowak@firma.pl</td>
                                    <td>+48 600 123 456</td>
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
                                    <td>Maria Wiśniewska</td>
                                    <td>Partner</td>
                                    <td>maria.wisniewska@firma.pl</td>
                                    <td>+48 511 789 654</td>
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
                                    <td>ABC Sp. z o.o.</td>
                                    <td>Dostawca</td>
                                    <td>kontakt@abc.pl</td>
                                    <td>+48 800 200 100</td>
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

                    <Tab eventKey="grupy" title="Grupy kontaktów">
                        {/* Tabela grup */}
                        <div className="form-section mb-3">
                            <h5>Zarządzanie grupami</h5>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Button variant="primary" size="sm">
                                    <i className="bi bi-plus-circle me-1" /> Nowa grupa
                                </Button>
                                <span className="text-muted">Zaktualizowano: 12.03.2025</span>
                            </div>
                            <Table bordered className="data-table">
                                <thead>
                                    <tr>
                                        <th>Nazwa grupy</th>
                                        <th>Liczba kontaktów</th>
                                        <th>Data utworzenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Klienci VIP</td>
                                        <td>10</td>
                                        <td>05.02.2025</td>
                                        <td>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Partnerzy strategiczni</td>
                                        <td>7</td>
                                        <td>20.01.2025</td>
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

                {/* Formularz dodawania kontaktu */}
                <Accordion className="form-section mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj kontakt</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={4}><Form.Control placeholder="Imię*" required /></Col>
                                    <Col md={4}><Form.Control placeholder="Nazwisko*" required /></Col>
                                    <Col md={4}>
                                        <Form.Select required>
                                            <option>Wybierz typ</option>
                                            <option>Klient</option>
                                            <option>Dostawca</option>
                                            <option>Partner</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={6}><Form.Control placeholder="E-mail*" type="email" required /></Col>
                                    <Col md={6}><Form.Control placeholder="Telefon" /></Col>
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
                        <h5>Nowi w 2025</h5>
                        <h3 className="text-primary">18</h3>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Aktywni</h5>
                        <h3 className="text-success">36</h3>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Wszystkie kontakty</h5>
                        <h3 className="text-info">72</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    </Container>
);
