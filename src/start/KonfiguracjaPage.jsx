import React from 'react';
import { Container, Card, Tabs, Tab, Form, Button, Alert, Badge, Table } from 'react-bootstrap';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Konfiguracja = () => {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-gear icon-unified mb-2" />
                        <h1 className="page-title">Konfiguracja systemu</h1>
                        <p className="text-muted">Ustawienia główne i parametry (2025)</p>
                    </div>

                    {/* Zakładki konfiguracyjne */}
                    <Tabs defaultActiveKey="podstawowe" className="mb-4">
                        {/* Podstawowe ustawienia */}
                        <Tab eventKey="podstawowe" title={<><i className="bi bi-sliders me-1" />Podstawowe</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-sliders me-1" />Ustawienia systemowe</h5>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-display me-1" />Nazwa systemu
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    defaultValue="ERP FIRMA"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-currency-exchange me-1" />Domyślna waluta
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>PLN</option>
                                                    <option>EUR</option>
                                                    <option>USD</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-translate me-1" />Domyślny język
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>Polski</option>
                                                    <option>Angielski</option>
                                                    <option>Niemiecki</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />Zapisz zmiany
                                            </Button>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Ustawienia fiskalne */}
                        <Tab eventKey="fiskalne" title={<><i className="bi bi-file-earmark-text me-1" />Fiskalne</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-file-earmark-lock me-1" />Konfiguracja JPK</h5>
                                        <Alert variant="info">
                                            <i className="bi bi-info-circle me-1" />Ustawienia dotyczące plików JPK na 2025 rok
                                        </Alert>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-patch-check me-1" />Certyfikat podpisu
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    defaultValue="CERT_2025_12345678"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-calendar2 me-1" />Format daty
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>RRRR-MM-DD</option>
                                                    <option>DD-MM-RRRR</option>
                                                    <option>MM/DD/RRRR</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-file-earmark-bar-graph me-1" />Typ JPK
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>JPK_VAT</option>
                                                    <option>JPK_FA</option>
                                                    <option>JPK_MAG</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />Zapisz ustawienia
                                            </Button>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Integracje zewnętrzne */}
                        <Tab eventKey="integracje" title={<><i className="bi bi-link-45deg me-1" />Integracje</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-cloud-arrow-up me-1" />Integracje zewnętrzne</h5>
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-app me-1" />Usługa</th>
                                                    <th><i className="bi bi-patch-check me-1" />Status</th>
                                                    <th><i className="bi bi-gear me-1" />Akcja</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>API Bankowe 2025</td>
                                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />Aktywna</Badge></td>
                                                    <td>
                                                        <Button variant="outline-secondary" size="sm">
                                                            <i className="bi bi-tools me-1" />Konfiguruj
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>System księgowy</td>
                                                    <td><Badge bg="warning"><i className="bi bi-hourglass-split me-1" />Nieaktywna</Badge></td>
                                                    <td>
                                                        <Button variant="outline-secondary" size="sm">
                                                            <i className="bi bi-lightning me-1" />Aktywuj
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Płatności online</td>
                                                    <td><Badge bg="danger"><i className="bi bi-x-circle me-1" />Błąd</Badge></td>
                                                    <td>
                                                        <Button variant="outline-secondary" size="sm">
                                                            <i className="bi bi-arrow-repeat me-1" />Połącz ponownie
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>

                    {/* Komunikat na dole */}
                    <Alert variant="info" className="text-center d-flex justify-content-center align-items-center">
                        <i className="bi bi-exclamation-triangle me-2" />
                        Wszystkie zmiany wymagają ponownego zalogowania (2025)
                    </Alert>

                </Container>
            </div>
        </Container>
    );
};
