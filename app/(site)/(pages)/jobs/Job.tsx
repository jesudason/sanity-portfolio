// "use client";
import { useState } from "react";
import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import styled from "@emotion/styled";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

const StyledListItem = styled(ListItem)`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 10px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: black;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 18px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: black;
  }
`;

const formatDate = (date: moment.MomentInput) => {
  return moment(date).format("MMM YYYY");
};

export default function MyJob(data: any) {
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getDateRange = (job: any) => {
    if (!!job.startDate && !!job.endDate) {
      return `\u00B7 ${formatDate(job.startDate)} - ${formatDate(job.endDate)}`;
    } else if (!!job.startDate) {
      return `\u00B7 ${formatDate(job.startDate)}`;
    } else {
      return null;
    }
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }} key={data._id}>
      <CardHeader
        avatar={
          <Avatar
            src={data.logo}
            sx={{ bgcolor: "#AE2012" }}
            aria-label="recipe"
          >
            {data.name}
          </Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={data.jobTitle}
        subheader={`${data.name} ${getDateRange(data)}`}
      />
      <CardContent sx={{ padding: "0 16px", color: "rgba(0, 0, 0, 0.6)" }}>
        {data.additionalRoles &&
          data.additionalRoles.map((role: any, index: number) => (
            <div key={index}>
              <Typography variant="subtitle2">
                {role.title} {role.startDate && getDateRange(role)}
              </Typography>
            </div>
          ))}
      </CardContent>
      {data.description && (
        <CardActions sx={{ padding: "0" }}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ margin: "0 auto" }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      )}
      {data.description && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ paddingTop: "0" }}>
            <Typography variant="body2">{data.description}</Typography>
            <List>
              {data.achievements &&
                data.achievements.map((achievement: string, index: number) => (
                  <StyledListItem key={index}>
                    <Typography variant="body2">{achievement}</Typography>
                  </StyledListItem>
                ))}
            </List>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
}
