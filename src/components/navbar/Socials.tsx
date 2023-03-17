import { AiOutlineGithub, AiFillFacebook } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";
const Socials = () => {
  return (
    <motion.div
      className="w-screen lg:w-[25vw] h-[25vh] lg:h-screen flex items-center justify-evenly bg-background"
      initial={{ opacity: 0.1, translateY: "-100vw" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      exit={{
        opacity: 0.1,
        translateY: "-100vw",
        transition: { delay: 1, duration: 1, ease: "easeInOut" },
      }}
    >
      <motion.a
        href=""
        initial={{ opacity: 0.1, translateX: "25vw" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        exit={{
          opacity: 0.1,
          translateX: "25vw",
          transition: { delay: 0.4, duration: 1, ease: "easeInOut" },
        }}
      >
        <AiOutlineGithub color="white" size={35} />
      </motion.a>
      <motion.a
        href=""
        initial={{ opacity: 0.1, translateX: "25vw" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
        exit={{
          opacity: 0.1,
          translateX: "25vw",
          transition: { delay: 0.2, duration: 1, ease: "easeInOut" },
        }}
      >
        <AiFillFacebook color="white" size={35} />
      </motion.a>
      <motion.a
        href=""
        initial={{ opacity: 0.1, translateX: "25vw" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ delay: 1.7, duration: 0.8, ease: "easeInOut" }}
        exit={{
          opacity: 0.1,
          translateX: "25vw",
          transition: { delay: 0, duration: 1, ease: "easeInOut" },
        }}
      >
        <BsDiscord color="white" size={35} />
      </motion.a>
    </motion.div>
  );
};

export default Socials;
