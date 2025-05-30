import Figma from "../components/FigmaIcon";
import GitHub from "../components/GitHubIcon";
import TextView from "../components/TextView";
import ImageView from "../components/ImageView";
import heroImage from "../img/hero.png";
import Button from "./../components/Button";
export default function Hero() {
  const buttonProps = {
    btnLeft: {
      text: "View on GitHub",
      icon: GitHub,
      uri: "#",
    },
    btnRight: {
      text: "Get Figma File",
      icon: Figma,
      uri: "#",
    },
  };
  const headingProps = {
    heading: "Building digital \n products & brands.",
    hextraClass: "text-4xl md:text-5xl xl:text-6xl",
    text:
      "This free and open-source landing page template was built using the utility classes from \t Tailwind CSS \t and based on the components from the Flowbite Library and the Blocks System.",
    textraClass: null,
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <TextView {...headingProps} />
          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Button {...buttonProps.btnLeft} />
            <Button {...buttonProps.btnRight} />
          </div>
        </div>
        <ImageView src={heroImage} />
      </div>
    </section>
  );
}
