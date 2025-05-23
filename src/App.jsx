import './App.css';
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Form, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">

                {/* Sekcja powitalna bez banerów */}
                <Container className="mt-3">
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-box-seam icon-unified mb-2 display-4" />
                        <h1 className="page-title mb-2">Witaj w systemie ERP</h1>
                        <p className="mb-3">
                            Wszystko w jednym systemie <span className="text-muted">– faktury, kontrahenci, magazyn.</span>
                        </p>
                        <Form className="mt-4 d-inline-block" style={{ minWidth: 250 }}>
                            <Form.Label className="mb-2">
                                <i className="bi bi-building me-1" />Wybierz firmę:
                            </Form.Label>
                            <Form.Select>
                                <option>TechSolutions Sp. z o.o.</option>
                                <option>Handel24 S.A.</option>
                                <option>NetSoft Polska</option>
                            </Form.Select>
                        </Form>
                    </div>
                </Container>

                {/* Karty modułów z ikonami */}
                <Container className="mt-3">
                    <div className="form-section">
                        <h2 className="page-title text-center mb-3">
                            <i className="bi bi-grid-1x2 me-2" />Moduły główne
                        </h2>
                        <Row className="mb-3">
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-people display-5 text-primary mb-2" />
                                        <Card.Title>Kontrahenci</Card.Title>
                                        <Card.Text>Zarządzaj swoimi kontrahentami</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />Przejdź
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-receipt display-5 text-success mb-2" />
                                        <Card.Title>Faktury</Card.Title>
                                        <Card.Text>Twórz i śledź faktury</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />Przejdź
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-boxes display-5 text-warning mb-2" />
                                        <Card.Title>Magazyn</Card.Title>
                                        <Card.Text>Zarządzaj magazynem i produktami</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />Przejdź
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-graph-up-arrow display-5 text-danger mb-2" />
                                        <Card.Title>Raporty</Card.Title>
                                        <Card.Text>Generuj raporty i analizy</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />Przejdź
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* Szybki dostęp do innych sekcji */}
                        <div className="mt-3 mb-3 text-center">
                            <Form.Select className="w-auto d-inline-block" style={{ minWidth: 220 }}>
                                <option value="">Szybki dostęp...</option>
                                <option value="settings">Ustawienia</option>
                                <option value="help">Pomoc</option>
                                <option value="logout">Wyloguj</option>
                            </Form.Select>
                        </div>
                    </div>
                </Container>

                {/* Sekcja aktualności + statystyki */}
                <Container className="mt-3">
                    <Row className="summary-row">
                        <Col md={8}>
                            <h2 className="page-title mb-2">
                                <i className="bi bi-megaphone me-2" />Aktualności
                            </h2>
                            <Card className="mb-3 shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        <i className="bi bi-stars me-1" />Nowa wersja systemu 3.2.0
                                    </Card.Title>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <i className="bi bi-robot me-1" /> Wsparcie AI dla generowania dokumentów
                                                <Badge bg="success" pill className="ms-2">Nowość</Badge>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <i className="bi bi-bank me-1" /> Integracja z API bankowym
                                                <Badge bg="primary" pill className="ms-2">Ulepszenie</Badge>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <i className="bi bi-file-earmark-bar-graph me-1" /> Optymalizacja raportów JPK
                                                <Badge bg="info" pill className="ms-2">Szybciej</Badge>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h2 className="page-title mb-2">
                                <i className="bi bi-bar-chart-steps me-2" />Twoje statystyki
                            </h2>
                            <Card className="shadow-sm mb-3">
                                <Card.Body>
                                    <Table borderless size="sm" className="mb-2">
                                        <tbody>
                                            <tr>
                                                <td><i className="bi bi-receipt me-1 text-success" />Nowych faktur</td>
                                                <td>
                                                    <Badge bg="success" pill>5</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="bi bi-people me-1 text-primary" />Nowych kontrahentów</td>
                                                <td>
                                                    <Badge bg="primary" pill>3</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="bi bi-boxes me-1 text-warning" />Operacji magazynowych</td>
                                                <td>
                                                    <Badge bg="warning" pill>12</Badge>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button variant="success" className="submit-btn w-100 mt-2">
                                        <i className="bi bi-send-check me-1" />Prześlij raport
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/* Stopka, wersja, link do dokumentacji */}
                <Container className="mt-4">
                    <div className="text-center text-muted small mb-2">
                        <i className="bi bi-info-circle me-1" />
                        System ERP v3.2.0 © 2025 | <a href="/dokumentacja" className="ms-1">Dokumentacja</a>
                    </div>
                </Container>
            </div>
        </Container>
    );
}

export default App;
