# 📊 React Spreadsheet UI  (https://react-spreadsheet-ui-one.vercel.app/)

A dynamic spreadsheet-style interface built with **React**, **Tailwind CSS**, and **TypeScript**, inspired by tools like Google Sheets and Excel. Designed for managing task/job workflows with status badges, priority indicators, user tooltips, and flexible layouts.

---

## 🚀 Features

- ✅ Responsive spreadsheet table UI with headers and zones
- ✅ Custom column zone grouping (e.g. "ABC", "Answer a question", "Extract")
- ✅ Colored header backgrounds with icons
- ✅ Hover tooltips for user profiles (avatar, name, email)
- ✅ Status and priority displayed using colored badges
- ✅ Truncation + tooltip for long user/email text
- ✅ Breadcrumb navigation from `react-router-dom`
- ✅ Search field with enter key detection
- ✅ Dynamic row addition with `+` button
- ✅ Flexible empty row rendering up to total rows
- ✅ Reusable components: `TableRow`, `TableHeader`, `Badge`, `Breadcrumbs`
- ✅ Clean folder structure and modular TypeScript types

---

## 📂 Project Structure

src/
├── assets/ # Static images or icons
├── components/
│ ├── Badge.tsx # Status and priority label renderer
│ ├── Breadcrumbs.tsx # Dynamic path breadcrumbs + user info
│ ├── Spreadsheet.tsx # Main spreadsheet table UI
│ ├── TableHeader.tsx # Colored & grouped header zones
│ └── TableRow.tsx # Dynamic row rendering
├── data/
│ ├── mockData.ts # Demo data used for table rows
│ └── types.ts # TypeScript type definitions
├── App.tsx # Main App with routing
├── main.tsx # ReactDOM setup
└── index.css # Tailwind base + custom styles

## 📦 Tech Stack

- ⚛️ **React** + **TypeScript**
- 🎨 **Tailwind CSS** for styling
- 🧠 **React Icons** for rich UI
- 🔍 **React Router DOM** for navigation
- ✅ **ESLint**, **Prettier** ready (optional for linting)

---

## 🧪 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/react-spreadsheet-ui.git
cd react-spreadsheet-ui

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
