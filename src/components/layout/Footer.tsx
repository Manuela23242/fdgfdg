import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800">
      <div className="py-8 bg-zinc-900/50">
        <div className="nyron-container flex items-center justify-center space-x-8 text-zinc-400">
          <span className="text-zinc-300 font-medium">PayPal</span>
          <span className="text-zinc-300 font-medium">
            <span className="text-nyron-blue">Crypto</span>
            <span className="text-zinc-400">Currency</span>
          </span>
          <span className="text-zinc-300 font-medium">Card</span>
        </div>
      </div>
      <div className="py-6 bg-nyron-bg">
        <div className="nyron-container flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-semibold text-white mb-1"
            >
              Nyron
            </Link>
            <p className="text-sm text-zinc-400 mb-1">Copyright © 2025</p>
            <p className="text-xs text-zinc-600">All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/terms-of-service"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
