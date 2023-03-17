import { NavLinkPropsType } from "./Navbar";

const NavLink = ({ label, route }: NavLinkPropsType) => {
  return (
    <>
      <a
        href=""
        className="text-white text-3xl font-bold w-[15vw] flex justify-center items-center"
      >
        {label}
      </a>
    </>
  );
};
export default NavLink;
