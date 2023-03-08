import { IoDocumentTextOutline, IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5/index.js";
import { ImKeyboard } from "react-icons/im/index.js";
import FancyLink from "./FancyLink";
import { EMAIL, RESUME, THINGS_I_USE } from "../../consts";

export default function ContactLinks() {
  return (
    <div className="w-full flex flex-col items-start">
      <FancyLink Icon={IoLogoLinkedin} text='Joshua Levine' href="https://www.linkedin.com/in/josh-lev/" target="_blank" />
      <FancyLink Icon={IoLogoGoogle} text='Gmail' href={"mailto:" + EMAIL} target="_blank" />
      <FancyLink Icon={IoLogoGithub} text='@JoshJAL' href="https://github.com/JoshJAL" target="_blank" />
      <FancyLink Icon={IoLogoInstagram} text='@JoshuaALevine3' href="https://www.instagram.com/joshuaalevine3/" target="_blank" />
      <FancyLink Icon={IoLogoFacebook} text='Facebook' href="https://www.facebook.com/joshua.levine.520" target="_blank" />
      <FancyLink Icon={IoDocumentTextOutline} text='Resume' href={RESUME} target="_blank" />
      <FancyLink Icon={ImKeyboard} text='Things I Use' href={THINGS_I_USE} target="_blank" />
    </div>
  )
}
