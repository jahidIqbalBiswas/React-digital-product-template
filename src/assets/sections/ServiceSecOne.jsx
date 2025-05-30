import ListIcon from "../components/ListIconCircle.jsx";
import ListView from "../components/ListView.jsx";
import TextView from "../components/TextView.jsx";
import featureImageOne from "../img/feature-1.png";
import featureImageTwo from "../img/feature-2.png";
function ServiceImage({src}){
  return (
<img
      className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
      src={src}
      alt={src.split("/").pop().split(".")[0]}
    />
  )
}
export default function ServiceSecOne() {
  const headingProps = {
    one: {
      heading: "Work with tools you already use",
      hextraClass: null,
      text: " Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      textraClass: null,
    },
    two: {
      heading: "We invest in the world’s potential",
      hextraClass: null,
      text: " Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
      textraClass: null,
    },
  };
  const lists = {
    one: [
      "Continuous integration and deployment",
      "Development workflow",
      "Knowledge management",
    ],
    two: [
      "Dynamic reports and dashboards",
      "Templates for everyone",
      "Development workflow",
      "Limitless business automation",
      "Knowledge management",
    ],
  };
  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {/* subservice 01*/}
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <TextView {...headingProps.one} />
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {lists.one.map((item, i) => (
                <ListView key={i} text={item} ListIcon={ListIcon} />
              ))}
            </ul>
            <TextView text="Deliver great service experiences fast - without the complexity of traditional ITSM solutions." />
          </div>
           <ServiceImage src={featureImageOne}/>
        </div>
        {/* subservice 02*/}
        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <ServiceImage src={featureImageTwo}/>
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <TextView {...headingProps.two} />
            <ul
              role="list"
              class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              {lists.two.map((item, i) => (
                <ListView key={i} text={item} ListIcon={ListIcon} />
              ))}
            </ul>
            <TextView text="Deliver great service experiences fast - without the complexity of traditional ITSM solutions." />
          </div>
        </div>
      </div>
    </section>
  );
}
