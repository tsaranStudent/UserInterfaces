import React from 'react';
import '../App.css';
import { Container, Tabs, Tab, Alert, Card, Row, Col, Form, InputGroup, Button, Table, Badge } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ZakupPaczkiSms = () => {
    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-envelope-paper icon-unified mb-2" />
                <h1 className="page-title">Zakup pakietu SMS</h1>
                <p className="text-muted">
                    Moduł komunikacji SMS w systemie ERP (2025)
                </p>
            </div>

            {/* Zakładki: zakup + historia */}
            <Tabs defaultActiveKey="zakup" className="mb-4">
                <Tab eventKey="zakup" title={<><i className="bi bi-cart-plus me-1" />Nowy zakup</>}>
                    {/* Zakup pakietu */}
                    <div className="form-section mt-3">
                        {/* Info o stanie konta */}
                        <Alert variant="info">
                            <i className="bi bi-info-circle me-1" />
                            <strong>Stan konta:</strong> 248 SMS ważnych do 31.12.2025 |{' '}
                            <strong>Limit kredytowy:</strong> 5 000 zł
                        </Alert>

                        {/* Wybór pakietu SMS */}
                        <Card className="mb-4">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-box-seam me-1" />Wybierz pakiet SMS
                                </h5>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="smsPackageType" className="mb-3">
                                            <Form.Label>
                                                <i className="bi bi-layers me-1" />Typ pakietu
                                            </Form.Label>
                                            <Form.Select>
                                                <option>Standard (0.40 zł/SMS)</option>
                                                <option>Biznes (0.35 zł/SMS)</option>
                                                <option>Premium (0.30 zł/SMS)</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="smsPackageQuantity" className="mb-3">
                                            <Form.Label>
                                                <i className="bi bi-123 me-1" />Ilość SMS
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" defaultValue={1000} min={100} />
                                                <InputGroup.Text>sztuk</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* Podsumowanie kosztów */}
                                <div className="summary-box p-3 mb-3">
                                    <div className="summary-text">
                                        <i className="bi bi-cash-stack me-1" />
                                        <strong>Koszt netto:</strong> 350,00 zł
                                    </div>
                                    <div className="summary-text">
                                        <i className="bi bi-percent me-1" />
                                        <strong>VAT (23%):</strong> 80,50 zł
                                    </div>
                                    <div className="summary-text h5">
                                        <i className="bi bi-credit-card-2-front me-1" />
                                        <strong>Do zapłaty:</strong> 430,50 zł
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Metoda płatności */}
                        <Card>
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-wallet2 me-1" />Metoda płatności
                                </h5>
                                <Form.Group controlId="payTransfer" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={<><i className="bi bi-bank me-1" />Przelew tradycyjny</>}
                                        name="paymentMethod"
                                        defaultChecked
                                    />
                                </Form.Group>
                                <Form.Group controlId="payCard" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={<><i className="bi bi-credit-card me-1" />Płatność kartą</>}
                                        name="paymentMethod"
                                    />
                                </Form.Group>
                                <Form.Group controlId="payCredit" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={<><i className="bi bi-coin me-1" />Saldo kredytowe w ERP</>}
                                        name="paymentMethod"
                                    />
                                </Form.Group>
                                <Form.Group controlId="acceptRules" className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label={<><i className="bi bi-check2-square me-1" />Akceptuję regulamin usług SMS</>}
                                        required
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        {/* Akcje */}
                        <div className="actions-bar-end mt-4 d-flex justify-content-end gap-2">
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" /> Anuluj
                            </Button>
                            <Button variant="success">
                                <i className="bi bi-credit-card me-1" /> Zatwierdź zakup
                            </Button>
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="historia" title={<><i className="bi bi-clock-history me-1" />Historia zakupów</>}>
                    {/* Historia zakupów */}
                    <div className="form-section mt-3">
                        {/* Akcje nad tabelą */}
                        <div className="actions-bar mb-3 d-flex justify-content-between align-items-center">
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
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                        {/* Tabela historii - min 3 pozycje */}
                        <Table striped bordered hover className="data-table mb-4">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-calendar me-1" />Data</th>
                                    <th><i className="bi bi-hash me-1" />Numer zamówienia</th>
                                    <th><i className="bi bi-envelope me-1" />Ilość SMS</th>
                                    <th><i className="bi bi-cash-coin me-1" />Kwota</th>
                                    <th><i className="bi bi-patch-check me-1" />Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15.01.2025</td>
                                    <td>ZSMS/2025/001</td>
                                    <td>1000</td>
                                    <td>430,50 zł</td>
                                    <td>
                                        <Badge bg="success"><i className="bi bi-check-circle me-1" />Zrealizowane</Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10.03.2025</td>
                                    <td>ZSMS/2025/002</td>
                                    <td>500</td>
                                    <td>215,25 zł</td>
                                    <td>
                                        <Badge bg="warning"><i className="bi bi-hourglass-split me-1" />Oczekuje</Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>05.02.2025</td>
                                    <td>ZSMS/2025/003</td>
                                    <td>2000</td>
                                    <td>860,00 zł</td>
                                    <td>
                                        <Badge bg="danger"><i className="bi bi-x-circle me-1" />Anulowane</Badge>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};
