import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const RejestryKasowoBankowe = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Rejestry kasowo-bankowe</h2>
                <p className="text-muted">Ewidencja operacji gotówkowych i bankowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="kasa" className="mb-4">
                <Tab eventKey="kasa" title="Kasa">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy dokument</Button>
                            <Button variant="outline-secondary">Eksportuj</Button>
                        </div>
                        <div className="actions-bar-end">
                            <InputGroup style={{ width: '300px' }}>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-01"
                                />
                                <InputGroup.Text>-</InputGroup.Text>
                                <Form.Control
                                    type="date"
                                    defaultValue="2025-05-31"
                                />
                            </InputGroup>
                        </div>
                    </div>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Numer dokumentu</th>
                                        <th>Typ</th>
                                        <th>Kwota</th>
                                        <th>Opis</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.05.2025</td>
                                        <td>KP/2025/123</td>
                                        <td>Wypłata</td>
                                        <td>5 000,00 PLN</td>
                                        <td>Wypłata na wynagrodzenia</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>18.05.2025</td>
                                        <td>KW/2025/456</td>
                                        <td>Wpływ</td>
                                        <td>12 450,00 PLN</td>
                                        <td>Wpływ od klienta</td>
                                        <td><Badge bg="warning">Do weryfikacji</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="bank" title="Bank">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowa transakcja</Button>
                            <Button variant="outline-secondary">Pobierz wyciąg</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select style={{ width: '200px' }}>
                                <option>Wszystkie konta</option>
                                <option>Konto główne</option>
                                <option>Konto walutowe</option>
                            </Form.Select>
                        </div>
                    </div>

                    <Card className="shadow-sm">
                        <Card.Body>
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data operacji</th>
                                        <th>Numer transakcji</th>
                                        <th>Typ</th>
                                        <th>Kwota</th>
                                        <th>Kontrahent</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12.05.2025</td>
                                        <td>TR/2025/789</td>
                                        <td>Przelew wychodzący</td>
                                        <td>8 900,00 PLN</td>
                                        <td>Dostawca XYZ</td>
                                        <td><Badge bg="success">Zaksięgowano</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>20.05.2025</td>
                                        <td>TR/2025/790</td>
                                        <td>Przelew przychodzący</td>
                                        <td>15 000,00 EUR</td>
                                        <td>Klient ABC</td>
                                        <td><Badge bg="warning">Oczekuje</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="podsumowanie" title="Podsumowanie">
                    <Row>
                        <Col md={6}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">Stan na 31.05.2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Konto</th>
                                                <th>Saldo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Kasa główna</td>
                                                <td>25 450,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Konto bieżące</td>
                                                <td>185 200,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Konto walutowe</td>
                                                <td>32 150,00 EUR</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <h5 className="mb-3">Ruch w maju 2025</h5>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Konto</th>
                                                <th>Wpływy</th>
                                                <th>Wydatki</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Kasa główna</td>
                                                <td>45 200,00 PLN</td>
                                                <td>32 150,00 PLN</td>
                                            </tr>
                                            <tr>
                                                <td>Konto bieżące</td>
                                                <td>250 000,00 PLN</td>
                                                <td>185 000,00 PLN</td>
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