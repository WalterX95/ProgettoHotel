import { useEffect, useState } from "react";
import type { MenuLink } from "../interface/MenuLink";


const HeaderComponent: React.FC = () => {
   const [menu,setMenu] = useState<MenuLink[]>([])
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchMenuData = async() => {
          try {
             const response = await fetch('./data/menu.json');
             if(!response.ok) {
                throw new Error ('Errore HTTPS Nella richiesta');
             }
             const menuFetched = await response.json();
             setMenu(menuFetched);
          }
          catch(err: any) {
            setError(err);
            console.log(error);
          }
      }
      fetchMenuData();
   },[])
return(
 <>
   <header className="bg-gray-500 sticky top-0 z-50 px-4">
    <div className="container mx-auto flex justify-between items-center py-4">
      <div className="flex items-center">
        <img src="https://spacema-dev.com/blue-star/assets/images/blue-logo.png" alt="Logo" className="h-14 w-auto mr-4"/>
      </div>
      <div className="flex md:hidden">
        <button id="hamburger" className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex md:flex-grow justify-center">
        <ul className="flex justify-center space-x-4 text-white">
            {menu.map((linkD : MenuLink) => (
                <li key={linkD.id}><a href={linkD.link} className="hover:text-secondary font-bold">
                    {linkD.label}</a>
                </li>
            ))}
        </ul>
      </nav>
      <div className="hidden lg:flex items-center space-x-4">
        <a href="#" className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block">Login</a>
      </div>
    </div>
  </header>

<nav id="mobile-menu-placeholder" className="mobile-menu hidden flex-col items-center space-y-8 md:hidden px-8">
  <ul className="w-full text-center">
       {menu.map((linkD : MenuLink) => (
                <li key={linkD.id} className="border-b border-gray-300 pb-4 pt-4">
                    <a href={linkD.link} className="hover:text-secondary font-bold">{linkD.label}</a>
                </li>
            ))}
  </ul>
  <div className="flex flex-col mt-6 space-y-2 items-center">
    <a href="#" className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded flex items-center justify-center min-w-[110px]">Login</a>
  </div>
</nav>
</>
    )
}

export default HeaderComponent;