import NavList from "./ListView.jsx";
export default function NavMenu() {
    const menuItems = {
        texts:["home", "company", "marketplace", "features", "team", "contact"],
        uris:["#home", "#company", "#marketplace", "#features", "#team", "#contact"]
    }
  return (
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {menuItems.texts.map((item,i) => {
            const activeItem = i === 0 ? true : false;
            return (
                <NavList key={item} text={item} uri={menuItems.uris[i]} isActive={activeItem}  />
            )
        })}
    
      
    </ul>
  );
}
