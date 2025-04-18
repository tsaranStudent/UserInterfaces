import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Importujemy Link do nawigacji

export const Faktury = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl">
                <Accordion defaultActiveKey="filtr" className="accordion">
                    <Accordion.Item eventKey="filtr" className="accordion-item">
                        <Accordion.Header className="accordion-header">
                            Filtruj faktury sprzedażowe
                        </Accordion.Header>
                        <Accordion.Body className="accordion-body form-section">
                            <Form className="form">
                                <Row className="mb-3 row">
                                    <Col md={4}>
                                        <Form.Group className="form-group">
                                            <Form.Label className="form-label">Numer faktury</Form.Label>
                                            <Form.Control type="text" placeholder="Wprowadź numer" className="form-control search-input" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="form-group">
                                            <Form.Label className="form-label">Kontrahent</Form.Label>
                                            <Form.Control type="text" placeholder="Nazwa kontrahenta" className="form-control search-input" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="form-group">
                                            <Form.Label className="form-label">Status płatności</Form.Label>
                                            <Form.Select className="form-control">
                                                <option>Wszystkie</option>
                                                <option value="zaplacona">Zapłacona</option>
                                                <option value="niezaplacona">Niezapłacona</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="outline-primary" className="mt-3">
                                    Filtruj
                                </Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* Przycisk dodaj nową fakturę */}
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <h4 className="page-title">Lista faktur sprzedażowych</h4>
                    <Link to="/nowaFaktura">
                        <Button variant="primary">+ Dodaj nową fakturę</Button>
                    </Link>
                </div>

                <Table striped bordered hover responsive className="table data-table mt-4">
                    <thead>
                        <tr>
                            <th>Numer</th>
                            <th>Data wystawienia</th>
                            <th>Kontrahent</th>
                            <th>Kwota brutto</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>FV/2024/001</td>
                            <td>2024-04-01</td>
                            <td>ABC Sp. z o.o.</td>
                            <td>5 000,00 zł</td>
                            <td><span className="badge badge-success">Zapłacona</span></td>
                        </tr>
                        <tr>
                            <td>FV/2024/002</td>
                            <td>2024-04-03</td>
                            <td>XYZ S.A.</td>
                            <td>8 500,00 zł</td>
                            <td><span className="badge badge-danger">Niezapłacona</span></td>
                        </tr>
                        <tr>
                            <td>FV/2024/003</td>
                            <td>2024-04-05</td>
                            <td>Nowak Jan</td>
                            <td>1 200,00 zł</td>
                            <td><span className="badge badge-success">Zapłacona</span></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
