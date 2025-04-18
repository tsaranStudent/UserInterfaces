import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ZleceniaUDostawcy = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Dostawca</Form.Label>
                                        <Form.Control type="text" placeholder="Nazwa dostawcy" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data zlecenia od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data zlecenia do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="oczekuje">Oczekuje</option>
                                            <option value="zrealizowane">Zrealizowane</option>
                                            <option value="anulowane">Anulowane</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary">Zastosuj filtry</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h4 className="mt-4">Zlecenia u dostawcy</h4>
            <Table striped bordered hover responsive>
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
                        <td>Oczekuje</td>
                        <td>Brak</td>
                    </tr>
                    <tr>
                        <td>ZLD-2024-002</td>
                        <td>Dostawca XYZ</td>
                        <td>2024-03-12</td>
                        <td>Zrealizowane</td>
                        <td>Dostarczono na czas</td>
                    </tr>
                    <tr>
                        <td>ZLD-2024-003</td>
                        <td>Global Supply</td>
                        <td>2024-04-02</td>
                        <td>Anulowane</td>
                        <td>Problemy z dostępnością</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}