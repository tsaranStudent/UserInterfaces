import { Container, Card, Tabs, Tab, Form, Button, Alert, Badge, Table } from 'react-bootstrap';
import '../App.css';

export const Konfiguracja = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Konfiguracja systemu</h2>
                <p className="text-muted">Ustawienia główne i parametry (2025)</p>
            </div>

            <Tabs defaultActiveKey="podstawowe" className="mb-4">
                <Tab eventKey="podstawowe" title="Podstawowe">
                    <Card className="shadow-sm mt-3">
                        <Card.Body>
                            <div className="form-section">
                                <h5>Ustawienia systemowe</h5>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nazwa systemu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue="ERP FIRMA"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Domyślna waluta</Form.Label>
                                        <Form.Select>
                                            <option>PLN</option>
                                            <option>EUR</option>
                                            <option>USD</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button variant="primary">Zapisz zmiany</Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="fiskalne" title="Fiskalne">
                    <Card className="shadow-sm mt-3">
                        <Card.Body>
                            <div className="form-section">
                                <h5>Konfiguracja JPK</h5>
                                <Alert variant="info">
                                    Ustawienia dotyczące plików JPK na 2025 rok
                                </Alert>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Certyfikat podpisu</Form.Label>
                                        <Form.Control
                                            type="text"
                                            defaultValue="CERT_2025_12345678"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Format daty</Form.Label>
                                        <Form.Select>
                                            <option>RRRR-MM-DD</option>
                                            <option>DD-MM-RRRR</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button variant="primary">Zapisz ustawienia</Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="integracje" title="Integracje">
                    <Card className="shadow-sm mt-3">
                        <Card.Body>
                            <div className="form-section">
                                <h5>Integracje zewnętrzne</h5>
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>Usługa</th>
                                            <th>Status</th>
                                            <th>Akcja</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>API Bankowe 2025</td>
                                            <td><Badge bg="success">Aktywna</Badge></td>
                                            <td><Button variant="outline-secondary" size="sm">Konfiguruj</Button></td>
                                        </tr>
                                        <tr>
                                            <td>System księgowy</td>
                                            <td><Badge bg="warning">Nieaktywna</Badge></td>
                                            <td><Button variant="outline-secondary" size="sm">Aktywuj</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            <Alert variant="info" className="text-center">
                Wszystkie zmiany wymagają ponownego zalogowania (2025)
            </Alert>
        </Container>
    );
}