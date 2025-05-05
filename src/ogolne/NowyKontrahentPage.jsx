import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

export const NowyKontrahent = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                {/* Nagłówek strony */}
                <div className="form-section">
                    <h3 className="page-title mt-3">Nowy kontrahent</h3>
                    <p className="text-muted">Dodaj nowego kontrahenta do systemu (2025)</p>
                </div>

                {/* Formularz główny */}
                <Form className="form-section">
                    {/* Sekcja podstawowych danych */}
                    <h5 className="mb-3">Dane podstawowe</h5>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="form-label">Nazwa*</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="form-label">NIP*</Form.Label>
                                <Form.Control type="text" pattern="[0-9]{10}" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Sekcja rozszerzona w Accordion */}
                    <Accordion className="mb-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Dane dodatkowe</Accordion.Header>
                            <Accordion.Body>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">REGON</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">KRS</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data rejestracji</Form.Label>
                                            <Form.Control type="date" max="2025-12-31" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/* Sekcja adresowa */}
                    <h5 className="mb-3">Adres</h5>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="form-label">Ulica*</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label className="form-label">Nr domu*</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label className="form-label">Nr lokalu</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label className="form-label">Kod pocztowy*</Form.Label>
                                <Form.Control type="text" pattern="[0-9]{2}-[0-9]{3}" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="form-label">Miejscowość*</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="form-label">Kraj*</Form.Label>
                                <Form.Select defaultValue="PL">
                                    <option value="PL">Polska</option>
                                    <option value="DE">Niemcy</option>
                                    <option value="CZ">Czechy</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Sekcja kontaktowa */}
                    <h5 className="mb-3">Dane kontaktowe</h5>
                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="form-label">Email*</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="form-label">Telefon*</Form.Label>
                                <Form.Control type="tel" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="form-label">Strona WWW</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>https://</InputGroup.Text>
                                    <Form.Control type="text" />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Przyciski akcji */}
                    <div className="actions-bar-end mt-4">
                        <Link to="/kontrahenci">
                            <Button variant="outline-secondary" className="me-2">
                                Anuluj
                            </Button>
                        </Link>
                        <Button variant="success" type="submit">
                            Zapisz kontrahenta
                        </Button>
                    </div>
                </Form>

                {/* Podsumowanie */}
                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Nowi kontrahenci w 2025:</strong> 24
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnio dodany:</strong> 15.01.2025
                    </div>
                </div>
            </Container>
        </div>
    );
};