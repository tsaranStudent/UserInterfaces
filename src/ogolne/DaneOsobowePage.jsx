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

export const DaneOsobowe = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zarządzanie danymi osobowymi</h3>
                    <p className="text-muted">Aktualne dane na rok 2025</p>
                </div>

                {/* Panel wyszukiwania i filtrów */}
                <div className="form-section mb-4">
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="form-label">Wyszukaj pracownika</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Wprowadź imię, nazwisko lub ID"
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
                                <Form.Label className="form-label">Dział</Form.Label>
                                <Form.Select>
                                    <option value="">Wszystkie</option>
                                    <option value="hr">HR</option>
                                    <option value="finance">Finanse</option>
                                    <option value="it">IT</option>
                                    <option value="sales">Sprzedaż</option>
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
                                    <option value="vacation">Urlop</option>
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
                            <i className="bi bi-person-plus me-1"></i> Dodaj pracownika
                        </Button>
                        <Button variant="outline-primary">
                            <i className="bi bi-upload me-1"></i> Importuj dane
                        </Button>
                    </div>
                    <div className="actions-bar-end">
                        <Button variant="outline-secondary" className="me-2">
                            <i className="bi bi-printer me-1"></i> Drukuj
                        </Button>
                        <Button variant="outline-success">
                            <i className="bi bi-file-excel me-1"></i> Eksportuj
                        </Button>
                    </div>
                </div>

                {/* Tabela danych osobowych */}
                <div className="form-section">
                    <Table bordered hover responsive className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imię i nazwisko</th>
                                <th>Stanowisko</th>
                                <th>Dział</th>
                                <th>Data zatrudnienia</th>
                                <th>Umowa do</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EMP-2025-001</td>
                                <td>Anna Kowalska</td>
                                <td>Specjalista HR</td>
                                <td>HR</td>
                                <td>15.03.2022</td>
                                <td>31.12.2025</td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
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
                            <tr>
                                <td>EMP-2025-002</td>
                                <td>Jan Nowak</td>
                                <td>Programista</td>
                                <td>IT</td>
                                <td>01.01.2025</td>
                                <td>31.12.2026</td>
                                <td><Badge bg="success">Aktywny</Badge></td>
                                <td>
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
                            <tr>
                                <td>EMP-2025-003</td>
                                <td>Marta Wiśniewska</td>
                                <td>Księgowa</td>
                                <td>Finanse</td>
                                <td>10.05.2023</td>
                                <td>30.06.2025</td>
                                <td><Badge bg="warning" text="dark">Urlop</Badge></td>
                                <td>
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

                {/* Formularz dodawania/edycji danych */}
                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nowego pracownika</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Imię*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwisko*</Form.Label>
                                            <Form.Control type="text" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">PESEL*</Form.Label>
                                            <Form.Control type="text" pattern="[0-9]{11}" required />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Stanowisko*</Form.Label>
                                            <Form.Select required>
                                                <option value="">Wybierz stanowisko...</option>
                                                <option value="hr">Specjalista HR</option>
                                                <option value="accountant">Księgowy</option>
                                                <option value="developer">Programista</option>
                                                <option value="manager">Kierownik</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Dział*</Form.Label>
                                            <Form.Select required>
                                                <option value="">Wybierz dział...</option>
                                                <option value="hr">HR</option>
                                                <option value="finance">Finanse</option>
                                                <option value="it">IT</option>
                                                <option value="sales">Sprzedaż</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Data zatrudnienia*</Form.Label>
                                            <Form.Control
                                                type="date"
                                                max="2025-12-31"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Umowa do</Form.Label>
                                            <Form.Control
                                                type="date"
                                                min="2025-01-01"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Typ umowy*</Form.Label>
                                            <Form.Select required>
                                                <option value="">Wybierz typ...</option>
                                                <option value="permanent">Umowa o pracę</option>
                                                <option value="contract">Umowa zlecenie</option>
                                                <option value="trial">Okres próbny</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Check
                                            type="checkbox"
                                            label="Aktywny w systemie"
                                            id="active-check"
                                            defaultChecked
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Wymagana aktualizacja danych"
                                            id="update-check"
                                        />
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1"></i> Zapisz dane
                                    </Button>
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Podsumowanie */}
                <div className="summary-row">
                    <Row>
                        <Col md={{ span: 4, offset: 8 }}>
                            <div className="summary-box">
                                <div className="summary-text">
                                    <strong>Łączna liczba pracowników w 2025:</strong> 143
                                </div>
                                <div className="summary-text">
                                    <strong>Nowi pracownicy w 2025:</strong> 12
                                </div>
                                <div className="summary-text">
                                    <strong>Ostatnia aktualizacja:</strong> 10.01.2025
                                </div>
                                <Button variant="outline-primary" className="submit-btn mt-3">
                                    <i className="bi bi-graph-up me-1"></i> Statystyki
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};