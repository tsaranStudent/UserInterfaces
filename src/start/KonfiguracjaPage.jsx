import React from 'react';
import { Container, Card, Tabs, Tab, Form, Button, Alert, Badge, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Konfiguracja = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-gear icon-unified mb-2" />
                        <h1 className="page-title">{t('konfiguracja.tytul')}</h1>
                        <p className="text-muted">{t('konfiguracja.podtytul')}</p>
                    </div>

                    {/* Zakładki konfiguracyjne */}
                    <Tabs defaultActiveKey="podstawowe" className="mb-4">
                        {/* Podstawowe ustawienia */}
                        <Tab eventKey="podstawowe" title={<><i className="bi bi-sliders me-1" />{t('konfiguracja.podstawowe')}</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-sliders me-1" />{t('konfiguracja.ustawieniaSystemowe')}</h5>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-display me-1" />{t('konfiguracja.nazwaSystemu')}
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    defaultValue={t('konfiguracja.domyslnaNazwaSystemu')}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-currency-exchange me-1" />{t('konfiguracja.domyslnaWaluta')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>PLN</option>
                                                    <option>EUR</option>
                                                    <option>USD</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-translate me-1" />{t('konfiguracja.domyslnyJezyk')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>{t('konfiguracja.jezykPolski')}</option>
                                                    <option>{t('konfiguracja.jezykAngielski')}</option>
                                                    <option>{t('konfiguracja.jezykNiemiecki')}</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />{t('konfiguracja.zapiszZmiany')}
                                            </Button>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Ustawienia fiskalne */}
                        <Tab eventKey="fiskalne" title={<><i className="bi bi-file-earmark-text me-1" />{t('konfiguracja.fiskalne')}</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-file-earmark-lock me-1" />{t('konfiguracja.konfiguracjaJPK')}</h5>
                                        <Alert variant="info">
                                            <i className="bi bi-info-circle me-1" />{t('konfiguracja.ustawieniaJPKInfo')}
                                        </Alert>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-patch-check me-1" />{t('konfiguracja.certyfikatPodpisu')}
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    defaultValue={t('konfiguracja.przykladowyCertyfikat')}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-calendar2 me-1" />{t('konfiguracja.formatDaty')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>RRRR-MM-DD</option>
                                                    <option>DD-MM-RRRR</option>
                                                    <option>MM/DD/RRRR</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    <i className="bi bi-file-earmark-bar-graph me-1" />{t('konfiguracja.typJPK')}
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>JPK_VAT</option>
                                                    <option>JPK_FA</option>
                                                    <option>JPK_MAG</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Button variant="primary">
                                                <i className="bi bi-save me-1" />{t('konfiguracja.zapiszUstawienia')}
                                            </Button>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>

                        {/* Integracje zewnętrzne */}
                        <Tab eventKey="integracje" title={<><i className="bi bi-link-45deg me-1" />{t('konfiguracja.integracje')}</>}>
                            <Card className="shadow-sm mt-3">
                                <Card.Body>
                                    <div className="form-section">
                                        <h5><i className="bi bi-cloud-arrow-up me-1" />{t('konfiguracja.integracjeZewnetrzne')}</h5>
                                        <Table striped bordered>
                                            <thead>
                                                <tr>
                                                    <th><i className="bi bi-app me-1" />{t('konfiguracja.usluga')}</th>
                                                    <th><i className="bi bi-patch-check me-1" />{t('konfiguracja.status')}</th>
                                                    <th><i className="bi bi-gear me-1" />{t('konfiguracja.akcja')}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{t('konfiguracja.apiBankowe')}</td>
                                                    <td><Badge bg="success"><i className="bi bi-check-circle me-1" />{t('konfiguracja.statusAktywna')}</Badge></td>
                                                    <td>
                                                        <Button variant="outline-secondary" size="sm">
                                                            <i className="bi bi-tools me-1" />{t('konfiguracja.konfiguruj')}
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t('konfiguracja.systemKsiegowy')}</td>
                                                    <td><Badge bg="warning"><i className="bi bi-hourglass-split me-1" />{t('konfiguracja.statusNieaktywna')}</Badge></td>
                                                    <td>
                                                        <Button variant="outline-secondary" size="sm">
                                                            <i className="bi bi-lightning me-1" />{t('konfiguracja.aktywuj')}
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t('konfiguracja.platnosciOnline')}</td>
                                                    <td><Badge bg="danger"><i className="bi bi-x-circle me-1" />{t('konfiguracja.statusBlad')}</Badge></td>
                                                    <td>
                                                        <Button variant="outline-secondary" size="sm">
                                                            <i className="bi bi-arrow-repeat me-1" />{t('konfiguracja.polaczPonownie')}
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>

                    {/* Komunikat na dole */}
                    <Alert variant="info" className="text-center d-flex justify-content-center align-items-center">
                        <i className="bi bi-exclamation-triangle me-2" />
                        {t('konfiguracja.komunikatPonowneLogowanie')}
                    </Alert>

                </Container>
            </div>
        </Container>
    );
};