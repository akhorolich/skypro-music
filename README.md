# Skypro Music 🎧

**Коротко:** это музыкальное приложение на базе **Next.js + TypeScript**, использующее архитектуру **FSD (Feature-Sliced Design)**. Проект реализует проигрывание треков, управление плейлистом, избранным и аутентификацию.

---

## 🚀 Быстрый старт

- Установить зависимости:

```bash
npm install
```

- Запустить в режиме разработки:

```bash
npm run dev
```

- Сборка для продакшена:

```bash
npm run build
npm run start
```

- Тесты:

```bash
npm run test
npm run test:watch
npm run test:coverage
```

- Линтинг:

```bash
npm run lint
```

---

## 🧩 Используемые технологии

- **Next.js (App Router)** — серверный рендеринг и маршрутизация
- **React 19** + **TypeScript**
- **Redux Toolkit** / **react-redux** — управление состоянием
- **axios** — HTTP-клиент
- **zod** — валидация схем
- **Jest** + React Testing Library — тестирование
- **ESLint** (+ плагин Prettier) — проверка кода
- **CSS Modules** — scoped CSS
- **gh-pages** — деплой в GitHub Pages

---

## 🏛 Архитектура — Feature-Sliced Design (FSD)

Проект структурирован по принципам FSD. Кратко о слоях, которые вы увидите в `src/`:

- `app/` — точка входа приложения и маршруты (Next.js app router: `layout.tsx`, `page.tsx`)
- `entities/` — бизнес-сущности (например, `tracks`, `auth`) с моделью, API и логикой
- `features/` — отдельные фичи / сценарии использования, которые комбинируют сущности и UI
- `widgets/` — независимые блоки интерфейса (собираются из фич и shared)
- `shared/` — переиспользуемые UI-компоненты, утилиты, API-обертки
- `app/providers/` и `app/api/` — провайдеры (redux), маршруты API (Next.js)

Фрагмент дерева проекта (основные директории):

```
src/
├─ app/
│  ├─ (playlist)/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
├─ entities/
│  ├─ tracks/
│  └─ auth/
├─ features/
│  ├─ audio/
│  └─ filter/
├─ widgets/
│  ├─ centerblock/
│  ├─ navigation/
│  ├─ right-sidebar/
│  └─ trackbar/
└─ shared/
   ├─ api/
   ├─ lib/
   ├─ model/
   ├─ redux/
   └─ ui/
```

---

## 🧭 Основные скрипты

- `npm run dev` — запуск dev-сервера (Next.js)
- `npm run build` — сборка проекта
- `npm run start` — запуск production-сервера
- `npm run lint` — запуск ESLint
- `npm run test` — запуск Jest
- `npm run deploy` — подготовка и деплой в GitHub Pages



## 📎 Полезные команды

- Просмотреть покрытие тестов:

```bash
npm run test:coverage
```

- Запуск dev с инспектором:

```bash
npm run dev-inspect
```
