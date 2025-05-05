import { Container, Row, Col, Card, Alert, Button, ProgressBar, Table } from 'react-bootstrap';
import '../App.css';

export const KoniecPracy = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Zakończenie pracy</h2>
                <p className="text-muted">Bezpieczne wylogowanie z systemu (15.05.2025)</p>
            </div>

            <Card className="shadow-sm mb-4">
                <Card.Body>
                    <Alert variant="warning" className="text-center">
                        <h5>Przed wylogowaniem zapoznaj się z poniższymi informacjami</h5>
                    </Alert>

                    <Row className="mb-4">
                        <Col md={6}>
                            <div className="form-section">
                                <h5>Niezapisane zmiany</h5>
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>Moduł</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dokumenty sprzedaży</td>
                                            <td><span className="badge badge-success">Zapisane</span></td>
                                        </tr>
                                        <tr>
                                            <td>Edycja kontraktów</td>
                                            <td><span className="badge badge-danger">Niezapisane (2)</span></td>
                                        </tr>
                                        <tr>
                                            <td>Zadania CRM</td>
                                            <td><span className="badge badge-w-realizacji">W trakcie</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="form-section">
                                <h5>Aktywne procesy</h5>
                                <div className="mb-3">
                                    <p>Generowanie raportu miesięcznego <strong>(65%)</strong></p>
                                    <ProgressBar now={65} variant="info" className="mb-3" />
                                </div>
                                <div className="mb-3">
                                    <p>Synchronizacja danych <strong>(30%)</strong></p>
                                    <ProgressBar now={30} variant="warning" className="mb-3" />
                                </div>
                                <Alert variant="secondary">
                                    Zalecane zakończenie procesów przed wylogowaniem
                                </Alert>
                            </div>
                        </Col>
                    </Row>

                    <div className="form-section">
                        <h5>Statystyki dzienne (15.05.2025)</h5>
                        <Row>
                            <Col md={3} className="text-center">
                                <Card className="mb-3">
                                    <Card.Body>
                                        <h6>Dokumenty</h6>
                                        <p className="display-6">24</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className="text-center">
                                <Card className="mb-3">
                                    <Card.Body>
                                        <h6>Zadania</h6>
                                        <p className="display-6">8</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className="text-center">
                                <Card className="mb-3">
                                    <Card.Body>
                                        <h6>Klienci</h6>
                                        <p className="display-6">5</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} className="text-center">
                                <Card className="mb-3">
                                    <Card.Body>
                                        <h6>Czas pracy</h6>
                                        <p className="display-6">7:45</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button variant="danger" size="lg">Wyloguj się</Button>
                        <Button variant="outline-secondary" size="lg">Anuluj</Button>
                        <Button variant="outline-primary" size="lg">Zapisz i kontynuuj</Button>
                    </div>
                </Card.Body>
            </Card>

            <Alert variant="info" className="text-center">
                Ostatnia kopia zapasowa systemu wykonana: 15.05.2025 02:00
            </Alert>
        </Container>
    );
}