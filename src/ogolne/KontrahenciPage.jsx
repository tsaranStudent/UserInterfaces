import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

export const Kontrahenci = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                {/* Sekcja nagłówkowa */}
                <div className="form-section">
                    <h3 className="page-title mt-3">Zarządzanie kontrahentami</h3>
                    <p className="text-muted">Aktualne dane kontrahentów na rok 2025</p>
                </div>

                {/* System zakładek - główny podział funkcjonalności */}
                <Tabs defaultActiveKey="all" id="contractor-tabs" className="mb-3">
                    {/* Zakładka 1: Lista wszystkich kontrahentów */}
                    <Tab eventKey="all" title="Wszyscy kontrahenci">
                        <div className="mt-3">
                            {/* Pasek akcji z przyciskami i wyszukiwarką */}
                            <div className="actions-bar form-section mb-4">
                                <div className="actions-bar-start">
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-building-add me-1"></i> Dodaj nowego
                                    </Button>
                                    <Button variant="outline-primary">
                                        <i className="bi bi-funnel me-1"></i> Zaawansowane filtry
                                    </Button>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control
                                            placeholder="Wyszukaj kontrahenta..."
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            {/* Główna tabela z listą kontrahentów */}
                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nazwa</th>
                                        <th>NIP</th>
                                        <th>Grupa</th>
                                        <th>Wartość transakcji 2025</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Przykładowy wiersz kontrahenta */}
                                    <tr>
                                        <td>K-2025-001</td>
                                        <td>TechSolutions Sp. z o.o.</td>
                                        <td>1234567890</td>
                                        <td>Dostawcy</td>
                                        <td>245 000 zł</td>
                                        <td><Badge bg="success">Aktywny</Badge></td>
                                        <td className="text-nowrap">
                                            {/* Przyciski akcji dla wiersza */}
                                            <Button variant="outline-primary" size="sm" className="me-1">
                                                <i className="bi bi-eye"></i>
                                            </Button>
                                            <Button variant="outline-secondary" size="sm" className="me-1">
                                                <i className="bi bi-pencil"></i>
                                            </Button>
                                            <Button variant="outline-danger" size="sm">
                                                <i className="bi bi-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>

                    {/* Zakładka 2: Grupy kontrahentów */}
                    <Tab eventKey="groups" title="Grupy kontrahentów">
                        <div className="mt-3">
                            <div className="form-section">
                                <h5>Zarządzanie grupami kontrahentów</h5>
                                <div className="d-flex justify-content-between mb-3">
                                    <Button variant="primary" size="sm">
                                        <i className="bi bi-plus-circle me-1"></i> Nowa grupa
                                    </Button>
                                    <span className="text-muted">Zaktualizowano: 15.01.2025</span>
                                </div>
                                <Table bordered className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Nazwa grupy</th>
                                            <th>Liczba kontrahentów</th>
                                            <th>Data utworzenia</th>
                                            <th>Akcje</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dostawcy</td>
                                            <td>24</td>
                                            <td>10.01.2025</td>
                                            <td>
                                                <Button variant="outline-primary" size="sm">Edytuj</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Tab>
                </Tabs>

                {/* Rozwijany formularz szybkiego dodawania */}
                <Accordion className="mt-3">
                    <Accordion.Item eventKey="0" className="border-top-0">
                        <Accordion.Header className="bg-light">Szybkie dodawanie kontrahenta</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">NIP*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Grupa</Form.Label>
                                            <Form.Select>
                                                <option>Wybierz grupę...</option>
                                                <option>Dostawcy</option>
                                                <option>Klienci</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="d-flex justify-content-end">
                                    <Button variant="success" className="me-2">
                                        <i className="bi bi-save me-1"></i> Zapisz i dodaj kolejnego
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-check-circle me-1"></i> Zapisz
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Karty statystyk - dane dla 2025 roku */}
                <Row className="mt-4">
                    <Col md={4}>
                        <div className="form-section text-center">
                            <h5>Nowi kontrahenci 2025</h5>
                            <h3 className="text-primary">18</h3>
                            <p className="text-muted mb-0">+5% r/r</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-section text-center">
                            <h5>Aktywni kontrahenci</h5>
                            <h3 className="text-success">243</h3>
                            <p className="text-muted mb-0">92% wszystkich</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-section text-center">
                            <h5>Wartość transakcji 2025</h5>
                            <h3 className="text-info">2.4M zł</h3>
                            <p className="text-muted mb-0">Średnio 10k zł/mc</p>
                        </div>
                    </Col>
                </Row>               
            </Container>
        </div>
    );
};