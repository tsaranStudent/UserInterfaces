import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, Alert, InputGroup } from 'react-bootstrap';
import '../App.css';

export const WyslijDaneKasaBank = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Wysyłka danych bankowych</h2>
                <p className="text-muted">Integracja i eksport danych do systemów bankowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="wysylka" className="mb-4">
                <Tab eventKey="wysylka" title="Wysyłka danych">
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Alert variant="info">
                                Ostatnia wysyłka: 15.05.2025 14:30 | Status: <Badge bg="success">Wysłano</Badge>
                            </Alert>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Wybierz bank</Form.Label>
                                        <Form.Select>
                                            <option>Bank PKO BP</option>
                                            <option>Bank Pekao SA</option>
                                            <option>mBank</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Typ danych</Form.Label>
                                        <Form.Select>
                                            <option>Zlecenia płatności</option>
                                            <option>Wyciąg bankowy</option>
                                            <option>Dane kontrahentów</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data od</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-01" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data do</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-31" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar-end">
                                <Button variant="primary">
                                    Wyślij dane
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3">Ostatnie wysyłki</h5>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data wysyłki</th>
                                        <th>Bank</th>
                                        <th>Typ danych</th>
                                        <th>Liczba rekordów</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.05.2025 14:30</td>
                                        <td>Bank PKO BP</td>
                                        <td>Zlecenia płatności</td>
                                        <td>24</td>
                                        <td><Badge bg="success">Wysłano</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>30.04.2025 09:15</td>
                                        <td>mBank</td>
                                        <td>Wyciąg bankowy</td>
                                        <td>18</td>
                                        <td><Badge bg="warning">W trakcie</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="konfiguracja" title="Konfiguracja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Ustawienia integracji</h5>

                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Automatyczna wysyłka</Form.Label>
                                            <Form.Select>
                                                <option>Właczona (codziennie o 8:00)</option>
                                                <option>Wyłączona</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Format danych</Form.Label>
                                            <Form.Select>
                                                <option>XML</option>
                                                <option>CSV</option>
                                                <option>JSON</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <h6 className="mb-3">Dane dostępowe</h6>
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Login API</Form.Label>
                                            <Form.Control type="text" placeholder="Wprowadź login" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Klucz API</Form.Label>
                                            <Form.Control type="password" placeholder="Wprowadź klucz" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz zmiany
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="logi" title="Logi systemowe">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Select style={{ width: '200px' }}>
                                        <option>Wszystkie statusy</option>
                                        <option>Sukces</option>
                                        <option>Błąd</option>
                                    </Form.Select>
                                </div>
                                <div className="actions-bar-end">
                                    <Form.Control
                                        type="date"
                                        defaultValue="2025-05-01"
                                        style={{ width: '150px' }}
                                    />
                                </div>
                            </div>

                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Operacja</th>
                                        <th>Bank</th>
                                        <th>Status</th>
                                        <th>Szczegóły</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.05.2025 14:30</td>
                                        <td>Wysyłka płatności</td>
                                        <td>PKO BP</td>
                                        <td><Badge bg="success">Sukces</Badge></td>
                                        <td>Wysłano 24 zlecenia</td>
                                    </tr>
                                    <tr>
                                        <td>14.05.2025 08:45</td>
                                        <td>Synchronizacja kursów</td>
                                        <td>NBP</td>
                                        <td><Badge bg="danger">Błąd</Badge></td>
                                        <td>Brak połączenia</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};