import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export const InneHandel = () => {
    return (
        <Container fluid>
            <Tabs defaultActiveKey="cenniki" className="mb-3">
                <Tab eventKey="cenniki" title="Cenniki">
                    <Accordion defaultActiveKey="filtry">
                        <Accordion.Item eventKey="filtry">
                            <Accordion.Header>Filtry cenników</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Nazwa cennika</Form.Label>
                                                <Form.Control type="text" placeholder="Wprowadź nazwę" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Ważny od</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Nazwa cennika</th>
                                <th>Data obowiązywania</th>
                                <th>Liczba pozycji</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cennik podstawowy 2023</td>
                                <td>01.01.2023 - 31.12.2023</td>
                                <td>245</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                                    <Button variant="outline-success" size="sm">Eksportuj</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="rabaty" title="Rabaty">
                    {/* Analogiczna struktura dla rabatów */}
                </Tab>
            </Tabs>
        </Container>
    )
}