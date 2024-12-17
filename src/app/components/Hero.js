"use client";
import * as React from "react";
import styles from "../page.module.css";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Box
        sx={{
          height: { xs: "80dvh", sm: "40dvh" },
          alignContent: "center",
        }}
      >
        <Typography
          variant="body"
          component="h1"
          sx={{
            color: "#C19898",
            letterSpacing: ".2rem",
            fontSize: { xs: "1.125rem", md: "1.5rem" },
            fontWeight: 400,
            textWrap: "nowrap",
            textAlign: "center",
          }}
        >
          my name is rachel little,
        </Typography>
        <Typography
          variant="body"
          component="h2"
          sx={{
            color: "#6d6d69",

            letterSpacing: ".25rem",
            fontSize: { xs: "1rem", md: "1.25rem" },
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          I&apos;m a full-stack developer.
        </Typography>
        <Typography
          variant="body"
          component="h2"
          gutterBottom
          sx={{
            color: "#EED6C4",
            letterSpacing: ".15rem",
            fontSize: { xs: "1.25rem", md: "1.75rem" },
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          I have BIG ideas.
        </Typography>
        <Image
          className={styles.heartBulb}
          src="/images/HeartBulb.png"
          alt="heart lightbulb"
          width={90}
          height={90}
          priority={true}
        />
      </Box>
      <Box
        sx={{
          alignContent: "center",
          display: { xs: "block", md: "none" },
        }}
      >
        <Fab
          href="/#about"
          variant="extended"
          size="medium"
          sx={{
            backgroundColor: "#C19898",
            fontFamily: "Roboto Mono, monospace",
            mb: "2rem",
            "&:hover": {
              backgroundColor: "#EED6C4",
            },
          }}
        >
          Get to know me
          <ExpandMoreIcon />
        </Fab>
      </Box>
    </section>
  );
}
