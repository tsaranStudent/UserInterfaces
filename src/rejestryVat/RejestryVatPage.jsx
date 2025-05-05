import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge, InputGroup } from 'react-bootstrap';
import '../App.css';

export const RejestryVat = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Rejestry VAT</h2>
                <p className="text-muted">Ewidencja VAT dla potrzeb rozliczeń z urzędem skarbowym (2025)</p>
            </div>

            <Tabs defaultActiveKey="ewidencja" className="mb-4">
                <Tab eventKey="ewidencja" title="Ewidencja VAT">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy wpis</Button>
                            <Button variant="outline-secondary">Importuj z banku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Sprzedaż</option>
                                <option>Zakup</option>
                            </Form.Select>
                            <Form.Control
                                type="date"
                                defaultValue="2025-05-01"
                                className="me-2"
                                style={{ width: '150px' }}
                            />
                            <Form.Control
                                placeholder="Szukaj..."
                                className="search-input"
                            />
                        </div>
                    </div>

                    <Table striped bordered hover className="data-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Numer</th>
                                <th>Kontrahent</th>
                                <th>Netto</th>
                                <th>VAT</th>
                                <th>Brutto</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>FV/2025/123</td>
                                <td>ABC Sp. z o.o.</td>
                                <td>5 000,00 PLN</td>
                                <td>1 150,00 PLN</td>
                                <td>6 150,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowano</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>FV/2025/124</td>
                                <td>XYZ Sp. z o.o.</td>
                                <td>2 500,00 PLN</td>
                                <td>575,00 PLN</td>
                                <td>3 075,00 PLN</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenie" title="Rozliczenie miesięczne">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Miesiąc rozliczeniowy*</Form.Label>
                                            <Form.Select required>
                                                <option>Maj 2025</option>
                                                <option>Kwiecień 2025</option>
                                                <option>Marzec 2025</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Termin płatności VAT</Form.Label>
                                            <Form.Control
                                                type="date"
                                                defaultValue="2025-06-25"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Stawka VAT</th>
                                            <th>Netto</th>
                                            <th>VAT</th>
                                            <th>Brutto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>23%</td>
                                            <td>15 000,00 PLN</td>
                                            <td>3 450,00 PLN</td>
                                            <td>18 450,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>8%</td>
                                            <td>5 000,00 PLN</td>
                                            <td>400,00 PLN</td>
                                            <td>5 400,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>VAT do zapłaty:</strong> 12 450,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Generuj deklarację VAT-7
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="raporty" title="Raporty bankowe">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data od*</Form.Label>
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-05-01"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data do*</Form.Label>
                                        <Form.Control
                                            type="date"
                                            defaultValue="2025-05-31"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="primary">Generuj raport</Button>
                                </div>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary">Eksportuj do CSV</Button>
                                </div>
                            </div>

                            <Table bordered className="mb-4">
                                <thead>
                                    <tr>
                                        <th>Data operacji</th>
                                        <th>Numer dokumentu</th>
                                        <th>Opis</th>
                                        <th>Kwota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>02.05.2025</td>
                                        <td>OP/VAT/0525/001</td>
                                        <td>Płatność za fakturę FV/2025/120</td>
                                        <td>2 460,00 PLN</td>
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