import BottomFooter from "../components/BottomFooter";
import FooterWidget from "../components/FooterWidget";

export default function Footer() {
  const footerWidgetInfo = {
    1: {
      title: "company",
      items: ["About", "Careers", "Brand Center", "Blog"],
    },
    2: {
      title: "Help center",
      items: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    3: {
      title: "Legal",
      items: ["Privacy Policy", "Licensing", "Terms"],
    },
    4: {
      title: "company",
      items: ["About", "Careers", "Brand Center", "Blog"],
    },
    5: {
      title: "Download",
      items: ["iOS", "Android", "Windows", "MacOS"],
    },
  };
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <FooterWidget {...footerWidgetInfo[1]} />
          <FooterWidget {...footerWidgetInfo[2]} />
          <FooterWidget {...footerWidgetInfo[3]} />
          <FooterWidget {...footerWidgetInfo[4]} />
          <FooterWidget {...footerWidgetInfo[5]} />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <BottomFooter/>
      </div>
    </footer>
  );
}
