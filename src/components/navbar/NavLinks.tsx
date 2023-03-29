import { NavLinkPropsType } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
const NavLink = ({
  label,
  route,
  initial,
  animate,
  transition,
  exit,
  cta,
}: NavLinkPropsType) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      exit={exit}
      onClick={cta}
      className={""}
    >
      <a
        href={route}
        className="text-white text-3xl font-bold w-screen lg:w-[15vw] h-[15vh] lg:h-screen flex justify-center items-center bg-black"
      >
        {label}
      </a>
    </motion.div>
  );
};
export default NavLink;
