import styles from "./page.module.css";
import Hero from "./components/Hero";
// import AboutMe from "./components/AboutMe";
import AboutTabs from "./components/AboutTabs";
import ProjectsSlider from "./components/ProjectsSlider";
// MUI
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Container maxWidth="xl" sx={{ mb: 3 }}> */}
        <Hero />
        <AboutTabs />
        {/* <AboutMe /> */}
        {/* <ProjectsSlider /> */}
      {/* </Container> */}
    </main>
  );
}
