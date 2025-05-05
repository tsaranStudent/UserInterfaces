import { Container, Card, ListGroup, Badge, Alert, ProgressBar, Button } from 'react-bootstrap';
import '../App.css';

export const NowoscWwersji = () => {
    return (
        <Container className="main-content">
            <Card className="shadow-sm">
                <Card.Body>
                    {/* Nagłówek */}
                    <div className="text-center mb-4">
                        <h2>Nowości w wersji 3.2.0</h2>
                        <p className="text-muted">Data wydania: 15.05.2025</p>
                    </div>

                    {/* Lista nowości */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3">Najważniejsze zmiany:</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Nowy moduł analityczny</div>
                                        <small className="text-muted">Zaawansowane raporty sprzedaży</small>
                                    </div>
                                    <Badge bg="success" pill>Nowe</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Integracja z API bankowym 2025</div>
                                        <small className="text-muted">Automatyzacja płatności</small>
                                    </div>
                                    <Badge bg="primary" pill>Ulepszone</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Optymalizacja JPK_V7M</div>
                                        <small className="text-muted">Szybsze generowanie dokumentów</small>
                                    </div>
                                    <Badge bg="info" pill>Usprawnione</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>

                    {/* Planowane funkcje */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3">W przygotowaniu:</h5>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span>System rekomendacji klientów</span>
                                    <small>65%</small>
                                </div>
                                <ProgressBar now={65} className="mb-3" />
                                <small className="text-muted">Planowane na Q3 2025</small>
                            </div>
                            <Badge bg="warning" className="me-2">W trakcie</Badge>
                            <Badge bg="secondary">Wersja beta: 09.2025</Badge>
                        </Card.Body>
                    </Card>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-center gap-3">
                        <Button variant="primary">Zobacz szczegóły</Button>
                        <Button variant="outline-secondary">Pomiń</Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Informacja dodatkowa */}
            <Alert variant="info" className="mt-3 text-center">
                Więcej informacji znajdziesz w dokumentacji systemu
            </Alert>
        </Container>
    );
}