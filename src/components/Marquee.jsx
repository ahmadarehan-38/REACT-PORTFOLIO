export default function Marquee({
  items,
  reverse = false,
  slow = false,
  paper = false,
  className = "",
}) {
  const row = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""} ${
        slow ? "marquee--slow" : ""
      } ${paper ? "marquee--paper" : ""} ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            <span>{item}</span>
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
