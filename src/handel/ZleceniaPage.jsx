import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Zlecenia = () => {
    return (
        <Container fluid>
            <h3 className="mb-4">Zlecenia serwisowe lub produkcyjne</h3>

            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary">+ Nowe zlecenie</Button>
            </div>

            <Tabs defaultActiveKey="otwarte" className="mb-4">
                <Tab eventKey="otwarte" title="Otwarte">
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Numer zlecenia</th>
                                <th>Tytuł</th>
                                <th>Data utworzenia</th>
                                <th>Termin realizacji</th>
                                <th>Status</th>
                                <th>Priorytet</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZLC/2023/07/001</td>
                                <td>Naprawa dachu</td>
                                <td>2023-07-15</td>
                                <td>2023-07-22</td>
                                <td><Badge bg="warning">W realizacji</Badge></td>
                                <td>Wysoki</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>ZLC/2023/07/003</td>
                                <td>Montaż okien</td>
                                <td>2023-07-18</td>
                                <td>2023-07-25</td>
                                <td><Badge bg="info">Oczekuje</Badge></td>
                                <td>Średni</td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="zamkniete" title="Zamknięte">
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Numer zlecenia</th>
                                <th>Tytuł</th>
                                <th>Data utworzenia</th>
                                <th>Data zamknięcia</th>
                                <th>Status</th>
                                <th>Akcje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ZLC/2023/06/010</td>
                                <td>Malowanie biura</td>
                                <td>2023-06-01</td>
                                <td>2023-06-10</td>
                                <td><Badge bg="success">Zakończone</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>ZLC/2023/06/015</td>
                                <td>Wymiana oświetlenia</td>
                                <td>2023-06-05</td>
                                <td>2023-06-12</td>
                                <td><Badge bg="success">Zakończone</Badge></td>
                                <td>
                                    <Button variant="outline-primary" size="sm">Szczegóły</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </Container>
    );
};