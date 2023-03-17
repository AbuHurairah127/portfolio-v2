"use client";
import { AnimatePresence } from "framer-motion";
import { Fragment, useState } from "react";
import NavbarToggler from "./NavbarToggler";
import NavLink from "./NavLinks";
import Socials from "./Socials";
export type NavLinkPropsType = {
  label: string;
  route: string;
  initial: {
    opacity: number;
    translateY: string;
  };
  animate: {
    opacity: number;
    translateY: string | number;
  };
  transition: { delay?: number; duration: number; ease: string };
  exit: {
    opacity: number;
    translateY: string;
    transition: {
      delay: number;
      duration: number;
      ease: string;
    };
  };
};
const NavLinksProps: NavLinkPropsType[] = [
  {
    label: "Home",
    route: "/",
    initial: { opacity: 0.1, translateY: "-100vw" },
    animate: { opacity: 1, translateY: 0 },
    transition: { delay: 0, duration: 1, ease: "easeInOut" },
    exit: {
      opacity: 0.1,
      translateY: "-100vw",
      transition: { delay: 0, duration: 1, ease: "easeInOut" },
    },
  },
  {
    label: "About Me",
    route: "/",
    initial: { opacity: 0.1, translateY: "-100vw" },
    animate: { opacity: 1, translateY: 0 },
    transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
    exit: {
      opacity: 0.1,
      translateY: "-100vw",
      transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
    },
  },
  {
    label: "Skills",
    route: "/",
    initial: { opacity: 0.1, translateY: "-100vw" },
    animate: { opacity: 1, translateY: 0 },
    transition: { delay: 0.4, duration: 1, ease: "easeInOut" },
    exit: {
      opacity: 0.1,
      translateY: "-100vw",
      transition: { delay: 0.4, duration: 1, ease: "easeInOut" },
    },
  },
  {
    label: "Projects",
    route: "/",
    initial: { opacity: 0.1, translateY: "-100vw" },
    animate: { opacity: 1, translateY: 0 },
    transition: { delay: 0.6, duration: 1, ease: "easeInOut" },
    exit: {
      opacity: 0.1,
      translateY: "-100vw",
      transition: { delay: 0.6, duration: 1, ease: "easeInOut" },
    },
  },
  {
    label: "Contact Me",
    route: "/",
    initial: { opacity: 0.1, translateY: "-100vw" },
    animate: { opacity: 1, translateY: 0 },
    transition: { delay: 0.8, duration: 1, ease: "easeInOut" },
    exit: {
      opacity: 0.1,
      translateY: "-100vw",
      transition: { delay: 0.8, duration: 1, ease: "easeInOut" },
    },
  },
];

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 left-0">
        <NavbarToggler setIsNavbar={setIsNavbar} isNavbar={isNavbar} />
        <div>
          <AnimatePresence>
            {isNavbar && (
              <div className="absolute top-0 w-screen h-screen -z-50 flex">
                {NavLinksProps.map((NavLinkProp, i) => (
                  <Fragment key={i}>
                    <NavLink
                      label={NavLinkProp.label}
                      route={NavLinkProp.route}
                      initial={NavLinkProp.initial}
                      animate={NavLinkProp.animate}
                      transition={NavLinkProp.transition}
                      exit={NavLinkProp.exit}
                    />
                  </Fragment>
                ))}
                <Socials />
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
