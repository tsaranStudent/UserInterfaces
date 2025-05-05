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

export const AnkietyWzorceAnkiet = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Wzorce ankiet</h3>
                    <p className="text-muted">Zarządzanie gotowymi wzorcami ankiet w systemie (2025)</p>
                </div>

                <Tabs defaultActiveKey="wzorce" className="mb-3">
                    <Tab eventKey="wzorce" title="Lista wzorców">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Nowy wzorzec</Button>
                                    <Button variant="outline-secondary">Importuj wzorzec</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj wzorców..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Nazwa wzorca</th>
                                        <th>Kategoria</th>
                                        <th>Liczba pytań</th>
                                        <th>Data utworzenia</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
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
                                            <Button variant="outline-primary" size="sm" className="me-1">Podgląd</Button>
                                            <Button variant="outline-success" size="sm" className="me-1">Użyj</Button>
                                            <Button variant="outline-danger" size="sm">Usuń</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ocena szkolenia</td>
                                        <td>HR</td>
                                        <td>8</td>
                                        <td>20.02.2025</td>
                                        <td><Badge bg="warning">Wersja robocza</Badge></td>
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

                    <Tab eventKey="nowy" title="Nowy wzorzec">
                        <div className="form-section mt-3">
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Nazwa wzorca*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Kategoria*</Form.Label>
                                            <Form.Select required>
                                                <option>Badania rynku</option>
                                                <option>HR</option>
                                                <option>Obsługa klienta</option>
                                                <option>Inne</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opis wzorca</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <h5 className="mb-3">Pytania we wzorcu</h5>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>1. Jak oceniasz nasze usługi?</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Typ pytania</Form.Label>
                                                <Form.Select>
                                                    <option>Skala 1-5</option>
                                                    <option>Tak/Nie</option>
                                                    <option>Odpowiedź tekstowa</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="outline-danger" size="sm">Usuń pytanie</Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Button variant="outline-primary" className="mt-3 me-2">
                                    <i className="bi bi-plus-circle me-1"></i> Dodaj pytanie
                                </Button>
                                <Button variant="outline-secondary">
                                    <i className="bi bi-collection me-1"></i> Wybierz z biblioteki
                                </Button>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz wzorzec
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>

                    <Tab eventKey="statystyki" title="Statystyki">
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <h5 className="mb-3">Użycie wzorców</h5>
                                    <Table bordered className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Wzorzec</th>
                                                <th>Liczba użyć</th>
                                                <th>Ostatnie użycie</th>
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

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Liczba dostępnych wzorców:</strong> 8
                    </div>
                    <div className="summary-text">
                        <strong>Najpopularniejszy wzorzec:</strong> Ankieta satysfakcji klienta (24 użycia)
                    </div>
                </div>
            </Container>
        </div>
    );
};