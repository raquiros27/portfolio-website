type Props = {
  variant?: "cream" | "paper" | "warm";
  className?: string;
};

/**
 * Slow-drifting mesh + organic blobs. Pure CSS; respects prefers-reduced-motion in globals.css.
 */
export default function AmbientBackdrop({
  variant = "cream",
  className = "",
}: Props) {
  const meshClass =
    variant === "paper"
      ? "ambient-mesh ambient-mesh--paper"
      : variant === "warm"
        ? "ambient-mesh ambient-mesh--warm"
        : "ambient-mesh";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className={meshClass} />
      <div className="organic-blob organic-blob--a" />
      <div className="organic-blob organic-blob--b" />
    </div>
  );
}
