import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const DeklaracjePlikiJPK_V7 = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Deklaracje JPK_V7</h2>
                <p className="text-muted">Generowanie i zarządzanie plikami JPK_V7 (2025)</p>
            </div>

            <Tabs defaultActiveKey="lista" className="mb-4">
                <Tab eventKey="lista" title="Lista deklaracji">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy JPK_V7</Button>
                            <Button variant="outline-secondary">Importuj plik</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '180px' }}>
                                <option>Wszystkie miesiące</option>
                                <option>Maj 2025</option>
                                <option>Kwiecień 2025</option>
                            </Form.Select>
                            <Form.Control
                                placeholder="Szukaj deklaracji..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Nazwa pliku</th>
                                <th>Okres rozliczeniowy</th>
                                <th>Data utworzenia</th>
                                <th>Rozmiar</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JPK_V7_05_2025.xml</td>
                                <td>Maj 2025</td>
                                <td>25.05.2025 14:30</td>
                                <td>245 KB</td>
                                <td><Badge bg="success">Przesłany</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">Pobierz</Button>
                                    <Button variant="outline-info" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>JPK_V7_04_2025.xml</td>
                                <td>Kwiecień 2025</td>
                                <td>25.04.2025 11:15</td>
                                <td>198 KB</td>
                                <td><Badge bg="warning">Weryfikacja</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">Pobierz</Button>
                                    <Button variant="outline-info" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="nowy" title="Nowy JPK_V7">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Okres rozliczeniowy*</Form.Label>
                                            <Form.Select required>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Termin płatności</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-06-25"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Typ deklaracji*</Form.Label>
                                            <Form.Select required>
                                                <option>Miesięczna</option>
                                                <option>Kwartalna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Wersja schematu*</Form.Label>
                                            <Form.Select required>
                                                <option>JPK_V7M (1-3)</option>
                                                <option>JPK_V7K (1-2)</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Uwagi</Form.Label>
                                    <Form.Control as="textarea" rows={2} />
                                </Form.Group>

                                <div className="actions-bar-end mt-4">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Generuj JPK_V7
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="weryfikacja" title="Weryfikacja">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Wybierz plik JPK_V7 do weryfikacji</Form.Label>
                                <Form.Select>
                                    <option>JPK_V7_05_2025.xml - Maj 2025</option>
                                    <option>JPK_V7_04_2025.xml - Kwiecień 2025</option>
                                </Form.Select>
                            </Form.Group>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Element JPK</th>
                                        <th>Liczba pozycji</th>
                                        <th>Wartość netto</th>
                                        <th>VAT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sprzedaż 23%</td>
                                        <td>24</td>
                                        <td>15 200,00 PLN</td>
                                        <td>3 496,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Zakupy 8%</td>
                                        <td>12</td>
                                        <td>8 500,00 PLN</td>
                                        <td>680,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>VAT do zapłaty:</strong> 5 451,00 PLN
                                </div>
                                <Button variant="primary" className="me-2">
                                    Zweryfikuj plik
                                </Button>
                                <Button variant="success">
                                    Wyślij do MF
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row className="mb-4">
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Podsumowanie roczne</h5>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Złożone deklaracje</td>
                                                <td className="text-end">5/12</td>
                                            </tr>
                                            <tr>
                                                <td>Średni czas generowania</td>
                                                <td className="text-end">2 min 15 s</td>
                                            </tr>
                                            <tr>
                                                <td>Średni rozmiar pliku</td>
                                                <td className="text-end">215 KB</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm h-100">
                                <Card.Body>
                                    <h5 className="card-title">Statusy plików</h5>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td>Przesłane</td>
                                                <td className="text-end">4</td>
                                            </tr>
                                            <tr>
                                                <td>Weryfikacja</td>
                                                <td className="text-end">1</td>
                                            </tr>
                                            <tr>
                                                <td>Błędy</td>
                                                <td className="text-end">0</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};