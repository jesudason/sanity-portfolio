"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { StyledLink } from "../../styles/overrides";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiEnvelope,
  BiLogoTwitter,
} from "react-icons/bi";
import { ProfileType } from "@/types";
import { getProfile } from "@/sanity/sanity.query";
import "./styles.css";
import styled from "@emotion/styled";

const components: any = {
  email: <BiEnvelope />,
  github: <BiLogoGithub />,
  linkedin: <BiLogoLinkedin />,
  twitter: <BiLogoTwitter />,
};

const SocialIcons = styled(StyledLink)`
  font-size: 24px;
  margin-left: 0;
  line-height: 24px;
  color: #001219;

  &:hover {
    color: #005f73;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  bottom: 0;
  position: sticky;
  width: 100%;
  height: 48px;
  align-items: center;
  background-color: white;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export default async function Socials() {
  const profile: ProfileType[] = await getProfile();

  return (
    <StyledBox
      sx={{
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      className="background-animation"
    >
      {profile &&
        profile.map((data) =>
          Object.entries(data.socialLinks)
            .sort()
            .map(([key, value], id) => (
              <SocialIcons key={id} href={value}>
                {components[key]}
              </SocialIcons>
            ))
        )}
    </StyledBox>
  );
}
