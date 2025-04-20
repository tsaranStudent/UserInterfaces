import '../App.css';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export const Zasoby = () => {
    return (
        <Container fluid className="lang-pl background">

            <Container fluid className="lang-pl mt-3 mb-3">
                <div className="form-section">
                    <h3 className="page-title mt-3">Zasoby Magazynowe</h3>
                </div>
            </Container>            

            <div className="actions-bar">
                <div className="actions-bar-start">
                    <Form className="d-flex search-input">
                        <Form.Control
                            type="search"
                            placeholder="Wyszukaj po nr zasobu"
                            className="me-2"
                        />
                        <Button variant="outline-primary" type="submit">
                            Szukaj
                        </Button>
                    </Form>
                </div>

                <div className="actions-bar-end">
                    <Button variant="primary">+ dodaj zasób</Button>
                </div>
            </div>

            <Table striped bordered hover responsive className="data-table">
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
                        <td><span className="badge badge-success">Dostępny</span></td>
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
                        <td><span className="badge badge-success">Dostępny</span></td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};
