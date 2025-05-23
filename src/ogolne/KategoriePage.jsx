import React from 'react';
import { Container, Row, Col, Table, Form, Button, Accordion } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

export const Kategorie = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-tags icon-unified mb-2" />
                    <h1 className="page-title">Kategorie produktów 2025</h1>
                    <p className="text-muted">Zarządzaj kategoriami produktów</p>
                </div>

                {/* Pasek akcji i wyszukiwanie */}
                <div className="actions-bar form-section mb-4 d-flex justify-content-between align-items-center">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-plus-lg me-1" /> Nowa kategoria
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-diagram-3 me-1" /> Drzewo kategorii
                        </Button>
                    </div>
                    <Form.Control
                        type="text"
                        placeholder="Wyszukaj kategorię..."
                        className="search-input w-25"
                    />
                </div>

                {/* Tabela kategorii produktów */}
                <div className="form-section mb-4">
                    <Table bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nazwa kategorii</th>
                                <th>Liczba produktów</th>
                                <th>Data utworzenia</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>KAT-2025-001</td>
                                <td>Elektronika</td>
                                <td>215</td>
                                <td>05.01.2025</td>
                                <td><span className="badge badge-success">Aktywna</span></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-pencil" />
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        <i className="bi bi-trash" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>KAT-2025-002</td>
                                <td>Artykuły gospodarstwa domowego</td>
                                <td>178</td>
                                <td>10.01.2025</td>
                                <td><span className="badge badge-success">Aktywna</span></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-pencil" />
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        <i className="bi bi-trash" />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>KAT-2025-003</td>
                                <td>Odzież</td>
                                <td>342</td>
                                <td>15.01.2025</td>
                                <td><span className="badge badge-planned">Wstrzymana</span></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-pencil" />
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        <i className="bi bi-trash" />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* Formularz dodawania kategorii */}
                <Accordion className="mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nową kategorię</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3 g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="katNazwa">
                                            <Form.Label>Nazwa kategorii*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="katParent">
                                            <Form.Label>Kategoria nadrzędna</Form.Label>
                                            <Form.Select>
                                                <option value="">Brak (kategoria główna)</option>
                                                <option value="1">Elektronika</option>
                                                <option value="2">Artykuły gospodarstwa domowego</option>
                                                <option value="3">Odzież</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3 g-3">
                                    <Col md={6}>
                                        <Form.Group controlId="katStatus">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Select>
                                                <option value="active">Aktywna</option>
                                                <option value="planned">Wstrzymana</option>
                                                <option value="inactive">Nieaktywna</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="katExpiry">
                                            <Form.Label>Data ważności</Form.Label>
                                            <Form.Control type="date" min="2025-01-01" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">Anuluj</Button>
                                    <Button variant="primary">Zapisz kategorię</Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Podsumowanie */}
                <Container className="mb-4">
                    <Row>
                        <Col md={{ span: 4, offset: 8 }}>
                            <div className="summary-box">
                                <div className="summary-text"><strong>Liczba kategorii w 2025:</strong> 24</div>
                                <div className="summary-text"><strong>Ostatnia aktualizacja:</strong> 20.01.2025</div>
                                <Button variant="outline-primary" className="submit-btn mt-2">
                                    <i className="bi bi-diagram-3 me-1" /> Pełna hierarchia
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    </Container>
);
