import React from 'react';
import '../App.css';
import { Container, Tabs, Tab, Alert, Card, Row, Col, Form, InputGroup, Button, Table, Badge } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslation } from 'react-i18next';

export const ZakupPaczkiSms = () => {
    const { t } = useTranslation();

    return (
        <Container className="main-content lang-pl mt-3 mb-3">
            {/* Nagłówek sekcji z ikoną */}
            <div className="form-section text-center mb-4">
                <i className="bi bi-envelope-paper icon-unified mb-2" />
                <h1 className="page-title">{t('zakupPaczkiSms.title')}</h1>
                <p className="text-muted">
                    {t('zakupPaczkiSms.subtitle')}
                </p>
            </div>

            {/* Zakładki: zakup + historia */}
            <Tabs defaultActiveKey="zakup" className="mb-4">
                <Tab
                    eventKey="zakup"
                    title={<>
                        <i className="bi bi-cart-plus me-1" />
                        {t('zakupPaczkiSms.tabs.newPurchase')}
                    </>}
                >
                    {/* Zakup pakietu */}
                    <div className="form-section mt-3">
                        {/* Info o stanie konta */}
                        <Alert variant="info">
                            <i className="bi bi-info-circle me-1" />
                            <strong>{t('zakupPaczkiSms.accountStatus.balance')}</strong> {t('zakupPaczkiSms.accountStatus.balanceValue')} |{' '}
                            <strong>{t('zakupPaczkiSms.accountStatus.creditLimit')}</strong> {t('zakupPaczkiSms.accountStatus.creditLimitValue')}
                        </Alert>

                        {/* Wybór pakietu SMS */}
                        <Card className="mb-4">
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-box-seam me-1" />{t('zakupPaczkiSms.packageSelection.title')}
                                </h5>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="smsPackageType" className="mb-3">
                                            <Form.Label>
                                                <i className="bi bi-layers me-1" />{t('zakupPaczkiSms.packageSelection.labels.type')}
                                            </Form.Label>
                                            <Form.Select>
                                                <option>{t('zakupPaczkiSms.packageSelection.types.standard')}</option>
                                                <option>{t('zakupPaczkiSms.packageSelection.types.business')}</option>
                                                <option>{t('zakupPaczkiSms.packageSelection.types.premium')}</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="smsPackageQuantity" className="mb-3">
                                            <Form.Label>
                                                <i className="bi bi-123 me-1" />{t('zakupPaczkiSms.packageSelection.labels.quantity')}
                                            </Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" defaultValue={1000} min={100} />
                                                <InputGroup.Text>{t('zakupPaczkiSms.packageSelection.units')}</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* Podsumowanie kosztów */}
                                <div className="summary-box p-3 mb-3">
                                    <div className="summary-text">
                                        <i className="bi bi-cash-stack me-1" />
                                        <strong>{t('zakupPaczkiSms.summary.netCost')}</strong> {t('zakupPaczkiSms.summary.netCostValue')}
                                    </div>
                                    <div className="summary-text">
                                        <i className="bi bi-percent me-1" />
                                        <strong>{t('zakupPaczkiSms.summary.vat')}</strong> {t('zakupPaczkiSms.summary.vatValue')}
                                    </div>
                                    <div className="summary-text h5">
                                        <i className="bi bi-credit-card-2-front me-1" />
                                        <strong>{t('zakupPaczkiSms.summary.total')}</strong> {t('zakupPaczkiSms.summary.totalValue')}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Metoda płatności */}
                        <Card>
                            <Card.Body>
                                <h5 className="mb-4">
                                    <i className="bi bi-wallet2 me-1" />{t('zakupPaczkiSms.paymentMethod.title')}
                                </h5>
                                <Form.Group controlId="payTransfer" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={<><i className="bi bi-bank me-1" />{t('zakupPaczkiSms.paymentMethod.options.transfer')}</>}
                                        name="paymentMethod"
                                        defaultChecked
                                    />
                                </Form.Group>
                                <Form.Group controlId="payCard" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={<><i className="bi bi-credit-card me-1" />{t('zakupPaczkiSms.paymentMethod.options.card')}</>}
                                        name="paymentMethod"
                                    />
                                </Form.Group>
                                <Form.Group controlId="payCredit" className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        label={<><i className="bi bi-coin me-1" />{t('zakupPaczkiSms.paymentMethod.options.credit')}</>}
                                        name="paymentMethod"
                                    />
                                </Form.Group>
                                <Form.Group controlId="acceptRules" className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label={<><i className="bi bi-check2-square me-1" />{t('zakupPaczkiSms.paymentMethod.acceptTerms')}</>}
                                        required
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        {/* Akcje */}
                        <div className="actions-bar-end mt-4 d-flex justify-content-end gap-2">
                            <Button variant="outline-secondary">
                                <i className="bi bi-x-circle me-1" /> {t('zakupPaczkiSms.actions.cancel')}
                            </Button>
                            <Button variant="success">
                                <i className="bi bi-credit-card me-1" /> {t('zakupPaczkiSms.actions.confirm')}
                            </Button>
                        </div>
                    </div>
                </Tab>

                <Tab
                    eventKey="historia"
                    title={<>
                        <i className="bi bi-clock-history me-1" />
                        {t('zakupPaczkiSms.tabs.history')}
                    </>}
                >
                    {/* Historia zakupów */}
                    <div className="form-section mt-3">
                        {/* Akcje nad tabelą */}
                        <div className="actions-bar mb-3 d-flex justify-content-between align-items-center">
                            <div className="actions-bar-start">
                                <Form.Control
                                    type="date"
                                    className="me-2"
                                    style={{ maxWidth: '200px' }}
                                    max="2025-12-31"
                                />
                            </div>
                            <div className="actions-bar-end">
                                <InputGroup className="search-input">
                                    <Form.Control placeholder={t('zakupPaczkiSms.search.placeholder')} />
                                    <Button variant="outline-secondary">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                        {/* Tabela historii - min 3 pozycje */}
                        <Table striped bordered hover className="data-table mb-4">
                            <thead>
                                <tr>
                                    <th><i className="bi bi-calendar me-1" />{t('zakupPaczkiSms.historyTable.headers.date')}</th>
                                    <th><i className="bi bi-hash me-1" />{t('zakupPaczkiSms.historyTable.headers.orderNumber')}</th>
                                    <th><i className="bi bi-envelope me-1" />{t('zakupPaczkiSms.historyTable.headers.smsQuantity')}</th>
                                    <th><i className="bi bi-cash-coin me-1" />{t('zakupPaczkiSms.historyTable.headers.amount')}</th>
                                    <th><i className="bi bi-patch-check me-1" />{t('zakupPaczkiSms.historyTable.headers.status')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15.01.2025</td>
                                    <td>ZSMS/2025/001</td>
                                    <td>1000</td>
                                    <td>430,50 zł</td>
                                    <td>
                                        <Badge bg="success"><i className="bi bi-check-circle me-1" />{t('zakupPaczkiSms.status.completed')}</Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10.03.2025</td>
                                    <td>ZSMS/2025/002</td>
                                    <td>500</td>
                                    <td>215,25 zł</td>
                                    <td>
                                        <Badge bg="warning"><i className="bi bi-hourglass-split me-1" />{t('zakupPaczkiSms.status.pending')}</Badge>
                                    </td>
                                </tr>
                                <tr>
                                    <td>05.02.2025</td>
                                    <td>ZSMS/2025/003</td>
                                    <td>2000</td>
                                    <td>860,00 zł</td>
                                    <td>
                                        <Badge bg="danger"><i className="bi bi-x-circle me-1" />{t('zakupPaczkiSms.status.cancelled')}</Badge>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};