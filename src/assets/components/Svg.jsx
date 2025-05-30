export default function Svg({ path, viewBox = "0 0 24 24", className = ""  }) {
  return (
   <svg
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d={path} />
  </svg>
  );
}
