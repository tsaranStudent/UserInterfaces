import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, Card, Badge
} from 'react-bootstrap';

export const AnkietyGrupyZapytan = () => (
    <div className="background">
        <Container className="main-content lang-pl mt-2 mb-2">
            {/* Nagłówek sekcji */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-journal-text icon-unified mb-2" />
                <h1 className="page-title">Grupy zapytań ankietowych</h1>
                <p className="text-muted">Zarządzanie zestawami pytań wykorzystywanych w ankietach</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4 module-tabs">
                {/* Lista */}
                <Tab eventKey="lista" title={<><i className="bi bi-list-ul me-1" />Lista grup</>}>
                    <div className="form-section mb-4">
                        <div className="actions-bar d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <Button variant="primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />Nowa grupa
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-upload me-1" />Importuj
                                </Button>
                            </div>
                            <InputGroup className="search-input w-25">
                                <Form.Control placeholder="Szukaj grup..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th>Nazwa grupy</th>
                                    <th>Kategoria</th>
                                    <th>Pytania</th>
                                    <th>Utworzono</th>
                                    <th>Status</th>
                                    <th>Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Grupa satysfakcji klienta</td>
                                    <td>Obsługa klienta</td>
                                    <td>5</td>
                                    <td>10.01.2025</td>
                                    <td><Badge bg="success">Aktywna</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">Podgląd</Button>
                                        <Button variant="outline-success" size="sm" className="me-1">Użyj</Button>
                                        <Button variant="outline-danger" size="sm">Usuń</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ocena wewnętrzna HR</td>
                                    <td>Zarządzanie</td>
                                    <td>3</td>
                                    <td>15.03.2025</td>
                                    <td><Badge bg="warning">Robocza</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">Podgląd</Button>
                                        <Button variant="outline-success" size="sm" className="me-1">Użyj</Button>
                                        <Button variant="outline-danger" size="sm">Usuń</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* Nowa grupa */}
                <Tab eventKey="nowa" title={<><i className="bi bi-ui-checks me-1" />Nowa grupa</>}>
                    <div className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>Nazwa grupy</Form.Label>
                                    <Form.Control placeholder="Wprowadź nazwę grupy" required />
                                </Col>
                                <Col md={6}>
                                    <Form.Label>Kategoria</Form.Label>
                                    <Form.Select required>
                                        <option>Obsługa klienta</option>
                                        <option>Zarządzanie</option>
                                        <option>Badania rynku</option>
                                        <option>Inne</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Opis grupy</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <h5 className="mb-3"><i className="bi bi-patch-question me-2" />Pytania w grupie</h5>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>1. Jak oceniasz szybkość obsługi?</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Label>Typ pytania</Form.Label>
                                        <Form.Select>
                                            <option>Skala 1-5</option>
                                            <option>Tak/Nie</option>
                                            <option>Tekst otwarty</option>
                                        </Form.Select>
                                        <Button variant="outline-danger" size="sm" className="mt-3">
                                            <i className="bi bi-trash me-1" />Usuń pytanie
                                        </Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="mt-3">
                                <Button variant="outline-primary" className="me-2">
                                    <i className="bi bi-plus-circle me-1" />Dodaj pytanie
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-journal-richtext me-1" />Z biblioteki
                                </Button>
                            </div>

                            <div className="actions-bar-end mt-4">
                                <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" />Zapisz grupę
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>

                {/* Statystyki */}
                <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />Statystyki</>}>
                    <div className="form-section mt-3">
                        <Card>
                            <Card.Body>
                                <h5><i className="bi bi-graph-up-arrow me-2" />Statystyka użycia grup</h5>
                                <Table bordered responsive className="data-table mt-3">
                                    <thead>
                                        <tr>
                                            <th>Grupa</th>
                                            <th>Użycia</th>
                                            <th>Ostatnie użycie</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Grupa satysfakcji klienta</td>
                                            <td>18</td>
                                            <td>12.06.2025</td>
                                        </tr>
                                        <tr>
                                            <td>Ocena wewnętrzna HR</td>
                                            <td>9</td>
                                            <td>09.06.2025</td>
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
                    <i className="bi bi-puzzle me-1" />
                    <strong>Łączna liczba grup:</strong> 5
                </div>
                <div className="summary-text">
                    <i className="bi bi-bar-chart me-1" />
                    <strong>Najczęściej używana:</strong> Grupa satysfakcji klienta (18 użyć)
                </div>
            </div>
        </Container>
    </div>
);
