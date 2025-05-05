import { Container, Row, Col, Card, Tabs, Tab, Table, Badge, Alert } from 'react-bootstrap';
import '../App.css';

export const InformacjeoFirmie = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Informacje o firmie</h2>
                <p className="text-muted">Dane podstawowe i statystyki na rok 2025</p>
            </div>

            <Tabs defaultActiveKey="podstawowe" className="mb-4">
                <Tab eventKey="podstawowe" title="Dane podstawowe">
                    <Card className="shadow-sm mt-3">
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <div className="form-section">
                                        <h5>Dane rejestrowe</h5>
                                        <Table borderless>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Nazwa:</strong></td>
                                                    <td>TechSolutions Sp. z o.o.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>NIP:</strong></td>
                                                    <td>123-456-78-90</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>REGON:</strong></td>
                                                    <td>123456789</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="form-section">
                                        <h5>Dane kontaktowe</h5>
                                        <Table borderless>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Adres:</strong></td>
                                                    <td>ul. Przykładowa 123<br />00-001 Warszawa</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Telefon:</strong></td>
                                                    <td>+48 123 456 789</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Email:</strong></td>
                                                    <td>biuro@techsolutions.pl</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Card className="shadow-sm mt-3">
                        <Card.Body>
                            <div className="form-section">
                                <h5>Podstawowe wskaźniki 2025</h5>
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>Wskaźnik</th>
                                            <th>Wartość</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Przychody Q1</td>
                                            <td>1 245 678 PLN</td>
                                            <td><Badge bg="success">+15% r/r</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>Liczba klientów</td>
                                            <td>128</td>
                                            <td><Badge bg="info">Stabilny</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>Zatrudnieni</td>
                                            <td>42</td>
                                            <td><Badge bg="warning">Rekrutacja</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="struktura" title="Struktura">
                    <Card className="shadow-sm mt-3">
                        <Card.Body>
                            <div className="form-section">
                                <h5>Organizacja firmy</h5>
                                <Row>
                                    <Col md={4}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <h6>Dział IT</h6>
                                                <p className="text-muted mb-2">12 pracowników</p>
                                                <p className="text-muted small">Budżet 2025: 1.2M PLN</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <h6>Dział Sprzedaży</h6>
                                                <p className="text-muted mb-2">8 pracowników</p>
                                                <p className="text-muted small">Cel 2025: 5M PLN</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <h6>Dział HR</h6>
                                                <p className="text-muted mb-2">5 pracowników</p>
                                                <p className="text-muted small">Plan rekrutacji: +8 w 2025</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            <div className="form-section">
                <Alert variant="info">
                    <strong>Planowane zmiany w 2025:</strong> Rozbudowa działu R&D, wprowadzenie nowej linii produktowej w Q3.
                </Alert>
            </div>
        </Container>
    );
}