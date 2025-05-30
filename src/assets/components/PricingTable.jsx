import ListIcon from "../components/ListIconRegular";
import TextView from "../components/TextView";
import Button from "../components/Button";
function List(options) {
  return (
    <>
      {Object.keys(options).map((key) => {
        return (
          <li key={key} class="flex items-center space-x-3">
            <ListIcon />
            {options[key].value ? (
              <span>
                {options[key].beforeValue}
                <span class="font-semibold">{options[key].value}</span>
              </span>
            ) : (
              <span>{options[key].text}</span>
            )}
          </li>
        );
      })}
    </>
  );
}
export default function PricingTable({
  name,
  caption,
  price,
  subscriptionTime,
  options = {},
}) {
  const tableContent = {
    textViewContent: {
      heading: name || "Starter",
      text: caption || "Best option for personal use & for your next project.",
    },
    price: price || "$29",
    subscriptionTime: subscriptionTime || "/month",
    button: {
        text: "Get started",
        uri: "#",
        style:
            "text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900",
    }
  };

  return (
    <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <TextView
        {...tableContent.textViewContent}
        headingCustomCss={{ fontWeight: 400 }}
        textCustomCss={{ fontSize: "18px" }}
      />
      <div class="flex items-baseline justify-center my-8">
        <span class="mr-2 text-5xl font-extrabold">{tableContent.price}</span>
        <span class="text-gray-500 dark:text-gray-400">
          {tableContent.subscriptionTime}
        </span>
      </div>
      <ul role="list" class="mb-8 space-y-4 text-left">
        <List {...options} />
      </ul>
      <Button text={tableContent.button.text} style={tableContent.button.style} uri="#" />
    </div>
  );
}
