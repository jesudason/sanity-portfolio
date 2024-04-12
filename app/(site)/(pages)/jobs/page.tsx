// "use client";
import Image from "next/image";
import { getJob, getProfile } from "@/sanity/sanity.query";
import type { JobType, ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile, BiArrowToBottom } from "react-icons/bi";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Job from "../../components/Job";
// import job from "@/schemaTypes/job";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Link,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default async function JobHistory() {
  const job: JobType[] = await getJob();

  return (
    <Box sx={{ minWidth: 275 }}>
      <h2>Career History</h2>
      {job.map((data) => (
        <Job key={data._id} data={data} />
      ))}
    </Box>
  );
}
