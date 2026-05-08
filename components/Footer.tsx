import { Terminal } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-border bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-text-muted">
          <Terminal size={13} className="text-accent-primary" />
          <span className="font-mono text-xs">
            {siteConfig.name.toLowerCase().replace(" ", ".")} &copy; {year}
          </span>
        </div>
        <p className="font-mono text-xs text-text-muted">
          Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
