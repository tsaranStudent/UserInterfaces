import '../App.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const RodzajeUrzadzenServis = () => {
    return (
        <div className="background">
            
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Katalog urządzeń servisowych</h3>
                </div>
            </Container>
            <Container fluid className="lang-pl">

                {/* Formularz wyszukiwania urządzeń */}
                <Form className="form">
                    <div className="form-section">
                        <Row className="mb-3">
                            <Col md={8}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Wyszukaj urządzenie</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Wprowadź nazwę urządzenia lub ID"
                                            className="search-input"
                                        />
                                        <Button variant="outline-primary">Szukaj</Button>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="d-flex align-items-center justify-content-end">
                                <Button variant="primary">+ Dodaj nowy typ urządzenia</Button>
                            </Col>
                        </Row>
                    </div>
                </Form>

                {/* Tabela urządzeń */}
                <h5 className="mt-4 mb-3">Lista dostępnych typów urządzeń</h5>
                <div className="form-section">
                    <Table bordered responsive className="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Typ urządzenia</th>
                                <th>Średni czas naprawy</th>
                                <th>Liczba zgłoszeń</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Laptop</td>
                                <td>3 dni</td>
                                <td>24</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Edytuj</Button>
                                    <Button variant="outline-danger" size="sm" className="ms-2">Usuń</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Smartphone</td>
                                <td>2 dni</td>
                                <td>42</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Edytuj</Button>
                                    <Button variant="outline-danger" size="sm" className="ms-2">Usuń</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                {/* Formularz do dodania nowego urządzenia */}
                <h5 className="mt-4 mb-3">Dodaj nowy typ urządzenia</h5>
                <div className="form-section">
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Nazwa urządzenia</Form.Label>
                                    <Form.Control type="text" placeholder="np. Drukarka laserowa" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Średni czas naprawy</Form.Label>
                                    <Form.Control type="number" placeholder="np. 3 dni" />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="form-group">
                                    <Form.Label className="form-label">Liczba zgłoszeń</Form.Label>
                                    <Form.Control type="number" placeholder="np. 0" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="actions-bar-end">
                            <Button variant="success" size="lg">Zapisz typ urządzenia</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
};
