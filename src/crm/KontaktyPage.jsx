import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

export const Kontakty = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Kontakty</h3>
                    <p className="text-muted">Zarządzanie kontaktami w systemie (2025)</p>
                </div>

                <Tabs defaultActiveKey="lista" className="mb-3">
                    <Tab eventKey="lista" title="Lista kontaktów">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie kategorie</option>
                                        <option>Klienci</option>
                                        <option>Dostawcy</option>
                                        <option>Pracownicy</option>
                                    </Form.Select>
                                    <Form.Select style={{ maxWidth: '200px' }}>
                                        <option>Wszystkie statusy</option>
                                        <option>Aktywny</option>
                                        <option>Nieaktywny</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="primary" className="me-2">
                                        <i className="bi bi-plus-circle"></i> Dodaj kontakt
                                    </Button>
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj kontaktów..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Row>
                                <Col md={4}>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <h5 className="mb-3">Filtry zaawansowane</h5>
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nazwa</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>E-mail</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Button variant="outline-secondary" className="w-100">
                                                    Filtruj
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={8}>
                                    <Table striped bordered hover className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Nazwa</th>
                                                <th>Typ</th>
                                                <th>E-mail</th>
                                                <th>Telefon</th>
                                                <th>Ostatni kontakt</th>
                                                <th>Akcje</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jan Kowalski</td>
                                                <td><Badge bg="primary">Klient</Badge></td>
                                                <td>jan.kowalski@firma.pl</td>
                                                <td>+48 123 456 789</td>
                                                <td>12.03.2025</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                                    <Button variant="outline-info" size="sm">Historia</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>ABC Sp. z o.o.</td>
                                                <td><Badge bg="success">Dostawca</Badge></td>
                                                <td>biuro@abc.pl</td>
                                                <td>+48 987 654 321</td>
                                                <td>28.02.2025</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm" className="me-1">Edytuj</Button>
                                                    <Button variant="outline-info" size="sm">Historia</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="nowy" title="Nowy kontakt">
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <Tabs defaultActiveKey="dane" className="mb-3">
                                        <Tab eventKey="dane" title="Dane podstawowe">
                                            <Form className="mt-3">
                                                <Row className="mb-3">
                                                    <Col md={6}>
                                                        <Form.Group controlId="contactType">
                                                            <Form.Label>Typ kontaktu</Form.Label>
                                                            <Form.Select>
                                                                <option>Osoba prywatna</option>
                                                                <option>Firma</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group controlId="contactCategory">
                                                            <Form.Label>Kategoria</Form.Label>
                                                            <Form.Select>
                                                                <option>Klient</option>
                                                                <option>Dostawca</option>
                                                                <option>Partner</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Col md={6}>
                                                        <Form.Group controlId="firstName">
                                                            <Form.Label>Imię</Form.Label>
                                                            <Form.Control type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group controlId="lastName">
                                                            <Form.Label>Nazwisko</Form.Label>
                                                            <Form.Control type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <Row className="mb-3">
                                                    <Col md={6}>
                                                        <Form.Group controlId="email">
                                                            <Form.Label>E-mail</Form.Label>
                                                            <Form.Control type="email" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Form.Group controlId="phone">
                                                            <Form.Label>Telefon</Form.Label>
                                                            <Form.Control type="tel" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <div className="d-flex justify-content-end">
                                                    <Button variant="outline-secondary" className="me-2">
                                                        Anuluj
                                                    </Button>
                                                    <Button variant="primary">
                                                        Zapisz kontakt
                                                    </Button>
                                                </div>
                                            </Form>
                                        </Tab>

                                        <Tab eventKey="dodatkowe" title="Dane dodatkowe" disabled>
                                            {/* Sekcja dla dodatkowych pól */}
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>

                    <Tab eventKey="grupy" title="Grupy kontaktów">
                        <div className="form-section mt-3">
                            <Row>
                                <Col md={4}>
                                    <Card>
                                        <Card.Body>
                                            <h5 className="mb-3">Nowa grupa</h5>
                                            <Form>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Nazwa grupy</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                                <Button variant="primary" className="w-100">
                                                    Utwórz grupę
                                                </Button>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={8}>
                                    <ListGroup>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Klienci VIP
                                            <Badge bg="primary" pill>24</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Dostawcy materiałów
                                            <Badge bg="primary" pill>12</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            Kontakty serwisowe
                                            <Badge bg="primary" pill>8</Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Łączna liczba kontaktów:</strong> 156
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnio dodany:</strong> 05.03.2025
                    </div>
                </div>
            </Container>
        </div>
    );
};