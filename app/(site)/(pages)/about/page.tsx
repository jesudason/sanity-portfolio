import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="">
              <div className="">
                <h1 className="">ABOUT ME PAGE</h1>

                <div className=""></div>
              </div>
            </section>
          </div>
        ))}
    </main>
  );
}
