import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const RaportBrakow = () => {
    return (
        <Container fluid>
            <Card className="mb-4 border-danger">
                <Card.Header className="bg-danger text-white">
                    Raport braków magazynowych
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Wybierz magazyn</Form.Label>
                            <Form.Select>
                                <option>Wszystkie magazyny</option>
                                <option>Magazyn główny</option>
                                <option>Magazyn zapasowy</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="outline-danger">
                            Generuj raport
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Kod produktu</th>
                        <th>Nazwa produktu</th>
                        <th>Minimalny stan</th>
                        <th>Aktualny stan</th>
                        <th>Różnica</th>
                        <th>Ostatnia dostawa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-danger">
                        <td>PROD-001</td>
                        <td>Kabel HDMI 2.0</td>
                        <td>10</td>
                        <td>2</td>
                        <td>-8</td>
                        <td>2023-06-15</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}
