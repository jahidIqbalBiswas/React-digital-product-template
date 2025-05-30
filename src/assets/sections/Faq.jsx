import FaqItems from "../components/FaqItems";
import TextView from "../components/TextView";

export default function Faq() {
  const sectionInfo = {
    title: "Frequently asked questions",
    hextraClass:
      "mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white",
  };
  const faqInfo = {
    1: {
      title: "Can I use Landwind in open-source projects?",
      paraOne:
        "Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns,modals,navbars, and more.",
      paraTwo: "Check out this guide to learn how to",
      linkText: " get started ",
      link: "https://codecanit.com",
      endText:
        "and start developing websites even faster with components on top of Tailwind CSS.",
    },
    2: {
      title: "Is there a Figma file available?",
      paraOne:
        "Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
      paraTwo: "Check out the",
      linkText: " Figma design system ",
      link: "https://codecanit.com",
      endText:
        "based on the utility classes from Tailwind CSS and components from Landwind.",
      isExpanded: false,
    },
    3: {
      title: "What are the differences between Landwind and Tailwind UI?",
      paraOne:
        "Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
      paraTwo: "Check out the",
      linkText: " Figma design system ",
      link: "https://codecanit.com",
      endText:
        "based on the utility classes from Tailwind CSS and components from Landwind.",
      isExpanded: false,
    },
    4: {
      title: "What about browser support?",
      paraOne:
        "Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
      paraTwo: "Check out the",
      linkText: " Figma design system ",
      link: "https://codecanit.com",
      endText:
        "based on the utility classes from Tailwind CSS and components from Landwind.",
      isExpanded: false,
    },
  };
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <TextView
          heading={sectionInfo.title}
          hextraClass={sectionInfo.hextraClass}
        />
        <div class="max-w-screen-md mx-auto">
          <FaqItems {...faqInfo[1]} />
          <FaqItems {...faqInfo[2]} />
          <FaqItems {...faqInfo[3]} />
          <FaqItems {...faqInfo[4]} />
        </div>
      </div>
    </section>
  );
}
