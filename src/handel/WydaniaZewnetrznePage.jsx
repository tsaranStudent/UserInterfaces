import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const WydaniaZewnetrzne = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Obsługa wydań zewnętrznych z magazynu</h3>

            <div className="d-flex justify-content-between mb-4">
                <Button variant="primary">+ Nowe wydanie</Button>
                <Form.Control
                    type="text"
                    placeholder="Wyszukaj po numerze dokumentu..."
                    style={{ width: '300px' }}
                />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer dokumentu</th>
                        <th>Data wydania</th>
                        <th>Odbiorca</th>
                        <th>Powód wydania</th>
                        <th>Liczba pozycji</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WYD/2023/07/001</td>
                        <td>2023-07-18</td>
                        <td>Klient XYZ</td>
                        <td>Sprzedaż</td>
                        <td>3</td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>WYD/2023/07/002</td>
                        <td>2023-07-17</td>
                        <td>Serwis ABC</td>
                        <td>Naprawa gwarancyjna</td>
                        <td>1</td>
                        <td>
                            <Button variant="outline-primary" size="sm">Szczegóły</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};