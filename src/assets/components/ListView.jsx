export default function Link({ uri=null, text=null, isActive = false,ListIcon=null }) {
  const className =
    "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  const activeClass =
    "block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white";
     
  return (
    <li className={ListIcon && "flex space-x-3"}>
      {ListIcon && <ListIcon/>}
      {ListIcon ? (
        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {text && text.charAt(0).toUpperCase() + text.slice(1)}{" "}
        </span>
      ) : (
        <a href={uri} className={isActive ? activeClass : className}>
          {text && text.charAt(0).toUpperCase() + text.slice(1)}
        </a>
      )}
      
    </li>
  );
}
