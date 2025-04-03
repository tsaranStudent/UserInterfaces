import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Towary = () => {
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
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Cegly</option>
                                            <option value="2">Cement</option>
                                            <option value="3">Pustaki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWIU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cegla B1</td>
                        <td>Cegla</td>
                        <td>123</td>
                        <td>2 zl</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cegla B2</td>
                        <td>Cegla</td>
                        <td>124</td>
                        <td>3 zl</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pustak B1</td>
                        <td>Pustak</td>
                        <td>125</td>
                        <td>12 zl</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Pustak B2</td>
                        <td>Pustak</td>
                        <td>126</td>
                        <td>14 zl</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Cement B1</td>
                        <td>Cement</td>
                        <td>127</td>
                        <td>100 zl</td>
                    </tr>
                    
                </tbody>
            </Table>
        </Container>
    )
}