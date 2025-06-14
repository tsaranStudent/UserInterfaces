import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col,
    Badge, Button, Card, Tabs, Tab, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const AnkietyPytania = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-question-circle icon-unified mb-2" />
            <h1 className="page-title">Baza pytań ankietowych</h1>
            <p className="text-muted">Zarządzanie pytaniami formularzy w dziale CRM – 2025</p>
        </div>

        <Tabs defaultActiveKey="wszystkie" className="module-tabs">
            {/* Zakładka: Lista pytań */}
            <Tab eventKey="wszystkie" title={<><i className="bi bi-list-ul me-1" />Wszystkie pytania</>}>
                <div className="form-section">
                    <div className="actions-bar">
                        <div className="actions-bar-start">
                            <Button variant="primary">
                                <i className="bi bi-plus-circle me-1" />Nowe pytanie
                            </Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup className="search-input">
                                <Form.Control placeholder="Szukaj pytań..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>

                    <Table striped bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th><i className="bi bi-card-text" /> Treść pytania</th>
                                <th><i className="bi bi-sliders" /> Typ</th>
                                <th><i className="bi bi-folder" /> Grupa</th>
                                <th><i className="bi bi-calendar" /> Dodano</th>
                                <th><i className="bi bi-check2-circle" /> Status</th>
                                <th><i className="bi bi-tools" /> Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jak oceniasz nasz produkt w skali 1–5?</td>
                                <td><Badge bg="info">Skala ocen</Badge></td>
                                <td>Satysfakcja</td>
                                <td>15.01.2025</td>
                                <td><Badge bg="success">Aktywne</Badge></td>
                                <td>
                                    <Button size="sm" variant="outline-primary" className="me-1">Edytuj</Button>
                                    <Button size="sm" variant="outline-danger">Usuń</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Jakie funkcje są dla Ciebie najważniejsze?</td>
                                <td><Badge bg="warning">Wielokrotny wybór</Badge></td>
                                <td>Preferencje</td>
                                <td>20.02.2025</td>
                                <td><Badge bg="secondary">Archiwalne</Badge></td>
                                <td>
                                    <Button size="sm" variant="outline-primary" className="me-1">Edytuj</Button>
                                    <Button size="sm" variant="outline-danger">Usuń</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Tab>

            {/* Zakładka: Nowe pytanie */}
            <Tab eventKey="nowe" title={<><i className="bi bi-patch-plus me-1" />Nowe pytanie</>}>
                <div className="form-section">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Treść pytania</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Wpisz treść pytania..." />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Typ pytania</Form.Label>
                                <Form.Select>
                                    <option>Wybierz...</option>
                                    <option>Pojedynczy wybór</option>
                                    <option>Wielokrotny wybór</option>
                                    <option>Skala ocen (1–5)</option>
                                    <option>Odpowiedź tekstowa</option>
                                </Form.Select>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Grupa pytań</Form.Label>
                                <Form.Select>
                                    <option>Brak</option>
                                    <option>Satysfakcja</option>
                                    <option>Preferencje</option>
                                    <option>Demografia</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><i className="bi bi-ui-checks me-2" />Opcje odpowiedzi</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Opcja 1</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>Opcja 2</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                    <Button size="sm" variant="outline-secondary">
                                        <i className="bi bi-plus-circle me-1" />Dodaj opcję
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Form.Check className="mt-3 mb-3" type="checkbox" label="Pytanie wymagane" defaultChecked />

                        <div className="actions-bar-end">
                            <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                            <Button variant="primary">
                                <i className="bi bi-save me-1" />Zapisz pytanie
                            </Button>
                        </div>
                    </Form>
                </div>
            </Tab>

            {/* Zakładka: Statystyki */}
            <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart me-1" />Statystyki</>}>
                <div className="form-section">
                    <Card>
                        <Card.Body>
                            <h5 className="mb-3"><i className="bi bi-graph-up-arrow me-2" />Statystyki użycia pytań</h5>
                            <Table bordered responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Pytanie</th>
                                        <th>Ankiety</th>
                                        <th>Ostatnie użycie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jak oceniasz nasz produkt w skali 1–5?</td>
                                        <td>8</td>
                                        <td>10.03.2025</td>
                                    </tr>
                                    <tr>
                                        <td>Jakie funkcje są dla Ciebie najważniejsze?</td>
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
            <div className="summary-text"><strong>Liczba aktywnych pytań:</strong> 24</div>
            <div className="summary-text"><strong>Ostatnio dodane:</strong> 20.02.2025</div>
        </div>
    </Container>
);
