import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const FakturyProforma = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="kryteria">
                <Accordion.Item eventKey="kryteria">
                    <Accordion.Header>Wyszukiwanie faktur proforma</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Odbiorca</Form.Label>
                                        <Form.Control type="text" placeholder="Nazwa odbiorcy" />
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
                            </Row>
                            <Button variant="success">Generuj dokument</Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h4 className="mt-4">Lista faktur proforma</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nr proformy</th>
                        <th>Odbiorca</th>
                        <th>Data</th>
                        <th>Kwota</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PF/2024/01</td>
                        <td>TechWorld</td>
                        <td>2024-04-01</td>
                        <td>3 500,00 zł</td>
                        <td>Wysłana</td>
                    </tr>
                    <tr>
                        <td>PF/2024/02</td>
                        <td>StudioDesign</td>
                        <td>2024-04-04</td>
                        <td>7 200,00 zł</td>
                        <td>Oczekuje</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}