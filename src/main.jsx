import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
//import { Towar } from './towar/TowarPage.jsx';
//import { Towary } from './towar/TowaryPage.jsx';
//import { Pracownik } from './pracownik/PracownikPage.jsx';
//import { Pracownicy } from './pracownik/PracownicyPage.jsx';

//grupa start
//import { Home } from './start/HomePage.jsx';
import { InformacjeoFirmie } from './start/InformacjeoFirmiePage.jsx';
import { Konfiguracja } from './start/KonfiguracjaPage.jsx';
import { KoniecPracy } from './start/KoniecPracyPage.jsx';
import { Logowanie } from './start/LogowaniePage.jsx';
import { NowoscWwersji } from './start/NowoscWwersjiPage.jsx';
import { OdswierzKonfiguracje } from './start/OdswierzKonfiguracjePage.jsx';
import { WlaczNoweFunkcje } from './start/WlaczNoweFunkcjePage.jsx';
import { ZmianaFirmy } from './start/ZmianaFirmyPage.jsx';


//grupa ogólne
import { Layout } from './layout/Layout.jsx';
import { Atrybuty } from './ogolne/AtrybutyPage.jsx';
import { Cennik } from './ogolne/CennikPage.jsx';
import { DaneOsobowe } from './ogolne/DaneOsobowePage.jsx';
import { GrupyTowarowe } from './ogolne/GrupyTowarowePage.jsx';
//import { Inne } from './ogolne/InnePage.jsx';
import { Kategorie } from './ogolne/KategoriePage.jsx';
import { Kontrahenci } from './ogolne/KontrahenciPage.jsx';
import { NowyKontrahent } from './ogolne/NowyKontrahentPage.jsx';
import { NowyTowar } from './ogolne/NowyTowarPage.jsx';
import { Pracownicy } from './ogolne/PracownicyPage.jsx';
import { PrzesylkiKurierskie } from './ogolne/PrzesylkiKurierskiePage.jsx';
import { Rabaty } from './ogolne/RabatyPage.jsx';
import { Raporty } from './ogolne/RaportyPage.jsx';
import { UdzielPelnomocnictwa } from './ogolne/UdzielPelnomocnictwaPage.jsx';
import { Waluty } from './ogolne/WalutyPage.jsx';
import { WiadomosciSms } from './ogolne/WiadomosciSmsPage.jsx';
import { WymiaryOpisuAnalitycznego } from './ogolne/WymiaryOpisuAnalitycznegoPage.jsx';
import { ZakupPaczkiSms } from './ogolne/ZakupPaczkiSmsPage.jsx';


//grupa crm
import { AnkietyAnkietowanie } from './crm/AnkietyAnkietowaniePage.jsx';
import { AnkietyGrupyZapytan } from './crm/AnkietyGrupyZapytanPage.jsx';
import { AnkietyPytania } from './crm/AnkietyPytaniaPage.jsx';
import { AnkietySzablonyOdpowiedzi } from './crm/AnkietySzablonyOdpowiedziPage.jsx';
import { AnkietyWzorceAnkiet } from './crm/AnkietyWzorceAnkietPage.jsx';
import { ArchiwumWydrukow } from './crm/ArchiwumWydrukowPage.jsx';
import { BibliotekaDokumentow } from './crm/BibliotekaDokumentowPage.jsx';
import { FakturyCykliczne } from './crm/FakturyCyklicznePage.jsx';
import { Kontakty } from './crm/KontaktyPage.jsx';
import { NowyDokument } from './crm/NowyDokumentPage.jsx';
import { OfertyHandlowe } from './crm/OfertyHandlowePage.jsx';
import { SkrzynkaOperatora } from './crm/SkrzynkaOperatoraPage.jsx';
import { SkrzynkaPocztowa } from './crm/SkrzynkaPocztowaPage.jsx';
import { Terminarz } from './crm/TerminarzPage.jsx';
import { WiecejFunkcji } from './crm/WiecejFunkcjiPage.jsx';
import { WindykacjaHistoriaZdarzen } from './crm/WindykacjaHistoriaZdarzenPage.jsx';
import { WindykacjaSchematy } from './crm/WindykacjaSchematyPage.jsx';


//grupa handel
import { Faktury } from './handel/FakturyPage.jsx';
import { FakturyProforma } from './handel/FakturyProformaPage.jsx';
import { FakturyZakupu } from './handel/FakturyZakupuPage.jsx';
import { InneHandel } from './handel/InneHandelPage.jsx';
import { InneMagazyn } from './handel/InneMagazynPage.jsx';
import { NowaFaktura } from './handel/NowaFakturaPage.jsx';
import { NowyParagon } from './handel/NowyParagonPage.jsx';
import { Paragony } from './handel/ParagonyPage.jsx';
import { PrzyjeciaZewnetrzne } from './handel/PrzyjeciaZewnetrznePage.jsx';
import { RaportBrakow } from './handel/RaportBrakowPage.jsx';
import { RezerwacjeOdbiorcy } from './handel/RezerwacjeOdbiorcyPage.jsx';
import { RodzajeUrzadzenServis } from './handel/RodzajeUrzadzenServisPage.jsx';
import { SprzedarzDedykowana } from './handel/SprzedarzDedykowanaPage.jsx';
import { UrzadzniaServis } from './handel/UrzadzniaServisPage.jsx';
//import { WiecejFunkcji } from './handel';
import { WydaniaZewnetrzne } from './handel/WydaniaZewnetrznePage.jsx';
import { Zasoby } from './handel/ZasobyPage.jsx';
import { ZleceniaCykliczne } from './handel/ZleceniaCyklicznePage.jsx';
import { Zlecenia } from './handel/ZleceniaPage.jsx';
import { ZleceniaUDostawcy } from './handel/ZleceniaUDostawcyPage.jsx';


//grupa kasaBank
import { Delegacje } from './kasaBank/DelegacjePage.jsx';
import { DokumentyKompensat } from './kasaBank/DokumentyKompensatPage.jsx';
import { DokumentyNierozliczone } from './kasaBank/DokumentyNierozliczonePage.jsx';
import { DokumentyRozliczone } from './kasaBank/DokumentyRozliczonePage.jsx';
import { HistoriaWymiany } from './kasaBank/HistoriaWymianyPage.jsx';
import { KlienciBiura } from './kasaBank/KlienciBiuraPage.jsx';
import { MagazynWalut } from './kasaBank/MagazynWalutPage.jsx';
import { OdbierzDane } from './kasaBank/OdbierzDanePage.jsx';
import { PreliminarzPlatnosci } from './kasaBank/PreliminarzPlatnosciPage.jsx';
import { RaportyKasowoBankowe } from './kasaBank/RaportyKasowoBankowePage.jsx';
import { RejestryKasowoBankowe } from './kasaBank/RejestryKasowoBankowePage.jsx';
import { RozliczeniaPodmiotu } from './kasaBank/RozliczeniaPodmiotuPage.jsx';
import { RozniceKursowe } from './kasaBank/RozniceKursowePage.jsx';
//import { WyslijDane } from './kasaBank/WyslijDanePage.jsx';
import { ZapisyKasowoBankowe } from './kasaBank/ZapisyKasowoBankowePage.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//const router = createBrowserRouter([
//    {
//        path: "/",
//        element: <App/>,
//    },
//    {
//        path: "/towar",
//        element: <Towar/>,
//    },
//    {
//        path: "/towary",
//        element: <Towary />,
//    },
//    {
//        path: "/pracownik",
//        element: <Pracownik />,
//    },
//    {
//        path: "/pracownicy",
//        element: <Pracownicy />,
//    },
//]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App/> }/>
                </Route>


                {/*grupa start*/}
                {/*<Route path='/home' element={<Layout />}>*/}
                {/*    <Route index element={<Home />} />*/}
                {/*</Route>*/}
                <Route path='/informacjeoFirmie' element={<Layout />}>
                    <Route index element={<InformacjeoFirmie />} />
                </Route>
                <Route path='/konfiguracja' element={<Layout />}>
                    <Route index element={<Konfiguracja />} />
                </Route>
                <Route path='/koniecPracy' element={<Layout />}>
                    <Route index element={<KoniecPracy />} />
                </Route>
                <Route path='/logowanie' element={<Layout />}>
                    <Route index element={<Logowanie />} />
                </Route>
                <Route path='/nowoscWwersji' element={<Layout />}>
                    <Route index element={<NowoscWwersji />} />
                </Route>
                <Route path='/odswierzKonfiguracje' element={<Layout />}>
                    <Route index element={<OdswierzKonfiguracje />} />
                </Route>
                <Route path='/wlaczNoweFunkcje' element={<Layout />}>
                    <Route index element={<WlaczNoweFunkcje />} />
                </Route>
                <Route path='/zmianaFirmy' element={<Layout />}>
                    <Route index element={<ZmianaFirmy />} />
                </Route>

                {/*grupa ogólne*/}
                <Route path='/atrybuty' element={<Layout />}>
                    <Route index element={<Atrybuty />} />
                </Route>

                <Route path='/cennik' element={<Layout />}>
                    <Route index element={<Cennik />} />
                </Route>
                <Route path='/daneOsobowe' element={<Layout />}>
                    <Route index element={<DaneOsobowe />} />
                </Route>
                <Route path='/grupyTowarowe' element={<Layout />}>
                    <Route index element={<GrupyTowarowe />} />
                </Route>
                {/*<Route path='/inne' element={<Layout />}>*/}
                {/*    <Route index element={<Inne />} />*/}
                {/*</Route>*/}
                <Route path='/kategorie' element={<Layout />}>
                    <Route index element={<Kategorie />} />
                </Route>
                <Route path='/kontrahenci' element={<Layout />}>
                    <Route index element={<Kontrahenci />} />
                </Route>
                <Route path='/nowyKontrahent' element={<Layout />}>
                    <Route index element={<NowyKontrahent />} />
                </Route>
                <Route path='/nowyTowar' element={<Layout />}>
                    <Route index element={<NowyTowar />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/przesylkiKurierskie' element={<Layout />}>
                    <Route index element={<PrzesylkiKurierskie />} />
                </Route>
                <Route path='/rabaty' element={<Layout />}>
                    <Route index element={<Rabaty />} />
                </Route>
                <Route path='/raporty' element={<Layout />}>
                    <Route index element={<Raporty />} />
                </Route>
                <Route path='/udzielPelnomocnictwa' element={<Layout />}>
                    <Route index element={<UdzielPelnomocnictwa />} />
                </Route>
                <Route path='/waluty' element={<Layout />}>
                    <Route index element={<Waluty />} />
                </Route>
                <Route path='/wiadomosciSms' element={<Layout />}>
                    <Route index element={<WiadomosciSms />} />
                </Route>
                <Route path='/wymiaryOpisuAnalitycznego' element={<Layout />}>
                    <Route index element={<WymiaryOpisuAnalitycznego />} />
                </Route>
                <Route path='/zakupPaczkiSms' element={<Layout />}>
                    <Route index element={<ZakupPaczkiSms />} />
                </Route>


                {/*grupa crm*/}                
                <Route path='/ankietyAnkietowanie' element={<Layout />}>
                    <Route index element={<AnkietyAnkietowanie />} />
                </Route>
                <Route path='/ankietyGrupyZapytan' element={<Layout />}>
                    <Route index element={<AnkietyGrupyZapytan />} />
                </Route>
                <Route path='/ankietyPytania' element={<Layout />}>
                    <Route index element={<AnkietyPytania />} />
                </Route>
                <Route path='/ankietySzablonyOdpowiedzi' element={<Layout />}>
                    <Route index element={<AnkietySzablonyOdpowiedzi />} />
                </Route>
                <Route path='/ankietyWzorceAnkiet' element={<Layout />}>
                    <Route index element={<AnkietyWzorceAnkiet />} />
                </Route>
                <Route path='/archiwumWydrukow' element={<Layout />}>
                    <Route index element={<ArchiwumWydrukow />} />
                </Route>
                <Route path='/bibliotekaDokumentow' element={<Layout />}>
                    <Route index element={<BibliotekaDokumentow />} />
                </Route>
                <Route path='/fakturyCykliczne' element={<Layout />}>
                    <Route index element={<FakturyCykliczne />} />
                </Route>
                <Route path='/kontakty' element={<Layout />}>
                    <Route index element={<Kontakty />} />
                </Route>
                <Route path='/nowyDokument' element={<Layout />}>
                    <Route index element={<NowyDokument />} />
                </Route>
                <Route path='/ofertyHandlowe' element={<Layout />}>
                    <Route index element={<OfertyHandlowe />} />
                </Route>
                <Route path='/skrzynkaOperatora' element={<Layout />}>
                    <Route index element={<SkrzynkaOperatora />} />
                </Route>
                <Route path='/skrzynkaPocztowa' element={<Layout />}>
                    <Route index element={<SkrzynkaPocztowa />} />
                </Route>
                <Route path='/terminarz' element={<Layout />}>
                    <Route index element={<Terminarz />} />
                </Route>
                <Route path='/wiecejFunkcji' element={<Layout />}>
                    <Route index element={<WiecejFunkcji />} />
                </Route>
                <Route path='/windykacjaHistoriaZdarzen' element={<Layout />}>
                    <Route index element={<WindykacjaHistoriaZdarzen />} />
                </Route>
                <Route path='/windykacjaSchematy' element={<Layout />}>
                    <Route index element={<WindykacjaSchematy />} />
                </Route>


                {/*grupa handel*/}
                <Route path='/faktury' element={<Layout />}>
                    <Route index element={<Faktury />} />
                </Route>
                <Route path='/fakturyProforma' element={<Layout />}>
                    <Route index element={<FakturyProforma />} />
                </Route>
                <Route path='/fakturyZakupu' element={<Layout />}>
                    <Route index element={<FakturyZakupu />} />
                </Route>
                <Route path='/inneHandel' element={<Layout />}>
                    <Route index element={<InneHandel />} />
                </Route>
                <Route path='/inneMagazyn' element={<Layout />}>
                    <Route index element={<InneMagazyn />} />
                </Route>
                <Route path='/nowaFaktura' element={<Layout />}>
                    <Route index element={<NowaFaktura />} />
                </Route>
                <Route path='/nowyParagon' element={<Layout />}>
                    <Route index element={<NowyParagon />} />
                </Route>
                <Route path='/paragony' element={<Layout />}>
                    <Route index element={<Paragony />} />
                </Route>
                <Route path='/przyjeciaZewnetrzne' element={<Layout />}>
                    <Route index element={<PrzyjeciaZewnetrzne />} />
                </Route>
                <Route path='/raportBrakow' element={<Layout />}>
                    <Route index element={<RaportBrakow />} />
                </Route>
                <Route path='/rezerwacjeOdbiorcy' element={<Layout />}>
                    <Route index element={<RezerwacjeOdbiorcy />} />
                </Route>
                <Route path='/rodzajeUrzadzenServis' element={<Layout />}>
                    <Route index element={<RodzajeUrzadzenServis />} />
                </Route>
                <Route path='/sprzedarzDedykowana' element={<Layout />}>
                    <Route index element={<SprzedarzDedykowana />} />
                </Route>
                <Route path='/urzadzniaServis' element={<Layout />}>
                    <Route index element={<UrzadzniaServis />} />
                </Route>
                {/*<Route path='/wiecejFunkcji' element={<Layout />}>*/}
                {/*    <Route index element={<WiecejFunkcji />} />*/}
                {/*</Route>*/}
                <Route path='/wydaniaZewnetrzne' element={<Layout />}>
                    <Route index element={<WydaniaZewnetrzne />} />
                </Route>
                <Route path='/zasoby' element={<Layout />}>
                    <Route index element={<Zasoby />} />
                </Route>
                <Route path='/zleceniaCykliczne' element={<Layout />}>
                    <Route index element={<ZleceniaCykliczne />} />
                </Route>
                <Route path='/zlecenia' element={<Layout />}>
                    <Route index element={<Zlecenia />} />
                </Route>
                <Route path='/zleceniaUDostawcy' element={<Layout />}>
                    <Route index element={<ZleceniaUDostawcy />} />
                </Route>


                {/*grupa kasaBank*/}
                <Route path='/delegacje' element={<Layout />}>
                    <Route index element={<Delegacje />} />
                </Route>
                <Route path='/dokumentyKompensat' element={<Layout />}>
                    <Route index element={<DokumentyKompensat />} />
                </Route>
                <Route path='/dokumentyNierozliczone' element={<Layout />}>
                    <Route index element={<DokumentyNierozliczone />} />
                </Route>
                <Route path='/dokumentyRozliczone' element={<Layout />}>
                    <Route index element={<DokumentyRozliczone />} />
                </Route>
                <Route path='/historiaWymiany' element={<Layout />}>
                    <Route index element={<HistoriaWymiany />} />
                </Route>
                <Route path='/klienciBiura' element={<Layout />}>
                    <Route index element={<KlienciBiura />} />
                </Route>
                <Route path='/magazynWalut' element={<Layout />}>
                    <Route index element={<MagazynWalut />} />
                </Route>
                <Route path='/odbierzDane' element={<Layout />}>
                    <Route index element={<OdbierzDane />} />
                </Route>
                <Route path='/preliminarzPlatnosci' element={<Layout />}>
                    <Route index element={<PreliminarzPlatnosci />} />
                </Route>
                <Route path='/raportyKasowoBankowe' element={<Layout />}>
                    <Route index element={<RaportyKasowoBankowe />} />
                </Route>
                <Route path='/rejestryKasowoBankowe' element={<Layout />}>
                    <Route index element={<RejestryKasowoBankowe />} />
                </Route>
                <Route path='/rozliczeniaPodmiotu' element={<Layout />}>
                    <Route index element={<RozliczeniaPodmiotu />} />
                </Route>
                <Route path='/rozniceKursowe' element={<Layout />}>
                    <Route index element={<RozniceKursowe />} />
                </Route>
                {/*<Route path='/WyslijDanePage' element={<Layout />}>*/}
                {/*    <Route index element={<WyslijDanePage />} />*/}
                {/*</Route>*/}
                <Route path='/zapisyKasowoBankowe' element={<Layout />}>
                    <Route index element={<ZapisyKasowoBankowe />} />
                </Route>


                {/*<Route path='/towar' element={<Layout />}>*/}
                {/*    <Route index element={<Towar/>} />*/}
                {/*</Route>*/}
                {/*<Route path='/towary' element={<Layout />}>*/}
                {/*    <Route index element={<Towary />} />*/}
                {/*</Route>*/}
                {/*<Route path='/pracownik' element={<Layout />}>*/}
                {/*    <Route index element={<Pracownik />} />*/}
                {/*</Route>*/}
                {/*<Route path='/pracownicy' element={<Layout />}>*/}
                {/*    <Route index element={<Pracownicy />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);