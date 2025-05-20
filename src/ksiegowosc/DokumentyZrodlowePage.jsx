import React from 'react';
import { Container, Table, Form, Row, Col, Button, Card, Tabs, Tab, Badge } from 'react-bootstrap';
import '../App.css';

export const DokumentyZrodlowe = () => {
    return (
        <Container className="main-content">
            <div className="form-section">
                <h2 className="page-title">Dokumenty źródłowe</h2>
                <p className="text-muted">Ewidencja dokumentów źródłowych (2025)</p>
            </div>

            <Tabs defaultActiveKey="dokumenty" className="mb-4">
                <Tab eventKey="dokumenty" title="Dokumenty źródłowe">
                    <div className="actions-bar mb-3">
                        <div className="actions-bar-start">
                            <Button variant="primary">Nowy dokument</Button>
                            <Button variant="outline-secondary">Importuj z pliku</Button>
                        </div>
                        <div className="actions-bar-end">
                            <Form.Select className="me-2" style={{ width: '150px' }}>
                                <option>Wszystkie</option>
                                <option>Faktura sprzedaży</option>
                                <option>Faktura zakupu</option>
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
                                <th>Numer dokumentu</th>
                                <th>Typ dokumentu</th>
                                <th>Kontrahent</th>
                                <th>Kwota netto</th>
                                <th>VAT</th>
                                <th>Kwota brutto</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15.05.2025</td>
                                <td>FV/2025/123</td>
                                <td>Faktura sprzedaży</td>
                                <td>ABC Sp. z o.o.</td>
                                <td>5 000,00 PLN</td>
                                <td>1 150,00 PLN</td>
                                <td>6 150,00 PLN</td>
                                <td><Badge bg="success">Zaksięgowano</Badge></td>
                            </tr>
                            <tr>
                                <td>18.05.2025</td>
                                <td>FV/2025/124</td>
                                <td>Faktura zakupu</td>
                                <td>XYZ Sp. z o.o.</td>
                                <td>2 500,00 PLN</td>
                                <td>575,00 PLN</td>
                                <td>3 075,00 PLN</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>

                <Tab eventKey="rozliczenia" title="Rozliczenia">
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
                                            <Form.Label>Kwota VAT do zapłaty</Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue="1 725,00 PLN"
                                                disabled
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Table bordered className="mb-4">
                                    <thead>
                                        <tr>
                                            <th>Typ dokumentu</th>
                                            <th>Kwota netto</th>
                                            <th>VAT</th>
                                            <th>Kwota brutto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Faktura sprzedaży</td>
                                            <td>5 000,00 PLN</td>
                                            <td>1 150,00 PLN</td>
                                            <td>6 150,00 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Faktura zakupu</td>
                                            <td>2 500,00 PLN</td>
                                            <td>575,00 PLN</td>
                                            <td>3 075,00 PLN</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <div className="summary-box">
                                    <div className="summary-text">
                                        <strong>Łączna kwota do zapłaty VAT:</strong> 1 725,00 PLN
                                    </div>
                                    <Button variant="primary" className="mt-2">
                                        Zatwierdź rozliczenie
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};
