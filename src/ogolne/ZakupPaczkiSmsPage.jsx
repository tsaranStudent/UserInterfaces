import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const ZakupPaczkiSms = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                {/* Nagłówek sekcji */}
                <div className="form-section">
                    <h3 className="page-title mt-3">Zakup pakietu SMS</h3>
                    <p className="text-muted">Moduł komunikacji SMS w systemie ERP (2025)</p>
                </div>

                {/* System zakładek */}
                <Tabs defaultActiveKey="zakup" className="mb-3">
                    {/* Zakładka zakupu nowego pakietu */}
                    <Tab eventKey="zakup" title="Nowy zakup">
                        <div className="form-section mt-3">
                            <Alert variant="info">
                                <strong>Stan konta:</strong> 248 SMS ważnych do 31.12.2025 |
                                <strong> Limit kredytowy:</strong> 5 000 zł
                            </Alert>

                            {/* Formularz wyboru pakietu */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-4">Wybierz pakiet SMS</h5>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Typ pakietu</Form.Label>
                                                <Form.Select>
                                                    <option>Standard (0.40 zł/SMS)</option>
                                                    <option>Biznes (0.35 zł/SMS)</option>
                                                    <option>Premium (0.30 zł/SMS)</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Ilość SMS</Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="number" defaultValue="1000" />
                                                    <InputGroup.Text>sztuk</InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Podsumowanie kosztów */}
                                    <div className="summary-box p-3 mb-3">
                                        <div className="summary-text">
                                            <strong>Koszt netto:</strong> 350,00 zł
                                        </div>
                                        <div className="summary-text">
                                            <strong>VAT (23%):</strong> 80,50 zł
                                        </div>
                                        <div className="summary-text h5">
                                            <strong>Do zapłaty:</strong> 430,50 zł
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            {/* Forma płatności */}
                            <Card>
                                <Card.Body>
                                    <h5 className="mb-4">Metoda płatności</h5>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="radio"
                                            label="Przelew tradycyjny"
                                            name="paymentMethod"
                                            id="payment1"
                                            defaultChecked
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="radio"
                                            label="Płatność kartą"
                                            name="paymentMethod"
                                            id="payment2"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="radio"
                                            label="Saldo kredytowe w ERP"
                                            name="paymentMethod"
                                            id="payment3"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            label="Akceptuję regulamin usług SMS"
                                            required
                                        />
                                    </Form.Group>
                                </Card.Body>
                            </Card>

                            {/* Przyciski akcji */}
                            <div className="actions-bar-end mt-4">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="success">
                                    <i className="bi bi-credit-card me-1"></i> Zatwierdź zakup
                                </Button>
                            </div>
                        </div>
                    </Tab>

                    {/* Zakładka historii zakupów */}
                    <Tab eventKey="historia" title="Historia zakupów">
                        <div className="form-section mt-3">
                            {/* Filtry wyszukiwania */}
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Form.Control
                                        type="date"
                                        className="me-2"
                                        style={{ maxWidth: '200px' }}
                                        max="2025-12-31"
                                    />
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj zamówień..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            {/* Tabela historii */}
                            <Table striped bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Numer zamówienia</th>
                                        <th>Ilość SMS</th>
                                        <th>Kwota</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15.01.2025</td>
                                        <td>ZSMS/2025/001</td>
                                        <td>1000</td>
                                        <td>430,50 zł</td>
                                        <td><Badge bg="success">Zrealizowane</Badge></td>
                                    </tr>
                                    <tr>
                                        <td>10.03.2025</td>
                                        <td>ZSMS/2025/002</td>
                                        <td>500</td>
                                        <td>215,25 zł</td>
                                        <td><Badge bg="warning">Oczekuje na płatność</Badge></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};