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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

export const Cennik = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zarządzanie cennikiem 2025</h3>
                    <p className="text-muted">Definiuj i zarządzaj cennikami dla produktów i usług na rok 2025</p>
                </div>

                {/* Zakładki */}
                <div className="form-section mb-4">
                    <Tabs defaultActiveKey="products" id="price-tabs" className="mb-3">
                        <Tab eventKey="products" title="Cennik produktów">
                            <div className="mt-3">
                                {/* Panel akcji dla produktów */}
                                <div className="actions-bar form-section mb-4">
                                    <div className="actions-bar-start">
                                        <Button variant="success" className="me-2">
                                            <i className="bi bi-plus-lg me-1"></i> Nowy cennik
                                        </Button>
                                        <Button variant="outline-primary">
                                            <i className="bi bi-arrow-repeat me-1"></i> Aktualizuj ceny
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

                                {/* Tabela cennika produktów */}
                                <Table bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Nazwa cennika</th>
                                            <th>Obowiązuje od</th>
                                            <th>Obowiązuje do</th>
                                            <th>Waluta</th>
                                            <th>Liczba pozycji</th>
                                            <th>Status</th>
                                            <th>Akcje</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cennik podstawowy 2025</td>
                                            <td>01.01.2025</td>
                                            <td>31.12.2025</td>
                                            <td>PLN</td>
                                            <td>312</td>
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
                                            <td>Cennik promocyjny Q1 2025</td>
                                            <td>01.01.2025</td>
                                            <td>31.03.2025</td>
                                            <td>PLN</td>
                                            <td>128</td>
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
                                            <td>Cennik specjalny VIP 2025</td>
                                            <td>15.01.2025</td>
                                            <td>14.01.2026</td>
                                            <td>EUR</td>
                                            <td>89</td>
                                            <td><Badge bg="warning" text="dark">Wstrzymany</Badge></td>
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
                        </Tab>
                        <Tab eventKey="services" title="Cennik usług">
                            <div className="mt-3">
                                {/* Panel akcji dla usług */}
                                <div className="actions-bar form-section mb-4">
                                    <div className="actions-bar-start">
                                        <Button variant="success" className="me-2">
                                            <i className="bi bi-plus-lg me-1"></i> Nowy cennik
                                        </Button>
                                        <Button variant="outline-primary">
                                            <i className="bi bi-people me-1"></i> Cenniki grupowe
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

                                {/* Tabela cennika usług */}
                                <Table bordered hover responsive className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Nazwa cennika</th>
                                            <th>Obowiązuje od</th>
                                            <th>Obowiązuje do</th>
                                            <th>Waluta</th>
                                            <th>Liczba pozycji</th>
                                            <th>Status</th>
                                            <th>Akcje</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Usługi podstawowe 2025</td>
                                            <td>01.01.2025</td>
                                            <td>31.12.2025</td>
                                            <td>PLN</td>
                                            <td>45</td>
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
                                            <td>Usługi premium 2025</td>
                                            <td>01.03.2025</td>
                                            <td>28.02.2026</td>
                                            <td>EUR</td>
                                            <td>22</td>
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
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

                {/* Formularz dodawania/edycji cennika */}
                <Accordion className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Dodaj nowy cennik 2025</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Nazwa cennika*</Form.Label>
                                            <Form.Control type="text" placeholder="np. Cennik podstawowy 2025" required />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Typ cennika*</Form.Label>
                                            <Form.Select required>
                                                <option value="">Wybierz typ...</option>
                                                <option value="basic">Podstawowy</option>
                                                <option value="promo">Promocyjny</option>
                                                <option value="special">Specjalny</option>
                                                <option value="group">Grupowy</option>
                                                <option value="seasonal">Sezonowy</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Waluta*</Form.Label>
                                            <Form.Select required>
                                                <option value="PLN">PLN</option>
                                                <option value="EUR">EUR</option>
                                                <option value="USD">USD</option>
                                                <option value="GBP">GBP</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Obowiązuje od*</Form.Label>
                                            <Form.Control
                                                type="date"
                                                min="2025-01-01"
                                                max="2025-12-31"
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Obowiązuje do</Form.Label>
                                            <Form.Control
                                                type="date"
                                                min="2025-01-02"
                                                max="2026-12-31"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="form-label">Grupa klientów</Form.Label>
                                            <Form.Select>
                                                <option value="">Wszyscy klienci</option>
                                                <option value="vip">VIP</option>
                                                <option value="regular">Stali klienci</option>
                                                <option value="new">Nowi klienci</option>
                                                <option value="business">Biznesowi</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Check
                                            type="checkbox"
                                            label="Cennik aktywny"
                                            id="active-check"
                                            defaultChecked
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Automatyczna aktualizacja cen"
                                            id="auto-update-check"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            label="Dotyczy nowych produktów"
                                            id="new-products-check"
                                        />
                                    </Col>
                                </Row>

                                <div className="actions-bar-end">
                                    <Button variant="outline-secondary" className="me-2">
                                        Anuluj
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-save me-1"></i> Zapisz cennik 2025
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
                                    <strong>Łączna liczba cenników 2025:</strong> 5
                                </div>
                                <div className="summary-text">
                                    <strong>Aktywne cenniki:</strong> 3
                                </div>
                                <div className="summary-text">
                                    <strong>Ostatnia aktualizacja:</strong> 05.01.2025
                                </div>
                                <Button variant="outline-primary" className="submit-btn mt-3">
                                    <i className="bi bi-clock-history me-1"></i> Historia zmian
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};