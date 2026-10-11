# 🛒 Bazar Dor (বাজার দর)

**A Bengali-language commodity price tracking web application for Bangladesh.**

Bazar Dor brings essential product prices, price-change indicators, product categories, and market-wise comparisons into one responsive interface.

## 📦 Repository & Deployment

- **GitHub Repository:** [srfarukahmed/dailly-bazar-a7](https://github.com/srfarukahmed/dailly-bazar-a7)
- **Live Site:** Not yet verified / deployment URL to be added
- **Developer (Git commit author):** Md. Faruk Ahmed
- **GitHub:** [@srfarukahmed](https://github.com/srfarukahmed)
- **Development email:** srfarukahmed@gmail.com


## 📋 About the Project

**Bazar Dor (বাজার দর)** is built with **Next.js 14 App Router**, **React 18**, **Tailwind CSS**, and **daisyUI**. It presents commodity prices in Bangla, including price increases/decreases, individual product details, and comparisons across sample markets in Bangladesh.

The project includes **33 locally defined sample products across 8 categories**. The code also contains a three-step API fallback utility; however, the home page currently reads local fallback data directly. Accordingly, prices displayed by the app **should not be presented as independently verified real-time market prices**.

## ✨ Features

- **Price-change highlights:** Separate sections for products with rising and falling prices.
- **Category browsing:** Explore rice, lentils, oil, vegetables, fish, meat, eggs and dairy, and spices.
- **Product details:** View product pricing, historical comparison fields, and market-wise price ranges.
- **Market comparisons:** Compare indicative minimum and maximum prices across eight sample markets.
- **Bangla-first interface:** Bengali labels and number formatting.
- **Sorting:** Browse available products by price.
- **Responsive design:** Layouts for mobile, tablet, and desktop screens.
- **Loading skeletons and toast notifications:** UI feedback components.
- **Animated price ticker:** A scrolling display of price information.
- **Email/password demo authentication:** Sign up, sign in, and sign out using browser-based local storage.
- **Mock social sign-in:** Google and GitHub sign-in buttons simulate provider accounts; they do **not** implement real OAuth.
- **Protected UI routes:** Product detail and profile screens use a client-side authentication guard.
- **Profile management:** Update display name and profile picture.
- **Static export configuration:** Next.js is configured to generate a static site.

## 🛠️ Technology Stack

| Technology | Usage |
| --- | --- |
| Next.js 14 (App Router) | Application structure, pages, and routing |
| React 18 | UI components and state |
| Tailwind CSS 3 | Utility-first styling |
| daisyUI 4 | Styled UI components and themes |
| Lucide React | Icons |
| React Hot Toast | Notifications |
| React Context API | Client-side authentication state |
| Browser localStorage | Demo account and session persistence |
| Next.js static export | Static build output |


## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Git (optional, for cloning)

### Installation

```bash
git clone https://github.com/srfarukahmed/dailly-bazar-a7.git
cd dailly-bazar-a7
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


### Production Build

```bash
npm run build
```

## 📁 Project Structure

```text
bazardor/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── not-found.js
│   ├── category/[slug]/
│   │   ├── page.js
│   │   └── CategoryClient.js
│   ├── product/[slug]/
│   │   ├── page.js
│   │   └── ProductDetailClient.js
│   ├── signin/page.js
│   ├── signup/page.js
│   ├── profile/page.js
│   └── update-profile/page.js
├── components/
│   ├── AuthGuard.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js
│   ├── PriceTicker.js
│   ├── ProductCard.js
│   └── SkeletonCard.js
├── lib/
│   ├── api.js
│   ├── auth-context.js
│   ├── bangla.js
│   ├── fallback-data.js
│   └── fetchData.js
├── auth.js
├── jsconfig.json
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 📡 Price Data & Fallbacks

The `lib/fetchData.js` utility defines the following sequence:

1. **Primary endpoint:** `https://api.api-store.workers.dev/api/bazardor`
2. **Alternative endpoint:** `https://api.api-store.workers.dev/api/bazardor/alt`
3. **Local sample data:** `lib/fallback-data.js`

The data utility falls back to bundled product data when both endpoints fail. **Important:** Not every page currently calls this utility; the home page imports the local dataset directly. Endpoint availability and data freshness have not been independently verified.

Sample market ranges in the fallback dataset are **generated from predefined price factors**, not collected as verified live quotes from those markets.

## 📚 Product Categories

| Category | Bangla | Sample products |
| --- | --- | ---: |
| Rice | চাল | 4 |
| Lentils | ডাল | 4 |
| Oil | তেল | 3 |
| Vegetables | সবজি | 5 |
| Fish | মাছ | 5 |
| Meat | মাংস | 4 |
| Eggs & Dairy | ডিম-দুধ | 4 |
| Spices | মসলা | 4 |
| **Total** | | **33** |

