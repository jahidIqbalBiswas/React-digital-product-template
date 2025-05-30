import ServiceItem from "../components/ServiceItem.jsx";
import TextView from "../components/TextView.jsx";
function ServiceLink({text}) {
  return (
    <div>
      <a
        href="#"
        class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
      >
        {text && text}
        {text && 
        <svg
          class="w-5 h-5 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        }
      </a>
    </div>
  );
}
export default function ServiceSecTwo() {
  const headingProps = {
    heading: "Trusted by over 600 million users and 10,000 teams",
    hextraClass: null,
    text: "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers",
    textraClass: null,
  };
  const serviceItemProps = [
    {
      title: "99.99% uptime",
      text: "For Landwind, with zero maintenance downtime",
      icon: "server",
    },
    {
      title: "600M+ Users",
      text: "Trusted by over 600 milion users around the world",
      icon: "user",
    },
    {
      title: "100+ countries",
      text: "Have used Landwind to create functional websites",
      icon: "earth",
    },
    {
      title: "5+ Million",
      text: "Transactions per day",
      icon: "cart",
    },
  ]
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div class="col-span-2 mb-8">
          <p class="text-lg mb-3 font-medium text-purple-600 dark:text-purple-500">
            Trusted Worldwide
          </p>
          <TextView {...headingProps} />
          <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <ServiceLink text="Explore Legality Guide" />
            <ServiceLink text="Visit the Trust Center" />
          </div>
        </div>
        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {
                serviceItemProps.map((item,i) => {
                    return (
                        <ServiceItem key={i} title={item.title} text={item.text} icon={item.icon} />
                    )
                })
            }
        </div>
      </div>
    </section>
  );
}
