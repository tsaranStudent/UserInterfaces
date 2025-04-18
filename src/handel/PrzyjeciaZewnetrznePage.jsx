import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const PrzyjeciaZewnetrzne = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">
                Przyjęcia zewnętrzne
            </h3>

            <div className="d-flex justify-content-between mb-4">
                <Button variant="primary">
                    + Nowe przyjęcie
                </Button>
                <Form.Control
                    type="text"
                    placeholder="Wyszukaj po numerze dokumentu..."
                    style={{ width: '300px' }}
                />
            </div>

            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Numer dokumentu</th>
                        <th>Data przyjęcia</th>
                        <th>Dostawca</th>
                        <th>Numer faktury</th>
                        <th>Liczba pozycji</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PRZYJ/2023/07/001</td>
                        <td>2023-07-10</td>
                        <td>Dostawca Sp. z o.o.</td>
                        <td>FV/123/2023</td>
                        <td>12</td>
                        <td>
                            <span className="badge bg-warning text-dark">W trakcie</span>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-success" size="sm">Zatwierdź</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
