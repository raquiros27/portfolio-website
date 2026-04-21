type Props = {
  className?: string;
  centered?: boolean;
};

/** Static accent — avoids Framer SSR opacity/transform issues on the rule line. */
export default function SectionAccentLine({
  className = "",
  centered = false,
}: Props) {
  return (
    <div
      className={`mt-6 h-px w-full max-w-xs bg-gradient-to-r from-terracotta/65 via-terracotta/35 to-transparent ${centered ? "mx-auto" : ""} ${className}`}
      aria-hidden
    />
  );
}
