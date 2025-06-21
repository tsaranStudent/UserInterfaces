import React from 'react';
import { Container, Card, Alert, Button, Table, Badge, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const ZmianaFirmy = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-2 mb-2">
            <div className="background mt-2 mb-2">
                <Container className="mt-3">

                    {/* Nagłówek sekcji z ikoną */}
                    <div className="form-section text-center mb-4">
                        <i className="bi bi-arrow-left-right icon-unified mb-2" />
                        <h1 className="page-title">{t('zmianaFirmy.tytul')}</h1>
                        <p className="text-muted">{t('zmianaFirmy.podtytul')}</p>
                    </div>

                    <Card className="shadow-sm mb-4">
                        <Card.Body>
                            {/* Aktualna firma */}
                            <Alert variant="info" className="mb-4 d-flex align-items-center">
                                <i className="bi bi-building me-2" />
                                <strong>{t('zmianaFirmy.aktualnaFirmaNaglowek')}:</strong> {t('zmianaFirmy.aktualnaFirma')}
                            </Alert>

                            {/* Lista dostępnych firm */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">
                                        <i className="bi bi-list-ul me-2" />{t('zmianaFirmy.dostepneFirmy')}:
                                    </h5>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th><i className="bi bi-building me-1" />{t('zmianaFirmy.nazwaFirmy')}</th>
                                                <th><i className="bi bi-credit-card-2-front me-1" />{t('zmianaFirmy.nip')}</th>
                                                <th><i className="bi bi-clock-history me-1" />{t('zmianaFirmy.ostatnieLogowanie')}</th>
                                                <th><i className="bi bi-gear me-1" />{t('zmianaFirmy.statusAkcja')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{t('zmianaFirmy.firma1Nazwa')}</td>
                                                <td>{t('zmianaFirmy.firma1Nip')}</td>
                                                <td>{t('zmianaFirmy.firma1Logowanie')}</td>
                                                <td>
                                                    <Badge bg="success">
                                                        <i className="bi bi-check-circle me-1" />{t('zmianaFirmy.statusAktywna')}
                                                    </Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t('zmianaFirmy.firma2Nazwa')}</td>
                                                <td>{t('zmianaFirmy.firma2Nip')}</td>
                                                <td>{t('zmianaFirmy.firma2Logowanie')}</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm">
                                                        <i className="bi bi-arrow-right-circle me-1" />{t('zmianaFirmy.przelacz')}
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>{t('zmianaFirmy.firma3Nazwa')}</td>
                                                <td>{t('zmianaFirmy.firma3Nip')}</td>
                                                <td>{t('zmianaFirmy.firma3Logowanie')}</td>
                                                <td>
                                                    <Button variant="outline-primary" size="sm">
                                                        <i className="bi bi-arrow-right-circle me-1" />{t('zmianaFirmy.przelacz')}
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>

                            {/* Formularz dodawania nowej firmy */}
                            <Card className="mb-4">
                                <Card.Body>
                                    <h5 className="mb-3">
                                        <i className="bi bi-building-add me-2" />{t('zmianaFirmy.dodajNowaFirme')}
                                    </h5>
                                    <Form className="row g-3">
                                        <Form.Group className="col-md-6 mb-3">
                                            <Form.Label>
                                                <i className="bi bi-type me-1" />{t('zmianaFirmy.nazwaFirmy')}
                                            </Form.Label>
                                            <Form.Control type="text" id="companyName" placeholder={t('zmianaFirmy.wpiszNazweFirmy')} />
                                        </Form.Group>
                                        <Form.Group className="col-md-6 mb-3">
                                            <Form.Label>
                                                <i className="bi bi-credit-card-2-front me-1" />{t('zmianaFirmy.nip')}
                                            </Form.Label>
                                            <Form.Control type="text" id="companyNIP" placeholder={t('zmianaFirmy.wpiszNip')} />
                                        </Form.Group>
                                        <Form.Group className="col-md-12 mb-3">
                                            <Form.Label>
                                                <i className="bi bi-award me-1" />{t('zmianaFirmy.typFirmy')}
                                            </Form.Label>
                                            <Form.Select id="companyType">
                                                <option>{t('zmianaFirmy.wybierzTypFirmy')}</option>
                                                <option>{t('zmianaFirmy.spolkaZOO')}</option>
                                                <option>{t('zmianaFirmy.spolkaAkcyjna')}</option>
                                                <option>{t('zmianaFirmy.dzialalnoscGospodarcza')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <div className="col-12">
                                            <Button variant="primary">
                                                <i className="bi bi-plus-circle me-1" />{t('zmianaFirmy.dodajFirme')}
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>

                            {/* Przyciski akcji */}
                            <div className="d-flex justify-content-end gap-2">
                                <Button variant="outline-secondary">
                                    <i className="bi bi-x-circle me-1" />{t('zmianaFirmy.anuluj')}
                                </Button>
                                <Button variant="primary">
                                    <i className="bi bi-save me-1" />{t('zmianaFirmy.zapiszZmiany')}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* Komunikat końcowy */}
                    <Alert variant="warning" className="text-center d-flex align-items-center justify-content-center">
                        <i className="bi bi-exclamation-triangle me-2" />
                        {t('zmianaFirmy.uwagaZmianaFirmy')}
                    </Alert>
                </Container>
            </div>
        </Container>
    );
};