import NextLink from "next/link";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Image from "next/image";
import "./styles.css";

export default async function Navbar() {
  const profile: ProfileType[] = await getProfile();
  return (
    <section className="intro">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <NextLink href="/" className="Logo">
              <h1>{data.fullName}</h1>
            </NextLink>
            <h2>{data.headline}</h2>
            <p>{data.shortBio}</p>
          </div>
        ))}
    </section>
  );
}
