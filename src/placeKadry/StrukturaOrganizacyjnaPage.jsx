import React from 'react';
import { Container, Table, Button, Form, Row, Col, Card, Dropdown } from 'react-bootstrap';
import '../App.css';

export const StrukturaOrganizacyjna = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Struktura Organizacyjna</h2>
                <p className="text-muted">Zarządzaj strukturą organizacyjną w systemie ERP.</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz dział</Form.Label>
                                    <Form.Control as="select" defaultValue="IT">
                                        <option>IT</option>
                                        <option>HR</option>
                                        <option>Finance</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wyszukaj pracownika</Form.Label>
                                    <Form.Control type="text" placeholder="Szukaj pracownika..." />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Button variant="primary" size="lg" block>
                                    Dodaj pracownika
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-status">
                                        Filtruj po statusie
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1">Wszystkie</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Zatrudniony</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Zwolniony</Dropdown.Item>
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
                        <th>Numer pracownika</th>
                        <th>Data zatrudnienia</th>
                        <th>Status</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jan Kowalski</td>
                        <td>Developer</td>
                        <td>12345</td>
                        <td>12.02.2025</td>
                        <td><Button variant="success">Zatrudniony</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Anna Nowak</td>
                        <td>Manager</td>
                        <td>98765</td>
                        <td>10.11.2025</td>
                        <td><Button variant="danger">Zwolniony</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Piotr Wiśniewski</td>
                        <td>Asystent</td>
                        <td>54321</td>
                        <td>15.01.2025</td>
                        <td><Button variant="success">Zatrudniony</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
