import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ZleceniaCykliczne = () => {
    return (
        <Container fluid className="background">
            <h3 className="page-title">Zlecenia cykliczne (np. okresowy serwis)</h3>

            {/* Pasek akcji z filtrowaniem i przyciskiem */}
            <div className="actions-bar">
                <div className="actions-bar-start">
                    <Form className="d-flex search-input">
                        <Form.Control
                            type="search"
                            placeholder="Szukaj zlecenia..."
                            className="me-2"
                        />
                    </Form>

                    <Form.Select aria-label="Filtruj status">
                        <option>Wszystkie statusy</option>
                        <option value="aktywny">Aktywne</option>
                        <option value="zakonczony">Zakończone</option>
                        <option value="wplanie">W planie</option>
                    </Form.Select>
                </div>

                <div className="actions-bar-end">
                    <Button variant="primary">+ Nowe zlecenie cykliczne</Button>
                </div>
            </div>

            {/* Tabela zleceń */}
            <Table bordered hover responsive className="data-table">
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
                        <td>
                            <span className="badge badge-w-realizacji">Aktywne</span>
                        </td>
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
                        <td>
                            <span className="badge badge-success">Zakończone</span>
                        </td>
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
                        <td>
                            <span className="badge badge-danger">W planie</span>
                        </td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
