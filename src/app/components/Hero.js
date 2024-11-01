"use client";
import * as React from "react";
import styles from "../page.module.css";
import Typography from "@mui/material/Typography";
// import { TransitionGroup } from "react-transition-group";
// import Slide from "@mui/material/Slide";

export default function Hero() {
//   const [slideIn, setSlideIn] = React.useState(false);

  // const handleChange = () => {
  //   setSlideIn(true);
  // };

  return (
    <section className={styles.hero}>
      {/* <TransitionGroup>
        <Slide direction="left" in={true} mountOnEnter={true}> */}
          <Typography
            variant="body"
            component="h1"
            sx={{
              color: "#707070",
              letterSpacing: ".2rem",
              fontSize: { xs: "1rem", md: "1.75rem" },
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
              color: "#707070",
              letterSpacing: ".25rem",
              fontSize: { xs: "1.65rem", md: "2.25rem" },
              fontWeight: 700,
              textTransform: "uppercase",
              textWrap: "nowrap",
            }}
          >
            I have BIG ideas.
          </Typography>
        {/* </Slide>
      </TransitionGroup> */}
    </section>
  );
}
