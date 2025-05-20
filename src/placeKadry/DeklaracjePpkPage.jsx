import React from 'react';
import { Container, Table, Button, Form, Row, Col, Card, Dropdown } from 'react-bootstrap';
import '../App.css';

export const DeklaracjePpk = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Deklaracje PPK</h2>
                <p className="text-muted">Zarządzaj deklaracjami PPK dla pracowników w 2025 roku.</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz rok</Form.Label>
                                    <Form.Control as="select" defaultValue="2025">
                                        <option>2025</option>
                                        <option>2024</option>
                                        <option>2023</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz pracownika</Form.Label>
                                    <Form.Control as="select">
                                        <option>Wszystkie</option>
                                        <option>Jan Kowalski</option>
                                        <option>Anna Nowak</option>
                                        <option>Piotr Wiśniewski</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Button variant="primary" size="lg" block>
                                    Generuj deklarację PPK
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-custom-components">
                                        Filtruj po statusie
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1">Wszystkie</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Zakończone</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">W trakcie</Dropdown.Item>
                                        <Dropdown.Item eventKey="4">Błąd</Dropdown.Item>
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
                        <th>Stanowisko</th>
                        <th>Nr ZUS</th>
                        <th>Data generowania</th>
                        <th>Status</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jan Kowalski</td>
                        <td>Manager</td>
                        <td>123456789</td>
                        <td>10.02.2025</td>
                        <td><Button variant="success">Zakończono</Button></td>
                        <td><Button variant="info">Pobierz</Button></td>
                    </tr>
                    <tr>
                        <td>Anna Nowak</td>
                        <td>Specjalista</td>
                        <td>987654321</td>
                        <td>09.02.2025</td>
                        <td><Button variant="warning">W trakcie</Button></td>
                        <td><Button variant="info">Pobierz</Button></td>
                    </tr>
                    <tr>
                        <td>Piotr Wiśniewski</td>
                        <td>Asystent</td>
                        <td>192837465</td>
                        <td>08.02.2025</td>
                        <td><Button variant="danger">Błąd</Button></td>
                        <td><Button variant="info">Pobierz</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
