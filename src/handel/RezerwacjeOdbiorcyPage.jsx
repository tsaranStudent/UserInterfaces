import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const RezerwacjeOdbiorcy = () => {
    return (
        <Container fluid className="lang-pl background">
            <div className="form-section">
                <h3 className="page-title mt-3">Rezerwacje dla odbiorców</h3>
            </div>

            <Accordion defaultActiveKey="form" className="module-tabs">
                <Accordion.Item eventKey="form" className="accordion-item">
                    <Accordion.Header className="accordion-header">
                        Dodaj nową rezerwację
                    </Accordion.Header>
                    <Accordion.Body className="form-section">
                        <Form>
                            <Row className="mb-3">
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Odbiorca</Form.Label>
                                        <Form.Control type="text" placeholder="Wybierz odbiorcę" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Data rezerwacji</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Termin ważności</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label className="form-label">Status</Form.Label>
                                        <Form.Select>
                                            <option>Oczekuje</option>
                                            <option>W realizacji</option>
                                            <option>Potwierdzona</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="form-section actions-bar-end">
                                <Button variant="secondary">Wyczyść</Button>
                                <Button variant="primary" className="ms-2">Zapisz rezerwację</Button>
                            </div>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Akcje górne */}
            <div className="actions-bar-end mt-4 form-section">
                <Button variant="outline-primary">Lista wszystkich rezerwacji</Button>
                <Button variant="outline-success" className="ms-3">Eksportuj do CSV</Button>
            </div>

            {/* Tabela danych */}
            <Table striped bordered hover responsive className="data-table mt-3">
                <thead>
                    <tr>
                        <th>Numer rezerwacji</th>
                        <th>Odbiorca</th>
                        <th>Data rezerwacji</th>
                        <th>Termin ważności</th>
                        <th>Liczba pozycji</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>REZ/2023/07/002</td>
                        <td>Klient ABC Sp. z o.o.</td>
                        <td>2023-07-02</td>
                        <td>2023-07-15</td>
                        <td>5</td>
                        <td><Badge bg="danger" className="text-uppercase">Oczekuje</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-success" size="sm">Realizuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>REZ/2023/07/003</td>
                        <td>Klient XYZ Sp. z o.o.</td>
                        <td>2023-07-05</td>
                        <td>2023-07-20</td>
                        <td>10</td>
                        <td><Badge bg="warning" className="text-uppercase">W realizacji</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-success" size="sm">Realizuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>REZ/2023/07/004</td>
                        <td>Klient DEF</td>
                        <td>2023-07-06</td>
                        <td>2023-07-12</td>
                        <td>3</td>
                        <td><Badge bg="success" className="text-uppercase">Potwierdzona</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-success" size="sm">Realizuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};