import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
// MUI
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl" sx={{ pb: 8 }}>
        <Hero />
        <div className={styles.about}>
          {/* <h2>About Me</h2> */}
          {/* <hr /> */}
          <AboutMe />
        </div>
        <div className={styles.projects} id="projects">
          <h2>Recent Projects</h2>
          <hr />
          <div className={styles.projectCards}>
            <ProjectCard />
          </div>
        </div>
      </Container>
    </main>
  );
}
