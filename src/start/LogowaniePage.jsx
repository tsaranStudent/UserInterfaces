import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import '../App.css';

export const Logowanie = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card className="shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
                <Card.Body>
                    {/* Nagłówek */}
                    <div className="text-center mb-4">
                        <h2>Logowanie do systemu</h2>
                        <p className="text-muted">Wprowadź swoje dane dostępowe</p>
                    </div>

                    {/* Formularz logowania */}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Login</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Wprowadź login"
                                className="form-control-lg"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Wprowadź hasło"
                                className="form-control-lg"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Zapamiętaj mnie"
                            />
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg" className="mb-3">
                                Zaloguj się
                            </Button>
                        </div>
                    </Form>

                    {/* Linki dodatkowe */}
                    <div className="d-flex justify-content-between">
                        <Button variant="link" className="p-0">Przypomnij hasło</Button>
                        <Button variant="link" className="p-0">Zmień firmę</Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Informacja o wersji */}
            <Alert variant="info" className="position-fixed bottom-0 start-0 m-3">
                System ERP v3.2.0 (2025)
            </Alert>
        </Container>
    );
}