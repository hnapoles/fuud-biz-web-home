import React from "react";
import Link from 'next/link';
import navLinks from '../constants/navLinks';
import TopMenuLink from './TopMenuLink';
import DropDownMenuLink from './DropDownMenuLink';
import EnvBadge from './EnvBadge';

export default function Nav() {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                  aria-expanded="false" onClick={() => setNavbarOpen(!navbarOpen)} >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed. */}
                  {/*
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                  */}
                  <svg className={"h-6 w-6" + (navbarOpen ? " hidden" : " block") }
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {/* Icon when menu is open. */}
                  {/*
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                  */}
                  <svg className={"h-6 w-6" + (navbarOpen ? " block" : " hidden") }
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {navLinks.map(({ href, label }) => (
                      <TopMenuLink key={`${href}${label}`} href={href}>
                        <a>
                          {label}
                        </a>
                      </TopMenuLink>
                    ))}
              
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {/* Heroicon name: plus 
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  */}
                  <span>Sign in</span>
                </button>
              </div>
              
            </div>
          </div>
        </div>

        {/*
          Mobile menu, toggle classes based on menu state.

          Menu open: "block", Menu closed: "hidden"
        */}
        <div className={"md:hidden" + (navbarOpen ? " block" : " hidden") }>
          <div className="pt-2 pb-3 space-y-1">
              {navLinks.map(({ href, label }) => (
                      <DropDownMenuLink key={`${href}${label}`} href={href}>
                        <a onClick={() => setNavbarOpen(!navbarOpen)}>
                          {label}
                        </a>
                      </DropDownMenuLink>
              ))}
          </div>     
        </div>
      </nav>
      { process.env.NODE_ENV !== 'production' &&
        <EnvBadge/>
      }
      
    </div>
  )
}
