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

export const AnkietyAnkietowanie = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Ankiety i ankietowanie</h3>
                    <p className="text-muted">Moduł ankiet wewnętrznych w systemie ERP (2025)</p>
                </div>

                <Tabs defaultActiveKey="ankiety" className="mb-3">
                    <Tab eventKey="ankiety" title="Dostępne ankiety">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Nowa ankieta</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj ankiet..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Tytuł ankiety</th>
                                        <th>Data utworzenia</th>
                                        <th>Termin</th>
                                        <th>Status</th>
                                        <th>Odpowiedzi</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Satysfakcja z systemu ERP</td>
                                        <td>15.01.2025</td>
                                        <td>31.03.2025</td>
                                        <td><Badge bg="success">Aktywna</Badge></td>
                                        <td>24/50</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Podgląd</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ocena szkoleń 2025</td>
                                        <td>10.02.2025</td>
                                        <td>15.04.2025</td>
                                        <td><Badge bg="warning">W przygotowaniu</Badge></td>
                                        <td>-</td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="wyniki" title="Wyniki ankiet">
                        <div className="form-section mt-3">
                            <Form.Group className="mb-3">
                                <Form.Label>Wybierz ankietę</Form.Label>
                                <Form.Select>
                                    <option>Satysfakcja z systemu ERP (15.01.2025)</option>
                                    <option>Ocena szkoleń 2024 (10.12.2024)</option>
                                </Form.Select>
                            </Form.Group>

                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Podsumowanie odpowiedzi</h5>
                                    <Row>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <h6>1. Jak oceniasz łatwość obsługi systemu?</h6>
                                                <div className="progress mb-2">
                                                    <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                                                </div>
                                                <div className="text-muted">Średnia ocena: 4.2/5</div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="mb-3">
                                                <h6>2. Czy poleciłbyś system innym?</h6>
                                                <div className="progress mb-2">
                                                    <div className="progress-bar" style={{ width: '85%' }}>85%</div>
                                                </div>
                                                <div className="text-muted">Tak: 85% | Nie: 15%</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>

                            <Button variant="outline-primary">
                                <i className="bi bi-download me-1"></i> Eksportuj wyniki
                            </Button>
                        </div>
                    </Tab>

                    <Tab eventKey="nowa" title="Nowa ankieta">
                        <div className="form-section mt-3">
                            <Form>
                                <Row className="mb-3">
                                    <Col md={8}>
                                        <Form.Group>
                                            <Form.Label>Tytuł ankiety</Form.Label>
                                            <Form.Control type="text" placeholder="Wpisz tytuł ankiety" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label>Termin ważności</Form.Label>
                                            <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opis ankiety</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Pytanie 1</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Treść pytania</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Typ pytania</Form.Label>
                                                <Form.Select>
                                                    <option>Jednokrotny wybór</option>
                                                    <option>Wielokrotny wybór</option>
                                                    <option>Odpowiedź tekstowa</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="outline-danger" size="sm">Usuń pytanie</Button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Button variant="outline-secondary" className="mt-3 me-2">
                                    <i className="bi bi-plus-circle me-1"></i> Dodaj pytanie
                                </Button>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz ankietę
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </div>

    );
};