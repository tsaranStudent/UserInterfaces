import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export const UrzadzniaServis = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Lista urządzeń przyjętych do serwisu</h3>

            <div className="d-flex justify-content-between mb-4">
                <Button variant="primary">+ Nowe zgłoszenie</Button>
                <Form.Control
                    type="text"
                    placeholder="Wyszukaj po numerze zgłoszenia..."
                    style={{ width: '300px' }}
                />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer zgłoszenia</th>
                        <th>Data przyjęcia</th>
                        <th>Urządzenie</th>
                        <th>Klient</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SER/2023/07/001</td>
                        <td>2023-07-12</td>
                        <td>Laptop Lenovo XYZ</td>
                        <td>Jan Kowalski</td>
                        <td><Badge bg="warning">W diagnozie</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>{' '}
                            <Button variant="outline-success" size="sm">Zakończ</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>SER/2023/07/002</td>
                        <td>2023-07-15</td>
                        <td>Drukarka Epson L310</td>
                        <td>Firma ABC Sp. z o.o.</td>
                        <td><Badge bg="info">W naprawie</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>{' '}
                            <Button variant="outline-success" size="sm">Zakończ</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};