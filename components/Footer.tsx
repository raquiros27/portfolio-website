const email = "raquidel27@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-ink px-6 py-14 text-paper">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-medium">Raquel Quirós Delgado</p>
            <p className="mt-1 text-sm text-paper/65">Graphic design &amp; marketing</p>
            <p className="mt-4 text-xs text-paper/45">
              © {new Date().getFullYear()} Raquel Quirós Delgado
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-8">
            <a
              href={`mailto:${email}`}
              className="text-paper/80 transition-colors hover:text-paper"
            >
              {email}
            </a>
            <a href="#home" className="text-paper/55 transition-colors hover:text-paper">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
