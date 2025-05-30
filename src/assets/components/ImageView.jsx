export default function ImageView({ src }) {
  return (
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src={src} alt={src.split("/").pop().split(".")[0]} />
    </div>
  );
}
