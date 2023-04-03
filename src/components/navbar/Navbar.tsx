"use client";
import { NAVLINKS } from "@/constants/NavlinksData";
import { AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import { Fragment, useState } from "react";
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
  cta?: () => void;
};

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const setNavbarState = () => {
    setIsNavbar(!isNavbar);
  };

  return (
    <>
      <div className="fixed top-0 z-30 max-w-screen">
        {/* <NavbarToggler setIsNavbar={setIsNavbar} isNavbar={isNavbar} /> */}
        <div className="fixed top-5 right-5 bg-black w-20 flex justify-center items-center rounded-full h-20">
          <Hamburger
            color="white"
            toggled={isNavbar}
            onToggle={() => {
              setIsNavbar(!isNavbar);
            }}
          />
        </div>
        <div>
          <AnimatePresence>
            {isNavbar && (
              <div className="absolute top-0 w-screen h-screen -z-50 flex flex-col lg:flex-row">
                {NAVLINKS.map((NavLinkProp, i) => (
                  <Fragment key={i}>
                    <NavLink
                      label={NavLinkProp.label}
                      route={NavLinkProp.route}
                      initial={NavLinkProp.initial}
                      animate={NavLinkProp.animate}
                      transition={NavLinkProp.transition}
                      exit={NavLinkProp.exit}
                      cta={setNavbarState}
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
