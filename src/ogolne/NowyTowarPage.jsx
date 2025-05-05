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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const NowyTowar = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Nowy towar</h3>
                    <p className="text-muted">Dodaj nowy produkt do systemu (2025)</p>
                </div>

                <Tabs defaultActiveKey="basic" className="mb-3">
                    <Tab eventKey="basic" title="Podstawowe">
                        <Form className="form-section mt-3">
                            <Row className="mb-3">
                                <Col md={8}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Nazwa produktu*</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Kod produktu*</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>PRD-2025-</InputGroup.Text>
                                            <Form.Control type="text" required />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Kategoria*</Form.Label>
                                        <Form.Select required>
                                            <option>Wybierz kategorię...</option>
                                            <option>Elektronika</option>
                                            <option>Artykuły biurowe</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Jednostka miary*</Form.Label>
                                        <Form.Select defaultValue="szt">
                                            <option value="szt">Sztuki</option>
                                            <option value="kg">Kilogramy</option>
                                            <option value="m">Metry</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Stan początkowy</Form.Label>
                                        <Form.Control type="number" defaultValue="0" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Dane dodatkowe</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="form-label">Opis produktu</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Form>
                    </Tab>

                    <Tab eventKey="price" title="Cennik">
                        <div className="form-section mt-3">
                            <h5>Ceny w 2025 roku</h5>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Cena zakupu netto</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="number" step="0.01" />
                                            <InputGroup.Text>zł</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Cena sprzedaży netto*</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="number" step="0.01" required />
                                            <InputGroup.Text>zł</InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="form-label">VAT*</Form.Label>
                                        <Form.Select defaultValue="23">
                                            <option value="23">23%</option>
                                            <option value="8">8%</option>
                                            <option value="5">5%</option>
                                            <option value="0">0%</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                </Tabs>

                <div className="actions-bar-end form-section">
                    <Link to="/towary">
                        <Button variant="outline-secondary" className="me-2">
                            Anuluj
                        </Button>
                    </Link>
                    <Button variant="success">Zapisz towar</Button>
                </div>

                <div className="summary-box mt-4">
                    <div className="summary-text">
                        <strong>Nowe produkty w 2025:</strong> 48
                    </div>
                    <div className="summary-text">
                        <strong>Ostatnio dodany:</strong> PRD-2025-0047 (15.01.2025)
                    </div>
                </div>
            </Container>
        </div>
    );
};