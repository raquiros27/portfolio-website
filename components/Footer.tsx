const email = "raquidel27@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink px-6 py-14 text-paper">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-medium">Raquel Quirós Delgado</p>
            <p className="mt-1 text-sm text-paper/65">Graphic design &amp; marketing</p>
            <p className="mt-3 text-sm text-paper/80">
              Open to freelance collaborations and full-time opportunities.
            </p>
            <p className="mt-4 text-xs text-paper/45">
              © {new Date().getFullYear()} Raquel Quirós Delgado
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full border border-paper/25 px-4 py-2 text-paper/85 transition-colors hover:border-paper/40 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/75 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Email: {email}
            </a>
            <a
              href="#home"
              className="text-paper/55 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/75 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
