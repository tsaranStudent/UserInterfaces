import React from 'react';
import { Container, Table, Button, Form, Row, Col, Card, Dropdown } from 'react-bootstrap';
import '../App.css';

export const Slowniki = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Słowniki</h2>
                <p className="text-muted">Zarządzaj słownikami w systemie ERP.</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz kategorię słownika</Form.Label>
                                    <Form.Control as="select" defaultValue="Pracownicy">
                                        <option>Pracownicy</option>
                                        <option>Stanowiska</option>
                                        <option>Działy</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wyszukaj</Form.Label>
                                    <Form.Control type="text" placeholder="Szukaj słownika..." />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Button variant="primary" size="lg" block>
                                    Dodaj słownik
                                </Button>
                            </Col>
                            <Col md={6}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-custom-components">
                                        Filtruj po statusie
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="1">Wszystkie</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Aktywne</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Nieaktywne</Dropdown.Item>
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
                        <th>Nazwa słownika</th>
                        <th>Opis</th>
                        <th>Data utworzenia</th>
                        <th>Status</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pracownicy</td>
                        <td>Lista pracowników w systemie ERP</td>
                        <td>12.02.2025</td>
                        <td><Button variant="success">Aktywny</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Stanowiska</td>
                        <td>Lista stanowisk w firmie</td>
                        <td>01.02.2025</td>
                        <td><Button variant="warning">Nieaktywny</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                    <tr>
                        <td>Działy</td>
                        <td>Wszystkie działy w firmie</td>
                        <td>15.01.2025</td>
                        <td><Button variant="success">Aktywny</Button></td>
                        <td><Button variant="info">Edytuj</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
