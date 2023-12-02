import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavLinks: React.FC<NavLinksProps> = ({ setIsOpen }) => {

  const pathname = usePathname();  

  const links = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Menu',
      url: '/menu'
    },
    {
      name: 'Acerca de',
      url: '/about'
    },
    {
      name: 'Contacto',
      url: '/contact'
    }
  ]

  return (
    <ul className='flex flex-col w-full gap-12 pl-14 md:flex-row'>
      {
        links.map((link, index) => (
          <li key={index}>
            <Link 
              onClick={() => setIsOpen(false)}
              href={link.url} 
              className={`${pathname === link.url && 'active-link'} link`}>{link.name}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
