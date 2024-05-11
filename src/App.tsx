import { useState } from "react";
import logo from "./assets/img/stylenest-logo.png";
import { RiCloseLine, RiMenuLine, RiShoppingBag3Line } from "@remixicon/react";

function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  return (
    <>
      <nav className='flex items-center justify-between gap-[103px] py-[18px] px-4 md:px-8'>
        <a href='#' className='focus:outline-none'>
          <img src={logo} alt='Abstractly logo' width={105} height={32} />
        </a>
        <ul className='text-sm hidden lg:flex lg:text-base gap-8 items-center flex-1'>
          <li>
            <a
              href='#shop-all'
              className='block text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2 disabled:text-neutral-400'
            >
              Shop all
            </a>
          </li>
          <li>
            <a
              href='#latest-arrivals'
              className='block text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2 disabled:text-neutral-400'
            >
              Latest arrivals
            </a>
          </li>
        </ul>
        <div className='flex gap-4'>
          <button className='focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2 disabled:text-neutral-400 cursor-pointer text-neutral-600'>
            <RiShoppingBag3Line className='text-inherit' />
          </button>
          <button
            className='lg:hidden focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2'
            onClick={() => {
              setIsMenuOpened(true);
            }}
          >
            <RiMenuLine className='text-neutral-600' />
          </button>
        </div>
      </nav>
      <div
        className={`fixed left-0 right-0 top-0 bottom-0 pr-4 duration-300 ${
          isMenuOpened
            ? "z-40 visible bg-neutral-900/65"
            : "z-0 invisible bg-transparent"
        }`}
        style={{ transitionProperty: "visibility, background-color, z-index" }}
      >
        <div
          onTransitionEnd={() => {
            if (isMenuClosing) {
              setIsMenuClosing(false);
              setIsMenuOpened(false);
            }
          }}
          className={`h-full px-4 md:px-8 bg-white pt-4 transition-transform delay-150 duration-300 ${
            isMenuOpened ? "" : "-translate-x-full"
          } ${isMenuClosing ? "-translate-x-full" : ""}`}
        >
          <div className='flex items-center justify-between py-[18px]'>
            <img src={logo} alt='Abstractly logo' width={105} height={32} />
            <button
              className='focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2'
              onClick={() => {
                setIsMenuClosing(true);
              }}
            >
              <RiCloseLine className='text-neutral-600' />
            </button>
          </div>
          <ul className='text-sm flex flex-col gap-y-2 pt-1 pb-4'>
            <li className='px-3 py-2'>
              <a
                href='#shop-all'
                className='block text-neutral-900 focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2 disabled:text-neutral-400'
              >
                Shop all
              </a>
            </li>
            <li className='px-3 py-2'>
              <a
                href='#latest-arrivals'
                className='block text-neutral-900 focus:outline-none focus:ring-4 focus:ring-indigo-700/10 rounded-sm focus:ring-offset-2 disabled:text-neutral-400'
              >
                Latest arrivals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className='max-w-screen-xl mx-auto pt-4'>
      <Navbar />
    </div>
  );
}

export default App;
