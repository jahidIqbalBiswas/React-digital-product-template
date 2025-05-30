export default function FooterWidget({ title = null, items = null }) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title && title}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {items &&
          items.map((item, i) => {
            return (
              <li key={item + i} className="mb-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
