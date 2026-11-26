# Keepsake — лабораторна робота №9

Адаптивний лендінг незалежної дизайн-студії на Vite, Pug і SCSS. Фреймворки та UI-бібліотеки не використовуються.

> **Важливо:** дизайн є самостійною реалізацією, оскільки макет лабораторної №7 не наданий. Контакти, назви проєктів і статистика демонстраційні.

## Запуск

Потрібен Node.js 20+ і npm. Виконайте `npm install`, `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`, `npm run format`. Для повторної генерації зображень: `npm run images`.

## Архітектура

- `src/layouts/main.pug` — базовий шаблон, блоки та міксини.
- `src/pages/index.pug` — наслідування шаблону й підключення секцій.
- `src/components/` — окремі секції, шапка та футер.
- `src/data/content.pug` — масиви даних для повторюваних елементів.
- `src/mixins/_all.pug` — `btn`, `icon`, `picture`, `work-card`, `section-heading`.
- `src/styles/abstracts/` — токени, функція `rem`, міксини `mq`, `focus-ring`, `visually-hidden`.
- `src/styles/base/`, `layout/`, `components/` — модулі SCSS через `@use` і `@forward`.
- `src/assets/images/source/` — вихідні растрові зображення; `public/assets/images/` — оптимізовані файли.

## Інструменти

Vite збирає проєкт, Vituum і Pug генерують HTML, Sass компілює SCSS, PostCSS + Autoprefixer додають префікси відповідно до Browserslist, Sharp створює AVIF/WebP/JPEG у двох ширинах. Prettier форматує, Stylelint перевіряє SCSS, Husky + lint-staged перевіряють staged-файли перед комітом.

## Браузери

Останні дві версії Chrome, Firefox, Edge, Safari та iOS Safari (`.browserslistrc`).

## Оптимізація

Зображення генеруються з вихідних JPEG у форматах AVIF/WebP/JPEG з ширинами 400/800 px. Реальні розміри файлів до/після та розмір CSS потрібно виміряти після локального `npm run build`; вигадані результати не наведені.

## Публікація

Налаштований GitHub Actions workflow `.github/workflows/deploy.yml`. Створіть **власний** репозиторій `landing-keepsake-vite`, увімкніть Settings → Pages → Source: GitHub Actions і запуште гілку `main`. Адреса демо після публікації: `https://<username>.github.io/landing-keepsake-vite/`. `dist` не комітиться.

## Рекомендована історія комітів

`chore: initialize vite pug project` → `feat: add pug layouts and data` → `feat: implement responsive scss` → `feat: optimize images` → `chore: configure lint and deployment`.

## Перевірки

`npm run build`, `npm run lint`, перевірка HTML через W3C Validator, адаптивності й lazy loading у DevTools. Публікація та перевірки потребують доступного npm і GitHub.
