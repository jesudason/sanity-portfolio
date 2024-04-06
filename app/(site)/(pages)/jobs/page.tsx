import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import Job from "../../components/Job";

export default async function JobHistory() {
  //   const profile: ProfileType[] = await getProfile();

  return (
    <main className="">
      <Job />
    </main>
  );
}
