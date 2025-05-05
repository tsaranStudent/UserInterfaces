import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const RaportyKasowoBankowe = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Raporty kasowo-bankowe</h2>
                <p className="text-muted">Generowanie i analiza raportów finansowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="dzienne" className="mb-4">
                <Tab eventKey="dzienne" title="Dzienne">
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data raportu</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-15" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Typ raportu</Form.Label>
                                        <Form.Select>
                                            <option>Wszystkie operacje</option>
                                            <option>Tylko wpływy</option>
                                            <option>Tylko wydatki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Waluta</Form.Label>
                                        <Form.Select>
                                            <option>Wszystkie</option>
                                            <option>PLN</option>
                                            <option>EUR</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar-end">
                                <Button variant="primary">Generuj raport</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3">Podsumowanie dzienne - 15.05.2025</h5>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Konto</th>
                                        <th>Wpływy</th>
                                        <th>Wydatki</th>
                                        <th>Saldo</th>
                                        <th>Liczba transakcji</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Konto główne</td>
                                        <td>125 450,00 PLN</td>
                                        <td>85 200,00 PLN</td>
                                        <td>40 250,00 PLN</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>Konto walutowe</td>
                                        <td>15 800,00 EUR</td>
                                        <td>12 450,00 EUR</td>
                                        <td>3 350,00 EUR</td>
                                        <td>8</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="miesieczne" title="Miesięczne">
                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Miesiąc</Form.Label>
                                        <Form.Select>
                                            <option>Maj 2025</option>
                                            <option>Kwiecień 2025</option>
                                            <option>Marzec 2025</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Typ raportu</Form.Label>
                                        <Form.Select>
                                            <option>Zestawienie ogólne</option>
                                            <option>Analiza kontrahentów</option>
                                            <option>Podział kategorii</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Format eksportu</Form.Label>
                                        <Form.Select>
                                            <option>PDF</option>
                                            <option>Excel</option>
                                            <option>CSV</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar-end">
                                <Button variant="primary" className="me-2">Generuj</Button>
                                <Button variant="outline-secondary">Eksportuj</Button>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-3">Raport miesięczny - Maj 2025</h5>
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>Kategoria</th>
                                        <th>Wpływy</th>
                                        <th>Wydatki</th>
                                        <th>Bilans</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sprzedaż</td>
                                        <td>450 200,00 PLN</td>
                                        <td>-</td>
                                        <td>+450 200,00 PLN</td>
                                    </tr>
                                    <tr>
                                        <td>Zakupy</td>
                                        <td>-</td>
                                        <td>285 500,00 PLN</td>
                                        <td>-285 500,00 PLN</td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td>SUMA</td>
                                        <td>450 200,00 PLN</td>
                                        <td>285 500,00 PLN</td>
                                        <td>+164 700,00 PLN</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="niestandardowe" title="Niestandardowe">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Generator raportów niestandardowych</h5>

                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Okres od</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-01" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Okres do</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-31" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-4">
                                <Form.Label>Konta bankowe</Form.Label>
                                <Form.Select multiple>
                                    <option>Konto główne (PLN)</option>
                                    <option>Konto walutowe (EUR)</option>
                                    <option>Konto oszczędnościowe</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Kategorie</Form.Label>
                                <Form.Check type="checkbox" label="Wszystkie kategorie" defaultChecked />
                                <Form.Check type="checkbox" label="Sprzedaż" />
                                <Form.Check type="checkbox" label="Zakupy" />
                                <Form.Check type="checkbox" label="Wynagrodzenia" />
                            </Form.Group>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Wyczyść
                                </Button>
                                <Button variant="primary">
                                    Generuj raport
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};