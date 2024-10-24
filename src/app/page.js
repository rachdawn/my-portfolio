import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import ProjectsSlider from "./components/ProjectsSlider";
// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl" sx={{ pb: 4 }}>
        <Hero />
        <AboutMe />
        <div className={styles.projects} id="projects">
          <Typography
            sx={{
              fontFamily: "Roboto Mono, monospace",
              color: "#616161",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", md: "1.65rem" },
            //   p: 1,
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            Recent Projects
          </Typography>
          <hr />
          <ProjectsSlider />
          {/* <div className={styles.projectCards}>
            <ProjectCard />
          </div> */}
        </div>
      </Container>
    </main>
  );
}
