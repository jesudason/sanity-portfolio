"use client";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import "./styles.css";
import { Section, StyledLink } from "../../styles/overrides";
import styled from "@emotion/styled";

export default async function Navbar() {
  const profile: ProfileType[] = await getProfile();
  return (
    <Section className="intro">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <StyledLink href="/" className="Logo">
              <h1>{data.fullName}</h1>
            </StyledLink>
            <h2 className="accent">{data.headline}</h2>
            <p>{data.shortBio}</p>
          </div>
        ))}
    </Section>
  );
}
