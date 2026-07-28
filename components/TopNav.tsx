import Link from "next/link";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-blue-600 to-pink-600" aria-hidden />
          CrawlerToll
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/docs" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">Docs</Link>
          <Link href="/docs/getting-started/wordpress" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">WordPress</Link>
          <Link href="/docs/standards" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">Standards</Link>
          <Link href="/docs/getting-started/express" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">Get started</Link>
          <a href="https://github.com/charthouse-ltd" target="_blank" rel="noopener" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
