import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    Container, Row, Col, Tabs, Tab, Button, InputGroup,
    Form, Table, Accordion, Card, Badge
} from 'react-bootstrap';

export const FakturyCykliczne = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-receipt-cutoff icon-unified mb-2" />
                    <h1 className="page-title">Faktury cykliczne</h1>
                    <p className="text-muted">Zarządzanie fakturami okresowymi – rok 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="aktywne" className="mb-4">
                    <Tab eventKey="aktywne" title={<><i className="bi bi-check-circle-fill me-1" />Aktywne</>}>
                        {/* Pasek akcji */}
                        <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                            <div>
                                <Button variant="success" className="me-2">
                                    <i className="bi bi-file-earmark-plus me-1" /> Nowa
                                </Button>
                                <Button variant="outline-primary">
                                    <i className="bi bi-clock-history me-1" /> Historia
                                </Button>
                            </div>
                            <InputGroup className="search-input w-25">
                                <Form.Control placeholder="Szukaj faktury..." />
                                <Button variant="outline-secondary">
                                    <i className="bi bi-search" />
                                </Button>
                            </InputGroup>
                        </div>

                        {/* Tabela faktur */}
                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-hash" /> Numer</th>
                                    <th><i className="bi bi-person-vcard" /> Kontrahent</th>
                                    <th><i className="bi bi-calendar2-week" /> Okres</th>
                                    <th><i className="bi bi-currency-exchange" /> Kwota</th>
                                    <th><i className="bi bi-calendar-event" /> Następna</th>
                                    <th><i className="bi bi-info-circle" /> Status</th>
                                    <th><i className="bi bi-tools" /> Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FV-CYC/001/2025</td>
                                    <td>SoftNet Sp. z o.o.</td>
                                    <td>Miesięczny</td>
                                    <td>2 300,00 zł</td>
                                    <td>15.06.2025</td>
                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" /> Aktywna</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">
                                            <i className="bi bi-pencil" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm">
                                            <i className="bi bi-x-circle" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>FV-CYC/002/2025</td>
                                    <td>DeltaCom</td>
                                    <td>Kwartalny</td>
                                    <td>6 750,00 zł</td>
                                    <td>30.07.2025</td>
                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" /> Aktywna</Badge></td>
                                    <td>
                                        <Button variant="outline-primary" size="sm" className="me-1">
                                            <i className="bi bi-pencil" />
                                        </Button>
                                        <Button variant="outline-danger" size="sm">
                                            <i className="bi bi-x-circle" />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="zarchiwizowane" title={<><i className="bi bi-archive-fill me-1" />Zarchiwizowane</>}>
                        <div className="form-section mt-3">
                            <Table bordered hover className="data-table">
                                <thead>
                                    <tr>
                                        <th>Numer</th>
                                        <th>Kontrahent</th>
                                        <th>Okres</th>
                                        <th>Kwota</th>
                                        <th>Zakończono</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FV-CYC/015/2024</td>
                                        <td>Testowa Sp. z o.o.</td>
                                        <td>Miesięczny</td>
                                        <td>820,00 zł</td>
                                        <td>31.12.2024</td>
                                        <td>
                                            <Button variant="outline-secondary" size="sm">
                                                <i className="bi bi-arrow-counterclockwise me-1" /> Przywróć
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    <Tab eventKey="nowa" title={<><i className="bi bi-file-earmark-plus me-1" />Dodaj nową</>}>
                        <div className="form-section mt-3">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label><i className="bi bi-person-lines-fill me-1" /> Kontrahent</Form.Label>
                                                    <Form.Select>
                                                        <option>Wybierz</option>
                                                        <option>Firma A</option>
                                                        <option>Firma B</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label><i className="bi bi-repeat me-1" /> Okres</Form.Label>
                                                    <Form.Select>
                                                        <option>Miesięczny</option>
                                                        <option>Kwartalny</option>
                                                        <option>Roczny</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="mb-3">
                                            <Col md={4}>
                                                <Form.Label><i className="bi bi-calendar-range me-1" /> Początek cyklu</Form.Label>
                                                <Form.Control type="date" />
                                            </Col>
                                            <Col md={4}>
                                                <Form.Label><i className="bi bi-calendar-event me-1" /> Następna faktura</Form.Label>
                                                <Form.Control type="date" />
                                            </Col>
                                            <Col md={4}>
                                                <Form.Label><i className="bi bi-cash-coin me-1" /> Kwota netto</Form.Label>
                                                <Form.Control type="number" />
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label><i className="bi bi-card-text me-1" /> Uwagi</Form.Label>
                                            <Form.Control as="textarea" rows={2} />
                                        </Form.Group>

                                        <div className="d-flex justify-content-end gap-2">
                                            <Button variant="outline-secondary">
                                                <i className="bi bi-x-lg me-1" /> Anuluj
                                            </Button>
                                            <Button variant="primary">
                                                <i className="bi bi-check-circle me-1" /> Zapisz fakturę
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>
                </Tabs>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <i className="bi bi-bar-chart me-1" />
                        <strong>Łączna liczba aktywnych:</strong> 8
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-currency-dollar me-1" />
                        <strong>Suma miesięczna:</strong> 18 420,00 zł
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-calendar-check me-1" />
                        <strong>Ostatnia aktualizacja:</strong> 12.06.2025
                    </div>
                </div>
            </Container>
        </div>
    </Container>
);
