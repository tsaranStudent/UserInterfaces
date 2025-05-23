import React from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Logowanie = () => {
    return (
        <Container className="main-content lang-pl d-flex justify-content-center align-items-center mt-2 mb-2" style={{ minHeight: '80vh' }}>
            <div className="background p-3 w-100" style={{ maxWidth: '500px' }}>
                <Card className="shadow-lg">
                    <Card.Body>
                        {/* Nagłówek sekcji z ikoną */}
                        <div className="text-center mb-4">
                            <i className="bi bi-person-circle display-4 mb-2" />
                            <h2 className="page-title">Logowanie do systemu</h2>
                            <p className="text-muted">Wprowadź swoje dane dostępowe</p>
                        </div>

                        {/* Formularz logowania */}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-person me-1" />Login
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wprowadź login"
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-shield-lock me-1" />Hasło
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Wprowadź hasło"
                                    className="form-control-lg"
                                />
                            </Form.Group>

                            {/* Wybór firmy (min. 3 wartości) */}
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <i className="bi bi-buildings me-1" />Firma
                                </Form.Label>
                                <Form.Select className="form-control-lg">
                                    <option>Wybierz firmę...</option>
                                    <option>TechSolutions Sp. z o.o.</option>
                                    <option>Handel24 S.A.</option>
                                    <option>NetSoft Polska</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label={<><i className="bi bi-bookmark-star me-1" />Zapamiętaj mnie</>}
                                />
                            </Form.Group>

                            <div className="d-grid gap-2 mb-3">
                                <Button variant="primary" size="lg">
                                    <i className="bi bi-box-arrow-in-right me-1" />Zaloguj się
                                </Button>
                            </div>
                        </Form>

                        {/* Linki dodatkowe */}
                        <div className="d-flex justify-content-between">
                            <Button variant="link" className="p-0">
                                <i className="bi bi-question-circle me-1" />Przypomnij hasło
                            </Button>
                            <Button variant="link" className="p-0">
                                <i className="bi bi-building-gear me-1" />Zmień firmę
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* Informacja o wersji */}
                <Alert variant="info" className="mt-3 text-center d-flex align-items-center justify-content-center">
                    <i className="bi bi-info-circle me-2" />
                    System ERP v3.2.0 (2025)
                </Alert>
            </div>
        </Container>
    );
};
