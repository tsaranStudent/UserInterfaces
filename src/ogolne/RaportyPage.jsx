import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Tabs, Tab, Form, Table, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Raporty = () => (
    <Container className="main-content lang-pl mt-3 mb-3">
        {/* Nagłówek sekcji z ikoną */}
        <div className="form-section text-center mb-4">
            <i className="bi bi-bar-chart-line icon-unified mb-2" />
            <h1 className="page-title">Generowanie raportów</h1>
            <p className="text-muted">Dane za rok 2025</p>
        </div>

        {/* Zakładki z raportami sprzedażowymi i magazynowymi */}
        <Tabs defaultActiveKey="sales" className="mb-4">
            <Tab eventKey="sales" title="Sprzedażowe">
                <div className="form-section mt-3">
                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Group controlId="rapSalesType">
                                <Form.Label>
                                    <i className="bi bi-archive me-1" /> Typ raportu
                                </Form.Label>
                                <Form.Select>
                                    <option>Raport miesięczny</option>
                                    <option>Raport kwartalny</option>
                                    <option>Raport roczny</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="rapSalesFrom">
                                <Form.Label>
                                    <i className="bi bi-calendar me-1" /> Od daty
                                </Form.Label>
                                <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="rapSalesTo">
                                <Form.Label>
                                    <i className="bi bi-calendar me-1" /> Do daty
                                </Form.Label>
                                <Form.Control type="date" min="2025-01-01" max="2025-12-31" />
                            </Form.Group>
                        </Col>
                        <Col md={3} className="d-flex align-items-end">
                            <Button variant="primary" className="w-100">
                                <i className="bi bi-bar-chart-steps me-1" /> Generuj raport
                            </Button>
                        </Col>
                    </Row>

                    {/* Tabela wygenerowanych raportów */}
                    <Table bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>Typ raportu</th>
                                <th>Okres</th>
                                <th>Data wygenerowania</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Raport miesięczny</td>
                                <td>Styczeń 2025</td>
                                <td>01.02.2025</td>
                                <td>
                                    <span className="badge badge-success">
                                        <i className="bi bi-check-circle me-1" /> Gotowy
                                    </span>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" title="Pobierz">
                                        <i className="bi bi-download" /> Pobierz
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Raport kwartalny</td>
                                <td>I kwartał 2025</td>
                                <td>03.04.2025</td>
                                <td>
                                    <span className="badge badge-success">
                                        <i className="bi bi-check-circle me-1" /> Gotowy
                                    </span>
                                </td>
                                <td>
                                    <Button variant="outline-primary" size="sm" title="Pobierz">
                                        <i className="bi bi-download" /> Pobierz
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>Raport roczny</td>
                                <td>2024</td>
                                <td>02.01.2025</td>
                                <td>
                                    <span className="badge badge-planned">
                                        <i className="bi bi-hourglass-split me-1" /> W toku
                                    </span>
                                </td>
                                <td>
                                    <Button variant="outline-secondary" size="sm" title="W przygotowaniu" disabled>
                                        <i className="bi bi-clock" /> Oczekuje
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Tab>

            <Tab eventKey="warehouse" title="Magazynowe">
                <div className="form-section mt-3">
                    <Row className="mb-3">
                        <Col md={5}>
                            <Form.Group controlId="rapWarehouseProduct">
                                <Form.Label>
                                    <i className="bi bi-box me-1" /> Produkt
                                </Form.Label>
                                <Form.Select>
                                    <option>Monitor Dell 24"</option>
                                    <option>Drukarka HP 2330</option>
                                    <option>Paleta papieru A4</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={5}>
                            <Form.Group controlId="rapWarehouseType">
                                <Form.Label>
                                    <i className="bi bi-list-columns me-1" /> Rodzaj raportu
                                </Form.Label>
                                <Form.Select>
                                    <option>Raport stanów</option>
                                    <option>Raport ruchów</option>
                                    <option>Raport przyjęć</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="d-flex align-items-end">
                            <Button variant="primary" className="w-100">
                                <i className="bi bi-clipboard-data me-1" /> Generuj
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Tab>
        </Tabs>

        {/* Zaplanowane raporty */}
        <div className="form-section">
            <h5>
                <i className="bi bi-clock-history me-2" /> Zaplanowane raporty
            </h5>
            <Table bordered responsive className="data-table">
                <thead>
                    <tr>
                        <th>Nazwa raportu</th>
                        <th>Częstotliwość</th>
                        <th>Odbiorcy</th>
                        <th>Następne wykonanie</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Raport tygodniowy</td>
                        <td>Co tydzień</td>
                        <td>kierownik@firma.pl</td>
                        <td>15.01.2025</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" title="Edytuj">
                                <i className="bi bi-pencil" /> Edytuj
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Raport miesięczny</td>
                        <td>Co miesiąc</td>
                        <td>zarzad@firma.pl</td>
                        <td>01.02.2025</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" title="Edytuj">
                                <i className="bi bi-pencil" /> Edytuj
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Raport roczny</td>
                        <td>Rocznie</td>
                        <td>audyt@firma.pl</td>
                        <td>01.01.2026</td>
                        <td>
                            <Button variant="outline-secondary" size="sm" title="Edytuj">
                                <i className="bi bi-pencil" /> Edytuj
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>

        {/* Podsumowanie */}
        <div className="summary-box mt-4">
            <p>
                <i className="bi bi-bar-chart-line me-2" />
                <strong>Wygenerowano w 2025:</strong> 24 raporty
            </p>
            <p>
                <i className="bi bi-clock me-2" />
                <strong>Zaplanowane:</strong> 8 raportów
            </p>
            <Button variant="outline-primary" className="submit-btn mt-2">
                <i className="bi bi-clock-history me-1" /> Historia raportów
            </Button>
        </div>
    </Container>
);
