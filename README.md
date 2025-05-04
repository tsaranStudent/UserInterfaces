# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Projekt - Aplikacja SystemERP (React + Bootstrap)

# Komponent Layout

Główny komponent nawigacyjny aplikacji, który zawiera:

- Responsywną nawigację z wykorzystaniem React-Bootstrap
- Dynamiczne menu rozwijane z podziałem na sekcje (Home, Handel, CRM, Księgowość itp.)
- System grupowania ścieżek i wyświetlania odpowiednich pasków nawigacyjnych
- Wyszukiwarkę w navbarze
- Obsługę routingu przy użyciu React Router
- Kontener dla treści strony (Outlet)
- Stopkę aplikacji

## Funkcjonalności

- Automatyczne wykrywanie aktualnej ścieżki i wyświetlanie odpowiedniego paska nawigacyjnego
- Rozbudowane menu z podziałem na logiczne kategorie
- Responsywny design dostosowany do różnych rozmiarów ekranu
- Spójny układ dla całej aplikacji

## Wykorzystane technologie

- React
- React-Bootstrap
- React Router

## Podstrony:
1. **Faktury** - Przegląd i dodawanie faktur sprzedaży.
2. **Paragony** - Lista paragonów i możliwość ich wystawienia.
3. **Przyjęcia zewnętrzne** - Rejestrowanie dostaw do magazynu.
4. **Zlecenia** - Zlecenia serwisowe / produkcyjne.
5. **Raport braków** - Raportowanie brakujących towarów.
6. **Zasoby** - Widok aktualnych zasobów magazynowych.

## Funkcje:
- Routing między stronami (react-router-dom)
- Nawigacja w menu (Navbar)
- Bootstrap do stylizacji
- Każda podstrona posiada unikalną treść

## Autor:
Tomek S.