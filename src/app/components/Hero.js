import styles from "../page.module.css";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Typography
        variant="body"
        component="h1"
        sx={{
          fontFamily: "monospace",
          color: "#707070",
          letterSpacing: ".3rem",
          fontSize: { xs: "1rem", md: "1.75rem"},
          fontWeight: 500,
          textWrap: "nowrap",
        }}
      >
        my name is rachel little,
      </Typography>
      <Typography
        variant="body"
        component="h2"
        gutterBottom
        sx={{
          fontFamily: "monospace",
          color: "#707070",
          letterSpacing: ".3rem",
          fontSize: {xs:"1.75rem", md: "2.25rem"},
          fontWeight: 700,
          textTransform: "uppercase",
          textWrap: "nowrap",
        }}
      >
        I have BIG ideas.
      </Typography>
    </section>
  );
}
