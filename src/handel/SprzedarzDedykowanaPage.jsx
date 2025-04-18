import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const SprzedarzDedykowana = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Obsługa sprzedaży dedykowanej / umownej</h3>

            <Accordion defaultActiveKey="newOrder" className="mb-4">
                <Accordion.Item eventKey="newOrder">
                    <Accordion.Header>Nowa umowa sprzedaży</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Klient</Form.Label>
                                        <Form.Control type="text" placeholder="Wyszukaj klienta..." />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Data umowy</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group>
                                        <Form.Label>Wartość umowy</Form.Label>
                                        <Form.Control type="number" placeholder="PLN" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary">Dodaj produkty</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer umowy</th>
                        <th>Klient</th>
                        <th>Data zawarcia</th>
                        <th>Termin realizacji</th>
                        <th>Wartość</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>UM/2023/07/001</td>
                        <td>Firma ABC Sp. z o.o.</td>
                        <td>2023-07-01</td>
                        <td>2023-08-15</td>
                        <td>12,450.00 zł</td>
                        <td><Badge bg="info">W realizacji</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};