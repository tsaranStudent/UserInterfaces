import React from 'react';
import { Container, Card, Alert, Button, Table, Badge, Form } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ZmianaFirmy = () => {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-arrow-left-right icon-unified mb-2" />
                        <h1 className="page-title">Zmiana firmy</h1>
                        <p className="text-muted">Wybierz firmę, na którą chcesz się przełączyć</p>
                    </div>

                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            {/* Aktualna firma */}
                            <Alert variant="info" className="mb-4 d-flex align-items-center">
                                <i className="bi bi-building me-2" />
                                <strong>Aktualnie zalogowany do:</strong> TechSolutions Sp. z o.o. (od 15.05.2025)
                            </Alert>

                            {/* Lista dostępnych firm - tabela min. 3 */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">
                                        <i className="bi bi-list-ul me-2" />Dostępne firmy:
                                    </h5>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th><i className="bi bi-building me-1" />Nazwa firmy</th>
                                                <th><i className="bi bi-credit-card-2-front me-1" />NIP</th>
                                                <th><i className="bi bi-clock-history me-1" />Ostatnie logowanie</th>
                                                <th><i className="bi bi-gear me-1" />Status / Akcja</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TechSolutions Sp. z o.o.</td>
                                                <td>123-456-78-90</td>
                                                <td>15.05.2025 08:30</td>
                                                <td>
                                                    <Badge bg="success">
                                                        <i className="bi bi-check-circle me-1" />Aktywna
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Innowacje IT SA</td>
                                                <td>987-654-32-10</td>
                                                <td>10.05.2025 14:20</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm">
                                                        <i className="bi bi-arrow-right-circle me-1" />Przełącz
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>SoftWare House</td>
                                                <td>555-666-77-88</td>
                                                <td>05.04.2025 09:15</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm">
                                                        <i className="bi bi-arrow-right-circle me-1" />Przełącz
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>

                            {/* Formularz dodawania nowej firmy z ikonkami i Select min. 3 opcje */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">
                                        <i className="bi bi-building-add me-2" />Dodaj nową firmę
                                    </h5>
                                    <Form className="row g-3">
                                        <Form.Group className="col-md-6 mb-3">
                                            <Form.Label>
                                                <i className="bi bi-type me-1" />Nazwa firmy
                                            </Form.Label>
                                            <Form.Control type="text" id="companyName" placeholder="Wpisz nazwę firmy" />
                                        </Form.Group>
                                        <Form.Group className="col-md-6 mb-3">
                                            <Form.Label>
                                                <i className="bi bi-credit-card-2-front me-1" />NIP
                                            </Form.Label>
                                            <Form.Control type="text" id="companyNIP" placeholder="Wpisz NIP" />
                                        </Form.Group>
                                        <Form.Group className="col-md-12 mb-3">
                                            <Form.Label>
                                                <i className="bi bi-award me-1" />Typ firmy
                                            </Form.Label>
                                            <Form.Select id="companyType">
                                                <option>Wybierz typ firmy...</option>
                                                <option>Spółka z o.o.</option>
                                                <option>Spółka akcyjna</option>
                                                <option>Działalność gospodarcza</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <div className="col-12">
                                            <Button variant="primary">
                                                <i className="bi bi-plus-circle me-1" />Dodaj firmę
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>

                            {/* Przyciski akcji */}
                            <div className="d-flex justify-content-end gap-2">
                                <Button variant="outline-secondary">
                                    <i className="bi bi-x-circle me-1" />Anuluj
                                </Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" />Zapisz zmiany
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Komunikat końcowy */}
                    <Alert variant="warning" className="text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-exclamation-triangle me-2" />
                        Uwaga: Zmiana firmy może wymagać ponownego zalogowania do systemu.
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};
