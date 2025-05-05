import { Container, Card, ListGroup, Badge, Alert, Button, Table } from 'react-bootstrap';
import '../App.css';

export const ZmianaFirmy = () => {
    return (
        <Container className="main-content">
            <Card className="shadow-sm">
                <Card.Body>
                    {/* Nagłówek */}
                    <div className="text-center mb-4">
                        <h2>Zmiana firmy</h2>
                        <p className="text-muted">Wybierz firmę, na którą chcesz się przełączyć</p>
                    </div>

                    {/* Aktualna firma */}
                    <Alert variant="info" className="mb-4">
                        <strong>Aktualnie zalogowany do:</strong> TechSolutions Sp. z o.o. (od 15.05.2025)
                    </Alert>

                    {/* Lista dostępnych firm */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3">Dostępne firmy:</h5>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Nazwa firmy</th>
                                        <th>NIP</th>
                                        <th>Ostatnie logowanie</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TechSolutions Sp. z o.o.</td>
                                        <td>123-456-78-90</td>
                                        <td>15.05.2025 08:30</td>
                                        <td><Badge bg="success">Aktywna</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>Innowacje IT SA</td>
                                        <td>987-654-32-10</td>
                                        <td>10.05.2025 14:20</td>
                                        <td><Button variant="outline-primary" size="sm">Przełącz</Button></td>
                                    </tr>
                                    <tr>
                                        <td>SoftWare House</td>
                                        <td>555-666-77-88</td>
                                        <td>05.04.2025 09:15</td>
                                        <td><Button variant="outline-primary" size="sm">Przełącz</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>

                    {/* Formularz dodawania nowej firmy */}
                    <Card className="mb-4">
                        <Card.Body>
                            <h5 className="mb-3">Dodaj nową firmę</h5>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="companyName" className="form-label">Nazwa firmy</label>
                                    <input type="text" className="form-control" id="companyName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="companyNIP" className="form-label">NIP</label>
                                    <input type="text" className="form-control" id="companyNIP" />
                                </div>
                                <div className="col-12">
                                    <Button variant="primary">Dodaj firmę</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Przyciski akcji */}
                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="outline-secondary">Anuluj</Button>
                        <Button variant="primary">Zapisz zmiany</Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Komunikat */}
            <Alert variant="warning" className="mt-3">
                Uwaga: Zmiana firmy może wymagać ponownego zalogowania do systemu.
            </Alert>
        </Container>
    );
}