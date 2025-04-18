import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const RaportBrakow = () => {
    return (
        <Container fluid className="lang-pl background">
            <Card className="form-section mb-4">
                <Card.Header className="page-title">
                    <h4 className="mt-4 page-title">Raport braków magazynowych</h4>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className="form-label">Wybierz magazyn</Form.Label>
                            <Form.Select className="form-control">
                                <option>Wszystkie magazyny</option>
                                <option>Magazyn główny</option>
                                <option>Magazyn zapasowy</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="actions-bar-end">
                            <Button variant="primary">
                                Generuj raport
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <h4 className="page-title">Braki magazynowe</h4>
            <Table striped bordered hover responsive className="data-table">
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
                    <tr>
                        <td>PROD-001</td>
                        <td>Kabel HDMI 2.0</td>
                        <td>10</td>
                        <td>2</td>
                        <td><span className="badge badge-danger">-8</span></td>
                        <td>2023-06-15</td>
                    </tr>
                    <tr>
                        <td>PROD-002</td>
                        <td>Adapter USB-C</td>
                        <td>15</td>
                        <td>0</td>
                        <td><span className="badge badge-danger">-15</span></td>
                        <td>2023-05-22</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
