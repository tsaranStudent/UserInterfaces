import '../App.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const UrzadzniaServis = () => {
    return (
        <Container fluid className="background">
            <h3 className="page-title">Lista urządzeń przyjętych do serwisu</h3>

            {/* Pasek akcji z wyszukiwarką i przyciskiem */}
            <div className="actions-bar">
                <div className="actions-bar-start">
                    <Form className="d-flex search-input">
                        <Form.Control
                            type="search"
                            placeholder="Wyszukaj po numerze zgłoszenia..."
                            className="me-2"
                        />
                        <Button variant="outline-primary" type="submit">
                            Szukaj
                        </Button>
                    </Form>
                </div>

                <div className="actions-bar-end">
                    <Button variant="primary">+ Nowe zgłoszenie</Button>
                </div>
            </div>

            {/* Tabela urządzeń */}
            <Table bordered hover responsive className="data-table">
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
                        <td><span className="badge badge-w-realizacji">W diagnozie</span></td>
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
                        <td><span className="badge badge-success">W naprawie</span></td>
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