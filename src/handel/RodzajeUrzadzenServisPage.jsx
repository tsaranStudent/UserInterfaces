import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const RodzajeUrzadzenServis = () => {
    const [showModal, setShowModal] = useState(false);
    const [deviceType, setDeviceType] = useState('');

    return (
        <Container fluid>
            <h3 className="mb-4">
                Katalog typów urządzeń
            </h3>

            <div className="d-flex justify-content-between mb-4">
                <Button variant="primary" onClick={() => setShowModal(true)}>
                    + Dodaj nowy typ
                </Button>
                <Form.Control
                    type="text"
                    placeholder="Wyszukaj typ urządzenia..."
                    style={{ width: '300px' }}
                />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Typ urządzenia</th>
                        <th>Średni czas naprawy</th>
                        <th>Liczba zgłoszeń</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laptop</td>
                        <td>3 dni</td>
                        <td>24</td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-danger" size="sm">Usuń</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Smartphone</td>
                        <td>2 dni</td>
                        <td>42</td>
                        <td>
                            <Button variant="outline-primary" size="sm">Edytuj</Button>{' '}
                            <Button variant="outline-danger" size="sm">Usuń</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj nowy typ urządzenia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwa typu urządzenia</Form.Label>
                            <Form.Control
                                type="text"
                                value={deviceType}
                                onChange={(e) => setDeviceType(e.target.value)}
                                placeholder="np. Drukarka laserowa"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Anuluj
                    </Button>
                    <Button variant="primary" onClick={() => setShowModal(false)}>
                        Zapisz
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};