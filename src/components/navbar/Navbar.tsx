"use client";
import { NAVLINKS } from "@/constants/NavlinksData";
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
  cta?: () => void;
};

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const setNavbarState = () => {
    setIsNavbar(!isNavbar);
  };
  console.log(NAVLINKS);

  return (
    <>
      <div className="fixed top-0 left-0 z-50">
        <NavbarToggler setIsNavbar={setIsNavbar} isNavbar={isNavbar} />
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
