# Playwright TypeScript QA Framework

Безопасный демонстрационный проект для портфолио QA Automation Engineer. Тесты работают только с публичным приложением [TodoMVC](https://demo.playwright.dev/todomvc/) и не содержат рабочих URL, аккаунтов, токенов, внутренних идентификаторов или данных компании.

> **Архитектура демонстрационного проекта** основана на общих практиках, которые я применяю в автоматизации тестирования: Playwright, TypeScript, Page Object Model, fixtures, разделение smoke/regression и устойчивые ожидания. Рабочий код и данные компании не публикуются.

## Что демонстрирует проект

- Playwright + TypeScript;
- Page Object Model;
- расширяемые fixtures;
- smoke и regression-наборы;
- кросс-браузерный запуск в Chromium, Firefox и WebKit;
- устойчивые ожидания без фиксированных пауз;
- HTML-отчёт, trace, screenshots и video при падениях;
- ESLint и Prettier;
- безопасное хранение конфигурации через переменные окружения.

## Структура

```text
fixtures/     расширяемые тестовые fixtures
pages/        Page Object классы
tests/        smoke и regression сценарии
utils/        переиспользуемые вспомогательные функции
```

## Запуск

```bash
npm install
npx playwright install
npm test
```

Дополнительные команды:

```bash
npm run test:smoke
npm run test:regression
npm run test:headed
npm run test:ui
npm run report
npm run lint
```

## Безопасность

- реальные секреты хранятся только локально в `.env`;
- `.env`, отчёты, trace и видео исключены из Git;
- `.env.example` содержит только безопасный публичный URL;
- проект создан отдельно и не содержит Git-историю рабочего репозитория;
- перед публикацией рабочих наработок всегда требуется разрешение правообладателя.
