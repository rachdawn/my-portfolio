"use client";
import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const projects = [
  {
    title: "HappyTails",
    date: "April 2024",
    image: "/images/HappyTailsLP.png",
    alt: "HappyTails Landing Page",
    description:
      "A multi-page application (MPA) adaptation of a Buy/Sell Listing Website which acts as a hub page for multiple dog rescues.",
    techStack: "PSQL, Express, Node.js, HTML/CSS",
    githubLink: "https://github.com/rachdawn/Happy-Tails",
  },
  {
    title: "DateSync",
    date: "January 2024",
    image: "/images/OGDateSyncLP.png",
    alt: "DateSync Landing Page",
    description:
      "A multi-page application (MPA) where users can use location-based searches to find restaurants, activities, events, and movies, using Google APIs, to create a custom date plan which they can save and share.",
    techStack: "PSQL, Express (Vite Express), React (Vite), Node.js",
    githubLink: "https://github.com/rachdawn/datesync",
  },
  {
    title: "Jungle",
    date: "December 2023",
    image: "/images/JungleLP.png",
    alt: "Jungle Landing Page",
    description:
      "An e-commerce multi-page application (MPA), modeling a boutique plant shop, that allows users to view and purchase products.",
    techStack: "Ruby, Rails, PSQL, jQuery, RSpec, Bootstrap, Stripe",
    githubLink: "https://github.com/rachdawn/Jungle-Rails",
  },
  {
    title: "PhotoLabs",
    date: "December 2023",
    image: "/images/PhotoLabsLP.png",
    alt: "PhotoLabs Landing Page",
    description:
      "A single-page application (SPA) that allows users to view photos in different contexts.",
    techStack: "PSQL, Express, React, Node.js, Axios",
    githubLink: "https://github.com/rachdawn/PhotoLabs",
  },
  {
    title: "Tweeter",
    date: "November 2023",
    image: "/images/TweeterLP.png",
    alt: "Tweeter Landing Page",
    description: "A single-page application (SPA), mini clone of Twitter.",
    techStack: "jQuery, AJAX, Express, Node.js, HTML/CSS",
    githubLink: "https://github.com/rachdawn/Tweeter",
  },
  {
    title: "TinyApp",
    date: "October 2023",
    image: "/images/TinyAppLP.png",
    alt: "TinyApp Landing Page",
    description:
      "A single-page application (SPA) that allows users to shorten URLs.",
    techStack: "Express, Node.js, EJS, HTML/CSS",
    githubLink: "https://github.com/rachdawn/TinyApp",
  },
];

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
            fontFamily: "Roboto Mono, monospace",
        //   color: "rgb(234, 205, 207)"
        },
      },
    },
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      {projects.map((project, index) => {
        return (
          <Card
            sx={{
              width: 345,
              bgcolor: "rgb(218,218,218,0.5)",
              color: "#616161",
              fontFamily: "Roboto Mono, monospace",
            }}
            key={index}
          >
            <CardHeader
              sx={{
                fontFamily: "Roboto Mono, monospace",
                letterSpacing: ".3rem",
                fontSize: "3.25dvb",
                fontWeight: 600,
                textWrap: "nowrap",
                padding: "0.75rem",
                textAlign: "end",
                color: "#616161",

              }}
              title={project.title}
              subheader={project.date}
            />
            <Image
              src={project.image}
              alt={project.alt}
              width="345"
              height="225"
            />
            <CardActions disableSpacing sx={{ m: 0, p: 0.5 }}>
              <IconButton
                aria-label="View on Github"
                onClick={() => window.open(project.githubLink)} sx={{ color: "#616161" }}
                >
                <GitHubIcon
                 />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{ color: "#616161" }}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body1" sx={{ color: "#616161" }}>
                  {project.description}
                </Typography>
                <Typography paragraph variant="body1" sx={{ color: "#616161" }}>
                  <b>Tech Stack:</b> {project.techStack}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}
    </ThemeProvider>
  );
}
