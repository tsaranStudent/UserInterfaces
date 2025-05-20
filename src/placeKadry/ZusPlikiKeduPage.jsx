import React from 'react';
import { Container, Table, Button, Card, Form, Row, Col } from 'react-bootstrap';
import '../App.css';

export const ZusPlikiKedu = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Pliki ZUS KEDU</h2>
                <p className="text-muted">Zarządzaj plikami ZUS KEDU dla pracowników w 2025 roku.</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz okres</Form.Label>
                                    <Form.Control type="month" defaultValue="2025-06" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz dział</Form.Label>
                                    <Form.Select required>
                                        <option>Wszystkie</option>
                                        <option>HR</option>
                                        <option>IT</option>
                                        <option>Marketing</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wyszukiwanie pracownika</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Wprowadź imię, nazwisko lub numer ID"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="d-flex align-items-center justify-content-end">
                                <Button variant="primary" size="lg">Generuj plik ZUS</Button>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jan Kowalski</td>
                        <td>Manager</td>
                        <td>123456789</td>
                        <td>25.05.2025</td>
                        <td><Button variant="success">Zakończono</Button></td>
                    </tr>
                    <tr>
                        <td>Anna Nowak</td>
                        <td>Specjalista</td>
                        <td>987654321</td>
                        <td>25.05.2025</td>
                        <td><Button variant="warning">W trakcie</Button></td>
                    </tr>
                    <tr>
                        <td>Piotr Wiśniewski</td>
                        <td>Asystent</td>
                        <td>192837465</td>
                        <td>25.05.2025</td>
                        <td><Button variant="danger">Błąd</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
