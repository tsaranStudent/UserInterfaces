import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const RezerwacjeOdbiorcy = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Rezerwacje dla odbiorców</h3>

            <Tabs defaultActiveKey="aktywne" className="mb-4">
                <Tab eventKey="aktywne" title="Aktywne">
                    <div className="d-flex justify-content-end mb-3">
                        <Button variant="primary">+ Nowa rezerwacja</Button>
                    </div>

                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Numer rezerwacji</th>
                                <th>Odbiorca</th>
                                <th>Data rezerwacji</th>
                                <th>Termin ważności</th>
                                <th>Liczba pozycji</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>REZ/2023/07/001</td>
                                <td>Klient ABC Sp. z o.o.</td>
                                <td>2023-07-01</td>
                                <td>2023-07-15</td>
                                <td>5</td>
                                <td><Badge bg="warning">Oczekuje</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                                    <Button variant="outline-success" size="sm">Realizuj</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="historyczne" title="Historyczne">
                    {/* Analogiczna struktura dla historycznych rezerwacji */}
                </Tab>
            </Tabs>
        </Container>
    )
}