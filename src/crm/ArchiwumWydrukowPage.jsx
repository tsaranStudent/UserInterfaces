import React from 'react';
import {
    Container, Row, Col, Table, Tabs, Tab, Button,
    InputGroup, Form, Card, Badge
} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const ArchiwumWydrukow = () => (
    <Container className="lang-pl mt-2 mb-2">
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    <i className="bi bi-printer-fill icon-unified mb-2" />
                    <h1 className="page-title">Archiwum wydruków</h1>
                    <p className="text-muted">Historia wydrukowanych dokumentów – rok 2025</p>
                </div>

                {/* Zakładki */}
                <Tabs defaultActiveKey="wydruki" className="mb-4">
                    <Tab eventKey="wydruki" title={<><i className="bi bi-clock-history me-1" />Historia</>}>
                        <div className="actions-bar form-section d-flex justify-content-between align-items-center">
                            <div className="actions-bar-start">
                                <Form.Control type="date" max="2025-12-31" style={{ maxWidth: '180px' }} />
                                <Form.Select style={{ maxWidth: '180px' }}>
                                    <option>Wszystkie typy</option>
                                    <option>Faktury</option>
                                    <option>Oferty</option>
                                    <option>Zamówienia</option>
                                </Form.Select>
                            </div>
                            <InputGroup className="search-input">
                                <Form.Control placeholder="Szukaj wydruków..." />
                                <Button variant="outline-secondary"><i className="bi bi-search" /></Button>
                            </InputGroup>
                        </div>

                        <Table striped bordered hover responsive className="data-table">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-calendar3" /> Data</th>
                                    <th><i className="bi bi-file-earmark" /> Typ</th>
                                    <th><i className="bi bi-file-earmark-pdf" /> Plik</th>
                                    <th><i className="bi bi-person" /> Użytkownik</th>
                                    <th><i className="bi bi-hdd" /> Rozmiar</th>
                                    <th><i className="bi bi-tools" /> Akcje</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { data: '12.01.2025', typ: 'Faktura', badge: 'primary', plik: 'FV_001.pdf', user: 'j.kowalski', size: '240 KB' },
                                    { data: '05.03.2025', typ: 'Zamówienie', badge: 'success', plik: 'ZO_013.pdf', user: 'a.nowak', size: '180 KB' },
                                    { data: '28.04.2025', typ: 'Oferta', badge: 'warning', plik: 'OF_010.pdf', user: 'm.wisniewska', size: '210 KB' }
                                ].map((r, i) => (
                                    <tr key={i}>
                                        <td>{r.data}</td>
                                        <td><Badge bg={r.badge}>{r.typ}</Badge></td>
                                        <td>{r.plik}</td>
                                        <td>{r.user}</td>
                                        <td>{r.size}</td>
                                        <td>
                                            <Button size="sm" variant="outline-primary" className="me-1"><i className="bi bi-download" /></Button>
                                            <Button size="sm" variant="outline-danger"><i className="bi bi-trash" /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey="statystyki" title={<><i className="bi bi-graph-up-arrow me-1" />Statystyki</>}>
                        <Row className="form-section">
                            <Col md={6}>
                                <Card className="mb-4">
                                    <Card.Body>
                                        <h5><i className="bi bi-bar-chart-fill me-1" />Podsumowanie</h5>
                                        <Table bordered className="data-table mt-3">
                                            <tbody>
                                                <tr><td>Wszystkich wydruków</td><td>128</td></tr>
                                                <tr><td>W maju 2025</td><td>34</td></tr>
                                                <tr><td>Dominujący typ</td><td>Faktury (64%)</td></tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <h5><i className="bi bi-clock me-1" />Ostatnie wydruki</h5>
                                        {[
                                            { plik: 'FV_051.pdf', data: '12.05.2025', progress: 95 },
                                            { plik: 'Raport_Q1.pdf', data: '04.05.2025', progress: 75 },
                                            { plik: 'OF_2025_023.pdf', data: '29.04.2025', progress: 60 }
                                        ].map((item, i) => (
                                            <div key={i} className="mb-3">
                                                <div className="d-flex justify-content-between small">
                                                    <span>{item.plik}</span><span>{item.data}</span>
                                                </div>
                                                <div className="progress" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-info" style={{ width: `${item.progress}%` }} />
                                                </div>
                                            </div>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="ustawienia" title={<><i className="bi bi-gear-fill me-1" />Ustawienia</>}>
                        <Form className="form-section">
                            <Form.Group className="mb-3">
                                <Form.Label><i className="bi bi-hourglass-split me-1" /> Czas przechowywania</Form.Label>
                                <Form.Select defaultValue="6">
                                    <option value="1">1 miesiąc</option>
                                    <option value="3">3 miesiące</option>
                                    <option value="6">6 miesięcy</option>
                                    <option value="12">1 rok</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check label="Włącz automatyczne czyszczenie" defaultChecked />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label><i className="bi bi-database me-1" /> Limit rozmiaru archiwum</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" defaultValue="500" />
                                    <InputGroup.Text>MB</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <div className="d-flex justify-content-end gap-2">
                                <Button variant="outline-secondary"><i className="bi bi-x-lg me-1" />Anuluj</Button>
                                <Button variant="primary"><i className="bi bi-check-circle me-1" />Zapisz</Button>
                            </div>
                        </Form>
                    </Tab>
                </Tabs>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <i className="bi bi-hdd-fill me-1" /><strong>Zajętość archiwum:</strong> 132 MB / 500 MB
                    </div>
                    <div className="summary-text">
                        <i className="bi bi-calendar-check-fill me-1" /><strong>Ostatni zapis:</strong> 12.05.2025
                    </div>
                </div>
            </Container>
        </div>
    </Container>
);
