import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';

export const NowaFaktura = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Nowa faktura sprzedażowa</h3>

            <Form>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Kontrahent</Form.Label>
                            <Form.Control type="text" placeholder="Wprowadź nazwę lub NIP" />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <Form.Label>Data wystawienia</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <Form.Label>Termin płatności</Form.Label>
                            <Form.Select>
                                <option>7 dni</option>
                                <option>14 dni</option>
                                <option>30 dni</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Sposób płatności</Form.Label>
                            <Form.Select>
                                <option>Przelew</option>
                                <option>Gotówka</option>
                                <option>Karta</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <h5 className="mt-4">Pozycje faktury</h5>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Nazwa towaru/usługi</th>
                            <th>Ilość</th>
                            <th>J.m.</th>
                            <th>Cena netto</th>
                            <th>VAT</th>
                            <th>Wartość netto</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Control type="text" placeholder="Wprowadź nazwę" />
                            </td>
                            <td>
                                <Form.Control type="number" defaultValue="1" />
                            </td>
                            <td>
                                <Form.Select>
                                    <option>szt.</option>
                                    <option>kg</option>
                                    <option>m</option>
                                </Form.Select>
                            </td>
                            <td>
                                <InputGroup>
                                    <Form.Control type="number" step="0.01" />
                                    <InputGroup.Text>zł</InputGroup.Text>
                                </InputGroup>
                            </td>
                            <td>
                                <Form.Select>
                                    <option>23%</option>
                                    <option>8%</option>
                                    <option>5%</option>
                                    <option>0%</option>
                                </Form.Select>
                            </td>
                            <td>0.00 zł</td>
                            <td>
                                <Button variant="danger" size="sm">Usuń</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="outline-primary" className="mt-2">Dodaj pozycję</Button>

                <div className="d-flex justify-content-end mt-4">
                    <Button variant="success" size="lg">Zapisz fakturę</Button>
                </div>
            </Form>
        </Container>
    )
}