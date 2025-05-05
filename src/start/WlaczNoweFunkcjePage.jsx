import { Container, Card, Form, Button, Alert, Badge, ProgressBar, Table } from 'react-bootstrap';
import '../App.css';

export const WlaczNoweFunkcje = () => {
    return (
        <Container className="main-content">
            <Card className="shadow-sm">
                <Card.Body>
                    {/* Nagłówek */}
                    <div className="text-center mb-4">
                        <h2>Nowe funkcje systemu</h2>
                        <p className="text-muted">Wersja 3.2.0 | Maj 2025</p>
                    </div>

                    {/* Lista funkcji */}
                    <div className="mb-4">
                        <h5 className="mb-3">Funkcje do aktywacji</h5>

                        <Card className="mb-3">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">Panel analityczny 2025</h6>
                                    <p className="text-muted mb-0">Nowe wizualizacje danych</p>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="analytics-switch"
                                />
                            </Card.Body>
                        </Card>

                        <Card className="mb-3">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 className="mb-1">Integracja bankowa</h6>
                                    <p className="text-muted mb-0">Standard API 2025</p>
                                </div>
                                <Form.Check
                                    type="switch"
                                    id="banking-switch"
                                />
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Funkcje w rozwoju */}
                    <div className="mb-4">
                        <h5 className="mb-3">W przygotowaniu</h5>
                        <Card>
                            <Card.Body>
                                <h6>Moduł AI</h6>
                                <p className="text-muted">Planowana premiera: Q3 2025</p>
                                <ProgressBar now={25} label="25%" className="mb-2" />
                                <Badge bg="secondary">W rozwoju</Badge>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="outline-secondary">Anuluj</Button>
                        <Button variant="primary">Zapisz zmiany</Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Komunikat */}
            <Alert variant="info" className="mt-3 text-center">
                Po zapisaniu zmian system może wymagać ponownego zalogowania
            </Alert>
        </Container>
    );
}