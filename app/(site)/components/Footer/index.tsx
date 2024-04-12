"use client";
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
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const components: any = {
  email: <BiEnvelope />,
  github: <BiLogoGithub />,
  linkedin: <BiLogoLinkedin />,
  twitter: <BiLogoTwitter />,
};

const StyledHr = styled.hr`
  margin-top: 1rem;
`;

const FooterTag = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

export default async function Footer() {
  const profile: ProfileType[] = await getProfile();

  return (
    <footer className="footer">
      <StyledHr />
      <Box>
        {profile &&
          profile.map((data) => {
            return (
              <FooterTag>
                <p>{data.footerText}</p>
              </FooterTag>
            );
          })}
      </Box>
    </footer>
  );
}
