import { PortableTextBlock } from "sanity";

export type ProfileType = {
  footerText: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  startDate: Date;
  endDate: Date;
  achievements: string[];
  description: string;
  additionalRoles: string[];
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};
