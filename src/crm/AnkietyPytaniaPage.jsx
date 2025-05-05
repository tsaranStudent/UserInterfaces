import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

export const AnkietyPytania = () => { 

    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Baza pytań ankietowych</h3>
                    <p className="text-muted">Zarządzanie pytaniami w ankietach CRM (2025)</p>
                </div>

                <Tabs defaultActiveKey="wszystkie" className="mb-3">
                    <Tab eventKey="wszystkie" title="Wszystkie pytania">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Nowe pytanie</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj pytań..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Treść pytania</th>
                                        <th>Typ pytania</th>
                                        <th>Grupa</th>
                                        <th>Data dodania</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jak oceniasz nasz produkt w skali 1-5?</td>
                                        <td><Badge bg="info">Skala ocen</Badge></td>
                                        <td>Satysfakcja</td>
                                        <td>15.01.2025</td>
                                        <td><Badge bg="success">Aktywne</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                            <Button variant="outline-danger" size="sm">Usuń</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jakie funkcje są dla Ciebie najważniejsze?</td>
                                        <td><Badge bg="warning">Wielokrotny wybór</Badge></td>
                                        <td>Preferencje</td>
                                        <td>20.02.2025</td>
                                        <td><Badge bg="secondary">Archiwalne</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                            <Button variant="outline-danger" size="sm">Usuń</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="nowe" title="Nowe pytanie">
                        <div className="form-section mt-3">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Treść pytania*</Form.Label>
                                    <Form.Control as="textarea" rows={3} required />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ pytania*</Form.Label>
                                            <Form.Select required>
                                                <option>Wybierz typ...</option>
                                                <option>Pojedynczy wybór</option>
                                                <option>Wielokrotny wybór</option>
                                                <option>Skala ocen (1-5)</option>
                                                <option>Odpowiedź tekstowa</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Grupa pytań</Form.Label>
                                            <Form.Select>
                                                <option>Brak grupy</option>
                                                <option>Satysfakcja</option>
                                                <option>Preferencje</option>
                                                <option>Dane demograficzne</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Accordion className="mb-3">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Opcje odpowiedzi</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Opcja 1</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Opcja 2</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-plus-circle me-1"></i> Dodaj opcję
                                            </Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Pytanie wymagane"
                                        defaultChecked
                                    />
                                </Form.Group>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz pytanie
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>

                    <Tab eventKey="statystyki" title="Statystyki">
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <h5 className="mb-3">Użycie pytań w ankietach</h5>
                                    <Table bordered className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Pytanie</th>
                                                <th>Liczba ankiet</th>
                                                <th>Ostatnie użycie</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jak oceniasz nasz produkt w skali 1-5?</td>
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

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Liczba aktywnych pytań:</strong> 24
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnio dodane pytanie:</strong> 20.02.2025
                    </div>
                </div>
            </Container>
        </div>
    );
};