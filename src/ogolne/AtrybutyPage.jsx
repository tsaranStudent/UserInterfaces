import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export const Atrybuty = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zarządzanie atrybutami</h3>
                    <p className="text-muted">Grupa: Ogólne</p>
                </div>

                {/* Panel wyszukiwania i filtrów */}
                <div className="form-section mb-4">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="form-label">Wyszukaj atrybut</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Wprowadź nazwę atrybutu"
                                        className="form-control"
                                    />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search"></i>
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label className="form-label">Typ atrybutu</Form.Label>
                                <Form.Select>
                                    <option value="">Wszystkie</option>
                                    <option value="text">Tekst</option>
                                    <option value="number">Liczba</option>
                                    <option value="date">Data</option>
                                    <option value="list">Lista</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label className="form-label">Status</Form.Label>
                                <Form.Select>
                                    <option value="">Wszystkie</option>
                                    <option value="active">Aktywny</option>
                                    <option value="inactive">Nieaktywny</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={2} className="d-flex align-items-end">
                            <Button variant="primary" className="w-100">Filtruj</Button>
                        </Col>
                    </Row>
                </div>

                {/* Panel akcji */}
                <div className="actions-bar form-section mb-4">
                    <div className="actions-bar-start">
                        <Button variant="success" className="me-2">
                            <i className="bi bi-plus-lg me-1"></i> Dodaj nowy
                        </Button>
                        <Button variant="outline-secondary">
                            <i className="bi bi-download me-1"></i> Eksportuj
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <Button variant="outline-danger">
                            <i className="bi bi-trash me-1"></i> Usuń zaznaczone
                        </Button>
                    </div>
                </div>

                {/* Tabela atrybutów */}
                <div className="form-section">
                    <Table bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th width="50px">
                                    <Form.Check type="checkbox" />
                                </th>
                                <th>Nazwa atrybutu</th>
                                <th>Klucz</th>
                                <th>Typ</th>
                                <th>Wymagany</th>
                                <th>Status</th>
                                <th>Opcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Form.Check type="checkbox" /></td>
                                <td>Nazwa produktu</td>
                                <td>product_name</td>
                                <td>Tekst</td>
                                <td><Badge bg="success">Tak</Badge></td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-pencil"></i>
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td><Form.Check type="checkbox" /></td>
                                <td>Kod produktu</td>
                                <td>product_code</td>
                                <td>Tekst</td>
                                <td><Badge bg="danger">Nie</Badge></td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
                                        <i className="bi bi-pencil"></i>
                                    </Button>
                                    <Button variant="outline-danger" size="sm">
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td><Form.Check type="checkbox" /></td>
                                <td>Data ważności</td>
                                <td>expiry_date</td>
                                <td>Data</td>
                                <td><Badge bg="danger">Nie</Badge></td>
                                <td><Badge bg="warning" text="dark">Wstrzymany</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm" className="me-1">
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

                {/* Formularz dodawania/edycji atrybutu */}
                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nowy atrybut</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa atrybutu*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Klucz (unikalny identyfikator)*</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="text" required />
                                                <Button variant="outline-secondary" title="Wygeneruj klucz">
                                                    <i className="bi bi-magic"></i>
                                                </Button>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Typ atrybutu*</Form.Label>
                                            <Form.Select required>
                                                <option value="">Wybierz typ...</option>
                                                <option value="text">Tekst</option>
                                                <option value="number">Liczba</option>
                                                <option value="date">Data</option>
                                                <option value="boolean">Tak/Nie</option>
                                                <option value="list">Lista wartości</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Grupa atrybutów</Form.Label>
                                            <Form.Select>
                                                <option value="general">Ogólne</option>
                                                <option value="inventory">Magazynowe</option>
                                                <option value="sales">Sprzedażowe</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Status</Form.Label>
                                            <Form.Select>
                                                <option value="active">Aktywny</option>
                                                <option value="inactive">Nieaktywny</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Check
                                            type="checkbox"
                                            label="Wymagany"
                                            id="required-check"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Widoczny w wyszukiwaniu"
                                            id="searchable-check"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Filtrowalny"
                                            id="filterable-check"
                                        />
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        Zapisz atrybut
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};