# COMPLY — e-invoicing platform frontend

An interactive React frontend built from the supplied COMPLY design references. This is a **design and workflow prototype**, not a production tax platform.

## Run

```bash
npm ci
npm run dev
```

Open the printed URL. The Vite server binds to `0.0.0.0` and permits `.e2b.app` preview hosts. Hash-based routing works on static hosting without a rewrite service.

```bash
npm run build
npm run preview
```

The deployable static files are generated in `dist/` (not committed). Deploy at the domain root because assets use root-relative paths. No environment variables or server credentials are required.

## Explore

- `/#/` — public website
- `/#/auth/sign-in` — account access; enter a fictional email and any fictional password
- `/#/auth/create-account` — demo registration; verification code **482916**
- `/#/onboarding/welcome` — five-step guided setup
- `/#/app/dashboard` — populated workspace
- `/#/app/dashboard?state=first-run` — supplied first-run dashboard family
- `/#/app/settings/plans` — subscription and billing

Use **Preview states** in the workspace to explore loading, stale-data, no-data, no-results, access-denied, unknown-submission, service-unavailable and export-failed designs. The selector on account screens exposes all 13 authentication states.

## Included

All 12 sidebar destinations: Dashboard, Invoices, Exceptions, Inbound, Reconciliation, Suppliers, Customers, Items, VAT Return, Integrations, Audit Log and Settings. Seller-issued credit/debit notes live within Invoices rather than adding a new sidebar item.

Public pages cover the landing page, product, audiences, supplier risk, pricing, resources/articles/glossary, readiness request and confirmation, trust, about, legal/cookie preferences, status, 404, 500 and maintenance.

Account flows include sign-in, account creation, verification, password recovery, expired links, invitations, revoked invitations and lockout. Onboarding includes identity lookup, details, accounting source, transmission and team.

Billing includes plans and annual/monthly switching, usage, methods, checkout, payment confirmation, billing history and subscription cancellation/resumption.

### Working local interactions

- Create invoice drafts with line-item totals and VAT calculations; retain them after refresh.
- Search/filter invoices; global search forwards the query to the register.
- Simulate clearance results; prevent blind resend after an unknown outcome.
- Record externally received payments separately from invoice clearance. No money is moved.
- Create linked credit/debit note drafts against cleared originals. No refund or confirmed balance adjustment is generated.
- Add/edit customers, suppliers and items; save sample business profile in browser storage.
- Review sample exceptions/inbound invoices; run an illustrative reconciliation.
- Export real CSV files for sample invoices, receipts, billing, records, audit and VAT working papers. Formula-like cells are escaped.
- Explore annual/monthly checkout with calculated VAT; all charges are simulated.
- Reset local workspace fixtures in Settings.

Some review, integration and onboarding interactions are transient UI demonstrations, not persisted business operations. Dashboard, reconciliation, VAT, usage and audit metrics are fixed illustrative datasets, not derived financial ledgers.

## Important production boundaries

There is **no backend**, actual authentication, permission enforcement, email delivery, provider connection, registry lookup, certificate registration, NRS submission, webhook delivery, tax filing or payment collection. A Live display-mode selection remains a simulation. Do not enter real credentials, card information, secrets or sensitive financial records.

The unknown-submission state does not become a rejection, and an unavailable service leaves the invoice unsubmitted. Clearance, payment, buyer response and delivery remain separate. Cleared originals are read-only in the UI; notes remain separate draft adjustments. Missing supplier IRNs do not establish supplier registration status.

Before production: implement server-side authentication/RBAC, database, validated tax rules, immutable audit records, a confirmed provider API and contract, safe idempotent submission/status recovery, server-held secrets, signed webhooks, tokenised hosted payment fields, confirmed legal/commercial policies, accessibility review and security testing. PDF invoices/receipts and bulk CSV ingestion are not implemented; current downloads are clearly labelled CSV.

## Design provenance

The visual system follows the supplied 53 images / 52 distinct states: condensed COMPLY mark, green-grey sidebar wash, navy/mint active navigation, lavender workspace, rounded white cards, muted tables and dark-green controls. Unknown-submission/service-unavailable screens retain the alternate plain sidebar family.

The original logo was cropped and made transparent from the supplied sign-in image. Photographic/3D backgrounds in `public/assets/` are **AI-generated approximations**, not original design assets. Exact pixel parity is not claimed. Business-details step 2, credit/debit-note layouts, management screens and most normal main-application screens extend the reference pattern where no dedicated screen was supplied. Prototype safety labels and consistent arithmetic intentionally replace unverified live claims/inconsistent billing fixtures.

Inter font files are bundled locally (SIL Open Font License); no external font/CDN connection is required.

## Checks

With the development server running on port 5173:

```bash
npx playwright install --with-deps chromium
npm test
```

The smoke suite checks 68 routes at desktop (1440px) and mobile (390px), captures selected screenshots locally and checks JavaScript errors/page-level overflow. The interaction suite tests 14 multi-step flows. These are smoke/functional checks, not full accessibility, security, tax or production acceptance certification.

`npm audit --omit=dev` reports no production dependency vulnerabilities at this build. The full dependency audit reports four high-severity development-chain findings in Vite → tinyglobby/fdir → picomatch (GHSA-fc5q-39xc-vjpf; the available picomatch version is affected). Do not expose this development server as production; rebuild/review the toolchain when a patched package is available. Deploy the generated static output behind normal production hosting.
