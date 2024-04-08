import styles from "./page.module.css";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
// MUI
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main className={styles.main}>
        <Container maxWidth="xl">
            <Hero />
        <div className={styles.projects}>
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
