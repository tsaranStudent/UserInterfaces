import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

export const NowyParagon = () => {
    return (
        <Container fluid>
            {/*<Alert variant="info" className="mb-4">*/}
            {/*    <strong>Tryb online:</strong> Paragon zostanie natychmiast wysłany do systemu MF.*/}
            {/*</Alert>*/}

            <Form>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Sprzedawca</Form.Label>
                            <Form.Select>
                                <option>Kasa 1 - Anna Nowak</option>
                                <option>Kasa 2 - Jan Kowalski</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Klient</Form.Label>
                            <InputGroup>
                                <Form.Control placeholder="Nazwa klienta (opcjonalnie)" />
                                <Button variant="outline-secondary">Wyszukaj</Button>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>

                <h5 className="mt-4">Lista produktów</h5>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Kod</th>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                            <th>Cena brutto</th>
                            <th>Wartość</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Control type="text" placeholder="Skanuj kod" />
                            </td>
                            <td>Produkt testowy</td>
                            <td>
                                <Form.Control type="number" defaultValue="1" min="1" />
                            </td>
                            <td>25.99 zł</td>
                            <td>25.99 zł</td>
                            <td>
                                <Button variant="danger" size="sm">X</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div className="bg-light p-3 rounded mt-3">
                    <Row>
                        <Col md={6}>
                            <Button variant="outline-primary" className="me-2">Dodaj produkt</Button>
                            <Button variant="outline-secondary">Rabat</Button>
                        </Col>
                        <Col md={6} className="text-end">
                            <h5>Suma: <strong>25.99 zł</strong></h5>
                            <Button variant="success" size="lg">Wystaw paragon</Button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    )
}