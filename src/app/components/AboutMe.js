"use client";
import styles from "../page.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function AboutMe() {
  return (
    <section className={styles.about}>
    <Box
      sx={{
        mb: "2rem",
        mx: {xs: "1rem", md: "3rem"},
        display: "flex",
        bgcolor: "rgb(218,218,218,0.5)",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        borderRadius: "1rem",
        flexDirection: { xs: "column", md: "row" },
    }}
    >
      <Box sx={{ p: 1.5, width: { xs: "100%", md: "42%" } }}>
        <Typography
          sx={{
            fontFamily: "Roboto Mono, monospace",
            color: "#616161",
            fontWeight: 600,
            fontSize: "1.1rem",
            p: 1,
            textAlign: "right",
            textTransform: "uppercase",
          }}
        >
          Technologies I Work With:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto Mono, monospace",
            color: "#616161",
            // fontWeight: 600,
            letterSpacing: ".15rem",
            fontSize: "1rem",
            p: 1,
            textAlign: "right",
          }}
        >
          <b>Programming Languages:</b>
          <br />
          JavaScript, Ruby, HTML, CSS, SCSS, SQL
          <br />
          <b>Frameworks & Libraries:</b>
          <br />
          NodeJS, ReactJS, Next.js, Ajax, Express, EJS, jQuery, Rails, Material
          UI
          <br />
          <b>Systems & Databases:</b> <br />
          PostgreSQL, Git, Visual Studio Code, Stripe, Zoho
          <br />
          <b>Testing:</b> <br />
          Mocha, Chai, Jest, Cypress, RSpec
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ p: 1.5, width: { xs: "100%", md: "58%" } }}>
        <Typography
          sx={{
            fontFamily: "Roboto Mono, monospace",
            color: "#616161",
            fontWeight: 600,
            fontSize: "1.1rem",
            p: 1,
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          About Me:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto Mono, monospace",
            color: "#616161",
            fontWeight: 500,
            lineHeight: 1.25,
            letterSpacing: ".15rem",
            fontSize: "1rem",
            p: 1,
          }}
        >
          I&apos;m a full-stack web developer with a passion for crafting
          elegant applications for optimal user experiences. I&apos;m a
          strategic thinker with a versatile background in business
          administration and marketing, ready to bring my unique blend of
          business savviness and programming skills to dynamic projects.
          <br />
          <br />
          My training encompassed programming essentials such as JavaScript, CSS,
          and HTML, alongside in-depth studies in software architecture,
          databases, data modeling, and component-based design.
          <br />
          <br />
          In my free time you can find me spending time with my dogs, friends, &
          family, tending to my 30+ houseplants, watching the latest true crime
          documentary, or working on personal projects.
        </Typography>
      </Box>
    </Box>
    </section>
  );
}
