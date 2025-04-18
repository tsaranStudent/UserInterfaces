import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom'; 

export const Paragony = () => {
    return (
        <Container fluid className="background">
            <h3 className="mb-4 page-title">Historia paragonów</h3>

            <Accordion defaultActiveKey="filters" className="mb-4 module-tabs">
                <Accordion.Item eventKey="filters">
                    <Accordion.Header className="accordion-header">Filtry wyszukiwania</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <Form>
                            <Row>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Numer paragonu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Kwota powyżej</Form.Label>
                                        <Form.Control type="number" placeholder="PLN" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" className="mt-3 actions-bar-end">Filtruj</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="page-title">Lista paragonów</h4>
                <div className="actions-bar-end">
                    <Link to="/nowyParagon">
                        <Button variant="primary">+ Dodaj nowy paragon</Button>
                    </Link>
                </div>
            </div>

            <Table striped hover responsive className="data-table mt-4">
                <thead>
                    <tr>
                        <th>Numer paragonu</th>
                        <th>Data</th>
                        <th>Sprzedawca</th>
                        <th>Kwota brutto</th>
                        <th>Status fiskalny</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PAR/2023/07/001</td>
                        <td>2023-07-15 10:23</td>
                        <td>Kasa 1 - Anna Nowak</td>
                        <td>189.99 zł</td>
                        <td><Badge bg="success" className="badge badge-success">Zaksięgowany</Badge></td>
                        <td className="actions-bar">
                            <Button variant="outline-primary" size="sm" className="me-2">Podgląd</Button>
                            <Button variant="outline-secondary" size="sm">Drukuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            {/* Sekcja podsumowania */}
            <div className="summary-row">
                <div className="summary-box">
                    <div className="summary-text">
                        <h5>Podsumowanie transakcji</h5>
                        <p>Łączna liczba paragonów: 1</p>
                        <p>Całkowita kwota: 189.99 zł</p>
                    </div>
                    <Button variant="success" className="submit-btn">Zatwierdź</Button>
                </div>
            </div>
        </Container>
    );
};
