import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      email,
      footerText,
      socialLinks,
      skills
    }`
  );
}

export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"]{
        _id,
        name,
        jobTitle,
        "logo": logo.asset->url,
        url,
        startDate,
        endDate,
        description,
        additionalRoles,
        achievements,
      }`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
    }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}
