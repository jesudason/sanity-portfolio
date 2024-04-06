import { getProfile } from "@/sanity/sanity.query";
import { ProfileType } from "@/types";
import "./styles.css";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiEnvelope,
  BiLogoTwitter,
} from "react-icons/bi";
import React from "react";
import Socials from "../Socials";

const components: any = {
  email: <BiEnvelope />,
  github: <BiLogoGithub />,
  linkedin: <BiLogoLinkedin />,
  twitter: <BiLogoTwitter />,
};

export default async function Footer() {
  const profile: ProfileType[] = await getProfile();

  return (
    <footer className="footer">
      <Socials />
    </footer>
  );
}
