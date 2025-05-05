import { Container, Table, Accordion, Form, Row, Col, Badge, Button, Card, Tabs, Tab } from 'react-bootstrap';
import '../App.css';

export const DokumentyRozliczone = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Dokumenty rozliczone</h2>
                <p className="text-muted">Przegląd rozliczonych dokumentów finansowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="przeglad" className="mb-4">
                <Tab eventKey="przeglad" title="Przegląd rozliczeń">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="outline-primary">Filtruj</Button>
                            <Button variant="outline-secondary">Eksportuj do Excel</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Control
                                type="text"
                                placeholder="Wyszukaj rozliczenia..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Numer rozliczenia</th>
                                        <th>Data</th>
                                        <th>Typ</th>
                                        <th>Liczba dokumentów</th>
                                        <th>Kwota</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RL/2025/001</td>
                                        <td>10.05.2025</td>
                                        <td>Faktura + Płatność</td>
                                        <td>2</td>
                                        <td>24 500,00 PLN</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                        <td>
                                            <Button variant="outline-info" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>RL/2025/002</td>
                                        <td>15.05.2025</td>
                                        <td>Wiele dokumentów</td>
                                        <td>5</td>
                                        <td>18 750,00 PLN</td>
                                        <td><Badge bg="warning">Weryfikacja</Badge></td>
                                        <td>
                                            <Button variant="outline-info" size="sm">Szczegóły</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="szczegoly" title="Szczegóły rozliczenia">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h5 className="mb-4">Szczegóły rozliczenia RL/2025/001</h5>

                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data rozliczenia</Form.Label>
                                        <Form.Control type="text" readOnly value="10.05.2025" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kwota rozliczenia</Form.Label>
                                        <Form.Control type="text" readOnly value="24 500,00 PLN" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control type="text" readOnly value="Zaksięgowano" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Powiązane dokumenty</Accordion.Header>
                                    <Accordion.Body>
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th>Numer dokumentu</th>
                                                    <th>Typ</th>
                                                    <th>Kontrahent</th>
                                                    <th>Kwota</th>
                                                    <th>Data</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>FV/2025/123</td>
                                                    <td>Faktura VAT</td>
                                                    <td>ABC Sp. z o.o.</td>
                                                    <td>12 450,00 PLN</td>
                                                    <td>05.05.2025</td>
                                                </tr>
                                                <tr>
                                                    <td>PL/2025/456</td>
                                                    <td>Płatność</td>
                                                    <td>ABC Sp. z o.o.</td>
                                                    <td>12 450,00 PLN</td>
                                                    <td>10.05.2025</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <div className="actions-bar-end mt-4">
                                <Button variant="outline-secondary">Drukuj potwierdzenie</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="statystyki" title="Statystyki">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Rozliczenia w 2025 roku</h5>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col>
                                                <Form.Select>
                                                    <option>Styczeń 2025</option>
                                                    <option selected>Maj 2025</option>
                                                    <option>Cały rok</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <Table bordered>
                                        <tbody>
                                            <tr>
                                                <td>Liczba rozliczeń</td>
                                                <td className="fw-bold">24</td>
                                            </tr>
                                            <tr>
                                                <td>Łączna kwota</td>
                                                <td className="fw-bold">156 820,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Średnia wartość</td>
                                                <td className="fw-bold">6 534,17 PLN</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Typy rozliczeń</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Typ</th>
                                                <th>Liczba</th>
                                                <th>% udziału</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Faktura + Płatność</td>
                                                <td>15</td>
                                                <td>62.5%</td>
                                            </tr>
                                            <tr>
                                                <td>Wiele dokumentów</td>
                                                <td>7</td>
                                                <td>29.2%</td>
                                            </tr>
                                            <tr>
                                                <td>Inne</td>
                                                <td>2</td>
                                                <td>8.3%</td>
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