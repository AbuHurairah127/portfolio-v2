import { NavLinkPropsType } from "@/components/navbar/Navbar";

export const NAVLINKS: NavLinkPropsType[] = [
  {
    label: "Home",
    route: "/#hero",
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
    route: "/#aboutme",
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
    route: "#skills",
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
