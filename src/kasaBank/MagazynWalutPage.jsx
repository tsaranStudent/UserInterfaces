import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const MagazynWalut = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Magazyn walut</h2>
                <p className="text-muted">Stan i zarządzanie zasobami walutowymi (2025)</p>
            </div>

            <Tabs defaultActiveKey="stan" className="mb-4">
                <Tab eventKey="stan" title="Stan magazynu">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Dodaj wpis</Button>
                            <Button variant="outline-secondary">Eksportuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="text"
                                placeholder="Filtruj waluty..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Waluta</th>
                                        <th>Ilość</th>
                                        <th>Wartość (PLN)</th>
                                        <th>Ostatnia aktualizacja</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>EUR</td>
                                        <td>125 450,00</td>
                                        <td>583 456,50</td>
                                        <td>15.05.2025</td>
                                        <td><Badge bg="success">Dostępna</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Historia</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>USD</td>
                                        <td>89 250,00</td>
                                        <td>352 537,50</td>
                                        <td>18.05.2025</td>
                                        <td><Badge bg="warning">Niski stan</Badge></td>
                                        <td>
                                            <Button variant="outline-primary" size="sm">Historia</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="operacje" title="Operacje">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Nowa operacja magazynowa</h5>

                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Typ operacji</Form.Label>
                                        <Form.Select>
                                            <option>Przyjęcie</option>
                                            <option>Wydanie</option>
                                            <option>Korekta</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data operacji</Form.Label>
                                        <Form.Control type="date" defaultValue="2025-05-30" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Numer dokumentu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Waluta</Form.Label>
                                        <Form.Select>
                                            <option>EUR</option>
                                            <option>USD</option>
                                            <option>GBP</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Ilość</Form.Label>
                                        <Form.Control type="number" step="0.01" placeholder="0,00" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kurs wymiany</Form.Label>
                                        <Form.Control type="number" step="0.0001" placeholder="0,0000" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-4">
                                <Form.Label>Uwagi</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zatwierdź operację
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raport" title="Raporty">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Ruch walut - Maj 2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Waluta</th>
                                                <th>Przyjęcia</th>
                                                <th>Wydania</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EUR</td>
                                                <td>245 000,00</td>
                                                <td>198 500,00</td>
                                            </tr>
                                            <tr>
                                                <td>USD</td>
                                                <td>180 000,00</td>
                                                <td>156 250,00</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Wartość magazynu</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Waluta</th>
                                                <th>Ilość</th>
                                                <th>Wartość (PLN)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>EUR</td>
                                                <td>125 450,00</td>
                                                <td>583 456,50</td>
                                            </tr>
                                            <tr>
                                                <td>USD</td>
                                                <td>89 250,00</td>
                                                <td>352 537,50</td>
                                            </tr>
                                            <tr className="fw-bold">
                                                <td>SUMA</td>
                                                <td>-</td>
                                                <td>935 994,00</td>
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