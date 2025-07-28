import Link from "next/link";

import {
  RiYoutubeLine,
  RiWhatsappLine,
  RiLinkedinBoxLine,
  RiDribbbleLine,
  RiGithubLine,
  RiBehanceFill,
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://youtube.com",
    Icon: RiYoutubeLine,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/+37126729131",
    Icon: RiWhatsappLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jurijsrck",
    Icon: RiLinkedinBoxLine
,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com",
    Icon: RiDribbbleLine,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/bitkoins",
    Icon: RiBehanceFill,
  },
  {
    name: "Github",
    link: "https://github.com/mscbuild",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
