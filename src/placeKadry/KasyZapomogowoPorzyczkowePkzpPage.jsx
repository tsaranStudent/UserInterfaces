import React from 'react';
import { Container, Table, Button, Form, Row, Col, Card, Dropdown } from 'react-bootstrap';
import '../App.css';

export const KasyZapomogowoPorzyczkowePkzp = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Kasy Zapomogowo-Pożyczkowe (PKZP)</h2>
                <p className="text-muted">Zarządzaj kasami zapomogowo-pożyczkowymi dla pracowników w 2025 roku.</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz pracownika</Form.Label>
                                    <Form.Control as="select" defaultValue="Wszystkie">
                                        <option>Wszystkie</option>
                                        <option>Jan Kowalski</option>
                                        <option>Anna Nowak</option>
                                        <option>Piotr Wiśniewski</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz rodzaj transakcji</Form.Label>
                                    <Form.Control as="select" defaultValue="Wszystkie">
                                        <option>Wszystkie</option>
                                        <option>Pożyczka</option>
                                        <option>Zapomoga</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Button variant="primary" size="lg" block>
                                    Dodaj transakcję
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-status">
                                        Filtruj po statusie
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1">Wszystkie</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Zakończone</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">W trakcie</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>

            <Table striped bordered hover className="data-table">
                <thead>
                    <tr>
                        <th>Imię i Nazwisko</th>
                        <th>Rodzaj transakcji</th>
                        <th>Kwota</th>
                        <th>Data transakcji</th>
                        <th>Status</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jan Kowalski</td>
                        <td>Pożyczka</td>
                        <td>5000 PLN</td>
                        <td>15.01.2025</td>
                        <td><Button variant="success">Zakończono</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Anna Nowak</td>
                        <td>Zapomoga</td>
                        <td>2000 PLN</td>
                        <td>20.01.2025</td>
                        <td><Button variant="warning">W trakcie</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Piotr Wiśniewski</td>
                        <td>Pożyczka</td>
                        <td>3000 PLN</td>
                        <td>18.01.2025</td>
                        <td><Button variant="danger">Błąd</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
