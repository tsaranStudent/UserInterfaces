import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Paragony = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Historia paragonów</h3>

            <Accordion defaultActiveKey="filters" className="mb-4">
                <Accordion.Item eventKey="filters">
                    <Accordion.Header>Filtry wyszukiwania</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Numer paragonu</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Data od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Data do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Kwota powyżej</Form.Label>
                                        <Form.Control type="number" placeholder="PLN" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" className="mt-3">Filtruj</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped hover responsive>
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
                        <td><Badge bg="success">Zaksięgowany</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Podgląd</Button>{' '}
                            <Button variant="outline-secondary" size="sm">Drukuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}