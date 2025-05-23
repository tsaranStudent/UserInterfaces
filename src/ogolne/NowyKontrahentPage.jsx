import React from 'react';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Form, Row, Col, Button, InputGroup, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NowyKontrahent = () => (
    <Container className="lang-pl mt-2 mb-2">
        {/* Główny kontener */}
        <div className="background mt-2 mb-2">
            <Container className="main-content lang-pl mt-2 mb-2">
                {/* Nagłówek sekcji */}
                <div className="form-section text-center mb-4">
                    {/* Tytuł i opis */}
                    <i className="bi bi-building-add icon-unified mb-2" />
                    <h1 className="page-title">Nowy kontrahent</h1>
                    <p className="text-muted">Dodaj nowego kontrahenta (2025)</p>
                </div>

                {/* Formularz główny */}
                <Form className="form-section mb-4">
                    <h5>Dane podstawowe</h5>
                    <Row className="g-3 mb-4">
                        <Col md={6}><Form.Control placeholder="Nazwa*" required /></Col>
                        <Col md={6}><Form.Control placeholder="NIP*" pattern="\d{10}" required /></Col>
                    </Row>

                    {/* Rozwijana sekcja – dane dodatkowe */}
                    <Accordion className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Dane dodatkowe</Accordion.Header>
                            <Accordion.Body>
                                <Row className="g-3 mb-4">
                                    <Col md={4}><Form.Control placeholder="REGON" /></Col>
                                    <Col md={4}><Form.Control placeholder="KRS" /></Col>
                                    <Col md={4}><Form.Control type="date" max="2025-12-31" /></Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <h5>Adres</h5>
                    <Row className="g-3 mb-4">
                        <Col md={6}><Form.Control placeholder="Ulica*" required /></Col>
                        <Col md={2}><Form.Control placeholder="Nr domu*" required /></Col>
                        <Col md={2}><Form.Control placeholder="Nr lokalu" /></Col>
                        <Col md={2}><Form.Control placeholder="Kod pocztowy*" pattern="\d{2}-\d{3}" required /></Col>
                    </Row>
                    <Row className="g-3 mb-4">
                        <Col md={6}><Form.Control placeholder="Miejscowość*" required /></Col>
                        <Col md={6}>
                            {/* Lista rozwijana krajów */}
                            <Form.Select defaultValue="PL">
                                <option value="PL">Polska</option>
                                <option value="DE">Niemcy</option>
                                <option value="CZ">Czechy</option>
                                {/* możesz dodać kolejne kraje */}
                            </Form.Select>
                        </Col>
                    </Row>

                    <h5>Dane kontaktowe</h5>
                    <Row className="g-3 mb-4">
                        <Col md={4}><Form.Control type="email" placeholder="Email*" required /></Col>
                        <Col md={4}><Form.Control type="tel" placeholder="Telefon*" required /></Col>
                        <Col md={4}>
                            <InputGroup>
                                <InputGroup.Text>https://</InputGroup.Text>
                                <Form.Control placeholder="Strona WWW" />
                            </InputGroup>
                        </Col>
                    </Row>

                    {/* Pasek akcji */}
                    <div className="actions-bar-end d-flex justify-content-end gap-2">
                        <Link to="/kontrahenci">
                            <Button variant="outline-secondary">Anuluj</Button>
                        </Link>
                        <Button variant="success" type="submit">Zapisz kontrahenta</Button>
                    </div>
                </Form>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <p><strong>Nowi kontrahenci w 2025:</strong> {/* tutaj wpisz liczbę */}</p>
                    <p><strong>Ostatnio dodany:</strong> {/* tutaj wpisz datę */}</p>
                </div>
            </Container>
        </div>
    </Container>
);
