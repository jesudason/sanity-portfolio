import { BiBriefcase } from "react-icons/bi";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Company Website",
      type: "url",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Most recent role",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "additionalRoles",
      title: "Additional roles",
      type: "array",
      description: "Add any previous roles within the company",
      of: [
        {
          type: "object",
          name: "previous roles",
          fields: [
            { type: "string", name: "title", title: "title" },
            { type: "date", name: "startDate", title: "Start Date" },
            { type: "date", name: "endDate", title: "End Date" },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    },
    {
      name: "achievements",
      title: "Achievements",
      type: "array",
      description: "Add a list achievements",
      of: [{ type: "string" }],
    },
  ],
};

export default job;
