import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";
import ProjectsSlider from "./components/ProjectsSlider";
// MUI
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl" sx={{ pb: 4 }}>
        <Hero />
        <AboutMe />
        <div className={styles.projects} id="projects">
          <h2>Recent Projects</h2>
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
