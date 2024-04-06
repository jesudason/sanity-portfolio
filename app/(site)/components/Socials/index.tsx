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

const components: any = {
  email: <BiEnvelope />,
  github: <BiLogoGithub />,
  linkedin: <BiLogoLinkedin />,
  twitter: <BiLogoTwitter />,
};

export default async function Socials() {
  const profile: ProfileType[] = await getProfile();

  return (
    <section className="social-media">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <p className="mobile-hide">{data.footerText}</p>
            <ul>
              {Object.entries(data.socialLinks)
                .sort()
                .map(([key, value], id) => (
                  <li className={`icon icon-${key}`} key={id}>
                    <a href={value} rel="noreferer noopener">
                      {components[key]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
}
