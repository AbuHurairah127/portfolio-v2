"use client";
import { Fragment, useState } from "react";
import NavbarToggler from "./NavbarToggler";
import NavLink from "./NavLinks";
import Socials from "./Socials";
export type NavLinkPropsType = {
  label: string;
  route: string;
};
const NavLinksProps: NavLinkPropsType[] = [
  { label: "Home", route: "/" },
  { label: "About Me", route: "/" },
  { label: "Skills", route: "/" },
  { label: "Projects", route: "/" },
  { label: "Contact Me", route: "/" },
];

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 left-0">
        <NavbarToggler setIsNavbar={setIsNavbar} isNavbar={isNavbar} />
        <div>
          {isNavbar && (
            <div className="absolute top-0 w-screen h-screen -z-50 flex">
              {NavLinksProps.map((NavLinkProp, i) => (
                <Fragment key={i}>
                  <NavLink
                    label={NavLinkProp.label}
                    route={NavLinkProp.route}
                  />
                </Fragment>
              ))}
              <Socials />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
