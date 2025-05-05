import { Container, Card, Alert, Button, ProgressBar, ListGroup, Badge } from 'react-bootstrap';
import '../App.css';

export const OdswierzKonfiguracje = () => {
    return (
        <Container className="main-content">
            <Card className="shadow-sm">
                <Card.Body>
                    {/* Nagłówek */}
                    <div className="text-center mb-4">
                        <h2>Odśwież konfigurację systemu</h2>
                        <p className="text-muted">Wersja 3.2.0 | 15.05.2025</p>
                    </div>

                    {/* Status systemu */}
                    <Alert variant="info" className="text-center">
                        <strong>System wymaga odświeżenia konfiguracji</strong>
                    </Alert>

                    {/* Lista zmian */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3">Wykryte zmiany konfiguracji:</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>Nowe ustawienia JPK 2025</span>
                                    <Badge bg="warning">Wymaga akceptacji</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>Zaktualizowane stawki VAT</span>
                                    <Badge bg="success">Gotowe</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>Integracja z API bankowym</span>
                                    <Badge bg="danger">Brak konfiguracji</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Postęp odświeżania */}
                    <div className="mb-4">
                        <div className="d-flex justify-content-between mb-2">
                            <h5 className="mb-0">Postęp odświeżania:</h5>
                            <span>65%</span>
                        </div>
                        <ProgressBar now={65} className="mb-3" />
                        <small className="text-muted">Ostatnia aktualizacja: 15.05.2025 14:30</small>
                    </div>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-center gap-3">
                        <Button variant="primary" size="lg">Odśwież teraz</Button>
                        <Button variant="outline-secondary" size="lg">Zaplanuj na później</Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Komunikat */}
            <Alert variant="warning" className="mt-3 text-center">
                Proces odświeżania może zająć kilka minut i wymagać restartu systemu
            </Alert>
        </Container>
    );
}