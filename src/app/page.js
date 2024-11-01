import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectsSlider from "./components/ProjectsSlider";
// MUI
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="xl" sx={{ pb: 3 }}>
        <Hero />
        <AboutMe />
        <ProjectsSlider />
      </Container>
    </main>
  );
}
