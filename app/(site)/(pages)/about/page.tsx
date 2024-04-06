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
                <h1 className="">
                  ABOUT ME PAGE
                  {/* I&apos;m {data.fullName}. I live in {data.location}, where I
                  design the future. */}
                </h1>

                <div className="">
                  {/* <PortableText value={data.fullBio} /> */}
                </div>
              </div>
              {/* <div className="">
                <div>
                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>
                </div>
                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                    >
                      <BiEnvelope className="text-lg" />
                      {data.email}
                    </a>
                  </li>
                </ul>
              </div> */}
            </section>
            {/* <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
              <p className="text-zinc-400 max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section> */}
          </div>
        ))}
    </main>
  );
}