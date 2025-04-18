import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const InneMagazyn = () => {
    return (
        <Container fluid>
            <h4>Inne działania magazynowe <Badge bg="secondary">Nowe</Badge></h4>

            <Accordion className="mb-4">
                <Accordion.Item eventKey="inwentaryzacja">
                    <Accordion.Header>Inwentaryzacja</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Data rozpoczęcia</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Magazyn</Form.Label>
                                        <Form.Select>
                                            <option>Główny</option>
                                            <option>Zapasowy</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Button variant="primary" className="mt-4">Rozpocznij inwentaryzację</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer inwentaryzacji</th>
                        <th>Data</th>
                        <th>Magazyn</th>
                        <th>Status</th>
                        <th>Różnice</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>INV/2023/05/001</td>
                        <td>15.05.2023</td>
                        <td>Główny</td>
                        <td><Badge bg="success">Zakończona</Badge></td>
                        <td>+2</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}