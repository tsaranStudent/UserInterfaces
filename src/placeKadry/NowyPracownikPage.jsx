import React from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import '../App.css';

export const NowyPracownik = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Nowy Pracownik</h2>
                <p className="text-muted">Dodaj nowego pracownika do systemu (2025)</p>
            </div>

            <Card className="shadow-sm">
                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Imię i nazwisko*</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź imię i nazwisko" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Stanowisko*</Form.Label>
                                    <Form.Select required>
                                        <option>Wybierz stanowisko</option>
                                        <option>Manager</option>
                                        <option>Specjalista</option>
                                        <option>Asystent</option>
                                        <option>Administrator</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Data zatrudnienia*</Form.Label>
                                    <Form.Control type="date" defaultValue="2025-05-01" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wynagrodzenie brutto*</Form.Label>
                                    <Form.Control type="number" placeholder="Wprowadź wynagrodzenie" required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Numer konta bankowego*</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź numer konta bankowego" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Wybierz dział*</Form.Label>
                                    <Form.Select required>
                                        <option>Marketing</option>
                                        <option>Sprzedaż</option>
                                        <option>IT</option>
                                        <option>HR</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="actions-bar mt-3">
                            <Button variant="primary" type="submit">
                                Zapisz
                            </Button>
                            <Button variant="outline-secondary" className="ms-2">
                                Anuluj
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};
