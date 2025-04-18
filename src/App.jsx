import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
    return (
        <Container fluid>
            <div className="mb-3"> 
                jedziemy aaaa
            </div>
            <div className="mb-3">
                z koksem
            </div>
            <hr />
            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Oglosząąąenie 1</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                test ssl
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 2</Card.Header>
                        <Card.Body >
                            <Card.Text lang="pl">
                                Lorem Ipsum ąąąąąąąąąńńńń
                                is s.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 3</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem Ipsum is simply dummym.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header>Ogloszenie 4</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Lorem Ipsum is simply dummy text osum.
                            </Card.Text>
                            <Button variant="primary">Szczegoly</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Towar 1</Card.Title>
                            <Card.Text>
                                Some quick examk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Towar 2</Card.Title>
                            <Card.Text>
                                Some quick exampup the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Towar 3</Card.Title>
                            <Card.Text>
                                Some quick examp up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Towar 4</Card.Title>
                            <Card.Text>
                                Some quick example tex
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/image/1.png" />
                        <Card.Body>
                            <Card.Title>Towar 4</Card.Title>
                            <Card.Text>
                                Some quick example up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
           
            </Row>
        </Container>
    );
}

export default App;