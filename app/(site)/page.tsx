"use client";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Image from "next/image";
import Socials from "./components/Socials";
import Intro from "./components/Intro";
// import "@fontsource/lato/400.css";

export default async function Home() {
  // const profile: ProfileType[] = await getProfile();

  return (
    <main>
      <section className="container">
        {/* {profile &&
          profile.map((data) => (
            <div key={data._id}>
              <h1>{data.headline}</h1>
              <Image
                className=""
                src={data.profileImage.image}
                width={250}
                height={250}
                quality={100}
                alt={data.profileImage.alt}
              />
              <p>{data.shortBio}</p>
              <ul>
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a href={value} rel="noreferer noopener">
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))} */}
      </section>
    </main>
  );
}
