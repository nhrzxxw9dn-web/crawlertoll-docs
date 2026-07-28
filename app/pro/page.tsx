import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { ProBuyButton } from "@/components/ProCheckout";
import { TopNav } from "@/components/TopNav";

/**
 * CrawlerToll Pro sales page (`/pro`) — task 2.0a: Pro direct sales.
 *
 * Pro is sold via Freemius, not wp.org (wp.org approval only gates the free
 * funnel). Copy follows GOVERNING.md claim discipline: v0 leads with "the
 * paywall where the content itself is the lock — payable by card or by
 * agent"; per-buyer keys are NOT claimed (they ship with CEK key-wrapping in
 * v1). "Potential revenue" framing kept honest per docs/pro-features.md.
 * Prices per docs/product/wp-plugin-v0.2.0-spec.md (£39 / £149 / from £999,
 * annual = 2 months free, 14-day trial no card).
 */

export const metadata: Metadata = {
  title: "CrawlerToll Pro — the paywall where the content itself is the lock",
  description:
    "CrawlerToll Pro for WordPress: per-path pricing, multi-rail settlement (x402 + Stripe), revenue dashboard, and sealed content — payable by card or by AI agent. 14-day free trial, no card required. £39/mo Starter.",
  alternates: { canonical: "https://crawlertoll.com/pro" },
  openGraph: {
    title: "CrawlerToll Pro — the paywall where the content itself is the lock",
    description:
      "Turn AI crawlers from free riders into paying customers. Per-path pricing, multi-rail settlement, revenue dashboard, sealed content. 14-day free trial.",
    type: "website",
  },
};

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition disabled:opacity-60";
const BTN_DARK =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition disabled:opacity-60";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition";

const FEATURES = [
  {
    title: "Per-path pricing",
    body: "Charge differently per section: /premium/* at one price, /blog/ at another. Wildcards, longest-prefix wins, flat-price fallback. Your archive and your flagship content are not worth the same toll.",
  },
  {
    title: "Multi-rail settlement",
    body: "Route each crawler to the rail that fits: x402 for agents that pay in USDC, Stripe for humans and cards. Vendor-neutral — works alongside TollBit, Skyfire, or Cloudflare Pay Per Crawl.",
  },
  {
    title: "Sealed content",
    body: "The post body is encrypted before it leaves WordPress; the key only releases against a settled payment. Previews stay indexable for SEO — the full text never leaks into excerpts, feeds, or the REST API.",
  },
  {
    title: "Revenue dashboard",
    body: "Every priced 402 is recorded: which bots, which paths, what price, trend over time. See your potential revenue per bot and per page — what you'd earn as charged crawlers start paying.",
  },
  {
    title: "Decision logs, 90 days",
    body: "Every crawler decision — allow, charge, block — with time, bot, path, action, and price. Sortable, pageable, with a retention window you control.",
  },
  {
    title: "Alerts + live catalogue",
    body: "Daily, weekly, or monthly email summaries of crawler activity, plus an auto-updating bot catalogue — new AI crawlers are covered without waiting for a plugin release.",
  },
];

const TIERS = [
  {
    id: "starter" as const,
    name: "Starter",
    price: "£39",
    tagline: "For independent publishers putting a first price on AI access.",
    features: [
      "Per-path pricing with wildcards",
      "Multi-rail settlement (x402 + Stripe)",
      "Sealed content engine",
      "Revenue dashboard + decision logs",
      "Auto-updating bot catalogue",
      "Email support, 1 business day",
    ],
  },
  {
    id: "standard" as const,
    name: "Standard",
    price: "£149",
    tagline: "For publications where AI traffic is a line item, not a curiosity.",
    featured: true,
    features: [
      "Everything in Starter",
      "Unlimited per-path pricing rules",
      "Daily, weekly + monthly email alerts",
      "90-day decision history with retention control",
      "Weekly summary report",
      "Priority support",
    ],
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    price: "from £999",
    tagline: "For networks, agencies, and multi-site publishers.",
    features: [
      "Everything in Standard",
      "Incident-response SLA",
      "Custom bot-catalogue additions",
      "Dedicated Slack channel",
      "Founder-led integration support",
    ],
  },
];

const STEPS = [
  {
    title: "Install the free plugin",
    body: "From wp.org: Plugins → Add New → “CrawlerToll”. Detection, RSL policy, and flat-price 402s work immediately — no account needed.",
  },
  {
    title: "Start the trial or buy Pro",
    body: "Checkout is handled by Freemius (Stripe underneath, EU VAT included). You get a license key and the Pro download by email.",
  },
  {
    title: "Upload, activate, paste the key",
    body: "The Pro tabs appear under Settings → CrawlerToll: Pricing, Rails, Revenue, Logs. Set your first per-path price and you're charging.",
  },
];

const FAQ = [
  {
    q: "Do you take a cut of my toll revenue?",
    a: "No. Payments settle directly to your Stripe account or your x402 wallet — CrawlerToll never holds funds and never takes a percentage of your content revenue. Pro is a flat monthly subscription for the plugin, the catalogue updates, and the dashboard.",
  },
  {
    q: "What does the free version do vs Pro?",
    a: "Free (on wp.org): detection of 30+ AI crawlers, RSL 1.0 policy enforcement, flat-price HTTP 402 offers, and the sealed-content engine. Pro adds per-path pricing, per-crawler rail routing, the revenue dashboard, decision logs with 90-day history, email alerts, and the auto-updating catalogue. Free is a real product, not a crippled demo — Pro is the revenue tooling on top.",
  },
  {
    q: "Does “potential revenue” mean real money?",
    a: "The revenue dashboard records every priced 402 your site issues — the price, the bot, the path. That's the demand signal: what you'd earn as charged crawlers start paying. Agents paying over x402 are settling today; the wider shift of AI companies paying for access is exactly what this infrastructure positions you for. We show you the numbers and let them speak.",
  },
  {
    q: "Will this hurt my SEO?",
    a: "No. Sealed posts serve a public preview that stays crawlable and indexable, with paywall structured data (JSON-LD) so search engines understand the setup. The sealed body is withheld from excerpts, feeds, and the REST API — consistently, for every non-paying reader.",
  },
  {
    q: "What if I already use Cloudflare's pay-per-crawl or TollBit?",
    a: "They can coexist. Edge services like Cloudflare's gateway move money at the CDN layer; CrawlerToll is everything above the money — the content sealing, the per-path pricing, the license terms, the dashboard — and it works behind any CDN or none. Rail routing is per-crawler, so mixed setups are a normal configuration.",
  },
  {
    q: "How does the trial work?",
    a: "14 days of full Pro, no card required. At the end, subscribe from the customer portal or let it lapse — the plugin simply falls back to the free feature set. Nothing breaks, nothing is locked away from you retroactively.",
  },
];

export default function ProPage() {
  return (
    <>
      <TopNav />

      {/* Hero */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
              CrawlerToll Pro for WordPress &middot; 14-day free trial
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6 leading-[1.1]">
              The paywall where the content itself is the lock.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mb-8">
              CrawlerToll seals your premium posts at the content layer — crawlers and casual readers get the preview, paying customers get the key. Payable <strong>by card</strong> (Stripe) or <strong>by AI agent</strong> (x402). Pro turns that lock into a revenue tool: per-path pricing, per-crawler settlement rails, and a dashboard that shows you the money.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ProBuyButton tier="starter" className={BTN_PRIMARY}>
                Start 14-day free trial →
              </ProBuyButton>
              <a
                href="https://wordpress.org/plugins/crawlertoll/"
                target="_blank"
                rel="noopener"
                className={BTN_GHOST}
              >
                Get the free plugin first
              </a>
              <span className="text-sm text-slate-500 dark:text-slate-500">No card required for the trial.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              From “stop the bots” to “bill the bots.”
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The free plugin detects 30+ AI crawlers, applies your RSL policy, and answers 402 Payment Required at one flat price. Pro is everything that turns that enforcement into revenue.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-5"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              Flat monthly. No cut of your tolls.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              CrawlerToll never takes a percentage of what your content earns — payments settle directly to your Stripe account or your wallet. Every tier starts with a <strong>14-day free trial, no card required</strong>.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 items-stretch">
            {TIERS.map((t) => (
              <div
                key={t.id}
                className={`relative rounded-lg border bg-white dark:bg-slate-900/50 p-6 flex flex-col ${
                  t.featured
                    ? "border-blue-600 dark:border-blue-500 ring-1 ring-blue-600 dark:ring-blue-500"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 whitespace-nowrap">
                    Most popular
                  </span>
                )}
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t.name}</h3>
                <div className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-mono">
                  {t.price}
                  <span className="text-base text-slate-500 dark:text-slate-400 font-normal">/mo</span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 min-h-[2.6em]">{t.tagline}</p>
                <ul className="mt-4 mb-6 flex flex-col gap-2 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                      <span className="text-blue-600 dark:text-blue-400 shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {t.id === "enterprise" ? (
                  <a
                    href="mailto:hello@crawlertoll.com?subject=CrawlerToll%20Pro%20Enterprise"
                    className={`${BTN_GHOST} w-full`}
                  >
                    Talk to us
                  </a>
                ) : (
                  <ProBuyButton
                    tier={t.id}
                    className={`${t.featured ? BTN_PRIMARY : BTN_DARK} w-full`}
                  >
                    Start free trial
                  </ProBuyButton>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-500">
            Annual pre-pay = 2 months free &middot; EU VAT handled at checkout &middot; Cancel anytime from the customer portal
          </p>

          {/* Purchase confirmation — revealed by the Freemius purchase_completed callback */}
          <div
            id="ct-bought"
            className="hidden mt-8 rounded-lg border border-green-600 dark:border-green-500 bg-white dark:bg-slate-900/50 p-6"
          >
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">
              ✓ Purchase complete — welcome aboard.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              Check your inbox: Freemius just sent your <strong>license key</strong> and a download link for the Pro plugin. Install it alongside the free version (it deactivates automatically), then go to <strong>Settings → CrawlerToll → Account</strong> and paste the key. The Pricing, Rails, Revenue, and Logs tabs unlock immediately. Questions?{" "}
              <a className="text-blue-600 dark:text-blue-400 hover:underline" href="mailto:hello@crawlertoll.com">
                hello@crawlertoll.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              Live on your site in about ten minutes.
            </h2>
          </div>
          <ol className="flex flex-col gap-6 max-w-2xl">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex-none w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 flex items-center justify-center font-mono text-sm text-blue-600 dark:text-blue-400">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">{s.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
              The honest answers.
            </h2>
          </div>
          <div className="flex flex-col gap-3 max-w-3xl">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 px-5 py-4"
              >
                <summary className="cursor-pointer font-semibold text-slate-900 dark:text-slate-100 list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-normal group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
