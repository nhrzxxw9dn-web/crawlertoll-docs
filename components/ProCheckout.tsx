"use client";

/**
 * Freemius checkout island for the /pro sales page.
 *
 * Pro is sold via Freemius (NOT wp.org — wp.org only gates the free funnel).
 * Plugin id + public key match the premium build's Freemius init config
 * (deploy/crawlertoll-wp/crawlertoll.php). `plans`: Freemius dashboard →
 * Plans; null opens checkout on the default plan — paste real ids to
 * deep-link each tier's button. Checkout failure (ad blocker, offline)
 * falls back to mailto: a lost sale is worse than an email.
 */

import { useCallback, useState } from "react";

const CT_FREEMIUS = {
  plugin_id: "32506",
  public_key: "pk_30f053472ea39ed708f0b537b1a50",
  plans: { starter: null as string | null, standard: null as string | null },
};

declare global {
  interface Window {
    FS?: {
      Checkout?: {
        configure: (cfg: Record<string, unknown>) => { open: (args: Record<string, unknown>) => void };
      };
    };
  }
}

let fsLoader: Promise<NonNullable<Window["FS"]>> | null = null;
function loadFreemius(): Promise<NonNullable<Window["FS"]>> {
  if (window.FS?.Checkout) return Promise.resolve(window.FS);
  if (!fsLoader) {
    fsLoader = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://checkout.freemius.com/js/v1/";
      s.onload = () => (window.FS?.Checkout ? resolve(window.FS) : reject(new Error("freemius unavailable")));
      s.onerror = () => reject(new Error("freemius script blocked"));
      document.head.appendChild(s);
      // A hung script load must not strand the buy button — treat as blocked.
      setTimeout(() => reject(new Error("freemius load timed out")), 8000);
    });
  }
  return fsLoader;
}

export type ProTier = "starter" | "standard";

export function ProBuyButton({
  tier,
  className = "",
  children,
}: {
  tier: ProTier;
  className?: string;
  children: React.ReactNode;
}) {
  const [busy, setBusy] = useState(false);
  const buy = useCallback(async () => {
    setBusy(true);
    try {
      const FS = await loadFreemius();
      const handler = FS.Checkout!.configure({
        plugin_id: CT_FREEMIUS.plugin_id,
        public_key: CT_FREEMIUS.public_key,
      });
      const planId = CT_FREEMIUS.plans[tier];
      handler.open({
        name: "CrawlerToll Pro",
        licenses: 1,
        ...(planId ? { plan_id: planId } : {}),
        purchase_completed: () => {
          document.getElementById("ct-bought")?.classList.remove("hidden");
          document.getElementById("ct-bought")?.scrollIntoView({ behavior: "smooth", block: "center" });
        },
      });
    } catch {
      window.location.href = `mailto:hello@crawlertoll.com?subject=CrawlerToll%20Pro%20${encodeURIComponent(tier)}`;
    } finally {
      setBusy(false);
    }
  }, [tier]);
  return (
    <button type="button" onClick={buy} disabled={busy} className={className}>
      {busy ? "Opening checkout…" : children}
    </button>
  );
}
