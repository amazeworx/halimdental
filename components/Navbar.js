import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'About Us', href: '/about-us', current: false },
  {
    name: 'Credentials',
    href: '#',
    current: false,
    submenu: [
      { name: 'Himawan Halim', href: '#', current: false },
      { name: 'Ivan A Halim', href: '#', current: false },
    ],
  },
  { name: 'Services', href: '/services', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  let serviceMenuSetActive = '';
  if (
    router.pathname == '/about-us' ||
    router.pathname == '/credentials' ||
    router.pathname == '/services' ||
    router.pathname == '/contact-us'
  ) {
    serviceMenuSetActive = 'active';
  }

  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 -right-2 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded text-black hover:text-white hover:bg-brand focus:outline-none'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-between'>
                <div className='flex items-center'>
                  <Link href='/'>
                    <a className='block mr-4'>
                      <img
                        className='h-10 lg:h-14 mr-auto'
                        src='/images/logo-halimdental.svg'
                      />
                    </a>
                  </Link>
                </div>
                <div className='navbar hidden lg:block lg:w-1/2'>
                  <ul className='flex justify-between gap-4'>
                    <li>
                      <Link href='/about-us'>
                        <a
                          className={`navbar-link block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30 ${
                            router.pathname == '/about-us' ? 'active' : ''
                          }`}
                        >
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className='relative has-submenu'>
                      <a
                        href='#'
                        className={`navbar-link inline-block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30  ${
                          router.pathname == '/credentials/himawan-halim' ||
                          router.pathname == '/credentials/ivan-halim'
                            ? 'active'
                            : ''
                        }`}
                      >
                        Credentials
                      </a>
                      <ul className='submenu'>
                        <li>
                          <Link href='/credentials/himawan-halim'>
                            <a
                              className={`navbar-link block pt-1 text-lg uppercase  ${
                                router.pathname == '/credentials'
                                  ? 'active'
                                  : ''
                              }`}
                            >
                              Himawan Halim
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/credentials/ivan-halim'>
                            <a
                              className={`navbar-link block pt-1 text-lg uppercase  ${
                                router.pathname == '/credentials'
                                  ? 'active'
                                  : ''
                              }`}
                            >
                              Ivan A Halim
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='/services'>
                        <a
                          className={`navbar-link block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30  ${
                            router.pathname == '/services' ? 'active' : ''
                          }`}
                        >
                          Services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>
                        <a
                          className={`navbar-link block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30  ${
                            router.pathname == '/contact-us' ? 'active' : ''
                          }`}
                        >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden border-t border-b border-gray-200 py-4'>
            <div className='px-4 pt-2 pb-2'>
              <ul className='text-center'>
                <li className='py-3'>
                  <Link href='/'>
                    <a
                      className={`navbar-link block text-lg uppercase hover:text-brand ${
                        router.pathname == '/' ? 'active' : ''
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className='py-3'>
                  <Link href='/about-us'>
                    <a
                      className={`navbar-link block text-lg uppercase hover:text-brand ${
                        router.pathname == '/about-us' ? 'active' : ''
                      }`}
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li className='relative has-submenu py-3'>
                  <span
                    className={`navbar-link inline-block text-lg uppercase`}
                  >
                    Credentials
                  </span>
                  <ul className='submenu pt-1'>
                    <li className='py-1'>
                      <Link href='/credentials/himawan-halim'>
                        <a
                          className={`navbar-link block text-base uppercase hover:text-brand ${
                            router.pathname == '/credentials/himawan-halim'
                              ? 'active'
                              : ''
                          }`}
                        >
                          Himawan Halim
                        </a>
                      </Link>
                    </li>
                    <li className='py-1'>
                      <Link href='/credentials/ivan-halim'>
                        <a
                          className={`navbar-link block text-base uppercase hover:text-brand ${
                            router.pathname == '/credentials/ivan-halim'
                              ? 'active'
                              : ''
                          }`}
                        >
                          Ivan A Halim
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='py-3'>
                  <Link href='/services'>
                    <a
                      className={`navbar-link block text-lg uppercase hover:text-brand ${
                        router.pathname == '/services' ? 'active' : ''
                      }`}
                    >
                      Services
                    </a>
                  </Link>
                </li>
                <li className='py-3'>
                  <Link href='/contact-us'>
                    <a
                      className={`navbar-link block text-lg uppercase hover:text-brand ${
                        router.pathname == '/contact-us' ? 'active' : ''
                      }`}
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
