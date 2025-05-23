import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Tabs, Tab, Form, Row, Col, Button, InputGroup, Accordion } from 'react-bootstrap';

// Formularz dodawania nowego towaru
export const NowyTowar = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-box-seam icon-unified mb-2" />
                    <h1 className="page-title">Nowy towar</h1>
                    <p className="text-muted">Dodaj nowy produkt (2025)</p>
                </div>

                {/* Zakładki formularza */}
                <div className="form-section mb-4">
                    <Tabs defaultActiveKey="basic" id="product-tabs" className="mb-3">
                        <Tab eventKey="basic" title="Podstawowe">
                            <Form className="mt-3">
                                {/* Podstawowe dane */}
                                <Row className="g-3 mb-3">
                                    <Col md={8}>
                                        <Form.Control placeholder="Nazwa produktu*" required />
                                    </Col>
                                    <Col md={4}>
                                        <InputGroup>
                                            <InputGroup.Text>PRD-2025-</InputGroup.Text>
                                            <Form.Control placeholder="Kod*" required />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="g-3 mb-3">
                                    {/* Kategoria - min. 3 pozycje */}
                                    <Col md={4}>
                                        <Form.Select required>
                                            <option value="">Wybierz kategorię...</option>
                                            <option value="elektro">Elektronika</option>
                                            <option value="dom">Artykuły domowe</option>
                                            <option value="odziez">Odzież</option>
                                        </Form.Select>
                                    </Col>
                                    {/* Jednostka miary - min. 3 pozycje */}
                                    <Col md={4}>
                                        <Form.Select defaultValue="szt">
                                            <option value="szt">szt</option>
                                            <option value="kg">kg</option>
                                            <option value="op">op.</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control type="number" defaultValue="0" placeholder="Stan początkowy" />
                                    </Col>
                                </Row>
                                {/* Opis dodatkowy */}
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Opis produktu</Accordion.Header>
                                        <Accordion.Body>
                                            <Form.Control as="textarea" rows={3} />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Form>
                        </Tab>
                        <Tab eventKey="price" title="Cennik">
                            {/* Ceny */}
                            <div className="mt-3">
                                <Row className="g-3 mb-3">
                                    <Col md={4}>
                                        <InputGroup>
                                            <Form.Control type="number" step="0.01" placeholder="Zakup netto" />
                                            <InputGroup.Text>zł</InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    <Col md={4}>
                                        <InputGroup>
                                            <Form.Control type="number" step="0.01" placeholder="Sprzedaż netto*" required />
                                            <InputGroup.Text>zł</InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    {/* VAT - min. 3 pozycje */}
                                    <Col md={4}>
                                        <Form.Select defaultValue="23">
                                            <option value="23">23%</option>
                                            <option value="8">8%</option>
                                            <option value="0">0%</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

                {/* Pasek akcji */}
                <div className="actions-bar-end form-section d-flex justify-content-end gap-2 mb-4">
                    <Button variant="outline-secondary">Anuluj</Button>
                    <Button variant="success">Zapisz towar</Button>
                </div>

                {/* Podsumowanie */}
                <Container className="mt-4">
                    <div className="summary-box">
                        <p><strong>Nowe produkty w 2025:</strong> {/* liczba */}</p>
                        <p><strong>Ostatnio dodany:</strong> {/* kod */}</p>
                    </div>
                </Container>
            </Container>
        </div>
    </Container>
);
