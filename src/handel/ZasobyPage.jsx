import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Zasoby = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Zasoby magazynowe (stan, lokalizacja)</h3>

            <div className="d-flex justify-content-between mb-4">
                <Button variant="primary">+ Dodaj zasób</Button>
                <Form.Control
                    type="text"
                    placeholder="Wyszukaj zasób..."
                    style={{ width: '300px' }}
                />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID zasobu</th>
                        <th>Nazwa</th>
                        <th>Typ</th>
                        <th>Ilość</th>
                        <th>Jednostka</th>
                        <th>Dostępność</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ZAS/001</td>
                        <td>Wiertarka udarowa Bosch</td>
                        <td>Narzędzia</td>
                        <td>5</td>
                        <td>szt.</td>
                        <td>Dostępny</td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>ZAS/002</td>
                        <td>Zestaw kluczy nasadowych</td>
                        <td>Narzędzia</td>
                        <td>10</td>
                        <td>komplet</td>
                        <td>Dostępny</td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};