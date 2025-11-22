export default function GridLineVertical({ className = "", offset = "100px" }) {
  return (
    <div
      className={`absolute top-0 h-full border-l border-white/10 ${className}`}
      style={{ left: offset }}
    />
  );
}
