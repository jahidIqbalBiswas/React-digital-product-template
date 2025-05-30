export default function FaqItems({
  title = null,
  paraOne = null,
  paraTwo = null,
  link = null,
  linkText = null,
  endText = null,
  isExpanded = true,
}) {
  return (
    <div
      id="accordion-flush"
      dataAccordion="collapse"
      dataActiveclassNamees="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      dataInactiveclassNamees="text-gray-500 dark:text-gray-400"
    >
      <h3 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>{title}</span>
          <svg
            data-accordion-icon=""
            className="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h3>
      <div
        id="accordion-flush-body-1"
        className={isExpanded ? "" : "hidden"}
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{paraOne}</p>
          <p className="text-gray-500 dark:text-gray-400">
            {paraTwo}

            <a
              href={link}
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              {linkText}
            </a>
            {endText}
          </p>
        </div>
      </div>
    </div>
  );
}
