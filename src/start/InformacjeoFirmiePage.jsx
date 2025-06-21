import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Table, Badge, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const InformacjeoFirmie = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-building icon-unified mb-2" />
                        <h1 className="page-title">{t('informacjeFirmy.tytul')}</h1>
                        <p className="text-muted">{t('informacjeFirmy.podtytul')}</p>
                    </div>

                    {/* Zakładki z podziałem na sekcje */}
                    <Tabs defaultActiveKey="podstawowe" className="mb-4">
                        {/* Dane podstawowe */}
                        <Tab eventKey="podstawowe" title={<><i className="bi bi-card-list me-1" />{t('informacjeFirmy.danePodstawowe')}</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <Row>
                                        <Col md={6}>
                                            <div className="form-section">
                                                <h5><i className="bi bi-archive me-1" />{t('informacjeFirmy.daneRejestrowe')}</h5>
                                                <Table borderless>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong><i className="bi bi-person-badge me-1" />{t('informacjeFirmy.nazwa')}:</strong></td>
                                                            <td>{t('informacjeFirmy.przykladowaNazwa')}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-credit-card-2-front me-1" />{t('informacjeFirmy.nip')}:</strong></td>
                                                            <td>{t('informacjeFirmy.przykladowyNip')}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-123 me-1" />{t('informacjeFirmy.regon')}:</strong></td>
                                                            <td>{t('informacjeFirmy.przykladowyRegon')}</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="form-section">
                                                <h5><i className="bi bi-telephone me-1" />{t('informacjeFirmy.daneKontaktowe')}</h5>
                                                <Table borderless>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong><i className="bi bi-geo-alt me-1" />{t('informacjeFirmy.adres')}:</strong></td>
                                                            <td>{t('informacjeFirmy.przykladowyAdres')}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-phone me-1" />{t('informacjeFirmy.telefon')}:</strong></td>
                                                            <td>{t('informacjeFirmy.przykladowyTelefon')}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong><i className="bi bi-envelope me-1" />{t('informacjeFirmy.email')}:</strong></td>
                                                            <td>{t('informacjeFirmy.przykladowyEmail')}</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Statystyki firmy */}
                        <Tab eventKey="statystyki" title={<><i className="bi bi-bar-chart-line me-1" />{t('informacjeFirmy.statystyki')}</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-graph-up-arrow me-1" />{t('informacjeFirmy.wskazniki2025')}</h5>
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-activity me-1" />{t('informacjeFirmy.wskaznik')}</th>
                                                    <th><i className="bi bi-currency-exchange me-1" />{t('informacjeFirmy.wartosc')}</th>
                                                    <th><i className="bi bi-patch-check me-1" />{t('informacjeFirmy.status')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('informacjeFirmy.przychodyQ1')}</td>
                                                    <td>{t('informacjeFirmy.wartoscPrzychodow')}</td>
                                                    <td>
                                                        <Badge bg="success"><i className="bi bi-arrow-up-right me-1" />{t('informacjeFirmy.wzrostRR')}</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t('informacjeFirmy.liczbaKlientow')}</td>
                                                    <td>{t('informacjeFirmy.wartoscKlientow')}</td>
                                                    <td>
                                                        <Badge bg="info"><i className="bi bi-people me-1" />{t('informacjeFirmy.statusStabilny')}</Badge>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t('informacjeFirmy.zatrudnieni')}</td>
                                                    <td>{t('informacjeFirmy.wartoscZatrudnionych')}</td>
                                                    <td>
                                                        <Badge bg="warning"><i className="bi bi-person-plus me-1" />{t('informacjeFirmy.statusRekrutacja')}</Badge>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Struktura organizacyjna */}
                        <Tab eventKey="struktura" title={<><i className="bi bi-diagram-3 me-1" />{t('informacjeFirmy.struktura')}</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-diagram-3 me-1" />{t('informacjeFirmy.organizacjaFirmy')}</h5>
                                        <Row>
                                            <Col md={4}>
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <h6><i className="bi bi-laptop me-1" />{t('informacjeFirmy.dzialIT')}</h6>
                                                        <p className="text-muted mb-2">{t('informacjeFirmy.pracownicyIT')}</p>
                                                        <p className="text-muted small"><i className="bi bi-wallet2 me-1" />{t('informacjeFirmy.budzetIT')}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <h6><i className="bi bi-basket me-1" />{t('informacjeFirmy.dzialSprzedazy')}</h6>
                                                        <p className="text-muted mb-2">{t('informacjeFirmy.pracownicySprzedaz')}</p>
                                                        <p className="text-muted small"><i className="bi bi-flag me-1" />{t('informacjeFirmy.celSprzedaz')}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={4}>
                                                <Card className="mb-3">
                                                    <Card.Body>
                                                        <h6><i className="bi bi-people-fill me-1" />{t('informacjeFirmy.dzialHR')}</h6>
                                                        <p className="text-muted mb-2">{t('informacjeFirmy.pracownicyHR')}</p>
                                                        <p className="text-muted small"><i className="bi bi-person-plus me-1" />{t('informacjeFirmy.planRekrutacji')}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>

                    {/* Alert z planowanymi zmianami */}
                    <div className="form-section">
                        <Alert variant="info" className="d-flex align-items-center">
                            <i className="bi bi-lightbulb me-2" />
                            <strong>{t('informacjeFirmy.planowaneZmianyTytul')}:</strong> {t('informacjeFirmy.planowaneZmianyOpis')}
                        </Alert>
                    </div>
                </Container>
            </div>
        </Container>
    );
};