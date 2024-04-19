"use client";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return <main className="max-w-7xl mx-auto md:px-16 px-6"></main>;
}
