
export default function Logo({uri, logo, text}) {
    return (
        <a href={uri} className="flex items-center gap-2 h-6 mr-3 sm:h-9">
            <img className="w-12" src={logo} alt={text}/>
             <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{text}</span>
        </a>
    );
}