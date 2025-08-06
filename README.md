# 🧩 Multi-site, Multi-language Static Website with Next.js

This project is a **Next.js** setup designed to serve multiple single-page websites (e.g., `/product`, `/saas`, `/`) each with **multi-language support** (e.g., `/en`, `/fr`). It's optimized for **static hosting** (via `next export`) and supports **clean URLs** without clutter like `/site/` in the path.

---

## ✅ Features

- 🧩 Multiple sites from one codebase (`main`, `product`, `saas`)
- 🌍 Multi-language support (`/en`, `/fr`)
- 🔁 Redirects to default language (e.g., `/product` → `/product/en`)
- 🧼 Clean URLs using rewrites (no `/site/` visible)
- ⚡ Fully static-exportable (`next export`)
- 🎨 Different templates per site

---

## 🏗️ Folder Structure

```
src/
├── pages/
│   ├── [lang]/index.tsx              → `/en`, `/fr` (main site)
│   └── site/
│       └── [site]/[lang]/index.tsx   → `/product/en`, `/saas/fr`
├── components/
│   └── templates/                    → Shared + per-site templates
├── sites/
│   ├── main/en.ts                    → Static content per site/language
│   ├── product/fr.ts
│   └── saas/en.ts
├── utils/
│   └── getSiteContent.ts
└── next.config.ts
```

---

## 🚦 Routing Overview

| URL           | Description                |
| ------------- | -------------------------- |
| `/`           | Redirects to `/en`         |
| `/en`, `/fr`  | Main website in language   |
| `/product`    | Redirects to `/product/en` |
| `/product/en` | Product site (English)     |
| `/saas/fr`    | SaaS site (French)         |

---

## 🔧 Setup Instructions

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run dev server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Export static site**:

   ```bash
   npm run export
   ```

   Output will be in the `out/` directory, ready for Netlify, GitHub Pages, etc.

---

## 🔁 Configuration: `next.config.ts`

- **Redirects**:
  - `/` → `/en`
  - `/product` → `/product/en`
  - `/saas` → `/saas/en`
- **Rewrites**:
  - `/product/en` → `/site/product/en` (invisible to the user)

---

## 🚀 Deployment

- Export your app with `next export`
- Upload the `out/` directory to any static hosting (e.g., Netlify, Vercel, S3)

---

## 🧠 Notes

- Do **not** use the App Router or `/app` directory — this uses the Pages Router.
- Use TypeScript + absolute imports via `@/` alias
- Separate templates are used for `main` vs other sites

---

## 📄 License

MIT
