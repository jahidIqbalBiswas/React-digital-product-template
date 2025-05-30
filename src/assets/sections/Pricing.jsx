import PricingTable from "../components/PricingTable";
import TextView from "../components/TextView";
export default function Pricing() {
  const textViewContent = {
    heading: "Designed for business teams like yours",
    text: "Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
    hextraClass: null,
    textraClass: null,
  };
  const tableOne = {
    name: "Starter",
    caption: "Best option for personal use & for your next project.",
    price: "$39",
    subscriptionTime: "/month",
    options: {
      1: {
        text: "Individual configuration",
      },
      2: {
        text: "No setup, or hidden fees",
      },
      3: {
        beforeValue: "Team size: ",
        value: "1 developer",
      },
      4: {
        beforeValue: "Premium support: ",
        value: "6 months",
      },
      5: {
        beforeValue: "Free updates: ",
        value: "6 months",
      },
    },
  };
  const tableTwo = {
    name: "Company",
    caption: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    subscriptionTime: "/month",
    options: {
      1: {
        text: "Individual configuration",
      },
      2: {
        text: "No setup, or hidden fees",
      },
      3: {
        beforeValue: "Team size: ",
        value: "10 developers",
      },
      4: {
        beforeValue: "Premium support: ",
        value: "24 months",
      },
      5: {
        beforeValue: "Free updates: ",
        value: "24 months",
      },
    },
  };
    const tableThree = {
    name: "Company",
    caption: "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    subscriptionTime: "/month",
    options: {
      1: {
        text: "Individual configuration",
      },
      2: {
        text: "No setup, or hidden fees",
      },
      3: {
        beforeValue: "Team size: ",
        value: "100+ developers",
      },
      4: {
        beforeValue: "Premium support: ",
        value: "36 months",
      },
      5: {
        beforeValue: "Free updates: ",
        value: "36 months",
      },
    },
  };
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <TextView {...textViewContent} />
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PricingTable {...tableOne} />
          <PricingTable {...tableTwo} />
          <PricingTable {...tableThree} />
        </div>
      </div>
    </section>
  );
}
