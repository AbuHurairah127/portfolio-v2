import { NavLinkPropsType } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({
  label,
  route,
  initial,
  animate,
  transition,
  exit,
}: NavLinkPropsType) => {
  return (
    <>
      <motion.a
        href=""
        className="text-white text-3xl font-bold w-[15vw] flex justify-center items-center bg-background"
        initial={initial}
        animate={animate}
        transition={transition}
        exit={exit}
      >
        {label}
      </motion.a>
    </>
  );
};
export default NavLink;
