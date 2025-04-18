import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const FakturyZakupu = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtr">
                <Accordion.Item eventKey="filtr">
                    <Accordion.Header>Filtrowanie faktur zakupu</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Dostawca</Form.Label>
                                        <Form.Control type="text" placeholder="Nazwa dostawcy" />
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
                            <Row className="mt-3">
                                <Col>
                                    <Button variant="primary">Dodaj nową fakturę</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <h4 className="mt-4">Rejestr faktur zakupu</h4>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Nr faktury</th>
                        <th>Dostawca</th>
                        <th>Data zakupu</th>
                        <th>Kwota</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>FZ/2024/15</td>
                        <td>ABC Tools</td>
                        <td>2024-03-15</td>
                        <td>4 800,00 zł</td>
                        <td>Zaksięgowana</td>
                    </tr>
                    <tr>
                        <td>FZ/2024/16</td>
                        <td>Global Parts</td>
                        <td>2024-03-18</td>
                        <td>9 200,00 zł</td>
                        <td>W toku</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}