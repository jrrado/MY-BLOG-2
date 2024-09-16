import { Button, Navbar, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch } from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
       <Link to="/" className='self-cnter whitespace-nowrap text-sm:smtext-xl font-semibold dark:text-white'>
           <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pinnk-500 rounded-lg text-white'>Sahand's</span>
           Blog
       </Link>
       <form>
            <TextInput
                type='text'
                placeholder='search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />   
       </form>
       <Button className='w=12 h=10 lg:hidden' color='gray' pill>
         <AiOutlineSearch />
       </Button>
       <div className="flex gap-2 md:order-2">
         <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
              <FaMoon />
         </Button>
         <Link to='/Sign-in'>
           <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
           </Button>
          </Link>
          <Navbar.Toggle/>
       </div>
       <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
              <Link to='/'>
                 Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
              <Link to='/About'>
                 About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/projrct"} as={'div'}>
              <Link to='/Project'>
                 Project
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
      </Navbar>
  )
}
