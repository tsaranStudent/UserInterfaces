import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const ZleceniaUDostawcy = () => {
    return (
        <Container fluid className="lang-pl background">
            
            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zlecenia u dostawcy</h3>
                </div>
            </Container>
            <Accordion defaultActiveKey="filtrowanie" className="accordion">
                <Accordion.Item eventKey="filtrowanie" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Filtrowanie i sortowanie
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Dostawca</Form.Label>
                                        <Form.Control type="text" placeholder="Nazwa dostawcy" className="search-input" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data zlecenia od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data zlecenia do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="form-label">Status</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="oczekuje">Oczekuje</option>
                                            <option value="zrealizowane">Zrealizowane</option>
                                            <option value="anulowane">Anulowane</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="actions-bar-end">
                                <Button variant="primary">Zastosuj filtry</Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h4 className="mt-4 page-title">Zlecenia u dostawcy</h4>

            <Table striped bordered hover responsive className="data-table">
                <thead>
                    <tr>
                        <th>Numer zlecenia</th>
                        <th>Dostawca</th>
                        <th>Data zlecenia</th>
                        <th>Status</th>
                        <th>Uwagi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ZLD-2024-001</td>
                        <td>Firma ABC</td>
                        <td>2024-03-10</td>
                        <td><span className="badge badge-w-realizacji">Oczekuje</span></td>
                        <td>Brak</td>
                    </tr>
                    <tr>
                        <td>ZLD-2024-002</td>
                        <td>Dostawca XYZ</td>
                        <td>2024-03-12</td>
                        <td><span className="badge badge-success">Zrealizowane</span></td>
                        <td>Dostarczono na czas</td>
                    </tr>
                    <tr>
                        <td>ZLD-2024-003</td>
                        <td>Global Supply</td>
                        <td>2024-04-02</td>
                        <td><span className="badge badge-danger">Anulowane</span></td>
                        <td>Problemy z dostępnością</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
