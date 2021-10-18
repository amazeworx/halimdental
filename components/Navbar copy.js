import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".mobilenavbar").className = "mobilenavbar scroll";
    } else {
      document.querySelector(".mobilenavbar").className = "mobilenavbar";
    }
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let serviceMenuSetActive = '';
  if (
    (router.pathname == '/about-us') ||
    (router.pathname == '/credentials') ||
    (router.pathname == '/services') ||
    (router.pathname == '/contact-us')
  ) {
    serviceMenuSetActive = "active"
  }

  return (
    <>
      <nav className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="w-full flex items-center">
            <div className="w-1/2">
              <Link href="/">
                <a className="block h-12 mr-4 2xl:h-16"><img className="object-contain h-12 2xl:h-16" src="/logo-halimdental.svg" width="261" height="48" /></a>
              </Link>
            </div>

            <div className="w-1/2 navbar">
              <ul className="flex justify-between gap-4">
                <li><Link href="/about-us"><a className={`navbar-link block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30 ${router.pathname == '/about-us' ? 'active' : ''}`}>About Us</a></Link></li>
                <li className="relative has-submenu"><a href="#" className={`navbar-link inline-block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30  ${(router.pathname == '/credentials/himawan-halim' || router.pathname == '/credentials/ivan-halim') ? 'active' : ''}`}>Credentials</a>
                  <ul className="submenu">
                    <li><Link href="/credentials/himawan-halim"><a className={`navbar-link block pt-1 text-lg uppercase  ${router.pathname == '/credentials' ? 'active' : ''}`}>Himawan Halim</a></Link></li>
                    <li><Link href="/credentials/ivan-halim"><a className={`navbar-link block pt-1 text-lg uppercase  ${router.pathname == '/credentials' ? 'active' : ''}`}>Ivan A Halim</a></Link></li>
                  </ul>
                </li>
                <li><Link href="/services"><a className={`navbar-link block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30  ${router.pathname == '/services' ? 'active' : ''}`}>Services</a></Link></li>
                <li><Link href="/contact-us"><a className={`navbar-link block pt-1 pb-2 text-lg uppercase border-t border-gray-300 hover:text-brand hover:border-brand hover:border-opacity-30  ${router.pathname == '/contact-us' ? 'active' : ''}`}>Contact Us</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav >

      <div className="lg:hidden fixed top-0 left-0 right-0 z-30">
        <div className="mobilenavbar">
          <div className="flex px-4 py-4 w-full items-center">
            <button type="button" className="mr-4" id="open-menu" onClick={handleClick}>
              <svg className="menu-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" /></svg>
            </button>
            <a href="/" className="flex items-end">
              <div className="inline-block">
                <svg className="navbar-logo" width="500" height="620" viewBox="0 0 500 620" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M247.822 0L500 620H343.121L247.822 385.634L154.175 620H0L247.822 0Z" />
                </svg>
              </div>
              <div className="navbar-title inline-block ml-1">ALWINDO PRIMA SOLUSI</div>
            </a>

          </div>
        </div>
      </div>

      <nav id="mobilemenu" className={`hidden mobilemenu ${isOpen ? "open" : ""}`}>
        <div className="p-4">
          <div className="text-right">
            <button type="button" id="close-menu" onClick={handleClick}>
              <svg className="fill-current text-white" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 10.586L16.95 5.636L18.364 7.05L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.05 18.364L5.636 16.95L10.586 12L5.636 7.05L7.05 5.636L12 10.586Z" />
              </svg>
            </button>

          </div>
          <ul className="text-lg">
            <li><a className="inline-block uppercase py-2" href="#about" onClick={handleClick}>About Us</a></li>
            <li><a className="inline-block uppercase py-2" href="#vision-mission" onClick={handleClick}>Vision &amp; Mission</a></li>
            <li><a className="inline-block uppercase py-2" href="#services" onClick={handleClick}>Our Services</a></li>
            <li><a className="inline-block uppercase py-2" href="#partners" onClick={handleClick}>Our Partners</a></li>
            <li><a className="inline-block uppercase py-2" href="#contact" onClick={handleClick}>Contact Us</a></li>
          </ul>
        </div>
      </nav>
      <div id="overlay" className={`hidden overlay ${isOpen ? "open" : ""}`}></div>

    </>
  );
}

export default Navbar;