# Automation SaaS — Studio

Product-led SaaS site for subscription automation products, with a React frontend and Express + MongoDB backend.

## Stack

- **Frontend:** Vite, React 19, TypeScript, Tailwind CSS 4, Framer Motion, React Router 7
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT auth (httpOnly cookies), Stripe subscriptions

## Prerequisites

- Node.js 20+
- MongoDB running locally or a MongoDB Atlas URI

## Setup

### 1. Frontend

```bash
npm install
```

### 2. Backend

```bash
cd server
npm install
cp .env.example .env
# Edit server/.env with your values
```

Required env vars in `server/.env`:

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing JWT cookies |
| `CLIENT_URL` | Frontend URL (default `http://localhost:5173`) |
| `STRIPE_SECRET_KEY` | Stripe test secret key (optional until checkout testing) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (optional until webhook testing) |

### 3. Seed products

```bash
cd server
npm run seed
```

This populates three automation products with Starter / Pro / Agency tiers. Stripe Price IDs default to placeholders until you add real test Price IDs via `.env` or the Stripe Dashboard.

## Running locally

**Terminal 1 — frontend (port 5173):**

```bash
npm run dev
```

**Terminal 2 — backend (port 3001):**

```bash
npm run dev:server
```

The Vite dev server proxies `/api` requests to `http://localhost:3001`.

**Or run both concurrently:**

```bash
npm run dev:all
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/products` | Product grid |
| `/products/:slug` | Product detail + subscribe |
| `/pricing` | Unified pricing comparison |
| `/custom-services` | Bespoke services |
| `/about` | About / mission |
| `/contact` | Inquiry form |
| `/login`, `/register` | Auth |
| `/dashboard` | Subscriptions & billing (protected) |

Legacy redirects: `/services` → `/custom-services`, `/case-studies` → `/products`.

## Stripe (test mode)

1. Create Products and recurring Prices in the [Stripe Dashboard](https://dashboard.stripe.com/test/products).
2. Add Price IDs to `server/.env` (see `.env.example` keys) or update MongoDB directly.
3. Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in `server/.env`.
4. Forward webhooks locally: `stripe listen --forward-to localhost:3001/api/webhooks/stripe`

Until Stripe is configured, auth, products, inquiries, and the dashboard work; checkout and billing portal return a clear 503 message.

## API overview

- `POST /api/auth/register|login|logout`, `GET /api/auth/me`
- `GET /api/products`, `GET /api/products/:slug`
- `POST /api/checkout/create-session` (auth)
- `POST /api/webhooks/stripe`
- `GET /api/subscriptions/me`, `POST /api/billing/portal` (auth)
- `POST /api/inquiries`
- `GET /api/admin/inquiries|subscriptions` (admin role)

## Design

Classic calm theme: Fraunces headings, Inter body, cream / navy / warm terracotta palette (see `src/index.css`).
