import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Faktury = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtr">
                <Accordion.Item eventKey="filtr">
                    <Accordion.Header>Filtruj faktury sprzedażowe</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Numer faktury</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź numer" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Kontrahent</Form.Label>
                                        <Form.Control type="text" placeholder="Nazwa kontrahenta" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label>Status płatności</Form.Label>
                                        <Form.Select>
                                            <option>Wszystkie</option>
                                            <option value="zaplacona">Zapłacona</option>
                                            <option value="niezaplacona">Niezapłacona</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h4 className="mt-4">Lista faktur sprzedażowych</h4>
            <Table striped bordered hover responsive>
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
                        <td>Zapłacona</td>
                    </tr>
                    <tr>
                        <td>FV/2024/002</td>
                        <td>2024-04-03</td>
                        <td>XYZ S.A.</td>
                        <td>8 500,00 zł</td>
                        <td>Niezapłacona</td>
                    </tr>
                    <tr>
                        <td>FV/2024/003</td>
                        <td>2024-04-05</td>
                        <td>Nowak Jan</td>
                        <td>1 200,00 zł</td>
                        <td>Zapłacona</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}