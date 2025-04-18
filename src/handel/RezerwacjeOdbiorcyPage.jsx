import '../App.css';

import React from 'react';
import '../App.css'; // Ensure you import your CSS file
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const RezerwacjeOdbiorcy = () => {
    return (
        <div className="background">
            <Container fluid className="lang-pl">
                <h3 className="page-title">Rezerwacje dla odbiorców</h3>

                <Tabs defaultActiveKey="aktywne" className="module-tabs">
                    <Tab eventKey="aktywne" title="Aktywne">
                        <div className="actions-bar-end">
                            <Button variant="primary">+ Nowa rezerwacja</Button>
                        </div>

                        <Table striped hover responsive className="data-table mt-3">
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
                                    <td>REZ/2023/07/002</td>
                                    <td>Klient ABC Sp. z o.o.</td>
                                    <td>2023-07-02</td>
                                    <td>2023-07-15</td>
                                    <td>5</td>
                                    <td>
                                        <span className="badge badge-danger">Oczekuje</span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                                        <Button variant="outline-success" size="sm">Realizuj</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="historyczne" title="Historyczne">
                        <Table striped hover responsive className="data-table mt-3">
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
                                    <td>
                                        <span className="badge badge-danger">Zakończona</span>
                                    </td>
                                    <td>
                                        <Button variant="outline-primary" size="sm">Drukuj</Button>{' '}
                                        {/*<Button variant="outline-success" size="sm">Realizuj</Button>*/}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        {/* Analogiczna struktura dla historycznych rezerwacji */}
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
};
