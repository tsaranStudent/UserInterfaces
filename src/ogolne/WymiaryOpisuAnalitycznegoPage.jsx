import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';

export const WymiaryOpisuAnalitycznego = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Wymiary opisu analitycznego</h3>
                    <p className="text-muted">Zarządzanie wymiarami analitycznymi w systemie ERP (2025)</p>
                </div>

                <Tabs defaultActiveKey="lista" className="mb-3">
                    <Tab eventKey="lista" title="Lista wymiarów">
                        <div className="form-section mt-3">
                            <div className="actions-bar mb-3">
                                <div className="actions-bar-start">
                                    <Button variant="success">
                                        <i className="bi bi-plus-circle me-1"></i> Dodaj wymiar
                                    </Button>
                                </div>
                                <div className="actions-bar-end">
                                    <InputGroup className="search-input">
                                        <Form.Control placeholder="Szukaj wymiarów..." />
                                        <Button variant="outline-secondary">
                                            <i className="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </div>
                            </div>

                            <Table striped bordered hover responsive className="data-table">
                                <thead>
                                    <tr>
                                        <th>Kod</th>
                                        <th>Nazwa</th>
                                        <th>Opis</th>
                                        <th>Status</th>
                                        <th>Data utworzenia</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>W01</td>
                                        <td>Region</td>
                                        <td>Podział geograficzny</td>
                                        <td><Badge bg="success">Aktywny</Badge></td>
                                        <td>15.01.2025</td>
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
                                        <td>W02</td>
                                        <td>Kanał sprzedaży</td>
                                        <td>Sposób dystrybucji</td>
                                        <td><Badge bg="success">Aktywny</Badge></td>
                                        <td>20.02.2025</td>
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
                    </Tab>

                    <Tab eventKey="raporty" title="Raporty">
                        <div className="form-section mt-3">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Statystyki użycia wymiarów</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col md={6}>
                                                <div className="summary-text">
                                                    <strong>Liczba aktywnych wymiarów:</strong> 2
                                                </div>
                                                <div className="summary-text">
                                                    <strong>Najczęściej używany wymiar:</strong> Region (W01)
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="summary-text">
                                                    <strong>Ostatnio dodany wymiar:</strong> 20.02.2025
                                                </div>
                                                <div className="summary-text">
                                                    <strong>Wymiary nieaktywne:</strong> 0
                                                </div>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Tab>
                </Tabs>

                <Modal show={false} onHide={() => { }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nowy wymiar analityczny</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Kod wymiaru*</Form.Label>
                                        <Form.Control type="text" required maxLength="10" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Nazwa wymiaru*</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label className="form-label">Opis wymiaru</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    label="Wymiar aktywny"
                                    defaultChecked
                                />
                            </Form.Group>

                            <div className="actions-bar-end">
                                <Button variant="outline-secondary" className="me-2">
                                    Anuluj
                                </Button>
                                <Button variant="primary">
                                    Zapisz wymiar
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};