import React from 'react';
import { Container, Table, Button, Form, Row, Col, Card, Dropdown } from 'react-bootstrap';
import '../App.css';

export const HrmTs = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">System HRM - Transakcje Czasowe</h2>
                <p className="text-muted">Zarządzaj transakcjami czasowymi w systemie HRM w 2025 roku.</p>
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
                                    <Form.Label>Wybierz typ transakcji</Form.Label>
                                    <Form.Control as="select" defaultValue="Wszystkie">
                                        <option>Wszystkie</option>
                                        <option>Urlop</option>
                                        <option>Chorobowe</option>
                                        <option>Wypłata</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Button variant="primary" size="lg" block>
                                    Dodaj Transakcję
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-status">
                                        Filtruj po statusie
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1">Wszystkie</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Zrealizowane</Dropdown.Item>
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
                        <th>Typ Transakcji</th>
                        <th>Data</th>
                        <th>Kwota</th>
                        <th>Status</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jan Kowalski</td>
                        <td>Urlop</td>
                        <td>15.01.2025</td>
                        <td>2000 PLN</td>
                        <td><Button variant="success">Zrealizowane</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Anna Nowak</td>
                        <td>Chorobowe</td>
                        <td>20.01.2025</td>
                        <td>1500 PLN</td>
                        <td><Button variant="warning">W trakcie</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Piotr Wiśniewski</td>
                        <td>Wypłata</td>
                        <td>18.01.2025</td>
                        <td>3500 PLN</td>
                        <td><Button variant="danger">Błąd</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
