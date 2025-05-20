import React from 'react';
import { Container, Table, Button, Form, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

export const WtplatyPracownikow = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Wypłaty Pracowników</h2>
                <p className="text-muted">Zarządzaj wypłatami pracowników i kontroluj status realizacji płatności za 2025 rok.</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Okres rozliczeniowy*</Form.Label>
                                    <Form.Control type="month" defaultValue="2025-05" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz dział*</Form.Label>
                                    <Form.Select required>
                                        <option>Wszystkie</option>
                                        <option>HR</option>
                                        <option>IT</option>
                                        <option>Sprzedaż</option>
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
                                <Button variant="primary" size="lg">Generuj listę wypłat</Button>
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
                        <th>Wynagrodzenie brutto</th>
                        <th>Wynagrodzenie netto</th>
                        <th>Data wypłaty</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jan Kowalski</td>
                        <td>Manager</td>
                        <td>10,000 PLN</td>
                        <td>8,000 PLN</td>
                        <td>25.05.2025</td>
                        <td><Button variant="success">Wypłacono</Button></td>
                    </tr>
                    <tr>
                        <td>Anna Nowak</td>
                        <td>Specjalista</td>
                        <td>6,000 PLN</td>
                        <td>4,800 PLN</td>
                        <td>25.05.2025</td>
                        <td><Button variant="warning">Oczekujące</Button></td>
                    </tr>
                    <tr>
                        <td>Piotr Wiśniewski</td>
                        <td>Asystent</td>
                        <td>4,500 PLN</td>
                        <td>3,600 PLN</td>
                        <td>25.05.2025</td>
                        <td><Button variant="danger">Zatrzymane</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
