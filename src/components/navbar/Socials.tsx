import { AiOutlineGithub, AiFillFacebook } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="w-[25vw] h-screen flex items-center justify-evenly">
      <a href="">
        <AiOutlineGithub color="white" size={35} />
      </a>
      <a href="">
        <AiFillFacebook color="white" size={35} />
      </a>
      <a href="">
        <BsDiscord color="white" size={35} />
      </a>
    </div>
  );
};

export default Socials;
