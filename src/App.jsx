import './App.css';
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Form, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">

                {/* Sekcja powitalna bez banerów */}
                <Container className="mt-3">
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-box-seam icon-unified mb-2 display-4" />
                        <h1 className="page-title mb-2">{t('start.stronaGlowna')}</h1>
                        <p className="mb-3">
                            {t('start.informacjeOFirmie')} <span className="text-muted">{t('start.zmianaFirmy')}</span>
                        </p>
                        <Form className="mt-4 d-inline-block" style={{ minWidth: 250 }}>
                            <Form.Label className="mb-2">
                                <i className="bi bi-building me-1" />{t('start.wybierzFirme')}:
                            </Form.Label>
                            <Form.Select>
                                <option>{t('system.nazwa')}</option>
                                <option>{t('ogolne.kontrahenci')}</option>
                                <option>{t('handel.faktury')}</option>
                            </Form.Select>
                        </Form>
                    </div>
                </Container>

                {/* Karty modułów z ikonami */}
                <Container className="mt-3">
                    <div className="form-section">
                        <h2 className="page-title text-center mb-3">
                            <i className="bi bi-grid-1x2 me-2" />{t('start.stronaGlowna')}
                        </h2>
                        <Row className="mb-3">
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-people display-5 text-primary mb-2" />
                                        <Card.Title>{t('ogolne.kontrahenci')}</Card.Title>
                                        <Card.Text>{t('ogolne.listaKontrahentow')}</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />{t('ui.przejdz')}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-receipt display-5 text-success mb-2" />
                                        <Card.Title>{t('handel.faktury')}</Card.Title>
                                        <Card.Text>{t('handel.nowaFaktura')}</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />{t('ui.przejdz')}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-boxes display-5 text-warning mb-2" />
                                        <Card.Title>{t('ogolne.towary')}</Card.Title>
                                        <Card.Text>{t('handel.operacjeMagazynowe')}</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />{t('ui.przejdz')}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} xs={12} className="mb-3">
                                <Card className="text-center h-100 shadow-sm">
                                    <Card.Body>
                                        <i className="bi bi-graph-up-arrow display-5 text-danger mb-2" />
                                        <Card.Title>{t('ogolne.raporty')}</Card.Title>
                                        <Card.Text>{t('ogolne.wymiary')}</Card.Text>
                                        <Button variant="primary" className="w-100">
                                            <i className="bi bi-box-arrow-in-right me-1" />{t('ui.przejdz')}
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        {/* Szybki dostęp do innych sekcji */}
                        <div className="mt-3 mb-3 text-center">
                            <Form.Select className="w-auto d-inline-block" style={{ minWidth: 220 }}>
                                <option value="">{t('ui.szybkiDostep')}</option>
                                <option value="settings">{t('konfiguracja.konfiguracjaSystemu')}</option>
                                <option value="help">{t('pomoc.pomocFaq')}</option>
                                <option value="logout">{t('uzytkownik.koniecPracy')}</option>
                            </Form.Select>
                        </div>
                    </div>
                </Container>

                {/* Sekcja aktualności + statystyki */}
                <Container className="mt-3">
                    <Row className="summary-row">
                        <Col md={8}>
                            <h2 className="page-title mb-2">
                                <i className="bi bi-megaphone me-2" />{t('aktualnosci.nazwa')}
                            </h2>
                            <Card className="mb-3 shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        <i className="bi bi-stars me-1" />{t('aktualnosci.nowosci')}
                                    </Card.Title>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <i className="bi bi-robot me-1" />{t('crm.hrmTs')}
                                                <Badge bg="success" pill className="ms-2">{t('ui.nowe')}</Badge>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <i className="bi bi-bank me-1" />{t('kasaBank.rejestryKasowoBankowe')}
                                                <Badge bg="primary" pill className="ms-2">{t('ui.ulepszone')}</Badge>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <i className="bi bi-file-earmark-bar-graph me-1" />{t('jpk.informacjeJpk')}
                                                <Badge bg="info" pill className="ms-2">{t('ui.szybciej')}</Badge>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h2 className="page-title mb-2">
                                <i className="bi bi-bar-chart-steps me-2" />{t('ogolne.raporty')}
                            </h2>
                            <Card className="shadow-sm mb-3">
                                <Card.Body>
                                    <Table borderless size="sm" className="mb-2">
                                        <tbody>
                                            <tr>
                                                <td><i className="bi bi-receipt me-1 text-success" />{t('handel.faktury')}</td>
                                                <td>
                                                    <Badge bg="success" pill>5</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="bi bi-people me-1 text-primary" />{t('ogolne.kontrahenci')}</td>
                                                <td>
                                                    <Badge bg="primary" pill>3</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="bi bi-boxes me-1 text-warning" />{t('handel.operacjeMagazynowe')}</td>
                                                <td>
                                                    <Badge bg="warning" pill>12</Badge>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Button variant="success" className="submit-btn w-100 mt-2">
                                        <i className="bi bi-send-check me-1" />{t('ogolne.slowniki')}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/* Stopka, wersja, link do dokumentacji */}
                <Container className="mt-4">
                    <div className="text-center text-muted small mb-2">
                        <i className="bi bi-info-circle me-1" />
                        {t('pomoc.oprogramie')} | <a href="/dokumentacja" className="ms-1">{t('pomoc.pomocJakZaczac')}</a>
                    </div>
                </Container>
            </div>
        </Container>
    );
}

export default App;
