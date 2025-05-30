import { Fragment } from "react";
export default function HeadingWithText({ heading, text, hextraClass, textraClass , headingCustomCss =null, textCustomCss =null}) {
  return (
    <>
      <h1 style={headingCustomCss} className={hextraClass + "max-w-2xl mb-4 font-extrabold leading-none tracking-tight dark:text-white text-3xl"} >
        {heading && heading.split("\n").map((line, i) => {
          return (
            <Fragment key={i}>
              {line}
              <br />
            </Fragment>
          );
        })}
      </h1>

      <p style={textCustomCss} className={textraClass + "max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"}>
        {text &&
         text.split("\t").map((text, i) => {
            return (
              <Fragment key={i}>
                {i === 1 ? <a className="hover:underline" href='#'>{text}</a> : text}
              </Fragment>
            );
         })
        
        }
      </p>
    </>
  );
}
