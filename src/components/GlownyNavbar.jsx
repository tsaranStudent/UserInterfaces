import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap-icons/font/bootstrap-icons.css';

const GlownyNavbar = () => {
    const { t } = useTranslation();

    return (
        <Nav className="me-auto flex-wrap">
            {/* START */}
            <NavDropdown title={<span><i className="bi bi-house-door me-1" />{t('start.nazwa')}</span>} id="home-dropdown">
                <NavDropdown.Item as={Link} to="/"><i className="bi bi-house me-1" />{t('start.stronaGlowna')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logowanie"><i className="bi bi-box-arrow-in-right me-1" />{t('start.logowanie')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zmianaFirmy"><i className="bi bi-building-gear me-1" />{t('start.zmianaFirmy')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/informacjeoFirmie"><i className="bi bi-info-circle me-1" />{t('start.informacjeOFirmie')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/konfiguracja"><i className="bi bi-gear me-1" />{t('start.konfiguracjaSystemu')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/odswierzKonfiguracje"><i className="bi bi-arrow-repeat me-1" />{t('start.odswiezKonfiguracje')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/nowoscWwersji"><i className="bi bi-stars me-1" />{t('start.nowosciWersji')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wlaczNoweFunkcje"><i className="bi bi-toggle2-on me-1" />{t('start.wlaczNoweFunkcje')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/koniecPracy"><i className="bi bi-box-arrow-right me-1" />{t('start.koniecPracy')}</NavDropdown.Item>
            </NavDropdown>

            {/* OGÓLNE */}
            <NavDropdown title={<span><i className="bi bi-collection me-1" />{t('ogolne.nazwa')}</span>} id="ogolne-dropdown">
                <NavDropdown.Item as={Link} to="/kontrahenci"><i className="bi bi-people me-1" />{t('ogolne.kontrahenci')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyKontrahent"><i className="bi bi-person-plus me-1" />{t('ogolne.nowyKontrahent')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pracownicy"><i className="bi bi-person-badge me-1" />{t('ogolne.pracownicy')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cennik"><i className="bi bi-cash-coin me-1" />{t('ogolne.cennik')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyTowar"><i className="bi bi-box-seam me-1" />{t('ogolne.nowyTowar')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/grupyTowarowe"><i className="bi bi-tags me-1" />{t('ogolne.grupyTowarowe')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rabaty"><i className="bi bi-percent me-1" />{t('ogolne.rabaty')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/kategorie"><i className="bi bi-collection-fill me-1" />{t('ogolne.kategorie')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/atrybuty"><i className="bi bi-sliders2-vertical me-1" />{t('ogolne.atrybuty')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wymiaryOpisuAnalitycznego"><i className="bi bi-layers-half me-1" />{t('ogolne.wymiary')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/przesylkiKurierskie"><i className="bi bi-truck me-1" />{t('ogolne.przesylki')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wiadomosciSms"><i className="bi bi-chat-dots me-1" />{t('ogolne.smsy')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zakupPaczkiSms"><i className="bi bi-envelope-plus me-1" />{t('ogolne.zakupSms')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/raporty"><i className="bi bi-bar-chart me-1" />{t('ogolne.raporty')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/waluty"><i className="bi bi-currency-exchange me-1" />{t('ogolne.waluty')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/daneOsobowe"><i className="bi bi-person-vcard me-1" />{t('ogolne.daneOsobowe')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/udzielPelnomocnictwa"><i className="bi bi-person-check me-1" />{t('ogolne.pelnomocnictwa')}</NavDropdown.Item>
            </NavDropdown>

            {/* CRM */}
            <NavDropdown title={<span><i className="bi bi-person-lines-fill me-1" />{t('crm.nazwa')}</span>} id="crm-dropdown">
                <NavDropdown.Item as={Link} to="/kontakty"><i className="bi bi-telephone me-1" />{t('crm.kontakty')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/terminarz"><i className="bi bi-calendar-check me-1" />{t('crm.terminarz')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/fakturyCykliczne"><i className="bi bi-recycle me-1" />{t('crm.fakturyCykliczne')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ofertyHandlowe"><i className="bi bi-handbag me-1" />{t('crm.ofertyHandlowe')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/archiwumWydrukow"><i className="bi bi-archive me-1" />{t('crm.archiwumWydrukow')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/bibliotekaDokumentow"><i className="bi bi-journal-bookmark me-1" />{t('crm.bibliotekaDokumentow')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyDokument"><i className="bi bi-file-earmark-plus me-1" />{t('crm.nowyDokument')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/skrzynkaOperatora"><i className="bi bi-inbox me-1" />{t('crm.skrzynkaOperatora')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/skrzynkaPocztowa"><i className="bi bi-envelope-open me-1" />{t('crm.skrzynkaPocztowa')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/windykacjaSchematy"><i className="bi bi-diagram-3 me-1" />{t('crm.windykacjaSchematy')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/windykacjaHistoriaZdarzen"><i className="bi bi-clock-history me-1" />{t('crm.windykacjaHistoriaZdarzen')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ankietyAnkietowanie"><i className="bi bi-clipboard-check me-1" />{t('crm.ankietyAnkietowanie')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyWzorceAnkiet"><i className="bi bi-ui-checks me-1" />{t('crm.ankietyWzorceAnkiet')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyPytania"><i className="bi bi-patch-question me-1" />{t('crm.ankietyPytania')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietySzablonyOdpowiedzi"><i className="bi bi-chat-right-dots me-1" />{t('crm.ankietySzablonyOdpowiedzi')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ankietyGrupyZapytan"><i className="bi bi-list-task me-1" />{t('crm.ankietyGrupyZapytan')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wiecejFunkcji"><i className="bi bi-three-dots me-1" />{t('crm.wiecejFunkcji')}</NavDropdown.Item>
            </NavDropdown>

            {/* HANDEL */}
            <NavDropdown title={<span><i className="bi bi-bag me-1" />{t('handel.nazwa')}</span>} id="handel-dropdown">
                <NavDropdown.Item as={Link} to="/faktury"><i className="bi bi-file-earmark-text me-1" />{t('handel.faktury')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowaFaktura"><i className="bi bi-file-earmark-plus me-1" />{t('handel.nowaFaktura')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/paragony"><i className="bi bi-receipt me-1" />{t('handel.paragony')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyParagon"><i className="bi bi-plus-square me-1" />{t('handel.nowyParagon')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rezerwacjeOdbiorcy"><i className="bi bi-person-check me-1" />{t('handel.rezerwacjeOdbiorcy')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fakturyProforma"><i className="bi bi-file-earmark-text me-1" />{t('handel.fakturyProforma')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/sprzedarzDedykowana"><i className="bi bi-gift me-1" />{t('handel.sprzedarzDedykowana')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/fakturyZakupu"><i className="bi bi-file-earmark-arrow-down me-1" />{t('handel.fakturyZakupu')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zleceniaUDostawcy"><i className="bi bi-truck me-1" />{t('handel.zleceniaUDostawcy')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zasoby"><i className="bi bi-layers me-1" />{t('handel.zasoby')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/raportBrakow"><i className="bi bi-x-octagon me-1" />{t('handel.raportBrakow')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wydaniaZewnetrzne"><i className="bi bi-arrow-right-square me-1" />{t('handel.wydaniaZewnetrzne')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/przyjeciaZewnetrzne"><i className="bi bi-arrow-left-square me-1" />{t('handel.przyjeciaZewnetrzne')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zlecenia"><i className="bi bi-list-check me-1" />{t('handel.zlecenia')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zleceniaCykliczne"><i className="bi bi-repeat me-1" />{t('handel.zleceniaCykliczne')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/urzadzniaServis"><i className="bi bi-cpu me-1" />{t('handel.urzadzniaServis')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rodzajeUrzadzenServis"><i className="bi bi-hdd-stack me-1" />{t('handel.rodzajeUrzadzenServis')}</NavDropdown.Item>
            </NavDropdown>

            {/* KASA/BANK */}
            <NavDropdown title={<span><i className="bi bi-cash-stack me-1" />{t('kasaBank.nazwa')}</span>} id="kasa-bank-dropdown">
                <NavDropdown.Item as={Link} to="/rejestryKasowoBankowe"><i className="bi bi-bank me-1" />{t('kasaBank.rejestryKasowoBankowe')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/raportyKasowoBankowe"><i className="bi bi-file-earmark-bar-graph me-1" />{t('kasaBank.raportyKasowoBankowe')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/zapisyKasowoBankowe"><i className="bi bi-journal-text me-1" />{t('kasaBank.zapisyKasowoBankowe')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/preliminarzPlatnosci"><i className="bi bi-list-ol me-1" />{t('kasaBank.preliminarzPlatnosci')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/magazynWalut"><i className="bi bi-currency-dollar me-1" />{t('kasaBank.magazynWalut')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rozliczeniaPodmiotu"><i className="bi bi-receipt me-1" />{t('kasaBank.rozliczeniaPodmiotu')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyNierozliczone"><i className="bi bi-file-earmark-x me-1" />{t('kasaBank.dokumentyNierozliczone')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyRozliczone"><i className="bi bi-file-earmark-check me-1" />{t('kasaBank.dokumentyRozliczone')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentyKompensat"><i className="bi bi-file-earmark-diff me-1" />{t('kasaBank.dokumentyKompensat')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rozniceKursowe"><i className="bi bi-graph-up me-1" />{t('kasaBank.rozniceKursowe')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/delegacje"><i className="bi bi-person-walking me-1" />{t('kasaBank.delegacje')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/wyslijDaneKasaBank"><i className="bi bi-upload me-1" />{t('kasaBank.wyslijDane')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/odbierzDane"><i className="bi bi-download me-1" />{t('kasaBank.odbierzDane')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/historiaWymiany"><i className="bi bi-clock me-1" />{t('kasaBank.historiaWymiany')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/klienciBiura"><i className="bi bi-person-badge me-1" />{t('kasaBank.klienciBiura')}</NavDropdown.Item>
            </NavDropdown>

            {/* REJESTRY VAT */}
            <NavDropdown title={<span><i className="bi bi-receipt me-1" />{t('rejestryVat.nazwa')}</span>} id="rejestry-vat-dropdown">
                <NavDropdown.Item as={Link} to="/rejestryVat"><i className="bi bi-journal-bookmark-fill me-1" />{t('rejestryVat.rejestryVat')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/strukturaZakupow"><i className="bi bi-diagram-3 me-1" />{t('rejestryVat.strukturaZakupow')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaDodatkowa"><i className="bi bi-clipboard-data me-1" />{t('rejestryVat.ewidencjaDodatkowa')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaKasowegoPit"><i className="bi bi-calculator me-1" />{t('rejestryVat.ewidencjaKasowegoPit')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7"><i className="bi bi-file-earmark-bar-graph me-1" />{t('rejestryVat.deklaracjePlikiJPK_V7')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVatUe"><i className="bi bi-globe me-1" />{t('rejestryVat.deklaracjeVatUe')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_8"><i className="bi bi-8-circle me-1" />{t('rejestryVat.deklaracjeVat_8')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_9M"><i className="bi bi-9-circle me-1" />{t('rejestryVat.deklaracjeVat_9M')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeInne"><i className="bi bi-file-earmark-diff me-1" />{t('rejestryVat.deklaracjeInne')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/odbierzDane"><i className="bi bi-download me-1" />{t('rejestryVat.odbierzDane')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wyslijDane"><i className="bi bi-upload me-1" />{t('rejestryVat.wyslijDane')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/historiaWymiany"><i className="bi bi-clock-history me-1" />{t('rejestryVat.historiaWymiany')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/klienciBiura"><i className="bi bi-person-badge me-1" />{t('rejestryVat.klienciBiura')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wiadomosciOdKlientow"><i className="bi bi-chat-left-text me-1" />{t('rejestryVat.wiadomosciOdKlientow')}</NavDropdown.Item>
            </NavDropdown>

            {/* KSIĘGOWOŚĆ */}
            <NavDropdown title={<span><i className="bi bi-journal-bookmark me-1" />{t('ksiegowosc.nazwa')}</span>} id="ksiegowosc-dropdown">
                <NavDropdown.Item as={Link} to="/zapisyKPiR"><i className="bi bi-journal-text me-1" />{t('ksiegowosc.zapisyKPiR')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spisZNatury"><i className="bi bi-journal-richtext me-1" />{t('ksiegowosc.spisZNatury')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklaracjePIT"><i className="bi bi-file-earmark-person me-1" />{t('ksiegowosc.deklaracjePIT')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeCIT"><i className="bi bi-file-earmark-person me-1" />{t('ksiegowosc.deklaracjeCIT')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/samochody"><i className="bi bi-truck-front me-1" />{t('ksiegowosc.samochody')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/dokumentyZrodlowe"><i className="bi bi-file-earmark me-1" />{t('ksiegowosc.dokumentyZrodlowe')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ewidencjaSrodkowTrwalych"><i className="bi bi-hdd-network me-1" />{t('ksiegowosc.ewidencjaSrodkowTrwalych')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dokumentySrodowTrwalych"><i className="bi bi-file-earmark-text me-1" />{t('ksiegowosc.dokumentySrodowTrwalych')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ewidencjaWyposarzenia"><i className="bi bi-archive me-1" />{t('ksiegowosc.ewidencjaWyposarzenia')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/inwentaryzacja"><i className="bi bi-clipboard-data me-1" />{t('ksiegowosc.inwentaryzacja')}</NavDropdown.Item>
            </NavDropdown>

            {/* JPK */}
            <NavDropdown title={<span><i className="bi bi-file-earmark-bar-graph me-1" />{t('jpk.nazwa')}</span>} id="jpk-dropdown">
                <NavDropdown.Item as={Link} to="/deklaracjePlikiJPK_V7"><i className="bi bi-file-earmark-bar-graph me-1" />{t('jpk.deklaracjePlikiJPK_V7')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_9M"><i className="bi bi-9-circle me-1" />{t('jpk.deklaracjeVat_9M')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVatUe"><i className="bi bi-globe me-1" />{t('jpk.deklaracjeVatUe')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeVat_8"><i className="bi bi-8-circle me-1" />{t('jpk.deklaracjeVat_8')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/importDoRejetruVat"><i className="bi bi-arrow-bar-down me-1" />{t('jpk.importDoRejetruVat')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/informacjeJpk"><i className="bi bi-info-circle me-1" />{t('jpk.informacjeJpk')}</NavDropdown.Item>
            </NavDropdown>

            {/* PŁACE I KADRY */}
            <NavDropdown title={<span><i className="bi bi-person-gear me-1" />{t('placeKadry.nazwa')}</span>} id="place-kadry-dropdown">
                <NavDropdown.Item as={Link} to="/kadry"><i className="bi bi-people me-1" />{t('placeKadry.kadry')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nowyPracownik"><i className="bi bi-person-plus me-1" />{t('placeKadry.nowyPracownik')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/listyPlac"><i className="bi bi-journal-check me-1" />{t('placeKadry.listyPlac')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wtplatyPracownikow"><i className="bi bi-cash me-1" />{t('placeKadry.wtplatyPracownikow')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zusPlikiKedu"><i className="bi bi-file-earmark-medical me-1" />{t('placeKadry.zusPlikiKedu')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/deklarecjeZus"><i className="bi bi-file-earmark-person me-1" />{t('placeKadry.deklarecjeZus')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklarazjeRoczneIwa"><i className="bi bi-calendar-check me-1" />{t('placeKadry.deklarazjeRoczneIwa')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjeRoczneZswa"><i className="bi bi-calendar-check me-1" />{t('placeKadry.deklaracjeRoczneZswa')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/zalacznikiNaPit4r"><i className="bi bi-file-earmark-richtext me-1" />{t('placeKadry.zalacznikiNaPit4r')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/podatekNaPit8ar"><i className="bi bi-currency-exchange me-1" />{t('placeKadry.podatekNaPit8ar')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePitPracownikow"><i className="bi bi-file-earmark-person me-1" />{t('placeKadry.deklaracjePitPracownikow')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePfron"><i className="bi bi-award me-1" />{t('placeKadry.deklaracjePfron')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/deklaracjePpk"><i className="bi bi-award me-1" />{t('placeKadry.deklaracjePpk')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/slowniki"><i className="bi bi-book-half me-1" />{t('placeKadry.slowniki')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/strukturaOrganizacyjna"><i className="bi bi-diagram-3 me-1" />{t('placeKadry.strukturaOrganizacyjna')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/kasyZapomogowoPorzyczkowePkzp"><i className="bi bi-bank2 me-1" />{t('placeKadry.kasyZapomogowoPorzyczkowePkzp')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/hrmTs"><i className="bi bi-people-fill me-1" />{t('placeKadry.hrmTs')}</NavDropdown.Item>
            </NavDropdown>

            {/* WIDOK */}
            <NavDropdown title={<span><i className="bi bi-ui-checks-grid me-1" />{t('widok.nazwa')}</span>} id="widok-dropdown">
                <NavDropdown.Item as={Link} to="/kompozycjeWidoku"><i className="bi bi-layout-text-window-reverse me-1" />{t('widok.kompozycjeWidoku')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/czcinki"><i className="bi bi-type me-1" />{t('widok.czcinki')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ustawieniaOkien"><i className="bi bi-window me-1" />{t('widok.ustawieniaOkien')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ustawieniaOkienImport"><i className="bi bi-box-arrow-in-down me-1" />{t('widok.ustawieniaOkienImport')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ustawieniaOkienEksport"><i className="bi bi-box-arrow-up me-1" />{t('widok.ustawieniaOkienEksport')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ustawieniaOgolne"><i className="bi bi-gear me-1" />{t('widok.ustawieniaOgolne')}</NavDropdown.Item>
            </NavDropdown>

            {/* POMOC */}
            <NavDropdown title={<span><i className="bi bi-life-preserver me-1" />{t('pomoc.nazwa')}</span>} id="pomoc-dropdown">
                <NavDropdown.Item as={Link} to="/pomoc"><i className="bi bi-question-circle me-1" />{t('pomoc.pomoc')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocJakZaczac"><i className="bi bi-lightbulb me-1" />{t('pomoc.pomocJakZaczac')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pomocFilmyInstruktarzowe"><i className="bi bi-play-btn me-1" />{t('pomoc.pomocFilmyInstruktarzowe')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocFaq"><i className="bi bi-question-square me-1" />{t('pomoc.pomocFaq')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/pomocZdalna"><i className="bi bi-cloud-arrow-up me-1" />{t('pomoc.pomocZdalna')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocSystemObslugiZdarzen"><i className="bi bi-lightning me-1" />{t('pomoc.pomocSystemObslugiZdarzen')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pomocTwojaIndywidaStrona"><i className="bi bi-person-video3 me-1" />{t('pomoc.pomocTwojaIndywidaStrona')}</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/rejestracjaProgramu"><i className="bi bi-box-arrow-in-down me-1" />{t('pomoc.rejestracjaProgramu')}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/oprogramie"><i className="bi bi-info-circle me-1" />{t('pomoc.oprogramie')}</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default GlownyNavbar;