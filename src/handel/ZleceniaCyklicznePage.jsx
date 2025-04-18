import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export const ZleceniaCykliczne = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Zlecenia cykliczne (np. okresowy serwis)</h3>

            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary">+ Nowe zlecenie cykliczne</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer zlecenia</th>
                        <th>Nazwa zlecenia</th>
                        <th>Data rozpoczęcia</th>
                        <th>Częstotliwość</th>
                        <th>Ostatnie wykonanie</th>
                        <th>Następne wykonanie</th>
                        <th>Status</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CYK/2023/01/001</td>
                        <td>Przegląd klimatyzacji</td>
                        <td>2023-01-15</td>
                        <td>Co 3 miesiące</td>
                        <td>2024-07-15</td>
                        <td>2024-10-15</td>
                        <td><Badge bg="info">Aktywne</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>CYK/2023/02/005</td>
                        <td>Serwis ekspresów do kawy</td>
                        <td>2023-02-01</td>
                        <td>Co 6 miesięcy</td>
                        <td>2024-08-01</td>
                        <td>2025-02-01</td>
                        <td><Badge bg="success">Zakończone</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>CYK/2023/03/012</td>
                        <td>Kontrola instalacji elektrycznej</td>
                        <td>2023-03-10</td>
                        <td>Co 12 miesięcy</td>
                        <td>2024-03-10</td>
                        <td>2025-03-10</td>
                        <td><Badge bg="warning">W planie</Badge></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};