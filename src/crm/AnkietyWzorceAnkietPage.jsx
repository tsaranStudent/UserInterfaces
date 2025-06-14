import React from 'react';
import {
    Container, Table, Accordion, Form, Row, Col,
    Badge, Button, Card, Tabs, Tab, InputGroup
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const AnkietyWzorceAnkiet = () => (
    <Container className="main-content lang-pl mt-2 mb-2">
        {/* Nagłówek */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-ui-checks icon-unified mb-2" />
            <h1 className="page-title">Wzorce ankiet</h1>
            <p className="text-muted">Zarządzanie szablonami pytań i formularzy – CRM 2025</p>
        </div>

        <Tabs defaultActiveKey="wzorce" className="module-tabs">
            {/* Zakładka: Lista wzorców */}
            <Tab eventKey="wzorce" title={<><i className="bi bi-list-task me-1" />Lista wzorców</>}>
                <div className="form-section">
                    <div className="actions-bar">
                        <div className="actions-bar-start">
                            <Button variant="primary">
                                <i className="bi bi-plus-circle me-1" />Nowy wzorzec
                            </Button>
                            <Button variant="outline-secondary">
                                <i className="bi bi-upload me-1" />Importuj
                            </Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup className="search-input">
                                <Form.Control placeholder="Szukaj wzorców..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>

                    <Table striped bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th><i className="bi bi-file-earmark-text" /> Nazwa</th>
                                <th><i className="bi bi-tags" /> Kategoria</th>
                                <th><i className="bi bi-patch-question" /> Pytania</th>
                                <th><i className="bi bi-calendar-event" /> Data</th>
                                <th><i className="bi bi-check2-circle" /> Status</th>
                                <th><i className="bi bi-tools" /> Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ankieta satysfakcji klienta</td>
                                <td>Badania rynku</td>
                                <td>12</td>
                                <td>15.01.2025</td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
                                    <Button size="sm" variant="outline-primary" className="me-1">Podgląd</Button>
                                    <Button size="sm" variant="outline-success" className="me-1">Użyj</Button>
                                    <Button size="sm" variant="outline-danger">Usuń</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Ocena szkolenia</td>
                                <td>HR</td>
                                <td>8</td>
                                <td>20.02.2025</td>
                                <td><Badge bg="warning">Wersja robocza</Badge></td>
                                <td>
                                    <Button size="sm" variant="outline-primary" className="me-1">Podgląd</Button>
                                    <Button size="sm" variant="outline-success" className="me-1">Użyj</Button>
                                    <Button size="sm" variant="outline-danger">Usuń</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Tab>

            {/* Zakładka: Nowy wzorzec */}
            <Tab eventKey="nowy" title={<><i className="bi bi-file-plus me-1" />Nowy wzorzec</>}>
                <div className="form-section">
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Nazwa wzorca</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz nazwę..." />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Kategoria</Form.Label>
                                <Form.Select>
                                    <option>Badania rynku</option>
                                    <option>HR</option>
                                    <option>Obsługa klienta</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Opis</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><i className="bi bi-patch-question me-2" />Pytanie 1</Accordion.Header>
                                <Accordion.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Typ pytania</Form.Label>
                                        <Form.Select>
                                            <option>Skala 1–5</option>
                                            <option>Tak/Nie</option>
                                            <option>Odpowiedź tekstowa</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="outline-danger" size="sm">
                                        <i className="bi bi-trash" /> Usuń pytanie
                                    </Button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Button variant="outline-primary" className="mt-3 me-2">
                            <i className="bi bi-plus-circle me-1" /> Dodaj pytanie
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-collection me-1" /> Z biblioteki
                        </Button>

                        <div className="actions-bar-end mt-4">
                            <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                            <Button variant="primary">
                                <i className="bi bi-save me-1" />Zapisz wzorzec
                            </Button>
                        </div>
                    </Form>
                </div>
            </Tab>

            {/* Zakładka: Statystyki */}
            <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />Statystyki</>}>
                <div className="form-section">
                    <Card>
                        <Card.Body>
                            <h5 className="mb-3"><i className="bi bi-graph-up" /> Użycie wzorców</h5>
                            <Table bordered responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Wzorzec</th>
                                        <th>Użycia</th>
                                        <th>Ostatnie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ankieta satysfakcji klienta</td>
                                        <td>24</td>
                                        <td>10.03.2025</td>
                                    </tr>
                                    <tr>
                                        <td>Ocena szkolenia</td>
                                        <td>15</td>
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
            <div className="summary-text"><strong>Liczba dostępnych wzorców:</strong> 8</div>
            <div className="summary-text"><strong>Najczęściej używany:</strong> Ankieta satysfakcji klienta (24 użycia)</div>
        </div>
    </Container>
);
