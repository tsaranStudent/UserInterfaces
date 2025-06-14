import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, ListGroup, Badge
} from 'react-bootstrap';

export const Terminarz = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-calendar-week icon-unified mb-2" />
                    <h1 className="page-title">Terminarz</h1>
                    <p className="text-muted">Zarządzanie zadaniami i wydarzeniami - Maj 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="lista" className="mb-4">
                    <Tab eventKey="lista" title="Nadchodzące">
                        {/* Pasek akcji */}
                        <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                            <div>
                                <Button variant="success" className="me-2">
                                    <i className="bi bi-calendar-plus me-1" /> Nowe
                                </Button>
                                <Button variant="outline-primary">
                                    <i className="bi bi-clock-history me-1" /> Historia
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
                                    <th>Typ</th>
                                    <th>Temat</th>
                                    <th>Data</th>
                                    <th>Godzina</th>
                                    <th>Status</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Badge bg="primary">Spotkanie</Badge></td>
                                    <td>Spotkanie z klientem XYZ</td>
                                    <td>10.05.2025</td>
                                    <td>10:00–11:30</td>
                                    <td><span className="badge badge-success">Zaplanowane</span></td>
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
                                    <td><Badge bg="warning">Zadanie</Badge></td>
                                    <td>Przygotowanie prezentacji</td>
                                    <td>15.05.2025</td>
                                    <td>Do 14:00</td>
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
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="grupy" title="Kategorie">
                        {/* Kategorie wydarzeń */}
                        <div className="form-section mb-3">
                            <h5>Kategorie terminarza</h5>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Button variant="primary" size="sm">
                                    <i className="bi bi-plus-circle me-1" /> Nowa kategoria
                                </Button>
                                <span className="text-muted">Zaktualizowano: 01.05.2025</span>
                            </div>
                            <Table bordered className="data-table">
                                <thead>
                                    <tr>
                                        <th>Kategoria</th>
                                        <th>Liczba zdarzeń</th>
                                        <th>Data utworzenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Spotkania</td>
                                        <td>6</td>
                                        <td>03.04.2025</td>
                                        <td>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-pencil" />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Zadania</td>
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
                        <Accordion.Header>Dodaj nowe wydarzenie / zadanie</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="g-3 mb-3">
                                    <Col md={4}><Form.Control placeholder="Temat*" required /></Col>
                                    <Col md={4}>
                                        <Form.Select required>
                                            <option>Wybierz typ</option>
                                            <option>Spotkanie</option>
                                            <option>Zadanie</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={4}><Form.Control type="date" required /></Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    <Col md={6}><Form.Control type="time" placeholder="Godzina rozpoczęcia" /></Col>
                                    <Col md={6}><Form.Control type="time" placeholder="Godzina zakończenia" /></Col>
                                </Row>
                                <div className="d-flex justify-content-end gap-2">
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-save me-1" /> Zapisz+Nowe
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
                        <h5>Wszystkie w maju</h5>
                        <h3 className="text-primary">12</h3>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Zaplanowane spotkania</h5>
                        <h3 className="text-success">4</h3>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Zadania do wykonania</h5>
                        <h3 className="text-info">5</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    </Container>
);
