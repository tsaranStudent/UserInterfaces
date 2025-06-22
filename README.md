# SystemERP – Aplikacja webowa ERP (React + Vite + Bootstrap)

SystemERP to eksperymentalna aplikacja webowa klasy ERP, stworzona jako projekt edukacyjny inspirowany systemem Comarch Optima. 
Projekt wykorzystuje React i Vite do stworzenia modularnego, skalowalnego systemu do zarządzania zasobami firmy, 
zawierającego setki stron `.jsx`, rozbudowaną nawigację, dynamiczne menu oraz wstępną obsługę ciemnego motywu i tłumaczeń.




## Główne założenia

- Wzorowanie się na strukturze i logice Comarch Optima
- Frontend-only – bez zaplecza serwerowego
- Setki stron `.jsx` zgrupowane w folderach modułowych (handel, CRM, księgowość itd.)
- Obsługa wielu języków (PL/EN) z tłumaczeniami w plikach `.json`
- Routing z podziałem na sekcje i dynamiczny pasek nawigacyjny
- Eksperymentalny ciemny motyw
- Koncentracja na strukturze kodu, nie na danych

## Technologie

- React + React Router DOM – logika aplikacji i routing
- Vite – szybkie bundlowanie projektu
- React-Bootstrap – UI oparte na Bootstrap 5
- i18next – internacjonalizacja, tłumaczenia PL/EN
- ESLint + Prettier – kontrola jakości kodu
- JSON – struktury tłumaczeń (i18n/locales/pl.json, en.json)

## Moduły aplikacji

Struktura kodu zawiera ponad 200 plików .jsx, pogrupowanych tematycznie:

Start:
- Strona główna
- Informacje o firmie
- Konfiguracja
- Zmiana firmy
- Odśwież konfigurację
- Włącz nowe funkcje
- Nowości w wersji
- Koniec pracy
- Logowanie

Handel:
- Faktury sprzedaży i zakupu
- Faktury proforma, paragony
- Przyjęcia i wydania zewnętrzne
- Nowa faktura / paragon
- Zlecenia cykliczne i jednorazowe
- Raport braków, zasoby magazynowe
- Rezerwacje odbiorców, sprzedaż dedykowana
- Urządzenia serwisowe

CRM:
- Kontakty i skrzynka operatora
- Skrzynka pocztowa
- Oferty handlowe, terminarz
- Faktury cykliczne
- Biblioteka dokumentów
- Windykacja: historia zdarzeń, schematy
- Ankiety: pytania, wzorce, grupy zapytań, szablony

Księgowość:
- Dokumenty źródłowe i księgowe
- Zapisy KPiR, środki trwałe, wyposażenie
- Deklaracje CIT, PIT
- Spis z natury, inwentaryzacja, ewidencja
- Samochody i dokumentacja

Kasa/Bank:
- Preliminarz płatności
- Rejestry kasowo-bankowe, zapisy kasowe
- Rozliczenia podmiotów
- Raporty, kompensaty, różnice kursowe
- Historia wymiany walut
- Magazyn walut
- Import/eksport danych z systemami bankowymi

Kadry i płace:
- Kadry, pracownicy, struktura organizacyjna
- Nowy pracownik, listy płac
- PIT pracowników, PPK, PFRON, ZUS
- PKZP, wpłaty i deklaracje
- Deklaracje roczne i załączniki PIT

Widok / Personalizacja:
- Czcionki, kompozycje widoków
- Ustawienia okien (ogólne, import, eksport)
- Personalizacja układów ekranów

Ogólne:
- Kontrahenci, nowy kontrahent
- Towary, nowy towar
- Kategorie, grupy towarowe, cenniki
- Rabaty, atrybuty, waluty
- Przesyłki kurierskie, pracownicy
- Dane osobowe, raporty
- Wiadomości SMS, zakup pakietów
- Udzielanie pełnomocnictwa
- Wymiary opisu analitycznego

Rejestry VAT / JPK:
- Ewidencje rejestrów VAT
- Deklaracje VAT-7, VAT-UE, VAT-9M, JPK
- Struktura zakupów, wiadomości od klientów
- Historia wymiany danych
- Import JPK do rejestrów
- Wysyłka i odbiór danych

Pomoc:
- Pomoc – jak zacząć
- FAQ, filmy instruktażowe
- System obsługi zdarzeń
- Rejestracja programu, zdalna pomoc
- O programie
- Personalizowana strona użytkownika

## Tłumaczenia i języki

Aplikacja posiada mechanizm tłumaczeń z użyciem react-i18next.

- Obsługiwane języki: polski, angielski
- Tłumaczenia przechowywane w plikach JSON:
  - i18n/locales/pl.json
  - i18n/locales/en.json
- Komponent LanguageManager pozwala na przełączanie języka w interfejsie

## Tryb ciemny

W aplikacji znajduje się przełącznik trybu ciemnego (ThemeManager), jednak:

- Tryb ciemny działa tylko częściowo
- Wiele komponentów nie posiada pełnego wsparcia stylów
- Ze względu na ograniczony czas, funkcja została zaimplementowana w wersji roboczej

## Wyzwania i ograniczenia

- Bardzo duża liczba plików `.jsx` utrudnia refaktoryzację
- Brak backendu – tylko warstwa front-end (mock-up)
- Częściowa implementacja trybu ciemnego
- Ręczna konfiguracja wielu tras i komponentów
- Brak testów jednostkowych
- Konieczność refaktoryzacji do TypeScript w przyszłości

## Uruchamianie projektu

Instalacja zależności:

npm install

Uruchomienie aplikacji w trybie deweloperskim:

npm run dev

Budowanie wersji produkcyjnej:

npm run build

## Możliwości dalszego rozwoju

- Połączenie z backendem (REST API lub GraphQL)
- Wprowadzenie TypeScript
- Poprawa działania trybu ciemnego
- Automatyzacja generowania tras
- Refaktoryzacja i optymalizacja struktury folderów
- Testy jednostkowe komponentów

## Autor projektu

Tomasz S.

GitHub: https://github.com/tomeks-dev (przykład – podmień na właściwy jeśli inny)

## Inspiracja

Projekt inspirowany został systemem Comarch Optima – zarówno pod względem struktury modułów, jak i typowych funkcjonalności stosowanych w firmach księgowych i handlowych w Polsce.

## Licencja

Projekt ma charakter edukacyjny. Nie zawiera rzeczywistych danych, nie posiada backendu i nie jest przeznaczony do wdrożeń produkcyjnych bez dalszych prac.
